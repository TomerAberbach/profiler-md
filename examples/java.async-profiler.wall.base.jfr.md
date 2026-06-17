# Sampling profile

Collected 5,140 samples.

| Category |     % | Samples |
| -------- | ----: | ------: |
| ours     | 96.1% |   4,938 |
| stdlib   |  3.9% |     202 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                                                  | Location                                                 |
| ----: | ------: | --------------------------------------------------------- | -------------------------------------------------------- |
| 50.0% |   2,571 | `__psynch_cvwait()`                                       | libsystem_kernel.dylib                                   |
| 24.0% |   1,232 | `semaphore_wait_trap()`                                   | libsystem_kernel.dylib                                   |
|  4.4% |     225 | `accumulate(Double[], double[])`                          | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  2.6% |     134 | `distance(Double[], Double[])`                            | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  2.6% |     133 | `findNearestCentroid()`                                   | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  2.5% |     129 | `mach_msg2_trap()`                                        | libsystem_kernel.dylib                                   |
|  2.5% |     129 | `__ulock_wait()`                                          | libsystem_kernel.dylib                                   |
|  2.0% |     104 | `vectorSum()`                                             | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  0.9% |      48 | `elementData(int)`                                        | java.util.ArrayList                                      |
|  0.8% |      41 | `doubleValue()`                                           | java.lang.Double                                         |
|  0.6% |      33 | `computeIfAbsent(Object, Function)`                       | java.util.HashMap                                        |
|  0.4% |      19 | `collectClusters(int[])`                                  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.4% |      18 | `grow(int)`                                               | java.util.ArrayList                                      |
|  0.3% |      15 | `zero_blocks()`                                           | `<unknown>`                                              |
|  0.3% |      14 | `__psynch_cvsignal()`                                     | libsystem_kernel.dylib                                   |
|  0.3% |      14 | `add(Object, Object[], int)`                              | java.util.ArrayList                                      |
|  0.2% |       9 | `__psynch_mutexwait()`                                    | libsystem_kernel.dylib                                   |
|  0.1% |       7 | `_platform_bzero()`                                       | libsystem_platform.dylib                                 |
|  0.1% |       5 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | java.util.concurrent.ForkJoinPool                        |
|  0.1% |       5 | `hash(Object)`                                            | java.util.HashMap                                        |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|     % | Samples | Location                                                    |
| ----: | ------: | ----------------------------------------------------------- |
| 84.4% |     190 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:412 |
| 15.6% |      35 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:411 |

##### `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Location                                                     |
| ----: | ------: | ------------------------------------------------------------ |
| 50.0% |      67 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:249 |
| 41.0% |      55 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:248 |
|  9.0% |      12 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:250 |

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Location                                                     |
| ----: | ------: | ------------------------------------------------------------ |
| 43.6% |      58 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:229 |
| 36.1% |      48 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:231 |
| 16.5% |      22 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:230 |
|  2.3% |       3 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:226 |
|  1.5% |       2 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:225 |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|     % | Samples | Location                                                    |
| ----: | ------: | ----------------------------------------------------------- |
| 84.6% |      88 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:403 |
| 15.4% |      16 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:402 |

##### `elementData(int)` (java.util.ArrayList)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |      48 | java.util.ArrayList:411 |

##### `doubleValue()` (java.lang.Double)

|      % | Samples | Location              |
| -----: | ------: | --------------------- |
| 100.0% |      41 | java.lang.Double:1001 |

##### `computeIfAbsent(Object, Function)` (java.util.HashMap)

|     % | Samples | Location               |
| ----: | ------: | ---------------------- |
| 27.3% |       9 | java.util.HashMap:1213 |
| 24.2% |       8 | java.util.HashMap:1204 |
| 15.2% |       5 | java.util.HashMap:1197 |
|  9.1% |       3 | java.util.HashMap:1208 |
|  9.1% |       3 | java.util.HashMap:1228 |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Location                                                     |
| ----: | ------: | ------------------------------------------------------------ |
| 36.8% |       7 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:213 |
| 21.1% |       4 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:212 |
| 15.8% |       3 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:211 |
| 15.8% |       3 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:214 |
|  5.3% |       1 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215 |

##### `grow(int)` (java.util.ArrayList)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |      18 | java.util.ArrayList:239 |

##### `add(Object, Object[], int)` (java.util.ArrayList)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 85.7% |      12 | java.util.ArrayList:482 |
| 14.3% |       2 | java.util.ArrayList:484 |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (java.util.concurrent.ForkJoinPool)

|     % | Samples | Location                               |
| ----: | ------: | -------------------------------------- |
| 40.0% |       2 | java.util.concurrent.ForkJoinPool:2058 |
| 20.0% |       1 | java.util.concurrent.ForkJoinPool:2053 |
| 20.0% |       1 | java.util.concurrent.ForkJoinPool:2055 |
| 20.0% |       1 | java.util.concurrent.ForkJoinPool:2051 |

##### `hash(Object)` (java.util.HashMap)

|      % | Samples | Location              |
| -----: | ------: | --------------------- |
| 100.0% |       5 | java.util.HashMap:338 |

#### Callers

Callers ranked by contribution to each function's self samples. Caller attribution may be imprecise due to inlining.

##### `__psynch_cvwait()` (libsystem_kernel.dylib)

|     % | Samples | Caller                    | Location               |
| ----: | ------: | ------------------------- | ---------------------- |
| 55.6% |   1,429 | `PlatformMonitor::wait()` | libjvm.dylib           |
| 34.4% |     884 | `Parker::park()`          | libjvm.dylib           |
|  5.0% |     129 | `Profiler::timerLoop()`   | libasyncProfiler.dylib |
|  5.0% |     129 | `PlatformEvent::park()`   | libjvm.dylib           |

##### `semaphore_wait_trap()` (libsystem_kernel.dylib)

|     % | Samples | Caller                             | Location     |
| ----: | ------: | ---------------------------------- | ------------ |
| 88.2% |   1,087 | `WorkerThread::run()`              | libjvm.dylib |
| 10.5% |     129 | `os::signal_wait()`                | libjvm.dylib |
|  1.1% |      13 | `GenericWaitBarrier::Cell::wait()` | libjvm.dylib |
|  0.2% |       3 | `WorkerThreads::run_task()`        | libjvm.dylib |

##### `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Caller        | Location                                                |
| -----: | ------: | ------------- | ------------------------------------------------------- |
| 100.0% |     225 | `vectorSum()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Caller                  | Location                                                 |
| -----: | ------: | ----------------------- | -------------------------------------------------------- |
| 100.0% |     134 | `findNearestCentroid()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Caller              | Location                                                 |
| -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% |     133 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `mach_msg2_trap()` (libsystem_kernel.dylib)

|      % | Samples | Caller                 | Location               |
| -----: | ------: | ---------------------- | ---------------------- |
| 100.0% |     129 | `mach_msg_overwrite()` | libsystem_kernel.dylib |

##### `__ulock_wait()` (libsystem_kernel.dylib)

|      % | Samples | Caller                      | Location     |
| -----: | ------: | --------------------------- | ------------ |
| 100.0% |     129 | `CallJavaMainInNewThread()` | libjli.dylib |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Caller              | Location                                                |
| -----: | ------: | ------------------- | ------------------------------------------------------- |
| 100.0% |     104 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `elementData(int)` (java.util.ArrayList)

|      % | Samples | Caller     | Location            |
| -----: | ------: | ---------- | ------------------- |
| 100.0% |      48 | `get(int)` | java.util.ArrayList |

##### `doubleValue()` (java.lang.Double)

|     % | Samples | Caller                           | Location                                                 |
| ----: | ------: | -------------------------------- | -------------------------------------------------------- |
| 61.0% |      25 | `accumulate(Double[], double[])` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| 39.0% |      16 | `distance(Double[], Double[])`   | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `computeIfAbsent(Object, Function)` (java.util.HashMap)

|      % | Samples | Caller                   | Location                                                 |
| -----: | ------: | ------------------------ | -------------------------------------------------------- |
| 100.0% |      33 | `collectClusters(int[])` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Caller              | Location                                                 |
| -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% |      19 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `grow(int)` (java.util.ArrayList)

|      % | Samples | Caller   | Location            |
| -----: | ------: | -------- | ------------------- |
| 100.0% |      18 | `grow()` | java.util.ArrayList |

##### `zero_blocks()` (`<unknown>`)

|     % | Samples | Caller                              | Location            |
| ----: | ------: | ----------------------------------- | ------------------- |
| 80.0% |      12 | `merge(Object, Object, BiFunction)` | java.util.HashMap   |
| 20.0% |       3 | `grow(int)`                         | java.util.ArrayList |

##### `__psynch_cvsignal()` (libsystem_kernel.dylib)

|      % | Samples | Caller            | Location     |
| -----: | ------: | ----------------- | ------------ |
| 100.0% |      14 | `Unsafe_Unpark()` | libjvm.dylib |

##### `add(Object, Object[], int)` (java.util.ArrayList)

|      % | Samples | Caller        | Location            |
| -----: | ------: | ------------- | ------------------- |
| 100.0% |      14 | `add(Object)` | java.util.ArrayList |

##### `__psynch_mutexwait()` (libsystem_kernel.dylib)

|      % | Samples | Caller                                | Location                |
| -----: | ------: | ------------------------------------- | ----------------------- |
| 100.0% |       9 | `_pthread_mutex_firstfit_lock_slow()` | libsystem_pthread.dylib |

##### `_platform_bzero()` (libsystem_platform.dylib)

|      % | Samples | Caller                     | Location     |
| -----: | ------: | -------------------------- | ------------ |
| 100.0% |       7 | `MemAllocator::allocate()` | libjvm.dylib |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (java.util.concurrent.ForkJoinPool)

|      % | Samples | Caller                 | Location                          |
| -----: | ------: | ---------------------- | --------------------------------- |
| 100.0% |       5 | `awaitDone(int, long)` | java.util.concurrent.ForkJoinTask |

##### `hash(Object)` (java.util.HashMap)

|      % | Samples | Caller                              | Location          |
| -----: | ------: | ----------------------------------- | ----------------- |
| 100.0% |       5 | `computeIfAbsent(Object, Function)` | java.util.HashMap |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                             | Location                                             |
| ----: | ------: | ---------------------------------------------------- | ---------------------------------------------------- |
| 54.6% |   2,804 | `_pthread_start()`                                   | libsystem_pthread.dylib                              |
| 54.6% |   2,804 | `thread_start()`                                     | libsystem_pthread.dylib                              |
| 52.0% |   2,674 | `Thread::call_run()`                                 | libjvm.dylib                                         |
| 52.0% |   2,674 | `thread_native_entry()`                              | libjvm.dylib                                         |
| 50.0% |   2,571 | `__psynch_cvwait()`                                  | libsystem_kernel.dylib                               |
| 30.3% |   1,555 | `runWorker(ForkJoinPool$WorkQueue)`                  | java.util.concurrent.ForkJoinPool                    |
| 30.3% |   1,555 | `run()`                                              | java.util.concurrent.ForkJoinWorkerThread            |
| 27.8% |   1,430 | `PlatformMonitor::wait()`                            | libjvm.dylib                                         |
| 24.0% |   1,232 | `semaphore_wait_trap()`                              | libsystem_kernel.dylib                               |
| 23.4% |   1,203 | `awaitDone(int, long)`                               | java.util.concurrent.ForkJoinTask                    |
| 22.1% |   1,136 | `scan(ForkJoinPool$WorkQueue, int, int)`             | java.util.concurrent.ForkJoinPool                    |
| 22.1% |   1,135 | `doExec()`                                           | java.util.concurrent.ForkJoinTask                    |
| 22.1% |   1,135 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool$WorkQueue          |
| 22.0% |   1,130 | `compute()`                                          | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |
| 22.0% |   1,130 | `exec()`                                             | java.util.concurrent.RecursiveTask                   |
| 21.5% |   1,105 | `WorkerThread::run()`                                | libjvm.dylib                                         |
| 21.1% |   1,087 | `join()`                                             | java.util.concurrent.ForkJoinTask                    |
| 19.9% |   1,021 | `Monitor::wait_without_safepoint_check()`            | libjvm.dylib                                         |
| 18.9% |     970 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | java.util.concurrent.ForkJoinPool$WorkQueue          |
| 18.1% |     932 | `JavaThread::thread_main_inner()`                    | libjvm.dylib                                         |

#### Callees

Callees ranked by contribution to each function's total samples. Callee attribution may be imprecise due to inlining.

##### `_pthread_start()` (libsystem_pthread.dylib)

|     % | Samples | Callee                  | Location     |
| ----: | ------: | ----------------------- | ------------ |
| 95.4% |   2,674 | `thread_native_entry()` | libjvm.dylib |
|  4.6% |     129 | `apple_main()`          | libjli.dylib |
|  0.0% |       1 | `ThreadJavaMain()`      | libjli.dylib |

##### `thread_start()` (libsystem_pthread.dylib)

|      % | Samples | Callee             | Location                |
| -----: | ------: | ------------------ | ----------------------- |
| 100.0% |   2,804 | `_pthread_start()` | libsystem_pthread.dylib |

##### `Thread::call_run()` (libjvm.dylib)

|     % | Samples | Callee                            | Location     |
| ----: | ------: | --------------------------------- | ------------ |
| 41.3% |   1,105 | `WorkerThread::run()`             | libjvm.dylib |
| 34.9% |     932 | `JavaThread::thread_main_inner()` | libjvm.dylib |
| 14.2% |     379 | `ConcurrentGCThread::run()`       | libjvm.dylib |
|  4.8% |     129 | `WatcherThread::run()`            | libjvm.dylib |
|  4.8% |     129 | `VMThread::run()`                 | libjvm.dylib |

##### `thread_native_entry()` (libjvm.dylib)

|      % | Samples | Callee               | Location     |
| -----: | ------: | -------------------- | ------------ |
| 100.0% |   2,674 | `Thread::call_run()` | libjvm.dylib |

##### `runWorker(ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool)

|     % | Samples | Callee                                   | Location                          |
| ----: | ------: | ---------------------------------------- | --------------------------------- |
| 73.1% |   1,136 | `scan(ForkJoinPool$WorkQueue, int, int)` | java.util.concurrent.ForkJoinPool |
| 26.9% |     419 | `awaitWork(ForkJoinPool$WorkQueue)`      | java.util.concurrent.ForkJoinPool |

##### `run()` (java.util.concurrent.ForkJoinWorkerThread)

|      % | Samples | Callee                              | Location                          |
| -----: | ------: | ----------------------------------- | --------------------------------- |
| 100.0% |   1,555 | `runWorker(ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool |

##### `PlatformMonitor::wait()` (libjvm.dylib)

|     % | Samples | Callee                 | Location                |
| ----: | ------: | ---------------------- | ----------------------- |
| 99.9% |   1,429 | `__psynch_cvwait()`    | libsystem_kernel.dylib  |
|  0.1% |       1 | `_pthread_cond_wait()` | libsystem_pthread.dylib |

##### `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask)

|     % | Samples | Callee                                                    | Location                                    |
| ----: | ------: | --------------------------------------------------------- | ------------------------------------------- |
| 80.6% |     970 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | java.util.concurrent.ForkJoinPool$WorkQueue |
| 28.5% |     343 | `park()`                                                  | java.util.concurrent.locks.LockSupport      |
| 22.4% |     269 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | java.util.concurrent.ForkJoinPool           |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)

|     % | Samples | Callee                                               | Location                                    |
| ----: | ------: | ---------------------------------------------------- | ------------------------------------------- |
| 99.9% |   1,135 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool$WorkQueue |
|  0.1% |       1 | `signalWork()`                                       | java.util.concurrent.ForkJoinPool           |

##### `doExec()` (java.util.concurrent.ForkJoinTask)

|     % | Samples | Callee      | Location                                          |
| ----: | ------: | ----------- | ------------------------------------------------- |
| 99.6% |   1,130 | `exec()`    | java.util.concurrent.RecursiveTask                |
| 10.4% |     118 | `exec()`    | java.util.concurrent.ForkJoinTask$AdaptedCallable |
|  1.1% |      12 | `setDone()` | java.util.concurrent.ForkJoinTask                 |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue)

|      % | Samples | Callee     | Location                          |
| -----: | ------: | ---------- | --------------------------------- |
| 100.0% |   1,135 | `doExec()` | java.util.concurrent.ForkJoinTask |

##### `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)

|     % | Samples | Callee                           | Location                                                 |
| ----: | ------: | -------------------------------- | -------------------------------------------------------- |
| 96.2% |   1,087 | `join()`                         | java.util.concurrent.ForkJoinTask                        |
| 36.6% |     414 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 34.1% |     385 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| 16.9% |     191 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
|  7.1% |      80 | `combineResults(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `exec()` (java.util.concurrent.RecursiveTask)

|      % | Samples | Callee      | Location                                             |
| -----: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% |   1,130 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `WorkerThread::run()` (libjvm.dylib)

|     % | Samples | Callee                              | Location               |
| ----: | ------: | ----------------------------------- | ---------------------- |
| 98.4% |   1,087 | `semaphore_wait_trap()`             | libsystem_kernel.dylib |
|  1.1% |      12 | `G1EvacuateRegionsBaseTask::work()` | libjvm.dylib           |
|  0.4% |       4 | `G1FullGCMarkTask::work()`          | libjvm.dylib           |
|  0.1% |       1 | `G1FullGCPrepareTask::work()`       | libjvm.dylib           |
|  0.1% |       1 | `G1MergeHeapRootsTask::work()`      | libjvm.dylib           |

##### `join()` (java.util.concurrent.ForkJoinTask)

|      % | Samples | Callee                 | Location                          |
| -----: | ------: | ---------------------- | --------------------------------- |
| 100.0% |   1,087 | `awaitDone(int, long)` | java.util.concurrent.ForkJoinTask |

##### `Monitor::wait_without_safepoint_check()` (libjvm.dylib)

|      % | Samples | Callee                    | Location     |
| -----: | ------: | ------------------------- | ------------ |
| 100.0% |   1,021 | `PlatformMonitor::wait()` | libjvm.dylib |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue)

|      % | Samples | Callee                                 | Location                                    |
| -----: | ------: | -------------------------------------- | ------------------------------------------- |
| 100.0% |     970 | `doExec()`                             | java.util.concurrent.ForkJoinTask           |
|   0.1% |       1 | `getAndClearSlot(ForkJoinTask[], int)` | java.util.concurrent.ForkJoinPool$WorkQueue |

##### `JavaThread::thread_main_inner()` (libjvm.dylib)

|     % | Samples | Callee                                                     | Location     |
| ----: | ------: | ---------------------------------------------------------- | ------------ |
| 30.9% |     288 | `CompileBroker::compiler_thread_loop()`                    | libjvm.dylib |
| 13.8% |     129 | `JvmtiAgentThread::start_function_wrapper()`               | libjvm.dylib |
| 13.8% |     129 | `signal_thread_entry()`                                    | libjvm.dylib |
| 13.8% |     129 | `MonitorDeflationThread::monitor_deflation_thread_entry()` | libjvm.dylib |
| 13.8% |     129 | `ServiceThread::service_thread_entry()`                    | libjvm.dylib |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 21.1% |   1,087 | `semaphore_wait_trap()` (libsystem_kernel.dylib) ← `WorkerThread::run()` (libjvm.dylib) ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  7.7% |     397 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `Parker::park()` (libjvm.dylib) ← `Unsafe_Park()` ← `park(boolean, long)` (jdk.internal.misc.Unsafe) ← `park()` (java.util.concurrent.locks.LockSupport) ← `awaitWork(ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  5.3% |     272 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `PlatformMonitor::wait()` (libjvm.dylib) ← `Monitor::wait()` ← `CompileQueue::get()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  2.5% |     129 | `mach_msg2_trap()` (libsystem_kernel.dylib) ← `mach_msg_overwrite()` ← `mach_msg()` ← `__CFRunLoopServiceMachPort()` (CoreFoundation) ← `__CFRunLoopRun()` ← `CFRunLoopRunSpecific()` ← `CreateExecutionEnvironment()` (libjli.dylib) ← `JLI_Launch()` ← `main()` (java)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  2.5% |     129 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `Profiler::timerLoop()` (libasyncProfiler.dylib) ← `JvmtiAgentThread::start_function_wrapper()` (libjvm.dylib) ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  2.5% |     129 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `PlatformMonitor::wait()` (libjvm.dylib) ← `Monitor::wait_without_safepoint_check()` ← `WatcherThread::sleep()` ← `WatcherThread::run()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  2.5% |     129 | `semaphore_wait_trap()` (libsystem_kernel.dylib) ← `os::signal_wait()` (libjvm.dylib) ← `signal_thread_entry()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  2.5% |     129 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `PlatformMonitor::wait()` (libjvm.dylib) ← `Monitor::wait_without_safepoint_check()` ← `MonitorDeflationThread::monitor_deflation_thread_entry()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  2.5% |     129 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `PlatformMonitor::wait()` (libjvm.dylib) ← `Monitor::wait_without_safepoint_check()` ← `G1ServiceThread::wait_for_task()` ← `G1ServiceThread::run_service()` ← `ConcurrentGCThread::run()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  2.5% |     129 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `PlatformMonitor::wait()` (libjvm.dylib) ← `Monitor::wait_without_safepoint_check()` ← `ServiceThread::service_thread_entry()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  2.5% |     129 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `PlatformMonitor::wait()` (libjvm.dylib) ← `Monitor::wait()` ← `JVM_WaitForReferencePendingList()` ← `waitForReferencePendingList()` (java.lang.ref.Reference) ← `processPendingReferences()` ← `run()` (java.lang.ref.Reference$ReferenceHandler)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  2.5% |     129 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `PlatformEvent::park()` (libjvm.dylib) ← `ObjectMonitor::wait()` ← `ObjectSynchronizer::wait()` ← `JVM_MonitorWait()` ← `wait0(long)` (java.lang.Object) ← `wait(long)` ← `wait()` ← `await()` (java.lang.ref.NativeReferenceQueue) ← `remove0()` (java.lang.ref.ReferenceQueue) ← `remove()` (java.lang.ref.NativeReferenceQueue) ← `run()` (java.lang.ref.Finalizer$FinalizerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  2.5% |     129 | `__ulock_wait()` (libsystem_kernel.dylib) ← `CallJavaMainInNewThread()` (libjli.dylib) ← `ContinueInNewThread()` ← `JLI_Launch()` ← `main()` (java) ← `apple_main()` (libjli.dylib) ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  2.5% |     129 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `PlatformMonitor::wait()` (libjvm.dylib) ← `Monitor::wait_without_safepoint_check()` ← `G1ConcurrentMarkThread::run_service()` ← `ConcurrentGCThread::run()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  2.5% |     128 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `PlatformMonitor::wait()` (libjvm.dylib) ← `Monitor::wait_without_safepoint_check()` ← `NotificationThread::notification_thread_entry()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  2.5% |     128 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `Parker::park()` (libjvm.dylib) ← `Unsafe_Park()` ← `park(boolean, long)` (jdk.internal.misc.Unsafe) ← `parkNanos(Object, long)` (java.util.concurrent.locks.LockSupport) ← `await(long, TimeUnit)` (java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject) ← `await(long)` (java.lang.ref.ReferenceQueue) ← `remove0(long)` ← `remove(long)` ← `run()` (jdk.internal.ref.CleanerImpl) ← `runWith(Object, Runnable)` (java.lang.Thread) ← `run()` ← `run()` (jdk.internal.misc.InnocuousThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  2.5% |     126 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `PlatformMonitor::wait()` (libjvm.dylib) ← `Monitor::wait_without_safepoint_check()` ← `VMThread::wait_for_operation()` ← `VMThread::run()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  2.4% |     121 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `PlatformMonitor::wait()` (libjvm.dylib) ← `Monitor::wait_without_safepoint_check()` ← `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers()` ← `G1ConcurrentRefineThread::run_service()` ← `ConcurrentGCThread::run()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  2.3% |     116 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `Parker::park()` (libjvm.dylib) ← `Unsafe_Park()` ← `park(boolean, long)` (jdk.internal.misc.Unsafe) ← `park()` (java.util.concurrent.locks.LockSupport) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `get()` ← `run(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `$anonfun$1(int)` (org.renaissance.jdk.concurrent.FjKmeans) ← `$anonfun$adapted$1(Object)` ← `apply(Object)` (org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000700117ae68) ← `map(Function1)` (scala.collection.immutable.Range) ← `run(BenchmarkContext)` (org.renaissance.jdk.concurrent.FjKmeans) ← `executeOperation(int)` (org.renaissance.harness.ExecutionDriver) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (org.renaissance.harness.RenaissanceSuite$) ← `applyVoid(Object)` (org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111efe0) ← `apply(Object)` (scala.runtime.function.JProcedure1) ← `apply(Object)` ← `foreach(Function1)` (scala.collection.immutable.List) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invokeStatic(Object, Object)` (java.lang.invoke.LambdaForm$DMH.0x0000007001004800) ← `invoke(Object, Object, Object)` (java.lang.invoke.LambdaForm$MH.0x0000007001009800) ← `invokeExact_MT(Object, Object, Object, Object)` (java.lang.invoke.Invokers$Holder) ← `invokeImpl(Object, Object[])` (jdk.internal.reflect.DirectMethodHandleAccessor) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (java.lang.reflect.Method) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (org.renaissance.core.Launcher) ← `launchHarnessClass(String, String[])` ← `main(String[])` |
|  1.7% |      88 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `Parker::park()` (libjvm.dylib) ← `Unsafe_Park()` ← `park(boolean, long)` (jdk.internal.misc.Unsafe) ← `park()` (java.util.concurrent.locks.LockSupport) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

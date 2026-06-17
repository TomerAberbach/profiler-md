# Sampling profile diff

5,188 samples → 5,107 samples (-81 samples, -1.6%).

| Category | Change | Delta |             % |       Samples |
| -------- | -----: | ----: | ------------: | ------------: |
| ours     |  -0.9% |   -44 | 94.3% → 94.9% | 4,893 → 4,849 |
| stdlib   | -12.5% |   -37 |   5.7% → 5.1% |     295 → 258 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |     Samples | Function                                                                            | Location                                                 |
| ------: | ----: | ------------: | ----------: | ----------------------------------------------------------------------------------- | -------------------------------------------------------- |
|  +25.7% |  +131 |  9.8% → 12.5% |   509 → 640 | `__psynch_cvwait()`                                                                 | libsystem_kernel.dylib                                   |
|  +12.5% |  +118 | 18.2% → 20.8% | 943 → 1,061 | `accumulate(Double[], double[])`                                                    | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  +31.4% |   +11 |   0.7% → 0.9% |     35 → 46 | `__psynch_cvsignal()`                                                               | libsystem_kernel.dylib                                   |
| +900.0% |    +9 |   0.0% → 0.2% |      1 → 10 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region()` | libjvm.dylib                                             |
| +100.0% |    +7 |   0.1% → 0.3% |      7 → 14 | `merge(Object, Object, BiFunction)`                                                 | java.util.HashMap                                        |
|  +75.0% |    +6 |   0.2% → 0.3% |      8 → 14 | `tlv_get_addr()`                                                                    | libdyld.dylib                                            |
|     new |    +5 |   0.0% → 0.1% |       0 → 5 | `scan(ForkJoinPool$WorkQueue, int, int)`                                            | java.util.concurrent.ForkJoinPool                        |
|  +23.8% |    +5 |   0.4% → 0.5% |     21 → 26 | `__psynch_mutexwait()`                                                              | libsystem_kernel.dylib                                   |
| +500.0% |    +5 |   0.0% → 0.1% |       1 → 6 | `createSubtask(int, int)`                                                           | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|   +5.8% |    +4 |   1.3% → 1.4% |     69 → 73 | `add(Object, Object[], int)`                                                        | java.util.ArrayList                                      |
|     new |    +4 |   0.0% → 0.1% |       0 → 4 | `combineResults(Object, Object)`                                                    | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| +100.0% |    +3 |          0.1% |       3 → 6 | `runWorker(ForkJoinPool$WorkQueue)`                                                 | java.util.concurrent.ForkJoinPool                        |
|   +2.8% |    +3 |   2.1% → 2.2% |   108 → 111 | `collectClusters(int[])`                                                            | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|     new |    +3 |   0.0% → 0.1% |       0 → 3 | `vframe::java_sender()`                                                             | libjvm.dylib                                             |
| +300.0% |    +3 |   0.0% → 0.1% |       1 → 4 | `_kernelrpc_mach_port_deallocate_trap()`                                            | libsystem_kernel.dylib                                   |
|  +75.0% |    +3 |          0.1% |       4 → 7 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>()`                   | libjvm.dylib                                             |
|     new |    +3 |   0.0% → 0.1% |       0 → 3 | `push(ForkJoinTask, ForkJoinPool, boolean)`                                         | java.util.concurrent.ForkJoinPool$WorkQueue              |
|     new |    +3 |   0.0% → 0.1% |       0 → 3 | `bsearch()`                                                                         | libsystem_c.dylib                                        |
|     new |    +3 |   0.0% → 0.1% |       0 → 3 | `_malloc_zone_malloc()`                                                             | libsystem_malloc.dylib                                   |
|     new |    +3 |   0.0% → 0.1% |       0 → 3 | `pthread_testcancel()`                                                              | libsystem_pthread.dylib                                  |

#### Progressions

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                                                                          | Location                                                 |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
|  -21.0% |  -103 |   9.5% → 7.6% | 491 → 388 | `findNearestCentroid()`                                                                           | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  -13.5% |   -76 |  10.8% → 9.5% | 562 → 486 | `vectorSum()`                                                                                     | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|   -5.2% |   -51 | 18.9% → 18.2% | 983 → 932 | `distance(Double[], Double[])`                                                                    | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  -18.7% |   -35 |   3.6% → 3.0% | 187 → 152 | `elementData(int)`                                                                                | java.util.ArrayList                                      |
|  -31.3% |   -10 |   0.6% → 0.4% |   32 → 22 | `pthread_jit_write_protect_np()`                                                                  | libsystem_pthread.dylib                                  |
|  -30.0% |    -9 |   0.6% → 0.4% |   30 → 21 | `hash(Object)`                                                                                    | java.util.HashMap                                        |
|  -52.9% |    -9 |   0.3% → 0.2% |    17 → 8 | `ScopeDesc::decode_body()`                                                                        | libjvm.dylib                                             |
|  -56.3% |    -9 |   0.3% → 0.1% |    16 → 7 | `G1ParScanThreadState::do_copy_to_survivor_space()`                                               | libjvm.dylib                                             |
|   -5.4% |    -8 |   2.8% → 2.7% | 147 → 139 | `computeIfAbsent(Object, Function)`                                                               | java.util.HashMap                                        |
|  -11.9% |    -8 |   1.3% → 1.2% |   67 → 59 | `zero_blocks()`                                                                                   | `<unknown>`                                              |
| removed |    -8 |   0.2% → 0.0% |     8 → 0 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>()`                                 | libjvm.dylib                                             |
|  -38.9% |    -7 |   0.3% → 0.2% |   18 → 11 | `_platform_bzero()`                                                                               | libsystem_platform.dylib                                 |
| removed |    -7 |   0.1% → 0.0% |     7 → 0 | `void OopOopIterateDispatch<G1AdjustClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>()` | libjvm.dylib                                             |
|  -21.4% |    -6 |   0.5% → 0.4% |   28 → 22 | `grow(int)`                                                                                       | java.util.ArrayList                                      |
|  -40.0% |    -6 |   0.3% → 0.2% |    15 → 9 | `thread_self_trap()`                                                                              | libsystem_kernel.dylib                                   |
|  -41.7% |    -5 |   0.2% → 0.1% |    12 → 7 | `_platform_memmove()`                                                                             | libsystem_platform.dylib                                 |
| removed |    -5 |   0.1% → 0.0% |     5 → 0 | `Mutex::unlock()`                                                                                 | libjvm.dylib                                             |
|   -2.8% |    -4 |   2.8% → 2.7% | 143 → 139 | `doubleValue()`                                                                                   | java.lang.Double                                         |
|  -28.6% |    -4 |   0.3% → 0.2% |   14 → 10 | `semaphore_wait_trap()`                                                                           | libsystem_kernel.dylib                                   |
|  -80.0% |    -4 |   0.1% → 0.0% |     5 → 1 | `__psynch_mutexdrop()`                                                                            | libsystem_kernel.dylib                                   |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

| Change | Delta |             % |       Samples | Function                                                  | Location                                                             |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------- | -------------------------------------------------------------------- |
|    new |  +472 |   0.0% → 9.2% |       0 → 472 | `call()`                                                  | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801183d68 |
|    new |  +380 |   0.0% → 7.4% |       0 → 380 | `accept(Object, Object)`                                  | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88 |
|    new |  +295 |   0.0% → 5.8% |       0 → 295 | `apply(Object, Object)`                                   | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0 |
| +27.0% |  +136 |  9.7% → 12.5% |     503 → 639 | `Unsafe_Park()`                                           | libjvm.dylib                                                         |
| +25.9% |  +135 | 10.1% → 12.9% |     522 → 657 | `park()`                                                  | java.util.concurrent.locks.LockSupport                               |
| +26.9% |  +133 |  9.5% → 12.3% |     495 → 628 | `Parker::park()`                                          | libjvm.dylib                                                         |
| +24.9% |  +132 | 10.2% → 13.0% |     530 → 662 | `park(boolean, long)`                                     | jdk.internal.misc.Unsafe                                             |
| +25.7% |  +131 |  9.8% → 12.5% |     509 → 640 | `__psynch_cvwait()`                                       | libsystem_kernel.dylib                                               |
| +24.9% |  +131 | 10.1% → 12.9% |     526 → 657 | `LockTracer::UnsafeParkHook()`                            | libasyncProfiler.dylib                                               |
| +60.2% |  +118 |   3.8% → 6.1% |     196 → 314 | `awaitWork(ForkJoinPool$WorkQueue)`                       | java.util.concurrent.ForkJoinPool                                    |
| +10.2% |  +110 | 20.7% → 23.2% | 1,075 → 1,185 | `accumulate(Double[], double[])`                          | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask              |
|  +4.8% |   +52 | 20.7% → 22.0% | 1,074 → 1,126 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | java.util.concurrent.ForkJoinPool                                    |
|    new |   +32 |   0.0% → 0.6% |        0 → 32 | `invokeStatic(Object, Object)`                            | java.lang.invoke.LambdaForm$DMH.0x000000c801004800                   |
|    new |   +32 |   0.0% → 0.6% |        0 → 32 | `invoke(Object, Object, Object)`                          | java.lang.invoke.LambdaForm$MH.0x000000c801009800                    |
|    new |   +17 |   0.0% → 0.3% |        0 → 17 | `applyVoid(Object)`                                       | org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000c80111efe0 |
|  +0.9% |   +16 | 33.5% → 34.4% | 1,740 → 1,756 | `vectorSum()`                                             | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask              |
|  +0.9% |   +15 | 33.6% → 34.4% | 1,741 → 1,756 | `computeDirectly()`                                       | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask              |
| +31.4% |   +11 |   0.7% → 0.9% |       35 → 46 | `__psynch_cvsignal()`                                     | libsystem_kernel.dylib                                               |
| +26.8% |   +11 |   0.8% → 1.0% |       41 → 52 | `Unsafe_Unpark()`                                         | libjvm.dylib                                                         |
| +26.2% |   +11 |   0.8% → 1.0% |       42 → 53 | `unpark(Object)`                                          | jdk.internal.misc.Unsafe                                             |

#### Progressions

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |       Samples | Function                                             | Location                                                             |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------- | -------------------------------------------------------------------- |
| removed |  -503 |   9.7% → 0.0% |       503 → 0 | `call()`                                             | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68 |
| removed |  -427 |   8.2% → 0.0% |       427 → 0 | `accept(Object, Object)`                             | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460 |
| removed |  -327 |   6.3% → 0.0% |       327 → 0 | `apply(Object, Object)`                              | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38 |
|   -9.9% |  -208 | 40.4% → 37.0% | 2,097 → 1,889 | `computeDirectly()`                                  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|   -4.3% |  -204 | 90.7% → 88.2% | 4,708 → 4,504 | `exec()`                                             | java.util.concurrent.RecursiveTask                                   |
|   -4.3% |  -203 | 90.7% → 88.2% | 4,707 → 4,504 | `compute()`                                          | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                 |
|   -4.2% |  -200 | 91.1% → 88.6% | 4,727 → 4,527 | `doExec()`                                           | java.util.concurrent.ForkJoinTask                                    |
|   -4.2% |  -198 | 91.1% → 88.7% | 4,727 → 4,529 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool$WorkQueue                          |
|   -4.3% |  -197 | 87.7% → 85.2% | 4,549 → 4,352 | `awaitDone(int, long)`                               | java.util.concurrent.ForkJoinTask                                    |
|   -4.3% |  -197 | 87.7% → 85.2% | 4,549 → 4,352 | `join()`                                             | java.util.concurrent.ForkJoinTask                                    |
|   -4.5% |  -196 | 84.1% → 81.6% | 4,361 → 4,165 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | java.util.concurrent.ForkJoinPool$WorkQueue                          |
|   -4.0% |  -188 | 91.2% → 88.9% | 4,730 → 4,542 | `scan(ForkJoinPool$WorkQueue, int, int)`             | java.util.concurrent.ForkJoinPool                                    |
|  -10.3% |  -160 | 30.1% → 27.4% | 1,559 → 1,399 | `findNearestCentroid()`                              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|   -1.4% |   -67 | 95.0% → 95.2% | 4,929 → 4,862 | `runWorker(ForkJoinPool$WorkQueue)`                  | java.util.concurrent.ForkJoinPool                                    |
|   -1.4% |   -67 | 95.0% → 95.2% | 4,929 → 4,862 | `run()`                                              | java.util.concurrent.ForkJoinWorkerThread                            |
|   -5.0% |   -50 | 19.2% → 18.5% |     997 → 947 | `distance(Double[], Double[])`                       | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  -11.1% |   -50 |   8.7% → 7.9% |     451 → 401 | `merge(Map, Map)`                                    | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  -10.9% |   -49 |   8.6% → 7.8% |     448 → 399 | `combineResults(Map, Map)`                           | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  -11.0% |   -47 |   8.2% → 7.4% |     427 → 380 | `lambda$merge$7(Map, Object, List)`                  | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  -10.5% |   -47 |   8.6% → 7.9% |     448 → 401 | `combineResults(Object, Object)`                     | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |


# Allocated heap profile diff

Allocated 3.29 GB → 3.25 GB (-43.3 MB, -1.3%) over 75,095 samples → 74,967 samples (43.9 kB → 43.4 kB per sample).

| Category | Change |    Delta |      % |              Size |         Samples |
| -------- | -----: | -------: | -----: | ----------------: | --------------: |
| ours     |  -1.3% | -43.3 MB | 100.0% | 3.29 GB → 3.25 GB | 75,095 → 74,967 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |    Delta |    % |              Size |       Samples | Function                                                       | Location                                                 |
| ------: | -------: | ---: | ----------------: | ------------: | -------------------------------------------------------------- | -------------------------------------------------------- |
|   +2.0% |  +134 kB | 0.2% | 6.85 MB → 6.98 MB | 3,477 → 3,545 | `findNearestCentroid()`                                        | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|     new | +8.21 kB | 0.0% |     0 B → 8.21 kB |         0 → 1 | `<init>(InputStream, int)`                                     | java.util.jar.Manifest$FastInputStream                   |
|  +23.4% | +3.31 kB | 0.0% | 14.2 kB → 17.5 kB |     295 → 364 | `createSubtask(int, int)`                                      | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|     new |  +1.6 kB | 0.0% |      0 B → 1.6 kB |         0 → 3 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` | java.util.concurrent.ConcurrentHashMap                   |
|   +9.1% | +1.29 kB | 0.0% | 14.2 kB → 15.5 kB |     254 → 277 | `createSubtask(int, int)`                                      | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|     new |   +664 B | 0.0% |       0 B → 664 B |         0 → 1 | `load(DataInputStream)`                                        | sun.util.calendar.ZoneInfoFile                           |
|   +2.1% |   +560 B | 0.0% | 26.6 kB → 27.2 kB |     475 → 485 | `grow(int)`                                                    | java.util.ArrayList                                      |
|  +84.6% |   +264 B | 0.0% |     312 B → 576 B |       13 → 24 | `builder(long, IntFunction)`                                   | java.util.stream.Nodes                                   |
|  +10.3% |   +160 B | 0.0% | 1.56 kB → 1.72 kB |       39 → 43 | `lambda$generateData$4(int)`                                   | org.renaissance.jdk.concurrent.JavaKMeans                |
|   +2.9% |   +144 B | 0.0% |  4.9 kB → 5.04 kB |     204 → 210 | `lambda$collectClusters$0(Double[])`                           | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  +31.6% |   +144 B | 0.0% |     456 B → 600 B |       19 → 25 | `opWrapSink(int, Sink)`                                        | java.util.stream.IntPipeline$1                           |
|   +0.7% |   +112 B | 0.0% |   15.9 kB → 16 kB |     194 → 228 | `resize()`                                                     | java.util.HashMap                                        |
|     new |   +112 B | 0.0% |       0 B → 112 B |         0 → 1 | `<clinit>()`                                                   | jdk.internal.math.FloatingDecimal                        |
|     new |    +64 B | 0.0% |        0 B → 64 B |         0 → 1 | `allocateUninitializedArray0(Class, int)`                      | jdk.internal.misc.Unsafe                                 |
|     new |    +56 B | 0.0% |        0 B → 56 B |         0 → 1 | `compress(char[], int, int)`                                   | java.lang.StringUTF16                                    |
| +100.0% |    +40 B | 0.0% |       40 B → 80 B |         1 → 2 | `lambda$boxed$0(int)`                                          | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
|   +0.2% |    +32 B | 0.0% |           17.2 kB |     538 → 539 | `newNode(int, Object, Object, HashMap$Node)`                   | java.util.HashMap                                        |
|     new |    +32 B | 0.0% |        0 B → 32 B |         0 → 1 | `iterator()`                                                   | java.util.HashMap$EntrySet                               |
|  +33.3% |    +24 B | 0.0% |       72 B → 96 B |         3 → 4 | `awaitDone(int, long)`                                         | java.util.concurrent.ForkJoinTask                        |
|  +50.0% |    +24 B | 0.0% |       48 B → 72 B |         2 → 3 | `<init>(JavaKMeans, Map)`                                      | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |

#### Progressions

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |    Delta |     % |              Size |         Samples | Function                                                                                             | Location                                                 |
| ------: | -------: | ----: | ----------------: | --------------: | ---------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
|   -1.3% | -42.4 MB | 99.6% | 3.28 GB → 3.24 GB | 68,206 → 67,962 | `copyOf(Object[], int)`                                                                              | java.util.Arrays                                         |
|  -10.6% |  -607 kB |  0.2% |  5.71 MB → 5.1 MB |         33 → 26 | `copyOf(Object[], int, Class)`                                                                       | java.util.Arrays                                         |
|  -90.8% |  -161 kB |  0.0% |  178 kB → 16.4 kB |           2 → 1 | `readNBytes(int)`                                                                                    | java.io.InputStream                                      |
|  -36.1% |  -141 kB |  0.0% |   392 kB → 251 kB |              12 | `<init>(InputStream, Inflater, int)`                                                                 | java.util.zip.InflaterInputStream                        |
|  -20.0% | -66.5 kB |  0.0% |   332 kB → 266 kB |         25 → 26 | `copyOf(byte[], int)`                                                                                | java.util.Arrays                                         |
| removed | -16.4 kB |  0.0% |     16.4 kB → 0 B |           1 → 0 | `transferTo(OutputStream)`                                                                           | java.io.InputStream                                      |
| removed | -1.57 kB |  0.0% |     1.57 kB → 0 B |           2 → 0 | `enlarge(int)`                                                                                       | jdk.internal.org.objectweb.asm.ByteVector                |
|  -10.1% |  -1.1 kB |  0.0% | 10.9 kB → 9.84 kB |       228 → 205 | `collectClusters(int[])`                                                                             | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| removed |   -952 B |  0.0% |       952 B → 0 B |           1 → 0 | `<init>(int)`                                                                                        | jdk.internal.org.objectweb.asm.ByteVector                |
|  -10.1% |   -896 B |  0.0% |  8.9 kB → 8.01 kB |       159 → 143 | `add(double[], double[])`                                                                            | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  -20.9% |   -784 B |  0.0% | 3.75 kB → 2.97 kB |         67 → 53 | `intStream(Spliterator$OfInt, boolean)`                                                              | java.util.stream.StreamSupport                           |
| removed |   -584 B |  0.0% |       584 B → 0 B |           1 → 0 | `load(DataInputStream)`                                                                              | java.time.zone.TzdbZoneRulesProvider                     |
|  -12.8% |   -336 B |  0.0% |  2.63 kB → 2.3 kB |         47 → 41 | `mapToObj(IntFunction, int)`                                                                         | java.util.stream.IntPipeline                             |
|  -10.2% |   -312 B |  0.0% | 3.07 kB → 2.76 kB |       128 → 115 | `valueOf(double)`                                                                                    | java.lang.Double                                         |
|   -4.5% |   -288 B |  0.0% | 6.43 kB → 6.14 kB |       134 → 128 | `merge(Map, Map)`                                                                                    | org.renaissance.jdk.concurrent.JavaKMeans                |
|  -31.6% |   -288 B |  0.0% |     912 B → 624 B |         19 → 13 | `computeClusterAverages()`                                                                           | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
|  -80.6% |   -232 B |  0.0% |      288 B → 56 B |           3 → 2 | `copyOfRangeByte(byte[], int, int)`                                                                  | java.util.Arrays                                         |
|  -82.4% |   -224 B |  0.0% |      272 B → 48 B |               1 | `fillInStackTrace(int)`                                                                              | java.lang.Throwable                                      |
|   -3.8% |   -216 B |  0.0% |  5.71 kB → 5.5 kB |       238 → 229 | `lambda$merge$6(List, List)`                                                                         | org.renaissance.jdk.concurrent.JavaKMeans                |
| removed |   -152 B |  0.0% |       152 B → 0 B |           2 → 0 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` | java.lang.ClassLoader                                    |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|   Change |    Delta |             % |              Size |         Samples | Function                                                  | Location                                                             |
| -------: | -------: | ------------: | ----------------: | --------------: | --------------------------------------------------------- | -------------------------------------------------------------------- |
|      new | +3.23 GB |  0.0% → 99.5% |     0 B → 3.23 GB |      0 → 56,432 | `accept(Object, Object)`                                  | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88 |
|      new | +3.23 GB |  0.0% → 99.5% |     0 B → 3.23 GB |      0 → 56,429 | `apply(Object, Object)`                                   | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0 |
|      new | +2.04 GB |  0.0% → 62.7% |     0 B → 2.04 GB |      0 → 15,055 | `call()`                                                  | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801183d68 |
|    +0.6% | +5.79 MB | 30.1% → 30.7% |   992 MB → 998 MB | 59,118 → 59,224 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | java.util.concurrent.ForkJoinPool$WorkQueue                          |
|      new | +5.54 MB |   0.0% → 0.2% |     0 B → 5.54 MB |         0 → 398 | `invokeStatic(Object, Object)`                            | java.lang.invoke.LambdaForm$DMH.0x000000c801004800                   |
|      new | +5.54 MB |   0.0% → 0.2% |     0 B → 5.54 MB |         0 → 398 | `invoke(Object, Object, Object)`                          | java.lang.invoke.LambdaForm$MH.0x000000c801009800                    |
|    +0.5% | +5.32 MB | 30.5% → 31.1% |    1 GB → 1.01 GB | 59,794 → 59,892 | `awaitDone(int, long)`                                    | java.util.concurrent.ForkJoinTask                                    |
|    +0.5% | +5.32 MB | 30.5% → 31.1% |    1 GB → 1.01 GB | 59,794 → 59,892 | `join()`                                                  | java.util.concurrent.ForkJoinTask                                    |
|      new | +5.11 MB |   0.0% → 0.2% |     0 B → 5.11 MB |         0 → 365 | `applyVoid(Object)`                                       | org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000c80111efe0 |
|      new | +4.99 MB |   0.0% → 0.2% |     0 B → 4.99 MB |           0 → 4 | `accept(Object, Object)`                                  | java.util.stream.Collectors$$Lambda.0x000000c801070cd0               |
|    +5.0% | +3.44 MB |   2.1% → 2.2% | 69.2 MB → 72.7 MB | 10,985 → 11,245 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | java.util.concurrent.ForkJoinPool                                    |
|    +2.0% |  +134 kB |          0.2% | 6.85 MB → 6.98 MB |   3,477 → 3,545 | `findNearestCentroid()`                                   | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|    +1.1% |  +124 kB |          0.4% | 11.7 MB → 11.9 MB | 16,626 → 16,673 | `computeDirectly()`                                       | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| +1022.8% | +73.5 kB |          0.0% | 7.18 kB → 80.7 kB |           1 → 6 | `<init>()`                                                | scala.collection.immutable.IndexedSeq$                               |
| +1022.8% | +73.5 kB |          0.0% | 7.18 kB → 80.7 kB |           1 → 6 | `<clinit>()`                                              | scala.collection.immutable.IndexedSeq$                               |
|  +126.9% | +32.9 kB |          0.0% | 25.9 kB → 58.8 kB |           2 → 7 | `<clinit>()`                                              | scala.collection.immutable.List$                                     |
|  +398.2% | +28.6 kB |          0.0% | 7.18 kB → 35.8 kB |           1 → 4 | `<clinit>()`                                              | scala.collection.immutable.Vector$                                   |
|   +33.7% | +27.9 kB |          0.0% |  82.8 kB → 111 kB |               4 | `apply(Seq)`                                              | scala.collection.MapFactory                                          |
|   +33.7% | +27.9 kB |          0.0% |  82.8 kB → 111 kB |               4 | `apply$(MapFactory, Seq)`                                 | scala.collection.MapFactory                                          |
|      new | +27.2 kB |          0.0% |     0 B → 27.2 kB |           0 → 3 | `apply()`                                                 | org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000c801103058 |

#### Progressions

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |    Delta |             % |              Size |         Samples | Function                                             | Location                                                             |
| ------: | -------: | ------------: | ----------------: | --------------: | ---------------------------------------------------- | -------------------------------------------------------------------- |
| removed | -3.28 GB |  99.4% → 0.0% |     3.28 GB → 0 B |      56,664 → 0 | `accept(Object, Object)`                             | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460 |
| removed | -3.28 GB |  99.4% → 0.0% |     3.28 GB → 0 B |      56,661 → 0 | `apply(Object, Object)`                              | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38 |
| removed | -2.06 GB |  62.5% → 0.0% |     2.06 GB → 0 B |      14,930 → 0 | `call()`                                             | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68 |
|   -1.3% |   -43 MB |         99.8% | 3.29 GB → 3.24 GB | 68,239 → 67,988 | `copyOf(Object[], int)`                              | java.util.Arrays                                                     |
|   -1.3% | -42.5 MB | 99.4% → 99.5% | 3.28 GB → 3.23 GB | 56,661 → 56,429 | `lambda$merge$6(List, List)`                         | org.renaissance.jdk.concurrent.JavaKMeans                            |
|   -1.3% | -42.5 MB | 99.4% → 99.5% | 3.28 GB → 3.23 GB | 56,664 → 56,432 | `merge(Object, Object, BiFunction)`                  | java.util.HashMap                                                    |
|   -1.3% | -42.5 MB | 99.4% → 99.5% | 3.28 GB → 3.23 GB | 56,664 → 56,432 | `lambda$merge$7(Map, Object, List)`                  | org.renaissance.jdk.concurrent.JavaKMeans                            |
|   -1.3% | -42.5 MB | 99.4% → 99.5% | 3.28 GB → 3.23 GB | 56,664 → 56,432 | `forEach(BiConsumer)`                                | java.util.HashMap                                                    |
|   -1.3% | -42.5 MB | 99.4% → 99.5% | 3.28 GB → 3.23 GB | 57,113 → 56,898 | `combineResults(Map, Map)`                           | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|   -1.3% | -42.5 MB | 99.4% → 99.5% | 3.28 GB → 3.23 GB | 57,113 → 56,898 | `combineResults(Object, Object)`                     | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|   -1.3% | -42.5 MB | 99.4% → 99.5% | 3.28 GB → 3.23 GB | 57,120 → 56,907 | `merge(Map, Map)`                                    | org.renaissance.jdk.concurrent.JavaKMeans                            |
|   -1.3% | -42.4 MB |         99.8% | 3.29 GB → 3.25 GB | 74,657 → 74,559 | `compute()`                                          | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                 |
|   -1.3% | -42.4 MB |         99.8% | 3.29 GB → 3.25 GB | 74,657 → 74,559 | `exec()`                                             | java.util.concurrent.RecursiveTask                                   |
|   -1.3% | -42.4 MB |         99.8% | 3.29 GB → 3.25 GB | 74,662 → 74,565 | `doExec()`                                           | java.util.concurrent.ForkJoinTask                                    |
|   -1.3% | -42.4 MB |         99.8% | 3.29 GB → 3.25 GB | 74,662 → 74,565 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool$WorkQueue                          |
|   -1.3% | -42.4 MB |         99.8% | 3.29 GB → 3.25 GB | 74,662 → 74,565 | `scan(ForkJoinPool$WorkQueue, int, int)`             | java.util.concurrent.ForkJoinPool                                    |
|   -1.3% | -42.4 MB |         99.8% | 3.29 GB → 3.25 GB | 74,662 → 74,565 | `runWorker(ForkJoinPool$WorkQueue)`                  | java.util.concurrent.ForkJoinPool                                    |
|   -1.3% | -42.4 MB |         99.8% | 3.29 GB → 3.25 GB | 74,662 → 74,565 | `run()`                                              | java.util.concurrent.ForkJoinWorkerThread                            |
|   -1.5% |   -39 MB | 81.3% → 81.1% | 2.68 GB → 2.64 GB | 42,207 → 41,976 | `addAll(Collection)`                                 | java.util.ArrayList                                                  |
|   -1.4% | -29.8 MB |         62.8% | 2.07 GB → 2.04 GB | 39,452 → 39,291 | `grow(int)`                                          | java.util.ArrayList                                                  |


# Lock contention profile diff

Blocked 2.7ms → 1.6ms (-1.1ms, -41.1%) over 28 samples → 9 samples (96.7µs → 177.2µs per sample).

| Category | Change |  Delta |      % |          Time | Samples |
| -------- | -----: | -----: | -----: | ------------: | ------: |
| ours     | -41.1% | -1.1ms | 100.0% | 2.7ms → 1.6ms |  28 → 9 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked directly in the function body, excluding callees.

|   Change | Delta |           % |        Time | Samples | Function                                         | Location                                          |
| -------: | ----: | ----------: | ----------: | ------: | ------------------------------------------------ | ------------------------------------------------- |
| +1156.4% |  +0ms | 0.1% → 2.8% |         0ms |       1 | `<init>(Collection, int)`                        | java.nio.file.FileTreeWalker                      |
|  +551.9% |  +0ms | 0.1% → 1.4% |         0ms |       1 | `<init>(UnixPath, long, DirectoryStream$Filter)` | sun.nio.fs.UnixDirectoryStream                    |
|   +20.1% |  +0ms | 1.8% → 3.7% | 0ms → 0.1ms |   1 → 2 | `<init>(boolean)`                                | java.util.concurrent.locks.ReentrantReadWriteLock |

#### Progressions

Functions with the largest decrease in time blocked directly in the function body, excluding callees.

|  Change |  Delta |             % |          Time | Samples | Function                                                                                             | Location                               |
| ------: | -----: | ------------: | ------------: | ------: | ---------------------------------------------------------------------------------------------------- | -------------------------------------- |
|  -30.1% | -0.5ms | 64.8% → 77.0% | 1.8ms → 1.2ms |   7 → 4 | `loadClass(String, boolean)`                                                                         | java.lang.ClassLoader                  |
| removed | -0.3ms |  11.1% → 0.0% |   0.3ms → 0ms |   5 → 0 | `doubleStream(Spliterator$OfDouble, boolean)`                                                        | java.util.stream.StreamSupport         |
| removed | -0.2ms |   7.2% → 0.0% |   0.2ms → 0ms |   7 → 0 | `opWrapSink(int, Sink)`                                                                              | java.util.stream.DoublePipeline$1      |
|  -29.8% | -0.1ms | 12.7% → 15.1% | 0.3ms → 0.2ms |   2 → 1 | `loadClassOrNull(String, boolean)`                                                                   | jdk.internal.loader.BuiltinClassLoader |
| removed |   -0ms |   1.2% → 0.0% |           0ms |   2 → 0 | `mapToObj(DoubleFunction, int)`                                                                      | java.util.stream.DoublePipeline        |
| removed |   -0ms |   0.5% → 0.0% |           0ms |   1 → 0 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` | java.lang.ClassLoader                  |
| removed |   -0ms |   0.4% → 0.0% |           0ms |   1 → 0 | `newDirectoryStream(Path)`                                                                           | java.nio.file.Files                    |

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

|   Change |  Delta |            % |          Time | Samples | Function                                           | Location                                                             |
| -------: | -----: | -----------: | ------------: | ------: | -------------------------------------------------- | -------------------------------------------------------------------- |
|      new | +0.4ms | 0.0% → 23.0% |   0ms → 0.4ms |   0 → 5 | `run()`                                            | org.renaissance.core.DirUtils$$Lambda.0x000000c801003a68             |
|      new | +0.4ms | 0.0% → 22.9% |   0ms → 0.4ms |   0 → 1 | `call()`                                           | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801183d68 |
|  +173.3% | +0.2ms | 4.9% → 22.9% | 0.1ms → 0.4ms |   3 → 1 | `invoke()`                                         | java.util.concurrent.ForkJoinTask                                    |
|  +173.3% | +0.2ms | 4.9% → 22.9% | 0.1ms → 0.4ms |   3 → 1 | `lambda$run$0(int, List, int)`                     | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  +173.3% | +0.2ms | 4.9% → 22.9% | 0.1ms → 0.4ms |   3 → 1 | `exec()`                                           | java.util.concurrent.ForkJoinTask$AdaptedCallable                    |
|   +75.4% | +0.1ms |  2.7% → 8.0% |         0.1ms |   5 → 4 | `walkFileTree(Path, Set, int, FileVisitor)`        | java.nio.file.Files                                                  |
|   +75.4% | +0.1ms |  2.7% → 8.0% |         0.1ms |   5 → 4 | `walkFileTree(Path, FileVisitor)`                  | java.nio.file.Files                                                  |
| +1156.4% |   +0ms |  0.1% → 2.8% |           0ms |       1 | `<init>(Collection, int)`                          | java.nio.file.FileTreeWalker                                         |
|   +55.8% |   +0ms |  2.0% → 5.2% |         0.1ms |   2 → 3 | `<init>(UnixPath, long, DirectoryStream$Filter)`   | sun.nio.fs.UnixDirectoryStream                                       |
|   +55.8% |   +0ms |  2.0% → 5.2% |         0.1ms |   2 → 3 | `newDirectoryStream(Path, DirectoryStream$Filter)` | sun.nio.fs.UnixFileSystemProvider                                    |
|   +31.1% |   +0ms |  2.3% → 5.2% |         0.1ms |       3 | `newDirectoryStream(Path)`                         | java.nio.file.Files                                                  |
|   +31.1% |   +0ms |  2.3% → 5.2% |         0.1ms |       3 | `visit(Path, boolean, boolean)`                    | java.nio.file.FileTreeWalker                                         |
|   +31.1% |   +0ms |  2.3% → 5.2% |         0.1ms |       3 | `walk(Path)`                                       | java.nio.file.FileTreeWalker                                         |
|   +20.1% |   +0ms |  1.8% → 3.7% |   0ms → 0.1ms |   1 → 2 | `<init>(boolean)`                                  | java.util.concurrent.locks.ReentrantReadWriteLock                    |

#### Progressions

Functions with the largest decrease in total time blocked in the function and all its callees.

|  Change |  Delta |             % |          Time | Samples | Function                                             | Location                                                 |
| ------: | -----: | ------------: | ------------: | ------: | ---------------------------------------------------- | -------------------------------------------------------- |
|  -46.6% | -1.1ms | 84.9% → 77.0% | 2.3ms → 1.2ms |  22 → 4 | `computeClusterAverages()`                           | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
|  -46.6% | -1.1ms | 84.9% → 77.0% | 2.3ms → 1.2ms |  22 → 4 | `computeDirectly()`                                  | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
|  -46.6% | -1.1ms | 84.9% → 77.0% | 2.3ms → 1.2ms |  22 → 4 | `compute()`                                          | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask     |
|  -46.6% | -1.1ms | 84.9% → 77.0% | 2.3ms → 1.2ms |  22 → 4 | `exec()`                                             | java.util.concurrent.RecursiveTask                       |
|  -46.6% | -1.1ms | 84.9% → 77.0% | 2.3ms → 1.2ms |  22 → 4 | `doExec()`                                           | java.util.concurrent.ForkJoinTask                        |
|  -46.6% | -1.1ms | 84.9% → 77.0% | 2.3ms → 1.2ms |  22 → 4 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool$WorkQueue              |
|  -46.6% | -1.1ms | 84.9% → 77.0% | 2.3ms → 1.2ms |  22 → 4 | `scan(ForkJoinPool$WorkQueue, int, int)`             | java.util.concurrent.ForkJoinPool                        |
|  -46.6% | -1.1ms | 84.9% → 77.0% | 2.3ms → 1.2ms |  22 → 4 | `runWorker(ForkJoinPool$WorkQueue)`                  | java.util.concurrent.ForkJoinPool                        |
|  -46.6% | -1.1ms | 84.9% → 77.0% | 2.3ms → 1.2ms |  22 → 4 | `run()`                                              | java.util.concurrent.ForkJoinWorkerThread                |
|  -51.5% | -0.7ms | 52.8% → 43.5% | 1.4ms → 0.7ms |  11 → 2 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | java.util.concurrent.ForkJoinPool$WorkQueue              |
|  -51.5% | -0.7ms | 52.8% → 43.5% | 1.4ms → 0.7ms |  11 → 2 | `awaitDone(int, long)`                               | java.util.concurrent.ForkJoinTask                        |
|  -51.5% | -0.7ms | 52.8% → 43.5% | 1.4ms → 0.7ms |  11 → 2 | `join()`                                             | java.util.concurrent.ForkJoinTask                        |
| removed | -0.7ms |  25.7% → 0.0% |   0.7ms → 0ms |  18 → 0 | `boxed(double[])`                                    | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
|  -30.0% | -0.6ms | 77.5% → 92.0% | 2.1ms → 1.5ms |   9 → 5 | `loadClass(String)`                                  | java.lang.ClassLoader                                    |
|  -30.1% | -0.5ms | 64.8% → 77.0% | 1.8ms → 1.2ms |   7 → 4 | `loadClass(String, boolean)`                         | java.lang.ClassLoader                                    |
| removed | -0.4ms |  15.1% → 0.0% |   0.4ms → 0ms |   6 → 0 | `run()`                                              | org.renaissance.core.DirUtils$$Lambda.0x0000000801003a68 |
|  -23.4% | -0.4ms | 59.2% → 77.0% | 1.6ms → 1.2ms |       4 | `average(List)`                                      | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| removed | -0.3ms |  11.1% → 0.0% |   0.3ms → 0ms |   5 → 0 | `doubleStream(Spliterator$OfDouble, boolean)`        | java.util.stream.StreamSupport                           |
| removed | -0.3ms |  11.1% → 0.0% |   0.3ms → 0ms |   5 → 0 | `stream(double[], int, int)`                         | java.util.Arrays                                         |
| removed | -0.3ms |  11.1% → 0.0% |   0.3ms → 0ms |   5 → 0 | `stream(double[])`                                   | java.util.Arrays                                         |

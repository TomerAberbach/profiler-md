# Allocated native memory profile diff

Allocated 257 MiB → 259 MiB (+2.185 MiB, +0.9%) over 85,604 samples → 88,868 samples (3.07 KiB → 2.98 KiB per sample).

| Category | Change |      Delta |      % |              Size |         Samples |
| -------- | -----: | ---------: | -----: | ----------------: | --------------: |
| Native   |  +0.9% | +2.185 MiB | 100.0% | 257 MiB → 259 MiB | 85,604 → 88,868 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in native bytes allocated directly in the function body, excluding callees.

##### Native

| Change |      Delta |     % |              Size |         Samples | Function       | Location                 |
| -----: | ---------: | ----: | ----------------: | --------------: | -------------- | ------------------------ |
|  +0.8% | +2.177 MiB | 99.9% | 256 MiB → 259 MiB | 84,898 → 88,119 | `malloc_hook`  | `libasyncProfiler.dylib` |
|  +5.6% | +8.117 KiB |  0.1% | 145 KiB → 153 KiB |       694 → 737 | `realloc_hook` | `libasyncProfiler.dylib` |

### Total size

#### Regressions

Functions with the largest increase in total native bytes allocated in the function and all its callees.

|      Change |      Delta |             % |                Size |         Samples | Function                                                                                                               | Location                                                                                      |
| ----------: | ---------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
|         new | +4.116 MiB |   0.0% → 1.6% |      0 B → 4.12 MiB |       0 → 9,616 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                                   |
|      +10.7% | +3.191 MiB | 11.6% → 12.7% | 29.7 MiB → 32.9 MiB |       375 → 425 | `Compile::optimize_loops`                                                                                              | `libjvm.dylib`                                                                                |
|    +3917.2% | +3.043 MiB |  <0.1% → 1.2% | 79.6 KiB → 3.12 MiB |     854 → 6,865 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                                                     |
|    +2100.9% |   +2.8 MiB |   0.1% → 1.1% |  137 KiB → 2.93 MiB |     751 → 6,209 | `wrapAndCopyInto(Sink, Spliterator)`                                                                                   | `java.util.stream.AbstractPipeline`                                                           |
|    +2731.8% | +2.799 MiB |  <0.1% → 1.1% |   105 KiB → 2.9 MiB |     613 → 6,058 | `copyInto(Sink, Spliterator)`                                                                                          | `java.util.stream.AbstractPipeline`                                                           |
|    +4447.5% | +2.794 MiB |  <0.1% → 1.1% | 64.3 KiB → 2.86 MiB |     506 → 5,949 | `collect(Collector)`                                                                                                   | `java.util.stream.ReferencePipeline`                                                          |
|    +4483.7% | +2.794 MiB |  <0.1% → 1.1% | 63.8 KiB → 2.86 MiB |     497 → 5,940 | `evaluateSequential(PipelineHelper, Spliterator)`                                                                      | `java.util.stream.ReduceOps$ReduceOp`                                                         |
|    +3739.7% | +2.794 MiB |  <0.1% → 1.1% | 76.5 KiB → 2.87 MiB |     645 → 6,087 | `evaluate(TerminalOp)`                                                                                                 | `java.util.stream.AbstractPipeline`                                                           |
|         new | +2.782 MiB |   0.0% → 1.1% |      0 B → 2.78 MiB |       0 → 5,527 | `toCsvRows(Function)`                                                                                                  | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`                            |
| +9093131.3% | +2.775 MiB |  <0.1% → 1.1% |     32 B → 2.78 MiB |       1 → 5,465 | `forEachRemaining(Consumer)`                                                                                           | `java.util.Spliterators$ArraySpliterator`                                                     |
|  +135086.8% | +2.774 MiB |  <0.1% → 1.1% |  2.1 KiB → 2.78 MiB |      56 → 5,519 | `accept(Object)`                                                                                                       | `java.util.stream.ReferencePipeline$3$1`                                                      |
|         new | +2.774 MiB |   0.0% → 1.1% |      0 B → 2.77 MiB |       0 → 5,463 | `lambda$toCsvRows$2(String[], Function, String)`                                                                       | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`                            |
|         new | +2.774 MiB |   0.0% → 1.1% |      0 B → 2.77 MiB |       0 → 5,463 | `apply(Object)`                                                                                                        | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x0000009001123bf8` |
|         new | +2.761 MiB |   0.0% → 1.1% |      0 B → 2.76 MiB |       0 → 5,306 | `rowToArray$1(Map)`                                                                                                    | `org.renaissance.jdk.concurrent.FjKmeans`                                                     |
|         new | +2.761 MiB |   0.0% → 1.1% |      0 B → 2.76 MiB |       0 → 5,306 | `setUpBeforeAll$$anonfun$1(Map)`                                                                                       | `org.renaissance.jdk.concurrent.FjKmeans`                                                     |
|    +6216.7% | +2.718 MiB |  <0.1% → 1.1% | 44.8 KiB → 2.76 MiB |     258 → 5,306 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x0000009001126908`                          |
|       +0.8% | +2.177 MiB |         99.9% |   256 MiB → 259 MiB | 84,898 → 88,119 | `malloc_hook`                                                                                                          | `libasyncProfiler.dylib`                                                                      |
|       +1.6% | +1.937 MiB | 48.6% → 49.0% |   125 MiB → 127 MiB |   2,776 → 2,812 | `Compile::Compile`                                                                                                     | `libjvm.dylib`                                                                                |
|       +1.6% | +1.937 MiB | 48.6% → 49.0% |   125 MiB → 127 MiB |   2,776 → 2,812 | `C2Compiler::compile_method`                                                                                           | `libjvm.dylib`                                                                                |
|       +2.0% | +1.422 MiB | 28.4% → 28.7% | 72.9 MiB → 74.4 MiB |   1,045 → 1,074 | `Compile::Optimize`                                                                                                    | `libjvm.dylib`                                                                                |

##### Native

| Change |        Delta |             % |                Size |         Samples | Function                                   | Location                  |
| -----: | -----------: | ------------: | ------------------: | --------------: | ------------------------------------------ | ------------------------- |
|  +0.8% |   +2.177 MiB |         99.9% |   256 MiB → 259 MiB | 84,898 → 88,119 | `malloc_hook`                              | `libasyncProfiler.dylib`  |
|  +0.5% |   +1.284 MiB | 97.2% → 96.8% |   249 MiB → 251 MiB | 82,535 → 85,594 | `os::malloc`                               | `libjvm.dylib`            |
|  +0.9% |   +1.091 MiB |         49.6% |   127 MiB → 128 MiB | 10,676 → 11,084 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
|  +0.4% | +963.037 KiB | 95.0% → 94.6% |   244 MiB → 245 MiB | 36,743 → 36,458 | `Thread::call_run`                         | `libjvm.dylib`            |
|  +0.4% | +963.037 KiB | 95.0% → 94.6% |   244 MiB → 245 MiB | 36,743 → 36,458 | `thread_native_entry`                      | `libjvm.dylib`            |
|  +0.4% |  +962.88 KiB | 95.0% → 94.6% |   244 MiB → 245 MiB | 36,896 → 36,611 | `_pthread_start`                           | `libsystem_pthread.dylib` |
|  +0.4% |  +962.88 KiB | 95.0% → 94.6% |   244 MiB → 245 MiB | 36,896 → 36,611 | `thread_start`                             | `libsystem_pthread.dylib` |
|  +0.7% | +936.335 KiB |         49.4% |   127 MiB → 128 MiB |   2,093 → 2,096 | `Chunk::operator new`                      | `libjvm.dylib`            |
|  +0.7% | +935.812 KiB | 49.4% → 49.3% |   127 MiB → 128 MiB |   2,021 → 2,025 | `Arena::grow`                              | `libjvm.dylib`            |
| +10.3% | +878.744 KiB |   3.2% → 3.5% | 8.33 MiB → 9.18 MiB | 22,423 → 23,794 | `Java_java_lang_ClassLoader_defineClass1`  | `libjava.dylib`           |
| +96.3% | +831.906 KiB |   0.3% → 0.6% |  864 KiB → 1.66 MiB |         25 → 44 | `IdealLoopTree::iteration_split_impl`      | `libjvm.dylib`            |
| +96.3% | +831.906 KiB |   0.3% → 0.6% |  864 KiB → 1.66 MiB |         25 → 44 | `IdealLoopTree::iteration_split`           | `libjvm.dylib`            |
|  +3.2% |  +479.39 KiB |   5.7% → 5.8% | 14.7 MiB → 15.1 MiB |       444 → 445 | `Arena::Arealloc`                          | `libjvm.dylib`            |
|  +0.3% | +410.325 KiB | 47.2% → 46.9% |             121 MiB | 68,988 → 71,381 | `AllocateHeap`                             | `libjvm.dylib`            |
| +12.6% | +383.679 KiB |   1.2% → 1.3% | 2.97 MiB → 3.34 MiB |        92 → 104 | `PredictedCallGenerator::generate`         | `libjvm.dylib`            |
|  +7.9% | +255.773 KiB |   1.2% → 1.3% |  3.15 MiB → 3.4 MiB |        98 → 106 | `Parse::do_call`                           | `libjvm.dylib`            |
| +30.6% |  +234.25 KiB |   0.3% → 0.4% | 766 KiB → 1,000 KiB |     851 → 1,116 | `Deoptimization::fetch_unroll_info_helper` | `libjvm.dylib`            |
| +56.0% | +228.781 KiB |          0.2% |   408 KiB → 637 KiB |       455 → 714 | `Deoptimization::fetch_unroll_info`        | `libjvm.dylib`            |
| +56.0% | +228.781 KiB |          0.2% |   408 KiB → 637 KiB |       455 → 714 | `DeoptimizationBlob`                       | `<unknown>`               |
|  +5.3% |  +191.82 KiB |          1.4% | 3.56 MiB → 3.75 MiB |       111 → 117 | `Parse::do_one_block`                      | `libjvm.dylib`            |

#### Improvements

Functions with the largest decrease in total native bytes allocated in the function and all its callees.

|  Change |        Delta |            % |                Size |       Samples | Function                                                                                                               | Location                                    |
| ------: | -----------: | -----------: | ------------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| removed |   -2.953 MiB |  1.2% → 0.0% |      2.95 MiB → 0 B |     6,408 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
|  -98.4% |    -2.65 MiB | 1.1% → <0.1% |   2.69 MiB → 45 KiB |   4,832 → 301 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`   |
|  -79.2% |   -2.181 MiB |  1.1% → 0.2% |  2.75 MiB → 585 KiB | 5,049 → 2,060 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`   |
|  -41.0% | -848.126 KiB |  0.8% → 0.5% | 2.02 MiB → 1.19 MiB | 4,110 → 4,289 | `Compilation::compile_java_method`                                                                                     | `libjvm.dylib`                              |
|  -34.8% | -837.119 KiB |  0.9% → 0.6% | 2.35 MiB → 1.53 MiB | 6,177 → 6,481 | `Compilation::compile_method`                                                                                          | `libjvm.dylib`                              |
|  -34.8% | -837.119 KiB |  0.9% → 0.6% | 2.35 MiB → 1.53 MiB | 6,177 → 6,481 | `Compilation::Compilation`                                                                                             | `libjvm.dylib`                              |
|  -34.8% | -837.119 KiB |  0.9% → 0.6% | 2.35 MiB → 1.53 MiB | 6,177 → 6,481 | `Compiler::compile_method`                                                                                             | `libjvm.dylib`                              |
|  -40.0% | -447.671 KiB |  0.4% → 0.3% |  1.09 MiB → 672 KiB |       36 → 22 | `Compilation::emit_lir`                                                                                                | `libjvm.dylib`                              |
|   -5.8% | -403.453 KiB |  2.6% → 2.5% | 6.78 MiB → 6.38 MiB |     158 → 146 | `PhaseLive::compute`                                                                                                   | `libjvm.dylib`                              |
|  -55.9% | -342.912 KiB |  0.2% → 0.1% |   613 KiB → 270 KiB | 2,355 → 2,454 | `Compilation::build_hir`                                                                                               | `libjvm.dylib`                              |
|   -6.7% | -288.125 KiB |  1.6% → 1.5% | 4.19 MiB → 3.91 MiB |     128 → 115 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to`                                                     | `libjvm.dylib`                              |
| removed | -279.991 KiB |  0.1% → 0.0% |       280 KiB → 0 B |     1,199 → 0 | `$anonfun$1(Config, Path)`                                                                                             | `org.renaissance.harness.RenaissanceSuite$` |
|  -32.0% | -255.812 KiB |  0.3% → 0.2% |   799 KiB → 544 KiB |       25 → 17 | `LinearScan::do_linear_scan`                                                                                           | `libjvm.dylib`                              |
|  -50.9% | -246.982 KiB |  0.2% → 0.1% |   485 KiB → 238 KiB | 2,351 → 2,453 | `GraphBuilder::GraphBuilder`                                                                                           | `libjvm.dylib`                              |
|  -50.9% | -246.982 KiB |  0.2% → 0.1% |   485 KiB → 238 KiB | 2,351 → 2,453 | `IRScope::IRScope`                                                                                                     | `libjvm.dylib`                              |
|  -50.9% | -246.982 KiB |  0.2% → 0.1% |   485 KiB → 238 KiB | 2,351 → 2,453 | `IR::IR`                                                                                                               | `libjvm.dylib`                              |
|  -20.0% |  -224.07 KiB |  0.4% → 0.3% |  1.09 MiB → 896 KiB |       34 → 27 | `PhaseIdealLoop::loop_predication_impl_helper`                                                                         | `libjvm.dylib`                              |
|  -59.6% | -218.599 KiB |         0.1% |   367 KiB → 148 KiB | 2,342 → 2,445 | `GraphBuilder::iterate_bytecodes_for_block`                                                                            | `libjvm.dylib`                              |
|  -59.6% | -218.599 KiB |         0.1% |   367 KiB → 148 KiB | 2,348 → 2,451 | `GraphBuilder::iterate_all_blocks`                                                                                     | `libjvm.dylib`                              |
|  -12.0% | -192.093 KiB |  0.6% → 0.5% | 1.56 MiB → 1.37 MiB |       49 → 43 | `PhaseIdealLoop::loop_predication_impl`                                                                                | `libjvm.dylib`                              |

##### Native

|  Change |        Delta |             % |                Size |         Samples | Function                                                           | Location       |
| ------: | -----------: | ------------: | ------------------: | --------------: | ------------------------------------------------------------------ | -------------- |
|  -34.8% | -837.119 KiB |   0.9% → 0.6% | 2.35 MiB → 1.53 MiB |   6,177 → 6,481 | `Compiler::compile_method`                                         | `libjvm.dylib` |
|   -6.7% | -288.125 KiB |   1.6% → 1.5% | 4.19 MiB → 3.91 MiB |       128 → 115 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib` |
|  -50.9% | -246.982 KiB |   0.2% → 0.1% |   485 KiB → 238 KiB |   2,351 → 2,453 | `IRScope::IRScope`                                                 | `libjvm.dylib` |
|  -50.9% | -246.982 KiB |   0.2% → 0.1% |   485 KiB → 238 KiB |   2,351 → 2,453 | `IR::IR`                                                           | `libjvm.dylib` |
|  -12.0% | -192.093 KiB |   0.6% → 0.5% | 1.56 MiB → 1.37 MiB |         49 → 43 | `IdealLoopTree::loop_predication`                                  | `libjvm.dylib` |
|  -31.2% | -160.039 KiB |   0.2% → 0.1% |   512 KiB → 352 KiB |         16 → 11 | `Invariance::clone_nodes`                                          | `libjvm.dylib` |
|  -22.2% | -148.058 KiB |   0.3% → 0.2% |   666 KiB → 518 KiB |   4,433 → 3,447 | `HeapRegionManager::expand`                                        | `libjvm.dylib` |
|  -22.2% | -148.058 KiB |   0.3% → 0.2% |   666 KiB → 518 KiB |   4,433 → 3,447 | `HeapRegionManager::expand_by`                                     | `libjvm.dylib` |
|  -22.2% | -148.058 KiB |   0.3% → 0.2% |   666 KiB → 518 KiB |   4,433 → 3,447 | `G1CollectedHeap::expand`                                          | `libjvm.dylib` |
|  -22.2% | -148.058 KiB |   0.3% → 0.2% |   666 KiB → 518 KiB |   4,433 → 3,447 | `G1CollectedHeap::expand_heap_after_young_collection`              | `libjvm.dylib` |
|  -22.2% | -139.902 KiB |          0.2% |   629 KiB → 489 KiB |   4,172 → 3,244 | `HeapRegion::HeapRegion`                                           | `libjvm.dylib` |
|   -9.9% |  -138.57 KiB |          0.5% | 1.37 MiB → 1.23 MiB |   5,823 → 4,851 | `G1YoungCollector::post_evacuate_collection_set`                   | `libjvm.dylib` |
|  -22.2% | -134.917 KiB |          0.2% |   607 KiB → 472 KiB |   3,911 → 3,041 | `HeapRegionRemSet::HeapRegionRemSet`                               | `libjvm.dylib` |
|   -1.9% |  -96.829 KiB |   2.0% → 1.9% | 5.07 MiB → 4.98 MiB |   8,348 → 7,313 | `G1YoungCollector::collect`                                        | `libjvm.dylib` |
|   -1.9% |  -96.829 KiB |   2.0% → 1.9% | 5.07 MiB → 4.98 MiB |   8,348 → 7,313 | `G1CollectedHeap::do_collection_pause_at_safepoint_helper`         | `libjvm.dylib` |
|   -1.9% |  -96.829 KiB |   2.0% → 1.9% | 5.07 MiB → 4.98 MiB |   8,348 → 7,313 | `G1CollectedHeap::do_collection_pause_at_safepoint`                | `libjvm.dylib` |
|   -1.9% |  -96.829 KiB |   2.0% → 1.9% | 5.07 MiB → 4.98 MiB |   8,348 → 7,313 | `VM_G1CollectForAllocation::doit`                                  | `libjvm.dylib` |
|  -27.3% |  -95.968 KiB |          0.1% |   352 KiB → 256 KiB |          11 → 8 | `PreserveJVMState::PreserveJVMState`                               | `libjvm.dylib` |
| removed |  -95.929 KiB |  <0.1% → 0.0% |      95.9 KiB → 0 B |           3 → 0 | `ResourceBitMap::ResourceBitMap`                                   | `libjvm.dylib` |
|   -0.1% |  -89.961 KiB | 44.5% → 44.0% |             114 MiB | 11,026 → 10,123 | `VM_Operation::evaluate`                                           | `libjvm.dylib` |

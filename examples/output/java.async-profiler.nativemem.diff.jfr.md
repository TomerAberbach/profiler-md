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

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `malloc_hook` (`libasyncProfiler.dylib`)

| Change |        Delta |             % |                Size |         Samples | Caller                                    | Location                 |
| -----: | -----------: | ------------: | ------------------: | --------------: | ----------------------------------------- | ------------------------ |
|  +0.5% |   +1.284 MiB | 97.2% → 96.9% |   249 MiB → 251 MiB | 82,535 → 85,594 | `os::malloc`                              | `libjvm.dylib`           |
| +13.6% | +781.382 KiB |   2.2% → 2.5% | 5.61 MiB → 6.37 MiB |       751 → 847 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`          |
| +10.9% |  +94.569 KiB |   0.3% → 0.4% |   868 KiB → 962 KiB |         63 → 68 | `readBytes`                               | `libjava.dylib`          |
| +21.9% |  +38.392 KiB |          0.1% |   175 KiB → 214 KiB |       229 → 282 | `Java_java_lang_ClassLoader_defineClass0` | `libjava.dylib`          |
|  +0.7% |       +256 B |         <0.1% | 35.8 KiB → 36.1 KiB |   1,185 → 1,193 | `CodeCache::add`                          | `libasyncProfiler.dylib` |

##### `realloc_hook` (`libasyncProfiler.dylib`)

| Change |      Delta |      % |              Size |   Samples | Caller        | Location       |
| -----: | ---------: | -----: | ----------------: | --------: | ------------- | -------------- |
|  +5.6% | +8.117 KiB | 100.0% | 145 KiB → 153 KiB | 694 → 737 | `os::realloc` | `libjvm.dylib` |

### Total size

#### Regressions

Functions with the largest increase in total native bytes allocated in the function and all its callees.

|      Change |      Delta |             % |                Size |         Samples | Function                                                                                                               | Location                                                                                                                                  |
| ----------: | ---------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
|         new | +4.116 MiB |   0.0% → 1.6% |      0 B → 4.12 MiB |       0 → 9,616 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                                                                               |
|      +10.7% | +3.191 MiB | 11.6% → 12.7% | 29.7 MiB → 32.9 MiB |       375 → 425 | `Compile::optimize_loops`                                                                                              | `libjvm.dylib`                                                                                                                            |
|    +3917.2% | +3.043 MiB |  <0.1% → 1.2% | 79.6 KiB → 3.12 MiB |     854 → 6,865 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                                                                                                 |
|    +2100.9% |   +2.8 MiB |   0.1% → 1.1% |  137 KiB → 2.93 MiB |     751 → 6,209 | `wrapAndCopyInto(Sink, Spliterator)`                                                                                   | `java.util.stream.AbstractPipeline`                                                                                                       |
|    +2731.8% | +2.799 MiB |  <0.1% → 1.1% |   105 KiB → 2.9 MiB |     613 → 6,058 | `copyInto(Sink, Spliterator)`                                                                                          | `java.util.stream.AbstractPipeline`                                                                                                       |
|    +4447.5% | +2.794 MiB |  <0.1% → 1.1% | 64.3 KiB → 2.86 MiB |     506 → 5,949 | `collect(Collector)`                                                                                                   | `java.util.stream.ReferencePipeline`                                                                                                      |
|    +4483.7% | +2.794 MiB |  <0.1% → 1.1% | 63.8 KiB → 2.86 MiB |     497 → 5,940 | `evaluateSequential(PipelineHelper, Spliterator)`                                                                      | `java.util.stream.ReduceOps$ReduceOp`                                                                                                     |
|    +3739.7% | +2.794 MiB |  <0.1% → 1.1% | 76.5 KiB → 2.87 MiB |     645 → 6,087 | `evaluate(TerminalOp)`                                                                                                 | `java.util.stream.AbstractPipeline`                                                                                                       |
|         new | +2.782 MiB |   0.0% → 1.1% |      0 B → 2.78 MiB |       0 → 5,527 | `toCsvRows(Function)`                                                                                                  | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`                                                                        |
| +9093131.3% | +2.775 MiB |  <0.1% → 1.1% |     32 B → 2.78 MiB |       1 → 5,465 | `forEachRemaining(Consumer)`                                                                                           | `java.util.Spliterators$ArraySpliterator`                                                                                                 |
|  +135086.8% | +2.774 MiB |  <0.1% → 1.1% |  2.1 KiB → 2.78 MiB |      56 → 5,519 | `accept(Object)`                                                                                                       | `java.util.stream.ReferencePipeline$3$1`                                                                                                  |
|         new | +2.774 MiB |   0.0% → 1.1% |      0 B → 2.77 MiB |       0 → 5,463 | `lambda$toCsvRows$2(String[], Function, String)`                                                                       | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`                                                                        |
|         new | +2.774 MiB |   0.0% → 1.1% |      0 B → 2.77 MiB |       0 → 5,463 | `apply(Object)`                                                                                                        | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x0000009001123bf8`                                             |
|         new | +2.761 MiB |   0.0% → 1.1% |      0 B → 2.76 MiB |       0 → 5,306 | `rowToArray$1(Map)`                                                                                                    | `org.renaissance.jdk.concurrent.FjKmeans`                                                                                                 |
|         new | +2.761 MiB |   0.0% → 1.1% |      0 B → 2.76 MiB |       0 → 5,306 | `setUpBeforeAll$$anonfun$1(Map)`                                                                                       | `org.renaissance.jdk.concurrent.FjKmeans`                                                                                                 |
|    +6216.7% | +2.718 MiB |  <0.1% → 1.1% | 44.8 KiB → 2.76 MiB |     258 → 5,306 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000700117ae68 → org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x0000009001126908` |
|       +0.8% | +2.177 MiB |         99.9% |   256 MiB → 259 MiB | 84,898 → 88,119 | `malloc_hook`                                                                                                          | `libasyncProfiler.dylib`                                                                                                                  |
|       +1.6% | +1.937 MiB | 48.6% → 49.0% |   125 MiB → 127 MiB |   2,776 → 2,812 | `Compile::Compile`                                                                                                     | `libjvm.dylib`                                                                                                                            |
|       +1.6% | +1.937 MiB | 48.6% → 49.0% |   125 MiB → 127 MiB |   2,776 → 2,812 | `C2Compiler::compile_method`                                                                                           | `libjvm.dylib`                                                                                                                            |
|       +2.0% | +1.422 MiB | 28.4% → 28.7% | 72.9 MiB → 74.4 MiB |   1,045 → 1,074 | `Compile::Optimize`                                                                                                    | `libjvm.dylib`                                                                                                                            |

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

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |        Delta |            % |           Size |   Samples | Callee                                                                                       | Location                                  |
| -----: | -----------: | -----------: | -------------: | --------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
|    new |   +3.698 MiB | 0.0% → 89.8% |  0 B → 3.7 MiB | 0 → 8,972 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|    new | +419.105 KiB |  0.0% → 9.9% |  0 B → 419 KiB |   0 → 592 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |
|    new |   +8.781 KiB |  0.0% → 0.2% | 0 B → 8.78 KiB |    0 → 45 | `loadClass(String)`                                                                          | `java.lang.ClassLoader`                   |
|    new |       +324 B | 0.0% → <0.1% |    0 B → 324 B |     0 → 7 | `InterpreterRuntime::resolve_from_cache`                                                     | `libjvm.dylib`                            |

##### `Compile::optimize_loops` (`libjvm.dylib`)

| Change |      Delta |      % |                Size |   Samples | Callee                     | Location       |
| -----: | ---------: | -----: | ------------------: | --------: | -------------------------- | -------------- |
| +10.7% | +3.191 MiB | 100.0% | 29.7 MiB → 32.9 MiB | 375 → 425 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change |        Delta |            % |                Size |   Samples | Callee                        | Location                                                           |
| ------: | -----------: | -----------: | ------------------: | --------: | ----------------------------- | ------------------------------------------------------------------ |
|     new |   +2.782 MiB | 0.0% → 89.1% |      0 B → 2.78 MiB | 0 → 5,527 | `toCsvRows(Function)`         | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |
|     new | +122.857 KiB |  0.0% → 3.8% |       0 B → 123 KiB |   0 → 313 | `asScala()`                   | `scala.collection.convert.AsScalaExtensions$ListHasAsScala`        |
|     new |  +67.566 KiB |  0.0% → 2.1% |      0 B → 67.6 KiB |   0 → 123 | `toSeq()`                     | `scala.collection.AbstractIterable`                                |
| +324.7% |  +35.471 KiB | 13.7% → 1.5% | 10.9 KiB → 46.4 KiB |   59 → 93 | `loadClass(String)`           | `java.lang.ClassLoader`                                            |
|  +56.4% |   +28.82 KiB | 64.2% → 2.5% | 51.1 KiB → 79.9 KiB | 509 → 465 | `generateData(int, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                        |

##### `wrapAndCopyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|   Change |      Delta |             % |                Size |     Samples | Callee                        | Location                            |
| -------: | ---------: | ------------: | ------------------: | ----------: | ----------------------------- | ----------------------------------- |
| +2731.8% | +2.799 MiB | 76.9% → 98.9% |   105 KiB → 2.9 MiB | 613 → 6,058 | `copyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |
|    +3.5% | +1.125 KiB |  23.6% → 1.1% | 32.2 KiB → 33.3 KiB |   151 → 164 | `wrapSink(Sink)`              | `java.util.stream.AbstractPipeline` |

##### `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|      Change |       Delta |             % |                Size |   Samples | Callee                       | Location                                  |
| ----------: | ----------: | ------------: | ------------------: | --------: | ---------------------------- | ----------------------------------------- |
| +9093131.3% |  +2.775 MiB | <0.1% → 95.6% |     32 B → 2.78 MiB | 1 → 5,465 | `forEachRemaining(Consumer)` | `java.util.Spliterators$ArraySpliterator` |
|      +40.7% | +21.187 KiB |  49.7% → 2.5% | 52.1 KiB → 73.3 KiB | 309 → 297 | `forEachRemaining(Consumer)` | `java.util.Spliterator$OfInt`             |
|      +25.0% |  +5.351 KiB |  20.4% → 0.9% | 21.4 KiB → 26.8 KiB |   24 → 30 | `UncommonTrapBlob`           | `<unknown>`                               |
|      -15.6% |      -600 B |   3.6% → 0.1% | 3.75 KiB → 3.16 KiB |        45 | `forEachRemaining(Consumer)` | `java.util.HashMap$ValueSpliterator`      |
|      +13.0% |      +313 B |   2.2% → 0.1% | 2.35 KiB → 2.65 KiB |   11 → 15 | `begin(long)`                | `java.util.stream.Sink$ChainedInt`        |

##### `collect(Collector)` (`java.util.stream.ReferencePipeline`)

|   Change |      Delta |              % |                Size |     Samples | Callee                 | Location                            |
| -------: | ---------: | -------------: | ------------------: | ----------: | ---------------------- | ----------------------------------- |
| +4535.6% | +2.794 MiB | 98.1% → 100.0% | 63.1 KiB → 2.86 MiB | 478 → 5,921 | `evaluate(TerminalOp)` | `java.util.stream.AbstractPipeline` |

##### `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`)

|   Change |      Delta |              % |                Size |     Samples | Callee                               | Location                            |
| -------: | ---------: | -------------: | ------------------: | ----------: | ------------------------------------ | ----------------------------------- |
| +4575.5% | +2.794 MiB | 98.0% → 100.0% | 62.5 KiB → 2.86 MiB | 460 → 5,903 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |
|      new |     +520 B |   0.0% → <0.1% |         0 B → 520 B |      0 → 13 | `makeSink()`                         | `java.util.stream.ReduceOps$8`      |

##### `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`)

|   Change |      Delta |             % |                Size |     Samples | Callee                                            | Location                              |
| -------: | ---------: | ------------: | ------------------: | ----------: | ------------------------------------------------- | ------------------------------------- |
| +4483.7% | +2.794 MiB | 83.4% → 99.6% | 63.8 KiB → 2.86 MiB | 497 → 5,940 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp` |
|    -2.2% |     -272 B |  15.5% → 0.4% | 11.8 KiB → 11.6 KiB |   124 → 123 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.FindOps$FindOp`     |

##### `toCsvRows(Function)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`)

| Change |      Delta |            % |           Size |   Samples | Callee                                                           | Location                                                           |
| -----: | ---------: | -----------: | -------------: | --------: | ---------------------------------------------------------------- | ------------------------------------------------------------------ |
|    new | +2.774 MiB | 0.0% → 99.7% | 0 B → 2.77 MiB | 0 → 5,463 | `collect(Collector)`                                             | `java.util.stream.ReferencePipeline`                               |
|    new | +4.894 KiB |  0.0% → 0.2% | 0 B → 4.89 KiB |    0 → 45 | `trim(String[])`                                                 | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |
|    new | +2.454 KiB |  0.0% → 0.1% | 0 B → 2.45 KiB |    0 → 14 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives`                             |
|    new |     +152 B | 0.0% → <0.1% |    0 B → 152 B |     0 → 4 | `InterpreterRuntime::resolve_from_cache`                         | `libjvm.dylib`                                                     |
|    new |     +128 B | 0.0% → <0.1% |    0 B → 128 B |     0 → 1 | `linkMethodHandleConstant(Class, int, Class, String, Object)`    | `java.lang.invoke.MethodHandleNatives`                             |

##### `forEachRemaining(Consumer)` (`java.util.Spliterators$ArraySpliterator`)

|      Change |      Delta |            % |            Size |   Samples | Callee           | Location                                   |
| ----------: | ---------: | -----------: | --------------: | --------: | ---------------- | ------------------------------------------ |
| +9093031.3% | +2.774 MiB |       100.0% | 32 B → 2.78 MiB | 1 → 5,464 | `accept(Object)` | `java.util.stream.ReferencePipeline$3$1`   |
|         new |      +32 B | 0.0% → <0.1% |      0 B → 32 B |     0 → 1 | `accept(Object)` | `java.util.stream.ReduceOps$3ReducingSink` |

##### `accept(Object)` (`java.util.stream.ReferencePipeline$3$1`)

| Change |      Delta |            % |           Size |   Samples | Callee          | Location                                                                                      |
| -----: | ---------: | -----------: | -------------: | --------: | --------------- | --------------------------------------------------------------------------------------------- |
|    new | +2.774 MiB | 0.0% → 99.9% | 0 B → 2.77 MiB | 0 → 5,463 | `apply(Object)` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x0000009001123bf8` |

##### `lambda$toCsvRows$2(String[], Function, String)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`)

| Change |      Delta |            % |           Size |   Samples | Callee                                                           | Location                                                             |
| -----: | ---------: | -----------: | -------------: | --------: | ---------------------------------------------------------------- | -------------------------------------------------------------------- |
|    new | +2.761 MiB | 0.0% → 99.5% | 0 B → 2.76 MiB | 0 → 5,306 | `apply(Object)`                                                  | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x0000009001126908` |
|    new |  +6.41 KiB |  0.0% → 0.2% | 0 B → 6.41 KiB |    0 → 55 | `linkMethodHandleConstant(Class, int, Class, String, Object)`    | `java.lang.invoke.MethodHandleNatives`                               |
|    new | +3.241 KiB |  0.0% → 0.1% | 0 B → 3.24 KiB |    0 → 38 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives`                               |
|    new | +2.015 KiB |  0.0% → 0.1% | 0 B → 2.02 KiB |    0 → 35 | `collect(Supplier, ObjIntConsumer, BiConsumer)`                  | `java.util.stream.IntPipeline`                                       |
|    new |     +632 B | 0.0% → <0.1% |    0 B → 632 B |     0 → 1 | `trim(String[])`                                                 | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`   |

##### `apply(Object)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x0000009001123bf8`)

| Change |      Delta |             % |           Size |   Samples | Callee                                           | Location                                                           |
| -----: | ---------: | ------------: | -------------: | --------: | ------------------------------------------------ | ------------------------------------------------------------------ |
|    new | +2.774 MiB | 0.0% → 100.0% | 0 B → 2.77 MiB | 0 → 5,463 | `lambda$toCsvRows$2(String[], Function, String)` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |

##### `rowToArray$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |        Delta |            % |           Size |   Samples | Callee                      | Location                            |
| -----: | -----------: | -----------: | -------------: | --------: | --------------------------- | ----------------------------------- |
|    new |   +1.677 MiB | 0.0% → 60.7% | 0 B → 1.68 MiB | 0 → 3,239 | `<clinit>()`                | `scala.Predef$`                     |
|    new | +466.309 KiB | 0.0% → 16.5% |  0 B → 466 KiB | 0 → 1,087 | `map(Function1)`            | `scala.collection.immutable.Range`  |
|    new |  +372.38 KiB | 0.0% → 13.2% |  0 B → 372 KiB |   0 → 547 | `loadClass(String)`         | `java.lang.ClassLoader`             |
|    new | +237.708 KiB |  0.0% → 8.4% |  0 B → 238 KiB |   0 → 194 | `toArray(ClassTag)`         | `scala.collection.AbstractIterable` |
|    new |  +13.926 KiB |  0.0% → 0.5% | 0 B → 13.9 KiB |    0 → 80 | `until$extension(int, int)` | `scala.runtime.RichInt$`            |

##### `setUpBeforeAll$$anonfun$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |      Delta |             % |           Size |   Samples | Callee              | Location                                  |
| -----: | ---------: | ------------: | -------------: | --------: | ------------------- | ----------------------------------------- |
|    new | +2.761 MiB | 0.0% → 100.0% | 0 B → 2.76 MiB | 0 → 5,306 | `rowToArray$1(Map)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x0000009001126908`)

|  Change |       Delta |             % |           Size |   Samples | Callee                           | Location                                  |
| ------: | ----------: | ------------: | -------------: | --------: | -------------------------------- | ----------------------------------------- |
|     new |  +2.761 MiB | 0.0% → 100.0% | 0 B → 2.76 MiB | 0 → 5,306 | `setUpBeforeAll$$anonfun$1(Map)` | `org.renaissance.jdk.concurrent.FjKmeans` |
| removed | -44.773 KiB | 100.0% → 0.0% | 44.8 KiB → 0 B |   258 → 0 | `$anonfun$adapted$1(Object)`     | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `Compile::Compile` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |       Samples | Callee                                   | Location       |
| -----: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------- | -------------- |
|  +2.0% |   +1.422 MiB | 58.5% → 58.7% | 72.9 MiB → 74.4 MiB | 1,045 → 1,074 | `Compile::Optimize`                      | `libjvm.dylib` |
|  +0.9% | +438.125 KiB | 37.7% → 37.4% |   47 MiB → 47.4 MiB | 1,308 → 1,317 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  +4.4% | +159.843 KiB |   2.8% → 2.9% | 3.53 MiB → 3.69 MiB |     121 → 126 | `ParseGenerator::generate`               | `libjvm.dylib` |
| -28.6% | -128.062 KiB |   0.4% → 0.2% |   448 KiB → 320 KiB |       14 → 10 | `NodeHash::NodeHash`                     | `libjvm.dylib` |
|  +4.8% |  +31.976 KiB |          0.5% |   672 KiB → 704 KiB |       18 → 19 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

| Change |      Delta |      % |              Size |       Samples | Callee             | Location       |
| -----: | ---------: | -----: | ----------------: | ------------: | ------------------ | -------------- |
|  +1.6% | +1.937 MiB | 100.0% | 125 MiB → 127 MiB | 2,776 → 2,812 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |   Samples | Callee                                 | Location       |
| -----: | -----------: | ------------: | ------------------: | --------: | -------------------------------------- | -------------- |
| +10.7% |   +3.191 MiB | 40.7% → 44.2% | 29.7 MiB → 32.9 MiB | 375 → 425 | `Compile::optimize_loops`              | `libjvm.dylib` |
|  -4.8% |   -1.958 MiB | 55.5% → 51.8% | 40.5 MiB → 38.5 MiB | 579 → 550 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
| +19.0% | +127.984 KiB |   0.9% → 1.1% |   672 KiB → 800 KiB |   17 → 21 | `PhaseIterGVN::optimize`               | `libjvm.dylib` |
| +15.4% |   +64.07 KiB |          0.6% |   416 KiB → 480 KiB |   12 → 14 | `PhaseMacroExpand::expand_macro_nodes` | `libjvm.dylib` |
|  -8.3% |  -64.031 KiB |   1.0% → 0.9% |   768 KiB → 704 KiB |   23 → 21 | `PhaseCCP::do_transform`               | `libjvm.dylib` |

##### `os::malloc` (`libjvm.dylib`)

| Change |      Delta |      % |              Size |         Samples | Callee        | Location                 |
| -----: | ---------: | -----: | ----------------: | --------------: | ------------- | ------------------------ |
|  +0.5% | +1.284 MiB | 100.0% | 249 MiB → 251 MiB | 82,535 → 85,594 | `malloc_hook` | `libasyncProfiler.dylib` |
|  +1.8% |  +6.83 KiB |   0.1% | 376 KiB → 383 KiB |   1,982 → 2,128 | `os::malloc`  | `libjvm.dylib`           |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

| Change |      Delta |      % |                Size |         Samples | Callee                                | Location       |
| -----: | ---------: | -----: | ------------------: | --------------: | ------------------------------------- | -------------- |
|  +0.9% | +1.091 MiB | 100.0% |   127 MiB → 128 MiB | 10,456 → 10,856 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |
|  +3.9% |     +256 B |  <0.1% | 6.49 KiB → 6.74 KiB |       220 → 228 | `ServiceThread::service_thread_entry` | `libjvm.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

| Change |       Delta |             % |                Size |         Samples | Callee                          | Location       |
| -----: | ----------: | ------------: | ------------------: | --------------: | ------------------------------- | -------------- |
|  +0.9% |  +1.091 MiB | 52.2% → 52.4% |   127 MiB → 128 MiB | 10,676 → 11,084 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  -0.1% | -89.868 KiB | 46.8% → 46.6% |             114 MiB | 11,195 → 10,293 | `VMThread::run`                 | `libjvm.dylib` |
| -11.4% | -25.132 KiB |          0.1% |   220 KiB → 195 KiB |        106 → 72 | `ThreadsSMRSupport::smr_delete` | `libjvm.dylib` |
| -11.2% | -25.026 KiB |          0.1% |   223 KiB → 198 KiB |       133 → 117 | `JavaThread::post_run`          | `libjvm.dylib` |
|  -0.6% | -12.367 KiB |          0.8% | 2.04 MiB → 2.03 MiB | 14,003 → 14,271 | `WorkerThread::run`             | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

| Change |        Delta |      % |              Size |         Samples | Callee             | Location       |
| -----: | -----------: | -----: | ----------------: | --------------: | ------------------ | -------------- |
|  +0.4% | +963.037 KiB | 100.0% | 244 MiB → 245 MiB | 36,743 → 36,458 | `Thread::call_run` | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

| Change |        Delta |      % |              Size |         Samples | Callee                | Location       |
| -----: | -----------: | -----: | ----------------: | --------------: | --------------------- | -------------- |
|  +0.4% | +963.037 KiB | 100.0% | 244 MiB → 245 MiB | 36,743 → 36,458 | `thread_native_entry` | `libjvm.dylib` |
|  -0.3% |       -160 B |  <0.1% | 56.2 KiB → 56 KiB |             153 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

| Change |       Delta |      % |              Size |         Samples | Callee           | Location                  |
| -----: | ----------: | -----: | ----------------: | --------------: | ---------------- | ------------------------- |
|  +0.4% | +962.88 KiB | 100.0% | 244 MiB → 245 MiB | 36,896 → 36,611 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

| Change |        Delta |      % |              Size |       Samples | Callee       | Location       |
| -----: | -----------: | -----: | ----------------: | ------------: | ------------ | -------------- |
|  +0.7% | +936.335 KiB | 100.0% | 127 MiB → 128 MiB | 2,093 → 2,096 | `os::malloc` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

| Change |        Delta |      % |              Size |       Samples | Callee                | Location       |
| -----: | -----------: | -----: | ----------------: | ------------: | --------------------- | -------------- |
|  +0.7% | +935.812 KiB | 100.0% | 127 MiB → 128 MiB | 2,021 → 2,025 | `Chunk::operator new` | `libjvm.dylib` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

| Change |        Delta |             % |                Size |         Samples | Callee                      | Location                 |
| -----: | -----------: | ------------: | ------------------: | --------------: | --------------------------- | ------------------------ |
| +13.6% | +781.382 KiB | 67.3% → 69.4% | 5.61 MiB → 6.37 MiB |       751 → 847 | `malloc_hook`               | `libasyncProfiler.dylib` |
|  +3.5% |  +97.361 KiB | 32.7% → 30.6% | 2.72 MiB → 2.81 MiB | 21,672 → 22,947 | `JVM_DefineClassWithSource` | `libjvm.dylib`           |

##### `IdealLoopTree::iteration_split_impl` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size | Samples | Callee                                  | Location       |
| ------: | -----------: | ------------: | ----------------: | ------: | --------------------------------------- | -------------- |
| +340.1% | +544.007 KiB | 18.5% → 41.5% | 160 KiB → 704 KiB |  5 → 18 | `PhaseIdealLoop::do_unroll`             | `libjvm.dylib` |
| +171.3% | +383.906 KiB | 25.9% → 35.8% | 224 KiB → 608 KiB |  5 → 14 | `PhaseIdealLoop::insert_pre_post_loops` | `libjvm.dylib` |
|  -20.0% |  -96.007 KiB | 55.6% → 22.6% | 480 KiB → 384 KiB | 15 → 12 | `PhaseIdealLoop::partial_peel`          | `libjvm.dylib` |

##### `IdealLoopTree::iteration_split` (`libjvm.dylib`)

|  Change |        Delta |             % |               Size | Samples | Callee                                | Location       |
| ------: | -----------: | ------------: | -----------------: | ------: | ------------------------------------- | -------------- |
| +274.9% |   +1.031 MiB | 44.4% → 84.9% | 384 KiB → 1.41 MiB | 10 → 36 | `IdealLoopTree::iteration_split`      | `libjvm.dylib` |
|  +96.3% | +831.906 KiB |        100.0% | 864 KiB → 1.66 MiB | 25 → 44 | `IdealLoopTree::iteration_split_impl` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

| Change |       Delta |      % |                Size |   Samples | Callee        | Location       |
| -----: | ----------: | -----: | ------------------: | --------: | ------------- | -------------- |
|  +3.2% | +479.39 KiB | 100.0% | 14.7 MiB → 15.1 MiB | 444 → 445 | `Arena::grow` | `libjvm.dylib` |

##### `AllocateHeap` (`libjvm.dylib`)

| Change |        Delta |      % |    Size |         Samples | Callee       | Location       |
| -----: | -----------: | -----: | ------: | --------------: | ------------ | -------------- |
|  +0.3% | +410.325 KiB | 100.0% | 121 MiB | 68,988 → 71,381 | `os::malloc` | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size |  Samples | Callee                               | Location       |
| ------: | -----------: | ------------: | ------------------: | -------: | ------------------------------------ | -------------- |
|  +14.0% | +415.695 KiB | 97.9% → 99.1% | 2.91 MiB → 3.31 MiB | 90 → 103 | `ParseGenerator::generate`           | `libjvm.dylib` |
|  +13.2% | +351.742 KiB | 87.4% → 87.8% | 2.59 MiB → 2.94 MiB |  80 → 91 | `PredictedCallGenerator::generate`   | `libjvm.dylib` |
| +200.1% |  +63.992 KiB |   1.1% → 2.8% |     32 KiB → 96 KiB |    1 → 3 | `GraphKit::subtype_check_receiver`   | `libjvm.dylib` |
|  -66.7% |  -63.992 KiB |   3.2% → 0.9% |     96 KiB → 32 KiB |    3 → 1 | `PreserveJVMState::PreserveJVMState` | `libjvm.dylib` |
|  -25.0% |  -32.015 KiB |   4.2% → 2.8% |    128 KiB → 96 KiB |    3 → 2 | `GraphKit::type_check_receiver`      | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size |  Samples | Callee                                     | Location       |
| ------: | -----------: | ------------: | ------------------: | -------: | ------------------------------------------ | -------------- |
|  +12.6% | +383.679 KiB | 94.1% → 98.2% | 2.97 MiB → 3.34 MiB | 92 → 104 | `PredictedCallGenerator::generate`         | `libjvm.dylib` |
|   +4.5% |  +95.929 KiB | 66.3% → 64.2% | 2.09 MiB → 2.19 MiB |  65 → 68 | `ParseGenerator::generate`                 | `libjvm.dylib` |
|  +22.2% |  +63.914 KiB |  8.9% → 10.1% |   288 KiB → 352 KiB |   9 → 11 | `LibraryIntrinsic::generate`               | `libjvm.dylib` |
|  +16.7% |  +31.976 KiB |   5.9% → 6.4% |   192 KiB → 224 KiB |    6 → 7 | `Compile::call_generator`                  | `libjvm.dylib` |
| +100.0% |  +31.976 KiB |   1.0% → 1.8% |     32 KiB → 64 KiB |    1 → 2 | `LateInlineVirtualCallGenerator::generate` | `libjvm.dylib` |

##### `Deoptimization::fetch_unroll_info_helper` (`libjvm.dylib`)

| Change |        Delta |             % |              Size |   Samples | Callee                               | Location       |
| -----: | -----------: | ------------: | ----------------: | --------: | ------------------------------------ | -------------- |
| +30.1% | +146.609 KiB | 63.7% → 63.4% | 488 KiB → 634 KiB | 710 → 930 | `AllocateHeap`                       | `libjvm.dylib` |
| +31.5% |   +87.64 KiB | 36.3% → 36.6% | 278 KiB → 366 KiB | 141 → 186 | `Deoptimization::create_vframeArray` | `libjvm.dylib` |

##### `Deoptimization::fetch_unroll_info` (`libjvm.dylib`)

| Change |        Delta |      % |              Size |   Samples | Callee                                     | Location       |
| -----: | -----------: | -----: | ----------------: | --------: | ------------------------------------------ | -------------- |
| +56.0% | +228.781 KiB | 100.0% | 408 KiB → 637 KiB | 455 → 714 | `Deoptimization::fetch_unroll_info_helper` | `libjvm.dylib` |

##### `DeoptimizationBlob` (`<unknown>`)

| Change |        Delta |      % |              Size |   Samples | Callee                              | Location       |
| -----: | -----------: | -----: | ----------------: | --------: | ----------------------------------- | -------------- |
| +56.0% | +228.781 KiB | 100.0% | 408 KiB → 637 KiB | 455 → 714 | `Deoptimization::fetch_unroll_info` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|  Change |        Delta |             % |               Size |  Samples | Callee                      | Location       |
| ------: | -----------: | ------------: | -----------------: | -------: | --------------------------- | -------------- |
|   +7.9% | +255.773 KiB | 88.6% → 90.8% | 3.15 MiB → 3.4 MiB | 98 → 106 | `Parse::do_call`            | `libjvm.dylib` |
|  +20.0% |  +63.953 KiB |  8.8% → 10.0% |  320 KiB → 384 KiB |  10 → 12 | `Parse::do_field_access`    | `libjvm.dylib` |
|  -16.7% |  -63.914 KiB |  10.5% → 8.3% |  384 KiB → 320 KiB |  12 → 10 | `Parse::do_one_bytecode`    | `libjvm.dylib` |
|  -16.7% |  -32.015 KiB |   5.3% → 4.2% |  192 KiB → 160 KiB |    6 → 5 | `GraphKit::access_store_at` | `libjvm.dylib` |
| +100.1% |  +32.015 KiB |   0.9% → 1.7% |    32 KiB → 64 KiB |    1 → 2 | `Parse::array_load`         | `libjvm.dylib` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |        Delta |            % |           Size |   Samples | Callee                                                                                       | Location                                  |
| ------: | -----------: | -----------: | -------------: | --------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| removed |   -2.836 MiB | 96.0% → 0.0% | 2.84 MiB → 0 B | 5,956 → 0 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
| removed | -110.777 KiB |  3.7% → 0.0% |  111 KiB → 0 B |   400 → 0 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |
| removed |   -8.781 KiB |  0.3% → 0.0% | 8.78 KiB → 0 B |    45 → 0 | `loadClass(String)`                                                                          | `java.lang.ClassLoader`                   |
| removed |       -324 B | <0.1% → 0.0% |    324 B → 0 B |     7 → 0 | `InterpreterRuntime::resolve_from_cache`                                                     | `libjvm.dylib`                            |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change |        Delta |             % |               Size |   Samples | Callee                                   | Location                           |
| ------: | -----------: | ------------: | -----------------: | --------: | ---------------------------------------- | ---------------------------------- |
| removed |   -1.678 MiB |  62.3% → 0.0% |     1.68 MiB → 0 B | 3,246 → 0 | `<clinit>()`                             | `scala.Predef$`                    |
|  -99.9% | -649.521 KiB |  23.6% → 2.0% |    650 KiB → 919 B |  639 → 12 | `loadClass(String)`                      | `java.lang.ClassLoader`            |
|  -89.0% | -327.902 KiB | 13.3% → 89.9% | 368 KiB → 40.4 KiB | 775 → 247 | `map(Function1)`                         | `scala.collection.immutable.Range` |
| removed |  -13.926 KiB |   0.5% → 0.0% |     13.9 KiB → 0 B |    80 → 0 | `until$extension(int, int)`              | `scala.runtime.RichInt$`           |
|  -90.1% |   -3.351 KiB |   0.1% → 0.8% |   3.72 KiB → 376 B |   41 → 10 | `InterpreterRuntime::resolve_from_cache` | `libjvm.dylib`                     |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

|  Change |       Delta |            % |                Size |     Samples | Callee                                                        | Location                                                                |
| ------: | ----------: | -----------: | ------------------: | ----------: | ------------------------------------------------------------- | ----------------------------------------------------------------------- |
|  -98.4% |   -2.65 MiB | 97.9% → 7.7% |   2.69 MiB → 45 KiB | 4,832 → 301 | `run(BenchmarkContext)`                                       | `org.renaissance.jdk.concurrent.FjKmeans`                               |
|     new | +481.84 KiB | 0.0% → 82.4% |       0 B → 482 KiB |   0 → 1,546 | `validate()`                                                  | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000090011a8460`    |
|   -1.2% |      -680 B |  1.9% → 9.2% | 54.2 KiB → 53.6 KiB |   160 → 162 | `notifyAfterOperationSetUp(String, int, boolean)`             | `org.renaissance.harness.EventDispatcher`                               |
|   -5.0% |      -163 B |  0.1% → 0.5% | 3.19 KiB → 3.03 KiB |     30 → 25 | `linkMethodHandleConstant(Class, int, Class, String, Object)` | `java.lang.invoke.MethodHandleNatives`                                  |
| removed |       -16 B | <0.1% → 0.0% |          16 B → 0 B |       1 → 0 | `validate()`                                                  | `org.renaissance.BenchmarkResult$Validators$$Lambda.0x0000007001123930` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |       Samples | Callee                         | Location       |
| -----: | -----------: | ------------: | ------------------: | ------------: | ------------------------------ | -------------- |
| -40.0% | -447.671 KiB | 54.1% → 55.0% |  1.09 MiB → 672 KiB |       36 → 22 | `Compilation::emit_lir`        | `libjvm.dylib` |
| -55.9% | -342.912 KiB | 29.6% → 22.1% |   613 KiB → 270 KiB | 2,355 → 2,454 | `Compilation::build_hir`       | `libjvm.dylib` |
| -23.1% |  -61.765 KiB | 12.9% → 16.8% |   267 KiB → 205 KiB |     228 → 233 | `Compilation::emit_code_body`  | `libjvm.dylib` |
|  +6.0% |   +4.222 KiB |   3.4% → 6.1% | 70.2 KiB → 74.4 KiB | 1,491 → 1,580 | `ciMethod::ensure_method_data` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |       Samples | Callee                                               | Location       |
| -----: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------- | -------------- |
| -41.0% | -848.126 KiB | 86.1% → 78.0% | 2.02 MiB → 1.19 MiB | 4,110 → 4,289 | `Compilation::compile_java_method`                   | `libjvm.dylib` |
| +16.0% |  +42.984 KiB | 11.2% → 19.9% |   269 KiB → 312 KiB | 2,065 → 2,191 | `ciEnv::register_method`                             | `libjvm.dylib` |
| -50.0% |  -31.976 KiB |   2.7% → 2.0% |     64 KiB → 32 KiB |         2 → 1 | `DebugInformationRecorder::DebugInformationRecorder` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

| Change |        Delta |      % |                Size |       Samples | Callee                        | Location       |
| -----: | -----------: | -----: | ------------------: | ------------: | ----------------------------- | -------------- |
| -34.8% | -837.119 KiB | 100.0% | 2.35 MiB → 1.53 MiB | 6,177 → 6,481 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

| Change |        Delta |      % |                Size |       Samples | Callee                     | Location       |
| -----: | -----------: | -----: | ------------------: | ------------: | -------------------------- | -------------- |
| -34.8% | -837.119 KiB | 100.0% | 2.35 MiB → 1.53 MiB | 6,177 → 6,481 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

| Change |        Delta |             % |              Size | Samples | Callee                       | Location       |
| -----: | -----------: | ------------: | ----------------: | ------: | ---------------------------- | -------------- |
| -32.0% | -255.812 KiB | 71.4% → 80.9% | 799 KiB → 544 KiB | 25 → 17 | `LinearScan::do_linear_scan` | `libjvm.dylib` |
| -60.0% | -191.859 KiB | 28.6% → 19.1% | 320 KiB → 128 KiB |  11 → 5 | `BlockList::iterate_forward` | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |   Samples | Callee                             | Location       |
| -----: | -----------: | ------------: | ------------------: | --------: | ---------------------------------- | -------------- |
|  -6.3% | -435.429 KiB | 99.1% → 98.5% | 6.71 MiB → 6.29 MiB | 156 → 143 | `Arena::grow`                      | `libjvm.dylib` |
|    new |  +31.976 KiB |   0.0% → 0.5% |        0 B → 32 KiB |     0 → 1 | `IndexSet::alloc_block_containing` | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size |       Samples | Callee                                       | Location       |
| ------: | -----------: | ------------: | ----------------: | ------------: | -------------------------------------------- | -------------- |
|  -50.9% | -246.982 KiB | 79.1% → 88.2% | 485 KiB → 238 KiB | 2,351 → 2,453 | `IR::IR`                                     | `libjvm.dylib` |
|  -50.0% |  -31.976 KiB | 10.4% → 11.8% |   64 KiB → 32 KiB |         2 → 1 | `IR::split_critical_edges`                   | `libjvm.dylib` |
| removed |  -31.976 KiB |   5.2% → 0.0% |      32 KiB → 0 B |         1 → 0 | `GlobalValueNumbering::GlobalValueNumbering` | `libjvm.dylib` |
| removed |  -31.976 KiB |   5.2% → 0.0% |      32 KiB → 0 B |         1 → 0 | `IR::eliminate_null_checks`                  | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

| Change |        Delta |      % |                Size |   Samples | Callee        | Location       |
| -----: | -----------: | -----: | ------------------: | --------: | ------------- | -------------- |
|  -6.7% | -288.125 KiB | 100.0% | 4.19 MiB → 3.91 MiB | 128 → 115 | `Arena::grow` | `libjvm.dylib` |

##### `$anonfun$1(Config, Path)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |        Delta |            % |           Size | Samples | Callee                                         | Location                                                        |
| ------: | -----------: | -----------: | -------------: | ------: | ---------------------------------------------- | --------------------------------------------------------------- |
| removed | -136.827 KiB | 48.9% → 0.0% |  137 KiB → 0 B | 494 → 0 | `asJava()`                                     | `scala.collection.convert.AsJavaExtensions$MutableMapHasAsJava` |
| removed |  -70.432 KiB | 25.2% → 0.0% | 70.4 KiB → 0 B | 189 → 0 | `loadClass(String)`                            | `java.lang.ClassLoader`                                         |
| removed |  -38.786 KiB | 13.9% → 0.0% | 38.8 KiB → 0 B | 324 → 0 | `create(Path, String, Optional, Map, boolean)` | `org.renaissance.core.BenchmarkSuite`                           |
| removed |  -29.378 KiB | 10.5% → 0.0% | 29.4 KiB → 0 B | 129 → 0 | `MutableMapHasAsJava(Map)`                     | `scala.jdk.CollectionConverters$`                               |
| removed |    -2.57 KiB |  0.9% → 0.0% | 2.57 KiB → 0 B |  24 → 0 | `InterpreterRuntime::resolve_from_cache`       | `libjvm.dylib`                                                  |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

|  Change |       Delta |             % |               Size | Samples | Callee                                | Location       |
| ------: | ----------: | ------------: | -----------------: | ------: | ------------------------------------- | -------------- |
|  -27.3% | -95.929 KiB | 44.0% → 47.1% |  352 KiB → 256 KiB |  11 → 8 | `LinearScan::build_intervals`         | `libjvm.dylib` |
|  -50.0% | -95.929 KiB | 24.0% → 17.6% | 192 KiB → 95.9 KiB |   6 → 3 | `LinearScan::allocate_registers`      | `libjvm.dylib` |
| +150.0% | +95.929 KiB |  8.0% → 29.4% |   64 KiB → 160 KiB |   2 → 5 | `LinearScan::assign_reg_num`          | `libjvm.dylib` |
| removed | -63.953 KiB |   8.0% → 0.0% |       64 KiB → 0 B |   2 → 0 | `LinearScan::compute_local_live_sets` | `libjvm.dylib` |
| removed | -31.976 KiB |   4.0% → 0.0% |       32 KiB → 0 B |   1 → 0 | `LinearScan::resolve_data_flow`       | `libjvm.dylib` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

| Change |        Delta |             % |               Size |       Samples | Callee                               | Location       |
| -----: | -----------: | ------------: | -----------------: | ------------: | ------------------------------------ | -------------- |
| -59.6% | -218.599 KiB | 75.7% → 62.4% |  367 KiB → 148 KiB | 2,348 → 2,451 | `GraphBuilder::iterate_all_blocks`   | `libjvm.dylib` |
| -24.1% |  -28.382 KiB | 24.3% → 37.6% | 118 KiB → 89.6 KiB |         3 → 2 | `BlockListBuilder::BlockListBuilder` | `libjvm.dylib` |

##### `IRScope::IRScope` (`libjvm.dylib`)

| Change |        Delta |      % |              Size |       Samples | Callee                       | Location       |
| -----: | -----------: | -----: | ----------------: | ------------: | ---------------------------- | -------------- |
| -50.9% | -246.982 KiB | 100.0% | 485 KiB → 238 KiB | 2,351 → 2,453 | `GraphBuilder::GraphBuilder` | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

| Change |        Delta |      % |              Size |       Samples | Callee             | Location       |
| -----: | -----------: | -----: | ----------------: | ------------: | ------------------ | -------------- |
| -50.9% | -246.982 KiB | 100.0% | 485 KiB → 238 KiB | 2,351 → 2,453 | `IRScope::IRScope` | `libjvm.dylib` |

##### `PhaseIdealLoop::loop_predication_impl_helper` (`libjvm.dylib`)

| Change |        Delta |             % |              Size | Samples | Callee                                        | Location       |
| -----: | -----------: | ------------: | ----------------: | ------: | --------------------------------------------- | -------------- |
| -31.2% | -160.039 KiB | 45.7% → 39.3% | 512 KiB → 352 KiB | 16 → 11 | `Invariance::clone_nodes`                     | `libjvm.dylib` |
| -12.5% |  -64.031 KiB | 45.7% → 50.0% | 512 KiB → 448 KiB | 15 → 13 | `PhaseIdealLoop::create_new_if_for_predicate` | `libjvm.dylib` |
| -50.0% |  -31.976 KiB |   5.7% → 3.6% |   64 KiB → 32 KiB |   2 → 1 | `Invariance::compute_invariance`              | `libjvm.dylib` |
|    new |  +31.976 KiB |   0.0% → 3.6% |      0 B → 32 KiB |   0 → 1 | `Node_Array::grow`                            | `libjvm.dylib` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size |       Samples | Callee                        | Location       |
| ------: | -----------: | ------------: | ----------------: | ------------: | ----------------------------- | -------------- |
|  -45.4% | -122.792 KiB | 73.7% → 99.6% | 270 KiB → 147 KiB | 2,333 → 2,438 | `GraphBuilder::invoke`        | `libjvm.dylib` |
| removed |  -31.976 KiB |   8.7% → 0.0% |      32 KiB → 0 B |         1 → 0 | `GraphBuilder::instance_of`   | `libjvm.dylib` |
| removed |  -31.976 KiB |   8.7% → 0.0% |      32 KiB → 0 B |         1 → 0 | `GraphBuilder::new_instance`  | `libjvm.dylib` |
| removed |  -31.976 KiB |   8.7% → 0.0% |      32 KiB → 0 B |         1 → 0 | `GraphBuilder::method_return` | `libjvm.dylib` |
| removed |  -31.976 KiB |   8.7% → 0.0% |      32 KiB → 0 B |         1 → 0 | `BlockBegin::try_merge`       | `libjvm.dylib` |

##### `GraphBuilder::iterate_all_blocks` (`libjvm.dylib`)

| Change |        Delta |             % |              Size |       Samples | Callee                                      | Location       |
| -----: | -----------: | ------------: | ----------------: | ------------: | ------------------------------------------- | -------------- |
| -59.6% | -218.599 KiB | 99.9% → 99.7% | 367 KiB → 148 KiB | 2,342 → 2,445 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |

##### `PhaseIdealLoop::loop_predication_impl` (`libjvm.dylib`)

|  Change |       Delta |             % |               Size | Samples | Callee                                                    | Location       |
| ------: | ----------: | ------------: | -----------------: | ------: | --------------------------------------------------------- | -------------- |
|  -20.0% | -224.07 KiB | 70.0% → 63.7% | 1.09 MiB → 896 KiB | 34 → 27 | `PhaseIdealLoop::loop_predication_impl_helper`            | `libjvm.dylib` |
|   +9.1% | +31.976 KiB | 22.0% → 27.3% |  352 KiB → 384 KiB | 11 → 12 | `PhaseIdealLoop::loop_predication_follow_branches`        | `libjvm.dylib` |
| removed | -31.976 KiB |   2.0% → 0.0% |       32 KiB → 0 B |   1 → 0 | `PhaseIdealLoop::loop_predication_should_follow_branches` | `libjvm.dylib` |
|  +33.3% | +31.976 KiB |   6.0% → 9.1% | 95.9 KiB → 128 KiB |   3 → 4 | `PathFrequency::to`                                       | `libjvm.dylib` |

##### `IdealLoopTree::loop_predication` (`libjvm.dylib`)

| Change |        Delta |             % |                Size | Samples | Callee                                  | Location       |
| -----: | -----------: | ------------: | ------------------: | ------: | --------------------------------------- | -------------- |
| -12.0% | -192.093 KiB |        100.0% | 1.56 MiB → 1.37 MiB | 49 → 43 | `PhaseIdealLoop::loop_predication_impl` | `libjvm.dylib` |
|  -3.9% |   -32.25 KiB | 52.0% → 56.8% |   832 KiB → 800 KiB | 25 → 24 | `IdealLoopTree::loop_predication`       | `libjvm.dylib` |

##### `Invariance::clone_nodes` (`libjvm.dylib`)

| Change |        Delta |      % |              Size | Samples | Callee             | Location       |
| -----: | -----------: | -----: | ----------------: | ------: | ------------------ | -------------- |
| -31.2% | -160.039 KiB | 100.0% | 512 KiB → 352 KiB | 16 → 11 | `Node_Array::grow` | `libjvm.dylib` |

##### `HeapRegionManager::expand` (`libjvm.dylib`)

| Change |        Delta |     % |                Size |       Samples | Callee                             | Location       |
| -----: | -----------: | ----: | ------------------: | ------------: | ---------------------------------- | -------------- |
| -22.2% | -139.902 KiB | 94.5% |   629 KiB → 489 KiB | 4,172 → 3,244 | `HeapRegion::HeapRegion`           | `libjvm.dylib` |
| -22.2% |   -8.156 KiB |  5.5% | 36.7 KiB → 28.5 KiB |     261 → 203 | `G1CollectedHeap::new_heap_region` | `libjvm.dylib` |

##### `HeapRegionManager::expand_by` (`libjvm.dylib`)

| Change |        Delta |      % |              Size |       Samples | Callee                      | Location       |
| -----: | -----------: | -----: | ----------------: | ------------: | --------------------------- | -------------- |
| -22.2% | -148.058 KiB | 100.0% | 666 KiB → 518 KiB | 4,433 → 3,447 | `HeapRegionManager::expand` | `libjvm.dylib` |

##### `G1CollectedHeap::expand` (`libjvm.dylib`)

| Change |        Delta |      % |              Size |       Samples | Callee                         | Location       |
| -----: | -----------: | -----: | ----------------: | ------------: | ------------------------------ | -------------- |
| -22.2% | -148.058 KiB | 100.0% | 666 KiB → 518 KiB | 4,433 → 3,447 | `HeapRegionManager::expand_by` | `libjvm.dylib` |

##### `G1CollectedHeap::expand_heap_after_young_collection` (`libjvm.dylib`)

| Change |        Delta |      % |              Size |       Samples | Callee                    | Location       |
| -----: | -----------: | -----: | ----------------: | ------------: | ------------------------- | -------------- |
| -22.2% | -148.058 KiB | 100.0% | 666 KiB → 518 KiB | 4,433 → 3,447 | `G1CollectedHeap::expand` | `libjvm.dylib` |

##### `HeapRegion::HeapRegion` (`libjvm.dylib`)

| Change |        Delta |     % |                Size |       Samples | Callee                               | Location       |
| -----: | -----------: | ----: | ------------------: | ------------: | ------------------------------------ | -------------- |
| -22.2% | -134.917 KiB | 96.4% |   607 KiB → 472 KiB | 3,911 → 3,041 | `HeapRegionRemSet::HeapRegionRemSet` | `libjvm.dylib` |
| -22.2% |   -4.984 KiB |  3.6% | 22.4 KiB → 17.4 KiB |     261 → 203 | `AllocateHeap`                       | `libjvm.dylib` |

##### `G1YoungCollector::post_evacuate_collection_set` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size |       Samples | Callee                                                                             | Location       |
| ------: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------------------------------------- | -------------- |
|  -22.2% | -148.058 KiB | 47.6% → 41.1% |   666 KiB → 518 KiB | 4,433 → 3,447 | `G1CollectedHeap::expand_heap_after_young_collection`                              | `libjvm.dylib` |
|   +1.3% |   +8.281 KiB | 45.6% → 51.2% |   638 KiB → 646 KiB |     693 → 702 | `G1PostEvacuateCollectionSetCleanupTask2::G1PostEvacuateCollectionSetCleanupTask2` | `libjvm.dylib` |
|   +1.5% |       +720 B |   3.4% → 3.9% |   48 KiB → 48.7 KiB |       77 → 78 | `G1CollectedHeap::rebuild_free_region_list`                                        | `libjvm.dylib` |
|   +1.5% |       +560 B |   2.7% → 3.0% | 37.3 KiB → 37.8 KiB |       77 → 78 | `G1CollectedHeap::run_batch_task`                                                  | `libjvm.dylib` |
| removed |       -184 B |  <0.1% → 0.0% |         184 B → 0 B |         4 → 0 | `G1CollectedHeap::prepare_for_mutator_after_young_collection`                      | `libjvm.dylib` |

##### `HeapRegionRemSet::HeapRegionRemSet` (`libjvm.dylib`)

| Change |       Delta |     % |               Size |       Samples | Callee                                           | Location       |
| -----: | ----------: | ----: | -----------------: | ------------: | ------------------------------------------------ | -------------- |
| -22.2% |     -87 KiB | 64.5% |  392 KiB → 305 KiB |     261 → 203 | `G1CardSetMemoryManager::G1CardSetMemoryManager` | `libjvm.dylib` |
| -22.3% | -23.958 KiB | 17.7% | 108 KiB → 83.6 KiB | 1,823 → 1,417 | `G1CodeRootSet::G1CodeRootSet`                   | `libjvm.dylib` |
| -22.2% | -23.958 KiB | 17.8% | 108 KiB → 83.9 KiB | 1,827 → 1,421 | `G1CardSet::G1CardSet`                           | `libjvm.dylib` |

##### `G1YoungCollector::collect` (`libjvm.dylib`)

| Change |       Delta |             % |                Size |       Samples | Callee                                              | Location       |
| -----: | ----------: | ------------: | ------------------: | ------------: | --------------------------------------------------- | -------------- |
|  -9.9% | -138.57 KiB | 27.0% → 24.8% | 1.37 MiB → 1.23 MiB | 5,823 → 4,851 | `G1YoungCollector::post_evacuate_collection_set`    | `libjvm.dylib` |
|  +1.3% | +36.703 KiB | 54.4% → 56.2% |  2.76 MiB → 2.8 MiB | 1,156 → 1,171 | `G1YoungCollector::pre_evacuate_collection_set`     | `libjvm.dylib` |
|  +1.2% |  +7.522 KiB | 11.9% → 12.3% |   620 KiB → 628 KiB |     273 → 268 | `G1YoungCollector::evacuate_initial_collection_set` | `libjvm.dylib` |
| -15.0% |  -6.304 KiB |   0.8% → 0.7% |   42 KiB → 35.7 KiB |     480 → 404 | `G1Policy::record_young_collection_start`           | `libjvm.dylib` |
|  +1.5% |   +3.82 KiB |   4.9% → 5.1% |   256 KiB → 260 KiB |     231 → 234 | `G1ParScanThreadStateSet::G1ParScanThreadStateSet`  | `libjvm.dylib` |

##### `G1CollectedHeap::do_collection_pause_at_safepoint_helper` (`libjvm.dylib`)

| Change |       Delta |      % |                Size |       Samples | Callee                      | Location       |
| -----: | ----------: | -----: | ------------------: | ------------: | --------------------------- | -------------- |
|  -1.9% | -96.829 KiB | 100.0% | 5.07 MiB → 4.98 MiB | 8,348 → 7,313 | `G1YoungCollector::collect` | `libjvm.dylib` |

##### `G1CollectedHeap::do_collection_pause_at_safepoint` (`libjvm.dylib`)

| Change |       Delta |      % |                Size |       Samples | Callee                                                     | Location       |
| -----: | ----------: | -----: | ------------------: | ------------: | ---------------------------------------------------------- | -------------- |
|  -1.9% | -96.829 KiB | 100.0% | 5.07 MiB → 4.98 MiB | 8,348 → 7,313 | `G1CollectedHeap::do_collection_pause_at_safepoint_helper` | `libjvm.dylib` |

##### `VM_G1CollectForAllocation::doit` (`libjvm.dylib`)

| Change |       Delta |      % |                Size |       Samples | Callee                                              | Location       |
| -----: | ----------: | -----: | ------------------: | ------------: | --------------------------------------------------- | -------------- |
|  -1.9% | -96.829 KiB | 100.0% | 5.07 MiB → 4.98 MiB | 8,348 → 7,313 | `G1CollectedHeap::do_collection_pause_at_safepoint` | `libjvm.dylib` |

##### `PreserveJVMState::PreserveJVMState` (`libjvm.dylib`)

| Change |       Delta |      % |              Size | Samples | Callee                | Location       |
| -----: | ----------: | -----: | ----------------: | ------: | --------------------- | -------------- |
| -27.3% | -95.968 KiB | 100.0% | 352 KiB → 256 KiB |  11 → 8 | `GraphKit::clone_map` | `libjvm.dylib` |

##### `ResourceBitMap::ResourceBitMap` (`libjvm.dylib`)

|  Change |       Delta |             % |           Size | Samples | Callee        | Location       |
| ------: | ----------: | ------------: | -------------: | ------: | ------------- | -------------- |
| removed | -95.929 KiB | 100.0% → 0.0% | 95.9 KiB → 0 B |   3 → 0 | `Arena::grow` | `libjvm.dylib` |

##### `VM_Operation::evaluate` (`libjvm.dylib`)

| Change |       Delta |     % |                Size |       Samples | Callee                            | Location       |
| -----: | ----------: | ----: | ------------------: | ------------: | --------------------------------- | -------------- |
|  -1.9% | -96.829 KiB |  4.4% | 5.07 MiB → 4.98 MiB | 8,348 → 7,313 | `VM_G1CollectForAllocation::doit` | `libjvm.dylib` |
|    ~0% |  +6.867 KiB | 95.6% |             109 MiB | 2,617 → 2,749 | `VM_G1CollectFull::doit`          | `libjvm.dylib` |

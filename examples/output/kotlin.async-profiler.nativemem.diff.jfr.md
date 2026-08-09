# Allocated native memory profile diff

Allocated 1.57 GiB → 1.56 GiB (-19.464 MiB, -1.2%) over 625,321 samples → 617,888 samples (2.64 KiB per sample).

| Category | Change |       Delta |      % |                Size |           Samples |
| -------- | -----: | ----------: | -----: | ------------------: | ----------------: |
| Native   |  -1.2% | -19.464 MiB | 100.0% | 1.57 GiB → 1.56 GiB | 625,321 → 617,888 |

## Hottest functions

### Self size

#### Improvements

Functions with the largest decrease in native bytes allocated directly in the function body, excluding callees.

##### Native

| Change |       Delta |     % |                Size |           Samples | Function       | Location                 |
| -----: | ----------: | ----: | ------------------: | ----------------: | -------------- | ------------------------ |
|  -1.2% | -19.464 MiB | 99.8% | 1.57 GiB → 1.55 GiB | 614,723 → 607,294 | `malloc_hook`  | `libasyncProfiler.dylib` |
|    ~0% |      -352 B |  0.1% |            2.15 MiB |     9,861 → 9,857 | `realloc_hook` | `libasyncProfiler.dylib` |

### Total size

#### Regressions

Functions with the largest increase in total native bytes allocated in the function and all its callees.

| Change |        Delta |           % |                Size |         Samples | Function                                                               | Location                                             |
| -----: | -----------: | ----------: | ------------------: | --------------: | ---------------------------------------------------------------------- | ---------------------------------------------------- |
|    new | +136.718 MiB | 0.0% → 8.6% |       0 B → 137 MiB |     0 → 473,399 | `invoke(Object, Object, Object)`                                       | `java.lang.invoke.LambdaForm$MH.0x000000f001009400`  |
|    new | +136.718 MiB | 0.0% → 8.6% |       0 B → 137 MiB |     0 → 473,398 | `invokeStatic(Object, Object)`                                         | `java.lang.invoke.LambdaForm$DMH.0x000000f001008000` |
| +33.1% |   +6.862 MiB | 1.3% → 1.7% | 20.7 MiB → 27.6 MiB | 68,186 → 67,737 | `Compilation::compile_method`                                          | `libjvm.dylib`                                       |
| +33.1% |   +6.862 MiB | 1.3% → 1.7% | 20.7 MiB → 27.6 MiB | 68,186 → 67,737 | `Compilation::Compilation`                                             | `libjvm.dylib`                                       |
| +33.1% |   +6.862 MiB | 1.3% → 1.7% | 20.7 MiB → 27.6 MiB | 68,186 → 67,737 | `Compiler::compile_method`                                             | `libjvm.dylib`                                       |
| +49.3% |   +6.677 MiB | 0.8% → 1.3% | 13.5 MiB → 20.2 MiB | 27,642 → 27,324 | `Compilation::compile_java_method`                                     | `libjvm.dylib`                                       |
| +48.0% |   +4.042 MiB | 0.5% → 0.8% | 8.42 MiB → 12.5 MiB |       553 → 683 | `Compilation::emit_lir`                                                | `libjvm.dylib`                                       |
| +49.2% |   +2.949 MiB | 0.4% → 0.6% |    6 MiB → 8.95 MiB |       175 → 270 | `LinearScan::do_linear_scan`                                           | `libjvm.dylib`                                       |
| +14.9% |   +2.466 MiB | 1.0% → 1.2% |   16.5 MiB → 19 MiB |       412 → 495 | `Matcher::match_tree`                                                  | `libjvm.dylib`                                       |
|    new |   +2.128 MiB | 0.0% → 0.1% |      0 B → 2.13 MiB |      0 → 16,420 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f001230000` |
| +98.4% |   +1.967 MiB | 0.1% → 0.2% |    2 MiB → 3.97 MiB |        63 → 127 | `Matcher::Label_Root`                                                  | `libjvm.dylib`                                       |
| +22.4% |    +1.52 MiB | 0.4% → 0.5% |  6.8 MiB → 8.32 MiB |       481 → 524 | `PhaseOutput::Output`                                                  | `libjvm.dylib`                                       |
| +11.0% |   +1.468 MiB | 0.8% → 0.9% | 13.3 MiB → 14.8 MiB |       278 → 308 | `IdealLoopTree::iteration_split`                                       | `libjvm.dylib`                                       |
| +38.8% |   +1.381 MiB | 0.2% → 0.3% | 3.56 MiB → 4.94 MiB | 16,470 → 16,325 | `Compilation::build_hir`                                               | `libjvm.dylib`                                       |
| +70.5% |   +1.302 MiB | 0.1% → 0.2% | 1.85 MiB → 3.15 MiB | 16,427 → 16,279 | `GraphBuilder::iterate_all_blocks`                                     | `libjvm.dylib`                                       |
| +68.8% |   +1.271 MiB | 0.1% → 0.2% | 1.85 MiB → 3.12 MiB | 16,417 → 16,270 | `GraphBuilder::iterate_bytecodes_for_block`                            | `libjvm.dylib`                                       |
| +97.9% |   +1.258 MiB | 0.1% → 0.2% | 1.29 MiB → 2.54 MiB |           4,633 | `Compilation::emit_code_body`                                          | `libjvm.dylib`                                       |
| +22.0% |   +1.249 MiB |        0.4% | 5.69 MiB → 6.94 MiB |       113 → 135 | `ModRefBarrierSetC2::store_at_resolved`                                | `libjvm.dylib`                                       |
| +37.0% |   +1.224 MiB | 0.2% → 0.3% | 3.31 MiB → 4.53 MiB | 16,462 → 16,312 | `GraphBuilder::GraphBuilder`                                           | `libjvm.dylib`                                       |
| +37.0% |   +1.224 MiB | 0.2% → 0.3% | 3.31 MiB → 4.53 MiB | 16,462 → 16,312 | `IRScope::IRScope`                                                     | `libjvm.dylib`                                       |

##### Native

| Change |        Delta |            % |                Size |         Samples | Function                                                           | Location       |
| -----: | -----------: | -----------: | ------------------: | --------------: | ------------------------------------------------------------------ | -------------- |
| +33.1% |   +6.862 MiB |  1.3% → 1.7% | 20.7 MiB → 27.6 MiB | 68,186 → 67,737 | `Compiler::compile_method`                                         | `libjvm.dylib` |
| +11.0% |   +1.468 MiB |  0.8% → 0.9% | 13.3 MiB → 14.8 MiB |       278 → 308 | `IdealLoopTree::iteration_split`                                   | `libjvm.dylib` |
| +22.0% |   +1.249 MiB |         0.4% | 5.69 MiB → 6.94 MiB |       113 → 135 | `ModRefBarrierSetC2::store_at_resolved`                            | `libjvm.dylib` |
| +37.0% |   +1.224 MiB |  0.2% → 0.3% | 3.31 MiB → 4.53 MiB | 16,462 → 16,312 | `IRScope::IRScope`                                                 | `libjvm.dylib` |
| +37.0% |   +1.224 MiB |  0.2% → 0.3% | 3.31 MiB → 4.53 MiB | 16,462 → 16,312 | `IR::IR`                                                           | `libjvm.dylib` |
| +20.7% |   +1.218 MiB |         0.4% |  5.88 MiB → 7.1 MiB |       118 → 139 | `BarrierSetC2::store_at`                                           | `libjvm.dylib` |
| +33.3% |   +1.156 MiB |  0.2% → 0.3% | 3.47 MiB → 4.63 MiB |         72 → 91 | `G1BarrierSetC2::post_barrier`                                     | `libjvm.dylib` |
|  +9.9% |   +1.124 MiB |  0.7% → 0.8% | 11.3 MiB → 12.4 MiB |       225 → 250 | `IdealLoopTree::iteration_split_impl`                              | `libjvm.dylib` |
| +18.5% |   +1.093 MiB |         0.4% | 5.91 MiB → 7.01 MiB |       143 → 160 | `Parse::do_field_access`                                           | `libjvm.dylib` |
| +14.8% | +799.632 KiB |  0.3% → 0.4% | 5.28 MiB → 6.06 MiB |       105 → 114 | `Parse::do_put_xxx`                                                | `libjvm.dylib` |
| +62.5% | +799.414 KiB |         0.1% | 1.25 MiB → 2.03 MiB |         40 → 65 | `VectorSet::grow`                                                  | `libjvm.dylib` |
| +27.1% | +607.484 KiB |  0.1% → 0.2% | 2.19 MiB → 2.78 MiB |         52 → 64 | `Parse::do_if`                                                     | `libjvm.dylib` |
| +73.9% | +543.773 KiB | <0.1% → 0.1% |  736 KiB → 1.25 MiB |         19 → 27 | `Parse::adjust_map_after_if`                                       | `libjvm.dylib` |
| +48.6% | +455.671 KiB |         0.1% |  938 KiB → 1.36 MiB |         25 → 39 | `CodeEmitInfo::record_debug_info`                                  | `libjvm.dylib` |
| +21.2% | +448.054 KiB |  0.1% → 0.2% |  2.06 MiB → 2.5 MiB |         40 → 51 | `Parse::build_exits`                                               | `libjvm.dylib` |
| +28.6% | +448.015 KiB |         0.1% | 1.53 MiB → 1.97 MiB |         18 → 24 | `DirectCallGenerator::generate`                                    | `libjvm.dylib` |
|  +1.9% | +445.671 KiB |         1.4% | 22.5 MiB → 22.9 MiB |       516 → 552 | `PredictedCallGenerator::generate`                                 | `libjvm.dylib` |
| +75.0% | +383.718 KiB | <0.1% → 0.1% |   512 KiB → 895 KiB |         16 → 28 | `ResourceBitMap::ResourceBitMap`                                   | `libjvm.dylib` |
|  +1.1% | +373.015 KiB |         2.0% |   32 MiB → 32.3 MiB |       743 → 769 | `Parse::do_one_block`                                              | `libjvm.dylib` |
|  +0.8% | +352.484 KiB |  2.7% → 2.8% | 43.9 MiB → 44.2 MiB |     983 → 1,019 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib` |

#### Improvements

Functions with the largest decrease in total native bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |           Samples | Function                                   | Location                                             |
| ------: | -----------: | ------------: | ------------------: | ----------------: | ------------------------------------------ | ---------------------------------------------------- |
| removed | -136.303 MiB |   8.5% → 0.0% |       136 MiB → 0 B |       473,240 → 0 | `invoke(Object, Object, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000d801009400`  |
| removed | -136.303 MiB |   8.5% → 0.0% |       136 MiB → 0 B |       473,239 → 0 | `invokeStatic(Object, Object)`             | `java.lang.invoke.LambdaForm$DMH.0x000000d801008000` |
|   -1.9% |  -26.407 MiB | 85.7% → 85.1% | 1.35 GiB → 1.32 GiB |   26,868 → 26,681 | `Compile::Compile`                         | `libjvm.dylib`                                       |
|   -1.9% |  -26.407 MiB | 85.7% → 85.1% | 1.35 GiB → 1.32 GiB |   26,868 → 26,681 | `C2Compiler::compile_method`               | `libjvm.dylib`                                       |
|   -1.4% |  -19.719 MiB | 87.2% → 87.1% | 1.37 GiB → 1.35 GiB | 134,727 → 127,220 | `_pthread_start`                           | `libsystem_pthread.dylib`                            |
|   -1.4% |  -19.719 MiB | 87.2% → 87.1% | 1.37 GiB → 1.35 GiB | 134,727 → 127,220 | `thread_start`                             | `libsystem_pthread.dylib`                            |
|   -1.4% |  -19.719 MiB | 87.2% → 87.1% | 1.37 GiB → 1.35 GiB | 134,574 → 127,067 | `Thread::call_run`                         | `libjvm.dylib`                                       |
|   -1.4% |  -19.719 MiB | 87.2% → 87.1% | 1.37 GiB → 1.35 GiB | 134,574 → 127,067 | `thread_native_entry`                      | `libjvm.dylib`                                       |
|   -1.3% |  -19.465 MiB | 90.4% → 90.3% |  1.42 GiB → 1.4 GiB | 548,882 → 541,458 | `os::malloc`                               | `libjvm.dylib`                                       |
|   -1.2% |  -19.464 MiB |         99.8% | 1.57 GiB → 1.55 GiB | 614,723 → 607,294 | `malloc_hook`                              | `libasyncProfiler.dylib`                             |
|   -1.4% |  -19.357 MiB | 87.0% → 86.8% | 1.37 GiB → 1.35 GiB | 107,661 → 106,942 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`                                       |
|   -1.4% |  -19.346 MiB | 87.0% → 86.8% | 1.37 GiB → 1.35 GiB | 108,736 → 108,034 | `JavaThread::thread_main_inner`            | `libjvm.dylib`                                       |
|   -1.4% |  -19.346 MiB | 87.0% → 86.8% | 1.37 GiB → 1.35 GiB | 107,917 → 107,222 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`                                       |
|   -1.4% |  -19.016 MiB | 86.5% → 86.3% | 1.36 GiB → 1.34 GiB |   17,251 → 17,479 | `Arena::grow`                              | `libjvm.dylib`                                       |
|   -1.4% |  -18.996 MiB | 86.5% → 86.4% | 1.36 GiB → 1.34 GiB |   17,307 → 17,548 | `Chunk::operator new`                      | `libjvm.dylib`                                       |
|   -2.4% |  -17.257 MiB | 45.1% → 44.6% |   727 MiB → 710 MiB |     8,863 → 8,774 | `Compile::Optimize`                        | `libjvm.dylib`                                       |
|   -2.3% |   -15.21 MiB | 40.5% → 40.0% |   653 MiB → 638 MiB |     7,350 → 7,256 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib`                                       |
|   -2.3% |    -15.2 MiB | 40.9% → 40.4% |   659 MiB → 644 MiB |     7,461 → 7,367 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib`                                       |
|   -2.3% |  -15.178 MiB | 40.5% → 40.0% |   653 MiB → 638 MiB |     7,349 → 7,256 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib`                                       |
|   -1.6% |   -9.608 MiB | 37.6% → 37.5% |   607 MiB → 597 MiB |   15,069 → 14,961 | `Compile::Code_Gen`                        | `libjvm.dylib`                                       |

##### Native

| Change |        Delta |             % |                Size |           Samples | Function                                                                           | Location                  |
| -----: | -----------: | ------------: | ------------------: | ----------------: | ---------------------------------------------------------------------------------- | ------------------------- |
|  -1.4% |  -19.719 MiB | 87.2% → 87.1% | 1.37 GiB → 1.35 GiB | 134,727 → 127,220 | `_pthread_start`                                                                   | `libsystem_pthread.dylib` |
|  -1.4% |  -19.719 MiB | 87.2% → 87.1% | 1.37 GiB → 1.35 GiB | 134,727 → 127,220 | `thread_start`                                                                     | `libsystem_pthread.dylib` |
|  -1.4% |  -19.719 MiB | 87.2% → 87.1% | 1.37 GiB → 1.35 GiB | 134,574 → 127,067 | `Thread::call_run`                                                                 | `libjvm.dylib`            |
|  -1.4% |  -19.719 MiB | 87.2% → 87.1% | 1.37 GiB → 1.35 GiB | 134,574 → 127,067 | `thread_native_entry`                                                              | `libjvm.dylib`            |
|  -1.3% |  -19.465 MiB | 90.4% → 90.3% |  1.42 GiB → 1.4 GiB | 548,882 → 541,458 | `os::malloc`                                                                       | `libjvm.dylib`            |
|  -1.2% |  -19.464 MiB |         99.8% | 1.57 GiB → 1.55 GiB | 614,723 → 607,294 | `malloc_hook`                                                                      | `libasyncProfiler.dylib`  |
|  -1.4% |  -19.346 MiB | 87.0% → 86.8% | 1.37 GiB → 1.35 GiB | 108,736 → 108,034 | `JavaThread::thread_main_inner`                                                    | `libjvm.dylib`            |
|  -1.4% |  -19.016 MiB | 86.5% → 86.3% | 1.36 GiB → 1.34 GiB |   17,251 → 17,479 | `Arena::grow`                                                                      | `libjvm.dylib`            |
|  -1.4% |  -18.996 MiB | 86.5% → 86.4% | 1.36 GiB → 1.34 GiB |   17,307 → 17,548 | `Chunk::operator new`                                                              | `libjvm.dylib`            |
|  -2.8% |   -6.222 MiB | 13.8% → 13.6% |   223 MiB → 217 MiB |     4,726 → 4,707 | `Arena::Arealloc`                                                                  | `libjvm.dylib`            |
| -18.9% |   -5.531 MiB |   1.8% → 1.5% | 29.3 MiB → 23.7 MiB |         685 → 580 | `IdealLoopTree::loop_predication`                                                  | `libjvm.dylib`            |
| -25.2% |   -4.532 MiB |   1.1% → 0.8% |   18 MiB → 13.4 MiB |         431 → 343 | `PathFrequency::to`                                                                | `libjvm.dylib`            |
| -23.5% |   -4.126 MiB |   1.1% → 0.8% | 17.6 MiB → 13.4 MiB |         418 → 343 | `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to`               | `libjvm.dylib`            |
|  -4.2% | -768.164 KiB |          1.1% |   18 MiB → 17.3 MiB |         330 → 317 | `Type_Array::grow`                                                                 | `libjvm.dylib`            |
| -55.9% | -583.804 KiB |  0.1% → <0.1% |  1.02 MiB → 461 KiB |    13,178 → 6,733 | `G1EvacuateRegionsBaseTask::work`                                                  | `libjvm.dylib`            |
|  -0.8% | -501.863 KiB |          3.7% | 59.3 MiB → 58.9 MiB | 462,399 → 454,880 | `AllocateHeap`                                                                     | `libjvm.dylib`            |
|  -8.1% | -448.031 KiB |          0.3% | 5.41 MiB → 4.97 MiB |         121 → 119 | `GrowableArrayWithAllocator<unsigned int, GrowableArray<unsigned int>>::expand_to` | `libjvm.dylib`            |
| -34.2% | -416.093 KiB |  0.1% → <0.1% |  1.19 MiB → 800 KiB |           21 → 20 | `G1BarrierSetC2::g1_mark_card`                                                     | `libjvm.dylib`            |
| -15.8% |  -397.07 KiB |   0.2% → 0.1% | 2.46 MiB → 2.07 MiB |   16,922 → 10,188 | `WorkerThread::run`                                                                | `libjvm.dylib`            |
| -21.4% | -384.125 KiB |          0.1% | 1.75 MiB → 1.38 MiB |           32 → 29 | `Parse::merge_common`                                                              | `libjvm.dylib`            |

# Allocated native memory profile diff

Allocated 1.06 GiB → 1.09 GiB (+24.771 MiB, +2.3%) over 169,813 samples → 169,581 samples (6.56 KiB → 6.72 KiB per sample).

| Category | Change |       Delta |      % |                Size |           Samples |
| -------- | -----: | ----------: | -----: | ------------------: | ----------------: |
| Native   |  +2.3% | +24.771 MiB | 100.0% | 1.06 GiB → 1.09 GiB | 169,813 → 169,581 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in native bytes allocated directly in the function body, excluding callees.

##### Native

| Change |       Delta |      % |                Size |           Samples | Function      | Location                 |
| -----: | ----------: | -----: | ------------------: | ----------------: | ------------- | ------------------------ |
|  +2.3% | +24.772 MiB | 100.0% | 1.06 GiB → 1.09 GiB | 168,923 → 168,691 | `malloc_hook` | `libasyncProfiler.dylib` |

#### Improvements

Functions with the largest decrease in native bytes allocated directly in the function body, excluding callees.

##### Native

| Change |  Delta |     % |              Size | Samples | Function       | Location                 |
| -----: | -----: | ----: | ----------------: | ------: | -------------- | ------------------------ |
|  -0.4% | -704 B | <0.1% | 194 KiB → 193 KiB |     845 | `realloc_hook` | `libasyncProfiler.dylib` |

### Total size

#### Regressions

Functions with the largest increase in total native bytes allocated in the function and all its callees.

| Change |       Delta |             % |                Size |           Samples | Function                                   | Location                  |
| -----: | ----------: | ------------: | ------------------: | ----------------: | ------------------------------------------ | ------------------------- |
|  +2.4% | +25.774 MiB | 97.1% → 97.2% | 1.03 GiB → 1.06 GiB |   17,221 → 17,476 | `Compile::Compile`                         | `libjvm.dylib`            |
|  +2.4% | +25.774 MiB | 97.1% → 97.2% | 1.03 GiB → 1.06 GiB |   17,221 → 17,476 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
|  +2.4% | +25.075 MiB |         97.9% | 1.04 GiB → 1.06 GiB |   13,109 → 13,320 | `Chunk::operator new`                      | `libjvm.dylib`            |
|  +2.4% | +25.075 MiB |         97.9% | 1.04 GiB → 1.06 GiB |   13,066 → 13,277 | `Arena::grow`                              | `libjvm.dylib`            |
|  +2.3% | +24.878 MiB | 98.0% → 98.1% | 1.04 GiB → 1.07 GiB |   51,679 → 51,913 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  +2.3% | +24.866 MiB | 98.0% → 98.1% | 1.04 GiB → 1.07 GiB |   51,756 → 51,967 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
|  +2.3% | +24.866 MiB | 98.0% → 98.1% | 1.04 GiB → 1.07 GiB |   52,202 → 52,411 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
|  +2.3% |  +24.78 MiB |         98.1% | 1.04 GiB → 1.07 GiB |   55,999 → 55,877 | `_pthread_start`                           | `libsystem_pthread.dylib` |
|  +2.3% |  +24.78 MiB |         98.1% | 1.04 GiB → 1.07 GiB |   55,999 → 55,877 | `thread_start`                             | `libsystem_pthread.dylib` |
|  +2.3% |  +24.78 MiB |         98.1% | 1.04 GiB → 1.07 GiB |   55,846 → 55,724 | `Thread::call_run`                         | `libjvm.dylib`            |
|  +2.3% |  +24.78 MiB |         98.1% | 1.04 GiB → 1.07 GiB |   55,846 → 55,724 | `thread_native_entry`                      | `libjvm.dylib`            |
|  +2.3% | +24.772 MiB |        100.0% | 1.06 GiB → 1.09 GiB | 168,923 → 168,691 | `malloc_hook`                              | `libasyncProfiler.dylib`  |
|  +2.3% | +24.764 MiB |         99.2% | 1.05 GiB → 1.08 GiB | 157,921 → 157,685 | `os::malloc`                               | `libjvm.dylib`            |
|  +3.1% | +18.541 MiB | 55.6% → 56.0% |   605 MiB → 623 MiB |     7,456 → 7,679 | `Compile::Optimize`                        | `libjvm.dylib`            |
|  +3.1% | +17.366 MiB | 51.3% → 51.7% |   558 MiB → 576 MiB |     6,461 → 6,668 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib`            |
|  +3.1% | +16.928 MiB | 50.8% → 51.1% |   552 MiB → 569 MiB |     6,363 → 6,562 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib`            |
|  +3.1% | +16.928 MiB | 50.8% → 51.1% |   552 MiB → 569 MiB |     6,363 → 6,562 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib`            |
|  +2.9% |  +7.947 MiB | 25.6% → 25.7% |   279 MiB → 287 MiB |     2,999 → 3,101 | `Compile::optimize_loops`                  | `libjvm.dylib`            |
|  +1.9% |  +7.486 MiB | 35.4% → 35.3% |   385 MiB → 393 MiB |     2,589 → 2,602 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib`            |
|  +1.5% |  +6.512 MiB | 38.8% → 38.5% |   422 MiB → 429 MiB |     7,964 → 7,980 | `Compile::Code_Gen`                        | `libjvm.dylib`            |

##### Native

| Change |          Delta |             % |                Size |           Samples | Function                                                             | Location                  |
| -----: | -------------: | ------------: | ------------------: | ----------------: | -------------------------------------------------------------------- | ------------------------- |
|  +2.4% |    +25.075 MiB |         97.9% | 1.04 GiB → 1.06 GiB |   13,109 → 13,320 | `Chunk::operator new`                                                | `libjvm.dylib`            |
|  +2.4% |    +25.075 MiB |         97.9% | 1.04 GiB → 1.06 GiB |   13,066 → 13,277 | `Arena::grow`                                                        | `libjvm.dylib`            |
|  +2.3% |    +24.866 MiB | 98.0% → 98.1% | 1.04 GiB → 1.07 GiB |   52,202 → 52,411 | `JavaThread::thread_main_inner`                                      | `libjvm.dylib`            |
|  +2.3% |     +24.78 MiB |         98.1% | 1.04 GiB → 1.07 GiB |   55,999 → 55,877 | `_pthread_start`                                                     | `libsystem_pthread.dylib` |
|  +2.3% |     +24.78 MiB |         98.1% | 1.04 GiB → 1.07 GiB |   55,999 → 55,877 | `thread_start`                                                       | `libsystem_pthread.dylib` |
|  +2.3% |     +24.78 MiB |         98.1% | 1.04 GiB → 1.07 GiB |   55,846 → 55,724 | `Thread::call_run`                                                   | `libjvm.dylib`            |
|  +2.3% |     +24.78 MiB |         98.1% | 1.04 GiB → 1.07 GiB |   55,846 → 55,724 | `thread_native_entry`                                                | `libjvm.dylib`            |
|  +2.3% |    +24.772 MiB |        100.0% | 1.06 GiB → 1.09 GiB | 168,923 → 168,691 | `malloc_hook`                                                        | `libasyncProfiler.dylib`  |
|  +2.3% |    +24.764 MiB |         99.2% | 1.05 GiB → 1.08 GiB | 157,921 → 157,685 | `os::malloc`                                                         | `libjvm.dylib`            |
|  +3.2% |     +5.312 MiB | 15.5% → 15.6% |   168 MiB → 174 MiB |     3,676 → 3,734 | `Arena::Arealloc`                                                    | `libjvm.dylib`            |
| +10.5% |     +3.062 MiB |   2.7% → 2.9% | 29.1 MiB → 32.2 MiB |         719 → 793 | `IdealLoopTree::loop_predication`                                    | `libjvm.dylib`            |
| +16.4% |     +2.594 MiB |   1.5% → 1.7% | 15.8 MiB → 18.4 MiB |         397 → 468 | `PathFrequency::to`                                                  | `libjvm.dylib`            |
| +14.3% |     +2.219 MiB |   1.4% → 1.6% | 15.6 MiB → 17.8 MiB |         389 → 448 | `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` | `libjvm.dylib`            |
| +33.5% |     +1.445 MiB |   0.4% → 0.5% | 4.31 MiB → 5.76 MiB |          99 → 116 | `IdealLoopTree::counted_loop`                                        | `libjvm.dylib`            |
|  +3.3% |     +1.281 MiB |   3.5% → 3.6% | 38.4 MiB → 39.7 MiB |         866 → 893 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to`   | `libjvm.dylib`            |
|  +8.0% | +1,001.703 KiB |   1.1% → 1.2% | 12.3 MiB → 13.3 MiB |         225 → 236 | `IdealLoopTree::iteration_split_impl`                                | `libjvm.dylib`            |
| +17.5% |   +863.968 KiB |   0.4% → 0.5% | 4.81 MiB → 5.66 MiB |         111 → 119 | `Parse::do_field_access`                                             | `libjvm.dylib`            |
| +32.0% |   +768.078 KiB |   0.2% → 0.3% | 2.34 MiB → 3.09 MiB |           62 → 67 | `G1BarrierSetC2::post_barrier`                                       | `libjvm.dylib`            |
|  +3.5% |   +736.703 KiB |          1.9% |   20.3 MiB → 21 MiB |         489 → 504 | `Parse::do_one_block`                                                | `libjvm.dylib`            |
|  +3.9% |   +736.671 KiB |          1.7% | 18.6 MiB → 19.3 MiB |         452 → 465 | `Parse::do_call`                                                     | `libjvm.dylib`            |

#### Improvements

Functions with the largest decrease in total native bytes allocated in the function and all its callees.

|  Change |        Delta |            % |                Size |         Samples | Function                                      | Location                                            |
| ------: | -----------: | -----------: | ------------------: | --------------: | --------------------------------------------- | --------------------------------------------------- |
|  -97.0% |   -5.737 MiB | 0.5% → <0.1% |  5.91 MiB → 180 KiB |  32,237 → 1,388 | `invoke(Object, Object)`                      | `java.lang.invoke.LambdaForm$MH.0x0000007001210800` |
| -100.0% |   -4.448 MiB | 0.4% → <0.1% |    4.45 MiB → 548 B |      20,481 → 8 | `invoke(Object, Object, Object)`              | `java.lang.invoke.LambdaForm$MH.0x0000007001215800` |
|  -37.5% |   -1.217 MiB |  0.3% → 0.2% | 3.25 MiB → 2.03 MiB |        103 → 65 | `Matcher::Label_Root`                         | `libjvm.dylib`                                      |
|  -30.4% |   -1.187 MiB |  0.4% → 0.2% | 3.91 MiB → 2.72 MiB |         71 → 53 | `PhaseIdealLoop::create_slow_version_of_loop` | `libjvm.dylib`                                      |
|  -30.4% |   -1.187 MiB |  0.4% → 0.2% | 3.91 MiB → 2.72 MiB |         71 → 53 | `PhaseIdealLoop::do_unswitching`              | `libjvm.dylib`                                      |
|  -18.3% |    -1.03 MiB |  0.5% → 0.4% | 5.62 MiB → 4.59 MiB |       455 → 422 | `Compilation::emit_lir`                       | `libjvm.dylib`                                      |
|  -22.9% | -991.273 KiB |  0.4% → 0.3% | 4.23 MiB → 3.26 MiB |        120 → 89 | `LinearScan::do_linear_scan`                  | `libjvm.dylib`                                      |
|   -9.4% | -979.539 KiB |  0.9% → 0.8% | 10.1 MiB → 9.18 MiB | 28,654 → 28,629 | `Compilation::compile_method`                 | `libjvm.dylib`                                      |
|   -9.4% | -979.539 KiB |  0.9% → 0.8% | 10.1 MiB → 9.18 MiB | 28,654 → 28,629 | `Compilation::Compilation`                    | `libjvm.dylib`                                      |
|   -9.4% | -979.539 KiB |  0.9% → 0.8% | 10.1 MiB → 9.18 MiB | 28,654 → 28,629 | `Compiler::compile_method`                    | `libjvm.dylib`                                      |
|  -65.1% | -895.343 KiB | 0.1% → <0.1% |  1.34 MiB → 480 KiB |         43 → 15 | `PhaseChaitin::post_allocate_copy_removal`    | `libjvm.dylib`                                      |
|  -10.3% | -864.398 KiB |  0.8% → 0.7% | 8.23 MiB → 7.38 MiB | 16,822 → 16,776 | `Compilation::compile_java_method`            | `libjvm.dylib`                                      |
|  -95.8% |  -735.46 KiB | 0.1% → <0.1% |    767 KiB → 32 KiB |          24 → 1 | `ResourceBitMap::ResourceBitMap`              | `libjvm.dylib`                                      |
|  -95.7% | -703.484 KiB | 0.1% → <0.1% |    735 KiB → 32 KiB |          23 → 1 | `LinearScan::compute_local_live_sets`         | `libjvm.dylib`                                      |
|  -16.7% | -672.078 KiB |  0.4% → 0.3% | 3.94 MiB → 3.28 MiB |         69 → 64 | `PhaseIdealLoop::fix_body_edges`              | `libjvm.dylib`                                      |
|   -5.0% | -532.195 KiB |  1.0% → 0.9% | 10.5 MiB → 9.97 MiB |       252 → 242 | `PhaseIdealLoop::split_if_with_blocks`        | `libjvm.dylib`                                      |
|   -4.1% | -480.101 KiB |  1.1% → 1.0% | 11.6 MiB → 11.1 MiB |       205 → 201 | `Type_Array::grow`                            | `libjvm.dylib`                                      |
|  -11.9% | -448.273 KiB |         0.3% | 3.69 MiB → 3.25 MiB |              72 | `GraphKit::clone_map`                         | `libjvm.dylib`                                      |
|  -31.8% | -448.117 KiB |         0.1% |  1.38 MiB → 960 KiB |         29 → 24 | `Parse::build_exits`                          | `libjvm.dylib`                                      |
|  -28.0% | -432.007 KiB |         0.1% |  1.5 MiB → 1.08 MiB |         42 → 27 | `PhaseOutput::BuildOopMaps`                   | `libjvm.dylib`                                      |

##### Native

|  Change |        Delta |            % |                Size |           Samples | Function                                   | Location       |
| ------: | -----------: | -----------: | ------------------: | ----------------: | ------------------------------------------ | -------------- |
|   -9.4% | -979.539 KiB |  0.9% → 0.8% | 10.1 MiB → 9.18 MiB |   28,654 → 28,629 | `Compiler::compile_method`                 | `libjvm.dylib` |
|  -95.8% |  -735.46 KiB | 0.1% → <0.1% |    767 KiB → 32 KiB |            24 → 1 | `ResourceBitMap::ResourceBitMap`           | `libjvm.dylib` |
|   -4.1% | -480.101 KiB |  1.1% → 1.0% | 11.6 MiB → 11.1 MiB |         205 → 201 | `Type_Array::grow`                         | `libjvm.dylib` |
|  -31.8% | -448.117 KiB |         0.1% |  1.38 MiB → 960 KiB |           29 → 24 | `Parse::build_exits`                       | `libjvm.dylib` |
|  -17.4% | -384.164 KiB |         0.2% | 2.16 MiB → 1.78 MiB |           45 → 42 | `Parse::do_if`                             | `libjvm.dylib` |
|   -2.3% | -291.491 KiB |         1.1% | 12.2 MiB → 11.9 MiB | 117,448 → 117,018 | `AllocateHeap`                             | `libjvm.dylib` |
|  -26.5% | -288.101 KiB |         0.1% |  1.06 MiB → 800 KiB |            9 → 10 | `Parse::throw_to_exit`                     | `libjvm.dylib` |
|  -25.7% | -288.101 KiB |         0.1% |  1.09 MiB → 832 KiB |           10 → 11 | `Parse::do_exceptions`                     | `libjvm.dylib` |
|  -44.5% | -256.304 KiB | 0.1% → <0.1% |   576 KiB → 320 KiB |             8 → 6 | `CallGenerator::do_late_inline_helper`     | `libjvm.dylib` |
|  -53.3% | -256.085 KiB |        <0.1% |   480 KiB → 224 KiB |             9 → 6 | `Parse::ensure_phis_everywhere`            | `libjvm.dylib` |
|  -72.7% | -256.015 KiB |        <0.1% |    352 KiB → 96 KiB |             3 → 2 | `LibraryCallKit::inline_arraycopy`         | `libjvm.dylib` |
|   -8.9% | -204.914 KiB |         0.2% | 2.25 MiB → 2.05 MiB |     2,547 → 2,311 | `Deoptimization::fetch_unroll_info_helper` | `libjvm.dylib` |
|  -11.3% | -192.085 KiB |  0.2% → 0.1% | 1.66 MiB → 1.47 MiB |           36 → 33 | `PreserveJVMState::PreserveJVMState`       | `libjvm.dylib` |
| removed | -192.031 KiB | <0.1% → 0.0% |       192 KiB → 0 B |             2 → 0 | `is_x2logic`                               | `libjvm.dylib` |
|   -8.8% | -192.015 KiB |         0.2% | 2.13 MiB → 1.94 MiB |           65 → 59 | `Dict::doubhash`                           | `libjvm.dylib` |
|   -8.8% | -192.015 KiB |         0.2% | 2.13 MiB → 1.94 MiB |           65 → 59 | `Dict::Insert`                             | `libjvm.dylib` |
|  -33.3% | -160.062 KiB |        <0.1% |   480 KiB → 320 KiB |            13 → 9 | `DirectCallGenerator::generate`            | `libjvm.dylib` |
|   -7.5% | -160.015 KiB |         0.2% | 2.09 MiB → 1.94 MiB |           38 → 42 | `G1BarrierSetC2::pre_barrier`              | `libjvm.dylib` |
|  -15.7% | -155.195 KiB |         0.1% |   986 KiB → 831 KiB |       1,107 → 933 | `Deoptimization::fetch_unroll_info`        | `libjvm.dylib` |
|  -15.7% | -155.195 KiB |         0.1% |   986 KiB → 831 KiB |       1,107 → 933 | `DeoptimizationBlob`                       | `<unknown>`    |

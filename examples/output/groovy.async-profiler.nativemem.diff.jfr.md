# Allocated native memory profile diff

Allocated 1.06 GiB → 1.09 GiB (+24.771 MiB, +2.3%) over 169,813 samples → 169,581 samples (6.56 KiB → 6.72 KiB per sample).

| Category | Change |       Delta |      % |                Size |           Samples |
| -------- | -----: | ----------: | -----: | ------------------: | ----------------: |
| Native   |  +2.3% | +24.771 MiB | 100.0% | 1.06 GiB → 1.09 GiB | 169,813 → 169,581 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in native bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Native

| Change |       Delta |      % |                Size |           Samples | Function      | Location                 |
| -----: | ----------: | -----: | ------------------: | ----------------: | ------------- | ------------------------ |
|  +2.3% | +24.772 MiB | 100.0% | 1.06 GiB → 1.09 GiB | 168,923 → 168,691 | `malloc_hook` | `libasyncProfiler.dylib` |

#### Improvements

Functions with the largest decrease in native bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Native

| Change |  Delta |     % |              Size | Samples | Function       | Location                 |
| -----: | -----: | ----: | ----------------: | ------: | -------------- | ------------------------ |
|  -0.4% | -704 B | <0.1% | 194 KiB → 193 KiB |     845 | `realloc_hook` | `libasyncProfiler.dylib` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `malloc_hook` (`libasyncProfiler.dylib`)

| Change |       Delta |     % |                Size |           Samples | Caller                                    | Location                 |
| -----: | ----------: | ----: | ------------------: | ----------------: | ----------------------------------------- | ------------------------ |
|  +2.3% | +24.764 MiB | 99.2% | 1.05 GiB → 1.08 GiB | 157,921 → 157,685 | `os::malloc`                              | `libjvm.dylib`           |
|  +0.7% |  +7.633 KiB |  0.1% | 1.14 MiB → 1.15 MiB |     1,175 → 1,181 | `Java_java_lang_ClassLoader_defineClass0` | `libjava.dylib`          |
|    ~0% |      +293 B |  0.5% |            5.92 MiB |             1,329 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`          |
|  +0.1% |      +171 B | <0.1% |             298 KiB |                23 | `readBytes`                               | `libjava.dylib`          |
|  -0.1% |       -32 B | <0.1% |            45.7 KiB |     1,333 → 1,331 | `CodeCache::add`                          | `libasyncProfiler.dylib` |

##### `realloc_hook` (`libasyncProfiler.dylib`)

| Change |  Delta |      % |              Size | Samples | Caller        | Location       |
| -----: | -----: | -----: | ----------------: | ------: | ------------- | -------------- |
|  -0.4% | -704 B | 100.0% | 194 KiB → 193 KiB |     845 | `os::realloc` | `libjvm.dylib` |

### Total size

#### Regressions

Functions with the largest increase in native bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

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

Functions with the largest decrease in native bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

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

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Compile::Compile` (`libjvm.dylib`)

| Change |       Delta |             % |                Size |       Samples | Callee                                   | Location       |
| -----: | ----------: | ------------: | ------------------: | ------------: | ---------------------------------------- | -------------- |
|  +3.1% | +18.541 MiB | 57.2% → 57.6% |   605 MiB → 623 MiB | 7,456 → 7,679 | `Compile::Optimize`                      | `libjvm.dylib` |
|  +1.5% |  +6.512 MiB | 40.0% → 39.6% |   422 MiB → 429 MiB | 7,964 → 7,980 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  +3.8% | +768.82 KiB |          1.9% | 19.9 MiB → 20.7 MiB |     513 → 525 | `ParseGenerator::generate`               | `libjvm.dylib` |
| -75.0% | -95.929 KiB |         <0.1% |    128 KiB → 32 KiB |         4 → 1 | `Compile::Init`                          | `libjvm.dylib` |
|  +0.5% | +32.164 KiB |   0.7% → 0.6% | 6.94 MiB → 6.97 MiB |     117 → 120 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

| Change |       Delta |      % |                Size |         Samples | Callee             | Location       |
| -----: | ----------: | -----: | ------------------: | --------------: | ------------------ | -------------- |
|  +2.4% | +25.774 MiB | 100.0% | 1.03 GiB → 1.06 GiB | 17,221 → 17,476 | `Compile::Compile` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

| Change |       Delta |      % |                Size |         Samples | Callee       | Location       |
| -----: | ----------: | -----: | ------------------: | --------------: | ------------ | -------------- |
|  +2.4% | +25.075 MiB | 100.0% | 1.04 GiB → 1.06 GiB | 13,109 → 13,320 | `os::malloc` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

| Change |       Delta |      % |                Size |         Samples | Callee                | Location       |
| -----: | ----------: | -----: | ------------------: | --------------: | --------------------- | -------------- |
|  +2.4% | +25.075 MiB | 100.0% | 1.04 GiB → 1.06 GiB | 13,066 → 13,277 | `Chunk::operator new` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |         Samples | Callee                              | Location       |
| -----: | -----------: | ------------: | ------------------: | --------------: | ----------------------------------- | -------------- |
|  +2.4% |  +25.774 MiB | 99.0% → 99.1% | 1.03 GiB → 1.06 GiB | 17,221 → 17,476 | `C2Compiler::compile_method`        | `libjvm.dylib` |
|  -9.4% | -979.539 KiB |   0.9% → 0.8% | 10.1 MiB → 9.18 MiB | 28,654 → 28,629 | `Compiler::compile_method`          | `libjvm.dylib` |
| +64.3% |  +62.976 KiB |         <0.1% |  97.9 KiB → 161 KiB |           5 → 6 | `ciEnv::ciEnv`                      | `libjvm.dylib` |
| -33.3% |       -296 B |         <0.1% |       888 B → 592 B |           3 → 2 | `JavaThread::push_jni_handle_block` | `libjvm.dylib` |
|  -0.1% |        -88 B |         <0.1% |            65.3 KiB |   5,795 → 5,799 | `CompilationLog::log_compile`       | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

| Change |       Delta |      % |                Size |         Samples | Callee                                         | Location       |
| -----: | ----------: | -----: | ------------------: | --------------: | ---------------------------------------------- | -------------- |
|  +2.3% | +24.878 MiB | 100.0% | 1.04 GiB → 1.07 GiB | 51,679 → 51,913 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
| -31.3% | -11.266 KiB |  <0.1% |   36 KiB → 24.8 KiB |         72 → 50 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |
| -50.0% |    -1,000 B |  <0.1% |  1.95 KiB → 1,000 B |           2 → 1 | `CompileBroker::init_compiler_runtime`         | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

| Change |       Delta |      % |                Size |         Samples | Callee                                | Location       |
| -----: | ----------: | -----: | ------------------: | --------------: | ------------------------------------- | -------------- |
|  +2.3% | +24.866 MiB | 100.0% | 1.04 GiB → 1.07 GiB | 51,756 → 51,967 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |
|  -0.1% |       -32 B |  <0.1% |            37.8 KiB |       446 → 444 | `ServiceThread::service_thread_entry` | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

| Change |      Delta |      % |                Size |         Samples | Callee                | Location       |
| -----: | ---------: | -----: | ------------------: | --------------: | --------------------- | -------------- |
|  +2.3% | +24.78 MiB | 100.0% | 1.04 GiB → 1.07 GiB | 55,846 → 55,724 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

| Change |      Delta |      % |                Size |         Samples | Callee           | Location                  |
| -----: | ---------: | -----: | ------------------: | --------------: | ---------------- | ------------------------- |
|  +2.3% | +24.78 MiB | 100.0% | 1.04 GiB → 1.07 GiB | 55,999 → 55,877 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

| Change |       Delta |     % |                Size |         Samples | Callee                          | Location       |
| -----: | ----------: | ----: | ------------------: | --------------: | ------------------------------- | -------------- |
|  +2.3% | +24.866 MiB | 99.9% | 1.04 GiB → 1.07 GiB | 52,202 → 52,411 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| -12.3% | -55.875 KiB | <0.1% |   454 KiB → 398 KiB |   1,216 → 1,193 | `VMThread::run`                 | `libjvm.dylib` |
|  -5.9% | -15.554 KiB | <0.1% |   266 KiB → 250 KiB |   2,330 → 2,038 | `WorkerThread::run`             | `libjvm.dylib` |
| -49.9% |  -8.203 KiB | <0.1% | 16.4 KiB → 8.23 KiB |           9 → 5 | `JavaThread::post_run`          | `libjvm.dylib` |
| -50.0% |  -8.117 KiB | <0.1% | 16.2 KiB → 8.12 KiB |           6 → 3 | `ThreadsSMRSupport::smr_delete` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

| Change |      Delta |      % |                Size |         Samples | Callee             | Location       |
| -----: | ---------: | -----: | ------------------: | --------------: | ------------------ | -------------- |
|  +2.3% | +24.78 MiB | 100.0% | 1.04 GiB → 1.07 GiB | 55,846 → 55,724 | `Thread::call_run` | `libjvm.dylib` |

##### `os::malloc` (`libjvm.dylib`)

| Change |       Delta |      % |                Size |           Samples | Callee        | Location                 |
| -----: | ----------: | -----: | ------------------: | ----------------: | ------------- | ------------------------ |
|  +2.3% | +24.764 MiB | 100.0% | 1.05 GiB → 1.08 GiB | 157,921 → 157,685 | `malloc_hook` | `libasyncProfiler.dylib` |
|  -0.1% |  -1.312 KiB |   0.1% |            1.18 MiB |             3,860 | `os::malloc`  | `libjvm.dylib`           |

##### `Compile::Optimize` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |       Samples | Callee                                 | Location       |
| -----: | -----------: | ------------: | ------------------: | ------------: | -------------------------------------- | -------------- |
|  +3.4% |   +9.419 MiB | 46.3% → 46.4% |   280 MiB → 289 MiB | 3,462 → 3,567 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
|  +2.9% |   +7.947 MiB | 46.1% → 46.0% |   279 MiB → 287 MiB | 2,999 → 3,101 | `Compile::optimize_loops`              | `libjvm.dylib` |
|  +4.4% | +454.414 KiB |          1.7% | 10.2 MiB → 10.6 MiB |     248 → 254 | `PhaseCCP::do_transform`               | `libjvm.dylib` |
|  +4.7% | +411.804 KiB |          1.4% | 8.62 MiB → 9.02 MiB |     178 → 195 | `ConnectionGraph::do_analysis`         | `libjvm.dylib` |
|  +3.2% | +249.554 KiB |          1.3% | 7.61 MiB → 7.85 MiB |     169 → 167 | `PhaseRenumberLive::PhaseRenumberLive` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

| Change |        Delta |     % |                Size |       Samples | Callee                           | Location       |
| -----: | -----------: | ----: | ------------------: | ------------: | -------------------------------- | -------------- |
|  +3.1% |  +16.928 MiB | 98.9% |   552 MiB → 569 MiB | 6,363 → 6,562 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|  +7.2% | +448.046 KiB |  1.1% | 6.04 MiB → 6.48 MiB |      98 → 106 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

| Change |      Delta |             % |                Size |       Samples | Callee                                                             | Location       |
| -----: | ---------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------------ | -------------- |
|  +1.9% | +7.486 MiB | 69.8% → 69.0% |   385 MiB → 393 MiB | 2,589 → 2,602 | `PhaseIdealLoop::Dominators`                                       | `libjvm.dylib` |
| +10.5% | +3.062 MiB |   5.3% → 5.7% | 29.1 MiB → 32.2 MiB |     719 → 793 | `IdealLoopTree::loop_predication`                                  | `libjvm.dylib` |
|  +8.7% | +2.124 MiB |   4.4% → 4.7% | 24.6 MiB → 26.7 MiB |     510 → 540 | `Arena::grow`                                                      | `libjvm.dylib` |
| +33.5% | +1.445 MiB |   0.8% → 1.0% | 4.31 MiB → 5.76 MiB |      99 → 116 | `IdealLoopTree::counted_loop`                                      | `libjvm.dylib` |
|  +3.4% | +1.312 MiB |   6.9% → 7.0% | 38.3 MiB → 39.6 MiB |     863 → 891 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Callee                               | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------------------------------ | -------------- |
|  +3.1% | +16.928 MiB | 100.0% | 552 MiB → 569 MiB | 6,363 → 6,562 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

| Change |      Delta |      % |              Size |       Samples | Callee                     | Location       |
| -----: | ---------: | -----: | ----------------: | ------------: | -------------------------- | -------------- |
|  +2.9% | +7.947 MiB | 100.0% | 279 MiB → 287 MiB | 2,999 → 3,101 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

| Change |       Delta |            % |              Size |       Samples | Callee                 | Location       |
| -----: | ----------: | -----------: | ----------------: | ------------: | ---------------------- | -------------- |
|  +1.9% |  +7.455 MiB |       100.0% | 385 MiB → 393 MiB | 2,589 → 2,601 | `Arena::grow`          | `libjvm.dylib` |
|    new | +31.976 KiB | 0.0% → <0.1% |      0 B → 32 KiB |         0 → 1 | `VectorSet::VectorSet` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |       Samples | Callee                            | Location       |
| -----: | -----------: | ------------: | ------------------: | ------------: | --------------------------------- | -------------- |
|  +1.8% |   +5.784 MiB | 77.3% → 77.5% |   327 MiB → 332 MiB | 3,112 → 3,145 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
|  +2.0% |   +1.461 MiB | 17.7% → 17.8% | 74.7 MiB → 76.2 MiB | 1,175 → 1,187 | `Matcher::match`                  | `libjvm.dylib` |
|  -7.2% | -423.976 KiB |   1.4% → 1.3% | 5.78 MiB → 5.37 MiB |     346 → 333 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  -3.7% | -334.843 KiB |   2.1% → 2.0% | 8.94 MiB → 8.61 MiB |     192 → 173 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  -3.0% | -149.531 KiB |   1.2% → 1.1% | 4.86 MiB → 4.71 MiB |      103 → 99 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

| Change |      Delta |      % |              Size |       Samples | Callee        | Location       |
| -----: | ---------: | -----: | ----------------: | ------------: | ------------- | -------------- |
|  +3.2% | +5.312 MiB | 100.0% | 168 MiB → 174 MiB | 3,676 → 3,734 | `Arena::grow` | `libjvm.dylib` |

##### `IdealLoopTree::loop_predication` (`libjvm.dylib`)

| Change |      Delta |             % |                Size |   Samples | Callee                                  | Location       |
| -----: | ---------: | ------------: | ------------------: | --------: | --------------------------------------- | -------------- |
| +10.5% | +3.062 MiB |        100.0% | 29.1 MiB → 32.2 MiB | 719 → 793 | `PhaseIdealLoop::loop_predication_impl` | `libjvm.dylib` |
|  +9.6% | +1.281 MiB | 45.6% → 45.2% | 13.3 MiB → 14.6 MiB | 339 → 365 | `IdealLoopTree::loop_predication`       | `libjvm.dylib` |

##### `PathFrequency::to` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size |   Samples | Callee                                                               | Location       |
| ------: | -----------: | ------------: | ------------------: | --------: | -------------------------------------------------------------------- | -------------- |
|  +14.3% |   +2.219 MiB | 98.4% → 96.6% | 15.6 MiB → 17.8 MiB | 389 → 448 | `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` | `libjvm.dylib` |
| +150.0% | +383.718 KiB |   1.6% → 3.4% |   256 KiB → 640 KiB |    8 → 20 | `Node_Stack::grow`                                                   | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` (`libjvm.dylib`)

| Change |      Delta |      % |                Size |   Samples | Callee        | Location       |
| -----: | ---------: | -----: | ------------------: | --------: | ------------- | -------------- |
| +14.3% | +2.219 MiB | 100.0% | 15.6 MiB → 17.8 MiB | 389 → 448 | `Arena::grow` | `libjvm.dylib` |

##### `IdealLoopTree::counted_loop` (`libjvm.dylib`)

| Change |       Delta |              % |                Size |  Samples | Callee                                | Location       |
| -----: | ----------: | -------------: | ------------------: | -------: | ------------------------------------- | -------------- |
| +33.5% |  +1.445 MiB |         100.0% | 4.31 MiB → 5.76 MiB | 99 → 116 | `IdealLoopTree::counted_loop`         | `libjvm.dylib` |
| +32.8% |  +1.414 MiB | 100.0% → 99.5% | 4.31 MiB → 5.73 MiB | 99 → 115 | `PhaseIdealLoop::is_counted_loop`     | `libjvm.dylib` |
|    new | +31.976 KiB |    0.0% → 0.5% |        0 B → 32 KiB |    0 → 1 | `PhaseIdealLoop::replace_parallel_iv` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

| Change |      Delta |      % |                Size |   Samples | Callee        | Location       |
| -----: | ---------: | -----: | ------------------: | --------: | ------------- | -------------- |
|  +3.3% | +1.281 MiB | 100.0% | 38.4 MiB → 39.7 MiB | 866 → 893 | `Arena::grow` | `libjvm.dylib` |

##### `IdealLoopTree::iteration_split_impl` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size | Samples | Callee                                  | Location       |
| ------: | -----------: | ------------: | ------------------: | ------: | --------------------------------------- | -------------- |
|  +24.0% |   +1.254 MiB | 42.6% → 48.9% | 5.23 MiB → 6.48 MiB | 82 → 97 | `PhaseIdealLoop::insert_pre_post_loops` | `libjvm.dylib` |
|  -22.6% | -448.046 KiB | 15.8% → 11.3% |  1.94 MiB → 1.5 MiB | 29 → 26 | `PhaseIdealLoop::do_unswitching`        | `libjvm.dylib` |
| +599.8% | +384.062 KiB |   0.5% → 3.3% |    64 KiB → 448 KiB |   2 → 6 | `PhaseIdealLoop::partial_peel`          | `libjvm.dylib` |
|   -6.2% | -275.875 KiB | 35.3% → 30.6% | 4.33 MiB → 4.06 MiB | 91 → 84 | `PhaseIdealLoop::do_unroll`             | `libjvm.dylib` |
|  +49.9% |  +31.976 KiB |   0.5% → 0.7% |     64 KiB → 96 KiB |   2 → 3 | `IdealLoopTree::do_remove_empty_loop`   | `libjvm.dylib` |

##### `Parse::do_field_access` (`libjvm.dylib`)

| Change |        Delta |             % |                Size | Samples | Callee                        | Location       |
| -----: | -----------: | ------------: | ------------------: | ------: | ----------------------------- | -------------- |
| +18.9% | +736.164 KiB | 79.2% → 80.1% | 3.81 MiB → 4.53 MiB | 84 → 92 | `Parse::do_put_xxx`           | `libjvm.dylib` |
| +16.6% |  +95.789 KiB | 11.7% → 11.6% |   576 KiB → 672 KiB | 17 → 16 | `Parse::do_get_xxx`           | `libjvm.dylib` |
| +99.9% |  +31.976 KiB |   0.6% → 1.1% |     32 KiB → 64 KiB |   1 → 2 | `Type::hashcons`              | `libjvm.dylib` |
|    ~0% |        +80 B |   5.2% → 4.4% |             256 KiB |       7 | `GraphKit::null_check_common` | `libjvm.dylib` |
|  -0.1% |        -40 B |          0.6% |              32 KiB |       1 | `ciBytecodeStream::get_field` | `libjvm.dylib` |

##### `G1BarrierSetC2::post_barrier` (`libjvm.dylib`)

|  Change |        Delta |             % |               Size | Samples | Callee                     | Location       |
| ------: | -----------: | ------------: | -----------------: | ------: | -------------------------- | -------------- |
|  +77.3% | +544.062 KiB | 29.3% → 39.4% | 704 KiB → 1.22 MiB | 18 → 22 | `IdealKit::end_if`         | `libjvm.dylib` |
|     new | +192.031 KiB |   0.0% → 6.1% |      0 B → 192 KiB |   0 → 2 | `GraphKit::insert_mem_bar` | `libjvm.dylib` |
|  -10.4% |  -96.085 KiB | 38.7% → 26.3% |  928 KiB → 832 KiB | 22 → 19 | `IdealKit::if_then`        | `libjvm.dylib` |
| +149.9% |      +96 KiB |   2.7% → 5.1% |   64 KiB → 160 KiB |       2 | `IdealKit::transform`      | `libjvm.dylib` |
| +100.1% |  +64.031 KiB |   2.7% → 4.0% |   64 KiB → 128 KiB |   2 → 4 | `GraphKit::sync_kit`       | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |   Samples | Callee                   | Location       |
| -----: | -----------: | ------------: | ------------------: | --------: | ------------------------ | -------------- |
| +17.5% | +863.968 KiB | 23.7% → 26.9% | 4.81 MiB → 5.66 MiB | 111 → 119 | `Parse::do_field_access` | `libjvm.dylib` |
|  +3.9% | +736.671 KiB | 91.5% → 91.8% | 18.6 MiB → 19.3 MiB | 452 → 465 | `Parse::do_call`         | `libjvm.dylib` |
| +29.0% | +576.031 KiB |  9.6% → 11.9% |  1.94 MiB → 2.5 MiB |   42 → 49 | `Parse::do_one_bytecode` | `libjvm.dylib` |
| +56.5% | +416.109 KiB |   3.5% → 5.4% |  736 KiB → 1.13 MiB |   18 → 20 | `Parse::return_current`  | `libjvm.dylib` |
| -17.4% | -384.164 KiB |  10.6% → 8.5% | 2.16 MiB → 1.78 MiB |   45 → 42 | `Parse::do_if`           | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |   Samples | Callee                                     | Location       |
| -----: | -----------: | ------------: | ------------------: | --------: | ------------------------------------------ | -------------- |
| +13.6% |   +1.405 MiB | 55.5% → 60.8% | 10.3 MiB → 11.7 MiB | 216 → 248 | `ParseGenerator::generate`                 | `libjvm.dylib` |
| -57.1% | -128.046 KiB |   1.2% → 0.5% |    224 KiB → 96 KiB |     6 → 3 | `DirectCallGenerator::generate`            | `libjvm.dylib` |
| -16.7% | -127.976 KiB |   4.0% → 3.2% |   768 KiB → 640 KiB |   16 → 15 | `LibraryIntrinsic::generate`               | `libjvm.dylib` |
|  +0.6% |   +97.71 KiB | 81.8% → 79.3% | 15.2 MiB → 15.3 MiB | 371 → 378 | `PredictedCallGenerator::generate`         | `libjvm.dylib` |
| -60.0% |  -96.007 KiB |   0.8% → 0.3% |    160 KiB → 64 KiB |     5 → 2 | `LateInlineVirtualCallGenerator::generate` | `libjvm.dylib` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001210800`)

|  Change |        Delta |             % |           Size |    Samples | Callee                                             | Location                                            |
| ------: | -----------: | ------------: | -------------: | ---------: | -------------------------------------------------- | --------------------------------------------------- |
| removed |   -5.913 MiB | 100.0% → 0.0% | 5.91 MiB → 0 B | 32,233 → 0 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new | +180.218 KiB |  0.0% → 99.9% |  0 B → 180 KiB |  0 → 1,384 | `delegate(Object, Object)`                         | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |       -274 B |  <0.1% → 0.0% |    274 B → 0 B |      4 → 0 | `invoke(Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x00000004011fe800` |
|     new |       +146 B |   0.0% → 0.1% |    0 B → 146 B |      0 → 3 | `InterpreterRuntime::frequency_counter_overflow`   | `libjvm.dylib`                                      |
|     new |       +128 B |   0.0% → 0.1% |    0 B → 128 B |      0 → 1 | `invoke(Object, Object)`                           | `java.lang.invoke.LambdaForm$MH.0x000000700109b800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001215800`)

|  Change |      Delta |             % |           Size |    Samples | Callee                                  | Location                                             |
| ------: | ---------: | ------------: | -------------: | ---------: | --------------------------------------- | ---------------------------------------------------- |
| removed | -4.448 MiB | 100.0% → 0.0% | 4.45 MiB → 0 B | 20,481 → 0 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000401097c00` |
|     new |     +548 B | 0.0% → 100.0% |    0 B → 548 B |      0 → 8 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `Matcher::Label_Root` (`libjvm.dylib`)

| Change |       Delta |             % |                Size | Samples | Callee                   | Location       |
| -----: | ----------: | ------------: | ------------------: | ------: | ------------------------ | -------------- |
| -34.7% |   -1.03 MiB | 91.3% → 95.4% | 2.97 MiB → 1.94 MiB | 95 → 62 | `Arena::grow`            | `libjvm.dylib` |
| -66.7% | -191.96 KiB |   8.7% → 4.6% |    288 KiB → 96 KiB |   8 → 3 | `TypeAryPtr::add_offset` | `libjvm.dylib` |
|  -1.9% | -31.976 KiB | 51.0% → 80.0% | 1.66 MiB → 1.62 MiB | 53 → 52 | `Matcher::Label_Root`    | `libjvm.dylib` |

##### `PhaseIdealLoop::create_slow_version_of_loop` (`libjvm.dylib`)

| Change |        Delta |             % |                Size | Samples | Callee                       | Location       |
| -----: | -----------: | ------------: | ------------------: | ------: | ---------------------------- | -------------- |
| -37.8% | -896.171 KiB | 59.2% → 52.9% | 2.31 MiB → 1.44 MiB | 38 → 27 | `PhaseIdealLoop::clone_loop` | `libjvm.dylib` |
| -19.6% | -320.109 KiB | 40.8% → 47.1% | 1.59 MiB → 1.28 MiB | 33 → 26 | `PhaseIdealLoop::set_idom`   | `libjvm.dylib` |

##### `PhaseIdealLoop::do_unswitching` (`libjvm.dylib`)

| Change |      Delta |      % |                Size | Samples | Callee                                        | Location       |
| -----: | ---------: | -----: | ------------------: | ------: | --------------------------------------------- | -------------- |
| -30.4% | -1.187 MiB | 100.0% | 3.91 MiB → 2.72 MiB | 71 → 53 | `PhaseIdealLoop::create_slow_version_of_loop` | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |   Samples | Callee                       | Location       |
| -----: | -----------: | ------------: | ------------------: | --------: | ---------------------------- | -------------- |
| -22.9% | -991.273 KiB | 75.3% → 71.1% | 4.23 MiB → 3.26 MiB |  120 → 89 | `LinearScan::do_linear_scan` | `libjvm.dylib` |
|  -4.5% |  -63.953 KiB | 24.7% → 28.9% | 1.39 MiB → 1.33 MiB | 335 → 333 | `BlockList::iterate_forward` | `libjvm.dylib` |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

| Change |        Delta |             % |                Size | Samples | Callee                                   | Location       |
| -----: | -----------: | ------------: | ------------------: | ------: | ---------------------------------------- | -------------- |
| -95.7% | -703.484 KiB |  17.0% → 1.0% |    735 KiB → 32 KiB |  23 → 1 | `LinearScan::compute_local_live_sets`    | `libjvm.dylib` |
| -25.3% | -351.742 KiB | 32.1% → 31.1% | 1.36 MiB → 1.02 MiB | 43 → 32 | `LinearScan::build_intervals`            | `libjvm.dylib` |
| +21.0% | +127.906 KiB | 14.0% → 22.0% |   608 KiB → 736 KiB | 14 → 18 | `LinearScan::allocate_registers`         | `libjvm.dylib` |
| -66.7% |  -63.953 KiB |   2.2% → 1.0% |   95.9 KiB → 32 KiB |   3 → 1 | `LinearScan::resolve_exception_handlers` | `libjvm.dylib` |
| -50.0% |  -31.976 KiB |   1.5% → 1.0% |     64 KiB → 32 KiB |   2 → 1 | `LinearScan::resolve_data_flow`          | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |         Samples | Callee                             | Location       |
| -----: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------- | -------------- |
| -10.3% | -864.398 KiB | 81.2% → 80.4% | 8.23 MiB → 7.38 MiB | 16,822 → 16,776 | `Compilation::compile_java_method` | `libjvm.dylib` |
|  -6.4% |  -115.14 KiB | 17.3% → 17.9% | 1.75 MiB → 1.64 MiB | 11,827 → 11,848 | `ciEnv::register_method`           | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

| Change |        Delta |      % |                Size |         Samples | Callee                        | Location       |
| -----: | -----------: | -----: | ------------------: | --------------: | ----------------------------- | -------------- |
|  -9.4% | -979.539 KiB | 100.0% | 10.1 MiB → 9.18 MiB | 28,654 → 28,629 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

| Change |        Delta |      % |                Size |         Samples | Callee                     | Location       |
| -----: | -----------: | -----: | ------------------: | --------------: | -------------------------- | -------------- |
|  -9.4% | -979.539 KiB | 100.0% | 10.1 MiB → 9.18 MiB | 28,654 → 28,629 | `Compilation::Compilation` | `libjvm.dylib` |

##### `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`)

| Change |        Delta |      % |               Size | Samples | Callee        | Location       |
| -----: | -----------: | -----: | -----------------: | ------: | ------------- | -------------- |
| -65.1% | -895.343 KiB | 100.0% | 1.34 MiB → 480 KiB | 43 → 15 | `Arena::grow` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |       Samples | Callee                         | Location       |
| -----: | -----------: | ------------: | ------------------: | ------------: | ------------------------------ | -------------- |
| -18.3% |    -1.03 MiB | 68.4% → 62.2% | 5.62 MiB → 4.59 MiB |     455 → 422 | `Compilation::emit_lir`        | `libjvm.dylib` |
| +19.3% | +128.281 KiB |  7.9% → 10.5% |   665 KiB → 793 KiB | 1,490 → 1,502 | `Compilation::emit_code_body`  | `libjvm.dylib` |
|  +4.2% |  +71.923 KiB | 20.2% → 23.4% | 1.66 MiB → 1.73 MiB | 8,978 → 8,973 | `Compilation::build_hir`       | `libjvm.dylib` |
|  -3.1% |   -9.376 KiB |   3.6% → 3.9% |   302 KiB → 292 KiB | 5,899 → 5,879 | `ciMethod::ensure_method_data` | `libjvm.dylib` |

##### `ResourceBitMap::ResourceBitMap` (`libjvm.dylib`)

| Change |       Delta |      % |             Size | Samples | Callee        | Location       |
| -----: | ----------: | -----: | ---------------: | ------: | ------------- | -------------- |
| -95.8% | -735.46 KiB | 100.0% | 767 KiB → 32 KiB |  24 → 1 | `Arena::grow` | `libjvm.dylib` |

##### `LinearScan::compute_local_live_sets` (`libjvm.dylib`)

| Change |        Delta |      % |             Size | Samples | Callee                           | Location       |
| -----: | -----------: | -----: | ---------------: | ------: | -------------------------------- | -------------- |
| -95.7% | -703.484 KiB | 100.0% | 735 KiB → 32 KiB |  23 → 1 | `ResourceBitMap::ResourceBitMap` | `libjvm.dylib` |

##### `PhaseIdealLoop::fix_body_edges` (`libjvm.dylib`)

| Change |        Delta |             % |                Size | Samples | Callee                       | Location       |
| -----: | -----------: | ------------: | ------------------: | ------: | ---------------------------- | -------------- |
|  -9.2% | -288.031 KiB | 77.8% → 84.8% | 3.06 MiB → 2.78 MiB | 58 → 56 | `PhaseIdealLoop::set_idom`   | `libjvm.dylib` |
| -36.4% | -256.031 KiB | 17.5% → 13.3% |   704 KiB → 448 KiB |   9 → 7 | `Node_Array::grow`           | `libjvm.dylib` |
| -66.7% | -128.015 KiB |   4.8% → 1.9% |    192 KiB → 64 KiB |   2 → 1 | `NodeHash::hash_find_insert` | `libjvm.dylib` |

##### `PhaseIdealLoop::split_if_with_blocks` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |   Samples | Callee                                      | Location       |
| -----: | -----------: | ------------: | ------------------: | --------: | ------------------------------------------- | -------------- |
|  -4.2% | -304.218 KiB | 66.8% → 67.3% | 7.01 MiB → 6.71 MiB | 172 → 163 | `PhaseIdealLoop::do_split_if`               | `libjvm.dylib` |
| -12.3% | -166.015 KiB | 12.6% → 11.6% | 1.32 MiB → 1.16 MiB |   31 → 30 | `PhaseIdealLoop::split_if_with_blocks_pre`  | `libjvm.dylib` |
|  -2.8% |   -61.96 KiB | 20.3% → 20.7% | 2.13 MiB → 2.06 MiB |        48 | `PhaseIdealLoop::split_if_with_blocks_post` | `libjvm.dylib` |

##### `Type_Array::grow` (`libjvm.dylib`)

| Change |        Delta |      % |                Size |   Samples | Callee            | Location       |
| -----: | -----------: | -----: | ------------------: | --------: | ----------------- | -------------- |
|  -4.1% | -480.101 KiB | 100.0% | 11.6 MiB → 11.1 MiB | 205 → 201 | `Arena::Arealloc` | `libjvm.dylib` |

##### `GraphKit::clone_map` (`libjvm.dylib`)

| Change |        Delta |             % |                Size | Samples | Callee                    | Location       |
| -----: | -----------: | ------------: | ------------------: | ------: | ------------------------- | -------------- |
| -17.3% | -448.031 KiB | 68.6% → 64.4% | 2.53 MiB → 2.09 MiB | 44 → 42 | `Type_Array::grow`        | `libjvm.dylib` |
| -15.4% |  -64.101 KiB | 11.0% → 10.6% |   416 KiB → 352 KiB |  9 → 10 | `MergeMemNode::make`      | `libjvm.dylib` |
| -16.7% |  -32.031 KiB |   5.1% → 4.8% |   192 KiB → 160 KiB |   5 → 3 | `Node_Array::grow`        | `libjvm.dylib` |
|    new |  +31.976 KiB |   0.0% → 1.0% |        0 B → 32 KiB |   0 → 1 | `Node::out_grow`          | `libjvm.dylib` |
|    new |  +31.976 KiB |   0.0% → 1.0% |        0 B → 32 KiB |   0 → 1 | `JVMState::clone_shallow` | `libjvm.dylib` |

##### `Parse::build_exits` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size | Samples | Callee                     | Location       |
| ------: | -----------: | ------------: | ----------------: | ------: | -------------------------- | -------------- |
|  -35.0% | -224.015 KiB | 45.5% → 43.3% | 640 KiB → 416 KiB |  10 → 9 | `Type_Array::grow`         | `libjvm.dylib` |
|  -50.0% | -128.031 KiB | 18.2% → 13.3% | 256 KiB → 128 KiB |   6 → 4 | `Node::Node`               | `libjvm.dylib` |
|   -8.4% |  -32.078 KiB | 27.3% → 36.7% | 384 KiB → 352 KiB |       9 | `GraphKit::clone_map`      | `libjvm.dylib` |
| removed |  -32.015 KiB |   2.3% → 0.0% |      32 KiB → 0 B |   1 → 0 | `GraphKit::set_all_memory` | `libjvm.dylib` |
| removed |  -31.976 KiB |   2.3% → 0.0% |      32 KiB → 0 B |   1 → 0 | `Node::out_grow`           | `libjvm.dylib` |

##### `PhaseOutput::BuildOopMaps` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size | Samples | Callee                   | Location       |
| ------: | -----------: | ------------: | ------------------: | ------: | ------------------------ | -------------- |
|  -30.8% | -463.984 KiB | 97.9% → 94.2% | 1.47 MiB → 1.02 MiB | 41 → 25 | `Arena::grow`            | `libjvm.dylib` |
| +100.0% |  +31.976 KiB |   2.1% → 5.8% |     32 KiB → 64 KiB |   1 → 2 | `OopFlow::compute_reach` | `libjvm.dylib` |

##### `Parse::do_if` (`libjvm.dylib`)

| Change |        Delta |             % |              Size | Samples | Callee                               | Location       |
| -----: | -----------: | ------------: | ----------------: | ------: | ------------------------------------ | -------------- |
| -50.0% | -192.093 KiB | 17.4% → 10.5% | 384 KiB → 192 KiB |   7 → 6 | `Parse::adjust_map_after_if`         | `libjvm.dylib` |
| -15.6% | -160.031 KiB | 46.4% → 47.4% |   1 MiB → 864 KiB | 20 → 18 | `PreserveJVMState::PreserveJVMState` | `libjvm.dylib` |
| -27.3% |  -96.031 KiB | 15.9% → 14.0% | 352 KiB → 256 KiB |   6 → 4 | `Parse::merge_common`                | `libjvm.dylib` |
| +50.0% |  +64.015 KiB |  5.8% → 10.5% | 128 KiB → 192 KiB |   3 → 4 | `GraphKit::create_and_map_if`        | `libjvm.dylib` |
| -33.3% |  -64.015 KiB |   8.7% → 7.0% | 192 KiB → 128 KiB |   5 → 4 | `Node::Node`                         | `libjvm.dylib` |

##### `AllocateHeap` (`libjvm.dylib`)

| Change |        Delta |      % |                Size |           Samples | Callee       | Location       |
| -----: | -----------: | -----: | ------------------: | ----------------: | ------------ | -------------- |
|  -2.3% | -291.491 KiB | 100.0% | 12.2 MiB → 11.9 MiB | 117,448 → 117,018 | `os::malloc` | `libjvm.dylib` |

##### `Parse::throw_to_exit` (`libjvm.dylib`)

| Change |       Delta |              % |               Size | Samples | Callee                               | Location       |
| -----: | ----------: | -------------: | -----------------: | ------: | ------------------------------------ | -------------- |
| -38.2% | -416.07 KiB | 100.0% → 84.0% | 1.06 MiB → 672 KiB |   9 → 7 | `GraphKit::set_map_clone`            | `libjvm.dylib` |
|    new | +95.992 KiB |   0.0% → 12.0% |       0 B → 96 KiB |   0 → 2 | `GraphKit::combine_exception_states` | `libjvm.dylib` |
|    new | +31.976 KiB |    0.0% → 4.0% |       0 B → 32 KiB |   0 → 1 | `GraphKit::make_exception_state`     | `libjvm.dylib` |

##### `Parse::do_exceptions` (`libjvm.dylib`)

| Change |        Delta |             % |              Size | Samples | Callee                           | Location       |
| -----: | -----------: | ------------: | ----------------: | ------: | -------------------------------- | -------------- |
| -22.6% | -224.085 KiB | 88.6% → 92.3% | 992 KiB → 768 KiB |   7 → 9 | `Parse::throw_to_exit`           | `libjvm.dylib` |
| -50.0% |  -64.015 KiB |  11.4% → 7.7% |  128 KiB → 64 KiB |   3 → 2 | `Parse::catch_inline_exceptions` | `libjvm.dylib` |

##### `CallGenerator::do_late_inline_helper` (`libjvm.dylib`)

| Change |        Delta |             % |              Size | Samples | Callee                             | Location       |
| -----: | -----------: | ------------: | ----------------: | ------: | ---------------------------------- | -------------- |
| -47.1% | -256.015 KiB | 94.4% → 90.0% | 544 KiB → 288 KiB |   6 → 5 | `PredictedCallGenerator::generate` | `libjvm.dylib` |
|  -0.9% |       -296 B |  5.6% → 10.0% | 32.3 KiB → 32 KiB |   2 → 1 | `ParseGenerator::generate`         | `libjvm.dylib` |

##### `Parse::ensure_phis_everywhere` (`libjvm.dylib`)

| Change |        Delta |             % |              Size | Samples | Callee                     | Location       |
| -----: | -----------: | ------------: | ----------------: | ------: | -------------------------- | -------------- |
| -53.9% | -224.109 KiB | 86.7% → 85.7% | 416 KiB → 192 KiB |   7 → 5 | `Parse::ensure_memory_phi` | `libjvm.dylib` |
| -50.0% |  -31.976 KiB | 13.3% → 14.3% |   64 KiB → 32 KiB |   2 → 1 | `Parse::ensure_phi`        | `libjvm.dylib` |

##### `LibraryCallKit::inline_arraycopy` (`libjvm.dylib`)

|  Change |        Delta |            % |          Size | Samples | Callee                           | Location       |
| ------: | -----------: | -----------: | ------------: | ------: | -------------------------------- | -------------- |
| removed | -256.015 KiB | 72.7% → 0.0% | 256 KiB → 0 B |   1 → 0 | `ArrayCopyNode::connect_outputs` | `libjvm.dylib` |

##### `Deoptimization::fetch_unroll_info_helper` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |       Samples | Callee                               | Location       |
| -----: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------ | -------------- |
|  -9.0% | -129.578 KiB | 62.5% → 62.4% | 1.41 MiB → 1.28 MiB | 2,110 → 1,920 | `AllocateHeap`                       | `libjvm.dylib` |
|  -9.0% |  -75.335 KiB |         36.1% |   833 KiB → 758 KiB |     436 → 390 | `Deoptimization::create_vframeArray` | `libjvm.dylib` |

##### `PreserveJVMState::PreserveJVMState` (`libjvm.dylib`)

| Change |        Delta |      % |                Size | Samples | Callee                | Location       |
| -----: | -----------: | -----: | ------------------: | ------: | --------------------- | -------------- |
| -11.3% | -192.085 KiB | 100.0% | 1.66 MiB → 1.47 MiB | 36 → 33 | `GraphKit::clone_map` | `libjvm.dylib` |

##### `is_x2logic` (`libjvm.dylib`)

|  Change |        Delta |            % |          Size | Samples | Callee                           | Location       |
| ------: | -----------: | -----------: | ------------: | ------: | -------------------------------- | -------------- |
| removed | -128.015 KiB | 66.7% → 0.0% | 128 KiB → 0 B |   1 → 0 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |
| removed |  -64.015 KiB | 33.3% → 0.0% |  64 KiB → 0 B |   1 → 0 | `Node::Node`                     | `libjvm.dylib` |

##### `Dict::doubhash` (`libjvm.dylib`)

| Change |        Delta |             % |                Size | Samples | Callee            | Location       |
| -----: | -----------: | ------------: | ------------------: | ------: | ----------------- | -------------- |
|  -8.2% | -160.039 KiB | 89.7% → 90.3% | 1.91 MiB → 1.75 MiB | 58 → 53 | `Arena::Arealloc` | `libjvm.dylib` |
| -14.3% |  -31.976 KiB |  10.3% → 9.7% |   224 KiB → 192 KiB |   7 → 6 | `Arena::grow`     | `libjvm.dylib` |

##### `Dict::Insert` (`libjvm.dylib`)

| Change |        Delta |      % |                Size | Samples | Callee           | Location       |
| -----: | -----------: | -----: | ------------------: | ------: | ---------------- | -------------- |
|  -8.8% | -192.015 KiB | 100.0% | 2.13 MiB → 1.94 MiB | 65 → 59 | `Dict::doubhash` | `libjvm.dylib` |

##### `DirectCallGenerator::generate` (`libjvm.dylib`)

|  Change |       Delta |             % |              Size | Samples | Callee                                | Location       |
| ------: | ----------: | ------------: | ----------------: | ------: | ------------------------------------- | -------------- |
| removed | -96.031 KiB |  20.0% → 0.0% |      96 KiB → 0 B |   2 → 0 | `GraphKit::set_all_memory`            | `libjvm.dylib` |
|  -14.3% | -32.015 KiB | 46.7% → 60.0% | 224 KiB → 192 KiB |   6 → 5 | `GraphKit::set_results_for_java_call` | `libjvm.dylib` |
|  -20.0% | -32.015 KiB | 33.3% → 40.0% | 160 KiB → 128 KiB |   5 → 4 | `GraphKit::set_edges_for_java_call`   | `libjvm.dylib` |

##### `G1BarrierSetC2::pre_barrier` (`libjvm.dylib`)

| Change |        Delta |             % |              Size | Samples | Callee                     | Location       |
| -----: | -----------: | ------------: | ----------------: | ------: | -------------------------- | -------------- |
| -80.0% | -256.031 KiB |  14.9% → 3.2% |  320 KiB → 64 KiB |   4 → 2 | `IdealKit::load`           | `libjvm.dylib` |
| -17.7% |   -96.07 KiB | 25.4% → 22.6% | 544 KiB → 448 KiB |  11 → 9 | `IdealKit::end_if`         | `libjvm.dylib` |
| +50.0% |  +96.046 KiB |  9.0% → 14.5% | 192 KiB → 288 KiB |   2 → 5 | `IdealKit::make_leaf_call` | `libjvm.dylib` |
| +10.0% |  +64.062 KiB | 29.8% → 35.5% | 640 KiB → 704 KiB | 12 → 16 | `IdealKit::if_then`        | `libjvm.dylib` |
|    new |  +31.976 KiB |   0.0% → 1.6% |      0 B → 32 KiB |   0 → 1 | `GraphKit::sync_kit`       | `libjvm.dylib` |

##### `Deoptimization::fetch_unroll_info` (`libjvm.dylib`)

| Change |        Delta |      % |              Size |     Samples | Callee                                     | Location       |
| -----: | -----------: | -----: | ----------------: | ----------: | ------------------------------------------ | -------------- |
| -15.7% | -155.195 KiB | 100.0% | 986 KiB → 831 KiB | 1,107 → 933 | `Deoptimization::fetch_unroll_info_helper` | `libjvm.dylib` |

##### `DeoptimizationBlob` (`<unknown>`)

| Change |        Delta |      % |              Size |     Samples | Callee                              | Location       |
| -----: | -----------: | -----: | ----------------: | ----------: | ----------------------------------- | -------------- |
| -15.7% | -155.195 KiB | 100.0% | 986 KiB → 831 KiB | 1,107 → 933 | `Deoptimization::fetch_unroll_info` | `libjvm.dylib` |

# Allocated native memory profile diff

Allocated 1.6 GiB → 1.62 GiB (+15.399 MiB, +0.9%) over 621,888 samples → 611,917 samples (2.7 KiB → 2.77 KiB per sample).

| Category | Change |       Delta |      % |               Size |           Samples |
| -------- | -----: | ----------: | -----: | -----------------: | ----------------: |
| Native   |  +0.9% | +15.399 MiB | 100.0% | 1.6 GiB → 1.62 GiB | 621,888 → 611,917 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in native bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Native

| Change |       Delta |     % |               Size |           Samples | Function       | Location                 |
| -----: | ----------: | ----: | -----------------: | ----------------: | -------------- | ------------------------ |
|  +0.9% | +15.398 MiB | 99.8% | 1.6 GiB → 1.61 GiB | 611,293 → 601,319 | `malloc_hook`  | `libasyncProfiler.dylib` |
|    ~0% |      +432 B |  0.1% |           2.15 MiB |     9,858 → 9,861 | `realloc_hook` | `libasyncProfiler.dylib` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `malloc_hook` (`libasyncProfiler.dylib`)

| Change |       Delta |             % |                Size |           Samples | Caller                                    | Location          |
| -----: | ----------: | ------------: | ------------------: | ----------------: | ----------------------------------------- | ----------------- |
|  +1.0% | +15.487 MiB | 90.8% → 90.9% | 1.45 GiB → 1.47 GiB | 546,928 → 536,996 | `os::malloc`                              | `libjvm.dylib`    |
|  -2.7% | -86.625 KiB |          0.2% |  3.1 MiB → 3.02 MiB |         550 → 506 | `CCalloc`                                 | `libverify.dylib` |
|  -1.4% |  -5.906 KiB |         <0.1% |   414 KiB → 408 KiB |   15,515 → 15,512 | `run_dataflow`                            | `libverify.dylib` |
|    ~0% |  +1.762 KiB |          4.0% |            65.8 MiB |   10,151 → 10,152 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`   |
|  +0.1% |       +76 B |         <0.1% |            91.7 KiB |     2,057 → 2,059 | `newStringPlatform`                       | `libjava.dylib`   |

##### `realloc_hook` (`libasyncProfiler.dylib`)

| Change |  Delta |      % |     Size |       Samples | Caller        | Location       |
| -----: | -----: | -----: | -------: | ------------: | ------------- | -------------- |
|    ~0% | +432 B | 100.0% | 2.15 MiB | 9,858 → 9,861 | `os::realloc` | `libjvm.dylib` |

### Total size

#### Regressions

Functions with the largest increase in native bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

| Change |       Delta |             % |                Size |           Samples | Function                                   | Location                  |
| -----: | ----------: | ------------: | ------------------: | ----------------: | ------------------------------------------ | ------------------------- |
|  +1.3% | +18.389 MiB | 85.3% → 85.6% | 1.37 GiB → 1.38 GiB |   27,142 → 26,558 | `Compile::Compile`                         | `libjvm.dylib`            |
|  +1.3% | +18.389 MiB | 85.3% → 85.6% | 1.37 GiB → 1.38 GiB |   27,142 → 26,558 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
|  +1.1% | +16.288 MiB | 86.7% → 86.9% | 1.39 GiB → 1.41 GiB |   17,937 → 17,942 | `Arena::grow`                              | `libjvm.dylib`            |
|  +1.1% | +16.287 MiB | 86.7% → 86.9% | 1.39 GiB → 1.41 GiB |   18,004 → 18,007 | `Chunk::operator new`                      | `libjvm.dylib`            |
|  +1.1% | +15.523 MiB | 87.2% → 87.3% |  1.4 GiB → 1.41 GiB | 105,326 → 101,943 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  +1.1% | +15.497 MiB | 87.2% → 87.3% |  1.4 GiB → 1.41 GiB | 106,412 → 103,007 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
|  +1.1% | +15.497 MiB | 87.2% → 87.3% |  1.4 GiB → 1.41 GiB | 105,603 → 102,196 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
|  +1.0% | +15.487 MiB | 90.6% → 90.7% | 1.45 GiB → 1.47 GiB | 546,928 → 536,996 | `os::malloc`                               | `libjvm.dylib`            |
|  +0.9% | +15.398 MiB |         99.8% |  1.6 GiB → 1.61 GiB | 611,293 → 601,319 | `malloc_hook`                              | `libasyncProfiler.dylib`  |
|  +1.1% |  +15.26 MiB | 87.4% → 87.6% |  1.4 GiB → 1.42 GiB | 132,875 → 122,760 | `_pthread_start`                           | `libsystem_pthread.dylib` |
|  +1.1% |  +15.26 MiB | 87.4% → 87.6% |  1.4 GiB → 1.42 GiB | 132,875 → 122,760 | `thread_start`                             | `libsystem_pthread.dylib` |
|  +1.1% |  +15.26 MiB | 87.4% → 87.5% |  1.4 GiB → 1.42 GiB | 132,722 → 122,607 | `Thread::call_run`                         | `libjvm.dylib`            |
|  +1.1% |  +15.26 MiB | 87.4% → 87.5% |  1.4 GiB → 1.42 GiB | 132,722 → 122,607 | `thread_native_entry`                      | `libjvm.dylib`            |
|  +1.8% | +10.924 MiB | 37.1% → 37.4% |   609 MiB → 620 MiB |   15,087 → 14,477 | `Compile::Code_Gen`                        | `libjvm.dylib`            |
|  +1.1% |  +8.058 MiB | 45.0% → 45.1% |   739 MiB → 747 MiB |     9,027 → 9,111 | `Compile::Optimize`                        | `libjvm.dylib`            |
|  +2.2% |  +6.407 MiB | 18.1% → 18.4% |   298 MiB → 304 MiB |     3,126 → 3,174 | `Compile::optimize_loops`                  | `libjvm.dylib`            |
|  +2.8% |  +6.347 MiB | 13.8% → 14.1% |   227 MiB → 233 MiB |     4,762 → 4,877 | `Arena::Arealloc`                          | `libjvm.dylib`            |
|  +4.5% |  +5.009 MiB |   6.8% → 7.0% |   111 MiB → 116 MiB |     1,769 → 1,849 | `Matcher::match`                           | `libjvm.dylib`            |
|  +0.7% |   +4.74 MiB | 40.9% → 40.8% |   671 MiB → 675 MiB |             7,644 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib`            |
|  +0.9% |  +3.989 MiB | 28.2% → 28.1% |   462 MiB → 466 MiB |     3,077 → 3,047 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib`            |

##### Native

|  Change |        Delta |             % |                Size |           Samples | Function                                                                           | Location                  |
| ------: | -----------: | ------------: | ------------------: | ----------------: | ---------------------------------------------------------------------------------- | ------------------------- |
|   +1.1% |  +16.288 MiB | 86.7% → 86.9% | 1.39 GiB → 1.41 GiB |   17,937 → 17,942 | `Arena::grow`                                                                      | `libjvm.dylib`            |
|   +1.1% |  +16.287 MiB | 86.7% → 86.9% | 1.39 GiB → 1.41 GiB |   18,004 → 18,007 | `Chunk::operator new`                                                              | `libjvm.dylib`            |
|   +1.1% |  +15.497 MiB | 87.2% → 87.3% |  1.4 GiB → 1.41 GiB | 106,412 → 103,007 | `JavaThread::thread_main_inner`                                                    | `libjvm.dylib`            |
|   +1.0% |  +15.487 MiB | 90.6% → 90.7% | 1.45 GiB → 1.47 GiB | 546,928 → 536,996 | `os::malloc`                                                                       | `libjvm.dylib`            |
|   +0.9% |  +15.398 MiB |         99.8% |  1.6 GiB → 1.61 GiB | 611,293 → 601,319 | `malloc_hook`                                                                      | `libasyncProfiler.dylib`  |
|   +1.1% |   +15.26 MiB | 87.4% → 87.6% |  1.4 GiB → 1.42 GiB | 132,875 → 122,760 | `_pthread_start`                                                                   | `libsystem_pthread.dylib` |
|   +1.1% |   +15.26 MiB | 87.4% → 87.6% |  1.4 GiB → 1.42 GiB | 132,875 → 122,760 | `thread_start`                                                                     | `libsystem_pthread.dylib` |
|   +1.1% |   +15.26 MiB | 87.4% → 87.5% |  1.4 GiB → 1.42 GiB | 132,722 → 122,607 | `Thread::call_run`                                                                 | `libjvm.dylib`            |
|   +1.1% |   +15.26 MiB | 87.4% → 87.5% |  1.4 GiB → 1.42 GiB | 132,722 → 122,607 | `thread_native_entry`                                                              | `libjvm.dylib`            |
|   +2.8% |   +6.347 MiB | 13.8% → 14.1% |   227 MiB → 233 MiB |     4,762 → 4,877 | `Arena::Arealloc`                                                                  | `libjvm.dylib`            |
|  +16.2% |    +1.86 MiB |   0.7% → 0.8% | 11.5 MiB → 13.3 MiB |         217 → 267 | `IdealLoopTree::iteration_split_impl`                                              | `libjvm.dylib`            |
|  +13.1% |   +1.766 MiB |   0.8% → 0.9% | 13.5 MiB → 15.3 MiB |         271 → 318 | `IdealLoopTree::iteration_split`                                                   | `libjvm.dylib`            |
|   +4.9% |   +1.246 MiB |   1.5% → 1.6% | 25.3 MiB → 26.5 MiB |         619 → 603 | `PredictedCallGenerator::generate`                                                 | `libjvm.dylib`            |
|  +46.1% |     +768 KiB |          0.1% | 1.63 MiB → 2.38 MiB |           31 → 46 | `Parse::return_current`                                                            | `libjvm.dylib`            |
|  +17.6% | +704.949 KiB |   0.2% → 0.3% |  3.91 MiB → 4.6 MiB |   16,475 → 16,491 | `IRScope::IRScope`                                                                 | `libjvm.dylib`            |
|  +17.6% | +704.949 KiB |   0.2% → 0.3% |  3.91 MiB → 4.6 MiB |   16,475 → 16,491 | `IR::IR`                                                                           | `libjvm.dylib`            |
|   +1.3% | +608.351 KiB |          2.8% |   45.4 MiB → 46 MiB |       986 → 1,006 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to`                 | `libjvm.dylib`            |
|  +11.2% | +576.226 KiB |          0.3% |  5.03 MiB → 5.6 MiB |         114 → 131 | `GrowableArrayWithAllocator<unsigned int, GrowableArray<unsigned int>>::expand_to` | `libjvm.dylib`            |
|  +74.9% | +575.562 KiB |  <0.1% → 0.1% |  769 KiB → 1.31 MiB |           16 → 23 | `CallGenerator::do_late_inline_helper`                                             | `libjvm.dylib`            |
| +283.4% | +543.992 KiB |         <0.1% |   192 KiB → 736 KiB |            6 → 13 | `LibraryCallKit::inline_arraycopy`                                                 | `libjvm.dylib`            |

#### Improvements

Functions with the largest decrease in native bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

| Change |        Delta |           % |                Size |         Samples | Function                                                             | Location       |
| -----: | -----------: | ----------: | ------------------: | --------------: | -------------------------------------------------------------------- | -------------- |
| -15.6% |   -4.844 MiB | 1.9% → 1.6% |   31 MiB → 26.1 MiB |       732 → 616 | `PhaseIdealLoop::loop_predication_impl`                              | `libjvm.dylib` |
| -15.6% |   -4.844 MiB | 1.9% → 1.6% |   31 MiB → 26.1 MiB |       732 → 616 | `IdealLoopTree::loop_predication`                                    | `libjvm.dylib` |
| -20.4% |   -3.688 MiB | 1.1% → 0.9% |   18 MiB → 14.3 MiB |       446 → 361 | `PathFrequency::to`                                                  | `libjvm.dylib` |
| -19.7% |   -3.501 MiB | 1.1% → 0.9% | 17.8 MiB → 14.3 MiB |       437 → 358 | `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` | `libjvm.dylib` |
| -10.1% |   -3.176 MiB | 1.9% → 1.7% | 31.4 MiB → 28.2 MiB | 65,561 → 62,825 | `Compilation::compile_method`                                        | `libjvm.dylib` |
| -10.1% |   -3.176 MiB | 1.9% → 1.7% | 31.4 MiB → 28.2 MiB | 65,561 → 62,825 | `Compilation::Compilation`                                           | `libjvm.dylib` |
| -10.1% |   -3.176 MiB | 1.9% → 1.7% | 31.4 MiB → 28.2 MiB | 65,561 → 62,825 | `Compiler::compile_method`                                           | `libjvm.dylib` |
| -16.4% |   -2.617 MiB | 1.0% → 0.8% |   16 MiB → 13.4 MiB |       796 → 710 | `Compilation::emit_lir`                                              | `libjvm.dylib` |
|  -9.7% |   -2.277 MiB | 1.4% → 1.3% | 23.5 MiB → 21.3 MiB | 27,980 → 27,700 | `Compilation::compile_java_method`                                   | `libjvm.dylib` |
| -19.8% |   -2.211 MiB | 0.7% → 0.5% | 11.2 MiB → 8.97 MiB |       342 → 269 | `LinearScan::do_linear_scan`                                         | `libjvm.dylib` |
| -15.4% |   -1.594 MiB | 0.6% → 0.5% | 10.3 MiB → 8.75 MiB |       267 → 223 | `PhaseIdealLoop::loop_predication_follow_branches`                   | `libjvm.dylib` |
| -41.2% |   -1.531 MiB | 0.2% → 0.1% | 3.72 MiB → 2.19 MiB |         76 → 52 | `Parse::do_if`                                                       | `libjvm.dylib` |
|  -3.1% |   -1.125 MiB | 2.2% → 2.1% |   36.1 MiB → 35 MiB |       860 → 810 | `Parse::do_one_block`                                                | `libjvm.dylib` |
|  -2.9% |   -1.063 MiB | 2.2% → 2.1% | 36.4 MiB → 35.3 MiB |       887 → 834 | `Parse::Parse`                                                       | `libjvm.dylib` |
|  -2.9% |   -1.063 MiB | 2.2% → 2.1% | 36.4 MiB → 35.3 MiB |       887 → 834 | `ParseGenerator::generate`                                           | `libjvm.dylib` |
| -42.3% |   -1.031 MiB |        0.1% | 2.44 MiB → 1.41 MiB |         44 → 32 | `Parse::array_load`                                                  | `libjvm.dylib` |
| -48.5% |    -1.03 MiB |        0.1% | 2.12 MiB → 1.09 MiB |         68 → 35 | `IndexSet::populate_free_list`                                       | `libjvm.dylib` |
|  -2.8% |       -1 MiB | 2.2% → 2.1% | 36.3 MiB → 35.3 MiB |       864 → 815 | `Parse::do_all_blocks`                                               | `libjvm.dylib` |
| -39.2% | -992.156 KiB | 0.2% → 0.1% |  2.47 MiB → 1.5 MiB |         44 → 34 | `Parse::array_addressing`                                            | `libjvm.dylib` |
|  -7.6% | -991.882 KiB | 0.8% → 0.7% | 12.8 MiB → 11.8 MiB |       280 → 255 | `PhaseIdealLoop::loop_predication_impl_helper`                       | `libjvm.dylib` |

##### Native

| Change |        Delta |            % |                Size |           Samples | Function                                                                               | Location       |
| -----: | -----------: | -----------: | ------------------: | ----------------: | -------------------------------------------------------------------------------------- | -------------- |
| -15.6% |   -4.844 MiB |  1.9% → 1.6% |   31 MiB → 26.1 MiB |         732 → 616 | `IdealLoopTree::loop_predication`                                                      | `libjvm.dylib` |
| -20.4% |   -3.688 MiB |  1.1% → 0.9% |   18 MiB → 14.3 MiB |         446 → 361 | `PathFrequency::to`                                                                    | `libjvm.dylib` |
| -19.7% |   -3.501 MiB |  1.1% → 0.9% | 17.8 MiB → 14.3 MiB |         437 → 358 | `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to`                   | `libjvm.dylib` |
| -10.1% |   -3.176 MiB |  1.9% → 1.7% | 31.4 MiB → 28.2 MiB |   65,561 → 62,825 | `Compiler::compile_method`                                                             | `libjvm.dylib` |
| -41.2% |   -1.531 MiB |  0.2% → 0.1% | 3.72 MiB → 2.19 MiB |           76 → 52 | `Parse::do_if`                                                                         | `libjvm.dylib` |
|  -3.1% |   -1.125 MiB |  2.2% → 2.1% |   36.1 MiB → 35 MiB |         860 → 810 | `Parse::do_one_block`                                                                  | `libjvm.dylib` |
|  -2.9% |   -1.063 MiB |  2.2% → 2.1% | 36.4 MiB → 35.3 MiB |         887 → 834 | `Parse::Parse`                                                                         | `libjvm.dylib` |
|  -2.9% |   -1.063 MiB |  2.2% → 2.1% | 36.4 MiB → 35.3 MiB |         887 → 834 | `ParseGenerator::generate`                                                             | `libjvm.dylib` |
| -42.3% |   -1.031 MiB |         0.1% | 2.44 MiB → 1.41 MiB |           44 → 32 | `Parse::array_load`                                                                    | `libjvm.dylib` |
|  -2.8% |       -1 MiB |  2.2% → 2.1% | 36.3 MiB → 35.3 MiB |         864 → 815 | `Parse::do_all_blocks`                                                                 | `libjvm.dylib` |
| -39.2% | -992.156 KiB |  0.2% → 0.1% |  2.47 MiB → 1.5 MiB |           44 → 34 | `Parse::array_addressing`                                                              | `libjvm.dylib` |
|  -2.7% | -928.906 KiB |         2.0% | 33.3 MiB → 32.4 MiB |         783 → 747 | `Parse::do_call`                                                                       | `libjvm.dylib` |
| -10.5% | -863.804 KiB |  0.5% → 0.4% | 8.06 MiB → 7.22 MiB |         156 → 136 | `BarrierSetC2::store_at`                                                               | `libjvm.dylib` |
|  -9.9% |     -837 KiB |  0.5% → 0.4% | 8.26 MiB → 7.44 MiB |   38,801 → 35,805 | `nmethod::nmethod`                                                                     | `libjvm.dylib` |
|  -9.5% | -814.187 KiB |         0.5% |  8.4 MiB → 7.61 MiB |   45,180 → 42,113 | `nmethod::new_nmethod`                                                                 | `libjvm.dylib` |
|  -1.3% | -794.267 KiB |  3.6% → 3.5% | 59.3 MiB → 58.6 MiB | 459,732 → 449,851 | `AllocateHeap`                                                                         | `libjvm.dylib` |
| -44.4% | -790.796 KiB |         0.1% |  1.74 MiB → 991 KiB |   38,183 → 28,383 | `G1CodeRootSetHashTable::insert`                                                       | `libjvm.dylib` |
| -43.4% | -790.796 KiB |         0.1% | 1.78 MiB → 1.01 MiB |   38,188 → 28,388 | `nmethod::oops_do`                                                                     | `libjvm.dylib` |
| -21.6% | -703.929 KiB |         0.2% |  3.19 MiB → 2.5 MiB |           57 → 44 | `G1BarrierSetC2::pre_barrier`                                                          | `libjvm.dylib` |
| -53.4% |     -639 KiB | 0.1% → <0.1% |  1.17 MiB → 558 KiB |         756 → 671 | `ConcurrentHashTable<G1CodeRootSetHashTableConfig, (MEMFLAGS)5>::internal_grow_prolog` | `libjvm.dylib` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Compile::Compile` (`libjvm.dylib`)

|  Change |        Delta |             % |               Size |         Samples | Callee                         | Location       |
| ------: | -----------: | ------------: | -----------------: | --------------: | ------------------------------ | -------------- |
|   +1.8% |  +10.924 MiB | 43.6% → 43.8% |  609 MiB → 620 MiB | 15,087 → 14,477 | `Compile::Code_Gen`            | `libjvm.dylib` |
|   +1.1% |   +8.058 MiB | 52.8% → 52.7% |  739 MiB → 747 MiB |   9,027 → 9,111 | `Compile::Optimize`            | `libjvm.dylib` |
|   -4.6% |   -1.625 MiB |   2.5% → 2.4% |  35.6 MiB → 34 MiB |       871 → 811 | `ParseGenerator::generate`     | `libjvm.dylib` |
|  +70.3% | +607.773 KiB |          0.1% | 864 KiB → 1.44 MiB |         14 → 17 | `Compile::inline_string_calls` | `libjvm.dylib` |
| +600.0% | +383.718 KiB |         <0.1% |   64 KiB → 448 KiB |          2 → 14 | `Compile::Init`                | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

| Change |       Delta |      % |                Size |         Samples | Callee             | Location       |
| -----: | ----------: | -----: | ------------------: | --------------: | ------------------ | -------------- |
|  +1.3% | +18.389 MiB | 100.0% | 1.37 GiB → 1.38 GiB | 27,142 → 26,558 | `Compile::Compile` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

| Change |       Delta |      % |                Size |         Samples | Callee                | Location       |
| -----: | ----------: | -----: | ------------------: | --------------: | --------------------- | -------------- |
|  +1.1% | +16.288 MiB | 100.0% | 1.39 GiB → 1.41 GiB | 17,937 → 17,942 | `Chunk::operator new` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

| Change |       Delta |      % |                Size |         Samples | Callee       | Location       |
| -----: | ----------: | -----: | ------------------: | --------------: | ------------ | -------------- |
|  +1.1% | +16.287 MiB | 100.0% | 1.39 GiB → 1.41 GiB | 18,004 → 18,007 | `os::malloc` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size |         Samples | Callee                              | Location       |
| ------: | -----------: | ------------: | ------------------: | --------------: | ----------------------------------- | -------------- |
|   +1.3% |  +18.389 MiB | 97.8% → 98.0% | 1.37 GiB → 1.38 GiB | 27,142 → 26,558 | `C2Compiler::compile_method`        | `libjvm.dylib` |
|  -10.1% |   -3.176 MiB |   2.2% → 2.0% | 31.4 MiB → 28.2 MiB | 65,561 → 62,825 | `Compiler::compile_method`          | `libjvm.dylib` |
| +492.5% | +319.765 KiB |         <0.1% |  64.9 KiB → 385 KiB |          3 → 13 | `ciEnv::ciEnv`                      | `libjvm.dylib` |
|   -0.8% |   -1.562 KiB |         <0.1% |   184 KiB → 183 KiB | 12,603 → 12,531 | `CompilationLog::log_compile`       | `libjvm.dylib` |
|   -8.3% |       -296 B |         <0.1% | 3.47 KiB → 3.18 KiB |         12 → 11 | `JavaThread::push_jni_handle_block` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

| Change |       Delta |      % |                Size |           Samples | Callee                                | Location       |
| -----: | ----------: | -----: | ------------------: | ----------------: | ------------------------------------- | -------------- |
|  +1.1% | +15.497 MiB | 100.0% |  1.4 GiB → 1.41 GiB | 105,603 → 102,196 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |
|  +0.1% |       +32 B |  <0.1% | 39.3 KiB → 39.4 KiB |         809 → 811 | `ServiceThread::service_thread_entry` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

| Change |       Delta |      % |               Size |           Samples | Callee                                         | Location       |
| -----: | ----------: | -----: | -----------------: | ----------------: | ---------------------------------------------- | -------------- |
|  +1.1% | +15.523 MiB | 100.0% | 1.4 GiB → 1.41 GiB | 105,326 → 101,943 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
| -66.7% | -16.031 KiB |  <0.1% |  24 KiB → 8.02 KiB |             3 → 1 | `CompileQueue::get`                            | `libjvm.dylib` |
|  -7.6% |   -10.5 KiB |  <0.1% |  139 KiB → 128 KiB |         274 → 252 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |

##### `os::malloc` (`libjvm.dylib`)

| Change |       Delta |      % |                Size |           Samples | Callee        | Location                 |
| -----: | ----------: | -----: | ------------------: | ----------------: | ------------- | ------------------------ |
|  +1.0% | +15.487 MiB | 100.0% | 1.45 GiB → 1.47 GiB | 546,928 → 536,996 | `malloc_hook` | `libasyncProfiler.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

| Change |      Delta |      % |               Size |           Samples | Callee                | Location       |
| -----: | ---------: | -----: | -----------------: | ----------------: | --------------------- | -------------- |
|  +1.1% | +15.26 MiB | 100.0% | 1.4 GiB → 1.42 GiB | 132,722 → 122,607 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

| Change |      Delta |      % |               Size |           Samples | Callee           | Location                  |
| -----: | ---------: | -----: | -----------------: | ----------------: | ---------------- | ------------------------- |
|  +1.1% | +15.26 MiB | 100.0% | 1.4 GiB → 1.42 GiB | 132,875 → 122,760 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

| Change |        Delta |           % |                Size |           Samples | Callee                          | Location       |
| -----: | -----------: | ----------: | ------------------: | ----------------: | ------------------------------- | -------------- |
|  +1.1% |  +15.497 MiB |       99.7% |  1.4 GiB → 1.41 GiB | 106,412 → 103,007 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| -12.2% | -297.187 KiB | 0.2% → 0.1% |  2.39 MiB → 2.1 MiB |   17,465 → 10,512 | `WorkerThread::run`             | `libjvm.dylib` |
|  +5.0% |  +67.513 KiB |        0.1% | 1.32 MiB → 1.39 MiB |     8,544 → 8,777 | `VMThread::run`                 | `libjvm.dylib` |
|  -9.1% |   -8.203 KiB |       <0.1% |   90.2 KiB → 82 KiB |           45 → 41 | `JavaThread::post_run`          | `libjvm.dylib` |
|  -9.1% |   -8.117 KiB |       <0.1% | 89.3 KiB → 81.2 KiB |           33 → 30 | `ThreadsSMRSupport::smr_delete` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

| Change |      Delta |      % |               Size |           Samples | Callee             | Location       |
| -----: | ---------: | -----: | -----------------: | ----------------: | ------------------ | -------------- |
|  +1.1% | +15.26 MiB | 100.0% | 1.4 GiB → 1.42 GiB | 132,722 → 122,607 | `Thread::call_run` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |       Samples | Callee                            | Location       |
| -----: | -----------: | ------------: | ------------------: | ------------: | --------------------------------- | -------------- |
|  +4.5% |   +5.009 MiB | 18.2% → 18.7% |   111 MiB → 116 MiB | 1,769 → 1,849 | `Matcher::match`                  | `libjvm.dylib` |
|  +0.6% |   +2.744 MiB | 77.1% → 76.2% |   470 MiB → 473 MiB | 4,816 → 4,655 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| +20.1% |   +1.564 MiB |   1.3% → 1.5% |  7.8 MiB → 9.36 MiB |     492 → 537 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  +7.2% | +861.781 KiB |   1.9% → 2.0% | 11.6 MiB → 12.5 MiB |     226 → 250 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
| +12.3% | +800.515 KiB |   1.0% → 1.1% | 6.34 MiB → 7.12 MiB |     125 → 142 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |       Samples | Callee                                 | Location       |
| -----: | -----------: | ------------: | ------------------: | ------------: | -------------------------------------- | -------------- |
|  +2.2% |   +6.407 MiB | 40.3% → 40.7% |   298 MiB → 304 MiB | 3,126 → 3,174 | `Compile::optimize_loops`              | `libjvm.dylib` |
|  -0.4% |   -1.667 MiB | 50.5% → 49.7% |   373 MiB → 371 MiB | 4,518 → 4,470 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
| +10.6% |   +1.235 MiB |   1.6% → 1.7% | 11.7 MiB → 12.9 MiB |     233 → 262 | `PhaseRenumberLive::PhaseRenumberLive` | `libjvm.dylib` |
|  +7.4% | +851.796 KiB |   1.5% → 1.6% | 11.2 MiB → 12.1 MiB |     217 → 245 | `ConnectionGraph::do_analysis`         | `libjvm.dylib` |
|  +3.7% | +572.062 KiB |   2.0% → 2.1% | 15.1 MiB → 15.7 MiB |     349 → 368 | `PhaseCCP::do_transform`               | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

| Change |      Delta |      % |              Size |       Samples | Callee                     | Location       |
| -----: | ---------: | -----: | ----------------: | ------------: | -------------------------- | -------------- |
|  +2.2% | +6.407 MiB | 100.0% | 298 MiB → 304 MiB | 3,126 → 3,174 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

| Change |      Delta |      % |              Size |       Samples | Callee        | Location       |
| -----: | ---------: | -----: | ----------------: | ------------: | ------------- | -------------- |
|  +2.8% | +6.347 MiB | 100.0% | 227 MiB → 233 MiB | 4,762 → 4,877 | `Arena::grow` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |       Samples | Callee                                        | Location       |
| -----: | -----------: | ------------: | ------------------: | ------------: | --------------------------------------------- | -------------- |
|  +5.7% |   +3.834 MiB | 60.1% → 60.8% | 66.8 MiB → 70.6 MiB | 1,037 → 1,124 | `Matcher::xform`                              | `libjvm.dylib` |
|  +2.2% | +659.851 KiB | 26.7% → 26.1% | 29.6 MiB → 30.3 MiB |     406 → 397 | `Matcher::find_shared`                        | `libjvm.dylib` |
| +10.9% | +352.187 KiB |   2.8% → 3.0% |  3.16 MiB → 3.5 MiB |       63 → 75 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |
|  +1.6% | +191.726 KiB | 10.3% → 10.0% | 11.5 MiB → 11.7 MiB |     261 → 251 | `Node_Array::grow`                            | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

| Change |      Delta |             % |                Size |       Samples | Callee                           | Location       |
| -----: | ---------: | ------------: | ------------------: | ------------: | -------------------------------- | -------------- |
|  +0.5% | +3.594 MiB | 99.1% → 98.9% |   665 MiB → 668 MiB | 7,529 → 7,513 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| +19.1% | +1.146 MiB |   0.9% → 1.1% | 6.01 MiB → 7.15 MiB |     115 → 131 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

| Change |       Delta |            % |              Size |       Samples | Callee                 | Location       |
| -----: | ----------: | -----------: | ----------------: | ------------: | ---------------------- | -------------- |
|  +0.9% |  +3.958 MiB |       100.0% | 462 MiB → 466 MiB | 3,077 → 3,046 | `Arena::grow`          | `libjvm.dylib` |
|    new | +31.976 KiB | 0.0% → <0.1% |      0 B → 32 KiB |         0 → 1 | `VectorSet::VectorSet` | `libjvm.dylib` |

##### `IdealLoopTree::iteration_split_impl` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |   Samples | Callee                                  | Location       |
| -----: | -----------: | ------------: | ------------------: | --------: | --------------------------------------- | -------------- |
| +19.7% |   +1.343 MiB | 59.4% → 61.2% | 6.81 MiB → 8.16 MiB | 111 → 152 | `PhaseIdealLoop::do_unroll`             | `libjvm.dylib` |
| +13.0% | +511.968 KiB | 33.5% → 32.6% | 3.84 MiB → 4.34 MiB |   81 → 89 | `PhaseIdealLoop::insert_pre_post_loops` | `libjvm.dylib` |
|  +9.1% |  +31.976 KiB |   3.0% → 2.8% |   352 KiB → 384 KiB |   11 → 12 | `PhaseIdealLoop::do_unswitching`        | `libjvm.dylib` |
|  -9.7% |  -15.007 KiB |   1.3% → 1.0% |   155 KiB → 140 KiB |         4 | `IdealLoopTree::policy_unroll`          | `libjvm.dylib` |

##### `IdealLoopTree::iteration_split` (`libjvm.dylib`)

| Change |       Delta |             % |                Size |   Samples | Callee                                | Location       |
| -----: | ----------: | ------------: | ------------------: | --------: | ------------------------------------- | -------------- |
| +16.2% |   +1.86 MiB | 84.9% → 87.3% | 11.5 MiB → 13.3 MiB | 217 → 267 | `IdealLoopTree::iteration_split_impl` | `libjvm.dylib` |
| +13.7% |  +1.672 MiB | 90.5% → 91.0% | 12.2 MiB → 13.9 MiB | 233 → 279 | `IdealLoopTree::iteration_split`      | `libjvm.dylib` |
|  -4.6% | -96.046 KiB | 15.1% → 12.7% | 2.04 MiB → 1.95 MiB |   54 → 51 | `PhaseIdealLoop::do_unswitching`      | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size |   Samples | Callee                               | Location       |
| ------: | -----------: | ------------: | ------------------: | --------: | ------------------------------------ | -------------- |
|  +11.5% |   +1.561 MiB | 53.8% → 57.1% | 13.6 MiB → 15.2 MiB | 337 → 351 | `PredictedCallGenerator::generate`   | `libjvm.dylib` |
|   +4.3% |   +1.027 MiB | 95.4% → 94.8% | 24.1 MiB → 25.2 MiB | 595 → 575 | `ParseGenerator::generate`           | `libjvm.dylib` |
| +112.5% | +576.156 KiB |   2.0% → 4.0% |  512 KiB → 1.06 MiB |    6 → 11 | `DirectCallGenerator::generate`      | `libjvm.dylib` |
|  +54.1% | +415.984 KiB |   3.0% → 4.4% |  768 KiB → 1.16 MiB |   15 → 14 | `GraphKit::null_check_common`        | `libjvm.dylib` |
|  +80.0% | +255.968 KiB |   1.2% → 2.1% |   320 KiB → 576 KiB |   10 → 13 | `PreserveJVMState::PreserveJVMState` | `libjvm.dylib` |

##### `Parse::return_current` (`libjvm.dylib`)

|  Change |        Delta |             % |               Size | Samples | Callee                           | Location       |
| ------: | -----------: | ------------: | -----------------: | ------: | -------------------------------- | -------------- |
|  +33.3% | +288.078 KiB | 51.9% → 47.4% | 864 KiB → 1.13 MiB | 14 → 19 | `Type_Array::grow`               | `libjvm.dylib` |
|  +50.0% | +192.031 KiB | 23.1% → 23.7% |  384 KiB → 576 KiB |  8 → 10 | `Parse::call_register_finalizer` | `libjvm.dylib` |
|  +54.5% |  +191.96 KiB | 21.2% → 22.4% |  352 KiB → 544 KiB |  7 → 12 | `PhiNode::slice_memory`          | `libjvm.dylib` |
| +200.0% |  +63.953 KiB |   1.9% → 3.9% |  32 KiB → 95.9 KiB |   1 → 3 | `Node::add_req`                  | `libjvm.dylib` |
|     new |  +31.976 KiB |   0.0% → 1.3% |       0 B → 32 KiB |   0 → 1 | `MergeMemNode::iteration_setup`  | `libjvm.dylib` |

##### `IRScope::IRScope` (`libjvm.dylib`)

| Change |        Delta |      % |               Size |         Samples | Callee                       | Location       |
| -----: | -----------: | -----: | -----------------: | --------------: | ---------------------------- | -------------- |
| +17.6% | +704.949 KiB | 100.0% | 3.91 MiB → 4.6 MiB | 16,475 → 16,491 | `GraphBuilder::GraphBuilder` | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

| Change |        Delta |      % |               Size |         Samples | Callee             | Location       |
| -----: | -----------: | -----: | -----------------: | --------------: | ------------------ | -------------- |
| +17.6% | +704.949 KiB | 100.0% | 3.91 MiB → 4.6 MiB | 16,475 → 16,491 | `IRScope::IRScope` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

| Change |        Delta |      % |              Size |     Samples | Callee        | Location       |
| -----: | -----------: | -----: | ----------------: | ----------: | ------------- | -------------- |
|  +1.3% | +608.351 KiB | 100.0% | 45.4 MiB → 46 MiB | 986 → 1,006 | `Arena::grow` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<unsigned int, GrowableArray<unsigned int>>::expand_to` (`libjvm.dylib`)

| Change |        Delta |      % |               Size |   Samples | Callee        | Location       |
| -----: | -----------: | -----: | -----------------: | --------: | ------------- | -------------- |
| +11.2% | +576.226 KiB | 100.0% | 5.03 MiB → 5.6 MiB | 114 → 131 | `Arena::grow` | `libjvm.dylib` |

##### `CallGenerator::do_late_inline_helper` (`libjvm.dylib`)

| Change |        Delta |             % |              Size | Samples | Callee                             | Location       |
| -----: | -----------: | ------------: | ----------------: | ------: | ---------------------------------- | -------------- |
| +99.8% | +415.757 KiB | 54.2% → 61.9% | 416 KiB → 832 KiB |  8 → 10 | `PredictedCallGenerator::generate` | `libjvm.dylib` |
| +45.3% | +159.804 KiB | 45.8% → 38.1% | 352 KiB → 512 KiB |  8 → 13 | `ParseGenerator::generate`         | `libjvm.dylib` |

##### `LibraryCallKit::inline_arraycopy` (`libjvm.dylib`)

|  Change |        Delta |             % |            Size | Samples | Callee                                           | Location       |
| ------: | -----------: | ------------: | --------------: | ------: | ------------------------------------------------ | -------------- |
|     new | +256.015 KiB |  0.0% → 34.8% |   0 B → 256 KiB |   0 → 1 | `PhaseGVN::transform_no_reclaim`                 | `libjvm.dylib` |
|     new | +128.015 KiB |  0.0% → 17.4% |   0 B → 128 KiB |   0 → 1 | `GraphKit::load_object_klass`                    | `libjvm.dylib` |
|     new |  +63.992 KiB |   0.0% → 8.7% |    0 B → 64 KiB |   0 → 2 | `LibraryCallKit::generate_negative_guard`        | `libjvm.dylib` |
| +199.8% |  +63.953 KiB | 16.7% → 13.0% | 32 KiB → 96 KiB |   1 → 3 | `LibraryCallKit::arraycopy_move_allocation_here` | `libjvm.dylib` |
| removed |  -31.976 KiB |  16.7% → 0.0% |    32 KiB → 0 B |   1 → 0 | `LibraryCallKit::generate_guard`                 | `libjvm.dylib` |

##### `PhaseIdealLoop::loop_predication_impl` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size |   Samples | Callee                                                    | Location       |
| ------: | -----------: | ------------: | ------------------: | --------: | --------------------------------------------------------- | -------------- |
|  -27.8% |   -2.156 MiB | 25.0% → 21.4% |  7.75 MiB → 5.6 MiB | 181 → 138 | `PathFrequency::to`                                       | `libjvm.dylib` |
|  -15.4% |   -1.594 MiB | 33.4% → 33.5% | 10.3 MiB → 8.75 MiB | 267 → 223 | `PhaseIdealLoop::loop_predication_follow_branches`        | `libjvm.dylib` |
|   -7.6% | -991.882 KiB | 41.2% → 45.1% | 12.8 MiB → 11.8 MiB | 280 → 255 | `PhaseIdealLoop::loop_predication_impl_helper`            | `libjvm.dylib` |
| removed |  -95.929 KiB |   0.3% → 0.0% |      95.9 KiB → 0 B |     3 → 0 | `Node_Stack::Node_Stack`                                  | `libjvm.dylib` |
| removed |  -31.976 KiB |   0.1% → 0.0% |        32 KiB → 0 B |     1 → 0 | `PhaseIdealLoop::loop_predication_should_follow_branches` | `libjvm.dylib` |

##### `IdealLoopTree::loop_predication` (`libjvm.dylib`)

| Change |      Delta |             % |              Size |   Samples | Callee                                  | Location       |
| -----: | ---------: | ------------: | ----------------: | --------: | --------------------------------------- | -------------- |
| -15.6% | -4.844 MiB |        100.0% | 31 MiB → 26.1 MiB | 732 → 616 | `PhaseIdealLoop::loop_predication_impl` | `libjvm.dylib` |
| -17.6% | -2.563 MiB | 46.9% → 45.8% | 14.5 MiB → 12 MiB | 339 → 271 | `IdealLoopTree::loop_predication`       | `libjvm.dylib` |

##### `PathFrequency::to` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |   Samples | Callee                                                               | Location       |
| -----: | -----------: | ------------: | ------------------: | --------: | -------------------------------------------------------------------- | -------------- |
| -19.7% |   -3.501 MiB | 98.4% → 99.3% | 17.8 MiB → 14.3 MiB | 437 → 358 | `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` | `libjvm.dylib` |
| -66.7% | -191.859 KiB |   1.6% → 0.7% |  288 KiB → 95.9 KiB |     9 → 3 | `Node_Stack::grow`                                                   | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` (`libjvm.dylib`)

| Change |      Delta |      % |                Size |   Samples | Callee        | Location       |
| -----: | ---------: | -----: | ------------------: | --------: | ------------- | -------------- |
| -19.7% | -3.501 MiB | 100.0% | 17.8 MiB → 14.3 MiB | 437 → 358 | `Arena::grow` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |         Samples | Callee                                               | Location       |
| -----: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------- | -------------- |
|  -9.7% |   -2.277 MiB | 74.9% → 75.3% | 23.5 MiB → 21.3 MiB | 27,980 → 27,700 | `Compilation::compile_java_method`                   | `libjvm.dylib` |
| -10.5% | -824.859 KiB | 24.4% → 24.2% | 7.65 MiB → 6.84 MiB | 37,574 → 35,121 | `ciEnv::register_method`                             | `libjvm.dylib` |
| -42.9% |  -95.929 KiB |   0.7% → 0.4% |   224 KiB → 128 KiB |           7 → 4 | `DebugInformationRecorder::DebugInformationRecorder` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

| Change |      Delta |      % |                Size |         Samples | Callee                        | Location       |
| -----: | ---------: | -----: | ------------------: | --------------: | ----------------------------- | -------------- |
| -10.1% | -3.176 MiB | 100.0% | 31.4 MiB → 28.2 MiB | 65,561 → 62,825 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

| Change |      Delta |      % |                Size |         Samples | Callee                     | Location       |
| -----: | ---------: | -----: | ------------------: | --------------: | -------------------------- | -------------- |
| -10.1% | -3.176 MiB | 100.0% | 31.4 MiB → 28.2 MiB | 65,561 → 62,825 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

| Change |      Delta |             % |                Size |   Samples | Callee                       | Location       |
| -----: | ---------: | ------------: | ------------------: | --------: | ---------------------------- | -------------- |
| -19.8% | -2.211 MiB | 70.0% → 67.1% | 11.2 MiB → 8.97 MiB | 342 → 269 | `LinearScan::do_linear_scan` | `libjvm.dylib` |
|  -8.5% | -415.5 KiB | 30.0% → 32.9% |  4.8 MiB → 4.39 MiB | 454 → 441 | `BlockList::iterate_forward` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |         Samples | Callee                         | Location       |
| -----: | -----------: | ------------: | ------------------: | --------------: | ------------------------------ | -------------- |
| -16.4% |   -2.617 MiB | 67.9% → 62.9% |   16 MiB → 13.4 MiB |       796 → 710 | `Compilation::emit_lir`        | `libjvm.dylib` |
| +20.8% | +928.785 KiB | 18.5% → 24.7% | 4.35 MiB → 5.26 MiB | 16,489 → 16,512 | `Compilation::build_hir`       | `libjvm.dylib` |
| -18.9% | -563.843 KiB | 12.4% → 11.1% | 2.92 MiB → 2.37 MiB |   4,707 → 4,652 | `Compilation::emit_code_body`  | `libjvm.dylib` |
|  -5.8% |  -17.013 KiB |   1.2% → 1.3% |   293 KiB → 276 KiB |   5,988 → 5,826 | `ciMethod::ensure_method_data` | `libjvm.dylib` |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size | Samples | Callee                                   | Location       |
| ------: | -----------: | ------------: | ------------------: | ------: | ---------------------------------------- | -------------- |
|  -23.5% |  -735.46 KiB | 27.4% → 26.1% | 3.06 MiB → 2.34 MiB | 98 → 75 | `LinearScan::build_intervals`            | `libjvm.dylib` |
|  -52.4% | -703.484 KiB |  11.7% → 7.0% |  1.31 MiB → 640 KiB | 42 → 20 | `LinearScan::compute_local_live_sets`    | `libjvm.dylib` |
|  -17.8% | -511.546 KiB | 25.2% → 25.8% | 2.81 MiB → 2.31 MiB | 86 → 70 | `LinearScan::allocate_registers`         | `libjvm.dylib` |
|  -27.8% | -479.648 KiB | 15.1% → 13.6% | 1.69 MiB → 1.22 MiB | 54 → 39 | `LinearScan::assign_reg_num`             | `libjvm.dylib` |
| +133.3% | +127.906 KiB |   0.8% → 2.4% |  95.9 KiB → 224 KiB |   3 → 7 | `LinearScan::resolve_exception_handlers` | `libjvm.dylib` |

##### `PhaseIdealLoop::loop_predication_follow_branches` (`libjvm.dylib`)

|  Change |       Delta |              % |                Size |   Samples | Callee              | Location       |
| ------: | ----------: | -------------: | ------------------: | --------: | ------------------- | -------------- |
|  -14.9% |  -1.531 MiB | 99.4% → 100.0% | 10.3 MiB → 8.75 MiB | 265 → 223 | `PathFrequency::to` | `libjvm.dylib` |
| removed | -63.953 KiB |    0.6% → 0.0% |        64 KiB → 0 B |     2 → 0 | `Node_Stack::grow`  | `libjvm.dylib` |

##### `Parse::do_if` (`libjvm.dylib`)

| Change |        Delta |             % |               Size | Samples | Callee                               | Location       |
| -----: | -----------: | ------------: | -----------------: | ------: | ------------------------------------ | -------------- |
| -57.1% | -640.125 KiB | 29.4% → 21.4% | 1.09 MiB → 480 KiB | 22 → 14 | `Parse::adjust_map_after_if`         | `libjvm.dylib` |
| -31.4% | -351.929 KiB | 29.4% → 34.3% | 1.09 MiB → 768 KiB | 24 → 16 | `PreserveJVMState::PreserveJVMState` | `libjvm.dylib` |
| -45.0% | -288.062 KiB | 16.8% → 15.7% |  640 KiB → 352 KiB |  11 → 7 | `PhaseGVN::transform_no_reclaim`     | `libjvm.dylib` |
| -61.5% | -256.023 KiB |  10.9% → 7.1% |  416 KiB → 160 KiB |   8 → 4 | `Parse::merge_common`                | `libjvm.dylib` |
| -37.5% |  -96.015 KiB |   6.7% → 7.1% |  256 KiB → 160 KiB |   4 → 3 | `Node::Node`                         | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |   Samples | Callee                      | Location       |
| -----: | -----------: | ------------: | ------------------: | --------: | --------------------------- | -------------- |
| -41.2% |   -1.531 MiB |  10.3% → 6.2% | 3.72 MiB → 2.19 MiB |   76 → 52 | `Parse::do_if`              | `libjvm.dylib` |
| -42.3% |   -1.031 MiB |   6.7% → 4.0% | 2.44 MiB → 1.41 MiB |   44 → 32 | `Parse::array_load`         | `libjvm.dylib` |
|  -2.7% | -928.906 KiB | 92.2% → 92.6% | 33.3 MiB → 32.4 MiB | 783 → 747 | `Parse::do_call`            | `libjvm.dylib` |
| +46.1% |     +768 KiB |   4.5% → 6.8% | 1.63 MiB → 2.38 MiB |   31 → 46 | `Parse::return_current`     | `libjvm.dylib` |
| -39.2% | -640.085 KiB |   4.4% → 2.8% |  1.59 MiB → 992 KiB |   34 → 21 | `GraphKit::access_store_at` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size |   Samples | Callee                    | Location       |
| ------: | -----------: | ------------: | ------------------: | --------: | ------------------------- | -------------- |
|   -2.8% |       -1 MiB | 99.7% → 99.9% | 36.3 MiB → 35.3 MiB | 864 → 815 | `Parse::do_all_blocks`    | `libjvm.dylib` |
| +325.1% |  +416.07 KiB |   0.3% → 1.5% |   128 KiB → 544 KiB |     4 → 6 | `Parse::merge_common`     | `libjvm.dylib` |
|  +37.0% | +320.007 KiB |   2.3% → 3.3% |  864 KiB → 1.16 MiB |   20 → 28 | `GraphKit::set_map_clone` | `libjvm.dylib` |
|  +11.5% | +319.984 KiB |   7.5% → 8.6% | 2.72 MiB → 3.03 MiB |   53 → 57 | `Parse::build_exits`      | `libjvm.dylib` |
|  -40.0% | -319.789 KiB |   2.1% → 1.3% |   800 KiB → 480 KiB |   19 → 10 | `Parse::do_exits`         | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

| Change |      Delta |      % |                Size |   Samples | Callee         | Location       |
| -----: | ---------: | -----: | ------------------: | --------: | -------------- | -------------- |
|  -2.9% | -1.063 MiB | 100.0% | 36.4 MiB → 35.3 MiB | 887 → 834 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::array_load` (`libjvm.dylib`)

| Change |        Delta |             % |                Size | Samples | Callee                     | Location       |
| -----: | -----------: | ------------: | ------------------: | ------: | -------------------------- | -------------- |
| -41.3% | -992.195 KiB | 96.2% → 97.8% | 2.34 MiB → 1.38 MiB | 41 → 31 | `Parse::array_addressing`  | `libjvm.dylib` |
| -66.7% |  -63.992 KiB |   3.8% → 2.2% |     96 KiB → 32 KiB |   3 → 1 | `GraphKit::access_load_at` | `libjvm.dylib` |

##### `IndexSet::populate_free_list` (`libjvm.dylib`)

| Change |     Delta |      % |                Size | Samples | Callee        | Location       |
| -----: | --------: | -----: | ------------------: | ------: | ------------- | -------------- |
| -48.5% | -1.03 MiB | 100.0% | 2.12 MiB → 1.09 MiB | 68 → 35 | `Arena::grow` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size |   Samples | Callee                          | Location       |
| ------: | -----------: | ------------: | ----------------: | --------: | ------------------------------- | -------------- |
|   -3.1% |   -1.125 MiB | 99.6% → 99.2% | 36.1 MiB → 35 MiB | 860 → 810 | `Parse::do_one_block`           | `libjvm.dylib` |
|  +33.3% | +127.976 KiB |   1.0% → 1.4% | 384 KiB → 512 KiB |    9 → 10 | `Parse::merge_common`           | `libjvm.dylib` |
| removed |  -31.976 KiB |   0.1% → 0.0% |      32 KiB → 0 B |     1 → 0 | `GraphKit::clone_map`           | `libjvm.dylib` |
| removed |  -31.976 KiB |   0.1% → 0.0% |      32 KiB → 0 B |     1 → 0 | `GraphKit::add_parse_predicate` | `libjvm.dylib` |
|     new |  +31.976 KiB |   0.0% → 0.1% |      0 B → 32 KiB |     0 → 1 | `Arena::grow`                   | `libjvm.dylib` |

##### `Parse::array_addressing` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size | Samples | Callee                               | Location       |
| ------: | -----------: | ------------: | ----------------: | ------: | ------------------------------------ | -------------- |
|  -50.0% | -288.023 KiB | 22.8% → 18.7% | 576 KiB → 288 KiB |  11 → 7 | `GraphKit::null_check_common`        | `libjvm.dylib` |
|  -44.4% | -256.015 KiB | 22.8% → 20.8% | 576 KiB → 320 KiB |   7 → 6 | `PhaseGVN::transform_no_reclaim`     | `libjvm.dylib` |
| removed | -224.007 KiB |   8.9% → 0.0% |     224 KiB → 0 B |   3 → 0 | `PreserveJVMState::PreserveJVMState` | `libjvm.dylib` |
|  -80.0% | -128.015 KiB |   6.3% → 2.1% |  160 KiB → 32 KiB |   2 → 1 | `GraphKit::basic_plus_adr`           | `libjvm.dylib` |
|  -18.8% |   -96.07 KiB | 20.3% → 27.1% | 512 KiB → 416 KiB |   9 → 7 | `GraphKit::uncommon_trap`            | `libjvm.dylib` |

##### `PhaseIdealLoop::loop_predication_impl_helper` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size | Samples | Callee                                             | Location       |
| ------: | -----------: | ------------: | ------------------: | ------: | -------------------------------------------------- | -------------- |
|  -30.5% | -800.171 KiB | 20.1% → 15.1% | 2.56 MiB → 1.78 MiB | 54 → 43 | `Node_Array::grow`                                 | `libjvm.dylib` |
|  -83.3% | -319.765 KiB |   2.9% → 0.5% |    384 KiB → 64 KiB |  12 → 2 | `VectorSet::grow`                                  | `libjvm.dylib` |
| +200.0% | +256.031 KiB |   1.0% → 3.2% |   128 KiB → 384 KiB |   2 → 4 | `PhaseIdealLoop::rc_predicate`                     | `libjvm.dylib` |
|  -83.3% |     -160 KiB |   1.5% → 0.3% |    192 KiB → 32 KiB |   6 → 1 | `PhaseIdealLoop::add_template_assertion_predicate` | `libjvm.dylib` |
|   +2.0% |  +63.984 KiB | 25.0% → 27.6% | 3.19 MiB → 3.25 MiB | 77 → 76 | `Invariance::clone_nodes`                          | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size |   Samples | Callee                             | Location       |
| ------: | -----------: | ------------: | ------------------: | --------: | ---------------------------------- | -------------- |
|   +4.8% |   +1.215 MiB | 75.7% → 81.6% | 25.2 MiB → 26.5 MiB | 618 → 601 | `PredictedCallGenerator::generate` | `libjvm.dylib` |
|  +51.7% |  +479.96 KiB |   2.7% → 4.2% |  928 KiB → 1.38 MiB |   23 → 28 | `LibraryIntrinsic::generate`       | `libjvm.dylib` |
|  -34.3% |  -384.07 KiB |   3.3% → 2.2% |  1.09 MiB → 736 KiB |   13 → 11 | `DirectCallGenerator::generate`    | `libjvm.dylib` |
|   -0.9% | -227.734 KiB | 75.2% → 76.6% | 25.1 MiB → 24.8 MiB | 580 → 561 | `ParseGenerator::generate`         | `libjvm.dylib` |
| +200.0% | +192.031 KiB |   0.3% → 0.9% |    96 KiB → 288 KiB |     2 → 4 | `GraphKit::cast_not_null`          | `libjvm.dylib` |

##### `BarrierSetC2::store_at` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size |   Samples | Callee                                  | Location       |
| ------: | -----------: | ------------: | ------------------: | --------: | --------------------------------------- | -------------- |
|   -7.3% | -575.703 KiB | 95.7% → 99.1% | 7.72 MiB → 7.16 MiB | 150 → 134 | `ModRefBarrierSetC2::store_at_resolved` | `libjvm.dylib` |
| removed | -192.031 KiB |   2.3% → 0.0% |       192 KiB → 0 B |     2 → 0 | `C2AccessFence::C2AccessFence`          | `libjvm.dylib` |
|  -60.0% |   -96.07 KiB |   1.9% → 0.9% |    160 KiB → 64 KiB |     4 → 2 | `BarrierSetC2::store_at_resolved`       | `libjvm.dylib` |

##### `nmethod::nmethod` (`libjvm.dylib`)

| Change |       Delta |             % |                Size |         Samples | Callee                              | Location       |
| -----: | ----------: | ------------: | ------------------: | --------------: | ----------------------------------- | -------------- |
| -38.9% | -532.75 KiB | 16.2% → 11.0% |  1.34 MiB → 837 KiB | 26,121 → 23,205 | `G1CollectedHeap::register_nmethod` | `libjvm.dylib` |
|  -4.3% | -304.25 KiB | 83.8% → 89.0% | 6.92 MiB → 6.62 MiB | 12,680 → 12,600 | `CompiledMethod::CompiledMethod`    | `libjvm.dylib` |

##### `nmethod::new_nmethod` (`libjvm.dylib`)

| Change |       Delta |             % |                Size |         Samples | Callee                                 | Location       |
| -----: | ----------: | ------------: | ------------------: | --------------: | -------------------------------------- | -------------- |
|  -9.9% |  -836.5 KiB | 98.2% → 97.8% | 8.26 MiB → 7.44 MiB | 38,710 → 35,714 | `nmethod::nmethod`                     | `libjvm.dylib` |
|    new | +24.046 KiB |   0.0% → 0.3% |        0 B → 24 KiB |           0 → 3 | `CodeBuffer::finalize_oop_references`  | `libjvm.dylib` |
|  -1.1% |  -1.734 KiB |   1.8% → 1.9% |   152 KiB → 150 KiB |   6,470 → 6,396 | `InstanceKlass::add_dependent_nmethod` | `libjvm.dylib` |

##### `AllocateHeap` (`libjvm.dylib`)

| Change |        Delta |      % |                Size |           Samples | Callee       | Location       |
| -----: | -----------: | -----: | ------------------: | ----------------: | ------------ | -------------- |
|  -1.3% | -794.267 KiB | 100.0% | 59.3 MiB → 58.6 MiB | 459,732 → 449,851 | `os::malloc` | `libjvm.dylib` |

##### `G1CodeRootSetHashTable::insert` (`libjvm.dylib`)

| Change |        Delta |             % |               Size |         Samples | Callee                                                                                                                                                                                                                                                                                                                                           | Location       |
| -----: | -----------: | ------------: | -----------------: | --------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------- |
| -53.4% |     -639 KiB | 67.2% → 56.3% | 1.17 MiB → 558 KiB |       756 → 671 | `ConcurrentHashTable<G1CodeRootSetHashTableConfig, (MEMFLAGS)5>::internal_grow_prolog`                                                                                                                                                                                                                                                           | `libjvm.dylib` |
| -26.0% | -151.796 KiB | 32.8% → 43.7% |  585 KiB → 433 KiB | 37,427 → 27,712 | `bool ConcurrentHashTable<G1CodeRootSetHashTableConfig, (MEMFLAGS)5>::internal_insert_get<G1CodeRootSetHashTable::HashTableLookUp, bool ConcurrentHashTable<G1CodeRootSetHashTableConfig, (MEMFLAGS)5>::insert<G1CodeRootSetHashTable::HashTableLookUp>(Thread*, G1CodeRootSetHashTable::HashTableLookUp&, nmethod* const&, bool*, bool*)::NOP>` | `libjvm.dylib` |

##### `nmethod::oops_do` (`libjvm.dylib`)

| Change |        Delta |             % |               Size |         Samples | Callee                           | Location       |
| -----: | -----------: | ------------: | -----------------: | --------------: | -------------------------------- | -------------- |
| -44.4% | -790.796 KiB | 97.8% → 96.1% | 1.74 MiB → 991 KiB | 38,183 → 28,383 | `G1CodeRootSetHashTable::insert` | `libjvm.dylib` |

##### `G1BarrierSetC2::pre_barrier` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size | Samples | Callee                           | Location       |
| ------: | -----------: | ------------: | ----------------: | ------: | -------------------------------- | -------------- |
|  -55.0% | -352.031 KiB | 19.6% → 11.3% | 640 KiB → 288 KiB |  15 → 8 | `IdealKit::load`                 | `libjvm.dylib` |
|  +61.5% | +256.031 KiB | 12.7% → 26.2% | 416 KiB → 672 KiB |   5 → 7 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |
|  -87.5% | -223.968 KiB |   7.8% → 1.3% |  256 KiB → 32 KiB |   4 → 1 | `IdealKit::make_leaf_call`       | `libjvm.dylib` |
|  -85.7% | -192.031 KiB |   6.9% → 1.3% |  224 KiB → 32 KiB |   3 → 1 | `GraphKit::sync_kit`             | `libjvm.dylib` |
| removed | -128.007 KiB |   3.9% → 0.0% |     128 KiB → 0 B |   3 → 0 | `IdealKit::store`                | `libjvm.dylib` |

##### `ConcurrentHashTable<G1CodeRootSetHashTableConfig, (MEMFLAGS)5>::internal_grow_prolog` (`libjvm.dylib`)

| Change |    Delta |      % |               Size |   Samples | Callee         | Location       |
| -----: | -------: | -----: | -----------------: | --------: | -------------- | -------------- |
| -53.4% | -639 KiB | 100.0% | 1.17 MiB → 558 KiB | 756 → 671 | `AllocateHeap` | `libjvm.dylib` |

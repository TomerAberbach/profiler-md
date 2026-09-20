# Allocated native memory profile diff

Allocated 1.6 GiB → 1.62 GiB (+15.399 MiB, +0.9%) over 621,888 samples → 611,917 samples (2.7 KiB → 2.77 KiB per sample).

| Category | Change |       Delta |      % |               Size |           Samples |
| -------- | -----: | ----------: | -----: | -----------------: | ----------------: |
| Native   |  +0.9% | +15.399 MiB | 100.0% | 1.6 GiB → 1.62 GiB | 621,888 → 611,917 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in native bytes allocated directly in the function body, excluding callees.

##### Native

| Change |       Delta |     % |               Size |           Samples | Function       | Location                 |
| -----: | ----------: | ----: | -----------------: | ----------------: | -------------- | ------------------------ |
|  +0.9% | +15.398 MiB | 99.8% | 1.6 GiB → 1.61 GiB | 611,293 → 601,319 | `malloc_hook`  | `libasyncProfiler.dylib` |
|    ~0% |      +432 B |  0.1% |           2.15 MiB |     9,858 → 9,861 | `realloc_hook` | `libasyncProfiler.dylib` |

### Total size

#### Regressions

Functions with the largest increase in total native bytes allocated in the function and all its callees.

| Change |        Delta |             % |                Size |           Samples | Function                                   | Location                                             |
| -----: | -----------: | ------------: | ------------------: | ----------------: | ------------------------------------------ | ---------------------------------------------------- |
|    new | +136.798 MiB |   0.0% → 8.3% |       0 B → 137 MiB |       0 → 471,774 | `invoke(Object, Object, Object)`           | `java.lang.invoke.LambdaForm$MH.0x0000007001009800`  |
|    new | +136.798 MiB |   0.0% → 8.3% |       0 B → 137 MiB |       0 → 471,773 | `invokeStatic(Object, Object)`             | `java.lang.invoke.LambdaForm$DMH.0x0000007001008400` |
|  +1.3% |  +18.389 MiB | 85.3% → 85.6% | 1.37 GiB → 1.38 GiB |   27,142 → 26,558 | `Compile::Compile`                         | `libjvm.dylib`                                       |
|  +1.3% |  +18.389 MiB | 85.3% → 85.6% | 1.37 GiB → 1.38 GiB |   27,142 → 26,558 | `C2Compiler::compile_method`               | `libjvm.dylib`                                       |
|  +1.1% |  +16.288 MiB | 86.7% → 86.9% | 1.39 GiB → 1.41 GiB |   17,937 → 17,942 | `Arena::grow`                              | `libjvm.dylib`                                       |
|  +1.1% |  +16.287 MiB | 86.7% → 86.9% | 1.39 GiB → 1.41 GiB |   18,004 → 18,007 | `Chunk::operator new`                      | `libjvm.dylib`                                       |
|  +1.1% |  +15.523 MiB | 87.2% → 87.3% |  1.4 GiB → 1.41 GiB | 105,326 → 101,943 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`                                       |
|  +1.1% |  +15.497 MiB | 87.2% → 87.3% |  1.4 GiB → 1.41 GiB | 106,412 → 103,007 | `JavaThread::thread_main_inner`            | `libjvm.dylib`                                       |
|  +1.1% |  +15.497 MiB | 87.2% → 87.3% |  1.4 GiB → 1.41 GiB | 105,603 → 102,196 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`                                       |
|  +1.0% |  +15.487 MiB | 90.6% → 90.7% | 1.45 GiB → 1.47 GiB | 546,928 → 536,996 | `os::malloc`                               | `libjvm.dylib`                                       |
|  +0.9% |  +15.398 MiB |         99.8% |  1.6 GiB → 1.61 GiB | 611,293 → 601,319 | `malloc_hook`                              | `libasyncProfiler.dylib`                             |
|  +1.1% |   +15.26 MiB | 87.4% → 87.6% |  1.4 GiB → 1.42 GiB | 132,875 → 122,760 | `_pthread_start`                           | `libsystem_pthread.dylib`                            |
|  +1.1% |   +15.26 MiB | 87.4% → 87.6% |  1.4 GiB → 1.42 GiB | 132,875 → 122,760 | `thread_start`                             | `libsystem_pthread.dylib`                            |
|  +1.1% |   +15.26 MiB | 87.4% → 87.5% |  1.4 GiB → 1.42 GiB | 132,722 → 122,607 | `Thread::call_run`                         | `libjvm.dylib`                                       |
|  +1.1% |   +15.26 MiB | 87.4% → 87.5% |  1.4 GiB → 1.42 GiB | 132,722 → 122,607 | `thread_native_entry`                      | `libjvm.dylib`                                       |
|  +1.8% |  +10.924 MiB | 37.1% → 37.4% |   609 MiB → 620 MiB |   15,087 → 14,477 | `Compile::Code_Gen`                        | `libjvm.dylib`                                       |
|  +1.1% |   +8.058 MiB | 45.0% → 45.1% |   739 MiB → 747 MiB |     9,027 → 9,111 | `Compile::Optimize`                        | `libjvm.dylib`                                       |
|  +2.2% |   +6.407 MiB | 18.1% → 18.4% |   298 MiB → 304 MiB |     3,126 → 3,174 | `Compile::optimize_loops`                  | `libjvm.dylib`                                       |
|  +2.8% |   +6.347 MiB | 13.8% → 14.1% |   227 MiB → 233 MiB |     4,762 → 4,877 | `Arena::Arealloc`                          | `libjvm.dylib`                                       |
|  +4.5% |   +5.009 MiB |   6.8% → 7.0% |   111 MiB → 116 MiB |     1,769 → 1,849 | `Matcher::match`                           | `libjvm.dylib`                                       |

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

Functions with the largest decrease in total native bytes allocated in the function and all its callees.

|  Change |        Delta |           % |                Size |         Samples | Function                                                               | Location                                             |
| ------: | -----------: | ----------: | ------------------: | --------------: | ---------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -136.675 MiB | 8.3% → 0.0% |       137 MiB → 0 B |     471,696 → 0 | `invoke(Object, Object, Object)`                                       | `java.lang.invoke.LambdaForm$MH.0x0000000301009800`  |
| removed | -136.675 MiB | 8.3% → 0.0% |       137 MiB → 0 B |     471,695 → 0 | `invokeStatic(Object, Object)`                                         | `java.lang.invoke.LambdaForm$DMH.0x0000000301008400` |
|  -15.6% |   -4.844 MiB | 1.9% → 1.6% |   31 MiB → 26.1 MiB |       732 → 616 | `PhaseIdealLoop::loop_predication_impl`                                | `libjvm.dylib`                                       |
|  -15.6% |   -4.844 MiB | 1.9% → 1.6% |   31 MiB → 26.1 MiB |       732 → 616 | `IdealLoopTree::loop_predication`                                      | `libjvm.dylib`                                       |
|  -20.4% |   -3.688 MiB | 1.1% → 0.9% |   18 MiB → 14.3 MiB |       446 → 361 | `PathFrequency::to`                                                    | `libjvm.dylib`                                       |
|  -19.7% |   -3.501 MiB | 1.1% → 0.9% | 17.8 MiB → 14.3 MiB |       437 → 358 | `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to`   | `libjvm.dylib`                                       |
|  -10.1% |   -3.176 MiB | 1.9% → 1.7% | 31.4 MiB → 28.2 MiB | 65,561 → 62,825 | `Compilation::compile_method`                                          | `libjvm.dylib`                                       |
|  -10.1% |   -3.176 MiB | 1.9% → 1.7% | 31.4 MiB → 28.2 MiB | 65,561 → 62,825 | `Compilation::Compilation`                                             | `libjvm.dylib`                                       |
|  -10.1% |   -3.176 MiB | 1.9% → 1.7% | 31.4 MiB → 28.2 MiB | 65,561 → 62,825 | `Compiler::compile_method`                                             | `libjvm.dylib`                                       |
|  -16.4% |   -2.617 MiB | 1.0% → 0.8% |   16 MiB → 13.4 MiB |       796 → 710 | `Compilation::emit_lir`                                                | `libjvm.dylib`                                       |
|   -9.7% |   -2.277 MiB | 1.4% → 1.3% | 23.5 MiB → 21.3 MiB | 27,980 → 27,700 | `Compilation::compile_java_method`                                     | `libjvm.dylib`                                       |
|  -19.8% |   -2.211 MiB | 0.7% → 0.5% | 11.2 MiB → 8.97 MiB |       342 → 269 | `LinearScan::do_linear_scan`                                           | `libjvm.dylib`                                       |
| removed |   -2.165 MiB | 0.1% → 0.0% |      2.17 MiB → 0 B |      16,446 → 0 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000301234000` |
|  -15.4% |   -1.594 MiB | 0.6% → 0.5% | 10.3 MiB → 8.75 MiB |       267 → 223 | `PhaseIdealLoop::loop_predication_follow_branches`                     | `libjvm.dylib`                                       |
|  -41.2% |   -1.531 MiB | 0.2% → 0.1% | 3.72 MiB → 2.19 MiB |         76 → 52 | `Parse::do_if`                                                         | `libjvm.dylib`                                       |
|   -3.1% |   -1.125 MiB | 2.2% → 2.1% |   36.1 MiB → 35 MiB |       860 → 810 | `Parse::do_one_block`                                                  | `libjvm.dylib`                                       |
|   -2.9% |   -1.063 MiB | 2.2% → 2.1% | 36.4 MiB → 35.3 MiB |       887 → 834 | `Parse::Parse`                                                         | `libjvm.dylib`                                       |
|   -2.9% |   -1.063 MiB | 2.2% → 2.1% | 36.4 MiB → 35.3 MiB |       887 → 834 | `ParseGenerator::generate`                                             | `libjvm.dylib`                                       |
|  -42.3% |   -1.031 MiB |        0.1% | 2.44 MiB → 1.41 MiB |         44 → 32 | `Parse::array_load`                                                    | `libjvm.dylib`                                       |
|  -48.5% |    -1.03 MiB |        0.1% | 2.12 MiB → 1.09 MiB |         68 → 35 | `IndexSet::populate_free_list`                                         | `libjvm.dylib`                                       |

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

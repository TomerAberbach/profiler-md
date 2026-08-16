# Allocated native memory profile diff

Allocated 1.11 GiB → 1.15 GiB (+34.571 MiB, +3.0%) over 169,916 samples → 170,620 samples (6.87 KiB → 7.05 KiB per sample).

| Category | Change |       Delta |      % |                Size |           Samples |
| -------- | -----: | ----------: | -----: | ------------------: | ----------------: |
| Native   |  +3.0% | +34.571 MiB | 100.0% | 1.11 GiB → 1.15 GiB | 169,916 → 170,620 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in native bytes allocated directly in the function body, excluding callees.

##### Native

| Change |       Delta |      % |                Size |           Samples | Function      | Location                 |
| -----: | ----------: | -----: | ------------------: | ----------------: | ------------- | ------------------------ |
|  +3.0% | +34.573 MiB | 100.0% | 1.11 GiB → 1.15 GiB | 169,020 → 169,736 | `malloc_hook` | `libasyncProfiler.dylib` |

#### Improvements

Functions with the largest decrease in native bytes allocated directly in the function body, excluding callees.

##### Native

| Change |      Delta |     % |              Size |   Samples | Function       | Location                 |
| -----: | ---------: | ----: | ----------------: | --------: | -------------- | ------------------------ |
|  -1.1% | -2.062 KiB | <0.1% | 194 KiB → 192 KiB | 851 → 839 | `realloc_hook` | `libasyncProfiler.dylib` |

### Total size

#### Regressions

Functions with the largest increase in total native bytes allocated in the function and all its callees.

| Change |       Delta |             % |                Size |           Samples | Function                                                                                    | Location                                             |
| -----: | ----------: | ------------: | ------------------: | ----------------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|  +3.1% | +34.573 MiB | 99.2% → 99.3% |  1.1 GiB → 1.14 GiB | 158,011 → 158,728 | `os::malloc`                                                                                | `libjvm.dylib`                                       |
|  +3.0% | +34.573 MiB |        100.0% | 1.11 GiB → 1.15 GiB | 169,020 → 169,736 | `malloc_hook`                                                                               | `libasyncProfiler.dylib`                             |
|  +3.1% | +34.467 MiB |         98.0% | 1.09 GiB → 1.12 GiB |   13,470 → 13,826 | `Arena::grow`                                                                               | `libjvm.dylib`                                       |
|  +3.1% | +34.467 MiB |         97.4% | 1.08 GiB → 1.12 GiB |   17,791 → 18,187 | `Compile::Compile`                                                                          | `libjvm.dylib`                                       |
|  +3.1% | +34.467 MiB |         97.4% | 1.08 GiB → 1.12 GiB |   17,791 → 18,187 | `C2Compiler::compile_method`                                                                | `libjvm.dylib`                                       |
|  +3.1% | +34.466 MiB |         98.0% | 1.09 GiB → 1.12 GiB |   13,514 → 13,869 | `Chunk::operator new`                                                                       | `libjvm.dylib`                                       |
|  +3.1% | +34.323 MiB |         98.2% | 1.09 GiB → 1.13 GiB |   55,895 → 56,552 | `_pthread_start`                                                                            | `libsystem_pthread.dylib`                            |
|  +3.1% | +34.323 MiB |         98.2% | 1.09 GiB → 1.13 GiB |   55,895 → 56,552 | `thread_start`                                                                              | `libsystem_pthread.dylib`                            |
|  +3.1% | +34.323 MiB |         98.2% | 1.09 GiB → 1.13 GiB |   55,742 → 56,399 | `Thread::call_run`                                                                          | `libjvm.dylib`                                       |
|  +3.1% | +34.323 MiB |         98.2% | 1.09 GiB → 1.13 GiB |   55,742 → 56,399 | `thread_native_entry`                                                                       | `libjvm.dylib`                                       |
|  +3.1% | +34.298 MiB | 98.1% → 98.2% | 1.09 GiB → 1.13 GiB |   51,962 → 52,575 | `CompileBroker::invoke_compiler_on_method`                                                  | `libjvm.dylib`                                       |
|  +3.1% | +34.293 MiB | 98.1% → 98.2% | 1.09 GiB → 1.13 GiB |   52,015 → 52,648 | `CompileBroker::compiler_thread_loop`                                                       | `libjvm.dylib`                                       |
|  +3.1% | +34.293 MiB | 98.1% → 98.2% | 1.09 GiB → 1.13 GiB |   52,462 → 53,094 | `JavaThread::thread_main_inner`                                                             | `libjvm.dylib`                                       |
|  +3.4% | +21.673 MiB | 55.8% → 56.0% |   636 MiB → 657 MiB |     7,792 → 8,050 | `Compile::Optimize`                                                                         | `libjvm.dylib`                                       |
|  +3.2% | +18.768 MiB | 51.6% → 51.7% |   588 MiB → 607 MiB |     6,786 → 6,981 | `PhaseIdealLoop::optimize`                                                                  | `libjvm.dylib`                                       |
|  +3.2% | +18.612 MiB | 51.1% → 51.2% |   582 MiB → 601 MiB |     6,686 → 6,886 | `PhaseIdealLoop::build_and_optimize`                                                        | `libjvm.dylib`                                       |
|  +3.2% |  +18.58 MiB | 51.1% → 51.2% |   582 MiB → 601 MiB |     6,687 → 6,886 | `PhaseIdealLoop::PhaseIdealLoop`                                                            | `libjvm.dylib`                                       |
|    new | +13.832 MiB |   0.0% → 1.2% |      0 B → 13.8 MiB |        0 → 80,740 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000e801088800` |
|    new | +13.529 MiB |   0.0% → 1.2% |      0 B → 13.5 MiB |        0 → 78,800 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000e8010a9400`  |
|    new | +13.405 MiB |   0.0% → 1.1% |      0 B → 13.4 MiB |        0 → 78,079 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e8010abc00`  |

##### Native

| Change |        Delta |             % |                Size |           Samples | Function                                                             | Location                  |
| -----: | -----------: | ------------: | ------------------: | ----------------: | -------------------------------------------------------------------- | ------------------------- |
|  +3.1% |  +34.573 MiB | 99.2% → 99.3% |  1.1 GiB → 1.14 GiB | 158,011 → 158,728 | `os::malloc`                                                         | `libjvm.dylib`            |
|  +3.0% |  +34.573 MiB |        100.0% | 1.11 GiB → 1.15 GiB | 169,020 → 169,736 | `malloc_hook`                                                        | `libasyncProfiler.dylib`  |
|  +3.1% |  +34.467 MiB |         98.0% | 1.09 GiB → 1.12 GiB |   13,470 → 13,826 | `Arena::grow`                                                        | `libjvm.dylib`            |
|  +3.1% |  +34.466 MiB |         98.0% | 1.09 GiB → 1.12 GiB |   13,514 → 13,869 | `Chunk::operator new`                                                | `libjvm.dylib`            |
|  +3.1% |  +34.323 MiB |         98.2% | 1.09 GiB → 1.13 GiB |   55,895 → 56,552 | `_pthread_start`                                                     | `libsystem_pthread.dylib` |
|  +3.1% |  +34.323 MiB |         98.2% | 1.09 GiB → 1.13 GiB |   55,895 → 56,552 | `thread_start`                                                       | `libsystem_pthread.dylib` |
|  +3.1% |  +34.323 MiB |         98.2% | 1.09 GiB → 1.13 GiB |   55,742 → 56,399 | `Thread::call_run`                                                   | `libjvm.dylib`            |
|  +3.1% |  +34.323 MiB |         98.2% | 1.09 GiB → 1.13 GiB |   55,742 → 56,399 | `thread_native_entry`                                                | `libjvm.dylib`            |
|  +3.1% |  +34.293 MiB | 98.1% → 98.2% | 1.09 GiB → 1.13 GiB |   52,462 → 53,094 | `JavaThread::thread_main_inner`                                      | `libjvm.dylib`            |
|  +5.4% |   +9.441 MiB | 15.3% → 15.7% |   175 MiB → 184 MiB |     3,745 → 3,942 | `Arena::Arealloc`                                                    | `libjvm.dylib`            |
|  +7.6% |   +2.375 MiB |   2.7% → 2.8% | 31.1 MiB → 33.4 MiB |         760 → 828 | `IdealLoopTree::loop_predication`                                    | `libjvm.dylib`            |
| +10.9% |   +1.937 MiB |   1.6% → 1.7% | 17.8 MiB → 19.7 MiB |         446 → 498 | `PathFrequency::to`                                                  | `libjvm.dylib`            |
|  +4.8% |   +1.907 MiB |          3.5% | 39.6 MiB → 41.5 MiB |         874 → 922 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to`   | `libjvm.dylib`            |
| +38.5% |   +1.781 MiB |   0.4% → 0.5% | 4.63 MiB → 6.41 MiB |         110 → 132 | `Parse::do_field_access`                                             | `libjvm.dylib`            |
|  +9.5% |   +1.688 MiB |   1.6% → 1.7% | 17.8 MiB → 19.5 MiB |         446 → 490 | `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` | `libjvm.dylib`            |
| +36.0% |   +1.531 MiB |   0.4% → 0.5% | 4.25 MiB → 5.78 MiB |          97 → 122 | `BarrierSetC2::store_at`                                             | `libjvm.dylib`            |
| +43.5% |   +1.468 MiB |   0.3% → 0.4% | 3.38 MiB → 4.84 MiB |          77 → 100 | `Parse::do_put_xxx`                                                  | `libjvm.dylib`            |
| +32.8% |   +1.375 MiB |   0.4% → 0.5% | 4.19 MiB → 5.56 MiB |          95 → 119 | `ModRefBarrierSetC2::store_at_resolved`                              | `libjvm.dylib`            |
| +53.4% |   +1.218 MiB |   0.2% → 0.3% |  2.28 MiB → 3.5 MiB |           55 → 75 | `G1BarrierSetC2::post_barrier`                                       | `libjvm.dylib`            |
|  +4.7% | +992.382 KiB |   1.8% → 1.9% | 20.8 MiB → 21.8 MiB |         502 → 504 | `Parse::do_one_block`                                                | `libjvm.dylib`            |

#### Improvements

Functions with the largest decrease in total native bytes allocated in the function and all its callees.

|  Change |       Delta |           % |           Size |    Samples | Function                                                                                    | Location                                             |
| ------: | ----------: | ----------: | -------------: | ---------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -13.615 MiB | 1.2% → 0.0% | 13.6 MiB → 0 B | 80,709 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f801088800` |
| removed |  -13.31 MiB | 1.2% → 0.0% | 13.3 MiB → 0 B | 78,769 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000f8010a9400`  |
| removed | -13.158 MiB | 1.2% → 0.0% | 13.2 MiB → 0 B | 78,060 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f8010abc00`  |
| removed | -13.158 MiB | 1.2% → 0.0% | 13.2 MiB → 0 B | 78,060 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000f8010ac800`  |
| removed | -13.132 MiB | 1.2% → 0.0% | 13.1 MiB → 0 B | 78,028 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x000000f8010ac400`  |
| removed | -11.821 MiB | 1.0% → 0.0% | 11.8 MiB → 0 B | 68,837 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000f801092800` |
| removed | -11.804 MiB | 1.0% → 0.0% | 11.8 MiB → 0 B | 68,707 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000f8010ab400`  |
| removed | -11.226 MiB | 1.0% → 0.0% | 11.2 MiB → 0 B | 71,155 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f801092000`  |
| removed | -11.084 MiB | 1.0% → 0.0% | 11.1 MiB → 0 B | 70,595 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000f8010c6400`  |
| removed | -11.084 MiB | 1.0% → 0.0% | 11.1 MiB → 0 B | 70,595 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f8010c7000`  |
| removed | -10.873 MiB | 1.0% → 0.0% | 10.9 MiB → 0 B | 68,733 → 0 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000f801098400`  |
| removed | -10.873 MiB | 1.0% → 0.0% | 10.9 MiB → 0 B | 68,733 → 0 | `reinvoke(Object, Object)`                                                                  | `java.lang.invoke.LambdaForm$MH.0x000000f801098000`  |
| removed | -10.856 MiB | 1.0% → 0.0% | 10.9 MiB → 0 B | 68,712 → 0 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000f801096800`  |
| removed | -10.133 MiB | 0.9% → 0.0% | 10.1 MiB → 0 B | 63,267 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f80102b000`  |
| removed |  -10.07 MiB | 0.9% → 0.0% | 10.1 MiB → 0 B | 62,783 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f80109a000`  |
| removed |  -9.579 MiB | 0.8% → 0.0% | 9.58 MiB → 0 B | 59,782 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f8010d4c00`  |
| removed |   -9.41 MiB | 0.8% → 0.0% | 9.41 MiB → 0 B | 58,085 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000f8010c7800`  |
| removed |  -8.137 MiB | 0.7% → 0.0% | 8.14 MiB → 0 B | 48,634 → 0 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x000000f801093400` |
| removed |  -8.023 MiB | 0.7% → 0.0% | 8.02 MiB → 0 B | 46,875 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f801099000`  |
| removed |  -7.495 MiB | 0.7% → 0.0% |  7.5 MiB → 0 B | 44,951 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f8010d3800`  |

##### Native

|  Change |        Delta |            % |                Size |         Samples | Function                                              | Location       |
| ------: | -----------: | -----------: | ------------------: | --------------: | ----------------------------------------------------- | -------------- |
|  -53.6% | -480.023 KiB | 0.1% → <0.1% |   896 KiB → 416 KiB |          12 → 8 | `Parse::do_exceptions`                                | `libjvm.dylib` |
|  -56.0% | -448.046 KiB | 0.1% → <0.1% |   800 KiB → 352 KiB |           9 → 6 | `Parse::throw_to_exit`                                | `libjvm.dylib` |
|  -22.0% | -415.835 KiB |  0.2% → 0.1% | 1.84 MiB → 1.44 MiB |         39 → 32 | `Parse::build_exits`                                  | `libjvm.dylib` |
|  -18.5% | -319.921 KiB |         0.1% | 1.69 MiB → 1.38 MiB |         36 → 31 | `PreserveJVMState::PreserveJVMState`                  | `libjvm.dylib` |
|   -3.4% | -302.767 KiB |  0.8% → 0.7% |   8.7 MiB → 8.4 MiB | 28,347 → 28,517 | `Compiler::compile_method`                            | `libjvm.dylib` |
|  -61.5% | -255.984 KiB |        <0.1% |   416 KiB → 160 KiB |           3 → 4 | `Parse::call_register_finalizer`                      | `libjvm.dylib` |
|  -58.3% | -224.046 KiB |        <0.1% |   384 KiB → 160 KiB |           8 → 5 | `G1BarrierSetC2::g1_mark_card`                        | `libjvm.dylib` |
|  -30.0% |  -191.96 KiB | 0.1% → <0.1% |   640 KiB → 448 KiB |               8 | `BarrierSetC2::obj_allocate`                          | `libjvm.dylib` |
|  -71.4% | -159.882 KiB |        <0.1% |    224 KiB → 64 KiB |           7 → 2 | `MergeMemStream::MergeMemStream`                      | `libjvm.dylib` |
|  -19.6% | -131.992 KiB | 0.1% → <0.1% |   675 KiB → 543 KiB |   3,222 → 3,215 | `ClassFileParser::create_instance_klass`              | `libjvm.dylib` |
| removed | -128.046 KiB | <0.1% → 0.0% |       128 KiB → 0 B |           3 → 0 | `Parse::sharpen_type_after_if`                        | `libjvm.dylib` |
|  -21.6% | -128.031 KiB | 0.1% → <0.1% |   592 KiB → 464 KiB |         13 → 11 | `Phase::gen_subtype_check`                            | `libjvm.dylib` |
|  -22.2% | -127.984 KiB |        <0.1% |   576 KiB → 448 KiB |         16 → 12 | `Parse::adjust_map_after_if`                          | `libjvm.dylib` |
| removed | -127.945 KiB | <0.1% → 0.0% |       128 KiB → 0 B |           4 → 0 | `LibraryCallKit::inline_string_copy`                  | `libjvm.dylib` |
|  -12.5% | -103.937 KiB |         0.1% |   832 KiB → 728 KiB |         17 → 16 | `split_if`                                            | `libjvm.dylib` |
|  -60.0% |  -96.031 KiB |        <0.1% |    160 KiB → 64 KiB |           4 → 2 | `LibraryCallKit::inline_native_clone`                 | `libjvm.dylib` |
|  -75.0% |  -95.968 KiB |        <0.1% |    128 KiB → 32 KiB |           4 → 1 | `ModRefBarrierSetC2::atomic_cmpxchg_bool_at_resolved` | `libjvm.dylib` |
|  -75.0% |  -95.968 KiB |        <0.1% |    128 KiB → 32 KiB |           4 → 1 | `BarrierSetC2::atomic_cmpxchg_bool_at`                | `libjvm.dylib` |
|  -75.0% |  -95.968 KiB |        <0.1% |    128 KiB → 32 KiB |           4 → 1 | `LibraryCallKit::inline_unsafe_load_store`            | `libjvm.dylib` |
|  -20.4% |  -95.929 KiB |        <0.1% |   469 KiB → 373 KiB |   2,041 → 2,038 | `ClassFileParser::fill_instance_klass`                | `libjvm.dylib` |

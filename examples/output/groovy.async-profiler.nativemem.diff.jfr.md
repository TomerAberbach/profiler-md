# Allocated native memory profile diff

Allocated 1.13 GiB → 1.11 GiB (-20.176 MiB, -1.8%) over 170,038 samples → 170,231 samples (6.94 KiB → 6.81 KiB per sample).

| Category | Change |       Delta |      % |                Size |           Samples |
| -------- | -----: | ----------: | -----: | ------------------: | ----------------: |
| Native   |  -1.8% | -20.176 MiB | 100.0% | 1.13 GiB → 1.11 GiB | 170,038 → 170,231 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in native bytes allocated directly in the function body, excluding callees.

##### Native

| Change |      Delta |     % |              Size |   Samples | Function       | Location                 |
| -----: | ---------: | ----: | ----------------: | --------: | -------------- | ------------------------ |
|  +2.6% | +4.968 KiB | <0.1% | 190 KiB → 195 KiB | 834 → 852 | `realloc_hook` | `libasyncProfiler.dylib` |

#### Improvements

Functions with the largest decrease in native bytes allocated directly in the function body, excluding callees.

##### Native

| Change |      Delta |      % |                Size |           Samples | Function      | Location                 |
| -----: | ---------: | -----: | ------------------: | ----------------: | ------------- | ------------------------ |
|  -1.8% | -20.18 MiB | 100.0% | 1.13 GiB → 1.11 GiB | 169,159 → 169,334 | `malloc_hook` | `libasyncProfiler.dylib` |

### Total size

#### Regressions

Functions with the largest increase in total native bytes allocated in the function and all its callees.

| Change |       Delta |           % |           Size |    Samples | Function                                                                                    | Location                                             |
| -----: | ----------: | ----------: | -------------: | ---------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new | +14.385 MiB | 0.0% → 1.3% | 0 B → 14.4 MiB | 0 → 80,653 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a001088800` |
|    new | +14.072 MiB | 0.0% → 1.2% | 0 B → 14.1 MiB | 0 → 78,708 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000a0010a1800`  |
|    new | +13.983 MiB | 0.0% → 1.2% |   0 B → 14 MiB | 0 → 77,999 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a0010aa000`  |
|    new | +13.983 MiB | 0.0% → 1.2% |   0 B → 14 MiB | 0 → 77,999 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000a0010aac00`  |
|    new | +13.957 MiB | 0.0% → 1.2% |   0 B → 14 MiB | 0 → 77,967 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x000000a0010aa800`  |
|    new | +12.287 MiB | 0.0% → 1.1% | 0 B → 12.3 MiB | 0 → 68,857 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000a001094400` |
|    new | +12.264 MiB | 0.0% → 1.1% | 0 B → 12.3 MiB | 0 → 68,677 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000a0010a9800`  |
|    new | +11.658 MiB | 0.0% → 1.0% | 0 B → 11.7 MiB | 0 → 71,104 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a00108e000`  |
|    new | +11.503 MiB | 0.0% → 1.0% | 0 B → 11.5 MiB | 0 → 70,538 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000a0010c6400`  |
|    new | +11.503 MiB | 0.0% → 1.0% | 0 B → 11.5 MiB | 0 → 70,538 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a0010c7000`  |
|    new | +11.305 MiB | 0.0% → 1.0% | 0 B → 11.3 MiB | 0 → 68,697 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000a00109a000`  |
|    new | +11.305 MiB | 0.0% → 1.0% | 0 B → 11.3 MiB | 0 → 68,697 | `reinvoke(Object, Object)`                                                                  | `java.lang.invoke.LambdaForm$MH.0x000000a001099c00`  |
|    new | +11.289 MiB | 0.0% → 1.0% | 0 B → 11.3 MiB | 0 → 68,676 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000a001098400`  |
|    new | +10.566 MiB | 0.0% → 0.9% | 0 B → 10.6 MiB | 0 → 63,245 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a00102b000`  |
|    new | +10.503 MiB | 0.0% → 0.9% | 0 B → 10.5 MiB | 0 → 62,763 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a00109bc00`  |
|    new |  +9.628 MiB | 0.0% → 0.9% | 0 B → 9.63 MiB | 0 → 59,765 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a0010d4c00`  |
|    new |  +9.465 MiB | 0.0% → 0.8% | 0 B → 9.47 MiB | 0 → 58,107 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000a0010c7800`  |
|    new |  +8.378 MiB | 0.0% → 0.7% | 0 B → 8.38 MiB | 0 → 46,786 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a00109ac00`  |
|    new |    +8.2 MiB | 0.0% → 0.7% |  0 B → 8.2 MiB | 0 → 48,573 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x000000a001095000` |
|    new |  +7.559 MiB | 0.0% → 0.7% | 0 B → 7.56 MiB | 0 → 44,901 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a0010d3800`  |

##### Native

|  Change |        Delta |            % |                Size |         Samples | Function                                                                             | Location       |
| ------: | -----------: | -----------: | ------------------: | --------------: | ------------------------------------------------------------------------------------ | -------------- |
|  +14.8% | +704.226 KiB |  0.4% → 0.5% | 4.66 MiB → 5.35 MiB |        93 → 100 | `Parse::do_put_xxx`                                                                  | `libjvm.dylib` |
|  +18.4% |  +576.14 KiB |         0.3% | 3.06 MiB → 3.63 MiB |         64 → 68 | `G1BarrierSetC2::post_barrier`                                                       | `libjvm.dylib` |
|   +8.4% | +480.179 KiB |         0.5% | 5.56 MiB → 6.03 MiB |       114 → 118 | `BarrierSetC2::store_at`                                                             | `libjvm.dylib` |
|   +8.2% | +448.164 KiB |         0.5% | 5.35 MiB → 5.78 MiB |       111 → 114 | `ModRefBarrierSetC2::store_at_resolved`                                              | `libjvm.dylib` |
| +200.0% | +384.023 KiB |        <0.1% |   192 KiB → 576 KiB |          6 → 15 | `DirectCallGenerator::generate`                                                      | `libjvm.dylib` |
|  +16.2% | +351.984 KiB |         0.2% | 2.13 MiB → 2.47 MiB |         47 → 51 | `Parse::do_one_bytecode`                                                             | `libjvm.dylib` |
|   +4.5% | +287.929 KiB |  0.5% → 0.6% |  6.31 MiB → 6.6 MiB |       128 → 131 | `Parse::do_field_access`                                                             | `libjvm.dylib` |
|   +2.7% | +250.935 KiB |         0.8% | 9.02 MiB → 9.27 MiB | 28,697 → 28,660 | `Compiler::compile_method`                                                           | `libjvm.dylib` |
|  +77.8% | +224.023 KiB |        <0.1% |   288 KiB → 512 KiB |           5 → 9 | `BarrierSetC2::obj_allocate`                                                         | `libjvm.dylib` |
|  +17.0% | +223.951 KiB |         0.1% | 1.29 MiB → 1.51 MiB | 11,850 → 11,858 | `InterpreterRuntime::_new`                                                           | `libjvm.dylib` |
|  +45.5% | +160.031 KiB |        <0.1% |   352 KiB → 512 KiB |           7 → 9 | `G1BarrierSetC2::g1_mark_card`                                                       | `libjvm.dylib` |
|  +26.3% | +159.984 KiB |         0.1% |   608 KiB → 768 KiB |         17 → 21 | `Parse::adjust_map_after_if`                                                         | `libjvm.dylib` |
|   +7.6% | +131.732 KiB |  0.1% → 0.2% | 1.69 MiB → 1.82 MiB | 19,355 → 19,368 | `InstanceKlass::link_class_impl`                                                     | `libjvm.dylib` |
|  +10.0% | +128.021 KiB |         0.1% | 1.25 MiB → 1.38 MiB | 11,987 → 11,992 | `InstanceKlass::initialize_impl`                                                     | `libjvm.dylib` |
|  +23.5% | +128.007 KiB | <0.1% → 0.1% |   544 KiB → 672 KiB |         14 → 17 | `Parse::do_ifnull`                                                                   | `libjvm.dylib` |
|  +14.0% | +127.906 KiB |         0.1% |  913 KiB → 1.02 MiB |   8,928 → 8,932 | `ConstantPool::klass_at_impl`                                                        | `libjvm.dylib` |
| +133.3% | +127.906 KiB |        <0.1% |  95.9 KiB → 224 KiB |           3 → 7 | `GrowableArrayWithAllocator<PointsToNode*, GrowableArray<PointsToNode*>>::expand_to` | `libjvm.dylib` |
|  +90.4% |  +96.044 KiB |        <0.1% |   106 KiB → 202 KiB |       356 → 360 | `ClassVerifier::verify_method`                                                       | `libjvm.dylib` |
|  +90.4% |  +96.044 KiB |        <0.1% |   106 KiB → 202 KiB |       356 → 360 | `ClassVerifier::verify_class`                                                        | `libjvm.dylib` |
|  +21.3% |  +96.044 KiB |        <0.1% |   451 KiB → 547 KiB |   3,408 → 3,412 | `Verifier::verify`                                                                   | `libjvm.dylib` |

#### Improvements

Functions with the largest decrease in total native bytes allocated in the function and all its callees.

|  Change |       Delta |             % |                Size |           Samples | Function                                                                                    | Location                                             |
| ------: | ----------: | ------------: | ------------------: | ----------------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|   -1.8% | -20.706 MiB | 97.3% → 97.2% | 1.09 GiB → 1.07 GiB |   17,697 → 17,853 | `Compile::Compile`                                                                          | `libjvm.dylib`                                       |
|   -1.8% | -20.706 MiB | 97.3% → 97.2% | 1.09 GiB → 1.07 GiB |   17,697 → 17,853 | `C2Compiler::compile_method`                                                                | `libjvm.dylib`                                       |
|   -1.8% | -20.542 MiB | 98.2% → 98.1% |  1.1 GiB → 1.08 GiB |   56,295 → 56,330 | `_pthread_start`                                                                            | `libsystem_pthread.dylib`                            |
|   -1.8% | -20.542 MiB | 98.2% → 98.1% |  1.1 GiB → 1.08 GiB |   56,295 → 56,330 | `thread_start`                                                                              | `libsystem_pthread.dylib`                            |
|   -1.8% | -20.542 MiB | 98.2% → 98.1% |  1.1 GiB → 1.08 GiB |   56,142 → 56,177 | `Thread::call_run`                                                                          | `libjvm.dylib`                                       |
|   -1.8% | -20.542 MiB | 98.2% → 98.1% |  1.1 GiB → 1.08 GiB |   56,142 → 56,177 | `thread_native_entry`                                                                       | `libjvm.dylib`                                       |
|   -1.8% | -20.435 MiB |         98.1% |  1.1 GiB → 1.08 GiB |   52,312 → 52,411 | `CompileBroker::compiler_thread_loop`                                                       | `libjvm.dylib`                                       |
|   -1.8% | -20.435 MiB |         98.1% |  1.1 GiB → 1.08 GiB |   52,760 → 52,860 | `JavaThread::thread_main_inner`                                                             | `libjvm.dylib`                                       |
|   -1.8% | -20.429 MiB | 98.1% → 98.0% |  1.1 GiB → 1.08 GiB |   52,236 → 52,358 | `CompileBroker::invoke_compiler_on_method`                                                  | `libjvm.dylib`                                       |
|   -1.8% | -20.197 MiB |         98.0% |  1.1 GiB → 1.08 GiB |   13,609 → 13,610 | `Chunk::operator new`                                                                       | `libjvm.dylib`                                       |
|   -1.8% | -20.197 MiB |         98.0% |  1.1 GiB → 1.08 GiB |   13,566 → 13,567 | `Arena::grow`                                                                               | `libjvm.dylib`                                       |
|   -1.8% | -20.185 MiB |         99.2% |  1.12 GiB → 1.1 GiB | 158,149 → 158,319 | `os::malloc`                                                                                | `libjvm.dylib`                                       |
|   -1.8% |  -20.18 MiB |        100.0% | 1.13 GiB → 1.11 GiB | 169,159 → 169,334 | `malloc_hook`                                                                               | `libasyncProfiler.dylib`                             |
|   -3.0% | -19.259 MiB | 56.2% → 55.5% |   648 MiB → 628 MiB |     7,891 → 7,751 | `Compile::Optimize`                                                                         | `libjvm.dylib`                                       |
|   -2.9% | -17.331 MiB | 51.7% → 51.1% |   596 MiB → 579 MiB |     6,816 → 6,678 | `PhaseIdealLoop::optimize`                                                                  | `libjvm.dylib`                                       |
|   -2.9% | -17.238 MiB | 51.2% → 50.6% |   590 MiB → 573 MiB |     6,718 → 6,579 | `PhaseIdealLoop::build_and_optimize`                                                        | `libjvm.dylib`                                       |
|   -2.9% | -17.238 MiB | 51.2% → 50.6% |   590 MiB → 573 MiB |     6,718 → 6,579 | `PhaseIdealLoop::PhaseIdealLoop`                                                            | `libjvm.dylib`                                       |
| removed | -13.964 MiB |   1.2% → 0.0% |        14 MiB → 0 B |        80,491 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801088800` |
| removed | -13.664 MiB |   1.2% → 0.0% |      13.7 MiB → 0 B |        78,558 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000008010a1800`  |
| removed | -13.571 MiB |   1.2% → 0.0% |      13.6 MiB → 0 B |        77,852 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000008010aa000`  |

##### Native

| Change |       Delta |             % |                Size |           Samples | Function                                                             | Location                  |
| -----: | ----------: | ------------: | ------------------: | ----------------: | -------------------------------------------------------------------- | ------------------------- |
|  -1.8% | -20.542 MiB | 98.2% → 98.1% |  1.1 GiB → 1.08 GiB |   56,295 → 56,330 | `_pthread_start`                                                     | `libsystem_pthread.dylib` |
|  -1.8% | -20.542 MiB | 98.2% → 98.1% |  1.1 GiB → 1.08 GiB |   56,295 → 56,330 | `thread_start`                                                       | `libsystem_pthread.dylib` |
|  -1.8% | -20.542 MiB | 98.2% → 98.1% |  1.1 GiB → 1.08 GiB |   56,142 → 56,177 | `Thread::call_run`                                                   | `libjvm.dylib`            |
|  -1.8% | -20.542 MiB | 98.2% → 98.1% |  1.1 GiB → 1.08 GiB |   56,142 → 56,177 | `thread_native_entry`                                                | `libjvm.dylib`            |
|  -1.8% | -20.435 MiB |         98.1% |  1.1 GiB → 1.08 GiB |   52,760 → 52,860 | `JavaThread::thread_main_inner`                                      | `libjvm.dylib`            |
|  -1.8% | -20.197 MiB |         98.0% |  1.1 GiB → 1.08 GiB |   13,609 → 13,610 | `Chunk::operator new`                                                | `libjvm.dylib`            |
|  -1.8% | -20.197 MiB |         98.0% |  1.1 GiB → 1.08 GiB |   13,566 → 13,567 | `Arena::grow`                                                        | `libjvm.dylib`            |
|  -1.8% | -20.185 MiB |         99.2% |  1.12 GiB → 1.1 GiB | 158,149 → 158,319 | `os::malloc`                                                         | `libjvm.dylib`            |
|  -1.8% |  -20.18 MiB |        100.0% | 1.13 GiB → 1.11 GiB | 169,159 → 169,334 | `malloc_hook`                                                        | `libasyncProfiler.dylib`  |
|  -4.6% |  -8.439 MiB | 16.0% → 15.6% |   185 MiB → 176 MiB |     3,889 → 3,813 | `Arena::Arealloc`                                                    | `libjvm.dylib`            |
| -10.6% |  -2.563 MiB |   2.1% → 1.9% | 24.2 MiB → 21.6 MiB |         556 → 512 | `Parse::do_all_blocks`                                               | `libjvm.dylib`            |
| -10.6% |  -2.562 MiB |   2.1% → 1.9% | 24.2 MiB → 21.6 MiB |         582 → 542 | `Parse::Parse`                                                       | `libjvm.dylib`            |
| -10.6% |  -2.562 MiB |   2.1% → 1.9% | 24.2 MiB → 21.6 MiB |         582 → 542 | `ParseGenerator::generate`                                           | `libjvm.dylib`            |
| -13.6% |  -2.501 MiB |   1.6% → 1.4% | 18.4 MiB → 15.9 MiB |         431 → 390 | `PredictedCallGenerator::generate`                                   | `libjvm.dylib`            |
|  -9.9% |  -2.375 MiB |   2.1% → 1.9% |   24 MiB → 21.6 MiB |         554 → 512 | `Parse::do_one_block`                                                | `libjvm.dylib`            |
|  -6.8% |  -2.281 MiB |   2.9% → 2.7% |   33.3 MiB → 31 MiB |         831 → 767 | `IdealLoopTree::loop_predication`                                    | `libjvm.dylib`            |
| -10.1% |  -2.251 MiB |   1.9% → 1.8% | 22.2 MiB → 19.9 MiB |         515 → 475 | `Parse::do_call`                                                     | `libjvm.dylib`            |
| -12.3% |  -1.803 MiB |   1.3% → 1.1% | 14.7 MiB → 12.9 MiB |         251 → 231 | `IdealLoopTree::iteration_split_impl`                                | `libjvm.dylib`            |
| -11.3% |  -1.803 MiB |   1.4% → 1.2% | 15.9 MiB → 14.1 MiB |         278 → 258 | `IdealLoopTree::iteration_split`                                     | `libjvm.dylib`            |
|  -8.0% |    -1.5 MiB |   1.6% → 1.5% | 18.7 MiB → 17.2 MiB |         474 → 427 | `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` | `libjvm.dylib`            |

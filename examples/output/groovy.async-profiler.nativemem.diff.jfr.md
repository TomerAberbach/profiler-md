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

|      Change |        Delta |             % |                Size |         Samples | Function                                         | Location                                            |
| ----------: | -----------: | ------------: | ------------------: | --------------: | ------------------------------------------------ | --------------------------------------------------- |
| +3889503.1% |   +5.934 MiB |  <0.1% → 0.5% |    160 B → 5.94 MiB |      2 → 32,194 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a001212800` |
|   +13924.6% |   +5.904 MiB |  <0.1% → 0.5% | 43.4 KiB → 5.95 MiB |    322 → 32,245 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000a001212400` |
|       +3.3% |   +2.519 MiB |   6.7% → 7.0% | 77.2 MiB → 79.7 MiB |   1,169 → 1,275 | `Matcher::match`                                 | `libjvm.dylib`                                      |
|       +5.3% |   +2.445 MiB |   4.0% → 4.3% | 45.9 MiB → 48.3 MiB |       698 → 790 | `Matcher::xform`                                 | `libjvm.dylib`                                      |
|      +16.1% |   +2.061 MiB |   1.1% → 1.3% | 12.8 MiB → 14.9 MiB |       316 → 387 | `Matcher::match_tree`                            | `libjvm.dylib`                                      |
|     +154.8% |   +1.499 MiB |   0.1% → 0.2% |  991 KiB → 2.47 MiB |         31 → 78 | `Matcher::Label_Root`                            | `libjvm.dylib`                                      |
|       +0.3% |   +1.205 MiB | 38.1% → 38.9% |   439 MiB → 441 MiB |   7,948 → 8,250 | `Compile::Code_Gen`                              | `libjvm.dylib`                                      |
|      +11.1% | +854.929 KiB |          0.7% | 7.55 MiB → 8.39 MiB |       160 → 189 | `ConnectionGraph::compute_escape`                | `libjvm.dylib`                                      |
|       +0.3% | +849.257 KiB | 21.0% → 21.4% |   241 MiB → 242 MiB |   1,816 → 1,878 | `PhaseIFG::init`                                 | `libjvm.dylib`                                      |
|       +7.5% | +745.921 KiB |   0.8% → 0.9% | 9.65 MiB → 10.4 MiB |       201 → 228 | `ConnectionGraph::do_analysis`                   | `libjvm.dylib`                                      |
|      +43.2% | +727.484 KiB |   0.1% → 0.2% | 1.64 MiB → 2.35 MiB |         28 → 50 | `ConnectionGraph::find_inst_mem`                 | `libjvm.dylib`                                      |
|      +14.8% | +704.226 KiB |   0.4% → 0.5% | 4.66 MiB → 5.35 MiB |        93 → 100 | `Parse::do_put_xxx`                              | `libjvm.dylib`                                      |
|      +48.3% | +703.609 KiB |   0.1% → 0.2% | 1.42 MiB → 2.11 MiB |       335 → 358 | `LIRGenerator::block_do`                         | `libjvm.dylib`                                      |
|      +48.3% | +703.609 KiB |   0.1% → 0.2% | 1.42 MiB → 2.11 MiB |       335 → 358 | `BlockList::iterate_forward`                     | `libjvm.dylib`                                      |
|      +41.3% | +695.507 KiB |   0.1% → 0.2% | 1.64 MiB → 2.32 MiB |         28 → 49 | `ConnectionGraph::split_memory_phi`              | `libjvm.dylib`                                      |
|      +19.1% | +663.406 KiB |   0.3% → 0.4% | 3.39 MiB → 4.04 MiB |         69 → 91 | `ConnectionGraph::split_unique_types`            | `libjvm.dylib`                                      |
|      +15.2% | +640.226 KiB |          0.4% | 4.12 MiB → 4.75 MiB |       406 → 427 | `Compilation::emit_lir`                          | `libjvm.dylib`                                      |
|      +18.4% |  +576.14 KiB |          0.3% | 3.06 MiB → 3.63 MiB |         64 → 68 | `G1BarrierSetC2::post_barrier`                   | `libjvm.dylib`                                      |
|      +13.1% | +566.208 KiB |          0.4% | 4.24 MiB → 4.79 MiB | 27,105 → 27,331 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000a0010abc00` |
|      +24.0% | +545.536 KiB |          0.2% | 2.22 MiB → 2.75 MiB |   8,508 → 8,563 | `invokeConstructorOf(Class, Object)`             | `org.codehaus.groovy.runtime.InvokerHelper`         |

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

| Change |       Delta |             % |                Size |           Samples | Function                                   | Location                  |
| -----: | ----------: | ------------: | ------------------: | ----------------: | ------------------------------------------ | ------------------------- |
|  -1.8% | -20.706 MiB | 97.3% → 97.2% | 1.09 GiB → 1.07 GiB |   17,697 → 17,853 | `Compile::Compile`                         | `libjvm.dylib`            |
|  -1.8% | -20.706 MiB | 97.3% → 97.2% | 1.09 GiB → 1.07 GiB |   17,697 → 17,853 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
|  -1.8% | -20.542 MiB | 98.2% → 98.1% |  1.1 GiB → 1.08 GiB |   56,295 → 56,330 | `_pthread_start`                           | `libsystem_pthread.dylib` |
|  -1.8% | -20.542 MiB | 98.2% → 98.1% |  1.1 GiB → 1.08 GiB |   56,295 → 56,330 | `thread_start`                             | `libsystem_pthread.dylib` |
|  -1.8% | -20.542 MiB | 98.2% → 98.1% |  1.1 GiB → 1.08 GiB |   56,142 → 56,177 | `Thread::call_run`                         | `libjvm.dylib`            |
|  -1.8% | -20.542 MiB | 98.2% → 98.1% |  1.1 GiB → 1.08 GiB |   56,142 → 56,177 | `thread_native_entry`                      | `libjvm.dylib`            |
|  -1.8% | -20.435 MiB |         98.1% |  1.1 GiB → 1.08 GiB |   52,312 → 52,411 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
|  -1.8% | -20.435 MiB |         98.1% |  1.1 GiB → 1.08 GiB |   52,760 → 52,860 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
|  -1.8% | -20.429 MiB | 98.1% → 98.0% |  1.1 GiB → 1.08 GiB |   52,236 → 52,358 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  -1.8% | -20.197 MiB |         98.0% |  1.1 GiB → 1.08 GiB |   13,609 → 13,610 | `Chunk::operator new`                      | `libjvm.dylib`            |
|  -1.8% | -20.197 MiB |         98.0% |  1.1 GiB → 1.08 GiB |   13,566 → 13,567 | `Arena::grow`                              | `libjvm.dylib`            |
|  -1.8% | -20.185 MiB |         99.2% |  1.12 GiB → 1.1 GiB | 158,149 → 158,319 | `os::malloc`                               | `libjvm.dylib`            |
|  -1.8% |  -20.18 MiB |        100.0% | 1.13 GiB → 1.11 GiB | 169,159 → 169,334 | `malloc_hook`                              | `libasyncProfiler.dylib`  |
|  -3.0% | -19.259 MiB | 56.2% → 55.5% |   648 MiB → 628 MiB |     7,891 → 7,751 | `Compile::Optimize`                        | `libjvm.dylib`            |
|  -2.9% | -17.331 MiB | 51.7% → 51.1% |   596 MiB → 579 MiB |     6,816 → 6,678 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib`            |
|  -2.9% | -17.238 MiB | 51.2% → 50.6% |   590 MiB → 573 MiB |     6,718 → 6,579 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib`            |
|  -2.9% | -17.238 MiB | 51.2% → 50.6% |   590 MiB → 573 MiB |     6,718 → 6,579 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib`            |
|  -3.1% |  -9.331 MiB | 25.7% → 25.4% |   296 MiB → 287 MiB |     3,150 → 3,070 | `Compile::optimize_loops`                  | `libjvm.dylib`            |
|  -4.6% |  -8.439 MiB | 16.0% → 15.6% |   185 MiB → 176 MiB |     3,889 → 3,813 | `Arena::Arealloc`                          | `libjvm.dylib`            |
|  -1.6% |  -6.555 MiB |         35.1% |   404 MiB → 398 MiB |     2,634 → 2,659 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib`            |

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

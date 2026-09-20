# Allocated native memory profile diff

Allocated 251 MiB → 250 MiB (-887.76 KiB, -0.3%) over 84,387 samples → 83,149 samples (3.05 KiB → 3.08 KiB per sample).

| Category | Change |       Delta |      % |              Size |         Samples |
| -------- | -----: | ----------: | -----: | ----------------: | --------------: |
| Native   |  -0.3% | -887.76 KiB | 100.0% | 251 MiB → 250 MiB | 84,387 → 83,149 |

## Hottest functions

### Self size

#### Improvements

Functions with the largest decrease in native bytes allocated directly in the function body, excluding callees.

##### Native

| Change |        Delta |     % |              Size |         Samples | Function       | Location                 |
| -----: | -----------: | ----: | ----------------: | --------------: | -------------- | ------------------------ |
|  -0.3% | -887.229 KiB | 99.9% | 251 MiB → 250 MiB | 83,679 → 82,441 | `malloc_hook`  | `libasyncProfiler.dylib` |
|  -0.4% |       -544 B |  0.1% | 145 KiB → 144 KiB |             696 | `realloc_hook` | `libasyncProfiler.dylib` |

### Total size

#### Regressions

Functions with the largest increase in total native bytes allocated in the function and all its callees.

|  Change |        Delta |           % |                Size |       Samples | Function                              | Location                                             |
| ------: | -----------: | ----------: | ------------------: | ------------: | ------------------------------------- | ---------------------------------------------------- |
|     new |  +10.466 MiB | 0.0% → 4.2% |      0 B → 10.5 MiB |    0 → 32,808 | `invokeStatic(Object, Object)`        | `java.lang.invoke.LambdaForm$DMH.0x0000007001004800` |
|     new |  +10.466 MiB | 0.0% → 4.2% |      0 B → 10.5 MiB |    0 → 32,808 | `invoke(Object, Object, Object)`      | `java.lang.invoke.LambdaForm$MH.0x0000007001009800`  |
|   +8.4% | +746.335 KiB | 3.4% → 3.7% | 8.65 MiB → 9.38 MiB |     202 → 225 | `Matcher::match`                      | `libjvm.dylib`                                       |
|  +41.7% | +737.517 KiB | 0.7% → 1.0% | 1.73 MiB → 2.45 MiB | 6,231 → 6,141 | `Compilation::compile_method`         | `libjvm.dylib`                                       |
|  +41.7% | +737.517 KiB | 0.7% → 1.0% | 1.73 MiB → 2.45 MiB | 6,231 → 6,141 | `Compilation::Compilation`            | `libjvm.dylib`                                       |
|  +41.7% | +737.517 KiB | 0.7% → 1.0% | 1.73 MiB → 2.45 MiB | 6,231 → 6,141 | `Compiler::compile_method`            | `libjvm.dylib`                                       |
|  +74.2% |  +735.46 KiB | 0.4% → 0.7% |  991 KiB → 1.69 MiB |       31 → 54 | `Matcher::Label_Root`                 | `libjvm.dylib`                                       |
|  +33.3% | +703.406 KiB | 0.8% → 1.1% | 2.06 MiB → 2.75 MiB |       65 → 87 | `Matcher::match_tree`                 | `libjvm.dylib`                                       |
|  +47.8% | +701.111 KiB | 0.6% → 0.8% | 1.43 MiB → 2.12 MiB | 4,132 → 4,086 | `Compilation::compile_java_method`    | `libjvm.dylib`                                       |
|  +11.0% | +651.101 KiB | 2.3% → 2.6% |  5.77 MiB → 6.4 MiB |     130 → 151 | `Matcher::xform`                      | `libjvm.dylib`                                       |
| +146.9% | +383.593 KiB | 0.1% → 0.3% |   261 KiB → 645 KiB | 2,338 → 2,345 | `Compilation::build_hir`              | `libjvm.dylib`                                       |
|  +61.1% | +352.179 KiB | 0.2% → 0.4% |   576 KiB → 928 KiB |       18 → 27 | `IdealLoopTree::iteration_split_impl` | `libjvm.dylib`                                       |
|  +61.1% | +352.179 KiB | 0.2% → 0.4% |   576 KiB → 928 KiB |       18 → 27 | `IdealLoopTree::iteration_split`      | `libjvm.dylib`                                       |
| +178.4% | +351.617 KiB | 0.1% → 0.2% |   197 KiB → 549 KiB | 2,336 → 2,342 | `GraphBuilder::GraphBuilder`          | `libjvm.dylib`                                       |
| +178.4% | +351.617 KiB | 0.1% → 0.2% |   197 KiB → 549 KiB | 2,336 → 2,342 | `IRScope::IRScope`                    | `libjvm.dylib`                                       |
| +178.4% | +351.617 KiB | 0.1% → 0.2% |   197 KiB → 549 KiB | 2,336 → 2,342 | `IR::IR`                              | `libjvm.dylib`                                       |
|  +76.9% | +320.164 KiB | 0.2% → 0.3% |   416 KiB → 736 KiB |       13 → 21 | `PhaseIdealLoop::clone_loop`          | `libjvm.dylib`                                       |
|   +4.9% | +313.773 KiB | 2.5% → 2.6% | 6.21 MiB → 6.51 MiB |     147 → 154 | `PhaseLive::compute`                  | `libjvm.dylib`                                       |
|  +27.3% | +287.789 KiB | 0.4% → 0.5% | 1.03 MiB → 1.31 MiB |       34 → 43 | `Compilation::emit_lir`               | `libjvm.dylib`                                       |
|   +7.1% | +287.789 KiB | 1.6% → 1.7% | 3.97 MiB → 4.25 MiB |     124 → 133 | `Parse::do_one_block`                 | `libjvm.dylib`                                       |

##### Native

|   Change |        Delta |            % |                Size |       Samples | Function                                | Location       |
| -------: | -----------: | -----------: | ------------------: | ------------: | --------------------------------------- | -------------- |
|   +41.7% | +737.517 KiB |  0.7% → 1.0% | 1.73 MiB → 2.45 MiB | 6,231 → 6,141 | `Compiler::compile_method`              | `libjvm.dylib` |
|   +61.1% | +352.179 KiB |  0.2% → 0.4% |   576 KiB → 928 KiB |       18 → 27 | `IdealLoopTree::iteration_split_impl`   | `libjvm.dylib` |
|   +61.1% | +352.179 KiB |  0.2% → 0.4% |   576 KiB → 928 KiB |       18 → 27 | `IdealLoopTree::iteration_split`        | `libjvm.dylib` |
|  +178.4% | +351.617 KiB |  0.1% → 0.2% |   197 KiB → 549 KiB | 2,336 → 2,342 | `IRScope::IRScope`                      | `libjvm.dylib` |
|  +178.4% | +351.617 KiB |  0.1% → 0.2% |   197 KiB → 549 KiB | 2,336 → 2,342 | `IR::IR`                                | `libjvm.dylib` |
|    +7.1% | +287.789 KiB |  1.6% → 1.7% | 3.97 MiB → 4.25 MiB |     124 → 133 | `Parse::do_one_block`                   | `libjvm.dylib` |
|    +7.1% | +287.789 KiB |  1.6% → 1.7% | 3.97 MiB → 4.25 MiB |     124 → 133 | `Parse::do_all_blocks`                  | `libjvm.dylib` |
|    +7.1% | +287.789 KiB |  1.6% → 1.7% | 3.97 MiB → 4.25 MiB |     137 → 146 | `Parse::Parse`                          | `libjvm.dylib` |
|    +7.1% | +287.789 KiB |  1.6% → 1.7% | 3.97 MiB → 4.25 MiB |     137 → 146 | `ParseGenerator::generate`              | `libjvm.dylib` |
|    +6.9% |  +255.89 KiB |  1.4% → 1.5% | 3.62 MiB → 3.87 MiB |     113 → 121 | `Parse::do_call`                        | `libjvm.dylib` |
|    +5.2% | +191.937 KiB |  1.4% → 1.5% | 3.59 MiB → 3.78 MiB |     112 → 118 | `PredictedCallGenerator::generate`      | `libjvm.dylib` |
| +1959.3% | +128.117 KiB | <0.1% → 0.1% |  6.54 KiB → 135 KiB |      93 → 100 | `OopMapCache::lookup`                   | `libjvm.dylib` |
|  +133.4% | +127.984 KiB | <0.1% → 0.1% |    96 KiB → 224 KiB |         3 → 7 | `LibraryIntrinsic::generate`            | `libjvm.dylib` |
|   +40.0% | +127.906 KiB |  0.1% → 0.2% |   320 KiB → 448 KiB |       10 → 14 | `Parse::do_if`                          | `libjvm.dylib` |
|      new | +127.906 KiB | 0.0% → <0.1% |       0 B → 128 KiB |         0 → 4 | `GenerateOopMap::init_basic_blocks`     | `libjvm.dylib` |
|      new | +127.906 KiB | 0.0% → <0.1% |       0 B → 128 KiB |         0 → 4 | `GenerateOopMap::do_interpretation`     | `libjvm.dylib` |
|      new | +127.906 KiB | 0.0% → <0.1% |       0 B → 128 KiB |         0 → 4 | `GenerateOopMap::compute_map`           | `libjvm.dylib` |
|      new | +127.906 KiB | 0.0% → <0.1% |       0 B → 128 KiB |         0 → 4 | `OopMapCacheEntry::fill`                | `libjvm.dylib` |
|   +58.9% | +127.468 KiB |         0.1% |   216 KiB → 344 KiB | 6,376 → 6,377 | `Thread::oops_do`                       | `libjvm.dylib` |
|   +58.9% | +127.468 KiB |         0.1% |   216 KiB → 344 KiB | 6,376 → 6,377 | `Threads::possibly_parallel_threads_do` | `libjvm.dylib` |

#### Improvements

Functions with the largest decrease in total native bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |         Samples | Function                                   | Location                                             |
| ------: | -----------: | ------------: | ------------------: | --------------: | ------------------------------------------ | ---------------------------------------------------- |
| removed |  -10.514 MiB |   4.2% → 0.0% |      10.5 MiB → 0 B |      32,811 → 0 | `invokeStatic(Object, Object)`             | `java.lang.invoke.LambdaForm$DMH.0x000000e001004800` |
| removed |  -10.514 MiB |   4.2% → 0.0% |      10.5 MiB → 0 B |      32,811 → 0 | `invoke(Object, Object, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000e001009800`  |
|   -2.4% |    -1.71 MiB | 27.9% → 27.3% |   70 MiB → 68.3 MiB |       998 → 969 | `Compile::Optimize`                        | `libjvm.dylib`                                       |
|   -2.3% |   -1.527 MiB | 26.7% → 26.2% | 67.2 MiB → 65.7 MiB |       909 → 882 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib`                                       |
|   -1.3% |   -1.508 MiB | 47.8% → 47.4% |   120 MiB → 119 MiB |   2,683 → 2,665 | `Compile::Compile`                         | `libjvm.dylib`                                       |
|   -1.3% |   -1.508 MiB | 47.8% → 47.4% |   120 MiB → 119 MiB |   2,683 → 2,665 | `C2Compiler::compile_method`               | `libjvm.dylib`                                       |
|   -2.2% |   -1.464 MiB | 26.5% → 26.0% | 66.7 MiB → 65.2 MiB |       893 → 868 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib`                                       |
|   -2.2% |   -1.464 MiB | 26.5% → 26.0% | 66.7 MiB → 65.2 MiB |       893 → 868 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib`                                       |
|   -5.0% |   -1.455 MiB | 11.6% → 11.0% |   29 MiB → 27.6 MiB |       351 → 323 | `PhaseIFG::init`                           | `libjvm.dylib`                                       |
|   -2.4% |   -1.287 MiB | 21.6% → 21.2% | 54.3 MiB → 53.1 MiB |       513 → 496 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib`                                       |
|   -2.7% | -985.078 KiB | 14.4% → 14.1% | 36.2 MiB → 35.3 MiB |       529 → 514 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib`                                       |
|   -0.3% | -887.229 KiB |         99.9% |   251 MiB → 250 MiB | 83,679 → 82,441 | `malloc_hook`                              | `libasyncProfiler.dylib`                             |
|   -0.4% | -885.868 KiB |         97.1% |   244 MiB → 243 MiB | 81,309 → 80,074 | `os::malloc`                               | `libjvm.dylib`                                       |
|   -0.6% | -807.957 KiB | 48.5% → 48.4% |   122 MiB → 121 MiB | 10,315 → 10,183 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`                                       |
|   -0.6% |  -806.98 KiB | 48.5% → 48.4% |   122 MiB → 121 MiB | 10,363 → 10,232 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`                                       |
|   -0.6% | -806.964 KiB | 48.5% → 48.4% |   122 MiB → 121 MiB | 10,584 → 10,454 | `JavaThread::thread_main_inner`            | `libjvm.dylib`                                       |
|   -0.6% | -747.546 KiB | 48.4% → 48.2% |   122 MiB → 121 MiB |   1,927 → 1,941 | `Arena::grow`                              | `libjvm.dylib`                                       |
|   -0.6% |  -746.57 KiB | 48.4% → 48.3% |   122 MiB → 121 MiB |   1,996 → 2,011 | `Chunk::operator new`                      | `libjvm.dylib`                                       |
|   -0.3% | -725.869 KiB |         94.9% |             238 MiB | 35,351 → 34,323 | `_pthread_start`                           | `libsystem_pthread.dylib`                            |
|   -0.3% | -725.869 KiB |         94.9% |             238 MiB | 35,351 → 34,323 | `thread_start`                             | `libsystem_pthread.dylib`                            |

##### Native

| Change |        Delta |             % |                Size |         Samples | Function                                                           | Location                  |
| -----: | -----------: | ------------: | ------------------: | --------------: | ------------------------------------------------------------------ | ------------------------- |
|  -0.3% | -887.229 KiB |         99.9% |   251 MiB → 250 MiB | 83,679 → 82,441 | `malloc_hook`                                                      | `libasyncProfiler.dylib`  |
|  -0.4% | -885.868 KiB |         97.1% |   244 MiB → 243 MiB | 81,309 → 80,074 | `os::malloc`                                                       | `libjvm.dylib`            |
|  -0.6% | -806.964 KiB | 48.5% → 48.4% |   122 MiB → 121 MiB | 10,584 → 10,454 | `JavaThread::thread_main_inner`                                    | `libjvm.dylib`            |
|  -0.6% | -747.546 KiB | 48.4% → 48.2% |   122 MiB → 121 MiB |   1,927 → 1,941 | `Arena::grow`                                                      | `libjvm.dylib`            |
|  -0.6% |  -746.57 KiB | 48.4% → 48.3% |   122 MiB → 121 MiB |   1,996 → 2,011 | `Chunk::operator new`                                              | `libjvm.dylib`            |
|  -0.3% | -725.869 KiB |         94.9% |             238 MiB | 35,351 → 34,323 | `_pthread_start`                                                   | `libsystem_pthread.dylib` |
|  -0.3% | -725.869 KiB |         94.9% |             238 MiB | 35,351 → 34,323 | `thread_start`                                                     | `libsystem_pthread.dylib` |
|  -0.3% | -725.869 KiB |         94.9% |             238 MiB | 35,198 → 34,170 | `Thread::call_run`                                                 | `libjvm.dylib`            |
|  -0.3% | -725.869 KiB |         94.9% |             238 MiB | 35,198 → 34,170 | `thread_native_entry`                                              | `libjvm.dylib`            |
|  -6.2% | -256.085 KiB |   1.6% → 1.5% |    4 MiB → 3.75 MiB |       122 → 114 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib`            |
|  -1.3% | -192.125 KiB |   5.6% → 5.5% | 14.1 MiB → 13.9 MiB |       427 → 419 | `Arena::Arealloc`                                                  | `libjvm.dylib`            |
|  -0.1% | -159.824 KiB | 48.2% → 48.3% |             121 MiB | 67,927 → 66,820 | `AllocateHeap`                                                     | `libjvm.dylib`            |
| -10.3% | -128.023 KiB |   0.5% → 0.4% | 1.22 MiB → 1.09 MiB |         38 → 34 | `IdealLoopTree::loop_predication`                                  | `libjvm.dylib`            |
| -13.3% | -122.734 KiB |   0.4% → 0.3% |   926 KiB → 803 KiB |     1,032 → 902 | `Deoptimization::fetch_unroll_info_helper`                         | `libjvm.dylib`            |
| -20.2% | -119.978 KiB |          0.2% |   595 KiB → 475 KiB |   3,957 → 3,158 | `HeapRegionManager::expand`                                        | `libjvm.dylib`            |
| -20.2% | -119.978 KiB |          0.2% |   595 KiB → 475 KiB |   3,957 → 3,158 | `HeapRegionManager::expand_by`                                     | `libjvm.dylib`            |
| -20.2% | -119.978 KiB |          0.2% |   595 KiB → 475 KiB |   3,957 → 3,158 | `G1CollectedHeap::expand`                                          | `libjvm.dylib`            |
| -20.2% | -119.978 KiB |          0.2% |   595 KiB → 475 KiB |   3,957 → 3,158 | `G1CollectedHeap::expand_heap_after_young_collection`              | `libjvm.dylib`            |
| -20.2% | -113.369 KiB |          0.2% |   562 KiB → 448 KiB |   3,724 → 2,972 | `HeapRegion::HeapRegion`                                           | `libjvm.dylib`            |
| -20.2% |  -109.33 KiB |          0.2% |   542 KiB → 432 KiB |   3,491 → 2,786 | `HeapRegionRemSet::HeapRegionRemSet`                               | `libjvm.dylib`            |

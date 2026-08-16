# Allocated native memory profile diff

Allocated 243 MiB → 246 MiB (+2.365 MiB, +1.0%) over 84,474 samples → 82,688 samples (2.95 KiB → 3.04 KiB per sample).

| Category | Change |      Delta |      % |              Size |         Samples |
| -------- | -----: | ---------: | -----: | ----------------: | --------------: |
| Native   |  +1.0% | +2.365 MiB | 100.0% | 243 MiB → 246 MiB | 84,474 → 82,688 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in native bytes allocated directly in the function body, excluding callees.

##### Native

| Change |      Delta |     % |              Size |         Samples | Function      | Location                 |
| -----: | ---------: | ----: | ----------------: | --------------: | ------------- | ------------------------ |
|  +1.0% | +2.368 MiB | 99.9% | 243 MiB → 246 MiB | 83,768 → 81,982 | `malloc_hook` | `libasyncProfiler.dylib` |

#### Improvements

Functions with the largest decrease in native bytes allocated directly in the function body, excluding callees.

##### Native

| Change |      Delta |    % |              Size | Samples | Function       | Location                 |
| -----: | ---------: | ---: | ----------------: | ------: | -------------- | ------------------------ |
|  -2.2% | -3.187 KiB | 0.1% | 145 KiB → 142 KiB |     694 | `realloc_hook` | `libasyncProfiler.dylib` |

### Total size

#### Regressions

Functions with the largest increase in total native bytes allocated in the function and all its callees.

| Change |       Delta |             % |                Size |         Samples | Function                                   | Location                                             |
| -----: | ----------: | ------------: | ------------------: | --------------: | ------------------------------------------ | ---------------------------------------------------- |
|    new |  +10.51 MiB |   0.0% → 4.3% |      0 B → 10.5 MiB |      0 → 32,792 | `invokeStatic(Object, Object)`             | `java.lang.invoke.LambdaForm$DMH.0x0000007001004800` |
|    new |  +10.51 MiB |   0.0% → 4.3% |      0 B → 10.5 MiB |      0 → 32,792 | `invoke(Object, Object, Object)`           | `java.lang.invoke.LambdaForm$MH.0x0000007001009800`  |
|  +1.0% |  +2.368 MiB |         99.9% |   243 MiB → 246 MiB | 83,768 → 81,982 | `malloc_hook`                              | `libasyncProfiler.dylib`                             |
|  +1.0% |  +2.366 MiB |         97.0% |   236 MiB → 239 MiB | 81,397 → 79,610 | `os::malloc`                               | `libjvm.dylib`                                       |
|  +2.1% |  +2.358 MiB | 46.1% → 46.6% |   112 MiB → 115 MiB |   2,563 → 2,569 | `Compile::Compile`                         | `libjvm.dylib`                                       |
|  +2.1% |  +2.358 MiB | 46.1% → 46.6% |   112 MiB → 115 MiB |   2,563 → 2,569 | `C2Compiler::compile_method`               | `libjvm.dylib`                                       |
|  +1.0% |  +2.264 MiB |         94.7% |   231 MiB → 233 MiB | 35,527 → 33,575 | `_pthread_start`                           | `libsystem_pthread.dylib`                            |
|  +1.0% |  +2.264 MiB |         94.7% |   231 MiB → 233 MiB | 35,527 → 33,575 | `thread_start`                             | `libsystem_pthread.dylib`                            |
|  +1.0% |  +2.264 MiB |         94.7% |   231 MiB → 233 MiB | 35,374 → 33,422 | `Thread::call_run`                         | `libjvm.dylib`                                       |
|  +1.0% |  +2.264 MiB |         94.7% |   231 MiB → 233 MiB | 35,374 → 33,422 | `thread_native_entry`                      | `libjvm.dylib`                                       |
|  +1.9% |  +2.206 MiB | 46.8% → 47.2% |   114 MiB → 116 MiB |   1,896 → 1,918 | `Chunk::operator new`                      | `libjvm.dylib`                                       |
|  +1.9% |  +2.204 MiB | 46.8% → 47.2% |   114 MiB → 116 MiB |   1,825 → 1,846 | `Arena::grow`                              | `libjvm.dylib`                                       |
|  +1.8% |  +2.053 MiB | 46.9% → 47.3% |   114 MiB → 116 MiB | 10,091 → 10,080 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`                                       |
|  +1.8% |  +2.053 MiB | 47.0% → 47.3% |   114 MiB → 116 MiB | 10,139 → 10,128 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`                                       |
|  +1.8% |  +2.053 MiB | 47.0% → 47.3% |   114 MiB → 116 MiB | 10,360 → 10,348 | `JavaThread::thread_main_inner`            | `libjvm.dylib`                                       |
|  +4.1% |  +1.354 MiB | 13.6% → 14.0% | 33.2 MiB → 34.5 MiB |       480 → 504 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib`                                       |
|  +3.1% |  +1.307 MiB | 17.2% → 17.6% | 41.9 MiB → 43.2 MiB |   1,198 → 1,210 | `Compile::Code_Gen`                        | `libjvm.dylib`                                       |
|  +2.4% |  +1.207 MiB | 21.0% → 21.3% | 51.1 MiB → 52.3 MiB |       482 → 506 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib`                                       |
|  +4.0% |  +1.058 MiB | 10.9% → 11.2% | 26.6 MiB → 27.6 MiB |       321 → 333 | `PhaseIFG::init`                           | `libjvm.dylib`                                       |
|  +3.1% | +873.89 KiB | 11.4% → 11.6% | 27.7 MiB → 28.6 MiB |       354 → 365 | `Compile::optimize_loops`                  | `libjvm.dylib`                                       |

##### Native

|  Change |        Delta |             % |                Size |         Samples | Function                                        | Location                  |
| ------: | -----------: | ------------: | ------------------: | --------------: | ----------------------------------------------- | ------------------------- |
|   +1.0% |   +2.368 MiB |         99.9% |   243 MiB → 246 MiB | 83,768 → 81,982 | `malloc_hook`                                   | `libasyncProfiler.dylib`  |
|   +1.0% |   +2.366 MiB |         97.0% |   236 MiB → 239 MiB | 81,397 → 79,610 | `os::malloc`                                    | `libjvm.dylib`            |
|   +1.0% |   +2.264 MiB |         94.7% |   231 MiB → 233 MiB | 35,527 → 33,575 | `_pthread_start`                                | `libsystem_pthread.dylib` |
|   +1.0% |   +2.264 MiB |         94.7% |   231 MiB → 233 MiB | 35,527 → 33,575 | `thread_start`                                  | `libsystem_pthread.dylib` |
|   +1.0% |   +2.264 MiB |         94.7% |   231 MiB → 233 MiB | 35,374 → 33,422 | `Thread::call_run`                              | `libjvm.dylib`            |
|   +1.0% |   +2.264 MiB |         94.7% |   231 MiB → 233 MiB | 35,374 → 33,422 | `thread_native_entry`                           | `libjvm.dylib`            |
|   +1.9% |   +2.206 MiB | 46.8% → 47.2% |   114 MiB → 116 MiB |   1,896 → 1,918 | `Chunk::operator new`                           | `libjvm.dylib`            |
|   +1.9% |   +2.204 MiB | 46.8% → 47.2% |   114 MiB → 116 MiB |   1,825 → 1,846 | `Arena::grow`                                   | `libjvm.dylib`            |
|   +1.8% |   +2.053 MiB | 47.0% → 47.3% |   114 MiB → 116 MiB | 10,360 → 10,348 | `JavaThread::thread_main_inner`                 | `libjvm.dylib`            |
|  +15.1% | +511.703 KiB |   1.4% → 1.6% | 3.31 MiB → 3.81 MiB |       103 → 119 | `PredictedCallGenerator::generate`              | `libjvm.dylib`            |
|  +15.0% | +511.703 KiB |   1.4% → 1.6% | 3.34 MiB → 3.84 MiB |       104 → 120 | `Parse::do_call`                                | `libjvm.dylib`            |
|  +11.0% | +415.765 KiB |   1.5% → 1.7% | 3.69 MiB → 4.09 MiB |       126 → 140 | `Parse::Parse`                                  | `libjvm.dylib`            |
|  +11.0% | +415.765 KiB |   1.5% → 1.7% | 3.69 MiB → 4.09 MiB |       126 → 140 | `ParseGenerator::generate`                      | `libjvm.dylib`            |
|  +11.0% | +415.695 KiB |   1.5% → 1.7% | 3.69 MiB → 4.09 MiB |       115 → 128 | `Parse::do_one_block`                           | `libjvm.dylib`            |
|  +11.0% | +415.695 KiB |   1.5% → 1.7% | 3.69 MiB → 4.09 MiB |       115 → 128 | `Parse::do_all_blocks`                          | `libjvm.dylib`            |
|  +70.0% | +223.875 KiB |   0.1% → 0.2% |   320 KiB → 544 KiB |         10 → 17 | `Parse::do_field_access`                        | `libjvm.dylib`            |
|   +8.0% | +220.218 KiB |   1.1% → 1.2% |  2.69 MiB → 2.9 MiB |   1,126 → 1,216 | `G1YoungCollector::pre_evacuate_collection_set` | `libjvm.dylib`            |
|   +0.2% | +192.898 KiB | 49.6% → 49.2% |             121 MiB | 68,108 → 66,489 | `AllocateHeap`                                  | `libjvm.dylib`            |
|   +9.5% | +181.656 KiB |          0.8% | 1.87 MiB → 2.05 MiB | 13,234 → 13,081 | `WorkerThread::run`                             | `libjvm.dylib`            |
| +100.0% |  +159.96 KiB |          0.1% |   160 KiB → 320 KiB |          5 → 10 | `Parse::do_get_xxx`                             | `libjvm.dylib`            |

#### Improvements

Functions with the largest decrease in total native bytes allocated in the function and all its callees.

|  Change |        Delta |           % |                Size |       Samples | Function                                              | Location                                             |
| ------: | -----------: | ----------: | ------------------: | ------------: | ----------------------------------------------------- | ---------------------------------------------------- |
| removed |  -10.469 MiB | 4.3% → 0.0% |      10.5 MiB → 0 B |    32,793 → 0 | `invokeStatic(Object, Object)`                        | `java.lang.invoke.LambdaForm$DMH.0x000000b801004800` |
| removed |  -10.469 MiB | 4.3% → 0.0% |      10.5 MiB → 0 B |    32,793 → 0 | `invoke(Object, Object, Object)`                      | `java.lang.invoke.LambdaForm$MH.0x000000b801009800`  |
|  -20.1% | -351.685 KiB | 0.7% → 0.6% | 1.71 MiB → 1.37 MiB | 4,084 → 4,042 | `Compilation::compile_java_method`                    | `libjvm.dylib`                                       |
|  -15.4% | -315.638 KiB | 0.8% → 0.7% |    2 MiB → 1.69 MiB | 6,142 → 6,121 | `Compilation::compile_method`                         | `libjvm.dylib`                                       |
|  -15.4% | -315.638 KiB | 0.8% → 0.7% |    2 MiB → 1.69 MiB | 6,142 → 6,121 | `Compilation::Compilation`                            | `libjvm.dylib`                                       |
|  -15.4% | -315.638 KiB | 0.8% → 0.7% |    2 MiB → 1.69 MiB | 6,142 → 6,121 | `Compiler::compile_method`                            | `libjvm.dylib`                                       |
|  -23.7% | -287.804 KiB | 0.5% → 0.4% |  1.19 MiB → 928 KiB |       38 → 28 | `PhaseIdealLoop::loop_predication_impl`               | `libjvm.dylib`                                       |
|  -23.7% | -287.804 KiB | 0.5% → 0.4% |  1.19 MiB → 928 KiB |       38 → 28 | `IdealLoopTree::loop_predication`                     | `libjvm.dylib`                                       |
|  -23.7% | -287.789 KiB | 0.5% → 0.4% |  1.19 MiB → 927 KiB |       39 → 30 | `Compilation::emit_lir`                               | `libjvm.dylib`                                       |
|  -44.1% | -285.781 KiB | 0.3% → 0.1% |   648 KiB → 362 KiB | 4,314 → 2,412 | `HeapRegionManager::expand`                           | `libjvm.dylib`                                       |
|  -44.1% | -285.781 KiB | 0.3% → 0.1% |   648 KiB → 362 KiB | 4,314 → 2,412 | `HeapRegionManager::expand_by`                        | `libjvm.dylib`                                       |
|  -44.1% | -285.781 KiB | 0.3% → 0.1% |   648 KiB → 362 KiB | 4,314 → 2,412 | `G1CollectedHeap::expand`                             | `libjvm.dylib`                                       |
|  -44.1% | -285.781 KiB | 0.3% → 0.1% |   648 KiB → 362 KiB | 4,314 → 2,412 | `G1CollectedHeap::expand_heap_after_young_collection` | `libjvm.dylib`                                       |
|  -44.1% | -270.031 KiB | 0.2% → 0.1% |   612 KiB → 342 KiB | 4,060 → 2,270 | `HeapRegion::HeapRegion`                              | `libjvm.dylib`                                       |
|  -44.1% | -260.406 KiB | 0.2% → 0.1% |   591 KiB → 330 KiB | 3,806 → 2,128 | `HeapRegionRemSet::HeapRegionRemSet`                  | `libjvm.dylib`                                       |
|   -1.9% | -256.085 KiB | 5.4% → 5.2% | 13.1 MiB → 12.8 MiB |     404 → 386 | `Arena::Arealloc`                                     | `libjvm.dylib`                                       |
|  -16.8% | -228.773 KiB |        0.5% | 1.33 MiB → 1.11 MiB | 5,668 → 3,874 | `G1YoungCollector::post_evacuate_collection_set`      | `libjvm.dylib`                                       |
|  -29.2% | -223.968 KiB | 0.3% → 0.2% |   768 KiB → 544 KiB |       23 → 15 | `IdealLoopTree::iteration_split_impl`                 | `libjvm.dylib`                                       |
|  -29.2% | -223.968 KiB | 0.3% → 0.2% |   768 KiB → 544 KiB |       23 → 15 | `IdealLoopTree::iteration_split`                      | `libjvm.dylib`                                       |
|  -25.0% | -223.835 KiB | 0.4% → 0.3% |   895 KiB → 672 KiB |       28 → 21 | `LinearScan::do_linear_scan`                          | `libjvm.dylib`                                       |

##### Native

| Change |        Delta |            % |                Size |       Samples | Function                                                             | Location       |
| -----: | -----------: | -----------: | ------------------: | ------------: | -------------------------------------------------------------------- | -------------- |
| -15.4% | -315.638 KiB |  0.8% → 0.7% |    2 MiB → 1.69 MiB | 6,142 → 6,121 | `Compiler::compile_method`                                           | `libjvm.dylib` |
| -23.7% | -287.804 KiB |  0.5% → 0.4% |  1.19 MiB → 928 KiB |       38 → 28 | `IdealLoopTree::loop_predication`                                    | `libjvm.dylib` |
| -44.1% | -285.781 KiB |  0.3% → 0.1% |   648 KiB → 362 KiB | 4,314 → 2,412 | `HeapRegionManager::expand`                                          | `libjvm.dylib` |
| -44.1% | -285.781 KiB |  0.3% → 0.1% |   648 KiB → 362 KiB | 4,314 → 2,412 | `HeapRegionManager::expand_by`                                       | `libjvm.dylib` |
| -44.1% | -285.781 KiB |  0.3% → 0.1% |   648 KiB → 362 KiB | 4,314 → 2,412 | `G1CollectedHeap::expand`                                            | `libjvm.dylib` |
| -44.1% | -285.781 KiB |  0.3% → 0.1% |   648 KiB → 362 KiB | 4,314 → 2,412 | `G1CollectedHeap::expand_heap_after_young_collection`                | `libjvm.dylib` |
| -44.1% | -270.031 KiB |  0.2% → 0.1% |   612 KiB → 342 KiB | 4,060 → 2,270 | `HeapRegion::HeapRegion`                                             | `libjvm.dylib` |
| -44.1% | -260.406 KiB |  0.2% → 0.1% |   591 KiB → 330 KiB | 3,806 → 2,128 | `HeapRegionRemSet::HeapRegionRemSet`                                 | `libjvm.dylib` |
|  -1.9% | -256.085 KiB |  5.4% → 5.2% | 13.1 MiB → 12.8 MiB |     404 → 386 | `Arena::Arealloc`                                                    | `libjvm.dylib` |
| -16.8% | -228.773 KiB |         0.5% | 1.33 MiB → 1.11 MiB | 5,668 → 3,874 | `G1YoungCollector::post_evacuate_collection_set`                     | `libjvm.dylib` |
| -29.2% | -223.968 KiB |  0.3% → 0.2% |   768 KiB → 544 KiB |       23 → 15 | `IdealLoopTree::iteration_split_impl`                                | `libjvm.dylib` |
| -29.2% | -223.968 KiB |  0.3% → 0.2% |   768 KiB → 544 KiB |       23 → 15 | `IdealLoopTree::iteration_split`                                     | `libjvm.dylib` |
| -33.3% |  -191.82 KiB |         0.2% |   576 KiB → 384 KiB |       18 → 12 | `Parse::do_one_bytecode`                                             | `libjvm.dylib` |
| -44.1% |     -168 KiB |  0.2% → 0.1% |   381 KiB → 213 KiB |     254 → 142 | `G1CardSetMemoryManager::G1CardSetMemoryManager`                     | `libjvm.dylib` |
| -50.0% | -159.765 KiB |         0.1% |   320 KiB → 160 KiB |        10 → 5 | `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` | `libjvm.dylib` |
| -50.0% | -159.765 KiB |         0.1% |   320 KiB → 160 KiB |        10 → 5 | `PathFrequency::to`                                                  | `libjvm.dylib` |
| -28.6% | -128.023 KiB |  0.2% → 0.1% |   448 KiB → 320 KiB |       14 → 10 | `Invariance::clone_nodes`                                            | `libjvm.dylib` |
| -21.0% |  -127.96 KiB |         0.2% |   608 KiB → 480 KiB |       19 → 14 | `IdealLoopTree::counted_loop`                                        | `libjvm.dylib` |
| -26.7% | -127.906 KiB |  0.2% → 0.1% |   480 KiB → 352 KiB |       15 → 11 | `Parse::do_if`                                                       | `libjvm.dylib` |
| -80.0% | -127.906 KiB | 0.1% → <0.1% |    160 KiB → 32 KiB |         5 → 1 | `Parse::do_ifnull`                                                   | `libjvm.dylib` |

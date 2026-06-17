# Allocated native memory profile diff

Allocated 255 MB → 258 MB (+2.48 MB, +1.0%) over 84,474 samples → 82,688 samples (3.02 kB → 3.12 kB per sample).

| Category | Change |    Delta |      % |            Size |         Samples |
| -------- | -----: | -------: | -----: | --------------: | --------------: |
| ours     |  +1.0% | +2.48 MB | 100.0% | 255 MB → 258 MB | 84,474 → 82,688 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in native bytes allocated directly in the function body, excluding callees.

| Change |    Delta |     % |            Size |         Samples | Function        | Location               |
| -----: | -------: | ----: | --------------: | --------------: | --------------- | ---------------------- |
|  +1.0% | +2.48 MB | 99.9% | 255 MB → 258 MB | 83,768 → 81,982 | `malloc_hook()` | libasyncProfiler.dylib |

#### Progressions

Functions with the largest decrease in native bytes allocated directly in the function body, excluding callees.

| Change |    Delta |    % |            Size | Samples | Function         | Location               |
| -----: | -------: | ---: | --------------: | ------: | ---------------- | ---------------------- |
|  -2.2% | -3.26 kB | 0.1% | 149 kB → 145 kB |     694 | `realloc_hook()` | libasyncProfiler.dylib |

### Total size

#### Regressions

Functions with the largest increase in total native bytes allocated in the function and all its callees.

| Change |    Delta |             % |              Size |         Samples | Function                                     | Location                                                             |
| -----: | -------: | ------------: | ----------------: | --------------: | -------------------------------------------- | -------------------------------------------------------------------- |
|    new |   +11 MB |   0.0% → 4.3% |       0 B → 11 MB |      0 → 32,792 | `invokeStatic(Object, Object)`               | java.lang.invoke.LambdaForm$DMH.0x0000007001004800                   |
|    new |   +11 MB |   0.0% → 4.3% |       0 B → 11 MB |      0 → 32,792 | `invoke(Object, Object, Object)`             | java.lang.invoke.LambdaForm$MH.0x0000007001009800                    |
|    new | +3.15 MB |   0.0% → 1.2% |     0 B → 3.15 MB |       0 → 6,433 | `applyVoid(Object)`                          | org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111efe0 |
|  +1.0% | +2.48 MB |         99.9% |   255 MB → 258 MB | 83,768 → 81,982 | `malloc_hook()`                              | libasyncProfiler.dylib                                               |
|  +1.0% | +2.48 MB |         97.0% |   248 MB → 250 MB | 81,397 → 79,610 | `os::malloc()`                               | libjvm.dylib                                                         |
|  +2.1% | +2.47 MB | 46.1% → 46.6% |   118 MB → 120 MB |   2,563 → 2,569 | `Compile::Compile()`                         | libjvm.dylib                                                         |
|  +2.1% | +2.47 MB | 46.1% → 46.6% |   118 MB → 120 MB |   2,563 → 2,569 | `C2Compiler::compile_method()`               | libjvm.dylib                                                         |
|  +1.0% | +2.37 MB |         94.7% |   242 MB → 244 MB | 35,527 → 33,575 | `_pthread_start()`                           | libsystem_pthread.dylib                                              |
|  +1.0% | +2.37 MB |         94.7% |   242 MB → 244 MB | 35,527 → 33,575 | `thread_start()`                             | libsystem_pthread.dylib                                              |
|  +1.0% | +2.37 MB |         94.7% |   242 MB → 244 MB | 35,374 → 33,422 | `Thread::call_run()`                         | libjvm.dylib                                                         |
|  +1.0% | +2.37 MB |         94.7% |   242 MB → 244 MB | 35,374 → 33,422 | `thread_native_entry()`                      | libjvm.dylib                                                         |
|  +1.9% | +2.31 MB | 46.8% → 47.2% |   119 MB → 122 MB |   1,896 → 1,918 | `Chunk::operator new()`                      | libjvm.dylib                                                         |
|  +1.9% | +2.31 MB | 46.8% → 47.2% |   119 MB → 122 MB |   1,825 → 1,846 | `Arena::grow()`                              | libjvm.dylib                                                         |
|  +1.8% | +2.15 MB | 46.9% → 47.3% |   120 MB → 122 MB | 10,091 → 10,080 | `CompileBroker::invoke_compiler_on_method()` | libjvm.dylib                                                         |
|  +1.8% | +2.15 MB | 47.0% → 47.3% |   120 MB → 122 MB | 10,139 → 10,128 | `CompileBroker::compiler_thread_loop()`      | libjvm.dylib                                                         |
|  +1.8% | +2.15 MB | 47.0% → 47.3% |   120 MB → 122 MB | 10,360 → 10,348 | `JavaThread::thread_main_inner()`            | libjvm.dylib                                                         |
|  +4.1% | +1.42 MB | 13.6% → 14.0% | 34.8 MB → 36.2 MB |       480 → 504 | `PhaseChaitin::Register_Allocate()`          | libjvm.dylib                                                         |
|  +3.1% | +1.37 MB | 17.2% → 17.6% | 43.9 MB → 45.3 MB |   1,198 → 1,210 | `Compile::Code_Gen()`                        | libjvm.dylib                                                         |
|  +2.4% | +1.27 MB | 21.0% → 21.3% | 53.6 MB → 54.8 MB |       482 → 506 | `PhaseIdealLoop::Dominators()`               | libjvm.dylib                                                         |
|  +4.0% | +1.11 MB | 10.9% → 11.2% |   27.9 MB → 29 MB |       321 → 333 | `PhaseIFG::init()`                           | libjvm.dylib                                                         |

#### Progressions

Functions with the largest decrease in total native bytes allocated in the function and all its callees.

|  Change |   Delta |           % |              Size |       Samples | Function                                                | Location                                                                |
| ------: | ------: | ----------: | ----------------: | ------------: | ------------------------------------------------------- | ----------------------------------------------------------------------- |
| removed |  -11 MB | 4.3% → 0.0% |       11 MB → 0 B |    32,793 → 0 | `invokeStatic(Object, Object)`                          | java.lang.invoke.LambdaForm$DMH.0x000000b801004800                      |
| removed |  -11 MB | 4.3% → 0.0% |       11 MB → 0 B |    32,793 → 0 | `invoke(Object, Object, Object)`                        | java.lang.invoke.LambdaForm$MH.0x000000b801009800                       |
| removed | -3.1 MB | 1.2% → 0.0% |      3.1 MB → 0 B |     6,434 → 0 | `applyVoid(Object)`                                     | org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000b80111efe0    |
|  -20.1% | -360 kB | 0.7% → 0.6% | 1.79 MB → 1.43 MB | 4,084 → 4,042 | `Compilation::compile_java_method()`                    | libjvm.dylib                                                            |
|  -15.4% | -323 kB | 0.8% → 0.7% |  2.1 MB → 1.77 MB | 6,142 → 6,121 | `Compilation::compile_method()`                         | libjvm.dylib                                                            |
|  -15.4% | -323 kB | 0.8% → 0.7% |  2.1 MB → 1.77 MB | 6,142 → 6,121 | `Compilation::Compilation()`                            | libjvm.dylib                                                            |
|  -15.4% | -323 kB | 0.8% → 0.7% |  2.1 MB → 1.77 MB | 6,142 → 6,121 | `Compiler::compile_method()`                            | libjvm.dylib                                                            |
|  -23.7% | -295 kB | 0.5% → 0.4% |  1.25 MB → 950 kB |       38 → 28 | `PhaseIdealLoop::loop_predication_impl()`               | libjvm.dylib                                                            |
|  -23.7% | -295 kB | 0.5% → 0.4% |  1.25 MB → 950 kB |       38 → 28 | `IdealLoopTree::loop_predication()`                     | libjvm.dylib                                                            |
|  -23.7% | -295 kB | 0.5% → 0.4% |  1.24 MB → 950 kB |       39 → 30 | `Compilation::emit_lir()`                               | libjvm.dylib                                                            |
|  -44.1% | -293 kB | 0.3% → 0.1% |   664 kB → 371 kB | 4,314 → 2,412 | `HeapRegionManager::expand()`                           | libjvm.dylib                                                            |
|  -44.1% | -293 kB | 0.3% → 0.1% |   664 kB → 371 kB | 4,314 → 2,412 | `HeapRegionManager::expand_by()`                        | libjvm.dylib                                                            |
|  -44.1% | -293 kB | 0.3% → 0.1% |   664 kB → 371 kB | 4,314 → 2,412 | `G1CollectedHeap::expand()`                             | libjvm.dylib                                                            |
|  -44.1% | -293 kB | 0.3% → 0.1% |   664 kB → 371 kB | 4,314 → 2,412 | `G1CollectedHeap::expand_heap_after_young_collection()` | libjvm.dylib                                                            |
| removed | -280 kB | 0.1% → 0.0% |      280 kB → 0 B |     1,190 → 0 | `apply()`                                               | org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000b801103058    |
|  -44.1% | -277 kB | 0.2% → 0.1% |   627 kB → 351 kB | 4,060 → 2,270 | `HeapRegion::HeapRegion()`                              | libjvm.dylib                                                            |
|  -44.1% | -267 kB | 0.2% → 0.1% |   605 kB → 338 kB | 3,806 → 2,128 | `HeapRegionRemSet::HeapRegionRemSet()`                  | libjvm.dylib                                                            |
|   -1.9% | -262 kB | 5.4% → 5.2% | 13.7 MB → 13.4 MB |     404 → 386 | `Arena::Arealloc()`                                     | libjvm.dylib                                                            |
| removed | -253 kB | 0.1% → 0.0% |      253 kB → 0 B |       862 → 0 | `apply(Object, Object)`                                 | org.renaissance.harness.ConfigParser$$anon$1$$Lambda.0x000000b8010e6bb0 |
| removed | -253 kB | 0.1% → 0.0% |      253 kB → 0 B |       862 → 0 | `apply(Object, Object)`                                 | scopt.OptionDef$$Lambda.0x000000b8010d95b8                              |

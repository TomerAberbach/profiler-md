# Allocated native memory profile diff

Allocated 1.69 GB → 1.67 GB (-20.4 MB, -1.2%) over 625,321 samples → 617,888 samples (2.7 kB per sample).

| Category | Change |    Delta |      % |              Size |           Samples |
| -------- | -----: | -------: | -----: | ----------------: | ----------------: |
| ours     |  -1.2% | -20.4 MB | 100.0% | 1.69 GB → 1.67 GB | 625,321 → 617,888 |

## Hottest functions

### Self size

#### Progressions

Functions with the largest decrease in native bytes allocated directly in the function body, excluding callees.

| Change |    Delta |     % |              Size |           Samples | Function         | Location               |
| -----: | -------: | ----: | ----------------: | ----------------: | ---------------- | ---------------------- |
|  -1.2% | -20.4 MB | 99.8% | 1.69 GB → 1.67 GB | 614,723 → 607,294 | `malloc_hook()`  | libasyncProfiler.dylib |
|  -0.0% |   -352 B |  0.1% |           2.25 MB |     9,861 → 9,857 | `realloc_hook()` | libasyncProfiler.dylib |

### Total size

#### Regressions

Functions with the largest increase in total native bytes allocated in the function and all its callees.

| Change |    Delta |           % |              Size |         Samples | Function                                                                       | Location                                                                                                                                                                     |
| -----: | -------: | ----------: | ----------------: | --------------: | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new |  +143 MB | 0.0% → 8.6% |      0 B → 143 MB |     0 → 473,399 | `invoke(Object, Object, Object)`                                               | java.lang.invoke.LambdaForm$MH.0x000000f001009400                                                                                                                            |
|    new |  +143 MB | 0.0% → 8.6% |      0 B → 143 MB |     0 → 473,398 | `invokeStatic(Object, Object)`                                                 | java.lang.invoke.LambdaForm$DMH.0x000000f001008000                                                                                                                           |
|    new | +14.9 MB | 0.0% → 0.9% |     0 B → 14.9 MB |       0 → 1,139 | `invoke(Object)`                                                               | org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x000000f001396000                                                                                   |
|    new | +13.5 MB | 0.0% → 0.8% |     0 B → 13.5 MB |       0 → 1,770 | `compute()`                                                                    | org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion$$Lambda.0x000000f0015c70a8                                                                                 |
|    new | +13.4 MB | 0.0% → 0.8% |     0 B → 13.4 MB |       0 → 1,435 | `invoke()`                                                                     | org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory$$Lambda.0x000000f0015c8b68                                                                                   |
|    new |   +12 MB | 0.0% → 0.7% |       0 B → 12 MB |      0 → 34,594 | `invoke()`                                                                     | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000f0016548c0                                                      |
|    new | +9.56 MB | 0.0% → 0.6% |     0 B → 9.56 MB |      0 → 26,555 | `createSession(List, FirModuleData, boolean, Function1)`                       | org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase$$Lambda.0x000000f001423478                                                                                    |
| +33.1% |  +7.2 MB | 1.3% → 1.7% | 21.7 MB → 28.9 MB | 68,186 → 67,737 | `Compilation::compile_method()`                                                | libjvm.dylib                                                                                                                                                                 |
| +33.1% |  +7.2 MB | 1.3% → 1.7% | 21.7 MB → 28.9 MB | 68,186 → 67,737 | `Compilation::Compilation()`                                                   | libjvm.dylib                                                                                                                                                                 |
| +33.1% |  +7.2 MB | 1.3% → 1.7% | 21.7 MB → 28.9 MB | 68,186 → 67,737 | `Compiler::compile_method()`                                                   | libjvm.dylib                                                                                                                                                                 |
| +49.3% |    +7 MB | 0.8% → 1.3% | 14.2 MB → 21.2 MB | 27,642 → 27,324 | `Compilation::compile_java_method()`                                           | libjvm.dylib                                                                                                                                                                 |
|    new | +6.59 MB | 0.0% → 0.4% |     0 B → 6.59 MB |      0 → 17,810 | `invoke()`                                                                     | org.jetbrains.kotlin.fir.resolve.transformers.contracts.FirAbstractContractResolveTransformerDispatcher$FirDeclarationsContractResolveTransformer$$Lambda.0x000000f001654af8 |
|    new | +6.39 MB | 0.0% → 0.4% |     0 B → 6.39 MB |      0 → 19,527 | `invoke()`                                                                     | org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase$$Lambda.0x000000f001422df8                                                                                    |
|    new | +6.16 MB | 0.0% → 0.4% |     0 B → 6.16 MB |       0 → 6,868 | `invoke(Object, Object)`                                                       | org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$$Lambda.0x000000f001473e58                                                                    |
|    new | +4.64 MB | 0.0% → 0.3% |     0 B → 4.64 MB |      0 → 14,049 | `invoke()`                                                                     | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000f0016b4968                                                      |
| +48.0% | +4.24 MB | 0.5% → 0.8% | 8.83 MB → 13.1 MB |       553 → 683 | `Compilation::emit_lir()`                                                      | libjvm.dylib                                                                                                                                                                 |
| +49.2% | +3.09 MB | 0.4% → 0.6% | 6.29 MB → 9.38 MB |       175 → 270 | `LinearScan::do_linear_scan()`                                                 | libjvm.dylib                                                                                                                                                                 |
|    new | +2.62 MB | 0.0% → 0.2% |     0 B → 2.62 MB |       0 → 6,935 | `analyzeInternal(ConePostponedResolvedAtom, boolean, CollectionLiteralBounds)` | org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter$$Lambda.0x000000f001680250                                                                                       |
|    new | +2.62 MB | 0.0% → 0.2% |     0 B → 2.62 MB |       0 → 6,935 | `invoke(Object)`                                                               | org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter$$Lambda.0x000000f0016816a8                                                                              |
| +14.9% | +2.59 MB | 1.0% → 1.2% | 17.3 MB → 19.9 MB |       412 → 495 | `Matcher::match_tree()`                                                        | libjvm.dylib                                                                                                                                                                 |

#### Progressions

Functions with the largest decrease in total native bytes allocated in the function and all its callees.

|  Change |    Delta |             % |              Size |           Samples | Function                                     | Location                                                                                   |
| ------: | -------: | ------------: | ----------------: | ----------------: | -------------------------------------------- | ------------------------------------------------------------------------------------------ |
| removed |  -143 MB |   8.5% → 0.0% |      143 MB → 0 B |       473,240 → 0 | `invoke(Object, Object, Object)`             | java.lang.invoke.LambdaForm$MH.0x000000d801009400                                          |
| removed |  -143 MB |   8.5% → 0.0% |      143 MB → 0 B |       473,239 → 0 | `invokeStatic(Object, Object)`               | java.lang.invoke.LambdaForm$DMH.0x000000d801008000                                         |
|   -1.9% | -27.7 MB | 85.7% → 85.1% | 1.45 GB → 1.42 GB |   26,868 → 26,681 | `Compile::Compile()`                         | libjvm.dylib                                                                               |
|   -1.9% | -27.7 MB | 85.7% → 85.1% | 1.45 GB → 1.42 GB |   26,868 → 26,681 | `C2Compiler::compile_method()`               | libjvm.dylib                                                                               |
|   -1.4% | -20.7 MB | 87.2% → 87.1% | 1.47 GB → 1.45 GB | 134,727 → 127,220 | `_pthread_start()`                           | libsystem_pthread.dylib                                                                    |
|   -1.4% | -20.7 MB | 87.2% → 87.1% | 1.47 GB → 1.45 GB | 134,727 → 127,220 | `thread_start()`                             | libsystem_pthread.dylib                                                                    |
|   -1.4% | -20.7 MB | 87.2% → 87.1% | 1.47 GB → 1.45 GB | 134,574 → 127,067 | `Thread::call_run()`                         | libjvm.dylib                                                                               |
|   -1.4% | -20.7 MB | 87.2% → 87.1% | 1.47 GB → 1.45 GB | 134,574 → 127,067 | `thread_native_entry()`                      | libjvm.dylib                                                                               |
|   -1.3% | -20.4 MB | 90.4% → 90.3% | 1.53 GB → 1.51 GB | 548,882 → 541,458 | `os::malloc()`                               | libjvm.dylib                                                                               |
|   -1.2% | -20.4 MB |         99.8% | 1.69 GB → 1.67 GB | 614,723 → 607,294 | `malloc_hook()`                              | libasyncProfiler.dylib                                                                     |
|   -1.4% | -20.3 MB | 87.0% → 86.8% | 1.47 GB → 1.45 GB | 107,661 → 106,942 | `CompileBroker::invoke_compiler_on_method()` | libjvm.dylib                                                                               |
|   -1.4% | -20.3 MB | 87.0% → 86.8% | 1.47 GB → 1.45 GB | 108,736 → 108,034 | `JavaThread::thread_main_inner()`            | libjvm.dylib                                                                               |
|   -1.4% | -20.3 MB | 87.0% → 86.8% | 1.47 GB → 1.45 GB | 107,917 → 107,222 | `CompileBroker::compiler_thread_loop()`      | libjvm.dylib                                                                               |
|   -1.4% | -19.9 MB | 86.5% → 86.3% | 1.46 GB → 1.44 GB |   17,251 → 17,479 | `Arena::grow()`                              | libjvm.dylib                                                                               |
|   -1.4% | -19.9 MB | 86.5% → 86.4% | 1.46 GB → 1.44 GB |   17,307 → 17,548 | `Chunk::operator new()`                      | libjvm.dylib                                                                               |
|   -2.4% | -18.1 MB | 45.1% → 44.6% |   762 MB → 744 MB |     8,863 → 8,774 | `Compile::Optimize()`                        | libjvm.dylib                                                                               |
|   -2.3% | -15.9 MB | 40.5% → 40.0% |   685 MB → 669 MB |     7,350 → 7,256 | `PhaseIdealLoop::PhaseIdealLoop()`           | libjvm.dylib                                                                               |
|   -2.3% | -15.9 MB | 40.9% → 40.4% |   691 MB → 675 MB |     7,461 → 7,367 | `PhaseIdealLoop::optimize()`                 | libjvm.dylib                                                                               |
|   -2.3% | -15.9 MB | 40.5% → 40.0% |   685 MB → 669 MB |     7,349 → 7,256 | `PhaseIdealLoop::build_and_optimize()`       | libjvm.dylib                                                                               |
| removed | -14.9 MB |   0.9% → 0.0% |     14.9 MB → 0 B |         1,139 → 0 | `invoke(Object)`                             | org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x000000d801394428 |

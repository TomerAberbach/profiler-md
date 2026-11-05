# Sampling profile diff

Collected 1,308 → 1,366 samples (+58 samples, +4.4%).

| Category          |  Change | Delta |             % |   Samples |
| ----------------- | ------: | ----: | ------------: | --------: |
| Compiler          |   -0.5% |    -3 | 45.3% → 43.1% | 592 → 589 |
| Native            |  +12.3% |   +62 | 38.6% → 41.5% | 505 → 567 |
| Ours              |  -11.2% |   -16 |  10.9% → 9.3% | 143 → 127 |
| Standard library  |   +9.8% |    +6 |   4.7% → 4.9% |   61 → 67 |
| JIT               | +114.3% |    +8 |   0.5% → 1.1% |    7 → 15 |
| Garbage collector |     new |    +1 |   0.0% → 0.1% |     0 → 1 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── … 868 → 911 samples (66.4% → 66.7%) Thread::call_run at libjvm.dylib
│   ├── 795 → 838 samples (60.8% → 61.3%) JavaThread::thread_main_inner
│   │   └── 795 → 835 samples (60.8% → 61.1%) CompileBroker::compiler_thread_loop
│   │       ├── 784 → 812 samples (59.9% → 59.4%) CompileBroker::invoke_compiler_on_method
│   │       │   ├── 538 → 546 samples (41.1% → 40.0%) C2Compiler::compile_method
│   │       │   │   └── 538 → 546 samples (41.1% → 40.0%) Compile::Compile
│   │       │   │       ├── 194 → 200 samples (14.8% → 14.6%) Compile::Optimize
│   │       │   │       │   ├── 66 → 69 samples (5.0% → 5.1%) PhaseIdealLoop::optimize
│   │       │   │       │   │   ├── 55 → 59 samples (4.2% → 4.3%) PhaseIdealLoop::PhaseIdealLoop
│   │       │   │       │   │   │   └── 54 → 58 samples (4.1% → 4.2%) PhaseIdealLoop::build_and_optimize
│   │       │   │       │   │   │       ├── 15 → 22 samples (1.1% → 1.6%) PhaseIdealLoop::build_loop_late
│   │       │   │       │   │   │       │   └── 10 → 20 samples (0.8% → 1.5%, self 0.2% → 0.8%) PhaseIdealLoop::build_loop_late_post_work
│   │       │   │       │   │   │       │       └── 3 samples (0.2%) PhaseIdealLoop::compute_lca_of_uses
│   │       │   │       │   │   │       └── 38 → 35 samples (2.9% → 2.6%) 19 more callees, led by (0.8%) PhaseIdealLoop::split_if_with_blocks
│   │       │   │       │   │   └── 11 → 10 samples (0.8% → 0.7%) PhaseIterGVN::optimize …
│   │       │   │       │   └── 128 → 131 samples (9.8% → 9.6%) 14 more callees, led by (3.7% → 3.3%) Compile::optimize_loops
│   │       │   │       └── 344 → 346 samples (26.3% → 25.3%) 10 more callees, led by (21.5% → 19.8%) Compile::Code_Gen
│   │       │   ├── … 237 → 256 samples (18.1% → 18.7%) Compilation::compile_method at libjvm.dylib
│   │       │   │   ├── 212 → 230 samples (16.2% → 16.8%) Compilation::compile_java_method
│   │       │   │   │   ├── 74 → 88 samples (5.7% → 6.4%) Compilation::emit_lir
│   │       │   │   │   │   ├── 56 → 70 samples (4.3% → 5.1%) LinearScan::do_linear_scan
│   │       │   │   │   │   │   ├── 6 → 13 samples (0.5% → 1.0%) LinearScan::build_intervals
│   │       │   │   │   │   │   │   └── 0 → 3 samples (0.0% → 0.2%, self 1.5% → 2.9% globally) tlv_get_addr at libdyld.dylib
│   │       │   │   │   │   │   └── 50 → 57 samples (3.8% → 4.2%) 13 more callees, led by (1.1% → 2.0%) LinearScan::allocate_registers
│   │       │   │   │   │   └── 18 samples (1.4% → 1.3%) 2 more callees, led by (1.3%) BlockList::iterate_forward
│   │       │   │   │   └── 138 → 142 samples (10.6% → 10.4%) 5 more callees, led by (5.5% → 6.5%) Compilation::build_hir
│   │       │   │   └── 25 → 26 samples (1.9%) 2 more callees, led by (1.8% → 1.9%) ciEnv::register_method
│   │       │   └── 3 samples (0.2%) ciEnv::get_method_from_handle
│   │       └── … 5 → 19 samples (0.4% → 1.4%) __psynch_cvwait at libsystem_kernel.dylib
│   └── 73 samples (5.6% → 5.3%) 3 more callees, led by (5.4% → 5.0%) WorkerThread::run
├── 433 → 445 samples (33.1% → 32.6%) main(String[]) at org.jetbrains.kotlin.preloading.Preloader
│   └── 433 → 445 samples (33.1% → 32.6%) run(String[])
│       ├── … 353 → 364 samples (27.0% → 26.6%) exec(PrintStream, Services, MessageRenderer, String[]) at org.jetbrains.kotlin.cli.common.CLICompiler
│       │   └── 347 → 360 samples (26.5% → 26.4%) exec(MessageCollector, Services, CommonCompilerArguments)
│       │       ├── … 333 → 350 samples (25.5% → 25.6%) invoke(PhaseConfig, PhaserState, LoggingContext, Object) at org.jetbrains.kotlin.config.phaser.NamedCompilerPhase
│       │       │   └── 333 → 350 samples (25.5% → 25.6%) 4 more callees, led by (23.6%) phaseBody(LoggingContext, Object) at org.jetbrains.kotlin.cli.pipeline.PipelinePhase
│       │       └── 9 → 6 samples (0.7% → 0.4%) <clinit>() at org.jetbrains.kotlin.cli.common.ArgumentsKt …
│       └── 76 → 75 samples (5.8% → 5.5%) preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler) at org.jetbrains.kotlin.preloading.ClassPreloadingUtils
│           └── … 76 → 75 samples (5.8% → 5.5%) loadAllClassesFromJars(Collection, int, ClassHandler) at org.jetbrains.kotlin.preloading.ClassPreloadingUtils …
└── 6 → 9 samples (0.5% → 0.7%) 3 more root frames, led by (0.4% → 0.6%) break_stack_range
```

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |           % | Samples | Function                                                                                               | Location                  |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------ | ------------------------- |
| +100.0% |   +20 | 1.5% → 2.9% | 20 → 40 | `tlv_get_addr`                                                                                         | `libdyld.dylib`           |
| +283.3% |   +17 | 0.5% → 1.7% |  6 → 23 | `__psynch_cvwait`                                                                                      | `libsystem_kernel.dylib`  |
| +366.7% |   +11 | 0.2% → 1.0% |  3 → 14 | `PhaseIdealLoop::build_loop_late_post_work`                                                            | `libjvm.dylib`            |
|  +56.3% |    +9 | 1.2% → 1.8% | 16 → 25 | `__psynch_mutexwait`                                                                                   | `libsystem_kernel.dylib`  |
|  +90.0% |    +9 | 0.8% → 1.4% | 10 → 19 | `pthread_jit_write_protect_np`                                                                         | `libsystem_pthread.dylib` |
|     new |    +8 | 0.0% → 0.6% |   0 → 8 | `PhaseIterGVN::add_users_to_worklist`                                                                  | `libjvm.dylib`            |
| +350.0% |    +7 | 0.2% → 0.7% |   2 → 9 | `IntervalWalker::walk_to`                                                                              | `libjvm.dylib`            |
| +120.0% |    +6 | 0.4% → 0.8% |  5 → 11 | `PhaseChaitin::gather_lrg_masks`                                                                       | `libjvm.dylib`            |
| +125.0% |    +5 | 0.3% → 0.7% |   4 → 9 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib`            |
| +500.0% |    +5 | 0.1% → 0.4% |   1 → 6 | `I2C/C2I adapters(0xb)`                                                                                | `<unknown>`               |
|     new |    +5 | 0.0% → 0.4% |   0 → 5 | `LinearScan::build_intervals`                                                                          | `libjvm.dylib`            |
| +400.0% |    +4 | 0.1% → 0.4% |   1 → 5 | `PhaseChaitin::build_ifg_virtual`                                                                      | `libjvm.dylib`            |
| +100.0% |    +4 | 0.3% → 0.6% |   4 → 8 | `resource_allocate_bytes`                                                                              | `libjvm.dylib`            |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `PhaseCFG::partial_latency_of_defs`                                                                    | `libjvm.dylib`            |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `PhaseIdealLoop::build_loop_tree`                                                                      | `libjvm.dylib`            |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `PhiNode::Value`                                                                                       | `libjvm.dylib`            |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `PhaseCFG::schedule_late`                                                                              | `libjvm.dylib`            |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `Scheduling::anti_do_def`                                                                              | `libjvm.dylib`            |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `DebugInformationRecorder::serialize_scope_values`                                                     | `libjvm.dylib`            |
| +150.0% |    +3 | 0.2% → 0.4% |   2 → 5 | `I2C/C2I adapters`                                                                                     | `<unknown>`               |

##### Compiler

|  Change | Delta |           % | Samples | Function                                           | Location       |
| ------: | ----: | ----------: | ------: | -------------------------------------------------- | -------------- |
| +366.7% |   +11 | 0.2% → 1.0% |  3 → 14 | `PhaseIdealLoop::build_loop_late_post_work`        | `libjvm.dylib` |
|     new |    +8 | 0.0% → 0.6% |   0 → 8 | `PhaseIterGVN::add_users_to_worklist`              | `libjvm.dylib` |
| +350.0% |    +7 | 0.2% → 0.7% |   2 → 9 | `IntervalWalker::walk_to`                          | `libjvm.dylib` |
| +120.0% |    +6 | 0.4% → 0.8% |  5 → 11 | `PhaseChaitin::gather_lrg_masks`                   | `libjvm.dylib` |
|     new |    +5 | 0.0% → 0.4% |   0 → 5 | `LinearScan::build_intervals`                      | `libjvm.dylib` |
| +400.0% |    +4 | 0.1% → 0.4% |   1 → 5 | `PhaseChaitin::build_ifg_virtual`                  | `libjvm.dylib` |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `PhaseCFG::partial_latency_of_defs`                | `libjvm.dylib` |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `PhaseIdealLoop::build_loop_tree`                  | `libjvm.dylib` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `PhiNode::Value`                                   | `libjvm.dylib` |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `PhaseCFG::schedule_late`                          | `libjvm.dylib` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `Scheduling::anti_do_def`                          | `libjvm.dylib` |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |
|  +75.0% |    +3 | 0.3% → 0.5% |   4 → 7 | `Compile::identify_useful_nodes`                   | `libjvm.dylib` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `BlockListBuilder::set_leaders`                    | `libjvm.dylib` |
| +150.0% |    +3 | 0.2% → 0.4% |   2 → 5 | `ValueStack::values_do`                            | `libjvm.dylib` |
| +100.0% |    +3 | 0.2% → 0.4% |   3 → 6 | `LIR_OpVisitState::visit`                          | `libjvm.dylib` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `ciMethodData::bci_to_data`                        | `libjvm.dylib` |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `PhaseCCP::transform`                              | `libjvm.dylib` |
|  +40.0% |    +2 | 0.4% → 0.5% |   5 → 7 | `PhaseIdealLoop::build_loop_late`                  | `libjvm.dylib` |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `Scheduling::DoScheduling`                         | `libjvm.dylib` |

##### Native

|  Change | Delta |           % | Samples | Function                                                                                               | Location                  |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------ | ------------------------- |
| +100.0% |   +20 | 1.5% → 2.9% | 20 → 40 | `tlv_get_addr`                                                                                         | `libdyld.dylib`           |
| +283.3% |   +17 | 0.5% → 1.7% |  6 → 23 | `__psynch_cvwait`                                                                                      | `libsystem_kernel.dylib`  |
|  +56.3% |    +9 | 1.2% → 1.8% | 16 → 25 | `__psynch_mutexwait`                                                                                   | `libsystem_kernel.dylib`  |
|  +90.0% |    +9 | 0.8% → 1.4% | 10 → 19 | `pthread_jit_write_protect_np`                                                                         | `libsystem_pthread.dylib` |
| +125.0% |    +5 | 0.3% → 0.7% |   4 → 9 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib`            |
| +100.0% |    +4 | 0.3% → 0.6% |   4 → 8 | `resource_allocate_bytes`                                                                              | `libjvm.dylib`            |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `BytecodeStream::next`                                                                                 | `libjvm.dylib`            |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `fwd_copy_drain`                                                                                       | `libjvm.dylib`            |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `__psynch_cvbroad`                                                                                     | `libsystem_kernel.dylib`  |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `VerificationType::is_assignable_from`                                                                 | `libjvm.dylib`            |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `PackedTableLookup::search`                                                                            | `libjvm.dylib`            |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `G1CodeRootSet::add`                                                                                   | `libjvm.dylib`            |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `Parse::do_one_block`                                                                                  | `libjvm.dylib`            |
|  +66.7% |    +2 | 0.2% → 0.4% |   3 → 5 | `vmSymbols::find_sid`                                                                                  | `libjvm.dylib`            |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb`                      | `libjvm.dylib`            |
| +100.0% |    +2 | 0.2% → 0.3% |   2 → 4 | `updateBytesCRC32`                                                                                     | `<unknown>`               |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `ClassFileParser::parse_constant_pool_entries`                                                         | `libjvm.dylib`            |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `java_lang_String::equals`                                                                             | `libjvm.dylib`            |
| +100.0% |    +2 | 0.2% → 0.3% |   2 → 4 | `trampoline_stub_Relocation::get_trampoline_for`                                                       | `libjvm.dylib`            |
| +100.0% |    +2 | 0.2% → 0.3% |   2 → 4 | `CodeCache::make_marked_nmethods_deoptimized`                                                          | `libjvm.dylib`            |

##### Ours

| Change | Delta |           % | Samples | Function                                                                                             | Location                                                                                                           |
| -----: | ----: | ----------: | ------: | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
|    new |    +2 | 0.0% → 0.1% |   0 → 2 | `getNonDispatchParameters(IrFunction)`                                                               | `org.jetbrains.kotlin.ir.util.IrUtilsKt`                                                                           |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>(CodedInputStream, ExtensionRegistryLite)`                                                    | `org.jetbrains.kotlin.metadata.ProtoBuf$Function`                                                                  |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                          | `org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`                                                                |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `convertCallExpression(LighterASTNode)`                                                              | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`                                    |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `getTopLevelCallableNamesInPackage(FqName)`                                                          | `org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`                                          |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `computeIndexedQualifiers(KotlinTypeMarker, Iterable, TypeEnhancementInfo, boolean)`                 | `org.jetbrains.kotlin.load.java.typeEnhancement.AbstractSignatureParts`                                            |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `withParameters(FirCallableDeclaration, SessionAndScopeSessionHolder, Function0)`                    | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveContext`                                    |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `withAnonymousFunction(FirAnonymousFunction, SessionAndScopeSessionHolder, Function0)`               | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveContext`                                    |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `getFirstClassifierOrNull(FirScope, CallInfo, ConstructorFilter, FirSession, BodyResolveComponents)` | `org.jetbrains.kotlin.fir.resolve.calls.ConstructorProcessingKt`                                                   |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `invokeSuspend(Object)`                                                                              | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$2`                           |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `contains(KotlinTypeMarker, Function1)`                                                              | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector$TypeCheckerStateForConstraintInjector` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `withFile(FirFile, Function0)`                                                                       | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`                     |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `transformWhenBranch(FirWhenBranch, Object)`                                                         | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`           |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `parseTypeString(CharacterIterator, ClassifierResolutionContext)`                                    | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser`                              |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `transformFunctionCall(FirFunctionCall, ExpectedArgumentType)`                                       | `org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer`                          |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `checkImpl(CheckerSink, ResolutionContext, ConeResolutionAtom, Candidate, ImplicitKind)`             | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckShadowedImplicits`                                             |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `unwrapFakeOverridesIfNecessary(FirBasedSymbol)`                                                     | `org.jetbrains.kotlin.fir.resolve.dfa.VariableStorage`                                                             |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `contains(ConeKotlinType, Function1, SmartSet)`                                                      | `org.jetbrains.kotlin.fir.types.ConeTypeUtilsKt`                                                                   |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `getResolvedAnnotationClassIds()`                                                                    | `org.jetbrains.kotlin.fir.symbols.FirBasedSymbol`                                                                  |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `isHiddenForThisCallSite(CheckerSink, FirCallableSymbol, CallInfo, Candidate)`                       | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckHiddenDeclaration`                                             |

##### Standard library

|  Change | Delta |           % | Samples | Function                                            | Location                                             |
| ------: | ----: | ----------: | ------: | --------------------------------------------------- | ---------------------------------------------------- |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `next()`                                            | `java.util.ArrayList$Itr`                            |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `newNode(int, Object, Object, HashMap$Node)`        | `java.util.LinkedHashMap`                            |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `inflate(byte[], int, int)`                         | `java.util.zip.Inflater`                             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `indexOf(int, int)`                                 | `java.lang.String`                                   |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `get(Object)`                                       | `java.util.concurrent.ConcurrentHashMap`             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `linkToTargetMethod(Object, Object)`                | `java.lang.invoke.Invokers$Holder`                   |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `newByteChannel(Path, Set, FileAttribute[])`        | `java.nio.file.Files`                                |
| +100.0% |    +1 |        0.1% |   1 → 2 | `equals(Object)`                                    | `java.lang.Object`                                   |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `replace(CharSequence, String)`                     | `kotlin.text.Regex`                                  |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `resize()`                                          | `java.util.HashMap`                                  |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `nextNode()`                                        | `java.util.HashMap$HashIterator`                     |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `invoke(Object, Method, Object[])`                  | `sun.reflect.annotation.AnnotationInvocationHandler` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>(Label)`                                     | `jdk.internal.org.objectweb.asm.Frame`               |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `getAnnotation(Class)`                              | `java.lang.reflect.Executable`                       |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `copyOfRangeByte(byte[], int, int)`                 | `java.util.Arrays`                                   |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `addType(String)`                                   | `jdk.internal.org.objectweb.asm.SymbolTable`         |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `visit(int, int, String, String, String, String[])` | `jdk.internal.org.objectweb.asm.ClassWriter`         |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>()`                                          | `java.util.HashMap`                                  |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `getResourceBuffer(ImageLocation)`                  | `jdk.internal.jimage.BasicImageReader`               |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `requireNonNull(Object)`                            | `java.util.Objects`                                  |

##### JIT

|  Change | Delta |           % | Samples | Function                | Location    |
| ------: | ----: | ----------: | ------: | ----------------------- | ----------- |
| +500.0% |    +5 | 0.1% → 0.4% |   1 → 6 | `I2C/C2I adapters(0xb)` | `<unknown>` |
| +150.0% |    +3 | 0.2% → 0.4% |   2 → 5 | `I2C/C2I adapters`      | `<unknown>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `vtable stub`           | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |           % | Samples | Function                                                                                                                                                 | Location                   |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
|  -45.8% |   -11 | 1.8% → 1.0% | 24 → 13 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
|  -39.1% |    -9 | 1.8% → 1.0% | 23 → 14 | `PhaseChaitin::Split`                                                                                                                                    | `libjvm.dylib`             |
|  -70.0% |    -7 | 0.8% → 0.2% |  10 → 3 | `PhaseLive::compute`                                                                                                                                     | `libjvm.dylib`             |
|  -85.7% |    -6 | 0.5% → 0.1% |   7 → 1 | `PhaseChaitin::post_allocate_copy_removal`                                                                                                               | `libjvm.dylib`             |
|  -41.7% |    -5 | 0.9% → 0.5% |  12 → 7 | `ciObjectFactory::get_metadata`                                                                                                                          | `libjvm.dylib`             |
|  -62.5% |    -5 | 0.6% → 0.2% |   8 → 3 | `PhaseIdealLoop::split_if_with_blocks`                                                                                                                   | `libjvm.dylib`             |
| removed |    -5 | 0.4% → 0.0% |   5 → 0 | `RegionNode::is_CFG`                                                                                                                                     | `libjvm.dylib`             |
|  -10.2% |    -5 | 3.7% → 3.2% | 49 → 44 | `inflate_fast`                                                                                                                                           | `libzip.dylib`             |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                                                          | `libjvm.dylib`             |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                        | `libjvm.dylib`             |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `Compile::disconnect_useless_nodes`                                                                                                                      | `libjvm.dylib`             |
|  -57.1% |    -4 | 0.5% → 0.2% |   7 → 3 | `PhaseIdealLoop::Dominators`                                                                                                                             | `libjvm.dylib`             |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `IfTrueNode::Opcode`                                                                                                                                     | `libjvm.dylib`             |
|  -16.0% |    -4 | 1.9% → 1.5% | 25 → 21 | `IndexSetIterator::advance_and_next`                                                                                                                     | `libjvm.dylib`             |
|  -25.0% |    -4 | 1.2% → 0.9% | 16 → 12 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
|  -66.7% |    -4 | 0.5% → 0.1% |   6 → 2 | `UTF8::is_legal_utf8`                                                                                                                                    | `libjvm.dylib`             |
|  -14.3% |    -4 | 2.1% → 1.8% | 28 → 24 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`             |
|  -33.3% |    -4 | 0.9% → 0.6% |  12 → 8 | `sys_icache_invalidate`                                                                                                                                  | `libsystem_platform.dylib` |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `LIRGenerator::state_for`                                                                                                                                | `libjvm.dylib`             |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `LinearScan::compute_local_live_sets`                                                                                                                    | `libjvm.dylib`             |

##### Compiler

|  Change | Delta |           % | Samples | Function                                      | Location       |
| ------: | ----: | ----------: | ------: | --------------------------------------------- | -------------- |
|  -39.1% |    -9 | 1.8% → 1.0% | 23 → 14 | `PhaseChaitin::Split`                         | `libjvm.dylib` |
|  -70.0% |    -7 | 0.8% → 0.2% |  10 → 3 | `PhaseLive::compute`                          | `libjvm.dylib` |
|  -85.7% |    -6 | 0.5% → 0.1% |   7 → 1 | `PhaseChaitin::post_allocate_copy_removal`    | `libjvm.dylib` |
|  -41.7% |    -5 | 0.9% → 0.5% |  12 → 7 | `ciObjectFactory::get_metadata`               | `libjvm.dylib` |
|  -62.5% |    -5 | 0.6% → 0.2% |   8 → 3 | `PhaseIdealLoop::split_if_with_blocks`        | `libjvm.dylib` |
| removed |    -5 | 0.4% → 0.0% |   5 → 0 | `RegionNode::is_CFG`                          | `libjvm.dylib` |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `Compile::disconnect_useless_nodes`           | `libjvm.dylib` |
|  -57.1% |    -4 | 0.5% → 0.2% |   7 → 3 | `PhaseIdealLoop::Dominators`                  | `libjvm.dylib` |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `IfTrueNode::Opcode`                          | `libjvm.dylib` |
|  -16.0% |    -4 | 1.9% → 1.5% | 25 → 21 | `IndexSetIterator::advance_and_next`          | `libjvm.dylib` |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `LIRGenerator::state_for`                     | `libjvm.dylib` |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `LinearScan::compute_local_live_sets`         | `libjvm.dylib` |
|  -60.0% |    -3 | 0.4% → 0.1% |   5 → 2 | `Type::cmp`                                   | `libjvm.dylib` |
|  -27.3% |    -3 | 0.8% → 0.6% |  11 → 8 | `Unique_Node_List::remove`                    | `libjvm.dylib` |
|  -60.0% |    -3 | 0.4% → 0.1% |   5 → 2 | `MultiNode::is_CFG`                           | `libjvm.dylib` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `Node::set_req_X`                             | `libjvm.dylib` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `libjvm.dylib` |
|  -33.3% |    -3 | 0.7% → 0.4% |   9 → 6 | `PhaseIdealLoop::build_loop_early`            | `libjvm.dylib` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `MacroAssembler::pd_patch_instruction_size`   | `libjvm.dylib` |
|  -60.0% |    -3 | 0.4% → 0.1% |   5 → 2 | `PhaseAggressiveCoalesce::insert_copies`      | `libjvm.dylib` |

##### Native

|  Change | Delta |           % | Samples | Function                                                                                                                                                 | Location                   |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
|  -45.8% |   -11 | 1.8% → 1.0% | 24 → 13 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
|  -10.2% |    -5 | 3.7% → 3.2% | 49 → 44 | `inflate_fast`                                                                                                                                           | `libzip.dylib`             |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                                                          | `libjvm.dylib`             |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                        | `libjvm.dylib`             |
|  -25.0% |    -4 | 1.2% → 0.9% | 16 → 12 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
|  -66.7% |    -4 | 0.5% → 0.1% |   6 → 2 | `UTF8::is_legal_utf8`                                                                                                                                    | `libjvm.dylib`             |
|  -14.3% |    -4 | 2.1% → 1.8% | 28 → 24 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`             |
|  -33.3% |    -4 | 0.9% → 0.6% |  12 → 8 | `sys_icache_invalidate`                                                                                                                                  | `libsystem_platform.dylib` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `iRegINoSpOper::type`                                                                                                                                    | `libjvm.dylib`             |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `read`                                                                                                                                                   | `libsystem_kernel.dylib`   |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `posix_madvise`                                                                                                                                          | `libsystem_kernel.dylib`   |
|  -28.6% |    -2 | 0.5% → 0.4% |   7 → 5 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
|  -40.0% |    -2 | 0.4% → 0.2% |   5 → 3 | `G1CardSet::add_to_howl`                                                                                                                                 | `libjvm.dylib`             |
|  -40.0% |    -2 | 0.4% → 0.2% |   5 → 3 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object`                                                                                 | `libjvm.dylib`             |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `G1CMTask::drain_global_stack`                                                                                                                           | `libjvm.dylib`             |
|  -33.3% |    -2 | 0.5% → 0.3% |   6 → 4 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                           | `libjvm.dylib`             |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `pread`                                                                                                                                                  | `libsystem_kernel.dylib`   |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `_large_arrays_hashcode_boolean`                                                                                                                         | `<unknown>`                |
|  -40.0% |    -2 | 0.4% → 0.2% |   5 → 3 | `ClassFileParser::skip_over_field_signature`                                                                                                             | `libjvm.dylib`             |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `ClassVerifier::verify_method`                                                                                                                           | `libjvm.dylib`             |

##### Ours

|  Change | Delta |           % | Samples | Function                                                                                                                                                                                                                                    | Location                                                                         |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `createSubstitutionForScope(List, ConeClassLikeType, FirSession)`                                                                                                                                                                           | `org.jetbrains.kotlin.fir.resolve.SupertypeUtilsKt`                              |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                                                                                                                                                     | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `initChildrenArrayFromList()`                                                                                                                                                                                                               | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarVirtualFile`                 |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `accept(ClassVisitor, int)`                                                                                                                                                                                                                 | `org.jetbrains.org.objectweb.asm.ClassReader`                                    |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `newOutput()`                                                                                                                                                                                                                               | `org.jetbrains.kotlin.protobuf.ByteString`                                       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `convertFunctionDeclaration(LighterASTNode)`                                                                                                                                                                                                | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getTokenType()`                                                                                                                                                                                                                            | `com.intellij.lang.impl.PsiBuilderImpl`                                          |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `setResolveState(FirResolveState)`                                                                                                                                                                                                          | `org.jetbrains.kotlin.fir.FirElementWithResolveState`                            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `readSourceFileWithMapping(InputStreamReader)`                                                                                                                                                                                              | `org.jetbrains.kotlin.KtSourceFileLinesMappingKt`                                |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getModuleData()`                                                                                                                                                                                                                           | `org.jetbrains.kotlin.fir.declarations.builder.FirValueParameterBuilder`         |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getTokenType()`                                                                                                                                                                                                                            | `com.intellij.lang.impl.PsiBuilderImpl$StartMarker`                              |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getExtension(CharSequence, String)`                                                                                                                                                                                                        | `com.intellij.openapi.util.io.FileUtilRt`                                        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `makeImmutable()`                                                                                                                                                                                                                           | `org.jetbrains.kotlin.protobuf.FieldSet`                                         |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `readMethod(ClassVisitor, Context, int)`                                                                                                                                                                                                    | `org.jetbrains.org.objectweb.asm.ClassReader`                                    |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `readUtfNonAscii(int, int, int, char[])`                                                                                                                                                                                                    | `org.jetbrains.org.objectweb.asm.ClassReader`                                    |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `readUtf(int, char[])`                                                                                                                                                                                                                      | `org.jetbrains.org.objectweb.asm.ClassReader`                                    |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>(KtSourceElement, FirResolvePhase, FirModuleData, FirDeclarationOrigin, FirDeclarationAttributes, FirTypeRef, Name, List, FirValueParameterSymbol, FirExpression, FirBasedSymbol, boolean, boolean, boolean, FirValueParameterKind)` | `org.jetbrains.kotlin.fir.declarations.impl.FirValueParameterImpl`               |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `addValueParametersTo$default(FirMemberDeserializer, List, FirBasedSymbol, FirRegularClassBuilder, MessageLite, AnnotationDeserializer$CallableKind, ProtoBuf$Class, FirValueParameterKind, boolean, List, int, Object)`                    | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`                 |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `hashCode()`                                                                                                                                                                                                                                | `org.jetbrains.kotlin.name.Name`                                                 |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `filterOutAmbiguousTypealiases(Set)`                                                                                                                                                                                                        | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeCandidateCollector`      |

##### Standard library

|  Change | Delta |           % | Samples | Function                                           | Location                                                  |
| ------: | ----: | ----------: | ------: | -------------------------------------------------- | --------------------------------------------------------- |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `<init>(int)`                                      | `java.lang.AbstractStringBuilder`                         |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `getApproximateCommonClassLoader(MethodType)`      | `java.lang.invoke.MethodHandle`                           |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `allocateInstance(Object)`                         | `java.lang.invoke.DirectMethodHandle`                     |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `putVal(int, Object, Object, boolean, boolean)`    | `java.util.HashMap`                                       |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `areEqual(Object, Object)`                         | `kotlin.jvm.internal.Intrinsics`                          |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getNode(Object)`                                  | `java.util.HashMap`                                       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `lock()`                                           | `java.util.concurrent.locks.ReentrantLock`                |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `indexOf(byte[], int, int, int)`                   | `java.lang.StringLatin1`                                  |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `checkForComodification()`                         | `java.util.ArrayList$Itr`                                 |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getProxyConstructor(Class, ClassLoader, Class[])` | `java.lang.reflect.Proxy`                                 |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `returnType()`                                     | `java.lang.invoke.MethodType`                             |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getSerializedSize()`                              | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `newString(byte[], int, int)`                      | `java.lang.StringLatin1`                                  |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `substring(int, int)`                              | `java.lang.String`                                        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `parseTypeArguments()`                             | `sun.reflect.generics.parser.SignatureParser`             |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `generateConstructor()`                            | `java.lang.invoke.InnerClassLambdaMetafactory`            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `spinInnerClass()`                                 | `java.lang.invoke.InnerClassLambdaMetafactory`            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `putFieldInfo(ByteVector)`                         | `jdk.internal.org.objectweb.asm.FieldWriter`              |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `toLowerCase(int)`                                 | `java.lang.CharacterDataLatin1`                           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `match(int, String, int)`                          | `jdk.internal.jimage.ImageStringsReader`                  |

##### JIT

|  Change | Delta |           % | Samples | Function      | Location    |
| ------: | ----: | ----------: | ------: | ------------- | ----------- |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `zero_blocks` | `<unknown>` |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `getNonDispatchParameters(IrFunction)` (`org.jetbrains.kotlin.ir.util.IrUtilsKt`)

| Change | Delta |             % | Samples | Location                                     |
| -----: | ----: | ------------: | ------: | -------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `org.jetbrains.kotlin.ir.util.IrUtilsKt:219` |

##### `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function`)

| Change | Delta |             % | Samples | Location                                                |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.metadata.ProtoBuf$Function:16542` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`)

| Change | Delta |             % | Samples | Location                                                  |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.metadata.ProtoBuf$Function$1:16780` |

##### `convertCallExpression(LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`)

| Change | Delta |             % | Samples | Location                                                                            |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder:840` |

##### `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`)

| Change | Delta |             % | Samples | Location                                                                      |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider:106` |

##### `computeIndexedQualifiers(KotlinTypeMarker, Iterable, TypeEnhancementInfo, boolean)` (`org.jetbrains.kotlin.load.java.typeEnhancement.AbstractSignatureParts`)

| Change | Delta |             % | Samples | Location                                                                    |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.load.java.typeEnhancement.AbstractSignatureParts:346` |

##### `withParameters(FirCallableDeclaration, SessionAndScopeSessionHolder, Function0)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveContext`)

| Change | Delta |             % | Samples | Location                                                                            |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveContext:859` |

##### `withAnonymousFunction(FirAnonymousFunction, SessionAndScopeSessionHolder, Function0)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveContext`)

| Change | Delta |             % | Samples | Location                                                                            |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveContext:929` |

##### `getFirstClassifierOrNull(FirScope, CallInfo, ConstructorFilter, FirSession, BodyResolveComponents)` (`org.jetbrains.kotlin.fir.resolve.calls.ConstructorProcessingKt`)

| Change | Delta |             % | Samples | Location                                                             |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.calls.ConstructorProcessingKt:106` |

##### `invokeSuspend(Object)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$2`)

| Change | Delta |             % | Samples | Location                                                                                    |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$2:80` |

##### `withFile(FirFile, Function0)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`)

| Change | Delta |             % | Samples | Location                                                                                            |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer:2096` |

##### `transformWhenBranch(FirWhenBranch, Object)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change | Delta |             % | Samples | Location                                                                                                    |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher:27` |

##### `parseTypeString(CharacterIterator, ClassifierResolutionContext)` (`org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser`)

| Change | Delta |             % | Samples | Location                                                                                  |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser:231` |

##### `transformFunctionCall(FirFunctionCall, ExpectedArgumentType)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer`)

| Change | Delta |             % | Samples | Location                                                                                      |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer:477` |

##### `checkImpl(CheckerSink, ResolutionContext, ConeResolutionAtom, Candidate, ImplicitKind)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.CheckShadowedImplicits`)

| Change | Delta |             % | Samples | Location                                                                   |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckShadowedImplicits:494` |

##### `unwrapFakeOverridesIfNecessary(FirBasedSymbol)` (`org.jetbrains.kotlin.fir.resolve.dfa.VariableStorage`)

| Change | Delta |             % | Samples | Location                                                   |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.dfa.VariableStorage:143` |

##### `contains(ConeKotlinType, Function1, SmartSet)` (`org.jetbrains.kotlin.fir.types.ConeTypeUtilsKt`)

| Change | Delta |             % | Samples | Location                                             |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.types.ConeTypeUtilsKt:110` |

##### `getResolvedAnnotationClassIds()` (`org.jetbrains.kotlin.fir.symbols.FirBasedSymbol`)

| Change | Delta |             % | Samples | Location                                             |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.symbols.FirBasedSymbol:67` |

##### `isHiddenForThisCallSite(CheckerSink, FirCallableSymbol, CallInfo, Candidate)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.CheckHiddenDeclaration`)

| Change | Delta |             % | Samples | Location                                                                    |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckHiddenDeclaration:1045` |

##### `next()` (`java.util.ArrayList$Itr`)

| Change | Delta |             % | Samples | Location                       |
| -----: | ----: | ------------: | ------: | ------------------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `java.util.ArrayList$Itr:1049` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.LinkedHashMap`)

| Change | Delta |             % | Samples | Location                      |
| -----: | ----: | ------------: | ------: | ----------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `java.util.LinkedHashMap:281` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

| Change | Delta |             % | Samples | Location                     |
| -----: | ----: | ------------: | ------: | ---------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.zip.Inflater:366` |

##### `indexOf(int, int)` (`java.lang.String`)

| Change | Delta |             % | Samples | Location                |
| -----: | ----: | ------------: | ------: | ----------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.lang.String:2450` |

##### `get(Object)` (`java.util.concurrent.ConcurrentHashMap`)

| Change | Delta |             % | Samples | Location                                     |
| -----: | ----: | ------------: | ------: | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.concurrent.ConcurrentHashMap:938` |

##### `newByteChannel(Path, Set, FileAttribute[])` (`java.nio.file.Files`)

| Change | Delta |             % | Samples | Location                  |
| -----: | ----: | ------------: | ------: | ------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.nio.file.Files:380` |

##### `equals(Object)` (`java.lang.Object`)

|  Change | Delta |      % | Samples | Location               |
| ------: | ----: | -----: | ------: | ---------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `java.lang.Object:164` |

##### `replace(CharSequence, String)` (`kotlin.text.Regex`)

| Change | Delta |             % | Samples | Location                |
| -----: | ----: | ------------: | ------: | ----------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `kotlin.text.Regex:180` |

##### `resize()` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Location                |
| -----: | ----: | ------------: | ------: | ----------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.HashMap:713` |

##### `nextNode()` (`java.util.HashMap$HashIterator`)

| Change | Delta |             % | Samples | Location                              |
| -----: | ----: | ------------: | ------: | ------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.HashMap$HashIterator:1609` |

##### `invoke(Object, Method, Object[])` (`sun.reflect.annotation.AnnotationInvocationHandler`)

| Change | Delta |             % | Samples | Location                                                |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `sun.reflect.annotation.AnnotationInvocationHandler:91` |

##### `<init>(Label)` (`jdk.internal.org.objectweb.asm.Frame`)

| Change | Delta |             % | Samples | Location                                   |
| -----: | ----: | ------------: | ------: | ------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `jdk.internal.org.objectweb.asm.Frame:275` |

##### `getAnnotation(Class)` (`java.lang.reflect.Executable`)

| Change | Delta |             % | Samples | Location                           |
| -----: | ----: | ------------: | ------: | ---------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.lang.reflect.Executable:612` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

| Change | Delta |             % | Samples | Location                |
| -----: | ----: | ------------: | ------: | ----------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.Arrays:3863` |

##### `addType(String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change | Delta |             % | Samples | Location                                          |
| -----: | ----: | ------------: | ------: | ------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `jdk.internal.org.objectweb.asm.SymbolTable:1180` |

##### `visit(int, int, String, String, String, String[])` (`jdk.internal.org.objectweb.asm.ClassWriter`)

| Change | Delta |             % | Samples | Location                                         |
| -----: | ----: | ------------: | ------: | ------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `jdk.internal.org.objectweb.asm.ClassWriter:334` |

##### `<init>()` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Location                |
| -----: | ----: | ------------: | ------: | ----------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.HashMap:478` |

##### `getResourceBuffer(ImageLocation)` (`jdk.internal.jimage.BasicImageReader`)

| Change | Delta |             % | Samples | Location                                   |
| -----: | ----: | ------------: | ------: | ------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `jdk.internal.jimage.BasicImageReader:422` |

##### `requireNonNull(Object)` (`java.util.Objects`)

| Change | Delta |             % | Samples | Location                |
| -----: | ----: | ------------: | ------: | ----------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.Objects:232` |

##### `createSubstitutionForScope(List, ConeClassLikeType, FirSession)` (`org.jetbrains.kotlin.fir.resolve.SupertypeUtilsKt`)

|  Change | Delta |            % | Samples | Location                                                |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.SupertypeUtilsKt:191` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.SupertypeUtilsKt:203` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|  Change | Delta |             % | Samples | Location                                                   |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils:143` |

##### `initChildrenArrayFromList()` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarVirtualFile`)

|  Change | Delta |             % | Samples | Location                                                             |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarVirtualFile:117` |

##### `accept(ClassVisitor, int)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|  Change | Delta |             % | Samples | Location                                          |
| ------: | ----: | ------------: | ------: | ------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.org.objectweb.asm.ClassReader:434` |

##### `newOutput()` (`org.jetbrains.kotlin.protobuf.ByteString`)

|  Change | Delta |             % | Samples | Location                                       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.protobuf.ByteString:751` |

##### `convertFunctionDeclaration(LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder`)

|  Change | Delta |             % | Samples | Location                                                                              |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder:4494` |

##### `getTokenType()` (`com.intellij.lang.impl.PsiBuilderImpl`)

|  Change | Delta |             % | Samples | Location                                    |
| ------: | ----: | ------------: | ------: | ------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `com.intellij.lang.impl.PsiBuilderImpl:720` |

##### `setResolveState(FirResolveState)` (`org.jetbrains.kotlin.fir.FirElementWithResolveState`)

|  Change | Delta |             % | Samples | Location                                                 |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.FirElementWithResolveState:24` |

##### `readSourceFileWithMapping(InputStreamReader)` (`org.jetbrains.kotlin.KtSourceFileLinesMappingKt`)

|  Change | Delta |             % | Samples | Location                                              |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.KtSourceFileLinesMappingKt:103` |

##### `getModuleData()` (`org.jetbrains.kotlin.fir.declarations.builder.FirValueParameterBuilder`)

|  Change | Delta |             % | Samples | Location                                                                    |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.declarations.builder.FirValueParameterBuilder:32` |

##### `getTokenType()` (`com.intellij.lang.impl.PsiBuilderImpl$StartMarker`)

|  Change | Delta |             % | Samples | Location                                                |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `com.intellij.lang.impl.PsiBuilderImpl$StartMarker:425` |

##### `getExtension(CharSequence, String)` (`com.intellij.openapi.util.io.FileUtilRt`)

|  Change | Delta |             % | Samples | Location                                      |
| ------: | ----: | ------------: | ------: | --------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `com.intellij.openapi.util.io.FileUtilRt:297` |

##### `makeImmutable()` (`org.jetbrains.kotlin.protobuf.FieldSet`)

|  Change | Delta |             % | Samples | Location                                     |
| ------: | ----: | ------------: | ------: | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.protobuf.FieldSet:107` |

##### `readMethod(ClassVisitor, Context, int)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|  Change | Delta |             % | Samples | Location                                           |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.org.objectweb.asm.ClassReader:1307` |

##### `readUtfNonAscii(int, int, int, char[])` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|  Change | Delta |             % | Samples | Location                                           |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.org.objectweb.asm.ClassReader:3844` |

##### `readUtf(int, char[])` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|  Change | Delta |             % | Samples | Location                                           |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.org.objectweb.asm.ClassReader:3818` |

##### `<init>(KtSourceElement, FirResolvePhase, FirModuleData, FirDeclarationOrigin, FirDeclarationAttributes, FirTypeRef, Name, List, FirValueParameterSymbol, FirExpression, FirBasedSymbol, boolean, boolean, boolean, FirValueParameterKind)` (`org.jetbrains.kotlin.fir.declarations.impl.FirValueParameterImpl`)

|  Change | Delta |             % | Samples | Location                                                              |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.declarations.impl.FirValueParameterImpl:32` |

##### `addValueParametersTo$default(FirMemberDeserializer, List, FirBasedSymbol, FirRegularClassBuilder, MessageLite, AnnotationDeserializer$CallableKind, ProtoBuf$Class, FirValueParameterKind, boolean, List, int, Object)` (`org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`)

|  Change | Delta |             % | Samples | Location                                                             |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer:861` |

##### `hashCode()` (`org.jetbrains.kotlin.name.Name`)

|  Change | Delta |             % | Samples | Location                             |
| ------: | ----: | ------------: | ------: | ------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.name.Name:126` |

##### `filterOutAmbiguousTypealiases(Set)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeCandidateCollector`)

|  Change | Delta |             % | Samples | Location                                                                        |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeCandidateCollector:103` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

|  Change | Delta |            % | Samples | Location                              |
| ------: | ----: | -----------: | ------: | ------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.lang.AbstractStringBuilder:99`  |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.lang.AbstractStringBuilder:101` |

##### `getApproximateCommonClassLoader(MethodType)` (`java.lang.invoke.MethodHandle`)

|  Change | Delta |            % | Samples | Location                            |
| ------: | ----: | -----------: | ------: | ----------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.lang.invoke.MethodHandle:923` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.lang.invoke.MethodHandle:924` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

|  Change | Delta |             % | Samples | Location                                  |
| ------: | ----: | ------------: | ------: | ----------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.lang.invoke.DirectMethodHandle:501` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|  Change | Delta |            % | Samples | Location                |
| ------: | ----: | -----------: | ------: | ----------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.HashMap:637` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.HashMap:648` |

##### `areEqual(Object, Object)` (`kotlin.jvm.internal.Intrinsics`)

| Change | Delta |      % | Samples | Location                             |
| -----: | ----: | -----: | ------: | ------------------------------------ |
| -66.7% |    -2 | 100.0% |   3 → 1 | `kotlin.jvm.internal.Intrinsics:169` |

##### `getNode(Object)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.HashMap:578` |

##### `lock()` (`java.util.concurrent.locks.ReentrantLock`)

|  Change | Delta |             % | Samples | Location                                       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.locks.ReentrantLock:322` |

##### `indexOf(byte[], int, int, int)` (`java.lang.StringLatin1`)

|  Change | Delta |             % | Samples | Location                     |
| ------: | ----: | ------------: | ------: | ---------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.StringLatin1:200` |

##### `checkForComodification()` (`java.util.ArrayList$Itr`)

|  Change | Delta |             % | Samples | Location                       |
| ------: | ----: | ------------: | ------: | ------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.ArrayList$Itr:1094` |

##### `getProxyConstructor(Class, ClassLoader, Class[])` (`java.lang.reflect.Proxy`)

|  Change | Delta |             % | Samples | Location                      |
| ------: | ----: | ------------: | ------: | ----------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.reflect.Proxy:427` |

##### `returnType()` (`java.lang.invoke.MethodType`)

|  Change | Delta |             % | Samples | Location                          |
| ------: | ----: | ------------: | ------: | --------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.invoke.MethodType:846` |

##### `getSerializedSize()` (`kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type`)

|  Change | Delta |             % | Samples | Location                                                       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type:6271` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

|  Change | Delta |             % | Samples | Location                     |
| ------: | ----: | ------------: | ------: | ---------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.StringLatin1:750` |

##### `substring(int, int)` (`java.lang.String`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.String:2822` |

##### `parseTypeArguments()` (`sun.reflect.generics.parser.SignatureParser`)

|  Change | Delta |             % | Samples | Location                                          |
| ------: | ----: | ------------: | ------: | ------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `sun.reflect.generics.parser.SignatureParser:379` |

##### `generateConstructor()` (`java.lang.invoke.InnerClassLambdaMetafactory`)

|  Change | Delta |             % | Samples | Location                                           |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.invoke.InnerClassLambdaMetafactory:413` |

##### `spinInnerClass()` (`java.lang.invoke.InnerClassLambdaMetafactory`)

|  Change | Delta |             % | Samples | Location                                           |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.invoke.InnerClassLambdaMetafactory:286` |

##### `putFieldInfo(ByteVector)` (`jdk.internal.org.objectweb.asm.FieldWriter`)

|  Change | Delta |             % | Samples | Location                                         |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `jdk.internal.org.objectweb.asm.FieldWriter:255` |

##### `toLowerCase(int)` (`java.lang.CharacterDataLatin1`)

|  Change | Delta |             % | Samples | Location                            |
| ------: | ----: | ------------: | ------: | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.CharacterDataLatin1:163` |

##### `match(int, String, int)` (`jdk.internal.jimage.ImageStringsReader`)

|  Change | Delta |             % | Samples | Location                                    |
| ------: | ----: | ------------: | ------: | ------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `jdk.internal.jimage.ImageStringsReader:57` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `tlv_get_addr` (`libdyld.dylib`)

|  Change | Delta |           % | Samples | Caller                                         | Location       |
| ------: | ----: | ----------: | ------: | ---------------------------------------------- | -------------- |
|     new |    +3 | 0.0% → 7.5% |   0 → 3 | `LinearScan::build_intervals`                  | `libjvm.dylib` |
|     new |    +2 | 0.0% → 5.0% |   0 → 2 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |
|     new |    +2 | 0.0% → 5.0% |   0 → 2 | `GraphBuilder::invoke`                         | `libjvm.dylib` |
| +100.0% |    +1 |        5.0% |   1 → 2 | `TypeInterfaces::intersection_with`            | `libjvm.dylib` |
| removed |    -1 | 5.0% → 0.0% |   1 → 0 | `PhaseChaitin::build_ifg_virtual`              | `libjvm.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|  Change | Delta |      % | Samples | Caller                  | Location       |
| ------: | ----: | -----: | ------: | ----------------------- | -------------- |
| +283.3% |   +17 | 100.0% |  6 → 23 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                            | Location       |
| ------: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +366.7% |   +11 | 100.0% |  3 → 14 | `PhaseIdealLoop::build_loop_late` | `libjvm.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller                              | Location                  |
| -----: | ----: | -----: | ------: | ----------------------------------- | ------------------------- |
| +56.3% |    +9 | 100.0% | 16 → 25 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|  Change | Delta |            % | Samples | Caller                                     | Location           |
| ------: | ----: | -----------: | ------: | ------------------------------------------ | ------------------ |
|     new |    +5 | 0.0% → 26.3% |   0 → 5 | `jni_GetPrimitiveArrayCritical`            | `libjvm.dylib`     |
|     new |    +2 | 0.0% → 10.5% |   0 → 2 | `InterpreterRuntime::anewarray`            | `libjvm.dylib`     |
| removed |    -1 | 10.0% → 0.0% |   1 → 0 | `arraycopy(Object, int, Object, int, int)` | `java.lang.System` |
|  -50.0% |    -1 | 20.0% → 5.3% |   2 → 1 | `JVM_IHashCode`                            | `libjvm.dylib`     |
| removed |    -1 | 10.0% → 0.0% |   1 → 0 | `jni_GetStringLength`                      | `libjvm.dylib`     |

##### `PhaseIterGVN::add_users_to_worklist` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                        | Location       |
| -----: | ----: | -----------: | ------: | ----------------------------- | -------------- |
|    new |    +3 | 0.0% → 37.5% |   0 → 3 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |
|    new |    +2 | 0.0% → 25.0% |   0 → 2 | `PhaseIterGVN::PhaseIterGVN`  | `libjvm.dylib` |
|    new |    +1 | 0.0% → 12.5% |   0 → 1 | `IfNode::dominated_by`        | `libjvm.dylib` |
|    new |    +1 | 0.0% → 12.5% |   0 → 1 | `Node::remove_dead_region`    | `libjvm.dylib` |
|    new |    +1 | 0.0% → 12.5% |   0 → 1 | `Compile::Optimize`           | `libjvm.dylib` |

##### `IntervalWalker::walk_to` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
| +500.0% |    +5 | 50.0% → 66.7% |   1 → 6 | `IntervalWalker::walk_to`        | `libjvm.dylib` |
|     new |    +2 |  0.0% → 22.2% |   0 → 2 | `LinearScan::allocate_registers` | `libjvm.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                            | Location       |
| ------: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +120.0% |    +6 | 100.0% |  5 → 11 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                                                            | Location       |
| ------: | ----: | -------------: | ------: | --------------------------------------------------------------------------------- | -------------- |
| +100.0% |    +4 | 100.0% → 88.9% |   4 → 8 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object`          | `libjvm.dylib` |
|     new |    +1 |   0.0% → 11.1% |   0 → 1 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb` | `libjvm.dylib` |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                                                                                                                                         | Location                                                           |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `copy$default(FirDeclarationStatus, Visibility, Modality, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, ReturnValueStatus, int, Object)` | `org.jetbrains.kotlin.fir.UtilsKt`                                 |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `stringHashCode(CharSequence)`                                                                                                                                                                                                                                                 | `com.intellij.openapi.util.text.StringUtil`                        |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `equals(Object)`                                                                                                                                                                                                                                                               | `org.jetbrains.kotlin.load.java.structure.impl.JavaElementImpl`    |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `loadFunction$default(FirMemberDeserializer, ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin, int, Object)`                                                                                                                                            | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`   |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `prepareImplicitArgument(ConeResolutionAtom, ConeKotlinType, FirSession)`                                                                                                                                                                                                      | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStagesKt` |

##### `LinearScan::build_intervals` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                       | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------- | -------------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_virtual` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                            | Location       |
| ------: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `resource_allocate_bytes` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                                                       | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------- | -------------- |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `ClassFileParser::parse_method`                                              | `libjvm.dylib` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `BlockListBuilder::BlockListBuilder`                                         | `libjvm.dylib` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `GrowableArrayWithAllocator<CodeStub*, GrowableArray<CodeStub*>>::expand_to` | `libjvm.dylib` |
|     new |    +1 | 0.0% → 12.5% |   0 → 1 | `CompiledMethod::cleanup_inline_caches_impl`                                 | `libjvm.dylib` |
|     new |    +1 | 0.0% → 12.5% |   0 → 1 | `PhaseOutput::FillLocArray`                                                  | `libjvm.dylib` |

##### `PhaseCFG::partial_latency_of_defs` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                            | Location       |
| -----: | ----: | -----------: | ------: | --------------------------------- | -------------- |
|    new |    +3 | 0.0% → 75.0% |   0 → 3 | `PhaseCFG::global_code_motion`    | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_tree` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                               | Location       |
| ------: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhiNode::Value` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                        | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |

##### `PhaseCFG::schedule_late` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                         | Location       |
| ------: | ----: | -----: | ------: | ------------------------------ | -------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `Scheduling::anti_do_def` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                        | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `Scheduling::ComputeRegisterAntidependencies` | `libjvm.dylib` |

##### `DebugInformationRecorder::serialize_scope_values` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                          | Location       |
| ------: | ----: | -------------: | ------: | ----------------------------------------------- | -------------- |
| +200.0% |    +2 | 100.0% → 75.0% |   1 → 3 | `DebugInformationRecorder::create_scope_values` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 25.0% |   0 → 1 | `IRScopeDebugInfo::record_debug_info`           | `libjvm.dylib` |

##### `I2C/C2I adapters` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                       | Location                                                                                   |
| ------: | ----: | -----------: | ------: | -------------------------------------------- | ------------------------------------------------------------------------------------------ |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `getType(int)`                               | `java.lang.Character`                                                                      |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `computeIfAbsent(Object, Function)`          | `java.util.concurrent.ConcurrentHashMap`                                                   |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `get(int)`                                   | `org.jetbrains.kotlin.metadata.deserialization.TypeTable`                                  |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `<init>(CheckerContext, DiagnosticReporter)` | `org.jetbrains.kotlin.fir.analysis.checkers.extra.FirUnusedExpressionChecker$UsageVisitor` |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `visitThrow(IrThrow, Object)`                | `org.jetbrains.kotlin.ir.visitors.IrTransformer`                                           |

##### `Compile::identify_useful_nodes` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                   | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | -------------- |
| +150.0% |    +3 | 50.0% → 71.4% |   2 → 5 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

##### `BlockListBuilder::set_leaders` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                               | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `BlockListBuilder::BlockListBuilder` | `libjvm.dylib` |

##### `ValueStack::values_do` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
| +200.0% |    +2 | 50.0% → 60.0% |   1 → 3 | `SubstitutionResolver::block_do` | `libjvm.dylib` |
|     new |    +2 |  0.0% → 40.0% |   0 → 2 | `UseCountComputer::block_do`     | `libjvm.dylib` |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `Invoke::state_values_do`        | `libjvm.dylib` |

##### `LIR_OpVisitState::visit` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------- | -------------- |
|     new |    +2 |  0.0% → 33.3% |   0 → 2 | `LinearScan::do_linear_scan`          | `libjvm.dylib` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `LinearScan::compute_local_live_sets` | `libjvm.dylib` |
|  +50.0% |    +1 | 66.7% → 50.0% |   2 → 3 | `LinearScan::assign_reg_num`          | `libjvm.dylib` |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `LinearScan::build_intervals`         | `libjvm.dylib` |

##### `ciMethodData::bci_to_data` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                                  | Location       |
| -----: | ----: | -----------: | ------: | --------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `LIR_Assembler::emit_profile_call`      | `libjvm.dylib` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `GraphBuilder::args_list_for_profiling` | `libjvm.dylib` |

##### `PhaseCCP::transform` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                   | Location       |
| -----: | ----: | ------------: | ------: | ------------------------ | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseCCP::do_transform` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                               | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| +40.0% |    +2 | 100.0% |   5 → 7 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Scheduling::DoScheduling` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                | Location       |
| -----: | ----: | ------------: | ------: | --------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseOutput::Output` | `libjvm.dylib` |

##### `BytecodeStream::next` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                           | Location       |
| -----: | ----: | -----------: | ------: | -------------------------------- | -------------- |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `GenerateOopMap::interp_bb`      | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `RetTable::compute_ret_table`    | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `Method::compute_has_loops_flag` | `libjvm.dylib` |

##### `fwd_copy_drain` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                                          | Location       |
| -----: | ----: | -----------: | ------: | ----------------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `CodeBuffer::copy_code_to`                      | `libjvm.dylib` |

##### `__psynch_cvbroad` (`libsystem_kernel.dylib`)

| Change | Delta |             % | Samples | Caller                               | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `CompileBroker::create_compile_task` | `libjvm.dylib` |

##### `VerificationType::is_assignable_from` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                            | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `StackMapFrame::is_assignable_to` | `libjvm.dylib` |

##### `PackedTableLookup::search` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                 | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `FieldInfoReader::search_table_lookup` | `libjvm.dylib` |

##### `G1CodeRootSet::add` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller             | Location       |
| -----: | ----: | ------------: | ------: | ------------------ | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `nmethod::oops_do` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                 | Location       |
| -----: | ----: | ------------: | ------: | ---------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `Parse::do_all_blocks` | `libjvm.dylib` |

##### `vmSymbols::find_sid` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                        | Location       |
| -----: | ----: | -----: | ------: | ----------------------------- | -------------- |
| +66.7% |    +2 | 100.0% |   3 → 5 | `ciObjectFactory::get_symbol` | `libjvm.dylib` |

##### `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                                                             | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region` | `libjvm.dylib` |

##### `updateBytesCRC32` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                               | Location              |
| ------: | ----: | -----: | ------: | ------------------------------------ | --------------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `updateBytes(int, byte[], int, int)` | `java.util.zip.CRC32` |

##### `ClassFileParser::parse_constant_pool_entries` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                 | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `ClassFileParser::parse_constant_pool` | `libjvm.dylib` |

##### `java_lang_String::equals` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                   | Location       |
| ------: | ----: | -----: | ------: | ------------------------ | -------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `StringTable::do_lookup` | `libjvm.dylib` |

##### `trampoline_stub_Relocation::get_trampoline_for` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                                | Location       |
| ------: | ----: | -----: | ------: | ------------------------------------- | -------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `NativeCall::set_destination_mt_safe` | `libjvm.dylib` |

##### `CodeCache::make_marked_nmethods_deoptimized` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                                  | Location       |
| ------: | ----: | -----: | ------: | --------------------------------------- | -------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `Deoptimization::deoptimize_all_marked` | `libjvm.dylib` |

##### `getNonDispatchParameters(IrFunction)` (`org.jetbrains.kotlin.ir.util.IrUtilsKt`)

| Change | Delta |             % | Samples | Caller                                                | Location                                                         |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------- | ---------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `mapSignature(IrFunction, boolean, boolean, boolean)` | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |

##### `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function`)

| Change | Delta |             % | Samples | Caller                                                        | Location                                          |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------- | ------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Function` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`)

| Change | Delta |             % | Samples | Caller                                                      | Location                                            |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------- | --------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Function$1` |

##### `convertCallExpression(LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`)

| Change | Delta |             % | Samples | Caller                                      | Location                                                                        |
| -----: | ----: | ------------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getAsFirStatement(LighterASTNode, String)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder` |

##### `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`)

| Change | Delta |             % | Samples | Caller                                  | Location                                                            |
| -----: | ----: | ------------: | ------: | --------------------------------------- | ------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `mayHaveTopLevelCallable(FqName, Name)` | `org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider` |

##### `computeIndexedQualifiers(KotlinTypeMarker, Iterable, TypeEnhancementInfo, boolean)` (`org.jetbrains.kotlin.load.java.typeEnhancement.AbstractSignatureParts`)

| Change | Delta |             % | Samples | Caller                                                                                                                            | Location                                                                |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `computeIndexedQualifiers$default(AbstractSignatureParts, KotlinTypeMarker, Iterable, TypeEnhancementInfo, boolean, int, Object)` | `org.jetbrains.kotlin.load.java.typeEnhancement.AbstractSignatureParts` |

##### `withParameters(FirCallableDeclaration, SessionAndScopeSessionHolder, Function0)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveContext`)

| Change | Delta |             % | Samples | Caller                                                                  | Location                                                                        |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `forFunctionBody(FirFunction, SessionAndScopeSessionHolder, Function0)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveContext` |

##### `withAnonymousFunction(FirAnonymousFunction, SessionAndScopeSessionHolder, Function0)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveContext`)

| Change | Delta |             % | Samples | Caller                                                             | Location                                                                                       |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `transformAnonymousFunctionBody(FirAnonymousFunction, FirTypeRef)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |

##### `getFirstClassifierOrNull(FirScope, CallInfo, ConstructorFilter, FirSession, BodyResolveComponents)` (`org.jetbrains.kotlin.fir.resolve.calls.ConstructorProcessingKt`)

| Change | Delta |             % | Samples | Caller                                                                                               | Location                                                         |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `processConstructorsByName(FirScope, CallInfo, BodyResolveComponents, ConstructorFilter, Function1)` | `org.jetbrains.kotlin.fir.resolve.calls.ConstructorProcessingKt` |

##### `invokeSuspend(Object)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$2`)

| Change | Delta |             % | Samples | Caller               | Location                                              |
| -----: | ----: | ------------: | ------: | -------------------- | ----------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `resumeWith(Object)` | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |

##### `contains(KotlinTypeMarker, Function1)` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector$TypeCheckerStateForConstraintInjector`)

| Change | Delta |             % | Samples | Caller                                                                                  | Location                                                                                                           |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `addNewIncorporatedConstraint(TypeVariableMarker, KotlinTypeMarker, ConstraintContext)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector$TypeCheckerStateForConstraintInjector` |

##### `withFile(FirFile, Function0)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`)

| Change | Delta |             % | Samples | Caller                                     | Location                                                                                       |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | ---------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `doTransformFile(FirFile, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |

##### `transformWhenBranch(FirWhenBranch, Object)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change | Delta |             % | Samples | Caller                              | Location                                             |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.FirWhenBranch` |

##### `parseTypeString(CharacterIterator, ClassifierResolutionContext)` (`org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser`)

| Change | Delta |             % | Samples | Caller                                          | Location                                                                              |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | ------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `mapAsmType(Type, ClassifierResolutionContext)` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser` |

##### `transformFunctionCall(FirFunctionCall, ExpectedArgumentType)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer`)

| Change | Delta |             % | Samples | Caller                                           | Location                                                                                  |
| -----: | ----: | ------------: | ------: | ------------------------------------------------ | ----------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `transformFunctionCall(FirFunctionCall, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer` |

##### `checkImpl(CheckerSink, ResolutionContext, ConeResolutionAtom, Candidate, ImplicitKind)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.CheckShadowedImplicits`)

| Change | Delta |             % | Samples | Caller                                                           | Location                                                               |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------- | ---------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `check(CheckerSink, ResolutionContext, Candidate, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckShadowedImplicits` |

##### `unwrapFakeOverridesIfNecessary(FirBasedSymbol)` (`org.jetbrains.kotlin.fir.resolve.dfa.VariableStorage`)

| Change | Delta |             % | Samples | Caller                                              | Location                                               |
| -----: | ----: | ------------: | ------: | --------------------------------------------------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `get(FirExpression, boolean, Function1, Function1)` | `org.jetbrains.kotlin.fir.resolve.dfa.VariableStorage` |

##### `contains(ConeKotlinType, Function1, SmartSet)` (`org.jetbrains.kotlin.fir.types.ConeTypeUtilsKt`)

| Change | Delta |             % | Samples | Caller                                | Location                                         |
| -----: | ----: | ------------: | ------: | ------------------------------------- | ------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `contains(ConeKotlinType, Function1)` | `org.jetbrains.kotlin.fir.types.ConeTypeUtilsKt` |

##### `getResolvedAnnotationClassIds()` (`org.jetbrains.kotlin.fir.symbols.FirBasedSymbol`)

| Change | Delta |             % | Samples | Caller                                           | Location                                                                     |
| -----: | ----: | ------------: | ------: | ------------------------------------------------ | ---------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `hasOnlyInputTypesAttribute(TypeVariableMarker)` | `org.jetbrains.kotlin.fir.resolve.inference.ConeConstraintSystemUtilContext` |

##### `isHiddenForThisCallSite(CheckerSink, FirCallableSymbol, CallInfo, Candidate)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.CheckHiddenDeclaration`)

| Change | Delta |             % | Samples | Caller                                                           | Location                                                               |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------- | ---------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `check(CheckerSink, ResolutionContext, Candidate, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckHiddenDeclaration` |

##### `next()` (`java.util.ArrayList$Itr`)

| Change | Delta |            % | Samples | Caller                                                      | Location                                                           |
| -----: | ----: | -----------: | ------: | ----------------------------------------------------------- | ------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `zip(Iterable, Object[])`                                   | `kotlin.collections.CollectionsKt___CollectionsKt`                 |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `convertFunctionContent(IrFunction, FirFunction, FirClass)` | `org.jetbrains.kotlin.fir.backend.generators.ClassMemberGenerator` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.LinkedHashMap`)

| Change | Delta |             % | Samples | Caller                                          | Location            |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | ------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

| Change | Delta |             % | Samples | Caller                   | Location                            |
| -----: | ----: | ------------: | ------: | ------------------------ | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `read(byte[], int, int)` | `java.util.zip.InflaterInputStream` |

##### `indexOf(int, int)` (`java.lang.String`)

| Change | Delta |             % | Samples | Caller                                      | Location                           |
| -----: | ----: | ------------: | ------: | ------------------------------------------- | ---------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `indexOf(CharSequence, char, int, boolean)` | `kotlin.text.StringsKt__StringsKt` |

##### `get(Object)` (`java.util.concurrent.ConcurrentHashMap`)

| Change | Delta |             % | Samples | Caller                    | Location                             |
| -----: | ----: | ------------: | ------: | ------------------------- | ------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getNoCheckStale(Object)` | `jdk.internal.util.ReferencedKeyMap` |

##### `linkToTargetMethod(Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |             % | Samples | Caller                                        | Location                           |
| -----: | ----: | ------------: | ------: | --------------------------------------------- | ---------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `iteratorOf(JrtPath, DirectoryStream$Filter)` | `jdk.internal.jrtfs.JrtFileSystem` |

##### `newByteChannel(Path, Set, FileAttribute[])` (`java.nio.file.Files`)

| Change | Delta |             % | Samples | Caller                               | Location              |
| -----: | ----: | ------------: | ------: | ------------------------------------ | --------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `newByteChannel(Path, OpenOption[])` | `java.nio.file.Files` |

##### `equals(Object)` (`java.lang.Object`)

|  Change | Delta |      % | Samples | Caller                     | Location                         |
| ------: | ----: | -----: | ------: | -------------------------- | -------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `areEqual(Object, Object)` | `kotlin.jvm.internal.Intrinsics` |

##### `replace(CharSequence, String)` (`kotlin.text.Regex`)

| Change | Delta |             % | Samples | Caller                             | Location                              |
| -----: | ----: | ------------: | ------: | ---------------------------------- | ------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `sanitizeAsJavaIdentifier(String)` | `org.jetbrains.kotlin.name.NameUtils` |

##### `resize()` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Caller                                          | Location            |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | ------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `nextNode()` (`java.util.HashMap$HashIterator`)

| Change | Delta |             % | Samples | Caller   | Location                          |
| -----: | ----: | ------------: | ------: | -------- | --------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `next()` | `java.util.HashMap$ValueIterator` |

##### `invoke(Object, Method, Object[])` (`sun.reflect.annotation.AnnotationInvocationHandler`)

| Change | Delta |             % | Samples | Caller             | Location             |
| -----: | ----: | ------------: | ------: | ------------------ | -------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `deprecatedName()` | `jdk.proxy2.$Proxy1` |

##### `<init>(Label)` (`jdk.internal.org.objectweb.asm.Frame`)

| Change | Delta |             % | Samples | Caller              | Location                                      |
| -----: | ----: | ------------: | ------: | ------------------- | --------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visitLabel(Label)` | `jdk.internal.org.objectweb.asm.MethodWriter` |

##### `getAnnotation(Class)` (`java.lang.reflect.Executable`)

| Change | Delta |             % | Samples | Caller                 | Location                   |
| -----: | ----: | ------------: | ------: | ---------------------- | -------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getAnnotation(Class)` | `java.lang.reflect.Method` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

| Change | Delta |             % | Samples | Caller                          | Location           |
| -----: | ----: | ------------: | ------: | ------------------------------- | ------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `addType(String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change | Delta |             % | Samples | Caller                                   | Location                               |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | -------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `execute(int, int, Symbol, SymbolTable)` | `jdk.internal.org.objectweb.asm.Frame` |

##### `visit(int, int, String, String, String, String[])` (`jdk.internal.org.objectweb.asm.ClassWriter`)

| Change | Delta |             % | Samples | Caller                | Location                                    |
| -----: | ----: | ------------: | ------: | --------------------- | ------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `classFilePrologue()` | `java.lang.invoke.InvokerBytecodeGenerator` |

##### `<init>()` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Caller          | Location                             |
| -----: | ----: | ------------: | ------: | --------------- | ------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `parse(String)` | `com.intellij.util.lang.JavaVersion` |

##### `getResourceBuffer(ImageLocation)` (`jdk.internal.jimage.BasicImageReader`)

| Change | Delta |             % | Samples | Caller                       | Location                               |
| -----: | ----: | ------------: | ------: | ---------------------------- | -------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getResource(ImageLocation)` | `jdk.internal.jimage.BasicImageReader` |

##### `requireNonNull(Object)` (`java.util.Objects`)

| Change | Delta |             % | Samples | Caller                   | Location                               |
| -----: | ----: | ------------: | ------: | ------------------------ | -------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>(Object, Object)` | `java.util.ImmutableCollections$Set12` |

##### `vtable stub` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                          | Location                                                  |
| -----: | ----: | ------------: | ------: | ------------------------------- | --------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getHasNoInfer(ConeKotlinType)` | `org.jetbrains.kotlin.fir.types.CompilerConeAttributesKt` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                             | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | -------------- |
|  -29.4% |    -5 | 70.8% → 92.3% | 17 → 12 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
|  -83.3% |    -5 |  25.0% → 7.7% |   6 → 1 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |
| removed |    -1 |   4.2% → 0.0% |   1 → 0 | `LIR_Assembler::record_non_safepoint_debug_info`   | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -39.1% |    -9 | 100.0% | 23 → 14 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -70.0% |    -7 | 100.0% |  10 → 3 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -85.7% |    -6 | 100.0% |   7 → 1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                             | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | -------------- |
|  -66.7% |    -4 | 50.0% → 28.6% |   6 → 2 | `ciBytecodeStream::get_method`                     | `libjvm.dylib` |
|     new |    +2 |  0.0% → 28.6% |   0 → 2 | `ciEnv::get_klass_by_name_impl`                    | `libjvm.dylib` |
| removed |    -1 |   8.3% → 0.0% |   1 → 0 | `ciReceiverTypeData::translate_receiver_data_from` | `libjvm.dylib` |
|  -33.3% |    -1 | 25.0% → 28.6% |   3 → 2 | `ciEnv::get_klass_by_index_impl`                   | `libjvm.dylib` |
|  -50.0% |    -1 | 16.7% → 14.3% |   2 → 1 | `ciMethod::ensure_method_data`                     | `libjvm.dylib` |

##### `PhaseIdealLoop::split_if_with_blocks` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                               | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| -62.5% |    -5 | 100.0% |   8 → 3 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `RegionNode::is_CFG` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                               | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------ | -------------- |
| removed |    -4 | 80.0% → 0.0% |   4 → 0 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `ProjNode::is_uncommon_trap_proj`    | `libjvm.dylib` |

##### `inflate_fast` (`libzip.dylib`)

| Change | Delta |      % | Samples | Caller                                          | Location       |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | -------------- |
| -10.2% |    -5 | 100.0% | 49 → 44 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                       | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | -------------- |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `G1ScanHRForRegionClosure::scan_memregion`   | `libjvm.dylib` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `G1ParScanThreadState::steal_and_trim_queue` | `libjvm.dylib` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                          | Location       |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | -------------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |

##### `Compile::disconnect_useless_nodes` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                   | Location       |
| ------: | ----: | -------------: | ------: | ---------------------------------------- | -------------- |
| removed |    -2 |   40.0% → 0.0% |   2 → 0 | `PhaseCCP::transform`                    | `libjvm.dylib` |
|  -66.7% |    -2 | 60.0% → 100.0% |   3 → 1 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                               | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| -57.1% |    -4 | 100.0% |   7 → 3 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `IfTrueNode::Opcode` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                      | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------- | -------------- |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::split_if_with_blocks_post` | `libjvm.dylib` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `IdealLoopTree::counted_loop`               | `libjvm.dylib` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `PhaseGVN::transform_no_reclaim`            | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                                             | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------ | -------------- |
|  -80.0% |    -4 | 20.0% → 4.8% |   5 → 1 | `PhaseLive::add_liveout`                                           | `libjvm.dylib` |
|     new |    +4 | 0.0% → 19.0% |   0 → 4 | `PhaseChaitin::Select`                                             | `libjvm.dylib` |
| removed |    -3 | 12.0% → 0.0% |   3 → 0 | `PhaseChaitin::build_ifg_virtual`                                  | `libjvm.dylib` |
| +100.0% |    +2 | 8.0% → 19.0% |   2 → 4 | `PhaseIFG::SquareUp`                                               | `libjvm.dylib` |
| removed |    -1 |  4.0% → 0.0% |   1 → 0 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` | `libjvm.dylib` |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                  | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
|  -30.8% |    -4 | 81.3% → 75.0% |  13 → 9 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |
|  +50.0% |    +1 | 12.5% → 25.0% |   2 → 3 | `InstanceKlass::find_method`            | `libjvm.dylib` |
| removed |    -1 |   6.3% → 0.0% |   1 → 0 | `InstanceKlass::find_local_method`      | `libjvm.dylib` |

##### `UTF8::is_legal_utf8` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                         | Location       |
| -----: | ----: | -----: | ------: | ---------------------------------------------- | -------------- |
| -66.7% |    -4 | 100.0% |   6 → 2 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |

##### `SymbolTable::do_lookup` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                     | Location       |
| -----: | ----: | ------------: | ------: | -------------------------- | -------------- |
| -10.0% |    -2 | 71.4% → 75.0% | 20 → 18 | `SymbolTable::lookup_only` | `libjvm.dylib` |
| -50.0% |    -2 |  14.3% → 8.3% |   4 → 2 | `SymbolTable::new_symbol`  | `libjvm.dylib` |

##### `sys_icache_invalidate` (`libsystem_platform.dylib`)

|  Change | Delta |             % | Samples | Caller                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|  -80.0% |    -4 | 41.7% → 12.5% |   5 → 1 | `nmethod::nmethod`               | `libjvm.dylib` |
|     new |    +2 |  0.0% → 25.0% |   0 → 2 | `nmethod::oops_do_process_weak`  | `libjvm.dylib` |
|  -25.0% |    -1 | 33.3% → 37.5% |   4 → 3 | `CompiledIC::set_to_monomorphic` | `libjvm.dylib` |
| removed |    -1 |   8.3% → 0.0% |   1 → 0 | `CompiledIC::set_to_clean`       | `libjvm.dylib` |
|  -50.0% |    -1 | 16.7% → 12.5% |   2 → 1 | `CodeBuffer::copy_code_to`       | `libjvm.dylib` |

##### `LIRGenerator::state_for` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                           | Location       |
| ------: | ----: | -------------: | ------: | -------------------------------- | -------------- |
|  -75.0% |    -3 | 80.0% → 100.0% |   4 → 1 | `LIRGenerator::do_ProfileInvoke` | `libjvm.dylib` |
| removed |    -1 |   20.0% → 0.0% |   1 → 0 | `LIRGenerator::do_NewInstance`   | `libjvm.dylib` |

##### `LinearScan::compute_local_live_sets` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                       | Location       |
| -----: | ----: | -----: | ------: | ---------------------------- | -------------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `Type::cmp` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller         | Location       |
| -----: | ----: | -----: | ------: | -------------- | -------------- |
| -60.0% |    -3 | 100.0% |   5 → 2 | `Dict::Insert` | `libjvm.dylib` |

##### `Unique_Node_List::remove` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                    | Location       |
| -----: | ----: | -----: | ------: | ----------------------------------------- | -------------- |
| -27.3% |    -3 | 100.0% |  11 → 8 | `PhaseIterGVN::remove_globally_dead_node` | `libjvm.dylib` |

##### `MultiNode::is_CFG` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                 | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------- | -------------- |
|  -50.0% |    -1 | 40.0% → 50.0% |   2 → 1 | `PhaseIdealLoop::build_and_optimize`   | `libjvm.dylib` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |

##### `Node::set_req_X` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller               | Location       |
| ------: | ----: | ------------: | ------: | -------------------- | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `Node::replace_edge` | `libjvm.dylib` |

##### `PhaseIdealLoop::get_late_ctrl_with_anti_dep` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                      | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------- | -------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `PhaseIdealLoop::ctrl_of_use_out_of_loop`   | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                               | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| -33.3% |    -3 | 100.0% |   9 → 6 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `MacroAssembler::pd_patch_instruction_size` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                    | Location       |
| ------: | ----: | ------------: | ------: | ------------------------- | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `AbstractAssembler::bind` | `libjvm.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -60.0% |    -3 | 100.0% |   5 → 2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `iRegINoSpOper::type` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                    | Location       |
| ------: | ----: | -----------: | ------: | ------------------------- | -------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `PhaseCFG::schedule_late` | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `MachNode::ideal_reg`     | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `MachNode::rematerialize` | `libjvm.dylib` |

##### `read` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller      | Location        |
| -----: | ----: | -----: | ------: | ----------- | --------------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `readBytes` | `libjava.dylib` |

##### `posix_madvise` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller        | Location                 |
| -----: | ----: | -----: | ------: | ------------- | ------------------------ |
| -66.7% |    -2 | 100.0% |   3 → 1 | `free_medium` | `libsystem_malloc.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|  Change | Delta |            % | Samples | Caller                        | Location       |
| ------: | ----: | -----------: | ------: | ----------------------------- | -------------- |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `Scheduling::anti_do_def`     | `libjvm.dylib` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `Method::allocate`            | `libjvm.dylib` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `ConstantPool::allocate`      | `libjvm.dylib` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `ConstantPoolCache::allocate` | `libjvm.dylib` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `Matcher::match_tree`         | `libjvm.dylib` |

##### `G1CardSet::add_to_howl` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                | Location       |
| -----: | ----: | -----: | ------: | --------------------- | -------------- |
| -40.0% |    -2 | 100.0% |   5 → 3 | `G1CardSet::add_card` | `libjvm.dylib` |

##### `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                                                             | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------- | -------------- |
| removed |    -2 | 40.0% → 0.0% |   2 → 0 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region` | `libjvm.dylib` |

##### `G1CMTask::drain_global_stack` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                      | Location       |
| ------: | ----: | -----------: | ------: | --------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `G1CMBitMap::iterate`       | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `G1CMTask::do_marking_step` | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                         | Location       |
| -----: | ----: | -----: | ------: | ---------------------------------------------- | -------------- |
| -33.3% |    -2 | 100.0% |   6 → 4 | `void G1CMTask::process_grey_task_entry<true>` | `libjvm.dylib` |

##### `pread` (`libsystem_kernel.dylib`)

|  Change | Delta |             % | Samples | Caller               | Location          |
| ------: | ----: | ------------: | ------: | -------------------- | ----------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `JIMAGE_GetResource` | `libjimage.dylib` |

##### `_large_arrays_hashcode_boolean` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller             | Location                 |
| ------: | ----: | ------------: | ------: | ------------------ | ------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `hashCode(byte[])` | `java.lang.StringLatin1` |

##### `ClassFileParser::skip_over_field_signature` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                           | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | -------------- |
|  -66.7% |    -2 | 60.0% → 33.3% |   3 → 1 | `ClassFileParser::verify_legal_method_signature` | `libjvm.dylib` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `ClassFileParser::parse_fields`                  | `libjvm.dylib` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `ClassFileParser::parse_localvariable_table`     | `libjvm.dylib` |

##### `ClassVerifier::verify_method` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                        | Location       |
| -----: | ----: | -----: | ------: | ----------------------------- | -------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `ClassVerifier::verify_class` | `libjvm.dylib` |

##### `createSubstitutionForScope(List, ConeClassLikeType, FirSession)` (`org.jetbrains.kotlin.fir.resolve.SupertypeUtilsKt`)

|  Change | Delta |             % | Samples | Caller                                                                                                             | Location                                        |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `classScope(ConeClassLikeType, FirSession, ScopeSession, FirResolvePhase, ConeClassLikeLookupTag, FirClassSymbol)` | `org.jetbrains.kotlin.fir.resolve.ScopeUtilsKt` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|  Change | Delta |             % | Samples | Caller                                                                       | Location                                               |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `initChildrenArrayFromList()` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarVirtualFile`)

|  Change | Delta |             % | Samples | Caller                              | Location                                                     |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(FastJarFileSystem, String)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler` |

##### `accept(ClassVisitor, int)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|  Change | Delta |             % | Samples | Caller                                                     | Location                                                |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------- | ------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `visitMembers(KotlinJvmBinaryClass$MemberVisitor, byte[])` | `org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass` |

##### `newOutput()` (`org.jetbrains.kotlin.protobuf.ByteString`)

|  Change | Delta |             % | Samples | Caller                                            | Location                                          |
| ------: | ----: | ------------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Function` |

##### `convertFunctionDeclaration(LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder`)

|  Change | Delta |             % | Samples | Caller                                                                | Location                                                                         |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `convertFile(LighterASTNode, KtSourceFile, KtSourceFileLinesMapping)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder` |

##### `getTokenType()` (`com.intellij.lang.impl.PsiBuilderImpl`)

|  Change | Delta |             % | Samples | Caller           | Location                                   |
| ------: | ----: | ------------: | ------: | ---------------- | ------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getTokenType()` | `com.intellij.lang.impl.PsiBuilderAdapter` |

##### `setResolveState(FirResolveState)` (`org.jetbrains.kotlin.fir.FirElementWithResolveState`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                                                                                                                                                                                                      | Location                                                          |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(KtSourceElement, FirResolvePhase, FirModuleData, FirDeclarationOrigin, FirDeclarationAttributes, FirDeclarationStatus, boolean, FirTypeRef, FirReceiverParameter, DeprecationsProvider, DeserializedContainerSource, ConeSimpleKotlinType, List, List, FirBlock, FirContractDescription, Name, FirNamedFunctionSymbol, List, List)` | `org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl` |

##### `readSourceFileWithMapping(InputStreamReader)` (`org.jetbrains.kotlin.KtSourceFileLinesMappingKt`)

|  Change | Delta |             % | Samples | Caller                                                                        | Location                                       |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------- | ---------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `buildFirViaLightTree(FirSession, Collection, DiagnosticReporter, Function2)` | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt` |

##### `getModuleData()` (`org.jetbrains.kotlin.fir.declarations.builder.FirValueParameterBuilder`)

|  Change | Delta |             % | Samples | Caller    | Location                                                                 |
| ------: | ----: | ------------: | ------: | --------- | ------------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `build()` | `org.jetbrains.kotlin.fir.declarations.builder.FirValueParameterBuilder` |

##### `getTokenType()` (`com.intellij.lang.impl.PsiBuilderImpl$StartMarker`)

|  Change | Delta |             % | Samples | Caller                                             | Location                                                                      |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | ----------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getChildNodeByType(LighterASTNode, IElementType)` | `org.jetbrains.kotlin.fir.lightTree.converter.AbstractLightTreeRawFirBuilder` |

##### `getExtension(CharSequence, String)` (`com.intellij.openapi.util.io.FileUtilRt`)

|  Change | Delta |             % | Samples | Caller           | Location                               |
| ------: | ----: | ------------: | ------: | ---------------- | -------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getExtension()` | `com.intellij.openapi.vfs.VirtualFile` |

##### `makeImmutable()` (`org.jetbrains.kotlin.protobuf.FieldSet`)

|  Change | Delta |             % | Samples | Caller                      | Location                                                               |
| ------: | ----: | ------------: | ------: | --------------------------- | ---------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `makeExtensionsImmutable()` | `org.jetbrains.kotlin.protobuf.GeneratedMessageLite$ExtendableMessage` |

##### `readMethod(ClassVisitor, Context, int)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|  Change | Delta |             % | Samples | Caller                                   | Location                                      |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | --------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `accept(ClassVisitor, Attribute[], int)` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `readUtfNonAscii(int, int, int, char[])` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|  Change | Delta |             % | Samples | Caller                      | Location                                      |
| ------: | ----: | ------------: | ------: | --------------------------- | --------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `readUtf(int, int, char[])` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `readUtf(int, char[])` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|  Change | Delta |             % | Samples | Caller                  | Location                                      |
| ------: | ----: | ------------: | ------: | ----------------------- | --------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `readUTF8(int, char[])` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `<init>(KtSourceElement, FirResolvePhase, FirModuleData, FirDeclarationOrigin, FirDeclarationAttributes, FirTypeRef, Name, List, FirValueParameterSymbol, FirExpression, FirBasedSymbol, boolean, boolean, boolean, FirValueParameterKind)` (`org.jetbrains.kotlin.fir.declarations.impl.FirValueParameterImpl`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                                                                                                                                | Location                                                           |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(KtSourceElement, FirResolvePhase, FirModuleData, FirDeclarationOrigin, FirDeclarationAttributes, FirTypeRef, Name, List, FirValueParameterSymbol, FirExpression, FirBasedSymbol, boolean, boolean, boolean, FirValueParameterKind, DefaultConstructorMarker)` | `org.jetbrains.kotlin.fir.declarations.impl.FirValueParameterImpl` |

##### `addValueParametersTo$default(FirMemberDeserializer, List, FirBasedSymbol, FirRegularClassBuilder, MessageLite, AnnotationDeserializer$CallableKind, ProtoBuf$Class, FirValueParameterKind, boolean, List, int, Object)` (`org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`)

|  Change | Delta |             % | Samples | Caller                                                                                  | Location                                                         |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `loadFunction(ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin)` | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer` |

##### `hashCode()` (`org.jetbrains.kotlin.name.Name`)

|  Change | Delta |             % | Samples | Caller         | Location            |
| ------: | ----: | ------------: | ------: | -------------- | ------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `hash(Object)` | `java.util.HashMap` |

##### `filterOutAmbiguousTypealiases(Set)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeCandidateCollector`)

|  Change | Delta |             % | Samples | Caller        | Location                                                                    |
| ------: | ----: | ------------: | ------: | ------------- | --------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getResult()` | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeCandidateCollector` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

|  Change | Delta |             % | Samples | Caller     | Location                  |
| ------: | ----: | ------------: | ------: | ---------- | ------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `<init>()` | `java.lang.StringBuilder` |

##### `getApproximateCommonClassLoader(MethodType)` (`java.lang.invoke.MethodHandle`)

|  Change | Delta |             % | Samples | Caller                      | Location                        |
| ------: | ----: | ------------: | ------: | --------------------------- | ------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `isSafeToCache(MethodType)` | `java.lang.invoke.MethodHandle` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

|  Change | Delta |             % | Samples | Caller                             | Location                                     |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `newInvokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller                | Location            |
| ------: | ----: | ------------: | ------: | --------------------- | ------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `put(Object, Object)` | `java.util.HashMap` |

##### `areEqual(Object, Object)` (`kotlin.jvm.internal.Intrinsics`)

|  Change | Delta |            % | Samples | Caller           | Location                                 |
| ------: | ----: | -----------: | ------: | ---------------- | ---------------------------------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `equals(Object)` | `org.jetbrains.kotlin.name.FqName`       |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `equals(Object)` | `org.jetbrains.kotlin.name.FqNameUnsafe` |

##### `getNode(Object)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller        | Location                  |
| ------: | ----: | ------------: | ------: | ------------- | ------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `get(Object)` | `java.util.LinkedHashMap` |

##### `lock()` (`java.util.concurrent.locks.ReentrantLock`)

|  Change | Delta |             % | Samples | Caller   | Location                         |
| ------: | ----: | ------------: | ------: | -------- | -------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `lock()` | `jdk.internal.misc.InternalLock` |

##### `indexOf(byte[], int, int, int)` (`java.lang.StringLatin1`)

|  Change | Delta |             % | Samples | Caller              | Location           |
| ------: | ----: | ------------: | ------: | ------------------- | ------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `indexOf(int, int)` | `java.lang.String` |

##### `checkForComodification()` (`java.util.ArrayList$Itr`)

|  Change | Delta |             % | Samples | Caller   | Location                  |
| ------: | ----: | ------------: | ------: | -------- | ------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `next()` | `java.util.ArrayList$Itr` |

##### `getProxyConstructor(Class, ClassLoader, Class[])` (`java.lang.reflect.Proxy`)

|  Change | Delta |             % | Samples | Caller                                                      | Location                  |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------- | ------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `newProxyInstance(ClassLoader, Class[], InvocationHandler)` | `java.lang.reflect.Proxy` |

##### `returnType()` (`java.lang.invoke.MethodType`)

|  Change | Delta |             % | Samples | Caller                    | Location                      |
| ------: | ----: | ------------: | ------: | ------------------------- | ----------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `changeReturnType(Class)` | `java.lang.invoke.MethodType` |

##### `getSerializedSize()` (`kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type`)

|  Change | Delta |             % | Samples | Caller                                 | Location                                                      |
| ------: | ----: | ------------: | ------: | -------------------------------------- | ------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `computeMessageSizeNoTag(MessageLite)` | `kotlin.reflect.jvm.internal.impl.protobuf.CodedOutputStream` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

|  Change | Delta |             % | Samples | Caller                | Location           |
| ------: | ----: | ------------: | ------: | --------------------- | ------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `substring(int, int)` | `java.lang.String` |

##### `substring(int, int)` (`java.lang.String`)

|  Change | Delta |             % | Samples | Caller           | Location           |
| ------: | ----: | ------------: | ------: | ---------------- | ------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `substring(int)` | `java.lang.String` |

##### `parseTypeArguments()` (`sun.reflect.generics.parser.SignatureParser`)

|  Change | Delta |             % | Samples | Caller                                          | Location                                      |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | --------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `parsePackageNameAndSimpleClassTypeSignature()` | `sun.reflect.generics.parser.SignatureParser` |

##### `generateConstructor()` (`java.lang.invoke.InnerClassLambdaMetafactory`)

|  Change | Delta |             % | Samples | Caller                 | Location                                       |
| ------: | ----: | ------------: | ------: | ---------------------- | ---------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `generateInnerClass()` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `spinInnerClass()` (`java.lang.invoke.InnerClassLambdaMetafactory`)

|  Change | Delta |             % | Samples | Caller            | Location                                       |
| ------: | ----: | ------------: | ------: | ----------------- | ---------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `buildCallSite()` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `putFieldInfo(ByteVector)` (`jdk.internal.org.objectweb.asm.FieldWriter`)

|  Change | Delta |             % | Samples | Caller          | Location                                     |
| ------: | ----: | ------------: | ------: | --------------- | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `toByteArray()` | `jdk.internal.org.objectweb.asm.ClassWriter` |

##### `toLowerCase(int)` (`java.lang.CharacterDataLatin1`)

|  Change | Delta |             % | Samples | Caller             | Location              |
| ------: | ----: | ------------: | ------: | ------------------ | --------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `toLowerCase(int)` | `java.lang.Character` |

##### `match(int, String, int)` (`jdk.internal.jimage.ImageStringsReader`)

|  Change | Delta |             % | Samples | Caller                                                                   | Location                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------ | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `verifyName(String, String, int, int, int, int, int, int, ImageStrings)` | `jdk.internal.jimage.ImageLocation` |

##### `zero_blocks` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller        | Location                        |
| ------: | ----: | ------------: | ------: | ------------- | ------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(int)` | `java.io.ByteArrayOutputStream` |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |   Samples | Function                                                                                                                                      | Location                                                |
| ------: | ----: | ------------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|   +5.0% |   +43 | 66.4% → 66.7% | 868 → 911 | `Thread::call_run`                                                                                                                            | `libjvm.dylib`                                          |
|   +5.0% |   +43 | 66.4% → 66.7% | 868 → 911 | `thread_native_entry`                                                                                                                         | `libjvm.dylib`                                          |
|   +4.9% |   +43 | 66.4% → 66.8% | 869 → 912 | `_pthread_start`                                                                                                                              | `libsystem_pthread.dylib`                               |
|   +4.9% |   +43 | 66.4% → 66.8% | 869 → 912 | `thread_start`                                                                                                                                | `libsystem_pthread.dylib`                               |
|   +5.4% |   +43 | 60.8% → 61.3% | 795 → 838 | `JavaThread::thread_main_inner`                                                                                                               | `libjvm.dylib`                                          |
|   +5.0% |   +40 | 60.8% → 61.1% | 795 → 835 | `CompileBroker::compiler_thread_loop`                                                                                                         | `libjvm.dylib`                                          |
|   +3.6% |   +28 | 59.9% → 59.4% | 784 → 812 | `CompileBroker::invoke_compiler_on_method`                                                                                                    | `libjvm.dylib`                                          |
| +100.0% |   +20 |   1.5% → 2.9% |   20 → 40 | `tlv_get_addr`                                                                                                                                | `libdyld.dylib`                                         |
|   +8.0% |   +19 | 18.1% → 18.7% | 237 → 256 | `Compilation::compile_method`                                                                                                                 | `libjvm.dylib`                                          |
|   +7.6% |   +18 | 18.2% → 18.7% | 238 → 256 | `Compilation::Compilation`                                                                                                                    | `libjvm.dylib`                                          |
|   +7.5% |   +18 | 18.3% → 18.8% | 239 → 257 | `Compiler::compile_method`                                                                                                                    | `libjvm.dylib`                                          |
|   +8.5% |   +18 | 16.2% → 16.8% | 212 → 230 | `Compilation::compile_java_method`                                                                                                            | `libjvm.dylib`                                          |
|  +35.4% |   +17 |   3.7% → 4.8% |   48 → 65 | `Parse::Parse`                                                                                                                                | `libjvm.dylib`                                          |
|  +35.4% |   +17 |   3.7% → 4.8% |   48 → 65 | `ParseGenerator::generate`                                                                                                                    | `libjvm.dylib`                                          |
| +283.3% |   +17 |   0.5% → 1.7% |    6 → 23 | `__psynch_cvwait`                                                                                                                             | `libsystem_kernel.dylib`                                |
| +212.5% |   +17 |   0.6% → 1.8% |    8 → 25 | `PlatformMonitor::wait`                                                                                                                       | `libjvm.dylib`                                          |
|   +5.1% |   +17 | 25.7% → 25.8% | 336 → 353 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|   +5.1% |   +17 | 25.7% → 25.8% | 336 → 353 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|   +5.1% |   +17 | 25.7% → 25.8% | 336 → 353 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|   +5.1% |   +17 | 25.5% → 25.6% | 333 → 350 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |

##### Compiler

|  Change | Delta |             % |   Samples | Function                                   | Location       |
| ------: | ----: | ------------: | --------: | ------------------------------------------ | -------------- |
|   +5.0% |   +40 | 60.8% → 61.1% | 795 → 835 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
|   +3.6% |   +28 | 59.9% → 59.4% | 784 → 812 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|   +8.0% |   +19 | 18.1% → 18.7% | 237 → 256 | `Compilation::compile_method`              | `libjvm.dylib` |
|   +7.6% |   +18 | 18.2% → 18.7% | 238 → 256 | `Compilation::Compilation`                 | `libjvm.dylib` |
|   +8.5% |   +18 | 16.2% → 16.8% | 212 → 230 | `Compilation::compile_java_method`         | `libjvm.dylib` |
|  +23.6% |   +17 |   5.5% → 6.5% |   72 → 89 | `Compilation::build_hir`                   | `libjvm.dylib` |
|  +18.9% |   +14 |   5.7% → 6.4% |   74 → 88 | `Compilation::emit_lir`                    | `libjvm.dylib` |
|  +87.5% |   +14 |   1.2% → 2.2% |   16 → 30 | `IntervalWalker::walk_to`                  | `libjvm.dylib` |
|  +25.0% |   +14 |   4.3% → 5.1% |   56 → 70 | `LinearScan::do_linear_scan`               | `libjvm.dylib` |
|  +86.7% |   +13 |   1.1% → 2.0% |   15 → 28 | `LinearScan::allocate_registers`           | `libjvm.dylib` |
|  +57.9% |   +11 |   1.5% → 2.2% |   19 → 30 | `Matcher::match_tree`                      | `libjvm.dylib` |
| +220.0% |   +11 |   0.4% → 1.2% |    5 → 16 | `ciBytecodeStream::get_field`              | `libjvm.dylib` |
|  +90.9% |   +10 |   0.8% → 1.5% |   11 → 21 | `CompileQueue::get`                        | `libjvm.dylib` |
|  +38.5% |   +10 |   2.0% → 2.6% |   26 → 36 | `PhaseIdealLoop::build_loop_late`          | `libjvm.dylib` |
|  +29.4% |   +10 |   2.6% → 3.2% |   34 → 44 | `Matcher::xform`                           | `libjvm.dylib` |
|  +16.4% |   +10 |   4.7% → 5.2% |   61 → 71 | `GraphBuilder::GraphBuilder`               | `libjvm.dylib` |
| +128.6% |    +9 |   0.5% → 1.2% |    7 → 16 | `Matcher::Label_Root`                      | `libjvm.dylib` |
|  +75.0% |    +9 |   0.9% → 1.5% |   12 → 21 | `LinearScanWalker::activate_current`       | `libjvm.dylib` |
|     new |    +9 |   0.0% → 0.7% |     0 → 9 | `PhaseIterGVN::add_users_to_worklist`      | `libjvm.dylib` |
|   +1.5% |    +8 | 41.1% → 40.0% | 538 → 546 | `Compile::Compile`                         | `libjvm.dylib` |

##### Native

|  Change | Delta |             % |   Samples | Function                            | Location                  |
| ------: | ----: | ------------: | --------: | ----------------------------------- | ------------------------- |
|   +5.0% |   +43 | 66.4% → 66.7% | 868 → 911 | `Thread::call_run`                  | `libjvm.dylib`            |
|   +5.0% |   +43 | 66.4% → 66.7% | 868 → 911 | `thread_native_entry`               | `libjvm.dylib`            |
|   +4.9% |   +43 | 66.4% → 66.8% | 869 → 912 | `_pthread_start`                    | `libsystem_pthread.dylib` |
|   +4.9% |   +43 | 66.4% → 66.8% | 869 → 912 | `thread_start`                      | `libsystem_pthread.dylib` |
|   +5.4% |   +43 | 60.8% → 61.3% | 795 → 838 | `JavaThread::thread_main_inner`     | `libjvm.dylib`            |
| +100.0% |   +20 |   1.5% → 2.9% |   20 → 40 | `tlv_get_addr`                      | `libdyld.dylib`           |
|   +7.5% |   +18 | 18.3% → 18.8% | 239 → 257 | `Compiler::compile_method`          | `libjvm.dylib`            |
|  +35.4% |   +17 |   3.7% → 4.8% |   48 → 65 | `Parse::Parse`                      | `libjvm.dylib`            |
|  +35.4% |   +17 |   3.7% → 4.8% |   48 → 65 | `ParseGenerator::generate`          | `libjvm.dylib`            |
| +283.3% |   +17 |   0.5% → 1.7% |    6 → 23 | `__psynch_cvwait`                   | `libsystem_kernel.dylib`  |
| +212.5% |   +17 |   0.6% → 1.8% |    8 → 25 | `PlatformMonitor::wait`             | `libjvm.dylib`            |
|  +32.6% |   +15 |   3.5% → 4.5% |   46 → 61 | `Parse::do_one_block`               | `libjvm.dylib`            |
| +214.3% |   +15 |   0.5% → 1.6% |    7 → 22 | `Monitor::wait`                     | `libjvm.dylib`            |
|  +33.3% |   +14 |   3.2% → 4.1% |   42 → 56 | `Parse::do_call`                    | `libjvm.dylib`            |
|  +29.8% |   +14 |   3.6% → 4.5% |   47 → 61 | `Parse::do_all_blocks`              | `libjvm.dylib`            |
|  +33.3% |   +10 |   2.3% → 2.9% |   30 → 40 | `PredictedCallGenerator::generate`  | `libjvm.dylib`            |
|  +16.4% |   +10 |   4.7% → 5.2% |   61 → 71 | `IRScope::IRScope`                  | `libjvm.dylib`            |
|  +16.4% |   +10 |   4.7% → 5.2% |   61 → 71 | `IR::IR`                            | `libjvm.dylib`            |
|  +56.3% |    +9 |   1.2% → 1.8% |   16 → 25 | `__psynch_mutexwait`                | `libsystem_kernel.dylib`  |
|  +56.3% |    +9 |   1.2% → 1.8% |   16 → 25 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### Ours

| Change | Delta |             % |   Samples | Function                                                                                                                                      | Location                                                    |
| -----: | ----: | ------------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
|  +5.1% |   +17 | 25.7% → 25.8% | 336 → 353 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`     |
|  +5.1% |   +17 | 25.7% → 25.8% | 336 → 353 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`     |
|  +5.1% |   +17 | 25.7% → 25.8% | 336 → 353 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`     |
|  +5.1% |   +17 | 25.5% → 25.6% | 333 → 350 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`           |
|  +5.1% |   +17 | 25.5% → 25.6% | 333 → 350 | `phaseBody(LoggingContext, Object)`                                                                                                           | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`           |
|  +5.1% |   +17 | 25.5% → 25.6% | 333 → 350 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`     |
|  +5.1% |   +17 | 25.5% → 25.6% | 333 → 350 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase` |
|  +5.1% |   +17 | 25.5% → 25.6% | 333 → 350 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`                                                                          | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`        |
|  +4.7% |   +16 | 25.8% → 25.9% | 338 → 354 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                |
|  +4.7% |   +16 | 25.8% → 25.9% | 338 → 354 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                |
|  +4.7% |   +16 | 25.8% → 25.9% | 338 → 354 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler`               |
|  +4.8% |   +16 | 25.6% → 25.7% | 335 → 351 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`     |
|  +3.9% |   +14 | 27.1% → 27.0% | 355 → 369 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`      |
|  +3.9% |   +14 | 27.1% → 27.0% | 355 → 369 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                |
|  +4.0% |   +14 | 26.5% → 26.4% | 347 → 361 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`               |
|  +3.7% |   +13 | 27.1% → 26.9% | 354 → 367 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`     |
|  +3.7% |   +13 | 27.1% → 26.9% | 354 → 367 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`     |
|  +3.7% |   +13 | 27.0% → 26.8% | 353 → 366 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`               |
|  +3.7% |   +13 | 27.0% → 26.8% | 353 → 366 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`               |
|  +3.7% |   +13 | 27.0% → 26.8% | 353 → 366 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`     |

##### Standard library

|  Change | Delta |             % |   Samples | Function                                         | Location                                             |
| ------: | ----: | ------------: | --------: | ------------------------------------------------ | ---------------------------------------------------- |
|   +3.9% |   +14 | 27.1% → 27.0% | 355 → 369 | `invokeStatic(Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x0000008001008400` |
|   +3.9% |   +14 | 27.1% → 27.0% | 355 → 369 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000008001009800`  |
|   +3.9% |   +14 | 27.1% → 27.0% | 355 → 369 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                   |
|   +3.9% |   +14 | 27.1% → 27.0% | 355 → 369 | `invokeImpl(Object, Object[])`                   | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|   +3.9% |   +14 | 27.1% → 27.0% | 355 → 369 | `invoke(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|   +3.9% |   +14 | 27.1% → 27.0% | 355 → 369 | `invoke(Object, Object[])`                       | `java.lang.reflect.Method`                           |
|  +63.6% |    +7 |   0.8% → 1.3% |   11 → 18 | `getValue()`                                     | `kotlin.SynchronizedLazyImpl`                        |
| +250.0% |    +5 |   0.2% → 0.5% |     2 → 7 | `generateCustomizedCode(LambdaForm, MethodType)` | `java.lang.invoke.InvokerBytecodeGenerator`          |
| +250.0% |    +5 |   0.2% → 0.5% |     2 → 7 | `compileToBytecode()`                            | `java.lang.invoke.LambdaForm`                        |
| +150.0% |    +3 |   0.2% → 0.4% |     2 → 5 | `putVal(int, Object, Object, boolean, boolean)`  | `java.util.HashMap`                                  |
| +300.0% |    +3 |   0.1% → 0.3% |     1 → 4 | `generateCustomizedCodeBytes()`                  | `java.lang.invoke.InvokerBytecodeGenerator`          |
| +150.0% |    +3 |   0.2% → 0.4% |     2 → 5 | `makePreparedLambdaForm(MethodType, int)`        | `java.lang.invoke.DirectMethodHandle`                |
| +150.0% |    +3 |   0.2% → 0.4% |     2 → 5 | `preparedLambdaForm(MethodType, int)`            | `java.lang.invoke.DirectMethodHandle`                |
| +150.0% |    +3 |   0.2% → 0.4% |     2 → 5 | `preparedLambdaForm(MemberName, boolean)`        | `java.lang.invoke.DirectMethodHandle`                |
|     new |    +3 |   0.0% → 0.2% |     0 → 3 | `clinit(ClassWriter, String, List)`              | `java.lang.invoke.InvokerBytecodeGenerator`          |
|     new |    +3 |   0.0% → 0.2% |     0 → 3 | `getPackageName()`                               | `java.lang.Class`                                    |
|     new |    +3 |   0.0% → 0.2% |     0 → 3 | `postDefineClass(Class, ProtectionDomain)`       | `java.lang.ClassLoader`                              |
|     new |    +3 |   0.0% → 0.2% |     0 → 3 | `calcNext()`                                     | `kotlin.sequences.FilteringSequence$iterator$1`      |
|     new |    +3 |   0.0% → 0.2% |     0 → 3 | `hasNext()`                                      | `kotlin.sequences.FilteringSequence$iterator$1`      |
|   +3.2% |    +2 |          4.7% |   62 → 64 | `inflate(byte[], int, int)`                      | `java.util.zip.Inflater`                             |

##### JIT

|  Change | Delta |           % | Samples | Function                | Location    |
| ------: | ----: | ----------: | ------: | ----------------------- | ----------- |
| +500.0% |    +5 | 0.1% → 0.4% |   1 → 6 | `I2C/C2I adapters(0xb)` | `<unknown>` |
| +150.0% |    +3 | 0.2% → 0.4% |   2 → 5 | `I2C/C2I adapters`      | `<unknown>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `vtable stub`           | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

| Change | Delta |             % |   Samples | Function                                                                                                                                                        | Location                                                                                 |
| -----: | ----: | ------------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| -16.0% |   -27 | 12.9% → 10.4% | 169 → 142 | `PhaseChaitin::Register_Allocate`                                                                                                                               | `libjvm.dylib`                                                                           |
| -22.6% |   -14 |   4.7% → 3.5% |   62 → 48 | `PhaseIterGVN::optimize`                                                                                                                                        | `libjvm.dylib`                                                                           |
| -22.0% |   -13 |   4.5% → 3.4% |   59 → 46 | `PhaseIterGVN::transform_old`                                                                                                                                   | `libjvm.dylib`                                                                           |
| -20.6% |   -13 |   4.8% → 3.7% |   63 → 50 | `Compilation::emit_code_body`                                                                                                                                   | `libjvm.dylib`                                                                           |
| -55.0% |   -11 |   1.5% → 0.7% |    20 → 9 | `G1EvacuateRegionsTask::scan_roots`                                                                                                                             | `libjvm.dylib`                                                                           |
|  -3.9% |   -11 | 21.5% → 19.8% | 281 → 270 | `Compile::Code_Gen`                                                                                                                                             | `libjvm.dylib`                                                                           |
| -34.4% |   -11 |   2.4% → 1.5% |   32 → 21 | `PhaseChaitin::Split`                                                                                                                                           | `libjvm.dylib`                                                                           |
| -45.8% |   -11 |   1.8% → 1.0% |   24 → 13 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>`        | `libjvm.dylib`                                                                           |
| -34.5% |   -10 |   2.2% → 1.4% |   29 → 19 | `processCandidate(Candidate, ResolutionContext, boolean, boolean)`                                                                                              | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner`                    |
| -34.5% |   -10 |   2.2% → 1.4% |   29 → 19 | `processCandidate$default(ResolutionStageRunner, Candidate, ResolutionContext, boolean, boolean, int, Object)`                                                  | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner`                    |
| -35.7% |   -10 |   2.1% → 1.3% |   28 → 18 | `consumeCandidate(TowerGroup, Candidate, ResolutionContext)`                                                                                                    | `org.jetbrains.kotlin.fir.resolve.calls.candidate.CandidateCollector`                    |
| -35.7% |   -10 |   2.1% → 1.3% |   28 → 18 | `consumeCandidate(FirBasedSymbol, FirExpression, FirExpression, FirScope, boolean, boolean)`                                                                    | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelProcessor`                       |
| -35.7% |   -10 |   2.1% → 1.3% |   28 → 18 | `consumeCandidate$default(TowerLevelProcessor, FirBasedSymbol, FirExpression, FirExpression, FirScope, boolean, boolean, int, Object)`                          | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelProcessor`                       |
| -66.7% |   -10 |   1.1% → 0.4% |    15 → 5 | `CounterOverflowStub::emit_code`                                                                                                                                | `libjvm.dylib`                                                                           |
| -69.2% |    -9 |   1.0% → 0.3% |    13 → 4 | `IfNode::Ideal_common`                                                                                                                                          | `libjvm.dylib`                                                                           |
| -64.3% |    -9 |   1.1% → 0.4% |    14 → 5 | `IfNode::Ideal`                                                                                                                                                 | `libjvm.dylib`                                                                           |
| -32.1% |    -9 |   2.1% → 1.4% |   28 → 19 | `invokeSuspend(Object)`                                                                                                                                         | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1` |
| -39.1% |    -9 |   1.8% → 1.0% |   23 → 14 | `CodeEmitInfo::record_debug_info`                                                                                                                               | `libjvm.dylib`                                                                           |
| -50.0% |    -8 |   1.2% → 0.6% |    16 → 8 | `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` | `libjvm.dylib`                                                                           |
| -50.0% |    -8 |   1.2% → 0.6% |    16 → 8 | `G1ScanHRForRegionClosure::scan_heap_roots`                                                                                                                     | `libjvm.dylib`                                                                           |

##### Compiler

|  Change | Delta |             % |   Samples | Function                                   | Location       |
| ------: | ----: | ------------: | --------: | ------------------------------------------ | -------------- |
|  -16.0% |   -27 | 12.9% → 10.4% | 169 → 142 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
|  -22.6% |   -14 |   4.7% → 3.5% |   62 → 48 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |
|  -22.0% |   -13 |   4.5% → 3.4% |   59 → 46 | `PhaseIterGVN::transform_old`              | `libjvm.dylib` |
|  -20.6% |   -13 |   4.8% → 3.7% |   63 → 50 | `Compilation::emit_code_body`              | `libjvm.dylib` |
|   -3.9% |   -11 | 21.5% → 19.8% | 281 → 270 | `Compile::Code_Gen`                        | `libjvm.dylib` |
|  -34.4% |   -11 |   2.4% → 1.5% |   32 → 21 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
|  -69.2% |    -9 |   1.0% → 0.3% |    13 → 4 | `IfNode::Ideal_common`                     | `libjvm.dylib` |
|  -64.3% |    -9 |   1.1% → 0.4% |    14 → 5 | `IfNode::Ideal`                            | `libjvm.dylib` |
|  -17.9% |    -7 |   3.0% → 2.3% |   39 → 32 | `LIR_Assembler::emit_lir_list`             | `libjvm.dylib` |
|  -17.1% |    -7 |   3.1% → 2.5% |   41 → 34 | `LIR_Assembler::emit_code`                 | `libjvm.dylib` |
|  -85.7% |    -6 |   0.5% → 0.1% |     7 → 1 | `Compile::disconnect_useless_nodes`        | `libjvm.dylib` |
|  -28.6% |    -6 |   1.6% → 1.1% |   21 → 15 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
|  -30.0% |    -6 |   1.5% → 1.0% |   20 → 14 | `PhaseLive::compute`                       | `libjvm.dylib` |
|  -50.0% |    -6 |   0.9% → 0.4% |    12 → 6 | `PhaseOutput::fill_buffer`                 | `libjvm.dylib` |
|  -28.6% |    -6 |   1.6% → 1.1% |   21 → 15 | `LIR_Assembler::emit_slow_case_stubs`      | `libjvm.dylib` |
|  -27.3% |    -6 |   1.7% → 1.2% |   22 → 16 | `Compilation::emit_code_epilog`            | `libjvm.dylib` |
|  -16.7% |    -5 |   2.3% → 1.8% |   30 → 25 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
| removed |    -5 |   0.4% → 0.0% |     5 → 0 | `RegionNode::is_CFG`                       | `libjvm.dylib` |
|  -45.5% |    -5 |   0.8% → 0.4% |    11 → 6 | `ciMethod::ensure_method_data`             | `libjvm.dylib` |
| removed |    -5 |   0.4% → 0.0% |     5 → 0 | `NodeHash::hash_delete`                    | `libjvm.dylib` |

##### Native

| Change | Delta |           % | Samples | Function                                                                                                                                                        | Location        |
| -----: | ----: | ----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| -55.0% |   -11 | 1.5% → 0.7% |  20 → 9 | `G1EvacuateRegionsTask::scan_roots`                                                                                                                             | `libjvm.dylib`  |
| -45.8% |   -11 | 1.8% → 1.0% | 24 → 13 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>`        | `libjvm.dylib`  |
| -66.7% |   -10 | 1.1% → 0.4% |  15 → 5 | `CounterOverflowStub::emit_code`                                                                                                                                | `libjvm.dylib`  |
| -39.1% |    -9 | 1.8% → 1.0% | 23 → 14 | `CodeEmitInfo::record_debug_info`                                                                                                                               | `libjvm.dylib`  |
| -50.0% |    -8 | 1.2% → 0.6% |  16 → 8 | `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` | `libjvm.dylib`  |
| -50.0% |    -8 | 1.2% → 0.6% |  16 → 8 | `G1ScanHRForRegionClosure::scan_heap_roots`                                                                                                                     | `libjvm.dylib`  |
| -50.0% |    -8 | 1.2% → 0.6% |  16 → 8 | `G1ScanHRForRegionClosure::do_heap_region`                                                                                                                      | `libjvm.dylib`  |
| -50.0% |    -8 | 1.2% → 0.6% |  16 → 8 | `G1RemSet::scan_heap_roots`                                                                                                                                     | `libjvm.dylib`  |
| -61.5% |    -8 | 1.0% → 0.4% |  13 → 5 | `G1CMBitMap::iterate`                                                                                                                                           | `libjvm.dylib`  |
| -46.7% |    -7 | 1.1% → 0.6% |  15 → 8 | `G1ScanHRForRegionClosure::scan_memregion`                                                                                                                      | `libjvm.dylib`  |
| -10.4% |    -7 | 5.1% → 4.4% | 67 → 60 | `SystemDictionary::resolve_class_from_stream`                                                                                                                   | `libjvm.dylib`  |
| -10.4% |    -7 | 5.1% → 4.4% | 67 → 60 | `jvm_define_class_common`                                                                                                                                       | `libjvm.dylib`  |
| -10.4% |    -7 | 5.1% → 4.4% | 67 → 60 | `JVM_DefineClassWithSource`                                                                                                                                     | `libjvm.dylib`  |
| -33.3% |    -7 | 1.6% → 1.0% | 21 → 14 | `IRScopeDebugInfo::record_debug_info`                                                                                                                           | `libjvm.dylib`  |
| -50.0% |    -6 | 0.9% → 0.4% |  12 → 6 | `G1CardSet::add_card`                                                                                                                                           | `libjvm.dylib`  |
| -42.9% |    -6 | 1.1% → 0.6% |  14 → 8 | `G1CMTask::do_marking_step`                                                                                                                                     | `libjvm.dylib`  |
| -42.9% |    -6 | 1.1% → 0.6% |  14 → 8 | `G1CMConcurrentMarkingTask::work`                                                                                                                               | `libjvm.dylib`  |
| -22.7% |    -5 | 1.7% → 1.2% | 22 → 17 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object`                                                                                        | `libjvm.dylib`  |
| -10.2% |    -5 | 3.7% → 3.2% | 49 → 44 | `inflate_fast`                                                                                                                                                  | `libzip.dylib`  |
| -83.3% |    -5 | 0.5% → 0.1% |   6 → 1 | `readBytes`                                                                                                                                                     | `libjava.dylib` |

##### Ours

| Change | Delta |           % | Samples | Function                                                                                                                                                            | Location                                                                                                 |
| -----: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| -34.5% |   -10 | 2.2% → 1.4% | 29 → 19 | `processCandidate(Candidate, ResolutionContext, boolean, boolean)`                                                                                                  | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner`                                    |
| -34.5% |   -10 | 2.2% → 1.4% | 29 → 19 | `processCandidate$default(ResolutionStageRunner, Candidate, ResolutionContext, boolean, boolean, int, Object)`                                                      | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner`                                    |
| -35.7% |   -10 | 2.1% → 1.3% | 28 → 18 | `consumeCandidate(TowerGroup, Candidate, ResolutionContext)`                                                                                                        | `org.jetbrains.kotlin.fir.resolve.calls.candidate.CandidateCollector`                                    |
| -35.7% |   -10 | 2.1% → 1.3% | 28 → 18 | `consumeCandidate(FirBasedSymbol, FirExpression, FirExpression, FirScope, boolean, boolean)`                                                                        | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelProcessor`                                       |
| -35.7% |   -10 | 2.1% → 1.3% | 28 → 18 | `consumeCandidate$default(TowerLevelProcessor, FirBasedSymbol, FirExpression, FirExpression, FirScope, boolean, boolean, int, Object)`                              | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelProcessor`                                       |
| -32.1% |    -9 | 2.1% → 1.4% | 28 → 19 | `invokeSuspend(Object)`                                                                                                                                             | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`                 |
| -38.1% |    -8 | 1.6% → 1.0% | 21 → 13 | `consumeCallableCandidate(FirCallableSymbol, CallInfo, TowerLevelProcessor)`                                                                                        | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`                                      |
| -38.1% |    -8 | 1.6% → 1.0% | 21 → 13 | `invoke(Object)`                                                                                                                                                    | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda`                              |
| -57.1% |    -8 | 1.1% → 0.4% |  14 → 6 | `resolveVariableAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)`                                               | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                                                 |
| -57.1% |    -8 | 1.1% → 0.4% |  14 → 6 | `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)`                                              | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`            |
| -41.2% |    -7 | 1.3% → 0.7% | 17 → 10 | `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)`                                                                                    | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
| -41.2% |    -7 | 1.3% → 0.7% | 17 → 10 | `transformPropertyAccessExpression(FirPropertyAccessExpression, Object)`                                                                                            | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
| -38.9% |    -7 | 1.4% → 0.8% | 18 → 11 | `invoke(Object, Object)`                                                                                                                                            | `org.jetbrains.kotlin.fir.resolve.calls.tower.DispatchReceiverMemberScopeTowerLevel$$Lambda`             |
| -63.6% |    -7 | 0.8% → 0.3% |  11 → 4 | `resolveVariableAccessAndSelectCandidateImpl$lambda$0(FirCallResolver, FirQualifiedAccessExpression, FirSimpleNamedReference, boolean, FirElement, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                                                 |
| -63.6% |    -7 | 0.8% → 0.3% |  11 → 4 | `invoke()`                                                                                                                                                          | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver$$Lambda.0x000000800168ed90`                      |
| -63.6% |    -7 | 0.8% → 0.3% |  11 → 4 | `resolveVariableAccessAndSelectCandidateImpl$lambda$1(Lazy)`                                                                                                        | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                                                 |
| -53.8% |    -7 | 1.0% → 0.4% |  13 → 6 | `resolveVariableAccessAndSelectCandidateImpl(FirQualifiedAccessExpression, boolean, ResolutionMode, boolean, FirElement, Function1)`                                | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                                                 |
| -12.8% |    -6 | 3.6% → 3.0% | 47 → 41 | `processLevel(TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)`                                                                                | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`                                   |
| -12.8% |    -6 | 3.6% → 3.0% | 47 → 41 | `access$processLevel(FirBaseTowerResolveTask, TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)`                                                | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`                                   |
| -11.5% |    -6 | 4.0% → 3.4% | 52 → 46 | `runTasks()`                                                                                                                                                        | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`                                       |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                                      | Location                                              |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| removed |    -6 | 0.5% → 0.0% |   6 → 0 | `readBytes(byte[], int, int)`                                                                 | `java.io.FileInputStream`                             |
| removed |    -6 | 0.5% → 0.0% |   6 → 0 | `read(byte[], int, int)`                                                                      | `java.io.FileInputStream`                             |
| removed |    -6 | 0.5% → 0.0% |   6 → 0 | `fill()`                                                                                      | `java.io.BufferedInputStream`                         |
|  -11.1% |    -6 | 4.1% → 3.5% | 54 → 48 | `resumeWith(Object)`                                                                          | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |
|  -40.0% |    -6 | 1.1% → 0.7% |  15 → 9 | `getValue()`                                                                                  | `kotlin.UnsafeLazyImpl`                               |
| removed |    -5 | 0.4% → 0.0% |   5 → 0 | `read(byte[], int, int)`                                                                      | `java.io.BufferedInputStream`                         |
| removed |    -5 | 0.4% → 0.0% |   5 → 0 | `read(byte[], int, int)`                                                                      | `java.io.FilterInputStream`                           |
| removed |    -5 | 0.4% → 0.0% |   5 → 0 | `read(byte[], int, int)`                                                                      | `java.io.PushbackInputStream`                         |
| removed |    -5 | 0.4% → 0.0% |   5 → 0 | `fill()`                                                                                      | `java.util.zip.InflaterInputStream`                   |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `read1(byte[], int, int)`                                                                     | `java.io.BufferedInputStream`                         |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `implRead(byte[], int, int)`                                                                  | `java.io.BufferedInputStream`                         |
|  -30.8% |    -4 | 1.0% → 0.7% |  13 → 9 | `invoke(Class, MethodHandle, String, Object, Object, Class)`                                  | `java.lang.invoke.BootstrapMethodInvoker`             |
|  -30.8% |    -4 | 1.0% → 0.7% |  13 → 9 | `makeSite(MethodHandle, String, MethodType, Object, Class)`                                   | `java.lang.invoke.CallSite`                           |
|  -30.8% |    -4 | 1.0% → 0.7% |  13 → 9 | `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])`                 | `java.lang.invoke.MethodHandleNatives`                |
|  -30.8% |    -4 | 1.0% → 0.7% |  13 → 9 | `linkCallSite(Object, Object, Object, Object, Object, Object[])`                              | `java.lang.invoke.MethodHandleNatives`                |
|   -6.1% |    -4 | 5.0% → 4.5% | 66 → 62 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)`               | `java.lang.ClassLoader`                               |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `doPrivileged(PrivilegedAction)`                                                              | `java.security.AccessController`                      |
|  -57.1% |    -4 | 0.5% → 0.2% |   7 → 3 | `spinInnerClass()`                                                                            | `java.lang.invoke.InnerClassLambdaMetafactory`        |
|  -60.0% |    -3 | 0.4% → 0.1% |   5 → 2 | `hash(Object)`                                                                                | `java.util.HashMap`                                   |
|  -25.0% |    -3 | 0.9% → 0.7% |  12 → 9 | `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` | `java.lang.invoke.LambdaMetafactory`                  |

##### JIT

|  Change | Delta |           % | Samples | Function      | Location    |
| ------: | ----: | ----------: | ------: | ------------- | ----------- |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `zero_blocks` | `<unknown>` |

#### Callers

Callers with the largest change in contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Thread::call_run` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                | Location       |
| -----: | ----: | -----: | --------: | --------------------- | -------------- |
|  +5.0% |   +43 | 100.0% | 868 → 911 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller           | Location                  |
| -----: | ----: | -----: | --------: | ---------------- | ------------------------- |
|  +5.0% |   +43 | 100.0% | 868 → 911 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

| Change | Delta |      % |   Samples | Caller         | Location                  |
| -----: | ----: | -----: | --------: | -------------- | ------------------------- |
|  +4.9% |   +43 | 100.0% | 869 → 912 | `thread_start` | `libsystem_pthread.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller             | Location       |
| -----: | ----: | -----: | --------: | ------------------ | -------------- |
|  +5.4% |   +43 | 100.0% | 795 → 838 | `Thread::call_run` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                          | Location       |
| -----: | ----: | -----: | --------: | ------------------------------- | -------------- |
|  +5.0% |   +40 | 100.0% | 795 → 835 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                                | Location       |
| -----: | ----: | -----: | --------: | ------------------------------------- | -------------- |
|  +3.6% |   +28 | 100.0% | 784 → 812 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|  Change | Delta |           % | Samples | Caller                                         | Location       |
| ------: | ----: | ----------: | ------: | ---------------------------------------------- | -------------- |
|     new |    +3 | 0.0% → 7.5% |   0 → 3 | `LinearScan::build_intervals`                  | `libjvm.dylib` |
|     new |    +2 | 0.0% → 5.0% |   0 → 2 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |
|     new |    +2 | 0.0% → 5.0% |   0 → 2 | `GraphBuilder::invoke`                         | `libjvm.dylib` |
| +100.0% |    +1 |        5.0% |   1 → 2 | `TypeInterfaces::intersection_with`            | `libjvm.dylib` |
| removed |    -1 | 5.0% → 0.0% |   1 → 0 | `PhaseChaitin::build_ifg_virtual`              | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                     | Location       |
| -----: | ----: | -----: | --------: | -------------------------- | -------------- |
|  +8.0% |   +19 | 100.0% | 237 → 256 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                     | Location       |
| -----: | ----: | -----: | --------: | -------------------------- | -------------- |
|  +7.6% |   +18 | 100.0% | 238 → 256 | `Compiler::compile_method` | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                                     | Location       |
| -----: | ----: | -----: | --------: | ------------------------------------------ | -------------- |
|  +7.5% |   +18 | 100.0% | 239 → 257 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                        | Location       |
| -----: | ----: | -----: | --------: | ----------------------------- | -------------- |
|  +8.5% |   +18 | 100.0% | 212 → 230 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                     | Location       |
| -----: | ----: | -----: | ------: | -------------------------- | -------------- |
| +35.4% |   +17 | 100.0% | 48 → 65 | `ParseGenerator::generate` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                 | Location       |
| ------: | ----: | -------------: | ------: | -------------------------------------- | -------------- |
|  +41.3% |   +19 | 95.8% → 100.0% | 46 → 65 | `Compile::Compile`                     | `libjvm.dylib` |
|  +34.6% |    +9 |  54.2% → 53.8% | 26 → 35 | `PredictedCallGenerator::generate`     | `libjvm.dylib` |
|  +30.8% |    +8 |  54.2% → 52.3% | 26 → 34 | `Parse::do_call`                       | `libjvm.dylib` |
| removed |    -2 |    4.2% → 0.0% |   2 → 0 | `CallGenerator::do_late_inline_helper` | `libjvm.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|  Change | Delta |      % | Samples | Caller                  | Location       |
| ------: | ----: | -----: | ------: | ----------------------- | -------------- |
| +283.3% |   +17 | 100.0% |  6 → 23 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                  | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
| +214.3% |   +15 | 87.5% → 88.0% |  7 → 22 | `Monitor::wait`                         | `libjvm.dylib` |
| +200.0% |    +2 | 12.5% → 12.0% |   1 → 3 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change | Delta |      % |   Samples | Caller                                                                                                                                        | Location                                                |
| -----: | ----: | -----: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|  +5.1% |   +17 | 100.0% | 336 → 353 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change | Delta |      % |   Samples | Caller                                                         | Location                                                |
| -----: | ----: | -----: | --------: | -------------------------------------------------------------- | ------------------------------------------------------- |
|  +5.1% |   +17 | 100.0% | 336 → 353 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change | Delta |      % |   Samples | Caller                                                                | Location                                     |
| -----: | ----: | -----: | --------: | --------------------------------------------------------------------- | -------------------------------------------- |
|  +5.1% |   +17 | 100.0% | 336 → 353 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

| Change | Delta |      % |   Samples | Caller                              | Location                                          |
| -----: | ----: | -----: | --------: | ----------------------------------- | ------------------------------------------------- |
|  +5.1% |   +17 | 100.0% | 333 → 350 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `Compilation::build_hir` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                             | Location       |
| -----: | ----: | -----: | ------: | ---------------------------------- | -------------- |
| +23.6% |   +17 | 100.0% | 72 → 89 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                             | Location       |
| -----: | ----: | -----: | ------: | ---------------------------------- | -------------- |
| +18.9% |   +14 | 100.0% | 74 → 88 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `IntervalWalker::walk_to` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|  +86.7% |   +13 | 93.8% → 93.3% | 15 → 28 | `LinearScan::allocate_registers` | `libjvm.dylib` |
| +500.0% |    +5 |  6.3% → 20.0% |   1 → 6 | `IntervalWalker::walk_to`        | `libjvm.dylib` |
| +100.0% |    +1 |   6.3% → 6.7% |   1 → 2 | `LinearScan::compute_oop_map`    | `libjvm.dylib` |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                  | Location       |
| -----: | ----: | -----: | ------: | ----------------------- | -------------- |
| +25.0% |   +14 | 100.0% | 56 → 70 | `Compilation::emit_lir` | `libjvm.dylib` |

##### `LinearScan::allocate_registers` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                       | Location       |
| -----: | ----: | -----: | ------: | ---------------------------- | -------------- |
| +86.7% |   +13 | 100.0% | 15 → 28 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `Matcher::match_tree` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                | Location       |
| ------: | ----: | ------------: | ------: | --------------------- | -------------- |
|  +50.0% |    +9 | 94.7% → 90.0% | 18 → 27 | `Matcher::xform`      | `libjvm.dylib` |
| +100.0% |    +1 |   5.3% → 6.7% |   1 → 2 | `Matcher::match_sfpt` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 3.3% |   0 → 1 | `PhaseCFG::PhaseCFG`  | `libjvm.dylib` |

##### `ciBytecodeStream::get_field` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                  | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
| +166.7% |    +5 | 60.0% → 50.0% |   3 → 8 | `GraphBuilder::access_field`            | `libjvm.dylib` |
| +300.0% |    +3 | 20.0% → 25.0% |   1 → 4 | `Parse::do_field_access`                | `libjvm.dylib` |
| +200.0% |    +2 | 20.0% → 18.8% |   1 → 3 | `ciTypeFlow::StateVector::do_getstatic` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 6.3% |   0 → 1 | `ciTypeFlow::StateVector::do_putfield`  | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------- | -------------- |
| +90.9% |   +10 | 100.0% | 11 → 21 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                               | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| +38.5% |   +10 | 100.0% | 26 → 36 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller           | Location       |
| -----: | ----: | -----: | ------: | ---------------- | -------------- |
| +29.4% |   +10 | 100.0% | 34 → 44 | `Matcher::match` | `libjvm.dylib` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller             | Location       |
| -----: | ----: | -----: | ------: | ------------------ | -------------- |
| +16.4% |   +10 | 100.0% | 61 → 71 | `IRScope::IRScope` | `libjvm.dylib` |

##### `Matcher::Label_Root` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                | Location       |
| ------: | ----: | ------------: | ------: | --------------------- | -------------- |
| +128.6% |    +9 |        100.0% |  7 → 16 | `Matcher::match_tree` | `libjvm.dylib` |
| +300.0% |    +9 | 42.9% → 75.0% |  3 → 12 | `Matcher::Label_Root` | `libjvm.dylib` |

##### `LinearScanWalker::activate_current` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                    | Location       |
| -----: | ----: | -----: | ------: | ------------------------- | -------------- |
| +75.0% |    +9 | 100.0% | 12 → 21 | `IntervalWalker::walk_to` | `libjvm.dylib` |

##### `PhaseIterGVN::add_users_to_worklist` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                                | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------------- | -------------- |
|    new |    +3 | 0.0% → 33.3% |   0 → 3 | `PhaseIterGVN::transform_old`         | `libjvm.dylib` |
|    new |    +3 | 0.0% → 33.3% |   0 → 3 | `PhaseIterGVN::PhaseIterGVN`          | `libjvm.dylib` |
|    new |    +1 | 0.0% → 11.1% |   0 → 1 | `IfNode::dominated_by`                | `libjvm.dylib` |
|    new |    +1 | 0.0% → 11.1% |   0 → 1 | `PhaseIterGVN::add_users_to_worklist` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 11.1% |   0 → 1 | `Node::remove_dead_region`            | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                       | Location       |
| -----: | ----: | -----: | --------: | ---------------------------- | -------------- |
|  +1.5% |    +8 | 100.0% | 538 → 546 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                 | Location       |
| -----: | ----: | -----: | ------: | ---------------------- | -------------- |
| +32.6% |   +15 | 100.0% | 46 → 61 | `Parse::do_all_blocks` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                          | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------- | -------------- |
| +200.0% |   +14 | 100.0% → 95.5% |  7 → 21 | `CompileQueue::get`             | `libjvm.dylib` |
|     new |    +1 |    0.0% → 4.5% |   0 → 1 | `VMThread::wait_until_executed` | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                | Location       |
| -----: | ----: | -----: | ------: | --------------------- | -------------- |
| +33.3% |   +14 | 100.0% | 42 → 56 | `Parse::do_one_block` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller         | Location       |
| -----: | ----: | -----: | ------: | -------------- | -------------- |
| +29.8% |   +14 | 100.0% | 47 → 61 | `Parse::Parse` | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                             | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
| +33.3% |   +10 |        100.0% | 30 → 40 | `Parse::do_call`                   | `libjvm.dylib` |
|  +7.7% |    +1 | 43.3% → 35.0% | 13 → 14 | `PredictedCallGenerator::generate` | `libjvm.dylib` |

##### `IRScope::IRScope` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller   | Location       |
| -----: | ----: | -----: | ------: | -------- | -------------- |
| +16.4% |   +10 | 100.0% | 61 → 71 | `IR::IR` | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                   | Location       |
| -----: | ----: | -----: | ------: | ------------------------ | -------------- |
| +16.4% |   +10 | 100.0% | 61 → 71 | `Compilation::build_hir` | `libjvm.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller                              | Location                  |
| -----: | ----: | -----: | ------: | ----------------------------------- | ------------------------- |
| +56.3% |    +9 | 100.0% | 16 → 25 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `_pthread_mutex_firstfit_lock_slow` (`libsystem_pthread.dylib`)

|  Change | Delta |             % | Samples | Caller                                | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------------------- | ------------------------- |
| +100.0% |    +6 | 37.5% → 48.0% |  6 → 12 | `Mutex::lock`                         | `libjvm.dylib`            |
|  +83.3% |    +5 | 37.5% → 44.0% |  6 → 11 | `ThreadCritical::ThreadCritical`      | `libjvm.dylib`            |
|  -50.0% |    -1 |  12.5% → 4.0% |   2 → 1 | `_pthread_cond_wait`                  | `libsystem_pthread.dylib` |
|  -50.0% |    -1 |  12.5% → 4.0% |   2 → 1 | `Mutex::lock_without_safepoint_check` | `libjvm.dylib`            |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

| Change | Delta |      % |   Samples | Caller                                                     | Location                                                |
| -----: | ----: | -----: | --------: | ---------------------------------------------------------- | ------------------------------------------------------- |
|  +5.1% |   +17 | 100.0% | 333 → 350 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

| Change | Delta |           % |   Samples | Caller                                                                | Location                                                          |
| -----: | ----: | ----------: | --------: | --------------------------------------------------------------------- | ----------------------------------------------------------------- |
|  +5.1% |   +17 |      100.0% | 333 → 350 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`            | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase`       |
| +40.0% |    +2 | 1.5% → 2.0% |     5 → 7 | `runPhase(NamedCompilerPhase, Object, boolean)`                       | `org.jetbrains.kotlin.backend.common.phaser.PhaseEngine`          |
|  +5.3% |    +1 |        5.7% |   19 → 20 | `invoke(PhaseConfig, PhaserState, LoweringContext, IrModuleFragment)` | `org.jetbrains.kotlin.backend.common.phaser.PerformByIrFilePhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`)

| Change | Delta |      % |   Samples | Caller                                                               | Location                                             |
| -----: | ----: | -----: | --------: | -------------------------------------------------------------------- | ---------------------------------------------------- |
|  +5.1% |   +17 | 100.0% | 333 → 350 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt` |

##### `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`)

| Change | Delta |      % |   Samples | Caller                                         | Location                                                |
| -----: | ----: | -----: | --------: | ---------------------------------------------- | ------------------------------------------------------- |
|  +5.1% |   +17 | 100.0% | 333 → 350 | `runPhasedPipeline(ArgumentsPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change | Delta |      % |   Samples | Caller                                                                 | Location                                     |
| -----: | ----: | -----: | --------: | ---------------------------------------------------------------------- | -------------------------------------------- |
|  +4.7% |   +16 | 100.0% | 338 → 354 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change | Delta |      % |   Samples | Caller                                                          | Location                                      |
| -----: | ----: | -----: | --------: | --------------------------------------------------------------- | --------------------------------------------- |
|  +4.7% |   +16 | 100.0% | 338 → 354 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |      % |   Samples | Caller                                                      | Location                                      |
| -----: | ----: | -----: | --------: | ----------------------------------------------------------- | --------------------------------------------- |
|  +4.7% |   +16 | 100.0% | 338 → 354 | `exec(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change | Delta |      % |   Samples | Caller                                                                                              | Location                                                |
| -----: | ----: | -----: | --------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|  +4.8% |   +16 | 100.0% | 335 → 351 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

| Change | Delta |      % |   Samples | Caller           | Location                                     |
| -----: | ----: | -----: | --------: | ---------------- | -------------------------------------------- |
|  +3.9% |   +14 | 100.0% | 355 → 369 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change | Delta |      % |   Samples | Caller                         | Location                                             |
| -----: | ----: | -----: | --------: | ------------------------------ | ---------------------------------------------------- |
|  +3.9% |   +14 | 100.0% | 355 → 369 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000008001008400` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |      % |   Samples | Caller                                                   | Location                                      |
| -----: | ----: | -----: | --------: | -------------------------------------------------------- | --------------------------------------------- |
|  +4.0% |   +14 | 100.0% | 347 → 361 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change | Delta |      % |   Samples | Caller                          | Location                                                |
| -----: | ----: | -----: | --------: | ------------------------------- | ------------------------------------------------------- |
|  +3.7% |   +13 | 100.0% | 354 → 367 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change | Delta |      % |   Samples | Caller           | Location                                               |
| -----: | ----: | -----: | --------: | ---------------- | ------------------------------------------------------ |
|  +3.7% |   +13 | 100.0% | 354 → 367 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |      % |   Samples | Caller                                         | Location                                      |
| -----: | ----: | -----: | --------: | ---------------------------------------------- | --------------------------------------------- |
|  +3.7% |   +13 | 100.0% | 353 → 366 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |      % |   Samples | Caller                                                 | Location                                                |
| -----: | ----: | -----: | --------: | ------------------------------------------------------ | ------------------------------------------------------- |
|  +3.7% |   +13 | 100.0% | 353 → 366 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change | Delta |      % |   Samples | Caller                                                                                             | Location                                                |
| -----: | ----: | -----: | --------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|  +3.7% |   +13 | 100.0% | 353 → 366 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008001008400`)

| Change | Delta |      % |   Samples | Caller                           | Location                                            |
| -----: | ----: | -----: | --------: | -------------------------------- | --------------------------------------------------- |
|  +3.9% |   +14 | 100.0% | 355 → 369 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000008001009800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000008001009800`)

| Change | Delta |      % |   Samples | Caller                                           | Location                           |
| -----: | ----: | -----: | --------: | ------------------------------------------------ | ---------------------------------- |
|  +3.9% |   +14 | 100.0% | 355 → 369 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |      % |   Samples | Caller                         | Location                                          |
| -----: | ----: | -----: | --------: | ------------------------------ | ------------------------------------------------- |
|  +3.9% |   +14 | 100.0% | 355 → 369 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % |   Samples | Caller                     | Location                                          |
| -----: | ----: | -----: | --------: | -------------------------- | ------------------------------------------------- |
|  +3.9% |   +14 | 100.0% | 355 → 369 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % |   Samples | Caller                     | Location                   |
| -----: | ----: | -----: | --------: | -------------------------- | -------------------------- |
|  +3.9% |   +14 | 100.0% | 355 → 369 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change | Delta |           % |   Samples | Caller                                                                            | Location                                                                                  |
| -----: | ----: | ----------: | --------: | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
|  +3.9% |   +14 |      100.0% | 355 → 369 | `run(String[])`                                                                   | `org.jetbrains.kotlin.preloading.Preloader`                                               |
|    new |    +1 | 0.0% → 0.3% |     0 → 1 | `parsePreprocessedCommandLineArguments(List, CommonToolArguments, Lazy, boolean)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt`                   |
|    new |    +1 | 0.0% → 0.3% |     0 → 1 | `loadGetRecordComponents(Class)`                                                  | `kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure.Java16SealedRecordLoader` |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

|  Change | Delta |             % | Samples | Caller                              | Location                                                           |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ------------------------------------------------------------------ |
| +200.0% |    +4 | 18.2% → 33.3% |   2 → 6 | `getSuperTypeRefs()`                | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass`          |
|     new |    +2 |  0.0% → 11.1% |   0 → 2 | `getAnnotations()`                  | `org.jetbrains.kotlin.ir.descriptors.IrBasedDeclarationDescriptor` |
|  -50.0% |    -1 |  18.2% → 5.6% |   2 → 1 | `getDefaultPerformanceManager()`    | `org.jetbrains.kotlin.cli.common.CLICompiler`                      |
| removed |    -1 |   9.1% → 0.0% |   1 → 0 | `getConfiguredExtensionFactories()` | `org.jetbrains.kotlin.fir.extensions.FirExtensionRegistrar`        |
|  -50.0% |    -1 |  18.2% → 5.6% |   2 → 1 | `getInstance()`                     | `org.jetbrains.kotlin.builtins.DefaultBuiltIns$Companion`          |

##### `generateCustomizedCode(LambdaForm, MethodType)` (`java.lang.invoke.InvokerBytecodeGenerator`)

|  Change | Delta |      % | Samples | Caller                | Location                      |
| ------: | ----: | -----: | ------: | --------------------- | ----------------------------- |
| +250.0% |    +5 | 100.0% |   2 → 7 | `compileToBytecode()` | `java.lang.invoke.LambdaForm` |

##### `compileToBytecode()` (`java.lang.invoke.LambdaForm`)

|  Change | Delta |              % | Samples | Caller                                       | Location                              |
| ------: | ----: | -------------: | ------: | -------------------------------------------- | ------------------------------------- |
| +150.0% |    +3 | 100.0% → 71.4% |   2 → 5 | `makePreparedLambdaForm(MethodType, int)`    | `java.lang.invoke.DirectMethodHandle` |
|     new |    +1 |   0.0% → 14.3% |   0 → 1 | `prepare()`                                  | `java.lang.invoke.LambdaForm`         |
|     new |    +1 |   0.0% → 14.3% |   0 → 1 | `invokeHandleForm(MethodType, boolean, int)` | `java.lang.invoke.Invokers`           |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|  Change | Delta |      % | Samples | Caller                | Location            |
| ------: | ----: | -----: | ------: | --------------------- | ------------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `put(Object, Object)` | `java.util.HashMap` |

##### `generateCustomizedCodeBytes()` (`java.lang.invoke.InvokerBytecodeGenerator`)

|  Change | Delta |      % | Samples | Caller                                           | Location                                    |
| ------: | ----: | -----: | ------: | ------------------------------------------------ | ------------------------------------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `generateCustomizedCode(LambdaForm, MethodType)` | `java.lang.invoke.InvokerBytecodeGenerator` |

##### `makePreparedLambdaForm(MethodType, int)` (`java.lang.invoke.DirectMethodHandle`)

|  Change | Delta |      % | Samples | Caller                                | Location                              |
| ------: | ----: | -----: | ------: | ------------------------------------- | ------------------------------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `preparedLambdaForm(MethodType, int)` | `java.lang.invoke.DirectMethodHandle` |

##### `preparedLambdaForm(MethodType, int)` (`java.lang.invoke.DirectMethodHandle`)

|  Change | Delta |      % | Samples | Caller                                    | Location                              |
| ------: | ----: | -----: | ------: | ----------------------------------------- | ------------------------------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `preparedLambdaForm(MemberName, boolean)` | `java.lang.invoke.DirectMethodHandle` |

##### `preparedLambdaForm(MemberName, boolean)` (`java.lang.invoke.DirectMethodHandle`)

|  Change | Delta |              % | Samples | Caller                                 | Location                              |
| ------: | ----: | -------------: | ------: | -------------------------------------- | ------------------------------------- |
| +100.0% |    +2 | 100.0% → 80.0% |   2 → 4 | `preparedLambdaForm(MemberName)`       | `java.lang.invoke.DirectMethodHandle` |
|     new |    +1 |   0.0% → 20.0% |   0 → 1 | `make(byte, Class, MemberName, Class)` | `java.lang.invoke.DirectMethodHandle` |

##### `clinit(ClassWriter, String, List)` (`java.lang.invoke.InvokerBytecodeGenerator`)

| Change | Delta |             % | Samples | Caller                          | Location                                    |
| -----: | ----: | ------------: | ------: | ------------------------------- | ------------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `generateCustomizedCodeBytes()` | `java.lang.invoke.InvokerBytecodeGenerator` |

##### `getPackageName()` (`java.lang.Class`)

| Change | Delta |             % | Samples | Caller                                     | Location                |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | ----------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `postDefineClass(Class, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `postDefineClass(Class, ProtectionDomain)` (`java.lang.ClassLoader`)

| Change | Delta |             % | Samples | Caller                                                    | Location                |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------- | ----------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `calcNext()` (`kotlin.sequences.FilteringSequence$iterator$1`)

| Change | Delta |             % | Samples | Caller      | Location                                        |
| -----: | ----: | ------------: | ------: | ----------- | ----------------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `hasNext()` | `kotlin.sequences.FilteringSequence$iterator$1` |

##### `hasNext()` (`kotlin.sequences.FilteringSequence$iterator$1`)

| Change | Delta |            % | Samples | Caller                                           | Location                                                     |
| -----: | ----: | -----------: | ------: | ------------------------------------------------ | ------------------------------------------------------------ |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `computeDefaultRootModules(CliJavaModuleFinder)` | `org.jetbrains.kotlin.cli.jvm.compiler.CliJavaModuleUtilsKt` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `firstOrNull(Sequence)`                          | `kotlin.sequences.SequencesKt___SequencesKt`                 |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `toList(Sequence)`                               | `kotlin.sequences.SequencesKt___SequencesKt`                 |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

| Change | Delta |      % | Samples | Caller                   | Location                            |
| -----: | ----: | -----: | ------: | ------------------------ | ----------------------------------- |
|  +3.2% |    +2 | 100.0% | 62 → 64 | `read(byte[], int, int)` | `java.util.zip.InflaterInputStream` |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                                                                                                                                         | Location                                                           |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `copy$default(FirDeclarationStatus, Visibility, Modality, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, ReturnValueStatus, int, Object)` | `org.jetbrains.kotlin.fir.UtilsKt`                                 |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `stringHashCode(CharSequence)`                                                                                                                                                                                                                                                 | `com.intellij.openapi.util.text.StringUtil`                        |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `equals(Object)`                                                                                                                                                                                                                                                               | `org.jetbrains.kotlin.load.java.structure.impl.JavaElementImpl`    |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `loadFunction$default(FirMemberDeserializer, ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin, int, Object)`                                                                                                                                            | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`   |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `prepareImplicitArgument(ConeResolutionAtom, ConeKotlinType, FirSession)`                                                                                                                                                                                                      | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStagesKt` |

##### `I2C/C2I adapters` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                       | Location                                                                                   |
| ------: | ----: | -----------: | ------: | -------------------------------------------- | ------------------------------------------------------------------------------------------ |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `getType(int)`                               | `java.lang.Character`                                                                      |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `computeIfAbsent(Object, Function)`          | `java.util.concurrent.ConcurrentHashMap`                                                   |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `get(int)`                                   | `org.jetbrains.kotlin.metadata.deserialization.TypeTable`                                  |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `<init>(CheckerContext, DiagnosticReporter)` | `org.jetbrains.kotlin.fir.analysis.checkers.extra.FirUnusedExpressionChecker$UsageVisitor` |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `visitThrow(IrThrow, Object)`                | `org.jetbrains.kotlin.ir.visitors.IrTransformer`                                           |

##### `vtable stub` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                          | Location                                                  |
| -----: | ----: | ------------: | ------: | ------------------------------- | --------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getHasNoInfer(ConeKotlinType)` | `org.jetbrains.kotlin.fir.types.CompilerConeAttributesKt` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller              | Location       |
| -----: | ----: | -----: | --------: | ------------------- | -------------- |
| -16.0% |   -27 | 100.0% | 169 → 142 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                     | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
| -29.7% |   -11 | 59.7% → 54.2% | 37 → 26 | `Compile::Optimize`                        | `libjvm.dylib` |
| -42.9% |    -3 |  11.3% → 8.3% |   7 → 4 | `PhaseMacroExpand::expand_macro_nodes`     | `libjvm.dylib` |
| +50.0% |    +1 |   3.2% → 6.3% |   2 → 3 | `Compile::process_for_post_loop_opts_igvn` | `libjvm.dylib` |
|  -7.1% |    -1 | 22.6% → 27.1% | 14 → 13 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

| Change | Delta |           % | Samples | Caller                   | Location       |
| -----: | ----: | ----------: | ------: | ------------------------ | -------------- |
| -22.0% |   -13 |      100.0% | 59 → 46 | `PhaseIterGVN::optimize` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 2.2% |   0 → 1 | `split_if`               | `libjvm.dylib` |

##### `Compilation::emit_code_body` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                             | Location       |
| -----: | ----: | -----: | ------: | ---------------------------------- | -------------- |
| -20.6% |   -13 | 100.0% | 63 → 50 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `G1EvacuateRegionsTask::scan_roots` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -55.0% |   -11 | 100.0% |  20 → 9 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller             | Location       |
| -----: | ----: | -----: | --------: | ------------------ | -------------- |
|  -3.9% |   -11 | 100.0% | 281 → 270 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -34.4% |   -11 | 100.0% | 32 → 21 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                             | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | -------------- |
|  -29.4% |    -5 | 70.8% → 92.3% | 17 → 12 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
|  -83.3% |    -5 |  25.0% → 7.7% |   6 → 1 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |
| removed |    -1 |   4.2% → 0.0% |   1 → 0 | `LIR_Assembler::record_non_safepoint_debug_info`   | `libjvm.dylib` |

##### `processCandidate(Candidate, ResolutionContext, boolean, boolean)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner`)

| Change | Delta |      % | Samples | Caller                                                                                                         | Location                                                              |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| -34.5% |   -10 | 100.0% | 29 → 19 | `processCandidate$default(ResolutionStageRunner, Candidate, ResolutionContext, boolean, boolean, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner` |

##### `processCandidate$default(ResolutionStageRunner, Candidate, ResolutionContext, boolean, boolean, int, Object)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner`)

| Change | Delta |             % | Samples | Caller                                                       | Location                                                              |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------ | --------------------------------------------------------------------- |
| -35.7% |   -10 | 96.6% → 94.7% | 28 → 18 | `consumeCandidate(TowerGroup, Candidate, ResolutionContext)` | `org.jetbrains.kotlin.fir.resolve.calls.candidate.CandidateCollector` |

##### `consumeCandidate(TowerGroup, Candidate, ResolutionContext)` (`org.jetbrains.kotlin.fir.resolve.calls.candidate.CandidateCollector`)

| Change | Delta |      % | Samples | Caller                                                                                       | Location                                                           |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| -35.7% |   -10 | 100.0% | 28 → 18 | `consumeCandidate(FirBasedSymbol, FirExpression, FirExpression, FirScope, boolean, boolean)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelProcessor` |

##### `consumeCandidate(FirBasedSymbol, FirExpression, FirExpression, FirScope, boolean, boolean)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelProcessor`)

| Change | Delta |      % | Samples | Caller                                                                                                                                 | Location                                                           |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| -35.7% |   -10 | 100.0% | 28 → 18 | `consumeCandidate$default(TowerLevelProcessor, FirBasedSymbol, FirExpression, FirExpression, FirScope, boolean, boolean, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelProcessor` |

##### `consumeCandidate$default(TowerLevelProcessor, FirBasedSymbol, FirExpression, FirExpression, FirScope, boolean, boolean, int, Object)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelProcessor`)

| Change | Delta |             % | Samples | Caller                                                                       | Location                                                                                                                         |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| -36.8% |    -7 | 67.9% → 66.7% | 19 → 12 | `consumeCallableCandidate(FirCallableSymbol, CallInfo, TowerLevelProcessor)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`                                                              |
| -30.0% |    -3 | 35.7% → 38.9% |  10 → 7 | `invoke(FirCallableSymbol)`                                                  | `org.jetbrains.kotlin.fir.resolve.calls.tower.DispatchReceiverMemberScopeTowerLevel$processMembers$$inlined$processCandidates$1` |

##### `CounterOverflowStub::emit_code` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------- | -------------- |
| -66.7% |   -10 | 100.0% |  15 → 5 | `LIR_Assembler::emit_slow_case_stubs` | `libjvm.dylib` |

##### `IfNode::Ideal_common` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller          | Location       |
| -----: | ----: | -----: | ------: | --------------- | -------------- |
| -69.2% |    -9 | 100.0% |  13 → 4 | `IfNode::Ideal` | `libjvm.dylib` |

##### `IfNode::Ideal` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                        | Location       |
| -----: | ----: | -----: | ------: | ----------------------------- | -------------- |
| -64.3% |    -9 | 100.0% |  14 → 5 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |

##### `invokeSuspend(Object)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`)

| Change | Delta |      % | Samples | Caller               | Location                                              |
| -----: | ----: | -----: | ------: | -------------------- | ----------------------------------------------------- |
| -32.1% |    -9 | 100.0% | 28 → 19 | `resumeWith(Object)` | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |

##### `CodeEmitInfo::record_debug_info` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                     | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------------------ | -------------- |
|  -36.4% |    -8 | 95.7% → 100.0% | 22 → 14 | `LIR_Assembler::add_call_info`             | `libjvm.dylib` |
| removed |    -1 |    4.3% → 0.0% |   1 → 0 | `LIR_Assembler::add_debug_info_for_branch` | `libjvm.dylib` |

##### `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                      | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------------- | -------------- |
| -50.0% |    -8 | 100.0% |  16 → 8 | `G1ScanHRForRegionClosure::scan_heap_roots` | `libjvm.dylib` |

##### `G1ScanHRForRegionClosure::scan_heap_roots` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                     | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------------ | -------------- |
| -50.0% |    -8 | 100.0% |  16 → 8 | `G1ScanHRForRegionClosure::do_heap_region` | `libjvm.dylib` |

##### `LIR_Assembler::emit_lir_list` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                     | Location       |
| -----: | ----: | -----: | ------: | -------------------------- | -------------- |
| -17.9% |    -7 | 100.0% | 39 → 32 | `LIR_Assembler::emit_code` | `libjvm.dylib` |

##### `LIR_Assembler::emit_code` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                             | Location       |
| ------: | ----: | -------------: | ------: | ---------------------------------- | -------------- |
|  -15.0% |    -6 | 97.6% → 100.0% | 40 → 34 | `Compilation::emit_code_body`      | `libjvm.dylib` |
| removed |    -1 |    2.4% → 0.0% |   1 → 0 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `Compile::disconnect_useless_nodes` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                   | Location       |
| ------: | ----: | -------------: | ------: | ---------------------------------------- | -------------- |
| removed |    -3 |   42.9% → 0.0% |   3 → 0 | `PhaseCCP::transform`                    | `libjvm.dylib` |
|  -75.0% |    -3 | 57.1% → 100.0% |   4 → 1 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

##### `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -28.6% |    -6 | 100.0% | 21 → 15 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -30.0% |    -6 | 100.0% | 20 → 14 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseOutput::fill_buffer` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                | Location       |
| -----: | ----: | -----: | ------: | --------------------- | -------------- |
| -50.0% |    -6 | 100.0% |  12 → 6 | `PhaseOutput::Output` | `libjvm.dylib` |

##### `LIR_Assembler::emit_slow_case_stubs` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                          | Location       |
| -----: | ----: | -----: | ------: | ------------------------------- | -------------- |
| -28.6% |    -6 | 100.0% | 21 → 15 | `Compilation::emit_code_epilog` | `libjvm.dylib` |

##### `Compilation::emit_code_epilog` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                        | Location       |
| -----: | ----: | -----: | ------: | ----------------------------- | -------------- |
| -27.3% |    -6 | 100.0% | 22 → 16 | `Compilation::emit_code_body` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -16.7% |    -5 | 100.0% | 30 → 25 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `RegionNode::is_CFG` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                               | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------ | -------------- |
| removed |    -4 | 80.0% → 0.0% |   4 → 0 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `ProjNode::is_uncommon_trap_proj`    | `libjvm.dylib` |

##### `ciMethod::ensure_method_data` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                          | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------- | -------------- |
|  -50.0% |    -4 | 72.7% → 66.7% |   8 → 4 | `GraphBuilder::try_inline_full` | `libjvm.dylib` |
| removed |    -1 |   9.1% → 0.0% |   1 → 0 | `Compile::Compile`              | `libjvm.dylib` |
|  -25.0% |    -1 | 36.4% → 50.0% |   4 → 3 | `ciMethod::ensure_method_data`  | `libjvm.dylib` |

##### `NodeHash::hash_delete` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                              | Location       |
| ------: | ----: | -----------: | ------: | ----------------------------------- | -------------- |
| removed |    -3 | 60.0% → 0.0% |   3 → 0 | `PhaseIdealLoop::do_split_if`       | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `RegionNode::Ideal`                 | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `PhaseIterGVN::rehash_node_delayed` | `libjvm.dylib` |

##### `G1ScanHRForRegionClosure::do_heap_region` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                      | Location       |
| -----: | ----: | -----: | ------: | --------------------------- | -------------- |
| -50.0% |    -8 | 100.0% |  16 → 8 | `G1RemSet::scan_heap_roots` | `libjvm.dylib` |

##### `G1RemSet::scan_heap_roots` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                              | Location       |
| -----: | ----: | -----: | ------: | ----------------------------------- | -------------- |
| -50.0% |    -8 | 100.0% |  16 → 8 | `G1EvacuateRegionsTask::scan_roots` | `libjvm.dylib` |

##### `G1CMBitMap::iterate` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                      | Location       |
| -----: | ----: | -----: | ------: | --------------------------- | -------------- |
| -61.5% |    -8 | 100.0% |  13 → 5 | `G1CMTask::do_marking_step` | `libjvm.dylib` |

##### `G1ScanHRForRegionClosure::scan_memregion` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                                                                                                                                          | Location       |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| -46.7% |    -7 | 100.0% |  15 → 8 | `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` | `libjvm.dylib` |

##### `SystemDictionary::resolve_class_from_stream` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                    | Location       |
| -----: | ----: | -----: | ------: | ------------------------- | -------------- |
| -10.4% |    -7 | 100.0% | 67 → 60 | `jvm_define_class_common` | `libjvm.dylib` |

##### `jvm_define_class_common` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                      | Location       |
| -----: | ----: | -----: | ------: | --------------------------- | -------------- |
| -10.4% |    -7 | 100.0% | 67 → 60 | `JVM_DefineClassWithSource` | `libjvm.dylib` |

##### `JVM_DefineClassWithSource` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                    | Location        |
| ------: | ----: | -------------: | ------: | ----------------------------------------- | --------------- |
|   -9.1% |    -6 | 98.5% → 100.0% | 66 → 60 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib` |
| removed |    -1 |    1.5% → 0.0% |   1 → 0 | `Java_java_lang_ClassLoader_defineClass2` | `libjava.dylib` |

##### `IRScopeDebugInfo::record_debug_info` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------- | -------------- |
| -50.0% |    -7 | 66.7% → 50.0% |  14 → 7 | `IRScopeDebugInfo::record_debug_info` | `libjvm.dylib` |
| -33.3% |    -7 |        100.0% | 21 → 14 | `CodeEmitInfo::record_debug_info`     | `libjvm.dylib` |

##### `G1CardSet::add_card` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                                                                                 | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------------------------------------------------------ | -------------- |
|  -45.5% |    -5 | 91.7% → 100.0% |  11 → 6 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib` |
| removed |    -1 |    8.3% → 0.0% |   1 → 0 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` | `libjvm.dylib` |
| removed |    -1 |    8.3% → 0.0% |   1 → 0 | `G1CardSet::add_to_howl`                                                                               | `libjvm.dylib` |
|     new |    +1 |   0.0% → 16.7% |   0 → 1 | `G1CardSet::transfer_cards_in_howl`                                                                    | `libjvm.dylib` |

##### `G1CMTask::do_marking_step` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -42.9% |    -6 | 100.0% |  14 → 8 | `G1CMConcurrentMarkingTask::work` | `libjvm.dylib` |

##### `G1CMConcurrentMarkingTask::work` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller              | Location       |
| -----: | ----: | -----: | ------: | ------------------- | -------------- |
| -42.9% |    -6 | 100.0% |  14 → 8 | `WorkerThread::run` | `libjvm.dylib` |

##### `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                                                             | Location       |
| ------: | ----: | -------------: | ------: | ---------------------------------------------------------------------------------- | -------------- |
| removed |    -4 |   18.2% → 0.0% |   4 → 0 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region` | `libjvm.dylib` |
|   -5.6% |    -1 | 81.8% → 100.0% | 18 → 17 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb`  | `libjvm.dylib` |

##### `inflate_fast` (`libzip.dylib`)

| Change | Delta |      % | Samples | Caller                                          | Location       |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | -------------- |
| -10.2% |    -5 | 100.0% | 49 → 44 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `readBytes` (`libjava.dylib`)

|  Change | Delta |             % | Samples | Caller                         | Location                   |
| ------: | ----: | ------------: | ------: | ------------------------------ | -------------------------- |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `readBytes(byte[], int, int)`  | `java.io.FileInputStream`  |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `readBytes0(byte[], int, int)` | `java.io.RandomAccessFile` |

##### `consumeCallableCandidate(FirCallableSymbol, CallInfo, TowerLevelProcessor)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`)

| Change | Delta |             % | Samples | Caller                                                                                                                                                | Location                                                            |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| -33.3% |    -6 | 85.7% → 92.3% | 18 → 12 | `processFunctionsByName$lambda$0(FirLookupTrackerComponent, CallInfo, Ref$BooleanRef, ScopeBasedTowerLevel, TowerLevelProcessor, FirCallableSymbol)`  | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel` |
| -66.7% |    -2 |  14.3% → 7.7% |   3 → 1 | `processPropertiesByName$lambda$0(FirLookupTrackerComponent, CallInfo, Ref$BooleanRef, ScopeBasedTowerLevel, TowerLevelProcessor, FirVariableSymbol)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel` |

##### `invoke(Object)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda`)

| Change | Delta |             % | Samples | Caller                                                                        | Location                                                            |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| -57.1% |    -4 | 33.3% → 23.1% |   7 → 3 | `processFunctionsByName(Name, Function1)`                                     | `org.jetbrains.kotlin.fir.scopes.impl.FirPackageMemberScope`        |
| -66.7% |    -2 |  14.3% → 7.7% |   3 → 1 | `processPropertiesByName(Name, Function1)`                                    | `org.jetbrains.kotlin.fir.scopes.impl.FirLocalScope`                |
| -50.0% |    -1 |   9.5% → 7.7% |   2 → 1 | `processFunctionsByName(Name, List, Function1)`                               | `org.jetbrains.kotlin.fir.scopes.impl.FirAbstractImportingScope`    |
| -11.1% |    -1 | 42.9% → 61.5% |   9 → 8 | `processSymbolsByName$lambda$0(Ref$BooleanRef, Function1, FirCallableSymbol)` | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope` |

##### `resolveVariableAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

| Change | Delta |      % | Samples | Caller                                                                                                                 | Location                                                                                      |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| -57.1% |    -8 | 100.0% |  14 → 6 | `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |

##### `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`)

| Change | Delta |      % | Samples | Caller                                                                                                        | Location                                                                                      |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| -57.1% |    -8 | 100.0% |  14 → 6 | `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode, boolean, boolean, boolean)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |

##### `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change | Delta |      % | Samples | Caller                                                                   | Location                                                                                                 |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| -41.2% |    -7 | 100.0% | 17 → 10 | `transformPropertyAccessExpression(FirPropertyAccessExpression, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### `transformPropertyAccessExpression(FirPropertyAccessExpression, Object)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change | Delta |      % | Samples | Caller                              | Location                                                           |
| -----: | ----: | -----: | ------: | ----------------------------------- | ------------------------------------------------------------------ |
| -41.2% |    -7 | 100.0% | 17 → 10 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.FirPropertyAccessExpression` |

##### `invoke(Object, Object)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.DispatchReceiverMemberScopeTowerLevel$$Lambda`)

| Change | Delta |      % | Samples | Caller                                                     | Location                                                                             |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| -38.9% |    -7 | 100.0% | 18 → 11 | `processMembers(CallInfo, TowerLevelProcessor, Function2)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.DispatchReceiverMemberScopeTowerLevel` |

##### `resolveVariableAccessAndSelectCandidateImpl$lambda$0(FirCallResolver, FirQualifiedAccessExpression, FirSimpleNamedReference, boolean, FirElement, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

| Change | Delta |      % | Samples | Caller     | Location                                                                            |
| -----: | ----: | -----: | ------: | ---------- | ----------------------------------------------------------------------------------- |
| -63.6% |    -7 | 100.0% |  11 → 4 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver$$Lambda.0x000000800168ed90` |

##### `invoke()` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver$$Lambda.0x000000800168ed90`)

| Change | Delta |      % | Samples | Caller       | Location                |
| -----: | ----: | -----: | ------: | ------------ | ----------------------- |
| -63.6% |    -7 | 100.0% |  11 → 4 | `getValue()` | `kotlin.UnsafeLazyImpl` |

##### `resolveVariableAccessAndSelectCandidateImpl$lambda$1(Lazy)` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

| Change | Delta |      % | Samples | Caller                                                                                                                               | Location                                                 |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- |
| -63.6% |    -7 | 100.0% |  11 → 4 | `resolveVariableAccessAndSelectCandidateImpl(FirQualifiedAccessExpression, boolean, ResolutionMode, boolean, FirElement, Function1)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver` |

##### `resolveVariableAccessAndSelectCandidateImpl(FirQualifiedAccessExpression, boolean, ResolutionMode, boolean, FirElement, Function1)` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

| Change | Delta |      % | Samples | Caller                                                                                                                | Location                                                 |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| -53.8% |    -7 | 100.0% |  13 → 6 | `resolveVariableAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver` |

##### `processLevel(TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`)

| Change | Delta |      % | Samples | Caller                                                                                                               | Location                                                               |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| -12.8% |    -6 | 100.0% | 47 → 41 | `access$processLevel(FirBaseTowerResolveTask, TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask` |

##### `access$processLevel(FirBaseTowerResolveTask, TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`)

| Change | Delta |           % | Samples | Caller                                                                                                                                 | Location                                                                 |
| -----: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| -66.7% |    -2 | 6.4% → 2.4% |   3 → 1 | `runResolverForNoReceiver(CallInfo, boolean, Continuation)`                                                                            | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask`       |
| -50.0% |    -2 | 8.5% → 4.9% |   4 → 2 | `runResolverForExpressionReceiver(CallInfo, FirExpression, TowerGroup, Continuation)`                                                  | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask`       |
| -33.3% |    -1 | 6.4% → 4.9% |   3 → 2 | `processCandidatesWithGivenImplicitReceiverAsValue(ImplicitReceiverValue, CallInfo, TowerGroup, Set, Set, Set, boolean, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask`       |
| -25.0% |    -1 | 8.5% → 7.3% |   4 → 3 | `processLevelForRegularInvoke(TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)`                                   | `org.jetbrains.kotlin.fir.resolve.calls.tower.InvokeFunctionResolveTask` |

##### `runTasks()` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`)

| Change | Delta |      % | Samples | Caller                                                                                                | Location                                                        |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| -11.5% |    -6 | 100.0% | 52 → 46 | `runResolver(CallInfo, ResolutionContext, CandidateCollector, TowerResolveManager, CandidateFactory)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver` |

##### `readBytes(byte[], int, int)` (`java.io.FileInputStream`)

|  Change | Delta |             % | Samples | Caller                   | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------ | ------------------------- |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `read(byte[], int, int)` | `java.io.FileInputStream` |

##### `read(byte[], int, int)` (`java.io.FileInputStream`)

|  Change | Delta |             % | Samples | Caller   | Location                      |
| ------: | ----: | ------------: | ------: | -------- | ----------------------------- |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `fill()` | `java.io.BufferedInputStream` |

##### `fill()` (`java.io.BufferedInputStream`)

|  Change | Delta |            % | Samples | Caller                    | Location                      |
| ------: | ----: | -----------: | ------: | ------------------------- | ----------------------------- |
| removed |    -4 | 66.7% → 0.0% |   4 → 0 | `read1(byte[], int, int)` | `java.io.BufferedInputStream` |
| removed |    -2 | 33.3% → 0.0% |   2 → 0 | `implRead()`              | `java.io.BufferedInputStream` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|  Change | Delta |             % | Samples | Caller                                                             | Location                                                              |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------ | --------------------------------------------------------------------- |
|  -32.1% |    -9 | 51.9% → 39.6% | 28 → 19 | `processCandidate(Candidate, ResolutionContext, boolean, boolean)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner` |
|   -9.8% |    -5 | 94.4% → 95.8% | 51 → 46 | `resumeTask(TowerResolveManager$SuspendedResolverTask)`            | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`    |
| removed |    -1 |   1.9% → 0.0% |   1 → 0 | `run()`                                                            | `kotlinx.coroutines.DispatchedTask`                                   |

##### `getValue()` (`kotlin.UnsafeLazyImpl`)

|  Change | Delta |             % | Samples | Caller                                                       | Location                                                                           |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
|  -63.6% |    -7 | 73.3% → 44.4% |  11 → 4 | `resolveVariableAccessAndSelectCandidateImpl$lambda$1(Lazy)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                           |
|     new |    +4 |  0.0% → 44.4% |   0 → 4 | `getClassifierResolverResult()`                              | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.PlainJavaClassifierType` |
| removed |    -1 |   6.7% → 0.0% |   1 → 0 | `getFirValueParameter()`                                     | `org.jetbrains.kotlin.fir.lightTree.fir.ValueParameter`                            |
| removed |    -1 |   6.7% → 0.0% |   1 → 0 | `getReversedFilteredLocalScopes()`                           | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerDataElementsForName`            |
| removed |    -1 |   6.7% → 0.0% |   1 → 0 | `getContextQualifiers()`                                     | `org.jetbrains.kotlin.fir.java.enhancement.FirSignatureEnhancement`                |

##### `read(byte[], int, int)` (`java.io.BufferedInputStream`)

|  Change | Delta |             % | Samples | Caller                   | Location                    |
| ------: | ----: | ------------: | ------: | ------------------------ | --------------------------- |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `read(byte[], int, int)` | `java.io.FilterInputStream` |

##### `read(byte[], int, int)` (`java.io.FilterInputStream`)

|  Change | Delta |             % | Samples | Caller                   | Location                      |
| ------: | ----: | ------------: | ------: | ------------------------ | ----------------------------- |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `read(byte[], int, int)` | `java.io.PushbackInputStream` |

##### `read(byte[], int, int)` (`java.io.PushbackInputStream`)

|  Change | Delta |             % | Samples | Caller   | Location                            |
| ------: | ----: | ------------: | ------: | -------- | ----------------------------------- |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `fill()` | `java.util.zip.InflaterInputStream` |

##### `fill()` (`java.util.zip.InflaterInputStream`)

|  Change | Delta |             % | Samples | Caller                   | Location                            |
| ------: | ----: | ------------: | ------: | ------------------------ | ----------------------------------- |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `read(byte[], int, int)` | `java.util.zip.InflaterInputStream` |

##### `read1(byte[], int, int)` (`java.io.BufferedInputStream`)

|  Change | Delta |             % | Samples | Caller                       | Location                      |
| ------: | ----: | ------------: | ------: | ---------------------------- | ----------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `implRead(byte[], int, int)` | `java.io.BufferedInputStream` |

##### `implRead(byte[], int, int)` (`java.io.BufferedInputStream`)

|  Change | Delta |             % | Samples | Caller                   | Location                      |
| ------: | ----: | ------------: | ------: | ------------------------ | ----------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `read(byte[], int, int)` | `java.io.BufferedInputStream` |

##### `invoke(Class, MethodHandle, String, Object, Object, Class)` (`java.lang.invoke.BootstrapMethodInvoker`)

| Change | Delta |      % | Samples | Caller                                                      | Location                    |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------- | --------------------------- |
| -30.8% |    -4 | 100.0% |  13 → 9 | `makeSite(MethodHandle, String, MethodType, Object, Class)` | `java.lang.invoke.CallSite` |

##### `makeSite(MethodHandle, String, MethodType, Object, Class)` (`java.lang.invoke.CallSite`)

| Change | Delta |      % | Samples | Caller                                                                        | Location                               |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------- | -------------------------------------- |
| -30.8% |    -4 | 100.0% |  13 → 9 | `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

| Change | Delta |      % | Samples | Caller                                                           | Location                               |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------- | -------------------------------------- |
| -30.8% |    -4 | 100.0% |  13 → 9 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `linkCallSite(Object, Object, Object, Object, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

|  Change | Delta |           % | Samples | Caller                                                                            | Location                                                                |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| removed |    -1 | 7.7% → 0.0% |   1 → 0 | `joining(CharSequence, CharSequence, CharSequence)`                               | `java.util.stream.Collectors`                                           |
| removed |    -1 | 7.7% → 0.0% |   1 → 0 | `parsePreprocessedCommandLineArguments(List, CommonToolArguments, Lazy, boolean)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |
| removed |    -1 | 7.7% → 0.0% |   1 → 0 | `<init>(PsiManagerImpl, NotNullLazyValue)`                                        | `com.intellij.psi.impl.file.impl.FileManagerImpl`                       |
| removed |    -1 | 7.7% → 0.0% |   1 → 0 | `<clinit>()`                                                                      | `com.intellij.psi.impl.PsiJavaParserFacadeImpl`                         |
| removed |    -1 | 7.7% → 0.0% |   1 → 0 | `<clinit>()`                                                                      | `org.jetbrains.kotlin.asJava.classes.ImplUtilsKt`                       |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

| Change | Delta |      % | Samples | Caller                                                    | Location                |
| -----: | ----: | -----: | ------: | --------------------------------------------------------- | ----------------------- |
|  -6.1% |    -4 | 100.0% | 66 → 62 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `doPrivileged(PrivilegedAction)` (`java.security.AccessController`)

|  Change | Delta |            % | Samples | Caller                         | Location                                  |
| ------: | ----: | -----------: | ------: | ------------------------------ | ----------------------------------------- |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `annotationForMap(Class, Map)` | `sun.reflect.annotation.AnnotationParser` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `loadNativeLib()`              | `java.lang.management.ManagementFactory`  |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `installedProviders()`         | `java.nio.file.spi.FileSystemProvider`    |

##### `spinInnerClass()` (`java.lang.invoke.InnerClassLambdaMetafactory`)

| Change | Delta |      % | Samples | Caller            | Location                                       |
| -----: | ----: | -----: | ------: | ----------------- | ---------------------------------------------- |
| -57.1% |    -4 | 100.0% |   7 → 3 | `buildCallSite()` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `hash(Object)` (`java.util.HashMap`)

|  Change | Delta |            % | Samples | Caller                | Location            |
| ------: | ----: | -----------: | ------: | --------------------- | ------------------- |
| removed |    -3 | 60.0% → 0.0% |   3 → 0 | `put(Object, Object)` | `java.util.HashMap` |

##### `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` (`java.lang.invoke.LambdaMetafactory`)

| Change | Delta |             % | Samples | Caller                                                                 | Location                                             |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------- | ---------------------------------------------------- |
| -20.0% |    -2 | 83.3% → 88.9% |  10 → 8 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000008001234000` |
| -50.0% |    -1 | 16.7% → 11.1% |   2 → 1 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `zero_blocks` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller        | Location                        |
| ------: | ----: | ------------: | ------: | ------------- | ------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(int)` | `java.io.ByteArrayOutputStream` |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Thread::call_run` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                          | Location       |
| ------: | ----: | ------------: | --------: | ------------------------------- | -------------- |
|   +5.4% |   +43 | 91.6% → 92.0% | 795 → 838 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| +400.0% |    +4 |   0.1% → 0.5% |     1 → 5 | `VMThread::run`                 | `libjvm.dylib` |
|   -4.2% |    -3 |   8.2% → 7.5% |   71 → 68 | `WorkerThread::run`             | `libjvm.dylib` |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `ConcurrentGCThread::run`       | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Callee             | Location       |
| -----: | ----: | -----: | --------: | ------------------ | -------------- |
|  +5.0% |   +43 | 100.0% | 868 → 911 | `Thread::call_run` | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

| Change | Delta |     % |   Samples | Callee                | Location       |
| -----: | ----: | ----: | --------: | --------------------- | -------------- |
|  +5.0% |   +43 | 99.9% | 868 → 911 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

| Change | Delta |      % |   Samples | Callee           | Location                  |
| -----: | ----: | -----: | --------: | ---------------- | ------------------------- |
|  +4.9% |   +43 | 100.0% | 869 → 912 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

| Change | Delta |              % |   Samples | Callee                                | Location       |
| -----: | ----: | -------------: | --------: | ------------------------------------- | -------------- |
|  +5.0% |   +40 | 100.0% → 99.6% | 795 → 835 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |
|    new |    +3 |    0.0% → 0.4% |     0 → 3 | `ServiceThread::service_thread_entry` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Callee                                     | Location                   |
| -----: | ----: | ------------: | --------: | ------------------------------------------ | -------------------------- |
|  +3.6% |   +28 | 98.6% → 97.2% | 784 → 812 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`             |
| +90.9% |   +10 |   1.4% → 2.5% |   11 → 21 | `CompileQueue::get`                        | `libjvm.dylib`             |
|    new |    +1 |   0.0% → 0.1% |     0 → 1 | `CompileTaskWrapper::~CompileTaskWrapper`  | `libjvm.dylib`             |
|    new |    +1 |   0.0% → 0.1% |     0 → 1 | `_platform_strlen`                         | `libsystem_platform.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                                    | Location       |
| ------: | ----: | ------------: | --------: | ----------------------------------------- | -------------- |
|   +7.5% |   +18 | 30.5% → 31.7% | 239 → 257 | `Compiler::compile_method`                | `libjvm.dylib` |
|   +1.5% |    +8 | 68.6% → 67.2% | 538 → 546 | `C2Compiler::compile_method`              | `libjvm.dylib` |
| removed |    -2 |   0.3% → 0.0% |     2 → 0 | `ciEnv::~ciEnv`                           | `libjvm.dylib` |
| +200.0% |    +2 |   0.1% → 0.4% |     1 → 3 | `ciEnv::ciEnv`                            | `libjvm.dylib` |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `CompileBroker::update_compile_perf_data` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                             | Location       |
| ------: | ----: | ------------: | --------: | ---------------------------------- | -------------- |
|   +8.5% |   +18 | 89.5% → 89.8% | 212 → 230 | `Compilation::compile_java_method` | `libjvm.dylib` |
|   +8.3% |    +2 | 10.1% → 10.2% |   24 → 26 | `ciEnv::register_method`           | `libjvm.dylib` |
| removed |    -1 |   0.4% → 0.0% |     1 → 0 | `Dependencies::assert_common_1`    | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|  Change | Delta |              % |   Samples | Callee                                               | Location       |
| ------: | ----: | -------------: | --------: | ---------------------------------------------------- | -------------- |
|   +8.0% |   +19 | 99.6% → 100.0% | 237 → 256 | `Compilation::compile_method`                        | `libjvm.dylib` |
| removed |    -1 |    0.4% → 0.0% |     1 → 0 | `DebugInformationRecorder::DebugInformationRecorder` | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

|  Change | Delta |           % |   Samples | Callee                                         | Location       |
| ------: | ----: | ----------: | --------: | ---------------------------------------------- | -------------- |
|   +7.6% |   +18 |       99.6% | 238 → 256 | `Compilation::Compilation`                     | `libjvm.dylib` |
| removed |    -1 | 0.4% → 0.0% |     1 → 0 | `Chunk::next_chop`                             | `libjvm.dylib` |
|     new |    +1 | 0.0% → 0.4% |     0 → 1 | `ExceptionHandlerTable::ExceptionHandlerTable` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                        | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------- | -------------- |
|  +23.6% |   +17 | 34.0% → 38.7% | 72 → 89 | `Compilation::build_hir`      | `libjvm.dylib` |
|  +18.9% |   +14 | 34.9% → 38.3% | 74 → 88 | `Compilation::emit_lir`       | `libjvm.dylib` |
|  -20.6% |   -13 | 29.7% → 21.7% | 63 → 50 | `Compilation::emit_code_body` | `libjvm.dylib` |
| removed |    -1 |   0.5% → 0.0% |   1 → 0 | `LIR_Assembler::emit_code`    | `libjvm.dylib` |
|     new |    +1 |   0.0% → 0.4% |   0 → 1 | `FrameMap::FrameMap`          | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                          | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------- | -------------- |
|  +29.8% |   +14 | 97.9% → 93.8% | 47 → 61 | `Parse::do_all_blocks`          | `libjvm.dylib` |
|     new |    +2 |   0.0% → 3.1% |   0 → 2 | `Parse::do_exits`               | `libjvm.dylib` |
| removed |    -1 |   2.1% → 0.0% |   1 → 0 | `ciMethod::method_data`         | `libjvm.dylib` |
| removed |    -1 |   2.1% → 0.0% |   1 → 0 | `Parse::create_entry_map`       | `libjvm.dylib` |
|     new |    +1 |   0.0% → 1.5% |   0 → 1 | `Parse::load_interpreter_state` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee         | Location       |
| -----: | ----: | -----: | ------: | -------------- | -------------- |
| +35.4% |   +17 | 100.0% | 48 → 65 | `Parse::Parse` | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee            | Location                 |
| ------: | ----: | ------------: | ------: | ----------------- | ------------------------ |
| +283.3% |   +17 | 75.0% → 92.0% |  6 → 23 | `__psynch_cvwait` | `libsystem_kernel.dylib` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change | Delta |             % |   Samples | Callee                                                                                                | Location                                                      |
| -----: | ----: | ------------: | --------: | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
|  +4.8% |   +16 | 99.7% → 99.4% | 335 → 351 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                        | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`       |
|    new |    +1 |   0.0% → 0.3% |     0 → 1 | `<init>(CommonCompilerArguments, Services, Disposable, GroupingMessageCollector, PerformanceManager)` | `org.jetbrains.kotlin.cli.pipeline.ArgumentsPipelineArtifact` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change | Delta |      % |   Samples | Callee                                                                                              | Location                                                |
| -----: | ----: | -----: | --------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|  +5.1% |   +17 | 100.0% | 336 → 353 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change | Delta |      % |   Samples | Callee                                                                                                                                        | Location                                                |
| -----: | ----: | -----: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|  +5.1% |   +17 | 100.0% | 336 → 353 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|  Change | Delta |             % |   Samples | Callee                           | Location                                                         |
| ------: | ----: | ------------: | --------: | -------------------------------- | ---------------------------------------------------------------- |
|  +14.5% |   +11 | 22.8% → 24.9% |   76 → 87 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`  |
|   +4.5% |   +10 | 67.3% → 66.9% | 224 → 234 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase` |
|  -10.7% |    -3 |   8.4% → 7.1% |   28 → 25 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`   |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmWriteOutputsPhase`     |

##### `Compilation::build_hir` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                      | Location                   |
| ------: | ----: | ------------: | ------: | --------------------------- | -------------------------- |
|  +16.4% |   +10 | 84.7% → 79.8% | 61 → 71 | `IR::IR`                    | `libjvm.dylib`             |
| +250.0% |    +5 |   2.8% → 7.9% |   2 → 7 | `IR::compute_use_counts`    | `libjvm.dylib`             |
|  +33.3% |    +1 |   4.2% → 4.5% |   3 → 4 | `IR::eliminate_null_checks` | `libjvm.dylib`             |
|     new |    +1 |   0.0% → 1.1% |   0 → 1 | `_platform_memset`          | `libsystem_platform.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|  +25.0% |   +14 | 75.7% → 79.5% | 56 → 70 | `LinearScan::do_linear_scan`     | `libjvm.dylib` |
|   +5.9% |    +1 | 23.0% → 20.5% | 17 → 18 | `BlockList::iterate_forward`     | `libjvm.dylib` |
| removed |    -1 |   1.4% → 0.0% |   1 → 0 | `ControlFlowOptimizer::optimize` | `libjvm.dylib` |

##### `IntervalWalker::walk_to` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                        | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | -------------- |
|  +75.0% |    +9 | 75.0% → 70.0% | 12 → 21 | `LinearScanWalker::activate_current`          | `libjvm.dylib` |
| +500.0% |    +5 |  6.3% → 20.0% |   1 → 6 | `IntervalWalker::walk_to`                     | `libjvm.dylib` |
| removed |    -1 |   6.3% → 0.0% |   1 → 0 | `LinearScanWalker::combine_spilled_intervals` | `libjvm.dylib` |
| removed |    -1 |   6.3% → 0.0% |   1 → 0 | `LIRGenerator::is_vreg_flag_set`              | `libjvm.dylib` |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------- | -------------- |
|  +86.7% |   +13 | 26.8% → 40.0% | 15 → 28 | `LinearScan::allocate_registers`      | `libjvm.dylib` |
| +116.7% |    +7 | 10.7% → 18.6% |  6 → 13 | `LinearScan::build_intervals`         | `libjvm.dylib` |
|  -71.4% |    -5 |  12.5% → 2.9% |   7 → 2 | `LinearScan::compute_local_live_sets` | `libjvm.dylib` |
|  -50.0% |    -3 |  10.7% → 4.3% |   6 → 3 | `LinearScan::resolve_data_flow`       | `libjvm.dylib` |
|  -11.8% |    -2 | 30.4% → 21.4% | 17 → 15 | `LinearScan::assign_reg_num`          | `libjvm.dylib` |

##### `LinearScan::allocate_registers` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                    | Location       |
| -----: | ----: | -----: | ------: | ------------------------- | -------------- |
| +86.7% |   +13 | 100.0% | 15 → 28 | `IntervalWalker::walk_to` | `libjvm.dylib` |

##### `Matcher::match_tree` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                   | Location                   |
| ------: | ----: | ------------: | ------: | ------------------------ | -------------------------- |
| +128.6% |    +9 | 36.8% → 53.3% |  7 → 16 | `Matcher::Label_Root`    | `libjvm.dylib`             |
|  +50.0% |    +1 | 10.5% → 10.0% |   2 → 3 | `Chunk::next_chop`       | `libjvm.dylib`             |
| removed |    -1 |   5.3% → 0.0% |   1 → 0 | `_platform_memset`       | `libsystem_platform.dylib` |
|     new |    +1 |   0.0% → 3.3% |   0 → 1 | `HaltNode::match_edge`   | `libjvm.dylib`             |
|     new |    +1 |   0.0% → 3.3% |   0 → 1 | `ReturnNode::match_edge` | `libjvm.dylib`             |

##### `ciBytecodeStream::get_field` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                      | Location        |
| ------: | ----: | -------------: | ------: | --------------------------- | --------------- |
| +160.0% |    +8 | 100.0% → 81.3% |  5 → 13 | `ciEnv::get_field_by_index` | `libjvm.dylib`  |
|     new |    +2 |   0.0% → 12.5% |   0 → 2 | `ciField::will_link`        | `libjvm.dylib`  |
|     new |    +1 |    0.0% → 6.3% |   0 → 1 | `tlv_get_addr`              | `libdyld.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                           | Location       |
| ------: | ----: | -------------: | ------: | -------------------------------- | -------------- |
| +200.0% |   +14 | 63.6% → 100.0% |  7 → 21 | `Monitor::wait`                  | `libjvm.dylib` |
| removed |    -2 |   18.2% → 0.0% |   2 → 0 | `methodHandle::~methodHandle`    | `libjvm.dylib` |
| removed |    -2 |   18.2% → 0.0% |   2 → 0 | `CompilationPolicy::select_task` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                      | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------- | -------------- |
|  +40.0% |    +8 | 76.9% → 77.8% | 20 → 28 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |
| removed |    -1 |   3.8% → 0.0% |   1 → 0 | `MultiNode::is_CFG`                         | `libjvm.dylib` |
|     new |    +1 |   0.0% → 2.8% |   0 → 1 | `RangeCheckNode::Opcode`                    | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                        | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------- | -------------- |
|  +50.0% |    +9 | 52.9% → 61.4% | 18 → 27 | `Matcher::match_tree`         | `libjvm.dylib` |
| +200.0% |    +2 |   2.9% → 6.8% |   1 → 3 | `Matcher::match_sfpt`         | `libjvm.dylib` |
| removed |    -1 |   2.9% → 0.0% |   1 → 0 | `CmpPNode::Opcode`            | `libjvm.dylib` |
| removed |    -1 |   2.9% → 0.0% |   1 → 0 | `Node::clone`                 | `libjvm.dylib` |
|     new |    +1 |   0.0% → 2.3% |   0 → 1 | `Compile::copy_node_notes_to` | `libjvm.dylib` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                               | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
|   +6.8% |    +4 | 96.7% → 88.7% | 59 → 63 | `GraphBuilder::iterate_all_blocks`   | `libjvm.dylib` |
| +150.0% |    +3 |   3.3% → 7.0% |   2 → 5 | `BlockListBuilder::BlockListBuilder` | `libjvm.dylib` |
|     new |    +3 |   0.0% → 4.2% |   0 → 3 | `BlockBegin::iterate_preorder`       | `libjvm.dylib` |

##### `Matcher::Label_Root` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                  | Location       |
| ------: | ----: | ------------: | ------: | ----------------------- | -------------- |
| +300.0% |    +9 | 42.9% → 75.0% |  3 → 12 | `Matcher::Label_Root`   | `libjvm.dylib` |
| +125.0% |    +5 | 57.1% → 56.3% |   4 → 9 | `State::DFA`            | `libjvm.dylib` |
| +300.0% |    +3 | 14.3% → 25.0% |   1 → 4 | `Arena::grow`           | `libjvm.dylib` |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `LoadNode::bottom_type` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 6.3% |   0 → 1 | `CallNode::match_edge`  | `libjvm.dylib` |

##### `LinearScanWalker::activate_current` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                        | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | -------------- |
|  +85.7% |    +6 | 58.3% → 61.9% |  7 → 13 | `LinearScanWalker::alloc_free_reg`            | `libjvm.dylib` |
|     new |    +2 |   0.0% → 9.5% |   0 → 2 | `LinearScanWalker::combine_spilled_intervals` | `libjvm.dylib` |
|  -33.3% |    -1 |  25.0% → 9.5% |   3 → 2 | `LinearScanWalker::split_and_spill_interval`  | `libjvm.dylib` |
| removed |    -1 |   8.3% → 0.0% |   1 → 0 | `LIRGenerator::is_vreg_flag_set`              | `libjvm.dylib` |
|     new |    +1 |   0.0% → 4.8% |   0 → 1 | `LinearScanWalker::alloc_locked_reg`          | `libjvm.dylib` |

##### `PhaseIterGVN::add_users_to_worklist` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                                | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 11.1% |   0 → 1 | `BoolNode::Opcode`                    | `libjvm.dylib` |
|    new |    +1 | 0.0% → 11.1% |   0 → 1 | `PhaseIterGVN::add_users_to_worklist` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                                   | Location       |
| ------: | ----: | ------------: | --------: | ---------------------------------------- | -------------- |
|  +41.3% |   +19 |  8.6% → 11.9% |   46 → 65 | `ParseGenerator::generate`               | `libjvm.dylib` |
|   -3.9% |   -11 | 52.2% → 49.5% | 281 → 270 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|   +3.1% |    +6 | 36.1% → 36.6% | 194 → 200 | `Compile::Optimize`                      | `libjvm.dylib` |
| removed |    -3 |   0.6% → 0.0% |     3 → 0 | `Type::Initialize`                       | `libjvm.dylib` |
|  -25.0% |    -2 |   1.5% → 1.1% |     8 → 6 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
|  +33.3% |   +14 | 91.3% → 91.8% | 42 → 56 | `Parse::do_call`                   | `libjvm.dylib` |
|  +77.8% |    +7 | 19.6% → 26.2% |  9 → 16 | `Parse::do_field_access`           | `libjvm.dylib` |
| removed |    -2 |   4.3% → 0.0% |   2 → 0 | `Parse::array_load`                | `libjvm.dylib` |
| +100.0% |    +1 |   2.2% → 3.3% |   1 → 2 | `Parse::return_current`            | `libjvm.dylib` |
| removed |    -1 |   2.2% → 0.0% |   1 → 0 | `Parse::can_not_compile_call_site` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Callee                  | Location       |
| ------: | ----: | -----: | ------: | ----------------------- | -------------- |
| +214.3% |   +15 | 100.0% |  7 → 22 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
|  +33.3% |   +10 |         71.4% | 30 → 40 | `PredictedCallGenerator::generate` | `libjvm.dylib` |
|  +30.8% |    +8 | 61.9% → 60.7% | 26 → 34 | `ParseGenerator::generate`         | `libjvm.dylib` |
|  +40.0% |    +4 | 23.8% → 25.0% | 10 → 14 | `Compile::call_generator`          | `libjvm.dylib` |
| removed |    -3 |   7.1% → 0.0% |   3 → 0 | `Compile::optimize_inlining`       | `libjvm.dylib` |
|     new |    +2 |   0.0% → 3.6% |   0 → 2 | `ciBytecodeStream::get_method`     | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                           | Location       |
| ------: | ----: | -------------: | ------: | -------------------------------- | -------------- |
|  +32.6% |   +15 | 97.9% → 100.0% | 46 → 61 | `Parse::do_one_block`            | `libjvm.dylib` |
| removed |    -1 |    2.1% → 0.0% |   1 → 0 | `GraphKit::add_parse_predicates` | `libjvm.dylib` |
| removed |    -1 |    2.1% → 0.0% |   1 → 0 | `Parse::merge_common`            | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                          | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------- | -------------- |
|  +34.6% |    +9 | 86.7% → 87.5% | 26 → 35 | `ParseGenerator::generate`      | `libjvm.dylib` |
|     new |    +3 |   0.0% → 7.5% |   0 → 3 | `GraphKit::type_check_receiver` | `libjvm.dylib` |
| removed |    -2 |   6.7% → 0.0% |   2 → 0 | `DirectCallGenerator::generate` | `libjvm.dylib` |
| +200.0% |    +2 |   3.3% → 7.5% |   1 → 3 | `GraphKit::null_check_common`   | `libjvm.dylib` |
|     new |    +2 |   0.0% → 5.0% |   0 → 2 | `GraphKit::replace_in_map`      | `libjvm.dylib` |

##### `IRScope::IRScope` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                       | Location       |
| -----: | ----: | -----: | ------: | ---------------------------- | -------------- |
| +16.4% |   +10 | 100.0% | 61 → 71 | `GraphBuilder::GraphBuilder` | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee             | Location       |
| -----: | ----: | -----: | ------: | ------------------ | -------------- |
| +16.4% |   +10 | 100.0% | 61 → 71 | `IRScope::IRScope` | `libjvm.dylib` |

##### `_pthread_mutex_firstfit_lock_slow` (`libsystem_pthread.dylib`)

| Change | Delta |      % | Samples | Callee               | Location                 |
| -----: | ----: | -----: | ------: | -------------------- | ------------------------ |
| +56.3% |    +9 | 100.0% | 16 → 25 | `__psynch_mutexwait` | `libsystem_kernel.dylib` |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

| Change | Delta |      % |   Samples | Callee                                         | Location                                          |
| -----: | ----: | -----: | --------: | ---------------------------------------------- | ------------------------------------------------- |
|  +5.1% |   +17 | 100.0% | 333 → 350 | `phaseBody(PipelineContext, PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|  Change | Delta |           % |   Samples | Callee                              | Location                                                         |
| ------: | ----: | ----------: | --------: | ----------------------------------- | ---------------------------------------------------------------- |
|   +5.1% |   +17 |      100.0% | 333 → 350 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
|  +40.0% |    +2 | 1.5% → 2.0% |     5 → 7 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.ModuleLoweringPhase` |
|  +11.1% |    +2 | 5.4% → 5.7% |   18 → 20 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase`   |
| removed |    -1 | 0.3% → 0.0% |     1 → 0 | `isVerbose(NamedCompilerPhase)`     | `org.jetbrains.kotlin.config.phaser.PhaseConfig`                 |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`)

| Change | Delta |      % |   Samples | Callee                                                     | Location                                                |
| -----: | ----: | -----: | --------: | ---------------------------------------------------------- | ------------------------------------------------------- |
|  +5.1% |   +17 | 100.0% | 333 → 350 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`)

| Change | Delta |      % |   Samples | Callee                                                     | Location                                                    |
| -----: | ----: | -----: | --------: | ---------------------------------------------------------- | ----------------------------------------------------------- |
|  +5.1% |   +17 | 100.0% | 333 → 350 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change | Delta |             % |   Samples | Callee                                                         | Location                                                |
| -----: | ----: | ------------: | --------: | -------------------------------------------------------------- | ------------------------------------------------------- |
|  +5.1% |   +17 | 99.4% → 99.7% | 336 → 353 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| -50.0% |    -1 |   0.6% → 0.3% |     2 → 1 | `getDefaultPerformanceManager()`                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change | Delta |      % |   Samples | Callee                                                                | Location                                     |
| -----: | ----: | -----: | --------: | --------------------------------------------------------------------- | -------------------------------------------- |
|  +4.7% |   +16 | 100.0% | 338 → 354 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |      % |   Samples | Callee                                                                 | Location                                     |
| -----: | ----: | -----: | --------: | ---------------------------------------------------------------------- | -------------------------------------------- |
|  +4.7% |   +16 | 100.0% | 338 → 354 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|  Change | Delta |             % |   Samples | Callee                                                                          | Location                                                                    |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
|   +5.1% |   +17 | 99.4% → 99.7% | 333 → 350 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`            | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                        |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `createCompoundPhase(CommonCompilerArguments)`                                  | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmCliPipeline`                      |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `reportToMessageCollector(BaseDiagnosticsCollector, MessageCollector, boolean)` | `org.jetbrains.kotlin.cli.common.fir.FirDiagnosticsCompilerResultsReporter` |
|     new |    +1 |   0.0% → 0.3% |     0 → 1 | `loadClass(String)`                                                             | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`                    |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|  Change | Delta |             % |   Samples | Callee                          | Location                                                |
| ------: | ----: | ------------: | --------: | ------------------------------- | ------------------------------------------------------- |
|   +3.7% |   +13 | 99.7% → 99.5% | 354 → 367 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| +100.0% |    +1 |   0.3% → 0.5% |     1 → 2 | `<init>()`                      | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change | Delta |      % |   Samples | Callee           | Location                                               |
| -----: | ----: | -----: | --------: | ---------------- | ------------------------------------------------------ |
|  +3.9% |   +14 | 100.0% | 355 → 369 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |             % |   Samples | Callee                                                          | Location                                      |
| -----: | ----: | ------------: | --------: | --------------------------------------------------------------- | --------------------------------------------- |
|  +4.7% |   +16 | 97.4% → 98.1% | 338 → 354 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |
| -22.2% |    -2 |   2.6% → 1.9% |     9 → 7 | `<clinit>()`                                                    | `org.jetbrains.kotlin.cli.common.ArgumentsKt` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change | Delta |     % |   Samples | Callee                                                 | Location                                                |
| -----: | ----: | ----: | --------: | ------------------------------------------------------ | ------------------------------------------------------- |
|  +3.7% |   +13 | 99.7% | 353 → 366 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change | Delta |      % |   Samples | Callee                                                                                             | Location                                                |
| -----: | ----: | -----: | --------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|  +3.7% |   +13 | 100.0% | 354 → 367 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|  Change | Delta |             % |   Samples | Callee                                                                               | Location                                                                |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
|   +4.0% |   +14 | 98.3% → 98.6% | 347 → 361 | `exec(MessageCollector, Services, CommonCompilerArguments)`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `createArguments()`                                                                  | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                            |
|  -20.0% |    -1 |   1.4% → 1.1% |     5 → 4 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |
|     new |    +1 |   0.0% → 0.3% |     0 → 1 | `loadClass(String)`                                                                  | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`                |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |      % |   Samples | Callee                                                   | Location                                      |
| -----: | ----: | -----: | --------: | -------------------------------------------------------- | --------------------------------------------- |
|  +3.7% |   +13 | 100.0% | 353 → 366 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change | Delta |      % |   Samples | Callee                                         | Location                                      |
| -----: | ----: | -----: | --------: | ---------------------------------------------- | --------------------------------------------- |
|  +3.7% |   +13 | 100.0% | 353 → 366 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008001008400`)

| Change | Delta |      % |   Samples | Callee           | Location                                     |
| -----: | ----: | -----: | --------: | ---------------- | -------------------------------------------- |
|  +3.9% |   +14 | 100.0% | 355 → 369 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000008001009800`)

| Change | Delta |      % |   Samples | Callee                         | Location                                             |
| -----: | ----: | -----: | --------: | ------------------------------ | ---------------------------------------------------- |
|  +3.9% |   +14 | 100.0% | 355 → 369 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000008001008400` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |      % |   Samples | Callee                           | Location                                            |
| -----: | ----: | -----: | --------: | -------------------------------- | --------------------------------------------------- |
|  +3.9% |   +14 | 100.0% | 355 → 369 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000008001009800` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % |   Samples | Callee                                           | Location                           |
| -----: | ----: | -----: | --------: | ------------------------------------------------ | ---------------------------------- |
|  +3.9% |   +14 | 100.0% | 355 → 369 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % |   Samples | Callee                         | Location                                          |
| -----: | ----: | -----: | --------: | ------------------------------ | ------------------------------------------------- |
|  +3.9% |   +14 | 100.0% | 355 → 369 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change | Delta |           % |   Samples | Callee                     | Location                                          |
| -----: | ----: | ----------: | --------: | -------------------------- | ------------------------------------------------- |
|  +3.9% |   +14 |      100.0% | 355 → 369 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |
|    new |    +1 | 0.0% → 0.3% |     0 → 1 | `acquireMethodAccessor()`  | `java.lang.reflect.Method`                        |
|    new |    +1 | 0.0% → 0.3% |     0 → 1 | `isCallerSensitive()`      | `java.lang.reflect.Method`                        |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

|  Change | Delta |             % | Samples | Callee     | Location                                                                               |
| ------: | ----: | ------------: | ------: | ---------- | -------------------------------------------------------------------------------------- |
| +200.0% |    +4 | 18.2% → 33.3% |   2 → 6 | `invoke()` | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass$$Lambda`                      |
|     new |    +2 |  0.0% → 11.1% |   0 → 2 | `invoke()` | `org.jetbrains.kotlin.ir.descriptors.IrBasedDeclarationDescriptor$annotations$2`       |
|  -50.0% |    -1 |  18.2% → 5.6% |   2 → 1 | `invoke()` | `org.jetbrains.kotlin.cli.common.CLICompiler$$Lambda.0x0000008001006f50`               |
| removed |    -1 |   9.1% → 0.0% |   1 → 0 | `invoke()` | `org.jetbrains.kotlin.fir.extensions.FirExtensionRegistrar$$Lambda.0x0000000401370000` |
|  -50.0% |    -1 |  18.2% → 5.6% |   2 → 1 | `invoke()` | `org.jetbrains.kotlin.builtins.DefaultBuiltIns$$Lambda.0x0000008001758638`             |

##### `generateCustomizedCode(LambdaForm, MethodType)` (`java.lang.invoke.InvokerBytecodeGenerator`)

|  Change | Delta |             % | Samples | Callee                          | Location                                    |
| ------: | ----: | ------------: | ------: | ------------------------------- | ------------------------------------------- |
| +300.0% |    +3 | 50.0% → 57.1% |   1 → 4 | `generateCustomizedCodeBytes()` | `java.lang.invoke.InvokerBytecodeGenerator` |
| +200.0% |    +2 | 50.0% → 42.9% |   1 → 3 | `loadMethod(byte[])`            | `java.lang.invoke.InvokerBytecodeGenerator` |

##### `compileToBytecode()` (`java.lang.invoke.LambdaForm`)

|  Change | Delta |      % | Samples | Callee                                           | Location                                    |
| ------: | ----: | -----: | ------: | ------------------------------------------------ | ------------------------------------------- |
| +250.0% |    +5 | 100.0% |   2 → 7 | `generateCustomizedCode(LambdaForm, MethodType)` | `java.lang.invoke.InvokerBytecodeGenerator` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

| Change | Delta |            % | Samples | Callee                                       | Location                  |
| -----: | ----: | -----------: | ------: | -------------------------------------------- | ------------------------- |
|    new |    +2 | 0.0% → 40.0% |   0 → 2 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.LinkedHashMap` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `g1_post_barrier_slow`                       | `<unknown>`               |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `resize()`                                   | `java.util.HashMap`       |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `ic_miss_stub`                               | `<unknown>`               |

##### `generateCustomizedCodeBytes()` (`java.lang.invoke.InvokerBytecodeGenerator`)

|  Change | Delta |             % | Samples | Callee                              | Location                                    |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ------------------------------------------- |
|     new |    +3 |  0.0% → 75.0% |   0 → 3 | `clinit(ClassWriter, String, List)` | `java.lang.invoke.InvokerBytecodeGenerator` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `addMethod()`                       | `java.lang.invoke.InvokerBytecodeGenerator` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `classFilePrologue()`               | `java.lang.invoke.InvokerBytecodeGenerator` |

##### `makePreparedLambdaForm(MethodType, int)` (`java.lang.invoke.DirectMethodHandle`)

|  Change | Delta |      % | Samples | Callee                | Location                      |
| ------: | ----: | -----: | ------: | --------------------- | ----------------------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `compileToBytecode()` | `java.lang.invoke.LambdaForm` |

##### `preparedLambdaForm(MethodType, int)` (`java.lang.invoke.DirectMethodHandle`)

|  Change | Delta |      % | Samples | Callee                                    | Location                              |
| ------: | ----: | -----: | ------: | ----------------------------------------- | ------------------------------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `makePreparedLambdaForm(MethodType, int)` | `java.lang.invoke.DirectMethodHandle` |

##### `preparedLambdaForm(MemberName, boolean)` (`java.lang.invoke.DirectMethodHandle`)

|  Change | Delta |      % | Samples | Callee                                | Location                              |
| ------: | ----: | -----: | ------: | ------------------------------------- | ------------------------------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `preparedLambdaForm(MethodType, int)` | `java.lang.invoke.DirectMethodHandle` |

##### `clinit(ClassWriter, String, List)` (`java.lang.invoke.InvokerBytecodeGenerator`)

| Change | Delta |            % | Samples | Callee                                               | Location                                      |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------- | --------------------------------------------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `visitLdcInsn(Object)`                               | `jdk.internal.org.objectweb.asm.MethodWriter` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `visitMethod(int, String, String, String, String[])` | `jdk.internal.org.objectweb.asm.ClassWriter`  |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `visitTypeInsn(int, String)`                         | `jdk.internal.org.objectweb.asm.MethodWriter` |

##### `getPackageName()` (`java.lang.Class`)

| Change | Delta |            % | Samples | Callee      | Location           |
| -----: | ----: | -----------: | ------: | ----------- | ------------------ |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `isArray()` | `java.lang.Class`  |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `intern()`  | `java.lang.String` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `getName()` | `java.lang.Class`  |

##### `postDefineClass(Class, ProtectionDomain)` (`java.lang.ClassLoader`)

| Change | Delta |             % | Samples | Callee             | Location          |
| -----: | ----: | ------------: | ------: | ------------------ | ----------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `getPackageName()` | `java.lang.Class` |

##### `calcNext()` (`kotlin.sequences.FilteringSequence$iterator$1`)

| Change | Delta |            % | Samples | Callee      | Location                                           |
| -----: | ----: | -----------: | ------: | ----------- | -------------------------------------------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `next()`    | `kotlin.sequences.TransformingSequence$iterator$1` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `hasNext()` | `kotlin.sequences.FlatteningSequence$iterator$1`   |

##### `hasNext()` (`kotlin.sequences.FilteringSequence$iterator$1`)

| Change | Delta |             % | Samples | Callee       | Location                                        |
| -----: | ----: | ------------: | ------: | ------------ | ----------------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `calcNext()` | `kotlin.sequences.FilteringSequence$iterator$1` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

| Change | Delta |              % | Samples | Callee                                                        | Location                 |
| -----: | ----: | -------------: | ------: | ------------------------------------------------------------- | ------------------------ |
|  +1.6% |    +1 | 100.0% → 98.4% | 62 → 63 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                     | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
|  -34.4% |   -11 | 18.9% → 14.8% | 32 → 21 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
|  -28.6% |    -6 | 12.4% → 10.6% | 21 → 15 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
|  -30.0% |    -6 |  11.8% → 9.9% | 20 → 14 | `PhaseLive::compute`                       | `libjvm.dylib` |
|  -16.7% |    -5 | 17.8% → 17.6% | 30 → 25 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
| +100.0% |    +4 |   2.4% → 5.6% |   4 → 8 | `PhaseIFG::SquareUp`                       | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                    | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------------- | -------------- |
|  -22.0% |   -13 | 95.2% → 95.8% | 59 → 46 | `PhaseIterGVN::transform_old`             | `libjvm.dylib` |
| removed |    -1 |   1.6% → 0.0% |   1 → 0 | `CProjNode::hash`                         | `libjvm.dylib` |
| removed |    -1 |   1.6% → 0.0% |   1 → 0 | `AddNode::hash`                           | `libjvm.dylib` |
|     new |    +1 |   0.0% → 2.1% |   0 → 1 | `MultiNode::hash`                         | `libjvm.dylib` |
|     new |    +1 |   0.0% → 2.1% |   0 → 1 | `PhaseIterGVN::remove_globally_dead_node` | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------- | -------------- |
|  -64.3% |    -9 | 23.7% → 10.9% |  14 → 5 | `IfNode::Ideal`                       | `libjvm.dylib` |
|  +75.0% |    +3 |  6.8% → 15.2% |   4 → 7 | `RegionNode::Ideal`                   | `libjvm.dylib` |
|     new |    +3 |   0.0% → 6.5% |   0 → 3 | `PhaseIterGVN::add_users_to_worklist` | `libjvm.dylib` |
| +100.0% |    +2 |   3.4% → 8.7% |   2 → 4 | `PhiNode::Value`                      | `libjvm.dylib` |
| removed |    -2 |   3.4% → 0.0% |   2 → 0 | `CheckCastPPNode::Value`              | `libjvm.dylib` |

##### `Compilation::emit_code_body` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                          | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | -------------- |
|  -15.0% |    -6 | 63.5% → 68.0% | 40 → 34 | `LIR_Assembler::emit_code`                      | `libjvm.dylib` |
|  -27.3% |    -6 | 34.9% → 32.0% | 22 → 16 | `Compilation::emit_code_epilog`                 | `libjvm.dylib` |
| removed |    -1 |   1.6% → 0.0% |   1 → 0 | `Compilation::generate_exception_handler_table` | `libjvm.dylib` |

##### `G1EvacuateRegionsTask::scan_roots` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                            | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| -50.0% |    -8 | 80.0% → 88.9% |  16 → 8 | `G1RemSet::scan_heap_roots`       | `libjvm.dylib` |
| -75.0% |    -3 | 20.0% → 11.1% |   4 → 1 | `G1RootProcessor::evacuate_roots` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Callee                               | Location       |
| -----: | ----: | ------------: | --------: | ------------------------------------ | -------------- |
| -16.0% |   -27 | 60.1% → 52.6% | 169 → 142 | `PhaseChaitin::Register_Allocate`    | `libjvm.dylib` |
| +28.6% |    +6 |  7.5% → 10.0% |   21 → 27 | `PhaseCFG::do_global_code_motion`    | `libjvm.dylib` |
|  +6.0% |    +3 | 17.8% → 19.6% |   50 → 53 | `Matcher::match`                     | `libjvm.dylib` |
|    new |    +3 |   0.0% → 1.1% |     0 → 3 | `PhaseCFG::PhaseCFG`                 | `libjvm.dylib` |
|    new |    +3 |   0.0% → 1.1% |     0 → 3 | `PhaseBlockLayout::PhaseBlockLayout` | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                         | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------ | -------------- |
|  -75.0% |    -3 | 12.5% → 4.8% |   4 → 1 | `MachNode::rematerialize`      | `libjvm.dylib` |
|  +50.0% |    +1 | 6.3% → 14.3% |   2 → 3 | `PhaseChaitin::split_DEF`      | `libjvm.dylib` |
| removed |    -1 |  3.1% → 0.0% |   1 → 0 | `Node::disconnect_inputs`      | `libjvm.dylib` |
| removed |    -1 |  3.1% → 0.0% |   1 → 0 | `branchNode::is_block_proj`    | `libjvm.dylib` |
|     new |    +1 |  0.0% → 4.8% |   0 → 1 | `MachCallJavaNode::in_RegMask` | `libjvm.dylib` |

##### `processCandidate(Candidate, ResolutionContext, boolean, boolean)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner`)

| Change | Delta |              % | Samples | Callee               | Location                                              |
| -----: | ----: | -------------: | ------: | -------------------- | ----------------------------------------------------- |
| -32.1% |    -9 | 96.6% → 100.0% | 28 → 19 | `resumeWith(Object)` | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |

##### `processCandidate$default(ResolutionStageRunner, Candidate, ResolutionContext, boolean, boolean, int, Object)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner`)

| Change | Delta |      % | Samples | Callee                                                             | Location                                                              |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------ | --------------------------------------------------------------------- |
| -34.5% |   -10 | 100.0% | 29 → 19 | `processCandidate(Candidate, ResolutionContext, boolean, boolean)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner` |

##### `consumeCandidate(TowerGroup, Candidate, ResolutionContext)` (`org.jetbrains.kotlin.fir.resolve.calls.candidate.CandidateCollector`)

| Change | Delta |      % | Samples | Callee                                                                                                         | Location                                                              |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| -35.7% |   -10 | 100.0% | 28 → 18 | `processCandidate$default(ResolutionStageRunner, Candidate, ResolutionContext, boolean, boolean, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner` |

##### `consumeCandidate(FirBasedSymbol, FirExpression, FirExpression, FirScope, boolean, boolean)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelProcessor`)

| Change | Delta |      % | Samples | Callee                                                       | Location                                                              |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------ | --------------------------------------------------------------------- |
| -35.7% |   -10 | 100.0% | 28 → 18 | `consumeCandidate(TowerGroup, Candidate, ResolutionContext)` | `org.jetbrains.kotlin.fir.resolve.calls.candidate.CandidateCollector` |

##### `consumeCandidate$default(TowerLevelProcessor, FirBasedSymbol, FirExpression, FirExpression, FirScope, boolean, boolean, int, Object)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelProcessor`)

| Change | Delta |      % | Samples | Callee                                                                                       | Location                                                           |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| -35.7% |   -10 | 100.0% | 28 → 18 | `consumeCandidate(FirBasedSymbol, FirExpression, FirExpression, FirScope, boolean, boolean)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelProcessor` |

##### `CounterOverflowStub::emit_code` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|  -75.0% |    -9 | 80.0% → 60.0% |  12 → 3 | `LIR_Assembler::add_call_info`   | `libjvm.dylib` |
| removed |    -2 |  13.3% → 0.0% |   2 → 0 | `LIR_Assembler::store_parameter` | `libjvm.dylib` |
| removed |    -1 |   6.7% → 0.0% |   1 → 0 | `AbstractAssembler::bind`        | `libjvm.dylib` |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `MacroAssembler::mov_metadata`   | `libjvm.dylib` |

##### `IfNode::Ideal_common` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                       | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------- | -------------- |
| -81.8% |    -9 | 84.6% → 50.0% |  11 → 2 | `PhaseIterGVN::subsume_node` | `libjvm.dylib` |

##### `IfNode::Ideal` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                 | Location       |
| -----: | ----: | ------------: | ------: | ---------------------- | -------------- |
| -69.2% |    -9 | 92.9% → 80.0% |  13 → 4 | `IfNode::Ideal_common` | `libjvm.dylib` |

##### `invokeSuspend(Object)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`)

|  Change | Delta |             % | Samples | Callee                                                           | Location                                                                                    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
|  -40.0% |    -4 | 35.7% → 31.6% |  10 → 6 | `check(CheckerSink, ResolutionContext, Candidate, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckArguments`                              |
|  -60.0% |    -3 | 17.9% → 10.5% |   5 → 2 | `check(CheckerSink, ResolutionContext, Candidate, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckExtensionReceiver`                      |
|  -66.7% |    -2 |  10.7% → 5.3% |   3 → 1 | `check(CheckerSink, ResolutionContext, Candidate, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.MapArguments`                                |
| +200.0% |    +2 |  3.6% → 15.8% |   1 → 3 | `check(CheckerSink, ResolutionContext, Candidate, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckShadowedImplicits`                      |
| removed |    -1 |   3.6% → 0.0% |   1 → 0 | `check(CheckerSink, ResolutionContext, Candidate, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckLambdaAgainstTypeVariableContradiction` |

##### `CodeEmitInfo::record_debug_info` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------------- | -------------- |
|  -33.3% |    -7 | 91.3% → 100.0% | 21 → 14 | `IRScopeDebugInfo::record_debug_info` | `libjvm.dylib` |
| removed |    -2 |    8.7% → 0.0% |   2 → 0 | `OopMap::OopMap`                      | `libjvm.dylib` |

##### `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Callee                                     | Location       |
| -----: | ----: | -------------: | ------: | ------------------------------------------ | -------------- |
| -46.7% |    -7 | 93.8% → 100.0% |  15 → 8 | `G1ScanHRForRegionClosure::scan_memregion` | `libjvm.dylib` |

##### `G1ScanHRForRegionClosure::scan_heap_roots` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                                                                                                                                                          | Location       |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| -50.0% |    -8 | 100.0% |  16 → 8 | `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` | `libjvm.dylib` |

##### `LIR_Assembler::emit_lir_list` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                              | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------- | -------------- |
|  -80.0% |    -4 |  12.8% → 3.1% |   5 → 1 | `LIR_Assembler::const2reg`          | `libjvm.dylib` |
|  +28.6% |    +2 | 17.9% → 28.1% |   7 → 9 | `LIR_Assembler::process_debug_info` | `libjvm.dylib` |
| removed |    -2 |   5.1% → 0.0% |   2 → 0 | `LIR_Assembler::safepoint_poll`     | `libjvm.dylib` |
| removed |    -1 |   2.6% → 0.0% |   1 → 0 | `LIR_Assembler::code_offset`        | `libjvm.dylib` |
| removed |    -1 |   2.6% → 0.0% |   1 → 0 | `LIR_Assembler::check_icache`       | `libjvm.dylib` |

##### `LIR_Assembler::emit_code` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                              | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------- | -------------- |
|  -17.9% |    -7 | 95.1% → 94.1% | 39 → 32 | `LIR_Assembler::emit_lir_list`      | `libjvm.dylib` |
| removed |    -1 |   2.4% → 0.0% |   1 → 0 | `LIR_Assembler::arith_op`           | `libjvm.dylib` |
|     new |    +1 |   0.0% → 2.9% |   0 → 1 | `LIR_Op1::emit_code`                | `libjvm.dylib` |
|     new |    +1 |   0.0% → 2.9% |   0 → 1 | `LIR_Assembler::process_debug_info` | `libjvm.dylib` |

##### `Compile::disconnect_useless_nodes` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                          | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------- | -------------- |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `CmpPNode::Opcode`              | `libjvm.dylib` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `Node::has_special_unique_user` | `libjvm.dylib` |

##### `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                     | Location       |
| ------: | ----: | ------------: | ------: | -------------------------- | -------------- |
| removed |    -2 |   9.5% → 0.0% |   2 → 0 | `Node::replace_by`         | `libjvm.dylib` |
|   +8.3% |    +1 | 57.1% → 86.7% | 12 → 13 | `PhaseChaitin::elide_copy` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 6.7% |   0 → 1 | `RegMask::num_registers`   | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                   | Location       |
| -----: | ----: | ------------: | ------: | ------------------------ | -------------- |
|    new |    +2 |  0.0% → 14.3% |   0 → 2 | `IndexSet::initialize`   | `libjvm.dylib` |
| -11.1% |    -1 | 45.0% → 57.1% |   9 → 8 | `PhaseLive::add_liveout` | `libjvm.dylib` |

##### `PhaseOutput::fill_buffer` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                     | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
|  -66.7% |    -2 | 25.0% → 16.7% |   3 → 1 | `NonSafepointEmitter::observe_instruction` | `libjvm.dylib` |
| removed |    -1 |   8.3% → 0.0% |   1 → 0 | `cmpL_imm0_branchNode::emit`               | `libjvm.dylib` |
| removed |    -1 |   8.3% → 0.0% |   1 → 0 | `NonSafepointEmitter::emit_non_safepoint`  | `libjvm.dylib` |
| removed |    -1 |   8.3% → 0.0% |   1 → 0 | `C2CodeStubList::emit`                     | `libjvm.dylib` |
| removed |    -1 |   8.3% → 0.0% |   1 → 0 | `RetNode::ideal_Opcode`                    | `libjvm.dylib` |

##### `LIR_Assembler::emit_slow_case_stubs` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|  -66.7% |   -10 | 71.4% → 33.3% |  15 → 5 | `CounterOverflowStub::emit_code` | `libjvm.dylib` |
|     new |    +4 |  0.0% → 26.7% |   0 → 4 | `SimpleExceptionStub::emit_code` | `libjvm.dylib` |
| removed |    -1 |   4.8% → 0.0% |   1 → 0 | `RangeCheckStub::emit_code`      | `libjvm.dylib` |
|     new |    +1 |   0.0% → 6.7% |   0 → 1 | `Assembler::bl`                  | `libjvm.dylib` |

##### `Compilation::emit_code_epilog` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                  | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
|  -28.6% |    -6 | 95.5% → 93.8% | 21 → 15 | `LIR_Assembler::emit_slow_case_stubs`   | `libjvm.dylib` |
| removed |    -1 |   4.5% → 0.0% |   1 → 0 | `LIR_Assembler::emit_exception_entries` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 6.3% |   0 → 1 | `LIR_Assembler::emit_deopt_handler`     | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                         | Location        |
| ------: | ----: | -----------: | ------: | ---------------------------------------------- | --------------- |
| removed |    -3 | 10.0% → 0.0% |   3 → 0 | `PhaseChaitin::compute_initial_block_pressure` | `libjvm.dylib`  |
| removed |    -2 |  6.7% → 0.0% |   2 → 0 | `MachNode::rematerialize`                      | `libjvm.dylib`  |
| removed |    -1 |  3.3% → 0.0% |   1 → 0 | `tlsLoadPNode::ideal_Opcode`                   | `libjvm.dylib`  |
| removed |    -1 |  3.3% → 0.0% |   1 → 0 | `tlv_get_addr`                                 | `libdyld.dylib` |
|     new |    +1 |  0.0% → 4.0% |   0 → 1 | `MachIdealNode::rule`                          | `libjvm.dylib`  |

##### `ciMethod::ensure_method_data` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                          | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------- | -------------- |
|  -75.0% |    -3 | 36.4% → 16.7% |   4 → 1 | `ciMethodData::load_data`       | `libjvm.dylib` |
| removed |    -1 |   9.1% → 0.0% |   1 → 0 | `ProfileData::translate_from`   | `libjvm.dylib` |
|  -50.0% |    -1 | 18.2% → 16.7% |   2 → 1 | `ciObjectFactory::get_metadata` | `libjvm.dylib` |
|  -25.0% |    -1 | 36.4% → 50.0% |   4 → 3 | `ciMethod::ensure_method_data`  | `libjvm.dylib` |
| removed |    -1 |   9.1% → 0.0% |   1 → 0 | `CompilationPolicy::is_mature`  | `libjvm.dylib` |

##### `NodeHash::hash_delete` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                     | Location       |
| ------: | ----: | -----------: | ------: | -------------------------- | -------------- |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `PhiNode::hash`            | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `TypePtr::hash`            | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `ConstraintCastNode::hash` | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `TypeInstPtr::hash`        | `libjvm.dylib` |

##### `G1ScanHRForRegionClosure::do_heap_region` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                                      | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------------- | -------------- |
| -50.0% |    -8 | 100.0% |  16 → 8 | `G1ScanHRForRegionClosure::scan_heap_roots` | `libjvm.dylib` |

##### `G1RemSet::scan_heap_roots` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                                     | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------------ | -------------- |
| -50.0% |    -8 | 100.0% |  16 → 8 | `G1ScanHRForRegionClosure::do_heap_region` | `libjvm.dylib` |

##### `G1CMBitMap::iterate` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                         | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- | -------------- |
|  -83.3% |    -5 | 46.2% → 20.0% |   6 → 1 | `G1CMTask::drain_local_queue`                  | `libjvm.dylib` |
|  -40.0% |    -2 | 38.5% → 60.0% |   5 → 3 | `void G1CMTask::process_grey_task_entry<true>` | `libjvm.dylib` |
| removed |    -1 |   7.7% → 0.0% |   1 → 0 | `G1CMTask::drain_global_stack`                 | `libjvm.dylib` |

##### `G1ScanHRForRegionClosure::scan_memregion` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                                                          | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------------------------------- | -------------- |
|  -38.5% |    -5 | 86.7% → 100.0% |  13 → 8 | `G1ParScanThreadState::trim_queue_to_threshold`                                 | `libjvm.dylib` |
| removed |    -2 |   13.3% → 0.0% |   2 → 0 | `HeapWordImpl** HeapRegion::oops_on_memregion_iterate<G1ScanCardClosure, true>` | `libjvm.dylib` |

##### `SystemDictionary::resolve_class_from_stream` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                    | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------------------- | -------------- |
| -12.5% |    -8 | 95.5% → 93.3% | 64 → 56 | `KlassFactory::create_from_stream`        | `libjvm.dylib` |
| +33.3% |    +1 |   4.5% → 6.7% |   3 → 4 | `SystemDictionary::define_instance_class` | `libjvm.dylib` |

##### `jvm_define_class_common` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                                        | Location       |
| -----: | ----: | -----: | ------: | --------------------------------------------- | -------------- |
| -10.4% |    -7 | 100.0% | 67 → 60 | `SystemDictionary::resolve_class_from_stream` | `libjvm.dylib` |

##### `JVM_DefineClassWithSource` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                    | Location       |
| -----: | ----: | -----: | ------: | ------------------------- | -------------- |
| -10.4% |    -7 | 100.0% | 67 → 60 | `jvm_define_class_common` | `libjvm.dylib` |

##### `IRScopeDebugInfo::record_debug_info` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                             | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------------------------- | -------------- |
| -50.0% |    -7 | 66.7% → 50.0% |  14 → 7 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
| -50.0% |    -7 | 66.7% → 50.0% |  14 → 7 | `IRScopeDebugInfo::record_debug_info`              | `libjvm.dylib` |
| -14.3% |    -1 | 33.3% → 42.9% |   7 → 6 | `DebugInformationRecorder::create_scope_values`    | `libjvm.dylib` |
|    new |    +1 |   0.0% → 7.1% |   0 → 1 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |

##### `G1CardSet::add_card` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|  -57.1% |    -4 | 58.3% → 50.0% |   7 → 3 | `G1CardSet::add_to_howl`         | `libjvm.dylib` |
| removed |    -1 |   8.3% → 0.0% |   1 → 0 | `G1CardSetHashTable::grow`       | `libjvm.dylib` |
|  -50.0% |    -1 |         16.7% |   2 → 1 | `G1CardSetHashTable::get_or_add` | `libjvm.dylib` |

##### `G1CMTask::do_marking_step` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                         | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------ | -------------- |
|  -61.5% |    -8 | 92.9% → 62.5% |  13 → 5 | `G1CMBitMap::iterate`          | `libjvm.dylib` |
|     new |    +3 |  0.0% → 37.5% |   0 → 3 | `G1CMTask::drain_local_queue`  | `libjvm.dylib` |
| removed |    -1 |   7.1% → 0.0% |   1 → 0 | `G1CMTask::drain_global_stack` | `libjvm.dylib` |

##### `G1CMConcurrentMarkingTask::work` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                      | Location       |
| -----: | ----: | -----: | ------: | --------------------------- | -------------- |
| -42.9% |    -6 | 100.0% |  14 → 8 | `G1CMTask::do_marking_step` | `libjvm.dylib` |

##### `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                                                                                 | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------ | -------------- |
|   -6.7% |    -1 | 68.2% → 82.4% | 15 → 14 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib` |
| removed |    -1 |   4.5% → 0.0% |   1 → 0 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` | `libjvm.dylib` |
| removed |    -1 |   4.5% → 0.0% |   1 → 0 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_large_object`                         | `libjvm.dylib` |

##### `readBytes` (`libjava.dylib`)

|  Change | Delta |              % | Samples | Callee              | Location                   |
| ------: | ----: | -------------: | ------: | ------------------- | -------------------------- |
|  -75.0% |    -3 | 66.7% → 100.0% |   4 → 1 | `read`              | `libsystem_kernel.dylib`   |
| removed |    -2 |   33.3% → 0.0% |   2 → 0 | `_platform_memmove` | `libsystem_platform.dylib` |

##### `consumeCallableCandidate(FirCallableSymbol, CallInfo, TowerLevelProcessor)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`)

| Change | Delta |             % | Samples | Callee                                                                                                                                 | Location                                                            |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| -36.8% |    -7 | 90.5% → 92.3% | 19 → 12 | `consumeCandidate$default(TowerLevelProcessor, FirBasedSymbol, FirExpression, FirExpression, FirScope, boolean, boolean, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelProcessor`  |
| -50.0% |    -1 |   9.5% → 7.7% |   2 → 1 | `shouldSkipCandidateWithInconsistentExtensionReceiver(FirCallableSymbol)`                                                              | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel` |

##### `invoke(Object)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda`)

| Change | Delta |             % | Samples | Callee                                                                                                                                                | Location                                                            |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| -33.3% |    -6 | 85.7% → 92.3% | 18 → 12 | `processFunctionsByName$lambda$0(FirLookupTrackerComponent, CallInfo, Ref$BooleanRef, ScopeBasedTowerLevel, TowerLevelProcessor, FirCallableSymbol)`  | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel` |
| -66.7% |    -2 |  14.3% → 7.7% |   3 → 1 | `processPropertiesByName$lambda$0(FirLookupTrackerComponent, CallInfo, Ref$BooleanRef, ScopeBasedTowerLevel, TowerLevelProcessor, FirVariableSymbol)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel` |

##### `resolveVariableAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

|  Change | Delta |              % | Samples | Callee                                                                                                                               | Location                                                 |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- |
|  -53.8% |    -7 | 92.9% → 100.0% |  13 → 6 | `resolveVariableAccessAndSelectCandidateImpl(FirQualifiedAccessExpression, boolean, ResolutionMode, boolean, FirElement, Function1)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver` |
| removed |    -1 |    7.1% → 0.0% |   1 → 0 | `linkCallSite(Object, Object, Object, Object, Object, Object[])`                                                                     | `java.lang.invoke.MethodHandleNatives`                   |

##### `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`)

| Change | Delta |      % | Samples | Callee                                                                                                                | Location                                                 |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| -57.1% |    -8 | 100.0% |  14 → 6 | `resolveVariableAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver` |

##### `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change | Delta |      % | Samples | Callee                                                                             | Location                                                                                      |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| -41.2% |    -7 | 100.0% | 17 → 10 | `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |

##### `transformPropertyAccessExpression(FirPropertyAccessExpression, Object)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change | Delta |      % | Samples | Callee                                                                           | Location                                                                                                 |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| -41.2% |    -7 | 100.0% | 17 → 10 | `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### `invoke(Object, Object)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.DispatchReceiverMemberScopeTowerLevel$$Lambda`)

| Change | Delta |             % | Samples | Callee                                                                                                                              | Location                                                                             |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| -33.3% |    -4 | 66.7% → 72.7% |  12 → 8 | `processFunctionsByName$lambda$0(FirLookupTrackerComponent, CallInfo, DispatchReceiverMemberScopeTowerLevel, FirScope, Function1)`  | `org.jetbrains.kotlin.fir.resolve.calls.tower.DispatchReceiverMemberScopeTowerLevel` |
| -50.0% |    -3 | 33.3% → 27.3% |   6 → 3 | `processPropertiesByName$lambda$0(FirLookupTrackerComponent, CallInfo, DispatchReceiverMemberScopeTowerLevel, FirScope, Function1)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.DispatchReceiverMemberScopeTowerLevel` |

##### `resolveVariableAccessAndSelectCandidateImpl$lambda$0(FirCallResolver, FirQualifiedAccessExpression, FirSimpleNamedReference, boolean, FirElement, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

| Change | Delta |      % | Samples | Callee                                                                                                                                                                                                                                                   | Location                                                 |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| -63.6% |    -7 | 100.0% |  11 → 4 | `collectCandidates$default(FirCallResolver, FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver` |

##### `invoke()` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver$$Lambda.0x000000800168ed90`)

| Change | Delta |      % | Samples | Callee                                                                                                                                                              | Location                                                 |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| -63.6% |    -7 | 100.0% |  11 → 4 | `resolveVariableAccessAndSelectCandidateImpl$lambda$0(FirCallResolver, FirQualifiedAccessExpression, FirSimpleNamedReference, boolean, FirElement, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver` |

##### `resolveVariableAccessAndSelectCandidateImpl$lambda$1(Lazy)` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

| Change | Delta |      % | Samples | Callee       | Location                |
| -----: | ----: | -----: | ------: | ------------ | ----------------------- |
| -63.6% |    -7 | 100.0% |  11 → 4 | `getValue()` | `kotlin.UnsafeLazyImpl` |

##### `resolveVariableAccessAndSelectCandidateImpl(FirQualifiedAccessExpression, boolean, ResolutionMode, boolean, FirElement, Function1)` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

| Change | Delta |             % | Samples | Callee                                                                                                                                                                               | Location                                                                                      |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| -63.6% |    -7 | 84.6% → 66.7% |  11 → 4 | `resolveVariableAccessAndSelectCandidateImpl$lambda$1(Lazy)`                                                                                                                         | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                                      |
| -66.7% |    -2 | 23.1% → 16.7% |   3 → 1 | `transformExplicitReceiverOf(FirQualifiedAccessExpression)`                                                                                                                          | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |
|    new |    +1 |  0.0% → 16.7% |   0 → 1 | `createResolvedNamedReference$default(FirCallResolver, FirReference, Name, CallInfo, Collection, CandidateApplicability, FirExpression, boolean, CallKind, Collection, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                                      |

##### `processLevel(TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`)

|  Change | Delta |              % | Samples | Callee                                                                                                      | Location                                                                 |
| ------: | ----: | -------------: | ------: | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
|  -10.9% |    -5 | 97.9% → 100.0% | 46 → 41 | `handleLevel(CandidateCollector, CandidateFactory, CallInfo, ExplicitReceiverKind, TowerGroup, TowerLevel)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelHandler`         |
| removed |    -1 |    2.1% → 0.0% |   1 → 0 | `onSuccessfulLevel(TowerGroup)`                                                                             | `org.jetbrains.kotlin.fir.resolve.calls.tower.InvokeReceiverResolveTask` |

##### `access$processLevel(FirBaseTowerResolveTask, TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`)

| Change | Delta |      % | Samples | Callee                                                                               | Location                                                               |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| -12.8% |    -6 | 100.0% | 47 → 41 | `processLevel(TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask` |

##### `runTasks()` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`)

| Change | Delta |              % | Samples | Callee                                                  | Location                                                           |
| -----: | ----: | -------------: | ------: | ------------------------------------------------------- | ------------------------------------------------------------------ |
|  -9.8% |    -5 | 98.1% → 100.0% | 51 → 46 | `resumeTask(TowerResolveManager$SuspendedResolverTask)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager` |

##### `readBytes(byte[], int, int)` (`java.io.FileInputStream`)

|  Change | Delta |             % | Samples | Callee      | Location        |
| ------: | ----: | ------------: | ------: | ----------- | --------------- |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `readBytes` | `libjava.dylib` |

##### `read(byte[], int, int)` (`java.io.FileInputStream`)

|  Change | Delta |             % | Samples | Callee                        | Location                  |
| ------: | ----: | ------------: | ------: | ----------------------------- | ------------------------- |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `readBytes(byte[], int, int)` | `java.io.FileInputStream` |

##### `fill()` (`java.io.BufferedInputStream`)

|  Change | Delta |             % | Samples | Callee                   | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------ | ------------------------- |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `read(byte[], int, int)` | `java.io.FileInputStream` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|  Change | Delta |             % | Samples | Callee                  | Location                                                                                      |
| ------: | ----: | ------------: | ------: | ----------------------- | --------------------------------------------------------------------------------------------- |
|  -32.1% |    -9 | 51.9% → 39.6% | 28 → 19 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`      |
|  -55.6% |    -5 |  16.7% → 8.3% |   9 → 4 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$2`      |
|     new |    +3 |   0.0% → 6.3% |   0 → 3 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask$runResolverForNoReceiver$1` |
| removed |    -2 |   3.7% → 0.0% |   2 → 0 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$4`      |
| removed |    -1 |   1.9% → 0.0% |   1 → 0 | `invokeSuspend(Object)` | `com.intellij.ide.plugins.PluginDescriptorLoader$loadForCoreEnv$1`                            |

##### `getValue()` (`kotlin.UnsafeLazyImpl`)

|  Change | Delta |             % | Samples | Callee     | Location                                                                                                         |
| ------: | ----: | ------------: | ------: | ---------- | ---------------------------------------------------------------------------------------------------------------- |
|  -63.6% |    -7 | 73.3% → 44.4% |  11 → 4 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver$$Lambda.0x000000800168ed90`                              |
|     new |    +4 |  0.0% → 44.4% |   0 → 4 | `invoke()` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser$$Lambda.0x000000800160ab48` |
| removed |    -1 |   6.7% → 0.0% |   1 → 0 | `invoke()` | `org.jetbrains.kotlin.fir.lightTree.fir.ValueParameter$$Lambda.0x000000040152bdf8`                               |
| removed |    -1 |   6.7% → 0.0% |   1 → 0 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerDataElementsForName$$Lambda.0x0000000401665e90`               |
| removed |    -1 |   6.7% → 0.0% |   1 → 0 | `invoke()` | `org.jetbrains.kotlin.fir.java.enhancement.FirSignatureEnhancement$$Lambda.0x00000004016121e0`                   |

##### `read(byte[], int, int)` (`java.io.BufferedInputStream`)

|  Change | Delta |            % | Samples | Callee                       | Location                         |
| ------: | ----: | -----------: | ------: | ---------------------------- | -------------------------------- |
| removed |    -4 | 80.0% → 0.0% |   4 → 0 | `implRead(byte[], int, int)` | `java.io.BufferedInputStream`    |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `lock()`                     | `jdk.internal.misc.InternalLock` |

##### `read(byte[], int, int)` (`java.io.FilterInputStream`)

|  Change | Delta |             % | Samples | Callee                   | Location                      |
| ------: | ----: | ------------: | ------: | ------------------------ | ----------------------------- |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `read(byte[], int, int)` | `java.io.BufferedInputStream` |

##### `read(byte[], int, int)` (`java.io.PushbackInputStream`)

|  Change | Delta |             % | Samples | Callee                   | Location                    |
| ------: | ----: | ------------: | ------: | ------------------------ | --------------------------- |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `read(byte[], int, int)` | `java.io.FilterInputStream` |

##### `fill()` (`java.util.zip.InflaterInputStream`)

|  Change | Delta |             % | Samples | Callee                   | Location                      |
| ------: | ----: | ------------: | ------: | ------------------------ | ----------------------------- |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `read(byte[], int, int)` | `java.io.PushbackInputStream` |

##### `read1(byte[], int, int)` (`java.io.BufferedInputStream`)

|  Change | Delta |             % | Samples | Callee   | Location                      |
| ------: | ----: | ------------: | ------: | -------- | ----------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `fill()` | `java.io.BufferedInputStream` |

##### `implRead(byte[], int, int)` (`java.io.BufferedInputStream`)

|  Change | Delta |             % | Samples | Callee                    | Location                      |
| ------: | ----: | ------------: | ------: | ------------------------- | ----------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `read1(byte[], int, int)` | `java.io.BufferedInputStream` |

##### `invoke(Class, MethodHandle, String, Object, Object, Class)` (`java.lang.invoke.BootstrapMethodInvoker`)

|  Change | Delta |              % | Samples | Callee                                                                           | Location                           |
| ------: | ----: | -------------: | ------: | -------------------------------------------------------------------------------- | ---------------------------------- |
|  -25.0% |    -3 | 92.3% → 100.0% |  12 → 9 | `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| removed |    -1 |    7.7% → 0.0% |   1 → 0 | `getClass()`                                                                     | `java.lang.Object`                 |

##### `makeSite(MethodHandle, String, MethodType, Object, Class)` (`java.lang.invoke.CallSite`)

| Change | Delta |      % | Samples | Callee                                                       | Location                                  |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------ | ----------------------------------------- |
| -30.8% |    -4 | 100.0% |  13 → 9 | `invoke(Class, MethodHandle, String, Object, Object, Class)` | `java.lang.invoke.BootstrapMethodInvoker` |

##### `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

| Change | Delta |      % | Samples | Callee                                                      | Location                    |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------- | --------------------------- |
| -30.8% |    -4 | 100.0% |  13 → 9 | `makeSite(MethodHandle, String, MethodType, Object, Class)` | `java.lang.invoke.CallSite` |

##### `linkCallSite(Object, Object, Object, Object, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

| Change | Delta |      % | Samples | Callee                                                                        | Location                               |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------- | -------------------------------------- |
| -30.8% |    -4 | 100.0% |  13 → 9 | `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

| Change | Delta |             % | Samples | Callee                                    | Location                                                 |
| -----: | ----: | ------------: | ------: | ----------------------------------------- | -------------------------------------------------------- |
|  -6.1% |    -4 |        100.0% | 66 → 62 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`                                          |
| +30.0% |    +3 | 15.2% → 21.0% | 10 → 13 | `loadClass(String)`                       | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `doPrivileged(PrivilegedAction)` (`java.security.AccessController`)

|  Change | Delta |             % | Samples | Callee                                                             | Location                         |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------ | -------------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `executePrivileged(PrivilegedAction, AccessControlContext, Class)` | `java.security.AccessController` |

##### `spinInnerClass()` (`java.lang.invoke.InnerClassLambdaMetafactory`)

| Change | Delta |              % | Samples | Callee                 | Location                                       |
| -----: | ----: | -------------: | ------: | ---------------------- | ---------------------------------------------- |
| -50.0% |    -3 | 85.7% → 100.0% |   6 → 3 | `generateInnerClass()` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `hash(Object)` (`java.util.HashMap`)

|  Change | Delta |            % | Samples | Callee       | Location                         |
| ------: | ----: | -----------: | ------: | ------------ | -------------------------------- |
| removed |    -2 | 40.0% → 0.0% |   2 → 0 | `hashCode()` | `java.lang.String`               |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `hashCode()` | `org.jetbrains.kotlin.name.Name` |

##### `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` (`java.lang.invoke.LambdaMetafactory`)

|  Change | Delta |              % | Samples | Callee                                                                                                                   | Location                                       |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| removed |    -2 |   16.7% → 0.0% |   2 → 0 | `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` | `java.lang.invoke.InnerClassLambdaMetafactory` |
|  -10.0% |    -1 | 83.3% → 100.0% |  10 → 9 | `buildCallSite()`                                                                                                        | `java.lang.invoke.InnerClassLambdaMetafactory` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in samples collected in their leaf frame.

|  Change | Delta |           % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +280.0% |   +14 | 0.4% → 1.4% |  5 → 19 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| +450.0% |    +9 | 0.2% → 0.8% |  2 → 11 | `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`) ← `PhaseIdealLoop::build_loop_late` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                      |
| +120.0% |    +6 | 0.4% → 0.8% |  5 → 11 | `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                        |
|     new |    +5 | 0.0% → 0.4% |   0 → 5 | `fwd_copy_again` (`libjvm.dylib`) ← `G1ParScanThreadState::trim_queue_to_threshold` ← `G1ScanHRForRegionClosure::scan_memregion` ← `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` ← `G1ScanHRForRegionClosure::scan_heap_roots` ← `G1ScanHRForRegionClosure::do_heap_region` ← `G1RemSet::scan_heap_roots` ← `G1EvacuateRegionsTask::scan_roots` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                   |
|     new |    +5 | 0.0% → 0.4% |   0 → 5 | `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`) ← `jni_GetPrimitiveArrayCritical` (`libjvm.dylib`) ← `Java_java_util_zip_Inflater_inflateBytesBytes` (`libzip.dylib`) ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |
|     new |    +5 | 0.0% → 0.4% |   0 → 5 | `LinearScan::build_intervals` (`libjvm.dylib`) ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                 |
| +400.0% |    +4 | 0.1% → 0.4% |   1 → 5 | `PhaseChaitin::build_ifg_virtual` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                       |
| +400.0% |    +4 | 0.1% → 0.4% |   1 → 5 | `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                        |
| +100.0% |    +4 | 0.3% → 0.6% |   4 → 8 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`) ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb` ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region` ← `HeapRegionManager::par_iterate` ← `G1RebuildRSAndScrubTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                        |
| +400.0% |    +4 | 0.1% → 0.4% |   1 → 5 | `IntervalWalker::walk_to` (`libjvm.dylib`) ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                      |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `IndexSetIterator::advance_and_next` (`libjvm.dylib`) ← `PhaseChaitin::Select` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                           |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` (`libjvm.dylib`) ← `G1ParScanThreadState::do_copy_to_survivor_space` ← `G1ParScanThreadState::trim_queue_to_threshold` ← `G1ParScanThreadState::steal_and_trim_queue` ← `G1ParEvacuateFollowersClosure::do_void` ← `G1EvacuateRegionsTask::evacuate_live_objects` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                      |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `PhaseCFG::schedule_late` (`libjvm.dylib`) ← `PhaseCFG::global_code_motion` ← `PhaseCFG::do_global_code_motion` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                              |
| +100.0% |    +3 | 0.2% → 0.4% |   3 → 6 | `PhaseLive::add_liveout` (`libjvm.dylib`) ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                         |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`) ← `void G1CMTask::process_grey_task_entry<true>` ← `G1CMTask::drain_local_queue` ← `G1CMTask::do_marking_step` ← `G1CMConcurrentMarkingTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                      |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `ServiceThread::service_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `__psynch_mutexwait` (`libsystem_kernel.dylib`) ← `_pthread_mutex_firstfit_lock_slow` (`libsystem_pthread.dylib`) ← `ThreadCritical::ThreadCritical` (`libjvm.dylib`) ← `Chunk::chop` ← `Chunk::next_chop` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                     |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `Scheduling::anti_do_def` (`libjvm.dylib`) ← `Scheduling::ComputeRegisterAntidependencies` ← `Scheduling::DoScheduling` ← `PhaseOutput::Output` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                              |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `PhaseCFG::partial_latency_of_defs` (`libjvm.dylib`) ← `PhaseCFG::global_code_motion` ← `PhaseCFG::do_global_code_motion` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                    |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `BlockListBuilder::set_leaders` (`libjvm.dylib`) ← `BlockListBuilder::BlockListBuilder` ← `GraphBuilder::GraphBuilder` ← `IRScope::IRScope` ← `IR::IR` ← `Compilation::build_hir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                       |

### Improvements

Call stacks with the largest decrease in samples collected in their leaf frame.

|  Change | Delta |           % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -39.1% |    -9 | 1.8% → 1.0% | 23 → 14 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  -88.9% |    -8 | 0.7% → 0.1% |   9 → 1 | `Unique_Node_List::remove` (`libjvm.dylib`) ← `PhaseIterGVN::remove_globally_dead_node` ← `PhaseIterGVN::subsume_node` ← `IfNode::Ideal_common` ← `IfNode::Ideal` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                               |
|  -70.0% |    -7 | 0.8% → 0.2% |  10 → 3 | `PhaseLive::compute` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  -85.7% |    -6 | 0.5% → 0.1% |   7 → 1 | `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                            |
| removed |    -5 | 0.4% → 0.0% |   5 → 0 | `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`) ← `G1ScanHRForRegionClosure::scan_memregion` ← `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` ← `G1ScanHRForRegionClosure::scan_heap_roots` ← `G1ScanHRForRegionClosure::do_heap_region` ← `G1RemSet::scan_heap_roots` ← `G1EvacuateRegionsTask::scan_roots` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                    |
| removed |    -5 | 0.4% → 0.0% |   5 → 0 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`) ← `void G1CMTask::process_grey_task_entry<true>` ← `G1CMTask::drain_local_queue` ← `G1CMBitMap::iterate` ← `G1CMTask::do_marking_step` ← `G1CMConcurrentMarkingTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                            |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `IndexSetIterator::advance_and_next` (`libjvm.dylib`) ← `PhaseLive::add_liveout` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                |
|  -57.1% |    -4 | 0.5% → 0.2% |   7 → 3 | `PhaseIdealLoop::split_if_with_blocks` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                 |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` (`libjvm.dylib`) ← `G1ParScanThreadState::do_copy_to_survivor_space` ← `G1ParScanThreadState::trim_queue_to_threshold` ← `G1ScanHRForRegionClosure::scan_memregion` ← `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` ← `G1ScanHRForRegionClosure::scan_heap_roots` ← `G1ScanHRForRegionClosure::do_heap_region` ← `G1RemSet::scan_heap_roots` ← `G1EvacuateRegionsTask::scan_roots` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start` |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `LinearScan::compute_local_live_sets` (`libjvm.dylib`) ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                       |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `sys_icache_invalidate` (`libsystem_platform.dylib`) ← `nmethod::nmethod` (`libjvm.dylib`) ← `nmethod::new_nmethod` ← `ciEnv::register_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                             |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`) ← `G1ParScanThreadState::trim_queue_to_threshold` ← `G1ScanHRForRegionClosure::scan_memregion` ← `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` ← `G1ScanHRForRegionClosure::scan_heap_roots` ← `G1ScanHRForRegionClosure::do_heap_region` ← `G1RemSet::scan_heap_roots` ← `G1EvacuateRegionsTask::scan_roots` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `RegionNode::is_CFG` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                               |
|  -60.0% |    -3 | 0.4% → 0.1% |   5 → 2 | `Node::dominates` (`libjvm.dylib`) ← `MemNode::all_controls_dominate` ← `InitializeNode::detect_init_independence` ← `InitializeNode::can_capture_store` ← `StoreNode::Ideal` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                   |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `PhaseIdealLoop::Dominators` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                           |
|  -60.0% |    -3 | 0.4% → 0.1% |   5 → 2 | `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                              |
|  -60.0% |    -3 | 0.4% → 0.1% |   5 → 2 | `G1CardSet::add_to_howl` (`libjvm.dylib`) ← `G1CardSet::add_card` ← `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb` ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region` ← `HeapRegionManager::par_iterate` ← `G1RebuildRSAndScrubTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                   |
|   -7.1% |    -3 | 3.2% → 2.9% | 42 → 39 | `inflate_fast` (`libzip.dylib`) ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                              |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `IndexSetIterator::advance_and_next` (`libjvm.dylib`) ← `PhaseChaitin::build_ifg_virtual` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                              |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `LIRGenerator::state_for` (`libjvm.dylib`) ← `LIRGenerator::do_ProfileInvoke` ← `LIRGenerator::block_do` ← `BlockList::iterate_forward` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                     |

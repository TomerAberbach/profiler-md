# Sampling profile

Collected 2,791 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Native           | 93.3% |   2,604 |
| Compiler         |  4.6% |     129 |
| Ours             |  1.0% |      29 |
| Standard library |  0.5% |      14 |
| Unknown          |  0.5% |      13 |
| JIT              |  0.1% |       2 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 2,302 samples (82.5%) thread_start at libsystem_pthread.dylib
│   └── 2,302 samples (82.5%) _pthread_start
│       ├── 2,205 samples (79.0%) thread_native_entry at libjvm.dylib
│       │   └── 2,205 samples (79.0%) Thread::call_run
│       │       ├── 911 samples (32.6%) WorkerThread::run
│       │       │   ├── 898 samples (32.2%, self 36.0% globally) semaphore_wait_trap at libsystem_kernel.dylib
│       │       │   └── … 2 samples (0.1%) fwd_copy_again at libjvm.dylib
│       │       ├── 820 samples (29.4%) JavaThread::thread_main_inner
│       │       │   ├── 341 samples (12.2%) CompileBroker::compiler_thread_loop
│       │       │   │   ├── 174 samples (6.2%) CompileBroker::invoke_compiler_on_method
│       │       │   │   │   ├── 125 samples (4.5%) C2Compiler::compile_method
│       │       │   │   │   │   └── 125 samples (4.5%) Compile::Compile
│       │       │   │   │   │       ├── 72 samples (2.6%) Compile::Code_Gen
│       │       │   │   │   │       │   ├── 35 samples (1.3%) PhaseChaitin::Register_Allocate
│       │       │   │   │   │       │   │   ├── 7 samples (0.3%) PhaseChaitin::build_ifg_physical
│       │       │   │   │   │       │   │   ├── 6 samples (0.2%) PhaseChaitin::Split
│       │       │   │   │   │       │   │   ├── 5 samples (0.2%) PhaseLive::compute
│       │       │   │   │   │       │   │   │   └── 2 samples (0.1%) IndexSet::initialize
│       │       │   │   │   │       │   │   └── 5 samples (0.2%) PhaseChaitin::post_allocate_copy_removal
│       │       │   │   │   │       │   ├── 15 samples (0.5%) Matcher::match
│       │       │   │   │   │       │   │   └── 5 samples (0.2%) Matcher::find_shared
│       │       │   │   │   │       │   └── … 2 samples (0.1%) Scheduling::ComputeRegisterAntidependencies at libjvm.dylib
│       │       │   │   │   │       ├── 35 samples (1.3%) Compile::Optimize
│       │       │   │   │   │       │   ├── 9 samples (0.3%) PhaseIdealLoop::optimize
│       │       │   │   │   │       │   └── … 3 samples (0.1%) PhaseIdealLoop::build_loop_early at libjvm.dylib
│       │       │   │   │   │       └── 18 samples (0.6%) 4 more callees, led by (0.5%) ParseGenerator::generate
│       │       │   │   │   └── 49 samples (1.8%) Compiler::compile_method …
│       │       │   │   └── … 166 samples (5.9%, self 46.8% globally) __psynch_cvwait at libsystem_kernel.dylib
│       │       │   └── 479 samples (17.2%) 5 more callees, led by (3.4%) JvmtiAgentThread::start_function_wrapper
│       │       ├── 282 samples (10.1%) ConcurrentGCThread::run
│       │       │   └── 282 samples (10.1%) 3 more callees, led by (3.4%) G1ConcurrentMarkThread::run_service
│       │       └── 192 samples (6.9%) 2 more callees, led by (3.4%) VMThread::run
│       └── … 96 samples (3.4%) __ulock_wait at libsystem_kernel.dylib
├── … 96 samples (3.4%) mach_msg2_trap at libsystem_kernel.dylib
├── 90 samples (3.2%) main(String[]) at org.jetbrains.kotlin.preloading.Preloader
│   └── 90 samples (3.2%) run(String[])
│       ├── 75 samples (2.7%) invoke(Object, Object[]) at java.lang.reflect.Method …
│       └── … 7 samples (0.3%) inflate_fast at libzip.dylib
├── 13 samples (0.5%) (anonymous)
└── 290 samples (10.4%) 4 more root frames, led by (3.4%) run() at java.lang.ref.Finalizer$FinalizerThread
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|     % | Samples | Function                                    | Location                  |
| ----: | ------: | ------------------------------------------- | ------------------------- |
| 46.8% |   1,305 | `__psynch_cvwait`                           | `libsystem_kernel.dylib`  |
| 36.0% |   1,004 | `semaphore_wait_trap`                       | `libsystem_kernel.dylib`  |
|  3.4% |      96 | `mach_msg2_trap`                            | `libsystem_kernel.dylib`  |
|  3.4% |      96 | `__ulock_wait`                              | `libsystem_kernel.dylib`  |
|  0.5% |      13 | `(anonymous)`                               | `<unknown>`               |
|  0.3% |       7 | `inflate_fast`                              | `libzip.dylib`            |
|  0.3% |       7 | `SymbolTable::do_lookup`                    | `libjvm.dylib`            |
|  0.2% |       5 | `tlv_get_addr`                              | `libdyld.dylib`           |
|  0.2% |       5 | `PhaseChaitin::Split`                       | `libjvm.dylib`            |
|  0.1% |       4 | `__psynch_mutexwait`                        | `libsystem_kernel.dylib`  |
|  0.1% |       4 | `PhaseIdealLoop::build_loop_early`          | `libjvm.dylib`            |
|  0.1% |       3 | `fwd_copy_again`                            | `libjvm.dylib`            |
|  0.1% |       3 | `IndexSet::initialize`                      | `libjvm.dylib`            |
|  0.1% |       3 | `PhaseChaitin::build_ifg_physical`          | `libjvm.dylib`            |
|  0.1% |       3 | `PhaseChaitin::post_allocate_copy_removal`  | `libjvm.dylib`            |
|  0.1% |       3 | `pthread_jit_write_protect_np`              | `libsystem_pthread.dylib` |
|  0.1% |       2 | `os::malloc`                                | `libjvm.dylib`            |
|  0.1% |       2 | `Matcher::find_shared`                      | `libjvm.dylib`            |
|  0.1% |       2 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib`            |
|  0.1% |       2 | `PhaseRemoveUseless::PhaseRemoveUseless`    | `libjvm.dylib`            |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Native

|     % | Samples | Function                                                                                               | Location                   |
| ----: | ------: | ------------------------------------------------------------------------------------------------------ | -------------------------- |
| 46.8% |   1,305 | `__psynch_cvwait`                                                                                      | `libsystem_kernel.dylib`   |
| 36.0% |   1,004 | `semaphore_wait_trap`                                                                                  | `libsystem_kernel.dylib`   |
|  3.4% |      96 | `mach_msg2_trap`                                                                                       | `libsystem_kernel.dylib`   |
|  3.4% |      96 | `__ulock_wait`                                                                                         | `libsystem_kernel.dylib`   |
|  0.3% |       7 | `inflate_fast`                                                                                         | `libzip.dylib`             |
|  0.3% |       7 | `SymbolTable::do_lookup`                                                                               | `libjvm.dylib`             |
|  0.2% |       5 | `tlv_get_addr`                                                                                         | `libdyld.dylib`            |
|  0.1% |       4 | `__psynch_mutexwait`                                                                                   | `libsystem_kernel.dylib`   |
|  0.1% |       3 | `fwd_copy_again`                                                                                       | `libjvm.dylib`             |
|  0.1% |       3 | `pthread_jit_write_protect_np`                                                                         | `libsystem_pthread.dylib`  |
|  0.1% |       2 | `os::malloc`                                                                                           | `libjvm.dylib`             |
|  0.1% |       2 | `G1CardSet::add_to_howl`                                                                               | `libjvm.dylib`             |
|  0.1% |       2 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib`             |
|  0.1% |       2 | `forward_copy_longs`                                                                                   | `<unknown>`                |
|  0.1% |       2 | `InstanceKlass::find_method_index`                                                                     | `libjvm.dylib`             |
|  0.1% |       2 | `_platform_memcmp`                                                                                     | `libsystem_platform.dylib` |
|  0.1% |       2 | `_platform_memset`                                                                                     | `libsystem_platform.dylib` |
| <0.1% |       1 | `G1BlockOffsetTablePart::update_for_block_work`                                                        | `libjvm.dylib`             |
| <0.1% |       1 | `G1ParScanThreadState::trim_queue_to_threshold`                                                        | `libjvm.dylib`             |
| <0.1% |       1 | `nanov2_find_block_and_allocate`                                                                       | `libsystem_malloc.dylib`   |

##### Compiler

|    % | Samples | Function                                        | Location       |
| ---: | ------: | ----------------------------------------------- | -------------- |
| 0.2% |       5 | `PhaseChaitin::Split`                           | `libjvm.dylib` |
| 0.1% |       4 | `PhaseIdealLoop::build_loop_early`              | `libjvm.dylib` |
| 0.1% |       3 | `IndexSet::initialize`                          | `libjvm.dylib` |
| 0.1% |       3 | `PhaseChaitin::build_ifg_physical`              | `libjvm.dylib` |
| 0.1% |       3 | `PhaseChaitin::post_allocate_copy_removal`      | `libjvm.dylib` |
| 0.1% |       2 | `Matcher::find_shared`                          | `libjvm.dylib` |
| 0.1% |       2 | `PhaseIdealLoop::build_loop_late_post_work`     | `libjvm.dylib` |
| 0.1% |       2 | `PhaseRemoveUseless::PhaseRemoveUseless`        | `libjvm.dylib` |
| 0.1% |       2 | `PhaseOutput::BuildOopMaps`                     | `libjvm.dylib` |
| 0.1% |       2 | `Unique_Node_List::remove`                      | `libjvm.dylib` |
| 0.1% |       2 | `RegionNode::is_CFG`                            | `libjvm.dylib` |
| 0.1% |       2 | `PhaseChaitin::elide_copy`                      | `libjvm.dylib` |
| 0.1% |       2 | `PhiNode::Ideal`                                | `libjvm.dylib` |
| 0.1% |       2 | `ciObjectFactory::get_metadata`                 | `libjvm.dylib` |
| 0.1% |       2 | `CProjNode::is_block_proj`                      | `libjvm.dylib` |
| 0.1% |       2 | `Node::Node`                                    | `libjvm.dylib` |
| 0.1% |       2 | `LinearScan::build_intervals`                   | `libjvm.dylib` |
| 0.1% |       2 | `CodeBuffer::finalize_oop_references`           | `libjvm.dylib` |
| 0.1% |       2 | `LIR_OpVisitState::visit`                       | `libjvm.dylib` |
| 0.1% |       2 | `LinearScanWalker::free_collect_inactive_fixed` | `libjvm.dylib` |

##### Ours

|     % | Samples | Function                                                                                                                                                                           | Location                                                                             |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| <0.1% |       1 | `zzUnpackcmap_blocks(String, int, int[])`                                                                                                                                          | `org.jetbrains.kotlin.lexer._JetLexer`                                               |
| <0.1% |       1 | `<init>()`                                                                                                                                                                         | `org.jetbrains.kotlin.KtSourceElement`                                               |
| <0.1% |       1 | `<init>(FirModuleData, FirDeclarationOrigin, KtSourceElement, List, FirTypeRef, boolean, FirPropertySymbol, FirDeclarationStatus, FirResolvePhase, int, DefaultConstructorMarker)` | `org.jetbrains.kotlin.fir.declarations.impl.FirDefaultPropertyBackingField`          |
| <0.1% |       1 | `newBuilderForType()`                                                                                                                                                              | `org.jetbrains.kotlin.metadata.jvm.JvmProtoBuf$JvmMethodSignature`                   |
| <0.1% |       1 | `hasSupertypePathToParameter$toNextTypeParameter(ConeKotlinType)`                                                                                                                  | `org.jetbrains.kotlin.fir.resolve.transformers.FirTypeResolveTransformer`            |
| <0.1% |       1 | `invoke(Object, Object, Object)`                                                                                                                                                   | `org.jetbrains.kotlin.fir.symbols.FirLazyDeclarationResolverKt$lazyResolveToPhase$1` |
| <0.1% |       1 | `transformValueParameters(FirTransformer, Object)`                                                                                                                                 | `org.jetbrains.kotlin.fir.declarations.impl.FirAnonymousFunctionImpl`                |
| <0.1% |       1 | `orderNodes(boolean)`                                                                                                                                                              | `org.jetbrains.kotlin.fir.resolve.dfa.cfg.ControlFlowGraph`                          |
| <0.1% |       1 | `hashCode()`                                                                                                                                                                       | `org.jetbrains.kotlin.fir.types.ConeLookupTagBasedType`                              |
| <0.1% |       1 | `isProperConstraint(ResultTypeResolver$Context, Constraint)`                                                                                                                       | `org.jetbrains.kotlin.resolve.calls.inference.components.ResultTypeResolver`         |
| <0.1% |       1 | `runResolverForInvoke(CallInfo, ExpressionReceiverValue, Continuation)`                                                                                                            | `org.jetbrains.kotlin.fir.resolve.calls.tower.InvokeFunctionResolveTask`             |
| <0.1% |       1 | `processOverriddenFunctions(FirTypeScope, FirNamedFunctionSymbol, Function1)`                                                                                                      | `org.jetbrains.kotlin.fir.scopes.FirTypeScopeKt`                                     |
| <0.1% |       1 | `get(FirDeclarationStatusImpl$Modifier)`                                                                                                                                           | `org.jetbrains.kotlin.fir.declarations.impl.FirDeclarationStatusImpl`                |
| <0.1% |       1 | `<init>(KtSourceElement, FirResolvePhase, FirModuleData, FirDeclarationOrigin, FirDeclarationAttributes, FirReceiverParameterSymbol, FirTypeRef, FirBasedSymbol, List)`            | `org.jetbrains.kotlin.fir.declarations.impl.FirReceiverParameterImpl`                |
| <0.1% |       1 | `buildSubstitutorForOverridesCheck(FirCallableDeclaration, FirCallableDeclaration, FirSession)`                                                                                    | `org.jetbrains.kotlin.fir.scopes.impl.FirAbstractOverrideCheckerKt`                  |
| <0.1% |       1 | `isLower()`                                                                                                                                                                        | `org.jetbrains.kotlin.resolve.calls.inference.model.ConstraintKind`                  |
| <0.1% |       1 | `isSubtypeOfForSingleClassifierType(TypeCheckerState, TypeSystemContext, RigidTypeMarker, RigidTypeMarker)`                                                                        | `org.jetbrains.kotlin.types.AbstractTypeChecker`                                     |
| <0.1% |       1 | `collectConflictingLocalFunctionsFrom(CheckerContext, FirBlock)`                                                                                                                   | `org.jetbrains.kotlin.fir.analysis.checkers.FirConflictsHelpersKt`                   |
| <0.1% |       1 | `checkAllRepeatedAnnotations(CheckerContext, DiagnosticReporter, FirTypeRef)`                                                                                                      | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirAnnotationChecker`        |
| <0.1% |       1 | `isEnabled(CheckerContext)`                                                                                                                                                        | `org.jetbrains.kotlin.fir.analysis.checkers.extra.FirUnusedExpressionChecker`        |

#### Lines

Lines with the largest contribution to each function's self samples.

##### `zzUnpackcmap_blocks(String, int, int[])` (`org.jetbrains.kotlin.lexer._JetLexer`)

|      % | Samples | Location                                   |
| -----: | ------: | ------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.lexer._JetLexer:286` |

##### `<init>()` (`org.jetbrains.kotlin.KtSourceElement`)

|      % | Samples | Location                                   |
| -----: | ------: | ------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.KtSourceElement:640` |

##### `<init>(FirModuleData, FirDeclarationOrigin, KtSourceElement, List, FirTypeRef, boolean, FirPropertySymbol, FirDeclarationStatus, FirResolvePhase, int, DefaultConstructorMarker)` (`org.jetbrains.kotlin.fir.declarations.impl.FirDefaultPropertyBackingField`)

|      % | Samples | Location                                                                       |
| -----: | ------: | ------------------------------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.declarations.impl.FirDefaultPropertyBackingField:22` |

##### `newBuilderForType()` (`org.jetbrains.kotlin.metadata.jvm.JvmProtoBuf$JvmMethodSignature`)

|      % | Samples | Location                                                                |
| -----: | ------: | ----------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.metadata.jvm.JvmProtoBuf$JvmMethodSignature:2366` |

##### `hasSupertypePathToParameter$toNextTypeParameter(ConeKotlinType)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirTypeResolveTransformer`)

|      % | Samples | Location                                                                      |
| -----: | ------: | ----------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.resolve.transformers.FirTypeResolveTransformer:355` |

##### `invoke(Object, Object, Object)` (`org.jetbrains.kotlin.fir.symbols.FirLazyDeclarationResolverKt$lazyResolveToPhase$1`)

|      % | Samples | Location                                                                                 |
| -----: | ------: | ---------------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.symbols.FirLazyDeclarationResolverKt$lazyResolveToPhase$1:134` |

##### `transformValueParameters(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirAnonymousFunctionImpl`)

|      % | Samples | Location                                                                  |
| -----: | ------: | ------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.declarations.impl.FirAnonymousFunctionImpl:129` |

##### `orderNodes(boolean)` (`org.jetbrains.kotlin.fir.resolve.dfa.cfg.ControlFlowGraph`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.resolve.dfa.cfg.ControlFlowGraph:68` |

##### `hashCode()` (`org.jetbrains.kotlin.fir.types.ConeLookupTagBasedType`)

|      % | Samples | Location                                                    |
| -----: | ------: | ----------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.types.ConeLookupTagBasedType:126` |

##### `isProperConstraint(ResultTypeResolver$Context, Constraint)` (`org.jetbrains.kotlin.resolve.calls.inference.components.ResultTypeResolver`)

|      % | Samples | Location                                                                         |
| -----: | ------: | -------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.resolve.calls.inference.components.ResultTypeResolver:530` |

##### `runResolverForInvoke(CallInfo, ExpressionReceiverValue, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.InvokeFunctionResolveTask`)

|      % | Samples | Location                                                                     |
| -----: | ------: | ---------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.resolve.calls.tower.InvokeFunctionResolveTask:551` |

##### `processOverriddenFunctions(FirTypeScope, FirNamedFunctionSymbol, Function1)` (`org.jetbrains.kotlin.fir.scopes.FirTypeScopeKt`)

|      % | Samples | Location                                             |
| -----: | ------: | ---------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.scopes.FirTypeScopeKt:101` |

##### `get(FirDeclarationStatusImpl$Modifier)` (`org.jetbrains.kotlin.fir.declarations.impl.FirDeclarationStatusImpl`)

|      % | Samples | Location                                                                 |
| -----: | ------: | ------------------------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.declarations.impl.FirDeclarationStatusImpl:31` |

##### `<init>(KtSourceElement, FirResolvePhase, FirModuleData, FirDeclarationOrigin, FirDeclarationAttributes, FirReceiverParameterSymbol, FirTypeRef, FirBasedSymbol, List)` (`org.jetbrains.kotlin.fir.declarations.impl.FirReceiverParameterImpl`)

|      % | Samples | Location                                                                 |
| -----: | ------: | ------------------------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.declarations.impl.FirReceiverParameterImpl:27` |

##### `buildSubstitutorForOverridesCheck(FirCallableDeclaration, FirCallableDeclaration, FirSession)` (`org.jetbrains.kotlin.fir.scopes.impl.FirAbstractOverrideCheckerKt`)

|      % | Samples | Location                                                               |
| -----: | ------: | ---------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.scopes.impl.FirAbstractOverrideCheckerKt:39` |

##### `isLower()` (`org.jetbrains.kotlin.resolve.calls.inference.model.ConstraintKind`)

|      % | Samples | Location                                                                |
| -----: | ------: | ----------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.resolve.calls.inference.model.ConstraintKind:112` |

##### `isSubtypeOfForSingleClassifierType(TypeCheckerState, TypeSystemContext, RigidTypeMarker, RigidTypeMarker)` (`org.jetbrains.kotlin.types.AbstractTypeChecker`)

|      % | Samples | Location                                             |
| -----: | ------: | ---------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.types.AbstractTypeChecker:434` |

##### `collectConflictingLocalFunctionsFrom(CheckerContext, FirBlock)` (`org.jetbrains.kotlin.fir.analysis.checkers.FirConflictsHelpersKt`)

|      % | Samples | Location                                                               |
| -----: | ------: | ---------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.analysis.checkers.FirConflictsHelpersKt:643` |

##### `checkAllRepeatedAnnotations(CheckerContext, DiagnosticReporter, FirTypeRef)` (`org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirAnnotationChecker`)

|      % | Samples | Location                                                                          |
| -----: | ------: | --------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirAnnotationChecker:497` |

##### `isEnabled(CheckerContext)` (`org.jetbrains.kotlin.fir.analysis.checkers.extra.FirUnusedExpressionChecker`)

|      % | Samples | Location                                                                         |
| -----: | ------: | -------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.analysis.checkers.extra.FirUnusedExpressionChecker:19` |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location                 |
| ----: | ------: | ----------------------- | ------------------------ |
| 78.0% |   1,018 | `PlatformMonitor::wait` | `libjvm.dylib`           |
|  7.4% |      96 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |
|  7.4% |      96 | `PlatformEvent::park`   | `libjvm.dylib`           |
|  7.3% |      95 | `Parker::park`          | `libjvm.dylib`           |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 89.4% |     898 | `WorkerThread::run`              | `libjvm.dylib` |
|  9.6% |      96 | `os::signal_wait`                | `libjvm.dylib` |
|  0.7% |       7 | `WorkerThreads::run_task`        | `libjvm.dylib` |
|  0.3% |       3 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |

##### `mach_msg2_trap` (`libsystem_kernel.dylib`)

|      % | Samples | Caller               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% |      96 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `__ulock_wait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |      96 | `CallJavaMainInNewThread` | `libjli.dylib` |

##### `inflate_fast` (`libzip.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |       7 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `SymbolTable::do_lookup` (`libjvm.dylib`)

|     % | Samples | Caller                     | Location       |
| ----: | ------: | -------------------------- | -------------- |
| 85.7% |       6 | `SymbolTable::lookup_only` | `libjvm.dylib` |
| 14.3% |       1 | `SymbolTable::new_symbol`  | `libjvm.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|     % | Samples | Caller                                           | Location       |
| ----: | ------: | ------------------------------------------------ | -------------- |
| 20.0% |       1 | `minI_reg_regNode::Expand`                       | `libjvm.dylib` |
| 20.0% |       1 | `PhaseChaitin::Register_Allocate`                | `libjvm.dylib` |
| 20.0% |       1 | `PhaseChaitin::stretch_base_pointer_live_ranges` | `libjvm.dylib` |
| 20.0% |       1 | `PhaseAggressiveCoalesce::insert_copies`         | `libjvm.dylib` |
| 20.0% |       1 | `Parse::catch_inline_exceptions`                 | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       5 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |       4 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       4 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `fwd_copy_again` (`libjvm.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |       3 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |

##### `IndexSet::initialize` (`libjvm.dylib`)

|     % | Samples | Caller               | Location       |
| ----: | ------: | -------------------- | -------------- |
| 66.7% |       2 | `PhaseLive::compute` | `libjvm.dylib` |
| 33.3% |       1 | `PhaseIFG::init`     | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       3 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       3 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                                      | Location       |
| ----: | ------: | ------------------------------------------- | -------------- |
| 33.3% |       1 | `jni_GetPrimitiveArrayCritical`             | `libjvm.dylib` |
| 33.3% |       1 | `SharedRuntime::resolve_opt_virtual_call_C` | `libjvm.dylib` |
| 33.3% |       1 | `InterpreterRuntime::anewarray`             | `libjvm.dylib` |

##### `os::malloc` (`libjvm.dylib`)

|     % | Samples | Caller                                                                                                                                                                                                                                                   | Location       |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| 50.0% |       1 | `AllocateHeap`                                                                                                                                                                                                                                           | `libjvm.dylib` |
| 50.0% |       1 | `bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::internal_insert_get<SymbolTableLookup, bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::insert<SymbolTableLookup>(Thread*, SymbolTableLookup&, Symbol const&, bool*, bool*)::NOP>` | `libjvm.dylib` |

##### `Matcher::find_shared` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       2 | `Matcher::match` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       2 | `PhaseIdealLoop::build_loop_late` | `libjvm.dylib` |

##### `PhaseRemoveUseless::PhaseRemoveUseless` (`libjvm.dylib`)

|      % | Samples | Caller                                 | Location       |
| -----: | ------: | -------------------------------------- | -------------- |
| 100.0% |       2 | `PhaseRenumberLive::PhaseRenumberLive` | `libjvm.dylib` |

##### `G1CardSet::add_to_howl` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |       2 | `G1CardSet::add_card` | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|      % | Samples | Caller                                                                   | Location       |
| -----: | ------: | ------------------------------------------------------------------------ | -------------- |
| 100.0% |       2 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` | `libjvm.dylib` |

##### `forward_copy_longs` (`<unknown>`)

|     % | Samples | Caller                             | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 50.0% |       1 | `arrayof_jlong_disjoint_arraycopy` | `<unknown>` |
| 50.0% |       1 | `jbyte_disjoint_arraycopy`         | `<unknown>` |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

|      % | Samples | Caller                                  | Location       |
| -----: | ------: | --------------------------------------- | -------------- |
| 100.0% |       2 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |

##### `_platform_memcmp` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 50.0% |       1 | `ciInstanceKlass::is_in_package`           | `libjvm.dylib` |
| 50.0% |       1 | `DebugInformationRecorder::describe_scope` | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                          | Location       |
| ----: | ------: | ----------------------------------------------- | -------------- |
| 50.0% |       1 | `PhaseIdealLoop::build_and_optimize`            | `libjvm.dylib` |
| 50.0% |       1 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |

##### `PhaseOutput::BuildOopMaps` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |       2 | `PhaseOutput::Output` | `libjvm.dylib` |

##### `Unique_Node_List::remove` (`libjvm.dylib`)

|      % | Samples | Caller                                    | Location       |
| -----: | ------: | ----------------------------------------- | -------------- |
| 100.0% |       2 | `PhaseIterGVN::remove_globally_dead_node` | `libjvm.dylib` |

##### `RegionNode::is_CFG` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       2 | `PhaseIdealLoop::build_loop_tree` | `libjvm.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       2 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `PhiNode::Ideal` (`libjvm.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 50.0% |       1 | `PhaseIterGVN::transform_old`    | `libjvm.dylib` |
| 50.0% |       1 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 50.0% |       1 | `ciEnv::get_klass_by_index_impl` | `libjvm.dylib` |
| 50.0% |       1 | `ciEnv::get_klass_by_name_impl`  | `libjvm.dylib` |

##### `CProjNode::is_block_proj` (`libjvm.dylib`)

|     % | Samples | Caller                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 50.0% |       1 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |
| 50.0% |       1 | `PhaseChaitin::Split`          | `libjvm.dylib` |

##### `Node::Node` (`libjvm.dylib`)

|     % | Samples | Caller                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 50.0% |       1 | `GraphKit::make_runtime_call` | `libjvm.dylib` |
| 50.0% |       1 | `PhaseIterGVN::subsume_node`  | `libjvm.dylib` |

##### `LinearScan::build_intervals` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |       2 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `CodeBuffer::finalize_oop_references` (`libjvm.dylib`)

|      % | Samples | Caller                 | Location       |
| -----: | ------: | ---------------------- | -------------- |
| 100.0% |       2 | `nmethod::new_nmethod` | `libjvm.dylib` |

##### `LIR_OpVisitState::visit` (`libjvm.dylib`)

|     % | Samples | Caller                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 50.0% |       1 | `LinearScan::build_intervals` | `libjvm.dylib` |
| 50.0% |       1 | `LinearScan::do_linear_scan`  | `libjvm.dylib` |

##### `LinearScanWalker::free_collect_inactive_fixed` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |       2 | `LinearScanWalker::alloc_free_reg` | `libjvm.dylib` |

##### `G1BlockOffsetTablePart::update_for_block_work` (`libjvm.dylib`)

|      % | Samples | Caller                                            | Location       |
| -----: | ------: | ------------------------------------------------- | -------------- |
| 100.0% |       1 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`)

|      % | Samples | Caller                                       | Location       |
| -----: | ------: | -------------------------------------------- | -------------- |
| 100.0% |       1 | `G1ParScanThreadState::steal_and_trim_queue` | `libjvm.dylib` |

##### `nanov2_find_block_and_allocate` (`libsystem_malloc.dylib`)

|      % | Samples | Caller                     | Location                 |
| -----: | ------: | -------------------------- | ------------------------ |
| 100.0% |       1 | `nanov2_allocate_outlined` | `libsystem_malloc.dylib` |

##### `zzUnpackcmap_blocks(String, int, int[])` (`org.jetbrains.kotlin.lexer._JetLexer`)

|      % | Samples | Caller                  | Location                               |
| -----: | ------: | ----------------------- | -------------------------------------- |
| 100.0% |       1 | `zzUnpackcmap_blocks()` | `org.jetbrains.kotlin.lexer._JetLexer` |

##### `<init>()` (`org.jetbrains.kotlin.KtSourceElement`)

|      % | Samples | Caller                             | Location                               |
| -----: | ------: | ---------------------------------- | -------------------------------------- |
| 100.0% |       1 | `<init>(DefaultConstructorMarker)` | `org.jetbrains.kotlin.KtSourceElement` |

##### `<init>(FirModuleData, FirDeclarationOrigin, KtSourceElement, List, FirTypeRef, boolean, FirPropertySymbol, FirDeclarationStatus, FirResolvePhase, int, DefaultConstructorMarker)` (`org.jetbrains.kotlin.fir.declarations.impl.FirDefaultPropertyBackingField`)

|      % | Samples | Caller                                                                                                            | Location                                                                         |
| -----: | ------: | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| 100.0% |       1 | `convertBackingField(LighterASTNode, FirPropertySymbol, ModifierList, FirTypeRef, boolean, List, LighterASTNode)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder` |

##### `newBuilderForType()` (`org.jetbrains.kotlin.metadata.jvm.JvmProtoBuf$JvmMethodSignature`)

|      % | Samples | Caller                | Location                                                           |
| -----: | ------: | --------------------- | ------------------------------------------------------------------ |
| 100.0% |       1 | `newBuilderForType()` | `org.jetbrains.kotlin.metadata.jvm.JvmProtoBuf$JvmMethodSignature` |

##### `hasSupertypePathToParameter$toNextTypeParameter(ConeKotlinType)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirTypeResolveTransformer`)

|      % | Samples | Caller                                                                 | Location                                                                  |
| -----: | ------: | ---------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| 100.0% |       1 | `hasSupertypePathToParameter(FirTypeParameter, FirTypeParameter, Set)` | `org.jetbrains.kotlin.fir.resolve.transformers.FirTypeResolveTransformer` |

##### `invoke(Object, Object, Object)` (`org.jetbrains.kotlin.fir.symbols.FirLazyDeclarationResolverKt$lazyResolveToPhase$1`)

|      % | Samples | Caller                                                                             | Location                                                        |
| -----: | ------: | ---------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| 100.0% |       1 | `invokeLazyResolveToPhase(FirElementWithResolveState, FirResolvePhase, Function3)` | `org.jetbrains.kotlin.fir.symbols.FirLazyDeclarationResolverKt` |

##### `transformValueParameters(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirAnonymousFunctionImpl`)

|      % | Samples | Caller                                             | Location                                                              |
| -----: | ------: | -------------------------------------------------- | --------------------------------------------------------------------- |
| 100.0% |       1 | `transformValueParameters(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.declarations.impl.FirAnonymousFunctionImpl` |

##### `orderNodes(boolean)` (`org.jetbrains.kotlin.fir.resolve.dfa.cfg.ControlFlowGraph`)

|      % | Samples | Caller       | Location                                                    |
| -----: | ------: | ------------ | ----------------------------------------------------------- |
| 100.0% |       1 | `complete()` | `org.jetbrains.kotlin.fir.resolve.dfa.cfg.ControlFlowGraph` |

##### `hashCode()` (`org.jetbrains.kotlin.fir.types.ConeLookupTagBasedType`)

|      % | Samples | Caller                                                                                                                                                                  | Location                                                        |
| -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| 100.0% |       1 | `<init>(ConstraintKind, KotlinTypeMarker, IncorporationConstraintPosition, int, Set, boolean, boolean, OnlyInputTypeConstraintPosition, int, DefaultConstructorMarker)` | `org.jetbrains.kotlin.resolve.calls.inference.model.Constraint` |

##### `isProperConstraint(ResultTypeResolver$Context, Constraint)` (`org.jetbrains.kotlin.resolve.calls.inference.components.ResultTypeResolver`)

|      % | Samples | Caller                                                                                              | Location                                                                     |
| -----: | ------: | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 100.0% |       1 | `findResultIfThereIsEqualsConstraint(ResultTypeResolver$Context, VariableWithConstraints, boolean)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ResultTypeResolver` |

##### `runResolverForInvoke(CallInfo, ExpressionReceiverValue, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.InvokeFunctionResolveTask`)

|      % | Samples | Caller                  | Location                                                                                                      |
| -----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirInvokeResolveTowerExtension$enqueueResolverTasksForInvoke$3` |

##### `processOverriddenFunctions(FirTypeScope, FirNamedFunctionSymbol, Function1)` (`org.jetbrains.kotlin.fir.scopes.FirTypeScopeKt`)

|      % | Samples | Caller                                                                         | Location                                                               |
| -----: | ------: | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| 100.0% |       1 | `isHiddenForThisCallSite(CheckerSink, FirCallableSymbol, CallInfo, Candidate)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckHiddenDeclaration` |

##### `get(FirDeclarationStatusImpl$Modifier)` (`org.jetbrains.kotlin.fir.declarations.impl.FirDeclarationStatusImpl`)

|      % | Samples | Caller       | Location                                                              |
| -----: | ------: | ------------ | --------------------------------------------------------------------- |
| 100.0% |       1 | `isInline()` | `org.jetbrains.kotlin.fir.declarations.impl.FirDeclarationStatusImpl` |

##### `<init>(KtSourceElement, FirResolvePhase, FirModuleData, FirDeclarationOrigin, FirDeclarationAttributes, FirReceiverParameterSymbol, FirTypeRef, FirBasedSymbol, List)` (`org.jetbrains.kotlin.fir.declarations.impl.FirReceiverParameterImpl`)

|      % | Samples | Caller                                                                                                                                                                                            | Location                                                              |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| 100.0% |       1 | `<init>(KtSourceElement, FirResolvePhase, FirModuleData, FirDeclarationOrigin, FirDeclarationAttributes, FirReceiverParameterSymbol, FirTypeRef, FirBasedSymbol, List, DefaultConstructorMarker)` | `org.jetbrains.kotlin.fir.declarations.impl.FirReceiverParameterImpl` |

##### `buildSubstitutorForOverridesCheck(FirCallableDeclaration, FirCallableDeclaration, FirSession)` (`org.jetbrains.kotlin.fir.scopes.impl.FirAbstractOverrideCheckerKt`)

|      % | Samples | Caller                                                                                                | Location                                                          |
| -----: | ------: | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 100.0% |       1 | `buildTypeParametersSubstitutorIfCompatible(FirCallableDeclaration, FirCallableDeclaration, boolean)` | `org.jetbrains.kotlin.fir.scopes.impl.FirStandardOverrideChecker` |

##### `isLower()` (`org.jetbrains.kotlin.resolve.calls.inference.model.ConstraintKind`)

|      % | Samples | Caller                                                                   | Location                                                             |
| -----: | ------: | ------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| 100.0% |       1 | `hasRequiredKind(Constraint, CalculatorForNestedCall$FixationDirection)` | `org.jetbrains.kotlin.fir.resolve.inference.CalculatorForNestedCall` |

##### `isSubtypeOfForSingleClassifierType(TypeCheckerState, TypeSystemContext, RigidTypeMarker, RigidTypeMarker)` (`org.jetbrains.kotlin.types.AbstractTypeChecker`)

|      % | Samples | Caller                                                                                                  | Location                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| 100.0% |       1 | `completeIsSubTypeOf(TypeCheckerState, TypeSystemContext, KotlinTypeMarker, KotlinTypeMarker, boolean)` | `org.jetbrains.kotlin.types.AbstractTypeChecker` |

##### `collectConflictingLocalFunctionsFrom(CheckerContext, FirBlock)` (`org.jetbrains.kotlin.fir.analysis.checkers.FirConflictsHelpersKt`)

|      % | Samples | Caller                                                                            | Location                                                                              |
| -----: | ------: | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| 100.0% |       1 | `checkForLocalConflictingFunctions(CheckerContext, DiagnosticReporter, FirBlock)` | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirConflictsExpressionChecker` |

##### `checkAllRepeatedAnnotations(CheckerContext, DiagnosticReporter, FirTypeRef)` (`org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirAnnotationChecker`)

|      % | Samples | Caller                                                                                 | Location                                                                      |
| -----: | ------: | -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| 100.0% |       1 | `checkAnnotationContainer(CheckerContext, DiagnosticReporter, FirAnnotationContainer)` | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirAnnotationChecker` |

##### `isEnabled(CheckerContext)` (`org.jetbrains.kotlin.fir.analysis.checkers.extra.FirUnusedExpressionChecker`)

|      % | Samples | Caller                                                      | Location                                                                      |
| -----: | ------: | ----------------------------------------------------------- | ----------------------------------------------------------------------------- |
| 100.0% |       1 | `check(CheckerContext, DiagnosticReporter, FirDeclaration)` | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirUnusedCheckerBase` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                                   | Location                  |
| ----: | ------: | ------------------------------------------ | ------------------------- |
| 82.5% |   2,302 | `_pthread_start`                           | `libsystem_pthread.dylib` |
| 82.5% |   2,302 | `thread_start`                             | `libsystem_pthread.dylib` |
| 79.0% |   2,205 | `Thread::call_run`                         | `libjvm.dylib`            |
| 79.0% |   2,205 | `thread_native_entry`                      | `libjvm.dylib`            |
| 46.8% |   1,305 | `__psynch_cvwait`                          | `libsystem_kernel.dylib`  |
| 36.5% |   1,018 | `PlatformMonitor::wait`                    | `libjvm.dylib`            |
| 36.0% |   1,004 | `semaphore_wait_trap`                      | `libsystem_kernel.dylib`  |
| 32.6% |     911 | `WorkerThread::run`                        | `libjvm.dylib`            |
| 29.4% |     820 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
| 27.0% |     753 | `Monitor::wait_without_safepoint_check`    | `libjvm.dylib`            |
| 12.2% |     341 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
| 10.1% |     282 | `ConcurrentGCThread::run`                  | `libjvm.dylib`            |
|  9.5% |     265 | `Monitor::wait`                            | `libjvm.dylib`            |
|  6.9% |     192 | `JLI_Launch`                               | `libjli.dylib`            |
|  6.9% |     192 | `main`                                     | `java`                    |
|  6.2% |     174 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  6.0% |     167 | `CompileQueue::get`                        | `libjvm.dylib`            |
|  4.5% |     125 | `Compile::Compile`                         | `libjvm.dylib`            |
|  4.5% |     125 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
|  3.5% |      97 | `unknown`                                  | `<unknown>`               |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Native

|     % | Samples | Function                                   | Location                  |
| ----: | ------: | ------------------------------------------ | ------------------------- |
| 82.5% |   2,302 | `_pthread_start`                           | `libsystem_pthread.dylib` |
| 82.5% |   2,302 | `thread_start`                             | `libsystem_pthread.dylib` |
| 79.0% |   2,205 | `Thread::call_run`                         | `libjvm.dylib`            |
| 79.0% |   2,205 | `thread_native_entry`                      | `libjvm.dylib`            |
| 46.8% |   1,305 | `__psynch_cvwait`                          | `libsystem_kernel.dylib`  |
| 36.5% |   1,018 | `PlatformMonitor::wait`                    | `libjvm.dylib`            |
| 36.0% |   1,004 | `semaphore_wait_trap`                      | `libsystem_kernel.dylib`  |
| 32.6% |     911 | `WorkerThread::run`                        | `libjvm.dylib`            |
| 29.4% |     820 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
| 27.0% |     753 | `Monitor::wait_without_safepoint_check`    | `libjvm.dylib`            |
| 10.1% |     282 | `ConcurrentGCThread::run`                  | `libjvm.dylib`            |
|  9.5% |     265 | `Monitor::wait`                            | `libjvm.dylib`            |
|  6.9% |     192 | `JLI_Launch`                               | `libjli.dylib`            |
|  6.9% |     192 | `main`                                     | `java`                    |
|  3.5% |      97 | `unknown`                                  | `<unknown>`               |
|  3.4% |      96 | `VMThread::run`                            | `libjvm.dylib`            |
|  3.4% |      96 | `Profiler::timerLoop`                      | `libasyncProfiler.dylib`  |
|  3.4% |      96 | `JvmtiAgentThread::start_function_wrapper` | `libjvm.dylib`            |
|  3.4% |      96 | `G1ConcurrentMarkThread::run_service`      | `libjvm.dylib`            |
|  3.4% |      96 | `mach_msg2_trap`                           | `libsystem_kernel.dylib`  |

##### Compiler

|     % | Samples | Function                                   | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 12.2% |     341 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
|  6.2% |     174 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  6.0% |     167 | `CompileQueue::get`                        | `libjvm.dylib` |
|  4.5% |     125 | `Compile::Compile`                         | `libjvm.dylib` |
|  4.5% |     125 | `C2Compiler::compile_method`               | `libjvm.dylib` |
|  2.6% |      72 | `Compile::Code_Gen`                        | `libjvm.dylib` |
|  1.8% |      49 | `Compilation::Compilation`                 | `libjvm.dylib` |
|  1.7% |      48 | `Compilation::compile_method`              | `libjvm.dylib` |
|  1.5% |      41 | `Compilation::compile_java_method`         | `libjvm.dylib` |
|  1.3% |      35 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
|  1.3% |      35 | `Compile::Optimize`                        | `libjvm.dylib` |
|  0.8% |      22 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
|  0.8% |      21 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
|  0.8% |      21 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
|  0.6% |      17 | `Compilation::emit_lir`                    | `libjvm.dylib` |
|  0.6% |      16 | `Compilation::build_hir`                   | `libjvm.dylib` |
|  0.5% |      15 | `Matcher::match`                           | `libjvm.dylib` |
|  0.5% |      13 | `Compile::optimize_loops`                  | `libjvm.dylib` |
|  0.5% |      13 | `LinearScan::do_linear_scan`               | `libjvm.dylib` |
|  0.4% |      10 | `PhaseOutput::Output`                      | `libjvm.dylib` |

##### Ours

|    % | Samples | Function                                                                                                                                      | Location                                                    |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| 3.2% |      90 | `run(String[])`                                                                                                                               | `org.jetbrains.kotlin.preloading.Preloader`                 |
| 3.2% |      90 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`                 |
| 2.7% |      75 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`     |
| 2.7% |      75 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`      |
| 2.7% |      75 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                |
| 2.7% |      74 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`     |
| 2.6% |      73 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`               |
| 2.6% |      73 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`               |
| 2.6% |      73 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`     |
| 2.6% |      72 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`               |
| 2.5% |      70 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`           |
| 2.5% |      70 | `phaseBody(LoggingContext, Object)`                                                                                                           | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`           |
| 2.5% |      70 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`     |
| 2.5% |      70 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase` |
| 2.5% |      70 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`                                                                          | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`        |
| 2.5% |      70 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`     |
| 2.5% |      70 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`     |
| 2.5% |      70 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`     |
| 2.5% |      70 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`     |
| 2.5% |      70 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Caller         | Location                  |
| -----: | ------: | -------------- | ------------------------- |
| 100.0% |   2,302 | `thread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |   2,205 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Caller           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   2,205 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location                 |
| ----: | ------: | ----------------------- | ------------------------ |
| 78.0% |   1,018 | `PlatformMonitor::wait` | `libjvm.dylib`           |
|  7.4% |      96 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |
|  7.4% |      96 | `PlatformEvent::park`   | `libjvm.dylib`           |
|  7.3% |      95 | `Parker::park`          | `libjvm.dylib`           |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 74.0% |     753 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |
| 26.0% |     265 | `Monitor::wait`                         | `libjvm.dylib` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 89.4% |     898 | `WorkerThread::run`              | `libjvm.dylib` |
|  9.6% |      96 | `os::signal_wait`                | `libjvm.dylib` |
|  0.7% |       7 | `WorkerThreads::run_task`        | `libjvm.dylib` |
|  0.3% |       3 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     911 | `Thread::call_run` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     820 | `Thread::call_run` | `libjvm.dylib` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

|     % | Samples | Caller                                                   | Location       |
| ----: | ------: | -------------------------------------------------------- | -------------- |
| 12.7% |      96 | `ServiceThread::service_thread_entry`                    | `libjvm.dylib` |
| 12.7% |      96 | `G1ServiceThread::wait_for_task`                         | `libjvm.dylib` |
| 12.7% |      96 | `WatcherThread::sleep`                                   | `libjvm.dylib` |
| 12.7% |      96 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib` |
| 12.6% |      95 | `NotificationThread::notification_thread_entry`          | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |     341 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     282 | `Thread::call_run` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|     % | Samples | Caller                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 62.6% |     166 | `CompileQueue::get`               | `libjvm.dylib` |
| 36.2% |      96 | `JVM_WaitForReferencePendingList` | `libjvm.dylib` |
|  1.1% |       3 | `VMThread::wait_until_executed`   | `libjvm.dylib` |

##### `JLI_Launch` (`libjli.dylib`)

|      % | Samples | Caller | Location |
| -----: | ------: | ------ | -------- |
| 100.0% |     192 | `main` | `java`   |

##### `main` (`java`)

|     % | Samples | Caller       | Location       |
| ----: | ------: | ------------ | -------------- |
| 50.0% |      96 | `unknown`    | `<unknown>`    |
| 50.0% |      96 | `apple_main` | `libjli.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |     174 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |     167 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |     125 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |     125 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `unknown` (`<unknown>`)

|    % | Samples | Caller                  | Location                 |
| ---: | ------: | ----------------------- | ------------------------ |
| 1.0% |       1 | `unknown`               | `<unknown>`              |
| 1.0% |       1 | `Profiler::dlopen_hook` | `libasyncProfiler.dylib` |

##### `VMThread::run` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      96 | `Thread::call_run` | `libjvm.dylib` |

##### `Profiler::timerLoop` (`libasyncProfiler.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |      96 | `JvmtiAgentThread::start_function_wrapper` | `libjvm.dylib` |

##### `JvmtiAgentThread::start_function_wrapper` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |      96 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `G1ConcurrentMarkThread::run_service` (`libjvm.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |      96 | `ConcurrentGCThread::run` | `libjvm.dylib` |

##### `mach_msg2_trap` (`libsystem_kernel.dylib`)

|      % | Samples | Caller               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% |      96 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % | Samples | Caller           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |      90 | `main(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Caller           | Location                                               |
| -----: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% |      75 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|      % | Samples | Caller           | Location                                     |
| -----: | ------: | ---------------- | -------------------------------------------- |
| 100.0% |      75 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Caller                         | Location                                             |
| -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% |      75 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000301008000` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Caller                          | Location                                                |
| -----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 100.0% |      74 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                         | Location                                      |
| -----: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% |      73 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                                 | Location                                                |
| -----: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 100.0% |      73 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Caller                                                                                             | Location                                                |
| -----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |      73 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      72 | `Compile::Compile` | `libjvm.dylib` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                                   | Location                                      |
| -----: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 100.0% |      72 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Caller                              | Location                                          |
| -----: | ------: | ----------------------------------- | ------------------------------------------------- |
| 100.0% |      70 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Caller                                                     | Location                                                |
| -----: | ------: | ---------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |      70 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % | Samples | Caller                                                                | Location                                                          |
| -----: | ------: | --------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 100.0% |      70 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`            | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase`       |
|   4.3% |       3 | `invoke(PhaseConfig, PhaserState, LoweringContext, IrModuleFragment)` | `org.jetbrains.kotlin.backend.common.phaser.PerformByIrFilePhase` |
|   2.9% |       2 | `runPhase(NamedCompilerPhase, Object, boolean)`                       | `org.jetbrains.kotlin.backend.common.phaser.PhaseEngine`          |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`)

|      % | Samples | Caller                                                               | Location                                             |
| -----: | ------: | -------------------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% |      70 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt` |

##### `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`)

|      % | Samples | Caller                                         | Location                                                |
| -----: | ------: | ---------------------------------------------- | ------------------------------------------------------- |
| 100.0% |      70 | `runPhasedPipeline(ArgumentsPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                                                              | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |      70 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                                                                                                        | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |      70 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                         | Location                                                |
| -----: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |      70 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                                | Location                                     |
| -----: | ------: | --------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |      70 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Caller                                                                 | Location                                     |
| -----: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |      70 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      49 | `Compiler::compile_method` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      48 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |      41 | `Compilation::compile_method` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      35 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      35 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 59.1% |      13 | `Compile::optimize_loops` | `libjvm.dylib` |
| 40.9% |       9 | `Compile::Optimize`       | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |      21 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      21 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      17 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      16 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      15 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      13 | `Compile::Optimize` | `libjvm.dylib` |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

|      % | Samples | Caller                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |      13 | `Compilation::emit_lir` | `libjvm.dylib` |

##### `PhaseOutput::Output` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      10 | `Compile::Code_Gen` | `libjvm.dylib` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 95.8% |   2,205 | `thread_native_entry` | `libjvm.dylib` |
|  4.2% |      96 | `apple_main`          | `libjli.dylib` |
| <0.1% |       1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   2,302 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 41.3% |     911 | `WorkerThread::run`             | `libjvm.dylib` |
| 37.2% |     820 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| 12.8% |     282 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
|  4.4% |      96 | `VMThread::run`                 | `libjvm.dylib` |
|  4.4% |      96 | `WatcherThread::run`            | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   2,205 | `Thread::call_run` | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|      % | Samples | Callee            | Location                 |
| -----: | ------: | ----------------- | ------------------------ |
| 100.0% |   1,018 | `__psynch_cvwait` | `libsystem_kernel.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location                 |
| ----: | ------: | --------------------------------- | ------------------------ |
| 98.6% |     898 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
|  0.8% |       7 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
|  0.5% |       5 | `G1RebuildRSAndScrubTask::work`   | `libjvm.dylib`           |
|  0.1% |       1 | `G1CMConcurrentMarkingTask::work` | `libjvm.dylib`           |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|     % | Samples | Callee                                                   | Location       |
| ----: | ------: | -------------------------------------------------------- | -------------- |
| 41.6% |     341 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib` |
| 11.7% |      96 | `JvmtiAgentThread::start_function_wrapper`               | `libjvm.dylib` |
| 11.7% |      96 | `ServiceThread::service_thread_entry`                    | `libjvm.dylib` |
| 11.7% |      96 | `signal_thread_entry`                                    | `libjvm.dylib` |
| 11.7% |      96 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |     753 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 51.0% |     174 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
| 49.0% |     167 | `CompileQueue::get`                        | `libjvm.dylib` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 34.0% |      96 | `G1ConcurrentMarkThread::run_service`   | `libjvm.dylib` |
| 34.0% |      96 | `G1ServiceThread::run_service`          | `libjvm.dylib` |
| 31.9% |      90 | `G1ConcurrentRefineThread::run_service` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |     265 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `JLI_Launch` (`libjli.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 50.0% |      96 | `CreateExecutionEnvironment` | `libjli.dylib` |
| 50.0% |      96 | `ContinueInNewThread`        | `libjli.dylib` |

##### `main` (`java`)

|      % | Samples | Callee       | Location       |
| -----: | ------: | ------------ | -------------- |
| 100.0% |     192 | `JLI_Launch` | `libjli.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 71.8% |     125 | `C2Compiler::compile_method` | `libjvm.dylib` |
| 28.2% |      49 | `Compiler::compile_method`   | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 99.4% |     166 | `Monitor::wait`                  | `libjvm.dylib` |
|  0.6% |       1 | `CompilationPolicy::select_task` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 57.6% |      72 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 28.0% |      35 | `Compile::Optimize`                      | `libjvm.dylib` |
| 12.0% |      15 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  0.8% |       1 | `TypeFunc::make`                         | `libjvm.dylib` |
|  0.8% |       1 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     125 | `Compile::Compile` | `libjvm.dylib` |

##### `unknown` (`<unknown>`)

|     % | Samples | Callee    | Location    |
| ----: | ------: | --------- | ----------- |
| 99.0% |      96 | `main`    | `java`      |
|  1.0% |       1 | `unknown` | `<unknown>` |

##### `VMThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 95.8% |      92 | `VMThread::wait_for_operation` | `libjvm.dylib` |
|  4.2% |       4 | `VMThread::inner_execute`      | `libjvm.dylib` |

##### `Profiler::timerLoop` (`libasyncProfiler.dylib`)

|      % | Samples | Callee            | Location                 |
| -----: | ------: | ----------------- | ------------------------ |
| 100.0% |      96 | `__psynch_cvwait` | `libsystem_kernel.dylib` |

##### `JvmtiAgentThread::start_function_wrapper` (`libjvm.dylib`)

|      % | Samples | Callee                | Location                 |
| -----: | ------: | --------------------- | ------------------------ |
| 100.0% |      96 | `Profiler::timerLoop` | `libasyncProfiler.dylib` |

##### `G1ConcurrentMarkThread::run_service` (`libjvm.dylib`)

|     % | Samples | Callee                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 94.8% |      91 | `Monitor::wait_without_safepoint_check`            | `libjvm.dylib` |
|  5.2% |       5 | `G1ConcurrentMarkThread::concurrent_mark_cycle_do` | `libjvm.dylib` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|     % | Samples | Callee                                                                       | Location                                               |
| ----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 83.3% |      75 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                             |
| 16.7% |      15 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % | Samples | Callee          | Location                                    |
| -----: | ------: | --------------- | ------------------------------------------- |
| 100.0% |      90 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|     % | Samples | Callee                                                                                             | Location                                                |
| ----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 98.7% |      74 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  1.3% |       1 | `setupIdeaStandaloneExecution()`                                                                   | `org.jetbrains.kotlin.cli.jvm.compiler.CompatKt`        |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|      % | Samples | Callee                          | Location                                                |
| -----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 100.0% |      75 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee           | Location                                               |
| -----: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% |      75 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|     % | Samples | Callee                                                 | Location                                                |
| ----: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 98.6% |      73 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  1.4% |       1 | `defaultMessageRenderer()`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                                               | Location                                                                |
| ----: | ------: | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| 98.6% |      72 | `exec(MessageCollector, Services, CommonCompilerArguments)`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|  1.4% |       1 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                                                   | Location                                      |
| -----: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 100.0% |      73 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                                         | Location                                      |
| -----: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% |      73 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 48.6% |      35 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 20.8% |      15 | `Matcher::match`                  | `libjvm.dylib` |
| 13.9% |      10 | `PhaseOutput::Output`             | `libjvm.dylib` |
| 12.5% |       9 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  4.2% |       3 | `PhaseOutput::install_code`       | `libjvm.dylib` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                          | Location                                      |
| ----: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| 97.2% |      70 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |
|  2.8% |       2 | `<clinit>()`                                                    | `org.jetbrains.kotlin.cli.common.ArgumentsKt` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|     % | Samples | Callee                           | Location                                                              |
| ----: | ------: | -------------------------------- | --------------------------------------------------------------------- |
| 67.1% |      47 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`      |
| 24.3% |      17 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`       |
|  7.1% |       5 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`        |
|  1.4% |       1 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmConfigurationPipelinePhase` |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Callee                                         | Location                                          |
| -----: | ------: | ---------------------------------------------- | ------------------------------------------------- |
| 100.0% |      70 | `phaseBody(PipelineContext, PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % | Samples | Callee                                                               | Location                                                         |
| -----: | ------: | -------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 100.0% |      70 | `phaseBody(LoggingContext, Object)`                                  | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
|   2.9% |       2 | `phaseBody(LoggingContext, Object)`                                  | `org.jetbrains.kotlin.backend.common.phaser.ModuleLoweringPhase` |
|   2.9% |       2 | `phaseBody(LoggingContext, Object)`                                  | `org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase`   |
|   1.4% |       1 | `runAfter(PhaseConfig, PhaserState, LoggingContext, Object, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`          |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`)

|      % | Samples | Callee                                                     | Location                                                |
| -----: | ------: | ---------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |      70 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`)

|      % | Samples | Callee                                                     | Location                                                    |
| -----: | ------: | ---------------------------------------------------------- | ----------------------------------------------------------- |
| 100.0% |      70 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                                               | Location                                             |
| -----: | ------: | -------------------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% |      70 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                         | Location                                                |
| -----: | ------: | ---------------------------------------------- | ------------------------------------------------------- |
| 100.0% |      70 | `runPhasedPipeline(ArgumentsPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                                                                              | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |      70 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                                                                                                                        | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |      70 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee                                                         | Location                                                |
| -----: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |      70 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 98.0% |      48 | `Compilation::compile_method` | `libjvm.dylib` |
|  2.0% |       1 | `ciMethod::can_be_compiled`   | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 85.4% |      41 | `Compilation::compile_java_method` | `libjvm.dylib` |
| 14.6% |       7 | `ciEnv::register_method`           | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 41.5% |      17 | `Compilation::emit_lir`       | `libjvm.dylib` |
| 39.0% |      16 | `Compilation::build_hir`      | `libjvm.dylib` |
| 19.5% |       8 | `Compilation::emit_code_body` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 20.0% |       7 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
| 17.1% |       6 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| 14.3% |       5 | `PhaseLive::compute`                       | `libjvm.dylib` |
| 14.3% |       5 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
|  5.7% |       2 | `PhaseChaitin::build_ifg_virtual`          | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 37.1% |      13 | `Compile::optimize_loops`              | `libjvm.dylib` |
| 25.7% |       9 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
| 14.3% |       5 | `PhaseIterGVN::optimize`               | `libjvm.dylib` |
|  5.7% |       2 | `PhaseCCP::PhaseCCP`                   | `libjvm.dylib` |
|  5.7% |       2 | `PhaseRenumberLive::PhaseRenumberLive` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 95.5% |      21 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|  4.5% |       1 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 23.8% |       5 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| 23.8% |       5 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |
| 14.3% |       3 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
|  9.5% |       2 | `PhaseIdealLoop::build_loop_tree`      | `libjvm.dylib` |
|  9.5% |       2 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Callee                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      21 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 76.5% |      13 | `LinearScan::do_linear_scan` | `libjvm.dylib` |
| 23.5% |       4 | `BlockList::iterate_forward` | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 62.5% |      10 | `IR::IR`                           | `libjvm.dylib` |
| 12.5% |       2 | `IR::compute_code`                 | `libjvm.dylib` |
|  6.3% |       1 | `RangeCheckElimination::eliminate` | `libjvm.dylib` |
|  6.3% |       1 | `IR::split_critical_edges`         | `libjvm.dylib` |
|  6.3% |       1 | `IR::eliminate_null_checks`        | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|     % | Samples | Callee                 | Location       |
| ----: | ------: | ---------------------- | -------------- |
| 60.0% |       9 | `Matcher::xform`       | `libjvm.dylib` |
| 33.3% |       5 | `Matcher::find_shared` | `libjvm.dylib` |
|  6.7% |       1 | `AddINode::Opcode`     | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % | Samples | Callee                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      13 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 46.2% |       6 | `LinearScan::allocate_registers`              | `libjvm.dylib` |
| 30.8% |       4 | `LinearScan::build_intervals`                 | `libjvm.dylib` |
|  7.7% |       1 | `LinearScan::assign_reg_num`                  | `libjvm.dylib` |
|  7.7% |       1 | `LIR_OpVisitState::visit`                     | `libjvm.dylib` |
|  7.7% |       1 | `LinearScan::sort_intervals_after_allocation` | `libjvm.dylib` |

##### `PhaseOutput::Output` (`libjvm.dylib`)

|     % | Samples | Callee                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 30.0% |       3 | `PhaseOutput::BuildOopMaps`             | `libjvm.dylib` |
| 30.0% |       3 | `Scheduling::DoScheduling`              | `libjvm.dylib` |
| 10.0% |       1 | `PhaseOutput::fill_buffer`              | `libjvm.dylib` |
| 10.0% |       1 | `PhaseOutput::init_scratch_buffer_blob` | `libjvm.dylib` |
| 10.0% |       1 | `PhaseOutput::shorten_branches`         | `libjvm.dylib` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 32.2% |     898 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThread::run` (`libjvm.dylib`) ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  5.9% |     166 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                      |
|  3.4% |      96 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Profiler::timerLoop` (`libasyncProfiler.dylib`) ← `JvmtiAgentThread::start_function_wrapper` (`libjvm.dylib`) ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                |
|  3.4% |      96 | `mach_msg2_trap` (`libsystem_kernel.dylib`) ← `mach_msg_overwrite` ← `mach_msg` ← `__CFRunLoopServiceMachPort` (`CoreFoundation`) ← `__CFRunLoopRun` ← `CFRunLoopRunSpecific` ← `CreateExecutionEnvironment` (`libjli.dylib`) ← `JLI_Launch` ← `main` (`java`) ← `unknown`                                                                                                                                                                                                                                                                                                                                                                                                  |
|  3.4% |      96 | `__ulock_wait` (`libsystem_kernel.dylib`) ← `CallJavaMainInNewThread` (`libjli.dylib`) ← `ContinueInNewThread` ← `JLI_Launch` ← `main` (`java`) ← `apple_main` (`libjli.dylib`) ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  3.4% |      96 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `ServiceThread::service_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                    |
|  3.4% |      96 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ServiceThread::wait_for_task` ← `G1ServiceThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                              |
|  3.4% |      96 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `os::signal_wait` (`libjvm.dylib`) ← `signal_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                |
|  3.4% |      96 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `WatcherThread::sleep` ← `WatcherThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                              |
|  3.4% |      96 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformEvent::park` (`libjvm.dylib`) ← `ObjectMonitor::wait` ← `ObjectSynchronizer::wait` ← `JVM_MonitorWait` ← `wait0(long)` (`java.lang.Object`) ← `wait(long)` ← `wait()` ← `await()` (`java.lang.ref.NativeReferenceQueue`) ← `remove0()` (`java.lang.ref.ReferenceQueue`) ← `remove()` (`java.lang.ref.NativeReferenceQueue`) ← `run()` (`java.lang.ref.Finalizer$FinalizerThread`)                                                                                                                                                                                                                                   |
|  3.4% |      96 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `JVM_WaitForReferencePendingList` ← `waitForReferencePendingList()` (`java.lang.ref.Reference`) ← `processPendingReferences()` ← `run()` (`java.lang.ref.Reference$ReferenceHandler`)                                                                                                                                                                                                                                                                                                                                                                           |
|  3.4% |      96 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `MonitorDeflationThread::monitor_deflation_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                 |
|  3.4% |      95 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`) ← `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `await(long)` (`java.lang.ref.ReferenceQueue`) ← `remove0(long)` ← `remove(long)` ← `run()` (`jdk.internal.ref.CleanerImpl`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()` ← `run()` (`jdk.internal.misc.InnocuousThread`)                                                                                                  |
|  3.4% |      95 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `NotificationThread::notification_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                          |
|  3.3% |      92 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `VMThread::wait_for_operation` ← `VMThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                           |
|  3.3% |      91 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ConcurrentMarkThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                          |
|  3.2% |      90 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` ← `G1ConcurrentRefineThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                        |
|  0.3% |       7 | `inflate_fast` (`libzip.dylib`) ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |
|  0.2% |       5 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                    |
|  0.1% |       4 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThreads::run_task` (`libjvm.dylib`) ← `G1ConcurrentRebuildAndScrub::rebuild_and_scrub` ← `G1ConcurrentMarkThread::phase_rebuild_and_scrub` ← `G1ConcurrentMarkThread::concurrent_mark_cycle_do` ← `G1ConcurrentMarkThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                  |

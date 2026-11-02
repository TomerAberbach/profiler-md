# Sampling profile

Collected 2,722 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Native           | 94.8% |   2,580 |
| Compiler         |  3.8% |     104 |
| Ours             |  1.0% |      28 |
| Standard library |  0.3% |       8 |
| JIT              |  0.1% |       2 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 2,255 samples (82.8%) thread_start at libsystem_pthread.dylib
│   └── 2,255 samples (82.8%) _pthread_start
│       ├── 2,160 samples (79.4%) thread_native_entry at libjvm.dylib
│       │   └── 2,160 samples (79.4%) Thread::call_run
│       │       ├── 891 samples (32.7%) WorkerThread::run
│       │       │   ├── 871 samples (32.0%, self 35.8% globally) semaphore_wait_trap at libsystem_kernel.dylib
│       │       │   └── 14 samples (0.5%) G1EvacuateRegionsBaseTask::work
│       │       │       ├── … 4 samples (0.1%) fwd_copy_again at libjvm.dylib
│       │       │       └── … 3 samples (0.1%) G1ParScanThreadState::do_copy_to_survivor_space at libjvm.dylib
│       │       ├── 799 samples (29.4%) JavaThread::thread_main_inner
│       │       │   ├── 331 samples (12.2%) CompileBroker::compiler_thread_loop
│       │       │   │   ├── … 177 samples (6.5%, self 47.8% globally) __psynch_cvwait at libsystem_kernel.dylib
│       │       │   │   └── 153 samples (5.6%) CompileBroker::invoke_compiler_on_method
│       │       │   │       ├── 102 samples (3.7%) C2Compiler::compile_method
│       │       │   │       │   └── 101 samples (3.7%) Compile::Compile
│       │       │   │       │       ├── 43 samples (1.6%) Compile::Code_Gen
│       │       │   │       │       │   ├── 26 samples (1.0%) PhaseChaitin::Register_Allocate
│       │       │   │       │       │   │   ├── 2 samples (0.1%) PhaseChaitin::Simplify
│       │       │   │       │       │   │   │   └── 2 samples (0.1%) IndexSetIterator::advance_and_next
│       │       │   │       │       │   │   └── 24 samples (0.9%) 12 more callees, led by (0.2%) PhaseChaitin::build_ifg_physical
│       │       │   │       │       │   └── 6 samples (0.2%) Matcher::match
│       │       │   │       │       └── 58 samples (2.1%) 3 more callees, led by (1.5%) Compile::Optimize
│       │       │   │       └── … 44 samples (1.6%) Compilation::compile_java_method at libjvm.dylib
│       │       │   │           ├── … 11 samples (0.4%) GraphBuilder::iterate_bytecodes_for_block at libjvm.dylib
│       │       │   │           │   └── … 2 samples (0.1%) ciObjectFactory::get_metadata at libjvm.dylib
│       │       │   │           └── … 8 samples (0.3%) IntervalWalker::walk_to at libjvm.dylib
│       │       │   └── 468 samples (17.2%) 5 more callees, led by (3.5%) ServiceThread::service_thread_entry
│       │       ├── 282 samples (10.4%) ConcurrentGCThread::run
│       │       │   └── 282 samples (10.4%) 3 more callees, led by (3.5%) G1ConcurrentMarkThread::run_service
│       │       └── 188 samples (6.9%) 2 more callees, led by (3.5%) WatcherThread::run
│       └── … 94 samples (3.5%) __ulock_wait at libsystem_kernel.dylib
├── … 94 samples (3.5%) mach_msg2_trap at libsystem_kernel.dylib
├── 90 samples (3.3%) main(String[]) at org.jetbrains.kotlin.preloading.Preloader
│   └── 90 samples (3.3%) run(String[])
│       ├── 75 samples (2.8%) invoke(Object, Object[]) at java.lang.reflect.Method …
│       └── … 12 samples (0.4%) Java_java_util_zip_Inflater_inflateBytesBytes at libzip.dylib
│           ├── 8 samples (0.3%) inflate_fast
│           └── 4 samples (0.1%) inflate
│               └── 3 samples (0.1%) inflate_table
└── 283 samples (10.4%) 5 more root frames, led by (3.5%) run() at java.lang.ref.Finalizer$FinalizerThread
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|     % | Samples | Function                                                                                                                     | Location                   |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 47.8% |   1,302 | `__psynch_cvwait`                                                                                                            | `libsystem_kernel.dylib`   |
| 35.8% |     974 | `semaphore_wait_trap`                                                                                                        | `libsystem_kernel.dylib`   |
|  3.5% |      94 | `mach_msg2_trap`                                                                                                             | `libsystem_kernel.dylib`   |
|  3.5% |      94 | `__ulock_wait`                                                                                                               | `libsystem_kernel.dylib`   |
|  0.4% |      11 | `__psynch_mutexwait`                                                                                                         | `libsystem_kernel.dylib`   |
|  0.3% |       8 | `inflate_fast`                                                                                                               | `libzip.dylib`             |
|  0.3% |       8 | `tlv_get_addr`                                                                                                               | `libdyld.dylib`            |
|  0.2% |       5 | `IndexSetIterator::advance_and_next`                                                                                         | `libjvm.dylib`             |
|  0.1% |       4 | `fwd_copy_again`                                                                                                             | `libjvm.dylib`             |
|  0.1% |       4 | `ciObjectFactory::get_metadata`                                                                                              | `libjvm.dylib`             |
|  0.1% |       3 | `inflate_table`                                                                                                              | `libzip.dylib`             |
|  0.1% |       3 | `_platform_memchr`                                                                                                           | `libsystem_platform.dylib` |
|  0.1% |       3 | `SymbolTable::new_symbol`                                                                                                    | `libjvm.dylib`             |
|  0.1% |       3 | `IntervalWalker::walk_to`                                                                                                    | `libjvm.dylib`             |
|  0.1% |       3 | `PhaseIdealLoop::build_loop_late_post_work`                                                                                  | `libjvm.dylib`             |
|  0.1% |       2 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                            | `libjvm.dylib`             |
|  0.1% |       2 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                              | `libjvm.dylib`             |
|  0.1% |       2 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` | `libjvm.dylib`             |
|  0.1% |       2 | `unknown`                                                                                                                    | `<unknown>`                |
|  0.1% |       2 | `_platform_memmove`                                                                                                          | `libsystem_platform.dylib` |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Native

|     % | Samples | Function                                                                                                                                                 | Location                   |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 47.8% |   1,302 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 35.8% |     974 | `semaphore_wait_trap`                                                                                                                                    | `libsystem_kernel.dylib`   |
|  3.5% |      94 | `mach_msg2_trap`                                                                                                                                         | `libsystem_kernel.dylib`   |
|  3.5% |      94 | `__ulock_wait`                                                                                                                                           | `libsystem_kernel.dylib`   |
|  0.4% |      11 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
|  0.3% |       8 | `inflate_fast`                                                                                                                                           | `libzip.dylib`             |
|  0.3% |       8 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
|  0.1% |       4 | `fwd_copy_again`                                                                                                                                         | `libjvm.dylib`             |
|  0.1% |       3 | `inflate_table`                                                                                                                                          | `libzip.dylib`             |
|  0.1% |       3 | `_platform_memchr`                                                                                                                                       | `libsystem_platform.dylib` |
|  0.1% |       3 | `SymbolTable::new_symbol`                                                                                                                                | `libjvm.dylib`             |
|  0.1% |       2 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                        | `libjvm.dylib`             |
|  0.1% |       2 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                                                          | `libjvm.dylib`             |
|  0.1% |       2 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>`                             | `libjvm.dylib`             |
|  0.1% |       2 | `unknown`                                                                                                                                                | `<unknown>`                |
|  0.1% |       2 | `_platform_memmove`                                                                                                                                      | `libsystem_platform.dylib` |
|  0.1% |       2 | `VerificationType::is_assignable_from`                                                                                                                   | `libjvm.dylib`             |
|  0.1% |       2 | `CodeCache::reverse_free_ratio`                                                                                                                          | `libjvm.dylib`             |
|  0.1% |       2 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
|  0.1% |       2 | `__psynch_cvbroad`                                                                                                                                       | `libsystem_kernel.dylib`   |

##### Compiler

|     % | Samples | Function                                             | Location       |
| ----: | ------: | ---------------------------------------------------- | -------------- |
|  0.2% |       5 | `IndexSetIterator::advance_and_next`                 | `libjvm.dylib` |
|  0.1% |       4 | `ciObjectFactory::get_metadata`                      | `libjvm.dylib` |
|  0.1% |       3 | `IntervalWalker::walk_to`                            | `libjvm.dylib` |
|  0.1% |       3 | `PhaseIdealLoop::build_loop_late_post_work`          | `libjvm.dylib` |
|  0.1% |       2 | `CodeSection::relocate`                              | `libjvm.dylib` |
|  0.1% |       2 | `PhaseLive::compute`                                 | `libjvm.dylib` |
|  0.1% |       2 | `PhaseAggressiveCoalesce::insert_copies`             | `libjvm.dylib` |
|  0.1% |       2 | `LinearScanWalker::alloc_free_reg`                   | `libjvm.dylib` |
|  0.1% |       2 | `PhaseIterGVN::add_users_to_worklist`                | `libjvm.dylib` |
|  0.1% |       2 | `PhaseChaitin::build_ifg_physical`                   | `libjvm.dylib` |
|  0.1% |       2 | `Compile::disconnect_useless_nodes`                  | `libjvm.dylib` |
|  0.1% |       2 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` | `libjvm.dylib` |
|  0.1% |       2 | `TypeInterfaces::eq`                                 | `libjvm.dylib` |
|  0.1% |       2 | `PhaseIterGVN::subsume_node`                         | `libjvm.dylib` |
| <0.1% |       1 | `RelocIterator::set_limits`                          | `libjvm.dylib` |
| <0.1% |       1 | `DecodeNNode::Opcode`                                | `libjvm.dylib` |
| <0.1% |       1 | `GraphBuilder::invoke`                               | `libjvm.dylib` |
| <0.1% |       1 | `PhaseIdealLoop::is_dominator`                       | `libjvm.dylib` |
| <0.1% |       1 | `ConnectionGraph::create_split_phi`                  | `libjvm.dylib` |
| <0.1% |       1 | `AddPNode::bottom_type`                              | `libjvm.dylib` |

##### Ours

|     % | Samples | Function                                                                                                                         | Location                                                                                          |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| <0.1% |       1 | `balanceWhiteSpaces()`                                                                                                           | `com.intellij.lang.impl.PsiBuilderImpl`                                                           |
| <0.1% |       1 | `transformBody(FirTransformer, Object)`                                                                                          | `org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl`                                 |
| <0.1% |       1 | `fastPathSkipApproximation(ConeKotlinType, TypeApproximatorConfiguration)`                                                       | `org.jetbrains.kotlin.fir.types.ConeTypeApproximator`                                             |
| <0.1% |       1 | `resetSmartCastPositionTo(Flow)`                                                                                                 | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer`                                        |
| <0.1% |       1 | `prepareExpectedType(ResolutionContext, Candidate, CallInfo, FirExpression, FirValueParameter)`                                  | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckArgumentsKt`                                  |
| <0.1% |       1 | `fromMethodNameAndDesc(String, String)`                                                                                          | `org.jetbrains.kotlin.load.kotlin.MemberSignature$Companion`                                      |
| <0.1% |       1 | `hasNothingSupertype(TypeCheckerState, TypeSystemContext, RigidTypeMarker)`                                                      | `org.jetbrains.kotlin.types.AbstractTypeChecker`                                                  |
| <0.1% |       1 | `<init>(ConstraintSystemCompleter, ConstraintSystemCompleter$PostponedAtomAnalyzer)`                                             | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter$$Lambda.0x0000007001687670` |
| <0.1% |       1 | `isSubstitutionOverride(FirCallableDeclaration)`                                                                                 | `org.jetbrains.kotlin.fir.ClassMembersKt`                                                         |
| <0.1% |       1 | `withoutEnhancedNullability(FirTypeRef)`                                                                                         | `org.jetbrains.kotlin.fir.types.TypeUtilsKt`                                                      |
| <0.1% |       1 | `isMarkedNullable(KotlinTypeMarker)`                                                                                             | `org.jetbrains.kotlin.fir.types.ConeTypeContext`                                                  |
| <0.1% |       1 | `reportMissingTypes(CheckerContext, DiagnosticReporter, KtSourceElement, Set, FirMissingDependencyClassProxy$MissingTypeOrigin)` | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirMissingDependencyClassProxy`            |
| <0.1% |       1 | `visitTypeParameter(FirTypeParameter, Object)`                                                                                   | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.DeclarationCheckersDiagnosticComponent`   |
| <0.1% |       1 | `checkAnnotationTarget(CheckerContext, DiagnosticReporter, FirAnnotationContainer, FirAnnotation)`                               | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirAnnotationChecker`                     |
| <0.1% |       1 | `visitFunctionTypeRef(FirFunctionTypeRef, Object)`                                                                               | `org.jetbrains.kotlin.fir.visitors.FirVisitor`                                                    |
| <0.1% |       1 | `applyTypeArguments(IrExpression, List, List)`                                                                                   | `org.jetbrains.kotlin.fir.backend.generators.CallAndReferenceGenerator`                           |
| <0.1% |       1 | `<init>(CommonBackendContext, HeaderInfoBuilder)`                                                                                | `org.jetbrains.kotlin.backend.common.lower.loops.handlers.ReversedHandler`                        |
| <0.1% |       1 | `hashSuffix(IrFunction)`                                                                                                         | `org.jetbrains.kotlin.backend.jvm.lower.JvmValueClassAbstractLowering`                            |
| <0.1% |       1 | `mapType$default(IrTypeMapper, IrType, TypeMappingMode, JvmSignatureWriter, boolean, int, Object)`                               | `org.jetbrains.kotlin.backend.jvm.mapping.IrTypeMapper`                                           |
| <0.1% |       1 | `getPrimitiveOrUnsignedType(IrType, Map, Map)`                                                                                   | `org.jetbrains.kotlin.ir.types.IrTypePredicatesKt`                                                |

#### Lines

Lines with the largest contribution to each function's self samples.

##### `balanceWhiteSpaces()` (`com.intellij.lang.impl.PsiBuilderImpl`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `com.intellij.lang.impl.PsiBuilderImpl:1198` |

##### `transformBody(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl`)

|      % | Samples | Location                                                              |
| -----: | ------: | --------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl:117` |

##### `fastPathSkipApproximation(ConeKotlinType, TypeApproximatorConfiguration)` (`org.jetbrains.kotlin.fir.types.ConeTypeApproximator`)

|      % | Samples | Location                                                 |
| -----: | ------: | -------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.types.ConeTypeApproximator:32` |

##### `resetSmartCastPositionTo(Flow)` (`org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer`)

|      % | Samples | Location                                                        |
| -----: | ------: | --------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer:2010` |

##### `prepareExpectedType(ResolutionContext, Candidate, CallInfo, FirExpression, FirValueParameter)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.CheckArgumentsKt`)

|      % | Samples | Location                                                             |
| -----: | ------: | -------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckArgumentsKt:106` |

##### `fromMethodNameAndDesc(String, String)` (`org.jetbrains.kotlin.load.kotlin.MemberSignature$Companion`)

|      % | Samples | Location                                                        |
| -----: | ------: | --------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.load.kotlin.MemberSignature$Companion:24` |

##### `hasNothingSupertype(TypeCheckerState, TypeSystemContext, RigidTypeMarker)` (`org.jetbrains.kotlin.types.AbstractTypeChecker`)

|      % | Samples | Location                                             |
| -----: | ------: | ---------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.types.AbstractTypeChecker:963` |

##### `isSubstitutionOverride(FirCallableDeclaration)` (`org.jetbrains.kotlin.fir.ClassMembersKt`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.ClassMembersKt:76` |

##### `withoutEnhancedNullability(FirTypeRef)` (`org.jetbrains.kotlin.fir.types.TypeUtilsKt`)

|      % | Samples | Location                                         |
| -----: | ------: | ------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.types.TypeUtilsKt:434` |

##### `isMarkedNullable(KotlinTypeMarker)` (`org.jetbrains.kotlin.fir.types.ConeTypeContext`)

|      % | Samples | Location                                             |
| -----: | ------: | ---------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.types.ConeTypeContext:133` |

##### `reportMissingTypes(CheckerContext, DiagnosticReporter, KtSourceElement, Set, FirMissingDependencyClassProxy$MissingTypeOrigin)` (`org.jetbrains.kotlin.fir.analysis.checkers.expression.FirMissingDependencyClassProxy`)

|      % | Samples | Location                                                                                   |
| -----: | ------: | ------------------------------------------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirMissingDependencyClassProxy:154` |

##### `visitTypeParameter(FirTypeParameter, Object)` (`org.jetbrains.kotlin.fir.analysis.checkers.declaration.DeclarationCheckersDiagnosticComponent`)

|      % | Samples | Location                                                                                           |
| -----: | ------: | -------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.DeclarationCheckersDiagnosticComponent:25` |

##### `checkAnnotationTarget(CheckerContext, DiagnosticReporter, FirAnnotationContainer, FirAnnotation)` (`org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirAnnotationChecker`)

|      % | Samples | Location                                                                          |
| -----: | ------: | --------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirAnnotationChecker:162` |

##### `visitFunctionTypeRef(FirFunctionTypeRef, Object)` (`org.jetbrains.kotlin.fir.visitors.FirVisitor`)

|      % | Samples | Location                                           |
| -----: | ------: | -------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.visitors.FirVisitor:444` |

##### `applyTypeArguments(IrExpression, List, List)` (`org.jetbrains.kotlin.fir.backend.generators.CallAndReferenceGenerator`)

|      % | Samples | Location                                                                     |
| -----: | ------: | ---------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.backend.generators.CallAndReferenceGenerator:1363` |

##### `<init>(CommonBackendContext, HeaderInfoBuilder)` (`org.jetbrains.kotlin.backend.common.lower.loops.handlers.ReversedHandler`)

|      % | Samples | Location                                                                      |
| -----: | ------: | ----------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.backend.common.lower.loops.handlers.ReversedHandler:39` |

##### `hashSuffix(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.lower.JvmValueClassAbstractLowering`)

|      % | Samples | Location                                                                   |
| -----: | ------: | -------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.backend.jvm.lower.JvmValueClassAbstractLowering:130` |

##### `mapType$default(IrTypeMapper, IrType, TypeMappingMode, JvmSignatureWriter, boolean, int, Object)` (`org.jetbrains.kotlin.backend.jvm.mapping.IrTypeMapper`)

|      % | Samples | Location                                                    |
| -----: | ------: | ----------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.backend.jvm.mapping.IrTypeMapper:149` |

##### `getPrimitiveOrUnsignedType(IrType, Map, Map)` (`org.jetbrains.kotlin.ir.types.IrTypePredicatesKt`)

|      % | Samples | Location                                               |
| -----: | ------: | ------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.ir.types.IrTypePredicatesKt:152` |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location                 |
| ----: | ------: | ----------------------- | ------------------------ |
| 78.5% |   1,022 | `PlatformMonitor::wait` | `libjvm.dylib`           |
|  7.2% |      94 | `PlatformEvent::park`   | `libjvm.dylib`           |
|  7.1% |      93 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |
|  7.1% |      93 | `Parker::park`          | `libjvm.dylib`           |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 89.4% |     871 | `WorkerThread::run`              | `libjvm.dylib` |
|  9.7% |      94 | `os::signal_wait`                | `libjvm.dylib` |
|  0.5% |       5 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |
|  0.4% |       4 | `WorkerThreads::run_task`        | `libjvm.dylib` |

##### `mach_msg2_trap` (`libsystem_kernel.dylib`)

|      % | Samples | Caller               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% |      94 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `__ulock_wait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |      94 | `CallJavaMainInNewThread` | `libjli.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |      11 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `inflate_fast` (`libzip.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |       8 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|     % | Samples | Caller                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 12.5% |       1 | `StackMapReader::next`                        | `libjvm.dylib` |
| 12.5% |       1 | `ClassFileParser::post_process_parsed_stream` | `libjvm.dylib` |
| 12.5% |       1 | `ValueStack::ValueStack`                      | `libjvm.dylib` |
| 12.5% |       1 | `ciMethodData::data_from`                     | `libjvm.dylib` |
| 12.5% |       1 | `GraphBuilder::iterate_bytecodes_for_block`   | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|     % | Samples | Caller                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 40.0% |       2 | `PhaseChaitin::Simplify`     | `libjvm.dylib` |
| 20.0% |       1 | `PhaseIFG::effective_degree` | `libjvm.dylib` |
| 20.0% |       1 | `PhaseIFG::re_insert`        | `libjvm.dylib` |
| 20.0% |       1 | `PhaseChaitin::Select`       | `libjvm.dylib` |

##### `fwd_copy_again` (`libjvm.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |       4 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

|     % | Samples | Caller                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 25.0% |       1 | `ciMethod::ensure_method_data`                     | `libjvm.dylib` |
| 25.0% |       1 | `ciEnv::get_klass_by_name_impl`                    | `libjvm.dylib` |
| 25.0% |       1 | `ciEnv::get_klass_by_index_impl`                   | `libjvm.dylib` |
| 25.0% |       1 | `ciReceiverTypeData::translate_receiver_data_from` | `libjvm.dylib` |

##### `inflate_table` (`libzip.dylib`)

|      % | Samples | Caller    | Location       |
| -----: | ------: | --------- | -------------- |
| 100.0% |       3 | `inflate` | `libzip.dylib` |

##### `_platform_memchr` (`libsystem_platform.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |       3 | `SignatureStream::SignatureStream` | `libjvm.dylib` |

##### `SymbolTable::new_symbol` (`libjvm.dylib`)

|      % | Samples | Caller                         | Location       |
| -----: | ------: | ------------------------------ | -------------- |
| 100.0% |       3 | `SignatureStream::find_symbol` | `libjvm.dylib` |

##### `IntervalWalker::walk_to` (`libjvm.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |       3 | `IntervalWalker::walk_to` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       3 | `PhaseIdealLoop::build_loop_late` | `libjvm.dylib` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

|     % | Samples | Caller                                          | Location       |
| ----: | ------: | ----------------------------------------------- | -------------- |
| 50.0% |       1 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |
| 50.0% |       1 | `G1ScanHRForRegionClosure::scan_memregion`      | `libjvm.dylib` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       2 | `G1ScanHRForRegionClosure::scan_memregion` | `libjvm.dylib` |

##### `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|      % | Samples | Caller                                            | Location       |
| -----: | ------: | ------------------------------------------------- | -------------- |
| 100.0% |       2 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib` |

##### `unknown` (`<unknown>`)

|      % | Samples | Caller    | Location    |
| -----: | ------: | --------- | ----------- |
| 100.0% |       2 | `unknown` | `<unknown>` |

##### `_platform_memmove` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                    | Location        |
| ----: | ------: | ----------------------------------------- | --------------- |
| 50.0% |       1 | `inflate`                                 | `libzip.dylib`  |
| 50.0% |       1 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib` |

##### `VerificationType::is_assignable_from` (`libjvm.dylib`)

|     % | Samples | Caller                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 50.0% |       1 | `StackMapFrame::is_assignable_to` | `libjvm.dylib` |
| 50.0% |       1 | `StackMapFrame::get_local`        | `libjvm.dylib` |

##### `CodeCache::reverse_free_ratio` (`libjvm.dylib`)

|     % | Samples | Caller                 | Location       |
| ----: | ------: | ---------------------- | -------------- |
| 50.0% |       1 | `LoopPredicate::apply` | `libjvm.dylib` |
| 50.0% |       1 | `CallPredicate::apply` | `libjvm.dylib` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

|      % | Samples | Caller                                             | Location       |
| -----: | ------: | -------------------------------------------------- | -------------- |
| 100.0% |       2 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |

##### `__psynch_cvbroad` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       2 | `CompileBroker::create_compile_task` | `libjvm.dylib` |

##### `CodeSection::relocate` (`libjvm.dylib`)

|     % | Samples | Caller                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 50.0% |       1 | `MacroAssembler::trampoline_call` | `libjvm.dylib` |
| 50.0% |       1 | `Address::lea`                    | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `LinearScanWalker::alloc_free_reg` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       2 | `LinearScanWalker::activate_current` | `libjvm.dylib` |

##### `PhaseIterGVN::add_users_to_worklist` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |       2 | `PhaseIterGVN::PhaseIterGVN` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Compile::disconnect_useless_nodes` (`libjvm.dylib`)

|      % | Samples | Caller                                   | Location       |
| -----: | ------: | ---------------------------------------- | -------------- |
| 100.0% |       2 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

##### `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` (`libjvm.dylib`)

|     % | Samples | Caller                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 50.0% |       1 | `PhaseIdealLoop::compute_lca_of_uses`         | `libjvm.dylib` |
| 50.0% |       1 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `libjvm.dylib` |

##### `TypeInterfaces::eq` (`libjvm.dylib`)

|      % | Samples | Caller            | Location       |
| -----: | ------: | ----------------- | -------------- |
| 100.0% |       2 | `TypeInstPtr::eq` | `libjvm.dylib` |

##### `PhaseIterGVN::subsume_node` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |       2 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |

##### `RelocIterator::set_limits` (`libjvm.dylib`)

|      % | Samples | Caller                                           | Location       |
| -----: | ------: | ------------------------------------------------ | -------------- |
| 100.0% |       1 | `trampoline_stub_Relocation::get_trampoline_for` | `libjvm.dylib` |

##### `DecodeNNode::Opcode` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |       1 | `NodeHash::hash_find_insert` | `libjvm.dylib` |

##### `GraphBuilder::invoke` (`libjvm.dylib`)

|      % | Samples | Caller                                      | Location       |
| -----: | ------: | ------------------------------------------- | -------------- |
| 100.0% |       1 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |

##### `PhaseIdealLoop::is_dominator` (`libjvm.dylib`)

|      % | Samples | Caller                                        | Location       |
| -----: | ------: | --------------------------------------------- | -------------- |
| 100.0% |       1 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `libjvm.dylib` |

##### `ConnectionGraph::create_split_phi` (`libjvm.dylib`)

|      % | Samples | Caller                              | Location       |
| -----: | ------: | ----------------------------------- | -------------- |
| 100.0% |       1 | `ConnectionGraph::split_memory_phi` | `libjvm.dylib` |

##### `AddPNode::bottom_type` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |       1 | `PhaseCCP::analyze` | `libjvm.dylib` |

##### `balanceWhiteSpaces()` (`com.intellij.lang.impl.PsiBuilderImpl`)

|      % | Samples | Caller               | Location                                |
| -----: | ------: | -------------------- | --------------------------------------- |
| 100.0% |       1 | `prepareLightTree()` | `com.intellij.lang.impl.PsiBuilderImpl` |

##### `transformBody(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl`)

|      % | Samples | Caller                                      | Location                                                          |
| -----: | ------: | ------------------------------------------- | ----------------------------------------------------------------- |
| 100.0% |       1 | `transformChildren(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl` |

##### `fastPathSkipApproximation(ConeKotlinType, TypeApproximatorConfiguration)` (`org.jetbrains.kotlin.fir.types.ConeTypeApproximator`)

|      % | Samples | Caller                                                                  | Location                                              |
| -----: | ------: | ----------------------------------------------------------------------- | ----------------------------------------------------- |
| 100.0% |       1 | `approximateToSuperType(ConeKotlinType, TypeApproximatorConfiguration)` | `org.jetbrains.kotlin.fir.types.ConeTypeApproximator` |

##### `resetSmartCastPositionTo(Flow)` (`org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer`)

|      % | Samples | Caller                                 | Location                                                   |
| -----: | ------: | -------------------------------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `buildDefaultFlow(CFGNode, Function2)` | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer` |

##### `prepareExpectedType(ResolutionContext, Candidate, CallInfo, FirExpression, FirValueParameter)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.CheckArgumentsKt`)

|      % | Samples | Caller                                                                                                 | Location                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| 100.0% |       1 | `access$prepareExpectedType(ResolutionContext, Candidate, CallInfo, FirExpression, FirValueParameter)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckArgumentsKt` |

##### `fromMethodNameAndDesc(String, String)` (`org.jetbrains.kotlin.load.kotlin.MemberSignature$Companion`)

|      % | Samples | Caller                      | Location                                                                                                  |
| -----: | ------: | --------------------------- | --------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `visitMethod(Name, String)` | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializerKt$loadMemberAnnotations$1` |

##### `hasNothingSupertype(TypeCheckerState, TypeSystemContext, RigidTypeMarker)` (`org.jetbrains.kotlin.types.AbstractTypeChecker`)

|      % | Samples | Caller                                                                                                      | Location                                         |
| -----: | ------: | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| 100.0% |       1 | `isSubtypeOfForSingleClassifierType(TypeCheckerState, TypeSystemContext, RigidTypeMarker, RigidTypeMarker)` | `org.jetbrains.kotlin.types.AbstractTypeChecker` |

##### `<init>(ConstraintSystemCompleter, ConstraintSystemCompleter$PostponedAtomAnalyzer)` (`org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter$$Lambda.0x0000007001687670`)

|      % | Samples | Caller                                     | Location                                     |
| -----: | ------: | ------------------------------------------ | -------------------------------------------- |
| 100.0% |       1 | `newInvokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `isSubstitutionOverride(FirCallableDeclaration)` (`org.jetbrains.kotlin.fir.ClassMembersKt`)

|      % | Samples | Caller                                           | Location                                               |
| -----: | ------: | ------------------------------------------------ | ------------------------------------------------------ |
| 100.0% |       1 | `unwrapFakeOverridesIfNecessary(FirBasedSymbol)` | `org.jetbrains.kotlin.fir.resolve.dfa.VariableStorage` |

##### `withoutEnhancedNullability(FirTypeRef)` (`org.jetbrains.kotlin.fir.types.TypeUtilsKt`)

|      % | Samples | Caller                                                                                                          | Location                                                                                     |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `approximateDeclarationType(SessionHolder, FirResolvedTypeRef, Visibility, boolean, boolean, boolean, boolean)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.DeclarationApproximationUtilsKt` |

##### `isMarkedNullable(KotlinTypeMarker)` (`org.jetbrains.kotlin.fir.types.ConeTypeContext`)

|      % | Samples | Caller                               | Location                                                                     |
| -----: | ------: | ------------------------------------ | ---------------------------------------------------------------------------- |
| 100.0% |       1 | `isMarkedNullable(KotlinTypeMarker)` | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl` |

##### `reportMissingTypes(CheckerContext, DiagnosticReporter, KtSourceElement, Set, FirMissingDependencyClassProxy$MissingTypeOrigin)` (`org.jetbrains.kotlin.fir.analysis.checkers.expression.FirMissingDependencyClassProxy`)

|      % | Samples | Caller                                                                    | Location                                                                                 |
| -----: | ------: | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% |       1 | `check(CheckerContext, DiagnosticReporter, FirQualifiedAccessExpression)` | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirMissingDependencyClassChecker` |

##### `visitTypeParameter(FirTypeParameter, Object)` (`org.jetbrains.kotlin.fir.analysis.checkers.declaration.DeclarationCheckersDiagnosticComponent`)

|      % | Samples | Caller                       | Location                                                 |
| -----: | ------: | ---------------------------- | -------------------------------------------------------- |
| 100.0% |       1 | `accept(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.declarations.FirTypeParameter` |

##### `checkAnnotationTarget(CheckerContext, DiagnosticReporter, FirAnnotationContainer, FirAnnotation)` (`org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirAnnotationChecker`)

|      % | Samples | Caller                                                                                 | Location                                                                      |
| -----: | ------: | -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| 100.0% |       1 | `checkAnnotationContainer(CheckerContext, DiagnosticReporter, FirAnnotationContainer)` | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirAnnotationChecker` |

##### `visitFunctionTypeRef(FirFunctionTypeRef, Object)` (`org.jetbrains.kotlin.fir.visitors.FirVisitor`)

|      % | Samples | Caller                       | Location                                            |
| -----: | ------: | ---------------------------- | --------------------------------------------------- |
| 100.0% |       1 | `accept(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.types.FirFunctionTypeRef` |

##### `applyTypeArguments(IrExpression, List, List)` (`org.jetbrains.kotlin.fir.backend.generators.CallAndReferenceGenerator`)

|      % | Samples | Caller                                                                                            | Location                                                                |
| -----: | ------: | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| 100.0% |       1 | `applyTypeArgumentsWithTypealiasConstructorRemapping(IrExpression, FirCallableDeclaration, List)` | `org.jetbrains.kotlin.fir.backend.generators.CallAndReferenceGenerator` |

##### `<init>(CommonBackendContext, HeaderInfoBuilder)` (`org.jetbrains.kotlin.backend.common.lower.loops.handlers.ReversedHandler`)

|      % | Samples | Caller                                    | Location                                                                              |
| -----: | ------: | ----------------------------------------- | ------------------------------------------------------------------------------------- |
| 100.0% |       1 | `<init>(CommonBackendContext, Function0)` | `org.jetbrains.kotlin.backend.common.lower.loops.NestedHeaderInfoBuilderForWithIndex` |

##### `hashSuffix(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.lower.JvmValueClassAbstractLowering`)

|      % | Samples | Caller                  | Location                                                               |
| -----: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| 100.0% |       1 | `visitReturn(IrReturn)` | `org.jetbrains.kotlin.backend.jvm.lower.JvmValueClassAbstractLowering` |

##### `mapType$default(IrTypeMapper, IrType, TypeMappingMode, JvmSignatureWriter, boolean, int, Object)` (`org.jetbrains.kotlin.backend.jvm.mapping.IrTypeMapper`)

|      % | Samples | Caller                                                                                                  | Location                                                |
| -----: | ------: | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |       1 | `writeGenericArguments$lambda$1$0(IrTypeMapper, KotlinTypeMarker, JvmSignatureWriter, TypeMappingMode)` | `org.jetbrains.kotlin.backend.jvm.mapping.IrTypeMapper` |

##### `getPrimitiveOrUnsignedType(IrType, Map, Map)` (`org.jetbrains.kotlin.ir.types.IrTypePredicatesKt`)

|      % | Samples | Caller                     | Location                                           |
| -----: | ------: | -------------------------- | -------------------------------------------------- |
| 100.0% |       1 | `getPrimitiveType(IrType)` | `org.jetbrains.kotlin.ir.types.IrTypePredicatesKt` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                                   | Location                  |
| ----: | ------: | ------------------------------------------ | ------------------------- |
| 82.8% |   2,255 | `_pthread_start`                           | `libsystem_pthread.dylib` |
| 82.8% |   2,255 | `thread_start`                             | `libsystem_pthread.dylib` |
| 79.4% |   2,160 | `Thread::call_run`                         | `libjvm.dylib`            |
| 79.4% |   2,160 | `thread_native_entry`                      | `libjvm.dylib`            |
| 47.8% |   1,302 | `__psynch_cvwait`                          | `libsystem_kernel.dylib`  |
| 37.6% |   1,023 | `PlatformMonitor::wait`                    | `libjvm.dylib`            |
| 35.8% |     974 | `semaphore_wait_trap`                      | `libsystem_kernel.dylib`  |
| 32.7% |     891 | `WorkerThread::run`                        | `libjvm.dylib`            |
| 29.4% |     799 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
| 27.5% |     748 | `Monitor::wait_without_safepoint_check`    | `libjvm.dylib`            |
| 12.2% |     331 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
| 10.4% |     282 | `ConcurrentGCThread::run`                  | `libjvm.dylib`            |
| 10.1% |     275 | `Monitor::wait`                            | `libjvm.dylib`            |
|  6.9% |     188 | `JLI_Launch`                               | `libjli.dylib`            |
|  6.9% |     188 | `main`                                     | `java`                    |
|  6.5% |     178 | `CompileQueue::get`                        | `libjvm.dylib`            |
|  5.6% |     153 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  3.7% |     102 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
|  3.7% |     101 | `Compile::Compile`                         | `libjvm.dylib`            |
|  3.5% |      96 | `unknown`                                  | `<unknown>`               |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Native

|     % | Samples | Function                                | Location                  |
| ----: | ------: | --------------------------------------- | ------------------------- |
| 82.8% |   2,255 | `_pthread_start`                        | `libsystem_pthread.dylib` |
| 82.8% |   2,255 | `thread_start`                          | `libsystem_pthread.dylib` |
| 79.4% |   2,160 | `Thread::call_run`                      | `libjvm.dylib`            |
| 79.4% |   2,160 | `thread_native_entry`                   | `libjvm.dylib`            |
| 47.8% |   1,302 | `__psynch_cvwait`                       | `libsystem_kernel.dylib`  |
| 37.6% |   1,023 | `PlatformMonitor::wait`                 | `libjvm.dylib`            |
| 35.8% |     974 | `semaphore_wait_trap`                   | `libsystem_kernel.dylib`  |
| 32.7% |     891 | `WorkerThread::run`                     | `libjvm.dylib`            |
| 29.4% |     799 | `JavaThread::thread_main_inner`         | `libjvm.dylib`            |
| 27.5% |     748 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib`            |
| 10.4% |     282 | `ConcurrentGCThread::run`               | `libjvm.dylib`            |
| 10.1% |     275 | `Monitor::wait`                         | `libjvm.dylib`            |
|  6.9% |     188 | `JLI_Launch`                            | `libjli.dylib`            |
|  6.9% |     188 | `main`                                  | `java`                    |
|  3.5% |      96 | `unknown`                               | `<unknown>`               |
|  3.5% |      94 | `PlatformEvent::park`                   | `libjvm.dylib`            |
|  3.5% |      94 | `ObjectMonitor::wait`                   | `libjvm.dylib`            |
|  3.5% |      94 | `ObjectSynchronizer::wait`              | `libjvm.dylib`            |
|  3.5% |      94 | `JVM_MonitorWait`                       | `libjvm.dylib`            |
|  3.5% |      94 | `ServiceThread::service_thread_entry`   | `libjvm.dylib`            |

##### Compiler

|     % | Samples | Function                                   | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 12.2% |     331 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
|  6.5% |     178 | `CompileQueue::get`                        | `libjvm.dylib` |
|  5.6% |     153 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  3.7% |     102 | `C2Compiler::compile_method`               | `libjvm.dylib` |
|  3.7% |     101 | `Compile::Compile`                         | `libjvm.dylib` |
|  1.8% |      50 | `Compilation::compile_method`              | `libjvm.dylib` |
|  1.8% |      50 | `Compilation::Compilation`                 | `libjvm.dylib` |
|  1.6% |      44 | `Compilation::compile_java_method`         | `libjvm.dylib` |
|  1.6% |      43 | `Compile::Code_Gen`                        | `libjvm.dylib` |
|  1.5% |      40 | `Compile::Optimize`                        | `libjvm.dylib` |
|  1.0% |      26 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
|  0.8% |      23 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
|  0.7% |      20 | `Compilation::build_hir`                   | `libjvm.dylib` |
|  0.7% |      18 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
|  0.7% |      18 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
|  0.6% |      16 | `Compilation::emit_lir`                    | `libjvm.dylib` |
|  0.6% |      15 | `GraphBuilder::GraphBuilder`               | `libjvm.dylib` |
|  0.5% |      13 | `LinearScan::do_linear_scan`               | `libjvm.dylib` |
|  0.5% |      13 | `PhaseIterGVN::transform_old`              | `libjvm.dylib` |
|  0.5% |      13 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |

##### Ours

|    % | Samples | Function                                                                                                                                      | Location                                                |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 3.3% |      90 | `run(String[])`                                                                                                                               | `org.jetbrains.kotlin.preloading.Preloader`             |
| 3.3% |      90 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`             |
| 2.8% |      75 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 2.8% |      75 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 2.8% |      75 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 2.8% |      75 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 2.6% |      72 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 2.6% |      72 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 2.6% |      72 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 2.6% |      71 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 2.5% |      69 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 2.5% |      69 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 2.5% |      69 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 2.5% |      69 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 2.5% |      69 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 2.5% |      69 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 2.5% |      69 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 2.5% |      68 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
| 2.5% |      68 | `phaseBody(LoggingContext, Object)`                                                                                                           | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
| 2.5% |      68 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Caller         | Location                  |
| -----: | ------: | -------------- | ------------------------- |
| 100.0% |   2,255 | `thread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |   2,160 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Caller           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   2,160 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location                 |
| ----: | ------: | ----------------------- | ------------------------ |
| 78.5% |   1,022 | `PlatformMonitor::wait` | `libjvm.dylib`           |
|  7.2% |      94 | `PlatformEvent::park`   | `libjvm.dylib`           |
|  7.1% |      93 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |
|  7.1% |      93 | `Parker::park`          | `libjvm.dylib`           |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 73.1% |     748 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |
| 26.9% |     275 | `Monitor::wait`                         | `libjvm.dylib` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 89.4% |     871 | `WorkerThread::run`              | `libjvm.dylib` |
|  9.7% |      94 | `os::signal_wait`                | `libjvm.dylib` |
|  0.5% |       5 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |
|  0.4% |       4 | `WorkerThreads::run_task`        | `libjvm.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     891 | `Thread::call_run` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     799 | `Thread::call_run` | `libjvm.dylib` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

|     % | Samples | Caller                                                   | Location       |
| ----: | ------: | -------------------------------------------------------- | -------------- |
| 12.6% |      94 | `ServiceThread::service_thread_entry`                    | `libjvm.dylib` |
| 12.6% |      94 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib` |
| 12.6% |      94 | `G1ServiceThread::wait_for_task`                         | `libjvm.dylib` |
| 12.6% |      94 | `WatcherThread::sleep`                                   | `libjvm.dylib` |
| 12.4% |      93 | `G1ConcurrentMarkThread::run_service`                    | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |     331 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     282 | `Thread::call_run` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|     % | Samples | Caller                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 64.7% |     178 | `CompileQueue::get`               | `libjvm.dylib` |
| 34.2% |      94 | `JVM_WaitForReferencePendingList` | `libjvm.dylib` |
|  1.1% |       3 | `VMThread::wait_until_executed`   | `libjvm.dylib` |

##### `JLI_Launch` (`libjli.dylib`)

|      % | Samples | Caller | Location |
| -----: | ------: | ------ | -------- |
| 100.0% |     188 | `main` | `java`   |

##### `main` (`java`)

|     % | Samples | Caller       | Location       |
| ----: | ------: | ------------ | -------------- |
| 50.0% |      94 | `unknown`    | `<unknown>`    |
| 50.0% |      94 | `apple_main` | `libjli.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |     178 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |     153 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |     102 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |     101 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `unknown` (`<unknown>`)

|    % | Samples | Caller                  | Location                 |
| ---: | ------: | ----------------------- | ------------------------ |
| 2.1% |       2 | `unknown`               | `<unknown>`              |
| 2.1% |       2 | `Profiler::dlopen_hook` | `libasyncProfiler.dylib` |

##### `PlatformEvent::park` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |      94 | `ObjectMonitor::wait` | `libjvm.dylib` |

##### `ObjectMonitor::wait` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      94 | `ObjectSynchronizer::wait` | `libjvm.dylib` |

##### `ObjectSynchronizer::wait` (`libjvm.dylib`)

|      % | Samples | Caller            | Location       |
| -----: | ------: | ----------------- | -------------- |
| 100.0% |      94 | `JVM_MonitorWait` | `libjvm.dylib` |

##### `JVM_MonitorWait` (`libjvm.dylib`)

|      % | Samples | Caller        | Location           |
| -----: | ------: | ------------- | ------------------ |
| 100.0% |      94 | `wait0(long)` | `java.lang.Object` |

##### `ServiceThread::service_thread_entry` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |      94 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % | Samples | Caller           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |      90 | `main(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Caller                          | Location                                                |
| -----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 100.0% |      75 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

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
| 100.0% |      75 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001008400` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                         | Location                                      |
| -----: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% |      72 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                                 | Location                                                |
| -----: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 100.0% |      72 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Caller                                                                                             | Location                                                |
| -----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |      72 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                                   | Location                                      |
| -----: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 100.0% |      71 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                                                              | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |      69 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                                                                                                        | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |      69 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                         | Location                                                |
| -----: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |      69 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                                | Location                                     |
| -----: | ------: | --------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |      69 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Caller                                                                 | Location                                     |
| -----: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |      69 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Caller                                                          | Location                                      |
| -----: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| 100.0% |      69 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                                      | Location                                      |
| -----: | ------: | ----------------------------------------------------------- | --------------------------------------------- |
| 100.0% |      69 | `exec(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Caller                              | Location                                          |
| -----: | ------: | ----------------------------------- | ------------------------------------------------- |
| 100.0% |      68 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Caller                                                     | Location                                                |
| -----: | ------: | ---------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |      68 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % | Samples | Caller                                                                | Location                                                          |
| -----: | ------: | --------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 100.0% |      68 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`            | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase`       |
|   5.9% |       4 | `invoke(PhaseConfig, PhaserState, LoweringContext, IrModuleFragment)` | `org.jetbrains.kotlin.backend.common.phaser.PerformByIrFilePhase` |
|   1.5% |       1 | `runPhase(NamedCompilerPhase, Object, boolean)`                       | `org.jetbrains.kotlin.backend.common.phaser.PhaseEngine`          |

##### `Compilation::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      50 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      50 | `Compiler::compile_method` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |      44 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      43 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      40 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      26 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 65.2% |      15 | `Compile::Optimize`       | `libjvm.dylib` |
| 34.8% |       8 | `Compile::optimize_loops` | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      20 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |      18 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      18 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      16 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      15 | `IRScope::IRScope` | `libjvm.dylib` |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

|      % | Samples | Caller                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |      13 | `Compilation::emit_lir` | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |      13 | `PhaseIterGVN::optimize` | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 38.5% |       5 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
| 38.5% |       5 | `Compile::Optimize`                        | `libjvm.dylib` |
|  7.7% |       1 | `PhaseMacroExpand::expand_macro_nodes`     | `libjvm.dylib` |
|  7.7% |       1 | `Compile::process_for_post_loop_opts_igvn` | `libjvm.dylib` |
|  7.7% |       1 | `Compile::remove_speculative_types`        | `libjvm.dylib` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 95.8% |   2,160 | `thread_native_entry` | `libjvm.dylib` |
|  4.2% |      94 | `apple_main`          | `libjli.dylib` |
| <0.1% |       1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   2,255 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 41.3% |     891 | `WorkerThread::run`             | `libjvm.dylib` |
| 37.0% |     799 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| 13.1% |     282 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
|  4.4% |      94 | `WatcherThread::run`            | `libjvm.dylib` |
|  4.4% |      94 | `VMThread::run`                 | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   2,160 | `Thread::call_run` | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|     % | Samples | Callee               | Location                  |
| ----: | ------: | -------------------- | ------------------------- |
| 99.9% |   1,022 | `__psynch_cvwait`    | `libsystem_kernel.dylib`  |
|  0.1% |       1 | `_pthread_cond_wait` | `libsystem_pthread.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location                 |
| ----: | ------: | --------------------------------- | ------------------------ |
| 97.8% |     871 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
|  1.6% |      14 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
|  0.3% |       3 | `G1ParallelCleaningTask::work`    | `libjvm.dylib`           |
|  0.2% |       2 | `G1RebuildRSAndScrubTask::work`   | `libjvm.dylib`           |
|  0.1% |       1 | `G1CMConcurrentMarkingTask::work` | `libjvm.dylib`           |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|     % | Samples | Callee                                                   | Location       |
| ----: | ------: | -------------------------------------------------------- | -------------- |
| 41.4% |     331 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib` |
| 11.8% |      94 | `ServiceThread::service_thread_entry`                    | `libjvm.dylib` |
| 11.8% |      94 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib` |
| 11.8% |      94 | `signal_thread_entry`                                    | `libjvm.dylib` |
| 11.6% |      93 | `JvmtiAgentThread::start_function_wrapper`               | `libjvm.dylib` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |     748 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 53.8% |     178 | `CompileQueue::get`                        | `libjvm.dylib` |
| 46.2% |     153 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 33.3% |      94 | `G1ConcurrentMarkThread::run_service`   | `libjvm.dylib` |
| 33.3% |      94 | `G1ServiceThread::run_service`          | `libjvm.dylib` |
| 33.3% |      94 | `G1ConcurrentRefineThread::run_service` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |     275 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `JLI_Launch` (`libjli.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 50.0% |      94 | `CreateExecutionEnvironment` | `libjli.dylib` |
| 50.0% |      94 | `ContinueInNewThread`        | `libjli.dylib` |

##### `main` (`java`)

|      % | Samples | Callee       | Location       |
| -----: | ------: | ------------ | -------------- |
| 100.0% |     188 | `JLI_Launch` | `libjli.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|      % | Samples | Callee          | Location       |
| -----: | ------: | --------------- | -------------- |
| 100.0% |     178 | `Monitor::wait` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 66.7% |     102 | `C2Compiler::compile_method`    | `libjvm.dylib` |
| 32.7% |      50 | `Compiler::compile_method`      | `libjvm.dylib` |
|  0.7% |       1 | `ciEnv::get_method_from_handle` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee             | Location       |
| ----: | ------: | ------------------ | -------------- |
| 99.0% |     101 | `Compile::Compile` | `libjvm.dylib` |
|  1.0% |       1 | `Chunk::next_chop` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 42.6% |      43 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 39.6% |      40 | `Compile::Optimize`                      | `libjvm.dylib` |
| 15.8% |      16 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  2.0% |       2 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

##### `unknown` (`<unknown>`)

|     % | Samples | Callee    | Location    |
| ----: | ------: | --------- | ----------- |
| 97.9% |      94 | `main`    | `java`      |
|  2.1% |       2 | `unknown` | `<unknown>` |

##### `PlatformEvent::park` (`libjvm.dylib`)

|      % | Samples | Callee            | Location                 |
| -----: | ------: | ----------------- | ------------------------ |
| 100.0% |      94 | `__psynch_cvwait` | `libsystem_kernel.dylib` |

##### `ObjectMonitor::wait` (`libjvm.dylib`)

|      % | Samples | Callee                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |      94 | `PlatformEvent::park` | `libjvm.dylib` |

##### `ObjectSynchronizer::wait` (`libjvm.dylib`)

|      % | Samples | Callee                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |      94 | `ObjectMonitor::wait` | `libjvm.dylib` |

##### `JVM_MonitorWait` (`libjvm.dylib`)

|      % | Samples | Callee                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      94 | `ObjectSynchronizer::wait` | `libjvm.dylib` |

##### `ServiceThread::service_thread_entry` (`libjvm.dylib`)

|      % | Samples | Callee                                  | Location       |
| -----: | ------: | --------------------------------------- | -------------- |
| 100.0% |      94 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|     % | Samples | Callee                                                                       | Location                                               |
| ----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 83.3% |      75 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                             |
| 16.7% |      15 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % | Samples | Callee          | Location                                    |
| -----: | ------: | --------------- | ------------------------------------------- |
| 100.0% |      90 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|     % | Samples | Callee                                                 | Location                                                |
| ----: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 96.0% |      72 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  4.0% |       3 | `defaultMessageRenderer()`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                                                                                             | Location                                                |
| -----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |      75 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|      % | Samples | Callee                          | Location                                                |
| -----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 100.0% |      75 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee           | Location                                               |
| -----: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% |      75 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                                               | Location                                                                |
| ----: | ------: | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| 98.6% |      71 | `exec(MessageCollector, Services, CommonCompilerArguments)`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|  1.4% |       1 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                                                   | Location                                      |
| -----: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 100.0% |      72 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                                         | Location                                      |
| -----: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% |      72 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                          | Location                                      |
| ----: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| 97.2% |      69 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |
|  2.8% |       2 | `<clinit>()`                                                    | `org.jetbrains.kotlin.cli.common.ArgumentsKt` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                                                                          | Location                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| 98.6% |      68 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`            | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                        |
|  1.4% |       1 | `reportToMessageCollector(BaseDiagnosticsCollector, MessageCollector, boolean)` | `org.jetbrains.kotlin.cli.common.fir.FirDiagnosticsCompilerResultsReporter` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                         | Location                                                |
| -----: | ------: | ---------------------------------------------- | ------------------------------------------------------- |
| 100.0% |      69 | `runPhasedPipeline(ArgumentsPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                                                                              | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |      69 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                                                                                                                        | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |      69 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee                                                         | Location                                                |
| -----: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |      69 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee                                                                | Location                                     |
| -----: | ------: | --------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |      69 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                                                                 | Location                                     |
| -----: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |      69 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|     % | Samples | Callee                           | Location                                                              |
| ----: | ------: | -------------------------------- | --------------------------------------------------------------------- |
| 67.6% |      46 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`      |
| 22.1% |      15 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`       |
|  8.8% |       6 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`        |
|  1.5% |       1 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmConfigurationPipelinePhase` |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Callee                                         | Location                                          |
| -----: | ------: | ---------------------------------------------- | ------------------------------------------------- |
| 100.0% |      68 | `phaseBody(PipelineContext, PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % | Samples | Callee                                                               | Location                                                         |
| -----: | ------: | -------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 100.0% |      68 | `phaseBody(LoggingContext, Object)`                                  | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
|   4.4% |       3 | `phaseBody(LoggingContext, Object)`                                  | `org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase`   |
|   1.5% |       1 | `phaseBody(LoggingContext, Object)`                                  | `org.jetbrains.kotlin.backend.common.phaser.ModuleLoweringPhase` |
|   1.5% |       1 | `runAfter(PhaseConfig, PhaserState, LoggingContext, Object, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`          |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 88.0% |      44 | `Compilation::compile_java_method` | `libjvm.dylib` |
| 12.0% |       6 | `ciEnv::register_method`           | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |      50 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 45.5% |      20 | `Compilation::build_hir`       | `libjvm.dylib` |
| 36.4% |      16 | `Compilation::emit_lir`        | `libjvm.dylib` |
| 13.6% |       6 | `Compilation::emit_code_body`  | `libjvm.dylib` |
|  4.5% |       2 | `ciMethod::ensure_method_data` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 60.5% |      26 | `PhaseChaitin::Register_Allocate`    | `libjvm.dylib` |
| 14.0% |       6 | `Matcher::match`                     | `libjvm.dylib` |
| 11.6% |       5 | `PhaseOutput::Output`                | `libjvm.dylib` |
|  7.0% |       3 | `PhaseCFG::do_global_code_motion`    | `libjvm.dylib` |
|  4.7% |       2 | `PhaseBlockLayout::PhaseBlockLayout` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 37.5% |      15 | `PhaseIdealLoop::optimize`     | `libjvm.dylib` |
| 20.0% |       8 | `Compile::optimize_loops`      | `libjvm.dylib` |
| 12.5% |       5 | `PhaseIterGVN::optimize`       | `libjvm.dylib` |
|  7.5% |       3 | `PhaseCCP::PhaseCCP`           | `libjvm.dylib` |
|  5.0% |       2 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 23.1% |       6 | `PhaseChaitin::build_ifg_physical`       | `libjvm.dylib` |
| 11.5% |       3 | `PhaseAggressiveCoalesce::insert_copies` | `libjvm.dylib` |
|  7.7% |       2 | `PhaseLive::compute`                     | `libjvm.dylib` |
|  7.7% |       2 | `PhaseChaitin::Simplify`                 | `libjvm.dylib` |
|  7.7% |       2 | `PhaseChaitin::gather_lrg_masks`         | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 78.3% |      18 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| 21.7% |       5 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|     % | Samples | Callee                                       | Location       |
| ----: | ------: | -------------------------------------------- | -------------- |
| 75.0% |      15 | `IR::IR`                                     | `libjvm.dylib` |
| 10.0% |       2 | `GlobalValueNumbering::GlobalValueNumbering` | `libjvm.dylib` |
|  5.0% |       1 | `IR::eliminate_null_checks`                  | `libjvm.dylib` |
|  5.0% |       1 | `IR::compute_use_counts`                     | `libjvm.dylib` |
|  5.0% |       1 | `IR::compute_code`                           | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                                  | Location       |
| ----: | ------: | ------------------------------------------------------- | -------------- |
| 50.0% |       9 | `PhaseIdealLoop::build_loop_late`                       | `libjvm.dylib` |
| 16.7% |       3 | `PhaseIdealLoop::split_if_with_blocks`                  | `libjvm.dylib` |
| 11.1% |       2 | `PhaseIdealLoop::build_loop_early`                      | `libjvm.dylib` |
|  5.6% |       1 | `RegionNode::is_CFG`                                    | `libjvm.dylib` |
|  5.6% |       1 | `PhaseIdealLoop::collect_potentially_useful_predicates` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Callee                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      18 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 81.3% |      13 | `LinearScan::do_linear_scan` | `libjvm.dylib` |
| 18.8% |       3 | `BlockList::iterate_forward` | `libjvm.dylib` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

|     % | Samples | Callee                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 73.3% |      11 | `GraphBuilder::iterate_all_blocks`   | `libjvm.dylib` |
| 13.3% |       2 | `BlockBegin::iterate_preorder`       | `libjvm.dylib` |
| 13.3% |       2 | `BlockListBuilder::BlockListBuilder` | `libjvm.dylib` |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

|     % | Samples | Callee                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 61.5% |       8 | `LinearScan::allocate_registers`      | `libjvm.dylib` |
| 23.1% |       3 | `LinearScan::build_intervals`         | `libjvm.dylib` |
|  7.7% |       1 | `LinearScan::assign_reg_num`          | `libjvm.dylib` |
|  7.7% |       1 | `LinearScan::compute_local_live_sets` | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 15.4% |       2 | `PhaseIterGVN::subsume_node` | `libjvm.dylib` |
|  7.7% |       1 | `Type::meet_helper`          | `libjvm.dylib` |
|  7.7% |       1 | `PhiNode::Ideal`             | `libjvm.dylib` |
|  7.7% |       1 | `ConvI2LNode::Ideal`         | `libjvm.dylib` |
|  7.7% |       1 | `Type::hashcons`             | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |      13 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 32.0% |     871 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThread::run` (`libjvm.dylib`) ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  6.5% |     177 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                      |
|  3.5% |      94 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformEvent::park` (`libjvm.dylib`) ← `ObjectMonitor::wait` ← `ObjectSynchronizer::wait` ← `JVM_MonitorWait` ← `wait0(long)` (`java.lang.Object`) ← `wait(long)` ← `wait()` ← `await()` (`java.lang.ref.NativeReferenceQueue`) ← `remove0()` (`java.lang.ref.ReferenceQueue`) ← `remove()` (`java.lang.ref.NativeReferenceQueue`) ← `run()` (`java.lang.ref.Finalizer$FinalizerThread`)                                                                                                                                                                                                                                   |
|  3.5% |      94 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `ServiceThread::service_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                    |
|  3.5% |      94 | `mach_msg2_trap` (`libsystem_kernel.dylib`) ← `mach_msg_overwrite` ← `mach_msg` ← `__CFRunLoopServiceMachPort` (`CoreFoundation`) ← `__CFRunLoopRun` ← `CFRunLoopRunSpecific` ← `CreateExecutionEnvironment` (`libjli.dylib`) ← `JLI_Launch` ← `main` (`java`) ← `unknown`                                                                                                                                                                                                                                                                                                                                                                                                  |
|  3.5% |      94 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `JVM_WaitForReferencePendingList` ← `waitForReferencePendingList()` (`java.lang.ref.Reference`) ← `processPendingReferences()` ← `run()` (`java.lang.ref.Reference$ReferenceHandler`)                                                                                                                                                                                                                                                                                                                                                                           |
|  3.5% |      94 | `__ulock_wait` (`libsystem_kernel.dylib`) ← `CallJavaMainInNewThread` (`libjli.dylib`) ← `ContinueInNewThread` ← `JLI_Launch` ← `main` (`java`) ← `apple_main` (`libjli.dylib`) ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  3.5% |      94 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `MonitorDeflationThread::monitor_deflation_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                 |
|  3.5% |      94 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ServiceThread::wait_for_task` ← `G1ServiceThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                              |
|  3.5% |      94 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `os::signal_wait` (`libjvm.dylib`) ← `signal_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                |
|  3.5% |      94 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `WatcherThread::sleep` ← `WatcherThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                              |
|  3.4% |      93 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Profiler::timerLoop` (`libasyncProfiler.dylib`) ← `JvmtiAgentThread::start_function_wrapper` (`libjvm.dylib`) ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                |
|  3.4% |      93 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ConcurrentMarkThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                          |
|  3.4% |      93 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` ← `G1ConcurrentRefineThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                        |
|  3.4% |      93 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `NotificationThread::notification_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                          |
|  3.4% |      93 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`) ← `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `await(long)` (`java.lang.ref.ReferenceQueue`) ← `remove0(long)` ← `remove(long)` ← `run()` (`jdk.internal.ref.CleanerImpl`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()` ← `run()` (`jdk.internal.misc.InnocuousThread`)                                                                                                  |
|  3.3% |      90 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `VMThread::wait_for_operation` ← `VMThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                           |
|  0.3% |       7 | `inflate_fast` (`libzip.dylib`) ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |
|  0.1% |       4 | `fwd_copy_again` (`libjvm.dylib`) ← `G1ParScanThreadState::trim_queue_to_threshold` ← `G1ScanHRForRegionClosure::scan_memregion` ← `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` ← `G1ScanHRForRegionClosure::scan_heap_roots` ← `G1ScanHRForRegionClosure::do_heap_region` ← `G1RemSet::scan_heap_roots` ← `G1EvacuateRegionsTask::scan_roots` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                    |
|  0.1% |       3 | `IntervalWalker::walk_to` (`libjvm.dylib`) ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                       |

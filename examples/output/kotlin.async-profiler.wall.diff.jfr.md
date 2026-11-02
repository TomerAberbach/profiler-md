# Sampling profile diff

Collected 5,073 → 2,722 samples (-2,351 samples, -46.3%).

| Category         | Change |  Delta |             % |       Samples |
| ---------------- | -----: | -----: | ------------: | ------------: |
| Native           | -46.3% | -2,226 | 94.7% → 94.8% | 4,806 → 2,580 |
| Compiler         | -46.7% |    -91 |          3.8% |     195 → 104 |
| Ours             | -44.0% |    -22 |          1.0% |       50 → 28 |
| Standard library | -55.6% |    -10 |   0.4% → 0.3% |        18 → 8 |
| JIT              | -50.0% |     -2 |          0.1% |         4 → 2 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── 4,207 → 2,255 samples (82.9% → 82.8%) thread_start at libsystem_pthread.dylib
│   └── 4,207 → 2,255 samples (82.9% → 82.8%) _pthread_start
│       ├── 4,032 → 2,160 samples (79.5% → 79.4%) thread_native_entry at libjvm.dylib
│       │   └── 4,032 → 2,160 samples (79.5% → 79.4%) Thread::call_run
│       │       ├── 1,665 → 891 samples (32.8% → 32.7%) WorkerThread::run
│       │       │   ├── 1,650 → 871 samples (32.5% → 32.0%, self 36.3% → 35.8% globally) semaphore_wait_trap at libsystem_kernel.dylib
│       │       │   └── … 6 → 1 sample (0.1% → <0.1%) TaskTerminator::offer_termination at libjvm.dylib
│       │       │       └── 3 → 0 samples (0.1% → 0.0%) swtch_pri at libsystem_kernel.dylib
│       │       ├── 1,497 → 799 samples (29.5% → 29.4%) JavaThread::thread_main_inner
│       │       │   ├── 629 → 331 samples (12.4% → 12.2%) CompileBroker::compiler_thread_loop
│       │       │   │   ├── 334 → 153 samples (6.6% → 5.6%) CompileBroker::invoke_compiler_on_method
│       │       │   │   │   ├── 246 → 102 samples (4.8% → 3.7%) C2Compiler::compile_method
│       │       │   │   │   │   └── 245 → 101 samples (4.8% → 3.7%) Compile::Compile
│       │       │   │   │   │       ├── 131 → 43 samples (2.6% → 1.6%) Compile::Code_Gen
│       │       │   │   │   │       │   ├── 62 → 26 samples (1.2% → 1.0%) PhaseChaitin::Register_Allocate
│       │       │   │   │   │       │   │   ├── 10 → 1 sample (0.2% → <0.1%) PhaseChaitin::Split
│       │       │   │   │   │       │   │   ├── 8 → 2 samples (0.2% → 0.1%) PhaseChaitin::post_allocate_copy_removal
│       │       │   │   │   │       │   │   │   └── 5 → 2 samples (0.1%) PhaseChaitin::elide_copy
│       │       │   │   │   │       │   │   └── 43 → 23 samples (0.8%) 21 more callees, led by (0.2%) PhaseChaitin::build_ifg_physical
│       │       │   │   │   │       │   ├── 30 → 6 samples (0.6% → 0.2%) Matcher::match
│       │       │   │   │   │       │   │   └── 23 → 2 samples (0.5% → 0.1%) Matcher::xform
│       │       │   │   │   │       │   │       ├── 7 → 0 samples (0.1% → 0.0%) Arena::contains
│       │       │   │   │   │       │   │       └── … 6 → 0 samples (0.1% → 0.0%, self 1.3% → 0.4% globally) __psynch_mutexwait at libsystem_kernel.dylib
│       │       │   │   │   │       │   └── … 6 → 2 samples (0.1%) PhaseCFG::schedule_local at libjvm.dylib
│       │       │   │   │   │       ├── … 22 → 6 samples (0.4% → 0.2%) Parse::do_call at libjvm.dylib
│       │       │   │   │   │       │   └── … 6 → 0 samples (0.1% → 0.0%) ciObjectFactory::get_metadata at libjvm.dylib
│       │       │   │   │   │       └── 69 → 42 samples (1.4% → 1.5%) 4 more callees, led by (1.2% → 1.5%) Compile::Optimize
│       │       │   │   │   └── 88 → 51 samples (1.7% → 1.9%) 4 more callees, led by (1.6% → 1.8%) Compiler::compile_method
│       │       │   │   └── … 281 → 177 samples (5.5% → 6.5%, self 46.6% → 47.8% globally) __psynch_cvwait at libsystem_kernel.dylib
│       │       │   └── 868 → 468 samples (17.1% → 17.2%) 5 more callees, led by (3.4% → 3.5%) MonitorDeflationThread::monitor_deflation_thread_entry
│       │       ├── 522 → 282 samples (10.3% → 10.4%) ConcurrentGCThread::run
│       │       │   └── 522 → 282 samples (10.3% → 10.4%) 3 more callees, led by (3.4% → 3.5%) G1ConcurrentMarkThread::run_service
│       │       └── 348 → 188 samples (6.9%) 2 more callees, led by (3.4% → 3.5%) WatcherThread::run
│       └── … 174 → 94 samples (3.4% → 3.5%) __ulock_wait at libsystem_kernel.dylib
├── … 174 → 94 samples (3.4% → 3.5%) mach_msg2_trap at libsystem_kernel.dylib
├── 166 → 90 samples (3.3%) main(String[]) at org.jetbrains.kotlin.preloading.Preloader
│   └── 166 → 90 samples (3.3%) run(String[])
│       ├── 140 → 75 samples (2.8%) invoke(Object, Object[]) at java.lang.reflect.Method …
│       └── … 14 → 8 samples (0.3%) inflate_fast at libzip.dylib
└── 525 → 283 samples (10.3% → 10.4%) 7 more root frames, led by (3.4% → 3.5%) run() at java.lang.ref.Finalizer$FinalizerThread
```

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |            % | Samples | Function                                                                                                                     | Location                   |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `ciObjectFactory::get_metadata`                                                                                              | `libjvm.dylib`             |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `fwd_copy_again`                                                                                                             | `libjvm.dylib`             |
|  +60.0% |    +3 |  0.1% → 0.3% |   5 → 8 | `tlv_get_addr`                                                                                                               | `libdyld.dylib`            |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `SymbolTable::new_symbol`                                                                                                    | `libjvm.dylib`             |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `_platform_memchr`                                                                                                           | `libsystem_platform.dylib` |
|  +66.7% |    +2 |  0.1% → 0.2% |   3 → 5 | `IndexSetIterator::advance_and_next`                                                                                         | `libjvm.dylib`             |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `PhaseIdealLoop::build_loop_late_post_work`                                                                                  | `libjvm.dylib`             |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                            | `libjvm.dylib`             |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                              | `libjvm.dylib`             |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` | `libjvm.dylib`             |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `VerificationType::is_assignable_from`                                                                                       | `libjvm.dylib`             |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `CodeSection::relocate`                                                                                                      | `libjvm.dylib`             |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `CodeCache::reverse_free_ratio`                                                                                              | `libjvm.dylib`             |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `PhaseIterGVN::add_users_to_worklist`                                                                                        | `libjvm.dylib`             |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `TypeInterfaces::eq`                                                                                                         | `libjvm.dylib`             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `TypeAryPtr::xmeet_helper`                                                                                                   | `libjvm.dylib`             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `TypeInterfaces::make`                                                                                                       | `libjvm.dylib`             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseCFG::insert_anti_dependences`                                                                                          | `libjvm.dylib`             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `LoadNode::Ideal`                                                                                                            | `libjvm.dylib`             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `DependencyContext::add_dependent_nmethod`                                                                                   | `libjvm.dylib`             |

##### Native

|  Change | Delta |            % | Samples | Function                                                                                                                     | Location                   |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `fwd_copy_again`                                                                                                             | `libjvm.dylib`             |
|  +60.0% |    +3 |  0.1% → 0.3% |   5 → 8 | `tlv_get_addr`                                                                                                               | `libdyld.dylib`            |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `SymbolTable::new_symbol`                                                                                                    | `libjvm.dylib`             |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `_platform_memchr`                                                                                                           | `libsystem_platform.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                            | `libjvm.dylib`             |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                              | `libjvm.dylib`             |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` | `libjvm.dylib`             |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `VerificationType::is_assignable_from`                                                                                       | `libjvm.dylib`             |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `CodeCache::reverse_free_ratio`                                                                                              | `libjvm.dylib`             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `DependencyContext::add_dependent_nmethod`                                                                                   | `libjvm.dylib`             |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `unknown`                                                                                                                    | `<unknown>`                |
|  +50.0% |    +1 | <0.1% → 0.1% |   2 → 3 | `inflate_table`                                                                                                              | `libzip.dylib`             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `_qsort`                                                                                                                     | `libsystem_c.dylib`        |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `LocationValue::write_on`                                                                                                    | `libjvm.dylib`             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `NullCheckEliminator::iterate_one`                                                                                           | `libjvm.dylib`             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `SymbolTable::new_symbols`                                                                                                   | `libjvm.dylib`             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object`                                                     | `libjvm.dylib`             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>`                       | `libjvm.dylib`             |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `__psynch_cvbroad`                                                                                                           | `libsystem_kernel.dylib`   |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `G1ScanHRForRegionClosure::scan_heap_roots`                                                                                  | `libjvm.dylib`             |

##### Compiler

|  Change | Delta |            % | Samples | Function                                    | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------- | -------------- |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `ciObjectFactory::get_metadata`             | `libjvm.dylib` |
|  +66.7% |    +2 |  0.1% → 0.2% |   3 → 5 | `IndexSetIterator::advance_and_next`        | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `CodeSection::relocate`                     | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `PhaseIterGVN::add_users_to_worklist`       | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `TypeInterfaces::eq`                        | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `TypeAryPtr::xmeet_helper`                  | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `TypeInterfaces::make`                      | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseCFG::insert_anti_dependences`         | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `LoadNode::Ideal`                           | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `IndexSet::alloc_block_containing`          | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhiNode::Ideal`                            | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `LinearScan::compute_local_live_sets`       | `libjvm.dylib` |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `PhaseIterGVN::subsume_node`                | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseCCP::push_more_uses`                  | `libjvm.dylib` |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `PhaseAggressiveCoalesce::insert_copies`    | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIdealLoop::is_dominator`              | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `ConnectionGraph::create_split_phi`         | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `AddPNode::bottom_type`                     | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `MethodLiveness::BasicBlock::propagate`     | `libjvm.dylib` |

##### Ours

| Change | Delta |            % | Samples | Function                                                                                                                         | Location                                                                                          |
| -----: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `transformBody(FirTransformer, Object)`                                                                                          | `org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl`                                 |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `resetSmartCastPositionTo(Flow)`                                                                                                 | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer`                                        |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitTypeParameter(FirTypeParameter, Object)`                                                                                   | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.DeclarationCheckersDiagnosticComponent`   |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `hashSuffix(IrFunction)`                                                                                                         | `org.jetbrains.kotlin.backend.jvm.lower.JvmValueClassAbstractLowering`                            |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `mapType$default(IrTypeMapper, IrType, TypeMappingMode, JvmSignatureWriter, boolean, int, Object)`                               | `org.jetbrains.kotlin.backend.jvm.mapping.IrTypeMapper`                                           |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `balanceWhiteSpaces()`                                                                                                           | `com.intellij.lang.impl.PsiBuilderImpl`                                                           |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `fastPathSkipApproximation(ConeKotlinType, TypeApproximatorConfiguration)`                                                       | `org.jetbrains.kotlin.fir.types.ConeTypeApproximator`                                             |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `prepareExpectedType(ResolutionContext, Candidate, CallInfo, FirExpression, FirValueParameter)`                                  | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckArgumentsKt`                                  |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `fromMethodNameAndDesc(String, String)`                                                                                          | `org.jetbrains.kotlin.load.kotlin.MemberSignature$Companion`                                      |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `hasNothingSupertype(TypeCheckerState, TypeSystemContext, RigidTypeMarker)`                                                      | `org.jetbrains.kotlin.types.AbstractTypeChecker`                                                  |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `<init>(ConstraintSystemCompleter, ConstraintSystemCompleter$PostponedAtomAnalyzer)`                                             | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter$$Lambda.0x0000007001687670` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `isSubstitutionOverride(FirCallableDeclaration)`                                                                                 | `org.jetbrains.kotlin.fir.ClassMembersKt`                                                         |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `withoutEnhancedNullability(FirTypeRef)`                                                                                         | `org.jetbrains.kotlin.fir.types.TypeUtilsKt`                                                      |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `isMarkedNullable(KotlinTypeMarker)`                                                                                             | `org.jetbrains.kotlin.fir.types.ConeTypeContext`                                                  |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `reportMissingTypes(CheckerContext, DiagnosticReporter, KtSourceElement, Set, FirMissingDependencyClassProxy$MissingTypeOrigin)` | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirMissingDependencyClassProxy`            |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `checkAnnotationTarget(CheckerContext, DiagnosticReporter, FirAnnotationContainer, FirAnnotation)`                               | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirAnnotationChecker`                     |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitFunctionTypeRef(FirFunctionTypeRef, Object)`                                                                               | `org.jetbrains.kotlin.fir.visitors.FirVisitor`                                                    |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `applyTypeArguments(IrExpression, List, List)`                                                                                   | `org.jetbrains.kotlin.fir.backend.generators.CallAndReferenceGenerator`                           |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `<init>(CommonBackendContext, HeaderInfoBuilder)`                                                                                | `org.jetbrains.kotlin.backend.common.lower.loops.handlers.ReversedHandler`                        |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `getPrimitiveOrUnsignedType(IrType, Map, Map)`                                                                                   | `org.jetbrains.kotlin.ir.types.IrTypePredicatesKt`                                                |

#### Improvements

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change |  Delta |             % |       Samples | Function                                                                                                                                                 | Location                   |
| ------: | -----: | ------------: | ------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
|  -44.9% | -1,063 | 46.6% → 47.8% | 2,365 → 1,302 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
|  -47.0% |   -865 | 36.3% → 35.8% |   1,839 → 974 | `semaphore_wait_trap`                                                                                                                                    | `libsystem_kernel.dylib`   |
|  -46.0% |    -80 |   3.4% → 3.5% |      174 → 94 | `mach_msg2_trap`                                                                                                                                         | `libsystem_kernel.dylib`   |
|  -46.0% |    -80 |   3.4% → 3.5% |      174 → 94 | `__ulock_wait`                                                                                                                                           | `libsystem_kernel.dylib`   |
|  -83.6% |    -56 |   1.3% → 0.4% |       67 → 11 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
|  -88.9% |     -8 |  0.2% → <0.1% |         9 → 1 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
| removed |     -7 |   0.1% → 0.0% |         7 → 0 | `Arena::contains`                                                                                                                                        | `libjvm.dylib`             |
|  -85.7% |     -6 |  0.1% → <0.1% |         7 → 1 | `PhaseChaitin::Split`                                                                                                                                    | `libjvm.dylib`             |
|  -42.9% |     -6 |          0.3% |        14 → 8 | `inflate_fast`                                                                                                                                           | `libzip.dylib`             |
|  -85.7% |     -6 |  0.1% → <0.1% |         7 → 1 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`             |
| removed |     -5 |   0.1% → 0.0% |         5 → 0 | `swtch_pri`                                                                                                                                              | `libsystem_kernel.dylib`   |
|  -80.0% |     -4 |  0.1% → <0.1% |         5 → 1 | `PhaseChaitin::elide_copy`                                                                                                                               | `libjvm.dylib`             |
| removed |     -3 |   0.1% → 0.0% |         3 → 0 | `PhaseChaitin::post_allocate_copy_removal`                                                                                                               | `libjvm.dylib`             |
|  -75.0% |     -3 |  0.1% → <0.1% |         4 → 1 | `PhaseChaitin::gather_lrg_masks`                                                                                                                         | `libjvm.dylib`             |
|  -60.0% |     -3 |          0.1% |         5 → 2 | `_platform_memmove`                                                                                                                                      | `libsystem_platform.dylib` |
| removed |     -3 |   0.1% → 0.0% |         3 → 0 | `vmSymbols::find_sid`                                                                                                                                    | `libjvm.dylib`             |
|  -60.0% |     -3 |          0.1% |         5 → 2 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| removed |     -3 |   0.1% → 0.0% |         3 → 0 | `semaphore_signal_trap`                                                                                                                                  | `libsystem_kernel.dylib`   |
| removed |     -2 |  <0.1% → 0.0% |         2 → 0 | `Arena::grow`                                                                                                                                            | `libjvm.dylib`             |
|  -66.7% |     -2 |  0.1% → <0.1% |         3 → 1 | `PhaseCFG::schedule_local`                                                                                                                               | `libjvm.dylib`             |

##### Native

|  Change |  Delta |             % |       Samples | Function                                                                                                                                                 | Location                   |
| ------: | -----: | ------------: | ------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
|  -44.9% | -1,063 | 46.6% → 47.8% | 2,365 → 1,302 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
|  -47.0% |   -865 | 36.3% → 35.8% |   1,839 → 974 | `semaphore_wait_trap`                                                                                                                                    | `libsystem_kernel.dylib`   |
|  -46.0% |    -80 |   3.4% → 3.5% |      174 → 94 | `mach_msg2_trap`                                                                                                                                         | `libsystem_kernel.dylib`   |
|  -46.0% |    -80 |   3.4% → 3.5% |      174 → 94 | `__ulock_wait`                                                                                                                                           | `libsystem_kernel.dylib`   |
|  -83.6% |    -56 |   1.3% → 0.4% |       67 → 11 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
|  -88.9% |     -8 |  0.2% → <0.1% |         9 → 1 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
| removed |     -7 |   0.1% → 0.0% |         7 → 0 | `Arena::contains`                                                                                                                                        | `libjvm.dylib`             |
|  -42.9% |     -6 |          0.3% |        14 → 8 | `inflate_fast`                                                                                                                                           | `libzip.dylib`             |
|  -85.7% |     -6 |  0.1% → <0.1% |         7 → 1 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`             |
| removed |     -5 |   0.1% → 0.0% |         5 → 0 | `swtch_pri`                                                                                                                                              | `libsystem_kernel.dylib`   |
|  -60.0% |     -3 |          0.1% |         5 → 2 | `_platform_memmove`                                                                                                                                      | `libsystem_platform.dylib` |
| removed |     -3 |   0.1% → 0.0% |         3 → 0 | `vmSymbols::find_sid`                                                                                                                                    | `libjvm.dylib`             |
|  -60.0% |     -3 |          0.1% |         5 → 2 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| removed |     -3 |   0.1% → 0.0% |         3 → 0 | `semaphore_signal_trap`                                                                                                                                  | `libsystem_kernel.dylib`   |
| removed |     -2 |  <0.1% → 0.0% |         2 → 0 | `Arena::grow`                                                                                                                                            | `libjvm.dylib`             |
| removed |     -2 |  <0.1% → 0.0% |         2 → 0 | `JavaFrameAnchor::make_walkable`                                                                                                                         | `libjvm.dylib`             |
| removed |     -2 |  <0.1% → 0.0% |         2 → 0 | `resource_allocate_bytes`                                                                                                                                | `libjvm.dylib`             |
| removed |     -2 |  <0.1% → 0.0% |         2 → 0 | `ConstantPool::klass_at_if_loaded`                                                                                                                       | `libjvm.dylib`             |
| removed |     -2 |  <0.1% → 0.0% |         2 → 0 | `forward_copy_longs`                                                                                                                                     | `<unknown>`                |
| removed |     -2 |  <0.1% → 0.0% |         2 → 0 | `InstanceKlass::find_local_field`                                                                                                                        | `libjvm.dylib`             |

##### Compiler

|  Change | Delta |            % | Samples | Function                                           | Location       |
| ------: | ----: | -----------: | ------: | -------------------------------------------------- | -------------- |
|  -85.7% |    -6 | 0.1% → <0.1% |   7 → 1 | `PhaseChaitin::Split`                              | `libjvm.dylib` |
|  -80.0% |    -4 | 0.1% → <0.1% |   5 → 1 | `PhaseChaitin::elide_copy`                         | `libjvm.dylib` |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `PhaseChaitin::post_allocate_copy_removal`         | `libjvm.dylib` |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `PhaseChaitin::gather_lrg_masks`                   | `libjvm.dylib` |
|  -66.7% |    -2 | 0.1% → <0.1% |   3 → 1 | `PhaseCFG::schedule_local`                         | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Node_Backward_Iterator::next`                     | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseIterGVN::transform_old`                      | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Node_Array::insert`                               | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseCFG::schedule_pinned_nodes`                  | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `RegMask::clear_to_sets`                           | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `MergeMemNode::Ideal`                              | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `ProjNode::Opcode`                                 | `libjvm.dylib` |
|  -40.0% |    -2 |         0.1% |   5 → 3 | `IntervalWalker::walk_to`                          | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `LinearScan::build_intervals`                      | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `LinearScan::assign_reg_num`                       | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseChaitin::de_ssa`                             | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `NodeHash::hash_delete`                            | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseLive::add_liveout`                           | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseCFG::select`                                 | `libjvm.dylib` |

##### Ours

|  Change | Delta |            % | Samples | Function                                                                                                            | Location                                                                                                                        |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<clinit>()`                                                                                                        | `org.jetbrains.kotlin.psi.stubs.elements.KtClassElementType`                                                                    |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<init>(CodedInputStream, ExtensionRegistryLite)`                                                                   | `org.jetbrains.kotlin.metadata.ProtoBuf$TypeTable`                                                                              |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `reportErrors(LighterASTNode, FlyweightCapableTreeStructure, KotlinLightParser$LightTreeParsingErrorListener, Ref)` | `org.jetbrains.kotlin.parsing.KotlinLightParser`                                                                                |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `convertFunctionDeclaration(LighterASTNode)`                                                                        | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder`                                                |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `isAllUnder()`                                                                                                      | `org.jetbrains.kotlin.fir.declarations.impl.FirResolvedImportImpl`                                                              |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                                         | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$1`                                                                           |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<init>(FirSession, KotlinClassFinder)`                                                                             | `org.jetbrains.kotlin.fir.java.deserialization.AnnotationsLoader`                                                               |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getCustomAnnotations(ConeAttributes)`                                                                              | `org.jetbrains.kotlin.fir.types.CustomAnnotationTypeAttributeKt`                                                                |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `parameter(String, JavaTypeQualifiers[])`                                                                           | `org.jetbrains.kotlin.load.java.typeEnhancement.SignatureEnhancementBuilder$ClassEnhancementBuilder$FunctionEnhancementBuilder` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `processLevel(TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)`                                | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`                                                          |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `typeSubstitutorByTypeConstructor(Map)`                                                                             | `org.jetbrains.kotlin.fir.types.ConeInferenceContext`                                                                           |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getSymbol()`                                                                                                       | `org.jetbrains.kotlin.fir.declarations.impl.FirValueParameterImpl`                                                              |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `computeTypeArgumentTypes(Candidate)`                                                                               | `org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer`                                       |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getPostponedAtoms()`                                                                                               | `org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate`                                                                    |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `wrapProjection(ConeTypeProjection, ConeKotlinType)`                                                                | `org.jetbrains.kotlin.fir.resolve.substitution.SubstitutionUtilitiesKt`                                                         |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `substituteArguments(ConeSimpleKotlinType)`                                                                         | `org.jetbrains.kotlin.fir.resolve.substitution.AbstractConeSubstitutor`                                                         |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `isSubtypeOfForSingleClassifierType(TypeCheckerState, TypeSystemContext, RigidTypeMarker, RigidTypeMarker)`         | `org.jetbrains.kotlin.types.AbstractTypeChecker`                                                                                |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getValue(FirDeclaration, KProperty)`                                                                               | `org.jetbrains.kotlin.fir.declarations.FirDeclarationDataRegistry$DeclarationDataAccessor`                                      |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `filterOutEquivalentSupertypesWithSameConstructor(TypeCheckerState, TypeSystemContext, List)`                       | `org.jetbrains.kotlin.types.AbstractTypeChecker`                                                                                |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getTypeRef()`                                                                                                      | `org.jetbrains.kotlin.fir.declarations.impl.FirReceiverParameterImpl`                                                           |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `transformBody(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl`)

| Change | Delta |             % | Samples | Location                                                              |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl:117` |

##### `resetSmartCastPositionTo(Flow)` (`org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer`)

| Change | Delta |             % | Samples | Location                                                        |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer:2010` |

##### `visitTypeParameter(FirTypeParameter, Object)` (`org.jetbrains.kotlin.fir.analysis.checkers.declaration.DeclarationCheckersDiagnosticComponent`)

| Change | Delta |             % | Samples | Location                                                                                           |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.DeclarationCheckersDiagnosticComponent:25` |

##### `hashSuffix(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.lower.JvmValueClassAbstractLowering`)

| Change | Delta |             % | Samples | Location                                                                   |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.backend.jvm.lower.JvmValueClassAbstractLowering:130` |

##### `mapType$default(IrTypeMapper, IrType, TypeMappingMode, JvmSignatureWriter, boolean, int, Object)` (`org.jetbrains.kotlin.backend.jvm.mapping.IrTypeMapper`)

| Change | Delta |             % | Samples | Location                                                    |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.backend.jvm.mapping.IrTypeMapper:149` |

##### `balanceWhiteSpaces()` (`com.intellij.lang.impl.PsiBuilderImpl`)

| Change | Delta |             % | Samples | Location                                     |
| -----: | ----: | ------------: | ------: | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `com.intellij.lang.impl.PsiBuilderImpl:1198` |

##### `fastPathSkipApproximation(ConeKotlinType, TypeApproximatorConfiguration)` (`org.jetbrains.kotlin.fir.types.ConeTypeApproximator`)

| Change | Delta |             % | Samples | Location                                                 |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.types.ConeTypeApproximator:32` |

##### `prepareExpectedType(ResolutionContext, Candidate, CallInfo, FirExpression, FirValueParameter)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.CheckArgumentsKt`)

| Change | Delta |             % | Samples | Location                                                             |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckArgumentsKt:106` |

##### `fromMethodNameAndDesc(String, String)` (`org.jetbrains.kotlin.load.kotlin.MemberSignature$Companion`)

| Change | Delta |             % | Samples | Location                                                        |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.load.kotlin.MemberSignature$Companion:24` |

##### `hasNothingSupertype(TypeCheckerState, TypeSystemContext, RigidTypeMarker)` (`org.jetbrains.kotlin.types.AbstractTypeChecker`)

| Change | Delta |             % | Samples | Location                                             |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.types.AbstractTypeChecker:963` |

##### `isSubstitutionOverride(FirCallableDeclaration)` (`org.jetbrains.kotlin.fir.ClassMembersKt`)

| Change | Delta |             % | Samples | Location                                     |
| -----: | ----: | ------------: | ------: | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.ClassMembersKt:76` |

##### `withoutEnhancedNullability(FirTypeRef)` (`org.jetbrains.kotlin.fir.types.TypeUtilsKt`)

| Change | Delta |             % | Samples | Location                                         |
| -----: | ----: | ------------: | ------: | ------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.types.TypeUtilsKt:434` |

##### `isMarkedNullable(KotlinTypeMarker)` (`org.jetbrains.kotlin.fir.types.ConeTypeContext`)

| Change | Delta |             % | Samples | Location                                             |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.types.ConeTypeContext:133` |

##### `reportMissingTypes(CheckerContext, DiagnosticReporter, KtSourceElement, Set, FirMissingDependencyClassProxy$MissingTypeOrigin)` (`org.jetbrains.kotlin.fir.analysis.checkers.expression.FirMissingDependencyClassProxy`)

| Change | Delta |             % | Samples | Location                                                                                   |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirMissingDependencyClassProxy:154` |

##### `checkAnnotationTarget(CheckerContext, DiagnosticReporter, FirAnnotationContainer, FirAnnotation)` (`org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirAnnotationChecker`)

| Change | Delta |             % | Samples | Location                                                                          |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirAnnotationChecker:162` |

##### `visitFunctionTypeRef(FirFunctionTypeRef, Object)` (`org.jetbrains.kotlin.fir.visitors.FirVisitor`)

| Change | Delta |             % | Samples | Location                                           |
| -----: | ----: | ------------: | ------: | -------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.visitors.FirVisitor:444` |

##### `applyTypeArguments(IrExpression, List, List)` (`org.jetbrains.kotlin.fir.backend.generators.CallAndReferenceGenerator`)

| Change | Delta |             % | Samples | Location                                                                     |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.backend.generators.CallAndReferenceGenerator:1363` |

##### `<init>(CommonBackendContext, HeaderInfoBuilder)` (`org.jetbrains.kotlin.backend.common.lower.loops.handlers.ReversedHandler`)

| Change | Delta |             % | Samples | Location                                                                      |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.backend.common.lower.loops.handlers.ReversedHandler:39` |

##### `getPrimitiveOrUnsignedType(IrType, Map, Map)` (`org.jetbrains.kotlin.ir.types.IrTypePredicatesKt`)

| Change | Delta |             % | Samples | Location                                               |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.ir.types.IrTypePredicatesKt:152` |

##### `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$TypeTable`)

|  Change | Delta |             % | Samples | Location                                                 |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.metadata.ProtoBuf$TypeTable:14433` |

##### `reportErrors(LighterASTNode, FlyweightCapableTreeStructure, KotlinLightParser$LightTreeParsingErrorListener, Ref)` (`org.jetbrains.kotlin.parsing.KotlinLightParser`)

|  Change | Delta |             % | Samples | Location                                            |
| ------: | ----: | ------------: | ------: | --------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.parsing.KotlinLightParser:55` |

##### `convertFunctionDeclaration(LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder`)

|  Change | Delta |             % | Samples | Location                                                                              |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder:2123` |

##### `isAllUnder()` (`org.jetbrains.kotlin.fir.declarations.impl.FirResolvedImportImpl`)

|  Change | Delta |             % | Samples | Location                                                              |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.declarations.impl.FirResolvedImportImpl:32` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$1`)

|  Change | Delta |             % | Samples | Location                                                   |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$1:2032` |

##### `<init>(FirSession, KotlinClassFinder)` (`org.jetbrains.kotlin.fir.java.deserialization.AnnotationsLoader`)

|  Change | Delta |             % | Samples | Location                                                             |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.java.deserialization.AnnotationsLoader:29` |

##### `getCustomAnnotations(ConeAttributes)` (`org.jetbrains.kotlin.fir.types.CustomAnnotationTypeAttributeKt`)

|  Change | Delta |             % | Samples | Location                                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.types.CustomAnnotationTypeAttributeKt:45` |

##### `parameter(String, JavaTypeQualifiers[])` (`org.jetbrains.kotlin.load.java.typeEnhancement.SignatureEnhancementBuilder$ClassEnhancementBuilder$FunctionEnhancementBuilder`)

|  Change | Delta |             % | Samples | Location                                                                                                                            |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.load.java.typeEnhancement.SignatureEnhancementBuilder$ClassEnhancementBuilder$FunctionEnhancementBuilder:334` |

##### `processLevel(TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`)

|  Change | Delta |             % | Samples | Location                                                                   |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask:201` |

##### `typeSubstitutorByTypeConstructor(Map)` (`org.jetbrains.kotlin.fir.types.ConeInferenceContext`)

|  Change | Delta |             % | Samples | Location                                                 |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.types.ConeInferenceContext:40` |

##### `getSymbol()` (`org.jetbrains.kotlin.fir.declarations.impl.FirValueParameterImpl`)

|  Change | Delta |             % | Samples | Location                                                              |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.declarations.impl.FirValueParameterImpl:42` |

##### `computeTypeArgumentTypes(Candidate)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer`)

|  Change | Delta |             % | Samples | Location                                                                                       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer:1065` |

##### `getPostponedAtoms()` (`org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate`)

|  Change | Delta |             % | Samples | Location                                                         |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate:233` |

##### `wrapProjection(ConeTypeProjection, ConeKotlinType)` (`org.jetbrains.kotlin.fir.resolve.substitution.SubstitutionUtilitiesKt`)

|  Change | Delta |             % | Samples | Location                                                                   |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.substitution.SubstitutionUtilitiesKt:46` |

##### `substituteArguments(ConeSimpleKotlinType)` (`org.jetbrains.kotlin.fir.resolve.substitution.AbstractConeSubstitutor`)

|  Change | Delta |             % | Samples | Location                                                                    |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.substitution.AbstractConeSubstitutor:112` |

##### `isSubtypeOfForSingleClassifierType(TypeCheckerState, TypeSystemContext, RigidTypeMarker, RigidTypeMarker)` (`org.jetbrains.kotlin.types.AbstractTypeChecker`)

|  Change | Delta |             % | Samples | Location                                             |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.types.AbstractTypeChecker:429` |

##### `getValue(FirDeclaration, KProperty)` (`org.jetbrains.kotlin.fir.declarations.FirDeclarationDataRegistry$DeclarationDataAccessor`)

|  Change | Delta |             % | Samples | Location                                                                                      |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.declarations.FirDeclarationDataRegistry$DeclarationDataAccessor:76` |

##### `filterOutEquivalentSupertypesWithSameConstructor(TypeCheckerState, TypeSystemContext, List)` (`org.jetbrains.kotlin.types.AbstractTypeChecker`)

|  Change | Delta |             % | Samples | Location                                             |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.types.AbstractTypeChecker:985` |

##### `getTypeRef()` (`org.jetbrains.kotlin.fir.declarations.impl.FirReceiverParameterImpl`)

|  Change | Delta |             % | Samples | Location                                                                 |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.declarations.impl.FirReceiverParameterImpl:35` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                                             | Location       |
| -----: | ----: | -----------: | ------: | -------------------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `ciReceiverTypeData::translate_receiver_data_from` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `ciEnv::get_klass_by_name_impl`                    | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `ciMethod::ensure_method_data`                     | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `ciEnv::get_klass_by_index_impl`                   | `libjvm.dylib` |

##### `fwd_copy_again` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                          | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | -------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|  Change | Delta |            % | Samples | Caller                                                                   | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------ | -------------- |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `PhaseLive::compute`                                                     | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `GraphKit::cast_not_null`                                                | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `GrowableArrayWithAllocator<LIR_Op*, GrowableArray<LIR_Op*>>::expand_to` | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `TypeOopPtr::make_from_klass_common`                                     | `libjvm.dylib` |
|     new |    +1 | 0.0% → 12.5% |   0 → 1 | `StackMapReader::next`                                                   | `libjvm.dylib` |

##### `SymbolTable::new_symbol` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                         | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------ | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `SignatureStream::find_symbol` | `libjvm.dylib` |

##### `_platform_memchr` (`libsystem_platform.dylib`)

| Change | Delta |             % | Samples | Caller                             | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `SignatureStream::SignatureStream` | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                             | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------- | -------------- |
|     new |    +2 | 0.0% → 40.0% |   0 → 2 | `PhaseChaitin::Simplify`           | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `PhaseIFG::remove_node`            | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `PhaseIFG::SquareUp`               | `libjvm.dylib` |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `PhaseIFG::effective_degree`       | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                            | Location       |
| ------: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `PhaseIdealLoop::build_loop_late` | `libjvm.dylib` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                                          | Location       |
| -----: | ----: | -----------: | ------: | ----------------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `G1ScanHRForRegionClosure::scan_memregion`      | `libjvm.dylib` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                     | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `G1ScanHRForRegionClosure::scan_memregion` | `libjvm.dylib` |

##### `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                            | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib` |

##### `VerificationType::is_assignable_from` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                            | Location       |
| -----: | ----: | -----------: | ------: | --------------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `StackMapFrame::is_assignable_to` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `StackMapFrame::get_local`        | `libjvm.dylib` |

##### `CodeSection::relocate` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                            | Location       |
| -----: | ----: | -----------: | ------: | --------------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `MacroAssembler::trampoline_call` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `Address::lea`                    | `libjvm.dylib` |

##### `CodeCache::reverse_free_ratio` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                 | Location       |
| -----: | ----: | -----------: | ------: | ---------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `LoopPredicate::apply` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `CallPredicate::apply` | `libjvm.dylib` |

##### `PhaseIterGVN::add_users_to_worklist` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                       | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseIterGVN::PhaseIterGVN` | `libjvm.dylib` |

##### `TypeInterfaces::eq` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller            | Location       |
| -----: | ----: | ------------: | ------: | ----------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `TypeInstPtr::eq` | `libjvm.dylib` |

##### `TypeAryPtr::xmeet_helper` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                      | Location       |
| -----: | ----: | ------------: | ------: | --------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `TypeOopPtr::filter_helper` | `libjvm.dylib` |

##### `TypeInterfaces::make` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller               | Location       |
| -----: | ----: | ------------: | ------: | -------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `TypeKlassPtr::make` | `libjvm.dylib` |

##### `PhaseCFG::insert_anti_dependences` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                    | Location       |
| -----: | ----: | ------------: | ------: | ------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseCFG::schedule_late` | `libjvm.dylib` |

##### `LoadNode::Ideal` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                        | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |

##### `DependencyContext::add_dependent_nmethod` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                 | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `InstanceKlass::add_dependent_nmethod` | `libjvm.dylib` |

##### `unknown` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller    | Location    |
| ------: | ----: | -----: | ------: | --------- | ----------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `unknown` | `<unknown>` |

##### `inflate_table` (`libzip.dylib`)

| Change | Delta |      % | Samples | Caller    | Location       |
| -----: | ----: | -----: | ------: | --------- | -------------- |
| +50.0% |    +1 | 100.0% |   2 → 3 | `inflate` | `libzip.dylib` |

##### `_qsort` (`libsystem_c.dylib`)

| Change | Delta |             % | Samples | Caller   | Location            |
| -----: | ----: | ------------: | ------: | -------- | ------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `_qsort` | `libsystem_c.dylib` |

##### `LocationValue::write_on` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                          | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `DebugInformationRecorder::create_scope_values` | `libjvm.dylib` |

##### `NullCheckEliminator::iterate_one` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                             | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `Optimizer::eliminate_null_checks` | `libjvm.dylib` |

##### `SymbolTable::new_symbols` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                         | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |

##### `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                                                            | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb` | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                                                   | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------ | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` | `libjvm.dylib` |

##### `__psynch_cvbroad` (`libsystem_kernel.dylib`)

|  Change | Delta |             % | Samples | Caller                               | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
|     new |    +2 | 0.0% → 100.0% |   0 → 2 | `CompileBroker::create_compile_task` | `libjvm.dylib` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `TaskTerminator::offer_termination`  | `libjvm.dylib` |

##### `G1ScanHRForRegionClosure::scan_heap_roots` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                     | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `G1ScanHRForRegionClosure::do_heap_region` | `libjvm.dylib` |

##### `IndexSet::alloc_block_containing` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                             | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |

##### `PhiNode::Ideal` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                        | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |

##### `LinearScan::compute_local_live_sets` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                       | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `PhaseIterGVN::subsume_node` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                          | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | -------------- |
|     new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseIterGVN::transform_old`                   | `libjvm.dylib` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseMacroExpand::process_users_of_allocation` | `libjvm.dylib` |

##### `PhaseCCP::push_more_uses` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                   | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseCCP::push_child_nodes_to_worklist` | `libjvm.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                            | Location       |
| ------: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::is_dominator` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                        | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `libjvm.dylib` |

##### `ConnectionGraph::create_split_phi` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                              | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `ConnectionGraph::split_memory_phi` | `libjvm.dylib` |

##### `AddPNode::bottom_type` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller              | Location       |
| -----: | ----: | ------------: | ------: | ------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseCCP::analyze` | `libjvm.dylib` |

##### `MethodLiveness::BasicBlock::propagate` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                             | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `MethodLiveness::compute_liveness` | `libjvm.dylib` |

##### `transformBody(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl`)

| Change | Delta |             % | Samples | Caller                                      | Location                                                          |
| -----: | ----: | ------------: | ------: | ------------------------------------------- | ----------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `transformChildren(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl` |

##### `resetSmartCastPositionTo(Flow)` (`org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer`)

| Change | Delta |             % | Samples | Caller                                 | Location                                                   |
| -----: | ----: | ------------: | ------: | -------------------------------------- | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `buildDefaultFlow(CFGNode, Function2)` | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer` |

##### `visitTypeParameter(FirTypeParameter, Object)` (`org.jetbrains.kotlin.fir.analysis.checkers.declaration.DeclarationCheckersDiagnosticComponent`)

| Change | Delta |             % | Samples | Caller                       | Location                                                 |
| -----: | ----: | ------------: | ------: | ---------------------------- | -------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `accept(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.declarations.FirTypeParameter` |

##### `hashSuffix(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.lower.JvmValueClassAbstractLowering`)

| Change | Delta |             % | Samples | Caller                  | Location                                                               |
| -----: | ----: | ------------: | ------: | ----------------------- | ---------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visitReturn(IrReturn)` | `org.jetbrains.kotlin.backend.jvm.lower.JvmValueClassAbstractLowering` |

##### `mapType$default(IrTypeMapper, IrType, TypeMappingMode, JvmSignatureWriter, boolean, int, Object)` (`org.jetbrains.kotlin.backend.jvm.mapping.IrTypeMapper`)

| Change | Delta |             % | Samples | Caller                                                                                                  | Location                                                |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `writeGenericArguments$lambda$1$0(IrTypeMapper, KotlinTypeMarker, JvmSignatureWriter, TypeMappingMode)` | `org.jetbrains.kotlin.backend.jvm.mapping.IrTypeMapper` |

##### `balanceWhiteSpaces()` (`com.intellij.lang.impl.PsiBuilderImpl`)

| Change | Delta |             % | Samples | Caller               | Location                                |
| -----: | ----: | ------------: | ------: | -------------------- | --------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `prepareLightTree()` | `com.intellij.lang.impl.PsiBuilderImpl` |

##### `fastPathSkipApproximation(ConeKotlinType, TypeApproximatorConfiguration)` (`org.jetbrains.kotlin.fir.types.ConeTypeApproximator`)

| Change | Delta |             % | Samples | Caller                                                                  | Location                                              |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------- | ----------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `approximateToSuperType(ConeKotlinType, TypeApproximatorConfiguration)` | `org.jetbrains.kotlin.fir.types.ConeTypeApproximator` |

##### `prepareExpectedType(ResolutionContext, Candidate, CallInfo, FirExpression, FirValueParameter)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.CheckArgumentsKt`)

| Change | Delta |             % | Samples | Caller                                                                                                 | Location                                                         |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `access$prepareExpectedType(ResolutionContext, Candidate, CallInfo, FirExpression, FirValueParameter)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckArgumentsKt` |

##### `fromMethodNameAndDesc(String, String)` (`org.jetbrains.kotlin.load.kotlin.MemberSignature$Companion`)

| Change | Delta |             % | Samples | Caller                      | Location                                                                                                  |
| -----: | ----: | ------------: | ------: | --------------------------- | --------------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visitMethod(Name, String)` | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializerKt$loadMemberAnnotations$1` |

##### `hasNothingSupertype(TypeCheckerState, TypeSystemContext, RigidTypeMarker)` (`org.jetbrains.kotlin.types.AbstractTypeChecker`)

| Change | Delta |             % | Samples | Caller                                                                                                      | Location                                         |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `isSubtypeOfForSingleClassifierType(TypeCheckerState, TypeSystemContext, RigidTypeMarker, RigidTypeMarker)` | `org.jetbrains.kotlin.types.AbstractTypeChecker` |

##### `<init>(ConstraintSystemCompleter, ConstraintSystemCompleter$PostponedAtomAnalyzer)` (`org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter$$Lambda.0x0000007001687670`)

| Change | Delta |             % | Samples | Caller                                     | Location                                     |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `newInvokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `isSubstitutionOverride(FirCallableDeclaration)` (`org.jetbrains.kotlin.fir.ClassMembersKt`)

| Change | Delta |             % | Samples | Caller                                           | Location                                               |
| -----: | ----: | ------------: | ------: | ------------------------------------------------ | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `unwrapFakeOverridesIfNecessary(FirBasedSymbol)` | `org.jetbrains.kotlin.fir.resolve.dfa.VariableStorage` |

##### `withoutEnhancedNullability(FirTypeRef)` (`org.jetbrains.kotlin.fir.types.TypeUtilsKt`)

| Change | Delta |             % | Samples | Caller                                                                                                          | Location                                                                                     |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `approximateDeclarationType(SessionHolder, FirResolvedTypeRef, Visibility, boolean, boolean, boolean, boolean)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.DeclarationApproximationUtilsKt` |

##### `isMarkedNullable(KotlinTypeMarker)` (`org.jetbrains.kotlin.fir.types.ConeTypeContext`)

| Change | Delta |             % | Samples | Caller                               | Location                                                                     |
| -----: | ----: | ------------: | ------: | ------------------------------------ | ---------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `isMarkedNullable(KotlinTypeMarker)` | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl` |

##### `reportMissingTypes(CheckerContext, DiagnosticReporter, KtSourceElement, Set, FirMissingDependencyClassProxy$MissingTypeOrigin)` (`org.jetbrains.kotlin.fir.analysis.checkers.expression.FirMissingDependencyClassProxy`)

| Change | Delta |             % | Samples | Caller                                                                    | Location                                                                                 |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `check(CheckerContext, DiagnosticReporter, FirQualifiedAccessExpression)` | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirMissingDependencyClassChecker` |

##### `checkAnnotationTarget(CheckerContext, DiagnosticReporter, FirAnnotationContainer, FirAnnotation)` (`org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirAnnotationChecker`)

| Change | Delta |             % | Samples | Caller                                                                                 | Location                                                                      |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `checkAnnotationContainer(CheckerContext, DiagnosticReporter, FirAnnotationContainer)` | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirAnnotationChecker` |

##### `visitFunctionTypeRef(FirFunctionTypeRef, Object)` (`org.jetbrains.kotlin.fir.visitors.FirVisitor`)

| Change | Delta |             % | Samples | Caller                       | Location                                            |
| -----: | ----: | ------------: | ------: | ---------------------------- | --------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `accept(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.types.FirFunctionTypeRef` |

##### `applyTypeArguments(IrExpression, List, List)` (`org.jetbrains.kotlin.fir.backend.generators.CallAndReferenceGenerator`)

| Change | Delta |             % | Samples | Caller                                                                                            | Location                                                                |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `applyTypeArgumentsWithTypealiasConstructorRemapping(IrExpression, FirCallableDeclaration, List)` | `org.jetbrains.kotlin.fir.backend.generators.CallAndReferenceGenerator` |

##### `<init>(CommonBackendContext, HeaderInfoBuilder)` (`org.jetbrains.kotlin.backend.common.lower.loops.handlers.ReversedHandler`)

| Change | Delta |             % | Samples | Caller                                    | Location                                                                              |
| -----: | ----: | ------------: | ------: | ----------------------------------------- | ------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>(CommonBackendContext, Function0)` | `org.jetbrains.kotlin.backend.common.lower.loops.NestedHeaderInfoBuilderForWithIndex` |

##### `getPrimitiveOrUnsignedType(IrType, Map, Map)` (`org.jetbrains.kotlin.ir.types.IrTypePredicatesKt`)

| Change | Delta |             % | Samples | Caller                     | Location                                           |
| -----: | ----: | ------------: | ------: | -------------------------- | -------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getPrimitiveType(IrType)` | `org.jetbrains.kotlin.ir.types.IrTypePredicatesKt` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

| Change | Delta |             % |       Samples | Caller                  | Location                 |
| -----: | ----: | ------------: | ------------: | ----------------------- | ------------------------ |
| -44.6% |  -823 | 78.0% → 78.5% | 1,845 → 1,022 | `PlatformMonitor::wait` | `libjvm.dylib`           |
| -46.2% |   -80 |   7.3% → 7.1% |      173 → 93 | `Parker::park`          | `libjvm.dylib`           |
| -46.0% |   -80 |   7.4% → 7.2% |      174 → 94 | `PlatformEvent::park`   | `libjvm.dylib`           |
| -46.2% |   -80 |   7.3% → 7.1% |      173 → 93 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

| Change | Delta |             % |     Samples | Caller                           | Location       |
| -----: | ----: | ------------: | ----------: | -------------------------------- | -------------- |
| -47.2% |  -779 | 89.7% → 89.4% | 1,650 → 871 | `WorkerThread::run`              | `libjvm.dylib` |
| -46.0% |   -80 |   9.5% → 9.7% |    174 → 94 | `os::signal_wait`                | `libjvm.dylib` |
| -44.4% |    -4 |          0.5% |       9 → 5 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |
| -33.3% |    -2 |   0.3% → 0.4% |       6 → 4 | `WorkerThreads::run_task`        | `libjvm.dylib` |

##### `mach_msg2_trap` (`libsystem_kernel.dylib`)

| Change | Delta |      % |  Samples | Caller               | Location                 |
| -----: | ----: | -----: | -------: | -------------------- | ------------------------ |
| -46.0% |   -80 | 100.0% | 174 → 94 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `__ulock_wait` (`libsystem_kernel.dylib`)

| Change | Delta |      % |  Samples | Caller                    | Location       |
| -----: | ----: | -----: | -------: | ------------------------- | -------------- |
| -46.0% |   -80 | 100.0% | 174 → 94 | `CallJavaMainInNewThread` | `libjli.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller                              | Location                  |
| -----: | ----: | -----: | ------: | ----------------------------------- | ------------------------- |
| -83.6% |   -56 | 100.0% | 67 → 11 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                  | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------------- | -------------- |
| removed |    -6 | 66.7% → 0.0% |   6 → 0 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |
| removed |    -1 | 11.1% → 0.0% |   1 → 0 | `InstanceKlass::find_local_method`      | `libjvm.dylib` |
| removed |    -1 | 11.1% → 0.0% |   1 → 0 | `LinkResolver::resolve_method`          | `libjvm.dylib` |

##### `Arena::contains` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller           | Location       |
| ------: | ----: | ------------: | ------: | ---------------- | -------------- |
| removed |    -7 | 100.0% → 0.0% |   7 → 0 | `Matcher::xform` | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -85.7% |    -6 | 100.0% |   7 → 1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `inflate_fast` (`libzip.dylib`)

| Change | Delta |      % | Samples | Caller                                          | Location       |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | -------------- |
| -42.9% |    -6 | 100.0% |  14 → 8 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `SymbolTable::do_lookup` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                         | Location       |
| ------: | ----: | -------------: | ------: | ---------------------------------------------- | -------------- |
| removed |    -3 |   42.9% → 0.0% |   3 → 0 | `SymbolTable::new_symbol`                      | `libjvm.dylib` |
| removed |    -2 |   28.6% → 0.0% |   2 → 0 | `SymbolTable::lookup_only`                     | `libjvm.dylib` |
|  -50.0% |    -1 | 28.6% → 100.0% |   2 → 1 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |

##### `swtch_pri` (`libsystem_kernel.dylib`)

|  Change | Delta |            % | Samples | Caller                              | Location       |
| ------: | ----: | -----------: | ------: | ----------------------------------- | -------------- |
| removed |    -4 | 80.0% → 0.0% |   4 → 0 | `TaskTerminator::offer_termination` | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `CompileBroker::make_thread`        | `libjvm.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                     | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------------ | -------------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `_platform_memmove` (`libsystem_platform.dylib`)

|  Change | Delta |            % | Samples | Caller                              | Location       |
| ------: | ----: | -----------: | ------: | ----------------------------------- | -------------- |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `Node::clone`                       | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `SharedRuntime::resolve_sub_helper` | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `PhaseOutput::Output`               | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `Type_Array::grow`                  | `libjvm.dylib` |
|     new |    +1 | 0.0% → 50.0% |   0 → 1 | `inflate`                           | `libzip.dylib` |

##### `vmSymbols::find_sid` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                        | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------- | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `ciObjectFactory::get_symbol` | `libjvm.dylib` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                             | Location       |
| ------: | ----: | -------------: | ------: | -------------------------------------------------- | -------------- |
| removed |    -4 |   80.0% → 0.0% |   4 → 0 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
| +100.0% |    +1 | 20.0% → 100.0% |   1 → 2 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |

##### `semaphore_signal_trap` (`libsystem_kernel.dylib`)

|  Change | Delta |            % | Samples | Caller                    | Location       |
| ------: | ----: | -----------: | ------: | ------------------------- | -------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `WorkerThreads::run_task` | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `WorkerThread::run`       | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                | Location       |
| ------: | ----: | -----------: | ------: | --------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseOutput::Output` | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseIFG::init`      | `libjvm.dylib` |

##### `PhaseCFG::schedule_local` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                         | Location       |
| -----: | ----: | -----: | ------: | ------------------------------ | -------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `JavaFrameAnchor::make_walkable` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                              | Location       |
| ------: | ----: | -----------: | ------: | ----------------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `ciBytecodeStream::get_field`       | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `SharedRuntime::resolve_sub_helper` | `libjvm.dylib` |

##### `resource_allocate_bytes` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                               | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------ | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `ciTypeFlow::get_start_state`        | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `BlockListBuilder::BlockListBuilder` | `libjvm.dylib` |

##### `ConstantPool::klass_at_if_loaded` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `ciEnv::get_klass_by_index_impl` | `libjvm.dylib` |

##### `forward_copy_longs` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                             | Location    |
| ------: | ----: | -----------: | ------: | ---------------------------------- | ----------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `jbyte_disjoint_arraycopy`         | `<unknown>` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `arrayof_jlong_disjoint_arraycopy` | `<unknown>` |

##### `InstanceKlass::find_local_field` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                      | Location       |
| ------: | ----: | ------------: | ------: | --------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `InstanceKlass::find_field` | `libjvm.dylib` |

##### `Node_Backward_Iterator::next` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                         | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------ | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseCFG::schedule_late`      | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                   | Location       |
| ------: | ----: | ------------: | ------: | ------------------------ | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseIterGVN::optimize` | `libjvm.dylib` |

##### `Node_Array::insert` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                               | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------ | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseCFG::schedule_node_into_block` | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseCFG::sched_call`               | `libjvm.dylib` |

##### `PhaseCFG::schedule_pinned_nodes` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                         | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------ | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `RegMask::clear_to_sets` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                            | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseChaitin::Select`            | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `MergeMemNode::Ideal` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                        | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |

##### `ProjNode::Opcode` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                             | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `ConnectionGraph::add_final_edges` | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseIterGVN::transform_old`      | `libjvm.dylib` |

##### `IntervalWalker::walk_to` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                           | Location       |
| ------: | ----: | -----------: | ------: | -------------------------------- | -------------- |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `LinearScan::allocate_registers` | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `LinearScan::compute_oop_map`    | `libjvm.dylib` |

##### `DebugInformationRecorder::serialize_scope_values` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                          | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `DebugInformationRecorder::create_scope_values` | `libjvm.dylib` |

##### `LinearScan::build_intervals` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                       | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `LinearScan::assign_reg_num` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                       | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `PhaseChaitin::de_ssa` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `NodeHash::hash_delete` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `RegionNode::Ideal`                   | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `ConnectionGraph::split_unique_types` | `libjvm.dylib` |

##### `PhaseLive::add_liveout` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller               | Location       |
| ------: | ----: | ------------: | ------: | -------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseLive::compute` | `libjvm.dylib` |

##### `PhaseCFG::select` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                     | Location       |
| ------: | ----: | ------------: | ------: | -------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseCFG::schedule_local` | `libjvm.dylib` |

##### `<clinit>()` (`org.jetbrains.kotlin.psi.stubs.elements.KtClassElementType`)

|  Change | Delta |             % | Samples | Caller       | Location                                                     |
| ------: | ----: | ------------: | ------: | ------------ | ------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<clinit>()` | `org.jetbrains.kotlin.psi.stubs.elements.KtStubElementTypes` |

##### `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$TypeTable`)

|  Change | Delta |             % | Samples | Caller                                                        | Location                                           |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------- | -------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` | `org.jetbrains.kotlin.metadata.ProtoBuf$TypeTable` |

##### `reportErrors(LighterASTNode, FlyweightCapableTreeStructure, KotlinLightParser$LightTreeParsingErrorListener, Ref)` (`org.jetbrains.kotlin.parsing.KotlinLightParser`)

|  Change | Delta |             % | Samples | Caller                                                                                                              | Location                                         |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `reportErrors(LighterASTNode, FlyweightCapableTreeStructure, KotlinLightParser$LightTreeParsingErrorListener, Ref)` | `org.jetbrains.kotlin.parsing.KotlinLightParser` |

##### `convertFunctionDeclaration(LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder`)

|  Change | Delta |             % | Samples | Caller                                                                | Location                                                                         |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `convertFile(LighterASTNode, KtSourceFile, KtSourceFileLinesMapping)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder` |

##### `isAllUnder()` (`org.jetbrains.kotlin.fir.declarations.impl.FirResolvedImportImpl`)

|  Change | Delta |             % | Samples | Caller                                   | Location                                                               |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | ---------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(List, FirSession, ScopeSession)` | `org.jetbrains.kotlin.fir.scopes.impl.FirExplicitSimpleImportingScope` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$1`)

|  Change | Delta |             % | Samples | Caller                                       | Location                                         |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | ------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `readMessage(Parser, ExtensionRegistryLite)` | `org.jetbrains.kotlin.protobuf.CodedInputStream` |

##### `<init>(FirSession, KotlinClassFinder)` (`org.jetbrains.kotlin.fir.java.deserialization.AnnotationsLoader`)

|  Change | Delta |             % | Samples | Caller                                                                | Location                                                                        |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(FirSession, KotlinJvmBinaryClass, KotlinClassFinder, byte[])` | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer` |

##### `getCustomAnnotations(ConeAttributes)` (`org.jetbrains.kotlin.fir.types.CustomAnnotationTypeAttributeKt`)

|  Change | Delta |             % | Samples | Caller                                     | Location                                                       |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | -------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `rigidType(ProtoBuf$Type, ConeAttributes)` | `org.jetbrains.kotlin.fir.deserialization.FirTypeDeserializer` |

##### `parameter(String, JavaTypeQualifiers[])` (`org.jetbrains.kotlin.load.java.typeEnhancement.SignatureEnhancementBuilder$ClassEnhancementBuilder$FunctionEnhancementBuilder`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                     | Location                                                                     |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PREDEFINED_FUNCTION_ENHANCEMENT_INFO_BY_SIGNATURE$lambda$0$0$6$4(String, SignatureEnhancementBuilder$ClassEnhancementBuilder$FunctionEnhancementBuilder)` | `org.jetbrains.kotlin.load.java.typeEnhancement.PredefinedEnhancementInfoKt` |

##### `processLevel(TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`)

|  Change | Delta |             % | Samples | Caller                                                                                                               | Location                                                               |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `access$processLevel(FirBaseTowerResolveTask, TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask` |

##### `typeSubstitutorByTypeConstructor(Map)` (`org.jetbrains.kotlin.fir.types.ConeInferenceContext`)

|  Change | Delta |             % | Samples | Caller                                  | Location                                                                     |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `typeSubstitutorByTypeConstructor(Map)` | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl` |

##### `getSymbol()` (`org.jetbrains.kotlin.fir.declarations.impl.FirValueParameterImpl`)

|  Change | Delta |             % | Samples | Caller        | Location                                                           |
| ------: | ----: | ------------: | ------: | ------------- | ------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getSymbol()` | `org.jetbrains.kotlin.fir.declarations.impl.FirValueParameterImpl` |

##### `computeTypeArgumentTypes(Candidate)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer`)

|  Change | Delta |             % | Samples | Caller                                                          | Location                                                                                  |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `computeTypeArguments(FirQualifiedAccessExpression, Candidate)` | `org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer` |

##### `getPostponedAtoms()` (`org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate`)

|  Change | Delta |             % | Samples | Caller                                                           | Location                                                                         |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `check(CheckerSink, ResolutionContext, Candidate, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.EagerResolveOfCallableReferences` |

##### `wrapProjection(ConeTypeProjection, ConeKotlinType)` (`org.jetbrains.kotlin.fir.resolve.substitution.SubstitutionUtilitiesKt`)

|  Change | Delta |             % | Samples | Caller                                        | Location                                                                |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | ----------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `substituteArgument(ConeTypeProjection, int)` | `org.jetbrains.kotlin.fir.resolve.substitution.AbstractConeSubstitutor` |

##### `substituteArguments(ConeSimpleKotlinType)` (`org.jetbrains.kotlin.fir.resolve.substitution.AbstractConeSubstitutor`)

|  Change | Delta |             % | Samples | Caller                                | Location                                                                |
| ------: | ----: | ------------: | ------: | ------------------------------------- | ----------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `substituteRecursive(ConeKotlinType)` | `org.jetbrains.kotlin.fir.resolve.substitution.AbstractConeSubstitutor` |

##### `isSubtypeOfForSingleClassifierType(TypeCheckerState, TypeSystemContext, RigidTypeMarker, RigidTypeMarker)` (`org.jetbrains.kotlin.types.AbstractTypeChecker`)

|  Change | Delta |             % | Samples | Caller                                                                                                  | Location                                         |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `completeIsSubTypeOf(TypeCheckerState, TypeSystemContext, KotlinTypeMarker, KotlinTypeMarker, boolean)` | `org.jetbrains.kotlin.types.AbstractTypeChecker` |

##### `getValue(FirDeclaration, KProperty)` (`org.jetbrains.kotlin.fir.declarations.FirDeclarationDataRegistry$DeclarationDataAccessor`)

|  Change | Delta |             % | Samples | Caller                                         | Location                                                              |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- | --------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getValueClassRepresentation(FirRegularClass)` | `org.jetbrains.kotlin.fir.declarations.FirValueClassRepresentationKt` |

##### `filterOutEquivalentSupertypesWithSameConstructor(TypeCheckerState, TypeSystemContext, List)` (`org.jetbrains.kotlin.types.AbstractTypeChecker`)

|  Change | Delta |             % | Samples | Caller                                                                                                      | Location                                         |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `isSubtypeOfForSingleClassifierType(TypeCheckerState, TypeSystemContext, RigidTypeMarker, RigidTypeMarker)` | `org.jetbrains.kotlin.types.AbstractTypeChecker` |

##### `getTypeRef()` (`org.jetbrains.kotlin.fir.declarations.impl.FirReceiverParameterImpl`)

|  Change | Delta |             % | Samples | Caller                                                                       | Location                                                            |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `consumeCallableCandidate(FirCallableSymbol, CallInfo, TowerLevelProcessor)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel` |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |            % | Samples | Function                                                                                                                                                        | Location        |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
|     new |   +10 |  0.0% → 0.4% |  0 → 10 | `G1EvacuateRegionsTask::scan_roots`                                                                                                                             | `libjvm.dylib`  |
|     new |    +9 |  0.0% → 0.3% |   0 → 9 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                                                                 | `libjvm.dylib`  |
|     new |    +9 |  0.0% → 0.3% |   0 → 9 | `G1ScanHRForRegionClosure::scan_heap_roots`                                                                                                                     | `libjvm.dylib`  |
|     new |    +9 |  0.0% → 0.3% |   0 → 9 | `G1ScanHRForRegionClosure::do_heap_region`                                                                                                                      | `libjvm.dylib`  |
|     new |    +9 |  0.0% → 0.3% |   0 → 9 | `G1RemSet::scan_heap_roots`                                                                                                                                     | `libjvm.dylib`  |
| +133.3% |    +8 |  0.1% → 0.5% |  6 → 14 | `G1EvacuateRegionsBaseTask::work`                                                                                                                               | `libjvm.dylib`  |
|     new |    +8 |  0.0% → 0.3% |   0 → 8 | `G1ScanHRForRegionClosure::scan_memregion`                                                                                                                      | `libjvm.dylib`  |
|     new |    +8 |  0.0% → 0.3% |   0 → 8 | `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` | `libjvm.dylib`  |
| +100.0% |    +5 |  0.1% → 0.4% |  5 → 10 | `ClassVerifier::verify_method`                                                                                                                                  | `libjvm.dylib`  |
| +100.0% |    +5 |  0.1% → 0.4% |  5 → 10 | `ClassVerifier::verify_class`                                                                                                                                   | `libjvm.dylib`  |
| +400.0% |    +4 | <0.1% → 0.2% |   1 → 5 | `nmethod::new_nmethod`                                                                                                                                          | `libjvm.dylib`  |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                               | `libjvm.dylib`  |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `fwd_copy_again`                                                                                                                                                | `libjvm.dylib`  |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `StackMapFrame::set_locals_from_arg`                                                                                                                            | `libjvm.dylib`  |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep`                                                                                                                   | `libjvm.dylib`  |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `CompileBroker::create_compile_task`                                                                                                                            | `libjvm.dylib`  |
|  +60.0% |    +3 |  0.1% → 0.3% |   5 → 8 | `tlv_get_addr`                                                                                                                                                  | `libdyld.dylib` |
|  +75.0% |    +3 |  0.1% → 0.3% |   4 → 7 | `ciEnv::register_method`                                                                                                                                        | `libjvm.dylib`  |
|  +42.9% |    +3 |  0.1% → 0.4% |  7 → 10 | `Verifier::verify`                                                                                                                                              | `libjvm.dylib`  |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `G1ParScanThreadState::steal_and_trim_queue`                                                                                                                    | `libjvm.dylib`  |

##### Native

|  Change | Delta |            % | Samples | Function                                                                                                                                                        | Location                   |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
|     new |   +10 |  0.0% → 0.4% |  0 → 10 | `G1EvacuateRegionsTask::scan_roots`                                                                                                                             | `libjvm.dylib`             |
|     new |    +9 |  0.0% → 0.3% |   0 → 9 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                                                                 | `libjvm.dylib`             |
|     new |    +9 |  0.0% → 0.3% |   0 → 9 | `G1ScanHRForRegionClosure::scan_heap_roots`                                                                                                                     | `libjvm.dylib`             |
|     new |    +9 |  0.0% → 0.3% |   0 → 9 | `G1ScanHRForRegionClosure::do_heap_region`                                                                                                                      | `libjvm.dylib`             |
|     new |    +9 |  0.0% → 0.3% |   0 → 9 | `G1RemSet::scan_heap_roots`                                                                                                                                     | `libjvm.dylib`             |
| +133.3% |    +8 |  0.1% → 0.5% |  6 → 14 | `G1EvacuateRegionsBaseTask::work`                                                                                                                               | `libjvm.dylib`             |
|     new |    +8 |  0.0% → 0.3% |   0 → 8 | `G1ScanHRForRegionClosure::scan_memregion`                                                                                                                      | `libjvm.dylib`             |
|     new |    +8 |  0.0% → 0.3% |   0 → 8 | `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` | `libjvm.dylib`             |
| +100.0% |    +5 |  0.1% → 0.4% |  5 → 10 | `ClassVerifier::verify_method`                                                                                                                                  | `libjvm.dylib`             |
| +100.0% |    +5 |  0.1% → 0.4% |  5 → 10 | `ClassVerifier::verify_class`                                                                                                                                   | `libjvm.dylib`             |
| +400.0% |    +4 | <0.1% → 0.2% |   1 → 5 | `nmethod::new_nmethod`                                                                                                                                          | `libjvm.dylib`             |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                               | `libjvm.dylib`             |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `fwd_copy_again`                                                                                                                                                | `libjvm.dylib`             |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `StackMapFrame::set_locals_from_arg`                                                                                                                            | `libjvm.dylib`             |
|  +60.0% |    +3 |  0.1% → 0.3% |   5 → 8 | `tlv_get_addr`                                                                                                                                                  | `libdyld.dylib`            |
|  +42.9% |    +3 |  0.1% → 0.4% |  7 → 10 | `Verifier::verify`                                                                                                                                              | `libjvm.dylib`             |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `G1ParScanThreadState::steal_and_trim_queue`                                                                                                                    | `libjvm.dylib`             |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `CodeCacheUnloadingTask::work`                                                                                                                                  | `libjvm.dylib`             |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `G1ParallelCleaningTask::work`                                                                                                                                  | `libjvm.dylib`             |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `_platform_memchr`                                                                                                                                              | `libsystem_platform.dylib` |

##### Compiler

|  Change | Delta |            % | Samples | Function                                                | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------- | -------------- |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep`           | `libjvm.dylib` |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `CompileBroker::create_compile_task`                    | `libjvm.dylib` |
|  +75.0% |    +3 |  0.1% → 0.3% |   4 → 7 | `ciEnv::register_method`                                | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `Type::cmp`                                             | `libjvm.dylib` |
|  +66.7% |    +2 |  0.1% → 0.2% |   3 → 5 | `IndexSetIterator::advance_and_next`                    | `libjvm.dylib` |
|  +28.6% |    +2 |  0.1% → 0.3% |   7 → 9 | `PhaseIdealLoop::build_loop_late`                       | `libjvm.dylib` |
|  +40.0% |    +2 |  0.1% → 0.3% |   5 → 7 | `PhaseIdealLoop::build_loop_late_post_work`             | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `CodeSection::relocate`                                 | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `MacroAssembler::trampoline_call`                       | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `CompilationPolicy::call_event`                         | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `PhaseIdealLoop::ctrl_of_use_out_of_loop`               | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `PhaseIdealLoop::ctrl_of_all_uses_out_of_loop`          | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `PhaseIdealLoop::try_sink_out_of_loop`                  | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `PhaseIterGVN::add_users_to_worklist`                   | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `GraphKit::uncommon_trap`                               | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `ciMethod::get_method_at_bci`                           | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `TypeInterfaces::eq`                                    | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `TypeInstPtr::eq`                                       | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `PhaseBlockLayout::PhaseBlockLayout`                    | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `PhaseIdealLoop::collect_potentially_useful_predicates` | `libjvm.dylib` |

##### Ours

|  Change | Delta |            % | Samples | Function                                                                             | Location                                                                                        |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `<clinit>()`                                                                         | `org.jetbrains.kotlin.cli.common.messages.PlainTextMessageRenderer`                             |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `<clinit>()`                                                                         | `org.jetbrains.kotlin.cli.common.messages.MessageRenderer`                                      |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `defaultMessageRenderer()`                                                           | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                                         |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `invoke(Object)`                                                                     | `org.jetbrains.kotlin.fir.java.scopes.JavaClassMembersEnhancementScope$$Lambda`                 |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `visitTypeRef(FirTypeRef, Void)`                                                     | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`               |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `visitTypeRef(FirTypeRef, Object)`                                                   | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`               |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `visitUnresolvedTypeRef(FirUnresolvedTypeRef, Object)`                               | `org.jetbrains.kotlin.fir.visitors.FirDefaultVisitor`                                           |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `transformExplicitReceiverOf(FirQualifiedAccessExpression)`                          | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`   |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `acceptChildren(FirVisitor, Object)`                                                 | `org.jetbrains.kotlin.fir.declarations.impl.FirReceiverParameterImpl`                           |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `visitReceiverParameter(FirReceiverParameter, Void)`                                 | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`               |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `visitReceiverParameter(FirReceiverParameter, Object)`                               | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`               |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `accept(FirVisitor, Object)`                                                         | `org.jetbrains.kotlin.fir.declarations.FirReceiverParameter`                                    |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `visitRegularClass(FirRegularClass, CheckerContext)`                                 | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.DeclarationCheckersDiagnosticComponent` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `visitRegularClass(FirRegularClass, Object)`                                         | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.DeclarationCheckersDiagnosticComponent` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `generateLambdaBody(ExpressionLambda, ReifiedTypeParametersUsages)`                  | `org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`                            |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `generateLambdaBody(SourceCompilerForInline)`                                        | `org.jetbrains.kotlin.codegen.inline.ExpressionLambda`                                          |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`                                      |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `loadNativeLibrary(File)`                                                            | `org.fusesource.jansi.internal.JansiLoader`                                                     |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `extractAndLoadLibraryFile(String, String, String)`                                  | `org.fusesource.jansi.internal.JansiLoader`                                                     |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `loadJansiNativeLibrary()`                                                           | `org.fusesource.jansi.internal.JansiLoader`                                                     |

#### Improvements

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

| Change |  Delta |             % |       Samples | Function                                   | Location                  |
| -----: | -----: | ------------: | ------------: | ------------------------------------------ | ------------------------- |
| -46.4% | -1,952 | 82.9% → 82.8% | 4,207 → 2,255 | `_pthread_start`                           | `libsystem_pthread.dylib` |
| -46.4% | -1,952 | 82.9% → 82.8% | 4,207 → 2,255 | `thread_start`                             | `libsystem_pthread.dylib` |
| -46.4% | -1,872 | 79.5% → 79.4% | 4,032 → 2,160 | `Thread::call_run`                         | `libjvm.dylib`            |
| -46.4% | -1,872 | 79.5% → 79.4% | 4,032 → 2,160 | `thread_native_entry`                      | `libjvm.dylib`            |
| -44.9% | -1,063 | 46.6% → 47.8% | 2,365 → 1,302 | `__psynch_cvwait`                          | `libsystem_kernel.dylib`  |
| -47.0% |   -865 | 36.3% → 35.8% |   1,839 → 974 | `semaphore_wait_trap`                      | `libsystem_kernel.dylib`  |
| -44.8% |   -829 | 36.5% → 37.6% | 1,852 → 1,023 | `PlatformMonitor::wait`                    | `libjvm.dylib`            |
| -46.5% |   -774 | 32.8% → 32.7% |   1,665 → 891 | `WorkerThread::run`                        | `libjvm.dylib`            |
| -46.6% |   -698 | 29.5% → 29.4% |   1,497 → 799 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
| -46.0% |   -636 | 27.3% → 27.5% |   1,384 → 748 | `Monitor::wait_without_safepoint_check`    | `libjvm.dylib`            |
| -47.4% |   -298 | 12.4% → 12.2% |     629 → 331 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
| -46.0% |   -240 | 10.3% → 10.4% |     522 → 282 | `ConcurrentGCThread::run`                  | `libjvm.dylib`            |
| -41.4% |   -194 |  9.2% → 10.1% |     469 → 275 | `Monitor::wait`                            | `libjvm.dylib`            |
| -54.2% |   -181 |   6.6% → 5.6% |     334 → 153 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
| -46.0% |   -160 |          6.9% |     348 → 188 | `JLI_Launch`                               | `libjli.dylib`            |
| -46.0% |   -160 |          6.9% |     348 → 188 | `main`                                     | `java`                    |
| -58.8% |   -144 |   4.8% → 3.7% |     245 → 101 | `Compile::Compile`                         | `libjvm.dylib`            |
| -58.5% |   -144 |   4.8% → 3.7% |     246 → 102 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
| -39.0% |   -114 |   5.8% → 6.5% |     292 → 178 | `CompileQueue::get`                        | `libjvm.dylib`            |
| -67.2% |    -88 |   2.6% → 1.6% |      131 → 43 | `Compile::Code_Gen`                        | `libjvm.dylib`            |

##### Native

| Change |  Delta |             % |       Samples | Function                                | Location                  |
| -----: | -----: | ------------: | ------------: | --------------------------------------- | ------------------------- |
| -46.4% | -1,952 | 82.9% → 82.8% | 4,207 → 2,255 | `_pthread_start`                        | `libsystem_pthread.dylib` |
| -46.4% | -1,952 | 82.9% → 82.8% | 4,207 → 2,255 | `thread_start`                          | `libsystem_pthread.dylib` |
| -46.4% | -1,872 | 79.5% → 79.4% | 4,032 → 2,160 | `Thread::call_run`                      | `libjvm.dylib`            |
| -46.4% | -1,872 | 79.5% → 79.4% | 4,032 → 2,160 | `thread_native_entry`                   | `libjvm.dylib`            |
| -44.9% | -1,063 | 46.6% → 47.8% | 2,365 → 1,302 | `__psynch_cvwait`                       | `libsystem_kernel.dylib`  |
| -47.0% |   -865 | 36.3% → 35.8% |   1,839 → 974 | `semaphore_wait_trap`                   | `libsystem_kernel.dylib`  |
| -44.8% |   -829 | 36.5% → 37.6% | 1,852 → 1,023 | `PlatformMonitor::wait`                 | `libjvm.dylib`            |
| -46.5% |   -774 | 32.8% → 32.7% |   1,665 → 891 | `WorkerThread::run`                     | `libjvm.dylib`            |
| -46.6% |   -698 | 29.5% → 29.4% |   1,497 → 799 | `JavaThread::thread_main_inner`         | `libjvm.dylib`            |
| -46.0% |   -636 | 27.3% → 27.5% |   1,384 → 748 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib`            |
| -46.0% |   -240 | 10.3% → 10.4% |     522 → 282 | `ConcurrentGCThread::run`               | `libjvm.dylib`            |
| -41.4% |   -194 |  9.2% → 10.1% |     469 → 275 | `Monitor::wait`                         | `libjvm.dylib`            |
| -46.0% |   -160 |          6.9% |     348 → 188 | `JLI_Launch`                            | `libjli.dylib`            |
| -46.0% |   -160 |          6.9% |     348 → 188 | `main`                                  | `java`                    |
| -46.2% |    -80 |          3.4% |      173 → 93 | `Parker::park`                          | `libjvm.dylib`            |
| -46.2% |    -80 |          3.4% |      173 → 93 | `Unsafe_Park`                           | `libjvm.dylib`            |
| -46.0% |    -80 |   3.4% → 3.5% |      174 → 94 | `mach_msg2_trap`                        | `libsystem_kernel.dylib`  |
| -46.0% |    -80 |   3.4% → 3.5% |      174 → 94 | `mach_msg_overwrite`                    | `libsystem_kernel.dylib`  |
| -46.0% |    -80 |   3.4% → 3.5% |      174 → 94 | `mach_msg`                              | `libsystem_kernel.dylib`  |
| -46.0% |    -80 |   3.4% → 3.5% |      174 → 94 | `__CFRunLoopServiceMachPort`            | `CoreFoundation`          |

##### Compiler

| Change | Delta |             % |   Samples | Function                                      | Location       |
| -----: | ----: | ------------: | --------: | --------------------------------------------- | -------------- |
| -47.4% |  -298 | 12.4% → 12.2% | 629 → 331 | `CompileBroker::compiler_thread_loop`         | `libjvm.dylib` |
| -54.2% |  -181 |   6.6% → 5.6% | 334 → 153 | `CompileBroker::invoke_compiler_on_method`    | `libjvm.dylib` |
| -58.8% |  -144 |   4.8% → 3.7% | 245 → 101 | `Compile::Compile`                            | `libjvm.dylib` |
| -58.5% |  -144 |   4.8% → 3.7% | 246 → 102 | `C2Compiler::compile_method`                  | `libjvm.dylib` |
| -39.0% |  -114 |   5.8% → 6.5% | 292 → 178 | `CompileQueue::get`                           | `libjvm.dylib` |
| -67.2% |   -88 |   2.6% → 1.6% |  131 → 43 | `Compile::Code_Gen`                           | `libjvm.dylib` |
| -58.1% |   -36 |   1.2% → 1.0% |   62 → 26 | `PhaseChaitin::Register_Allocate`             | `libjvm.dylib` |
| -42.1% |   -32 |   1.5% → 1.6% |   76 → 44 | `Compilation::compile_java_method`            | `libjvm.dylib` |
| -37.5% |   -30 |   1.6% → 1.8% |   80 → 50 | `Compilation::compile_method`                 | `libjvm.dylib` |
| -37.5% |   -30 |   1.6% → 1.8% |   80 → 50 | `Compilation::Compilation`                    | `libjvm.dylib` |
| -80.0% |   -24 |   0.6% → 0.2% |    30 → 6 | `Matcher::match`                              | `libjvm.dylib` |
| -91.3% |   -21 |   0.5% → 0.1% |    23 → 2 | `Matcher::xform`                              | `libjvm.dylib` |
| -32.2% |   -19 |   1.2% → 1.5% |   59 → 40 | `Compile::Optimize`                           | `libjvm.dylib` |
| -95.0% |   -19 |  0.4% → <0.1% |    20 → 1 | `ciTypeFlow::flow_types`                      | `libjvm.dylib` |
| -95.0% |   -19 |  0.4% → <0.1% |    20 → 1 | `ciTypeFlow::do_flow`                         | `libjvm.dylib` |
| -95.0% |   -19 |  0.4% → <0.1% |    20 → 1 | `ciMethod::get_flow_analysis`                 | `libjvm.dylib` |
| -94.7% |   -18 |  0.4% → <0.1% |    19 → 1 | `ciTypeFlow::StateVector::apply_one_bytecode` | `libjvm.dylib` |
| -94.7% |   -18 |  0.4% → <0.1% |    19 → 1 | `ciTypeFlow::df_flow_types`                   | `libjvm.dylib` |
| -81.0% |   -17 |   0.4% → 0.1% |    21 → 4 | `ciBytecodeStream::get_method`                | `libjvm.dylib` |
| -94.4% |   -17 |  0.4% → <0.1% |    18 → 1 | `ciTypeFlow::flow_block`                      | `libjvm.dylib` |

##### Ours

| Change | Delta |           % |  Samples | Function                                                                                                                                      | Location                                                |
| -----: | ----: | ----------: | -------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| -45.8% |   -76 |        3.3% | 166 → 90 | `run(String[])`                                                                                                                               | `org.jetbrains.kotlin.preloading.Preloader`             |
| -45.8% |   -76 |        3.3% | 166 → 90 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`             |
| -47.4% |   -65 | 2.7% → 2.6% | 137 → 72 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| -47.4% |   -65 | 2.7% → 2.6% | 137 → 72 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| -47.4% |   -65 | 2.7% → 2.6% | 137 → 72 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| -46.0% |   -64 | 2.7% → 2.8% | 139 → 75 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| -46.0% |   -64 | 2.7% → 2.8% | 139 → 75 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| -46.0% |   -64 | 2.7% → 2.8% | 139 → 75 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| -47.4% |   -64 | 2.7% → 2.6% | 135 → 71 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| -45.7% |   -63 | 2.7% → 2.8% | 138 → 75 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| -47.7% |   -63 | 2.6% → 2.5% | 132 → 69 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| -47.7% |   -63 | 2.6% → 2.5% | 132 → 69 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| -47.7% |   -63 | 2.6% → 2.5% | 132 → 69 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| -47.7% |   -63 | 2.6% → 2.5% | 132 → 69 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| -47.7% |   -63 | 2.6% → 2.5% | 132 → 69 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| -47.7% |   -63 | 2.6% → 2.5% | 132 → 69 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| -47.7% |   -63 | 2.6% → 2.5% | 132 → 69 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| -48.1% |   -63 | 2.6% → 2.5% | 131 → 68 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
| -48.1% |   -63 | 2.6% → 2.5% | 131 → 68 | `phaseBody(LoggingContext, Object)`                                                                                                           | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
| -48.1% |   -63 | 2.6% → 2.5% | 131 → 68 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

#### Callers

Callers with the largest change in contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `G1EvacuateRegionsTask::scan_roots` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                            | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------- | -------------- |
|    new |   +10 | 0.0% → 100.0% |  0 → 10 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                                       | Location       |
| -----: | ----: | -----------: | ------: | -------------------------------------------- | -------------- |
|    new |    +6 | 0.0% → 66.7% |   0 → 6 | `G1ScanHRForRegionClosure::scan_memregion`   | `libjvm.dylib` |
|    new |    +3 | 0.0% → 33.3% |   0 → 3 | `G1ParScanThreadState::steal_and_trim_queue` | `libjvm.dylib` |

##### `G1ScanHRForRegionClosure::scan_heap_roots` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                     | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
|    new |    +9 | 0.0% → 100.0% |   0 → 9 | `G1ScanHRForRegionClosure::do_heap_region` | `libjvm.dylib` |

##### `G1ScanHRForRegionClosure::do_heap_region` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                      | Location       |
| -----: | ----: | ------------: | ------: | --------------------------- | -------------- |
|    new |    +9 | 0.0% → 100.0% |   0 → 9 | `G1RemSet::scan_heap_roots` | `libjvm.dylib` |

##### `G1RemSet::scan_heap_roots` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                              | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------------- | -------------- |
|    new |    +9 | 0.0% → 100.0% |   0 → 9 | `G1EvacuateRegionsTask::scan_roots` | `libjvm.dylib` |

##### `G1EvacuateRegionsBaseTask::work` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller              | Location       |
| ------: | ----: | -----: | ------: | ------------------- | -------------- |
| +133.3% |    +8 | 100.0% |  6 → 14 | `WorkerThread::run` | `libjvm.dylib` |

##### `G1ScanHRForRegionClosure::scan_memregion` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                                                                                                                                          | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
|    new |    +8 | 0.0% → 100.0% |   0 → 8 | `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` | `libjvm.dylib` |

##### `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                      | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------- | -------------- |
|    new |    +8 | 0.0% → 100.0% |   0 → 8 | `G1ScanHRForRegionClosure::scan_heap_roots` | `libjvm.dylib` |

##### `ClassVerifier::verify_method` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                        | Location       |
| ------: | ----: | -----: | ------: | ----------------------------- | -------------- |
| +100.0% |    +5 | 100.0% |  5 → 10 | `ClassVerifier::verify_class` | `libjvm.dylib` |

##### `ClassVerifier::verify_class` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller             | Location       |
| ------: | ----: | -----: | ------: | ------------------ | -------------- |
| +100.0% |    +5 | 100.0% |  5 → 10 | `Verifier::verify` | `libjvm.dylib` |

##### `nmethod::new_nmethod` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                   | Location       |
| ------: | ----: | -----: | ------: | ------------------------ | -------------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `ciEnv::register_method` | `libjvm.dylib` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                                          | Location       |
| -----: | ----: | -----------: | ------: | ----------------------------------------------- | -------------- |
|    new |    +3 | 0.0% → 75.0% |   0 → 3 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `G1ScanHRForRegionClosure::scan_memregion`      | `libjvm.dylib` |

##### `fwd_copy_again` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                          | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | -------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |

##### `StackMapFrame::set_locals_from_arg` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                         | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------ | -------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `ClassVerifier::verify_method` | `libjvm.dylib` |

##### `PhaseIdealLoop::get_late_ctrl_with_anti_dep` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                                      | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `PhaseIdealLoop::ctrl_of_use_out_of_loop`   | `libjvm.dylib` |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |

##### `CompileBroker::create_compile_task` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                               | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `CompileBroker::compile_method_base` | `libjvm.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|  Change | Delta |            % | Samples | Caller                                                                   | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------ | -------------- |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `PhaseLive::compute`                                                     | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `GraphKit::cast_not_null`                                                | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `GrowableArrayWithAllocator<LIR_Op*, GrowableArray<LIR_Op*>>::expand_to` | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `TypeOopPtr::make_from_klass_common`                                     | `libjvm.dylib` |
|     new |    +1 | 0.0% → 12.5% |   0 → 1 | `StackMapReader::next`                                                   | `libjvm.dylib` |

##### `ciEnv::register_method` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                        | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------- | -------------- |
| +200.0% |    +4 | 50.0% → 85.7% |   2 → 6 | `Compilation::compile_method` | `libjvm.dylib` |
|  -50.0% |    -1 | 50.0% → 14.3% |   2 → 1 | `PhaseOutput::install_code`   | `libjvm.dylib` |

##### `Verifier::verify` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                           | Location       |
| -----: | ----: | -----: | ------: | -------------------------------- | -------------- |
| +42.9% |    +3 | 100.0% |  7 → 10 | `InstanceKlass::link_class_impl` | `libjvm.dylib` |

##### `G1ParScanThreadState::steal_and_trim_queue` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                   | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `G1ParEvacuateFollowersClosure::do_void` | `libjvm.dylib` |

##### `CodeCacheUnloadingTask::work` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                         | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------ | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `G1ParallelCleaningTask::work` | `libjvm.dylib` |

##### `G1ParallelCleaningTask::work` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller              | Location       |
| -----: | ----: | ------------: | ------: | ------------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `WorkerThread::run` | `libjvm.dylib` |

##### `_platform_memchr` (`libsystem_platform.dylib`)

| Change | Delta |             % | Samples | Caller                             | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `SignatureStream::SignatureStream` | `libjvm.dylib` |

##### `Type::cmp` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller         | Location       |
| ------: | ----: | -----: | ------: | -------------- | -------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `Dict::Insert` | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                             | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------- | -------------- |
|     new |    +2 | 0.0% → 40.0% |   0 → 2 | `PhaseChaitin::Simplify`           | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `PhaseIFG::remove_node`            | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `PhaseIFG::SquareUp`               | `libjvm.dylib` |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `PhaseIFG::effective_degree`       | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                               | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| +28.6% |    +2 | 100.0% |   7 → 9 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +40.0% |    +2 | 100.0% |   5 → 7 | `PhaseIdealLoop::build_loop_late` | `libjvm.dylib` |

##### `CodeSection::relocate` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                            | Location       |
| -----: | ----: | -----------: | ------: | --------------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `MacroAssembler::trampoline_call` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `Address::lea`                    | `libjvm.dylib` |

##### `MacroAssembler::trampoline_call` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                           | Location       |
| -----: | ----: | -----------: | ------: | -------------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `LIR_Assembler::call`            | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `CallStaticJavaDirectNode::emit` | `libjvm.dylib` |

##### `CompilationPolicy::call_event` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                     | Location       |
| -----: | ----: | ------------: | ------: | -------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `CompilationPolicy::event` | `libjvm.dylib` |

##### `PhaseIdealLoop::ctrl_of_use_out_of_loop` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                         | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseIdealLoop::ctrl_of_all_uses_out_of_loop` | `libjvm.dylib` |

##### `PhaseIdealLoop::ctrl_of_all_uses_out_of_loop` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                 | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseIdealLoop::try_sink_out_of_loop` | `libjvm.dylib` |

##### `PhaseIdealLoop::try_sink_out_of_loop` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                      | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseIdealLoop::split_if_with_blocks_post` | `libjvm.dylib` |

##### `PhaseIterGVN::add_users_to_worklist` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                       | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseIterGVN::PhaseIterGVN` | `libjvm.dylib` |

##### `GraphKit::uncommon_trap` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                                   | Location       |
| -----: | ----: | -----------: | ------: | ---------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `GraphKit::maybe_cast_profiled_receiver` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `Parse::adjust_map_after_if`             | `libjvm.dylib` |

##### `ciMethod::get_method_at_bci` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                    | Location       |
| -----: | ----: | -----------: | ------: | ------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `Compile::call_generator` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `Invoke::declared_type`   | `libjvm.dylib` |

##### `TypeInterfaces::eq` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller            | Location       |
| -----: | ----: | ------------: | ------: | ----------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `TypeInstPtr::eq` | `libjvm.dylib` |

##### `TypeInstPtr::eq` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller      | Location       |
| -----: | ----: | ------------: | ------: | ----------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `Type::cmp` | `libjvm.dylib` |

##### `PhaseBlockLayout::PhaseBlockLayout` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller              | Location       |
| -----: | ----: | ------------: | ------: | ------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `PhaseIdealLoop::collect_potentially_useful_predicates` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                                                  | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseIdealLoop::build_and_optimize`                    | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseIdealLoop::collect_potentially_useful_predicates` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseIdealLoop::eliminate_useless_predicates`          | `libjvm.dylib` |

##### `<clinit>()` (`org.jetbrains.kotlin.cli.common.messages.PlainTextMessageRenderer`)

|  Change | Delta |      % | Samples | Caller       | Location                                                   |
| ------: | ----: | -----: | ------: | ------------ | ---------------------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `<clinit>()` | `org.jetbrains.kotlin.cli.common.messages.MessageRenderer` |

##### `<clinit>()` (`org.jetbrains.kotlin.cli.common.messages.MessageRenderer`)

|  Change | Delta |      % | Samples | Caller                     | Location                                                |
| ------: | ----: | -----: | ------: | -------------------------- | ------------------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `defaultMessageRenderer()` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `defaultMessageRenderer()` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|  Change | Delta |      % | Samples | Caller                                                                                             | Location                                                |
| ------: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `invoke(Object)` (`org.jetbrains.kotlin.fir.java.scopes.JavaClassMembersEnhancementScope$$Lambda`)

|  Change | Delta |              % | Samples | Caller                                    | Location                                                               |
| ------: | ----: | -------------: | ------: | ----------------------------------------- | ---------------------------------------------------------------------- |
| +100.0% |    +1 | 100.0% → 66.7% |   1 → 2 | `processFunctionsByName(Name, Function1)` | `org.jetbrains.kotlin.fir.scopes.impl.AbstractFirUseSiteMemberScope`   |
|     new |    +1 |   0.0% → 33.3% |   0 → 1 | `processDeclaredConstructors(Function1)`  | `org.jetbrains.kotlin.fir.scopes.impl.FirClassDeclaredMemberScopeImpl` |

##### `visitTypeRef(FirTypeRef, Void)` (`org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`)

|  Change | Delta |      % | Samples | Caller                             | Location                                                                          |
| ------: | ----: | -----: | ------: | ---------------------------------- | --------------------------------------------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `visitTypeRef(FirTypeRef, Object)` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |

##### `visitTypeRef(FirTypeRef, Object)` (`org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`)

|  Change | Delta |      % | Samples | Caller                                                 | Location                                              |
| ------: | ----: | -----: | ------: | ------------------------------------------------------ | ----------------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `visitUnresolvedTypeRef(FirUnresolvedTypeRef, Object)` | `org.jetbrains.kotlin.fir.visitors.FirDefaultVisitor` |

##### `visitUnresolvedTypeRef(FirUnresolvedTypeRef, Object)` (`org.jetbrains.kotlin.fir.visitors.FirDefaultVisitor`)

|  Change | Delta |              % | Samples | Caller                                             | Location                                              |
| ------: | ----: | -------------: | ------: | -------------------------------------------------- | ----------------------------------------------------- |
| +100.0% |    +1 | 100.0% → 66.7% |   1 → 2 | `visitUserTypeRef(FirUserTypeRef, Object)`         | `org.jetbrains.kotlin.fir.visitors.FirDefaultVisitor` |
|     new |    +1 |   0.0% → 33.3% |   0 → 1 | `visitFunctionTypeRef(FirFunctionTypeRef, Object)` | `org.jetbrains.kotlin.fir.visitors.FirDefaultVisitor` |

##### `transformExplicitReceiverOf(FirQualifiedAccessExpression)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`)

| Change | Delta |             % | Samples | Caller                                                                                                                               | Location                                                 |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `resolveVariableAccessAndSelectCandidateImpl(FirQualifiedAccessExpression, boolean, ResolutionMode, boolean, FirElement, Function1)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver` |

##### `acceptChildren(FirVisitor, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirReceiverParameterImpl`)

| Change | Delta |             % | Samples | Caller                            | Location                                                                          |
| -----: | ----: | ------------: | ------: | --------------------------------- | --------------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `visitNestedElements(FirElement)` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |

##### `visitReceiverParameter(FirReceiverParameter, Void)` (`org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`)

| Change | Delta |             % | Samples | Caller                                                 | Location                                                                          |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------ | --------------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `visitReceiverParameter(FirReceiverParameter, Object)` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |

##### `visitReceiverParameter(FirReceiverParameter, Object)` (`org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`)

| Change | Delta |             % | Samples | Caller                       | Location                                                     |
| -----: | ----: | ------------: | ------: | ---------------------------- | ------------------------------------------------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `accept(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.declarations.FirReceiverParameter` |

##### `accept(FirVisitor, Object)` (`org.jetbrains.kotlin.fir.declarations.FirReceiverParameter`)

| Change | Delta |             % | Samples | Caller                               | Location                                                          |
| -----: | ----: | ------------: | ------: | ------------------------------------ | ----------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `acceptChildren(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl` |

##### `visitRegularClass(FirRegularClass, CheckerContext)` (`org.jetbrains.kotlin.fir.analysis.checkers.declaration.DeclarationCheckersDiagnosticComponent`)

| Change | Delta |             % | Samples | Caller                                       | Location                                                                                        |
| -----: | ----: | ------------: | ------: | -------------------------------------------- | ----------------------------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `visitRegularClass(FirRegularClass, Object)` | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.DeclarationCheckersDiagnosticComponent` |

##### `visitRegularClass(FirRegularClass, Object)` (`org.jetbrains.kotlin.fir.analysis.checkers.declaration.DeclarationCheckersDiagnosticComponent`)

| Change | Delta |             % | Samples | Caller                       | Location                                                |
| -----: | ----: | ------------: | ------: | ---------------------------- | ------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `accept(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.declarations.FirRegularClass` |

##### `generateLambdaBody(ExpressionLambda, ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`)

| Change | Delta |             % | Samples | Caller                                        | Location                                               |
| -----: | ----: | ------------: | ------: | --------------------------------------------- | ------------------------------------------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `generateLambdaBody(SourceCompilerForInline)` | `org.jetbrains.kotlin.codegen.inline.ExpressionLambda` |

##### `generateLambdaBody(SourceCompilerForInline)` (`org.jetbrains.kotlin.codegen.inline.ExpressionLambda`)

| Change | Delta |             % | Samples | Caller                                                                               | Location                                                   |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen` |

##### `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`)

| Change | Delta |             % | Samples | Caller                                                                                                           | Location                                                     |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `visitCall$handleParameter(IrCallGenerator, ExpressionCodegen, BlockInfo, IrValueParameter, IrExpression, Type)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `loadNativeLibrary(File)` (`org.fusesource.jansi.internal.JansiLoader`)

|  Change | Delta |      % | Samples | Caller                                              | Location                                    |
| ------: | ----: | -----: | ------: | --------------------------------------------------- | ------------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `extractAndLoadLibraryFile(String, String, String)` | `org.fusesource.jansi.internal.JansiLoader` |

##### `extractAndLoadLibraryFile(String, String, String)` (`org.fusesource.jansi.internal.JansiLoader`)

|  Change | Delta |      % | Samples | Caller                     | Location                                    |
| ------: | ----: | -----: | ------: | -------------------------- | ------------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `loadJansiNativeLibrary()` | `org.fusesource.jansi.internal.JansiLoader` |

##### `loadJansiNativeLibrary()` (`org.fusesource.jansi.internal.JansiLoader`)

|  Change | Delta |      % | Samples | Caller         | Location                                    |
| ------: | ----: | -----: | ------: | -------------- | ------------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `initialize()` | `org.fusesource.jansi.internal.JansiLoader` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

| Change |  Delta |      % |       Samples | Caller         | Location                  |
| -----: | -----: | -----: | ------------: | -------------- | ------------------------- |
| -46.4% | -1,952 | 100.0% | 4,207 → 2,255 | `thread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

| Change |  Delta |      % |       Samples | Caller                | Location       |
| -----: | -----: | -----: | ------------: | --------------------- | -------------- |
| -46.4% | -1,872 | 100.0% | 4,032 → 2,160 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

| Change |  Delta |      % |       Samples | Caller           | Location                  |
| -----: | -----: | -----: | ------------: | ---------------- | ------------------------- |
| -46.4% | -1,872 | 100.0% | 4,032 → 2,160 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

| Change | Delta |             % |       Samples | Caller                  | Location                 |
| -----: | ----: | ------------: | ------------: | ----------------------- | ------------------------ |
| -44.6% |  -823 | 78.0% → 78.5% | 1,845 → 1,022 | `PlatformMonitor::wait` | `libjvm.dylib`           |
| -46.2% |   -80 |   7.3% → 7.1% |      173 → 93 | `Parker::park`          | `libjvm.dylib`           |
| -46.0% |   -80 |   7.4% → 7.2% |      174 → 94 | `PlatformEvent::park`   | `libjvm.dylib`           |
| -46.2% |   -80 |   7.3% → 7.1% |      173 → 93 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

| Change | Delta |             % |     Samples | Caller                           | Location       |
| -----: | ----: | ------------: | ----------: | -------------------------------- | -------------- |
| -47.2% |  -779 | 89.7% → 89.4% | 1,650 → 871 | `WorkerThread::run`              | `libjvm.dylib` |
| -46.0% |   -80 |   9.5% → 9.7% |    174 → 94 | `os::signal_wait`                | `libjvm.dylib` |
| -44.4% |    -4 |          0.5% |       9 → 5 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |
| -33.3% |    -2 |   0.3% → 0.4% |       6 → 4 | `WorkerThreads::run_task`        | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

| Change | Delta |             % |     Samples | Caller                                  | Location       |
| -----: | ----: | ------------: | ----------: | --------------------------------------- | -------------- |
| -46.0% |  -636 | 74.7% → 73.1% | 1,384 → 748 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |
| -41.2% |  -193 | 25.3% → 26.9% |   468 → 275 | `Monitor::wait`                         | `libjvm.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

| Change | Delta |      % |     Samples | Caller             | Location       |
| -----: | ----: | -----: | ----------: | ------------------ | -------------- |
| -46.5% |  -774 | 100.0% | 1,665 → 891 | `Thread::call_run` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

| Change | Delta |      % |     Samples | Caller             | Location       |
| -----: | ----: | -----: | ----------: | ------------------ | -------------- |
| -46.6% |  -698 | 100.0% | 1,497 → 799 | `Thread::call_run` | `libjvm.dylib` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

| Change | Delta |             % |  Samples | Caller                                                        | Location       |
| -----: | ----: | ------------: | -------: | ------------------------------------------------------------- | -------------- |
| -46.0% |   -80 |         12.6% | 174 → 94 | `WatcherThread::sleep`                                        | `libjvm.dylib` |
| -46.0% |   -80 |         12.6% | 174 → 94 | `MonitorDeflationThread::monitor_deflation_thread_entry`      | `libjvm.dylib` |
| -46.0% |   -80 |         12.6% | 174 → 94 | `G1ServiceThread::wait_for_task`                              | `libjvm.dylib` |
| -46.2% |   -80 | 12.5% → 12.4% | 173 → 93 | `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` | `libjvm.dylib` |
| -46.0% |   -80 |         12.6% | 174 → 94 | `ServiceThread::service_thread_entry`                         | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                          | Location       |
| -----: | ----: | -----: | --------: | ------------------------------- | -------------- |
| -47.4% |  -298 | 100.0% | 629 → 331 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller             | Location       |
| -----: | ----: | -----: | --------: | ------------------ | -------------- |
| -46.0% |  -240 | 100.0% | 522 → 282 | `Thread::call_run` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Caller                            | Location       |
| -----: | ----: | ------------: | --------: | --------------------------------- | -------------- |
| -38.2% |  -110 | 61.4% → 64.7% | 288 → 178 | `CompileQueue::get`               | `libjvm.dylib` |
| -46.0% |   -80 | 37.1% → 34.2% |  174 → 94 | `JVM_WaitForReferencePendingList` | `libjvm.dylib` |
| -57.1% |    -4 |   1.5% → 1.1% |     7 → 3 | `VMThread::wait_until_executed`   | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                                | Location       |
| -----: | ----: | -----: | --------: | ------------------------------------- | -------------- |
| -54.2% |  -181 | 100.0% | 334 → 153 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `JLI_Launch` (`libjli.dylib`)

| Change | Delta |      % |   Samples | Caller | Location |
| -----: | ----: | -----: | --------: | ------ | -------- |
| -46.0% |  -160 | 100.0% | 348 → 188 | `main` | `java`   |

##### `main` (`java`)

| Change | Delta |     % |  Samples | Caller       | Location       |
| -----: | ----: | ----: | -------: | ------------ | -------------- |
| -46.0% |   -80 | 50.0% | 174 → 94 | `unknown`    | `<unknown>`    |
| -46.0% |   -80 | 50.0% | 174 → 94 | `apple_main` | `libjli.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                       | Location       |
| -----: | ----: | -----: | --------: | ---------------------------- | -------------- |
| -58.8% |  -144 | 100.0% | 245 → 101 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                                     | Location       |
| -----: | ----: | -----: | --------: | ------------------------------------------ | -------------- |
| -58.5% |  -144 | 100.0% | 246 → 102 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                                | Location       |
| -----: | ----: | -----: | --------: | ------------------------------------- | -------------- |
| -39.0% |  -114 | 100.0% | 292 → 178 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

| Change | Delta |      % |  Samples | Caller             | Location       |
| -----: | ----: | -----: | -------: | ------------------ | -------------- |
| -67.2% |   -88 | 100.0% | 131 → 43 | `Compile::Compile` | `libjvm.dylib` |

##### `Parker::park` (`libjvm.dylib`)

| Change | Delta |      % |  Samples | Caller        | Location       |
| -----: | ----: | -----: | -------: | ------------- | -------------- |
| -46.2% |   -80 | 100.0% | 173 → 93 | `Unsafe_Park` | `libjvm.dylib` |

##### `Unsafe_Park` (`libjvm.dylib`)

| Change | Delta |      % |  Samples | Caller                | Location                   |
| -----: | ----: | -----: | -------: | --------------------- | -------------------------- |
| -46.2% |   -80 | 100.0% | 173 → 93 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `mach_msg2_trap` (`libsystem_kernel.dylib`)

| Change | Delta |      % |  Samples | Caller               | Location                 |
| -----: | ----: | -----: | -------: | -------------------- | ------------------------ |
| -46.0% |   -80 | 100.0% | 174 → 94 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `mach_msg_overwrite` (`libsystem_kernel.dylib`)

| Change | Delta |      % |  Samples | Caller     | Location                 |
| -----: | ----: | -----: | -------: | ---------- | ------------------------ |
| -46.0% |   -80 | 100.0% | 174 → 94 | `mach_msg` | `libsystem_kernel.dylib` |

##### `mach_msg` (`libsystem_kernel.dylib`)

| Change | Delta |      % |  Samples | Caller                       | Location         |
| -----: | ----: | -----: | -------: | ---------------------------- | ---------------- |
| -46.0% |   -80 | 100.0% | 174 → 94 | `__CFRunLoopServiceMachPort` | `CoreFoundation` |

##### `__CFRunLoopServiceMachPort` (`CoreFoundation`)

| Change | Delta |      % |  Samples | Caller           | Location         |
| -----: | ----: | -----: | -------: | ---------------- | ---------------- |
| -46.0% |   -80 | 100.0% | 174 → 94 | `__CFRunLoopRun` | `CoreFoundation` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller              | Location       |
| -----: | ----: | -----: | ------: | ------------------- | -------------- |
| -58.1% |   -36 | 100.0% | 62 → 26 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                        | Location       |
| -----: | ----: | -----: | ------: | ----------------------------- | -------------- |
| -42.1% |   -32 | 100.0% | 76 → 44 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                     | Location       |
| -----: | ----: | -----: | ------: | -------------------------- | -------------- |
| -37.5% |   -30 | 100.0% | 80 → 50 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                     | Location       |
| -----: | ----: | -----: | ------: | -------------------------- | -------------- |
| -37.5% |   -30 | 100.0% | 80 → 50 | `Compiler::compile_method` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller              | Location       |
| -----: | ----: | -----: | ------: | ------------------- | -------------- |
| -80.0% |   -24 | 100.0% |  30 → 6 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller           | Location       |
| -----: | ----: | -----: | ------: | ---------------- | -------------- |
| -91.3% |   -21 | 100.0% |  23 → 2 | `Matcher::match` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller             | Location       |
| -----: | ----: | -----: | ------: | ------------------ | -------------- |
| -32.2% |   -19 | 100.0% | 59 → 40 | `Compile::Compile` | `libjvm.dylib` |

##### `ciTypeFlow::flow_types` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                | Location       |
| -----: | ----: | -----: | ------: | --------------------- | -------------- |
| -95.0% |   -19 | 100.0% |  20 → 1 | `ciTypeFlow::do_flow` | `libjvm.dylib` |

##### `ciTypeFlow::do_flow` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                        | Location       |
| -----: | ----: | -----: | ------: | ----------------------------- | -------------- |
| -95.0% |   -19 | 100.0% |  20 → 1 | `ciMethod::get_flow_analysis` | `libjvm.dylib` |

##### `ciMethod::get_flow_analysis` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                        | Location       |
| ------: | ----: | -------------: | ------: | ----------------------------- | -------------- |
|  -92.9% |   -13 | 70.0% → 100.0% |  14 → 1 | `InlineTree::ok_to_inline`    | `libjvm.dylib` |
| removed |    -6 |   30.0% → 0.0% |   6 → 0 | `InlineTree::check_can_parse` | `libjvm.dylib` |

##### `ciTypeFlow::StateVector::apply_one_bytecode` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                      | Location       |
| ------: | ----: | -------------: | ------: | --------------------------- | -------------- |
|  -94.4% |   -17 | 94.7% → 100.0% |  18 → 1 | `ciTypeFlow::flow_block`    | `libjvm.dylib` |
| removed |    -1 |    5.3% → 0.0% |   1 → 0 | `ciTypeFlow::df_flow_types` | `libjvm.dylib` |

##### `ciTypeFlow::df_flow_types` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                   | Location       |
| -----: | ----: | -----: | ------: | ------------------------ | -------------- |
| -94.7% |   -18 | 100.0% |  19 → 1 | `ciTypeFlow::flow_types` | `libjvm.dylib` |

##### `ciBytecodeStream::get_method` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                               | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
| removed |   -14 |  66.7% → 0.0% |  14 → 0 | `ciTypeFlow::StateVector::do_invoke` | `libjvm.dylib` |
|  -66.7% |    -4 | 28.6% → 50.0% |   6 → 2 | `GraphBuilder::invoke`               | `libjvm.dylib` |
|     new |    +2 |  0.0% → 50.0% |   0 → 2 | `ciMethod::get_method_at_bci`        | `libjvm.dylib` |
| removed |    -1 |   4.8% → 0.0% |   1 → 0 | `Parse::do_call`                     | `libjvm.dylib` |

##### `ciTypeFlow::flow_block` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                      | Location       |
| -----: | ----: | -----: | ------: | --------------------------- | -------------- |
| -94.4% |   -17 | 100.0% |  18 → 1 | `ciTypeFlow::df_flow_types` | `libjvm.dylib` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

| Change | Delta |      % |  Samples | Caller           | Location                                    |
| -----: | ----: | -----: | -------: | ---------------- | ------------------------------------------- |
| -45.8% |   -76 | 100.0% | 166 → 90 | `main(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |      % |  Samples | Caller                                         | Location                                      |
| -----: | ----: | -----: | -------: | ---------------------------------------------- | --------------------------------------------- |
| -47.4% |   -65 | 100.0% | 137 → 72 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |      % |  Samples | Caller                                                 | Location                                                |
| -----: | ----: | -----: | -------: | ------------------------------------------------------ | ------------------------------------------------------- |
| -47.4% |   -65 | 100.0% | 137 → 72 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change | Delta |      % |  Samples | Caller                                                                                             | Location                                                |
| -----: | ----: | -----: | -------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| -47.4% |   -65 | 100.0% | 137 → 72 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change | Delta |      % |  Samples | Caller           | Location                                               |
| -----: | ----: | -----: | -------: | ---------------- | ------------------------------------------------------ |
| -46.0% |   -64 | 100.0% | 139 → 75 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

| Change | Delta |      % |  Samples | Caller           | Location                                     |
| -----: | ----: | -----: | -------: | ---------------- | -------------------------------------------- |
| -46.0% |   -64 | 100.0% | 139 → 75 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change | Delta |      % |  Samples | Caller                         | Location                                             |
| -----: | ----: | -----: | -------: | ------------------------------ | ---------------------------------------------------- |
| -46.0% |   -64 | 100.0% | 139 → 75 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001008400` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |      % |  Samples | Caller                                                   | Location                                      |
| -----: | ----: | -----: | -------: | -------------------------------------------------------- | --------------------------------------------- |
| -47.4% |   -64 | 100.0% | 135 → 71 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change | Delta |      % |  Samples | Caller                          | Location                                                |
| -----: | ----: | -----: | -------: | ------------------------------- | ------------------------------------------------------- |
| -45.7% |   -63 | 100.0% | 138 → 75 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change | Delta |      % |  Samples | Caller                                                                                              | Location                                                |
| -----: | ----: | -----: | -------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| -47.7% |   -63 | 100.0% | 132 → 69 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change | Delta |      % |  Samples | Caller                                                                                                                                        | Location                                                |
| -----: | ----: | -----: | -------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| -47.7% |   -63 | 100.0% | 132 → 69 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change | Delta |      % |  Samples | Caller                                                         | Location                                                |
| -----: | ----: | -----: | -------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| -47.7% |   -63 | 100.0% | 132 → 69 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change | Delta |      % |  Samples | Caller                                                                | Location                                     |
| -----: | ----: | -----: | -------: | --------------------------------------------------------------------- | -------------------------------------------- |
| -47.7% |   -63 | 100.0% | 132 → 69 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change | Delta |      % |  Samples | Caller                                                                 | Location                                     |
| -----: | ----: | -----: | -------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| -47.7% |   -63 | 100.0% | 132 → 69 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change | Delta |      % |  Samples | Caller                                                          | Location                                      |
| -----: | ----: | -----: | -------: | --------------------------------------------------------------- | --------------------------------------------- |
| -47.7% |   -63 | 100.0% | 132 → 69 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |      % |  Samples | Caller                                                      | Location                                      |
| -----: | ----: | -----: | -------: | ----------------------------------------------------------- | --------------------------------------------- |
| -47.7% |   -63 | 100.0% | 132 → 69 | `exec(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

| Change | Delta |      % |  Samples | Caller                              | Location                                          |
| -----: | ----: | -----: | -------: | ----------------------------------- | ------------------------------------------------- |
| -48.1% |   -63 | 100.0% | 131 → 68 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

| Change | Delta |      % |  Samples | Caller                                                     | Location                                                |
| -----: | ----: | -----: | -------: | ---------------------------------------------------------- | ------------------------------------------------------- |
| -48.1% |   -63 | 100.0% | 131 → 68 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

| Change | Delta |           % |  Samples | Caller                                                                | Location                                                          |
| -----: | ----: | ----------: | -------: | --------------------------------------------------------------------- | ----------------------------------------------------------------- |
| -48.1% |   -63 |      100.0% | 131 → 68 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`            | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase`       |
| -50.0% |    -4 | 6.1% → 5.9% |    8 → 4 | `invoke(PhaseConfig, PhaserState, LoweringContext, IrModuleFragment)` | `org.jetbrains.kotlin.backend.common.phaser.PerformByIrFilePhase` |
| -50.0% |    -1 |        1.5% |    2 → 1 | `runPhase(NamedCompilerPhase, Object, boolean)`                       | `org.jetbrains.kotlin.backend.common.phaser.PhaseEngine`          |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `G1EvacuateRegionsTask::scan_roots` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                            | Location       |
| -----: | ----: | -----------: | ------: | --------------------------------- | -------------- |
|    new |    +9 | 0.0% → 90.0% |   0 → 9 | `G1RemSet::scan_heap_roots`       | `libjvm.dylib` |
|    new |    +1 | 0.0% → 10.0% |   0 → 1 | `G1RootProcessor::evacuate_roots` | `libjvm.dylib` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                                            | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------------------------- | -------------- |
|    new |    +4 | 0.0% → 44.4% |   0 → 4 | `fwd_copy_again`                                  | `libjvm.dylib` |
|    new |    +3 | 0.0% → 33.3% |   0 → 3 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib` |

##### `G1ScanHRForRegionClosure::scan_heap_roots` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                                                                                                                                                          | Location       |
| -----: | ----: | -----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
|    new |    +8 | 0.0% → 88.9% |   0 → 8 | `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` | `libjvm.dylib` |

##### `G1ScanHRForRegionClosure::do_heap_region` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                      | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------- | -------------- |
|    new |    +9 | 0.0% → 100.0% |   0 → 9 | `G1ScanHRForRegionClosure::scan_heap_roots` | `libjvm.dylib` |

##### `G1RemSet::scan_heap_roots` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                     | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
|    new |    +9 | 0.0% → 100.0% |   0 → 9 | `G1ScanHRForRegionClosure::do_heap_region` | `libjvm.dylib` |

##### `G1EvacuateRegionsBaseTask::work` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Callee                                         | Location       |
| -----: | ----: | -------------: | ------: | ---------------------------------------------- | -------------- |
|    new |   +10 |   0.0% → 71.4% |  0 → 10 | `G1EvacuateRegionsTask::scan_roots`            | `libjvm.dylib` |
| -33.3% |    -2 | 100.0% → 28.6% |   6 → 4 | `G1EvacuateRegionsTask::evacuate_live_objects` | `libjvm.dylib` |

##### `G1ScanHRForRegionClosure::scan_memregion` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                                                                          | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------------------------- | -------------- |
|    new |    +6 | 0.0% → 75.0% |   0 → 6 | `G1ParScanThreadState::trim_queue_to_threshold`                                 | `libjvm.dylib` |
|    new |    +1 | 0.0% → 12.5% |   0 → 1 | `G1ParScanThreadState::do_copy_to_survivor_space`                               | `libjvm.dylib` |
|    new |    +1 | 0.0% → 12.5% |   0 → 1 | `HeapWordImpl** HeapRegion::oops_on_memregion_iterate<G1ScanCardClosure, true>` | `libjvm.dylib` |

##### `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                     | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
|    new |    +8 | 0.0% → 100.0% |   0 → 8 | `G1ScanHRForRegionClosure::scan_memregion` | `libjvm.dylib` |

##### `ClassVerifier::verify_method` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                            | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------------- | -------------- |
|    new |    +4 |  0.0% → 40.0% |   0 → 4 | `StackMapFrame::set_locals_from_arg`              | `libjvm.dylib` |
|    new |    +2 |  0.0% → 20.0% |   0 → 2 | `ClassVerifier::verify_exception_handler_targets` | `libjvm.dylib` |
| -33.3% |    -1 | 60.0% → 20.0% |   3 → 2 | `ClassVerifier::verify_invoke_instructions`       | `libjvm.dylib` |
|    new |    +1 |  0.0% → 10.0% |   0 → 1 | `StackMapTable::StackMapTable`                    | `libjvm.dylib` |
|    new |    +1 |  0.0% → 10.0% |   0 → 1 | `ClassVerifier::verify_aload`                     | `libjvm.dylib` |

##### `ClassVerifier::verify_class` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Callee                         | Location       |
| ------: | ----: | -----: | ------: | ------------------------------ | -------------- |
| +100.0% |    +5 | 100.0% |  5 → 10 | `ClassVerifier::verify_method` | `libjvm.dylib` |

##### `nmethod::new_nmethod` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                 | Location       |
| ------: | ----: | -------------: | ------: | -------------------------------------- | -------------- |
|     new |    +2 |   0.0% → 40.0% |   0 → 2 | `nmethod::nmethod`                     | `libjvm.dylib` |
| +100.0% |    +1 | 100.0% → 40.0% |   1 → 2 | `InstanceKlass::add_dependent_nmethod` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 20.0% |   0 → 1 | `MethodData::is_methodData`            | `libjvm.dylib` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                                                                                                                       | Location       |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` | `libjvm.dylib` |

##### `StackMapFrame::set_locals_from_arg` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                                   | Location       |
| -----: | ----: | -----------: | ------: | ---------------------------------------- | -------------- |
|    new |    +3 | 0.0% → 75.0% |   0 → 3 | `SignatureStream::SignatureStream`       | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `ClassVerifier::create_temporary_symbol` | `libjvm.dylib` |

##### `PhaseIdealLoop::get_late_ctrl_with_anti_dep` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                                               | Location                   |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------- | -------------------------- |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `PhaseIdealLoop::is_dominator`                       | `libjvm.dylib`             |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `MemNode::adr_type`                                  | `libjvm.dylib`             |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `_platform_strcmp`                                   | `libsystem_platform.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` | `libjvm.dylib`             |

##### `CompileBroker::create_compile_task` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                    | Location                 |
| -----: | ----: | -----------: | ------: | ------------------------- | ------------------------ |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `__psynch_cvbroad`        | `libsystem_kernel.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `CompileTask::allocate`   | `libjvm.dylib`           |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `CompileTask::initialize` | `libjvm.dylib`           |

##### `ciEnv::register_method` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                 | Location       |
| ------: | ----: | ------------: | ------: | ---------------------- | -------------- |
| +400.0% |    +4 | 25.0% → 71.4% |   1 → 5 | `nmethod::new_nmethod` | `libjvm.dylib` |
|  -50.0% |    -1 | 50.0% → 14.3% |   2 → 1 | `Mutex::lock`          | `libjvm.dylib` |

##### `Verifier::verify` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                        | Location       |
| ------: | ----: | -------------: | ------: | ----------------------------- | -------------- |
| +100.0% |    +5 | 71.4% → 100.0% |  5 → 10 | `ClassVerifier::verify_class` | `libjvm.dylib` |
| removed |    -2 |   28.6% → 0.0% |   2 → 0 | `Verifier::inference_verify`  | `libjvm.dylib` |

##### `G1ParScanThreadState::steal_and_trim_queue` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                          | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |

##### `CodeCacheUnloadingTask::work` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                  | Location       |
| -----: | ----: | -----------: | ------: | ----------------------- | -------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `nmethod::do_unloading` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `nmethod::unlink`       | `libjvm.dylib` |

##### `G1ParallelCleaningTask::work` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                         | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------ | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `CodeCacheUnloadingTask::work` | `libjvm.dylib` |

##### `Type::cmp` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee            | Location       |
| -----: | ----: | -----------: | ------: | ----------------- | -------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `TypeInstPtr::eq` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `TypeOopPtr::eq`  | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                      | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------- | -------------- |
|  +40.0% |    +2 | 71.4% → 77.8% |   5 → 7 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `ProjNode::is_uncommon_trap_proj`           | `libjvm.dylib` |
|     new |    +1 |  0.0% → 11.1% |   0 → 1 | `BoolNode::Opcode`                          | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                        | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | -------------- |
|     new |    +2 |  0.0% → 28.6% |   0 → 2 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `libjvm.dylib` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `MergeMemNode::Opcode`                        | `libjvm.dylib` |
|  -50.0% |    -1 | 40.0% → 14.3% |   2 → 1 | `PhaseIdealLoop::compute_lca_of_uses`         | `libjvm.dylib` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `ProjNode::is_uncommon_trap_if_pattern`       | `libjvm.dylib` |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `CastIINode::Opcode`                          | `libjvm.dylib` |

##### `MacroAssembler::trampoline_call` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                                 | Location       |
| -----: | ----: | -----------: | ------: | -------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `CodeSection::relocate`                | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `MacroAssembler::emit_trampoline_stub` | `libjvm.dylib` |

##### `CompilationPolicy::call_event` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                                               | Location       |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `CompLevel CompilationPolicy::common<LoopPredicate>` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `CompLevel CompilationPolicy::common<CallPredicate>` | `libjvm.dylib` |

##### `PhaseIdealLoop::ctrl_of_use_out_of_loop` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                        | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `libjvm.dylib` |

##### `PhaseIdealLoop::ctrl_of_all_uses_out_of_loop` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                    | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseIdealLoop::ctrl_of_use_out_of_loop` | `libjvm.dylib` |

##### `PhaseIdealLoop::try_sink_out_of_loop` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                         | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseIdealLoop::ctrl_of_all_uses_out_of_loop` | `libjvm.dylib` |

##### `GraphKit::uncommon_trap` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                        | Location       |
| -----: | ----: | -----------: | ------: | ----------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `GraphKit::make_runtime_call` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `Node::disconnect_inputs`     | `libjvm.dylib` |

##### `ciMethod::get_method_at_bci` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                         | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------ | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `ciBytecodeStream::get_method` | `libjvm.dylib` |

##### `TypeInstPtr::eq` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee               | Location       |
| -----: | ----: | ------------: | ------: | -------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `TypeInterfaces::eq` | `libjvm.dylib` |

##### `PhaseBlockLayout::PhaseBlockLayout` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                           | Location       |
| -----: | ----: | -----------: | ------: | -------------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseBlockLayout::grow_traces`  | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseBlockLayout::merge_traces` | `libjvm.dylib` |

##### `PhaseIdealLoop::collect_potentially_useful_predicates` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                                                  | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `ParsePredicates::ParsePredicates`                      | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseIdealLoop::collect_potentially_useful_predicates` | `libjvm.dylib` |

##### `<clinit>()` (`org.jetbrains.kotlin.cli.common.messages.PlainTextMessageRenderer`)

|  Change | Delta |              % | Samples | Callee        | Location                                       |
| ------: | ----: | -------------: | ------: | ------------- | ---------------------------------------------- |
| +100.0% |    +1 | 100.0% → 66.7% |   1 → 2 | `<clinit>()`  | `org.fusesource.jansi.internal.CLibrary`       |
|     new |    +1 |   0.0% → 33.3% |   0 → 1 | `isWindows()` | `org.jetbrains.kotlin.cli.common.PropertiesKt` |

##### `<clinit>()` (`org.jetbrains.kotlin.cli.common.messages.MessageRenderer`)

|  Change | Delta |      % | Samples | Callee       | Location                                                            |
| ------: | ----: | -----: | ------: | ------------ | ------------------------------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `<clinit>()` | `org.jetbrains.kotlin.cli.common.messages.PlainTextMessageRenderer` |

##### `defaultMessageRenderer()` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|  Change | Delta |      % | Samples | Callee       | Location                                                   |
| ------: | ----: | -----: | ------: | ------------ | ---------------------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `<clinit>()` | `org.jetbrains.kotlin.cli.common.messages.MessageRenderer` |

##### `invoke(Object)` (`org.jetbrains.kotlin.fir.java.scopes.JavaClassMembersEnhancementScope$$Lambda`)

|  Change | Delta |              % | Samples | Callee                                                                                                       | Location                                                                |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| +100.0% |    +1 | 100.0% → 66.7% |   1 → 2 | `processFunctionsByName$lambda$0(JavaClassMembersEnhancementScope, Name, Function1, FirNamedFunctionSymbol)` | `org.jetbrains.kotlin.fir.java.scopes.JavaClassMembersEnhancementScope` |
|     new |    +1 |   0.0% → 33.3% |   0 → 1 | `processDeclaredConstructors$lambda$0(JavaClassMembersEnhancementScope, Function1, FirConstructorSymbol)`    | `org.jetbrains.kotlin.fir.java.scopes.JavaClassMembersEnhancementScope` |

##### `visitTypeRef(FirTypeRef, Void)` (`org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`)

|  Change | Delta |              % | Samples | Callee                            | Location                                                                                |
| ------: | ----: | -------------: | ------: | --------------------------------- | --------------------------------------------------------------------------------------- |
|     new |    +2 |   0.0% → 66.7% |   0 → 2 | `checkElement(FirElement)`        | `org.jetbrains.kotlin.fir.analysis.collectors.CheckerRunningDiagnosticCollectorVisitor` |
| +100.0% |    +1 | 100.0% → 66.7% |   1 → 2 | `visitNestedElements(FirElement)` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`       |

##### `visitTypeRef(FirTypeRef, Object)` (`org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`)

|  Change | Delta |      % | Samples | Callee                           | Location                                                                          |
| ------: | ----: | -----: | ------: | -------------------------------- | --------------------------------------------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `visitTypeRef(FirTypeRef, Void)` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |

##### `visitUnresolvedTypeRef(FirUnresolvedTypeRef, Object)` (`org.jetbrains.kotlin.fir.visitors.FirDefaultVisitor`)

|  Change | Delta |      % | Samples | Callee                             | Location                                                                          |
| ------: | ----: | -----: | ------: | ---------------------------------- | --------------------------------------------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `visitTypeRef(FirTypeRef, Object)` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |

##### `transformExplicitReceiverOf(FirQualifiedAccessExpression)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`)

| Change | Delta |             % | Samples | Callee                                                                | Location                                                                                      |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `transformAsExplicitReceiver(FirExpression, ResolutionMode, boolean)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |

##### `acceptChildren(FirVisitor, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirReceiverParameterImpl`)

| Change | Delta |             % | Samples | Callee                       | Location                                            |
| -----: | ----: | ------------: | ------: | ---------------------------- | --------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `accept(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.types.FirResolvedTypeRef` |

##### `visitReceiverParameter(FirReceiverParameter, Void)` (`org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`)

| Change | Delta |             % | Samples | Callee                            | Location                                                                          |
| -----: | ----: | ------------: | ------: | --------------------------------- | --------------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `visitNestedElements(FirElement)` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |

##### `visitReceiverParameter(FirReceiverParameter, Object)` (`org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`)

| Change | Delta |             % | Samples | Callee                                               | Location                                                                          |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------- | --------------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `visitReceiverParameter(FirReceiverParameter, Void)` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |

##### `accept(FirVisitor, Object)` (`org.jetbrains.kotlin.fir.declarations.FirReceiverParameter`)

| Change | Delta |             % | Samples | Callee                                                 | Location                                                                          |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------ | --------------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `visitReceiverParameter(FirReceiverParameter, Object)` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |

##### `visitRegularClass(FirRegularClass, CheckerContext)` (`org.jetbrains.kotlin.fir.analysis.checkers.declaration.DeclarationCheckersDiagnosticComponent`)

| Change | Delta |            % | Samples | Callee                                                      | Location                                                                            |
| -----: | ----: | -----------: | ------: | ----------------------------------------------------------- | ----------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `check(CheckerContext, DiagnosticReporter, FirDeclaration)` | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirMemberPropertiesChecker` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `check(CheckerContext, DiagnosticReporter, FirDeclaration)` | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirAnnotationChecker`       |

##### `visitRegularClass(FirRegularClass, Object)` (`org.jetbrains.kotlin.fir.analysis.checkers.declaration.DeclarationCheckersDiagnosticComponent`)

| Change | Delta |             % | Samples | Callee                                               | Location                                                                                        |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `visitRegularClass(FirRegularClass, CheckerContext)` | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.DeclarationCheckersDiagnosticComponent` |

##### `generateLambdaBody(ExpressionLambda, ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`)

| Change | Delta |             % | Samples | Callee                                  | Location                                                   |
| -----: | ----: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `generate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generateLambdaBody(SourceCompilerForInline)` (`org.jetbrains.kotlin.codegen.inline.ExpressionLambda`)

| Change | Delta |             % | Samples | Callee                                                              | Location                                                             |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------- | -------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `generateLambdaBody(ExpressionLambda, ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline` |

##### `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`)

| Change | Delta |             % | Samples | Callee                                               | Location                                                          |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------- | ----------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `generateLambdaBody(SourceCompilerForInline)`        | `org.jetbrains.kotlin.codegen.inline.ExpressionLambda`            |
|    new |    +1 |  0.0% → 50.0% |   0 → 1 | `<init>(ExpressionCodegen, IrRichFunctionReference)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrExpressionLambdaImpl` |

##### `loadNativeLibrary(File)` (`org.fusesource.jansi.internal.JansiLoader`)

|  Change | Delta |      % | Samples | Callee         | Location           |
| ------: | ----: | -----: | ------: | -------------- | ------------------ |
| +100.0% |    +1 | 100.0% |   1 → 2 | `load(String)` | `java.lang.System` |

##### `extractAndLoadLibraryFile(String, String, String)` (`org.fusesource.jansi.internal.JansiLoader`)

|  Change | Delta |      % | Samples | Callee                    | Location                                    |
| ------: | ----: | -----: | ------: | ------------------------- | ------------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `loadNativeLibrary(File)` | `org.fusesource.jansi.internal.JansiLoader` |

##### `loadJansiNativeLibrary()` (`org.fusesource.jansi.internal.JansiLoader`)

|  Change | Delta |      % | Samples | Callee                                              | Location                                    |
| ------: | ----: | -----: | ------: | --------------------------------------------------- | ------------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `extractAndLoadLibraryFile(String, String, String)` | `org.fusesource.jansi.internal.JansiLoader` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

| Change |  Delta |           % |       Samples | Callee                | Location       |
| -----: | -----: | ----------: | ------------: | --------------------- | -------------- |
| -46.4% | -1,872 |       95.8% | 4,032 → 2,160 | `thread_native_entry` | `libjvm.dylib` |
| -46.0% |    -80 | 4.1% → 4.2% |      174 → 94 | `apple_main`          | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

| Change |  Delta |      % |       Samples | Callee           | Location                  |
| -----: | -----: | -----: | ------------: | ---------------- | ------------------------- |
| -46.4% | -1,952 | 100.0% | 4,207 → 2,255 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

| Change | Delta |             % |     Samples | Callee                          | Location       |
| -----: | ----: | ------------: | ----------: | ------------------------------- | -------------- |
| -46.5% |  -774 |         41.3% | 1,665 → 891 | `WorkerThread::run`             | `libjvm.dylib` |
| -46.6% |  -698 | 37.1% → 37.0% | 1,497 → 799 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| -46.0% |  -240 | 12.9% → 13.1% |   522 → 282 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
| -46.0% |   -80 |   4.3% → 4.4% |    174 → 94 | `WatcherThread::run`            | `libjvm.dylib` |
| -46.0% |   -80 |   4.3% → 4.4% |    174 → 94 | `VMThread::run`                 | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

| Change |  Delta |      % |       Samples | Callee             | Location       |
| -----: | -----: | -----: | ------------: | ------------------ | -------------- |
| -46.4% | -1,872 | 100.0% | 4,032 → 2,160 | `Thread::call_run` | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

| Change | Delta |             % |       Samples | Callee               | Location                  |
| -----: | ----: | ------------: | ------------: | -------------------- | ------------------------- |
| -44.6% |  -823 | 99.6% → 99.9% | 1,845 → 1,022 | `__psynch_cvwait`    | `libsystem_kernel.dylib`  |
| -85.7% |    -6 |   0.4% → 0.1% |         7 → 1 | `_pthread_cond_wait` | `libsystem_pthread.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|  Change | Delta |             % |     Samples | Callee                            | Location                 |
| ------: | ----: | ------------: | ----------: | --------------------------------- | ------------------------ |
|  -47.2% |  -779 | 99.1% → 97.8% | 1,650 → 871 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
| +133.3% |    +8 |   0.4% → 1.6% |      6 → 14 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
|     new |    +3 |   0.0% → 0.3% |       0 → 3 | `G1ParallelCleaningTask::work`    | `libjvm.dylib`           |
|  -50.0% |    -2 |          0.2% |       4 → 2 | `G1RebuildRSAndScrubTask::work`   | `libjvm.dylib`           |
|  -66.7% |    -2 |   0.2% → 0.1% |       3 → 1 | `G1CMConcurrentMarkingTask::work` | `libjvm.dylib`           |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Callee                                                   | Location       |
| -----: | ----: | ------------: | --------: | -------------------------------------------------------- | -------------- |
| -47.4% |  -298 | 42.0% → 41.4% | 629 → 331 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib` |
| -46.0% |   -80 | 11.6% → 11.8% |  174 → 94 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib` |
| -46.0% |   -80 | 11.6% → 11.8% |  174 → 94 | `signal_thread_entry`                                    | `libjvm.dylib` |
| -46.0% |   -80 | 11.6% → 11.8% |  174 → 94 | `ServiceThread::service_thread_entry`                    | `libjvm.dylib` |
| -46.2% |   -80 |         11.6% |  173 → 93 | `JvmtiAgentThread::start_function_wrapper`               | `libjvm.dylib` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

| Change | Delta |      % |     Samples | Callee                  | Location       |
| -----: | ----: | -----: | ----------: | ----------------------- | -------------- |
| -46.0% |  -636 | 100.0% | 1,384 → 748 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                                         | Location       |
| ------: | ----: | ------------: | --------: | ---------------------------------------------- | -------------- |
|  -54.2% |  -181 | 53.1% → 46.2% | 334 → 153 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
|  -39.0% |  -114 | 46.4% → 53.8% | 292 → 178 | `CompileQueue::get`                            | `libjvm.dylib` |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `Mutex::lock`                                  | `libjvm.dylib` |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `CompileTaskWrapper::~CompileTaskWrapper`      | `libjvm.dylib` |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

| Change | Delta |     % |  Samples | Callee                                  | Location       |
| -----: | ----: | ----: | -------: | --------------------------------------- | -------------- |
| -46.0% |   -80 | 33.3% | 174 → 94 | `G1ConcurrentMarkThread::run_service`   | `libjvm.dylib` |
| -46.0% |   -80 | 33.3% | 174 → 94 | `G1ServiceThread::run_service`          | `libjvm.dylib` |
| -46.0% |   -80 | 33.3% | 174 → 94 | `G1ConcurrentRefineThread::run_service` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|  Change | Delta |              % |   Samples | Callee                                                                        | Location       |
| ------: | ----: | -------------: | --------: | ----------------------------------------------------------------------------- | -------------- |
|  -41.2% |  -193 | 99.8% → 100.0% | 468 → 275 | `PlatformMonitor::wait`                                                       | `libjvm.dylib` |
| removed |    -1 |    0.2% → 0.0% |     1 → 0 | `ThreadBlockInVMPreprocess<InFlightMutexRelease>::~ThreadBlockInVMPreprocess` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                          | Location       |
| ------: | ----: | ------------: | --------: | ------------------------------- | -------------- |
|  -58.5% |  -144 | 73.7% → 66.7% | 246 → 102 | `C2Compiler::compile_method`    | `libjvm.dylib` |
|  -37.5% |   -30 | 24.0% → 32.7% |   80 → 50 | `Compiler::compile_method`      | `libjvm.dylib` |
|  -75.0% |    -3 |   1.2% → 0.7% |     4 → 1 | `ciEnv::get_method_from_handle` | `libjvm.dylib` |
| removed |    -2 |   0.6% → 0.0% |     2 → 0 | `ciEnv::~ciEnv`                 | `libjvm.dylib` |
| removed |    -2 |   0.6% → 0.0% |     2 → 0 | `CompilationLog::log_compile`   | `libjvm.dylib` |

##### `JLI_Launch` (`libjli.dylib`)

| Change | Delta |     % |  Samples | Callee                       | Location       |
| -----: | ----: | ----: | -------: | ---------------------------- | -------------- |
| -46.0% |   -80 | 50.0% | 174 → 94 | `CreateExecutionEnvironment` | `libjli.dylib` |
| -46.0% |   -80 | 50.0% | 174 → 94 | `ContinueInNewThread`        | `libjli.dylib` |

##### `main` (`java`)

| Change | Delta |      % |   Samples | Callee       | Location       |
| -----: | ----: | -----: | --------: | ------------ | -------------- |
| -46.0% |  -160 | 100.0% | 348 → 188 | `JLI_Launch` | `libjli.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|  Change | Delta |             % |  Samples | Callee                                   | Location       |
| ------: | ----: | ------------: | -------: | ---------------------------------------- | -------------- |
|  -67.2% |   -88 | 53.5% → 42.6% | 131 → 43 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  -64.4% |   -29 | 18.4% → 15.8% |  45 → 16 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  -32.2% |   -19 | 24.1% → 39.6% |  59 → 40 | `Compile::Optimize`                      | `libjvm.dylib` |
| removed |    -6 |   2.4% → 0.0% |    6 → 0 | `CallGenerator::for_inline`              | `libjvm.dylib` |
|  -33.3% |    -1 |   1.2% → 2.0% |    3 → 2 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee              | Location       |
| ------: | ----: | ------------: | --------: | ------------------- | -------------- |
|  -58.8% |  -144 | 99.6% → 99.0% | 245 → 101 | `Compile::Compile`  | `libjvm.dylib` |
| removed |    -1 |   0.4% → 0.0% |     1 → 0 | `Compile::~Compile` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 1.0% |     0 → 1 | `Chunk::next_chop`  | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|  Change | Delta |              % |   Samples | Callee                           | Location       |
| ------: | ----: | -------------: | --------: | -------------------------------- | -------------- |
|  -38.2% |  -110 | 98.6% → 100.0% | 288 → 178 | `Monitor::wait`                  | `libjvm.dylib` |
| removed |    -3 |    1.0% → 0.0% |     3 → 0 | `Mutex::lock`                    | `libjvm.dylib` |
| removed |    -1 |    0.3% → 0.0% |     1 → 0 | `CompilationPolicy::select_task` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
|  -58.1% |   -36 | 47.3% → 60.5% | 62 → 26 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
|  -80.0% |   -24 | 22.9% → 14.0% |  30 → 6 | `Matcher::match`                  | `libjvm.dylib` |
|  -81.3% |   -13 |  12.2% → 7.0% |  16 → 3 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  -72.2% |   -13 | 13.7% → 11.6% |  18 → 5 | `PhaseOutput::Output`             | `libjvm.dylib` |
| removed |    -2 |   1.5% → 0.0% |   2 → 0 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |

##### `Parker::park` (`libjvm.dylib`)

| Change | Delta |      % |  Samples | Callee            | Location                 |
| -----: | ----: | -----: | -------: | ----------------- | ------------------------ |
| -46.2% |   -80 | 100.0% | 173 → 93 | `__psynch_cvwait` | `libsystem_kernel.dylib` |

##### `Unsafe_Park` (`libjvm.dylib`)

| Change | Delta |      % |  Samples | Callee         | Location       |
| -----: | ----: | -----: | -------: | -------------- | -------------- |
| -46.2% |   -80 | 100.0% | 173 → 93 | `Parker::park` | `libjvm.dylib` |

##### `mach_msg_overwrite` (`libsystem_kernel.dylib`)

| Change | Delta |      % |  Samples | Callee           | Location                 |
| -----: | ----: | -----: | -------: | ---------------- | ------------------------ |
| -46.0% |   -80 | 100.0% | 174 → 94 | `mach_msg2_trap` | `libsystem_kernel.dylib` |

##### `mach_msg` (`libsystem_kernel.dylib`)

| Change | Delta |      % |  Samples | Callee               | Location                 |
| -----: | ----: | -----: | -------: | -------------------- | ------------------------ |
| -46.0% |   -80 | 100.0% | 174 → 94 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `__CFRunLoopServiceMachPort` (`CoreFoundation`)

| Change | Delta |      % |  Samples | Callee     | Location                 |
| -----: | ----: | -----: | -------: | ---------- | ------------------------ |
| -46.0% |   -80 | 100.0% | 174 → 94 | `mach_msg` | `libsystem_kernel.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                     | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
| -90.0% |    -9 |  16.1% → 3.8% |  10 → 1 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| -75.0% |    -6 |  12.9% → 7.7% |   8 → 2 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
| -71.4% |    -5 |  11.3% → 7.7% |   7 → 2 | `PhaseLive::compute`                       | `libjvm.dylib` |
| -50.0% |    -2 |   6.5% → 7.7% |   4 → 2 | `PhaseChaitin::gather_lrg_masks`           | `libjvm.dylib` |
| -25.0% |    -2 | 12.9% → 23.1% |   8 → 6 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                         | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------ | -------------- |
|  -39.4% |   -13 | 43.4% → 45.5% | 33 → 20 | `Compilation::build_hir`       | `libjvm.dylib` |
|  -42.9% |   -12 | 36.8% → 36.4% | 28 → 16 | `Compilation::emit_lir`        | `libjvm.dylib` |
|  -57.1% |    -8 | 18.4% → 13.6% |  14 → 6 | `Compilation::emit_code_body`  | `libjvm.dylib` |
| +100.0% |    +1 |   1.3% → 4.5% |   1 → 2 | `ciMethod::ensure_method_data` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
|  -42.1% |   -32 | 95.0% → 88.0% | 76 → 44 | `Compilation::compile_java_method` | `libjvm.dylib` |
| +200.0% |    +4 |  2.5% → 12.0% |   2 → 6 | `ciEnv::register_method`           | `libjvm.dylib` |
| removed |    -2 |   2.5% → 0.0% |   2 → 0 | `Dependencies::assert_common_1`    | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                        | Location       |
| -----: | ----: | -----: | ------: | ----------------------------- | -------------- |
| -37.5% |   -30 | 100.0% | 80 → 50 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                     | Location       |
| ------: | ----: | ------------: | ------: | -------------------------- | -------------- |
|  -91.3% |   -21 | 76.7% → 33.3% |  23 → 2 | `Matcher::xform`           | `libjvm.dylib` |
|  -66.7% |    -2 | 10.0% → 16.7% |   3 → 1 | `Matcher::find_shared`     | `libjvm.dylib` |
| removed |    -1 |   3.3% → 0.0% |   1 → 0 | `Arena::destruct_contents` | `libjvm.dylib` |
| removed |    -1 |   3.3% → 0.0% |   1 → 0 | `ConNode::Opcode`          | `libjvm.dylib` |
| removed |    -1 |   3.3% → 0.0% |   1 → 0 | `DecodeNNode::Opcode`      | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------------- | -------------- |
|  -85.7% |   -12 | 60.9% → 100.0% |  14 → 2 | `Matcher::match_tree`                 | `libjvm.dylib` |
| removed |    -7 |   30.4% → 0.0% |   7 → 0 | `Arena::contains`                     | `libjvm.dylib` |
| removed |    -1 |    4.3% → 0.0% |   1 → 0 | `SharedRuntime::c_calling_convention` | `libjvm.dylib` |
| removed |    -1 |    4.3% → 0.0% |   1 → 0 | `Node::clone`                         | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                  | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
|  -42.9% |    -6 | 23.7% → 20.0% |  14 → 8 | `Compile::optimize_loops`               | `libjvm.dylib` |
|  -50.0% |    -5 | 16.9% → 12.5% |  10 → 5 | `PhaseIterGVN::optimize`                | `libjvm.dylib` |
|  -57.1% |    -4 |  11.9% → 7.5% |   7 → 3 | `PhaseCCP::PhaseCCP`                    | `libjvm.dylib` |
|  -80.0% |    -4 |   8.5% → 2.5% |   5 → 1 | `PhaseMacroExpand::expand_macro_nodes`  | `libjvm.dylib` |
| removed |    -2 |   3.4% → 0.0% |   2 → 0 | `Compile::inline_incrementally_cleanup` | `libjvm.dylib` |

##### `ciTypeFlow::flow_types` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                        | Location       |
| ------: | ----: | -------------: | ------: | ----------------------------- | -------------- |
|  -94.7% |   -18 | 95.0% → 100.0% |  19 → 1 | `ciTypeFlow::df_flow_types`   | `libjvm.dylib` |
| removed |    -1 |    5.0% → 0.0% |   1 → 0 | `ciTypeFlow::get_start_state` | `libjvm.dylib` |

##### `ciTypeFlow::do_flow` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                   | Location       |
| -----: | ----: | -----: | ------: | ------------------------ | -------------- |
| -95.0% |   -19 | 100.0% |  20 → 1 | `ciTypeFlow::flow_types` | `libjvm.dylib` |

##### `ciMethod::get_flow_analysis` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                | Location       |
| -----: | ----: | -----: | ------: | --------------------- | -------------- |
| -95.0% |   -19 | 100.0% |  20 → 1 | `ciTypeFlow::do_flow` | `libjvm.dylib` |

##### `ciTypeFlow::StateVector::apply_one_bytecode` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                  | Location       |
| ------: | ----: | -------------: | ------: | --------------------------------------- | -------------- |
| removed |   -14 |   73.7% → 0.0% |  14 → 0 | `ciTypeFlow::StateVector::do_invoke`    | `libjvm.dylib` |
|  -66.7% |    -2 | 15.8% → 100.0% |   3 → 1 | `ciTypeFlow::StateVector::do_getstatic` | `libjvm.dylib` |
| removed |    -1 |    5.3% → 0.0% |   1 → 0 | `ciBytecodeStream::get_klass`           | `libjvm.dylib` |

##### `ciTypeFlow::df_flow_types` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                        | Location       |
| ------: | ----: | -------------: | ------: | --------------------------------------------- | -------------- |
|  -94.4% |   -17 | 94.7% → 100.0% |  18 → 1 | `ciTypeFlow::flow_block`                      | `libjvm.dylib` |
| removed |    -1 |    5.3% → 0.0% |   1 → 0 | `ciTypeFlow::StateVector::apply_one_bytecode` | `libjvm.dylib` |

##### `ciBytecodeStream::get_method` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                            | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| -85.7% |   -12 | 66.7% → 50.0% |  14 → 2 | `ciObjectFactory::get_metadata`   | `libjvm.dylib` |
| -71.4% |    -5 | 33.3% → 50.0% |   7 → 2 | `ciEnv::get_method_by_index_impl` | `libjvm.dylib` |

##### `ciTypeFlow::flow_block` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                                        | Location       |
| -----: | ----: | -----: | ------: | --------------------------------------------- | -------------- |
| -94.4% |   -17 | 100.0% |  18 → 1 | `ciTypeFlow::StateVector::apply_one_bytecode` | `libjvm.dylib` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

| Change | Delta |             % |  Samples | Callee                                                                       | Location                                               |
| -----: | ----: | ------------: | -------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| -46.4% |   -65 | 84.3% → 83.3% | 140 → 75 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                             |
| -42.3% |   -11 | 15.7% → 16.7% |  26 → 15 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

| Change | Delta |      % |  Samples | Callee          | Location                                    |
| -----: | ----: | -----: | -------: | --------------- | ------------------------------------------- |
| -45.8% |   -76 | 100.0% | 166 → 90 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |             % |  Samples | Callee                                                                               | Location                                                                |
| -----: | ----: | ------------: | -------: | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| -47.4% |   -64 | 98.5% → 98.6% | 135 → 71 | `exec(MessageCollector, Services, CommonCompilerArguments)`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
| -50.0% |    -1 |   1.5% → 1.4% |    2 → 1 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |      % |  Samples | Callee                                                   | Location                                      |
| -----: | ----: | -----: | -------: | -------------------------------------------------------- | --------------------------------------------- |
| -47.4% |   -65 | 100.0% | 137 → 72 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change | Delta |      % |  Samples | Callee                                         | Location                                      |
| -----: | ----: | -----: | -------: | ---------------------------------------------- | --------------------------------------------- |
| -47.4% |   -65 | 100.0% | 137 → 72 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|  Change | Delta |              % |  Samples | Callee                                                                                             | Location                                                   |
| ------: | ----: | -------------: | -------: | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|  -45.7% |   -63 | 99.3% → 100.0% | 138 → 75 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`    |
| removed |    -1 |    0.7% → 0.0% |    1 → 0 | `<clinit>()`                                                                                       | `org.jetbrains.kotlin.cli.common.CompilerSystemProperties` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

| Change | Delta |      % |  Samples | Callee                          | Location                                                |
| -----: | ----: | -----: | -------: | ------------------------------- | ------------------------------------------------------- |
| -46.0% |   -64 | 100.0% | 139 → 75 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change | Delta |      % |  Samples | Callee           | Location                                               |
| -----: | ----: | -----: | -------: | ---------------- | ------------------------------------------------------ |
| -46.0% |   -64 | 100.0% | 139 → 75 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |             % |  Samples | Callee                                                          | Location                                      |
| -----: | ----: | ------------: | -------: | --------------------------------------------------------------- | --------------------------------------------- |
| -47.7% |   -63 | 97.8% → 97.2% | 132 → 69 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |
| -33.3% |    -1 |   2.2% → 2.8% |    3 → 2 | `<clinit>()`                                                    | `org.jetbrains.kotlin.cli.common.ArgumentsKt` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|  Change | Delta |             % |  Samples | Callee                                                 | Location                                                |
| ------: | ----: | ------------: | -------: | ------------------------------------------------------ | ------------------------------------------------------- |
|  -47.4% |   -65 | 99.3% → 96.0% | 137 → 72 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| +200.0% |    +2 |   0.7% → 4.0% |    1 → 3 | `defaultMessageRenderer()`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|  Change | Delta |             % |  Samples | Callee                                                                          | Location                                                                    |
| ------: | ----: | ------------: | -------: | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
|  -48.1% |   -63 | 99.2% → 98.6% | 131 → 68 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`            | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                        |
| removed |    -1 |   0.8% → 0.0% |    1 → 0 | `createCompoundPhase(CommonCompilerArguments)`                                  | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmCliPipeline`                      |
|     new |    +1 |   0.0% → 1.4% |    0 → 1 | `reportToMessageCollector(BaseDiagnosticsCollector, MessageCollector, boolean)` | `org.jetbrains.kotlin.cli.common.fir.FirDiagnosticsCompilerResultsReporter` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change | Delta |      % |  Samples | Callee                                         | Location                                                |
| -----: | ----: | -----: | -------: | ---------------------------------------------- | ------------------------------------------------------- |
| -47.7% |   -63 | 100.0% | 132 → 69 | `runPhasedPipeline(ArgumentsPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change | Delta |      % |  Samples | Callee                                                                                              | Location                                                |
| -----: | ----: | -----: | -------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| -47.7% |   -63 | 100.0% | 132 → 69 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change | Delta |      % |  Samples | Callee                                                                                                                                        | Location                                                |
| -----: | ----: | -----: | -------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| -47.7% |   -63 | 100.0% | 132 → 69 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change | Delta |      % |  Samples | Callee                                                         | Location                                                |
| -----: | ----: | -----: | -------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| -47.7% |   -63 | 100.0% | 132 → 69 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change | Delta |      % |  Samples | Callee                                                                | Location                                     |
| -----: | ----: | -----: | -------: | --------------------------------------------------------------------- | -------------------------------------------- |
| -47.7% |   -63 | 100.0% | 132 → 69 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |      % |  Samples | Callee                                                                 | Location                                     |
| -----: | ----: | -----: | -------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| -47.7% |   -63 | 100.0% | 132 → 69 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

| Change | Delta |             % | Samples | Callee                           | Location                                                              |
| -----: | ----: | ------------: | ------: | -------------------------------- | --------------------------------------------------------------------- |
| -47.1% |   -41 | 66.4% → 67.6% | 87 → 46 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`      |
| -53.1% |   -17 | 24.4% → 22.1% | 32 → 15 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`       |
| -40.0% |    -4 |   7.6% → 8.8% |  10 → 6 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`        |
| -50.0% |    -1 |          1.5% |   2 → 1 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmConfigurationPipelinePhase` |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

| Change | Delta |      % |  Samples | Callee                                         | Location                                          |
| -----: | ----: | -----: | -------: | ---------------------------------------------- | ------------------------------------------------- |
| -48.1% |   -63 | 100.0% | 131 → 68 | `phaseBody(PipelineContext, PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

| Change | Delta |           % |  Samples | Callee                                                               | Location                                                         |
| -----: | ----: | ----------: | -------: | -------------------------------------------------------------------- | ---------------------------------------------------------------- |
| -48.1% |   -63 |      100.0% | 131 → 68 | `phaseBody(LoggingContext, Object)`                                  | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
| -62.5% |    -5 | 6.1% → 4.4% |    8 → 3 | `phaseBody(LoggingContext, Object)`                                  | `org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase`   |
| -50.0% |    -1 |        1.5% |    2 → 1 | `phaseBody(LoggingContext, Object)`                                  | `org.jetbrains.kotlin.backend.common.phaser.ModuleLoweringPhase` |
|    new |    +1 | 0.0% → 1.5% |    0 → 1 | `runAfter(PhaseConfig, PhaserState, LoggingContext, Object, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`          |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in samples collected in their leaf frame.

|  Change | Delta |            % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `fwd_copy_again` (`libjvm.dylib`) ← `G1ParScanThreadState::trim_queue_to_threshold` ← `G1ScanHRForRegionClosure::scan_memregion` ← `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` ← `G1ScanHRForRegionClosure::scan_heap_roots` ← `G1ScanHRForRegionClosure::do_heap_region` ← `G1RemSet::scan_heap_roots` ← `G1EvacuateRegionsTask::scan_roots` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                  |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThreads::run_task` (`libjvm.dylib`) ← `G1YoungCollector::evacuate_initial_collection_set` ← `G1YoungCollector::collect` ← `G1CollectedHeap::do_collection_pause_at_safepoint_helper` ← `G1CollectedHeap::do_collection_pause_at_safepoint` ← `VM_G1CollectForAllocation::doit` ← `VM_Operation::evaluate` ← `VMThread::evaluate_operation` ← `VMThread::inner_execute` ← `VMThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                           |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` (`libjvm.dylib`) ← `G1ParScanThreadState::do_copy_to_survivor_space` ← `G1ParScanThreadState::trim_queue_to_threshold` ← `G1ParScanThreadState::steal_and_trim_queue` ← `G1ParEvacuateFollowersClosure::do_void` ← `G1EvacuateRegionsTask::evacuate_live_objects` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                     |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`) ← `G1ScanHRForRegionClosure::scan_memregion` ← `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` ← `G1ScanHRForRegionClosure::scan_heap_roots` ← `G1ScanHRForRegionClosure::do_heap_region` ← `G1RemSet::scan_heap_roots` ← `G1EvacuateRegionsTask::scan_roots` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                     |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `IndexSetIterator::advance_and_next` (`libjvm.dylib`) ← `PhaseChaitin::Simplify` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                        |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `PhaseIterGVN::add_users_to_worklist` (`libjvm.dylib`) ← `PhaseIterGVN::PhaseIterGVN` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`) ← `PhaseIdealLoop::build_loop_late` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                     |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `PhaseIterGVN::subsume_node` (`libjvm.dylib`) ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  +50.0% |    +1 | <0.1% → 0.1% |   2 → 3 | `IntervalWalker::walk_to` (`libjvm.dylib`) ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                     |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `GenericWaitBarrier::Cell::wait` (`libjvm.dylib`) ← `GenericWaitBarrier::wait` ← `SafepointSynchronize::block` ← `SafepointMechanism::process` ← `BufferBlob::create` ← `PhaseOutput::init_scratch_buffer_blob` ← `PhaseOutput::Output` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                  |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`) ← `G1ParScanThreadState::trim_queue_to_threshold` ← `G1ParScanThreadState::steal_and_trim_queue` ← `G1ParEvacuateFollowersClosure::do_void` ← `G1EvacuateRegionsTask::evacuate_live_objects` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                    |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `G1ScanHRForRegionClosure::scan_heap_roots` (`libjvm.dylib`) ← `G1ScanHRForRegionClosure::do_heap_region` ← `G1RemSet::scan_heap_roots` ← `G1EvacuateRegionsTask::scan_roots` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`) ← `G1ScanHRForRegionClosure::scan_memregion` ← `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` ← `G1ScanHRForRegionClosure::scan_heap_roots` ← `G1ScanHRForRegionClosure::do_heap_region` ← `G1RemSet::scan_heap_roots` ← `G1EvacuateRegionsTask::scan_roots` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                   |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `__psynch_mutexwait` (`libsystem_kernel.dylib`) ← `_pthread_mutex_firstfit_lock_slow` (`libsystem_pthread.dylib`) ← `Mutex::lock_without_safepoint_check` (`libjvm.dylib`) ← `TaskTerminator::offer_termination` ← `G1ParEvacuateFollowersClosure::offer_termination` ← `G1ParEvacuateFollowersClosure::do_void` ← `G1EvacuateRegionsTask::evacuate_live_objects` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                  |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `VMThread::wait_until_executed` ← `VMThread::execute` ← `G1ConcurrentMarkThread::phase_mark_loop` ← `G1ConcurrentMarkThread::concurrent_mark_cycle_do` ← `G1ConcurrentMarkThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                               |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `RelocIterator::set_limits` (`libjvm.dylib`) ← `trampoline_stub_Relocation::get_trampoline_for` ← `NativeCall::set_destination_mt_safe` ← `CompiledIC::internal_set_ic_destination` ← `CompiledIC::set_to_clean` ← `CompiledMethod::clear_ic_callsites` ← `nmethod::unlink` ← `CodeCacheUnloadingTask::work` ← `G1ParallelCleaningTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                          |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `os::create_thread` ← `JavaThread::JavaThread` ← `JvmtiAgentThread::JvmtiAgentThread` ← `JvmtiEnv::RunAgentThread` ← `jvmti_RunAgentThread` ← `Profiler::startTimer` (`libasyncProfiler.dylib`) ← `Profiler::start` ← `Profiler::runInternal` ← `Profiler::run` ← `VM::VMInit` ← `JvmtiExport::post_vm_initialized` (`libjvm.dylib`) ← `Threads::create_vm` ← `JNI_CreateJavaVM` ← `JavaMain` (`libjli.dylib`) ← `ThreadJavaMain` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                     |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `fstat64` (`libsystem_kernel.dylib`) ← `Java_java_io_FileInputStream_available0` (`libjava.dylib`) ← `available0()` (`java.io.FileInputStream`) ← `available()` ← `implRead(byte[], int, int)` (`java.io.BufferedInputStream`) ← `read(byte[], int, int)` ← `read(byte[], int, int)` (`java.io.FilterInputStream`) ← `read(byte[], int, int)` (`java.io.PushbackInputStream`) ← `fill()` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `updateBytesCRC32` ← `updateBytes(int, byte[], int, int)` (`java.util.zip.CRC32`) ← `update(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                            |

### Improvements

Call stacks with the largest decrease in samples collected in their leaf frame.

|  Change | Delta |             % |     Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------: | ----: | ------------: | ----------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -47.2% |  -779 | 32.5% → 32.0% | 1,650 → 871 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThread::run` (`libjvm.dylib`) ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  -37.0% |  -104 |   5.5% → 6.5% |   281 → 177 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                      |
|  -46.2% |   -80 |          3.4% |    173 → 93 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`) ← `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `await(long)` (`java.lang.ref.ReferenceQueue`) ← `remove0(long)` ← `remove(long)` ← `run()` (`jdk.internal.ref.CleanerImpl`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()` ← `run()` (`jdk.internal.misc.InnocuousThread`)                                                                                                  |
|  -46.0% |   -80 |   3.4% → 3.5% |    174 → 94 | `mach_msg2_trap` (`libsystem_kernel.dylib`) ← `mach_msg_overwrite` ← `mach_msg` ← `__CFRunLoopServiceMachPort` (`CoreFoundation`) ← `__CFRunLoopRun` ← `CFRunLoopRunSpecific` ← `CreateExecutionEnvironment` (`libjli.dylib`) ← `JLI_Launch` ← `main` (`java`) ← `unknown`                                                                                                                                                                                                                                                                                                                                                                                                  |
|  -46.0% |   -80 |   3.4% → 3.5% |    174 → 94 | `__ulock_wait` (`libsystem_kernel.dylib`) ← `CallJavaMainInNewThread` (`libjli.dylib`) ← `ContinueInNewThread` ← `JLI_Launch` ← `main` (`java`) ← `apple_main` (`libjli.dylib`) ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -46.0% |   -80 |   3.4% → 3.5% |    174 → 94 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `WatcherThread::sleep` ← `WatcherThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                              |
|  -46.0% |   -80 |   3.4% → 3.5% |    174 → 94 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `MonitorDeflationThread::monitor_deflation_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                 |
|  -46.0% |   -80 |   3.4% → 3.5% |    174 → 94 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformEvent::park` (`libjvm.dylib`) ← `ObjectMonitor::wait` ← `ObjectSynchronizer::wait` ← `JVM_MonitorWait` ← `wait0(long)` (`java.lang.Object`) ← `wait(long)` ← `wait()` ← `await()` (`java.lang.ref.NativeReferenceQueue`) ← `remove0()` (`java.lang.ref.ReferenceQueue`) ← `remove()` (`java.lang.ref.NativeReferenceQueue`) ← `run()` (`java.lang.ref.Finalizer$FinalizerThread`)                                                                                                                                                                                                                                   |
|  -46.0% |   -80 |   3.4% → 3.5% |    174 → 94 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `os::signal_wait` (`libjvm.dylib`) ← `signal_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                |
|  -46.0% |   -80 |   3.4% → 3.5% |    174 → 94 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ServiceThread::wait_for_task` ← `G1ServiceThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                              |
|  -46.2% |   -80 |          3.4% |    173 → 93 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` ← `G1ConcurrentRefineThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                        |
|  -46.0% |   -80 |   3.4% → 3.5% |    174 → 94 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `JVM_WaitForReferencePendingList` ← `waitForReferencePendingList()` (`java.lang.ref.Reference`) ← `processPendingReferences()` ← `run()` (`java.lang.ref.Reference$ReferenceHandler`)                                                                                                                                                                                                                                                                                                                                                                           |
|  -46.2% |   -80 |          3.4% |    173 → 93 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Profiler::timerLoop` (`libasyncProfiler.dylib`) ← `JvmtiAgentThread::start_function_wrapper` (`libjvm.dylib`) ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                |
|  -46.2% |   -80 |          3.4% |    173 → 93 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `NotificationThread::notification_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                          |
|  -45.7% |   -79 |   3.4% → 3.5% |    173 → 94 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `ServiceThread::service_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                    |
|  -46.7% |   -79 |          3.3% |    169 → 90 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `VMThread::wait_for_operation` ← `VMThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                           |
|  -45.0% |   -76 |   3.3% → 3.4% |    169 → 93 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ConcurrentMarkThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                          |
| removed |    -7 |   0.1% → 0.0% |       7 → 0 | `Arena::contains` (`libjvm.dylib`) ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                      |
|  -85.7% |    -6 |  0.1% → <0.1% |       7 → 1 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                    |
|  -46.2% |    -6 |          0.3% |      13 → 7 | `inflate_fast` (`libzip.dylib`) ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |

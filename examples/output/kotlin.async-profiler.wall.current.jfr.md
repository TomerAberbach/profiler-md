# Sampling profile

Collected 2,835 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Native           | 94.2% |   2,670 |
| Compiler         |  4.3% |     123 |
| Ours             |  1.1% |      31 |
| Standard library |  0.3% |       9 |
| JIT              |  0.1% |       2 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 2,349 samples (82.9%) thread_start at libsystem_pthread.dylib
│   └── 2,349 samples (82.9%) _pthread_start
│       ├── 2,250 samples (79.4%) thread_native_entry at libjvm.dylib
│       │   └── 2,250 samples (79.4%) Thread::call_run
│       │       ├── 930 samples (32.8%) WorkerThread::run
│       │       │   └── 920 samples (32.5%, self 36.2% globally) semaphore_wait_trap at libsystem_kernel.dylib
│       │       ├── 830 samples (29.3%) JavaThread::thread_main_inner
│       │       │   ├── 341 samples (12.0%) CompileBroker::compiler_thread_loop
│       │       │   │   ├── … 177 samples (6.2%) PlatformMonitor::wait at libjvm.dylib
│       │       │   │   │   ├── 173 samples (6.1%, self 47.4% globally) __psynch_cvwait at libsystem_kernel.dylib
│       │       │   │   │   └── … 4 samples (0.1%) __psynch_mutexwait at libsystem_kernel.dylib
│       │       │   │   └── 163 samples (5.7%) CompileBroker::invoke_compiler_on_method
│       │       │   │       ├── 112 samples (4.0%) C2Compiler::compile_method
│       │       │   │       │   └── 112 samples (4.0%) Compile::Compile
│       │       │   │       │       ├── 59 samples (2.1%) Compile::Code_Gen
│       │       │   │       │       │   ├── 36 samples (1.3%) PhaseChaitin::Register_Allocate
│       │       │   │       │       │   │   ├── 6 samples (0.2%) PhaseChaitin::post_allocate_copy_removal
│       │       │   │       │       │   │   │   └── 5 samples (0.2%) PhaseChaitin::elide_copy
│       │       │   │       │       │   │   ├── 4 samples (0.1%) PhaseLive::compute
│       │       │   │       │       │   │   ├── 4 samples (0.1%) PhaseAggressiveCoalesce::insert_copies
│       │       │   │       │       │   │   └── 22 samples (0.8%) 9 more callees, led by (0.2%) PhaseChaitin::build_ifg_physical
│       │       │   │       │       │   └── 23 samples (0.8%) 6 more callees, led by (0.3%) Matcher::match
│       │       │   │       │       └── 39 samples (1.4%) Compile::Optimize
│       │       │   │       │           ├── … 6 samples (0.2%) PhaseIdealLoop::build_loop_late at libjvm.dylib
│       │       │   │       │           └── 28 samples (1.0%) 7 more callees, led by (0.4%) Compile::optimize_loops
│       │       │   │       └── … 46 samples (1.6%) Compilation::compile_java_method at libjvm.dylib
│       │       │   │           ├── … 7 samples (0.2%) LinearScanWalker::activate_current at libjvm.dylib
│       │       │   │           │   └── 6 samples (0.2%) LinearScanWalker::alloc_free_reg
│       │       │   │           └── … 2 samples (0.1%) DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)> at libjvm.dylib
│       │       │   └── 489 samples (17.2%) 5 more callees, led by (3.5%) MonitorDeflationThread::monitor_deflation_thread_entry
│       │       ├── 294 samples (10.4%) ConcurrentGCThread::run
│       │       │   └── 294 samples (10.4%) 3 more callees, led by (3.5%) G1ServiceThread::run_service
│       │       └── 196 samples (6.9%) 2 more callees, led by (3.5%) WatcherThread::run
│       └── … 98 samples (3.5%) __ulock_wait at libsystem_kernel.dylib
├── … 98 samples (3.5%) mach_msg2_trap at libsystem_kernel.dylib
├── 95 samples (3.4%) main(String[]) at org.jetbrains.kotlin.preloading.Preloader
│   └── 95 samples (3.4%) run(String[])
│       ├── 80 samples (2.8%) invoke(Object, Object[]) at java.lang.reflect.Method …
│       └── … 10 samples (0.4%) inflate_fast at libzip.dylib
└── 293 samples (10.3%) 3 more root frames, led by (3.5%) run() at java.lang.ref.Finalizer$FinalizerThread
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|     % | Samples | Function                                                                                                                                                 | Location                   |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 47.4% |   1,345 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 36.2% |   1,026 | `semaphore_wait_trap`                                                                                                                                    | `libsystem_kernel.dylib`   |
|  3.5% |      98 | `mach_msg2_trap`                                                                                                                                         | `libsystem_kernel.dylib`   |
|  3.5% |      98 | `__ulock_wait`                                                                                                                                           | `libsystem_kernel.dylib`   |
|  0.4% |      12 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
|  0.4% |      10 | `inflate_fast`                                                                                                                                           | `libzip.dylib`             |
|  0.2% |       6 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
|  0.2% |       5 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`             |
|  0.2% |       5 | `IndexSetIterator::advance_and_next`                                                                                                                     | `libjvm.dylib`             |
|  0.2% |       5 | `PhaseChaitin::elide_copy`                                                                                                                               | `libjvm.dylib`             |
|  0.1% |       3 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
|  0.1% |       3 | `PhaseLive::compute`                                                                                                                                     | `libjvm.dylib`             |
|  0.1% |       3 | `PhaseIdealLoop::build_loop_late`                                                                                                                        | `libjvm.dylib`             |
|  0.1% |       3 | `PhaseAggressiveCoalesce::insert_copies`                                                                                                                 | `libjvm.dylib`             |
|  0.1% |       3 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
|  0.1% |       3 | `LinearScanWalker::alloc_free_reg`                                                                                                                       | `libjvm.dylib`             |
|  0.1% |       3 | `IntervalWalker::walk_to`                                                                                                                                | `libjvm.dylib`             |
|  0.1% |       3 | `PhaseChaitin::Split`                                                                                                                                    | `libjvm.dylib`             |
|  0.1% |       2 | `fwd_copy_again`                                                                                                                                         | `libjvm.dylib`             |
|  0.1% |       2 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                                                          | `libjvm.dylib`             |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Native

|     % | Samples | Function                                                                                                                                                 | Location                   |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 47.4% |   1,345 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 36.2% |   1,026 | `semaphore_wait_trap`                                                                                                                                    | `libsystem_kernel.dylib`   |
|  3.5% |      98 | `mach_msg2_trap`                                                                                                                                         | `libsystem_kernel.dylib`   |
|  3.5% |      98 | `__ulock_wait`                                                                                                                                           | `libsystem_kernel.dylib`   |
|  0.4% |      12 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
|  0.4% |      10 | `inflate_fast`                                                                                                                                           | `libzip.dylib`             |
|  0.2% |       6 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
|  0.2% |       5 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`             |
|  0.1% |       3 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
|  0.1% |       3 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
|  0.1% |       2 | `fwd_copy_again`                                                                                                                                         | `libjvm.dylib`             |
|  0.1% |       2 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                                                          | `libjvm.dylib`             |
|  0.1% |       2 | `inflate`                                                                                                                                                | `libzip.dylib`             |
|  0.1% |       2 | `SymbolTable::lookup_only`                                                                                                                               | `libjvm.dylib`             |
|  0.1% |       2 | `ClassVerifier::verify_method`                                                                                                                           | `libjvm.dylib`             |
|  0.1% |       2 | `ClassFileParser::skip_over_field_signature`                                                                                                             | `libjvm.dylib`             |
|  0.1% |       2 | `__psynch_cvbroad`                                                                                                                                       | `libsystem_kernel.dylib`   |
|  0.1% |       2 | `CodeCache::make_marked_nmethods_deoptimized`                                                                                                            | `libjvm.dylib`             |
|  0.1% |       2 | `sys_icache_invalidate`                                                                                                                                  | `libsystem_platform.dylib` |
|  0.1% |       2 | `Dict::doubhash`                                                                                                                                         | `libjvm.dylib`             |

##### Compiler

|     % | Samples | Function                                                           | Location       |
| ----: | ------: | ------------------------------------------------------------------ | -------------- |
|  0.2% |       5 | `IndexSetIterator::advance_and_next`                               | `libjvm.dylib` |
|  0.2% |       5 | `PhaseChaitin::elide_copy`                                         | `libjvm.dylib` |
|  0.1% |       3 | `PhaseLive::compute`                                               | `libjvm.dylib` |
|  0.1% |       3 | `PhaseIdealLoop::build_loop_late`                                  | `libjvm.dylib` |
|  0.1% |       3 | `PhaseAggressiveCoalesce::insert_copies`                           | `libjvm.dylib` |
|  0.1% |       3 | `LinearScanWalker::alloc_free_reg`                                 | `libjvm.dylib` |
|  0.1% |       3 | `IntervalWalker::walk_to`                                          | `libjvm.dylib` |
|  0.1% |       3 | `PhaseChaitin::Split`                                              | `libjvm.dylib` |
|  0.1% |       2 | `PhaseChaitin::build_ifg_physical`                                 | `libjvm.dylib` |
|  0.1% |       2 | `Matcher::xform`                                                   | `libjvm.dylib` |
|  0.1% |       2 | `PhaseIterGVN::optimize`                                           | `libjvm.dylib` |
|  0.1% |       2 | `PhaseCFG::partial_latency_of_defs`                                | `libjvm.dylib` |
|  0.1% |       2 | `LIRGenerator::state_for`                                          | `libjvm.dylib` |
|  0.1% |       2 | `ValueStack::values_do`                                            | `libjvm.dylib` |
|  0.1% |       2 | `RegMask::is_UP`                                                   | `libjvm.dylib` |
| <0.1% |       1 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` | `libjvm.dylib` |
| <0.1% |       1 | `PhaseLive::add_liveout`                                           | `libjvm.dylib` |
| <0.1% |       1 | `PhaseChaitin::gather_lrg_masks`                                   | `libjvm.dylib` |
| <0.1% |       1 | `TypeInstPtr::add_offset`                                          | `libjvm.dylib` |
| <0.1% |       1 | `IfNode::dominated_by`                                             | `libjvm.dylib` |

##### Ours

|     % | Samples | Function                                                                                                                    | Location                                                                                                |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| <0.1% |       1 | `resolveType(FirTypeRef, TypeResolutionConfiguration, boolean, boolean, boolean, SupertypeSupplier, boolean)`               | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl`                                   |
| <0.1% |       1 | `transform(FirTransformer, Object)`                                                                                         | `org.jetbrains.kotlin.fir.declarations.FirNamedFunction`                                                |
| <0.1% |       1 | `topLevelFunctionNameIndex_delegate$lambda$0(PackagePartsCacheData)`                                                        | `org.jetbrains.kotlin.fir.deserialization.PackagePartsCacheData`                                        |
| <0.1% |       1 | `compareTo(TowerGroup)`                                                                                                     | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerGroup`                                               |
| <0.1% |       1 | `isExcluded(FirResolvedImport, Name)`                                                                                       | `org.jetbrains.kotlin.fir.scopes.impl.FirAbstractStarImportingScope`                                    |
| <0.1% |       1 | `processConstraintsIgnoringForksData(ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`                            |
| <0.1% |       1 | `<init>(ClassId)`                                                                                                           | `org.jetbrains.kotlin.fir.symbols.impl.ConeClassLikeLookupTagImpl`                                      |
| <0.1% |       1 | `getBoundsNullability(TypeParameterMarker)`                                                                                 | `org.jetbrains.kotlin.load.java.typeEnhancement.AbstractSignatureParts`                                 |
| <0.1% |       1 | `getSession()`                                                                                                              | `org.jetbrains.kotlin.fir.resolve.calls.candidate.CallInfo`                                             |
| <0.1% |       1 | `<init>(ControlFlowGraph, int, DefaultConstructorMarker)`                                                                   | `org.jetbrains.kotlin.fir.resolve.dfa.cfg.CFGNode`                                                      |
| <0.1% |       1 | `getLanguageSettingsComponent(FirSession)`                                                                                  | `org.jetbrains.kotlin.fir.FirLanguageSettingsComponentKt`                                               |
| <0.1% |       1 | `simplifyEqualityConstraints(SmartList)`                                                                                    | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableVariableWithConstraints`                     |
| <0.1% |       1 | `supertypes(TypeConstructorMarker)`                                                                                         | `org.jetbrains.kotlin.types.AbstractTypeApproximator`                                                   |
| <0.1% |       1 | `getFirstClassifierOrNull(FirScope, CallInfo, ConstructorFilter, FirSession, BodyResolveComponents)`                        | `org.jetbrains.kotlin.fir.resolve.calls.ConstructorProcessingKt`                                        |
| <0.1% |       1 | `visitBlock(FirBlock, Object)`                                                                                              | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirUnusedCheckerBase$UsageVisitorBase`          |
| <0.1% |       1 | `getCallableId()`                                                                                                           | `org.jetbrains.kotlin.fir.symbols.impl.FirFunctionSymbol`                                               |
| <0.1% |       1 | `check(CheckerContext, DiagnosticReporter, FirDeclaration)`                                                                 | `org.jetbrains.kotlin.fir.analysis.jvm.checkers.declaration.FirJvmInvalidAndDangerousCharactersChecker` |
| <0.1% |       1 | `visitBlock(FirBlock, FirUnusedCheckerBase$UsageState)`                                                                     | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirUnusedCheckerBase$UsageVisitorBase`          |
| <0.1% |       1 | `isEnabled(CheckerContext)`                                                                                                 | `org.jetbrains.kotlin.fir.analysis.checkers.extra.FirUnusedExpressionChecker`                           |
| <0.1% |       1 | `fullyExpandedType(SessionHolder, ConeKotlinType)`                                                                          | `org.jetbrains.kotlin.fir.resolve.TypeExpansionUtilsKt`                                                 |

#### Lines

Lines with the largest contribution to each function's self samples.

##### `resolveType(FirTypeRef, TypeResolutionConfiguration, boolean, boolean, boolean, SupertypeSupplier, boolean)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl`)

|      % | Samples | Location                                                                  |
| -----: | ------: | ------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl:534` |

##### `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirNamedFunction`)

|      % | Samples | Location                                                    |
| -----: | ------: | ----------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.declarations.FirNamedFunction:75` |

##### `topLevelFunctionNameIndex_delegate$lambda$0(PackagePartsCacheData)` (`org.jetbrains.kotlin.fir.deserialization.PackagePartsCacheData`)

|      % | Samples | Location                                                            |
| -----: | ------: | ------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.deserialization.PackagePartsCacheData:53` |

##### `compareTo(TowerGroup)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerGroup`)

|      % | Samples | Location                                                      |
| -----: | ------: | ------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerGroup:302` |

##### `isExcluded(FirResolvedImport, Name)` (`org.jetbrains.kotlin.fir.scopes.impl.FirAbstractStarImportingScope`)

|      % | Samples | Location                                                                |
| -----: | ------: | ----------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.scopes.impl.FirAbstractStarImportingScope:32` |

##### `processConstraintsIgnoringForksData(ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector)` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`)

|      % | Samples | Location                                                                         |
| -----: | ------: | -------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector:173` |

##### `<init>(ClassId)` (`org.jetbrains.kotlin.fir.symbols.impl.ConeClassLikeLookupTagImpl`)

|      % | Samples | Location                                                              |
| -----: | ------: | --------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.symbols.impl.ConeClassLikeLookupTagImpl:17` |

##### `getBoundsNullability(TypeParameterMarker)` (`org.jetbrains.kotlin.load.java.typeEnhancement.AbstractSignatureParts`)

|      % | Samples | Location                                                                    |
| -----: | ------: | --------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.load.java.typeEnhancement.AbstractSignatureParts:315` |

##### `getSession()` (`org.jetbrains.kotlin.fir.resolve.calls.candidate.CallInfo`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.resolve.calls.candidate.CallInfo:47` |

##### `getLanguageSettingsComponent(FirSession)` (`org.jetbrains.kotlin.fir.FirLanguageSettingsComponentKt`)

|      % | Samples | Location                                                     |
| -----: | ------: | ------------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.FirLanguageSettingsComponentKt:16` |

##### `simplifyEqualityConstraints(SmartList)` (`org.jetbrains.kotlin.resolve.calls.inference.model.MutableVariableWithConstraints`)

|      % | Samples | Location                                                                                |
| -----: | ------: | --------------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableVariableWithConstraints:431` |

##### `getFirstClassifierOrNull(FirScope, CallInfo, ConstructorFilter, FirSession, BodyResolveComponents)` (`org.jetbrains.kotlin.fir.resolve.calls.ConstructorProcessingKt`)

|      % | Samples | Location                                                            |
| -----: | ------: | ------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.resolve.calls.ConstructorProcessingKt:89` |

##### `visitBlock(FirBlock, Object)` (`org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirUnusedCheckerBase$UsageVisitorBase`)

|      % | Samples | Location                                                                                          |
| -----: | ------: | ------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirUnusedCheckerBase$UsageVisitorBase:66` |

##### `getCallableId()` (`org.jetbrains.kotlin.fir.symbols.impl.FirFunctionSymbol`)

|      % | Samples | Location                                                     |
| -----: | ------: | ------------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.symbols.impl.FirFunctionSymbol:30` |

##### `check(CheckerContext, DiagnosticReporter, FirDeclaration)` (`org.jetbrains.kotlin.fir.analysis.jvm.checkers.declaration.FirJvmInvalidAndDangerousCharactersChecker`)

|      % | Samples | Location                                                                                                   |
| -----: | ------: | ---------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.analysis.jvm.checkers.declaration.FirJvmInvalidAndDangerousCharactersChecker:25` |

##### `visitBlock(FirBlock, FirUnusedCheckerBase$UsageState)` (`org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirUnusedCheckerBase$UsageVisitorBase`)

|      % | Samples | Location                                                                                           |
| -----: | ------: | -------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirUnusedCheckerBase$UsageVisitorBase:124` |

##### `isEnabled(CheckerContext)` (`org.jetbrains.kotlin.fir.analysis.checkers.extra.FirUnusedExpressionChecker`)

|      % | Samples | Location                                                                         |
| -----: | ------: | -------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.analysis.checkers.extra.FirUnusedExpressionChecker:19` |

##### `fullyExpandedType(SessionHolder, ConeKotlinType)` (`org.jetbrains.kotlin.fir.resolve.TypeExpansionUtilsKt`)

|      % | Samples | Location                                                   |
| -----: | ------: | ---------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.resolve.TypeExpansionUtilsKt:98` |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location                 |
| ----: | ------: | ----------------------- | ------------------------ |
| 78.2% |   1,052 | `PlatformMonitor::wait` | `libjvm.dylib`           |
|  7.3% |      98 | `PlatformEvent::park`   | `libjvm.dylib`           |
|  7.3% |      98 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |
|  7.2% |      97 | `Parker::park`          | `libjvm.dylib`           |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 89.7% |     920 | `WorkerThread::run`              | `libjvm.dylib` |
|  9.6% |      98 | `os::signal_wait`                | `libjvm.dylib` |
|  0.5% |       5 | `WorkerThreads::run_task`        | `libjvm.dylib` |
|  0.3% |       3 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |

##### `mach_msg2_trap` (`libsystem_kernel.dylib`)

|      % | Samples | Caller               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% |      98 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `__ulock_wait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |      98 | `CallJavaMainInNewThread` | `libjli.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |      12 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `inflate_fast` (`libzip.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |      10 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

|     % | Samples | Caller                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 83.3% |       5 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
| 16.7% |       1 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |

##### `SymbolTable::do_lookup` (`libjvm.dylib`)

|     % | Samples | Caller                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 60.0% |       3 | `SymbolTable::lookup_only`                     | `libjvm.dylib` |
| 20.0% |       1 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |
| 20.0% |       1 | `SymbolTable::new_symbol`                      | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|     % | Samples | Caller                                                             | Location       |
| ----: | ------: | ------------------------------------------------------------------ | -------------- |
| 20.0% |       1 | `PhaseIFG::re_insert`                                              | `libjvm.dylib` |
| 20.0% |       1 | `PhaseIFG::SquareUp`                                               | `libjvm.dylib` |
| 20.0% |       1 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` | `libjvm.dylib` |
| 20.0% |       1 | `PhaseChaitin::Simplify`                                           | `libjvm.dylib` |
| 20.0% |       1 | `PhaseIFG::remove_node`                                            | `libjvm.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       5 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 66.7% |       2 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |
| 33.3% |       1 | `InstanceKlass::find_method`            | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       3 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       3 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       3 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|     % | Samples | Caller                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 33.3% |       1 | `ciEnv::ciEnv`                | `libjvm.dylib` |
| 33.3% |       1 | `Compilation::compile_method` | `libjvm.dylib` |
| 33.3% |       1 | `MarkBitMap::do_clear`        | `libjvm.dylib` |

##### `LinearScanWalker::alloc_free_reg` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       3 | `LinearScanWalker::activate_current` | `libjvm.dylib` |

##### `IntervalWalker::walk_to` (`libjvm.dylib`)

|     % | Samples | Caller                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 66.7% |       2 | `IntervalWalker::walk_to`     | `libjvm.dylib` |
| 33.3% |       1 | `LinearScan::compute_oop_map` | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       3 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `fwd_copy_again` (`libjvm.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |       2 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`)

|     % | Samples | Caller                                                              | Location       |
| ----: | ------: | ------------------------------------------------------------------- | -------------- |
| 50.0% |       1 | `G1ScanHRForRegionClosure::scan_memregion`                          | `libjvm.dylib` |
| 50.0% |       1 | `void G1ParCopyClosure<(G1Barrier)0, false>::do_oop_work<oopDesc*>` | `libjvm.dylib` |

##### `inflate` (`libzip.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |       2 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `SymbolTable::lookup_only` (`libjvm.dylib`)

|      % | Samples | Caller                                         | Location       |
| -----: | ------: | ---------------------------------------------- | -------------- |
| 100.0% |       2 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |

##### `ClassVerifier::verify_method` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |       2 | `ClassVerifier::verify_class` | `libjvm.dylib` |

##### `ClassFileParser::skip_over_field_signature` (`libjvm.dylib`)

|      % | Samples | Caller                                       | Location       |
| -----: | ------: | -------------------------------------------- | -------------- |
| 100.0% |       2 | `ClassFileParser::parse_localvariable_table` | `libjvm.dylib` |

##### `__psynch_cvbroad` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       2 | `CompileBroker::create_compile_task` | `libjvm.dylib` |

##### `CodeCache::make_marked_nmethods_deoptimized` (`libjvm.dylib`)

|      % | Samples | Caller                                  | Location       |
| -----: | ------: | --------------------------------------- | -------------- |
| 100.0% |       2 | `Deoptimization::deoptimize_all_marked` | `libjvm.dylib` |

##### `sys_icache_invalidate` (`libsystem_platform.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 50.0% |       1 | `CompiledIC::set_to_monomorphic` | `libjvm.dylib` |
| 50.0% |       1 | `ICStub::finalize`               | `libjvm.dylib` |

##### `Dict::doubhash` (`libjvm.dylib`)

|      % | Samples | Caller         | Location       |
| -----: | ------: | -------------- | -------------- |
| 100.0% |       2 | `Dict::Insert` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       2 | `Matcher::match` | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 50.0% |       1 | `Compile::Optimize`                    | `libjvm.dylib` |
| 50.0% |       1 | `PhaseMacroExpand::expand_macro_nodes` | `libjvm.dylib` |

##### `PhaseCFG::partial_latency_of_defs` (`libjvm.dylib`)

|      % | Samples | Caller                         | Location       |
| -----: | ------: | ------------------------------ | -------------- |
| 100.0% |       2 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `LIRGenerator::state_for` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |       2 | `LIRGenerator::do_ProfileInvoke` | `libjvm.dylib` |

##### `ValueStack::values_do` (`libjvm.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 50.0% |       1 | `UseCountComputer::block_do`     | `libjvm.dylib` |
| 50.0% |       1 | `SubstitutionResolver::block_do` | `libjvm.dylib` |

##### `RegMask::is_UP` (`libjvm.dylib`)

|     % | Samples | Caller                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 50.0% |       1 | `PhaseChaitin::raise_pressure`     | `libjvm.dylib` |
| 50.0% |       1 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |

##### `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |       1 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |

##### `PhaseLive::add_liveout` (`libjvm.dylib`)

|      % | Samples | Caller               | Location       |
| -----: | ------: | -------------------- | -------------- |
| 100.0% |       1 | `PhaseLive::compute` | `libjvm.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `TypeInstPtr::add_offset` (`libjvm.dylib`)

|      % | Samples | Caller                                        | Location       |
| -----: | ------: | --------------------------------------------- | -------------- |
| 100.0% |       1 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `libjvm.dylib` |

##### `IfNode::dominated_by` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |       1 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |

##### `resolveType(FirTypeRef, TypeResolutionConfiguration, boolean, boolean, boolean, SupertypeSupplier, boolean)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl`)

|      % | Samples | Caller                                                                                              | Location                                                                           |
| -----: | ------: | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| 100.0% |       1 | `resolveType(FirSpecificTypeResolverTransformer, FirTypeRef, TypeResolutionConfiguration, boolean)` | `org.jetbrains.kotlin.fir.resolve.transformers.FirSpecificTypeResolverTransformer` |

##### `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirNamedFunction`)

|      % | Samples | Caller                                           | Location                                                 |
| -----: | ------: | ------------------------------------------------ | -------------------------------------------------------- |
| 100.0% |       1 | `transformInplace(List, FirTransformer, Object)` | `org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt` |

##### `topLevelFunctionNameIndex_delegate$lambda$0(PackagePartsCacheData)` (`org.jetbrains.kotlin.fir.deserialization.PackagePartsCacheData`)

|      % | Samples | Caller     | Location                                                                                    |
| -----: | ------: | ---------- | ------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.deserialization.PackagePartsCacheData$$Lambda.0x00000070015d9598` |

##### `compareTo(TowerGroup)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerGroup`)

|      % | Samples | Caller                                                 | Location                                                                                 |
| -----: | ------: | ------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| 100.0% |       1 | `compareTo(TowerResolveManager$SuspendedResolverTask)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager$SuspendedResolverTask` |

##### `isExcluded(FirResolvedImport, Name)` (`org.jetbrains.kotlin.fir.scopes.impl.FirAbstractStarImportingScope`)

|      % | Samples | Caller                                     | Location                                                                       |
| -----: | ------: | ------------------------------------------ | ------------------------------------------------------------------------------ |
| 100.0% |       1 | `processPropertiesByName(Name, Function1)` | `org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope` |

##### `processConstraintsIgnoringForksData(ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector)` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`)

|      % | Samples | Caller                                                                                                     | Location                                                                     |
| -----: | ------: | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 100.0% |       1 | `processConstraints(ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector` |

##### `<init>(ClassId)` (`org.jetbrains.kotlin.fir.symbols.impl.ConeClassLikeLookupTagImpl`)

|      % | Samples | Caller                 | Location                                                 |
| -----: | ------: | ---------------------- | -------------------------------------------------------- |
| 100.0% |       1 | `toLookupTag(ClassId)` | `org.jetbrains.kotlin.fir.types.TypeConstructionUtilsKt` |

##### `getBoundsNullability(TypeParameterMarker)` (`org.jetbrains.kotlin.load.java.typeEnhancement.AbstractSignatureParts`)

|      % | Samples | Caller                                                                                                     | Location                                                                |
| -----: | ------: | ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| 100.0% |       1 | `extractQualifiersFromAnnotations(AbstractSignatureParts$TypeAndDefaultQualifiers, JavaDefaultQualifiers)` | `org.jetbrains.kotlin.load.java.typeEnhancement.AbstractSignatureParts` |

##### `getSession()` (`org.jetbrains.kotlin.fir.resolve.calls.candidate.CallInfo`)

|      % | Samples | Caller                                                                                    | Location                                                   |
| -----: | ------: | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `isVisible(FirVisibilityChecker, FirMemberDeclaration, CallInfo, FirExpression, boolean)` | `org.jetbrains.kotlin.fir.resolve.calls.VisibilityUtilsKt` |

##### `<init>(ControlFlowGraph, int, DefaultConstructorMarker)` (`org.jetbrains.kotlin.fir.resolve.dfa.cfg.CFGNode`)

|      % | Samples | Caller                                           | Location                                                        |
| -----: | ------: | ------------------------------------------------ | --------------------------------------------------------------- |
| 100.0% |       1 | `<init>(ControlFlowGraph, FirFunctionCall, int)` | `org.jetbrains.kotlin.fir.resolve.dfa.cfg.FunctionCallExitNode` |

##### `getLanguageSettingsComponent(FirSession)` (`org.jetbrains.kotlin.fir.FirLanguageSettingsComponentKt`)

|      % | Samples | Caller                                   | Location                                                  |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------------- |
| 100.0% |       1 | `getLanguageVersionSettings(FirSession)` | `org.jetbrains.kotlin.fir.FirLanguageSettingsComponentKt` |

##### `simplifyEqualityConstraints(SmartList)` (`org.jetbrains.kotlin.resolve.calls.inference.model.MutableVariableWithConstraints`)

|      % | Samples | Caller                           | Location                                                                            |
| -----: | ------: | -------------------------------- | ----------------------------------------------------------------------------------- |
| 100.0% |       1 | `simplifyConstraints(SmartList)` | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableVariableWithConstraints` |

##### `supertypes(TypeConstructorMarker)` (`org.jetbrains.kotlin.types.AbstractTypeApproximator`)

|      % | Samples | Caller                                                                                                                       | Location                                              |
| -----: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| 100.0% |       1 | `doApproximateCapturedType(TypeApproximatorConfiguration, AbstractTypeApproximator$Cache, CapturedTypeMarker, boolean, int)` | `org.jetbrains.kotlin.types.AbstractTypeApproximator` |

##### `getFirstClassifierOrNull(FirScope, CallInfo, ConstructorFilter, FirSession, BodyResolveComponents)` (`org.jetbrains.kotlin.fir.resolve.calls.ConstructorProcessingKt`)

|      % | Samples | Caller                                                                                               | Location                                                         |
| -----: | ------: | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 100.0% |       1 | `processConstructorsByName(FirScope, CallInfo, BodyResolveComponents, ConstructorFilter, Function1)` | `org.jetbrains.kotlin.fir.resolve.calls.ConstructorProcessingKt` |

##### `visitBlock(FirBlock, Object)` (`org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirUnusedCheckerBase$UsageVisitorBase`)

|      % | Samples | Caller                       | Location                                        |
| -----: | ------: | ---------------------------- | ----------------------------------------------- |
| 100.0% |       1 | `accept(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.expressions.FirBlock` |

##### `getCallableId()` (`org.jetbrains.kotlin.fir.symbols.impl.FirFunctionSymbol`)

|      % | Samples | Caller                                                       | Location                                                                                |
| -----: | ------: | ------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| 100.0% |       1 | `check(CheckerContext, DiagnosticReporter, FirFunctionCall)` | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirTrimMarginBlankPrefixChecker` |

##### `check(CheckerContext, DiagnosticReporter, FirDeclaration)` (`org.jetbrains.kotlin.fir.analysis.jvm.checkers.declaration.FirJvmInvalidAndDangerousCharactersChecker`)

|      % | Samples | Caller                                                 | Location                                                                                        |
| -----: | ------: | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `visitTypeParameter(FirTypeParameter, CheckerContext)` | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.DeclarationCheckersDiagnosticComponent` |

##### `visitBlock(FirBlock, FirUnusedCheckerBase$UsageState)` (`org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirUnusedCheckerBase$UsageVisitorBase`)

|      % | Samples | Caller                         | Location                                                                                       |
| -----: | ------: | ------------------------------ | ---------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `visitBlock(FirBlock, Object)` | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirUnusedCheckerBase$UsageVisitorBase` |

##### `isEnabled(CheckerContext)` (`org.jetbrains.kotlin.fir.analysis.checkers.extra.FirUnusedExpressionChecker`)

|      % | Samples | Caller                                                      | Location                                                                      |
| -----: | ------: | ----------------------------------------------------------- | ----------------------------------------------------------------------------- |
| 100.0% |       1 | `check(CheckerContext, DiagnosticReporter, FirDeclaration)` | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirUnusedCheckerBase` |

##### `fullyExpandedType(SessionHolder, ConeKotlinType)` (`org.jetbrains.kotlin.fir.resolve.TypeExpansionUtilsKt`)

|      % | Samples | Caller                                                          | Location                                                                                          |
| -----: | ------: | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `check(CheckerContext, DiagnosticReporter, FirResolvedTypeRef)` | `org.jetbrains.kotlin.fir.analysis.checkers.type.FirMissingDependencyClassInTypeAliasTypeChecker` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                                   | Location                  |
| ----: | ------: | ------------------------------------------ | ------------------------- |
| 82.9% |   2,349 | `_pthread_start`                           | `libsystem_pthread.dylib` |
| 82.9% |   2,349 | `thread_start`                             | `libsystem_pthread.dylib` |
| 79.4% |   2,250 | `Thread::call_run`                         | `libjvm.dylib`            |
| 79.4% |   2,250 | `thread_native_entry`                      | `libjvm.dylib`            |
| 47.4% |   1,345 | `__psynch_cvwait`                          | `libsystem_kernel.dylib`  |
| 37.2% |   1,056 | `PlatformMonitor::wait`                    | `libjvm.dylib`            |
| 36.2% |   1,026 | `semaphore_wait_trap`                      | `libsystem_kernel.dylib`  |
| 32.8% |     930 | `WorkerThread::run`                        | `libjvm.dylib`            |
| 29.3% |     830 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
| 27.4% |     777 | `Monitor::wait_without_safepoint_check`    | `libjvm.dylib`            |
| 12.0% |     341 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
| 10.4% |     294 | `ConcurrentGCThread::run`                  | `libjvm.dylib`            |
|  9.8% |     279 | `Monitor::wait`                            | `libjvm.dylib`            |
|  6.9% |     196 | `JLI_Launch`                               | `libjli.dylib`            |
|  6.9% |     196 | `main`                                     | `java`                    |
|  6.3% |     178 | `CompileQueue::get`                        | `libjvm.dylib`            |
|  5.7% |     163 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  4.0% |     112 | `Compile::Compile`                         | `libjvm.dylib`            |
|  4.0% |     112 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
|  3.5% |      99 | `unknown`                                  | `<unknown>`               |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Native

|     % | Samples | Function                                                 | Location                  |
| ----: | ------: | -------------------------------------------------------- | ------------------------- |
| 82.9% |   2,349 | `_pthread_start`                                         | `libsystem_pthread.dylib` |
| 82.9% |   2,349 | `thread_start`                                           | `libsystem_pthread.dylib` |
| 79.4% |   2,250 | `Thread::call_run`                                       | `libjvm.dylib`            |
| 79.4% |   2,250 | `thread_native_entry`                                    | `libjvm.dylib`            |
| 47.4% |   1,345 | `__psynch_cvwait`                                        | `libsystem_kernel.dylib`  |
| 37.2% |   1,056 | `PlatformMonitor::wait`                                  | `libjvm.dylib`            |
| 36.2% |   1,026 | `semaphore_wait_trap`                                    | `libsystem_kernel.dylib`  |
| 32.8% |     930 | `WorkerThread::run`                                      | `libjvm.dylib`            |
| 29.3% |     830 | `JavaThread::thread_main_inner`                          | `libjvm.dylib`            |
| 27.4% |     777 | `Monitor::wait_without_safepoint_check`                  | `libjvm.dylib`            |
| 10.4% |     294 | `ConcurrentGCThread::run`                                | `libjvm.dylib`            |
|  9.8% |     279 | `Monitor::wait`                                          | `libjvm.dylib`            |
|  6.9% |     196 | `JLI_Launch`                                             | `libjli.dylib`            |
|  6.9% |     196 | `main`                                                   | `java`                    |
|  3.5% |      99 | `unknown`                                                | `<unknown>`               |
|  3.5% |      98 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib`            |
|  3.5% |      98 | `os::signal_wait`                                        | `libjvm.dylib`            |
|  3.5% |      98 | `signal_thread_entry`                                    | `libjvm.dylib`            |
|  3.5% |      98 | `ServiceThread::service_thread_entry`                    | `libjvm.dylib`            |
|  3.5% |      98 | `mach_msg2_trap`                                         | `libsystem_kernel.dylib`  |

##### Compiler

|     % | Samples | Function                                   | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 12.0% |     341 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
|  6.3% |     178 | `CompileQueue::get`                        | `libjvm.dylib` |
|  5.7% |     163 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  4.0% |     112 | `Compile::Compile`                         | `libjvm.dylib` |
|  4.0% |     112 | `C2Compiler::compile_method`               | `libjvm.dylib` |
|  2.1% |      59 | `Compile::Code_Gen`                        | `libjvm.dylib` |
|  1.7% |      49 | `Compilation::compile_method`              | `libjvm.dylib` |
|  1.7% |      49 | `Compilation::Compilation`                 | `libjvm.dylib` |
|  1.6% |      46 | `Compilation::compile_java_method`         | `libjvm.dylib` |
|  1.4% |      39 | `Compile::Optimize`                        | `libjvm.dylib` |
|  1.3% |      36 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
|  0.7% |      21 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
|  0.7% |      21 | `Compilation::emit_lir`                    | `libjvm.dylib` |
|  0.6% |      17 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
|  0.6% |      17 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
|  0.5% |      15 | `LinearScan::do_linear_scan`               | `libjvm.dylib` |
|  0.5% |      14 | `Compilation::build_hir`                   | `libjvm.dylib` |
|  0.4% |      12 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |
|  0.4% |      11 | `Compilation::emit_code_body`              | `libjvm.dylib` |
|  0.4% |      10 | `Compile::optimize_loops`                  | `libjvm.dylib` |

##### Ours

|    % | Samples | Function                                                                                            | Location                                                    |
| ---: | ------: | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| 3.4% |      95 | `run(String[])`                                                                                     | `org.jetbrains.kotlin.preloading.Preloader`                 |
| 3.4% |      95 | `main(String[])`                                                                                    | `org.jetbrains.kotlin.preloading.Preloader`                 |
| 2.8% |      79 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`  | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`     |
| 2.8% |      79 | `doMain(CLICompiler, String[])`                                                                     | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`     |
| 2.8% |      79 | `main(String[])`                                                                                    | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`      |
| 2.8% |      79 | `main(String[])`                                                                                    | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                |
| 2.8% |      78 | `exec(PrintStream, Services, MessageRenderer, String[])`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler`               |
| 2.8% |      78 | `exec(PrintStream, MessageRenderer, String[])`                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`               |
| 2.8% |      78 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                              | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`     |
| 2.7% |      77 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                         | `org.jetbrains.kotlin.cli.common.CLICompiler`               |
| 2.6% |      75 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                               | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                |
| 2.6% |      75 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                |
| 2.6% |      75 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                     | `org.jetbrains.kotlin.cli.common.CLICompiler`               |
| 2.6% |      74 | `phaseBody(PipelineContext, PipelineArtifact)`                                                      | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`           |
| 2.6% |      74 | `phaseBody(LoggingContext, Object)`                                                                 | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`           |
| 2.6% |      74 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                          | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`     |
| 2.6% |      74 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                          | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase` |
| 2.6% |      74 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`                                | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`        |
| 2.6% |      74 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                      | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`     |
| 2.6% |      74 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`     |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Caller         | Location                  |
| -----: | ------: | -------------- | ------------------------- |
| 100.0% |   2,349 | `thread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |   2,250 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Caller           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   2,250 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location                 |
| ----: | ------: | ----------------------- | ------------------------ |
| 78.2% |   1,052 | `PlatformMonitor::wait` | `libjvm.dylib`           |
|  7.3% |      98 | `PlatformEvent::park`   | `libjvm.dylib`           |
|  7.3% |      98 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |
|  7.2% |      97 | `Parker::park`          | `libjvm.dylib`           |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 73.6% |     777 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |
| 26.4% |     279 | `Monitor::wait`                         | `libjvm.dylib` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 89.7% |     920 | `WorkerThread::run`              | `libjvm.dylib` |
|  9.6% |      98 | `os::signal_wait`                | `libjvm.dylib` |
|  0.5% |       5 | `WorkerThreads::run_task`        | `libjvm.dylib` |
|  0.3% |       3 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     930 | `Thread::call_run` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     830 | `Thread::call_run` | `libjvm.dylib` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

|     % | Samples | Caller                                                        | Location       |
| ----: | ------: | ------------------------------------------------------------- | -------------- |
| 12.6% |      98 | `MonitorDeflationThread::monitor_deflation_thread_entry`      | `libjvm.dylib` |
| 12.6% |      98 | `ServiceThread::service_thread_entry`                         | `libjvm.dylib` |
| 12.6% |      98 | `G1ServiceThread::wait_for_task`                              | `libjvm.dylib` |
| 12.6% |      98 | `WatcherThread::sleep`                                        | `libjvm.dylib` |
| 12.5% |      97 | `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |     341 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     294 | `Thread::call_run` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|     % | Samples | Caller                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 63.4% |     177 | `CompileQueue::get`               | `libjvm.dylib` |
| 35.1% |      98 | `JVM_WaitForReferencePendingList` | `libjvm.dylib` |
|  1.4% |       4 | `VMThread::wait_until_executed`   | `libjvm.dylib` |

##### `JLI_Launch` (`libjli.dylib`)

|      % | Samples | Caller | Location |
| -----: | ------: | ------ | -------- |
| 100.0% |     196 | `main` | `java`   |

##### `main` (`java`)

|     % | Samples | Caller       | Location       |
| ----: | ------: | ------------ | -------------- |
| 50.0% |      98 | `unknown`    | `<unknown>`    |
| 50.0% |      98 | `apple_main` | `libjli.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |     178 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |     163 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |     112 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |     112 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `unknown` (`<unknown>`)

|    % | Samples | Caller                  | Location                 |
| ---: | ------: | ----------------------- | ------------------------ |
| 1.0% |       1 | `unknown`               | `<unknown>`              |
| 1.0% |       1 | `Profiler::dlopen_hook` | `libasyncProfiler.dylib` |

##### `MonitorDeflationThread::monitor_deflation_thread_entry` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |      98 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `os::signal_wait` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |      98 | `signal_thread_entry` | `libjvm.dylib` |

##### `signal_thread_entry` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |      98 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `ServiceThread::service_thread_entry` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |      98 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `mach_msg2_trap` (`libsystem_kernel.dylib`)

|      % | Samples | Caller               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% |      98 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % | Samples | Caller           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |      95 | `main(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Caller                          | Location                                                |
| -----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 100.0% |      79 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Caller           | Location                                               |
| -----: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% |      79 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|      % | Samples | Caller           | Location                                     |
| -----: | ------: | ---------------- | -------------------------------------------- |
| 100.0% |      79 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Caller                         | Location                                             |
| -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% |      79 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001008000` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                         | Location                                      |
| -----: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% |      78 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                                 | Location                                                |
| -----: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 100.0% |      78 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Caller                                                                                             | Location                                                |
| -----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |      78 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                                   | Location                                      |
| -----: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 100.0% |      77 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Caller                                                                 | Location                                     |
| -----: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |      75 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Caller                                                          | Location                                      |
| -----: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| 100.0% |      75 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                                      | Location                                      |
| -----: | ------: | ----------------------------------------------------------- | --------------------------------------------- |
| 100.0% |      75 | `exec(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Caller                              | Location                                          |
| -----: | ------: | ----------------------------------- | ------------------------------------------------- |
| 100.0% |      74 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Caller                                                     | Location                                                |
| -----: | ------: | ---------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |      74 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % | Samples | Caller                                                                | Location                                                          |
| -----: | ------: | --------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 100.0% |      74 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`            | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase`       |
|   5.4% |       4 | `invoke(PhaseConfig, PhaserState, LoweringContext, IrModuleFragment)` | `org.jetbrains.kotlin.backend.common.phaser.PerformByIrFilePhase` |
|   1.4% |       1 | `runPhase(NamedCompilerPhase, Object, boolean)`                       | `org.jetbrains.kotlin.backend.common.phaser.PhaseEngine`          |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`)

|      % | Samples | Caller                                                               | Location                                             |
| -----: | ------: | -------------------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% |      74 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt` |

##### `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`)

|      % | Samples | Caller                                         | Location                                                |
| -----: | ------: | ---------------------------------------------- | ------------------------------------------------------- |
| 100.0% |      74 | `runPhasedPipeline(ArgumentsPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                                                              | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |      74 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                                                                                                        | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |      74 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      59 | `Compile::Compile` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      49 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      49 | `Compiler::compile_method` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |      46 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      39 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      36 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 52.4% |      11 | `Compile::Optimize`       | `libjvm.dylib` |
| 47.6% |      10 | `Compile::optimize_loops` | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      21 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |      17 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      17 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

|      % | Samples | Caller                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |      15 | `Compilation::emit_lir` | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      14 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 58.3% |       7 | `Compile::Optimize`                    | `libjvm.dylib` |
| 33.3% |       4 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
|  8.3% |       1 | `PhaseMacroExpand::expand_macro_nodes` | `libjvm.dylib` |

##### `Compilation::emit_code_body` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      11 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      10 | `Compile::Optimize` | `libjvm.dylib` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 95.8% |   2,250 | `thread_native_entry` | `libjvm.dylib` |
|  4.2% |      98 | `apple_main`          | `libjli.dylib` |
| <0.1% |       1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   2,349 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 41.3% |     930 | `WorkerThread::run`             | `libjvm.dylib` |
| 36.9% |     830 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| 13.1% |     294 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
|  4.4% |      98 | `WatcherThread::run`            | `libjvm.dylib` |
|  4.4% |      98 | `VMThread::run`                 | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   2,250 | `Thread::call_run` | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|     % | Samples | Callee               | Location                  |
| ----: | ------: | -------------------- | ------------------------- |
| 99.6% |   1,052 | `__psynch_cvwait`    | `libsystem_kernel.dylib`  |
|  0.4% |       4 | `_pthread_cond_wait` | `libsystem_pthread.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location                 |
| ----: | ------: | --------------------------------- | ------------------------ |
| 98.9% |     920 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
|  0.6% |       6 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
|  0.2% |       2 | `G1RebuildRSAndScrubTask::work`   | `libjvm.dylib`           |
|  0.1% |       1 | `G1CMConcurrentMarkingTask::work` | `libjvm.dylib`           |
|  0.1% |       1 | `G1ClearBitMapTask::work`         | `libjvm.dylib`           |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|     % | Samples | Callee                                                   | Location       |
| ----: | ------: | -------------------------------------------------------- | -------------- |
| 41.1% |     341 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib` |
| 11.8% |      98 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib` |
| 11.8% |      98 | `signal_thread_entry`                                    | `libjvm.dylib` |
| 11.8% |      98 | `ServiceThread::service_thread_entry`                    | `libjvm.dylib` |
| 11.8% |      98 | `JvmtiAgentThread::start_function_wrapper`               | `libjvm.dylib` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |     777 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 52.2% |     178 | `CompileQueue::get`                        | `libjvm.dylib` |
| 47.8% |     163 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 33.3% |      98 | `G1ServiceThread::run_service`          | `libjvm.dylib` |
| 33.3% |      98 | `G1ConcurrentRefineThread::run_service` | `libjvm.dylib` |
| 33.3% |      98 | `G1ConcurrentMarkThread::run_service`   | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |     279 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `JLI_Launch` (`libjli.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 50.0% |      98 | `CreateExecutionEnvironment` | `libjli.dylib` |
| 50.0% |      98 | `ContinueInNewThread`        | `libjli.dylib` |

##### `main` (`java`)

|      % | Samples | Callee       | Location       |
| -----: | ------: | ------------ | -------------- |
| 100.0% |     196 | `JLI_Launch` | `libjli.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 99.4% |     177 | `Monitor::wait`                  | `libjvm.dylib` |
|  0.6% |       1 | `CompilationPolicy::select_task` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 68.7% |     112 | `C2Compiler::compile_method` | `libjvm.dylib` |
| 30.7% |      50 | `Compiler::compile_method`   | `libjvm.dylib` |
|  0.6% |       1 | `ciEnv::ciEnv`               | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 52.7% |      59 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 34.8% |      39 | `Compile::Optimize`                      | `libjvm.dylib` |
| 10.7% |      12 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  0.9% |       1 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.9% |       1 | `CallGenerator::for_inline`              | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     112 | `Compile::Compile` | `libjvm.dylib` |

##### `unknown` (`<unknown>`)

|     % | Samples | Callee    | Location    |
| ----: | ------: | --------- | ----------- |
| 99.0% |      98 | `main`    | `java`      |
|  1.0% |       1 | `unknown` | `<unknown>` |

##### `MonitorDeflationThread::monitor_deflation_thread_entry` (`libjvm.dylib`)

|      % | Samples | Callee                                  | Location       |
| -----: | ------: | --------------------------------------- | -------------- |
| 100.0% |      98 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |

##### `os::signal_wait` (`libjvm.dylib`)

|      % | Samples | Callee                | Location                 |
| -----: | ------: | --------------------- | ------------------------ |
| 100.0% |      98 | `semaphore_wait_trap` | `libsystem_kernel.dylib` |

##### `signal_thread_entry` (`libjvm.dylib`)

|      % | Samples | Callee            | Location       |
| -----: | ------: | ----------------- | -------------- |
| 100.0% |      98 | `os::signal_wait` | `libjvm.dylib` |

##### `ServiceThread::service_thread_entry` (`libjvm.dylib`)

|      % | Samples | Callee                                  | Location       |
| -----: | ------: | --------------------------------------- | -------------- |
| 100.0% |      98 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|     % | Samples | Callee                                                                       | Location                                               |
| ----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 84.2% |      80 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                             |
| 15.8% |      15 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % | Samples | Callee          | Location                                    |
| -----: | ------: | --------------- | ------------------------------------------- |
| 100.0% |      95 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|     % | Samples | Callee                                                 | Location                                                |
| ----: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 98.7% |      78 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  1.3% |       1 | `defaultMessageRenderer()`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                                                                                             | Location                                                |
| -----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |      79 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|      % | Samples | Callee                          | Location                                                |
| -----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 100.0% |      79 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee           | Location                                               |
| -----: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% |      79 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                      | Location                                                 |
| ----: | ------: | ----------------------------------------------------------- | -------------------------------------------------------- |
| 98.7% |      77 | `exec(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler`            |
|  1.3% |       1 | `loadClass(String)`                                         | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                                                   | Location                                      |
| -----: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 100.0% |      78 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                                         | Location                                      |
| -----: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% |      78 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                          | Location                                      |
| ----: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| 97.4% |      75 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |
|  2.6% |       2 | `<clinit>()`                                                    | `org.jetbrains.kotlin.cli.common.ArgumentsKt` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|     % | Samples | Callee                                                         | Location                                                |
| ----: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 98.7% |      74 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|  1.3% |       1 | `getDefaultPerformanceManager()`                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee                                                                | Location                                     |
| -----: | ------: | --------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |      75 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                                                                 | Location                                     |
| -----: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |      75 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|     % | Samples | Callee                           | Location                                                              |
| ----: | ------: | -------------------------------- | --------------------------------------------------------------------- |
| 66.2% |      49 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`      |
| 24.3% |      18 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`       |
|  8.1% |       6 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`        |
|  1.4% |       1 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmConfigurationPipelinePhase` |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Callee                                         | Location                                          |
| -----: | ------: | ---------------------------------------------- | ------------------------------------------------- |
| 100.0% |      74 | `phaseBody(PipelineContext, PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % | Samples | Callee                              | Location                                                         |
| -----: | ------: | ----------------------------------- | ---------------------------------------------------------------- |
| 100.0% |      74 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
|   5.4% |       4 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase`   |
|   1.4% |       1 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.ModuleLoweringPhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`)

|      % | Samples | Callee                                                     | Location                                                |
| -----: | ------: | ---------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |      74 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`)

|      % | Samples | Callee                                                     | Location                                                    |
| -----: | ------: | ---------------------------------------------------------- | ----------------------------------------------------------- |
| 100.0% |      74 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                                               | Location                                             |
| -----: | ------: | -------------------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% |      74 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                         | Location                                                |
| -----: | ------: | ---------------------------------------------- | ------------------------------------------------------- |
| 100.0% |      74 | `runPhasedPipeline(ArgumentsPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 61.0% |      36 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 13.6% |       8 | `Matcher::match`                  | `libjvm.dylib` |
| 10.2% |       6 | `PhaseOutput::Output`             | `libjvm.dylib` |
| 10.2% |       6 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  1.7% |       1 | `PhaseOutput::install_code`       | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location                   |
| ----: | ------: | ---------------------------------- | -------------------------- |
| 93.9% |      46 | `Compilation::compile_java_method` | `libjvm.dylib`             |
|  4.1% |       2 | `ciEnv::register_method`           | `libjvm.dylib`             |
|  2.0% |       1 | `_platform_memset`                 | `libsystem_platform.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |      49 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 45.7% |      21 | `Compilation::emit_lir`       | `libjvm.dylib` |
| 30.4% |      14 | `Compilation::build_hir`      | `libjvm.dylib` |
| 23.9% |      11 | `Compilation::emit_code_body` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 28.2% |      11 | `PhaseIdealLoop::optimize`     | `libjvm.dylib` |
| 25.6% |      10 | `Compile::optimize_loops`      | `libjvm.dylib` |
| 17.9% |       7 | `PhaseIterGVN::optimize`       | `libjvm.dylib` |
| 10.3% |       4 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |
|  5.1% |       2 | `PhaseCCP::do_transform`       | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 19.4% |       7 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
| 16.7% |       6 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
| 11.1% |       4 | `PhaseLive::compute`                       | `libjvm.dylib` |
| 11.1% |       4 | `PhaseAggressiveCoalesce::insert_copies`   | `libjvm.dylib` |
|  8.3% |       3 | `PhaseChaitin::gather_lrg_masks`           | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 81.0% |      17 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| 19.0% |       4 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 71.4% |      15 | `LinearScan::do_linear_scan` | `libjvm.dylib` |
| 28.6% |       6 | `BlockList::iterate_forward` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 47.1% |       8 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| 29.4% |       5 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| 11.8% |       2 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
|  5.9% |       1 | `ProjNode::pinned`                     | `libjvm.dylib` |
|  5.9% |       1 | `PhaseIdealLoop::build_loop_tree`      | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Callee                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      17 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

|     % | Samples | Callee                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 60.0% |       9 | `LinearScan::allocate_registers`      | `libjvm.dylib` |
| 13.3% |       2 | `LinearScan::resolve_data_flow`       | `libjvm.dylib` |
| 13.3% |       2 | `LinearScan::compute_local_live_sets` | `libjvm.dylib` |
|  6.7% |       1 | `LinearScan::init_compute_oop_maps`   | `libjvm.dylib` |
|  6.7% |       1 | `LinearScan::assign_reg_num`          | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|     % | Samples | Callee                                       | Location       |
| ----: | ------: | -------------------------------------------- | -------------- |
| 64.3% |       9 | `IR::IR`                                     | `libjvm.dylib` |
| 21.4% |       3 | `IR::compute_use_counts`                     | `libjvm.dylib` |
|  7.1% |       1 | `ValueNumberingVisitor::do_Constant`         | `libjvm.dylib` |
|  7.1% |       1 | `GlobalValueNumbering::GlobalValueNumbering` | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 83.3% |      10 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |

##### `Compilation::emit_code_body` (`libjvm.dylib`)

|     % | Samples | Callee                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 54.5% |       6 | `LIR_Assembler::emit_code`            | `libjvm.dylib` |
| 36.4% |       4 | `Compilation::emit_code_epilog`       | `libjvm.dylib` |
|  9.1% |       1 | `CodeBuffer::initialize_section_size` | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % | Samples | Callee                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      10 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 32.5% |     920 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThread::run` (`libjvm.dylib`) ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  6.1% |     173 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                      |
|  3.5% |      98 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `MonitorDeflationThread::monitor_deflation_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                 |
|  3.5% |      98 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `os::signal_wait` (`libjvm.dylib`) ← `signal_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                |
|  3.5% |      98 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `ServiceThread::service_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                    |
|  3.5% |      98 | `mach_msg2_trap` (`libsystem_kernel.dylib`) ← `mach_msg_overwrite` ← `mach_msg` ← `__CFRunLoopServiceMachPort` (`CoreFoundation`) ← `__CFRunLoopRun` ← `CFRunLoopRunSpecific` ← `CreateExecutionEnvironment` (`libjli.dylib`) ← `JLI_Launch` ← `main` (`java`) ← `unknown`                                                                                                                                                                                                                                                                                                                                                                                                  |
|  3.5% |      98 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformEvent::park` (`libjvm.dylib`) ← `ObjectMonitor::wait` ← `ObjectSynchronizer::wait` ← `JVM_MonitorWait` ← `wait0(long)` (`java.lang.Object`) ← `wait(long)` ← `wait()` ← `await()` (`java.lang.ref.NativeReferenceQueue`) ← `remove0()` (`java.lang.ref.ReferenceQueue`) ← `remove()` (`java.lang.ref.NativeReferenceQueue`) ← `run()` (`java.lang.ref.Finalizer$FinalizerThread`)                                                                                                                                                                                                                                   |
|  3.5% |      98 | `__ulock_wait` (`libsystem_kernel.dylib`) ← `CallJavaMainInNewThread` (`libjli.dylib`) ← `ContinueInNewThread` ← `JLI_Launch` ← `main` (`java`) ← `apple_main` (`libjli.dylib`) ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  3.5% |      98 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ServiceThread::wait_for_task` ← `G1ServiceThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                              |
|  3.5% |      98 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `WatcherThread::sleep` ← `WatcherThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                              |
|  3.5% |      98 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `JVM_WaitForReferencePendingList` ← `waitForReferencePendingList()` (`java.lang.ref.Reference`) ← `processPendingReferences()` ← `run()` (`java.lang.ref.Reference$ReferenceHandler`)                                                                                                                                                                                                                                                                                                                                                                           |
|  3.5% |      98 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Profiler::timerLoop` (`libasyncProfiler.dylib`) ← `JvmtiAgentThread::start_function_wrapper` (`libjvm.dylib`) ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                |
|  3.4% |      97 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` ← `G1ConcurrentRefineThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                        |
|  3.4% |      97 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`) ← `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `await(long)` (`java.lang.ref.ReferenceQueue`) ← `remove0(long)` ← `remove(long)` ← `run()` (`jdk.internal.ref.CleanerImpl`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()` ← `run()` (`jdk.internal.misc.InnocuousThread`)                                                                                                  |
|  3.4% |      97 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `NotificationThread::notification_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                          |
|  3.4% |      96 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ConcurrentMarkThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                          |
|  3.3% |      94 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `VMThread::wait_for_operation` ← `VMThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                           |
|  0.4% |      10 | `inflate_fast` (`libzip.dylib`) ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |
|  0.2% |       5 | `PhaseChaitin::elide_copy` (`libjvm.dylib`) ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                  |
|  0.1% |       4 | `__psynch_mutexwait` (`libsystem_kernel.dylib`) ← `_pthread_mutex_firstfit_lock_slow` (`libsystem_pthread.dylib`) ← `_pthread_cond_wait` ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                          |

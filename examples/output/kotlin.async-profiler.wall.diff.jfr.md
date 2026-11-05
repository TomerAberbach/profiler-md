# Sampling profile diff

Collected 2,791 → 2,835 samples (+44 samples, +1.6%).

| Category         |  Change | Delta |             % |       Samples |
| ---------------- | ------: | ----: | ------------: | ------------: |
| Native           |   +2.5% |   +66 | 93.3% → 94.2% | 2,604 → 2,670 |
| Compiler         |   -4.7% |    -6 |   4.6% → 4.3% |     129 → 123 |
| Ours             |   +6.9% |    +2 |   1.0% → 1.1% |       29 → 31 |
| Standard library |  -35.7% |    -5 |   0.5% → 0.3% |        14 → 9 |
| Unknown          | removed |   -13 |   0.5% → 0.0% |        13 → 0 |
| JIT              |    0.0% |     0 |          0.1% |             2 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── 2,302 → 2,349 samples (82.5% → 82.9%) thread_start at libsystem_pthread.dylib
│   └── 2,302 → 2,349 samples (82.5% → 82.9%) _pthread_start
│       ├── 2,205 → 2,250 samples (79.0% → 79.4%) thread_native_entry at libjvm.dylib
│       │   └── 2,205 → 2,250 samples (79.0% → 79.4%) Thread::call_run
│       │       ├── 911 → 930 samples (32.6% → 32.8%) WorkerThread::run
│       │       │   └── 898 → 920 samples (32.2% → 32.5%, self 36.0% → 36.2% globally) semaphore_wait_trap at libsystem_kernel.dylib
│       │       ├── 820 → 830 samples (29.4% → 29.3%) JavaThread::thread_main_inner
│       │       │   ├── 341 samples (12.2% → 12.0%) CompileBroker::compiler_thread_loop
│       │       │   │   ├── … 166 → 177 samples (5.9% → 6.2%) PlatformMonitor::wait at libjvm.dylib
│       │       │   │   │   ├── 166 → 173 samples (5.9% → 6.1%, self 46.8% → 47.4% globally) __psynch_cvwait at libsystem_kernel.dylib
│       │       │   │   │   └── … 0 → 4 samples (0.0% → 0.1%) __psynch_mutexwait at libsystem_kernel.dylib
│       │       │   │   └── 174 → 163 samples (6.2% → 5.7%) CompileBroker::invoke_compiler_on_method
│       │       │   │       ├── 125 → 112 samples (4.5% → 4.0%) C2Compiler::compile_method
│       │       │   │       │   └── 125 → 112 samples (4.5% → 4.0%) Compile::Compile
│       │       │   │       │       ├── 72 → 59 samples (2.6% → 2.1%) Compile::Code_Gen
│       │       │   │       │       │   ├── 35 → 36 samples (1.3%) PhaseChaitin::Register_Allocate
│       │       │   │       │       │   │   ├── 5 → 6 samples (0.2%) PhaseChaitin::post_allocate_copy_removal
│       │       │   │       │       │   │   │   └── 2 → 5 samples (0.1% → 0.2%) PhaseChaitin::elide_copy
│       │       │   │       │       │   │   ├── 5 → 4 samples (0.2% → 0.1%) PhaseLive::compute
│       │       │   │       │       │   │   │   └── 2 → 0 samples (0.1% → 0.0%) IndexSet::initialize
│       │       │   │       │       │   │   └── 25 → 26 samples (0.9%) 17 more callees, led by (0.3% → 0.2%) PhaseChaitin::build_ifg_physical
│       │       │   │       │       │   └── 37 → 23 samples (1.3% → 0.8%) 6 more callees, led by (0.5% → 0.3%) Matcher::match
│       │       │   │       │       ├── 35 → 39 samples (1.3% → 1.4%) Compile::Optimize
│       │       │   │       │       │   ├── … 3 → 0 samples (0.1% → 0.0%) PhaseIdealLoop::build_loop_early at libjvm.dylib
│       │       │   │       │       │   └── 22 → 29 samples (0.8% → 1.0%) 8 more callees, led by (0.3% → 0.4%) PhaseIdealLoop::optimize
│       │       │   │       │       └── 18 → 14 samples (0.6% → 0.5%) 5 more callees, led by (0.5% → 0.4%) ParseGenerator::generate
│       │       │   │       └── … 41 → 46 samples (1.5% → 1.6%) Compilation::compile_java_method at libjvm.dylib
│       │       │   │           ├── … 0 → 2 samples (0.0% → 0.1%) DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)> at libjvm.dylib
│       │       │   │           └── 33 → 35 samples (1.2%) 2 more callees, led by (0.6% → 0.7%) Compilation::emit_lir
│       │       │   └── 479 → 489 samples (17.2%) 5 more callees, led by (3.4% → 3.5%) JvmtiAgentThread::start_function_wrapper
│       │       ├── 282 → 294 samples (10.1% → 10.4%) ConcurrentGCThread::run
│       │       │   └── 282 → 294 samples (10.1% → 10.4%) 3 more callees, led by (3.4% → 3.5%) G1ConcurrentMarkThread::run_service
│       │       └── 192 → 196 samples (6.9%) 2 more callees, led by (3.4% → 3.5%) VMThread::run
│       └── … 96 → 98 samples (3.4% → 3.5%) __ulock_wait at libsystem_kernel.dylib
├── 90 → 95 samples (3.2% → 3.4%) main(String[]) at org.jetbrains.kotlin.preloading.Preloader
│   └── 90 → 95 samples (3.2% → 3.4%) run(String[])
│       ├── 75 → 80 samples (2.7% → 2.8%) invoke(Object, Object[]) at java.lang.reflect.Method …
│       └── … 7 → 10 samples (0.3% → 0.4%) inflate_fast at libzip.dylib
├── 13 → 0 samples (0.5% → 0.0%) (anonymous)
└── 386 → 391 samples (13.8%) 5 more root frames, led by (3.4% → 3.5%) unknown
```

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |       Samples | Function                                                                                                                                                 | Location                 |
| ------: | ----: | ------------: | ------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
|   +3.1% |   +40 | 46.8% → 47.4% | 1,305 → 1,345 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib` |
|   +2.2% |   +22 | 36.0% → 36.2% | 1,004 → 1,026 | `semaphore_wait_trap`                                                                                                                                    | `libsystem_kernel.dylib` |
| +200.0% |    +8 |   0.1% → 0.4% |        4 → 12 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib` |
| +500.0% |    +5 |  <0.1% → 0.2% |         1 → 6 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`           |
| +400.0% |    +4 |  <0.1% → 0.2% |         1 → 5 | `IndexSetIterator::advance_and_next`                                                                                                                     | `libjvm.dylib`           |
|  +42.9% |    +3 |   0.3% → 0.4% |        7 → 10 | `inflate_fast`                                                                                                                                           | `libzip.dylib`           |
| +150.0% |    +3 |   0.1% → 0.2% |         2 → 5 | `PhaseChaitin::elide_copy`                                                                                                                               | `libjvm.dylib`           |
| +200.0% |    +2 |  <0.1% → 0.1% |         1 → 3 | `PhaseLive::compute`                                                                                                                                     | `libjvm.dylib`           |
| +200.0% |    +2 |  <0.1% → 0.1% |         1 → 3 | `PhaseIdealLoop::build_loop_late`                                                                                                                        | `libjvm.dylib`           |
|     new |    +2 |   0.0% → 0.1% |         0 → 2 | `PhaseIterGVN::optimize`                                                                                                                                 | `libjvm.dylib`           |
|   +2.1% |    +2 |   3.4% → 3.5% |       96 → 98 | `mach_msg2_trap`                                                                                                                                         | `libsystem_kernel.dylib` |
|   +2.1% |    +2 |   3.4% → 3.5% |       96 → 98 | `__ulock_wait`                                                                                                                                           | `libsystem_kernel.dylib` |
|     new |    +2 |   0.0% → 0.1% |         0 → 2 | `ClassVerifier::verify_method`                                                                                                                           | `libjvm.dylib`           |
|     new |    +2 |   0.0% → 0.1% |         0 → 2 | `SymbolTable::lookup_only`                                                                                                                               | `libjvm.dylib`           |
|     new |    +2 |   0.0% → 0.1% |         0 → 2 | `CodeCache::make_marked_nmethods_deoptimized`                                                                                                            | `libjvm.dylib`           |
|     new |    +2 |   0.0% → 0.1% |         0 → 2 | `ValueStack::values_do`                                                                                                                                  | `libjvm.dylib`           |
| +200.0% |    +2 |  <0.1% → 0.1% |         1 → 3 | `IntervalWalker::walk_to`                                                                                                                                | `libjvm.dylib`           |
| +200.0% |    +2 |  <0.1% → 0.1% |         1 → 3 | `LinearScanWalker::alloc_free_reg`                                                                                                                       | `libjvm.dylib`           |
| +200.0% |    +2 |  <0.1% → 0.1% |         1 → 3 | `PhaseAggressiveCoalesce::insert_copies`                                                                                                                 | `libjvm.dylib`           |
|     new |    +2 |   0.0% → 0.1% |         0 → 2 | `__psynch_cvbroad`                                                                                                                                       | `libsystem_kernel.dylib` |

##### Native

|  Change | Delta |             % |       Samples | Function                                                                                                                                                 | Location                 |
| ------: | ----: | ------------: | ------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
|   +3.1% |   +40 | 46.8% → 47.4% | 1,305 → 1,345 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib` |
|   +2.2% |   +22 | 36.0% → 36.2% | 1,004 → 1,026 | `semaphore_wait_trap`                                                                                                                                    | `libsystem_kernel.dylib` |
| +200.0% |    +8 |   0.1% → 0.4% |        4 → 12 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib` |
| +500.0% |    +5 |  <0.1% → 0.2% |         1 → 6 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`           |
|  +42.9% |    +3 |   0.3% → 0.4% |        7 → 10 | `inflate_fast`                                                                                                                                           | `libzip.dylib`           |
|   +2.1% |    +2 |   3.4% → 3.5% |       96 → 98 | `mach_msg2_trap`                                                                                                                                         | `libsystem_kernel.dylib` |
|   +2.1% |    +2 |   3.4% → 3.5% |       96 → 98 | `__ulock_wait`                                                                                                                                           | `libsystem_kernel.dylib` |
|     new |    +2 |   0.0% → 0.1% |         0 → 2 | `ClassVerifier::verify_method`                                                                                                                           | `libjvm.dylib`           |
|     new |    +2 |   0.0% → 0.1% |         0 → 2 | `SymbolTable::lookup_only`                                                                                                                               | `libjvm.dylib`           |
|     new |    +2 |   0.0% → 0.1% |         0 → 2 | `CodeCache::make_marked_nmethods_deoptimized`                                                                                                            | `libjvm.dylib`           |
|     new |    +2 |   0.0% → 0.1% |         0 → 2 | `__psynch_cvbroad`                                                                                                                                       | `libsystem_kernel.dylib` |
|     new |    +2 |   0.0% → 0.1% |         0 → 2 | `Dict::doubhash`                                                                                                                                         | `libjvm.dylib`           |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                        | `libjvm.dylib`           |
| +100.0% |    +1 |  <0.1% → 0.1% |         1 → 2 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                                                          | `libjvm.dylib`           |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object`                                                                                 | `libjvm.dylib`           |
| +100.0% |    +1 |  <0.1% → 0.1% |         1 → 2 | `inflate`                                                                                                                                                | `libzip.dylib`           |
| +100.0% |    +1 |  <0.1% → 0.1% |         1 → 2 | `ClassFileParser::skip_over_field_signature`                                                                                                             | `libjvm.dylib`           |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `ClassFileParser::parse_constant_pool_entries`                                                                                                           | `libjvm.dylib`           |
|  +50.0% |    +1 |          0.1% |         2 → 3 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`           |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `ClassVerifier::verify_invoke_instructions`                                                                                                              | `libjvm.dylib`           |

##### Compiler

|  Change | Delta |            % | Samples | Function                                         | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------------ | -------------- |
| +400.0% |    +4 | <0.1% → 0.2% |   1 → 5 | `IndexSetIterator::advance_and_next`             | `libjvm.dylib` |
| +150.0% |    +3 |  0.1% → 0.2% |   2 → 5 | `PhaseChaitin::elide_copy`                       | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `PhaseLive::compute`                             | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `PhaseIdealLoop::build_loop_late`                | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `PhaseIterGVN::optimize`                         | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `ValueStack::values_do`                          | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `IntervalWalker::walk_to`                        | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `LinearScanWalker::alloc_free_reg`               | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `PhaseAggressiveCoalesce::insert_copies`         | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `PhaseCFG::partial_latency_of_defs`              | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `RegMask::is_UP`                                 | `libjvm.dylib` |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `Matcher::xform`                                 | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseCFG::schedule_late`                        | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIdealLoop::split_if_with_blocks_pre`       | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Node_Array::insert`                             | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Scheduling::AddNodeToBundle`                    | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Assembler::operand_valid_for_logical_immediate` | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `ValueStack::ValueStack`                         | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `GraphBuilder::invoke`                           | `libjvm.dylib` |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `LIRGenerator::state_for`                        | `libjvm.dylib` |

##### Ours

| Change | Delta |            % | Samples | Function                                                                                                                    | Location                                                                                                |
| -----: | ----: | -----------: | ------: | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `resolveType(FirTypeRef, TypeResolutionConfiguration, boolean, boolean, boolean, SupertypeSupplier, boolean)`               | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl`                                   |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `transform(FirTransformer, Object)`                                                                                         | `org.jetbrains.kotlin.fir.declarations.FirNamedFunction`                                                |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `processConstraintsIgnoringForksData(ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`                            |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `topLevelFunctionNameIndex_delegate$lambda$0(PackagePartsCacheData)`                                                        | `org.jetbrains.kotlin.fir.deserialization.PackagePartsCacheData`                                        |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `compareTo(TowerGroup)`                                                                                                     | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerGroup`                                               |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `isExcluded(FirResolvedImport, Name)`                                                                                       | `org.jetbrains.kotlin.fir.scopes.impl.FirAbstractStarImportingScope`                                    |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `<init>(ClassId)`                                                                                                           | `org.jetbrains.kotlin.fir.symbols.impl.ConeClassLikeLookupTagImpl`                                      |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `getBoundsNullability(TypeParameterMarker)`                                                                                 | `org.jetbrains.kotlin.load.java.typeEnhancement.AbstractSignatureParts`                                 |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `getSession()`                                                                                                              | `org.jetbrains.kotlin.fir.resolve.calls.candidate.CallInfo`                                             |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `<init>(ControlFlowGraph, int, DefaultConstructorMarker)`                                                                   | `org.jetbrains.kotlin.fir.resolve.dfa.cfg.CFGNode`                                                      |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `getLanguageSettingsComponent(FirSession)`                                                                                  | `org.jetbrains.kotlin.fir.FirLanguageSettingsComponentKt`                                               |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `simplifyEqualityConstraints(SmartList)`                                                                                    | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableVariableWithConstraints`                     |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `supertypes(TypeConstructorMarker)`                                                                                         | `org.jetbrains.kotlin.types.AbstractTypeApproximator`                                                   |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `getFirstClassifierOrNull(FirScope, CallInfo, ConstructorFilter, FirSession, BodyResolveComponents)`                        | `org.jetbrains.kotlin.fir.resolve.calls.ConstructorProcessingKt`                                        |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitBlock(FirBlock, Object)`                                                                                              | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirUnusedCheckerBase$UsageVisitorBase`          |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `getCallableId()`                                                                                                           | `org.jetbrains.kotlin.fir.symbols.impl.FirFunctionSymbol`                                               |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `check(CheckerContext, DiagnosticReporter, FirDeclaration)`                                                                 | `org.jetbrains.kotlin.fir.analysis.jvm.checkers.declaration.FirJvmInvalidAndDangerousCharactersChecker` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitBlock(FirBlock, FirUnusedCheckerBase$UsageState)`                                                                     | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirUnusedCheckerBase$UsageVisitorBase`          |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `fullyExpandedType(SessionHolder, ConeKotlinType)`                                                                          | `org.jetbrains.kotlin.fir.resolve.TypeExpansionUtilsKt`                                                 |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `check(CheckerContext, DiagnosticReporter, FirResolvedQualifier)`                                                           | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirOptInUsageQualifierChecker`                   |

#### Improvements

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |            % | Samples | Function                                                                                               | Location                   |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------ | -------------------------- |
| removed |   -13 |  0.5% → 0.0% |  13 → 0 | `(anonymous)`                                                                                          | `<unknown>`                |
|  -80.0% |    -4 | 0.2% → <0.1% |   5 → 1 | `tlv_get_addr`                                                                                         | `libdyld.dylib`            |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `PhaseIdealLoop::build_loop_early`                                                                     | `libjvm.dylib`             |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `IndexSet::initialize`                                                                                 | `libjvm.dylib`             |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `os::malloc`                                                                                           | `libjvm.dylib`             |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `Matcher::find_shared`                                                                                 | `libjvm.dylib`             |
|  -40.0% |    -2 |  0.2% → 0.1% |   5 → 3 | `PhaseChaitin::Split`                                                                                  | `libjvm.dylib`             |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `PhaseIdealLoop::build_loop_late_post_work`                                                            | `libjvm.dylib`             |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `PhaseRemoveUseless::PhaseRemoveUseless`                                                               | `libjvm.dylib`             |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `Unique_Node_List::remove`                                                                             | `libjvm.dylib`             |
|  -66.7% |    -2 | 0.1% → <0.1% |   3 → 1 | `PhaseChaitin::post_allocate_copy_removal`                                                             | `libjvm.dylib`             |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `G1CardSet::add_to_howl`                                                                               | `libjvm.dylib`             |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib`             |
|  -66.7% |    -2 | 0.1% → <0.1% |   3 → 1 | `pthread_jit_write_protect_np`                                                                         | `libsystem_pthread.dylib`  |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `forward_copy_longs`                                                                                   | `<unknown>`                |
|  -28.6% |    -2 |  0.3% → 0.2% |   7 → 5 | `SymbolTable::do_lookup`                                                                               | `libjvm.dylib`             |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `_platform_memcmp`                                                                                     | `libsystem_platform.dylib` |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `RegionNode::is_CFG`                                                                                   | `libjvm.dylib`             |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `PhiNode::Ideal`                                                                                       | `libjvm.dylib`             |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `CProjNode::is_block_proj`                                                                             | `libjvm.dylib`             |

##### Native

|  Change | Delta |            % | Samples | Function                                                                                                                                                                                                                                                 | Location                   |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
|  -80.0% |    -4 | 0.2% → <0.1% |   5 → 1 | `tlv_get_addr`                                                                                                                                                                                                                                           | `libdyld.dylib`            |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `os::malloc`                                                                                                                                                                                                                                             | `libjvm.dylib`             |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `G1CardSet::add_to_howl`                                                                                                                                                                                                                                 | `libjvm.dylib`             |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                                                                                                                   | `libjvm.dylib`             |
|  -66.7% |    -2 | 0.1% → <0.1% |   3 → 1 | `pthread_jit_write_protect_np`                                                                                                                                                                                                                           | `libsystem_pthread.dylib`  |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `forward_copy_longs`                                                                                                                                                                                                                                     | `<unknown>`                |
|  -28.6% |    -2 |  0.3% → 0.2% |   7 → 5 | `SymbolTable::do_lookup`                                                                                                                                                                                                                                 | `libjvm.dylib`             |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `_platform_memcmp`                                                                                                                                                                                                                                       | `libsystem_platform.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `G1BlockOffsetTablePart::update_for_block_work`                                                                                                                                                                                                          | `libjvm.dylib`             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `nanov2_find_block_and_allocate`                                                                                                                                                                                                                         | `libsystem_malloc.dylib`   |
|  -33.3% |    -1 |         0.1% |   3 → 2 | `fwd_copy_again`                                                                                                                                                                                                                                         | `libjvm.dylib`             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `State::_sub_Op_AndI`                                                                                                                                                                                                                                    | `libjvm.dylib`             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>`                                                                                                                                                   | `libjvm.dylib`             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `StackMapFrame::is_assignable_to`                                                                                                                                                                                                                        | `libjvm.dylib`             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `StackMapTable::StackMapTable`                                                                                                                                                                                                                           | `libjvm.dylib`             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `StackMapTable::check_jump_target`                                                                                                                                                                                                                       | `libjvm.dylib`             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `char* UNICODE::as_utf8<signed char>`                                                                                                                                                                                                                    | `libjvm.dylib`             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::internal_insert_get<SymbolTableLookup, bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::insert<SymbolTableLookup>(Thread*, SymbolTableLookup&, Symbol const&, bool*, bool*)::NOP>` | `libjvm.dylib`             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `ClassFileParser::parse_constant_pool`                                                                                                                                                                                                                   | `libjvm.dylib`             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `GrowableArrayWithAllocator<Symbol*, GrowableArray<Symbol*>>::expand_to`                                                                                                                                                                                 | `libjvm.dylib`             |

##### Compiler

|  Change | Delta |            % | Samples | Function                                      | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------------------- | -------------- |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `PhaseIdealLoop::build_loop_early`            | `libjvm.dylib` |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `IndexSet::initialize`                        | `libjvm.dylib` |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `Matcher::find_shared`                        | `libjvm.dylib` |
|  -40.0% |    -2 |  0.2% → 0.1% |   5 → 3 | `PhaseChaitin::Split`                         | `libjvm.dylib` |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `PhaseIdealLoop::build_loop_late_post_work`   | `libjvm.dylib` |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `PhaseRemoveUseless::PhaseRemoveUseless`      | `libjvm.dylib` |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `Unique_Node_List::remove`                    | `libjvm.dylib` |
|  -66.7% |    -2 | 0.1% → <0.1% |   3 → 1 | `PhaseChaitin::post_allocate_copy_removal`    | `libjvm.dylib` |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `RegionNode::is_CFG`                          | `libjvm.dylib` |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `PhiNode::Ideal`                              | `libjvm.dylib` |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `CProjNode::is_block_proj`                    | `libjvm.dylib` |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `LinearScan::build_intervals`                 | `libjvm.dylib` |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `CodeBuffer::finalize_oop_references`         | `libjvm.dylib` |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `Scheduling::ComputeRegisterAntidependencies` | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Type::hashcons`                              | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `RegionNode::Opcode`                          | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Matcher::match_tree`                         | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `ProjNode::Opcode`                            | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Node::rematerialize`                         | `libjvm.dylib` |
|  -33.3% |    -1 |         0.1% |   3 → 2 | `PhaseChaitin::build_ifg_physical`            | `libjvm.dylib` |

##### Ours

|  Change | Delta |            % | Samples | Function                                                                                                                                                                           | Location                                                                             |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `zzUnpackcmap_blocks(String, int, int[])`                                                                                                                                          | `org.jetbrains.kotlin.lexer._JetLexer`                                               |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<init>()`                                                                                                                                                                         | `org.jetbrains.kotlin.KtSourceElement`                                               |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<init>(FirModuleData, FirDeclarationOrigin, KtSourceElement, List, FirTypeRef, boolean, FirPropertySymbol, FirDeclarationStatus, FirResolvePhase, int, DefaultConstructorMarker)` | `org.jetbrains.kotlin.fir.declarations.impl.FirDefaultPropertyBackingField`          |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `newBuilderForType()`                                                                                                                                                              | `org.jetbrains.kotlin.metadata.jvm.JvmProtoBuf$JvmMethodSignature`                   |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `hasSupertypePathToParameter$toNextTypeParameter(ConeKotlinType)`                                                                                                                  | `org.jetbrains.kotlin.fir.resolve.transformers.FirTypeResolveTransformer`            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `invoke(Object, Object, Object)`                                                                                                                                                   | `org.jetbrains.kotlin.fir.symbols.FirLazyDeclarationResolverKt$lazyResolveToPhase$1` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `transformValueParameters(FirTransformer, Object)`                                                                                                                                 | `org.jetbrains.kotlin.fir.declarations.impl.FirAnonymousFunctionImpl`                |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `orderNodes(boolean)`                                                                                                                                                              | `org.jetbrains.kotlin.fir.resolve.dfa.cfg.ControlFlowGraph`                          |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `hashCode()`                                                                                                                                                                       | `org.jetbrains.kotlin.fir.types.ConeLookupTagBasedType`                              |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `isProperConstraint(ResultTypeResolver$Context, Constraint)`                                                                                                                       | `org.jetbrains.kotlin.resolve.calls.inference.components.ResultTypeResolver`         |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `runResolverForInvoke(CallInfo, ExpressionReceiverValue, Continuation)`                                                                                                            | `org.jetbrains.kotlin.fir.resolve.calls.tower.InvokeFunctionResolveTask`             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `processOverriddenFunctions(FirTypeScope, FirNamedFunctionSymbol, Function1)`                                                                                                      | `org.jetbrains.kotlin.fir.scopes.FirTypeScopeKt`                                     |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `get(FirDeclarationStatusImpl$Modifier)`                                                                                                                                           | `org.jetbrains.kotlin.fir.declarations.impl.FirDeclarationStatusImpl`                |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<init>(KtSourceElement, FirResolvePhase, FirModuleData, FirDeclarationOrigin, FirDeclarationAttributes, FirReceiverParameterSymbol, FirTypeRef, FirBasedSymbol, List)`            | `org.jetbrains.kotlin.fir.declarations.impl.FirReceiverParameterImpl`                |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `buildSubstitutorForOverridesCheck(FirCallableDeclaration, FirCallableDeclaration, FirSession)`                                                                                    | `org.jetbrains.kotlin.fir.scopes.impl.FirAbstractOverrideCheckerKt`                  |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `isLower()`                                                                                                                                                                        | `org.jetbrains.kotlin.resolve.calls.inference.model.ConstraintKind`                  |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `isSubtypeOfForSingleClassifierType(TypeCheckerState, TypeSystemContext, RigidTypeMarker, RigidTypeMarker)`                                                                        | `org.jetbrains.kotlin.types.AbstractTypeChecker`                                     |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `collectConflictingLocalFunctionsFrom(CheckerContext, FirBlock)`                                                                                                                   | `org.jetbrains.kotlin.fir.analysis.checkers.FirConflictsHelpersKt`                   |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `checkAllRepeatedAnnotations(CheckerContext, DiagnosticReporter, FirTypeRef)`                                                                                                      | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirAnnotationChecker`        |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `convertToIrAnnotation(FirAnnotation)`                                                                                                                                             | `org.jetbrains.kotlin.fir.backend.generators.CallAndReferenceGenerator`              |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `resolveType(FirTypeRef, TypeResolutionConfiguration, boolean, boolean, boolean, SupertypeSupplier, boolean)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl`)

| Change | Delta |             % | Samples | Location                                                                  |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl:534` |

##### `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirNamedFunction`)

| Change | Delta |             % | Samples | Location                                                    |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.declarations.FirNamedFunction:75` |

##### `processConstraintsIgnoringForksData(ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector)` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`)

| Change | Delta |             % | Samples | Location                                                                         |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector:173` |

##### `topLevelFunctionNameIndex_delegate$lambda$0(PackagePartsCacheData)` (`org.jetbrains.kotlin.fir.deserialization.PackagePartsCacheData`)

| Change | Delta |             % | Samples | Location                                                            |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.deserialization.PackagePartsCacheData:53` |

##### `compareTo(TowerGroup)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerGroup`)

| Change | Delta |             % | Samples | Location                                                      |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerGroup:302` |

##### `isExcluded(FirResolvedImport, Name)` (`org.jetbrains.kotlin.fir.scopes.impl.FirAbstractStarImportingScope`)

| Change | Delta |             % | Samples | Location                                                                |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.scopes.impl.FirAbstractStarImportingScope:32` |

##### `<init>(ClassId)` (`org.jetbrains.kotlin.fir.symbols.impl.ConeClassLikeLookupTagImpl`)

| Change | Delta |             % | Samples | Location                                                              |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.symbols.impl.ConeClassLikeLookupTagImpl:17` |

##### `getBoundsNullability(TypeParameterMarker)` (`org.jetbrains.kotlin.load.java.typeEnhancement.AbstractSignatureParts`)

| Change | Delta |             % | Samples | Location                                                                    |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.load.java.typeEnhancement.AbstractSignatureParts:315` |

##### `getSession()` (`org.jetbrains.kotlin.fir.resolve.calls.candidate.CallInfo`)

| Change | Delta |             % | Samples | Location                                                       |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.calls.candidate.CallInfo:47` |

##### `getLanguageSettingsComponent(FirSession)` (`org.jetbrains.kotlin.fir.FirLanguageSettingsComponentKt`)

| Change | Delta |             % | Samples | Location                                                     |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.FirLanguageSettingsComponentKt:16` |

##### `simplifyEqualityConstraints(SmartList)` (`org.jetbrains.kotlin.resolve.calls.inference.model.MutableVariableWithConstraints`)

| Change | Delta |             % | Samples | Location                                                                                |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableVariableWithConstraints:431` |

##### `getFirstClassifierOrNull(FirScope, CallInfo, ConstructorFilter, FirSession, BodyResolveComponents)` (`org.jetbrains.kotlin.fir.resolve.calls.ConstructorProcessingKt`)

| Change | Delta |             % | Samples | Location                                                            |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.calls.ConstructorProcessingKt:89` |

##### `visitBlock(FirBlock, Object)` (`org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirUnusedCheckerBase$UsageVisitorBase`)

| Change | Delta |             % | Samples | Location                                                                                          |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirUnusedCheckerBase$UsageVisitorBase:66` |

##### `getCallableId()` (`org.jetbrains.kotlin.fir.symbols.impl.FirFunctionSymbol`)

| Change | Delta |             % | Samples | Location                                                     |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.symbols.impl.FirFunctionSymbol:30` |

##### `check(CheckerContext, DiagnosticReporter, FirDeclaration)` (`org.jetbrains.kotlin.fir.analysis.jvm.checkers.declaration.FirJvmInvalidAndDangerousCharactersChecker`)

| Change | Delta |             % | Samples | Location                                                                                                   |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.analysis.jvm.checkers.declaration.FirJvmInvalidAndDangerousCharactersChecker:25` |

##### `visitBlock(FirBlock, FirUnusedCheckerBase$UsageState)` (`org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirUnusedCheckerBase$UsageVisitorBase`)

| Change | Delta |             % | Samples | Location                                                                                           |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirUnusedCheckerBase$UsageVisitorBase:124` |

##### `fullyExpandedType(SessionHolder, ConeKotlinType)` (`org.jetbrains.kotlin.fir.resolve.TypeExpansionUtilsKt`)

| Change | Delta |             % | Samples | Location                                                   |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.TypeExpansionUtilsKt:98` |

##### `check(CheckerContext, DiagnosticReporter, FirResolvedQualifier)` (`org.jetbrains.kotlin.fir.analysis.checkers.expression.FirOptInUsageQualifierChecker`)

| Change | Delta |             % | Samples | Location                                                                                 |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirOptInUsageQualifierChecker:28` |

##### `zzUnpackcmap_blocks(String, int, int[])` (`org.jetbrains.kotlin.lexer._JetLexer`)

|  Change | Delta |             % | Samples | Location                                   |
| ------: | ----: | ------------: | ------: | ------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.lexer._JetLexer:286` |

##### `<init>()` (`org.jetbrains.kotlin.KtSourceElement`)

|  Change | Delta |             % | Samples | Location                                   |
| ------: | ----: | ------------: | ------: | ------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.KtSourceElement:640` |

##### `<init>(FirModuleData, FirDeclarationOrigin, KtSourceElement, List, FirTypeRef, boolean, FirPropertySymbol, FirDeclarationStatus, FirResolvePhase, int, DefaultConstructorMarker)` (`org.jetbrains.kotlin.fir.declarations.impl.FirDefaultPropertyBackingField`)

|  Change | Delta |             % | Samples | Location                                                                       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.declarations.impl.FirDefaultPropertyBackingField:22` |

##### `newBuilderForType()` (`org.jetbrains.kotlin.metadata.jvm.JvmProtoBuf$JvmMethodSignature`)

|  Change | Delta |             % | Samples | Location                                                                |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.metadata.jvm.JvmProtoBuf$JvmMethodSignature:2366` |

##### `hasSupertypePathToParameter$toNextTypeParameter(ConeKotlinType)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirTypeResolveTransformer`)

|  Change | Delta |             % | Samples | Location                                                                      |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.transformers.FirTypeResolveTransformer:355` |

##### `invoke(Object, Object, Object)` (`org.jetbrains.kotlin.fir.symbols.FirLazyDeclarationResolverKt$lazyResolveToPhase$1`)

|  Change | Delta |             % | Samples | Location                                                                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.symbols.FirLazyDeclarationResolverKt$lazyResolveToPhase$1:134` |

##### `transformValueParameters(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirAnonymousFunctionImpl`)

|  Change | Delta |             % | Samples | Location                                                                  |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.declarations.impl.FirAnonymousFunctionImpl:129` |

##### `orderNodes(boolean)` (`org.jetbrains.kotlin.fir.resolve.dfa.cfg.ControlFlowGraph`)

|  Change | Delta |             % | Samples | Location                                                       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.dfa.cfg.ControlFlowGraph:68` |

##### `hashCode()` (`org.jetbrains.kotlin.fir.types.ConeLookupTagBasedType`)

|  Change | Delta |             % | Samples | Location                                                    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.types.ConeLookupTagBasedType:126` |

##### `isProperConstraint(ResultTypeResolver$Context, Constraint)` (`org.jetbrains.kotlin.resolve.calls.inference.components.ResultTypeResolver`)

|  Change | Delta |             % | Samples | Location                                                                         |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.resolve.calls.inference.components.ResultTypeResolver:530` |

##### `runResolverForInvoke(CallInfo, ExpressionReceiverValue, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.InvokeFunctionResolveTask`)

|  Change | Delta |             % | Samples | Location                                                                     |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.calls.tower.InvokeFunctionResolveTask:551` |

##### `processOverriddenFunctions(FirTypeScope, FirNamedFunctionSymbol, Function1)` (`org.jetbrains.kotlin.fir.scopes.FirTypeScopeKt`)

|  Change | Delta |             % | Samples | Location                                             |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.scopes.FirTypeScopeKt:101` |

##### `get(FirDeclarationStatusImpl$Modifier)` (`org.jetbrains.kotlin.fir.declarations.impl.FirDeclarationStatusImpl`)

|  Change | Delta |             % | Samples | Location                                                                 |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.declarations.impl.FirDeclarationStatusImpl:31` |

##### `<init>(KtSourceElement, FirResolvePhase, FirModuleData, FirDeclarationOrigin, FirDeclarationAttributes, FirReceiverParameterSymbol, FirTypeRef, FirBasedSymbol, List)` (`org.jetbrains.kotlin.fir.declarations.impl.FirReceiverParameterImpl`)

|  Change | Delta |             % | Samples | Location                                                                 |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.declarations.impl.FirReceiverParameterImpl:27` |

##### `buildSubstitutorForOverridesCheck(FirCallableDeclaration, FirCallableDeclaration, FirSession)` (`org.jetbrains.kotlin.fir.scopes.impl.FirAbstractOverrideCheckerKt`)

|  Change | Delta |             % | Samples | Location                                                               |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.scopes.impl.FirAbstractOverrideCheckerKt:39` |

##### `isLower()` (`org.jetbrains.kotlin.resolve.calls.inference.model.ConstraintKind`)

|  Change | Delta |             % | Samples | Location                                                                |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.resolve.calls.inference.model.ConstraintKind:112` |

##### `isSubtypeOfForSingleClassifierType(TypeCheckerState, TypeSystemContext, RigidTypeMarker, RigidTypeMarker)` (`org.jetbrains.kotlin.types.AbstractTypeChecker`)

|  Change | Delta |             % | Samples | Location                                             |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.types.AbstractTypeChecker:434` |

##### `collectConflictingLocalFunctionsFrom(CheckerContext, FirBlock)` (`org.jetbrains.kotlin.fir.analysis.checkers.FirConflictsHelpersKt`)

|  Change | Delta |             % | Samples | Location                                                               |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.analysis.checkers.FirConflictsHelpersKt:643` |

##### `checkAllRepeatedAnnotations(CheckerContext, DiagnosticReporter, FirTypeRef)` (`org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirAnnotationChecker`)

|  Change | Delta |             % | Samples | Location                                                                          |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirAnnotationChecker:497` |

##### `convertToIrAnnotation(FirAnnotation)` (`org.jetbrains.kotlin.fir.backend.generators.CallAndReferenceGenerator`)

|  Change | Delta |             % | Samples | Location                                                                    |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.backend.generators.CallAndReferenceGenerator:963` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

| Change | Delta |             % |       Samples | Caller                  | Location                 |
| -----: | ----: | ------------: | ------------: | ----------------------- | ------------------------ |
|  +3.3% |   +34 | 78.0% → 78.2% | 1,018 → 1,052 | `PlatformMonitor::wait` | `libjvm.dylib`           |
|  +2.1% |    +2 |   7.4% → 7.3% |       96 → 98 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |
|  +2.1% |    +2 |   7.3% → 7.2% |       95 → 97 | `Parker::park`          | `libjvm.dylib`           |
|  +2.1% |    +2 |   7.4% → 7.3% |       96 → 98 | `PlatformEvent::park`   | `libjvm.dylib`           |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

| Change | Delta |             % |   Samples | Caller                    | Location       |
| -----: | ----: | ------------: | --------: | ------------------------- | -------------- |
|  +2.4% |   +22 | 89.4% → 89.7% | 898 → 920 | `WorkerThread::run`       | `libjvm.dylib` |
| -28.6% |    -2 |   0.7% → 0.5% |     7 → 5 | `WorkerThreads::run_task` | `libjvm.dylib` |
|  +2.1% |    +2 |          9.6% |   96 → 98 | `os::signal_wait`         | `libjvm.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|  Change | Delta |      % | Samples | Caller                              | Location                  |
| ------: | ----: | -----: | ------: | ----------------------------------- | ------------------------- |
| +200.0% |    +8 | 100.0% |  4 → 12 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                             | Location       |
| ------: | ----: | -------------: | ------: | -------------------------------------------------- | -------------- |
| +400.0% |    +4 | 100.0% → 83.3% |   1 → 5 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
|     new |    +1 |   0.0% → 16.7% |   0 → 1 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                             | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------ | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseChaitin::build_ifg_physical`                                 | `libjvm.dylib` |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `PhaseIFG::re_insert`                                              | `libjvm.dylib` |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `PhaseIFG::SquareUp`                                               | `libjvm.dylib` |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` | `libjvm.dylib` |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `PhaseChaitin::Simplify`                                           | `libjvm.dylib` |

##### `inflate_fast` (`libzip.dylib`)

| Change | Delta |      % | Samples | Caller                                          | Location       |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | -------------- |
| +42.9% |    +3 | 100.0% |  7 → 10 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                                     | Location       |
| ------: | ----: | -----: | ------: | ------------------------------------------ | -------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                            | Location       |
| ------: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                               | Location       |
| ------: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                                 | Location       |
| -----: | ----: | -----------: | ------: | -------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `Compile::Optimize`                    | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseMacroExpand::expand_macro_nodes` | `libjvm.dylib` |

##### `mach_msg2_trap` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller               | Location                 |
| -----: | ----: | -----: | ------: | -------------------- | ------------------------ |
|  +2.1% |    +2 | 100.0% | 96 → 98 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `__ulock_wait` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller                    | Location       |
| -----: | ----: | -----: | ------: | ------------------------- | -------------- |
|  +2.1% |    +2 | 100.0% | 96 → 98 | `CallJavaMainInNewThread` | `libjli.dylib` |

##### `ClassVerifier::verify_method` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                        | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `ClassVerifier::verify_class` | `libjvm.dylib` |

##### `SymbolTable::lookup_only` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                         | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |

##### `CodeCache::make_marked_nmethods_deoptimized` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                  | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `Deoptimization::deoptimize_all_marked` | `libjvm.dylib` |

##### `ValueStack::values_do` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                           | Location       |
| -----: | ----: | -----------: | ------: | -------------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `SubstitutionResolver::block_do` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `UseCountComputer::block_do`     | `libjvm.dylib` |

##### `IntervalWalker::walk_to` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                        | Location       |
| ------: | ----: | -------------: | ------: | ----------------------------- | -------------- |
| +100.0% |    +1 | 100.0% → 66.7% |   1 → 2 | `IntervalWalker::walk_to`     | `libjvm.dylib` |
|     new |    +1 |   0.0% → 33.3% |   0 → 1 | `LinearScan::compute_oop_map` | `libjvm.dylib` |

##### `LinearScanWalker::alloc_free_reg` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                               | Location       |
| ------: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `LinearScanWalker::activate_current` | `libjvm.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                            | Location       |
| ------: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `__psynch_cvbroad` (`libsystem_kernel.dylib`)

| Change | Delta |             % | Samples | Caller                               | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `CompileBroker::create_compile_task` | `libjvm.dylib` |

##### `Dict::doubhash` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller         | Location       |
| -----: | ----: | ------------: | ------: | -------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `Dict::Insert` | `libjvm.dylib` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                          | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                              | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------- | -------------- |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `G1ScanHRForRegionClosure::scan_memregion`                          | `libjvm.dylib` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `G1ParScanThreadState::steal_and_trim_queue`                        | `libjvm.dylib` |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `void G1ParCopyClosure<(G1Barrier)0, false>::do_oop_work<oopDesc*>` | `libjvm.dylib` |

##### `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                                                            | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb` | `libjvm.dylib` |

##### `inflate` (`libzip.dylib`)

|  Change | Delta |      % | Samples | Caller                                          | Location       |
| ------: | ----: | -----: | ------: | ----------------------------------------------- | -------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `ClassFileParser::skip_over_field_signature` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                                       | Location       |
| ------: | ----: | -----: | ------: | -------------------------------------------- | -------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `ClassFileParser::parse_localvariable_table` | `libjvm.dylib` |

##### `ClassFileParser::parse_constant_pool_entries` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                 | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `ClassFileParser::parse_constant_pool` | `libjvm.dylib` |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                       | Location       |
| -----: | ----: | -----------: | ------: | ---------------------------- | -------------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `InstanceKlass::find_method` | `libjvm.dylib` |

##### `ClassVerifier::verify_invoke_instructions` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                         | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------ | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `ClassVerifier::verify_method` | `libjvm.dylib` |

##### `PhaseCFG::partial_latency_of_defs` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                         | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------ | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `RegMask::is_UP` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                             | Location       |
| -----: | ----: | -----------: | ------: | ---------------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseChaitin::raise_pressure`     | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller           | Location       |
| ------: | ----: | -----: | ------: | ---------------- | -------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `Matcher::match` | `libjvm.dylib` |

##### `PhaseCFG::schedule_late` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                         | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------ | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `PhaseIdealLoop::split_if_with_blocks_pre` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                 | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |

##### `Node_Array::insert` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                               | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `Scheduling::AddNodeToAvailableList` | `libjvm.dylib` |

##### `Scheduling::AddNodeToBundle` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                     | Location       |
| -----: | ----: | ------------: | ------: | -------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `Scheduling::DoScheduling` | `libjvm.dylib` |

##### `Assembler::operand_valid_for_logical_immediate` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                            | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `MacroAssembler::mov_immediate64` | `libjvm.dylib` |

##### `ValueStack::ValueStack` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                          | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `GraphBuilder::try_inline_full` | `libjvm.dylib` |

##### `GraphBuilder::invoke` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                      | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |

##### `LIRGenerator::state_for` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|     new |    +2 | 0.0% → 100.0% |   0 → 2 | `LIRGenerator::do_ProfileInvoke` | `libjvm.dylib` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `LIRGenerator::do_CheckCast`     | `libjvm.dylib` |

##### `resolveType(FirTypeRef, TypeResolutionConfiguration, boolean, boolean, boolean, SupertypeSupplier, boolean)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl`)

| Change | Delta |             % | Samples | Caller                                                                                              | Location                                                                           |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `resolveType(FirSpecificTypeResolverTransformer, FirTypeRef, TypeResolutionConfiguration, boolean)` | `org.jetbrains.kotlin.fir.resolve.transformers.FirSpecificTypeResolverTransformer` |

##### `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirNamedFunction`)

| Change | Delta |             % | Samples | Caller                                           | Location                                                 |
| -----: | ----: | ------------: | ------: | ------------------------------------------------ | -------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `transformInplace(List, FirTransformer, Object)` | `org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt` |

##### `processConstraintsIgnoringForksData(ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector)` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`)

| Change | Delta |             % | Samples | Caller                                                                                                     | Location                                                                     |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `processConstraints(ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector` |

##### `topLevelFunctionNameIndex_delegate$lambda$0(PackagePartsCacheData)` (`org.jetbrains.kotlin.fir.deserialization.PackagePartsCacheData`)

| Change | Delta |             % | Samples | Caller     | Location                                                                                    |
| -----: | ----: | ------------: | ------: | ---------- | ------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invoke()` | `org.jetbrains.kotlin.fir.deserialization.PackagePartsCacheData$$Lambda.0x00000070015d9598` |

##### `compareTo(TowerGroup)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerGroup`)

| Change | Delta |             % | Samples | Caller                                                 | Location                                                                                 |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `compareTo(TowerResolveManager$SuspendedResolverTask)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager$SuspendedResolverTask` |

##### `isExcluded(FirResolvedImport, Name)` (`org.jetbrains.kotlin.fir.scopes.impl.FirAbstractStarImportingScope`)

| Change | Delta |             % | Samples | Caller                                     | Location                                                                       |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | ------------------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `processPropertiesByName(Name, Function1)` | `org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope` |

##### `<init>(ClassId)` (`org.jetbrains.kotlin.fir.symbols.impl.ConeClassLikeLookupTagImpl`)

| Change | Delta |             % | Samples | Caller                 | Location                                                 |
| -----: | ----: | ------------: | ------: | ---------------------- | -------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `toLookupTag(ClassId)` | `org.jetbrains.kotlin.fir.types.TypeConstructionUtilsKt` |

##### `getBoundsNullability(TypeParameterMarker)` (`org.jetbrains.kotlin.load.java.typeEnhancement.AbstractSignatureParts`)

| Change | Delta |             % | Samples | Caller                                                                                                     | Location                                                                |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `extractQualifiersFromAnnotations(AbstractSignatureParts$TypeAndDefaultQualifiers, JavaDefaultQualifiers)` | `org.jetbrains.kotlin.load.java.typeEnhancement.AbstractSignatureParts` |

##### `getSession()` (`org.jetbrains.kotlin.fir.resolve.calls.candidate.CallInfo`)

| Change | Delta |             % | Samples | Caller                                                                                    | Location                                                   |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `isVisible(FirVisibilityChecker, FirMemberDeclaration, CallInfo, FirExpression, boolean)` | `org.jetbrains.kotlin.fir.resolve.calls.VisibilityUtilsKt` |

##### `<init>(ControlFlowGraph, int, DefaultConstructorMarker)` (`org.jetbrains.kotlin.fir.resolve.dfa.cfg.CFGNode`)

| Change | Delta |             % | Samples | Caller                                           | Location                                                        |
| -----: | ----: | ------------: | ------: | ------------------------------------------------ | --------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>(ControlFlowGraph, FirFunctionCall, int)` | `org.jetbrains.kotlin.fir.resolve.dfa.cfg.FunctionCallExitNode` |

##### `getLanguageSettingsComponent(FirSession)` (`org.jetbrains.kotlin.fir.FirLanguageSettingsComponentKt`)

| Change | Delta |             % | Samples | Caller                                   | Location                                                  |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | --------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getLanguageVersionSettings(FirSession)` | `org.jetbrains.kotlin.fir.FirLanguageSettingsComponentKt` |

##### `simplifyEqualityConstraints(SmartList)` (`org.jetbrains.kotlin.resolve.calls.inference.model.MutableVariableWithConstraints`)

| Change | Delta |             % | Samples | Caller                           | Location                                                                            |
| -----: | ----: | ------------: | ------: | -------------------------------- | ----------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `simplifyConstraints(SmartList)` | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableVariableWithConstraints` |

##### `supertypes(TypeConstructorMarker)` (`org.jetbrains.kotlin.types.AbstractTypeApproximator`)

| Change | Delta |             % | Samples | Caller                                                                                                                       | Location                                              |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `doApproximateCapturedType(TypeApproximatorConfiguration, AbstractTypeApproximator$Cache, CapturedTypeMarker, boolean, int)` | `org.jetbrains.kotlin.types.AbstractTypeApproximator` |

##### `getFirstClassifierOrNull(FirScope, CallInfo, ConstructorFilter, FirSession, BodyResolveComponents)` (`org.jetbrains.kotlin.fir.resolve.calls.ConstructorProcessingKt`)

| Change | Delta |             % | Samples | Caller                                                                                               | Location                                                         |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `processConstructorsByName(FirScope, CallInfo, BodyResolveComponents, ConstructorFilter, Function1)` | `org.jetbrains.kotlin.fir.resolve.calls.ConstructorProcessingKt` |

##### `visitBlock(FirBlock, Object)` (`org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirUnusedCheckerBase$UsageVisitorBase`)

| Change | Delta |             % | Samples | Caller                       | Location                                        |
| -----: | ----: | ------------: | ------: | ---------------------------- | ----------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `accept(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.expressions.FirBlock` |

##### `getCallableId()` (`org.jetbrains.kotlin.fir.symbols.impl.FirFunctionSymbol`)

| Change | Delta |             % | Samples | Caller                                                       | Location                                                                                |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `check(CheckerContext, DiagnosticReporter, FirFunctionCall)` | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirTrimMarginBlankPrefixChecker` |

##### `check(CheckerContext, DiagnosticReporter, FirDeclaration)` (`org.jetbrains.kotlin.fir.analysis.jvm.checkers.declaration.FirJvmInvalidAndDangerousCharactersChecker`)

| Change | Delta |             % | Samples | Caller                                                 | Location                                                                                        |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visitTypeParameter(FirTypeParameter, CheckerContext)` | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.DeclarationCheckersDiagnosticComponent` |

##### `visitBlock(FirBlock, FirUnusedCheckerBase$UsageState)` (`org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirUnusedCheckerBase$UsageVisitorBase`)

| Change | Delta |             % | Samples | Caller                         | Location                                                                                       |
| -----: | ----: | ------------: | ------: | ------------------------------ | ---------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visitBlock(FirBlock, Object)` | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirUnusedCheckerBase$UsageVisitorBase` |

##### `fullyExpandedType(SessionHolder, ConeKotlinType)` (`org.jetbrains.kotlin.fir.resolve.TypeExpansionUtilsKt`)

| Change | Delta |             % | Samples | Caller                                                          | Location                                                                                          |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `check(CheckerContext, DiagnosticReporter, FirResolvedTypeRef)` | `org.jetbrains.kotlin.fir.analysis.checkers.type.FirMissingDependencyClassInTypeAliasTypeChecker` |

##### `check(CheckerContext, DiagnosticReporter, FirResolvedQualifier)` (`org.jetbrains.kotlin.fir.analysis.checkers.expression.FirOptInUsageQualifierChecker`)

| Change | Delta |             % | Samples | Caller                                                    | Location                                                                              |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `check(CheckerContext, DiagnosticReporter, FirStatement)` | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirOptInUsageQualifierChecker` |

##### `tlv_get_addr` (`libdyld.dylib`)

|  Change | Delta |            % | Samples | Caller                                           | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------------ | -------------- |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `minI_reg_regNode::Expand`                       | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `PhaseChaitin::Register_Allocate`                | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `PhaseChaitin::stretch_base_pointer_live_ranges` | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `PhaseAggressiveCoalesce::insert_copies`         | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `Parse::catch_inline_exceptions`                 | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                               | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `IndexSet::initialize` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller               | Location       |
| ------: | ----: | -----------: | ------: | -------------------- | -------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `PhaseLive::compute` | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `PhaseIFG::init`     | `libjvm.dylib` |

##### `os::malloc` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                                                                                                                                                                                                                                   | Location       |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `AllocateHeap`                                                                                                                                                                                                                                           | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::internal_insert_get<SymbolTableLookup, bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::insert<SymbolTableLookup>(Thread*, SymbolTableLookup&, Symbol const&, bool*, bool*)::NOP>` | `libjvm.dylib` |

##### `Matcher::find_shared` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller           | Location       |
| ------: | ----: | ------------: | ------: | ---------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `Matcher::match` | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -40.0% |    -2 | 100.0% |   5 → 3 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseIdealLoop::build_loop_late` | `libjvm.dylib` |

##### `PhaseRemoveUseless::PhaseRemoveUseless` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                 | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseRenumberLive::PhaseRenumberLive` | `libjvm.dylib` |

##### `Unique_Node_List::remove` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                    | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseIterGVN::remove_globally_dead_node` | `libjvm.dylib` |

##### `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `G1CardSet::add_to_howl` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                | Location       |
| ------: | ----: | ------------: | ------: | --------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `G1CardSet::add_card` | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                                   | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------ | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` | `libjvm.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|  Change | Delta |             % | Samples | Caller                                      | Location           |
| ------: | ----: | ------------: | ------: | ------------------------------------------- | ------------------ |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `jni_GetPrimitiveArrayCritical`             | `libjvm.dylib`     |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `SharedRuntime::resolve_opt_virtual_call_C` | `libjvm.dylib`     |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `InterpreterRuntime::anewarray`             | `libjvm.dylib`     |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `arraycopy(Object, int, Object, int, int)`  | `java.lang.System` |

##### `forward_copy_longs` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                             | Location    |
| ------: | ----: | -----------: | ------: | ---------------------------------- | ----------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `arrayof_jlong_disjoint_arraycopy` | `<unknown>` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `jbyte_disjoint_arraycopy`         | `<unknown>` |

##### `SymbolTable::do_lookup` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                         | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------------------- | -------------- |
| -50.0% |    -3 | 85.7% → 60.0% |   6 → 3 | `SymbolTable::lookup_only`                     | `libjvm.dylib` |
|    new |    +1 |  0.0% → 20.0% |   0 → 1 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |

##### `_platform_memcmp` (`libsystem_platform.dylib`)

|  Change | Delta |            % | Samples | Caller                                     | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------ | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `ciInstanceKlass::is_in_package`           | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `DebugInformationRecorder::describe_scope` | `libjvm.dylib` |

##### `RegionNode::is_CFG` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseIdealLoop::build_loop_tree` | `libjvm.dylib` |

##### `PhiNode::Ideal` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                           | Location       |
| ------: | ----: | -----------: | ------: | -------------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseIterGVN::transform_old`    | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |

##### `CProjNode::is_block_proj` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                         | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------ | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseChaitin::Split`          | `libjvm.dylib` |

##### `G1BlockOffsetTablePart::update_for_block_work` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                            | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib` |

##### `nanov2_find_block_and_allocate` (`libsystem_malloc.dylib`)

|  Change | Delta |             % | Samples | Caller                     | Location                 |
| ------: | ----: | ------------: | ------: | -------------------------- | ------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `nanov2_allocate_outlined` | `libsystem_malloc.dylib` |

##### `fwd_copy_again` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                          | Location       |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | -------------- |
| -33.3% |    -1 | 100.0% |   3 → 2 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |

##### `State::_sub_Op_AndI` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller       | Location       |
| ------: | ----: | ------------: | ------: | ------------ | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `State::DFA` | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                                   | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------ | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` | `libjvm.dylib` |

##### `StackMapFrame::is_assignable_to` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                          | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `StackMapTable::match_stackmap` | `libjvm.dylib` |

##### `StackMapTable::StackMapTable` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                        | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ClassVerifier::verify_class` | `libjvm.dylib` |

##### `StackMapTable::check_jump_target` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                         | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------ | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ClassVerifier::verify_switch` | `libjvm.dylib` |

##### `char* UNICODE::as_utf8<signed char>` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java_lang_String::as_symbol_or_null` | `libjvm.dylib` |

##### `bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::internal_insert_get<SymbolTableLookup, bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::insert<SymbolTableLookup>(Thread*, SymbolTableLookup&, Symbol const&, bool*, bool*)::NOP>` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                     | Location       |
| ------: | ----: | ------------: | ------: | -------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `SymbolTable::new_symbols` | `libjvm.dylib` |

##### `ClassFileParser::parse_constant_pool` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                          | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ClassFileParser::parse_stream` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<Symbol*, GrowableArray<Symbol*>>::expand_to` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                   | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ClassVerifier::create_temporary_symbol` | `libjvm.dylib` |

##### `LinearScan::build_intervals` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                       | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `CodeBuffer::finalize_oop_references` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                 | Location       |
| ------: | ----: | ------------: | ------: | ---------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `nmethod::new_nmethod` | `libjvm.dylib` |

##### `Scheduling::ComputeRegisterAntidependencies` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                     | Location       |
| ------: | ----: | ------------: | ------: | -------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `Scheduling::DoScheduling` | `libjvm.dylib` |

##### `Type::hashcons` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller           | Location       |
| ------: | ----: | ------------: | ------: | ---------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `TypeFunc::make` | `libjvm.dylib` |

##### `RegionNode::Opcode` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `IdealLoopTree::iteration_split` | `libjvm.dylib` |

##### `Matcher::match_tree` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller           | Location       |
| ------: | ----: | ------------: | ------: | ---------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Matcher::xform` | `libjvm.dylib` |

##### `ProjNode::Opcode` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                 | Location       |
| ------: | ----: | ------------: | ------: | ---------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Matcher::find_shared` | `libjvm.dylib` |

##### `Node::rematerialize` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -33.3% |    -1 | 100.0% |   3 → 2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `zzUnpackcmap_blocks(String, int, int[])` (`org.jetbrains.kotlin.lexer._JetLexer`)

|  Change | Delta |             % | Samples | Caller                  | Location                               |
| ------: | ----: | ------------: | ------: | ----------------------- | -------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `zzUnpackcmap_blocks()` | `org.jetbrains.kotlin.lexer._JetLexer` |

##### `<init>()` (`org.jetbrains.kotlin.KtSourceElement`)

|  Change | Delta |             % | Samples | Caller                             | Location                               |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(DefaultConstructorMarker)` | `org.jetbrains.kotlin.KtSourceElement` |

##### `<init>(FirModuleData, FirDeclarationOrigin, KtSourceElement, List, FirTypeRef, boolean, FirPropertySymbol, FirDeclarationStatus, FirResolvePhase, int, DefaultConstructorMarker)` (`org.jetbrains.kotlin.fir.declarations.impl.FirDefaultPropertyBackingField`)

|  Change | Delta |             % | Samples | Caller                                                                                                            | Location                                                                         |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `convertBackingField(LighterASTNode, FirPropertySymbol, ModifierList, FirTypeRef, boolean, List, LighterASTNode)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder` |

##### `newBuilderForType()` (`org.jetbrains.kotlin.metadata.jvm.JvmProtoBuf$JvmMethodSignature`)

|  Change | Delta |             % | Samples | Caller                | Location                                                           |
| ------: | ----: | ------------: | ------: | --------------------- | ------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `newBuilderForType()` | `org.jetbrains.kotlin.metadata.jvm.JvmProtoBuf$JvmMethodSignature` |

##### `hasSupertypePathToParameter$toNextTypeParameter(ConeKotlinType)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirTypeResolveTransformer`)

|  Change | Delta |             % | Samples | Caller                                                                 | Location                                                                  |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `hasSupertypePathToParameter(FirTypeParameter, FirTypeParameter, Set)` | `org.jetbrains.kotlin.fir.resolve.transformers.FirTypeResolveTransformer` |

##### `invoke(Object, Object, Object)` (`org.jetbrains.kotlin.fir.symbols.FirLazyDeclarationResolverKt$lazyResolveToPhase$1`)

|  Change | Delta |             % | Samples | Caller                                                                             | Location                                                        |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeLazyResolveToPhase(FirElementWithResolveState, FirResolvePhase, Function3)` | `org.jetbrains.kotlin.fir.symbols.FirLazyDeclarationResolverKt` |

##### `transformValueParameters(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirAnonymousFunctionImpl`)

|  Change | Delta |             % | Samples | Caller                                             | Location                                                              |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | --------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `transformValueParameters(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.declarations.impl.FirAnonymousFunctionImpl` |

##### `orderNodes(boolean)` (`org.jetbrains.kotlin.fir.resolve.dfa.cfg.ControlFlowGraph`)

|  Change | Delta |             % | Samples | Caller       | Location                                                    |
| ------: | ----: | ------------: | ------: | ------------ | ----------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `complete()` | `org.jetbrains.kotlin.fir.resolve.dfa.cfg.ControlFlowGraph` |

##### `hashCode()` (`org.jetbrains.kotlin.fir.types.ConeLookupTagBasedType`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                                  | Location                                                        |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(ConstraintKind, KotlinTypeMarker, IncorporationConstraintPosition, int, Set, boolean, boolean, OnlyInputTypeConstraintPosition, int, DefaultConstructorMarker)` | `org.jetbrains.kotlin.resolve.calls.inference.model.Constraint` |

##### `isProperConstraint(ResultTypeResolver$Context, Constraint)` (`org.jetbrains.kotlin.resolve.calls.inference.components.ResultTypeResolver`)

|  Change | Delta |             % | Samples | Caller                                                                                              | Location                                                                     |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `findResultIfThereIsEqualsConstraint(ResultTypeResolver$Context, VariableWithConstraints, boolean)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ResultTypeResolver` |

##### `runResolverForInvoke(CallInfo, ExpressionReceiverValue, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.InvokeFunctionResolveTask`)

|  Change | Delta |             % | Samples | Caller                  | Location                                                                                                      |
| ------: | ----: | ------------: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirInvokeResolveTowerExtension$enqueueResolverTasksForInvoke$3` |

##### `processOverriddenFunctions(FirTypeScope, FirNamedFunctionSymbol, Function1)` (`org.jetbrains.kotlin.fir.scopes.FirTypeScopeKt`)

|  Change | Delta |             % | Samples | Caller                                                                         | Location                                                               |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `isHiddenForThisCallSite(CheckerSink, FirCallableSymbol, CallInfo, Candidate)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckHiddenDeclaration` |

##### `get(FirDeclarationStatusImpl$Modifier)` (`org.jetbrains.kotlin.fir.declarations.impl.FirDeclarationStatusImpl`)

|  Change | Delta |             % | Samples | Caller       | Location                                                              |
| ------: | ----: | ------------: | ------: | ------------ | --------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `isInline()` | `org.jetbrains.kotlin.fir.declarations.impl.FirDeclarationStatusImpl` |

##### `<init>(KtSourceElement, FirResolvePhase, FirModuleData, FirDeclarationOrigin, FirDeclarationAttributes, FirReceiverParameterSymbol, FirTypeRef, FirBasedSymbol, List)` (`org.jetbrains.kotlin.fir.declarations.impl.FirReceiverParameterImpl`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                                                            | Location                                                              |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(KtSourceElement, FirResolvePhase, FirModuleData, FirDeclarationOrigin, FirDeclarationAttributes, FirReceiverParameterSymbol, FirTypeRef, FirBasedSymbol, List, DefaultConstructorMarker)` | `org.jetbrains.kotlin.fir.declarations.impl.FirReceiverParameterImpl` |

##### `buildSubstitutorForOverridesCheck(FirCallableDeclaration, FirCallableDeclaration, FirSession)` (`org.jetbrains.kotlin.fir.scopes.impl.FirAbstractOverrideCheckerKt`)

|  Change | Delta |             % | Samples | Caller                                                                                                | Location                                                          |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `buildTypeParametersSubstitutorIfCompatible(FirCallableDeclaration, FirCallableDeclaration, boolean)` | `org.jetbrains.kotlin.fir.scopes.impl.FirStandardOverrideChecker` |

##### `isLower()` (`org.jetbrains.kotlin.resolve.calls.inference.model.ConstraintKind`)

|  Change | Delta |             % | Samples | Caller                                                                   | Location                                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `hasRequiredKind(Constraint, CalculatorForNestedCall$FixationDirection)` | `org.jetbrains.kotlin.fir.resolve.inference.CalculatorForNestedCall` |

##### `isSubtypeOfForSingleClassifierType(TypeCheckerState, TypeSystemContext, RigidTypeMarker, RigidTypeMarker)` (`org.jetbrains.kotlin.types.AbstractTypeChecker`)

|  Change | Delta |             % | Samples | Caller                                                                                                  | Location                                         |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `completeIsSubTypeOf(TypeCheckerState, TypeSystemContext, KotlinTypeMarker, KotlinTypeMarker, boolean)` | `org.jetbrains.kotlin.types.AbstractTypeChecker` |

##### `collectConflictingLocalFunctionsFrom(CheckerContext, FirBlock)` (`org.jetbrains.kotlin.fir.analysis.checkers.FirConflictsHelpersKt`)

|  Change | Delta |             % | Samples | Caller                                                                            | Location                                                                              |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `checkForLocalConflictingFunctions(CheckerContext, DiagnosticReporter, FirBlock)` | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirConflictsExpressionChecker` |

##### `checkAllRepeatedAnnotations(CheckerContext, DiagnosticReporter, FirTypeRef)` (`org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirAnnotationChecker`)

|  Change | Delta |             % | Samples | Caller                                                                                 | Location                                                                      |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `checkAnnotationContainer(CheckerContext, DiagnosticReporter, FirAnnotationContainer)` | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirAnnotationChecker` |

##### `convertToIrAnnotation(FirAnnotation)` (`org.jetbrains.kotlin.fir.backend.generators.CallAndReferenceGenerator`)

|  Change | Delta |             % | Samples | Caller                                                                                     | Location                                               |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `toIrType(ConeKotlinType, ConversionTypeOrigin, List, boolean, boolean, boolean, boolean)` | `org.jetbrains.kotlin.fir.backend.Fir2IrTypeConverter` |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |       Samples | Function                                                      | Location                      |
| ------: | ----: | ------------: | ------------: | ------------------------------------------------------------- | ----------------------------- |
|   +2.0% |   +47 | 82.5% → 82.9% | 2,302 → 2,349 | `_pthread_start`                                              | `libsystem_pthread.dylib`     |
|   +2.0% |   +47 | 82.5% → 82.9% | 2,302 → 2,349 | `thread_start`                                                | `libsystem_pthread.dylib`     |
|   +2.0% |   +45 | 79.0% → 79.4% | 2,205 → 2,250 | `Thread::call_run`                                            | `libjvm.dylib`                |
|   +2.0% |   +45 | 79.0% → 79.4% | 2,205 → 2,250 | `thread_native_entry`                                         | `libjvm.dylib`                |
|   +3.1% |   +40 | 46.8% → 47.4% | 1,305 → 1,345 | `__psynch_cvwait`                                             | `libsystem_kernel.dylib`      |
|   +3.7% |   +38 | 36.5% → 37.2% | 1,018 → 1,056 | `PlatformMonitor::wait`                                       | `libjvm.dylib`                |
|   +3.2% |   +24 | 27.0% → 27.4% |     753 → 777 | `Monitor::wait_without_safepoint_check`                       | `libjvm.dylib`                |
|   +2.2% |   +22 | 36.0% → 36.2% | 1,004 → 1,026 | `semaphore_wait_trap`                                         | `libsystem_kernel.dylib`      |
|   +2.1% |   +19 | 32.6% → 32.8% |     911 → 930 | `WorkerThread::run`                                           | `libjvm.dylib`                |
|   +5.3% |   +14 |   9.5% → 9.8% |     265 → 279 | `Monitor::wait`                                               | `libjvm.dylib`                |
|   +4.3% |   +12 | 10.1% → 10.4% |     282 → 294 | `ConcurrentGCThread::run`                                     | `libjvm.dylib`                |
|   +6.6% |   +11 |   6.0% → 6.3% |     167 → 178 | `CompileQueue::get`                                           | `libjvm.dylib`                |
|   +1.2% |   +10 | 29.4% → 29.3% |     820 → 830 | `JavaThread::thread_main_inner`                               | `libjvm.dylib`                |
| +200.0% |    +8 |   0.1% → 0.4% |        4 → 12 | `__psynch_mutexwait`                                          | `libsystem_kernel.dylib`      |
| +200.0% |    +8 |   0.1% → 0.4% |        4 → 12 | `_pthread_mutex_firstfit_lock_slow`                           | `libsystem_pthread.dylib`     |
|   +8.9% |    +8 |   3.2% → 3.5% |       90 → 98 | `G1ConcurrentRefineThread::run_service`                       | `libjvm.dylib`                |
|   +7.8% |    +7 |   3.2% → 3.4% |       90 → 97 | `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` | `libjvm.dylib`                |
|     new |    +6 |   0.0% → 0.2% |         0 → 6 | `getValue()`                                                  | `kotlin.SynchronizedLazyImpl` |
| +166.7% |    +5 |   0.1% → 0.3% |         3 → 8 | `PhaseIdealLoop::build_loop_late`                             | `libjvm.dylib`                |
|  +71.4% |    +5 |   0.3% → 0.4% |        7 → 12 | `PhaseIterGVN::optimize`                                      | `libjvm.dylib`                |

##### Native

|  Change | Delta |             % |       Samples | Function                                                      | Location                  |
| ------: | ----: | ------------: | ------------: | ------------------------------------------------------------- | ------------------------- |
|   +2.0% |   +47 | 82.5% → 82.9% | 2,302 → 2,349 | `_pthread_start`                                              | `libsystem_pthread.dylib` |
|   +2.0% |   +47 | 82.5% → 82.9% | 2,302 → 2,349 | `thread_start`                                                | `libsystem_pthread.dylib` |
|   +2.0% |   +45 | 79.0% → 79.4% | 2,205 → 2,250 | `Thread::call_run`                                            | `libjvm.dylib`            |
|   +2.0% |   +45 | 79.0% → 79.4% | 2,205 → 2,250 | `thread_native_entry`                                         | `libjvm.dylib`            |
|   +3.1% |   +40 | 46.8% → 47.4% | 1,305 → 1,345 | `__psynch_cvwait`                                             | `libsystem_kernel.dylib`  |
|   +3.7% |   +38 | 36.5% → 37.2% | 1,018 → 1,056 | `PlatformMonitor::wait`                                       | `libjvm.dylib`            |
|   +3.2% |   +24 | 27.0% → 27.4% |     753 → 777 | `Monitor::wait_without_safepoint_check`                       | `libjvm.dylib`            |
|   +2.2% |   +22 | 36.0% → 36.2% | 1,004 → 1,026 | `semaphore_wait_trap`                                         | `libsystem_kernel.dylib`  |
|   +2.1% |   +19 | 32.6% → 32.8% |     911 → 930 | `WorkerThread::run`                                           | `libjvm.dylib`            |
|   +5.3% |   +14 |   9.5% → 9.8% |     265 → 279 | `Monitor::wait`                                               | `libjvm.dylib`            |
|   +4.3% |   +12 | 10.1% → 10.4% |     282 → 294 | `ConcurrentGCThread::run`                                     | `libjvm.dylib`            |
|   +1.2% |   +10 | 29.4% → 29.3% |     820 → 830 | `JavaThread::thread_main_inner`                               | `libjvm.dylib`            |
| +200.0% |    +8 |   0.1% → 0.4% |        4 → 12 | `__psynch_mutexwait`                                          | `libsystem_kernel.dylib`  |
| +200.0% |    +8 |   0.1% → 0.4% |        4 → 12 | `_pthread_mutex_firstfit_lock_slow`                           | `libsystem_pthread.dylib` |
|   +8.9% |    +8 |   3.2% → 3.5% |       90 → 98 | `G1ConcurrentRefineThread::run_service`                       | `libjvm.dylib`            |
|   +7.8% |    +7 |   3.2% → 3.4% |       90 → 97 | `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` | `libjvm.dylib`            |
|   +2.1% |    +4 |          6.9% |     192 → 196 | `JLI_Launch`                                                  | `libjli.dylib`            |
|   +2.1% |    +4 |          6.9% |     192 → 196 | `main`                                                        | `java`                    |
| +400.0% |    +4 |  <0.1% → 0.2% |         1 → 5 | `SharedRuntime::resolve_sub_helper`                           | `libjvm.dylib`            |
| +400.0% |    +4 |  <0.1% → 0.2% |         1 → 5 | `SharedRuntime::resolve_helper`                               | `libjvm.dylib`            |

##### Compiler

|  Change | Delta |            % |   Samples | Function                                    | Location       |
| ------: | ----: | -----------: | --------: | ------------------------------------------- | -------------- |
|   +6.6% |   +11 |  6.0% → 6.3% | 167 → 178 | `CompileQueue::get`                         | `libjvm.dylib` |
| +166.7% |    +5 |  0.1% → 0.3% |     3 → 8 | `PhaseIdealLoop::build_loop_late`           | `libjvm.dylib` |
|  +71.4% |    +5 |  0.3% → 0.4% |    7 → 12 | `PhaseIterGVN::optimize`                    | `libjvm.dylib` |
|  +12.2% |    +5 |  1.5% → 1.6% |   41 → 46 | `Compilation::compile_java_method`          | `libjvm.dylib` |
|  +11.4% |    +4 |  1.3% → 1.4% |   35 → 39 | `Compile::Optimize`                         | `libjvm.dylib` |
|  +23.5% |    +4 |  0.6% → 0.7% |   17 → 21 | `Compilation::emit_lir`                     | `libjvm.dylib` |
|  +66.7% |    +4 |  0.2% → 0.4% |    6 → 10 | `IntervalWalker::walk_to`                   | `libjvm.dylib` |
| +400.0% |    +4 | <0.1% → 0.2% |     1 → 5 | `IndexSetIterator::advance_and_next`        | `libjvm.dylib` |
| +300.0% |    +3 | <0.1% → 0.1% |     1 → 4 | `Type::hashcons`                            | `libjvm.dylib` |
| +300.0% |    +3 | <0.1% → 0.1% |     1 → 4 | `ConnectionGraph::do_analysis`              | `libjvm.dylib` |
|  +42.9% |    +3 |  0.3% → 0.4% |    7 → 10 | `PhaseIterGVN::transform_old`               | `libjvm.dylib` |
| +150.0% |    +3 |  0.1% → 0.2% |     2 → 5 | `PhaseChaitin::elide_copy`                  | `libjvm.dylib` |
|  +37.5% |    +3 |  0.3% → 0.4% |    8 → 11 | `Compilation::emit_code_body`               | `libjvm.dylib` |
|  +50.0% |    +3 |  0.2% → 0.3% |     6 → 9 | `LinearScan::allocate_registers`            | `libjvm.dylib` |
| +300.0% |    +3 | <0.1% → 0.1% |     1 → 4 | `PhaseGVN::transform_no_reclaim`            | `libjvm.dylib` |
|     new |    +3 |  0.0% → 0.1% |     0 → 3 | `LIRGenerator::do_ProfileInvoke`            | `libjvm.dylib` |
|     new |    +3 |  0.0% → 0.1% |     0 → 3 | `BlockList::iterate_backward`               | `libjvm.dylib` |
|     new |    +3 |  0.0% → 0.1% |     0 → 3 | `PhaseChaitin::Simplify`                    | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.1% |     1 → 3 | `ConnectionGraph::compute_escape`           | `libjvm.dylib` |
| +100.0% |    +2 |         0.1% |     2 → 4 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |

##### Ours

| Change | Delta |           % | Samples | Function                                                                                                             | Location                                                               |
| -----: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  +5.6% |    +5 | 3.2% → 3.4% | 90 → 95 | `run(String[])`                                                                                                      | `org.jetbrains.kotlin.preloading.Preloader`                            |
|  +5.6% |    +5 | 3.2% → 3.4% | 90 → 95 | `main(String[])`                                                                                                     | `org.jetbrains.kotlin.preloading.Preloader`                            |
|  +6.8% |    +5 | 2.7% → 2.8% | 74 → 79 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                   | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                |
|  +6.8% |    +5 | 2.6% → 2.8% | 73 → 78 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                             | `org.jetbrains.kotlin.cli.common.CLICompiler`                          |
|  +6.8% |    +5 | 2.6% → 2.8% | 73 → 78 | `exec(PrintStream, MessageRenderer, String[])`                                                                       | `org.jetbrains.kotlin.cli.common.CLICompiler`                          |
|  +6.8% |    +5 | 2.6% → 2.8% | 73 → 78 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                |
|  +6.9% |    +5 | 2.6% → 2.7% | 72 → 77 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                          |
|  +7.1% |    +5 | 2.5% → 2.6% | 70 → 75 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                           |
|  +7.1% |    +5 | 2.5% → 2.6% | 70 → 75 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                               | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                           |
|  +7.1% |    +5 | 2.5% → 2.6% | 70 → 75 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`                          |
| +83.3% |    +5 | 0.2% → 0.4% |  6 → 11 | `processLevel(TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)`                                 | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask` |
| +83.3% |    +5 | 0.2% → 0.4% |  6 → 11 | `access$processLevel(FirBaseTowerResolveTask, TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask` |
|  +5.3% |    +4 | 2.7% → 2.8% | 75 → 79 | `doMain(CLICompiler, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                |
|  +5.3% |    +4 | 2.7% → 2.8% | 75 → 79 | `main(String[])`                                                                                                     | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`                 |
|  +5.3% |    +4 | 2.7% → 2.8% | 75 → 79 | `main(String[])`                                                                                                     | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                           |
|  +5.7% |    +4 | 2.5% → 2.6% | 70 → 74 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                       | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                      |
|  +5.7% |    +4 | 2.5% → 2.6% | 70 → 74 | `phaseBody(LoggingContext, Object)`                                                                                  | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                      |
|  +5.7% |    +4 | 2.5% → 2.6% | 70 → 74 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                           | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`                |
|  +5.7% |    +4 | 2.5% → 2.6% | 70 → 74 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                           | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase`            |
|  +5.7% |    +4 | 2.5% → 2.6% | 70 → 74 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`                                                 | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                   |

#### Improvements

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |            % |   Samples | Function                                               | Location                                                      |
| ------: | ----: | -----------: | --------: | ------------------------------------------------------ | ------------------------------------------------------------- |
|  -10.4% |   -13 |  4.5% → 4.0% | 125 → 112 | `Compile::Compile`                                     | `libjvm.dylib`                                                |
|  -10.4% |   -13 |  4.5% → 4.0% | 125 → 112 | `C2Compiler::compile_method`                           | `libjvm.dylib`                                                |
|  -18.1% |   -13 |  2.6% → 2.1% |   72 → 59 | `Compile::Code_Gen`                                    | `libjvm.dylib`                                                |
| removed |   -13 |  0.5% → 0.0% |    13 → 0 | `(anonymous)`                                          | `<unknown>`                                                   |
|   -6.3% |   -11 |  6.2% → 5.7% | 174 → 163 | `CompileBroker::invoke_compiler_on_method`             | `libjvm.dylib`                                                |
|  -46.7% |    -7 |  0.5% → 0.3% |    15 → 8 | `Matcher::match`                                       | `libjvm.dylib`                                                |
|  -70.0% |    -7 |  0.4% → 0.1% |    10 → 3 | `ciEnv::register_method`                               | `libjvm.dylib`                                                |
|  -66.7% |    -6 |  0.3% → 0.1% |     9 → 3 | `nmethod::new_nmethod`                                 | `libjvm.dylib`                                                |
|  -71.4% |    -5 |  0.3% → 0.1% |     7 → 2 | `Matcher::match_tree`                                  | `libjvm.dylib`                                                |
|  -41.7% |    -5 |  0.4% → 0.2% |    12 → 7 | `PredictedCallGenerator::generate`                     | `libjvm.dylib`                                                |
|  -50.0% |    -5 |  0.4% → 0.2% |    10 → 5 | `completeCall(FirExpression, ResolutionMode, boolean)` | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter` |
| removed |    -5 |  0.2% → 0.0% |     5 → 0 | `PhaseIdealLoop::build_loop_early`                     | `libjvm.dylib`                                                |
|  -19.0% |    -4 |  0.8% → 0.6% |   21 → 17 | `PhaseIdealLoop::build_and_optimize`                   | `libjvm.dylib`                                                |
|  -19.0% |    -4 |  0.8% → 0.6% |   21 → 17 | `PhaseIdealLoop::PhaseIdealLoop`                       | `libjvm.dylib`                                                |
|  -80.0% |    -4 | 0.2% → <0.1% |     5 → 1 | `tlv_get_addr`                                         | `libdyld.dylib`                                               |
|  -44.4% |    -4 |  0.3% → 0.2% |     9 → 5 | `Matcher::xform`                                       | `libjvm.dylib`                                                |
|  -80.0% |    -4 | 0.2% → <0.1% |     5 → 1 | `Matcher::find_shared`                                 | `libjvm.dylib`                                                |
|  -44.4% |    -4 |  0.3% → 0.2% |     9 → 5 | `PhaseCFG::global_code_motion`                         | `libjvm.dylib`                                                |
|  -30.8% |    -4 |  0.5% → 0.3% |    13 → 9 | `Parse::do_call`                                       | `libjvm.dylib`                                                |
|  -40.0% |    -4 |  0.4% → 0.2% |    10 → 6 | `PhaseOutput::Output`                                  | `libjvm.dylib`                                                |

##### Native

|  Change | Delta |            % | Samples | Function                                                                                               | Location        |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------ | --------------- |
|  -66.7% |    -6 |  0.3% → 0.1% |   9 → 3 | `nmethod::new_nmethod`                                                                                 | `libjvm.dylib`  |
|  -41.7% |    -5 |  0.4% → 0.2% |  12 → 7 | `PredictedCallGenerator::generate`                                                                     | `libjvm.dylib`  |
|  -80.0% |    -4 | 0.2% → <0.1% |   5 → 1 | `tlv_get_addr`                                                                                         | `libdyld.dylib` |
|  -30.8% |    -4 |  0.5% → 0.3% |  13 → 9 | `Parse::do_call`                                                                                       | `libjvm.dylib`  |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib`  |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `os::malloc`                                                                                           | `libjvm.dylib`  |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `G1ConcurrentRebuildAndScrub::rebuild_and_scrub`                                                       | `libjvm.dylib`  |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `G1ConcurrentMarkThread::phase_rebuild_and_scrub`                                                      | `libjvm.dylib`  |
|  -60.0% |    -3 |  0.2% → 0.1% |   5 → 2 | `G1ConcurrentMarkThread::concurrent_mark_cycle_do`                                                     | `libjvm.dylib`  |
|  -20.0% |    -3 |  0.5% → 0.4% | 15 → 12 | `Parse::do_one_block`                                                                                  | `libjvm.dylib`  |
|  -20.0% |    -3 |  0.5% → 0.4% | 15 → 12 | `Parse::do_all_blocks`                                                                                 | `libjvm.dylib`  |
|  -20.0% |    -3 |  0.5% → 0.4% | 15 → 12 | `Parse::Parse`                                                                                         | `libjvm.dylib`  |
|  -20.0% |    -3 |  0.5% → 0.4% | 15 → 12 | `ParseGenerator::generate`                                                                             | `libjvm.dylib`  |
|  -60.0% |    -3 |  0.2% → 0.1% |   5 → 2 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object`                               | `libjvm.dylib`  |
|  -60.0% |    -3 |  0.2% → 0.1% |   5 → 2 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region`                     | `libjvm.dylib`  |
|  -60.0% |    -3 |  0.2% → 0.1% |   5 → 2 | `G1RebuildRSAndScrubTask::work`                                                                        | `libjvm.dylib`  |
|  -60.0% |    -3 |  0.2% → 0.1% |   5 → 2 | `InterpreterRuntime::resolve_invoke`                                                                   | `libjvm.dylib`  |
|  -50.0% |    -3 |  0.2% → 0.1% |   6 → 3 | `InterpreterRuntime::resolve_from_cache`                                                               | `libjvm.dylib`  |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `break_stack_range`                                                                                    | `<unknown>`     |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `nmethod::nmethod`                                                                                     | `libjvm.dylib`  |

##### Compiler

|  Change | Delta |            % |   Samples | Function                                   | Location       |
| ------: | ----: | -----------: | --------: | ------------------------------------------ | -------------- |
|  -10.4% |   -13 |  4.5% → 4.0% | 125 → 112 | `Compile::Compile`                         | `libjvm.dylib` |
|  -10.4% |   -13 |  4.5% → 4.0% | 125 → 112 | `C2Compiler::compile_method`               | `libjvm.dylib` |
|  -18.1% |   -13 |  2.6% → 2.1% |   72 → 59 | `Compile::Code_Gen`                        | `libjvm.dylib` |
|   -6.3% |   -11 |  6.2% → 5.7% | 174 → 163 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  -46.7% |    -7 |  0.5% → 0.3% |    15 → 8 | `Matcher::match`                           | `libjvm.dylib` |
|  -70.0% |    -7 |  0.4% → 0.1% |    10 → 3 | `ciEnv::register_method`                   | `libjvm.dylib` |
|  -71.4% |    -5 |  0.3% → 0.1% |     7 → 2 | `Matcher::match_tree`                      | `libjvm.dylib` |
| removed |    -5 |  0.2% → 0.0% |     5 → 0 | `PhaseIdealLoop::build_loop_early`         | `libjvm.dylib` |
|  -19.0% |    -4 |  0.8% → 0.6% |   21 → 17 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
|  -19.0% |    -4 |  0.8% → 0.6% |   21 → 17 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
|  -44.4% |    -4 |  0.3% → 0.2% |     9 → 5 | `Matcher::xform`                           | `libjvm.dylib` |
|  -80.0% |    -4 | 0.2% → <0.1% |     5 → 1 | `Matcher::find_shared`                     | `libjvm.dylib` |
|  -44.4% |    -4 |  0.3% → 0.2% |     9 → 5 | `PhaseCFG::global_code_motion`             | `libjvm.dylib` |
|  -40.0% |    -4 |  0.4% → 0.2% |    10 → 6 | `PhaseOutput::Output`                      | `libjvm.dylib` |
| removed |    -4 |  0.1% → 0.0% |     4 → 0 | `LinearScan::build_intervals`              | `libjvm.dylib` |
| removed |    -3 |  0.1% → 0.0% |     3 → 0 | `IndexSet::initialize`                     | `libjvm.dylib` |
|  -23.1% |    -3 |  0.5% → 0.4% |   13 → 10 | `Compile::optimize_loops`                  | `libjvm.dylib` |
|  -50.0% |    -3 |  0.2% → 0.1% |     6 → 3 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
|  -33.3% |    -3 |  0.3% → 0.2% |     9 → 6 | `PhaseCFG::do_global_code_motion`          | `libjvm.dylib` |
|  -75.0% |    -3 | 0.1% → <0.1% |     4 → 1 | `Matcher::Label_Root`                      | `libjvm.dylib` |

##### Ours

|  Change | Delta |            % | Samples | Function                                                                                                                                                                     | Location                                                                                                           |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
|  -50.0% |    -5 |  0.4% → 0.2% |  10 → 5 | `completeCall(FirExpression, ResolutionMode, boolean)`                                                                                                                       | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`                                                      |
|  -42.9% |    -3 |  0.3% → 0.1% |   7 → 4 | `runCompletion(ConstraintSystemCompletionContext, ConstraintSystemCompletionMode, List, ConeKotlinType, ResolutionContext, ConstraintSystemCompleter$PostponedAtomAnalyzer)` | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`                                             |
|  -42.9% |    -3 |  0.3% → 0.1% |   7 → 4 | `complete(ConstraintSystemCompletionContext, ConstraintSystemCompletionMode, List, ConeKotlinType, ResolutionContext, ConstraintSystemCompleter$PostponedAtomAnalyzer)`      | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`                                             |
|  -42.9% |    -3 |  0.3% → 0.1% |   7 → 4 | `runCompletionForCall(Candidate, ConstraintSystemCompletionMode, FirExpression, ConeKotlinType, PostponedArgumentsAnalyzer)`                                                 | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`                                                      |
|  -50.0% |    -2 |         0.1% |   4 → 2 | `accept(FirVisitor, Object)`                                                                                                                                                 | `org.jetbrains.kotlin.fir.declarations.FirRegularClass`                                                            |
|  -66.7% |    -2 | 0.1% → <0.1% |   3 → 1 | `completeIsSubTypeOf(TypeCheckerState, TypeSystemContext, KotlinTypeMarker, KotlinTypeMarker, boolean)`                                                                      | `org.jetbrains.kotlin.types.AbstractTypeChecker`                                                                   |
|  -66.7% |    -2 | 0.1% → <0.1% |   3 → 1 | `isSubtypeOf(TypeCheckerState, KotlinTypeMarker, KotlinTypeMarker, boolean)`                                                                                                 | `org.jetbrains.kotlin.types.AbstractTypeChecker`                                                                   |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `runIsSubtypeOf$default(ConstraintInjector$TypeCheckerStateForConstraintInjector, KotlinTypeMarker, KotlinTypeMarker, boolean, boolean, int, Object)`                        | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector$TypeCheckerStateForConstraintInjector` |
|  -11.8% |    -2 |  0.6% → 0.5% | 17 → 15 | `transformFunctionCall(FirFunctionCall, ResolutionMode)`                                                                                                                     | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`                      |
|  -11.8% |    -2 |  0.6% → 0.5% | 17 → 15 | `transformFunctionCall(FirFunctionCall, ResolutionMode)`                                                                                                                     | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`           |
|  -11.8% |    -2 |  0.6% → 0.5% | 17 → 15 | `transformFunctionCall(FirFunctionCall, Object)`                                                                                                                             | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`           |
|  -11.8% |    -2 |  0.6% → 0.5% | 17 → 15 | `transform(FirTransformer, Object)`                                                                                                                                          | `org.jetbrains.kotlin.fir.expressions.FirFunctionCall`                                                             |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `check(CheckerSink, ResolutionContext, Candidate, Continuation)`                                                                                                             | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckHiddenDeclaration`                                             |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `fixVariable(ConstraintSystemCompletionContext, VariableWithConstraints)`                                                                                                    | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`                                             |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `fixVariableIfReady(ConstraintSystemCompletionContext, VariableFixationFinder$VariableForFixation)`                                                                          | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`                                             |
|  -50.0% |    -2 |         0.1% |   4 → 2 | `transformWhileLoop(FirWhileLoop, ResolutionMode)`                                                                                                                           | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer`            |
|  -50.0% |    -2 |         0.1% |   4 → 2 | `transformWhileLoop(FirWhileLoop, ResolutionMode)`                                                                                                                           | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`           |
|  -50.0% |    -2 |         0.1% |   4 → 2 | `transformWhileLoop(FirWhileLoop, Object)`                                                                                                                                   | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`           |
|  -50.0% |    -2 |         0.1% |   4 → 2 | `transform(FirTransformer, Object)`                                                                                                                                          | `org.jetbrains.kotlin.fir.expressions.FirWhileLoop`                                                                |
|  -40.0% |    -2 |  0.2% → 0.1% |   5 → 3 | `transformResult(FirTransformer, Object)`                                                                                                                                    | `org.jetbrains.kotlin.fir.expressions.impl.FirRegularWhenBranch`                                                   |

#### Callers

Callers with the largest change in contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

| Change | Delta |      % |       Samples | Caller         | Location                  |
| -----: | ----: | -----: | ------------: | -------------- | ------------------------- |
|  +2.0% |   +47 | 100.0% | 2,302 → 2,349 | `thread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

| Change | Delta |      % |       Samples | Caller                | Location       |
| -----: | ----: | -----: | ------------: | --------------------- | -------------- |
|  +2.0% |   +45 | 100.0% | 2,205 → 2,250 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

| Change | Delta |      % |       Samples | Caller           | Location                  |
| -----: | ----: | -----: | ------------: | ---------------- | ------------------------- |
|  +2.0% |   +45 | 100.0% | 2,205 → 2,250 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

| Change | Delta |             % |       Samples | Caller                  | Location                 |
| -----: | ----: | ------------: | ------------: | ----------------------- | ------------------------ |
|  +3.3% |   +34 | 78.0% → 78.2% | 1,018 → 1,052 | `PlatformMonitor::wait` | `libjvm.dylib`           |
|  +2.1% |    +2 |   7.4% → 7.3% |       96 → 98 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |
|  +2.1% |    +2 |   7.3% → 7.2% |       95 → 97 | `Parker::park`          | `libjvm.dylib`           |
|  +2.1% |    +2 |   7.4% → 7.3% |       96 → 98 | `PlatformEvent::park`   | `libjvm.dylib`           |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Caller                                  | Location       |
| -----: | ----: | ------------: | --------: | --------------------------------------- | -------------- |
|  +3.2% |   +24 | 74.0% → 73.6% | 753 → 777 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |
|  +5.3% |   +14 | 26.0% → 26.4% | 265 → 279 | `Monitor::wait`                         | `libjvm.dylib` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                                        | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------- | -------------- |
|  +7.8% |    +7 | 12.0% → 12.5% | 90 → 97 | `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` | `libjvm.dylib` |
|  +5.5% |    +5 | 12.1% → 12.4% | 91 → 96 | `G1ConcurrentMarkThread::run_service`                         | `libjvm.dylib` |
|  +2.2% |    +2 | 12.2% → 12.1% | 92 → 94 | `VMThread::wait_for_operation`                                | `libjvm.dylib` |
|  +2.1% |    +2 | 12.7% → 12.6% | 96 → 98 | `ServiceThread::service_thread_entry`                         | `libjvm.dylib` |
|  +2.1% |    +2 | 12.7% → 12.6% | 96 → 98 | `G1ServiceThread::wait_for_task`                              | `libjvm.dylib` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

| Change | Delta |             % |   Samples | Caller                    | Location       |
| -----: | ----: | ------------: | --------: | ------------------------- | -------------- |
|  +2.4% |   +22 | 89.4% → 89.7% | 898 → 920 | `WorkerThread::run`       | `libjvm.dylib` |
| -28.6% |    -2 |   0.7% → 0.5% |     7 → 5 | `WorkerThreads::run_task` | `libjvm.dylib` |
|  +2.1% |    +2 |          9.6% |   96 → 98 | `os::signal_wait`         | `libjvm.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller             | Location       |
| -----: | ----: | -----: | --------: | ------------------ | -------------- |
|  +2.1% |   +19 | 100.0% | 911 → 930 | `Thread::call_run` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Caller                            | Location       |
| -----: | ----: | ------------: | --------: | --------------------------------- | -------------- |
|  +6.6% |   +11 | 62.6% → 63.4% | 166 → 177 | `CompileQueue::get`               | `libjvm.dylib` |
|  +2.1% |    +2 | 36.2% → 35.1% |   96 → 98 | `JVM_WaitForReferencePendingList` | `libjvm.dylib` |
| +33.3% |    +1 |   1.1% → 1.4% |     3 → 4 | `VMThread::wait_until_executed`   | `libjvm.dylib` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller             | Location       |
| -----: | ----: | -----: | --------: | ------------------ | -------------- |
|  +4.3% |   +12 | 100.0% | 282 → 294 | `Thread::call_run` | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                                | Location       |
| -----: | ----: | -----: | --------: | ------------------------------------- | -------------- |
|  +6.6% |   +11 | 100.0% | 167 → 178 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller             | Location       |
| -----: | ----: | -----: | --------: | ------------------ | -------------- |
|  +1.2% |   +10 | 100.0% | 820 → 830 | `Thread::call_run` | `libjvm.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|  Change | Delta |      % | Samples | Caller                              | Location                  |
| ------: | ----: | -----: | ------: | ----------------------------------- | ------------------------- |
| +200.0% |    +8 | 100.0% |  4 → 12 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `_pthread_mutex_firstfit_lock_slow` (`libsystem_pthread.dylib`)

|  Change | Delta |             % | Samples | Caller                           | Location                  |
| ------: | ----: | ------------: | ------: | -------------------------------- | ------------------------- |
|     new |    +4 |  0.0% → 33.3% |   0 → 4 | `_pthread_cond_wait`             | `libsystem_pthread.dylib` |
| +300.0% |    +3 | 25.0% → 33.3% |   1 → 4 | `ThreadCritical::ThreadCritical` | `libjvm.dylib`            |
|  +50.0% |    +1 | 50.0% → 25.0% |   2 → 3 | `Mutex::lock`                    | `libjvm.dylib`            |

##### `G1ConcurrentRefineThread::run_service` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                    | Location       |
| -----: | ----: | -----: | ------: | ------------------------- | -------------- |
|  +8.9% |    +8 | 100.0% | 90 → 98 | `ConcurrentGCThread::run` | `libjvm.dylib` |

##### `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                  | Location       |
| -----: | ----: | -----: | ------: | --------------------------------------- | -------------- |
|  +7.8% |    +7 | 100.0% | 90 → 97 | `G1ConcurrentRefineThread::run_service` | `libjvm.dylib` |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

| Change | Delta |            % | Samples | Caller                           | Location                                                         |
| -----: | ----: | -----------: | ------: | -------------------------------- | ---------------------------------------------------------------- |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `getDefaultPerformanceManager()` | `org.jetbrains.kotlin.cli.common.CLICompiler`                    |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `getTopLevelFunctionNameIndex()` | `org.jetbrains.kotlin.fir.deserialization.PackagePartsCacheData` |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `getSuperTypeRefs()`             | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass`        |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `getMyCallableNames()`           | `org.jetbrains.kotlin.fir.scopes.jvm.JvmMappedScope`             |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `getInstance()`                  | `org.jetbrains.kotlin.builtins.DefaultBuiltIns$Companion`        |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                               | Location       |
| ------: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| +166.7% |    +5 | 100.0% |   3 → 8 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                     | Location       |
| ------: | ----: | ------------: | ------: | -------------------------- | -------------- |
| +300.0% |    +3 | 14.3% → 33.3% |   1 → 4 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |
|  +40.0% |    +2 | 71.4% → 58.3% |   5 → 7 | `Compile::Optimize`        | `libjvm.dylib` |

##### `JLI_Launch` (`libjli.dylib`)

| Change | Delta |      % |   Samples | Caller | Location |
| -----: | ----: | -----: | --------: | ------ | -------- |
|  +2.1% |    +4 | 100.0% | 192 → 196 | `main` | `java`   |

##### `main` (`java`)

| Change | Delta |     % | Samples | Caller       | Location       |
| -----: | ----: | ----: | ------: | ------------ | -------------- |
|  +2.1% |    +2 | 50.0% | 96 → 98 | `unknown`    | `<unknown>`    |
|  +2.1% |    +2 | 50.0% | 96 → 98 | `apple_main` | `libjli.dylib` |

##### `SharedRuntime::resolve_sub_helper` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                          | Location       |
| ------: | ----: | -----: | ------: | ------------------------------- | -------------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `SharedRuntime::resolve_helper` | `libjvm.dylib` |

##### `SharedRuntime::resolve_helper` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                      | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------------------- | -------------- |
|     new |    +3 |   0.0% → 60.0% |   0 → 3 | `SharedRuntime::resolve_virtual_call_C`     | `libjvm.dylib` |
| +100.0% |    +1 | 100.0% → 40.0% |   1 → 2 | `SharedRuntime::resolve_opt_virtual_call_C` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                        | Location       |
| -----: | ----: | -----: | ------: | ----------------------------- | -------------- |
| +12.2% |    +5 | 100.0% | 41 → 46 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller             | Location       |
| -----: | ----: | -----: | ------: | ------------------ | -------------- |
| +11.4% |    +4 | 100.0% | 35 → 39 | `Compile::Compile` | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                             | Location       |
| -----: | ----: | -----: | ------: | ---------------------------------- | -------------- |
| +23.5% |    +4 | 100.0% | 17 → 21 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `IntervalWalker::walk_to` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                           | Location       |
| ------: | ----: | -------------: | ------: | -------------------------------- | -------------- |
|  +50.0% |    +3 | 100.0% → 90.0% |   6 → 9 | `LinearScan::allocate_registers` | `libjvm.dylib` |
| +100.0% |    +1 |  16.7% → 20.0% |   1 → 2 | `IntervalWalker::walk_to`        | `libjvm.dylib` |
|     new |    +1 |   0.0% → 10.0% |   0 → 1 | `LinearScan::compute_oop_map`    | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                             | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------ | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseChaitin::build_ifg_physical`                                 | `libjvm.dylib` |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `PhaseIFG::re_insert`                                              | `libjvm.dylib` |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `PhaseIFG::SquareUp`                                               | `libjvm.dylib` |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` | `libjvm.dylib` |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `PhaseChaitin::Simplify`                                           | `libjvm.dylib` |

##### `Type::hashcons` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `TypeFunc::make`                 | `libjvm.dylib` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `PhaseIterGVN::transform_old`    | `libjvm.dylib` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `TypeInstPtr::cast_to_exactness` | `libjvm.dylib` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `AddNode::add_of_identity`       | `libjvm.dylib` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `ConvI2LNode::Value`             | `libjvm.dylib` |

##### `ConnectionGraph::do_analysis` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller              | Location       |
| ------: | ----: | -----: | ------: | ------------------- | -------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `Compile::Optimize` | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                   | Location       |
| -----: | ----: | -----------: | ------: | ------------------------ | -------------- |
| +42.9% |    +3 |       100.0% |  7 → 10 | `PhaseIterGVN::optimize` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 10.0% |   0 → 1 | `split_if`               | `libjvm.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                                     | Location       |
| ------: | ----: | -----: | ------: | ------------------------------------------ | -------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `Compilation::emit_code_body` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                             | Location       |
| -----: | ----: | -----: | ------: | ---------------------------------- | -------------- |
| +37.5% |    +3 | 100.0% |  8 → 11 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `LinearScan::allocate_registers` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                       | Location       |
| -----: | ----: | -----: | ------: | ---------------------------- | -------------- |
| +50.0% |    +3 | 100.0% |   6 → 9 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `PhaseGVN::transform_no_reclaim` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Parse::do_exits`                  | `libjvm.dylib` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `Parse::do_one_bytecode`           | `libjvm.dylib` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `PredictedCallGenerator::generate` | `libjvm.dylib` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `GraphKit::store_to_memory`        | `libjvm.dylib` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `LibraryCallKit::inline_arraycopy` | `libjvm.dylib` |

##### `LIRGenerator::do_ProfileInvoke` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                   | Location       |
| -----: | ----: | ------------: | ------: | ------------------------ | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `LIRGenerator::block_do` | `libjvm.dylib` |

##### `BlockList::iterate_backward` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                   | Location       |
| -----: | ----: | ------------: | ------: | ------------------------ | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `IR::compute_use_counts` | `libjvm.dylib` |

##### `PhaseChaitin::Simplify` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                            | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `ConnectionGraph::compute_escape` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                         | Location       |
| ------: | ----: | -----: | ------: | ------------------------------ | -------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                            | Location       |
| ------: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `PhaseIdealLoop::build_loop_late` | `libjvm.dylib` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

| Change | Delta |      % | Samples | Caller           | Location                                    |
| -----: | ----: | -----: | ------: | ---------------- | ------------------------------------------- |
|  +5.6% |    +5 | 100.0% | 90 → 95 | `main(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change | Delta |      % | Samples | Caller                          | Location                                                |
| -----: | ----: | -----: | ------: | ------------------------------- | ------------------------------------------------------- |
|  +6.8% |    +5 | 100.0% | 74 → 79 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |      % | Samples | Caller                                         | Location                                      |
| -----: | ----: | -----: | ------: | ---------------------------------------------- | --------------------------------------------- |
|  +6.8% |    +5 | 100.0% | 73 → 78 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |      % | Samples | Caller                                                 | Location                                                |
| -----: | ----: | -----: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
|  +6.8% |    +5 | 100.0% | 73 → 78 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change | Delta |      % | Samples | Caller                                                                                             | Location                                                |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|  +6.8% |    +5 | 100.0% | 73 → 78 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |      % | Samples | Caller                                                   | Location                                      |
| -----: | ----: | -----: | ------: | -------------------------------------------------------- | --------------------------------------------- |
|  +6.9% |    +5 | 100.0% | 72 → 77 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change | Delta |      % | Samples | Caller                                                                 | Location                                     |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
|  +7.1% |    +5 | 100.0% | 70 → 75 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change | Delta |      % | Samples | Caller                                                          | Location                                      |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
|  +7.1% |    +5 | 100.0% | 70 → 75 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |      % | Samples | Caller                                                      | Location                                      |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------- | --------------------------------------------- |
|  +7.1% |    +5 | 100.0% | 70 → 75 | `exec(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `processLevel(TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`)

| Change | Delta |      % | Samples | Caller                                                                                                               | Location                                                               |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| +83.3% |    +5 | 100.0% |  6 → 11 | `access$processLevel(FirBaseTowerResolveTask, TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask` |

##### `access$processLevel(FirBaseTowerResolveTask, TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                 | Location                                                                              |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|  +60.0% |    +3 | 83.3% → 72.7% |   5 → 8 | `invokeSuspend(Object)`                                                                                                                | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6` |
|     new |    +2 |  0.0% → 18.2% |   0 → 2 | `runResolverForNoReceiver(CallInfo, boolean, Continuation)`                                                                            | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask`                    |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `processQualifierScopes(CallInfo, QualifierReceiver, Continuation)`                                                                    | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask`                    |
|     new |    +1 |   0.0% → 9.1% |   0 → 1 | `processCandidatesWithGivenImplicitReceiverAsValue(ImplicitReceiverValue, CallInfo, TowerGroup, Set, Set, Set, boolean, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask`                    |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change | Delta |      % | Samples | Caller           | Location                                               |
| -----: | ----: | -----: | ------: | ---------------- | ------------------------------------------------------ |
|  +5.3% |    +4 | 100.0% | 75 → 79 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

| Change | Delta |      % | Samples | Caller           | Location                                     |
| -----: | ----: | -----: | ------: | ---------------- | -------------------------------------------- |
|  +5.3% |    +4 | 100.0% | 75 → 79 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change | Delta |      % | Samples | Caller                         | Location                                             |
| -----: | ----: | -----: | ------: | ------------------------------ | ---------------------------------------------------- |
|  +5.3% |    +4 | 100.0% | 75 → 79 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001008000` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

| Change | Delta |      % | Samples | Caller                              | Location                                          |
| -----: | ----: | -----: | ------: | ----------------------------------- | ------------------------------------------------- |
|  +5.7% |    +4 | 100.0% | 70 → 74 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

| Change | Delta |      % | Samples | Caller                                                     | Location                                                |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------- | ------------------------------------------------------- |
|  +5.7% |    +4 | 100.0% | 70 → 74 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

| Change | Delta |           % | Samples | Caller                                                                | Location                                                          |
| -----: | ----: | ----------: | ------: | --------------------------------------------------------------------- | ----------------------------------------------------------------- |
|  +5.7% |    +4 |      100.0% | 70 → 74 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`            | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase`       |
| -50.0% |    -1 | 2.9% → 1.4% |   2 → 1 | `runPhase(NamedCompilerPhase, Object, boolean)`                       | `org.jetbrains.kotlin.backend.common.phaser.PhaseEngine`          |
| +33.3% |    +1 | 4.3% → 5.4% |   3 → 4 | `invoke(PhaseConfig, PhaserState, LoweringContext, IrModuleFragment)` | `org.jetbrains.kotlin.backend.common.phaser.PerformByIrFilePhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`)

| Change | Delta |      % | Samples | Caller                                                               | Location                                             |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------- | ---------------------------------------------------- |
|  +5.7% |    +4 | 100.0% | 70 → 74 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt` |

##### `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`)

| Change | Delta |      % | Samples | Caller                                         | Location                                                |
| -----: | ----: | -----: | ------: | ---------------------------------------------- | ------------------------------------------------------- |
|  +5.7% |    +4 | 100.0% | 70 → 74 | `runPhasedPipeline(ArgumentsPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `Compile::Compile` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                       | Location       |
| -----: | ----: | -----: | --------: | ---------------------------- | -------------- |
| -10.4% |   -13 | 100.0% | 125 → 112 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                                     | Location       |
| -----: | ----: | -----: | --------: | ------------------------------------------ | -------------- |
| -10.4% |   -13 | 100.0% | 125 → 112 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller             | Location       |
| -----: | ----: | -----: | ------: | ------------------ | -------------- |
| -18.1% |   -13 | 100.0% | 72 → 59 | `Compile::Compile` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                                | Location       |
| -----: | ----: | -----: | --------: | ------------------------------------- | -------------- |
|  -6.3% |   -11 | 100.0% | 174 → 163 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller              | Location       |
| -----: | ----: | -----: | ------: | ------------------- | -------------- |
| -46.7% |    -7 | 100.0% |  15 → 8 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `ciEnv::register_method` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                        | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------- | -------------- |
| -71.4% |    -5 | 70.0% → 66.7% |   7 → 2 | `Compilation::compile_method` | `libjvm.dylib` |
| -66.7% |    -2 | 30.0% → 33.3% |   3 → 1 | `PhaseOutput::install_code`   | `libjvm.dylib` |

##### `nmethod::new_nmethod` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                   | Location       |
| -----: | ----: | -----: | ------: | ------------------------ | -------------- |
| -66.7% |    -6 | 100.0% |   9 → 3 | `ciEnv::register_method` | `libjvm.dylib` |

##### `Matcher::match_tree` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller           | Location       |
| -----: | ----: | -----: | ------: | ---------------- | -------------- |
| -71.4% |    -5 | 100.0% |   7 → 2 | `Matcher::xform` | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller           | Location       |
| -----: | ----: | -----: | ------: | ---------------- | -------------- |
| -41.7% |    -5 | 100.0% |  12 → 7 | `Parse::do_call` | `libjvm.dylib` |

##### `completeCall(FirExpression, ResolutionMode, boolean)` (`org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`)

| Change | Delta |      % | Samples | Caller                                                                                                                                             | Location                                                                                      |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| -50.0% |    -5 | 100.0% |  10 → 5 | `transformFunctionCallInternal$org_jetbrains_kotlin_resolve(FirFunctionCall, ResolutionMode, FirExpressionsResolveTransformer$CallResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                               | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                           | Location       |
| -----: | ----: | -----: | ------: | -------------------------------- | -------------- |
| -19.0% |    -4 | 100.0% | 21 → 17 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                     | Location       |
| -----: | ----: | -----: | ------: | -------------------------- | -------------- |
| -19.0% |    -4 | 100.0% | 21 → 17 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|  Change | Delta |            % | Samples | Caller                                           | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------------ | -------------- |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `minI_reg_regNode::Expand`                       | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `PhaseChaitin::Register_Allocate`                | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `PhaseChaitin::stretch_base_pointer_live_ranges` | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `PhaseAggressiveCoalesce::insert_copies`         | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `Parse::catch_inline_exceptions`                 | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller           | Location       |
| -----: | ----: | -----: | ------: | ---------------- | -------------- |
| -44.4% |    -4 | 100.0% |   9 → 5 | `Matcher::match` | `libjvm.dylib` |

##### `Matcher::find_shared` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller           | Location       |
| -----: | ----: | -----: | ------: | ---------------- | -------------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `Matcher::match` | `libjvm.dylib` |

##### `PhaseCFG::global_code_motion` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -44.4% |    -4 | 100.0% |   9 → 5 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                | Location       |
| -----: | ----: | -----: | ------: | --------------------- | -------------- |
| -30.8% |    -4 | 100.0% |  13 → 9 | `Parse::do_one_block` | `libjvm.dylib` |

##### `PhaseOutput::Output` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller              | Location       |
| -----: | ----: | -----: | ------: | ------------------- | -------------- |
| -40.0% |    -4 | 100.0% |  10 → 6 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                                   | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------ | -------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` | `libjvm.dylib` |

##### `os::malloc` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                                                                                                                                                                                                                                   | Location       |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `AllocateHeap`                                                                                                                                                                                                                                           | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::internal_insert_get<SymbolTableLookup, bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::insert<SymbolTableLookup>(Thread*, SymbolTableLookup&, Symbol const&, bool*, bool*)::NOP>` | `libjvm.dylib` |

##### `G1ConcurrentRebuildAndScrub::rebuild_and_scrub` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                            | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------------------- | -------------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `G1ConcurrentMarkThread::phase_rebuild_and_scrub` | `libjvm.dylib` |

##### `G1ConcurrentMarkThread::phase_rebuild_and_scrub` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                             | Location       |
| -----: | ----: | -----: | ------: | -------------------------------------------------- | -------------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `G1ConcurrentMarkThread::concurrent_mark_cycle_do` | `libjvm.dylib` |

##### `G1ConcurrentMarkThread::concurrent_mark_cycle_do` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------- | -------------- |
| -60.0% |    -3 | 100.0% |   5 → 2 | `G1ConcurrentMarkThread::run_service` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                 | Location       |
| -----: | ----: | -----: | ------: | ---------------------- | -------------- |
| -20.0% |    -3 | 100.0% | 15 → 12 | `Parse::do_all_blocks` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller         | Location       |
| -----: | ----: | -----: | ------: | -------------- | -------------- |
| -20.0% |    -3 | 100.0% | 15 → 12 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                     | Location       |
| -----: | ----: | -----: | ------: | -------------------------- | -------------- |
| -20.0% |    -3 | 100.0% | 15 → 12 | `ParseGenerator::generate` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                             | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
| -50.0% |    -6 | 80.0% → 50.0% |  12 → 6 | `PredictedCallGenerator::generate` | `libjvm.dylib` |
| -20.0% |    -3 |        100.0% | 15 → 12 | `Compile::Compile`                 | `libjvm.dylib` |
| -16.7% |    -1 | 40.0% → 41.7% |   6 → 5 | `Parse::do_call`                   | `libjvm.dylib` |

##### `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                                                             | Location       |
| ------: | ----: | -------------: | ------: | ---------------------------------------------------------------------------------- | -------------- |
|  -50.0% |    -2 | 80.0% → 100.0% |   4 → 2 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb`  | `libjvm.dylib` |
| removed |    -1 |   20.0% → 0.0% |   1 → 0 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region` | `libjvm.dylib` |

##### `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                           | Location       |
| -----: | ----: | -----: | ------: | -------------------------------- | -------------- |
| -60.0% |    -3 | 100.0% |   5 → 2 | `HeapRegionManager::par_iterate` | `libjvm.dylib` |

##### `G1RebuildRSAndScrubTask::work` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller              | Location       |
| -----: | ----: | -----: | ------: | ------------------- | -------------- |
| -60.0% |    -3 | 100.0% |   5 → 2 | `WorkerThread::run` | `libjvm.dylib` |

##### `InterpreterRuntime::resolve_invoke` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                   | Location       |
| -----: | ----: | -----: | ------: | ---------------------------------------- | -------------- |
| -60.0% |    -3 | 100.0% |   5 → 2 | `InterpreterRuntime::resolve_from_cache` | `libjvm.dylib` |

##### `InterpreterRuntime::resolve_from_cache` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                                                                                            | Location                                                                         |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `<clinit>()`                                                                                                      | `com.intellij.openapi.application.ApplicationManager`                            |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `add(CharSequence)`                                                                                               | `com.intellij.psi.impl.source.CharTableImpl$StringHashToCharSequencesMap`        |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `tryLoadModuleMapping(Function0, String, String, JvmCompilerDeserializationConfiguration, CompilerConfiguration)` | `org.jetbrains.kotlin.cli.jvm.compiler.JvmPackagePartProviderKt`                 |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `findClasses$lambda$0$0(ClassId, Set, Function2, JvmDependenciesIndex)`                                           | `org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesDynamicCompoundIndex`         |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `findAndDeserializeTypeAlias(ClassId, FirNestedTypeAliasDeserializationContext)`                                  | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider` |

##### `nmethod::nmethod` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                 | Location       |
| -----: | ----: | -----: | ------: | ---------------------- | -------------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `nmethod::new_nmethod` | `libjvm.dylib` |

##### `LinearScan::build_intervals` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                       | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------- | -------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `IndexSet::initialize` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller               | Location       |
| ------: | ----: | -----------: | ------: | -------------------- | -------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `PhaseLive::compute` | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `PhaseIFG::init`     | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller              | Location       |
| -----: | ----: | -----: | ------: | ------------------- | -------------- |
| -23.1% |    -3 | 100.0% | 13 → 10 | `Compile::Optimize` | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -50.0% |    -3 | 100.0% |   6 → 3 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseCFG::do_global_code_motion` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller              | Location       |
| -----: | ----: | -----: | ------: | ------------------- | -------------- |
| -33.3% |    -3 | 100.0% |   9 → 6 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `Matcher::Label_Root` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Caller                | Location       |
| -----: | ----: | -------------: | ------: | --------------------- | -------------- |
| -75.0% |    -3 |         100.0% |   4 → 1 | `Matcher::match_tree` | `libjvm.dylib` |
| -50.0% |    -1 | 50.0% → 100.0% |   2 → 1 | `Matcher::Label_Root` | `libjvm.dylib` |

##### `runCompletion(ConstraintSystemCompletionContext, ConstraintSystemCompletionMode, List, ConeKotlinType, ResolutionContext, ConstraintSystemCompleter$PostponedAtomAnalyzer)` (`org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`)

| Change | Delta |      % | Samples | Caller                                                                                                                                                                  | Location                                                               |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| -42.9% |    -3 | 100.0% |   7 → 4 | `complete(ConstraintSystemCompletionContext, ConstraintSystemCompletionMode, List, ConeKotlinType, ResolutionContext, ConstraintSystemCompleter$PostponedAtomAnalyzer)` | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter` |

##### `complete(ConstraintSystemCompletionContext, ConstraintSystemCompletionMode, List, ConeKotlinType, ResolutionContext, ConstraintSystemCompleter$PostponedAtomAnalyzer)` (`org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`)

| Change | Delta |      % | Samples | Caller                                                                                                                       | Location                                                      |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| -42.9% |    -3 | 100.0% |   7 → 4 | `runCompletionForCall(Candidate, ConstraintSystemCompletionMode, FirExpression, ConeKotlinType, PostponedArgumentsAnalyzer)` | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter` |

##### `runCompletionForCall(Candidate, ConstraintSystemCompletionMode, FirExpression, ConeKotlinType, PostponedArgumentsAnalyzer)` (`org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`)

| Change | Delta |      % | Samples | Caller                                                 | Location                                                      |
| -----: | ----: | -----: | ------: | ------------------------------------------------------ | ------------------------------------------------------------- |
| -42.9% |    -3 | 100.0% |   7 → 4 | `completeCall(FirExpression, ResolutionMode, boolean)` | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter` |

##### `accept(FirVisitor, Object)` (`org.jetbrains.kotlin.fir.declarations.FirRegularClass`)

|  Change | Delta |              % | Samples | Caller                               | Location                                                                                |
| ------: | ----: | -------------: | ------: | ------------------------------------ | --------------------------------------------------------------------------------------- |
|  -33.3% |    -1 | 75.0% → 100.0% |   3 → 2 | `acceptChildren(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`                                |
|  -50.0% |    -1 |          50.0% |   2 → 1 | `checkElement(FirElement)`           | `org.jetbrains.kotlin.fir.analysis.collectors.CheckerRunningDiagnosticCollectorVisitor` |
| removed |    -1 |   25.0% → 0.0% |   1 → 0 | `toIrDeclaration(FirDeclaration)`    | `org.jetbrains.kotlin.fir.backend.Fir2IrVisitor`                                        |

##### `completeIsSubTypeOf(TypeCheckerState, TypeSystemContext, KotlinTypeMarker, KotlinTypeMarker, boolean)` (`org.jetbrains.kotlin.types.AbstractTypeChecker`)

| Change | Delta |      % | Samples | Caller                                                                       | Location                                         |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------ |
| -66.7% |    -2 | 100.0% |   3 → 1 | `isSubtypeOf(TypeCheckerState, KotlinTypeMarker, KotlinTypeMarker, boolean)` | `org.jetbrains.kotlin.types.AbstractTypeChecker` |

##### `isSubtypeOf(TypeCheckerState, KotlinTypeMarker, KotlinTypeMarker, boolean)` (`org.jetbrains.kotlin.types.AbstractTypeChecker`)

| Change | Delta |              % | Samples | Caller                                                                                                                              | Location                                                                                                           |
| -----: | ----: | -------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| -50.0% |    -1 | 66.7% → 100.0% |   2 → 1 | `runIsSubtypeOf$isSubtypeOf(ConstraintInjector$TypeCheckerStateForConstraintInjector, KotlinTypeMarker, boolean, KotlinTypeMarker)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector$TypeCheckerStateForConstraintInjector` |

##### `runIsSubtypeOf$default(ConstraintInjector$TypeCheckerStateForConstraintInjector, KotlinTypeMarker, KotlinTypeMarker, boolean, boolean, int, Object)` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector$TypeCheckerStateForConstraintInjector`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                           | Location                                                                     |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `addSubTypeConstraintAndIncorporateIt(ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector, KotlinTypeMarker, KotlinTypeMarker)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector` |

##### `transformFunctionCall(FirFunctionCall, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`)

| Change | Delta |           % | Samples | Caller                                                   | Location                                                                                                 |
| -----: | ----: | ----------: | ------: | -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| -11.8% |    -2 |      100.0% | 17 → 15 | `transformFunctionCall(FirFunctionCall, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
|    new |    +1 | 0.0% → 6.7% |   0 → 1 | `transformFunctionCall(FirFunctionCall, Object)`         | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`            |

##### `transformFunctionCall(FirFunctionCall, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change | Delta |      % | Samples | Caller                                           | Location                                                                                                 |
| -----: | ----: | -----: | ------: | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| -11.8% |    -2 | 100.0% | 17 → 15 | `transformFunctionCall(FirFunctionCall, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### `transformFunctionCall(FirFunctionCall, Object)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change | Delta |      % | Samples | Caller                              | Location                                               |
| -----: | ----: | -----: | ------: | ----------------------------------- | ------------------------------------------------------ |
| -11.8% |    -2 | 100.0% | 17 → 15 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.FirFunctionCall` |

##### `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirFunctionCall`)

|  Change | Delta |             % | Samples | Caller                                                            | Location                                                     |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------- | ------------------------------------------------------------ |
|  +20.0% |    +1 | 29.4% → 40.0% |   5 → 6 | `transformSingle(FirElement, FirTransformer, Object)`             | `org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`     |
|  -33.3% |    -1 | 17.6% → 13.3% |   3 → 2 | `transformStatementsIndexed(FirBlock, FirTransformer, Function1)` | `org.jetbrains.kotlin.fir.expressions.FirExpressionUtilKt`   |
| removed |    -1 |   5.9% → 0.0% |   1 → 0 | `transformCondition(FirTransformer, Object)`                      | `org.jetbrains.kotlin.fir.expressions.impl.FirWhileLoopImpl` |
| +100.0% |    +1 |  5.9% → 13.3% |   1 → 2 | `transformInplace(List, FirTransformer, Object)`                  | `org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`     |

##### `check(CheckerSink, ResolutionContext, Candidate, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.CheckHiddenDeclaration`)

|  Change | Delta |             % | Samples | Caller                  | Location                                                                                 |
| ------: | ----: | ------------: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1` |

##### `fixVariable(ConstraintSystemCompletionContext, VariableWithConstraints)` (`org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`)

|  Change | Delta |             % | Samples | Caller                                                                                              | Location                                                               |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `fixVariableIfReady(ConstraintSystemCompletionContext, VariableFixationFinder$VariableForFixation)` | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter` |

##### `fixVariableIfReady(ConstraintSystemCompletionContext, VariableFixationFinder$VariableForFixation)` (`org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                                       | Location                                                               |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `runCompletion(ConstraintSystemCompletionContext, ConstraintSystemCompletionMode, List, ConeKotlinType, ResolutionContext, ConstraintSystemCompleter$PostponedAtomAnalyzer)` | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter` |

##### `transformWhileLoop(FirWhileLoop, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer`)

| Change | Delta |      % | Samples | Caller                                             | Location                                                                                                 |
| -----: | ----: | -----: | ------: | -------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `transformWhileLoop(FirWhileLoop, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### `transformWhileLoop(FirWhileLoop, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change | Delta |      % | Samples | Caller                                     | Location                                                                                                 |
| -----: | ----: | -----: | ------: | ------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `transformWhileLoop(FirWhileLoop, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### `transformWhileLoop(FirWhileLoop, Object)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change | Delta |      % | Samples | Caller                              | Location                                            |
| -----: | ----: | -----: | ------: | ----------------------------------- | --------------------------------------------------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.FirWhileLoop` |

##### `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirWhileLoop`)

| Change | Delta |      % | Samples | Caller                                                            | Location                                                   |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------- | ---------------------------------------------------------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `transformStatementsIndexed(FirBlock, FirTransformer, Function1)` | `org.jetbrains.kotlin.fir.expressions.FirExpressionUtilKt` |

##### `transformResult(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirRegularWhenBranch`)

| Change | Delta |      % | Samples | Caller                                               | Location                                                                                                |
| -----: | ----: | -----: | ------: | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| -40.0% |    -2 | 100.0% |   5 → 3 | `transformResult(FirTransformer, Object)`            | `org.jetbrains.kotlin.fir.expressions.impl.FirRegularWhenBranch`                                        |
| -40.0% |    -2 | 100.0% |   5 → 3 | `transformWhenBranch(FirWhenBranch, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer` |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

| Change | Delta |     % |       Samples | Callee                | Location       |
| -----: | ----: | ----: | ------------: | --------------------- | -------------- |
|  +2.0% |   +45 | 95.8% | 2,205 → 2,250 | `thread_native_entry` | `libjvm.dylib` |
|  +2.1% |    +2 |  4.2% |       96 → 98 | `apple_main`          | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

| Change | Delta |      % |       Samples | Callee           | Location                  |
| -----: | ----: | -----: | ------------: | ---------------- | ------------------------- |
|  +2.0% |   +47 | 100.0% | 2,302 → 2,349 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Callee                          | Location       |
| -----: | ----: | ------------: | --------: | ------------------------------- | -------------- |
|  +2.1% |   +19 |         41.3% | 911 → 930 | `WorkerThread::run`             | `libjvm.dylib` |
|  +4.3% |   +12 | 12.8% → 13.1% | 282 → 294 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
|  +1.2% |   +10 | 37.2% → 36.9% | 820 → 830 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  +2.1% |    +2 |          4.4% |   96 → 98 | `VMThread::run`                 | `libjvm.dylib` |
|  +2.1% |    +2 |          4.4% |   96 → 98 | `WatcherThread::run`            | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

| Change | Delta |      % |       Samples | Callee             | Location       |
| -----: | ----: | -----: | ------------: | ------------------ | -------------- |
|  +2.0% |   +45 | 100.0% | 2,205 → 2,250 | `Thread::call_run` | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

| Change | Delta |              % |       Samples | Callee               | Location                  |
| -----: | ----: | -------------: | ------------: | -------------------- | ------------------------- |
|  +3.3% |   +34 | 100.0% → 99.6% | 1,018 → 1,052 | `__psynch_cvwait`    | `libsystem_kernel.dylib`  |
|    new |    +4 |    0.0% → 0.4% |         0 → 4 | `_pthread_cond_wait` | `libsystem_pthread.dylib` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Callee                  | Location       |
| -----: | ----: | -----: | --------: | ----------------------- | -------------- |
|  +3.2% |   +24 | 100.0% | 753 → 777 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Callee                            | Location                 |
| -----: | ----: | ------------: | --------: | --------------------------------- | ------------------------ |
|  +2.4% |   +22 | 98.6% → 98.9% | 898 → 920 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
| -60.0% |    -3 |   0.5% → 0.2% |     5 → 2 | `G1RebuildRSAndScrubTask::work`   | `libjvm.dylib`           |
| -14.3% |    -1 |   0.8% → 0.6% |     7 → 6 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
|    new |    +1 |   0.0% → 0.1% |     0 → 1 | `G1ClearBitMapTask::work`         | `libjvm.dylib`           |

##### `Monitor::wait` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Callee                  | Location       |
| -----: | ----: | -----: | --------: | ----------------------- | -------------- |
|  +5.3% |   +14 | 100.0% | 265 → 279 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                  | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
|  +8.9% |    +8 | 31.9% → 33.3% | 90 → 98 | `G1ConcurrentRefineThread::run_service` | `libjvm.dylib` |
|  +2.1% |    +2 | 34.0% → 33.3% | 96 → 98 | `G1ConcurrentMarkThread::run_service`   | `libjvm.dylib` |
|  +2.1% |    +2 | 34.0% → 33.3% | 96 → 98 | `G1ServiceThread::run_service`          | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

| Change | Delta |     % |   Samples | Callee          | Location       |
| -----: | ----: | ----: | --------: | --------------- | -------------- |
|  +6.6% |   +11 | 99.4% | 166 → 177 | `Monitor::wait` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                                   | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------- | -------------- |
|  +2.1% |    +2 | 11.7% → 11.8% | 96 → 98 | `JvmtiAgentThread::start_function_wrapper`               | `libjvm.dylib` |
|  +2.1% |    +2 | 11.7% → 11.8% | 96 → 98 | `ServiceThread::service_thread_entry`                    | `libjvm.dylib` |
|  +2.1% |    +2 | 11.7% → 11.8% | 96 → 98 | `signal_thread_entry`                                    | `libjvm.dylib` |
|  +2.1% |    +2 | 11.7% → 11.8% | 96 → 98 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib` |
|  +2.1% |    +2 | 11.6% → 11.7% | 95 → 97 | `NotificationThread::notification_thread_entry`          | `libjvm.dylib` |

##### `_pthread_mutex_firstfit_lock_slow` (`libsystem_pthread.dylib`)

|  Change | Delta |      % | Samples | Callee               | Location                 |
| ------: | ----: | -----: | ------: | -------------------- | ------------------------ |
| +200.0% |    +8 | 100.0% |  4 → 12 | `__psynch_mutexwait` | `libsystem_kernel.dylib` |

##### `G1ConcurrentRefineThread::run_service` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Callee                                                        | Location       |
| -----: | ----: | -------------: | ------: | ------------------------------------------------------------- | -------------- |
|  +7.8% |    +7 | 100.0% → 99.0% | 90 → 97 | `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` | `libjvm.dylib` |
|    new |    +1 |    0.0% → 1.0% |   0 → 1 | `SuspendibleThreadSet::join`                                  | `libjvm.dylib` |

##### `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                                  | Location       |
| -----: | ----: | -----: | ------: | --------------------------------------- | -------------- |
|  +7.8% |    +7 | 100.0% | 90 → 97 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

| Change | Delta |            % | Samples | Callee     | Location                                                                                    |
| -----: | ----: | -----------: | ------: | ---------- | ------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `invoke()` | `org.jetbrains.kotlin.cli.common.CLICompiler$$Lambda.0x000000700100a000`                    |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `invoke()` | `org.jetbrains.kotlin.fir.deserialization.PackagePartsCacheData$$Lambda.0x00000070015d9598` |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `invoke()` | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass$$Lambda.0x000000700160fb50`        |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.jvm.JvmMappedScope$$Lambda.0x000000700163b700`             |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `invoke()` | `org.jetbrains.kotlin.builtins.DefaultBuiltIns$$Lambda.0x0000007001752950`                  |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                      | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------- | -------------- |
| +100.0% |    +2 | 66.7% → 50.0% |   2 → 4 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `MultiNode::is_CFG`                         | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Callee                        | Location       |
| -----: | ----: | -------------: | ------: | ----------------------------- | -------------- |
| +42.9% |    +3 | 100.0% → 83.3% |  7 → 10 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |

##### `JLI_Launch` (`libjli.dylib`)

| Change | Delta |     % | Samples | Callee                       | Location       |
| -----: | ----: | ----: | ------: | ---------------------------- | -------------- |
|  +2.1% |    +2 | 50.0% | 96 → 98 | `CreateExecutionEnvironment` | `libjli.dylib` |
|  +2.1% |    +2 | 50.0% | 96 → 98 | `ContinueInNewThread`        | `libjli.dylib` |

##### `main` (`java`)

| Change | Delta |      % |   Samples | Callee       | Location       |
| -----: | ----: | -----: | --------: | ------------ | -------------- |
|  +2.1% |    +4 | 100.0% | 192 → 196 | `JLI_Launch` | `libjli.dylib` |

##### `SharedRuntime::resolve_sub_helper` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                       | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | -------------- |
|     new |    +2 |  0.0% → 40.0% |   0 → 2 | `SharedRuntime::resolve_sub_helper_internal` | `libjvm.dylib` |
|     new |    +2 |  0.0% → 40.0% |   0 → 2 | `SharedRuntime::find_callee_info_helper`     | `libjvm.dylib` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `vframeStream::vframeStream`                 | `libjvm.dylib` |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `InlineCacheBuffer::refill_ic_stubs`         | `libjvm.dylib` |

##### `SharedRuntime::resolve_helper` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Callee                              | Location       |
| ------: | ----: | -----: | ------: | ----------------------------------- | -------------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `SharedRuntime::resolve_sub_helper` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                        | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------- | -------------- |
| +23.5% |    +4 | 41.5% → 45.7% | 17 → 21 | `Compilation::emit_lir`       | `libjvm.dylib` |
| +37.5% |    +3 | 19.5% → 23.9% |  8 → 11 | `Compilation::emit_code_body` | `libjvm.dylib` |
| -12.5% |    -2 | 39.0% → 30.4% | 16 → 14 | `Compilation::build_hir`      | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                 | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------- | -------------- |
|  -23.1% |    -3 | 37.1% → 25.6% | 13 → 10 | `Compile::optimize_loops`              | `libjvm.dylib` |
| +300.0% |    +3 |  2.9% → 10.3% |   1 → 4 | `ConnectionGraph::do_analysis`         | `libjvm.dylib` |
|  +22.2% |    +2 | 25.7% → 28.2% |  9 → 11 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
|  +40.0% |    +2 | 14.3% → 17.9% |   5 → 7 | `PhaseIterGVN::optimize`               | `libjvm.dylib` |
| removed |    -2 |   5.7% → 0.0% |   2 → 0 | `PhaseRenumberLive::PhaseRenumberLive` | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                       | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------- | -------------- |
| +50.0% |    +2 | 23.5% → 28.6% |   4 → 6 | `BlockList::iterate_forward` | `libjvm.dylib` |
| +15.4% |    +2 | 76.5% → 71.4% | 13 → 15 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `IntervalWalker::walk_to` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                               | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
|  +40.0% |    +2 | 83.3% → 70.0% |   5 → 7 | `LinearScanWalker::activate_current` | `libjvm.dylib` |
| +100.0% |    +1 | 16.7% → 20.0% |   1 → 2 | `IntervalWalker::walk_to`            | `libjvm.dylib` |

##### `Type::hashcons` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee         | Location       |
| -----: | ----: | ------------: | ------: | -------------- | -------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `Dict::Insert` | `libjvm.dylib` |

##### `ConnectionGraph::do_analysis` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                          | Location       |
| ------: | ----: | -------------: | ------: | ----------------------------------------------- | -------------- |
| +200.0% |    +2 | 100.0% → 75.0% |   1 → 3 | `ConnectionGraph::compute_escape`               | `libjvm.dylib` |
|     new |    +1 |   0.0% → 25.0% |   0 → 1 | `ConnectionGraph::add_node_to_connection_graph` | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                       | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------- | -------------- |
| +200.0% |    +2 | 14.3% → 30.0% |   1 → 3 | `PhaseIterGVN::subsume_node` | `libjvm.dylib` |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `LoadNode::Value`            | `libjvm.dylib` |
|  -50.0% |    -1 | 28.6% → 10.0% |   2 → 1 | `PhiNode::Ideal`             | `libjvm.dylib` |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `NodeHash::hash_find_insert` | `libjvm.dylib` |
|     new |    +1 |  0.0% → 10.0% |   0 → 1 | `IfNode::dominated_by`       | `libjvm.dylib` |

##### `Compilation::emit_code_body` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------- | -------------- |
| +50.0% |    +2 | 50.0% → 54.5% |   4 → 6 | `LIR_Assembler::emit_code`            | `libjvm.dylib` |
|    new |    +1 |   0.0% → 9.1% |   0 → 1 | `CodeBuffer::initialize_section_size` | `libjvm.dylib` |

##### `LinearScan::allocate_registers` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                    | Location       |
| -----: | ----: | -----: | ------: | ------------------------- | -------------- |
| +50.0% |    +3 | 100.0% |   6 → 9 | `IntervalWalker::walk_to` | `libjvm.dylib` |

##### `PhaseGVN::transform_no_reclaim` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                   | Location       |
| ------: | ----: | ------------: | ------: | ------------------------ | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhiNode::Ideal`         | `libjvm.dylib` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `MulINode::Opcode`       | `libjvm.dylib` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `PhiNode::Identity`      | `libjvm.dylib` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `StoreNode::Ideal`       | `libjvm.dylib` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `CheckCastPPNode::Value` | `libjvm.dylib` |

##### `LIRGenerator::do_ProfileInvoke` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                    | Location       |
| -----: | ----: | ------------: | ------: | ------------------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `LIRGenerator::state_for` | `libjvm.dylib` |

##### `BlockList::iterate_backward` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                       | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `UseCountComputer::block_do` | `libjvm.dylib` |

##### `PhaseChaitin::Simplify` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                               | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------------ | -------------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `IndexSetIterator::advance_and_next` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `PhaseIFG::remove_node`              | `libjvm.dylib` |

##### `ConnectionGraph::compute_escape` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                       | Location       |
| ------: | ----: | -------------: | ------: | -------------------------------------------- | -------------- |
| +100.0% |    +1 | 100.0% → 66.7% |   1 → 2 | `ConnectionGraph::complete_connection_graph` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 33.3% |   0 → 1 | `CmpPNode::Opcode`                           | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                                        | Location       |
| -----: | ----: | -----------: | ------: | --------------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `PhaseIdealLoop::compute_lca_of_uses`         | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `ProjNode::is_uncommon_trap_proj`             | `libjvm.dylib` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

| Change | Delta |             % | Samples | Callee                     | Location                   |
| -----: | ----: | ------------: | ------: | -------------------------- | -------------------------- |
|  +6.7% |    +5 | 83.3% → 84.2% | 75 → 80 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

| Change | Delta |      % | Samples | Callee          | Location                                    |
| -----: | ----: | -----: | ------: | --------------- | ------------------------------------------- |
|  +5.6% |    +5 | 100.0% | 90 → 95 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change | Delta |             % | Samples | Callee                                                 | Location                                                |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
|  +6.8% |    +5 | 98.6% → 98.7% | 73 → 78 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|  Change | Delta |             % | Samples | Callee                                                                               | Location                                                                |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
|   +6.9% |    +5 | 98.6% → 98.7% | 72 → 77 | `exec(MessageCollector, Services, CommonCompilerArguments)`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
| removed |    -1 |   1.4% → 0.0% |   1 → 0 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |
|     new |    +1 |   0.0% → 1.3% |   0 → 1 | `loadClass(String)`                                                                  | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`                |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |      % | Samples | Callee                                                   | Location                                      |
| -----: | ----: | -----: | ------: | -------------------------------------------------------- | --------------------------------------------- |
|  +6.8% |    +5 | 100.0% | 73 → 78 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change | Delta |      % | Samples | Callee                                         | Location                                      |
| -----: | ----: | -----: | ------: | ---------------------------------------------- | --------------------------------------------- |
|  +6.8% |    +5 | 100.0% | 73 → 78 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |             % | Samples | Callee                                                          | Location                                      |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
|  +7.1% |    +5 | 97.2% → 97.4% | 70 → 75 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change | Delta |              % | Samples | Callee                                                         | Location                                                |
| -----: | ----: | -------------: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
|  +5.7% |    +4 | 100.0% → 98.7% | 70 → 74 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|    new |    +1 |    0.0% → 1.3% |   0 → 1 | `getDefaultPerformanceManager()`                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change | Delta |      % | Samples | Callee                                                                | Location                                     |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------- | -------------------------------------------- |
|  +7.1% |    +5 | 100.0% | 70 → 75 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |      % | Samples | Callee                                                                 | Location                                     |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
|  +7.1% |    +5 | 100.0% | 70 → 75 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `processLevel(TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`)

| Change | Delta |              % | Samples | Callee                                                                                                      | Location                                                           |
| -----: | ----: | -------------: | ------: | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| +50.0% |    +3 | 100.0% → 81.8% |   6 → 9 | `handleLevel(CandidateCollector, CandidateFactory, CallInfo, ExplicitReceiverKind, TowerGroup, TowerLevel)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelHandler`   |
|    new |    +2 |   0.0% → 18.2% |   0 → 2 | `requestGroup(TowerGroup, Continuation)`                                                                    | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager` |

##### `access$processLevel(FirBaseTowerResolveTask, TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`)

| Change | Delta |      % | Samples | Callee                                                                               | Location                                                               |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| +83.3% |    +5 | 100.0% |  6 → 11 | `processLevel(TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|  Change | Delta |              % | Samples | Callee                                                                                             | Location                                                |
| ------: | ----: | -------------: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|   +6.8% |    +5 | 98.7% → 100.0% | 74 → 79 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| removed |    -1 |    1.3% → 0.0% |   1 → 0 | `setupIdeaStandaloneExecution()`                                                                   | `org.jetbrains.kotlin.cli.jvm.compiler.CompatKt`        |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

| Change | Delta |      % | Samples | Callee                          | Location                                                |
| -----: | ----: | -----: | ------: | ------------------------------- | ------------------------------------------------------- |
|  +5.3% |    +4 | 100.0% | 75 → 79 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change | Delta |      % | Samples | Callee           | Location                                               |
| -----: | ----: | -----: | ------: | ---------------- | ------------------------------------------------------ |
|  +5.3% |    +4 | 100.0% | 75 → 79 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

| Change | Delta |             % | Samples | Callee                           | Location                                                         |
| -----: | ----: | ------------: | ------: | -------------------------------- | ---------------------------------------------------------------- |
|  +4.3% |    +2 | 67.1% → 66.2% | 47 → 49 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase` |
| +20.0% |    +1 |   7.1% → 8.1% |   5 → 6 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`   |
|  +5.9% |    +1 |         24.3% | 17 → 18 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`  |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

| Change | Delta |      % | Samples | Callee                                         | Location                                          |
| -----: | ----: | -----: | ------: | ---------------------------------------------- | ------------------------------------------------- |
|  +5.7% |    +4 | 100.0% | 70 → 74 | `phaseBody(PipelineContext, PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|  Change | Delta |           % | Samples | Callee                                                               | Location                                                         |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------- | ---------------------------------------------------------------- |
|   +5.7% |    +4 |      100.0% | 70 → 74 | `phaseBody(LoggingContext, Object)`                                  | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
| +100.0% |    +2 | 2.9% → 5.4% |   2 → 4 | `phaseBody(LoggingContext, Object)`                                  | `org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase`   |
|  -50.0% |    -1 | 2.9% → 1.4% |   2 → 1 | `phaseBody(LoggingContext, Object)`                                  | `org.jetbrains.kotlin.backend.common.phaser.ModuleLoweringPhase` |
| removed |    -1 | 1.4% → 0.0% |   1 → 0 | `runAfter(PhaseConfig, PhaserState, LoggingContext, Object, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`          |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`)

| Change | Delta |      % | Samples | Callee                                                     | Location                                                |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------- | ------------------------------------------------------- |
|  +5.7% |    +4 | 100.0% | 70 → 74 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`)

| Change | Delta |      % | Samples | Callee                                                     | Location                                                    |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------- | ----------------------------------------------------------- |
|  +5.7% |    +4 | 100.0% | 70 → 74 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase` |

##### `Compile::Compile` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                       | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------- | -------------- |
|  -18.1% |   -13 | 57.6% → 52.7% | 72 → 59 | `Compile::Code_Gen`          | `libjvm.dylib` |
|  +11.4% |    +4 | 28.0% → 34.8% | 35 → 39 | `Compile::Optimize`          | `libjvm.dylib` |
|  -20.0% |    -3 | 12.0% → 10.7% | 15 → 12 | `ParseGenerator::generate`   | `libjvm.dylib` |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `TypeFunc::make`             | `libjvm.dylib` |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `Compile::build_start_state` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Callee             | Location       |
| -----: | ----: | -----: | --------: | ------------------ | -------------- |
| -10.4% |   -13 | 100.0% | 125 → 112 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                            | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| -46.7% |    -7 | 20.8% → 13.6% |  15 → 8 | `Matcher::match`                  | `libjvm.dylib` |
| -40.0% |    -4 | 13.9% → 10.2% |  10 → 6 | `PhaseOutput::Output`             | `libjvm.dylib` |
| -33.3% |    -3 | 12.5% → 10.2% |   9 → 6 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
| -66.7% |    -2 |   4.2% → 1.7% |   3 → 1 | `PhaseOutput::install_code`       | `libjvm.dylib` |
|  +2.9% |    +1 | 48.6% → 61.0% | 35 → 36 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Callee                       | Location       |
| -----: | ----: | ------------: | --------: | ---------------------------- | -------------- |
| -10.4% |   -13 | 71.8% → 68.7% | 125 → 112 | `C2Compiler::compile_method` | `libjvm.dylib` |
|  +2.0% |    +1 | 28.2% → 30.7% |   49 → 50 | `Compiler::compile_method`   | `libjvm.dylib` |
|    new |    +1 |   0.0% → 0.6% |     0 → 1 | `ciEnv::ciEnv`               | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                 | Location       |
| ------: | ----: | ------------: | ------: | ---------------------- | -------------- |
|  -44.4% |    -4 | 60.0% → 62.5% |   9 → 5 | `Matcher::xform`       | `libjvm.dylib` |
|  -80.0% |    -4 | 33.3% → 12.5% |   5 → 1 | `Matcher::find_shared` | `libjvm.dylib` |
| removed |    -1 |   6.7% → 0.0% |   1 → 0 | `AddINode::Opcode`     | `libjvm.dylib` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `Arena::contains`      | `libjvm.dylib` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `Arena::move_contents` | `libjvm.dylib` |

##### `ciEnv::register_method` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                      | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------------------- | -------------- |
|  -66.7% |    -6 | 90.0% → 100.0% |   9 → 3 | `nmethod::new_nmethod`                      | `libjvm.dylib` |
| removed |    -1 |   10.0% → 0.0% |   1 → 0 | `ciEnv::validate_compile_task_dependencies` | `libjvm.dylib` |

##### `nmethod::new_nmethod` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------- | -------------- |
|  -75.0% |    -3 | 44.4% → 33.3% |   4 → 1 | `nmethod::nmethod`                    | `libjvm.dylib` |
| removed |    -2 |  22.2% → 0.0% |   2 → 0 | `CodeBuffer::finalize_oop_references` | `libjvm.dylib` |
| removed |    -1 |  11.1% → 0.0% |   1 → 0 | `Klass::is_klass`                     | `libjvm.dylib` |

##### `Matcher::match_tree` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                | Location       |
| -----: | ----: | ------------: | ------: | --------------------- | -------------- |
| -75.0% |    -3 | 57.1% → 50.0% |   4 → 1 | `Matcher::Label_Root` | `libjvm.dylib` |
| -50.0% |    -1 | 28.6% → 50.0% |   2 → 1 | `Matcher::ReduceInst` | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                             | Location       |
| ------: | ----: | -------------: | ------: | ---------------------------------- | -------------- |
|  -50.0% |    -6 | 100.0% → 85.7% |  12 → 6 | `ParseGenerator::generate`         | `libjvm.dylib` |
| removed |    -1 |    8.3% → 0.0% |   1 → 0 | `GraphKit::subtype_check_receiver` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 14.3% |   0 → 1 | `PhaseGVN::transform_no_reclaim`   | `libjvm.dylib` |

##### `completeCall(FirExpression, ResolutionMode, boolean)` (`org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`)

|  Change | Delta |             % | Samples | Callee                                                                                                                       | Location                                                                           |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
|  -42.9% |    -3 | 70.0% → 80.0% |   7 → 4 | `runCompletionForCall(Candidate, ConstraintSystemCompletionMode, FirExpression, ConeKotlinType, PostponedArgumentsAnalyzer)` | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`                      |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `transformSingle(FirElement, FirTransformer, Object)`                                                                        | `org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`                           |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `replaceLambdaArgumentEffects(FirFunctionCall, FirSession)`                                                                  | `org.jetbrains.kotlin.fir.resolve.transformers.LambdaArgumentEffectsTransformerKt` |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `computeCompletionMode(Candidate, InferenceComponents, ResolutionMode, ConeKotlinType)`                                      | `org.jetbrains.kotlin.fir.resolve.inference.CompletionModeCalculatorKt`            |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `addConstraintFromExpectedType(Candidate, ConeKotlinType, ResolutionMode)`                                                   | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`                      |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                           | Location       |
| ------: | ----: | -----------: | ------: | -------------------------------- | -------------- |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::get_early_ctrl` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                             | Location                   |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------------------- |
| +166.7% |    +5 | 14.3% → 47.1% |   3 → 8 | `PhaseIdealLoop::build_loop_late`  | `libjvm.dylib`             |
| removed |    -5 |  23.8% → 0.0% |   5 → 0 | `PhaseIdealLoop::build_loop_early` | `libjvm.dylib`             |
| removed |    -1 |   4.8% → 0.0% |   1 → 0 | `IdealLoopTree::iteration_split`   | `libjvm.dylib`             |
|  -50.0% |    -1 |   9.5% → 5.9% |   2 → 1 | `PhaseIdealLoop::build_loop_tree`  | `libjvm.dylib`             |
| removed |    -1 |   4.8% → 0.0% |   1 → 0 | `_platform_memset`                 | `libsystem_platform.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                               | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| -19.0% |    -4 | 100.0% | 21 → 17 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                | Location       |
| ------: | ----: | ------------: | ------: | --------------------- | -------------- |
|  -71.4% |    -5 | 77.8% → 40.0% |   7 → 2 | `Matcher::match_tree` | `libjvm.dylib` |
| removed |    -1 |  11.1% → 0.0% |   1 → 0 | `Arena::contains`     | `libjvm.dylib` |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `RegionNode::size_of` | `libjvm.dylib` |

##### `Matcher::find_shared` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee             | Location       |
| ------: | ----: | -----------: | ------: | ------------------ | -------------- |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `ProjNode::Opcode` | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `PhiNode::Opcode`  | `libjvm.dylib` |

##### `PhaseCFG::global_code_motion` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                              | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------- | -------------- |
|  -50.0% |    -2 | 44.4% → 40.0% |   4 → 2 | `PhaseCFG::schedule_late`           | `libjvm.dylib` |
|     new |    +2 |  0.0% → 40.0% |   0 → 2 | `PhaseCFG::partial_latency_of_defs` | `libjvm.dylib` |
| removed |    -1 |  11.1% → 0.0% |   1 → 0 | `PhaseCFG::schedule_early`          | `libjvm.dylib` |
| removed |    -1 |  11.1% → 0.0% |   1 → 0 | `PhaseCFG::schedule_pinned_nodes`   | `libjvm.dylib` |
| removed |    -1 |  11.1% → 0.0% |   1 → 0 | `PhaseCFG::implicit_null_check`     | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                                | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------- | -------------- |
|  -41.7% |    -5 | 92.3% → 77.8% |  12 → 7 | `PredictedCallGenerator::generate`                    | `libjvm.dylib` |
| removed |    -2 |  15.4% → 0.0% |   2 → 0 | `GraphKit::cast_not_null`                             | `libjvm.dylib` |
|  -16.7% |    -1 | 46.2% → 55.6% |   6 → 5 | `ParseGenerator::generate`                            | `libjvm.dylib` |
|  +50.0% |    +1 | 15.4% → 33.3% |   2 → 3 | `Compile::call_generator`                             | `libjvm.dylib` |
| removed |    -1 |   7.7% → 0.0% |   1 → 0 | `GraphKit::record_profiled_arguments_for_speculation` | `libjvm.dylib` |

##### `PhaseOutput::Output` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                  | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
| +200.0% |    +2 | 10.0% → 50.0% |   1 → 3 | `PhaseOutput::fill_buffer`              | `libjvm.dylib` |
|  -66.7% |    -2 | 30.0% → 16.7% |   3 → 1 | `PhaseOutput::BuildOopMaps`             | `libjvm.dylib` |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `PhaseOutput::init_scratch_buffer_blob` | `libjvm.dylib` |
|  -33.3% |    -1 | 30.0% → 33.3% |   3 → 2 | `Scheduling::DoScheduling`              | `libjvm.dylib` |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `PhaseOutput::shorten_branches`         | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                | Location       |
| ------: | ----: | -----------: | ------: | --------------------- | -------------- |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `G1CardSet::add_card` | `libjvm.dylib` |

##### `os::malloc` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                     | Location                 |
| ------: | ----: | -----------: | ------: | -------------------------- | ------------------------ |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `nanov2_allocate_outlined` | `libsystem_malloc.dylib` |

##### `G1ConcurrentRebuildAndScrub::rebuild_and_scrub` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                    | Location       |
| -----: | ----: | -----: | ------: | ------------------------- | -------------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `WorkerThreads::run_task` | `libjvm.dylib` |

##### `G1ConcurrentMarkThread::phase_rebuild_and_scrub` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                                           | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------------------ | -------------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `G1ConcurrentRebuildAndScrub::rebuild_and_scrub` | `libjvm.dylib` |

##### `G1ConcurrentMarkThread::concurrent_mark_cycle_do` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                            | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------------- | -------------- |
| -75.0% |    -3 | 80.0% → 50.0% |   4 → 1 | `G1ConcurrentMarkThread::phase_rebuild_and_scrub` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                   | Location       |
| ------: | ----: | ------------: | ------: | ------------------------ | -------------- |
|  -30.8% |    -4 | 86.7% → 75.0% |  13 → 9 | `Parse::do_call`         | `libjvm.dylib` |
|  -33.3% |    -1 | 20.0% → 16.7% |   3 → 2 | `Parse::do_if`           | `libjvm.dylib` |
| removed |    -1 |   6.7% → 0.0% |   1 → 0 | `Parse::do_exceptions`   | `libjvm.dylib` |
| +100.0% |    +1 |  6.7% → 16.7% |   1 → 2 | `Parse::do_field_access` | `libjvm.dylib` |
| +100.0% |    +1 |  6.7% → 16.7% |   1 → 2 | `Parse::do_one_bytecode` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                | Location       |
| -----: | ----: | -----: | ------: | --------------------- | -------------- |
| -20.0% |    -3 | 100.0% | 15 → 12 | `Parse::do_one_block` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|  Change | Delta |           % | Samples | Callee                    | Location       |
| ------: | ----: | ----------: | ------: | ------------------------- | -------------- |
|  -20.0% |    -3 |      100.0% | 15 → 12 | `Parse::do_all_blocks`    | `libjvm.dylib` |
| removed |    -1 | 6.7% → 0.0% |   1 → 0 | `Parse::create_entry_map` | `libjvm.dylib` |
| removed |    -1 | 6.7% → 0.0% |   1 → 0 | `Parse::do_exits`         | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee         | Location       |
| -----: | ----: | -----: | ------: | -------------- | -------------- |
| -20.0% |    -3 | 100.0% | 15 → 12 | `Parse::Parse` | `libjvm.dylib` |

##### `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                                                                                 | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------ | -------------- |
| removed |    -4 | 80.0% → 0.0% |   4 → 0 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` | `libjvm.dylib` |
|     new |    +1 | 0.0% → 50.0% |   0 → 1 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_large_object`                         | `libjvm.dylib` |

##### `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                                                            | Location       |
| ------: | ----: | -------------: | ------: | --------------------------------------------------------------------------------- | -------------- |
|  -50.0% |    -2 | 80.0% → 100.0% |   4 → 2 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb` | `libjvm.dylib` |
| removed |    -1 |   20.0% → 0.0% |   1 → 0 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object`          | `libjvm.dylib` |

##### `G1RebuildRSAndScrubTask::work` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                           | Location       |
| -----: | ----: | -----: | ------: | -------------------------------- | -------------- |
| -60.0% |    -3 | 100.0% |   5 → 2 | `HeapRegionManager::par_iterate` | `libjvm.dylib` |

##### `InterpreterRuntime::resolve_invoke` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                           | Location       |
| ------: | ----: | -------------: | ------: | -------------------------------- | -------------- |
|  -50.0% |    -2 | 80.0% → 100.0% |   4 → 2 | `LinkResolver::resolve_invoke`   | `libjvm.dylib` |
| removed |    -1 |   20.0% → 0.0% |   1 → 0 | `Bytecode_member_ref::signature` | `libjvm.dylib` |

##### `InterpreterRuntime::resolve_from_cache` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                      | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------- | -------------- |
|  -60.0% |    -3 | 83.3% → 66.7% |   5 → 2 | `InterpreterRuntime::resolve_invoke`        | `libjvm.dylib` |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `InterpreterRuntime::resolve_invokedynamic` | `libjvm.dylib` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `InterpreterRuntime::resolve_get_put`       | `libjvm.dylib` |

##### `break_stack_range` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                                                                                            | Location                                                    |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `toFirSourceElement$default(AbstractRawFirBuilder, Object, KtFakeSourceElementKind, int, Object)` | `org.jetbrains.kotlin.fir.builder.AbstractRawFirBuilder`    |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `enterScope(IrSymbol)`                                                                            | `org.jetbrains.kotlin.fir.backend.Fir2IrDeclarationStorage` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `render(IrType, DumpIrTreeOptions)`                                                               | `org.jetbrains.kotlin.ir.util.RenderIrElementKt`            |

##### `nmethod::nmethod` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                              | Location                   |
| ------: | ----: | ------------: | ------: | ----------------------------------- | -------------------------- |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `nmethod::fix_oop_relocations`      | `libjvm.dylib`             |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `sys_icache_invalidate`             | `libsystem_platform.dylib` |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `nmethod::copy_scopes_data`         | `libjvm.dylib`             |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `G1CollectedHeap::register_nmethod` | `libjvm.dylib`             |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `nmethod::finalize_relocations`     | `libjvm.dylib`             |

##### `LinearScan::build_intervals` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                           | Location       |
| ------: | ----: | -----------: | ------: | -------------------------------- | -------------- |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `LIR_OpVisitState::visit`        | `libjvm.dylib` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `LinearScan::add_register_hints` | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                     | Location       |
| -----: | ----: | -----: | ------: | -------------------------- | -------------- |
| -23.1% |    -3 | 100.0% | 13 → 10 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                     | Location       |
| ------: | ----: | -----------: | ------: | -------------------------- | -------------- |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `CProjNode::is_block_proj` | `libjvm.dylib` |

##### `PhaseCFG::do_global_code_motion` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Callee                               | Location       |
| -----: | ----: | -------------: | ------: | ------------------------------------ | -------------- |
| -44.4% |    -4 | 100.0% → 83.3% |   9 → 5 | `PhaseCFG::global_code_motion`       | `libjvm.dylib` |
|    new |    +1 |   0.0% → 16.7% |   0 → 1 | `PhaseCFG::estimate_block_frequency` | `libjvm.dylib` |

##### `Matcher::Label_Root` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                  | Location       |
| ------: | ----: | -------------: | ------: | ----------------------- | -------------- |
| removed |    -1 |   25.0% → 0.0% |   1 → 0 | `ProjNode::bottom_type` | `libjvm.dylib` |
|  -50.0% |    -1 | 50.0% → 100.0% |   2 → 1 | `Matcher::Label_Root`   | `libjvm.dylib` |
| removed |    -1 |   25.0% → 0.0% |   1 → 0 | `State::_sub_Op_CmpP`   | `libjvm.dylib` |

##### `runCompletion(ConstraintSystemCompletionContext, ConstraintSystemCompletionMode, List, ConeKotlinType, ResolutionContext, ConstraintSystemCompleter$PostponedAtomAnalyzer)` (`org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`)

|  Change | Delta |             % | Samples | Callee                                                                                                                        | Location                                                                                    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| removed |    -2 |  28.6% → 0.0% |   2 → 0 | `fixVariableIfReady(ConstraintSystemCompletionContext, VariableFixationFinder$VariableForFixation)`                           | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`                      |
|  -25.0% |    -1 | 57.1% → 75.0% |   4 → 3 | `analyzeArgumentWithFixedParameterTypes(List, Function1)`                                                                     | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintSystemCompletionContext` |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `extractTypeVariables(KotlinTypeMarker)`                                                                                      | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`                |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `findFirstVariableForFixation(ConstraintSystemCompletionContext, List, List, ConstraintSystemCompletionMode, ConeKotlinType)` | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`                      |

##### `complete(ConstraintSystemCompletionContext, ConstraintSystemCompletionMode, List, ConeKotlinType, ResolutionContext, ConstraintSystemCompleter$PostponedAtomAnalyzer)` (`org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`)

| Change | Delta |      % | Samples | Callee                                                                                                                                                                       | Location                                                               |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| -42.9% |    -3 | 100.0% |   7 → 4 | `runCompletion(ConstraintSystemCompletionContext, ConstraintSystemCompletionMode, List, ConeKotlinType, ResolutionContext, ConstraintSystemCompleter$PostponedAtomAnalyzer)` | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter` |

##### `runCompletionForCall(Candidate, ConstraintSystemCompletionMode, FirExpression, ConeKotlinType, PostponedArgumentsAnalyzer)` (`org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`)

| Change | Delta |      % | Samples | Callee                                                                                                                                                                  | Location                                                               |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| -42.9% |    -3 | 100.0% |   7 → 4 | `complete(ConstraintSystemCompletionContext, ConstraintSystemCompletionMode, List, ConeKotlinType, ResolutionContext, ConstraintSystemCompleter$PostponedAtomAnalyzer)` | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter` |

##### `accept(FirVisitor, Object)` (`org.jetbrains.kotlin.fir.declarations.FirRegularClass`)

|  Change | Delta |            % | Samples | Callee                                       | Location                                                                                        |
| ------: | ----: | -----------: | ------: | -------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `visitRegularClass(FirRegularClass, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.FirSupertypeResolverVisitor`                     |
|  -50.0% |    -1 |        50.0% |   2 → 1 | `visitRegularClass(FirRegularClass, Object)` | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.DeclarationCheckersDiagnosticComponent` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `visitRegularClass(FirRegularClass, Object)` | `org.jetbrains.kotlin.fir.backend.Fir2IrVisitor`                                                |

##### `completeIsSubTypeOf(TypeCheckerState, TypeSystemContext, KotlinTypeMarker, KotlinTypeMarker, boolean)` (`org.jetbrains.kotlin.types.AbstractTypeChecker`)

| Change | Delta |              % | Samples | Callee                                                              | Location                                                                                      |
| -----: | ----: | -------------: | ------: | ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| -50.0% |    -1 | 66.7% → 100.0% |   2 → 1 | `addSubtypeConstraint(KotlinTypeMarker, KotlinTypeMarker, boolean)` | `org.jetbrains.kotlin.resolve.calls.inference.components.TypeCheckerStateForConstraintSystem` |

##### `isSubtypeOf(TypeCheckerState, KotlinTypeMarker, KotlinTypeMarker, boolean)` (`org.jetbrains.kotlin.types.AbstractTypeChecker`)

| Change | Delta |      % | Samples | Callee                                                                                                  | Location                                         |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| -66.7% |    -2 | 100.0% |   3 → 1 | `completeIsSubTypeOf(TypeCheckerState, TypeSystemContext, KotlinTypeMarker, KotlinTypeMarker, boolean)` | `org.jetbrains.kotlin.types.AbstractTypeChecker` |

##### `runIsSubtypeOf$default(ConstraintInjector$TypeCheckerStateForConstraintInjector, KotlinTypeMarker, KotlinTypeMarker, boolean, boolean, int, Object)` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector$TypeCheckerStateForConstraintInjector`)

|  Change | Delta |             % | Samples | Callee                                                                 | Location                                                                                                           |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `runIsSubtypeOf(KotlinTypeMarker, KotlinTypeMarker, boolean, boolean)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector$TypeCheckerStateForConstraintInjector` |

##### `transformFunctionCall(FirFunctionCall, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`)

| Change | Delta |      % | Samples | Callee                                                                                                                                             | Location                                                                                      |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| -11.8% |    -2 | 100.0% | 17 → 15 | `transformFunctionCallInternal$org_jetbrains_kotlin_resolve(FirFunctionCall, ResolutionMode, FirExpressionsResolveTransformer$CallResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |

##### `transformFunctionCall(FirFunctionCall, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change | Delta |      % | Samples | Callee                                                   | Location                                                                                      |
| -----: | ----: | -----: | ------: | -------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| -11.8% |    -2 | 100.0% | 17 → 15 | `transformFunctionCall(FirFunctionCall, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |

##### `transformFunctionCall(FirFunctionCall, Object)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change | Delta |      % | Samples | Callee                                                   | Location                                                                                                 |
| -----: | ----: | -----: | ------: | -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| -11.8% |    -2 | 100.0% | 17 → 15 | `transformFunctionCall(FirFunctionCall, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirFunctionCall`)

| Change | Delta |           % | Samples | Callee                                           | Location                                                                                                 |
| -----: | ----: | ----------: | ------: | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| -11.8% |    -2 |      100.0% | 17 → 15 | `transformFunctionCall(FirFunctionCall, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
|    new |    +1 | 0.0% → 6.7% |   0 → 1 | `transformFunctionCall(FirFunctionCall, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`            |

##### `check(CheckerSink, ResolutionContext, Candidate, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.CheckHiddenDeclaration`)

|  Change | Delta |            % | Samples | Callee                                                                         | Location                                                               |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `isDeprecatedHidden(ResolutionContext, FirBasedSymbol, CallInfo)`              | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckHiddenDeclaration` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `isHiddenForThisCallSite(CheckerSink, FirCallableSymbol, CallInfo, Candidate)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckHiddenDeclaration` |

##### `fixVariable(ConstraintSystemCompletionContext, VariableWithConstraints)` (`org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`)

|  Change | Delta |            % | Samples | Callee                                                                                                                  | Location                                                                     |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `fixVariable(TypeVariableMarker, KotlinTypeMarker, FixVariableConstraintPosition)`                                      | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `findResultType(ResultTypeResolver$Context, VariableWithConstraints, TypeVariableDirectionCalculator$ResolveDirection)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ResultTypeResolver` |

##### `fixVariableIfReady(ConstraintSystemCompletionContext, VariableFixationFinder$VariableForFixation)` (`org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`)

|  Change | Delta |             % | Samples | Callee                                                                    | Location                                                               |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `fixVariable(ConstraintSystemCompletionContext, VariableWithConstraints)` | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter` |

##### `transformWhileLoop(FirWhileLoop, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer`)

|  Change | Delta |              % | Samples | Callee                                       | Location                                                     |
| ------: | ----: | -------------: | ------: | -------------------------------------------- | ------------------------------------------------------------ |
|  -33.3% |    -1 | 75.0% → 100.0% |   3 → 2 | `transformBlock(FirTransformer, Object)`     | `org.jetbrains.kotlin.fir.expressions.impl.FirWhileLoopImpl` |
| removed |    -1 |   25.0% → 0.0% |   1 → 0 | `transformCondition(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.impl.FirWhileLoopImpl` |

##### `transformWhileLoop(FirWhileLoop, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change | Delta |      % | Samples | Callee                                             | Location                                                                                                |
| -----: | ----: | -----: | ------: | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `transformWhileLoop(FirWhileLoop, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer` |

##### `transformWhileLoop(FirWhileLoop, Object)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change | Delta |      % | Samples | Callee                                             | Location                                                                                                 |
| -----: | ----: | -----: | ------: | -------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `transformWhileLoop(FirWhileLoop, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirWhileLoop`)

| Change | Delta |      % | Samples | Callee                                     | Location                                                                                                 |
| -----: | ----: | -----: | ------: | ------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `transformWhileLoop(FirWhileLoop, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### `transformResult(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirRegularWhenBranch`)

| Change | Delta |      % | Samples | Callee                                    | Location                                                         |
| -----: | ----: | -----: | ------: | ----------------------------------------- | ---------------------------------------------------------------- |
| -40.0% |    -2 | 100.0% |   5 → 3 | `transform(FirTransformer, Object)`       | `org.jetbrains.kotlin.fir.expressions.FirBlock`                  |
| -40.0% |    -2 | 100.0% |   5 → 3 | `transformResult(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.impl.FirRegularWhenBranch` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in samples collected in their leaf frame.

|  Change | Delta |             % |   Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------: | ----: | ------------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   +2.4% |   +22 | 32.2% → 32.5% | 898 → 920 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThread::run` (`libjvm.dylib`) ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|   +4.2% |    +7 |   5.9% → 6.1% | 166 → 173 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                      |
|   +7.8% |    +7 |   3.2% → 3.4% |   90 → 97 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` ← `G1ConcurrentRefineThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                        |
|   +5.5% |    +5 |   3.3% → 3.4% |   91 → 96 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ConcurrentMarkThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                          |
|     new |    +4 |   0.0% → 0.1% |     0 → 4 | `__psynch_mutexwait` (`libsystem_kernel.dylib`) ← `_pthread_mutex_firstfit_lock_slow` (`libsystem_pthread.dylib`) ← `_pthread_cond_wait` ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                          |
|  +42.9% |    +3 |   0.3% → 0.4% |    7 → 10 | `inflate_fast` (`libzip.dylib`) ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |
| +150.0% |    +3 |   0.1% → 0.2% |     2 → 5 | `PhaseChaitin::elide_copy` (`libjvm.dylib`) ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                  |
|   +2.2% |    +2 |          3.3% |   92 → 94 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `VMThread::wait_for_operation` ← `VMThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                           |
|   +2.1% |    +2 |   3.4% → 3.5% |   96 → 98 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Profiler::timerLoop` (`libasyncProfiler.dylib`) ← `JvmtiAgentThread::start_function_wrapper` (`libjvm.dylib`) ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                |
|   +2.1% |    +2 |   3.4% → 3.5% |   96 → 98 | `mach_msg2_trap` (`libsystem_kernel.dylib`) ← `mach_msg_overwrite` ← `mach_msg` ← `__CFRunLoopServiceMachPort` (`CoreFoundation`) ← `__CFRunLoopRun` ← `CFRunLoopRunSpecific` ← `CreateExecutionEnvironment` (`libjli.dylib`) ← `JLI_Launch` ← `main` (`java`) ← `unknown`                                                                                                                                                                                                                                                                                                                                                                                                  |
|   +2.1% |    +2 |   3.4% → 3.5% |   96 → 98 | `__ulock_wait` (`libsystem_kernel.dylib`) ← `CallJavaMainInNewThread` (`libjli.dylib`) ← `ContinueInNewThread` ← `JLI_Launch` ← `main` (`java`) ← `apple_main` (`libjli.dylib`) ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                             |
|   +2.1% |    +2 |          3.4% |   95 → 97 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`) ← `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `await(long)` (`java.lang.ref.ReferenceQueue`) ← `remove0(long)` ← `remove(long)` ← `run()` (`jdk.internal.ref.CleanerImpl`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()` ← `run()` (`jdk.internal.misc.InnocuousThread`)                                                                                                  |
|   +2.1% |    +2 |   3.4% → 3.5% |   96 → 98 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `ServiceThread::service_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                    |
|   +2.1% |    +2 |   3.4% → 3.5% |   96 → 98 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ServiceThread::wait_for_task` ← `G1ServiceThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                              |
|   +2.1% |    +2 |   3.4% → 3.5% |   96 → 98 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `os::signal_wait` (`libjvm.dylib`) ← `signal_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                |
|   +2.1% |    +2 |   3.4% → 3.5% |   96 → 98 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `WatcherThread::sleep` ← `WatcherThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                              |
|   +2.1% |    +2 |   3.4% → 3.5% |   96 → 98 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformEvent::park` (`libjvm.dylib`) ← `ObjectMonitor::wait` ← `ObjectSynchronizer::wait` ← `JVM_MonitorWait` ← `wait0(long)` (`java.lang.Object`) ← `wait(long)` ← `wait()` ← `await()` (`java.lang.ref.NativeReferenceQueue`) ← `remove0()` (`java.lang.ref.ReferenceQueue`) ← `remove()` (`java.lang.ref.NativeReferenceQueue`) ← `run()` (`java.lang.ref.Finalizer$FinalizerThread`)                                                                                                                                                                                                                                   |
|   +2.1% |    +2 |   3.4% → 3.5% |   96 → 98 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `JVM_WaitForReferencePendingList` ← `waitForReferencePendingList()` (`java.lang.ref.Reference`) ← `processPendingReferences()` ← `run()` (`java.lang.ref.Reference$ReferenceHandler`)                                                                                                                                                                                                                                                                                                                                                                           |
|   +2.1% |    +2 |   3.4% → 3.5% |   96 → 98 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `MonitorDeflationThread::monitor_deflation_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                 |
|   +2.1% |    +2 |          3.4% |   95 → 97 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `NotificationThread::notification_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                          |

### Improvements

Call stacks with the largest decrease in samples collected in their leaf frame.

Common call stack: `Thread::call_run` (`libjvm.dylib`) ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`

|  Change | Delta |            % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThreads::run_task` (`libjvm.dylib`) ← `G1ConcurrentRebuildAndScrub::rebuild_and_scrub` ← `G1ConcurrentMarkThread::phase_rebuild_and_scrub` ← `G1ConcurrentMarkThread::concurrent_mark_cycle_do` ← `G1ConcurrentMarkThread::run_service` ← `ConcurrentGCThread::run`                                                                                                                                                                                                                                                                                                                                                                        |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `IndexSet::initialize` (`libjvm.dylib`) ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                                  |
|  -40.0% |    -2 |  0.2% → 0.1% |   5 → 3 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  -66.7% |    -2 | 0.1% → <0.1% |   3 → 1 | `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                                     |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `Matcher::find_shared` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `G1CardSet::add_to_howl` (`libjvm.dylib`) ← `G1CardSet::add_card` ← `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb` ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region` ← `HeapRegionManager::par_iterate` ← `G1RebuildRSAndScrubTask::work` ← `WorkerThread::run`                                                                                                                                                                            |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`) ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb` ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region` ← `HeapRegionManager::par_iterate` ← `G1RebuildRSAndScrubTask::work` ← `WorkerThread::run`                                                                                                                                                                                                                               |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `PhaseRemoveUseless::PhaseRemoveUseless` (`libjvm.dylib`) ← `PhaseRenumberLive::PhaseRenumberLive` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                                  |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                              |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                          |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `LinearScan::build_intervals` (`libjvm.dylib`) ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                        |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `CodeBuffer::finalize_oop_references` (`libjvm.dylib`) ← `nmethod::new_nmethod` ← `ciEnv::register_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                          |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `Scheduling::ComputeRegisterAntidependencies` (`libjvm.dylib`) ← `Scheduling::DoScheduling` ← `PhaseOutput::Output` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                 |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `G1BlockOffsetTablePart::update_for_block_work` (`libjvm.dylib`) ← `G1ParScanThreadState::do_copy_to_survivor_space` ← `G1ParScanThreadState::trim_queue_to_threshold` ← `G1ScanHRForRegionClosure::scan_memregion` ← `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` ← `G1ScanHRForRegionClosure::scan_heap_roots` ← `G1ScanHRForRegionClosure::do_heap_region` ← `G1RemSet::scan_heap_roots` ← `G1EvacuateRegionsTask::scan_roots` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run`                                                                                       |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `nanov2_find_block_and_allocate` (`libsystem_malloc.dylib`) ← `nanov2_allocate_outlined` ← `os::malloc` (`libjvm.dylib`) ← `AllocateHeap` ← `G1CardSet::G1CardSet` ← `HeapRegionRemSet::HeapRegionRemSet` ← `HeapRegion::HeapRegion` ← `HeapRegionManager::expand` ← `HeapRegionManager::expand_by` ← `G1CollectedHeap::expand` ← `G1CollectedHeap::resize_heap_if_necessary` ← `G1ConcurrentMark::remark` ← `VM_G1PauseConcurrent::doit` ← `VM_Operation::evaluate` ← `VMThread::evaluate_operation` ← `VMThread::inner_execute` ← `VMThread::run`                                                                                                                                                  |
|  -50.0% |    -1 | 0.1% → <0.1% |   2 → 1 | `fwd_copy_again` (`libjvm.dylib`) ← `G1ParScanThreadState::trim_queue_to_threshold` ← `G1ScanHRForRegionClosure::scan_memregion` ← `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` ← `G1ScanHRForRegionClosure::scan_heap_roots` ← `G1ScanHRForRegionClosure::do_heap_region` ← `G1RemSet::scan_heap_roots` ← `G1EvacuateRegionsTask::scan_roots` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run`                                                                                                                                                                          |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThreads::run_task` (`libjvm.dylib`) ← `G1YoungCollector::post_evacuate_collection_set` ← `G1YoungCollector::collect` ← `G1CollectedHeap::do_collection_pause_at_safepoint_helper` ← `G1CollectedHeap::do_collection_pause_at_safepoint` ← `VM_G1TryInitiateConcMark::doit` ← `VM_Operation::evaluate` ← `VMThread::evaluate_operation` ← `VMThread::inner_execute` ← `VMThread::run`                                                                                                                                                                                                                                                       |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `VMThread::wait_until_executed` ← `VMThread::execute` ← `G1ConcurrentMarkThread::phase_mark_loop` ← `G1ConcurrentMarkThread::concurrent_mark_cycle_do` ← `G1ConcurrentMarkThread::run_service` ← `ConcurrentGCThread::run`                                                                                                                                                                                                                                                                                                                                       |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Type::hashcons` (`libjvm.dylib`) ← `TypeFunc::make` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `RegionNode::Opcode` (`libjvm.dylib`) ← `IdealLoopTree::iteration_split` ← `IdealLoopTree::iteration_split` ← `IdealLoopTree::iteration_split` ← `IdealLoopTree::iteration_split` ← `IdealLoopTree::iteration_split` ← `IdealLoopTree::iteration_split` ← `IdealLoopTree::iteration_split` ← `IdealLoopTree::iteration_split` ← `IdealLoopTree::iteration_split` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` |

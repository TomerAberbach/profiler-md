# Sampling profile diff

Collected 1,772 → 1,419 samples (-353 samples, -19.9%).

| Category         | Change | Delta |             % |   Samples |
| ---------------- | -----: | ----: | ------------: | --------: |
| Compiler         | -11.7% |   -83 | 40.1% → 44.2% | 710 → 627 |
| Native           | -27.1% |  -209 | 43.6% → 39.7% | 772 → 563 |
| Ours             | -21.2% |   -41 | 10.9% → 10.7% | 193 → 152 |
| Standard library | -19.2% |   -15 |          4.4% |   78 → 63 |
| JIT              | -26.3% |    -5 |   1.1% → 1.0% |   19 → 14 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── … 1,243 → 950 samples (70.1% → 66.9%) Thread::call_run at libjvm.dylib
│   ├── 1,174 → 860 samples (66.3% → 60.6%) JavaThread::thread_main_inner
│   │   └── 1,171 → 856 samples (66.1% → 60.3%) CompileBroker::compiler_thread_loop
│   │       ├── 1,068 → 832 samples (60.3% → 58.6%) CompileBroker::invoke_compiler_on_method
│   │       │   ├── 746 → 579 samples (42.1% → 40.8%) C2Compiler::compile_method
│   │       │   │   └── 745 → 577 samples (42.0% → 40.7%) Compile::Compile
│   │       │   │       ├── 257 → 207 samples (14.5% → 14.6%) Compile::Optimize
│   │       │   │       │   ├── 68 → 73 samples (3.8% → 5.1%) PhaseIdealLoop::optimize
│   │       │   │       │   │   ├── 57 → 61 samples (3.2% → 4.3%) PhaseIdealLoop::PhaseIdealLoop
│   │       │   │       │   │   │   └── 56 → 61 samples (3.2% → 4.3%) PhaseIdealLoop::build_and_optimize
│   │       │   │       │   │   │       ├── 14 → 23 samples (0.8% → 1.6%) PhaseIdealLoop::build_loop_late
│   │       │   │       │   │   │       │   └── 14 → 16 samples (0.8% → 1.1%) 2 more callees, led by (0.7% → 1.1%) PhaseIdealLoop::build_loop_late_post_work
│   │       │   │       │   │   │       ├── 12 → 9 samples (0.7% → 0.6%, self 0.6% → 0.4%) PhaseIdealLoop::build_loop_early
│   │       │   │       │   │   │       └── 30 → 29 samples (1.7% → 2.0%) 14 more callees, led by (0.3% → 0.8%) PhaseIdealLoop::split_if_with_blocks
│   │       │   │       │   │   └── 11 → 12 samples (0.6% → 0.8%) 2 more callees, led by (0.6% → 0.8%) PhaseIterGVN::optimize
│   │       │   │       │   └── 189 → 134 samples (10.7% → 9.4%) 14 more callees, led by (3.3%) Compile::optimize_loops
│   │       │   │       ├── … 100 → 59 samples (5.6% → 4.2%) Parse::do_all_blocks at libjvm.dylib
│   │       │   │       │   └── 98 → 55 samples (5.5% → 3.9%) Parse::do_one_block
│   │       │   │       │       ├── 59 → 29 samples (3.3% → 2.0%) Parse::do_call
│   │       │   │       │       │   ├── … 31 → 9 samples (1.7% → 0.6%) ciMethod::get_flow_analysis at libjvm.dylib
│   │       │   │       │       │   │   ├── … 24 → 5 samples (1.4% → 0.4%) ciTypeFlow::StateVector::apply_one_bytecode at libjvm.dylib
│   │       │   │       │       │   │   │   └── … 8 → 0 samples (0.5% → 0.0%, self 7.0% → 1.3% globally) __psynch_mutexwait at libsystem_kernel.dylib
│   │       │   │       │       │   │   └── … 2 → 0 samples (0.1% → 0.0%) ciMethodBlocks::do_analysis at libjvm.dylib
│   │       │   │       │       │   └── 24 → 19 samples (1.4% → 1.3%) 8 more callees, led by (0.5% → 0.6%) PredictedCallGenerator::generate
│   │       │   │       │       └── 39 → 26 samples (2.2% → 1.8%) 12 more callees, led by (0.8% → 0.9%) Parse::do_field_access
│   │       │   │       └── 382 → 304 samples (21.6% → 21.4%) 10 more callees, led by (20.3% → 20.4%) Compile::Code_Gen
│   │       │   └── 322 → 253 samples (18.2% → 17.8%) 6 more callees, led by (17.0% → 17.3%) Compiler::compile_method
│   │       └── … 92 → 18 samples (5.2% → 1.3%) PlatformMonitor::wait at libjvm.dylib
│   │           └── 88 → 15 samples (5.0% → 1.1%, self 5.8% → 1.8% globally) __psynch_cvwait at libsystem_kernel.dylib
│   └── 69 → 90 samples (3.9% → 6.3%) 4 more callees, led by (2.9% → 5.4%) WorkerThread::run
├── 521 → 456 samples (29.4% → 32.1%) main(String[]) at org.jetbrains.kotlin.preloading.Preloader
│   └── 521 → 456 samples (29.4% → 32.1%) run(String[])
│       ├── … 438 → 370 samples (24.7% → 26.1%) exec(PrintStream, Services, MessageRenderer, String[]) at org.jetbrains.kotlin.cli.common.CLICompiler
│       │   └── 434 → 367 samples (24.5% → 25.9%) exec(MessageCollector, Services, CommonCompilerArguments)
│       │       ├── … 419 → 356 samples (23.6% → 25.1%) invoke(PhaseConfig, PhaserState, LoggingContext, Object) at org.jetbrains.kotlin.config.phaser.NamedCompilerPhase
│       │       │   └── 419 → 356 samples (23.6% → 25.1%) 4 more callees, led by (21.8% → 23.5%) phaseBody(LoggingContext, Object) at org.jetbrains.kotlin.cli.pipeline.PipelinePhase
│       │       └── 9 → 6 samples (0.5% → 0.4%) <clinit>() at org.jetbrains.kotlin.cli.common.ArgumentsKt …
│       └── 78 samples (4.4% → 5.5%) preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler) at org.jetbrains.kotlin.preloading.ClassPreloadingUtils
│           └── 78 samples (4.4% → 5.5%) 2 more callees, led by (4.3% → 5.5%) loadAllClassesFromJars(Collection, int, ClassHandler) at org.jetbrains.kotlin.preloading.ClassPreloadingUtils
└── 4 → 7 samples (0.2% → 0.5%) break_stack_range
```

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |           % | Samples | Function                                                                                       | Location                   |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------------------------- | -------------------------- |
| +500.0% |   +10 | 0.1% → 0.8% |  2 → 12 | `PhaseIdealLoop::build_loop_late`                                                              | `libjvm.dylib`             |
| +300.0% |    +9 | 0.2% → 0.8% |  3 → 12 | `_platform_memmove`                                                                            | `libsystem_platform.dylib` |
| +100.0% |    +9 | 0.5% → 1.3% |  9 → 18 | `IndexSetIterator::advance_and_next`                                                           | `libjvm.dylib`             |
| +350.0% |    +7 | 0.1% → 0.6% |   2 → 9 | `SymbolTable::lookup_only`                                                                     | `libjvm.dylib`             |
| +200.0% |    +6 | 0.2% → 0.6% |   3 → 9 | `LinearScan::build_intervals`                                                                  | `libjvm.dylib`             |
| +250.0% |    +5 | 0.1% → 0.5% |   2 → 7 | `Node::Node`                                                                                   | `libjvm.dylib`             |
|  +83.3% |    +5 | 0.3% → 0.8% |  6 → 11 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib`             |
| +166.7% |    +5 | 0.2% → 0.6% |   3 → 8 | `PhiNode::Ideal`                                                                               | `libjvm.dylib`             |
| +125.0% |    +5 | 0.2% → 0.6% |   4 → 9 | `Node::dominates`                                                                              | `libjvm.dylib`             |
| +400.0% |    +4 | 0.1% → 0.4% |   1 → 5 | `G1ParScanThreadState::trim_queue_to_threshold`                                                | `libjvm.dylib`             |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `GlobalValueNumbering::GlobalValueNumbering`                                                   | `libjvm.dylib`             |
|  +16.7% |    +4 | 1.4% → 2.0% | 24 → 28 | `SymbolTable::do_lookup`                                                                       | `libjvm.dylib`             |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `CompiledMethod::cleanup_inline_caches_impl`                                                   | `libjvm.dylib`             |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `Interval::add_use_pos`                                                                        | `libjvm.dylib`             |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `G1CardSet::add_to_howl`                                                                       | `libjvm.dylib`             |
|  +75.0% |    +3 | 0.2% → 0.5% |   4 → 7 | `Matcher::xform`                                                                               | `libjvm.dylib`             |
|  +60.0% |    +3 | 0.3% → 0.6% |   5 → 8 | `Node_Backward_Iterator::next`                                                                 | `libjvm.dylib`             |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `LIRGenerator::state_for`                                                                      | `libjvm.dylib`             |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `G1CardSet::add_card`                                                                          | `libjvm.dylib`             |
| +150.0% |    +3 | 0.1% → 0.4% |   2 → 5 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges`                             | `libjvm.dylib`             |

##### Compiler

|  Change | Delta |           % | Samples | Function                                                           | Location       |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------ | -------------- |
| +500.0% |   +10 | 0.1% → 0.8% |  2 → 12 | `PhaseIdealLoop::build_loop_late`                                  | `libjvm.dylib` |
| +100.0% |    +9 | 0.5% → 1.3% |  9 → 18 | `IndexSetIterator::advance_and_next`                               | `libjvm.dylib` |
| +200.0% |    +6 | 0.2% → 0.6% |   3 → 9 | `LinearScan::build_intervals`                                      | `libjvm.dylib` |
| +250.0% |    +5 | 0.1% → 0.5% |   2 → 7 | `Node::Node`                                                       | `libjvm.dylib` |
| +166.7% |    +5 | 0.2% → 0.6% |   3 → 8 | `PhiNode::Ideal`                                                   | `libjvm.dylib` |
| +125.0% |    +5 | 0.2% → 0.6% |   4 → 9 | `Node::dominates`                                                  | `libjvm.dylib` |
|  +75.0% |    +3 | 0.2% → 0.5% |   4 → 7 | `Matcher::xform`                                                   | `libjvm.dylib` |
|  +60.0% |    +3 | 0.3% → 0.6% |   5 → 8 | `Node_Backward_Iterator::next`                                     | `libjvm.dylib` |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `LIRGenerator::state_for`                                          | `libjvm.dylib` |
| +150.0% |    +3 | 0.1% → 0.4% |   2 → 5 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` | `libjvm.dylib` |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `IfFalseNode::Opcode`                                              | `libjvm.dylib` |
|  +33.3% |    +2 | 0.3% → 0.6% |   6 → 8 | `PhaseIdealLoop::Dominators`                                       | `libjvm.dylib` |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `PhaseCFG::partial_latency_of_defs`                                | `libjvm.dylib` |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `MethodLiveness::BasicBlock::get_liveness_at`                      | `libjvm.dylib` |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `GraphBuilder::invoke`                                             | `libjvm.dylib` |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `GraphBuilder::append_with_bci`                                    | `libjvm.dylib` |
| +100.0% |    +2 | 0.1% → 0.3% |   2 → 4 | `BoolNode::Opcode`                                                 | `libjvm.dylib` |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `Matcher::specialize_generic_vector_operands`                      | `libjvm.dylib` |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `Node::replace_edge`                                               | `libjvm.dylib` |
|  +66.7% |    +2 | 0.2% → 0.4% |   3 → 5 | `PhaseIdealLoop::build_loop_tree`                                  | `libjvm.dylib` |

##### Native

|  Change | Delta |           % | Samples | Function                                                                                                                                                 | Location                   |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| +300.0% |    +9 | 0.2% → 0.8% |  3 → 12 | `_platform_memmove`                                                                                                                                      | `libsystem_platform.dylib` |
| +350.0% |    +7 | 0.1% → 0.6% |   2 → 9 | `SymbolTable::lookup_only`                                                                                                                               | `libjvm.dylib`             |
|  +83.3% |    +5 | 0.3% → 0.8% |  6 → 11 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                           | `libjvm.dylib`             |
| +400.0% |    +4 | 0.1% → 0.4% |   1 → 5 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                                                          | `libjvm.dylib`             |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `GlobalValueNumbering::GlobalValueNumbering`                                                                                                             | `libjvm.dylib`             |
|  +16.7% |    +4 | 1.4% → 2.0% | 24 → 28 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`             |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `CompiledMethod::cleanup_inline_caches_impl`                                                                                                             | `libjvm.dylib`             |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `Interval::add_use_pos`                                                                                                                                  | `libjvm.dylib`             |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `G1CardSet::add_to_howl`                                                                                                                                 | `libjvm.dylib`             |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `G1CardSet::add_card`                                                                                                                                    | `libjvm.dylib`             |
|  +33.3% |    +3 | 0.5% → 0.8% |  9 → 12 | `inflate_table`                                                                                                                                          | `libzip.dylib`             |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `ClassFileParser::parse_constant_pool_entries`                                                                                                           | `libjvm.dylib`             |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `SymbolTable::lookup_shared`                                                                                                                             | `libjvm.dylib`             |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `GenericTaskQueueSet<OverflowTaskQueue<ScannerTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>::steal_best_of_2`                                                | `libjvm.dylib`             |
|  +66.7% |    +2 | 0.2% → 0.4% |   3 → 5 | `fwd_copy_again`                                                                                                                                         | `libjvm.dylib`             |
|  +18.2% |    +2 | 0.6% → 0.9% | 11 → 13 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `SymbolTable::new_symbol`                                                                                                                                | `libjvm.dylib`             |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `OopRecorder::find_index`                                                                                                                                | `libjvm.dylib`             |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `trampoline_stub_Relocation::get_trampoline_for`                                                                                                         | `libjvm.dylib`             |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `Reflection::verify_class_access`                                                                                                                        | `libjvm.dylib`             |

##### Ours

| Change | Delta |           % | Samples | Function                                                                                                                                                            | Location                                                                                      |
| -----: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 0.1% |   0 → 2 | `transformInPlace(List, IrTransformer, Object)`                                                                                                                     | `org.jetbrains.kotlin.ir.util.TransformKt`                                                    |
|    new |    +2 | 0.0% → 0.1% |   0 → 2 | `extractValue(AbstractArrayMapOwner)`                                                                                                                               | `org.jetbrains.kotlin.util.AbstractArrayMapOwner$AbstractArrayMapAccessor`                    |
|    new |    +2 | 0.0% → 0.1% |   0 → 2 | `extractUpperTypesToCheckIntersectionEmptiness(List)`                                                                                                               | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintSystemCompletionContext`   |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>(CodedInputStream, ExtensionRegistryLite)`                                                                                                                   | `org.jetbrains.kotlin.metadata.ProtoBuf$Class`                                                |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `convertWhenExpression(LighterASTNode)`                                                                                                                             | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`               |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `advance()`                                                                                                                                                         | `org.jetbrains.kotlin.lexer._JetLexer`                                                        |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `invoke(Object, Object, Object)`                                                                                                                                    | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                                                                                         | `org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter$1`                                     |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `transformExpressionUsingSmartcastInfo(BodyResolveComponents, FirExpression)`                                                                                       | `org.jetbrains.kotlin.fir.resolve.ResolveUtilsKt`                                             |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `transformChildren(FirTransformer, Object)`                                                                                                                         | `org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`                                      |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `getUseSiteMemberScope(FirClass, FirSession, ScopeSession, FirResolvePhase)`                                                                                        | `org.jetbrains.kotlin.fir.scopes.FirKotlinScopeProvider`                                      |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `consumeCallableCandidate(FirCallableSymbol, CallInfo, TowerLevelProcessor)`                                                                                        | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`                           |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `processLevel(TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)`                                                                                | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`                        |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `completeCall(FirExpression, ResolutionMode, boolean)`                                                                                                              | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`                                 |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `resolveVariableAccessAndSelectCandidateImpl$lambda$0(FirCallResolver, FirQualifiedAccessExpression, FirSimpleNamedReference, boolean, FirElement, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                                      |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `transformElement(FirElement, ResolutionMode)`                                                                                                                      | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirPartialBodyResolveTransformer` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `getSource()`                                                                                                                                                       | `org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl`                               |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `substitutionSupertypePolicy(RigidTypeMarker)`                                                                                                                      | `org.jetbrains.kotlin.fir.types.ConeTypeContext`                                              |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `fastCorrespondingSupertypes(TypeSystemContext, RigidTypeMarker, TypeConstructorMarker)`                                                                            | `org.jetbrains.kotlin.types.model.TypeSystemContextContextualKt`                              |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `tryToSetSourceForImplicitReceiver$tryToSetSourceForImplicitReceiver(FirExpression, Candidate)`                                                                     | `org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate`                                  |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                                             | Location                                                            |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `sanitizeStackTrace(Throwable)`                                                                      | `kotlin.jvm.internal.Intrinsics`                                    |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                                        | `java.util.zip.Inflater`                                            |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `copyOf(byte[], int)`                                                                                | `java.util.Arrays`                                                  |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `defineClass(String, byte[], int, int, ProtectionDomain)`                                            | `java.lang.ClassLoader`                                             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `initClassName()`                                                                                    | `java.lang.Class`                                                   |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `getName()`                                                                                          | `java.lang.Class`                                                   |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>(FilteringSequence)`                                                                          | `kotlin.sequences.FilteringSequence$iterator$1`                     |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `allocateInstance(Object)`                                                                           | `java.lang.invoke.DirectMethodHandle`                               |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `throwParameterIsNullNPE(String)`                                                                    | `kotlin.jvm.internal.Intrinsics`                                    |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>()`                                                                                           | `java.util.IdentityHashMap`                                         |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `countPositives(byte[], int, int)`                                                                   | `java.lang.StringCoding`                                            |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `checkFromIndexSize(int, int, int, BiFunction)`                                                      | `jdk.internal.util.Preconditions`                                   |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `nextEntryPos(int, int, int)`                                                                        | `java.util.zip.ZipFile$Source`                                      |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `push(SymbolTable, String)`                                                                          | `jdk.internal.org.objectweb.asm.Frame`                              |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `config()`                                                                                           | `jdk.internal.reflect.ReflectionFactory`                            |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>(Name)`                                                                                       | `kotlin.reflect.jvm.internal.impl.types.error.ErrorClassDescriptor` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `access$100(FieldSet, MessageLite, CodedInputStream, CodedOutputStream, ExtensionRegistryLite, int)` | `kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite`    |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `allFlagsSet(int)`                                                                                   | `java.lang.invoke.MemberName`                                       |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `classFilePrologue()`                                                                                | `java.lang.invoke.InvokerBytecodeGenerator`                         |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `isNamed()`                                                                                          | `java.lang.Module`                                                  |

##### JIT

| Change | Delta |           % | Samples | Function      | Location    |
| -----: | ----: | ----------: | ------: | ------------- | ----------- |
| +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `itable stub` | `<unknown>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `zero_blocks` | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |           % |  Samples | Function                                          | Location                         |
| ------: | ----: | ----------: | -------: | ------------------------------------------------- | -------------------------------- |
|  -85.5% |  -106 | 7.0% → 1.3% | 124 → 18 | `__psynch_mutexwait`                              | `libsystem_kernel.dylib`         |
|  -75.5% |   -77 | 5.8% → 1.8% | 102 → 25 | `__psynch_cvwait`                                 | `libsystem_kernel.dylib`         |
|  -56.3% |    -9 | 0.9% → 0.5% |   16 → 7 | `PhaseIdealLoop::build_loop_early`                | `libjvm.dylib`                   |
|  -35.3% |    -6 | 1.0% → 0.8% |  17 → 11 | `PhaseChaitin::build_ifg_physical`                | `libjvm.dylib`                   |
|  -60.0% |    -6 | 0.6% → 0.3% |   10 → 4 | `PhaseChaitin::elide_copy`                        | `libjvm.dylib`                   |
|  -54.5% |    -6 | 0.6% → 0.4% |   11 → 5 | `checkNotNullParameter(Object, String)`           | `kotlin.jvm.internal.Intrinsics` |
|  -31.3% |    -5 | 0.9% → 0.8% |  16 → 11 | `PhaseLive::compute`                              | `libjvm.dylib`                   |
|  -41.7% |    -5 | 0.7% → 0.5% |   12 → 7 | `PhaseChaitin::gather_lrg_masks`                  | `libjvm.dylib`                   |
|  -83.3% |    -5 | 0.3% → 0.1% |    6 → 1 | `PhaseIterGVN::transform_old`                     | `libjvm.dylib`                   |
|  -22.7% |    -5 |        1.2% |  22 → 17 | `tlv_get_addr`                                    | `libdyld.dylib`                  |
|  -71.4% |    -5 | 0.4% → 0.1% |    7 → 2 | `ValueStack::values_do`                           | `libjvm.dylib`                   |
|  -35.7% |    -5 | 0.8% → 0.6% |   14 → 9 | `InstanceKlass::find_method_index`                | `libjvm.dylib`                   |
| removed |    -5 | 0.3% → 0.0% |    5 → 0 | `Scheduling::anti_do_def`                         | `libjvm.dylib`                   |
|  -66.7% |    -4 | 0.3% → 0.1% |    6 → 2 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib`                   |
|  -57.1% |    -4 | 0.4% → 0.2% |    7 → 3 | `Node::is_CFG`                                    | `libjvm.dylib`                   |
| removed |    -4 | 0.2% → 0.0% |    4 → 0 | `ciMethodBlocks::do_analysis`                     | `libjvm.dylib`                   |
|  -80.0% |    -4 | 0.3% → 0.1% |    5 → 1 | `mach_absolute_time`                              | `libsystem_kernel.dylib`         |
|  -66.7% |    -4 | 0.3% → 0.1% |    6 → 2 | `LinearScan::resolve_data_flow`                   | `libjvm.dylib`                   |
| removed |    -4 | 0.2% → 0.0% |    4 → 0 | `G1CodeRootSet::add`                              | `libjvm.dylib`                   |
|  -66.7% |    -4 | 0.3% → 0.1% |    6 → 2 | `Dictionary::find`                                | `libjvm.dylib`                   |

##### Compiler

|  Change | Delta |           % | Samples | Function                                        | Location       |
| ------: | ----: | ----------: | ------: | ----------------------------------------------- | -------------- |
|  -56.3% |    -9 | 0.9% → 0.5% |  16 → 7 | `PhaseIdealLoop::build_loop_early`              | `libjvm.dylib` |
|  -35.3% |    -6 | 1.0% → 0.8% | 17 → 11 | `PhaseChaitin::build_ifg_physical`              | `libjvm.dylib` |
|  -60.0% |    -6 | 0.6% → 0.3% |  10 → 4 | `PhaseChaitin::elide_copy`                      | `libjvm.dylib` |
|  -31.3% |    -5 | 0.9% → 0.8% | 16 → 11 | `PhaseLive::compute`                            | `libjvm.dylib` |
|  -41.7% |    -5 | 0.7% → 0.5% |  12 → 7 | `PhaseChaitin::gather_lrg_masks`                | `libjvm.dylib` |
|  -83.3% |    -5 | 0.3% → 0.1% |   6 → 1 | `PhaseIterGVN::transform_old`                   | `libjvm.dylib` |
|  -71.4% |    -5 | 0.4% → 0.1% |   7 → 2 | `ValueStack::values_do`                         | `libjvm.dylib` |
| removed |    -5 | 0.3% → 0.0% |   5 → 0 | `Scheduling::anti_do_def`                       | `libjvm.dylib` |
|  -57.1% |    -4 | 0.4% → 0.2% |   7 → 3 | `Node::is_CFG`                                  | `libjvm.dylib` |
| removed |    -4 | 0.2% → 0.0% |   4 → 0 | `ciMethodBlocks::do_analysis`                   | `libjvm.dylib` |
|  -66.7% |    -4 | 0.3% → 0.1% |   6 → 2 | `LinearScan::resolve_data_flow`                 | `libjvm.dylib` |
| removed |    -4 | 0.2% → 0.0% |   4 → 0 | `PhaseCFG::build_cfg`                           | `libjvm.dylib` |
|  -60.0% |    -3 | 0.3% → 0.1% |   5 → 2 | `PhaseCFG::schedule_pinned_nodes`               | `libjvm.dylib` |
|  -21.4% |    -3 |        0.8% | 14 → 11 | `ciObjectFactory::get_metadata`                 | `libjvm.dylib` |
|  -75.0% |    -3 | 0.2% → 0.1% |   4 → 1 | `Matcher::Label_Root`                           | `libjvm.dylib` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `RegMask::is_bound`                             | `libjvm.dylib` |
|  -33.3% |    -3 | 0.5% → 0.4% |   9 → 6 | `PhaseAggressiveCoalesce::insert_copies`        | `libjvm.dylib` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `ciEnv::get_method_by_index_impl`               | `libjvm.dylib` |
|  -50.0% |    -3 | 0.3% → 0.2% |   6 → 3 | `LinearScanWalker::free_collect_inactive_fixed` | `libjvm.dylib` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `LinearScanWalker::free_collect_inactive_any`   | `libjvm.dylib` |

##### Native

|  Change | Delta |           % |  Samples | Function                                                                                          | Location                   |
| ------: | ----: | ----------: | -------: | ------------------------------------------------------------------------------------------------- | -------------------------- |
|  -85.5% |  -106 | 7.0% → 1.3% | 124 → 18 | `__psynch_mutexwait`                                                                              | `libsystem_kernel.dylib`   |
|  -75.5% |   -77 | 5.8% → 1.8% | 102 → 25 | `__psynch_cvwait`                                                                                 | `libsystem_kernel.dylib`   |
|  -22.7% |    -5 |        1.2% |  22 → 17 | `tlv_get_addr`                                                                                    | `libdyld.dylib`            |
|  -35.7% |    -5 | 0.8% → 0.6% |   14 → 9 | `InstanceKlass::find_method_index`                                                                | `libjvm.dylib`             |
|  -66.7% |    -4 | 0.3% → 0.1% |    6 → 2 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                 | `libjvm.dylib`             |
|  -80.0% |    -4 | 0.3% → 0.1% |    5 → 1 | `mach_absolute_time`                                                                              | `libsystem_kernel.dylib`   |
| removed |    -4 | 0.2% → 0.0% |    4 → 0 | `G1CodeRootSet::add`                                                                              | `libjvm.dylib`             |
|  -66.7% |    -4 | 0.3% → 0.1% |    6 → 2 | `Dictionary::find`                                                                                | `libjvm.dylib`             |
| removed |    -3 | 0.2% → 0.0% |    3 → 0 | `ObjArrayAllocator::initialize`                                                                   | `libjvm.dylib`             |
|  -50.0% |    -3 | 0.3% → 0.2% |    6 → 3 | `resource_allocate_bytes`                                                                         | `libjvm.dylib`             |
| removed |    -3 | 0.2% → 0.0% |    3 → 0 | `Metadata::is_method`                                                                             | `libjvm.dylib`             |
| removed |    -3 | 0.2% → 0.0% |    3 → 0 | `LinkResolver::resolve_static_call`                                                               | `libjvm.dylib`             |
|  -75.0% |    -3 | 0.2% → 0.1% |    4 → 1 | `_platform_memcmp`                                                                                | `libsystem_platform.dylib` |
|  -75.0% |    -3 | 0.2% → 0.1% |    4 → 1 | `_platform_memchr`                                                                                | `libsystem_platform.dylib` |
|  -60.0% |    -3 | 0.3% → 0.1% |    5 → 2 | `UTF8::is_legal_utf8`                                                                             | `libjvm.dylib`             |
| removed |    -3 | 0.2% → 0.0% |    3 → 0 | `Dict::doubhash`                                                                                  | `libjvm.dylib`             |
| removed |    -2 | 0.1% → 0.0% |    2 → 0 | `void OopOopIterateDispatch<G1ScanCardClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib`             |
|  -66.7% |    -2 | 0.2% → 0.1% |    3 → 1 | `HeapWordImpl** HeapRegion::oops_on_memregion_iterate<G1ScanCardClosure, true>`                   | `libjvm.dylib`             |
|  -16.7% |    -2 |        0.7% |  12 → 10 | `semaphore_wait_trap`                                                                             | `libsystem_kernel.dylib`   |
| removed |    -2 | 0.1% → 0.0% |    2 → 0 | `LinkedConcreteMethodFinder::find_witness_anywhere`                                               | `libjvm.dylib`             |

##### Ours

|  Change | Delta |           % | Samples | Function                                                                                                     | Location                                                                                                                        |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `readMethod(ClassVisitor, Context, int)`                                                                     | `org.jetbrains.org.objectweb.asm.ClassReader`                                                                                   |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `constructFunctionType(FirFunction, FunctionTypeKind)`                                                       | `org.jetbrains.kotlin.fir.resolve.ResolveUtilsKt`                                                                               |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `toIrType(ConeKotlinType, ConversionTypeOrigin, List, boolean, boolean, boolean, boolean)`                   | `org.jetbrains.kotlin.fir.backend.Fir2IrTypeConverter`                                                                          |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `runAfter(PhaseConfig, PhaserState, LoggingContext, Object, Object)`                                         | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`                                                                         |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `execute(AbstractInsnNode, Interpreter)`                                                                     | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame`                                                                           |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `rewriteLabels(LineNumberNode)`                                                                              | `org.jetbrains.kotlin.codegen.optimization.LabelNormalizationMethodTransformer$TransformerForMethod`                            |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `getOwner()`                                                                                                 | `org.jetbrains.kotlin.ir.symbols.impl.IrSymbolBase`                                                                             |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `getStatements()`                                                                                            | `org.jetbrains.kotlin.ir.expressions.impl.IrBlockImpl`                                                                          |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                      | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                                          |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `read(VirtualFile, KotlinCliJavaFileManager, GlobalSearchScope)`                                             | `org.jetbrains.kotlin.resolve.jvm.modules.JavaModuleInfo$Companion`                                                             |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>()`                                                                                                   | `org.jetbrains.kotlin.protobuf.AbstractMessageLite`                                                                             |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>(int)`                                                                                                | `org.jetbrains.kotlin.protobuf.ByteString$Output`                                                                               |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `concat(ByteString)`                                                                                         | `org.jetbrains.kotlin.protobuf.ByteString`                                                                                      |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `advance()`                                                                                                  | `org.jetbrains.kotlin.parsing.AbstractKotlinParsing`                                                                            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `createTruncatedBuilder(int)`                                                                                | `org.jetbrains.kotlin.parsing.AbstractKotlinParsing`                                                                            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `isInline()`                                                                                                 | `org.jetbrains.kotlin.fir.declarations.impl.FirDeclarationStatusImpl`                                                           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getLexemeIndex(boolean)`                                                                                    | `com.intellij.lang.impl.PsiBuilderImpl$StartMarker`                                                                             |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `addModifier(LighterASTNode, boolean)`                                                                       | `org.jetbrains.kotlin.fir.lightTree.fir.modifier.ModifierList`                                                                  |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `contains(IElementType)`                                                                                     | `com.intellij.psi.tree.TokenSet`                                                                                                |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>(FirSession, ScopeSession, FirAbstractBodyResolveTransformerDispatcher, BodyResolveContext, boolean)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformer$BodyResolveTransformerComponents` |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                             | Location                                                                                    |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
|  -54.5% |    -6 | 0.6% → 0.4% |  11 → 5 | `checkNotNullParameter(Object, String)`                                              | `kotlin.jvm.internal.Intrinsics`                                                            |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `equals(Object)`                                                                     | `java.lang.String`                                                                          |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `removeNode(int, Object, Object, boolean, boolean)`                                  | `java.util.HashMap`                                                                         |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `putAll(Map, Pair[])`                                                                | `kotlin.collections.MapsKt__MapsKt`                                                         |
|  -50.0% |    -1 |        0.1% |   2 → 1 | `resize()`                                                                           | `java.util.HashMap`                                                                         |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>(AbstractStringBuilder, Void)`                                                | `java.lang.String`                                                                          |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `append(String)`                                                                     | `java.lang.AbstractStringBuilder`                                                           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `next()`                                                                             | `kotlin.collections.builders.MapBuilder$EntriesItr`                                         |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>()`                                                                           | `java.util.AbstractMap`                                                                     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `hasNext()`                                                                          | `java.util.ArrayList$Itr`                                                                   |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>(AtomicReferenceFieldUpdater$AtomicReferenceFieldUpdaterImpl, Class, String)` | `java.util.concurrent.atomic.AtomicReferenceFieldUpdater$AtomicReferenceFieldUpdaterImpl$1` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `invokeOnCompletion$default(Job, boolean, boolean, Function1, int, Object)`          | `kotlinx.coroutines.Job$DefaultImpls`                                                       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `toList(Iterable)`                                                                   | `kotlin.collections.CollectionsKt___CollectionsKt`                                          |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `newNode(int, Object, Object, HashMap$Node)`                                         | `java.util.HashMap`                                                                         |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `calcNext()`                                                                         | `kotlin.sequences.FilteringSequence$iterator$1`                                             |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `register(Object, Runnable)`                                                         | `java.lang.ref.Cleaner`                                                                     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getOrImplicitDefaultNullable(Map, Object)`                                          | `kotlin.collections.MapsKt__MapWithDefaultKt`                                               |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>()`                                                                           | `java.util.ArrayList`                                                                       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `tabAt(ConcurrentHashMap$Node[], int)`                                               | `java.util.concurrent.ConcurrentHashMap`                                                    |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `visitLocation(ImageLocation, ImageReader$SharedImageReader$LocationVisitor)`        | `jdk.internal.jimage.ImageReader$SharedImageReader`                                         |

##### JIT

| Change | Delta |           % | Samples | Function                 | Location    |
| -----: | ----: | ----------: | ------: | ------------------------ | ----------- |
| -80.0% |    -4 | 0.3% → 0.1% |   5 → 1 | `I2C/C2I adapters(0xb)`  | `<unknown>` |
| -40.0% |    -2 | 0.3% → 0.2% |   5 → 3 | `I2C/C2I adapters(0xbb)` | `<unknown>` |
| -50.0% |    -1 |        0.1% |   2 → 1 | `I2C/C2I adapters`       | `<unknown>` |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `transformInPlace(List, IrTransformer, Object)` (`org.jetbrains.kotlin.ir.util.TransformKt`)

| Change | Delta |            % | Samples | Location                                      |
| -----: | ----: | -----------: | ------: | --------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `org.jetbrains.kotlin.ir.util.TransformKt:32` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `org.jetbrains.kotlin.ir.util.TransformKt:35` |

##### `extractValue(AbstractArrayMapOwner)` (`org.jetbrains.kotlin.util.AbstractArrayMapOwner$AbstractArrayMapAccessor`)

| Change | Delta |             % | Samples | Location                                                                      |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `org.jetbrains.kotlin.util.AbstractArrayMapOwner$AbstractArrayMapAccessor:26` |

##### `extractUpperTypesToCheckIntersectionEmptiness(List)` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintSystemCompletionContext`)

| Change | Delta |            % | Samples | Location                                                                                        |
| -----: | ----: | -----------: | ------: | ----------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintSystemCompletionContext:127` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintSystemCompletionContext:130` |

##### `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Class`)

| Change | Delta |             % | Samples | Location                                            |
| -----: | ----: | ------------: | ------: | --------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.metadata.ProtoBuf$Class:9461` |

##### `convertWhenExpression(LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`)

| Change | Delta |             % | Samples | Location                                                                            |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder:976` |

##### `advance()` (`org.jetbrains.kotlin.lexer._JetLexer`)

| Change | Delta |             % | Samples | Location                                    |
| -----: | ----: | ------------: | ------: | ------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.lexer._JetLexer:1041` |

##### `invoke(Object, Object, Object)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1`)

| Change | Delta |             % | Samples | Location                                                                                         |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1:71` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter$1`)

| Change | Delta |             % | Samples | Location                                                        |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter$1:24018` |

##### `transformExpressionUsingSmartcastInfo(BodyResolveComponents, FirExpression)` (`org.jetbrains.kotlin.fir.resolve.ResolveUtilsKt`)

| Change | Delta |             % | Samples | Location                                              |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.ResolveUtilsKt:614` |

##### `transformChildren(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`)

| Change | Delta |             % | Samples | Location                                                    |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl:64` |

##### `getUseSiteMemberScope(FirClass, FirSession, ScopeSession, FirResolvePhase)` (`org.jetbrains.kotlin.fir.scopes.FirKotlinScopeProvider`)

| Change | Delta |             % | Samples | Location                                                    |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.scopes.FirKotlinScopeProvider:67` |

##### `consumeCallableCandidate(FirCallableSymbol, CallInfo, TowerLevelProcessor)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`)

| Change | Delta |             % | Samples | Location                                                                |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel:449` |

##### `processLevel(TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`)

| Change | Delta |             % | Samples | Location                                                                   |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask:188` |

##### `completeCall(FirExpression, ResolutionMode, boolean)` (`org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`)

| Change | Delta |             % | Samples | Location                                                          |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter:101` |

##### `resolveVariableAccessAndSelectCandidateImpl$lambda$0(FirCallResolver, FirQualifiedAccessExpression, FirSimpleNamedReference, boolean, FirElement, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

| Change | Delta |             % | Samples | Location                                                     |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver:408` |

##### `transformElement(FirElement, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirPartialBodyResolveTransformer`)

| Change | Delta |             % | Samples | Location                                                                                         |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirPartialBodyResolveTransformer:36` |

##### `getSource()` (`org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl`)

| Change | Delta |             % | Samples | Location                                                           |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl:37` |

##### `substitutionSupertypePolicy(RigidTypeMarker)` (`org.jetbrains.kotlin.fir.types.ConeTypeContext`)

| Change | Delta |             % | Samples | Location                                             |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.types.ConeTypeContext:708` |

##### `fastCorrespondingSupertypes(TypeSystemContext, RigidTypeMarker, TypeConstructorMarker)` (`org.jetbrains.kotlin.types.model.TypeSystemContextContextualKt`)

| Change | Delta |             % | Samples | Location                                                             |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.types.model.TypeSystemContextContextualKt:301` |

##### `tryToSetSourceForImplicitReceiver$tryToSetSourceForImplicitReceiver(FirExpression, Candidate)` (`org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate`)

| Change | Delta |             % | Samples | Location                                                         |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate:438` |

##### `sanitizeStackTrace(Throwable)` (`kotlin.jvm.internal.Intrinsics`)

|  Change | Delta |      % | Samples | Location                             |
| ------: | ----: | -----: | ------: | ------------------------------------ |
| +300.0% |    +3 | 100.0% |   1 → 4 | `kotlin.jvm.internal.Intrinsics:253` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change | Delta |             % | Samples | Location                |
| -----: | ----: | ------------: | ------: | ----------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.Arrays:3539` |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

| Change | Delta |             % | Samples | Location                     |
| -----: | ----: | ------------: | ------: | ---------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.lang.ClassLoader:1025` |

##### `getName()` (`java.lang.Class`)

| Change | Delta |             % | Samples | Location              |
| -----: | ----: | ------------: | ------: | --------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.lang.Class:949` |

##### `<init>(FilteringSequence)` (`kotlin.sequences.FilteringSequence$iterator$1`)

| Change | Delta |             % | Samples | Location                                            |
| -----: | ----: | ------------: | ------: | --------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `kotlin.sequences.FilteringSequence$iterator$1:196` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

| Change | Delta |             % | Samples | Location                                  |
| -----: | ----: | ------------: | ------: | ----------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.lang.invoke.DirectMethodHandle:501` |

##### `throwParameterIsNullNPE(String)` (`kotlin.jvm.internal.Intrinsics`)

| Change | Delta |             % | Samples | Location                             |
| -----: | ----: | ------------: | ------: | ------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `kotlin.jvm.internal.Intrinsics:140` |

##### `<init>()` (`java.util.IdentityHashMap`)

| Change | Delta |             % | Samples | Location                        |
| -----: | ----: | ------------: | ------: | ------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.IdentityHashMap:222` |

##### `countPositives(byte[], int, int)` (`java.lang.StringCoding`)

| Change | Delta |             % | Samples | Location                    |
| -----: | ----: | ------------: | ------: | --------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.lang.StringCoding:52` |

##### `checkFromIndexSize(int, int, int, BiFunction)` (`jdk.internal.util.Preconditions`)

| Change | Delta |             % | Samples | Location                              |
| -----: | ----: | ------------: | ------: | ------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `jdk.internal.util.Preconditions:396` |

##### `nextEntryPos(int, int, int)` (`java.util.zip.ZipFile$Source`)

| Change | Delta |             % | Samples | Location                            |
| -----: | ----: | ------------: | ------: | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.zip.ZipFile$Source:1834` |

##### `push(SymbolTable, String)` (`jdk.internal.org.objectweb.asm.Frame`)

| Change | Delta |             % | Samples | Location                                   |
| -----: | ----: | ------------: | ------: | ------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `jdk.internal.org.objectweb.asm.Frame:583` |

##### `config()` (`jdk.internal.reflect.ReflectionFactory`)

| Change | Delta |             % | Samples | Location                                     |
| -----: | ----: | ------------: | ------: | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `jdk.internal.reflect.ReflectionFactory:666` |

##### `<init>(Name)` (`kotlin.reflect.jvm.internal.impl.types.error.ErrorClassDescriptor`)

| Change | Delta |             % | Samples | Location                                                               |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `kotlin.reflect.jvm.internal.impl.types.error.ErrorClassDescriptor:27` |

##### `access$100(FieldSet, MessageLite, CodedInputStream, CodedOutputStream, ExtensionRegistryLite, int)` (`kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite`)

| Change | Delta |             % | Samples | Location                                                            |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite:49` |

##### `allFlagsSet(int)` (`java.lang.invoke.MemberName`)

| Change | Delta |             % | Samples | Location                          |
| -----: | ----: | ------------: | ------: | --------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.lang.invoke.MemberName:337` |

##### `classFilePrologue()` (`java.lang.invoke.InvokerBytecodeGenerator`)

| Change | Delta |             % | Samples | Location                                        |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.lang.invoke.InvokerBytecodeGenerator:271` |

##### `isNamed()` (`java.lang.Module`)

| Change | Delta |             % | Samples | Location               |
| -----: | ----: | ------------: | ------: | ---------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.lang.Module:188` |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

| Change | Delta |      % | Samples | Location                             |
| -----: | ----: | -----: | ------: | ------------------------------------ |
| -54.5% |    -6 | 100.0% |  11 → 5 | `kotlin.jvm.internal.Intrinsics:130` |

##### `readMethod(ClassVisitor, Context, int)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|  Change | Delta |            % | Samples | Location                                           |
| ------: | ----: | -----------: | ------: | -------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `org.jetbrains.org.objectweb.asm.ClassReader:1315` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `org.jetbrains.org.objectweb.asm.ClassReader:1324` |

##### `constructFunctionType(FirFunction, FunctionTypeKind)` (`org.jetbrains.kotlin.fir.resolve.ResolveUtilsKt`)

|  Change | Delta |            % | Samples | Location                                              |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.ResolveUtilsKt:235` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.ResolveUtilsKt:924` |

##### `toIrType(ConeKotlinType, ConversionTypeOrigin, List, boolean, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.backend.Fir2IrTypeConverter`)

|  Change | Delta |            % | Samples | Location                                                   |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.backend.Fir2IrTypeConverter:171` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.backend.Fir2IrTypeConverter:177` |

##### `runAfter(PhaseConfig, PhaserState, LoggingContext, Object, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|  Change | Delta |             % | Samples | Location                                                    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase:129` |

##### `execute(AbstractInsnNode, Interpreter)` (`org.jetbrains.org.objectweb.asm.tree.analysis.Frame`)

|  Change | Delta |             % | Samples | Location                                                  |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame:298` |

##### `rewriteLabels(LineNumberNode)` (`org.jetbrains.kotlin.codegen.optimization.LabelNormalizationMethodTransformer$TransformerForMethod`)

|  Change | Delta |             % | Samples | Location                                                                                                 |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `org.jetbrains.kotlin.codegen.optimization.LabelNormalizationMethodTransformer$TransformerForMethod:123` |

##### `getOwner()` (`org.jetbrains.kotlin.ir.symbols.impl.IrSymbolBase`)

|  Change | Delta |             % | Samples | Location                                               |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `org.jetbrains.kotlin.ir.symbols.impl.IrSymbolBase:37` |

##### `getStatements()` (`org.jetbrains.kotlin.ir.expressions.impl.IrBlockImpl`)

|  Change | Delta |             % | Samples | Location                                                  |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `org.jetbrains.kotlin.ir.expressions.impl.IrBlockImpl:29` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|  Change | Delta |             % | Samples | Location                                                   |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils:143` |

##### `read(VirtualFile, KotlinCliJavaFileManager, GlobalSearchScope)` (`org.jetbrains.kotlin.resolve.jvm.modules.JavaModuleInfo$Companion`)

|  Change | Delta |             % | Samples | Location                                                               |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.resolve.jvm.modules.JavaModuleInfo$Companion:79` |

##### `<init>()` (`org.jetbrains.kotlin.protobuf.AbstractMessageLite`)

|  Change | Delta |             % | Samples | Location                                               |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.protobuf.AbstractMessageLite:46` |

##### `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`)

|  Change | Delta |             % | Samples | Location                                              |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.protobuf.ByteString$Output:788` |

##### `concat(ByteString)` (`org.jetbrains.kotlin.protobuf.ByteString`)

|  Change | Delta |             % | Samples | Location                                       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.protobuf.ByteString:397` |

##### `advance()` (`org.jetbrains.kotlin.parsing.AbstractKotlinParsing`)

|  Change | Delta |             % | Samples | Location                                                 |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.parsing.AbstractKotlinParsing:147` |

##### `createTruncatedBuilder(int)` (`org.jetbrains.kotlin.parsing.AbstractKotlinParsing`)

|  Change | Delta |             % | Samples | Location                                                 |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.parsing.AbstractKotlinParsing:381` |

##### `isInline()` (`org.jetbrains.kotlin.fir.declarations.impl.FirDeclarationStatusImpl`)

|  Change | Delta |             % | Samples | Location                                                                 |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.declarations.impl.FirDeclarationStatusImpl:72` |

##### `getLexemeIndex(boolean)` (`com.intellij.lang.impl.PsiBuilderImpl$StartMarker`)

|  Change | Delta |             % | Samples | Location                                                |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `com.intellij.lang.impl.PsiBuilderImpl$StartMarker:349` |

##### `addModifier(LighterASTNode, boolean)` (`org.jetbrains.kotlin.fir.lightTree.fir.modifier.ModifierList`)

|  Change | Delta |             % | Samples | Location                                                          |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.lightTree.fir.modifier.ModifierList:33` |

##### `contains(IElementType)` (`com.intellij.psi.tree.TokenSet`)

|  Change | Delta |             % | Samples | Location                            |
| ------: | ----: | ------------: | ------: | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `com.intellij.psi.tree.TokenSet:56` |

##### `<init>(FirSession, ScopeSession, FirAbstractBodyResolveTransformerDispatcher, BodyResolveContext, boolean)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformer$BodyResolveTransformerComponents`)

|  Change | Delta |             % | Samples | Location                                                                                                                            |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformer$BodyResolveTransformerComponents:111` |

##### `equals(Object)` (`java.lang.String`)

|  Change | Delta |            % | Samples | Location                |
| ------: | ----: | -----------: | ------: | ----------------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `java.lang.String:1847` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `java.lang.String:1850` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `java.lang.String:1852` |

##### `removeNode(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|  Change | Delta |            % | Samples | Location                |
| ------: | ----: | -----------: | ------: | ----------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.HashMap:843` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.HashMap:851` |

##### `putAll(Map, Pair[])` (`kotlin.collections.MapsKt__MapsKt`)

|  Change | Delta |            % | Samples | Location                                |
| ------: | ----: | -----------: | ------: | --------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `kotlin.collections.MapsKt__MapsKt:578` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `kotlin.collections.MapsKt__MapsKt:579` |

##### `resize()` (`java.util.HashMap`)

|  Change | Delta |            % | Samples | Location                |
| ------: | ----: | -----------: | ------: | ----------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.HashMap:710` |

##### `<init>(AbstractStringBuilder, Void)` (`java.lang.String`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.String:4781` |

##### `append(String)` (`java.lang.AbstractStringBuilder`)

|  Change | Delta |             % | Samples | Location                              |
| ------: | ----: | ------------: | ------: | ------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.AbstractStringBuilder:588` |

##### `next()` (`kotlin.collections.builders.MapBuilder$EntriesItr`)

|  Change | Delta |             % | Samples | Location                                                |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `kotlin.collections.builders.MapBuilder$EntriesItr:548` |

##### `<init>()` (`java.util.AbstractMap`)

|  Change | Delta |             % | Samples | Location                   |
| ------: | ----: | ------------: | ------: | -------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.AbstractMap:77` |

##### `hasNext()` (`java.util.ArrayList$Itr`)

|  Change | Delta |             % | Samples | Location                       |
| ------: | ----: | ------------: | ------: | ------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.ArrayList$Itr:1044` |

##### `<init>(AtomicReferenceFieldUpdater$AtomicReferenceFieldUpdaterImpl, Class, String)` (`java.util.concurrent.atomic.AtomicReferenceFieldUpdater$AtomicReferenceFieldUpdaterImpl$1`)

|  Change | Delta |             % | Samples | Location                                                                                        |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.atomic.AtomicReferenceFieldUpdater$AtomicReferenceFieldUpdaterImpl$1:333` |

##### `invokeOnCompletion$default(Job, boolean, boolean, Function1, int, Object)` (`kotlinx.coroutines.Job$DefaultImpls`)

|  Change | Delta |             % | Samples | Location                                  |
| ------: | ----: | ------------: | ------: | ----------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `kotlinx.coroutines.Job$DefaultImpls:353` |

##### `toList(Iterable)` (`kotlin.collections.CollectionsKt___CollectionsKt`)

|  Change | Delta |             % | Samples | Location                                                |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `kotlin.collections.CollectionsKt___CollectionsKt:1503` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                 |
| ------: | ----: | ------------: | ------: | ------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.HashMap:1909` |

##### `calcNext()` (`kotlin.sequences.FilteringSequence$iterator$1`)

|  Change | Delta |             % | Samples | Location                                            |
| ------: | ----: | ------------: | ------: | --------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `kotlin.sequences.FilteringSequence$iterator$1:202` |

##### `register(Object, Runnable)` (`java.lang.ref.Cleaner`)

|  Change | Delta |             % | Samples | Location                    |
| ------: | ----: | ------------: | ------: | --------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.ref.Cleaner:224` |

##### `getOrImplicitDefaultNullable(Map, Object)` (`kotlin.collections.MapsKt__MapWithDefaultKt`)

|  Change | Delta |             % | Samples | Location                                         |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `kotlin.collections.MapsKt__MapWithDefaultKt:21` |

##### `<init>()` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.ArrayList:169` |

##### `tabAt(ConcurrentHashMap$Node[], int)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change | Delta |             % | Samples | Location                                     |
| ------: | ----: | ------------: | ------: | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.ConcurrentHashMap:760` |

##### `visitLocation(ImageLocation, ImageReader$SharedImageReader$LocationVisitor)` (`jdk.internal.jimage.ImageReader$SharedImageReader`)

|  Change | Delta |             % | Samples | Location                                                |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `jdk.internal.jimage.ImageReader$SharedImageReader:360` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                               | Location       |
| ------: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| +500.0% |   +10 | 100.0% |  2 → 12 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `_platform_memmove` (`libsystem_platform.dylib`)

|  Change | Delta |            % | Samples | Caller                                                                                                                                                                                                                                                   | Location        |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
|     new |    +3 | 0.0% → 25.0% |   0 → 3 | `Java_java_lang_ClassLoader_defineClass1`                                                                                                                                                                                                                | `libjava.dylib` |
|     new |    +2 | 0.0% → 16.7% |   0 → 2 | `Node_Array::grow`                                                                                                                                                                                                                                       | `libjvm.dylib`  |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::internal_insert_get<SymbolTableLookup, bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::insert<SymbolTableLookup>(Thread*, SymbolTableLookup&, Symbol const&, bool*, bool*)::NOP>` | `libjvm.dylib`  |
|     new |    +1 |  0.0% → 8.3% |   0 → 1 | `nmethod::new_nmethod`                                                                                                                                                                                                                                   | `libjvm.dylib`  |
|     new |    +1 |  0.0% → 8.3% |   0 → 1 | `Node::out_grow`                                                                                                                                                                                                                                         | `libjvm.dylib`  |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                             | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------ | -------------- |
| removed |    -3 |  33.3% → 0.0% |   3 → 0 | `PhaseIFG::re_insert`                                              | `libjvm.dylib` |
| +300.0% |    +3 | 11.1% → 22.2% |   1 → 4 | `PhaseIFG::effective_degree`                                       | `libjvm.dylib` |
|     new |    +2 |  0.0% → 11.1% |   0 → 2 | `PhaseChaitin::Select`                                             | `libjvm.dylib` |
|     new |    +2 |  0.0% → 11.1% |   0 → 2 | `PhaseChaitin::build_ifg_physical`                                 | `libjvm.dylib` |
|     new |    +2 |  0.0% → 11.1% |   0 → 2 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` | `libjvm.dylib` |

##### `SymbolTable::lookup_only` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                                         | Location       |
| ------: | ----: | -----: | ------: | ---------------------------------------------- | -------------- |
| +350.0% |    +7 | 100.0% |   2 → 9 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |

##### `LinearScan::build_intervals` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                       | Location       |
| ------: | ----: | -----: | ------: | ---------------------------- | -------------- |
| +200.0% |    +6 | 100.0% |   3 → 9 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `Node::Node` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                           | Location       |
| ------: | ----: | -----------: | ------: | -------------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `GraphKit::basic_plus_adr`       | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `GraphKit::new_array`            | `libjvm.dylib` |
|     new |    +1 | 0.0% → 14.3% |   0 → 1 | `Parse::array_addressing`        | `libjvm.dylib` |
|     new |    +1 | 0.0% → 14.3% |   0 → 1 | `PhaseIterGVN::transform_old`    | `libjvm.dylib` |
|     new |    +1 | 0.0% → 14.3% |   0 → 1 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                         | Location       |
| -----: | ----: | -----: | ------: | ---------------------------------------------- | -------------- |
| +83.3% |    +5 | 100.0% |  6 → 11 | `void G1CMTask::process_grey_task_entry<true>` | `libjvm.dylib` |

##### `PhiNode::Ideal` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                        | Location       |
| ------: | ----: | -------------: | ------: | ----------------------------- | -------------- |
| +100.0% |    +3 | 100.0% → 75.0% |   3 → 6 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 12.5% |   0 → 1 | `Parse::do_exits`             | `libjvm.dylib` |
|     new |    +1 |   0.0% → 12.5% |   0 → 1 | `GraphKit::gen_checkcast`     | `libjvm.dylib` |

##### `Node::dominates` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                           | Location       |
| ------: | ----: | -----: | ------: | -------------------------------- | -------------- |
| +125.0% |    +5 | 100.0% |   4 → 9 | `MemNode::all_controls_dominate` | `libjvm.dylib` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                       | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | -------------- |
|     new |    +4 |  0.0% → 80.0% |   0 → 4 | `G1ParScanThreadState::steal_and_trim_queue` | `libjvm.dylib` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `G1ScanHRForRegionClosure::scan_memregion`   | `libjvm.dylib` |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `G1ParEvacuateFollowersClosure::do_void`     | `libjvm.dylib` |

##### `GlobalValueNumbering::GlobalValueNumbering` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                   | Location       |
| -----: | ----: | ------------: | ------: | ------------------------ | -------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `Compilation::build_hir` | `libjvm.dylib` |

##### `SymbolTable::do_lookup` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                         | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- | -------------- |
| +133.3% |    +4 | 12.5% → 25.0% |   3 → 7 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |
| +100.0% |    +3 | 12.5% → 21.4% |   3 → 6 | `SymbolTable::new_symbol`                      | `libjvm.dylib` |
|  -11.8% |    -2 | 70.8% → 53.6% | 17 → 15 | `SymbolTable::lookup_only`                     | `libjvm.dylib` |
| removed |    -1 |   4.2% → 0.0% |   1 → 0 | `SignatureStream::find_symbol`                 | `libjvm.dylib` |

##### `CompiledMethod::cleanup_inline_caches_impl` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                  | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `CompiledMethod::unload_nmethod_caches` | `libjvm.dylib` |

##### `Interval::add_use_pos` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                        | Location       |
| -----: | ----: | -----------: | ------: | ----------------------------- | -------------- |
|    new |    +3 | 0.0% → 75.0% |   0 → 3 | `LinearScan::build_intervals` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `LinearScan::add_def`         | `libjvm.dylib` |

##### `G1CardSet::add_to_howl` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                | Location       |
| -----: | ----: | ------------: | ------: | --------------------- | -------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `G1CardSet::add_card` | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller           | Location       |
| -----: | ----: | -----: | ------: | ---------------- | -------------- |
| +75.0% |    +3 | 100.0% |   4 → 7 | `Matcher::match` | `libjvm.dylib` |

##### `Node_Backward_Iterator::next` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| +200.0% |    +2 | 20.0% → 37.5% |   1 → 3 | `PhaseCFG::schedule_late`         | `libjvm.dylib` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |

##### `LIRGenerator::state_for` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                    | Location       |
| -----: | ----: | -----------: | ------: | ------------------------- | -------------- |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `LIRGenerator::do_Invoke` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `LIRGenerator::do_Goto`   | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `LIRGenerator::do_Throw`  | `libjvm.dylib` |

##### `G1CardSet::add_card` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                                                                                 | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------ | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib` |

##### `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                             | Location       |
| ------: | ----: | -----: | ------: | ---------------------------------- | -------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |

##### `IfFalseNode::Opcode` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                               | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Compile::Optimize`                  | `libjvm.dylib` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `PhaseIdealLoop::build_loop_tree`    | `libjvm.dylib` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `PhaseIterGVN::transform_old`        | `libjvm.dylib` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `PhaseIterGVN::subsume_node`         | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                               | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| +33.3% |    +2 | 100.0% |   6 → 8 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseCFG::partial_latency_of_defs` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                         | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------ | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `MethodLiveness::BasicBlock::get_liveness_at` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                            | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `MethodLiveness::get_liveness_at` | `libjvm.dylib` |

##### `GraphBuilder::invoke` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                      | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |

##### `GraphBuilder::append_with_bci` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                                      | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `GraphBuilder::invoke`                      | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |

##### `BoolNode::Opcode` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                 | Location       |
| ------: | ----: | -----------: | ------: | -------------------------------------- | -------------- |
|     new |    +2 | 0.0% → 50.0% |   0 → 2 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `Compile::disconnect_useless_nodes`    | `libjvm.dylib` |
|     new |    +1 | 0.0% → 25.0% |   0 → 1 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |

##### `Matcher::specialize_generic_vector_operands` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller           | Location       |
| ------: | ----: | -----: | ------: | ---------------- | -------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `Matcher::match` | `libjvm.dylib` |

##### `Node::replace_edge` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                    | Location       |
| ------: | ----: | -------------: | ------: | ----------------------------------------- | -------------- |
| +100.0% |    +1 | 100.0% → 66.7% |   1 → 2 | `PhaseIterGVN::remove_globally_dead_node` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 33.3% |   0 → 1 | `PhaseIdealLoop::do_split_if`             | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_tree` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                               | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| +66.7% |    +2 | 100.0% |   3 → 5 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `inflate_table` (`libzip.dylib`)

| Change | Delta |      % | Samples | Caller    | Location       |
| -----: | ----: | -----: | ------: | --------- | -------------- |
| +33.3% |    +3 | 100.0% |  9 → 12 | `inflate` | `libzip.dylib` |

##### `ClassFileParser::parse_constant_pool_entries` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                 | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `ClassFileParser::parse_constant_pool` | `libjvm.dylib` |

##### `SymbolTable::lookup_shared` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                     | Location       |
| ------: | ----: | -------------: | ------: | -------------------------- | -------------- |
|     new |    +2 |   0.0% → 50.0% |   0 → 2 | `SymbolTable::lookup_only` | `libjvm.dylib` |
| +100.0% |    +1 | 100.0% → 50.0% |   1 → 2 | `SymbolTable::new_symbol`  | `libjvm.dylib` |

##### `GenericTaskQueueSet<OverflowTaskQueue<ScannerTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>::steal_best_of_2` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                       | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `G1ParScanThreadState::steal_and_trim_queue` | `libjvm.dylib` |

##### `fwd_copy_again` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Caller                                          | Location       |
| -----: | ----: | -------------: | ------: | ----------------------------------------------- | -------------- |
| +33.3% |    +1 | 100.0% → 80.0% |   3 → 4 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |
|    new |    +1 |   0.0% → 20.0% |   0 → 1 | `CodeBuffer::copy_code_to`                      | `libjvm.dylib` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                             | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | -------------- |
|  +11.1% |    +1 | 81.8% → 76.9% |  9 → 10 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
| removed |    -1 |   9.1% → 0.0% |   1 → 0 | `IRScopeDebugInfo::record_debug_info`              | `libjvm.dylib` |
| +100.0% |    +1 |  9.1% → 15.4% |   1 → 2 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 7.7% |   0 → 1 | `LIR_Assembler::record_non_safepoint_debug_info`   | `libjvm.dylib` |

##### `SymbolTable::new_symbol` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                         | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------ | -------------- |
| +100.0% |    +1 | 100.0% → 66.7% |   1 → 2 | `SignatureStream::find_symbol` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 33.3% |   0 → 1 | `jvm_define_class_common`      | `libjvm.dylib` |

##### `OopRecorder::find_index` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                                     | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------------------ | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `DebugInformationRecorder::describe_scope` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `loadConNKlassNode::emit`                  | `libjvm.dylib` |

##### `trampoline_stub_Relocation::get_trampoline_for` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                                | Location       |
| ------: | ----: | -----: | ------: | ------------------------------------- | -------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `NativeCall::set_destination_mt_safe` | `libjvm.dylib` |

##### `Reflection::verify_class_access` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                    | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `LinkResolver::check_klass_accessibility` | `libjvm.dylib` |

##### `transformInPlace(List, IrTransformer, Object)` (`org.jetbrains.kotlin.ir.util.TransformKt`)

| Change | Delta |            % | Samples | Caller                                     | Location                                          |
| -----: | ----: | -----------: | ------: | ------------------------------------------ | ------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `transformChildren(IrTransformer, Object)` | `org.jetbrains.kotlin.ir.expressions.IrBlockBody` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `transformChildren(IrTransformer, Object)` | `org.jetbrains.kotlin.ir.declarations.IrClass`    |

##### `extractValue(AbstractArrayMapOwner)` (`org.jetbrains.kotlin.util.AbstractArrayMapOwner$AbstractArrayMapAccessor`)

| Change | Delta |             % | Samples | Caller                                       | Location                                             |
| -----: | ----: | ------------: | ------: | -------------------------------------------- | ---------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `getValue(AbstractArrayMapOwner, KProperty)` | `org.jetbrains.kotlin.util.NullableArrayMapAccessor` |

##### `extractUpperTypesToCheckIntersectionEmptiness(List)` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintSystemCompletionContext`)

| Change | Delta |             % | Samples | Caller                                                           | Location                                                                                 |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `check(CheckerSink, ResolutionContext, Candidate, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckIncompatibleTypeVariableUpperBounds` |

##### `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Class`)

| Change | Delta |             % | Samples | Caller                                                        | Location                                       |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------- | ---------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Class` |

##### `convertWhenExpression(LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`)

| Change | Delta |             % | Samples | Caller                                      | Location                                                                        |
| -----: | ----: | ------------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getAsFirStatement(LighterASTNode, String)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder` |

##### `advance()` (`org.jetbrains.kotlin.lexer._JetLexer`)

| Change | Delta |             % | Samples | Caller          | Location                         |
| -----: | ----: | ------------: | ------: | --------------- | -------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `locateToken()` | `com.intellij.lexer.FlexAdapter` |

##### `invoke(Object, Object, Object)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1`)

| Change | Delta |             % | Samples | Caller                                             | Location                                                            |
| -----: | ----: | ------------: | ------: | -------------------------------------------------- | ------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `processSymbolsByName(Name, Function3, Function1)` | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter$1`)

| Change | Delta |             % | Samples | Caller                                                      | Location                                                  |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------- | --------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter$1` |

##### `transformExpressionUsingSmartcastInfo(BodyResolveComponents, FirExpression)` (`org.jetbrains.kotlin.fir.resolve.ResolveUtilsKt`)

| Change | Delta |             % | Samples | Caller                                                 | Location                                                                                      |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `transformExpressionUsingSmartcastInfo(FirExpression)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |

##### `transformChildren(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`)

| Change | Delta |             % | Samples | Caller                                      | Location                                                 |
| -----: | ----: | ------------: | ------: | ------------------------------------------- | -------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `transformChildren(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl` |

##### `getUseSiteMemberScope(FirClass, FirSession, ScopeSession, FirResolvePhase)` (`org.jetbrains.kotlin.fir.scopes.FirKotlinScopeProvider`)

| Change | Delta |             % | Samples | Caller                                                                             | Location                                                   |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `unsubstitutedScope(FirClass, FirSession, ScopeSession, boolean, FirResolvePhase)` | `org.jetbrains.kotlin.fir.scopes.FirKotlinScopeProviderKt` |

##### `consumeCallableCandidate(FirCallableSymbol, CallInfo, TowerLevelProcessor)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`)

| Change | Delta |             % | Samples | Caller                                                                                                                                               | Location                                                            |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `processFunctionsByName$lambda$0(FirLookupTrackerComponent, CallInfo, Ref$BooleanRef, ScopeBasedTowerLevel, TowerLevelProcessor, FirCallableSymbol)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel` |

##### `processLevel(TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`)

| Change | Delta |             % | Samples | Caller                                                                                                               | Location                                                               |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `access$processLevel(FirBaseTowerResolveTask, TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask` |

##### `completeCall(FirExpression, ResolutionMode, boolean)` (`org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`)

| Change | Delta |             % | Samples | Caller                                                                                                                                             | Location                                                                                      |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `transformFunctionCallInternal$org_jetbrains_kotlin_resolve(FirFunctionCall, ResolutionMode, FirExpressionsResolveTransformer$CallResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |

##### `resolveVariableAccessAndSelectCandidateImpl$lambda$0(FirCallResolver, FirQualifiedAccessExpression, FirSimpleNamedReference, boolean, FirElement, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

| Change | Delta |             % | Samples | Caller     | Location                                                                            |
| -----: | ----: | ------------: | ------: | ---------- | ----------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver$$Lambda.0x0000008001686d48` |

##### `transformElement(FirElement, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirPartialBodyResolveTransformer`)

| Change | Delta |             % | Samples | Caller                                 | Location                                                                                      |
| -----: | ----: | ------------: | ------: | -------------------------------------- | --------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `transformElement(FirElement, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirPartialBodyResolveTransformer` |

##### `getSource()` (`org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl`)

| Change | Delta |             % | Samples | Caller                                                        | Location                                                             |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------- | -------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `checkSyntax(CheckerContext, DiagnosticReporter, FirElement)` | `org.jetbrains.kotlin.fir.analysis.checkers.syntax.FirSyntaxChecker` |

##### `substitutionSupertypePolicy(RigidTypeMarker)` (`org.jetbrains.kotlin.fir.types.ConeTypeContext`)

| Change | Delta |             % | Samples | Caller                                                              | Location                                                         |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------- | ---------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getCorrespondingSupertypes(ConeKotlinType, TypeConstructorMarker)` | `org.jetbrains.kotlin.fir.types.FirCorrespondingSupertypesCache` |

##### `fastCorrespondingSupertypes(TypeSystemContext, RigidTypeMarker, TypeConstructorMarker)` (`org.jetbrains.kotlin.types.model.TypeSystemContextContextualKt`)

| Change | Delta |             % | Samples | Caller                                                                                                                      | Location                                         |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `collectAllSupertypesWithGivenTypeConstructor(TypeCheckerState, TypeSystemContext, RigidTypeMarker, TypeConstructorMarker)` | `org.jetbrains.kotlin.types.AbstractTypeChecker` |

##### `tryToSetSourceForImplicitReceiver$tryToSetSourceForImplicitReceiver(FirExpression, Candidate)` (`org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate`)

| Change | Delta |             % | Samples | Caller                                                  | Location                                                     |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------- | ------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `tryToSetSourceForImplicitReceiver(ConeResolutionAtom)` | `org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate` |

##### `sanitizeStackTrace(Throwable)` (`kotlin.jvm.internal.Intrinsics`)

|  Change | Delta |      % | Samples | Caller                            | Location                         |
| ------: | ----: | -----: | ------: | --------------------------------- | -------------------------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `throwParameterIsNullNPE(String)` | `kotlin.jvm.internal.Intrinsics` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

| Change | Delta |             % | Samples | Caller    | Location    |
| -----: | ----: | ------------: | ------: | --------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `unknown` | `<unknown>` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change | Delta |             % | Samples | Caller                        | Location                          |
| -----: | ----: | ------------: | ------: | ----------------------------- | --------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

| Change | Delta |             % | Samples | Caller                                  | Location                |
| -----: | ----: | ------------: | ------: | --------------------------------------- | ----------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `defineClass(String, byte[], int, int)` | `java.lang.ClassLoader` |

##### `initClassName()` (`java.lang.Class`)

| Change | Delta |             % | Samples | Caller      | Location          |
| -----: | ----: | ------------: | ------: | ----------- | ----------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getName()` | `java.lang.Class` |

##### `getName()` (`java.lang.Class`)

| Change | Delta |             % | Samples | Caller               | Location          |
| -----: | ----: | ------------: | ------: | -------------------- | ----------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `descriptorString()` | `java.lang.Class` |

##### `<init>(FilteringSequence)` (`kotlin.sequences.FilteringSequence$iterator$1`)

| Change | Delta |             % | Samples | Caller       | Location                             |
| -----: | ----: | ------------: | ------: | ------------ | ------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `iterator()` | `kotlin.sequences.FilteringSequence` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

| Change | Delta |             % | Samples | Caller                             | Location                                     |
| -----: | ----: | ------------: | ------: | ---------------------------------- | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `newInvokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `throwParameterIsNullNPE(String)` (`kotlin.jvm.internal.Intrinsics`)

| Change | Delta |             % | Samples | Caller                                  | Location                         |
| -----: | ----: | ------------: | ------: | --------------------------------------- | -------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `checkNotNullParameter(Object, String)` | `kotlin.jvm.internal.Intrinsics` |

##### `<init>()` (`java.util.IdentityHashMap`)

| Change | Delta |             % | Samples | Caller               | Location                                        |
| -----: | ----: | ------------: | ------: | -------------------- | ----------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `convertToHashMap()` | `org.jetbrains.kotlin.utils.SmartIdentityTable` |

##### `countPositives(byte[], int, int)` (`java.lang.StringCoding`)

| Change | Delta |             % | Samples | Caller                                           | Location           |
| -----: | ----: | ------------: | ------: | ------------------------------------------------ | ------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `newStringUTF8NoRepl(byte[], int, int, boolean)` | `java.lang.String` |

##### `checkFromIndexSize(int, int, int, BiFunction)` (`jdk.internal.util.Preconditions`)

| Change | Delta |             % | Samples | Caller                       | Location                 |
| -----: | ----: | ------------: | ------: | ---------------------------- | ------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `setInput(byte[], int, int)` | `java.util.zip.Inflater` |

##### `nextEntryPos(int, int, int)` (`java.util.zip.ZipFile$Source`)

| Change | Delta |             % | Samples | Caller                   | Location                       |
| -----: | ----: | ------------: | ------: | ------------------------ | ------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `initCEN(int, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `push(SymbolTable, String)` (`jdk.internal.org.objectweb.asm.Frame`)

| Change | Delta |             % | Samples | Caller                                   | Location                               |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | -------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `execute(int, int, Symbol, SymbolTable)` | `jdk.internal.org.objectweb.asm.Frame` |

##### `config()` (`jdk.internal.reflect.ReflectionFactory`)

| Change | Delta |             % | Samples | Caller                      | Location                                 |
| -----: | ----: | ------------: | ------: | --------------------------- | ---------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `useMethodHandleAccessor()` | `jdk.internal.reflect.ReflectionFactory` |

##### `<init>(Name)` (`kotlin.reflect.jvm.internal.impl.types.error.ErrorClassDescriptor`)

| Change | Delta |             % | Samples | Caller       | Location                                                  |
| -----: | ----: | ------------: | ------: | ------------ | --------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<clinit>()` | `kotlin.reflect.jvm.internal.impl.types.error.ErrorUtils` |

##### `access$100(FieldSet, MessageLite, CodedInputStream, CodedOutputStream, ExtensionRegistryLite, int)` (`kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite`)

| Change | Delta |             % | Samples | Caller                                                                               | Location                                                                           |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `parseUnknownField(CodedInputStream, CodedOutputStream, ExtensionRegistryLite, int)` | `kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite$ExtendableMessage` |

##### `allFlagsSet(int)` (`java.lang.invoke.MemberName`)

| Change | Delta |             % | Samples | Caller        | Location                      |
| -----: | ----: | ------------: | ------: | ------------- | ----------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `isVarargs()` | `java.lang.invoke.MemberName` |

##### `classFilePrologue()` (`java.lang.invoke.InvokerBytecodeGenerator`)

| Change | Delta |             % | Samples | Caller                          | Location                                    |
| -----: | ----: | ------------: | ------: | ------------------------------- | ------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `generateCustomizedCodeBytes()` | `java.lang.invoke.InvokerBytecodeGenerator` |

##### `isNamed()` (`java.lang.Module`)

| Change | Delta |             % | Samples | Caller            | Location           |
| -----: | ----: | ------------: | ------: | ----------------- | ------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `canRead(Module)` | `java.lang.Module` |

##### `itable stub` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                             | Location                                                                       |
| ------: | ----: | -----------: | ------: | ---------------------------------- | ------------------------------------------------------------------------------ |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `forElement(FirElement)`           | `org.jetbrains.kotlin.fir.analysis.checkers.SourceNavigator$Companion`         |
|     new |    +1 | 0.0% → 33.3% |   0 → 1 | `addAll(Collection)`               | `java.util.AbstractCollection`                                                 |
|     new |    +1 | 0.0% → 33.3% |   0 → 1 | `create(Map, FirSession, boolean)` | `org.jetbrains.kotlin.fir.resolve.substitution.ConeSubstitutorByMap$Companion` |

##### `zero_blocks` (`<unknown>`)

| Change | Delta |             % | Samples | Caller        | Location                        |
| -----: | ----: | ------------: | ------: | ------------- | ------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>(int)` | `java.io.ByteArrayOutputStream` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

| Change | Delta |      % |  Samples | Caller                              | Location                  |
| -----: | ----: | -----: | -------: | ----------------------------------- | ------------------------- |
| -85.5% |  -106 | 100.0% | 124 → 18 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

| Change | Delta |      % |  Samples | Caller                  | Location       |
| -----: | ----: | -----: | -------: | ----------------------- | -------------- |
| -75.5% |   -77 | 100.0% | 102 → 25 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                               | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| -56.3% |    -9 | 100.0% |  16 → 7 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -35.3% |    -6 | 100.0% | 17 → 11 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                     | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------------ | -------------- |
| -60.0% |    -6 | 100.0% |  10 → 4 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|  Change | Delta |           % | Samples | Caller                                                                                 | Location                                                             |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| removed |    -1 | 9.1% → 0.0% |   1 → 0 | `returnType(ProtoBuf$Property, TypeTable)`                                             | `org.jetbrains.kotlin.metadata.deserialization.ProtoTypeTableUtilKt` |
| removed |    -1 | 9.1% → 0.0% |   1 → 0 | `fakeElement(KtSourceElement, KtFakeSourceElementKind, KtSourceElementOffsetStrategy)` | `org.jetbrains.kotlin.KtSourceElementKt`                             |
| removed |    -1 | 9.1% → 0.0% |   1 → 0 | `transform(FirTransformer, Object)`                                                    | `org.jetbrains.kotlin.fir.types.FirImplicitTypeRef`                  |
| removed |    -1 | 9.1% → 0.0% |   1 → 0 | `getDeprecationForCallSite(FirBasedSymbol, FirSession, AnnotationUseSiteTarget[])`     | `org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt`           |
| removed |    -1 | 9.1% → 0.0% |   1 → 0 | `containingClassLookupTag(FirCallableDeclaration)`                                     | `org.jetbrains.kotlin.fir.ClassMembersKt`                            |

##### `PhaseLive::compute` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                            | Location       |
| ------: | ----: | -------------: | ------: | --------------------------------- | -------------- |
|  -26.7% |    -4 | 93.8% → 100.0% | 15 → 11 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| removed |    -1 |    6.3% → 0.0% |   1 → 0 | `Compile::Code_Gen`               | `libjvm.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -41.7% |    -5 | 100.0% |  12 → 7 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                   | Location       |
| -----: | ----: | -----: | ------: | ------------------------ | -------------- |
| -83.3% |    -5 | 100.0% |   6 → 1 | `PhaseIterGVN::optimize` | `libjvm.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|  Change | Delta |           % | Samples | Caller                              | Location       |
| ------: | ----: | ----------: | ------: | ----------------------------------- | -------------- |
| removed |    -1 | 4.5% → 0.0% |   1 → 0 | `Parse::return_current`             | `libjvm.dylib` |
| removed |    -1 | 4.5% → 0.0% |   1 → 0 | `LinearScan::create_interval`       | `libjvm.dylib` |
| removed |    -1 | 4.5% → 0.0% |   1 → 0 | `BlockListBuilder::make_block_at`   | `libjvm.dylib` |
| removed |    -1 | 4.5% → 0.0% |   1 → 0 | `DataLayout::data_in`               | `libjvm.dylib` |
| removed |    -1 | 4.5% → 0.0% |   1 → 0 | `LinkResolver::resolve_static_call` | `libjvm.dylib` |

##### `ValueStack::values_do` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|  -75.0% |    -3 | 57.1% → 50.0% |   4 → 1 | `SubstitutionResolver::block_do` | `libjvm.dylib` |
| removed |    -2 |  28.6% → 0.0% |   2 → 0 | `UseCountComputer::block_do`     | `libjvm.dylib` |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `Instruction::state_values_do`   | `libjvm.dylib` |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `BlockBegin::state_values_do`    | `libjvm.dylib` |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                  | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
|  -41.7% |    -5 | 85.7% → 77.8% |  12 → 7 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |
| removed |    -1 |   7.1% → 0.0% |   1 → 0 | `InstanceKlass::find_local_method`      | `libjvm.dylib` |
| +100.0% |    +1 |  7.1% → 22.2% |   1 → 2 | `InstanceKlass::find_method`            | `libjvm.dylib` |

##### `Scheduling::anti_do_def` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                        | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------------------- | -------------- |
| removed |    -3 | 60.0% → 0.0% |   3 → 0 | `Scheduling::ComputeRegisterAntidependencies` | `libjvm.dylib` |
| removed |    -2 | 40.0% → 0.0% |   2 → 0 | `Scheduling::DoScheduling`                    | `libjvm.dylib` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                          | Location       |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | -------------- |
| -66.7% |    -4 | 100.0% |   6 → 2 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |

##### `Node::is_CFG` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                     | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
| removed |    -3 |  42.9% → 0.0% |   3 → 0 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib` |
|  -33.3% |    -1 | 42.9% → 66.7% |   3 → 2 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_loop_late`          | `libjvm.dylib` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `PhaseIdealLoop::split_if_with_blocks_pre` | `libjvm.dylib` |

##### `ciMethodBlocks::do_analysis` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `ciMethodBlocks::ciMethodBlocks` | `libjvm.dylib` |

##### `mach_absolute_time` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller                | Location       |
| -----: | ----: | -----: | ------: | --------------------- | -------------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `os::elapsed_counter` | `libjvm.dylib` |

##### `LinearScan::resolve_data_flow` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                       | Location       |
| -----: | ----: | -----: | ------: | ---------------------------- | -------------- |
| -66.7% |    -4 | 100.0% |   6 → 2 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `G1CodeRootSet::add` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller             | Location       |
| ------: | ----: | ------------: | ------: | ------------------ | -------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `nmethod::oops_do` | `libjvm.dylib` |

##### `Dictionary::find` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                                       | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------------ | -------------- |
| removed |    -3 |   50.0% → 0.0% |   3 → 0 | `SystemDictionary::resolve_instance_class_or_null`           | `libjvm.dylib` |
|  -33.3% |    -1 | 50.0% → 100.0% |   3 → 2 | `SystemDictionary::find_constrained_instance_or_array_klass` | `libjvm.dylib` |

##### `PhaseCFG::build_cfg` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller               | Location       |
| ------: | ----: | ------------: | ------: | -------------------- | -------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `PhaseCFG::PhaseCFG` | `libjvm.dylib` |

##### `PhaseCFG::schedule_pinned_nodes` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                         | Location       |
| -----: | ----: | -----: | ------: | ------------------------------ | -------------- |
| -60.0% |    -3 | 100.0% |   5 → 2 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                 | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------- | -------------- |
| removed |    -3 |  21.4% → 0.0% |   3 → 0 | `ciEnv::get_klass_by_index_impl`       | `libjvm.dylib` |
|  -50.0% |    -2 | 28.6% → 18.2% |   4 → 2 | `ciBytecodeStream::get_method`         | `libjvm.dylib` |
| +200.0% |    +2 |  7.1% → 27.3% |   1 → 3 | `ciObjectFactory::get`                 | `libjvm.dylib` |
| removed |    -1 |   7.1% → 0.0% |   1 → 0 | `ciObjectFactory::create_new_metadata` | `libjvm.dylib` |
| removed |    -1 |   7.1% → 0.0% |   1 → 0 | `ciInstanceKlass::super`               | `libjvm.dylib` |

##### `Matcher::Label_Root` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                | Location       |
| ------: | ----: | -------------: | ------: | --------------------- | -------------- |
|  -66.7% |    -2 | 75.0% → 100.0% |   3 → 1 | `Matcher::Label_Root` | `libjvm.dylib` |
| removed |    -1 |   25.0% → 0.0% |   1 → 0 | `Matcher::match_tree` | `libjvm.dylib` |

##### `RegMask::is_bound` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `PhaseChaitin::gather_lrg_masks` | `libjvm.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -33.3% |    -3 | 100.0% |   9 → 6 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `ciEnv::get_method_by_index_impl` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                         | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------ | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `ciBytecodeStream::get_method` | `libjvm.dylib` |

##### `LinearScanWalker::free_collect_inactive_fixed` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                             | Location       |
| -----: | ----: | -----: | ------: | ---------------------------------- | -------------- |
| -50.0% |    -3 | 100.0% |   6 → 3 | `LinearScanWalker::alloc_free_reg` | `libjvm.dylib` |

##### `LinearScanWalker::free_collect_inactive_any` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `LinearScanWalker::alloc_free_reg` | `libjvm.dylib` |

##### `ObjArrayAllocator::initialize` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                            | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------- | -------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `CollectedHeap::fill_with_object` | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `CollectedHeap::array_allocate`   | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `MemAllocator::allocate`          | `libjvm.dylib` |

##### `resource_allocate_bytes` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                     | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------ | -------------- |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `ResourceBitMap::ResourceBitMap`           | `libjvm.dylib` |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `BlockListBuilder::BlockListBuilder`       | `libjvm.dylib` |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `MethodLiveness::init_basic_blocks`        | `libjvm.dylib` |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `LinearScan::compute_debug_info_for_scope` | `libjvm.dylib` |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `LinearScanWalker::LinearScanWalker`       | `libjvm.dylib` |

##### `Metadata::is_method` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                          | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------- | -------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `ciObjectFactory::get_metadata` | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `nmethod::new_nmethod`          | `libjvm.dylib` |

##### `LinkResolver::resolve_static_call` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                      | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------- | -------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `LinkResolver::resolve_static_call_or_null` | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `LinkResolver::resolve_invoke`              | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `JavaCalls::call_static`                    | `libjvm.dylib` |

##### `_platform_memcmp` (`libsystem_platform.dylib`)

|  Change | Delta |              % | Samples | Caller                                     | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------------------ | -------------- |
| removed |    -2 |   50.0% → 0.0% |   2 → 0 | `DebugInformationRecorder::describe_scope` | `libjvm.dylib` |
|  -50.0% |    -1 | 50.0% → 100.0% |   2 → 1 | `SymbolTable::lookup_only`                 | `libjvm.dylib` |

##### `_platform_memchr` (`libsystem_platform.dylib`)

|  Change | Delta |              % | Samples | Caller                                                           | Location       |
| ------: | ----: | -------------: | ------: | ---------------------------------------------------------------- | -------------- |
| removed |    -1 |   25.0% → 0.0% |   1 → 0 | `ciSignature::ciSignature`                                       | `libjvm.dylib` |
|  -50.0% |    -1 | 50.0% → 100.0% |   2 → 1 | `SignatureStream::SignatureStream`                               | `libjvm.dylib` |
| removed |    -1 |   25.0% → 0.0% |   1 → 0 | `void SignatureIterator::do_parameters_on<ArgumentSizeComputer>` | `libjvm.dylib` |

##### `UTF8::is_legal_utf8` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                         | Location       |
| -----: | ----: | -----: | ------: | ---------------------------------------------- | -------------- |
| -60.0% |    -3 | 100.0% |   5 → 2 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |

##### `Dict::doubhash` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller         | Location       |
| ------: | ----: | ------------: | ------: | -------------- | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `Dict::Insert` | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1ScanCardClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                                          | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `HeapWordImpl** HeapRegion::oops_on_memregion_iterate<G1ScanCardClosure, true>` | `libjvm.dylib` |

##### `HeapWordImpl** HeapRegion::oops_on_memregion_iterate<G1ScanCardClosure, true>` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                     | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------------ | -------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `G1ScanHRForRegionClosure::scan_memregion` | `libjvm.dylib` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|  Change | Delta |            % | Samples | Caller                           | Location       |
| ------: | ----: | -----------: | ------: | -------------------------------- | -------------- |
| removed |   -11 | 91.7% → 0.0% |  11 → 0 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |
| +800.0% |    +8 | 8.3% → 90.0% |   1 → 9 | `WorkerThread::run`              | `libjvm.dylib` |
|     new |    +1 | 0.0% → 10.0% |   0 → 1 | `WorkerThreads::run_task`        | `libjvm.dylib` |

##### `LinkedConcreteMethodFinder::find_witness_anywhere` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                       | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `Dependencies::check_unique_concrete_method` | `libjvm.dylib` |

##### `readMethod(ClassVisitor, Context, int)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|  Change | Delta |             % | Samples | Caller                                   | Location                                      |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | --------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `accept(ClassVisitor, Attribute[], int)` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `constructFunctionType(FirFunction, FunctionTypeKind)` (`org.jetbrains.kotlin.fir.resolve.ResolveUtilsKt`)

|  Change | Delta |             % | Samples | Caller                                                                         | Location                                          |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------ | ------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `constructFunctionTypeRef(FirAnonymousFunction, FirSession, FunctionTypeKind)` | `org.jetbrains.kotlin.fir.resolve.ResolveUtilsKt` |

##### `toIrType(ConeKotlinType, ConversionTypeOrigin, List, boolean, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.backend.Fir2IrTypeConverter`)

|  Change | Delta |             % | Samples | Caller                                                                                                                               | Location                                               |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `toIrType$default(Fir2IrTypeConverter, ConeKotlinType, ConversionTypeOrigin, List, boolean, boolean, boolean, boolean, int, Object)` | `org.jetbrains.kotlin.fir.backend.Fir2IrTypeConverter` |

##### `runAfter(PhaseConfig, PhaserState, LoggingContext, Object, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|  Change | Delta |             % | Samples | Caller                                                     | Location                                                |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------- | ------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `execute(AbstractInsnNode, Interpreter)` (`org.jetbrains.org.objectweb.asm.tree.analysis.Frame`)

|  Change | Delta |            % | Samples | Caller                                                           | Location                                                                                          |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `analyzeInstruction(AbstractInsnNode, int, Frame, Frame, Frame)` | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`                                   |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `execute(AbstractInsnNode, Interpreter)`                         | `org.jetbrains.kotlin.codegen.coroutines.UninitializedStoresProcessor$UninitializedNewValueFrame` |

##### `rewriteLabels(LineNumberNode)` (`org.jetbrains.kotlin.codegen.optimization.LabelNormalizationMethodTransformer$TransformerForMethod`)

|  Change | Delta |             % | Samples | Caller                                  | Location                                                                                             |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `rewriteLineNumberNode(LineNumberNode)` | `org.jetbrains.kotlin.codegen.optimization.LabelNormalizationMethodTransformer$TransformerForMethod` |

##### `getOwner()` (`org.jetbrains.kotlin.ir.symbols.impl.IrSymbolBase`)

|  Change | Delta |            % | Samples | Caller                                                      | Location                                           |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------------- | -------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `isClassType(IrType, IdSignature$CommonSignature, Boolean)` | `org.jetbrains.kotlin.ir.types.IrTypePredicatesKt` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `getPrimitiveOrUnsignedType(IrType, Map, Map)`              | `org.jetbrains.kotlin.ir.types.IrTypePredicatesKt` |

##### `getStatements()` (`org.jetbrains.kotlin.ir.expressions.impl.IrBlockImpl`)

|  Change | Delta |             % | Samples | Caller                                                     | Location                                                     |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `visitStatementContainer(IrStatementContainer, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|  Change | Delta |             % | Samples | Caller                                                                       | Location                                               |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `read(VirtualFile, KotlinCliJavaFileManager, GlobalSearchScope)` (`org.jetbrains.kotlin.resolve.jvm.modules.JavaModuleInfo$Companion`)

|  Change | Delta |             % | Samples | Caller                                   | Location                                                   |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | ---------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `findSystemModule(VirtualFile, boolean)` | `org.jetbrains.kotlin.cli.jvm.modules.CliJavaModuleFinder` |

##### `<init>()` (`org.jetbrains.kotlin.protobuf.AbstractMessageLite`)

|  Change | Delta |             % | Samples | Caller     | Location                                             |
| ------: | ----: | ------------: | ------: | ---------- | ---------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>()` | `org.jetbrains.kotlin.protobuf.GeneratedMessageLite` |

##### `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`)

|  Change | Delta |             % | Samples | Caller        | Location                                   |
| ------: | ----: | ------------: | ------: | ------------- | ------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `newOutput()` | `org.jetbrains.kotlin.protobuf.ByteString` |

##### `concat(ByteString)` (`org.jetbrains.kotlin.protobuf.ByteString`)

|  Change | Delta |             % | Samples | Caller                           | Location                                                    |
| ------: | ----: | ------------: | ------: | -------------------------------- | ----------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `mergeFrom(ProtoBuf$Annotation)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Builder` |

##### `advance()` (`org.jetbrains.kotlin.parsing.AbstractKotlinParsing`)

|  Change | Delta |             % | Samples | Caller                                           | Location                                     |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `tryParseModifier(Consumer, TokenSet, TokenSet)` | `org.jetbrains.kotlin.parsing.KotlinParsing` |

##### `createTruncatedBuilder(int)` (`org.jetbrains.kotlin.parsing.AbstractKotlinParsing`)

|  Change | Delta |             % | Samples | Caller                                | Location                                     |
| ------: | ----: | ------------: | ------: | ------------------------------------- | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `parseReceiverType(String, TokenSet)` | `org.jetbrains.kotlin.parsing.KotlinParsing` |

##### `isInline()` (`org.jetbrains.kotlin.fir.declarations.impl.FirDeclarationStatusImpl`)

|  Change | Delta |             % | Samples | Caller              | Location    |
| ------: | ----: | ------------: | ------: | ------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `break_stack_range` | `<unknown>` |

##### `getLexemeIndex(boolean)` (`com.intellij.lang.impl.PsiBuilderImpl$StartMarker`)

|  Change | Delta |             % | Samples | Caller                  | Location                                  |
| ------: | ----: | ------------: | ------: | ----------------------- | ----------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getLexemeIndexAt(int)` | `com.intellij.lang.impl.MarkerProduction` |

##### `addModifier(LighterASTNode, boolean)` (`org.jetbrains.kotlin.fir.lightTree.fir.modifier.ModifierList`)

|  Change | Delta |             % | Samples | Caller                                           | Location                                                                         |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | -------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `consume(ModifierList, LighterASTNode, boolean)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder` |

##### `contains(IElementType)` (`com.intellij.psi.tree.TokenSet`)

|  Change | Delta |             % | Samples | Caller             | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------ | ---------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `_atSet(TokenSet)` | `org.jetbrains.kotlin.parsing.AbstractKotlinParsing` |

##### `<init>(FirSession, ScopeSession, FirAbstractBodyResolveTransformerDispatcher, BodyResolveContext, boolean)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformer$BodyResolveTransformerComponents`)

|  Change | Delta |             % | Samples | Caller                                                                                                          | Location                                                                                                 |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(FirSession, FirResolvePhase, boolean, ScopeSession, ReturnTypeCalculator, BodyResolveContext, boolean)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### `equals(Object)` (`java.lang.String`)

|  Change | Delta |            % | Samples | Caller                     | Location                         |
| ------: | ----: | -----------: | ------: | -------------------------- | -------------------------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `areEqual(Object, Object)` | `kotlin.jvm.internal.Intrinsics` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `equals(Object)`           | `org.jetbrains.kotlin.name.Name` |

##### `removeNode(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller           | Location            |
| ------: | ----: | ------------: | ------: | ---------------- | ------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `remove(Object)` | `java.util.HashMap` |

##### `putAll(Map, Pair[])` (`kotlin.collections.MapsKt__MapsKt`)

|  Change | Delta |             % | Samples | Caller                 | Location                            |
| ------: | ----: | ------------: | ------: | ---------------------- | ----------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `mutableMapOf(Pair[])` | `kotlin.collections.MapsKt__MapsKt` |

##### `resize()` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller                                          | Location            |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | ------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `<init>(AbstractStringBuilder, Void)` (`java.lang.String`)

|  Change | Delta |             % | Samples | Caller                  | Location           |
| ------: | ----: | ------------: | ------: | ----------------------- | ------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(StringBuilder)` | `java.lang.String` |

##### `append(String)` (`java.lang.AbstractStringBuilder`)

|  Change | Delta |             % | Samples | Caller           | Location                  |
| ------: | ----: | ------------: | ------: | ---------------- | ------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `append(String)` | `java.lang.StringBuilder` |

##### `next()` (`kotlin.collections.builders.MapBuilder$EntriesItr`)

|  Change | Delta |             % | Samples | Caller   | Location                                            |
| ------: | ----: | ------------: | ------: | -------- | --------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `next()` | `kotlin.collections.builders.MapBuilder$EntriesItr` |

##### `<init>()` (`java.util.AbstractMap`)

|  Change | Delta |             % | Samples | Caller               | Location                |
| ------: | ----: | ------------: | ------: | -------------------- | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(int, float)` | `java.util.WeakHashMap` |

##### `hasNext()` (`java.util.ArrayList$Itr`)

|  Change | Delta |             % | Samples | Caller                         | Location                                                     |
| ------: | ----: | ------------: | ------: | ------------------------------ | ------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `visitCall(IrCall, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `<init>(AtomicReferenceFieldUpdater$AtomicReferenceFieldUpdaterImpl, Class, String)` (`java.util.concurrent.atomic.AtomicReferenceFieldUpdater$AtomicReferenceFieldUpdaterImpl$1`)

|  Change | Delta |             % | Samples | Caller                                | Location                                                                                  |
| ------: | ----: | ------------: | ------: | ------------------------------------- | ----------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(Class, Class, String, Class)` | `java.util.concurrent.atomic.AtomicReferenceFieldUpdater$AtomicReferenceFieldUpdaterImpl` |

##### `invokeOnCompletion$default(Job, boolean, boolean, Function1, int, Object)` (`kotlinx.coroutines.Job$DefaultImpls`)

|  Change | Delta |             % | Samples | Caller                  | Location                        |
| ------: | ----: | ------------: | ------: | ----------------------- | ------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `attachChild(ChildJob)` | `kotlinx.coroutines.JobSupport` |

##### `toList(Iterable)` (`kotlin.collections.CollectionsKt___CollectionsKt`)

|  Change | Delta |             % | Samples | Caller                | Location                                           |
| ------: | ----: | ------------: | ------: | --------------------- | -------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getResultMappings()` | `org.jetbrains.kotlin.codegen.inline.SourceMapper` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller                                          | Location            |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | ------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `calcNext()` (`kotlin.sequences.FilteringSequence$iterator$1`)

|  Change | Delta |             % | Samples | Caller      | Location                                        |
| ------: | ----: | ------------: | ------: | ----------- | ----------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `hasNext()` | `kotlin.sequences.FilteringSequence$iterator$1` |

##### `register(Object, Runnable)` (`java.lang.ref.Cleaner`)

|  Change | Delta |             % | Samples | Caller                                                                                  | Location                                           |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------- | -------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, Inflater, int)` | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `getOrImplicitDefaultNullable(Map, Object)` (`kotlin.collections.MapsKt__MapWithDefaultKt`)

|  Change | Delta |             % | Samples | Caller                  | Location                            |
| ------: | ----: | ------------: | ------: | ----------------------- | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getValue(Map, Object)` | `kotlin.collections.MapsKt__MapsKt` |

##### `<init>()` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Caller        | Location                                          |
| ------: | ----: | ------------: | ------: | ------------- | ------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(int)` | `org.jetbrains.kotlin.protobuf.ByteString$Output` |

##### `tabAt(ConcurrentHashMap$Node[], int)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change | Delta |             % | Samples | Caller        | Location                                 |
| ------: | ----: | ------------: | ------: | ------------- | ---------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `get(Object)` | `java.util.concurrent.ConcurrentHashMap` |

##### `visitLocation(ImageLocation, ImageReader$SharedImageReader$LocationVisitor)` (`jdk.internal.jimage.ImageReader$SharedImageReader`)

|  Change | Delta |             % | Samples | Caller                                        | Location                                            |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | --------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `handleModulesSubTree(String, ImageLocation)` | `jdk.internal.jimage.ImageReader$SharedImageReader` |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                                     | Location                                                                                  |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `transform(FirTransformer, Object)`                                        | `org.jetbrains.kotlin.fir.expressions.FirAnnotationCall`                                  |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `createSubstitutionForScope(List, ConeClassLikeType, FirSession)`          | `org.jetbrains.kotlin.fir.resolve.SupertypeUtilsKt`                                       |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `check(CheckerContext, DiagnosticReporter, FirStatement)`                  | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirArrayOfNothingQualifierChecker` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `traverseToFixedPoint(ControlFlowGraph, PathAwareControlFlowGraphVisitor)` | `org.jetbrains.kotlin.fir.analysis.cfa.util.CfgTraverserKt`                               |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `<init>(boolean, boolean)`                                                 | `org.jetbrains.kotlin.fir.backend.generators.CallAndReferenceGenerator$ReceiverInfo`      |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                                                                          | Location                                                                                  |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `invoke(File)`                                                                                                  | `org.jetbrains.kotlin.cli.common.GroupedKtSourcesKt$collectSources$1`                     |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `calculateClassId(FqName, FqName)`                                                                              | `org.jetbrains.kotlin.name.CallableId$Companion`                                          |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `expectedConeType$constructLiteralType(FirSession, ClassId, boolean)`                                           | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveUtilsKt`           |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `computeTypeArguments(FirQualifiedAccessExpression, Candidate)`                                                 | `org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `coerceInlineClasses(Type, KotlinTypeMarker, Type, KotlinTypeMarker, InstructionAdapter, KotlinTypeMapperBase)` | `org.jetbrains.kotlin.codegen.StackValue`                                                 |

##### `I2C/C2I adapters` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                  | Location                                                                  |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `readMethod(ClassVisitor, Context, int)`                                                | `org.jetbrains.org.objectweb.asm.ClassReader`                             |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `multiplexWithoutUseSiteTarget(FirAnnotation, FirDeclaration, LanguageVersionSettings)` | `org.jetbrains.kotlin.fir.resolve.transformers.FirTypeResolveTransformer` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `balanceWhiteSpaces()`                                                                  | `com.intellij.lang.impl.PsiBuilderImpl`                                   |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |           % |   Samples | Function                                                                        | Location                                                 |
| ------: | ----: | ----------: | --------: | ------------------------------------------------------------------------------- | -------------------------------------------------------- |
|  +46.2% |   +24 | 2.9% → 5.4% |   52 → 76 | `WorkerThread::run`                                                             | `libjvm.dylib`                                           |
|  +31.7% |   +20 | 3.6% → 5.8% |   63 → 83 | `loadClass(String, boolean)`                                                    | `java.lang.ClassLoader`                                  |
|  +33.9% |   +19 | 3.2% → 5.3% |   56 → 75 | `Java_java_lang_ClassLoader_defineClass1`                                       | `libjava.dylib`                                          |
|  +33.3% |   +19 | 3.2% → 5.4% |   57 → 76 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                                  |
|  +32.2% |   +19 | 3.3% → 5.5% |   59 → 78 | `defineClass(String, byte[], int, int, ProtectionDomain)`                       | `java.lang.ClassLoader`                                  |
|  +32.8% |   +19 | 3.3% → 5.4% |   58 → 77 | `defineClass(String, byte[], int, int)`                                         | `java.lang.ClassLoader`                                  |
|  +29.0% |   +18 | 3.5% → 5.6% |   62 → 80 | `loadClass(String, boolean)`                                                    | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  +29.0% |   +18 | 3.5% → 5.6% |   62 → 80 | `loadClass(String)`                                                             | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  +28.3% |   +17 | 3.4% → 5.4% |   60 → 77 | `findClass(String)`                                                             | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  +29.6% |   +16 | 3.0% → 4.9% |   54 → 70 | `KlassFactory::create_from_stream`                                              | `libjvm.dylib`                                           |
|  +27.3% |   +15 | 3.1% → 4.9% |   55 → 70 | `jvm_define_class_common`                                                       | `libjvm.dylib`                                           |
|  +27.3% |   +15 | 3.1% → 4.9% |   55 → 70 | `JVM_DefineClassWithSource`                                                     | `libjvm.dylib`                                           |
|  +25.5% |   +14 | 3.1% → 4.9% |   55 → 69 | `SystemDictionary::resolve_class_from_stream`                                   | `libjvm.dylib`                                           |
| +433.3% |   +13 | 0.2% → 1.1% |    3 → 16 | `G1ParEvacuateFollowersClosure::do_void`                                        | `libjvm.dylib`                                           |
| +433.3% |   +13 | 0.2% → 1.1% |    3 → 16 | `G1EvacuateRegionsTask::evacuate_live_objects`                                  | `libjvm.dylib`                                           |
|  +34.3% |   +12 | 2.0% → 3.3% |   35 → 47 | `ClassFileParser::parse_constant_pool`                                          | `libjvm.dylib`                                           |
|  +21.6% |   +11 | 2.9% → 4.4% |   51 → 62 | `ClassFileParser::ClassFileParser`                                              | `libjvm.dylib`                                           |
|   +8.7% |   +11 | 7.2% → 9.7% | 127 → 138 | `transform(FirTransformer, Object)`                                             | `org.jetbrains.kotlin.fir.declarations.FirFile`          |
| +500.0% |   +10 | 0.1% → 0.8% |    2 → 12 | `G1ParScanThreadState::steal_and_trim_queue`                                    | `libjvm.dylib`                                           |
|  +31.3% |   +10 | 1.8% → 3.0% |   32 → 42 | `ClassFileParser::parse_constant_pool_entries`                                  | `libjvm.dylib`                                           |

##### Compiler

|  Change | Delta |           % | Samples | Function                                                           | Location       |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------ | -------------- |
| +100.0% |    +9 | 0.5% → 1.3% |  9 → 18 | `IndexSetIterator::advance_and_next`                               | `libjvm.dylib` |
|  +80.0% |    +8 | 0.6% → 1.3% | 10 → 18 | `LinearScan::build_intervals`                                      | `libjvm.dylib` |
| +600.0% |    +6 | 0.1% → 0.5% |   1 → 7 | `LIRGenerator::state_for`                                          | `libjvm.dylib` |
| +100.0% |    +6 | 0.3% → 0.8% |  6 → 12 | `PhiNode::Ideal`                                                   | `libjvm.dylib` |
| +250.0% |    +5 | 0.1% → 0.5% |   2 → 7 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` | `libjvm.dylib` |
| +125.0% |    +5 | 0.2% → 0.6% |   4 → 9 | `Node::dominates`                                                  | `libjvm.dylib` |
| +125.0% |    +5 | 0.2% → 0.6% |   4 → 9 | `MemNode::all_controls_dominate`                                   | `libjvm.dylib` |
| +166.7% |    +5 | 0.2% → 0.6% |   3 → 8 | `PhaseIFG::effective_degree`                                       | `libjvm.dylib` |
| +166.7% |    +5 | 0.2% → 0.6% |   3 → 8 | `PhaseIFG::Compute_Effective_Degree`                               | `libjvm.dylib` |
| +166.7% |    +5 | 0.2% → 0.6% |   3 → 8 | `TypePtr::xmeet`                                                   | `libjvm.dylib` |
| +250.0% |    +5 | 0.1% → 0.5% |   2 → 7 | `PhaseCoalesce::coalesce_driver`                                   | `libjvm.dylib` |
| +133.3% |    +4 | 0.2% → 0.5% |   3 → 7 | `Node::Node`                                                       | `libjvm.dylib` |
|  +80.0% |    +4 | 0.3% → 0.6% |   5 → 9 | `Node_Backward_Iterator::next`                                     | `libjvm.dylib` |
|  +11.8% |    +4 | 1.9% → 2.7% | 34 → 38 | `LIR_Assembler::emit_lir_list`                                     | `libjvm.dylib` |
|  +11.4% |    +4 | 2.0% → 2.7% | 35 → 39 | `LIR_Assembler::emit_code`                                         | `libjvm.dylib` |
|   +8.7% |    +4 | 2.6% → 3.5% | 46 → 50 | `Compilation::emit_code_body`                                      | `libjvm.dylib` |
|  +66.7% |    +4 | 0.3% → 0.7% |  6 → 10 | `GraphBuilder::access_field`                                       | `libjvm.dylib` |
|  +23.5% |    +4 | 1.0% → 1.5% | 17 → 21 | `PhaseIdealLoop::split_if_with_blocks`                             | `libjvm.dylib` |
| +133.3% |    +4 | 0.2% → 0.5% |   3 → 7 | `Matcher::specialize_generic_vector_operands`                      | `libjvm.dylib` |
| +100.0% |    +4 | 0.2% → 0.6% |   4 → 8 | `InitializeNode::detect_init_independence`                         | `libjvm.dylib` |

##### Native

|  Change | Delta |           % | Samples | Function                                                                           | Location                   |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------------- | -------------------------- |
|  +46.2% |   +24 | 2.9% → 5.4% | 52 → 76 | `WorkerThread::run`                                                                | `libjvm.dylib`             |
|  +33.9% |   +19 | 3.2% → 5.3% | 56 → 75 | `Java_java_lang_ClassLoader_defineClass1`                                          | `libjava.dylib`            |
|  +29.6% |   +16 | 3.0% → 4.9% | 54 → 70 | `KlassFactory::create_from_stream`                                                 | `libjvm.dylib`             |
|  +27.3% |   +15 | 3.1% → 4.9% | 55 → 70 | `jvm_define_class_common`                                                          | `libjvm.dylib`             |
|  +27.3% |   +15 | 3.1% → 4.9% | 55 → 70 | `JVM_DefineClassWithSource`                                                        | `libjvm.dylib`             |
|  +25.5% |   +14 | 3.1% → 4.9% | 55 → 69 | `SystemDictionary::resolve_class_from_stream`                                      | `libjvm.dylib`             |
| +433.3% |   +13 | 0.2% → 1.1% |  3 → 16 | `G1ParEvacuateFollowersClosure::do_void`                                           | `libjvm.dylib`             |
| +433.3% |   +13 | 0.2% → 1.1% |  3 → 16 | `G1EvacuateRegionsTask::evacuate_live_objects`                                     | `libjvm.dylib`             |
|  +34.3% |   +12 | 2.0% → 3.3% | 35 → 47 | `ClassFileParser::parse_constant_pool`                                             | `libjvm.dylib`             |
|  +21.6% |   +11 | 2.9% → 4.4% | 51 → 62 | `ClassFileParser::ClassFileParser`                                                 | `libjvm.dylib`             |
| +500.0% |   +10 | 0.1% → 0.8% |  2 → 12 | `G1ParScanThreadState::steal_and_trim_queue`                                       | `libjvm.dylib`             |
|  +31.3% |   +10 | 1.8% → 3.0% | 32 → 42 | `ClassFileParser::parse_constant_pool_entries`                                     | `libjvm.dylib`             |
| +128.6% |    +9 | 0.4% → 1.1% |  7 → 16 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb`  | `libjvm.dylib`             |
| +300.0% |    +9 | 0.2% → 0.8% |  3 → 12 | `_platform_memmove`                                                                | `libsystem_platform.dylib` |
|  +80.0% |    +8 | 0.6% → 1.3% | 10 → 18 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region` | `libjvm.dylib`             |
|  +80.0% |    +8 | 0.6% → 1.3% | 10 → 18 | `HeapRegionManager::par_iterate`                                                   | `libjvm.dylib`             |
|  +80.0% |    +8 | 0.6% → 1.3% | 10 → 18 | `G1RebuildRSAndScrubTask::work`                                                    | `libjvm.dylib`             |
|  +57.1% |    +8 | 0.8% → 1.6% | 14 → 22 | `Verifier::verify`                                                                 | `libjvm.dylib`             |
|  +87.5% |    +7 | 0.5% → 1.1% |  8 → 15 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object`           | `libjvm.dylib`             |
|  +14.3% |    +7 | 2.8% → 3.9% | 49 → 56 | `ClassFileParser::parse_stream`                                                    | `libjvm.dylib`             |

##### Ours

| Change | Delta |             % |   Samples | Function                                                                               | Location                                                                                                 |
| -----: | ----: | ------------: | --------: | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| +29.0% |   +18 |   3.5% → 5.6% |   62 → 80 | `loadClass(String, boolean)`                                                           | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`                                                 |
| +29.0% |   +18 |   3.5% → 5.6% |   62 → 80 | `loadClass(String)`                                                                    | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`                                                 |
| +28.3% |   +17 |   3.4% → 5.4% |   60 → 77 | `findClass(String)`                                                                    | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`                                                 |
|  +8.7% |   +11 |   7.2% → 9.7% | 127 → 138 | `transform(FirTransformer, Object)`                                                    | `org.jetbrains.kotlin.fir.declarations.FirFile`                                                          |
|  +7.6% |   +10 |  7.4% → 10.0% | 132 → 142 | `runResolution(FirSession, List)`                                                      | `org.jetbrains.kotlin.fir.pipeline.AnalyseKt`                                                            |
|  +7.8% |   +10 |   7.2% → 9.7% | 128 → 138 | `process(List)`                                                                        | `org.jetbrains.kotlin.fir.resolve.transformers.FirTotalResolveProcessor`                                 |
|  +8.8% |   +10 |   6.4% → 8.7% | 114 → 124 | `processFile(FirFile)`                                                                 | `org.jetbrains.kotlin.fir.resolve.transformers.FirTransformerBasedResolveProcessor`                      |
|  +3.7% |    +9 | 13.6% → 17.6% | 241 → 250 | `executePhase(ConfigurationPipelineArtifact)`                                          | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`                                         |
|  +3.7% |    +9 | 13.6% → 17.6% | 241 → 250 | `executePhase(PipelineArtifact)`                                                       | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`                                         |
|  +8.4% |    +9 |   6.0% → 8.2% | 107 → 116 | `transformChildren(FirTransformer, Object)`                                            | `org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`                                                 |
|  +4.6% |    +8 |  9.8% → 12.8% | 174 → 182 | `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)`                       | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`                                                           |
|  +6.7% |    +8 |   6.8% → 9.0% | 120 → 128 | `transformInplace(List, FirTransformer, Object)`                                       | `org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`                                                 |
|  +7.4% |    +8 |   6.1% → 8.2% | 108 → 116 | `transformElement(FirElement, ResolutionMode)`                                         | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
|  +7.9% |    +8 |   5.7% → 7.7% | 101 → 109 | `transformDeclarationContent(FirDeclaration, ResolutionMode)`                          | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
|  +7.9% |    +8 |   5.7% → 7.7% | 101 → 109 | `transformDeclarationContent(FirDeclaration, ResolutionMode)`                          | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`           |
|  +7.9% |    +8 |   5.7% → 7.7% | 101 → 109 | `doTransformFile$lambda$0(FirDeclarationsResolveTransformer, FirFile, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`           |
|  +7.9% |    +8 |   5.7% → 7.7% | 101 → 109 | `invoke()`                                                                             | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda`   |
|  +7.9% |    +8 |   5.7% → 7.7% | 101 → 109 | `doTransformFile(FirFile, ResolutionMode)`                                             | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`           |
|  +7.9% |    +8 |   5.7% → 7.7% | 101 → 109 | `transformFile(FirFile, ResolutionMode)`                                               | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`           |
|  +7.9% |    +8 |   5.7% → 7.7% | 101 → 109 | `transformFile(FirFile, ResolutionMode)`                                               | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                                             | Location                                             |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|  +31.7% |   +20 | 3.6% → 5.8% | 63 → 83 | `loadClass(String, boolean)`                                                                         | `java.lang.ClassLoader`                              |
|  +33.3% |   +19 | 3.2% → 5.4% | 57 → 76 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)`                      | `java.lang.ClassLoader`                              |
|  +32.2% |   +19 | 3.3% → 5.5% | 59 → 78 | `defineClass(String, byte[], int, int, ProtectionDomain)`                                            | `java.lang.ClassLoader`                              |
|  +32.8% |   +19 | 3.3% → 5.4% | 58 → 77 | `defineClass(String, byte[], int, int)`                                                              | `java.lang.ClassLoader`                              |
| +500.0% |    +5 | 0.1% → 0.4% |   1 → 6 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` | `java.lang.ClassLoader`                              |
| +500.0% |    +5 | 0.1% → 0.4% |   1 → 6 | `defineClass(ClassLoader, Class, String, byte[], ProtectionDomain, boolean, int, Object)`            | `java.lang.System$2`                                 |
| +500.0% |    +5 | 0.1% → 0.4% |   1 → 6 | `defineClass(boolean, Object)`                                                                       | `java.lang.invoke.MethodHandles$Lookup$ClassDefiner` |
|   +5.9% |    +4 | 3.8% → 5.1% | 68 → 72 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                                        | `java.util.zip.Inflater`                             |
|   +5.9% |    +4 | 3.8% → 5.1% | 68 → 72 | `read(byte[], int, int)`                                                                             | `java.util.zip.InflaterInputStream`                  |
| +400.0% |    +4 | 0.1% → 0.4% |   1 → 5 | `throwParameterIsNullNPE(String)`                                                                    | `kotlin.jvm.internal.Intrinsics`                     |
|   +4.4% |    +3 | 3.8% → 5.0% | 68 → 71 | `inflate(byte[], int, int)`                                                                          | `java.util.zip.Inflater`                             |
|  +33.3% |    +3 | 0.5% → 0.8% |  9 → 12 | `buildCallSite()`                                                                                    | `java.lang.invoke.InnerClassLambdaMetafactory`       |
|  +30.0% |    +3 | 0.6% → 0.9% | 10 → 13 | `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)`        | `java.lang.invoke.LambdaMetafactory`                 |
|  +30.0% |    +3 | 0.6% → 0.9% | 10 → 13 | `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object, Object)`                     | `java.lang.invoke.Invokers$Holder`                   |
|  +30.0% |    +3 | 0.6% → 0.9% | 10 → 13 | `invoke(Class, MethodHandle, String, Object, Object, Class)`                                         | `java.lang.invoke.BootstrapMethodInvoker`            |
|  +30.0% |    +3 | 0.6% → 0.9% | 10 → 13 | `makeSite(MethodHandle, String, MethodType, Object, Class)`                                          | `java.lang.invoke.CallSite`                          |
|  +30.0% |    +3 | 0.6% → 0.9% | 10 → 13 | `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])`                        | `java.lang.invoke.MethodHandleNatives`               |
|  +30.0% |    +3 | 0.6% → 0.9% | 10 → 13 | `linkCallSite(Object, Object, Object, Object, Object, Object[])`                                     | `java.lang.invoke.MethodHandleNatives`               |
| +100.0% |    +3 | 0.2% → 0.4% |   3 → 6 | `linkMethodHandleConstant(byte, Class, String, Object)`                                              | `java.lang.invoke.MethodHandles$Lookup`              |
| +150.0% |    +3 | 0.1% → 0.4% |   2 → 5 | `loadClass(String)`                                                                                  | `java.lang.ClassLoader`                              |

##### JIT

| Change | Delta |           % | Samples | Function      | Location    |
| -----: | ----: | ----------: | ------: | ------------- | ----------- |
| +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `itable stub` | `<unknown>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `zero_blocks` | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

| Change | Delta |             % |     Samples | Function                                                    | Location                                      |
| -----: | ----: | ------------: | ----------: | ----------------------------------------------------------- | --------------------------------------------- |
| -26.9% |  -315 | 66.1% → 60.3% | 1,171 → 856 | `CompileBroker::compiler_thread_loop`                       | `libjvm.dylib`                                |
| -26.7% |  -314 | 66.3% → 60.6% | 1,174 → 860 | `JavaThread::thread_main_inner`                             | `libjvm.dylib`                                |
| -23.6% |  -293 | 70.1% → 66.9% | 1,243 → 950 | `Thread::call_run`                                          | `libjvm.dylib`                                |
| -23.6% |  -293 | 70.1% → 66.9% | 1,243 → 950 | `thread_native_entry`                                       | `libjvm.dylib`                                |
| -23.5% |  -292 | 70.2% → 67.1% | 1,244 → 952 | `_pthread_start`                                            | `libsystem_pthread.dylib`                     |
| -23.5% |  -292 | 70.2% → 67.1% | 1,244 → 952 | `thread_start`                                              | `libsystem_pthread.dylib`                     |
| -22.1% |  -236 | 60.3% → 58.6% | 1,068 → 832 | `CompileBroker::invoke_compiler_on_method`                  | `libjvm.dylib`                                |
| -22.6% |  -168 | 42.0% → 40.7% |   745 → 577 | `Compile::Compile`                                          | `libjvm.dylib`                                |
| -22.4% |  -167 | 42.1% → 40.8% |   746 → 579 | `C2Compiler::compile_method`                                | `libjvm.dylib`                                |
| -85.5% |  -106 |   7.0% → 1.3% |    124 → 18 | `__psynch_mutexwait`                                        | `libsystem_kernel.dylib`                      |
| -85.5% |  -106 |   7.0% → 1.3% |    124 → 18 | `_pthread_mutex_firstfit_lock_slow`                         | `libsystem_pthread.dylib`                     |
| -73.6% |   -78 |   6.0% → 2.0% |    106 → 28 | `PlatformMonitor::wait`                                     | `libjvm.dylib`                                |
| -75.5% |   -77 |   5.8% → 1.8% |    102 → 25 | `__psynch_cvwait`                                           | `libsystem_kernel.dylib`                      |
| -79.8% |   -75 |   5.3% → 1.3% |     94 → 19 | `Monitor::wait`                                             | `libjvm.dylib`                                |
| -76.5% |   -75 |   5.5% → 1.6% |     98 → 23 | `CompileQueue::get`                                         | `libjvm.dylib`                                |
| -19.7% |   -71 | 20.3% → 20.4% |   360 → 289 | `Compile::Code_Gen`                                         | `libjvm.dylib`                                |
| -88.2% |   -67 |   4.3% → 0.6% |      76 → 9 | `ThreadCritical::ThreadCritical`                            | `libjvm.dylib`                                |
| -15.2% |   -67 | 24.8% → 26.3% |   440 → 373 | `exec(PrintStream, Services, MessageRenderer, String[])`    | `org.jetbrains.kotlin.cli.common.CLICompiler` |
| -15.4% |   -67 | 24.5% → 25.9% |   435 → 368 | `exec(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |
| -15.0% |   -66 | 24.8% → 26.4% |   440 → 374 | `exec(PrintStream, MessageRenderer, String[])`              | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### Compiler

| Change | Delta |             % |     Samples | Function                                      | Location       |
| -----: | ----: | ------------: | ----------: | --------------------------------------------- | -------------- |
| -26.9% |  -315 | 66.1% → 60.3% | 1,171 → 856 | `CompileBroker::compiler_thread_loop`         | `libjvm.dylib` |
| -22.1% |  -236 | 60.3% → 58.6% | 1,068 → 832 | `CompileBroker::invoke_compiler_on_method`    | `libjvm.dylib` |
| -22.6% |  -168 | 42.0% → 40.7% |   745 → 577 | `Compile::Compile`                            | `libjvm.dylib` |
| -22.4% |  -167 | 42.1% → 40.8% |   746 → 579 | `C2Compiler::compile_method`                  | `libjvm.dylib` |
| -76.5% |   -75 |   5.5% → 1.6% |     98 → 23 | `CompileQueue::get`                           | `libjvm.dylib` |
| -19.7% |   -71 | 20.3% → 20.4% |   360 → 289 | `Compile::Code_Gen`                           | `libjvm.dylib` |
| -17.6% |   -52 | 16.7% → 17.2% |   296 → 244 | `Compilation::compile_method`                 | `libjvm.dylib` |
| -17.2% |   -51 | 16.7% → 17.3% |   296 → 245 | `Compilation::Compilation`                    | `libjvm.dylib` |
| -19.5% |   -50 | 14.5% → 14.6% |   257 → 207 | `Compile::Optimize`                           | `libjvm.dylib` |
| -15.7% |   -41 | 14.7% → 15.5% |   261 → 220 | `Compilation::compile_java_method`            | `libjvm.dylib` |
| -56.7% |   -34 |   3.4% → 1.8% |     60 → 26 | `ciBytecodeStream::get_method`                | `libjvm.dylib` |
| -79.5% |   -31 |   2.2% → 0.6% |      39 → 8 | `ciTypeFlow::df_flow_types`                   | `libjvm.dylib` |
| -27.7% |   -31 |   6.3% → 5.7% |    112 → 81 | `Compilation::build_hir`                      | `libjvm.dylib` |
| -71.4% |   -30 |   2.4% → 0.8% |     42 → 12 | `ciMethod::get_flow_analysis`                 | `libjvm.dylib` |
| -72.5% |   -29 |   2.3% → 0.8% |     40 → 11 | `ciTypeFlow::flow_types`                      | `libjvm.dylib` |
| -72.5% |   -29 |   2.3% → 0.8% |     40 → 11 | `ciTypeFlow::do_flow`                         | `libjvm.dylib` |
| -15.9% |   -28 |  9.9% → 10.4% |   176 → 148 | `PhaseChaitin::Register_Allocate`             | `libjvm.dylib` |
| -50.9% |   -28 |   3.1% → 1.9% |     55 → 27 | `ciObjectFactory::get_metadata`               | `libjvm.dylib` |
| -82.4% |   -28 |   1.9% → 0.4% |      34 → 6 | `ciTypeFlow::StateVector::apply_one_bytecode` | `libjvm.dylib` |
| -75.0% |   -27 |   2.0% → 0.6% |      36 → 9 | `ciTypeFlow::flow_block`                      | `libjvm.dylib` |

##### Native

| Change | Delta |             % |     Samples | Function                            | Location                  |
| -----: | ----: | ------------: | ----------: | ----------------------------------- | ------------------------- |
| -26.7% |  -314 | 66.3% → 60.6% | 1,174 → 860 | `JavaThread::thread_main_inner`     | `libjvm.dylib`            |
| -23.6% |  -293 | 70.1% → 66.9% | 1,243 → 950 | `Thread::call_run`                  | `libjvm.dylib`            |
| -23.6% |  -293 | 70.1% → 66.9% | 1,243 → 950 | `thread_native_entry`               | `libjvm.dylib`            |
| -23.5% |  -292 | 70.2% → 67.1% | 1,244 → 952 | `_pthread_start`                    | `libsystem_pthread.dylib` |
| -23.5% |  -292 | 70.2% → 67.1% | 1,244 → 952 | `thread_start`                      | `libsystem_pthread.dylib` |
| -85.5% |  -106 |   7.0% → 1.3% |    124 → 18 | `__psynch_mutexwait`                | `libsystem_kernel.dylib`  |
| -85.5% |  -106 |   7.0% → 1.3% |    124 → 18 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |
| -73.6% |   -78 |   6.0% → 2.0% |    106 → 28 | `PlatformMonitor::wait`             | `libjvm.dylib`            |
| -75.5% |   -77 |   5.8% → 1.8% |    102 → 25 | `__psynch_cvwait`                   | `libsystem_kernel.dylib`  |
| -79.8% |   -75 |   5.3% → 1.3% |     94 → 19 | `Monitor::wait`                     | `libjvm.dylib`            |
| -88.2% |   -67 |   4.3% → 0.6% |      76 → 9 | `ThreadCritical::ThreadCritical`    | `libjvm.dylib`            |
| -18.6% |   -56 | 17.0% → 17.3% |   301 → 245 | `Compiler::compile_method`          | `libjvm.dylib`            |
| -84.5% |   -49 |   3.3% → 0.6% |      58 → 9 | `Chunk::operator new`               | `libjvm.dylib`            |
| -83.6% |   -46 |   3.1% → 0.6% |      55 → 9 | `Arena::grow`                       | `libjvm.dylib`            |
| -37.7% |   -40 |   6.0% → 4.7% |    106 → 66 | `Parse::do_one_block`               | `libjvm.dylib`            |
| -37.7% |   -40 |   6.0% → 4.7% |    106 → 66 | `Parse::do_all_blocks`              | `libjvm.dylib`            |
| -41.7% |   -40 |   5.4% → 3.9% |     96 → 56 | `Parse::do_call`                    | `libjvm.dylib`            |
| -36.8% |   -39 |   6.0% → 4.7% |    106 → 67 | `Parse::Parse`                      | `libjvm.dylib`            |
| -36.8% |   -39 |   6.0% → 4.7% |    106 → 67 | `ParseGenerator::generate`          | `libjvm.dylib`            |
| -82.5% |   -33 |   2.3% → 0.5% |      40 → 7 | `Mutex::lock`                       | `libjvm.dylib`            |

##### Ours

| Change | Delta |             % |   Samples | Function                                                                                                                                      | Location                                                        |
| -----: | ----: | ------------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| -15.2% |   -67 | 24.8% → 26.3% | 440 → 373 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`                   |
| -15.4% |   -67 | 24.5% → 25.9% | 435 → 368 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`                   |
| -15.0% |   -66 | 24.8% → 26.4% | 440 → 374 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`                   |
| -15.0% |   -66 | 24.8% → 26.4% | 440 → 374 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`         |
| -12.5% |   -65 | 29.4% → 32.1% | 521 → 456 | `run(String[])`                                                                                                                               | `org.jetbrains.kotlin.preloading.Preloader`                     |
| -12.5% |   -65 | 29.4% → 32.1% | 521 → 456 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`                     |
| -14.8% |   -65 | 24.8% → 26.4% | 440 → 375 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`         |
| -15.3% |   -65 | 24.0% → 25.4% | 426 → 361 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                    |
| -15.3% |   -65 | 24.0% → 25.4% | 426 → 361 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                    |
| -15.3% |   -65 | 24.0% → 25.4% | 426 → 361 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler`                   |
| -15.3% |   -65 | 23.9% → 25.3% | 424 → 359 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`         |
| -15.3% |   -65 | 23.9% → 25.3% | 424 → 359 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`         |
| -15.3% |   -65 | 23.9% → 25.3% | 424 → 359 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`         |
| -47.1% |   -65 |   7.8% → 5.1% |  138 → 73 | `executePhase(JvmFir2IrPipelineArtifact)`                                                                                                     | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase` |
| -47.1% |   -65 |   7.8% → 5.1% |  138 → 73 | `executePhase(PipelineArtifact)`                                                                                                              | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase` |
| -14.5% |   -64 | 24.9% → 26.6% | 441 → 377 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`          |
| -14.5% |   -64 | 24.9% → 26.6% | 441 → 377 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                    |
| -14.5% |   -64 | 24.8% → 26.5% | 440 → 376 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`         |
| -15.2% |   -64 | 23.7% → 25.1% | 420 → 356 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`               |
| -15.2% |   -64 | 23.7% → 25.1% | 420 → 356 | `phaseBody(LoggingContext, Object)`                                                                                                           | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`               |

##### Standard library

|  Change | Delta |             % |   Samples | Function                                         | Location                                                |
| ------: | ----: | ------------: | --------: | ------------------------------------------------ | ------------------------------------------------------- |
|  -14.7% |   -65 | 24.9% → 26.6% | 442 → 377 | `invoke(Object, Object[])`                       | `java.lang.reflect.Method`                              |
|  -14.5% |   -64 | 24.9% → 26.6% | 441 → 377 | `invokeStatic(Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x0000008001008000`    |
|  -14.5% |   -64 | 24.9% → 26.6% | 441 → 377 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000008001009400`     |
|  -14.5% |   -64 | 24.9% → 26.6% | 441 → 377 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                      |
|  -14.5% |   -64 | 24.9% → 26.6% | 441 → 377 | `invokeImpl(Object, Object[])`                   | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
|  -14.5% |   -64 | 24.9% → 26.6% | 441 → 377 | `invoke(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
|   -8.9% |    -5 |   3.2% → 3.6% |   56 → 51 | `resumeWith(Object)`                             | `kotlin.coroutines.jvm.internal.BaseContinuationImpl`   |
|  -80.0% |    -4 |   0.3% → 0.1% |     5 → 1 | `areEqual(Object, Object)`                       | `kotlin.jvm.internal.Intrinsics`                        |
|  -75.0% |    -3 |   0.2% → 0.1% |     4 → 1 | `putVal(int, Object, Object, boolean, boolean)`  | `java.util.HashMap`                                     |
|  -75.0% |    -3 |   0.2% → 0.1% |     4 → 1 | `put(Object, Object)`                            | `java.util.HashMap`                                     |
|  -50.0% |    -3 |   0.3% → 0.2% |     6 → 3 | `descriptor_delegate$lambda$0(KClassImpl)`       | `kotlin.reflect.jvm.internal.KClassImpl$Data`           |
|  -50.0% |    -3 |   0.3% → 0.2% |     6 → 3 | `accessor$KClassImpl$Data$lambda1(KClassImpl)`   | `kotlin.reflect.jvm.internal.KClassImpl$Data`           |
|  -50.0% |    -3 |   0.3% → 0.2% |     6 → 3 | `invoke()`                                       | `kotlin.reflect.jvm.internal.KClassImpl$Data$$Lambda$1` |
|  -50.0% |    -3 |   0.3% → 0.2% |     6 → 3 | `getDescriptor()`                                | `kotlin.reflect.jvm.internal.KClassImpl$Data`           |
|  -50.0% |    -3 |   0.3% → 0.2% |     6 → 3 | `getDescriptor()`                                | `kotlin.reflect.jvm.internal.KClassImpl`                |
|  -17.6% |    -3 |          1.0% |   17 → 14 | `getValue()`                                     | `kotlin.SafePublicationLazyImpl`                        |
| removed |    -3 |   0.2% → 0.0% |     3 → 0 | `equals(Object)`                                 | `java.lang.String`                                      |
| removed |    -3 |   0.2% → 0.0% |     3 → 0 | `allocateInstance(Class)`                        | `jdk.internal.misc.Unsafe`                              |
|  -50.0% |    -2 |   0.2% → 0.1% |     4 → 2 | `updateBytes(int, byte[], int, int)`             | `java.util.zip.CRC32`                                   |
|  -50.0% |    -2 |   0.2% → 0.1% |     4 → 2 | `update(byte[], int, int)`                       | `java.util.zip.CRC32`                                   |

##### JIT

| Change | Delta |           % | Samples | Function                 | Location    |
| -----: | ----: | ----------: | ------: | ------------------------ | ----------- |
| -80.0% |    -4 | 0.3% → 0.1% |   5 → 1 | `I2C/C2I adapters(0xb)`  | `<unknown>` |
| -40.0% |    -2 | 0.3% → 0.2% |   5 → 3 | `I2C/C2I adapters(0xbb)` | `<unknown>` |
| -50.0% |    -1 |        0.1% |   2 → 1 | `I2C/C2I adapters`       | `<unknown>` |

#### Callers

Callers with the largest change in contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `WorkerThread::run` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller             | Location       |
| -----: | ----: | -----: | ------: | ------------------ | -------------- |
| +46.2% |   +24 | 100.0% | 52 → 76 | `Thread::call_run` | `libjvm.dylib` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|  Change | Delta |             % | Samples | Caller                       | Location                                                 |
| ------: | ----: | ------------: | ------: | ---------------------------- | -------------------------------------------------------- |
|  +29.0% |   +18 | 98.4% → 96.4% | 62 → 80 | `loadClass(String, boolean)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
| +200.0% |    +2 |   1.6% → 3.6% |   1 → 3 | `loadClass(String)`          | `java.lang.ClassLoader`                                  |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

| Change | Delta |      % | Samples | Caller                                                                          | Location                |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| +33.9% |   +19 | 100.0% | 56 → 75 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

| Change | Delta |      % | Samples | Caller                                                    | Location                |
| -----: | ----: | -----: | ------: | --------------------------------------------------------- | ----------------------- |
| +33.3% |   +19 | 100.0% | 57 → 76 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

| Change | Delta |             % | Samples | Caller                                  | Location                |
| -----: | ----: | ------------: | ------: | --------------------------------------- | ----------------------- |
| +32.8% |   +19 | 98.3% → 98.7% | 58 → 77 | `defineClass(String, byte[], int, int)` | `java.lang.ClassLoader` |

##### `defineClass(String, byte[], int, int)` (`java.lang.ClassLoader`)

| Change | Delta |      % | Samples | Caller              | Location                                                 |
| -----: | ----: | -----: | ------: | ------------------- | -------------------------------------------------------- |
| +32.8% |   +19 | 100.0% | 58 → 77 | `findClass(String)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `loadClass(String, boolean)` (`org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`)

| Change | Delta |      % | Samples | Caller              | Location                                                 |
| -----: | ----: | -----: | ------: | ------------------- | -------------------------------------------------------- |
| +29.0% |   +18 | 100.0% | 62 → 80 | `loadClass(String)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `loadClass(String)` (`org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                                                                                                                                                                      | Location                                                              |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| removed |    -2 |   3.2% → 0.0% |   2 → 0 | `<clinit>()`                                                                                                                                                                                                                                                                                                | `org.jetbrains.kotlin.fir.analysis.checkers.CommonExpressionCheckers` |
| removed |    -2 |   3.2% → 0.0% |   2 → 0 | `<init>(FirSession, ScopeSession, List, Fir2IrExtensions, Fir2IrConfiguration, Fir2IrVisibilityConverter, Fir2IrCommonMemberStorage, Map, KotlinMangler$IrMangler, KotlinBuiltIns, IrSpecialAnnotationsProvider, FirProviderWithGeneratedFiles, Fir2IrSyntheticIrBuiltinsSymbolsContainer, SymbolRemapper)` | `org.jetbrains.kotlin.fir.backend.Fir2IrComponentsStorage`            |
|     new |    +2 |   0.0% → 2.5% |   0 → 2 | `<init>(Disposable, boolean)`                                                                                                                                                                                                                                                                               | `com.intellij.core.CoreApplicationEnvironment`                        |
|     new |    +2 |   0.0% → 2.5% |   0 → 2 | `registerCommonCheckers(FirSessionConfigurator)`                                                                                                                                                                                                                                                            | `org.jetbrains.kotlin.fir.checkers.CheckersContainersKt`              |
|  +10.0% |    +1 | 16.1% → 13.8% | 10 → 11 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)`                                                                                                                                                                                                                             | `java.lang.ClassLoader`                                               |

##### `findClass(String)` (`org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`)

| Change | Delta |      % | Samples | Caller                       | Location                |
| -----: | ----: | -----: | ------: | ---------------------------- | ----------------------- |
| +28.3% |   +17 | 100.0% | 60 → 77 | `loadClass(String, boolean)` | `java.lang.ClassLoader` |

##### `KlassFactory::create_from_stream` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                               | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------- | -------------- |
| +22.6% |   +12 | 98.1% → 92.9% | 53 → 65 | `SystemDictionary::resolve_class_from_stream`        | `libjvm.dylib` |
|    new |    +4 |   0.0% → 5.7% |   0 → 4 | `SystemDictionary::resolve_hidden_class_from_stream` | `libjvm.dylib` |

##### `jvm_define_class_common` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                      | Location       |
| -----: | ----: | -----: | ------: | --------------------------- | -------------- |
| +27.3% |   +15 | 100.0% | 55 → 70 | `JVM_DefineClassWithSource` | `libjvm.dylib` |

##### `JVM_DefineClassWithSource` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                    | Location        |
| -----: | ----: | -----: | ------: | ----------------------------------------- | --------------- |
| +27.3% |   +15 | 100.0% | 55 → 70 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib` |

##### `SystemDictionary::resolve_class_from_stream` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                    | Location       |
| -----: | ----: | -----: | ------: | ------------------------- | -------------- |
| +25.5% |   +14 | 100.0% | 55 → 69 | `jvm_define_class_common` | `libjvm.dylib` |

##### `G1ParEvacuateFollowersClosure::do_void` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                                         | Location       |
| ------: | ----: | -----: | ------: | ---------------------------------------------- | -------------- |
| +433.3% |   +13 | 100.0% |  3 → 16 | `G1EvacuateRegionsTask::evacuate_live_objects` | `libjvm.dylib` |

##### `G1EvacuateRegionsTask::evacuate_live_objects` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                            | Location       |
| ------: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +433.3% |   +13 | 100.0% |  3 → 16 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib` |

##### `ClassFileParser::parse_constant_pool` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                          | Location       |
| -----: | ----: | -----: | ------: | ------------------------------- | -------------- |
| +34.3% |   +12 | 100.0% | 35 → 47 | `ClassFileParser::parse_stream` | `libjvm.dylib` |

##### `ClassFileParser::ClassFileParser` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                             | Location       |
| -----: | ----: | -----: | ------: | ---------------------------------- | -------------- |
| +21.6% |   +11 | 100.0% | 51 → 62 | `KlassFactory::create_from_stream` | `libjvm.dylib` |

##### `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`)

| Change | Delta |             % |   Samples | Caller                                                | Location                                                                                                        |
| -----: | ----: | ------------: | --------: | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
|  +8.8% |   +10 | 89.8% → 89.9% | 114 → 124 | `processFile(FirFile)`                                | `org.jetbrains.kotlin.fir.resolve.transformers.FirTransformerBasedResolveProcessor`                             |
| +12.5% |    +3 | 18.9% → 19.6% |   24 → 27 | `transformFile(FirFile, Object)`                      | `org.jetbrains.kotlin.fir.resolve.transformers.contracts.FirContractResolveTransformerAdapter`                  |
|  +4.1% |    +3 | 58.3% → 55.8% |   74 → 77 | `transformFile(FirFile, Object)`                      | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirBodyResolveTransformerAdapter`                   |
|  +7.7% |    +1 | 10.2% → 10.1% |   13 → 14 | `resolveAnnotations(FirFile)`                         | `org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirCompilerRequiredAnnotationsResolveTransformer` |
|  +7.7% |    +1 | 10.2% → 10.1% |   13 → 14 | `transformSingle(FirElement, FirTransformer, Object)` | `org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`                                                        |

##### `G1ParScanThreadState::steal_and_trim_queue` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                                   | Location       |
| ------: | ----: | -----: | ------: | ---------------------------------------- | -------------- |
| +500.0% |   +10 | 100.0% |  2 → 12 | `G1ParEvacuateFollowersClosure::do_void` | `libjvm.dylib` |

##### `ClassFileParser::parse_constant_pool_entries` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                 | Location       |
| -----: | ----: | -----: | ------: | -------------------------------------- | -------------- |
| +31.3% |   +10 | 100.0% | 32 → 42 | `ClassFileParser::parse_constant_pool` | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                             | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------ | -------------- |
| removed |    -3 |  33.3% → 0.0% |   3 → 0 | `PhaseIFG::re_insert`                                              | `libjvm.dylib` |
| +300.0% |    +3 | 11.1% → 22.2% |   1 → 4 | `PhaseIFG::effective_degree`                                       | `libjvm.dylib` |
|     new |    +2 |  0.0% → 11.1% |   0 → 2 | `PhaseChaitin::Select`                                             | `libjvm.dylib` |
|     new |    +2 |  0.0% → 11.1% |   0 → 2 | `PhaseChaitin::build_ifg_physical`                                 | `libjvm.dylib` |
|     new |    +2 |  0.0% → 11.1% |   0 → 2 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` | `libjvm.dylib` |

##### `LinearScan::build_intervals` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                       | Location       |
| -----: | ----: | -----: | ------: | ---------------------------- | -------------- |
| +80.0% |    +8 | 100.0% | 10 → 18 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `LIRGenerator::state_for` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                         | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------ | -------------- |
|    new |    +3 | 0.0% → 42.9% |   0 → 3 | `LIRGenerator::do_Invoke`      | `libjvm.dylib` |
|    new |    +1 | 0.0% → 14.3% |   0 → 1 | `LIRGenerator::do_NewInstance` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 14.3% |   0 → 1 | `LIRGenerator::do_Goto`        | `libjvm.dylib` |
|    new |    +1 | 0.0% → 14.3% |   0 → 1 | `LIRGenerator::do_Throw`       | `libjvm.dylib` |

##### `PhiNode::Ideal` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Caller                        | Location       |
| -----: | ----: | -------------: | ------: | ----------------------------- | -------------- |
| +66.7% |    +4 | 100.0% → 83.3% |  6 → 10 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |
|    new |    +1 |    0.0% → 8.3% |   0 → 1 | `Parse::do_exits`             | `libjvm.dylib` |
|    new |    +1 |    0.0% → 8.3% |   0 → 1 | `GraphKit::gen_checkcast`     | `libjvm.dylib` |

##### `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                             | Location       |
| ------: | ----: | -----: | ------: | ---------------------------------- | -------------- |
| +250.0% |    +5 | 100.0% |   2 → 7 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |

##### `Node::dominates` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                           | Location       |
| ------: | ----: | -----: | ------: | -------------------------------- | -------------- |
| +125.0% |    +5 | 100.0% |   4 → 9 | `MemNode::all_controls_dominate` | `libjvm.dylib` |

##### `MemNode::all_controls_dominate` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                     | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------------------ | -------------- |
| +100.0% |    +4 | 100.0% → 88.9% |   4 → 8 | `InitializeNode::detect_init_independence` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 11.1% |   0 → 1 | `MemNode::find_previous_store`             | `libjvm.dylib` |

##### `PhaseIFG::effective_degree` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                               | Location       |
| ------: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| +166.7% |    +5 | 100.0% |   3 → 8 | `PhaseIFG::Compute_Effective_Degree` | `libjvm.dylib` |

##### `PhaseIFG::Compute_Effective_Degree` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                            | Location       |
| ------: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +166.7% |    +5 | 100.0% |   3 → 8 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `TypePtr::xmeet` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                     | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
| +400.0% |    +4 | 33.3% → 62.5% |   1 → 5 | `TypeOopPtr::filter_helper`                | `libjvm.dylib` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `GraphKit::null_check_common`              | `libjvm.dylib` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `TypeInstPtr::xmeet_helper`                | `libjvm.dylib` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `GraphKit::record_profile_for_speculation` | `libjvm.dylib` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `GraphKit::type_check_receiver`            | `libjvm.dylib` |

##### `PhaseCoalesce::coalesce_driver` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                            | Location       |
| ------: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +250.0% |    +5 | 100.0% |   2 → 7 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Node::Node` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                        | Location       |
| ------: | ----: | -----------: | ------: | ----------------------------- | -------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `GraphKit::basic_plus_adr`    | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `GraphKit::new_array`         | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `LoadNode::make`              | `libjvm.dylib` |
|     new |    +1 | 0.0% → 14.3% |   0 → 1 | `Parse::array_addressing`     | `libjvm.dylib` |
|     new |    +1 | 0.0% → 14.3% |   0 → 1 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |

##### `Node_Backward_Iterator::next` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| +300.0% |    +3 | 20.0% → 44.4% |   1 → 4 | `PhaseCFG::schedule_late`         | `libjvm.dylib` |
|     new |    +1 |  0.0% → 11.1% |   0 → 1 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |

##### `LIR_Assembler::emit_lir_list` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                     | Location       |
| -----: | ----: | -----: | ------: | -------------------------- | -------------- |
| +11.8% |    +4 | 100.0% | 34 → 38 | `LIR_Assembler::emit_code` | `libjvm.dylib` |

##### `LIR_Assembler::emit_code` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                             | Location       |
| ------: | ----: | -------------: | ------: | ---------------------------------- | -------------- |
|  +14.7% |    +5 | 97.1% → 100.0% | 34 → 39 | `Compilation::emit_code_body`      | `libjvm.dylib` |
| removed |    -1 |    2.9% → 0.0% |   1 → 0 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `Compilation::emit_code_body` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                             | Location       |
| -----: | ----: | -----: | ------: | ---------------------------------- | -------------- |
|  +8.7% |    +4 | 100.0% | 46 → 50 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `GraphBuilder::access_field` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                      | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------------- | -------------- |
| +66.7% |    +4 | 100.0% |  6 → 10 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |

##### `PhaseIdealLoop::split_if_with_blocks` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                               | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| +23.5% |    +4 | 100.0% | 17 → 21 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Matcher::specialize_generic_vector_operands` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller           | Location       |
| ------: | ----: | -----: | ------: | ---------------- | -------------- |
| +133.3% |    +4 | 100.0% |   3 → 7 | `Matcher::match` | `libjvm.dylib` |

##### `InitializeNode::detect_init_independence` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                              | Location       |
| ------: | ----: | -----: | ------: | ----------------------------------- | -------------- |
| +100.0% |    +4 | 100.0% |   4 → 8 | `InitializeNode::can_capture_store` | `libjvm.dylib` |

##### `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                                                                             | Location       |
| ------: | ----: | -----: | ------: | ---------------------------------------------------------------------------------- | -------------- |
| +128.6% |    +9 | 100.0% |  7 → 16 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region` | `libjvm.dylib` |

##### `_platform_memmove` (`libsystem_platform.dylib`)

|  Change | Delta |            % | Samples | Caller                                                                                                                                                                                                                                                   | Location        |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
|     new |    +3 | 0.0% → 25.0% |   0 → 3 | `Java_java_lang_ClassLoader_defineClass1`                                                                                                                                                                                                                | `libjava.dylib` |
|     new |    +2 | 0.0% → 16.7% |   0 → 2 | `Node_Array::grow`                                                                                                                                                                                                                                       | `libjvm.dylib`  |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::internal_insert_get<SymbolTableLookup, bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::insert<SymbolTableLookup>(Thread*, SymbolTableLookup&, Symbol const&, bool*, bool*)::NOP>` | `libjvm.dylib`  |
|     new |    +1 |  0.0% → 8.3% |   0 → 1 | `nmethod::new_nmethod`                                                                                                                                                                                                                                   | `libjvm.dylib`  |
|     new |    +1 |  0.0% → 8.3% |   0 → 1 | `Node::out_grow`                                                                                                                                                                                                                                         | `libjvm.dylib`  |

##### `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                           | Location       |
| -----: | ----: | -----: | ------: | -------------------------------- | -------------- |
| +80.0% |    +8 | 100.0% | 10 → 18 | `HeapRegionManager::par_iterate` | `libjvm.dylib` |

##### `HeapRegionManager::par_iterate` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                          | Location       |
| -----: | ----: | -----: | ------: | ------------------------------- | -------------- |
| +80.0% |    +8 | 100.0% | 10 → 18 | `G1RebuildRSAndScrubTask::work` | `libjvm.dylib` |

##### `G1RebuildRSAndScrubTask::work` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller              | Location       |
| -----: | ----: | -----: | ------: | ------------------- | -------------- |
| +80.0% |    +8 | 100.0% | 10 → 18 | `WorkerThread::run` | `libjvm.dylib` |

##### `Verifier::verify` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                           | Location       |
| -----: | ----: | -----: | ------: | -------------------------------- | -------------- |
| +57.1% |    +8 | 100.0% | 14 → 22 | `InstanceKlass::link_class_impl` | `libjvm.dylib` |

##### `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------- | -------------- |
|  +85.7% |    +6 | 87.5% → 86.7% |  7 → 13 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb`  | `libjvm.dylib` |
| +100.0% |    +1 | 12.5% → 13.3% |   1 → 2 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region` | `libjvm.dylib` |

##### `ClassFileParser::parse_stream` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                             | Location       |
| -----: | ----: | -----: | ------: | ---------------------------------- | -------------- |
| +14.3% |    +7 | 100.0% | 49 → 56 | `ClassFileParser::ClassFileParser` | `libjvm.dylib` |

##### `runResolution(FirSession, List)` (`org.jetbrains.kotlin.fir.pipeline.AnalyseKt`)

| Change | Delta |      % |   Samples | Caller                                                           | Location                                       |
| -----: | ----: | -----: | --------: | ---------------------------------------------------------------- | ---------------------------------------------- |
|  +7.6% |   +10 | 100.0% | 132 → 142 | `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)` | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt` |

##### `process(List)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirTotalResolveProcessor`)

| Change | Delta |      % |   Samples | Caller                            | Location                                      |
| -----: | ----: | -----: | --------: | --------------------------------- | --------------------------------------------- |
|  +7.8% |   +10 | 100.0% | 128 → 138 | `runResolution(FirSession, List)` | `org.jetbrains.kotlin.fir.pipeline.AnalyseKt` |

##### `processFile(FirFile)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirTransformerBasedResolveProcessor`)

| Change | Delta |      % |   Samples | Caller          | Location                                                                 |
| -----: | ----: | -----: | --------: | --------------- | ------------------------------------------------------------------------ |
|  +8.8% |   +10 | 100.0% | 114 → 124 | `process(List)` | `org.jetbrains.kotlin.fir.resolve.transformers.FirTotalResolveProcessor` |

##### `executePhase(ConfigurationPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`)

| Change | Delta |      % |   Samples | Caller                           | Location                                                         |
| -----: | ----: | -----: | --------: | -------------------------------- | ---------------------------------------------------------------- |
|  +3.7% |    +9 | 100.0% | 241 → 250 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase` |

##### `executePhase(PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`)

| Change | Delta |      % |   Samples | Caller                                         | Location                                          |
| -----: | ----: | -----: | --------: | ---------------------------------------------- | ------------------------------------------------- |
|  +3.7% |    +9 | 100.0% | 241 → 250 | `phaseBody(PipelineContext, PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `transformChildren(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`)

| Change | Delta |             % |   Samples | Caller                                         | Location                                                                                                 |
| -----: | ----: | ------------: | --------: | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
|  +8.4% |    +9 |        100.0% | 107 → 116 | `transformChildren(FirTransformer, Object)`    | `org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`                                                 |
|  +7.9% |    +8 | 94.4% → 94.0% | 101 → 109 | `transformElement(FirElement, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
|    new |    +1 |   0.0% → 0.9% |     0 → 1 | `transformFile(FirFile, Object)`               | `org.jetbrains.kotlin.fir.resolve.transformers.FirImportResolveTransformer`                              |

##### `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`)

| Change | Delta |      % |   Samples | Caller                                        | Location                                                         |
| -----: | ----: | -----: | --------: | --------------------------------------------- | ---------------------------------------------------------------- |
|  +4.6% |    +8 | 100.0% | 174 → 182 | `executePhase(ConfigurationPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase` |

##### `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`)

|  Change | Delta |              % |   Samples | Caller                                          | Location                                                          |
| ------: | ----: | -------------: | --------: | ----------------------------------------------- | ----------------------------------------------------------------- |
|   +5.8% |    +7 | 100.0% → 99.2% | 120 → 127 | `transformDeclarations(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`          |
|  +15.8% |    +3 |  15.8% → 17.2% |   19 → 22 | `transformArguments(FirTransformer, Object)`    | `org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl`   |
| +150.0% |    +3 |    1.7% → 3.9% |     2 → 5 | `transformDeclarations(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`  |
|  -11.1% |    -3 |  22.5% → 18.8% |   27 → 24 | `transformBranches(FirTransformer, Object)`     | `org.jetbrains.kotlin.fir.expressions.impl.FirWhenExpressionImpl` |
| +200.0% |    +2 |    0.8% → 2.3% |     1 → 3 | `transformChildren(FirTransformer, Object)`     | `org.jetbrains.kotlin.fir.types.impl.FirUserTypeRefImpl`          |

##### `transformElement(FirElement, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change | Delta |             % |   Samples | Caller                                                        | Location                                                                                                 |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
|  +7.9% |    +8 | 93.5% → 94.0% | 101 → 109 | `transformDeclarationContent(FirDeclaration, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
| +15.8% |    +3 | 17.6% → 19.0% |   19 → 22 | `transformElement(FirElement, Object)`                        | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### `transformDeclarationContent(FirDeclaration, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change | Delta |              % |   Samples | Caller                                                        | Location                                                                                            |
| -----: | ----: | -------------: | --------: | ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
|  +6.9% |    +7 | 100.0% → 99.1% | 101 → 108 | `transformDeclarationContent(FirDeclaration, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`      |
|    new |    +1 |    0.0% → 0.9% |     0 → 1 | `transformDeclarationContent(FirDeclaration, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirImplicitAwareBodyResolveTransformer` |

##### `transformDeclarationContent(FirDeclaration, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`)

|  Change | Delta |           % |   Samples | Caller                                                                                                        | Location                                                                                       |
| ------: | ----: | ----------: | --------: | ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
|   +7.9% |    +8 |      100.0% | 101 → 109 | `doTransformFile$lambda$0(FirDeclarationsResolveTransformer, FirFile, ResolutionMode)`                        | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |
| +300.0% |    +3 | 1.0% → 3.7% |     1 → 4 | `doTransformRegularClassContent$lambda$0(FirDeclarationsResolveTransformer, FirRegularClass, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |

##### `doTransformFile$lambda$0(FirDeclarationsResolveTransformer, FirFile, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`)

| Change | Delta |      % |   Samples | Caller     | Location                                                                                               |
| -----: | ----: | -----: | --------: | ---------- | ------------------------------------------------------------------------------------------------------ |
|  +7.9% |    +8 | 100.0% | 101 → 109 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda` |

##### `invoke()` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda`)

|  Change | Delta |             % | Samples | Caller                                                                            | Location                                                                                                                                            |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
|   +5.4% |    +4 | 73.3% → 71.6% | 74 → 78 | `withFile(FirFile, Function0)`                                                    | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`                                                      |
|  +12.5% |    +3 | 23.8% → 24.8% | 24 → 27 | `withFile(FirFile, Function0)`                                                    | `org.jetbrains.kotlin.fir.resolve.transformers.contracts.FirAbstractContractResolveTransformerDispatcher$FirDeclarationsContractResolveTransformer` |
| +300.0% |    +3 |   1.0% → 3.7% |   1 → 4 | `forRegularClassBody$lambda$0(Function0)`                                         | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`                                                      |
| +300.0% |    +3 |   1.0% → 3.7% |   1 → 4 | `forRegularClassBody$lambda$0$0(BodyResolveContext, FirRegularClass, Function0)`  | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveContext`                                                                     |
|   +2.7% |    +2 | 72.3% → 68.8% | 73 → 75 | `withParameters(FirCallableDeclaration, SessionAndScopeSessionHolder, Function0)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveContext`                                                                     |

##### `doTransformFile(FirFile, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`)

| Change | Delta |      % |   Samples | Caller                                   | Location                                                                                       |
| -----: | ----: | -----: | --------: | ---------------------------------------- | ---------------------------------------------------------------------------------------------- |
|  +7.9% |    +8 | 100.0% | 101 → 109 | `transformFile(FirFile, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |

##### `transformFile(FirFile, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`)

| Change | Delta |      % |   Samples | Caller                                   | Location                                                                                                 |
| -----: | ----: | -----: | --------: | ---------------------------------------- | -------------------------------------------------------------------------------------------------------- |
|  +7.9% |    +8 | 100.0% | 101 → 109 | `transformFile(FirFile, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### `transformFile(FirFile, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change | Delta |      % |   Samples | Caller                           | Location                                                                                                 |
| -----: | ----: | -----: | --------: | -------------------------------- | -------------------------------------------------------------------------------------------------------- |
|  +7.9% |    +8 | 100.0% | 101 → 109 | `transformFile(FirFile, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` (`java.lang.ClassLoader`)

|  Change | Delta |      % | Samples | Caller                                                                                    | Location             |
| ------: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------- | -------------------- |
| +500.0% |    +5 | 100.0% |   1 → 6 | `defineClass(ClassLoader, Class, String, byte[], ProtectionDomain, boolean, int, Object)` | `java.lang.System$2` |

##### `defineClass(ClassLoader, Class, String, byte[], ProtectionDomain, boolean, int, Object)` (`java.lang.System$2`)

|  Change | Delta |      % | Samples | Caller                         | Location                                             |
| ------: | ----: | -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| +500.0% |    +5 | 100.0% |   1 → 6 | `defineClass(boolean, Object)` | `java.lang.invoke.MethodHandles$Lookup$ClassDefiner` |

##### `defineClass(boolean, Object)` (`java.lang.invoke.MethodHandles$Lookup$ClassDefiner`)

|  Change | Delta |              % | Samples | Caller                 | Location                                       |
| ------: | ----: | -------------: | ------: | ---------------------- | ---------------------------------------------- |
| +300.0% |    +3 | 100.0% → 66.7% |   1 → 4 | `generateInnerClass()` | `java.lang.invoke.InnerClassLambdaMetafactory` |
|     new |    +2 |   0.0% → 33.3% |   0 → 2 | `loadMethod(byte[])`   | `java.lang.invoke.InvokerBytecodeGenerator`    |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

| Change | Delta |              % | Samples | Caller                      | Location                 |
| -----: | ----: | -------------: | ------: | --------------------------- | ------------------------ |
|  +4.4% |    +3 | 100.0% → 98.6% | 68 → 71 | `inflate(byte[], int, int)` | `java.util.zip.Inflater` |
|    new |    +1 |    0.0% → 1.4% |   0 → 1 | `unknown`                   | `<unknown>`              |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

| Change | Delta |              % | Samples | Caller                   | Location                       |
| -----: | ----: | -------------: | ------: | ------------------------ | ------------------------------ |
|    new |    +3 |    0.0% → 4.2% |   0 → 3 | `getBytes()`             | `jdk.internal.loader.Resource` |
|  +1.5% |    +1 | 100.0% → 95.8% | 68 → 69 | `read(byte[], int, int)` | `java.util.zip.ZipInputStream` |

##### `throwParameterIsNullNPE(String)` (`kotlin.jvm.internal.Intrinsics`)

|  Change | Delta |      % | Samples | Caller                                  | Location                         |
| ------: | ----: | -----: | ------: | --------------------------------------- | -------------------------------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `checkNotNullParameter(Object, String)` | `kotlin.jvm.internal.Intrinsics` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

| Change | Delta |              % | Samples | Caller                   | Location                            |
| -----: | ----: | -------------: | ------: | ------------------------ | ----------------------------------- |
|  +2.9% |    +2 | 100.0% → 98.6% | 68 → 70 | `read(byte[], int, int)` | `java.util.zip.InflaterInputStream` |
|    new |    +1 |    0.0% → 1.4% |   0 → 1 | `inflate(byte[])`        | `java.util.zip.Inflater`            |

##### `buildCallSite()` (`java.lang.invoke.InnerClassLambdaMetafactory`)

| Change | Delta |      % | Samples | Caller                                                                                        | Location                             |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------- | ------------------------------------ |
| +33.3% |    +3 | 100.0% |  9 → 12 | `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` | `java.lang.invoke.LambdaMetafactory` |

##### `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` (`java.lang.invoke.LambdaMetafactory`)

|  Change | Delta |             % | Samples | Caller                                                                 | Location                                             |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------- | ---------------------------------------------------- |
|  +22.2% |    +2 | 90.0% → 84.6% |  9 → 11 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000008001230000` |
| +100.0% |    +1 | 10.0% → 15.4% |   1 → 2 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |      % | Samples | Caller                                                       | Location                                  |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------ | ----------------------------------------- |
| +30.0% |    +3 | 100.0% | 10 → 13 | `invoke(Class, MethodHandle, String, Object, Object, Class)` | `java.lang.invoke.BootstrapMethodInvoker` |

##### `invoke(Class, MethodHandle, String, Object, Object, Class)` (`java.lang.invoke.BootstrapMethodInvoker`)

| Change | Delta |      % | Samples | Caller                                                      | Location                    |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------- | --------------------------- |
| +30.0% |    +3 | 100.0% | 10 → 13 | `makeSite(MethodHandle, String, MethodType, Object, Class)` | `java.lang.invoke.CallSite` |

##### `makeSite(MethodHandle, String, MethodType, Object, Class)` (`java.lang.invoke.CallSite`)

| Change | Delta |      % | Samples | Caller                                                                        | Location                               |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------- | -------------------------------------- |
| +30.0% |    +3 | 100.0% | 10 → 13 | `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

| Change | Delta |      % | Samples | Caller                                                           | Location                               |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------- | -------------------------------------- |
| +30.0% |    +3 | 100.0% | 10 → 13 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `linkCallSite(Object, Object, Object, Object, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

|  Change | Delta |            % | Samples | Caller                                       | Location                                                                 |
| ------: | ----: | -----------: | ------: | -------------------------------------------- | ------------------------------------------------------------------------ |
| removed |    -1 | 10.0% → 0.0% |   1 → 0 | `addProxyMethod(ProxyGenerator$ProxyMethod)` | `java.lang.reflect.ProxyGenerator`                                       |
| removed |    -1 | 10.0% → 0.0% |   1 → 0 | `getLazyMessage(String, Object[])`           | `com.intellij.AbstractBundle`                                            |
| removed |    -1 | 10.0% → 0.0% |   1 → 0 | `<init>(Project, CoroutineScope)`            | `com.intellij.psi.impl.JavaPsiFacadeImpl`                                |
| removed |    -1 | 10.0% → 0.0% |   1 → 0 | `<clinit>()`                                 | `com.intellij.psi.impl.ElementBase`                                      |
| removed |    -1 | 10.0% → 0.0% |   1 → 0 | `<init>(FirSession, ScopeSession, Map)`      | `org.jetbrains.kotlin.fir.resolve.transformers.StatusComputationSession` |

##### `linkMethodHandleConstant(byte, Class, String, Object)` (`java.lang.invoke.MethodHandles$Lookup`)

|  Change | Delta |      % | Samples | Caller                                                        | Location                               |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------- | -------------------------------------- |
| +100.0% |    +3 | 100.0% |   3 → 6 | `linkMethodHandleConstant(Class, int, Class, String, Object)` | `java.lang.invoke.MethodHandleNatives` |

##### `loadClass(String)` (`java.lang.ClassLoader`)

|  Change | Delta |            % | Samples | Caller                                                                                       | Location                                                                                   |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)`              | `java.lang.ClassLoader`                                                                    |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `getFileAttributes(JrtPath, LinkOption[])`                                                   | `jdk.internal.jrtfs.JrtFileSystem`                                                         |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `run(String[])`                                                                              | `org.jetbrains.kotlin.preloading.Preloader`                                                |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `configureScriptDefinitions(CompilerConfiguration, ScriptingHostConfiguration, ClassLoader)` | `org.jetbrains.kotlin.scripting.compiler.plugin.ScriptingCompilerConfigurationExtensionKt` |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `<init>(JrtFileSystemProvider, Map)`                                                         | `jdk.internal.jrtfs.JrtFileSystem`                                                         |

##### `itable stub` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                             | Location                                                                       |
| ------: | ----: | -----------: | ------: | ---------------------------------- | ------------------------------------------------------------------------------ |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `forElement(FirElement)`           | `org.jetbrains.kotlin.fir.analysis.checkers.SourceNavigator$Companion`         |
|     new |    +1 | 0.0% → 33.3% |   0 → 1 | `addAll(Collection)`               | `java.util.AbstractCollection`                                                 |
|     new |    +1 | 0.0% → 33.3% |   0 → 1 | `create(Map, FirSession, boolean)` | `org.jetbrains.kotlin.fir.resolve.substitution.ConeSubstitutorByMap$Companion` |

##### `zero_blocks` (`<unknown>`)

| Change | Delta |             % | Samples | Caller        | Location                        |
| -----: | ----: | ------------: | ------: | ------------- | ------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>(int)` | `java.io.ByteArrayOutputStream` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

| Change | Delta |      % |     Samples | Caller                          | Location       |
| -----: | ----: | -----: | ----------: | ------------------------------- | -------------- |
| -26.9% |  -315 | 100.0% | 1,171 → 856 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

| Change | Delta |      % |     Samples | Caller             | Location       |
| -----: | ----: | -----: | ----------: | ------------------ | -------------- |
| -26.7% |  -314 | 100.0% | 1,174 → 860 | `Thread::call_run` | `libjvm.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

| Change | Delta |      % |     Samples | Caller                | Location       |
| -----: | ----: | -----: | ----------: | --------------------- | -------------- |
| -23.6% |  -293 | 100.0% | 1,243 → 950 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

| Change | Delta |      % |     Samples | Caller           | Location                  |
| -----: | ----: | -----: | ----------: | ---------------- | ------------------------- |
| -23.6% |  -293 | 100.0% | 1,243 → 950 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

| Change | Delta |      % |     Samples | Caller         | Location                  |
| -----: | ----: | -----: | ----------: | -------------- | ------------------------- |
| -23.5% |  -292 | 100.0% | 1,244 → 952 | `thread_start` | `libsystem_pthread.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

| Change | Delta |      % |     Samples | Caller                                | Location       |
| -----: | ----: | -----: | ----------: | ------------------------------------- | -------------- |
| -22.1% |  -236 | 100.0% | 1,068 → 832 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                       | Location       |
| -----: | ----: | -----: | --------: | ---------------------------- | -------------- |
| -22.6% |  -168 | 100.0% | 745 → 577 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                                     | Location       |
| -----: | ----: | -----: | --------: | ------------------------------------------ | -------------- |
| -22.4% |  -167 | 100.0% | 746 → 579 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

| Change | Delta |      % |  Samples | Caller                              | Location                  |
| -----: | ----: | -----: | -------: | ----------------------------------- | ------------------------- |
| -85.5% |  -106 | 100.0% | 124 → 18 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `_pthread_mutex_firstfit_lock_slow` (`libsystem_pthread.dylib`)

| Change | Delta |             % | Samples | Caller                                | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------- | -------------- |
| -89.3% |   -67 | 60.5% → 44.4% |  75 → 8 | `ThreadCritical::ThreadCritical`      | `libjvm.dylib` |
| -82.1% |   -32 | 31.5% → 38.9% |  39 → 7 | `Mutex::lock`                         | `libjvm.dylib` |
| -87.5% |    -7 |   6.5% → 5.6% |   8 → 1 | `Mutex::lock_without_safepoint_check` | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                  | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
| -79.6% |   -74 | 87.7% → 67.9% | 93 → 19 | `Monitor::wait`                         | `libjvm.dylib` |
| -30.8% |    -4 | 12.3% → 32.1% |  13 → 9 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

| Change | Delta |      % |  Samples | Caller                  | Location       |
| -----: | ----: | -----: | -------: | ----------------------- | -------------- |
| -75.5% |   -77 | 100.0% | 102 → 25 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller              | Location       |
| -----: | ----: | ------------: | ------: | ------------------- | -------------- |
| -80.6% |   -75 | 98.9% → 94.7% | 93 → 18 | `CompileQueue::get` | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------- | -------------- |
| -76.5% |   -75 | 100.0% | 98 → 23 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller             | Location       |
| -----: | ----: | -----: | --------: | ------------------ | -------------- |
| -19.7% |   -71 | 100.0% | 360 → 289 | `Compile::Compile` | `libjvm.dylib` |

##### `ThreadCritical::ThreadCritical` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                | Location       |
| -----: | ----: | ------------: | ------: | --------------------- | -------------- |
| -89.5% |   -51 | 75.0% → 66.7% |  57 → 6 | `Chunk::operator new` | `libjvm.dylib` |
| -84.2% |   -16 | 25.0% → 33.3% |  19 → 3 | `Chunk::chop`         | `libjvm.dylib` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |      % |   Samples | Caller                                         | Location                                      |
| -----: | ----: | -----: | --------: | ---------------------------------------------- | --------------------------------------------- |
| -15.2% |   -67 | 100.0% | 440 → 373 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |      % |   Samples | Caller                                                   | Location                                      |
| -----: | ----: | -----: | --------: | -------------------------------------------------------- | --------------------------------------------- |
| -15.4% |   -67 | 100.0% | 435 → 368 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |      % |   Samples | Caller                                                 | Location                                                |
| -----: | ----: | -----: | --------: | ------------------------------------------------------ | ------------------------------------------------------- |
| -15.0% |   -66 | 100.0% | 440 → 374 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `Compilation::compile_method` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                     | Location       |
| -----: | ----: | -----: | --------: | -------------------------- | -------------- |
| -17.6% |   -52 | 100.0% | 296 → 244 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                     | Location       |
| -----: | ----: | -----: | --------: | -------------------------- | -------------- |
| -17.2% |   -51 | 100.0% | 296 → 245 | `Compiler::compile_method` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller             | Location       |
| -----: | ----: | -----: | --------: | ------------------ | -------------- |
| -19.5% |   -50 | 100.0% | 257 → 207 | `Compile::Compile` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                        | Location       |
| -----: | ----: | -----: | --------: | ----------------------------- | -------------- |
| -15.7% |   -41 | 100.0% | 261 → 220 | `Compilation::compile_method` | `libjvm.dylib` |

##### `ciBytecodeStream::get_method` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------- | -------------- |
|  -72.7% |   -16 | 36.7% → 23.1% |  22 → 6 | `ciTypeFlow::StateVector::do_invoke`  | `libjvm.dylib` |
|  -42.9% |   -12 | 46.7% → 61.5% | 28 → 16 | `GraphBuilder::invoke`                | `libjvm.dylib` |
|  -80.0% |    -4 |   8.3% → 3.8% |   5 → 1 | `ciMethod::get_method_at_bci`         | `libjvm.dylib` |
| removed |    -1 |   1.7% → 0.0% |   1 → 0 | `BCEscapeAnalyzer::iterate_one_block` | `libjvm.dylib` |
| removed |    -1 |   1.7% → 0.0% |   1 → 0 | `CallDynamicJavaNode::Ideal`          | `libjvm.dylib` |

##### `ciTypeFlow::df_flow_types` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                   | Location       |
| -----: | ----: | -----: | ------: | ------------------------ | -------------- |
| -79.5% |   -31 | 100.0% |  39 → 8 | `ciTypeFlow::flow_types` | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

| Change | Delta |      % |  Samples | Caller                             | Location       |
| -----: | ----: | -----: | -------: | ---------------------------------- | -------------- |
| -27.7% |   -31 | 100.0% | 112 → 81 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `ciMethod::get_flow_analysis` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                        | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------- | -------------- |
| -71.0% |   -22 | 73.8% → 75.0% |  31 → 9 | `InlineTree::ok_to_inline`    | `libjvm.dylib` |
| -72.7% |    -8 | 26.2% → 25.0% |  11 → 3 | `InlineTree::check_can_parse` | `libjvm.dylib` |

##### `ciTypeFlow::flow_types` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                | Location       |
| -----: | ----: | -----: | ------: | --------------------- | -------------- |
| -72.5% |   -29 | 100.0% | 40 → 11 | `ciTypeFlow::do_flow` | `libjvm.dylib` |

##### `ciTypeFlow::do_flow` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                        | Location       |
| -----: | ----: | -----: | ------: | ----------------------------- | -------------- |
| -72.5% |   -29 | 100.0% | 40 → 11 | `ciMethod::get_flow_analysis` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller              | Location       |
| -----: | ----: | -----: | --------: | ------------------- | -------------- |
| -15.9% |   -28 | 100.0% | 176 → 148 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|  -51.7% |   -15 | 52.7% → 51.9% | 29 → 14 | `ciBytecodeStream::get_method`   | `libjvm.dylib` |
|  -62.5% |    -5 | 14.5% → 11.1% |   8 → 3 | `ciEnv::get_method_from_handle`  | `libjvm.dylib` |
|  -80.0% |    -4 |   9.1% → 3.7% |   5 → 1 | `ciMethod::ensure_method_data`   | `libjvm.dylib` |
| removed |    -3 |   5.5% → 0.0% |   3 → 0 | `ciEnv::get_klass_by_index_impl` | `libjvm.dylib` |
|  -75.0% |    -3 |   7.3% → 3.7% |   4 → 1 | `ciMethod::resolve_invoke`       | `libjvm.dylib` |

##### `ciTypeFlow::StateVector::apply_one_bytecode` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                   | Location       |
| -----: | ----: | -----: | ------: | ------------------------ | -------------- |
| -82.4% |   -28 | 100.0% |  34 → 6 | `ciTypeFlow::flow_block` | `libjvm.dylib` |

##### `ciTypeFlow::flow_block` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Caller                        | Location       |
| -----: | ----: | -------------: | ------: | ----------------------------- | -------------- |
| -77.8% |   -28 | 100.0% → 88.9% |  36 → 8 | `ciTypeFlow::df_flow_types`   | `libjvm.dylib` |
|    new |    +1 |   0.0% → 11.1% |   0 → 1 | `ciTypeFlow::clone_loop_head` | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                                     | Location       |
| -----: | ----: | -----: | --------: | ------------------------------------------ | -------------- |
| -18.6% |   -56 | 100.0% | 301 → 245 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller         | Location       |
| ------: | ----: | -------------: | ------: | -------------- | -------------- |
|  -83.6% |   -46 | 94.8% → 100.0% |  55 → 9 | `Arena::grow`  | `libjvm.dylib` |
| removed |    -3 |    5.2% → 0.0% |   3 → 0 | `Arena::Arena` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                               | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------- | -------------- |
| removed |    -8 | 14.5% → 0.0% |   8 → 0 | `Matcher::Label_Root`                                | `libjvm.dylib` |
| removed |    -8 | 14.5% → 0.0% |   8 → 0 | `Arena::Arealloc`                                    | `libjvm.dylib` |
| removed |    -3 |  5.5% → 0.0% |   3 → 0 | `PhaseOutput::BuildOopMaps`                          | `libjvm.dylib` |
| removed |    -3 |  5.5% → 0.0% |   3 → 0 | `ciObjectFactory::ciObjectFactory`                   | `libjvm.dylib` |
| removed |    -3 |  5.5% → 0.0% |   3 → 0 | `DebugInformationRecorder::DebugInformationRecorder` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

| Change | Delta |      % |  Samples | Caller                 | Location       |
| -----: | ----: | -----: | -------: | ---------------------- | -------------- |
| -37.7% |   -40 | 100.0% | 106 → 66 | `Parse::do_all_blocks` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

| Change | Delta |      % |  Samples | Caller         | Location       |
| -----: | ----: | -----: | -------: | -------------- | -------------- |
| -37.7% |   -40 | 100.0% | 106 → 66 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                | Location       |
| -----: | ----: | -----: | ------: | --------------------- | -------------- |
| -41.7% |   -40 | 100.0% | 96 → 56 | `Parse::do_one_block` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

| Change | Delta |      % |  Samples | Caller                     | Location       |
| -----: | ----: | -----: | -------: | -------------------------- | -------------- |
| -36.8% |   -39 | 100.0% | 106 → 67 | `ParseGenerator::generate` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

| Change | Delta |              % |  Samples | Caller                             | Location       |
| -----: | ----: | -------------: | -------: | ---------------------------------- | -------------- |
| -37.7% |   -40 | 100.0% → 98.5% | 106 → 66 | `Compile::Compile`                 | `libjvm.dylib` |
| -44.6% |   -25 |  52.8% → 46.3% |  56 → 31 | `Parse::do_call`                   | `libjvm.dylib` |
| -30.9% |   -17 |  51.9% → 56.7% |  55 → 38 | `PredictedCallGenerator::generate` | `libjvm.dylib` |

##### `Mutex::lock` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                    | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------------- | -------------- |
|  -86.4% |   -19 | 55.0% → 42.9% |  22 → 3 | `ciMethod::ciMethod`                      | `libjvm.dylib` |
|  -80.0% |    -4 | 12.5% → 14.3% |   5 → 1 | `SystemDictionary::add_loader_constraint` | `libjvm.dylib` |
|  -80.0% |    -4 | 12.5% → 14.3% |   5 → 1 | `ciEnv::register_method`                  | `libjvm.dylib` |
| removed |    -3 |   7.5% → 0.0% |   3 → 0 | `ciMethod::find_monomorphic_target`       | `libjvm.dylib` |
| removed |    -2 |   5.0% → 0.0% |   2 → 0 | `CompileBroker::compile_method_base`      | `libjvm.dylib` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change | Delta |      % |   Samples | Caller                                                                                             | Location                                                |
| -----: | ----: | -----: | --------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| -15.0% |   -66 | 100.0% | 440 → 374 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

| Change | Delta |      % |   Samples | Caller           | Location                                    |
| -----: | ----: | -----: | --------: | ---------------- | ------------------------------------------- |
| -12.5% |   -65 | 100.0% | 521 → 456 | `main(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change | Delta |      % |   Samples | Caller                          | Location                                                |
| -----: | ----: | -----: | --------: | ------------------------------- | ------------------------------------------------------- |
| -14.8% |   -65 | 100.0% | 440 → 375 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change | Delta |      % |   Samples | Caller                                                                 | Location                                     |
| -----: | ----: | -----: | --------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| -15.3% |   -65 | 100.0% | 426 → 361 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change | Delta |      % |   Samples | Caller                                                          | Location                                      |
| -----: | ----: | -----: | --------: | --------------------------------------------------------------- | --------------------------------------------- |
| -15.3% |   -65 | 100.0% | 426 → 361 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |      % |   Samples | Caller                                                      | Location                                      |
| -----: | ----: | -----: | --------: | ----------------------------------------------------------- | --------------------------------------------- |
| -15.3% |   -65 | 100.0% | 426 → 361 | `exec(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change | Delta |      % |   Samples | Caller                                                                                                                                        | Location                                                |
| -----: | ----: | -----: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| -15.3% |   -65 | 100.0% | 424 → 359 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change | Delta |      % |   Samples | Caller                                                         | Location                                                |
| -----: | ----: | -----: | --------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| -15.3% |   -65 | 100.0% | 424 → 359 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change | Delta |      % |   Samples | Caller                                                                | Location                                     |
| -----: | ----: | -----: | --------: | --------------------------------------------------------------------- | -------------------------------------------- |
| -15.3% |   -65 | 100.0% | 424 → 359 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `executePhase(JvmFir2IrPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`)

| Change | Delta |      % |  Samples | Caller                           | Location                                                        |
| -----: | ----: | -----: | -------: | -------------------------------- | --------------------------------------------------------------- |
| -47.1% |   -65 | 100.0% | 138 → 73 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase` |

##### `executePhase(PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`)

| Change | Delta |      % |  Samples | Caller                                         | Location                                          |
| -----: | ----: | -----: | -------: | ---------------------------------------------- | ------------------------------------------------- |
| -47.1% |   -65 | 100.0% | 138 → 73 | `phaseBody(PipelineContext, PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

| Change | Delta |      % |   Samples | Caller           | Location                                     |
| -----: | ----: | -----: | --------: | ---------------- | -------------------------------------------- |
| -14.5% |   -64 | 100.0% | 441 → 377 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change | Delta |      % |   Samples | Caller                         | Location                                             |
| -----: | ----: | -----: | --------: | ------------------------------ | ---------------------------------------------------- |
| -14.5% |   -64 | 100.0% | 441 → 377 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000008001008000` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change | Delta |      % |   Samples | Caller           | Location                                               |
| -----: | ----: | -----: | --------: | ---------------- | ------------------------------------------------------ |
| -14.5% |   -64 | 100.0% | 440 → 376 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

| Change | Delta |      % |   Samples | Caller                              | Location                                          |
| -----: | ----: | -----: | --------: | ----------------------------------- | ------------------------------------------------- |
| -15.2% |   -64 | 100.0% | 420 → 356 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

| Change | Delta |      % |   Samples | Caller                                                     | Location                                                |
| -----: | ----: | -----: | --------: | ---------------------------------------------------------- | ------------------------------------------------------- |
| -15.2% |   -64 | 100.0% | 420 → 356 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|  Change | Delta |           % |   Samples | Caller                                                                            | Location                                                                                  |
| ------: | ----: | ----------: | --------: | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
|  -14.7% |   -65 |      100.0% | 442 → 377 | `run(String[])`                                                                   | `org.jetbrains.kotlin.preloading.Preloader`                                               |
| removed |    -1 | 0.2% → 0.0% |     1 → 0 | `rtVersion()`                                                                     | `com.intellij.util.lang.JavaVersion`                                                      |
|     new |    +1 | 0.0% → 0.3% |     0 → 1 | `parsePreprocessedCommandLineArguments(List, CommonToolArguments, Lazy, boolean)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt`                   |
|     new |    +1 | 0.0% → 0.3% |     0 → 1 | `loadGetRecordComponents(Class)`                                                  | `kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure.Java16SealedRecordLoader` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008001008000`)

| Change | Delta |      % |   Samples | Caller                           | Location                                            |
| -----: | ----: | -----: | --------: | -------------------------------- | --------------------------------------------------- |
| -14.5% |   -64 | 100.0% | 441 → 377 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000008001009400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000008001009400`)

| Change | Delta |      % |   Samples | Caller                                           | Location                           |
| -----: | ----: | -----: | --------: | ------------------------------------------------ | ---------------------------------- |
| -14.5% |   -64 | 100.0% | 441 → 377 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |      % |   Samples | Caller                         | Location                                          |
| -----: | ----: | -----: | --------: | ------------------------------ | ------------------------------------------------- |
| -14.5% |   -64 | 100.0% | 441 → 377 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % |   Samples | Caller                     | Location                                          |
| -----: | ----: | -----: | --------: | -------------------------- | ------------------------------------------------- |
| -14.5% |   -64 | 100.0% | 441 → 377 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % |   Samples | Caller                     | Location                   |
| -----: | ----: | -----: | --------: | -------------------------- | -------------------------- |
| -14.5% |   -64 | 100.0% | 441 → 377 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|  Change | Delta |             % | Samples | Caller                                                             | Location                                                              |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------ | --------------------------------------------------------------------- |
|  -13.7% |    -7 | 91.1% → 86.3% | 51 → 44 | `resumeTask(TowerResolveManager$SuspendedResolverTask)`            | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`    |
|  -16.7% |    -5 | 53.6% → 49.0% | 30 → 25 | `processCandidate(Candidate, ResolutionContext, boolean, boolean)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner` |
| removed |    -1 |   1.8% → 0.0% |   1 → 0 | `resumeCancellableWith(Continuation, Object, Function1)`           | `kotlinx.coroutines.internal.DispatchedContinuationKt`                |
| removed |    -1 |   1.8% → 0.0% |   1 → 0 | `hasNext()`                                                        | `kotlin.sequences.SequenceBuilderIterator`                            |

##### `areEqual(Object, Object)` (`kotlin.jvm.internal.Intrinsics`)

|  Change | Delta |            % | Samples | Caller                      | Location                                                           |
| ------: | ----: | -----------: | ------: | --------------------------- | ------------------------------------------------------------------ |
| removed |    -2 | 40.0% → 0.0% |   2 → 0 | `equals(Object)`            | `org.jetbrains.kotlin.fir.symbols.impl.ConeClassLikeLookupTagImpl` |
| removed |    -2 | 40.0% → 0.0% |   2 → 0 | `equals(Object)`            | `org.jetbrains.kotlin.fir.types.ConeLookupTagBasedType`            |
| removed |    -2 | 40.0% → 0.0% |   2 → 0 | `indexOf(Object[], Object)` | `kotlin.collections.ArraysKt___ArraysKt`                           |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `equals(Object)`            | `org.jetbrains.kotlin.name.FqNameUnsafe`                           |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `equals(Object)`            | `org.jetbrains.kotlin.name.FqName`                                 |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller                | Location            |
| -----: | ----: | -----: | ------: | --------------------- | ------------------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `put(Object, Object)` | `java.util.HashMap` |

##### `put(Object, Object)` (`java.util.HashMap`)

|  Change | Delta |              % | Samples | Caller                                                  | Location                                               |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------- | ------------------------------------------------------ |
| removed |    -2 |   50.0% → 0.0% |   2 → 0 | `add(Object)`                                           | `java.util.HashSet`                                    |
|  -50.0% |    -1 | 50.0% → 100.0% |   2 → 1 | `loadAllClassesFromJars(Collection, int, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `descriptor_delegate$lambda$0(KClassImpl)` (`kotlin.reflect.jvm.internal.KClassImpl$Data`)

| Change | Delta |      % | Samples | Caller                                         | Location                                      |
| -----: | ----: | -----: | ------: | ---------------------------------------------- | --------------------------------------------- |
| -50.0% |    -3 | 100.0% |   6 → 3 | `accessor$KClassImpl$Data$lambda1(KClassImpl)` | `kotlin.reflect.jvm.internal.KClassImpl$Data` |

##### `accessor$KClassImpl$Data$lambda1(KClassImpl)` (`kotlin.reflect.jvm.internal.KClassImpl$Data`)

| Change | Delta |      % | Samples | Caller     | Location                                                |
| -----: | ----: | -----: | ------: | ---------- | ------------------------------------------------------- |
| -50.0% |    -3 | 100.0% |   6 → 3 | `invoke()` | `kotlin.reflect.jvm.internal.KClassImpl$Data$$Lambda$1` |

##### `invoke()` (`kotlin.reflect.jvm.internal.KClassImpl$Data$$Lambda$1`)

| Change | Delta |      % | Samples | Caller     | Location                                                    |
| -----: | ----: | -----: | ------: | ---------- | ----------------------------------------------------------- |
| -50.0% |    -3 | 100.0% |   6 → 3 | `invoke()` | `kotlin.reflect.jvm.internal.ReflectProperties$LazySoftVal` |

##### `getDescriptor()` (`kotlin.reflect.jvm.internal.KClassImpl$Data`)

| Change | Delta |      % | Samples | Caller            | Location                                 |
| -----: | ----: | -----: | ------: | ----------------- | ---------------------------------------- |
| -50.0% |    -3 | 100.0% |   6 → 3 | `getDescriptor()` | `kotlin.reflect.jvm.internal.KClassImpl` |

##### `getDescriptor()` (`kotlin.reflect.jvm.internal.KClassImpl`)

| Change | Delta |      % | Samples | Caller                               | Location                                 |
| -----: | ----: | -----: | ------: | ------------------------------------ | ---------------------------------------- |
| -50.0% |    -3 | 100.0% |   6 → 3 | `getMemberScope$kotlin_reflection()` | `kotlin.reflect.jvm.internal.KClassImpl` |

##### `getValue()` (`kotlin.SafePublicationLazyImpl`)

|  Change | Delta |             % | Samples | Caller                | Location                                                                        |
| ------: | ----: | ------------: | ------: | --------------------- | ------------------------------------------------------------------------------- |
|  -75.0% |    -3 |  23.5% → 7.1% |   4 → 1 | `getAnnotationInfo()` | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer` |
|  -22.2% |    -2 | 52.9% → 50.0% |   9 → 7 | `getJavaField()`      | `kotlin.reflect.jvm.internal.DescriptorKProperty`                               |
|     new |    +2 |  0.0% → 14.3% |   0 → 2 | `getImplicitScope()`  | `org.jetbrains.kotlin.fir.resolve.calls.ImplicitReceiverValue`                  |
|     new |    +2 |  0.0% → 14.3% |   0 → 2 | `getFirAnnotations()` | `org.jetbrains.kotlin.fir.java.enhancement.FirLazyJavaAnnotationList`           |
| +100.0% |    +1 |  5.9% → 14.3% |   1 → 2 | `getDeclarations()`   | `org.jetbrains.kotlin.fir.java.FirLazyJavaDeclarationList`                      |

##### `equals(Object)` (`java.lang.String`)

|  Change | Delta |            % | Samples | Caller                     | Location                         |
| ------: | ----: | -----------: | ------: | -------------------------- | -------------------------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `areEqual(Object, Object)` | `kotlin.jvm.internal.Intrinsics` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `equals(Object)`           | `org.jetbrains.kotlin.name.Name` |

##### `allocateInstance(Class)` (`jdk.internal.misc.Unsafe`)

|  Change | Delta |             % | Samples | Caller                     | Location                              |
| ------: | ----: | ------------: | ------: | -------------------------- | ------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `allocateInstance(Object)` | `java.lang.invoke.DirectMethodHandle` |

##### `updateBytes(int, byte[], int, int)` (`java.util.zip.CRC32`)

| Change | Delta |      % | Samples | Caller                     | Location              |
| -----: | ----: | -----: | ------: | -------------------------- | --------------------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `update(byte[], int, int)` | `java.util.zip.CRC32` |

##### `update(byte[], int, int)` (`java.util.zip.CRC32`)

| Change | Delta |      % | Samples | Caller                   | Location                       |
| -----: | ----: | -----: | ------: | ------------------------ | ------------------------------ |
| -50.0% |    -2 | 100.0% |   4 → 2 | `read(byte[], int, int)` | `java.util.zip.ZipInputStream` |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                                     | Location                                                                                  |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `transform(FirTransformer, Object)`                                        | `org.jetbrains.kotlin.fir.expressions.FirAnnotationCall`                                  |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `createSubstitutionForScope(List, ConeClassLikeType, FirSession)`          | `org.jetbrains.kotlin.fir.resolve.SupertypeUtilsKt`                                       |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `check(CheckerContext, DiagnosticReporter, FirStatement)`                  | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirArrayOfNothingQualifierChecker` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `traverseToFixedPoint(ControlFlowGraph, PathAwareControlFlowGraphVisitor)` | `org.jetbrains.kotlin.fir.analysis.cfa.util.CfgTraverserKt`                               |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `<init>(boolean, boolean)`                                                 | `org.jetbrains.kotlin.fir.backend.generators.CallAndReferenceGenerator$ReceiverInfo`      |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                                                                          | Location                                                                                  |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `invoke(File)`                                                                                                  | `org.jetbrains.kotlin.cli.common.GroupedKtSourcesKt$collectSources$1`                     |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `calculateClassId(FqName, FqName)`                                                                              | `org.jetbrains.kotlin.name.CallableId$Companion`                                          |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `expectedConeType$constructLiteralType(FirSession, ClassId, boolean)`                                           | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveUtilsKt`           |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `computeTypeArguments(FirQualifiedAccessExpression, Candidate)`                                                 | `org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `coerceInlineClasses(Type, KotlinTypeMarker, Type, KotlinTypeMarker, InstructionAdapter, KotlinTypeMapperBase)` | `org.jetbrains.kotlin.codegen.StackValue`                                                 |

##### `I2C/C2I adapters` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                  | Location                                                                  |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `readMethod(ClassVisitor, Context, int)`                                                | `org.jetbrains.org.objectweb.asm.ClassReader`                             |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `multiplexWithoutUseSiteTarget(FirAnnotation, FirDeclaration, LanguageVersionSettings)` | `org.jetbrains.kotlin.fir.resolve.transformers.FirTypeResolveTransformer` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `balanceWhiteSpaces()`                                                                  | `com.intellij.lang.impl.PsiBuilderImpl`                                   |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `WorkerThread::run` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                            | Location                 |
| ------: | ----: | ------------: | ------: | --------------------------------- | ------------------------ |
|  +80.0% |    +8 | 19.2% → 23.7% | 10 → 18 | `G1RebuildRSAndScrubTask::work`   | `libjvm.dylib`           |
| +800.0% |    +8 |  1.9% → 11.8% |   1 → 9 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
|     new |    +7 |   0.0% → 9.2% |   0 → 7 | `G1ParallelCleaningTask::work`    | `libjvm.dylib`           |
|  +33.3% |    +4 | 23.1% → 21.1% | 12 → 16 | `G1CMConcurrentMarkingTask::work` | `libjvm.dylib`           |
|  -11.1% |    -3 | 51.9% → 31.6% | 27 → 24 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|  Change | Delta |             % | Samples | Callee                             | Location                                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------------------------------------------------- |
|  +28.3% |   +17 | 95.2% → 92.8% | 60 → 77 | `findClass(String)`                | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
| +100.0% |    +2 |   3.2% → 4.8% |   2 → 4 | `findBootstrapClassOrNull(String)` | `java.lang.ClassLoader`                                  |
| +200.0% |    +2 |   1.6% → 3.6% |   1 → 3 | `findClass(String)`                | `java.net.URLClassLoader`                                |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

| Change | Delta |             % | Samples | Callee                      | Location                   |
| -----: | ----: | ------------: | ------: | --------------------------- | -------------------------- |
| +27.3% |   +15 | 98.2% → 93.3% | 55 → 70 | `JVM_DefineClassWithSource` | `libjvm.dylib`             |
|    new |    +3 |   0.0% → 4.0% |   0 → 3 | `_platform_memmove`         | `libsystem_platform.dylib` |
|    new |    +1 |   0.0% → 1.3% |   0 → 1 | `jni_GetStringUTFRegion`    | `libjvm.dylib`             |
|    new |    +1 |   0.0% → 1.3% |   0 → 1 | `free_small`                | `libsystem_malloc.dylib`   |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|  Change | Delta |             % | Samples | Callee                                    | Location                                                 |
| ------: | ----: | ------------: | ------: | ----------------------------------------- | -------------------------------------------------------- |
|  +33.9% |   +19 | 98.2% → 98.7% | 56 → 75 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`                                          |
|  +10.0% |    +1 | 17.5% → 14.5% | 10 → 11 | `loadClass(String)`                       | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
| removed |    -1 |   1.8% → 0.0% |   1 → 0 | `loadClass(String)`                       | `java.lang.ClassLoader`                                  |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

|  Change | Delta |             % | Samples | Callee                                                                          | Location                |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
|  +33.3% |   +19 | 96.6% → 97.4% | 57 → 76 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |
|  -50.0% |    -1 |   3.4% → 1.3% |   2 → 1 | `postDefineClass(Class, ProtectionDomain)`                                      | `java.lang.ClassLoader` |
| removed |    -1 |   1.7% → 0.0% |   1 → 0 | `preDefineClass(String, ProtectionDomain)`                                      | `java.lang.ClassLoader` |

##### `defineClass(String, byte[], int, int)` (`java.lang.ClassLoader`)

| Change | Delta |      % | Samples | Callee                                                    | Location                |
| -----: | ----: | -----: | ------: | --------------------------------------------------------- | ----------------------- |
| +32.8% |   +19 | 100.0% | 58 → 77 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `loadClass(String, boolean)` (`org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`)

| Change | Delta |           % | Samples | Callee                       | Location                                                 |
| -----: | ----: | ----------: | ------: | ---------------------------- | -------------------------------------------------------- |
| +29.0% |   +18 |      100.0% | 62 → 80 | `loadClass(String, boolean)` | `java.lang.ClassLoader`                                  |
| -50.0% |    -1 | 3.2% → 1.3% |   2 → 1 | `loadClass(String)`          | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `loadClass(String)` (`org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`)

| Change | Delta |      % | Samples | Callee                       | Location                                                 |
| -----: | ----: | -----: | ------: | ---------------------------- | -------------------------------------------------------- |
| +29.0% |   +18 | 100.0% | 62 → 80 | `loadClass(String, boolean)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `findClass(String)` (`org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`)

|  Change | Delta |              % | Samples | Callee                                  | Location                |
| ------: | ----: | -------------: | ------: | --------------------------------------- | ----------------------- |
|  +32.8% |   +19 | 96.7% → 100.0% | 58 → 77 | `defineClass(String, byte[], int, int)` | `java.lang.ClassLoader` |
| removed |    -2 |    3.3% → 0.0% |   2 → 0 | `remove(Object)`                        | `java.util.HashMap`     |

##### `KlassFactory::create_from_stream` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                   | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | -------------- |
|  +21.6% |   +11 | 94.4% → 88.6% | 51 → 62 | `ClassFileParser::ClassFileParser`       | `libjvm.dylib` |
| +166.7% |    +5 |  5.6% → 11.4% |   3 → 8 | `ClassFileParser::create_instance_klass` | `libjvm.dylib` |

##### `jvm_define_class_common` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Callee                                        | Location       |
| -----: | ----: | -------------: | ------: | --------------------------------------------- | -------------- |
| +25.5% |   +14 | 100.0% → 98.6% | 55 → 69 | `SystemDictionary::resolve_class_from_stream` | `libjvm.dylib` |
|    new |    +1 |    0.0% → 1.4% |   0 → 1 | `SymbolTable::new_symbol`                     | `libjvm.dylib` |

##### `JVM_DefineClassWithSource` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                    | Location       |
| -----: | ----: | -----: | ------: | ------------------------- | -------------- |
| +27.3% |   +15 | 100.0% | 55 → 70 | `jvm_define_class_common` | `libjvm.dylib` |

##### `SystemDictionary::resolve_class_from_stream` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                    | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------------- | -------------- |
|  +22.6% |   +12 | 96.4% → 94.2% | 53 → 65 | `KlassFactory::create_from_stream`        | `libjvm.dylib` |
| +100.0% |    +2 |   3.6% → 5.8% |   2 → 4 | `SystemDictionary::define_instance_class` | `libjvm.dylib` |

##### `G1ParEvacuateFollowersClosure::do_void` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                             | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | -------------- |
| +500.0% |   +10 | 66.7% → 75.0% |  2 → 12 | `G1ParScanThreadState::steal_and_trim_queue`       | `libjvm.dylib` |
|     new |    +3 |  0.0% → 18.8% |   0 → 3 | `G1ParEvacuateFollowersClosure::offer_termination` | `libjvm.dylib` |

##### `G1EvacuateRegionsTask::evacuate_live_objects` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Callee                                   | Location       |
| ------: | ----: | -----: | ------: | ---------------------------------------- | -------------- |
| +433.3% |   +13 | 100.0% |  3 → 16 | `G1ParEvacuateFollowersClosure::do_void` | `libjvm.dylib` |

##### `ClassFileParser::parse_constant_pool` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                           | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | -------------- |
|  +31.3% |   +10 | 91.4% → 89.4% | 32 → 42 | `ClassFileParser::parse_constant_pool_entries`   | `libjvm.dylib` |
|     new |    +2 |   0.0% → 4.3% |   0 → 2 | `ClassFileParser::verify_legal_method_signature` | `libjvm.dylib` |
| removed |    -1 |   2.9% → 0.0% |   1 → 0 | `ClassFileParser::verify_legal_method_name`      | `libjvm.dylib` |
|     new |    +1 |   0.0% → 2.1% |   0 → 1 | `ClassFileParser::skip_over_field_signature`     | `libjvm.dylib` |
|     new |    +1 |   0.0% → 2.1% |   0 → 1 | `ClassFileParser::verify_legal_class_name`       | `libjvm.dylib` |

##### `ClassFileParser::ClassFileParser` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                        | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | -------------- |
|  +14.3% |    +7 | 96.1% → 90.3% | 49 → 56 | `ClassFileParser::parse_stream`               | `libjvm.dylib` |
| +200.0% |    +4 |   3.9% → 9.7% |   2 → 6 | `ClassFileParser::post_process_parsed_stream` | `libjvm.dylib` |

##### `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`)

| Change | Delta |             % |   Samples | Callee                           | Location                                                                                                        |
| -----: | ----: | ------------: | --------: | -------------------------------- | --------------------------------------------------------------------------------------------------------------- |
|  +7.9% |    +8 | 79.5% → 79.0% | 101 → 109 | `transformFile(FirFile, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`        |
| +12.5% |    +3 | 18.9% → 19.6% |   24 → 27 | `transformFile(FirFile, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.contracts.FirContractResolveTransformerAdapter`                  |
|  +4.1% |    +3 | 58.3% → 55.8% |   74 → 77 | `transformFile(FirFile, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirBodyResolveTransformerAdapter`                   |
|  +7.7% |    +1 | 10.2% → 10.1% |   13 → 14 | `transformFile(FirFile, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`          |
|  +7.7% |    +1 | 10.2% → 10.1% |   13 → 14 | `transformFile(FirFile, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirCompilerRequiredAnnotationsResolveTransformer` |

##### `G1ParScanThreadState::steal_and_trim_queue` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                                                                                    | Location       |
| ------: | ----: | -------------: | ------: | --------------------------------------------------------------------------------------------------------- | -------------- |
| +350.0% |    +7 | 100.0% → 75.0% |   2 → 9 | `G1ParScanThreadState::trim_queue_to_threshold`                                                           | `libjvm.dylib` |
|     new |    +3 |   0.0% → 25.0% |   0 → 3 | `GenericTaskQueueSet<OverflowTaskQueue<ScannerTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>::steal_best_of_2` | `libjvm.dylib` |

##### `ClassFileParser::parse_constant_pool_entries` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                     | Location       |
| ------: | ----: | ------------: | ------: | -------------------------- | -------------- |
|  +28.6% |    +6 | 65.6% → 64.3% | 21 → 27 | `SymbolTable::lookup_only` | `libjvm.dylib` |
| +133.3% |    +4 |  9.4% → 16.7% |   3 → 7 | `SymbolTable::do_lookup`   | `libjvm.dylib` |
|  -60.0% |    -3 |  15.6% → 4.8% |   5 → 2 | `UTF8::is_legal_utf8`      | `libjvm.dylib` |

##### `LinearScan::build_intervals` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                  | Location       |
| ------: | ----: | -----------: | ------: | ----------------------- | -------------- |
|     new |    +3 | 0.0% → 16.7% |   0 → 3 | `Interval::add_use_pos` | `libjvm.dylib` |
|  -66.7% |    -2 | 30.0% → 5.6% |   3 → 1 | `LinearScan::add_use`   | `libjvm.dylib` |
| removed |    -2 | 20.0% → 0.0% |   2 → 0 | `Arena::grow`           | `libjvm.dylib` |
|     new |    +2 | 0.0% → 11.1% |   0 → 2 | `LinearScan::add_temp`  | `libjvm.dylib` |
|     new |    +1 |  0.0% → 5.6% |   0 → 1 | `LinearScan::add_def`   | `libjvm.dylib` |

##### `LIRGenerator::state_for` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                            | Location       |
| -----: | ----: | -----------: | ------: | --------------------------------- | -------------- |
|    new |    +3 | 0.0% → 42.9% |   0 → 3 | `MethodLiveness::get_liveness_at` | `libjvm.dylib` |

##### `PhiNode::Ideal` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                              | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------- | -------------- |
| removed |    -2 |  33.3% → 0.0% |   2 → 0 | `PhiNode::is_data_loop`             | `libjvm.dylib` |
| +200.0% |    +2 | 16.7% → 25.0% |   1 → 3 | `RegionNode::is_unreachable_region` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 8.3% |   0 → 1 | `PhiNode::wait_for_region_igvn`     | `libjvm.dylib` |

##### `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                               | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------------ | -------------- |
|    new |    +2 | 0.0% → 28.6% |   0 → 2 | `IndexSetIterator::advance_and_next` | `libjvm.dylib` |

##### `MemNode::all_controls_dominate` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Callee            | Location       |
| ------: | ----: | -----: | ------: | ----------------- | -------------- |
| +125.0% |    +5 | 100.0% |   4 → 9 | `Node::dominates` | `libjvm.dylib` |

##### `PhaseIFG::effective_degree` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                               | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
| +300.0% |    +3 | 33.3% → 50.0% |   1 → 4 | `IndexSetIterator::advance_and_next` | `libjvm.dylib` |

##### `PhaseIFG::Compute_Effective_Degree` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Callee                       | Location       |
| ------: | ----: | -----: | ------: | ---------------------------- | -------------- |
| +166.7% |    +5 | 100.0% |   3 → 8 | `PhaseIFG::effective_degree` | `libjvm.dylib` |

##### `TypePtr::xmeet` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Callee                      | Location       |
| -----: | ----: | -------------: | ------: | --------------------------- | -------------- |
| +66.7% |    +2 | 100.0% → 62.5% |   3 → 5 | `TypeInstPtr::xmeet_helper` | `libjvm.dylib` |
|    new |    +2 |   0.0% → 25.0% |   0 → 2 | `TypeAryPtr::xmeet_helper`  | `libjvm.dylib` |
|    new |    +1 |   0.0% → 12.5% |   0 → 1 | `TypePtr::speculative`      | `libjvm.dylib` |

##### `PhaseCoalesce::coalesce_driver` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------------- | -------------- |
| +150.0% |    +3 | 100.0% → 71.4% |   2 → 5 | `PhaseConservativeCoalesce::coalesce` | `libjvm.dylib` |
|     new |    +2 |   0.0% → 28.6% |   0 → 2 | `PhaseAggressiveCoalesce::coalesce`   | `libjvm.dylib` |

##### `Node::Node` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee            | Location       |
| ------: | ----: | -----------: | ------: | ----------------- | -------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `Arena::Arealloc` | `libjvm.dylib` |

##### `Node_Backward_Iterator::next` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                              | Location       |
| -----: | ----: | -----------: | ------: | ----------------------------------- | -------------- |
|    new |    +1 | 0.0% → 11.1% |   0 → 1 | `Node::needs_anti_dependence_check` | `libjvm.dylib` |

##### `LIR_Assembler::emit_lir_list` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                              | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------- | -------------- |
| removed |    -4 |  11.8% → 0.0% |   4 → 0 | `LIR_Assembler::mem2reg`            | `libjvm.dylib` |
| +100.0% |    +3 |  8.8% → 15.8% |   3 → 6 | `LIR_OpTypeCheck::emit_code`        | `libjvm.dylib` |
|     new |    +3 |   0.0% → 7.9% |   0 → 3 | `LIR_Assembler::logic_op`           | `libjvm.dylib` |
|  +25.0% |    +2 | 23.5% → 26.3% |  8 → 10 | `LIR_Assembler::process_debug_info` | `libjvm.dylib` |
|  -66.7% |    -2 |   8.8% → 2.6% |   3 → 1 | `LIR_Assembler::const2reg`          | `libjvm.dylib` |

##### `LIR_Assembler::emit_code` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                              | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------------- | -------------- |
| +11.8% |    +4 | 97.1% → 97.4% | 34 → 38 | `LIR_Assembler::emit_lir_list`      | `libjvm.dylib` |
|    new |    +1 |   0.0% → 2.6% |   0 → 1 | `LIR_Assembler::process_debug_info` | `libjvm.dylib` |

##### `Compilation::emit_code_body` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                          | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------- | -------------- |
| +14.7% |    +5 | 73.9% → 78.0% | 34 → 39 | `LIR_Assembler::emit_code`      | `libjvm.dylib` |
|  -8.3% |    -1 | 26.1% → 22.0% | 12 → 11 | `Compilation::emit_code_epilog` | `libjvm.dylib` |

##### `GraphBuilder::access_field` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                        | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------- | -------------- |
|  +60.0% |    +3 | 83.3% → 80.0% |   5 → 8 | `ciBytecodeStream::get_field` | `libjvm.dylib` |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `LoadField::visit`            | `libjvm.dylib` |
|     new |    +1 |  0.0% → 10.0% |   0 → 1 | `ciField::constant_value`     | `libjvm.dylib` |

##### `PhaseIdealLoop::split_if_with_blocks` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                      | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------- | -------------- |
|  -22.2% |    -2 | 52.9% → 33.3% |   9 → 7 | `PhaseIdealLoop::split_if_with_blocks_post` | `libjvm.dylib` |
|     new |    +2 |   0.0% → 9.5% |   0 → 2 | `BoolNode::Opcode`                          | `libjvm.dylib` |
| +100.0% |    +1 |   5.9% → 9.5% |   1 → 2 | `PhaseIdealLoop::try_move_store_after_loop` | `libjvm.dylib` |
|  +50.0% |    +1 | 11.8% → 14.3% |   2 → 3 | `PhaseIdealLoop::split_if_with_blocks_pre`  | `libjvm.dylib` |
| +100.0% |    +1 |   5.9% → 9.5% |   1 → 2 | `PhaseIdealLoop::do_split_if`               | `libjvm.dylib` |

##### `Matcher::specialize_generic_vector_operands` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
| +100.0% |    +1 | 33.3% → 28.6% |   1 → 2 | `Compile::identify_useful_nodes` | `libjvm.dylib` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `iRegINoSpOper::opcode`          | `libjvm.dylib` |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `iRegIOper::opcode`              | `libjvm.dylib` |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `immNOper::opcode`               | `libjvm.dylib` |

##### `InitializeNode::detect_init_independence` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Callee                           | Location       |
| ------: | ----: | -----: | ------: | -------------------------------- | -------------- |
| +100.0% |    +4 | 100.0% |   4 → 8 | `MemNode::all_controls_dominate` | `libjvm.dylib` |

##### `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Callee                                                                   | Location       |
| -----: | ----: | -------------: | ------: | ------------------------------------------------------------------------ | -------------- |
| +85.7% |    +6 | 100.0% → 81.3% |  7 → 13 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` | `libjvm.dylib` |
|    new |    +2 |   0.0% → 12.5% |   0 → 2 | `HeapRegion::fill_range_with_dead_objects`                               | `libjvm.dylib` |

##### `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                                                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------- | -------------- |
| +128.6% |    +9 | 70.0% → 88.9% |  7 → 16 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb` | `libjvm.dylib` |
| +100.0% |    +1 | 10.0% → 11.1% |   1 → 2 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object`          | `libjvm.dylib` |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `HeapRegion::fill_range_with_dead_objects`                                        | `libjvm.dylib` |

##### `HeapRegionManager::par_iterate` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                                                                             | Location       |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------------------- | -------------- |
| +80.0% |    +8 | 100.0% | 10 → 18 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region` | `libjvm.dylib` |

##### `G1RebuildRSAndScrubTask::work` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                           | Location       |
| -----: | ----: | -----: | ------: | -------------------------------- | -------------- |
| +80.0% |    +8 | 100.0% | 10 → 18 | `HeapRegionManager::par_iterate` | `libjvm.dylib` |

##### `Verifier::verify` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                        | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------- | -------------- |
| +38.5% |    +5 | 92.9% → 81.8% | 13 → 18 | `ClassVerifier::verify_class` | `libjvm.dylib` |
|    new |    +2 |   0.0% → 9.1% |   0 → 2 | `Verifier::inference_verify`  | `libjvm.dylib` |
|    new |    +1 |   0.0% → 4.5% |   0 → 1 | `Symbol::decrement_refcount`  | `libjvm.dylib` |

##### `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                                                                                 | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------ | -------------- |
| +150.0% |    +6 | 50.0% → 66.7% |  4 → 10 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 6.7% |   0 → 1 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_large_object`                         | `libjvm.dylib` |
|     new |    +1 |   0.0% → 6.7% |   0 → 1 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` | `libjvm.dylib` |

##### `ClassFileParser::parse_stream` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                        | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | -------------- |
|  +34.3% |   +12 | 71.4% → 83.9% | 35 → 47 | `ClassFileParser::parse_constant_pool`        | `libjvm.dylib` |
|  -25.0% |    -3 | 24.5% → 16.1% |  12 → 9 | `ClassFileParser::parse_methods`              | `libjvm.dylib` |
| removed |    -1 |   2.0% → 0.0% |   1 → 0 | `ClassFileParser::parse_classfile_attributes` | `libjvm.dylib` |
| removed |    -1 |   2.0% → 0.0% |   1 → 0 | `Arena::set_size_in_bytes`                    | `libjvm.dylib` |

##### `runResolution(FirSession, List)` (`org.jetbrains.kotlin.fir.pipeline.AnalyseKt`)

| Change | Delta |             % |   Samples | Callee          | Location                                                                 |
| -----: | ----: | ------------: | --------: | --------------- | ------------------------------------------------------------------------ |
|  +7.8% |   +10 | 97.0% → 97.2% | 128 → 138 | `process(List)` | `org.jetbrains.kotlin.fir.resolve.transformers.FirTotalResolveProcessor` |

##### `process(List)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirTotalResolveProcessor`)

| Change | Delta |             % |   Samples | Callee                 | Location                                                                            |
| -----: | ----: | ------------: | --------: | ---------------------- | ----------------------------------------------------------------------------------- |
|  +8.8% |   +10 | 89.1% → 89.9% | 114 → 124 | `processFile(FirFile)` | `org.jetbrains.kotlin.fir.resolve.transformers.FirTransformerBasedResolveProcessor` |

##### `processFile(FirFile)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirTransformerBasedResolveProcessor`)

| Change | Delta |      % |   Samples | Callee                              | Location                                        |
| -----: | ----: | -----: | --------: | ----------------------------------- | ----------------------------------------------- |
|  +8.8% |   +10 | 100.0% | 114 → 124 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.declarations.FirFile` |

##### `executePhase(ConfigurationPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`)

|  Change | Delta |             % |   Samples | Callee                                                                                                                                                                                      | Location                                                                 |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
|   +4.6% |    +8 | 72.2% → 72.8% | 174 → 182 | `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)`                                                                                                                            | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`                           |
|  +10.5% |    +2 |   7.9% → 8.4% |   19 → 21 | `prepareJvmSessions(List, Name, CompilerConfiguration, VfsBasedProjectEnvironment, AbstractProjectFileSearchScope, DependencyListForCliModule, Function1, Function1, Function2, Function1)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`         |
|  -33.3% |    -2 |   2.5% → 1.6% |     6 → 4 | `runPlatformCheckers(List, BaseDiagnosticsCollector)`                                                                                                                                       | `org.jetbrains.kotlin.fir.pipeline.ConvertToIrKt`                        |
|   +3.8% |    +1 |         10.8% |   26 → 27 | `createEnvironmentAndSources(CompilerConfiguration, Disposable, String)`                                                                                                                    | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`         |
| removed |    -1 |   0.4% → 0.0% |     1 → 0 | `invoke()`                                                                                                                                                                                  | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase$$Lambda` |

##### `executePhase(PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`)

| Change | Delta |      % |   Samples | Callee                                        | Location                                                         |
| -----: | ----: | -----: | --------: | --------------------------------------------- | ---------------------------------------------------------------- |
|  +3.7% |    +9 | 100.0% | 241 → 250 | `executePhase(ConfigurationPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase` |

##### `transformChildren(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`)

| Change | Delta |              % |   Samples | Callee                                          | Location                                                 |
| -----: | ----: | -------------: | --------: | ----------------------------------------------- | -------------------------------------------------------- |
|  +8.4% |    +9 |         100.0% | 107 → 116 | `transformChildren(FirTransformer, Object)`     | `org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl` |
|  +6.5% |    +7 | 100.0% → 98.3% | 107 → 114 | `transformDeclarations(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl` |
|    new |    +1 |    0.0% → 0.9% |     0 → 1 | `transformImports(FirTransformer, Object)`      | `org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl` |

##### `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`)

| Change | Delta |             % |   Samples | Callee                                                                                        | Location                                      |
| -----: | ----: | ------------: | --------: | --------------------------------------------------------------------------------------------- | --------------------------------------------- |
|  +7.6% |   +10 | 75.9% → 78.0% | 132 → 142 | `runResolution(FirSession, List)`                                                             | `org.jetbrains.kotlin.fir.pipeline.AnalyseKt` |
|  -4.8% |    -2 | 24.1% → 22.0% |   42 → 40 | `runCheckers(FirSession, ScopeSession, Collection, BaseDiagnosticsCollector, MppCheckerKind)` | `org.jetbrains.kotlin.fir.pipeline.AnalyseKt` |

##### `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`)

|  Change | Delta |             % |   Samples | Callee                              | Location                                                           |
| ------: | ----: | ------------: | --------: | ----------------------------------- | ------------------------------------------------------------------ |
|   +5.5% |    +6 | 91.7% → 90.6% | 110 → 116 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.declarations.FirNamedFunction`           |
| +300.0% |    +3 |   0.8% → 3.1% |     1 → 4 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.types.FirTypeProjectionWithVariance`     |
|  -11.1% |    -3 | 22.5% → 18.8% |   27 → 24 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.FirWhenBranch`               |
|  +18.2% |    +2 |  9.2% → 10.2% |   11 → 13 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.declarations.FirRegularClass`            |
|  +15.4% |    +2 | 10.8% → 11.7% |   13 → 15 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.FirPropertyAccessExpression` |

##### `transformElement(FirElement, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

|  Change | Delta |             % |   Samples | Callee                                      | Location                                                                |
| ------: | ----: | ------------: | --------: | ------------------------------------------- | ----------------------------------------------------------------------- |
|   +7.9% |    +8 | 93.5% → 94.0% | 101 → 109 | `transformChildren(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`                |
|  +15.8% |    +3 | 17.6% → 19.0% |   19 → 22 | `transformChildren(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl`         |
| +200.0% |    +2 |   0.9% → 2.6% |     1 → 3 | `transformChildren(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`        |
|     new |    +1 |   0.0% → 0.9% |     0 → 1 | `transformChildren(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.types.impl.FirTypeProjectionWithVarianceImpl` |

##### `transformDeclarationContent(FirDeclaration, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change | Delta |      % |   Samples | Callee                                         | Location                                                                                                 |
| -----: | ----: | -----: | --------: | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
|  +7.9% |    +8 | 100.0% | 101 → 109 | `transformElement(FirElement, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### `transformDeclarationContent(FirDeclaration, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`)

| Change | Delta |              % |   Samples | Callee                                                        | Location                                                                                                 |
| -----: | ----: | -------------: | --------: | ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
|  +6.9% |    +7 | 100.0% → 99.1% | 101 → 108 | `transformDeclarationContent(FirDeclaration, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
|    new |    +1 |    0.0% → 0.9% |     0 → 1 | `transformDeclarationContent(FirDeclaration, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirImplicitAwareBodyResolveTransformer`      |

##### `doTransformFile$lambda$0(FirDeclarationsResolveTransformer, FirFile, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`)

| Change | Delta |      % |   Samples | Callee                                                        | Location                                                                                       |
| -----: | ----: | -----: | --------: | ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
|  +7.9% |    +8 | 100.0% | 101 → 109 | `transformDeclarationContent(FirDeclaration, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |

##### `invoke()` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda`)

|  Change | Delta |             % |   Samples | Callee                                                                                                        | Location                                                                                       |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
|   +7.9% |    +8 |        100.0% | 101 → 109 | `doTransformFile$lambda$0(FirDeclarationsResolveTransformer, FirFile, ResolutionMode)`                        | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |
| +300.0% |    +3 |   1.0% → 3.7% |     1 → 4 | `doTransformRegularClassContent$lambda$0(FirDeclarationsResolveTransformer, FirRegularClass, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |
| +300.0% |    +3 |   1.0% → 3.7% |     1 → 4 | `forRegularClassBody$lambda$0(Function0)`                                                                     | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |
|   +2.7% |    +2 | 72.3% → 68.8% |   73 → 75 | `transformNamedFunction$lambda$0$0$0(FirDeclarationsResolveTransformer, FirNamedFunction, boolean)`           | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |

##### `doTransformFile(FirFile, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`)

| Change | Delta |             % | Samples | Callee                         | Location                                                                                                                                            |
| -----: | ----: | ------------: | ------: | ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +5.4% |    +4 | 73.3% → 71.6% | 74 → 78 | `withFile(FirFile, Function0)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`                                                      |
| +12.5% |    +3 | 23.8% → 24.8% | 24 → 27 | `withFile(FirFile, Function0)` | `org.jetbrains.kotlin.fir.resolve.transformers.contracts.FirAbstractContractResolveTransformerDispatcher$FirDeclarationsContractResolveTransformer` |
| +33.3% |    +1 |   3.0% → 3.7% |   3 → 4 | `withFile(FirFile, Function0)` | `org.jetbrains.kotlin.fir.resolve.transformers.plugin.FirDeclarationsResolveTransformerForAnnotationArguments`                                      |

##### `transformFile(FirFile, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`)

| Change | Delta |      % |   Samples | Callee                                     | Location                                                                                       |
| -----: | ----: | -----: | --------: | ------------------------------------------ | ---------------------------------------------------------------------------------------------- |
|  +7.9% |    +8 | 100.0% | 101 → 109 | `doTransformFile(FirFile, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |

##### `transformFile(FirFile, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change | Delta |      % |   Samples | Callee                                   | Location                                                                                       |
| -----: | ----: | -----: | --------: | ---------------------------------------- | ---------------------------------------------------------------------------------------------- |
|  +7.9% |    +8 | 100.0% | 101 → 109 | `transformFile(FirFile, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |

##### `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` (`java.lang.ClassLoader`)

|  Change | Delta |      % | Samples | Callee                                    | Location        |
| ------: | ----: | -----: | ------: | ----------------------------------------- | --------------- |
| +500.0% |    +5 | 100.0% |   1 → 6 | `Java_java_lang_ClassLoader_defineClass0` | `libjava.dylib` |

##### `defineClass(ClassLoader, Class, String, byte[], ProtectionDomain, boolean, int, Object)` (`java.lang.System$2`)

|  Change | Delta |      % | Samples | Callee                                                                                               | Location                |
| ------: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------------------- | ----------------------- |
| +500.0% |    +5 | 100.0% |   1 → 6 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` | `java.lang.ClassLoader` |

##### `defineClass(boolean, Object)` (`java.lang.invoke.MethodHandles$Lookup$ClassDefiner`)

|  Change | Delta |      % | Samples | Callee                                                                                    | Location             |
| ------: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------- | -------------------- |
| +500.0% |    +5 | 100.0% |   1 → 6 | `defineClass(ClassLoader, Class, String, byte[], ProtectionDomain, boolean, int, Object)` | `java.lang.System$2` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

| Change | Delta |             % | Samples | Callee                                          | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | -------------- |
|  +3.0% |    +2 | 98.5% → 95.8% | 67 → 69 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |
|    new |    +1 |   0.0% → 1.4% |   0 → 1 | `inflate`                                       | `libzip.dylib` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

| Change | Delta |              % | Samples | Callee                      | Location                            |
| -----: | ----: | -------------: | ------: | --------------------------- | ----------------------------------- |
|  +2.9% |    +2 | 100.0% → 97.2% | 68 → 70 | `inflate(byte[], int, int)` | `java.util.zip.Inflater`            |
|    new |    +1 |    0.0% → 1.4% |   0 → 1 | `fill()`                    | `java.util.zip.InflaterInputStream` |
|    new |    +1 |    0.0% → 1.4% |   0 → 1 | `UncommonTrapBlob`          | `<unknown>`                         |

##### `throwParameterIsNullNPE(String)` (`kotlin.jvm.internal.Intrinsics`)

|  Change | Delta |              % | Samples | Callee                          | Location                         |
| ------: | ----: | -------------: | ------: | ------------------------------- | -------------------------------- |
| +300.0% |    +3 | 100.0% → 80.0% |   1 → 4 | `sanitizeStackTrace(Throwable)` | `kotlin.jvm.internal.Intrinsics` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

| Change | Delta |      % | Samples | Callee                                                        | Location                 |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------- | ------------------------ |
|  +4.4% |    +3 | 100.0% | 68 → 71 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater` |

##### `buildCallSite()` (`java.lang.invoke.InnerClassLambdaMetafactory`)

| Change | Delta |             % | Samples | Callee                               | Location                                |
| -----: | ----: | ------------: | ------: | ------------------------------------ | --------------------------------------- |
| +66.7% |    +2 | 33.3% → 41.7% |   3 → 5 | `findConstructor(Class, MethodType)` | `java.lang.invoke.MethodHandles$Lookup` |
|    new |    +1 |   0.0% → 8.3% |   0 → 1 | `constant(Class, Object)`            | `java.lang.invoke.MethodHandles`        |

##### `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` (`java.lang.invoke.LambdaMetafactory`)

|  Change | Delta |             % | Samples | Callee                                                                                                                   | Location                                               |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
|  +33.3% |    +3 | 90.0% → 92.3% |  9 → 12 | `buildCallSite()`                                                                                                        | `java.lang.invoke.InnerClassLambdaMetafactory`         |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `validateMetafactoryArgs()`                                                                                              | `java.lang.invoke.AbstractValidatingLambdaMetafactory` |
|     new |    +1 |   0.0% → 7.7% |   0 → 1 | `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` | `java.lang.invoke.InnerClassLambdaMetafactory`         |

##### `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|  Change | Delta |             % | Samples | Callee                                                                 | Location                                             |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------- | ---------------------------------------------------- |
|  +22.2% |    +2 | 90.0% → 84.6% |  9 → 11 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000008001230000` |
| +100.0% |    +1 | 10.0% → 15.4% |   1 → 2 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Class, MethodHandle, String, Object, Object, Class)` (`java.lang.invoke.BootstrapMethodInvoker`)

| Change | Delta |      % | Samples | Callee                                                                           | Location                           |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------- | ---------------------------------- |
| +30.0% |    +3 | 100.0% | 10 → 13 | `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `makeSite(MethodHandle, String, MethodType, Object, Class)` (`java.lang.invoke.CallSite`)

| Change | Delta |      % | Samples | Callee                                                       | Location                                  |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------ | ----------------------------------------- |
| +30.0% |    +3 | 100.0% | 10 → 13 | `invoke(Class, MethodHandle, String, Object, Object, Class)` | `java.lang.invoke.BootstrapMethodInvoker` |

##### `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

| Change | Delta |      % | Samples | Callee                                                      | Location                    |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------- | --------------------------- |
| +30.0% |    +3 | 100.0% | 10 → 13 | `makeSite(MethodHandle, String, MethodType, Object, Class)` | `java.lang.invoke.CallSite` |

##### `linkCallSite(Object, Object, Object, Object, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

| Change | Delta |      % | Samples | Callee                                                                        | Location                               |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------- | -------------------------------------- |
| +30.0% |    +3 | 100.0% | 10 → 13 | `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `linkMethodHandleConstant(byte, Class, String, Object)` (`java.lang.invoke.MethodHandles$Lookup`)

|  Change | Delta |             % | Samples | Callee                                                | Location                                |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------- | --------------------------------------- |
| +200.0% |    +2 | 33.3% → 50.0% |   1 → 3 | `getDirectMethodForConstant(byte, Class, MemberName)` | `java.lang.invoke.MethodHandles$Lookup` |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `checkSymbolicClass(Class)`                           | `java.lang.invoke.MethodHandles$Lookup` |

##### `loadClass(String)` (`java.lang.ClassLoader`)

|  Change | Delta |             % | Samples | Callee                       | Location                                          |
| ------: | ----: | ------------: | ------: | ---------------------------- | ------------------------------------------------- |
| +200.0% |    +2 | 50.0% → 60.0% |   1 → 3 | `loadClass(String, boolean)` | `java.lang.ClassLoader`                           |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `loadClass(String, boolean)` | `jdk.internal.loader.ClassLoaders$AppClassLoader` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|  Change | Delta |             % |     Samples | Callee                                         | Location       |
| ------: | ----: | ------------: | ----------: | ---------------------------------------------- | -------------- |
|  -22.1% |  -236 | 91.2% → 97.2% | 1,068 → 832 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
|  -76.5% |   -75 |   8.4% → 2.7% |     98 → 23 | `CompileQueue::get`                            | `libjvm.dylib` |
| removed |    -1 |   0.1% → 0.0% |       1 → 0 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |
| removed |    -1 |   0.1% → 0.0% |       1 → 0 | `CompilationLog::log_compile`                  | `libjvm.dylib` |
| removed |    -1 |   0.1% → 0.0% |       1 → 0 | `ciEnv::cache_jvmti_state`                     | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

| Change | Delta |             % |     Samples | Callee                                | Location       |
| -----: | ----: | ------------: | ----------: | ------------------------------------- | -------------- |
| -26.9% |  -315 | 99.7% → 99.5% | 1,171 → 856 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |
|    new |    +1 |   0.0% → 0.1% |       0 → 1 | `ResolvedMethodTable::has_work`       | `libjvm.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

| Change | Delta |             % |     Samples | Callee                          | Location       |
| -----: | ----: | ------------: | ----------: | ------------------------------- | -------------- |
| -26.7% |  -314 | 94.4% → 90.5% | 1,174 → 860 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| +46.2% |   +24 |   4.2% → 8.0% |     52 → 76 | `WorkerThread::run`             | `libjvm.dylib` |
| -80.0% |    -4 |   0.4% → 0.1% |       5 → 1 | `WatcherThread::run`            | `libjvm.dylib` |
| +75.0% |    +3 |   0.3% → 0.7% |       4 → 7 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
| -25.0% |    -2 |          0.6% |       8 → 6 | `VMThread::run`                 | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

| Change | Delta |      % |     Samples | Callee             | Location       |
| -----: | ----: | -----: | ----------: | ------------------ | -------------- |
| -23.6% |  -293 | 100.0% | 1,243 → 950 | `Thread::call_run` | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|  Change | Delta |             % |     Samples | Callee                | Location       |
| ------: | ----: | ------------: | ----------: | --------------------- | -------------- |
|  -23.6% |  -293 | 99.9% → 99.8% | 1,243 → 950 | `thread_native_entry` | `libjvm.dylib` |
| +100.0% |    +1 |   0.1% → 0.2% |       1 → 2 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

| Change | Delta |      % |     Samples | Callee           | Location                  |
| -----: | ----: | -----: | ----------: | ---------------- | ------------------------- |
| -23.5% |  -292 | 100.0% | 1,244 → 952 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                          | Location       |
| ------: | ----: | ------------: | --------: | ------------------------------- | -------------- |
|  -22.4% |  -167 | 69.9% → 69.6% | 746 → 579 | `C2Compiler::compile_method`    | `libjvm.dylib` |
|  -18.6% |   -56 | 28.2% → 29.4% | 301 → 245 | `Compiler::compile_method`      | `libjvm.dylib` |
|  -66.7% |    -6 |   0.8% → 0.4% |     9 → 3 | `ciEnv::ciEnv`                  | `libjvm.dylib` |
|  -62.5% |    -5 |   0.7% → 0.4% |     8 → 3 | `ciEnv::get_method_from_handle` | `libjvm.dylib` |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `CompilationLog::log_compile`   | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                      | Location       |
| ------: | ----: | ------------: | --------: | --------------------------- | -------------- |
|  -19.7% |   -71 | 48.3% → 50.1% | 360 → 289 | `Compile::Code_Gen`         | `libjvm.dylib` |
|  -19.5% |   -50 | 34.5% → 35.9% | 257 → 207 | `Compile::Optimize`         | `libjvm.dylib` |
|  -37.7% |   -40 | 14.2% → 11.4% |  106 → 66 | `ParseGenerator::generate`  | `libjvm.dylib` |
|  -72.7% |    -8 |   1.5% → 0.5% |    11 → 3 | `CallGenerator::for_inline` | `libjvm.dylib` |
| removed |    -2 |   0.3% → 0.0% |     2 → 0 | `Type::Initialize`          | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee             | Location       |
| ------: | ----: | ------------: | --------: | ------------------ | -------------- |
|  -22.6% |  -168 | 99.9% → 99.7% | 745 → 577 | `Compile::Compile` | `libjvm.dylib` |
| +100.0% |    +1 |   0.1% → 0.3% |     1 → 2 | `Chunk::next_chop` | `libjvm.dylib` |

##### `_pthread_mutex_firstfit_lock_slow` (`libsystem_pthread.dylib`)

| Change | Delta |      % |  Samples | Callee               | Location                 |
| -----: | ----: | -----: | -------: | -------------------- | ------------------------ |
| -85.5% |  -106 | 100.0% | 124 → 18 | `__psynch_mutexwait` | `libsystem_kernel.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

| Change | Delta |             % |  Samples | Callee            | Location                 |
| -----: | ----: | ------------: | -------: | ----------------- | ------------------------ |
| -75.5% |   -77 | 96.2% → 89.3% | 102 → 25 | `__psynch_cvwait` | `libsystem_kernel.dylib` |
| -50.0% |    -1 |   1.9% → 3.6% |    2 → 1 | `__gettimeofday`  | `libsystem_kernel.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                                                        | Location       |
| ------: | ----: | -------------: | ------: | ----------------------------------------------------------------------------- | -------------- |
|  -79.6% |   -74 | 98.9% → 100.0% | 93 → 19 | `PlatformMonitor::wait`                                                       | `libjvm.dylib` |
| removed |    -1 |    1.1% → 0.0% |   1 → 0 | `ThreadBlockInVMPreprocess<InFlightMutexRelease>::~ThreadBlockInVMPreprocess` | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------------------- | ------------------------- |
|  -80.6% |   -75 | 94.9% → 78.3% | 93 → 18 | `Monitor::wait`                       | `libjvm.dylib`            |
|     new |    +3 |  0.0% → 13.0% |   0 → 3 | `CompilationPolicy::select_task`      | `libjvm.dylib`            |
| removed |    -2 |   2.0% → 0.0% |   2 → 0 | `CompileTask::select_for_compilation` | `libjvm.dylib`            |
| removed |    -1 |   1.0% → 0.0% |   1 → 0 | `_pthread_mutex_firstfit_unlock_slow` | `libsystem_pthread.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                            | Location       |
| ------: | ----: | ------------: | --------: | --------------------------------- | -------------- |
|  -15.9% |   -28 | 48.9% → 51.2% | 176 → 148 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
|  -43.6% |   -24 | 15.3% → 10.7% |   55 → 31 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  -17.4% |   -12 | 19.2% → 19.7% |   69 → 57 | `Matcher::match`                  | `libjvm.dylib` |
| removed |    -4 |   1.1% → 0.0% |     4 → 0 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |
|   -5.7% |    -2 |  9.7% → 11.4% |   35 → 33 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |

##### `ThreadCritical::ThreadCritical` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                              | Location                  |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ------------------------- |
| -89.3% |   -67 | 98.7% → 88.9% |  75 → 8 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|  Change | Delta |             % |   Samples | Callee                                                                               | Location                                                                |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
|  -15.4% |   -67 | 98.9% → 98.7% | 435 → 368 | `exec(MessageCollector, Services, CommonCompilerArguments)`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `loadClass(String)`                                                                  | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`                |
|  +25.0% |    +1 |   0.9% → 1.3% |     4 → 5 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |             % |   Samples | Callee                                                          | Location                                      |
| -----: | ----: | ------------: | --------: | --------------------------------------------------------------- | --------------------------------------------- |
| -15.3% |   -65 | 97.9% → 98.1% | 426 → 361 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |
| -22.2% |    -2 |   2.1% → 1.9% |     9 → 7 | `<clinit>()`                                                    | `org.jetbrains.kotlin.cli.common.ArgumentsKt` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |              % |   Samples | Callee                                                   | Location                                      |
| -----: | ----: | -------------: | --------: | -------------------------------------------------------- | --------------------------------------------- |
| -15.2% |   -67 | 100.0% → 99.7% | 440 → 373 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |
|    new |    +1 |    0.0% → 0.3% |     0 → 1 | `<clinit>()`                                             | `org.jetbrains.kotlin.config.Services`        |

##### `Compilation::compile_method` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                                               | Location        |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------- | --------------- |
|  -15.7% |   -41 | 88.2% → 90.2% | 261 → 220 | `Compilation::compile_java_method`                   | `libjvm.dylib`  |
|  -36.4% |   -12 |  11.1% → 8.6% |   33 → 21 | `ciEnv::register_method`                             | `libjvm.dylib`  |
| removed |    -2 |   0.7% → 0.0% |     2 → 0 | `DebugInformationRecorder::DebugInformationRecorder` | `libjvm.dylib`  |
|     new |    +2 |   0.0% → 0.8% |     0 → 2 | `Dependencies::assert_common_1`                      | `libjvm.dylib`  |
|     new |    +1 |   0.0% → 0.4% |     0 → 1 | `tlv_get_addr`                                       | `libdyld.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

| Change | Delta |              % |   Samples | Callee                        | Location       |
| -----: | ----: | -------------: | --------: | ----------------------------- | -------------- |
| -17.6% |   -52 | 100.0% → 99.6% | 296 → 244 | `Compilation::compile_method` | `libjvm.dylib` |
|    new |    +1 |    0.0% → 0.4% |     0 → 1 | `TraceTime::~TraceTime`       | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                         | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------ | -------------- |
| -75.0% |   -15 |   7.8% → 2.4% |  20 → 5 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |
| -20.3% |   -12 | 23.0% → 22.7% | 59 → 47 | `Compile::optimize_loops`      | `libjvm.dylib` |
| -19.0% |    -8 | 16.3% → 16.4% | 42 → 34 | `PhaseIterGVN::optimize`       | `libjvm.dylib` |
| -50.0% |    -6 |   4.7% → 2.9% |  12 → 6 | `PhaseCCP::do_transform`       | `libjvm.dylib` |
|  +7.4% |    +5 | 26.5% → 35.3% | 68 → 73 | `PhaseIdealLoop::optimize`     | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|  Change | Delta |             % |  Samples | Callee                                | Location       |
| ------: | ----: | ------------: | -------: | ------------------------------------- | -------------- |
|  -27.7% |   -31 | 42.9% → 36.8% | 112 → 81 | `Compilation::build_hir`              | `libjvm.dylib` |
|  -15.0% |   -15 | 38.3% → 38.6% | 100 → 85 | `Compilation::emit_lir`               | `libjvm.dylib` |
|   +8.7% |    +4 | 17.6% → 22.7% |  46 → 50 | `Compilation::emit_code_body`         | `libjvm.dylib` |
| +300.0% |    +3 |   0.4% → 1.8% |    1 → 4 | `ciMethod::ensure_method_data`        | `libjvm.dylib` |
| removed |    -1 |   0.4% → 0.0% |    1 → 0 | `CodeBuffer::initialize_section_size` | `libjvm.dylib` |

##### `ciBytecodeStream::get_method` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                  | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
|  -60.7% |   -17 | 46.7% → 42.3% | 28 → 11 | `ciEnv::get_method_by_index_impl`       | `libjvm.dylib` |
|  -51.7% |   -15 | 48.3% → 53.8% | 29 → 14 | `ciObjectFactory::get_metadata`         | `libjvm.dylib` |
| removed |    -1 |   1.7% → 0.0% |   1 → 0 | `ciObjectFactory::get_unloaded_method`  | `libjvm.dylib` |
| removed |    -1 |   1.7% → 0.0% |   1 → 0 | `ciBytecodeStream::has_local_signature` | `libjvm.dylib` |
| removed |    -1 |   1.7% → 0.0% |   1 → 0 | `SafepointMechanism::process`           | `libjvm.dylib` |

##### `ciTypeFlow::df_flow_types` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                          | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------- | -------------- |
|  -77.8% |   -28 | 92.3% → 100.0% |  36 → 8 | `ciTypeFlow::flow_block`        | `libjvm.dylib` |
| removed |    -1 |    2.6% → 0.0% |   1 → 0 | `ciTypeFlow::build_loop_tree`   | `libjvm.dylib` |
| removed |    -1 |    2.6% → 0.0% |   1 → 0 | `ciTypeFlow::SuccIter::next`    | `libjvm.dylib` |
| removed |    -1 |    2.6% → 0.0% |   1 → 0 | `ciTypeFlow::Block::successors` | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                       | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | -------------- |
|  -27.1% |   -23 | 75.9% → 76.5% | 85 → 62 | `IR::IR`                                     | `libjvm.dylib` |
|  -75.0% |    -6 |   7.1% → 2.5% |   8 → 2 | `IR::eliminate_null_checks`                  | `libjvm.dylib` |
|  -57.1% |    -4 |   6.3% → 3.7% |   7 → 3 | `IR::compute_use_counts`                     | `libjvm.dylib` |
|  -22.2% |    -2 |   8.0% → 8.6% |   9 → 7 | `GlobalValueNumbering::GlobalValueNumbering` | `libjvm.dylib` |
| +200.0% |    +2 |   0.9% → 3.7% |   1 → 3 | `IR::compute_code`                           | `libjvm.dylib` |

##### `ciMethod::get_flow_analysis` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                   | Location       |
| ------: | ----: | ------------: | ------: | ------------------------ | -------------- |
|  -72.5% |   -29 | 95.2% → 91.7% | 40 → 11 | `ciTypeFlow::do_flow`    | `libjvm.dylib` |
| removed |    -2 |   4.8% → 0.0% |   2 → 0 | `ciTypeFlow::ciTypeFlow` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 8.3% |   0 → 1 | `ciTypeFlow::map_blocks` | `libjvm.dylib` |

##### `ciTypeFlow::flow_types` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                         | Location        |
| ------: | ----: | ------------: | ------: | ------------------------------ | --------------- |
|  -79.5% |   -31 | 97.5% → 72.7% |  39 → 8 | `ciTypeFlow::df_flow_types`    | `libjvm.dylib`  |
| removed |    -1 |   2.5% → 0.0% |   1 → 0 | `ciTypeFlow::get_block_for`    | `libjvm.dylib`  |
|     new |    +1 |   0.0% → 9.1% |   0 → 1 | `ciTypeFlow::clone_loop_heads` | `libjvm.dylib`  |
|     new |    +1 |   0.0% → 9.1% |   0 → 1 | `ciTypeFlow::get_start_state`  | `libjvm.dylib`  |
|     new |    +1 |   0.0% → 9.1% |   0 → 1 | `tlv_get_addr`                 | `libdyld.dylib` |

##### `ciTypeFlow::do_flow` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                   | Location       |
| -----: | ----: | -----: | ------: | ------------------------ | -------------- |
| -72.5% |   -29 | 100.0% | 40 → 11 | `ciTypeFlow::flow_types` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                     | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
|  -42.1% |    -8 |  10.8% → 7.4% | 19 → 11 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
|  -44.4% |    -8 |  10.2% → 6.8% | 18 → 10 | `PhaseChaitin::gather_lrg_masks`           | `libjvm.dylib` |
|  -25.0% |    -7 | 15.9% → 14.2% | 28 → 21 | `PhaseLive::compute`                       | `libjvm.dylib` |
| +166.7% |    +5 |   1.7% → 5.4% |   3 → 8 | `PhaseIFG::Compute_Effective_Degree`       | `libjvm.dylib` |
| +250.0% |    +5 |   1.1% → 4.7% |   2 → 7 | `PhaseCoalesce::coalesce_driver`           | `libjvm.dylib` |

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                                                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------- | -------------- |
|  -56.4% |   -22 | 70.9% → 63.0% | 39 → 17 | `ciObjectFactory::create_new_metadata`                                           | `libjvm.dylib` |
| removed |    -2 |   3.6% → 0.0% |   2 → 0 | `Metadata::is_method`                                                            | `libjvm.dylib` |
| removed |    -2 |   3.6% → 0.0% |   2 → 0 | `GrowableArrayWithAllocator<ciMetadata*, GrowableArray<ciMetadata*>>::expand_to` | `libjvm.dylib` |

##### `ciTypeFlow::StateVector::apply_one_bytecode` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                  | Location       |
| ------: | ----: | -------------: | ------: | --------------------------------------- | -------------- |
|  -72.7% |   -16 | 64.7% → 100.0% |  22 → 6 | `ciTypeFlow::StateVector::do_invoke`    | `libjvm.dylib` |
| removed |    -9 |   26.5% → 0.0% |   9 → 0 | `ciTypeFlow::StateVector::do_getstatic` | `libjvm.dylib` |
| removed |    -1 |    2.9% → 0.0% |   1 → 0 | `ciType::is_classless`                  | `libjvm.dylib` |
| removed |    -1 |    2.9% → 0.0% |   1 → 0 | `ciObject::is_null_object`              | `libjvm.dylib` |
| removed |    -1 |    2.9% → 0.0% |   1 → 0 | `ciTypeFlow::StateVector::do_checkcast` | `libjvm.dylib` |

##### `ciTypeFlow::flow_block` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                        | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------------------- | -------------- |
| -82.4% |   -28 | 94.4% → 66.7% |  34 → 6 | `ciTypeFlow::StateVector::apply_one_bytecode` | `libjvm.dylib` |
|    new |    +1 |  0.0% → 11.1% |   0 → 1 | `ciTypeFlow::Block::compute_exceptions`       | `libjvm.dylib` |
|    new |    +1 |  0.0% → 11.1% |   0 → 1 | `ciTypeFlow::flow_successors`                 | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

|  Change | Delta |              % |   Samples | Callee                                         | Location       |
| ------: | ----: | -------------: | --------: | ---------------------------------------------- | -------------- |
|  -17.2% |   -51 | 98.3% → 100.0% | 296 → 245 | `Compilation::Compilation`                     | `libjvm.dylib` |
| removed |    -3 |    1.0% → 0.0% |     3 → 0 | `Chunk::next_chop`                             | `libjvm.dylib` |
| removed |    -1 |    0.3% → 0.0% |     1 → 0 | `ExceptionHandlerTable::ExceptionHandlerTable` | `libjvm.dylib` |
| removed |    -1 |    0.3% → 0.0% |     1 → 0 | `Compilation::~Compilation`                    | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
|  -89.5% |   -51 | 98.3% → 66.7% |  57 → 6 | `ThreadCritical::ThreadCritical`  | `libjvm.dylib` |
| +200.0% |    +2 |  1.7% → 33.3% |   1 → 3 | `ThreadCritical::~ThreadCritical` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                | Location       |
| -----: | ----: | -----: | ------: | --------------------- | -------------- |
| -83.6% |   -46 | 100.0% |  55 → 9 | `Chunk::operator new` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                   | Location       |
| ------: | ----: | ------------: | ------: | ------------------------ | -------------- |
|  -41.7% |   -40 | 90.6% → 84.8% | 96 → 56 | `Parse::do_call`         | `libjvm.dylib` |
|  -83.3% |    -5 |   5.7% → 1.5% |   6 → 1 | `Parse::do_one_bytecode` | `libjvm.dylib` |
|  -80.0% |    -4 |   4.7% → 1.5% |   5 → 1 | `Parse::do_checkcast`    | `libjvm.dylib` |
| removed |    -3 |   2.8% → 0.0% |   3 → 0 | `Parse::do_new`          | `libjvm.dylib` |
| removed |    -2 |   1.9% → 0.0% |   2 → 0 | `Parse::do_instanceof`   | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

| Change | Delta |           % |  Samples | Callee                           | Location       |
| -----: | ----: | ----------: | -------: | -------------------------------- | -------------- |
| -37.7% |   -40 |      100.0% | 106 → 66 | `Parse::do_one_block`            | `libjvm.dylib` |
|    new |    +1 | 0.0% → 1.5% |    0 → 1 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 1.5% |    0 → 1 | `SafePointNode::jvms`            | `libjvm.dylib` |
|    new |    +1 | 0.0% → 1.5% |    0 → 1 | `RegionNode::Ideal`              | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
|  -44.6% |   -25 | 58.3% → 55.4% | 56 → 31 | `ParseGenerator::generate`         | `libjvm.dylib` |
|  -70.6% |   -24 | 35.4% → 17.9% | 34 → 10 | `Compile::call_generator`          | `libjvm.dylib` |
|  -32.8% |   -20 | 63.5% → 73.2% | 61 → 41 | `PredictedCallGenerator::generate` | `libjvm.dylib` |
| removed |    -4 |   4.2% → 0.0% |   4 → 0 | `LibraryIntrinsic::generate`       | `libjvm.dylib` |
|  -50.0% |    -2 |   4.2% → 3.6% |   4 → 2 | `Compile::optimize_inlining`       | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|  Change | Delta |              % |  Samples | Callee                        | Location       |
| ------: | ----: | -------------: | -------: | ----------------------------- | -------------- |
|  -37.7% |   -40 | 100.0% → 98.5% | 106 → 66 | `Parse::do_all_blocks`        | `libjvm.dylib` |
| +100.0% |    +2 |    1.9% → 6.0% |    2 → 4 | `Parse::do_exits`             | `libjvm.dylib` |
| removed |    -1 |    0.9% → 0.0% |    1 → 0 | `PhaseGVN::transform`         | `libjvm.dylib` |
| removed |    -1 |    0.9% → 0.0% |    1 → 0 | `GraphKit::null_check_common` | `libjvm.dylib` |
|     new |    +1 |    0.0% → 1.5% |    0 → 1 | `Parse::merge_common`         | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

| Change | Delta |      % |  Samples | Callee         | Location       |
| -----: | ----: | -----: | -------: | -------------- | -------------- |
| -36.8% |   -39 | 100.0% | 106 → 67 | `Parse::Parse` | `libjvm.dylib` |

##### `Mutex::lock` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                                                        | Location                  |
| ------: | ----: | -------------: | ------: | ----------------------------------------------------------------------------- | ------------------------- |
|  -82.1% |   -32 | 97.5% → 100.0% |  39 → 7 | `_pthread_mutex_firstfit_lock_slow`                                           | `libsystem_pthread.dylib` |
| removed |    -1 |    2.5% → 0.0% |   1 → 0 | `ThreadBlockInVMPreprocess<InFlightMutexRelease>::~ThreadBlockInVMPreprocess` | `libjvm.dylib`            |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change | Delta |      % |   Samples | Callee                                         | Location                                      |
| -----: | ----: | -----: | --------: | ---------------------------------------------- | --------------------------------------------- |
| -15.0% |   -66 | 100.0% | 440 → 374 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|  Change | Delta |             % |   Samples | Callee                     | Location                                    |
| ------: | ----: | ------------: | --------: | -------------------------- | ------------------------------------------- |
|  -14.7% |   -65 | 84.8% → 82.7% | 442 → 377 | `invoke(Object, Object[])` | `java.lang.reflect.Method`                  |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `parseOptions(String[])`   | `org.jetbrains.kotlin.preloading.Preloader` |
|     new |    +1 |   0.0% → 0.2% |     0 → 1 | `loadClass(String)`        | `java.lang.ClassLoader`                     |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

| Change | Delta |      % |   Samples | Callee          | Location                                    |
| -----: | ----: | -----: | --------: | --------------- | ------------------------------------------- |
| -12.5% |   -65 | 100.0% | 521 → 456 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change | Delta |              % |   Samples | Callee                                                 | Location                                                |
| -----: | ----: | -------------: | --------: | ------------------------------------------------------ | ------------------------------------------------------- |
| -15.0% |   -66 | 100.0% → 99.7% | 440 → 374 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|    new |    +1 |    0.0% → 0.3% |     0 → 1 | `defaultMessageRenderer()`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change | Delta |             % |   Samples | Callee                                                         | Location                                                |
| -----: | ----: | ------------: | --------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| -15.3% |   -65 | 99.5% → 99.4% | 424 → 359 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change | Delta |      % |   Samples | Callee                                                                | Location                                     |
| -----: | ----: | -----: | --------: | --------------------------------------------------------------------- | -------------------------------------------- |
| -15.3% |   -65 | 100.0% | 426 → 361 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |      % |   Samples | Callee                                                                 | Location                                     |
| -----: | ----: | -----: | --------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| -15.3% |   -65 | 100.0% | 426 → 361 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|  Change | Delta |              % |   Samples | Callee                                                                                                | Location                                                      |
| ------: | ----: | -------------: | --------: | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
|  -14.9% |   -63 | 99.5% → 100.0% | 422 → 359 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                        | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`       |
| removed |    -1 |    0.2% → 0.0% |     1 → 0 | `<init>(CommonCompilerArguments, Services, Disposable, GroupingMessageCollector, PerformanceManager)` | `org.jetbrains.kotlin.cli.pipeline.ArgumentsPipelineArtifact` |
| removed |    -1 |    0.2% → 0.0% |     1 → 0 | `disposeRootInWriteAction(Disposable)`                                                                | `org.jetbrains.kotlin.cli.common.UtilsKt`                     |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change | Delta |      % |   Samples | Callee                                                                                              | Location                                                |
| -----: | ----: | -----: | --------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| -15.3% |   -65 | 100.0% | 424 → 359 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change | Delta |      % |   Samples | Callee                                                                                                                                        | Location                                                |
| -----: | ----: | -----: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| -15.3% |   -65 | 100.0% | 424 → 359 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executePhase(JvmFir2IrPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`)

| Change | Delta |             % |  Samples | Callee                                                                                                                                                                                                             | Location                                                            |
| -----: | ----: | ------------: | -------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| -55.0% |   -55 | 72.5% → 61.6% | 100 → 45 | `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)`                                        | `org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler` |
| -26.3% |   -10 | 27.5% → 38.4% |  38 → 28 | `runLowerings$org_jetbrains_kotlin_cli_jvm(Project, CompilerConfiguration, ModuleDescriptor, Module, JvmIrCodegenFactory, JvmIrCodegenFactory$BackendInput, BaseDiagnosticsCollector, FirJvmBackendClassResolver)` | `org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler` |

##### `executePhase(PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`)

| Change | Delta |      % |  Samples | Callee                                    | Location                                                        |
| -----: | ----: | -----: | -------: | ----------------------------------------- | --------------------------------------------------------------- |
| -47.1% |   -65 | 100.0% | 138 → 73 | `executePhase(JvmFir2IrPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

| Change | Delta |             % |   Samples | Callee                          | Location                                                |
| -----: | ----: | ------------: | --------: | ------------------------------- | ------------------------------------------------------- |
| -14.5% |   -64 | 99.8% → 99.7% | 440 → 376 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change | Delta |      % |   Samples | Callee           | Location                                               |
| -----: | ----: | -----: | --------: | ---------------- | ------------------------------------------------------ |
| -14.5% |   -64 | 100.0% | 441 → 377 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change | Delta |              % |   Samples | Callee                                                                                             | Location                                                |
| -----: | ----: | -------------: | --------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| -14.8% |   -65 | 100.0% → 99.7% | 440 → 375 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|    new |    +1 |    0.0% → 0.3% |     0 → 1 | `setupIdeaStandaloneExecution()`                                                                   | `org.jetbrains.kotlin.cli.jvm.compiler.CompatKt`        |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

| Change | Delta |             % |   Samples | Callee                           | Location                                                         |
| -----: | ----: | ------------: | --------: | -------------------------------- | ---------------------------------------------------------------- |
| -47.1% |   -65 | 32.9% → 20.5% |  138 → 73 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`  |
|  +3.7% |    +9 | 57.4% → 70.2% | 241 → 250 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase` |
| -20.0% |    -7 |   8.3% → 7.9% |   35 → 28 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`   |
| -50.0% |    -1 |   0.5% → 0.3% |     2 → 1 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmWriteOutputsPhase`     |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

| Change | Delta |      % |   Samples | Callee                                         | Location                                          |
| -----: | ----: | -----: | --------: | ---------------------------------------------- | ------------------------------------------------- |
| -15.2% |   -64 | 100.0% | 420 → 356 | `phaseBody(PipelineContext, PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|  Change | Delta |              % |   Samples | Callee                     | Location                                          |
| ------: | ----: | -------------: | --------: | -------------------------- | ------------------------------------------------- |
|  -14.5% |   -64 | 99.8% → 100.0% | 441 → 377 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |
|  +50.0% |    +1 |    0.5% → 0.8% |     2 → 3 | `acquireMethodAccessor()`  | `java.lang.reflect.Method`                        |
| removed |    -1 |    0.2% → 0.0% |     1 → 0 | `isCallerSensitive()`      | `java.lang.reflect.Method`                        |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008001008000`)

| Change | Delta |      % |   Samples | Callee           | Location                                     |
| -----: | ----: | -----: | --------: | ---------------- | -------------------------------------------- |
| -14.5% |   -64 | 100.0% | 441 → 377 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000008001009400`)

| Change | Delta |      % |   Samples | Callee                         | Location                                             |
| -----: | ----: | -----: | --------: | ------------------------------ | ---------------------------------------------------- |
| -14.5% |   -64 | 100.0% | 441 → 377 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000008001008000` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |      % |   Samples | Callee                           | Location                                            |
| -----: | ----: | -----: | --------: | -------------------------------- | --------------------------------------------------- |
| -14.5% |   -64 | 100.0% | 441 → 377 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000008001009400` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % |   Samples | Callee                                           | Location                           |
| -----: | ----: | -----: | --------: | ------------------------------------------------ | ---------------------------------- |
| -14.5% |   -64 | 100.0% | 441 → 377 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % |   Samples | Callee                         | Location                                          |
| -----: | ----: | -----: | --------: | ------------------------------ | ------------------------------------------------- |
| -14.5% |   -64 | 100.0% | 441 → 377 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|  Change | Delta |             % | Samples | Callee                  | Location                                                                                                      |
| ------: | ----: | ------------: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------------- |
|  -16.7% |    -5 | 53.6% → 49.0% | 30 → 25 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`                      |
|  -33.3% |    -2 |  10.7% → 7.8% |   6 → 4 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$2`                      |
|  -40.0% |    -2 |   8.9% → 5.9% |   5 → 3 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirInvokeResolveTowerExtension$enqueueResolverTasksForInvoke$3` |
| removed |    -1 |   1.8% → 0.0% |   1 → 0 | `invokeSuspend(Object)` | `com.intellij.codeInsight.multiverse.CodeInsightContextManagerImpl$subscribeToChanges$1`                      |
| removed |    -1 |   1.8% → 0.0% |   1 → 0 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.cli.jvm.compiler.CoreEnvironmentUtilsKt$allSourceFilesSequence$1`                       |

##### `areEqual(Object, Object)` (`kotlin.jvm.internal.Intrinsics`)

|  Change | Delta |            % | Samples | Callee           | Location                                                           |
| ------: | ----: | -----------: | ------: | ---------------- | ------------------------------------------------------------------ |
| removed |    -2 | 40.0% → 0.0% |   2 → 0 | `equals(Object)` | `java.lang.String`                                                 |
| removed |    -2 | 40.0% → 0.0% |   2 → 0 | `equals(Object)` | `org.jetbrains.kotlin.fir.symbols.impl.ConeClassLikeLookupTagImpl` |
| removed |    -2 | 40.0% → 0.0% |   2 → 0 | `equals(Object)` | `org.jetbrains.kotlin.fir.types.ConeLookupTagBasedType`            |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `equals(Object)` | `org.jetbrains.kotlin.name.FqNameUnsafe`                           |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `equals(Object)` | `org.jetbrains.kotlin.name.FqName`                                 |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|  Change | Delta |              % | Samples | Callee                                       | Location                         |
| ------: | ----: | -------------: | ------: | -------------------------------------------- | -------------------------------- |
|  -50.0% |    -1 | 50.0% → 100.0% |   2 → 1 | `resize()`                                   | `java.util.HashMap`              |
| removed |    -1 |   25.0% → 0.0% |   1 → 0 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`              |
| removed |    -1 |   25.0% → 0.0% |   1 → 0 | `equals(Object)`                             | `org.jetbrains.kotlin.name.Name` |

##### `put(Object, Object)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Callee                                          | Location            |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | ------------------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `descriptor_delegate$lambda$0(KClassImpl)` (`kotlin.reflect.jvm.internal.KClassImpl$Data`)

|  Change | Delta |             % | Samples | Callee                                                         | Location                                                           |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------- | ------------------------------------------------------------------ |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `getClassId$kotlin_reflection()`                               | `kotlin.reflect.jvm.internal.KClassImpl`                           |
|  -33.3% |    -1 | 50.0% → 66.7% |   3 → 2 | `getModuleData()`                                              | `kotlin.reflect.jvm.internal.KDeclarationContainerImpl$Data`       |
|  -50.0% |    -1 |         33.3% |   2 → 1 | `findClassAcrossModuleDependencies(ModuleDescriptor, ClassId)` | `kotlin.reflect.jvm.internal.impl.descriptors.FindClassInModuleKt` |

##### `accessor$KClassImpl$Data$lambda1(KClassImpl)` (`kotlin.reflect.jvm.internal.KClassImpl$Data`)

| Change | Delta |      % | Samples | Callee                                     | Location                                      |
| -----: | ----: | -----: | ------: | ------------------------------------------ | --------------------------------------------- |
| -50.0% |    -3 | 100.0% |   6 → 3 | `descriptor_delegate$lambda$0(KClassImpl)` | `kotlin.reflect.jvm.internal.KClassImpl$Data` |

##### `invoke()` (`kotlin.reflect.jvm.internal.KClassImpl$Data$$Lambda$1`)

| Change | Delta |      % | Samples | Callee                                         | Location                                      |
| -----: | ----: | -----: | ------: | ---------------------------------------------- | --------------------------------------------- |
| -50.0% |    -3 | 100.0% |   6 → 3 | `accessor$KClassImpl$Data$lambda1(KClassImpl)` | `kotlin.reflect.jvm.internal.KClassImpl$Data` |

##### `getDescriptor()` (`kotlin.reflect.jvm.internal.KClassImpl$Data`)

| Change | Delta |      % | Samples | Callee                     | Location                                            |
| -----: | ----: | -----: | ------: | -------------------------- | --------------------------------------------------- |
| -50.0% |    -3 | 100.0% |   6 → 3 | `getValue(Object, Object)` | `kotlin.reflect.jvm.internal.ReflectProperties$Val` |

##### `getDescriptor()` (`kotlin.reflect.jvm.internal.KClassImpl`)

| Change | Delta |      % | Samples | Callee            | Location                                      |
| -----: | ----: | -----: | ------: | ----------------- | --------------------------------------------- |
| -50.0% |    -3 | 100.0% |   6 → 3 | `getDescriptor()` | `kotlin.reflect.jvm.internal.KClassImpl$Data` |

##### `getValue()` (`kotlin.SafePublicationLazyImpl`)

|  Change | Delta |             % | Samples | Callee     | Location                                                                                                   |
| ------: | ----: | ------------: | ------: | ---------- | ---------------------------------------------------------------------------------------------------------- |
|  -75.0% |    -3 |  23.5% → 7.1% |   4 → 1 | `invoke()` | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer$$Lambda.0x00000080015d7920` |
|  -22.2% |    -2 | 52.9% → 50.0% |   9 → 7 | `invoke()` | `kotlin.reflect.jvm.internal.DescriptorKProperty$$Lambda$0`                                                |
|     new |    +2 |  0.0% → 14.3% |   0 → 2 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.ImplicitReceiverValue$$Lambda`                                     |
|     new |    +2 |  0.0% → 14.3% |   0 → 2 | `invoke()` | `org.jetbrains.kotlin.fir.java.enhancement.FirLazyJavaAnnotationList$$Lambda.0x000000800160e198`           |
| +100.0% |    +1 |  5.9% → 14.3% |   1 → 2 | `invoke()` | `org.jetbrains.kotlin.fir.java.FirLazyJavaDeclarationList$$Lambda.0x000000800160f2a8`                      |

##### `allocateInstance(Class)` (`jdk.internal.misc.Unsafe`)

|  Change | Delta |             % | Samples | Callee                    | Location       |
| ------: | ----: | ------------: | ------: | ------------------------- | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `Unsafe_AllocateInstance` | `libjvm.dylib` |

##### `updateBytes(int, byte[], int, int)` (`java.util.zip.CRC32`)

| Change | Delta |      % | Samples | Callee             | Location    |
| -----: | ----: | -----: | ------: | ------------------ | ----------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `updateBytesCRC32` | `<unknown>` |

##### `update(byte[], int, int)` (`java.util.zip.CRC32`)

| Change | Delta |      % | Samples | Callee                               | Location              |
| -----: | ----: | -----: | ------: | ------------------------------------ | --------------------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `updateBytes(int, byte[], int, int)` | `java.util.zip.CRC32` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in samples collected in their leaf frame.

|  Change | Delta |           % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +800.0% |    +8 | 0.1% → 0.6% |   1 → 9 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThread::run` (`libjvm.dylib`) ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|     new |    +7 | 0.0% → 0.5% |   0 → 7 | `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                  |
| +200.0% |    +6 | 0.2% → 0.6% |   3 → 9 | `LinearScan::build_intervals` (`libjvm.dylib`) ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                               |
|  +57.1% |    +4 | 0.4% → 0.8% |  7 → 11 | `inflate_table` (`libzip.dylib`) ← `inflate` ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `fwd_copy_again` (`libjvm.dylib`) ← `G1ParScanThreadState::trim_queue_to_threshold` ← `G1ParScanThreadState::steal_and_trim_queue` ← `G1ParEvacuateFollowersClosure::do_void` ← `G1EvacuateRegionsTask::evacuate_live_objects` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                    |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`) ← `G1ParScanThreadState::steal_and_trim_queue` ← `G1ParEvacuateFollowersClosure::do_void` ← `G1EvacuateRegionsTask::evacuate_live_objects` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                       |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `CompiledMethod::cleanup_inline_caches_impl` (`libjvm.dylib`) ← `CompiledMethod::unload_nmethod_caches` ← `nmethod::do_unloading` ← `CodeCacheUnloadingTask::work` ← `G1ParallelCleaningTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                   |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `GlobalValueNumbering::GlobalValueNumbering` (`libjvm.dylib`) ← `Compilation::build_hir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                              |
|  +75.0% |    +3 | 0.2% → 0.5% |   4 → 7 | `Matcher::xform` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                       |
| +150.0% |    +3 | 0.1% → 0.4% |   2 → 5 | `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                      |
| +150.0% |    +3 | 0.1% → 0.4% |   2 → 5 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`) ← `void G1CMTask::process_grey_task_entry<true>` ← `G1CMBitMap::iterate` ← `G1CMTask::do_marking_step` ← `G1CMConcurrentMarkingTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                            |
| +150.0% |    +3 | 0.1% → 0.4% |   2 → 5 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` (`libjvm.dylib`) ← `PhaseChaitin::build_ifg_physical` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                               |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `IndexSetIterator::advance_and_next` (`libjvm.dylib`) ← `PhaseIFG::effective_degree` ← `PhaseIFG::Compute_Effective_Degree` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                            |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `G1CardSet::add_card` (`libjvm.dylib`) ← `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb` ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region` ← `HeapRegionManager::par_iterate` ← `G1RebuildRSAndScrubTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                              |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `Interval::add_use_pos` (`libjvm.dylib`) ← `LinearScan::build_intervals` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                     |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `G1CardSet::add_to_howl` (`libjvm.dylib`) ← `G1CardSet::add_card` ← `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb` ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region` ← `HeapRegionManager::par_iterate` ← `G1RebuildRSAndScrubTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                   |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `GenericTaskQueueSet<OverflowTaskQueue<ScannerTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>::steal_best_of_2` (`libjvm.dylib`) ← `G1ParScanThreadState::steal_and_trim_queue` ← `G1ParEvacuateFollowersClosure::do_void` ← `G1EvacuateRegionsTask::evacuate_live_objects` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                             |
|  +50.0% |    +2 | 0.2% → 0.4% |   4 → 6 | `LinearScan::assign_reg_num` (`libjvm.dylib`) ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `LinearScan::compute_oop_map` (`libjvm.dylib`) ← `LinearScan::compute_oop_map` ← `LinearScan::assign_reg_num` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `Matcher::specialize_generic_vector_operands` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                          |

### Improvements

Call stacks with the largest decrease in samples collected in their leaf frame.

|  Change | Delta |           % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -83.0% |   -73 | 5.0% → 1.1% | 88 → 15 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                      |
|  -35.3% |    -6 | 1.0% → 0.8% | 17 → 11 | `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                       |
|  -60.0% |    -6 | 0.6% → 0.3% |  10 → 4 | `PhaseChaitin::elide_copy` (`libjvm.dylib`) ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                  |
|  -12.5% |    -6 | 2.7% → 3.0% | 48 → 42 | `inflate_fast` (`libzip.dylib`) ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |
| removed |    -5 | 0.3% → 0.0% |   5 → 0 | `__psynch_mutexwait` (`libsystem_kernel.dylib`) ← `_pthread_mutex_firstfit_lock_slow` (`libsystem_pthread.dylib`) ← `ThreadCritical::ThreadCritical` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::Label_Root` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                           |
|  -41.7% |    -5 | 0.7% → 0.5% |  12 → 7 | `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                         |
|  -45.5% |    -5 | 0.6% → 0.4% |  11 → 6 | `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                    |
| removed |    -5 | 0.3% → 0.0% |   5 → 0 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `WatcherThread::sleep` ← `WatcherThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                              |
|  -62.5% |    -5 | 0.5% → 0.2% |   8 → 3 | `__psynch_mutexwait` (`libsystem_kernel.dylib`) ← `_pthread_mutex_firstfit_lock_slow` (`libsystem_pthread.dylib`) ← `ThreadCritical::ThreadCritical` (`libjvm.dylib`) ← `Chunk::chop` ← `Chunk::next_chop` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                      |
|  -80.0% |    -4 | 0.3% → 0.1% |   5 → 1 | `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                        |
|  -26.7% |    -4 |        0.8% | 15 → 11 | `PhaseLive::compute` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                     |
|  -66.7% |    -4 | 0.3% → 0.1% |   6 → 2 | `LinearScan::resolve_data_flow` (`libjvm.dylib`) ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                |
| removed |    -4 | 0.2% → 0.0% |   4 → 0 | `G1CodeRootSet::add` (`libjvm.dylib`) ← `nmethod::oops_do` ← `G1CollectedHeap::register_nmethod` ← `nmethod::nmethod` ← `nmethod::new_nmethod` ← `ciEnv::register_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                     |
|  -80.0% |    -4 | 0.3% → 0.1% |   5 → 1 | `__psynch_mutexwait` (`libsystem_kernel.dylib`) ← `_pthread_mutex_firstfit_lock_slow` (`libsystem_pthread.dylib`) ← `Mutex::lock` (`libjvm.dylib`) ← `ciEnv::register_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                 |
| removed |    -4 | 0.2% → 0.0% |   4 → 0 | `PhaseCFG::build_cfg` (`libjvm.dylib`) ← `PhaseCFG::PhaseCFG` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                 |
|  -60.0% |    -3 | 0.3% → 0.1% |   5 → 2 | `PhaseCFG::schedule_pinned_nodes` (`libjvm.dylib`) ← `PhaseCFG::global_code_motion` ← `PhaseCFG::do_global_code_motion` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                       |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `RegMask::is_bound` (`libjvm.dylib`) ← `PhaseChaitin::gather_lrg_masks` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                   |
|  -33.3% |    -3 | 0.5% → 0.4% |   9 → 6 | `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                 |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `__psynch_mutexwait` (`libsystem_kernel.dylib`) ← `_pthread_mutex_firstfit_lock_slow` (`libsystem_pthread.dylib`) ← `ThreadCritical::ThreadCritical` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseOutput::BuildOopMaps` ← `PhaseOutput::Output` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                           |
|  -37.5% |    -3 | 0.5% → 0.4% |   8 → 5 | `LinearScanWalker::alloc_free_reg` (`libjvm.dylib`) ← `LinearScanWalker::activate_current` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                       |

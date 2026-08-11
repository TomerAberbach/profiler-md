# Sampling profile diff

2,694 samples → 2,710 samples (+16 samples, +0.6%).

| Category          | Change | Delta |             % |       Samples |
| ----------------- | -----: | ----: | ------------: | ------------: |
| Native            |  +0.8% |   +20 | 94.3% → 94.5% | 2,540 → 2,560 |
| Compiler          |  -0.9% |    -1 |   4.2% → 4.1% |     112 → 111 |
| Ours              | -14.3% |    -4 |   1.0% → 0.9% |       28 → 24 |
| Standard library  | -18.2% |    -2 |   0.4% → 0.3% |        11 → 9 |
| JIT               | +66.7% |    +2 |   0.1% → 0.2% |         3 → 5 |
| Garbage collector |    new |    +1 |  0.0% → <0.1% |         0 → 1 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % | Samples | Function                                                           | Location                                                        |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------ | --------------------------------------------------------------- |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `LinearScanWalker::free_collect_inactive_fixed`                    | `libjvm.dylib`                                                  |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `I2C/C2I adapters(0xbb)`                                           | `<unknown>`                                                     |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `PhaseChaitin::build_ifg_physical`                                 | `libjvm.dylib`                                                  |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `Matcher::Label_Root`                                              | `libjvm.dylib`                                                  |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `Node::remove_dead_region`                                         | `libjvm.dylib`                                                  |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `PhaseChaitin::gather_lrg_masks`                                   | `libjvm.dylib`                                                  |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `checkAssertions()`                                                | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `RegionNode::is_unreachable_from_root`                             | `libjvm.dylib`                                                  |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal`               | `libjvm.dylib`                                                  |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `PhaseIdealLoop::compute_lca_of_uses`                              | `libjvm.dylib`                                                  |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `Node::dominates`                                                  | `libjvm.dylib`                                                  |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` | `libjvm.dylib`                                                  |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseCFG::remove_empty_blocks`                                    | `libjvm.dylib`                                                  |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseOutput::BuildOopMaps`                                        | `libjvm.dylib`                                                  |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `ConnectionGraph::compute_escape`                                  | `libjvm.dylib`                                                  |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Scheduling::AddNodeToBundle`                                      | `libjvm.dylib`                                                  |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `MethodLiveness::get_liveness_at`                                  | `libjvm.dylib`                                                  |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `BlockBegin::iterate_preorder`                                     | `libjvm.dylib`                                                  |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `LinearScan::sort_intervals_after_allocation`                      | `libjvm.dylib`                                                  |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseCFG::partial_latency_of_defs`                                | `libjvm.dylib`                                                  |

##### Compiler

|  Change | Delta |            % | Samples | Function                                                           | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------ | -------------- |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `LinearScanWalker::free_collect_inactive_fixed`                    | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `PhaseChaitin::build_ifg_physical`                                 | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `Matcher::Label_Root`                                              | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `Node::remove_dead_region`                                         | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `PhaseChaitin::gather_lrg_masks`                                   | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `RegionNode::is_unreachable_from_root`                             | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal`               | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `PhaseIdealLoop::compute_lca_of_uses`                              | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `Node::dominates`                                                  | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseCFG::remove_empty_blocks`                                    | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseOutput::BuildOopMaps`                                        | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `ConnectionGraph::compute_escape`                                  | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Scheduling::AddNodeToBundle`                                      | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `MethodLiveness::get_liveness_at`                                  | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `BlockBegin::iterate_preorder`                                     | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `LinearScan::sort_intervals_after_allocation`                      | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseCFG::partial_latency_of_defs`                                | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `CodeSection::relocate`                                            | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `ciConstantPoolCache::get`                                         | `libjvm.dylib` |

##### Ours

| Change | Delta |            % | Samples | Function                                                                                                                                                     | Location                                                                                                |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
|    new |    +2 |  0.0% → 0.1% |   0 → 2 | `checkAssertions()`                                                                                                                                          | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`                                         |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `get(Object)`                                                                                                                                                | `com.intellij.util.containers.ConcurrentFactoryMap`                                                     |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `withParameters(FirCallableDeclaration, SessionAndScopeSessionHolder, Function0)`                                                                            | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveContext`                         |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `transformRegularClass(FirRegularClass, ResolutionMode)`                                                                                                     | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`          |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `extractClassMetadata(ClassId, FirDeserializationContext)`                                                                                                   | `org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`                         |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `transformWhenBranch(FirWhenBranch, ResolutionMode)`                                                                                                         | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `newlineBeforeCurrentToken()`                                                                                                                                | `org.jetbrains.kotlin.parsing.SemanticWhitespaceAwarePsiBuilderImpl`                                    |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `getAnnotations()`                                                                                                                                           | `org.jetbrains.kotlin.fir.types.builder.FirResolvedTypeRefBuilder`                                      |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `<init>(FirScope, ImplicitReceiverValue, List, boolean, FirRegularClassSymbol, int, DefaultConstructorMarker)`                                               | `org.jetbrains.kotlin.fir.declarations.FirTowerDataElement`                                             |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `transformChildren(FirTransformer, Object)`                                                                                                                  | `org.jetbrains.kotlin.fir.declarations.impl.FirResolvedImportImpl`                                      |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `getCalleeReference()`                                                                                                                                       | `org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl`                                         |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `loadFunctionAnnotations(DeserializedContainerSource, ProtoBuf$Function, NameResolver, TypeTable)`                                                           | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer`                         |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `enqueueResolveTasksForExpressionReceiver(CallInfo, FirExpression)`                                                                                          | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirInvokeResolveTowerExtension`                           |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `<init>(FirModuleData, NameResolver, TypeTable, AnnotationDeserializer, FirTypeDeserializer$FlexibleTypeFactory, List, FirTypeDeserializer, FirBasedSymbol)` | `org.jetbrains.kotlin.fir.deserialization.FirTypeDeserializer`                                          |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `check(CheckerContext, DiagnosticReporter, FirDeclaration)`                                                                                                  | `org.jetbrains.kotlin.fir.analysis.jvm.checkers.declaration.FirJvmRedundantRepeatableChecker`           |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `check(CheckerContext, DiagnosticReporter, FirDeclaration)`                                                                                                  | `org.jetbrains.kotlin.fir.analysis.jvm.checkers.declaration.FirJvmNameChecker`                          |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `check(CheckerContext, DiagnosticReporter, FirDeclaration)`                                                                                                  | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirDataObjectContentChecker`                    |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `registerComponent(String, Object)`                                                                                                                          | `org.jetbrains.kotlin.util.AttributeArrayOwner`                                                         |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `<init>()`                                                                                                                                                   | `org.jetbrains.kotlin.types.AbstractTypeApproximator$Cache`                                             |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitVararg(IrVararg)`                                                                                                                                      | `org.jetbrains.kotlin.ir.visitors.IrVisitorVoid`                                                        |

##### JIT

|  Change | Delta |            % | Samples | Function                 | Location    |
| ------: | ----: | -----------: | ------: | ------------------------ | ----------- |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `I2C/C2I adapters(0xbb)` | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `itable stub`            | `<unknown>` |

##### Standard library

| Change | Delta |            % | Samples | Function                                                    | Location                              |
| -----: | ----: | -----------: | ------: | ----------------------------------------------------------- | ------------------------------------- |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `replace$default(String, char, char, boolean, int, Object)` | `kotlin.text.StringsKt__StringsJVMKt` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `get(Object)`                                               | `java.util.IdentityHashMap`           |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

##### Compiler

|  Change | Delta |            % | Samples | Function                                      | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------------------- | -------------- |
|  -60.0% |    -3 |  0.2% → 0.1% |   5 → 2 | `IndexSetIterator::advance_and_next`          | `libjvm.dylib` |
|  -66.7% |    -2 | 0.1% → <0.1% |   3 → 1 | `PhaseChaitin::post_allocate_copy_removal`    | `libjvm.dylib` |
|  -66.7% |    -2 | 0.1% → <0.1% |   3 → 1 | `PhaseIdealLoop::build_loop_early`            | `libjvm.dylib` |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `Type::cmp`                                   | `libjvm.dylib` |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `LinearScan::build_intervals`                 | `libjvm.dylib` |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `LinearScanWalker::free_collect_inactive_any` | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseChaitin::build_ifg_virtual`             | `libjvm.dylib` |
|  -50.0% |    -1 | 0.1% → <0.1% |   2 → 1 | `Node::clone`                                 | `libjvm.dylib` |
|  -16.7% |    -1 |         0.2% |   6 → 5 | `PhaseChaitin::Split`                         | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `TypeTuple::hash`                             | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `IndexSet::initialize`                        | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `IfTrueNode::always_taken`                    | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Compile::flatten_alias_type`                 | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseCCP::transform_once`                    | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseCCP::transform`                         | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `CodeBuffer::relocate_code_to`                | `libjvm.dylib` |
|  -50.0% |    -1 | 0.1% → <0.1% |   2 → 1 | `PhaseIFG::re_insert`                         | `libjvm.dylib` |
|  -50.0% |    -1 | 0.1% → <0.1% |   2 → 1 | `PhaseIterGVN::add_users_to_worklist`         | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Node::nonnull_req`                           | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseCCP::push_catch`                        | `libjvm.dylib` |

##### Ours

|  Change | Delta |            % | Samples | Function                                                                                                     | Location                                                                                                                |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `invoke(FirResolvePhase)`                                                                                    | `org.jetbrains.kotlin.fir.declarations.FirResolvedToPhaseState$Companion`                                               |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `contains(IElementType)`                                                                                     | `com.intellij.psi.tree.TokenSet`                                                                                        |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `resolveType(FirSpecificTypeResolverTransformer, FirTypeRef, TypeResolutionConfiguration, boolean)`          | `org.jetbrains.kotlin.fir.resolve.transformers.FirSpecificTypeResolverTransformer`                                      |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `parent()`                                                                                                   | `org.jetbrains.kotlin.name.FqName`                                                                                      |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getTopLevelCallableNamesInPackage(FqName)`                                                                  | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirProviderImpl$SymbolProvider$symbolNamesProvider$1`                  |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `isTypeVariableWithExact(KotlinTypeMarker)`                                                                  | `org.jetbrains.kotlin.resolve.calls.inference.components.TypeCheckerStateForConstraintSystem`                           |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `computePostponeArgumentsEdges()`                                                                            | `org.jetbrains.kotlin.resolve.calls.inference.components.TypeVariableDependencyInformationProvider`                     |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `simplifyLowerConstraint(KotlinTypeMarker, KotlinTypeMarker, boolean, boolean)`                              | `org.jetbrains.kotlin.resolve.calls.inference.components.TypeCheckerStateForConstraintSystem`                           |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `collectSuperTypes(FirClassLikeSymbol, List, Set, boolean, boolean, boolean, FirSession, SupertypeSupplier)` | `org.jetbrains.kotlin.fir.resolve.SupertypeUtilsKt`                                                                     |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `readRawVarint32()`                                                                                          | `org.jetbrains.kotlin.protobuf.CodedInputStream`                                                                        |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitEnd()`                                                                                                 | `org.jetbrains.kotlin.fir.java.deserialization.AnnotationsLoader$loadAnnotation$1`                                      |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `check(CheckerSink, ResolutionContext, Candidate, Continuation)`                                             | `org.jetbrains.kotlin.fir.resolve.calls.stages.MapArguments`                                                            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<init>(boolean, ConeTypeVariableTypeConstructor, ConeAttributes)`                                           | `org.jetbrains.kotlin.fir.types.ConeTypeVariableType`                                                                   |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `copyImplications(MutableFlow, Collection)`                                                                  | `org.jetbrains.kotlin.fir.resolve.dfa.LogicSystem`                                                                      |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getPrivateApi()`                                                                                            | `org.jetbrains.kotlin.descriptors.EffectiveVisibility`                                                                  |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `hasNext()`                                                                                                  | `org.jetbrains.kotlin.utils.SmartList$SingletonIteratorBase`                                                            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `equals(Object)`                                                                                             | `org.jetbrains.kotlin.name.FqNameUnsafe`                                                                                |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `nameIdentifier(FlyweightCapableTreeStructure, LighterASTNode)`                                              | `org.jetbrains.kotlin.diagnostics.LightTreePositioningStrategiesKt`                                                     |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<init>()`                                                                                                   | `org.jetbrains.kotlin.fir.analysis.collectors.components.ControlFlowAnalysisDiagnosticComponent$LocalPropertyCollector` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `acceptChildren(FirVisitor, Object)`                                                                         | `org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl`                                                         |

##### JIT

|  Change | Delta |            % | Samples | Function                  | Location    |
| ------: | ----: | -----------: | ------: | ------------------------- | ----------- |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `zero_blocks`             | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xbbb)` | `<unknown>` |

##### Standard library

|  Change | Delta |            % | Samples | Function        | Location                                 |
| ------: | ----: | -----------: | ------: | --------------- | ---------------------------------------- |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `size()`        | `java.util.ArrayList`                    |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `min(int, int)` | `java.lang.Math`                         |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `iterator()`    | `java.util.LinkedHashMap$LinkedEntrySet` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |            % |  Samples | Function                                        | Location                                                                            |
| ------: | ----: | -----------: | -------: | ----------------------------------------------- | ----------------------------------------------------------------------------------- |
|  +24.2% |    +8 |  1.2% → 1.5% |  33 → 41 | `Compile::Optimize`                             | `libjvm.dylib`                                                                      |
|  +80.0% |    +8 |  0.4% → 0.7% |  10 → 18 | `PhaseIterGVN::transform_old`                   | `libjvm.dylib`                                                                      |
|  +80.0% |    +8 |  0.4% → 0.7% |  10 → 18 | `PhaseIterGVN::optimize`                        | `libjvm.dylib`                                                                      |
|  +43.8% |    +7 |  0.6% → 0.8% |  16 → 23 | `PhaseIdealLoop::optimize`                      | `libjvm.dylib`                                                                      |
| +350.0% |    +7 |  0.1% → 0.3% |    2 → 9 | `ciEnv::register_method`                        | `libjvm.dylib`                                                                      |
|   +5.1% |    +5 |  3.6% → 3.8% | 98 → 103 | `Compile::Compile`                              | `libjvm.dylib`                                                                      |
|   +5.1% |    +5 |  3.6% → 3.8% | 98 → 103 | `C2Compiler::compile_method`                    | `libjvm.dylib`                                                                      |
| +400.0% |    +4 | <0.1% → 0.2% |    1 → 5 | `PhaseChaitin::build_ifg_physical`              | `libjvm.dylib`                                                                      |
|  +30.8% |    +4 |  0.5% → 0.6% |  13 → 17 | `PhaseIdealLoop::build_and_optimize`            | `libjvm.dylib`                                                                      |
|  +30.8% |    +4 |  0.5% → 0.6% |  13 → 17 | `PhaseIdealLoop::PhaseIdealLoop`                | `libjvm.dylib`                                                                      |
| +133.3% |    +4 |  0.1% → 0.3% |    3 → 7 | `PhaseCFG::global_code_motion`                  | `libjvm.dylib`                                                                      |
| +133.3% |    +4 |  0.1% → 0.3% |    3 → 7 | `PhaseCFG::do_global_code_motion`               | `libjvm.dylib`                                                                      |
|     new |    +4 |  0.0% → 0.1% |    0 → 4 | `PhaseIdealLoop::compute_lca_of_uses`           | `libjvm.dylib`                                                                      |
|  +75.0% |    +3 |  0.1% → 0.3% |    4 → 7 | `PhaseIdealLoop::build_loop_late_post_work`     | `libjvm.dylib`                                                                      |
|  +60.0% |    +3 |  0.2% → 0.3% |    5 → 8 | `PhaseIdealLoop::build_loop_late`               | `libjvm.dylib`                                                                      |
| +300.0% |    +3 | <0.1% → 0.1% |    1 → 4 | `MethodLiveness::get_liveness_at`               | `libjvm.dylib`                                                                      |
| +300.0% |    +3 | <0.1% → 0.1% |    1 → 4 | `LinearScanWalker::free_collect_inactive_fixed` | `libjvm.dylib`                                                                      |
| +300.0% |    +3 | <0.1% → 0.1% |    1 → 4 | `I2C/C2I adapters(0xbb)`                        | `<unknown>`                                                                         |
| +100.0% |    +3 |  0.1% → 0.2% |    3 → 6 | `getValue(Object, Object)`                      | `org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCacheWithPostCompute`               |
| +100.0% |    +3 |  0.1% → 0.2% |    3 → 6 | `computeClass(ClassId)`                         | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider` |

##### Compiler

|  Change | Delta |            % |  Samples | Function                                        | Location       |
| ------: | ----: | -----------: | -------: | ----------------------------------------------- | -------------- |
|  +24.2% |    +8 |  1.2% → 1.5% |  33 → 41 | `Compile::Optimize`                             | `libjvm.dylib` |
|  +80.0% |    +8 |  0.4% → 0.7% |  10 → 18 | `PhaseIterGVN::transform_old`                   | `libjvm.dylib` |
|  +80.0% |    +8 |  0.4% → 0.7% |  10 → 18 | `PhaseIterGVN::optimize`                        | `libjvm.dylib` |
|  +43.8% |    +7 |  0.6% → 0.8% |  16 → 23 | `PhaseIdealLoop::optimize`                      | `libjvm.dylib` |
| +350.0% |    +7 |  0.1% → 0.3% |    2 → 9 | `ciEnv::register_method`                        | `libjvm.dylib` |
|   +5.1% |    +5 |  3.6% → 3.8% | 98 → 103 | `Compile::Compile`                              | `libjvm.dylib` |
|   +5.1% |    +5 |  3.6% → 3.8% | 98 → 103 | `C2Compiler::compile_method`                    | `libjvm.dylib` |
| +400.0% |    +4 | <0.1% → 0.2% |    1 → 5 | `PhaseChaitin::build_ifg_physical`              | `libjvm.dylib` |
|  +30.8% |    +4 |  0.5% → 0.6% |  13 → 17 | `PhaseIdealLoop::build_and_optimize`            | `libjvm.dylib` |
|  +30.8% |    +4 |  0.5% → 0.6% |  13 → 17 | `PhaseIdealLoop::PhaseIdealLoop`                | `libjvm.dylib` |
| +133.3% |    +4 |  0.1% → 0.3% |    3 → 7 | `PhaseCFG::global_code_motion`                  | `libjvm.dylib` |
| +133.3% |    +4 |  0.1% → 0.3% |    3 → 7 | `PhaseCFG::do_global_code_motion`               | `libjvm.dylib` |
|     new |    +4 |  0.0% → 0.1% |    0 → 4 | `PhaseIdealLoop::compute_lca_of_uses`           | `libjvm.dylib` |
|  +75.0% |    +3 |  0.1% → 0.3% |    4 → 7 | `PhaseIdealLoop::build_loop_late_post_work`     | `libjvm.dylib` |
|  +60.0% |    +3 |  0.2% → 0.3% |    5 → 8 | `PhaseIdealLoop::build_loop_late`               | `libjvm.dylib` |
| +300.0% |    +3 | <0.1% → 0.1% |    1 → 4 | `MethodLiveness::get_liveness_at`               | `libjvm.dylib` |
| +300.0% |    +3 | <0.1% → 0.1% |    1 → 4 | `LinearScanWalker::free_collect_inactive_fixed` | `libjvm.dylib` |
|     new |    +3 |  0.0% → 0.1% |    0 → 3 | `ciTypeFlow::flow_types`                        | `libjvm.dylib` |
|     new |    +3 |  0.0% → 0.1% |    0 → 3 | `ciTypeFlow::do_flow`                           | `libjvm.dylib` |
|     new |    +3 |  0.0% → 0.1% |    0 → 3 | `ciMethod::get_flow_analysis`                   | `libjvm.dylib` |

##### Ours

|  Change | Delta |           % | Samples | Function                                                                                                                                                     | Location                                                                                                           |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| +100.0% |    +3 | 0.1% → 0.2% |   3 → 6 | `getValue(Object, Object)`                                                                                                                                   | `org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCacheWithPostCompute`                                              |
| +100.0% |    +3 | 0.1% → 0.2% |   3 → 6 | `computeClass(ClassId)`                                                                                                                                      | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`                                |
| +100.0% |    +3 | 0.1% → 0.2% |   3 → 6 | `access$computeClass(FirCachingCompositeSymbolProvider, ClassId)`                                                                                            | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`                                |
| +100.0% |    +3 | 0.1% → 0.2% |   3 → 6 | `invoke(Object, Void)`                                                                                                                                       | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$special$$inlined$createCache$1` |
| +100.0% |    +3 | 0.1% → 0.2% |   3 → 6 | `invoke(Object, Object)`                                                                                                                                     | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$special$$inlined$createCache$1` |
|     new |    +3 | 0.0% → 0.1% |   0 → 3 | `resolvePlainArgumentType(Candidate, ConeResolutionAtom, ConeKotlinType, ConeKotlinType, CheckerSink, ResolutionContext, boolean, boolean, KtSourceElement)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor`                                          |
|     new |    +3 | 0.0% → 0.1% |   0 → 3 | `resolveExtensionReceiver(CheckerSink, ResolutionContext, ImplicitArgumentDescription, Candidate, ConeKotlinType, Continuation)`                             | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckExtensionReceiver`                                             |
|     new |    +3 | 0.0% → 0.1% |   0 → 3 | `check(CheckerSink, ResolutionContext, Candidate, Continuation)`                                                                                             | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckExtensionReceiver`                                             |
|  +50.0% |    +2 | 0.1% → 0.2% |   4 → 6 | `getClassLikeSymbolByClassId(ClassId)`                                                                                                                       | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`                                |
|  +66.7% |    +2 | 0.1% → 0.2% |   3 → 5 | `processSymbolsByName(Name, Function3, Function1)`                                                                                                           | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`                                                |
| +100.0% |    +2 |        0.1% |   2 → 4 | `transformElement(FirElement, Object)`                                                                                                                       | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`           |
|  +66.7% |    +2 | 0.1% → 0.2% |   3 → 5 | `findAndDeserializeClass(ClassId, FirDeserializationContext)`                                                                                                | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`                                   |
|  +66.7% |    +2 | 0.1% → 0.2% |   3 → 5 | `classCache$lambda$0(AbstractFirDeserializedSymbolProvider, ClassId, FirDeserializationContext)`                                                             | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`                                   |
|  +66.7% |    +2 | 0.1% → 0.2% |   3 → 5 | `invoke(Object, Object)`                                                                                                                                     | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$$Lambda.0x0000000501471c08`        |
|  +66.7% |    +2 | 0.1% → 0.2% |   3 → 5 | `getClass(ClassId, FirDeserializationContext)`                                                                                                               | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`                                   |
|  +66.7% |    +2 | 0.1% → 0.2% |   3 → 5 | `getClass$default(AbstractFirDeserializedSymbolProvider, ClassId, FirDeserializationContext, int, Object)`                                                   | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`                                   |
|  +66.7% |    +2 | 0.1% → 0.2% |   3 → 5 | `getClassLikeSymbolByClassId(ClassId)`                                                                                                                       | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`                                   |
|  +50.0% |    +2 | 0.1% → 0.2% |   4 → 6 | `transformWhenBranch(FirWhenBranch, ResolutionMode)`                                                                                                         | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer`            |
|  +50.0% |    +2 | 0.1% → 0.2% |   4 → 6 | `transformWhenBranch(FirWhenBranch, ResolutionMode)`                                                                                                         | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`           |
|  +50.0% |    +2 | 0.1% → 0.2% |   4 → 6 | `transformWhenBranch(FirWhenBranch, Object)`                                                                                                                 | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`           |

##### JIT

|  Change | Delta |            % | Samples | Function                 | Location    |
| ------: | ----: | -----------: | ------: | ------------------------ | ----------- |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `I2C/C2I adapters(0xbb)` | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `itable stub`            | `<unknown>` |

##### Standard library

| Change | Delta |            % | Samples | Function                                                        | Location                              |
| -----: | ----: | -----------: | ------: | --------------------------------------------------------------- | ------------------------------------- |
|  +7.7% |    +1 |         0.5% | 13 → 14 | `read(byte[])`                                                  | `java.io.FilterInputStream`           |
|  +7.7% |    +1 |         0.5% | 13 → 14 | `loadClass(String, boolean)`                                    | `java.lang.ClassLoader`               |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `get(Object)`                                                   | `java.util.HashMap`                   |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `runBlocking$default(CoroutineContext, Function2, int, Object)` | `kotlinx.coroutines.BuildersKt`       |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `loadClass(String)`                                             | `java.lang.ClassLoader`               |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `replace$default(String, char, char, boolean, int, Object)`     | `kotlin.text.StringsKt__StringsJVMKt` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `linkToTargetMethod(Object, Object, Object, Object)`            | `java.lang.invoke.Invokers$Holder`    |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `replaceAll(UnaryOperator)`                                     | `java.util.ArrayList`                 |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `iterator()`                                                    | `java.util.ArrayList`                 |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `linkToTargetMethod(Object, Object)`                            | `java.lang.invoke.Invokers$Holder`    |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `subList(int, int)`                                             | `java.util.AbstractList`              |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `get(Object)`                                                   | `java.util.IdentityHashMap`           |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |            % | Samples | Function                                                                                                             | Location                                                                              |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|  -22.2% |   -10 |  1.7% → 1.3% | 45 → 35 | `Compilation::compile_java_method`                                                                                   | `libjvm.dylib`                                                                        |
|  -29.2% |    -7 |  0.9% → 0.6% | 24 → 17 | `Compilation::emit_lir`                                                                                              | `libjvm.dylib`                                                                        |
|  -63.6% |    -7 |  0.4% → 0.1% |  11 → 4 | `GraphBuilder::iterate_bytecodes_for_block`                                                                          | `libjvm.dylib`                                                                        |
|  -63.6% |    -7 |  0.4% → 0.1% |  11 → 4 | `GraphBuilder::iterate_all_blocks`                                                                                   | `libjvm.dylib`                                                                        |
|  -31.6% |    -6 |  0.7% → 0.5% | 19 → 13 | `LinearScan::do_linear_scan`                                                                                         | `libjvm.dylib`                                                                        |
|  -54.5% |    -6 |  0.4% → 0.2% |  11 → 5 | `GraphBuilder::GraphBuilder`                                                                                         | `libjvm.dylib`                                                                        |
|  -54.5% |    -6 |  0.4% → 0.2% |  11 → 5 | `accept(IrVisitor, Object)`                                                                                          | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`                                     |
|  -17.2% |    -5 |  1.1% → 0.9% | 29 → 24 | `PhaseChaitin::Register_Allocate`                                                                                    | `libjvm.dylib`                                                                        |
|  -83.3% |    -5 | 0.2% → <0.1% |   6 → 1 | `Type::hashcons`                                                                                                     | `libjvm.dylib`                                                                        |
|  -62.5% |    -5 |  0.3% → 0.1% |   8 → 3 | `GraphBuilder::try_inline_full`                                                                                      | `libjvm.dylib`                                                                        |
|  -62.5% |    -5 |  0.3% → 0.1% |   8 → 3 | `GraphBuilder::try_inline`                                                                                           | `libjvm.dylib`                                                                        |
|  -38.5% |    -5 |  0.5% → 0.3% |  13 → 8 | `handleLevel(CandidateCollector, CandidateFactory, CallInfo, ExplicitReceiverKind, TowerGroup, TowerLevel)`          | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelHandler`                      |
|  -38.5% |    -5 |  0.5% → 0.3% |  13 → 8 | `processLevel(TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)`                                 | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`                |
|  -38.5% |    -5 |  0.5% → 0.3% |  13 → 8 | `access$processLevel(FirBaseTowerResolveTask, TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`                |
|  -38.5% |    -5 |  0.5% → 0.3% |  13 → 8 | `resumeTask(TowerResolveManager$SuspendedResolverTask)`                                                              | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`                    |
|  -38.5% |    -5 |  0.5% → 0.3% |  13 → 8 | `runTasks()`                                                                                                         | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`                    |
|  -80.0% |    -4 | 0.2% → <0.1% |   5 → 1 | `PhaseGVN::transform_no_reclaim`                                                                                     | `libjvm.dylib`                                                                        |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `LinearScan::assign_reg_num`                                                                                         | `libjvm.dylib`                                                                        |
|  -50.0% |    -4 |  0.3% → 0.1% |   8 → 4 | `GraphBuilder::invoke`                                                                                               | `libjvm.dylib`                                                                        |
|  -36.4% |    -4 |  0.4% → 0.3% |  11 → 7 | `invokeSuspend(Object)`                                                                                              | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6` |

##### Compiler

|  Change | Delta |            % | Samples | Function                                    | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------- | -------------- |
|  -22.2% |   -10 |  1.7% → 1.3% | 45 → 35 | `Compilation::compile_java_method`          | `libjvm.dylib` |
|  -29.2% |    -7 |  0.9% → 0.6% | 24 → 17 | `Compilation::emit_lir`                     | `libjvm.dylib` |
|  -63.6% |    -7 |  0.4% → 0.1% |  11 → 4 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |
|  -63.6% |    -7 |  0.4% → 0.1% |  11 → 4 | `GraphBuilder::iterate_all_blocks`          | `libjvm.dylib` |
|  -31.6% |    -6 |  0.7% → 0.5% | 19 → 13 | `LinearScan::do_linear_scan`                | `libjvm.dylib` |
|  -54.5% |    -6 |  0.4% → 0.2% |  11 → 5 | `GraphBuilder::GraphBuilder`                | `libjvm.dylib` |
|  -17.2% |    -5 |  1.1% → 0.9% | 29 → 24 | `PhaseChaitin::Register_Allocate`           | `libjvm.dylib` |
|  -83.3% |    -5 | 0.2% → <0.1% |   6 → 1 | `Type::hashcons`                            | `libjvm.dylib` |
|  -62.5% |    -5 |  0.3% → 0.1% |   8 → 3 | `GraphBuilder::try_inline_full`             | `libjvm.dylib` |
|  -62.5% |    -5 |  0.3% → 0.1% |   8 → 3 | `GraphBuilder::try_inline`                  | `libjvm.dylib` |
|  -80.0% |    -4 | 0.2% → <0.1% |   5 → 1 | `PhaseGVN::transform_no_reclaim`            | `libjvm.dylib` |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `LinearScan::assign_reg_num`                | `libjvm.dylib` |
|  -50.0% |    -4 |  0.3% → 0.1% |   8 → 4 | `GraphBuilder::invoke`                      | `libjvm.dylib` |
|  -60.0% |    -3 |  0.2% → 0.1% |   5 → 2 | `IndexSetIterator::advance_and_next`        | `libjvm.dylib` |
|  -60.0% |    -3 |  0.2% → 0.1% |   5 → 2 | `PhaseChaitin::post_allocate_copy_removal`  | `libjvm.dylib` |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `Compile::flatten_alias_type`               | `libjvm.dylib` |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `Compile::find_alias_type`                  | `libjvm.dylib` |
|  -60.0% |    -3 |  0.2% → 0.1% |   5 → 2 | `PhaseMacroExpand::expand_macro_nodes`      | `libjvm.dylib` |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `PhaseCCP::transform`                       | `libjvm.dylib` |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `PhaseCCP::do_transform`                    | `libjvm.dylib` |

##### Ours

|  Change | Delta |           % | Samples | Function                                                                                                                                                                                                                                                 | Location                                                                              |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|  -54.5% |    -6 | 0.4% → 0.2% |  11 → 5 | `accept(IrVisitor, Object)`                                                                                                                                                                                                                              | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`                                     |
|  -38.5% |    -5 | 0.5% → 0.3% |  13 → 8 | `handleLevel(CandidateCollector, CandidateFactory, CallInfo, ExplicitReceiverKind, TowerGroup, TowerLevel)`                                                                                                                                              | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelHandler`                      |
|  -38.5% |    -5 | 0.5% → 0.3% |  13 → 8 | `processLevel(TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)`                                                                                                                                                                     | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`                |
|  -38.5% |    -5 | 0.5% → 0.3% |  13 → 8 | `access$processLevel(FirBaseTowerResolveTask, TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)`                                                                                                                                     | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`                |
|  -38.5% |    -5 | 0.5% → 0.3% |  13 → 8 | `resumeTask(TowerResolveManager$SuspendedResolverTask)`                                                                                                                                                                                                  | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`                    |
|  -38.5% |    -5 | 0.5% → 0.3% |  13 → 8 | `runTasks()`                                                                                                                                                                                                                                             | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`                    |
|  -36.4% |    -4 | 0.4% → 0.3% |  11 → 7 | `invokeSuspend(Object)`                                                                                                                                                                                                                                  | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6` |
|  -30.8% |    -4 | 0.5% → 0.3% |  13 → 9 | `runResolver(CallInfo, ResolutionContext, CandidateCollector, TowerResolveManager, CandidateFactory)`                                                                                                                                                    | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`                       |
|  -30.8% |    -4 | 0.5% → 0.3% |  13 → 9 | `runResolver(CallInfo, ResolutionContext, CandidateCollector, CandidateFactory)`                                                                                                                                                                         | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`                       |
|  -30.8% |    -4 | 0.5% → 0.3% |  13 → 9 | `runResolver$default(FirTowerResolver, CallInfo, ResolutionContext, CandidateCollector, CandidateFactory, int, Object)`                                                                                                                                  | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`                       |
|  -30.8% |    -4 | 0.5% → 0.3% |  13 → 9 | `collectCandidates(FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext)`                                       | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                              |
|  -30.8% |    -4 | 0.5% → 0.3% |  13 → 9 | `collectCandidates$default(FirCallResolver, FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                              |
|  -66.7% |    -4 | 0.2% → 0.1% |   6 → 2 | `completeCall(FirExpression, ResolutionMode, boolean)`                                                                                                                                                                                                   | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`                         |
|  -66.7% |    -4 | 0.2% → 0.1% |   6 → 2 | `processMembers(CallInfo, TowerLevelProcessor, Function2)`                                                                                                                                                                                               | `org.jetbrains.kotlin.fir.resolve.calls.tower.DispatchReceiverMemberScopeTowerLevel`  |
|  -57.1% |    -4 | 0.3% → 0.1% |   7 → 3 | `visitStatementContainer(IrStatementContainer, BlockInfo)`                                                                                                                                                                                               | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                          |
|  -57.1% |    -4 | 0.3% → 0.1% |   7 → 3 | `visitBlockBody(IrBlockBody, BlockInfo)`                                                                                                                                                                                                                 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                          |
|  -57.1% |    -4 | 0.3% → 0.1% |   7 → 3 | `visitBlockBody(IrBlockBody, Object)`                                                                                                                                                                                                                    | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                          |
|  -57.1% |    -4 | 0.3% → 0.1% |   7 → 3 | `generate()`                                                                                                                                                                                                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                          |
|  -33.3% |    -3 | 0.3% → 0.2% |   9 → 6 | `transformSingle(FirElement, FirTransformer, Object)`                                                                                                                                                                                                    | `org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`                              |
| removed |    -3 | 0.1% → 0.0% |   3 → 0 | `computeDirectOverriddenForDeclaredFunction(FirNamedFunctionSymbol)`                                                                                                                                                                                     | `org.jetbrains.kotlin.fir.scopes.impl.AbstractFirUseSiteMemberScope`                  |

##### JIT

|  Change | Delta |            % | Samples | Function                      | Location    |
| ------: | ----: | -----------: | ------: | ----------------------------- | ----------- |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `zero_blocks`                 | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xbbbbbbb)` | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xbbb)`     | `<unknown>` |

##### Standard library

|  Change | Delta |            % | Samples | Function                                                         | Location                                              |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------- | ----------------------------------------------------- |
|  -30.8% |    -4 |  0.5% → 0.3% |  13 → 9 | `resumeWith(Object)`                                             | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |
|  -80.0% |    -4 | 0.2% → <0.1% |   5 → 1 | `getValue()`                                                     | `kotlin.SynchronizedLazyImpl`                         |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<init>(int)`                                                    | `java.io.ByteArrayOutputStream`                       |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `write(byte[], int, int)`                                        | `java.io.ByteArrayOutputStream`                       |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getAnnotation(Class)`                                           | `java.lang.reflect.Field`                             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `concat(String)`                                                 | `java.lang.String`                                    |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `inflate(byte[])`                                                | `java.util.zip.Inflater`                              |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getCurrentThreadUserTime()`                                     | `sun.management.ThreadImpl`                           |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `size()`                                                         | `java.util.ArrayList`                                 |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `min(int, int)`                                                  | `java.lang.Math`                                      |
|  -50.0% |    -1 | 0.1% → <0.1% |   2 → 1 | `getValue()`                                                     | `kotlin.UnsafeLazyImpl`                               |
|  -33.3% |    -1 |         0.1% |   3 → 2 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives`                |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `areEqual(Object, Object)`                                       | `kotlin.jvm.internal.Intrinsics`                      |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `iterator()`                                                     | `java.util.LinkedHashMap$LinkedEntrySet`              |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `hasMoreElements()`                                              | `java.lang.CompoundEnumeration`                       |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `hasNext()`                                                      | `java.util.ServiceLoader$3`                           |

# Profile

Collected 2,694 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Native           | 94.3% |   2,540 |
| Compiler         |  4.2% |     112 |
| Ours             |  1.0% |      28 |
| Standard library |  0.4% |      11 |
| JIT              |  0.1% |       3 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                                      | Location                         |
| ----: | ------: | --------------------------------------------- | -------------------------------- |
|  0.2% |       6 | `PhaseChaitin::Split`                         | `libjvm.dylib`                   |
|  0.2% |       5 | `IndexSetIterator::advance_and_next`          | `libjvm.dylib`                   |
|  0.1% |       3 | `PhaseChaitin::post_allocate_copy_removal`    | `libjvm.dylib`                   |
|  0.1% |       3 | `PhaseIdealLoop::build_loop_early`            | `libjvm.dylib`                   |
|  0.1% |       2 | `Node::clone`                                 | `libjvm.dylib`                   |
|  0.1% |       2 | `PhaseIFG::re_insert`                         | `libjvm.dylib`                   |
|  0.1% |       2 | `PhaseIterGVN::add_users_to_worklist`         | `libjvm.dylib`                   |
|  0.1% |       2 | `Type::cmp`                                   | `libjvm.dylib`                   |
|  0.1% |       2 | `PhaseIdealLoop::build_loop_late_post_work`   | `libjvm.dylib`                   |
|  0.1% |       2 | `MergeMemNode::Ideal`                         | `libjvm.dylib`                   |
|  0.1% |       2 | `IntervalWalker::walk_to`                     | `libjvm.dylib`                   |
|  0.1% |       2 | `LinearScan::build_intervals`                 | `libjvm.dylib`                   |
|  0.1% |       2 | `LIR_OpVisitState::visit`                     | `libjvm.dylib`                   |
|  0.1% |       2 | `LinearScanWalker::free_collect_inactive_any` | `libjvm.dylib`                   |
|  0.1% |       2 | `checkNotNullParameter(Object, String)`       | `kotlin.jvm.internal.Intrinsics` |
|  0.1% |       2 | `PhaseChaitin::elide_copy`                    | `libjvm.dylib`                   |
| <0.1% |       1 | `PhaseChaitin::build_ifg_virtual`             | `libjvm.dylib`                   |
| <0.1% |       1 | `Node::jvms`                                  | `libjvm.dylib`                   |
| <0.1% |       1 | `TypeTuple::hash`                             | `libjvm.dylib`                   |
| <0.1% |       1 | `IndexSet::initialize`                        | `libjvm.dylib`                   |

#### Categories

##### Compiler

|     % | Samples | Function                                      | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
|  0.2% |       6 | `PhaseChaitin::Split`                         | `libjvm.dylib` |
|  0.2% |       5 | `IndexSetIterator::advance_and_next`          | `libjvm.dylib` |
|  0.1% |       3 | `PhaseChaitin::post_allocate_copy_removal`    | `libjvm.dylib` |
|  0.1% |       3 | `PhaseIdealLoop::build_loop_early`            | `libjvm.dylib` |
|  0.1% |       2 | `Node::clone`                                 | `libjvm.dylib` |
|  0.1% |       2 | `PhaseIFG::re_insert`                         | `libjvm.dylib` |
|  0.1% |       2 | `PhaseIterGVN::add_users_to_worklist`         | `libjvm.dylib` |
|  0.1% |       2 | `Type::cmp`                                   | `libjvm.dylib` |
|  0.1% |       2 | `PhaseIdealLoop::build_loop_late_post_work`   | `libjvm.dylib` |
|  0.1% |       2 | `MergeMemNode::Ideal`                         | `libjvm.dylib` |
|  0.1% |       2 | `IntervalWalker::walk_to`                     | `libjvm.dylib` |
|  0.1% |       2 | `LinearScan::build_intervals`                 | `libjvm.dylib` |
|  0.1% |       2 | `LIR_OpVisitState::visit`                     | `libjvm.dylib` |
|  0.1% |       2 | `LinearScanWalker::free_collect_inactive_any` | `libjvm.dylib` |
|  0.1% |       2 | `PhaseChaitin::elide_copy`                    | `libjvm.dylib` |
| <0.1% |       1 | `PhaseChaitin::build_ifg_virtual`             | `libjvm.dylib` |
| <0.1% |       1 | `Node::jvms`                                  | `libjvm.dylib` |
| <0.1% |       1 | `TypeTuple::hash`                             | `libjvm.dylib` |
| <0.1% |       1 | `IndexSet::initialize`                        | `libjvm.dylib` |
| <0.1% |       1 | `IfTrueNode::always_taken`                    | `libjvm.dylib` |

##### Ours

|     % | Samples | Function                                                                                                     | Location                                                                                                                |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| <0.1% |       1 | `invoke(FirResolvePhase)`                                                                                    | `org.jetbrains.kotlin.fir.declarations.FirResolvedToPhaseState$Companion`                                               |
| <0.1% |       1 | `contains(IElementType)`                                                                                     | `com.intellij.psi.tree.TokenSet`                                                                                        |
| <0.1% |       1 | `resolveType(FirSpecificTypeResolverTransformer, FirTypeRef, TypeResolutionConfiguration, boolean)`          | `org.jetbrains.kotlin.fir.resolve.transformers.FirSpecificTypeResolverTransformer`                                      |
| <0.1% |       1 | `parent()`                                                                                                   | `org.jetbrains.kotlin.name.FqName`                                                                                      |
| <0.1% |       1 | `getTopLevelCallableNamesInPackage(FqName)`                                                                  | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirProviderImpl$SymbolProvider$symbolNamesProvider$1`                  |
| <0.1% |       1 | `isTypeVariableWithExact(KotlinTypeMarker)`                                                                  | `org.jetbrains.kotlin.resolve.calls.inference.components.TypeCheckerStateForConstraintSystem`                           |
| <0.1% |       1 | `computePostponeArgumentsEdges()`                                                                            | `org.jetbrains.kotlin.resolve.calls.inference.components.TypeVariableDependencyInformationProvider`                     |
| <0.1% |       1 | `simplifyLowerConstraint(KotlinTypeMarker, KotlinTypeMarker, boolean, boolean)`                              | `org.jetbrains.kotlin.resolve.calls.inference.components.TypeCheckerStateForConstraintSystem`                           |
| <0.1% |       1 | `collectSuperTypes(FirClassLikeSymbol, List, Set, boolean, boolean, boolean, FirSession, SupertypeSupplier)` | `org.jetbrains.kotlin.fir.resolve.SupertypeUtilsKt`                                                                     |
| <0.1% |       1 | `readRawVarint32()`                                                                                          | `org.jetbrains.kotlin.protobuf.CodedInputStream`                                                                        |
| <0.1% |       1 | `visitEnd()`                                                                                                 | `org.jetbrains.kotlin.fir.java.deserialization.AnnotationsLoader$loadAnnotation$1`                                      |
| <0.1% |       1 | `check(CheckerSink, ResolutionContext, Candidate, Continuation)`                                             | `org.jetbrains.kotlin.fir.resolve.calls.stages.MapArguments`                                                            |
| <0.1% |       1 | `<init>(boolean, ConeTypeVariableTypeConstructor, ConeAttributes)`                                           | `org.jetbrains.kotlin.fir.types.ConeTypeVariableType`                                                                   |
| <0.1% |       1 | `copyImplications(MutableFlow, Collection)`                                                                  | `org.jetbrains.kotlin.fir.resolve.dfa.LogicSystem`                                                                      |
| <0.1% |       1 | `getPrivateApi()`                                                                                            | `org.jetbrains.kotlin.descriptors.EffectiveVisibility`                                                                  |
| <0.1% |       1 | `hasNext()`                                                                                                  | `org.jetbrains.kotlin.utils.SmartList$SingletonIteratorBase`                                                            |
| <0.1% |       1 | `equals(Object)`                                                                                             | `org.jetbrains.kotlin.name.FqNameUnsafe`                                                                                |
| <0.1% |       1 | `nameIdentifier(FlyweightCapableTreeStructure, LighterASTNode)`                                              | `org.jetbrains.kotlin.diagnostics.LightTreePositioningStrategiesKt`                                                     |
| <0.1% |       1 | `<init>()`                                                                                                   | `org.jetbrains.kotlin.fir.analysis.collectors.components.ControlFlowAnalysisDiagnosticComponent$LocalPropertyCollector` |
| <0.1% |       1 | `acceptChildren(FirVisitor, Object)`                                                                         | `org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl`                                                         |

##### Standard library

|     % | Samples | Function                                | Location                                 |
| ----: | ------: | --------------------------------------- | ---------------------------------------- |
|  0.1% |       2 | `checkNotNullParameter(Object, String)` | `kotlin.jvm.internal.Intrinsics`         |
| <0.1% |       1 | `size()`                                | `java.util.ArrayList`                    |
| <0.1% |       1 | `min(int, int)`                         | `java.lang.Math`                         |
| <0.1% |       1 | `iterator()`                            | `java.util.LinkedHashMap$LinkedEntrySet` |

##### JIT

|     % | Samples | Function                  | Location    |
| ----: | ------: | ------------------------- | ----------- |
| <0.1% |       1 | `zero_blocks`             | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbba)` | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbbb)` | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       2 | `kotlin.jvm.internal.Intrinsics:130` |

##### `invoke(FirResolvePhase)` (`org.jetbrains.kotlin.fir.declarations.FirResolvedToPhaseState$Companion`)

|      % | Samples | Location                                                                     |
| -----: | ------: | ---------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.declarations.FirResolvedToPhaseState$Companion:44` |

##### `contains(IElementType)` (`com.intellij.psi.tree.TokenSet`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       1 | `com.intellij.psi.tree.TokenSet:54` |

##### `resolveType(FirSpecificTypeResolverTransformer, FirTypeRef, TypeResolutionConfiguration, boolean)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirSpecificTypeResolverTransformer`)

|      % | Samples | Location                                                                               |
| -----: | ------: | -------------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.resolve.transformers.FirSpecificTypeResolverTransformer:116` |

##### `parent()` (`org.jetbrains.kotlin.name.FqName`)

|      % | Samples | Location                              |
| -----: | ------: | ------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.name.FqName:61` |

##### `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirProviderImpl$SymbolProvider$symbolNamesProvider$1`)

|      % | Samples | Location                                                                                                  |
| -----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirProviderImpl$SymbolProvider$symbolNamesProvider$1:98` |

##### `isTypeVariableWithExact(KotlinTypeMarker)` (`org.jetbrains.kotlin.resolve.calls.inference.components.TypeCheckerStateForConstraintSystem`)

|      % | Samples | Location                                                                                          |
| -----: | ------: | ------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.resolve.calls.inference.components.TypeCheckerStateForConstraintSystem:124` |

##### `computePostponeArgumentsEdges()` (`org.jetbrains.kotlin.resolve.calls.inference.components.TypeVariableDependencyInformationProvider`)

|      % | Samples | Location                                                                                                |
| -----: | ------: | ------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.resolve.calls.inference.components.TypeVariableDependencyInformationProvider:125` |

##### `simplifyLowerConstraint(KotlinTypeMarker, KotlinTypeMarker, boolean, boolean)` (`org.jetbrains.kotlin.resolve.calls.inference.components.TypeCheckerStateForConstraintSystem`)

|      % | Samples | Location                                                                                          |
| -----: | ------: | ------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.resolve.calls.inference.components.TypeCheckerStateForConstraintSystem:345` |

##### `collectSuperTypes(FirClassLikeSymbol, List, Set, boolean, boolean, boolean, FirSession, SupertypeSupplier)` (`org.jetbrains.kotlin.fir.resolve.SupertypeUtilsKt`)

|      % | Samples | Location                                                |
| -----: | ------: | ------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.resolve.SupertypeUtilsKt:437` |

##### `readRawVarint32()` (`org.jetbrains.kotlin.protobuf.CodedInputStream`)

|      % | Samples | Location                                             |
| -----: | ------: | ---------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.protobuf.CodedInputStream:614` |

##### `visitEnd()` (`org.jetbrains.kotlin.fir.java.deserialization.AnnotationsLoader$loadAnnotation$1`)

|      % | Samples | Location                                                                               |
| -----: | ------: | -------------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.java.deserialization.AnnotationsLoader$loadAnnotation$1:159` |

##### `check(CheckerSink, ResolutionContext, Candidate, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.MapArguments`)

|      % | Samples | Location                                                         |
| -----: | ------: | ---------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.resolve.calls.stages.MapArguments:736` |

##### `<init>(boolean, ConeTypeVariableTypeConstructor, ConeAttributes)` (`org.jetbrains.kotlin.fir.types.ConeTypeVariableType`)

|      % | Samples | Location                                                 |
| -----: | ------: | -------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.types.ConeTypeVariableType:13` |

##### `copyImplications(MutableFlow, Collection)` (`org.jetbrains.kotlin.fir.resolve.dfa.LogicSystem`)

|      % | Samples | Location                                               |
| -----: | ------: | ------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.resolve.dfa.LogicSystem:222` |

##### `getPrivateApi()` (`org.jetbrains.kotlin.descriptors.EffectiveVisibility`)

|      % | Samples | Location                                                  |
| -----: | ------: | --------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.descriptors.EffectiveVisibility:57` |

##### `hasNext()` (`org.jetbrains.kotlin.utils.SmartList$SingletonIteratorBase`)

|      % | Samples | Location                                                         |
| -----: | ------: | ---------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.utils.SmartList$SingletonIteratorBase:243` |

##### `equals(Object)` (`org.jetbrains.kotlin.name.FqNameUnsafe`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.name.FqNameUnsafe:164` |

##### `nameIdentifier(FlyweightCapableTreeStructure, LighterASTNode)` (`org.jetbrains.kotlin.diagnostics.LightTreePositioningStrategiesKt`)

|      % | Samples | Location                                                                 |
| -----: | ------: | ------------------------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.diagnostics.LightTreePositioningStrategiesKt:1514` |

##### `<init>()` (`org.jetbrains.kotlin.fir.analysis.collectors.components.ControlFlowAnalysisDiagnosticComponent$LocalPropertyCollector`)

|      % | Samples | Location                                                                                                                    |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.analysis.collectors.components.ControlFlowAnalysisDiagnosticComponent$LocalPropertyCollector:117` |

##### `acceptChildren(FirVisitor, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl`)

|      % | Samples | Location                                                            |
| -----: | ------: | ------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl:153` |

##### `size()` (`java.util.ArrayList`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |       1 | `java.util.ArrayList:253` |

##### `min(int, int)` (`java.lang.Math`)

|      % | Samples | Location              |
| -----: | ------: | --------------------- |
| 100.0% |       1 | `java.lang.Math:2115` |

##### `iterator()` (`java.util.LinkedHashMap$LinkedEntrySet`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `java.util.LinkedHashMap$LinkedEntrySet:914` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       6 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|     % | Samples | Caller                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 20.0% |       1 | `PhaseIFG::effective_degree`      | `libjvm.dylib` |
| 20.0% |       1 | `PhaseChaitin::build_ifg_virtual` | `libjvm.dylib` |
| 20.0% |       1 | `PhaseChaitin::Simplify`          | `libjvm.dylib` |
| 20.0% |       1 | `PhaseLive::compute`              | `libjvm.dylib` |
| 20.0% |       1 | `PhaseIFG::re_insert`             | `libjvm.dylib` |

##### `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       3 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       3 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Node::clone` (`libjvm.dylib`)

|     % | Samples | Caller                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 50.0% |       1 | `GraphKit::clone_map` | `libjvm.dylib` |
| 50.0% |       1 | `PhaseCFG::build_cfg` | `libjvm.dylib` |

##### `PhaseIFG::re_insert` (`libjvm.dylib`)

|      % | Samples | Caller                 | Location       |
| -----: | ------: | ---------------------- | -------------- |
| 100.0% |       2 | `PhaseChaitin::Select` | `libjvm.dylib` |

##### `PhaseIterGVN::add_users_to_worklist` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |       2 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       2 | `PhaseIdealLoop::build_loop_late` | `libjvm.dylib` |

##### `MergeMemNode::Ideal` (`libjvm.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 50.0% |       1 | `PhaseIterGVN::transform_old`    | `libjvm.dylib` |
| 50.0% |       1 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |

##### `IntervalWalker::walk_to` (`libjvm.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 50.0% |       1 | `LinearScan::allocate_registers` | `libjvm.dylib` |
| 50.0% |       1 | `IntervalWalker::walk_to`        | `libjvm.dylib` |

##### `LinearScan::build_intervals` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |       2 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `LIR_OpVisitState::visit` (`libjvm.dylib`)

|     % | Samples | Caller                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 50.0% |       1 | `LinearScan::build_intervals` | `libjvm.dylib` |
| 50.0% |       1 | `LinearScan::assign_reg_num`  | `libjvm.dylib` |

##### `LinearScanWalker::free_collect_inactive_any` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |       2 | `LinearScanWalker::alloc_free_reg` | `libjvm.dylib` |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|     % | Samples | Caller                                                      | Location                                                      |
| ----: | ------: | ----------------------------------------------------------- | ------------------------------------------------------------- |
| 50.0% |       1 | `getValue(AbstractArrayMapOwner, KProperty)`                | `org.jetbrains.kotlin.util.NullableArrayMapAccessor`          |
| 50.0% |       1 | `relation(EffectiveVisibility, TypeCheckerProviderContext)` | `org.jetbrains.kotlin.descriptors.EffectiveVisibility$Public` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       2 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_virtual` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Node::jvms` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |       1 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |

##### `IndexSet::initialize` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       1 | `PhaseIFG::init` | `libjvm.dylib` |

##### `IfTrueNode::always_taken` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |       1 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |

##### `invoke(FirResolvePhase)` (`org.jetbrains.kotlin.fir.declarations.FirResolvedToPhaseState$Companion`)

|      % | Samples | Caller                            | Location                                                  |
| -----: | ------: | --------------------------------- | --------------------------------------------------------- |
| 100.0% |       1 | `asResolveState(FirResolvePhase)` | `org.jetbrains.kotlin.fir.declarations.FirResolveStateKt` |

##### `contains(IElementType)` (`com.intellij.psi.tree.TokenSet`)

|      % | Samples | Caller           | Location                                                             |
| -----: | ------: | ---------------- | -------------------------------------------------------------------- |
| 100.0% |       1 | `advanceLexer()` | `org.jetbrains.kotlin.parsing.SemanticWhitespaceAwarePsiBuilderImpl` |

##### `resolveType(FirSpecificTypeResolverTransformer, FirTypeRef, TypeResolutionConfiguration, boolean)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirSpecificTypeResolverTransformer`)

|      % | Samples | Caller                                                      | Location                                                                           |
| -----: | ------: | ----------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| 100.0% |       1 | `transformTypeRef(FirTypeRef, TypeResolutionConfiguration)` | `org.jetbrains.kotlin.fir.resolve.transformers.FirSpecificTypeResolverTransformer` |

##### `parent()` (`org.jetbrains.kotlin.name.FqName`)

|      % | Samples | Caller            | Location                            |
| -----: | ------: | ----------------- | ----------------------------------- |
| 100.0% |       1 | `isNestedClass()` | `org.jetbrains.kotlin.name.ClassId` |

##### `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirProviderImpl$SymbolProvider$symbolNamesProvider$1`)

|      % | Samples | Caller                                 | Location                                                                           |
| -----: | ------: | -------------------------------------- | ---------------------------------------------------------------------------------- |
| 100.0% |       1 | `computeTopLevelCallableNames(FqName)` | `org.jetbrains.kotlin.fir.resolve.providers.FirCompositeCachedSymbolNamesProvider` |

##### `isTypeVariableWithExact(KotlinTypeMarker)` (`org.jetbrains.kotlin.resolve.calls.inference.components.TypeCheckerStateForConstraintSystem`)

|      % | Samples | Caller                                                              | Location                                                                                      |
| -----: | ------: | ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `addSubtypeConstraint(KotlinTypeMarker, KotlinTypeMarker, boolean)` | `org.jetbrains.kotlin.resolve.calls.inference.components.TypeCheckerStateForConstraintSystem` |

##### `computePostponeArgumentsEdges()` (`org.jetbrains.kotlin.resolve.calls.inference.components.TypeVariableDependencyInformationProvider`)

|      % | Samples | Caller                                                                                         | Location                                                                                            |
| -----: | ------: | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `<init>(Map, List, KotlinTypeMarker, VariableFixationFinder$Context, LanguageVersionSettings)` | `org.jetbrains.kotlin.resolve.calls.inference.components.TypeVariableDependencyInformationProvider` |

##### `simplifyLowerConstraint(KotlinTypeMarker, KotlinTypeMarker, boolean, boolean)` (`org.jetbrains.kotlin.resolve.calls.inference.components.TypeCheckerStateForConstraintSystem`)

|      % | Samples | Caller                                                                               | Location                                                                                      |
| -----: | ------: | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `internalAddSubtypeConstraint(KotlinTypeMarker, KotlinTypeMarker, boolean, boolean)` | `org.jetbrains.kotlin.resolve.calls.inference.components.TypeCheckerStateForConstraintSystem` |

##### `collectSuperTypes(FirClassLikeSymbol, List, Set, boolean, boolean, boolean, FirSession, SupertypeSupplier)` (`org.jetbrains.kotlin.fir.resolve.SupertypeUtilsKt`)

|      % | Samples | Caller                                                                                 | Location                                            |
| -----: | ------: | -------------------------------------------------------------------------------------- | --------------------------------------------------- |
| 100.0% |       1 | `lookupSuperTypes(FirClass, boolean, boolean, FirSession, boolean, SupertypeSupplier)` | `org.jetbrains.kotlin.fir.resolve.SupertypeUtilsKt` |

##### `readRawVarint32()` (`org.jetbrains.kotlin.protobuf.CodedInputStream`)

|      % | Samples | Caller       | Location                                         |
| -----: | ------: | ------------ | ------------------------------------------------ |
| 100.0% |       1 | `readEnum()` | `org.jetbrains.kotlin.protobuf.CodedInputStream` |

##### `visitEnd()` (`org.jetbrains.kotlin.fir.java.deserialization.AnnotationsLoader$loadAnnotation$1`)

|      % | Samples | Caller       | Location                                                  |
| -----: | ------: | ------------ | --------------------------------------------------------- |
| 100.0% |       1 | `visitEnd()` | `org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass$3` |

##### `check(CheckerSink, ResolutionContext, Candidate, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.MapArguments`)

|      % | Samples | Caller                  | Location                                                                                 |
| -----: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% |       1 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1` |

##### `<init>(boolean, ConeTypeVariableTypeConstructor, ConeAttributes)` (`org.jetbrains.kotlin.fir.types.ConeTypeVariableType`)

|      % | Samples | Caller                                                                                            | Location                                              |
| -----: | ------: | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| 100.0% |       1 | `<init>(boolean, ConeTypeVariableTypeConstructor, ConeAttributes, int, DefaultConstructorMarker)` | `org.jetbrains.kotlin.fir.types.ConeTypeVariableType` |

##### `copyImplications(MutableFlow, Collection)` (`org.jetbrains.kotlin.fir.resolve.dfa.LogicSystem`)

|      % | Samples | Caller                                      | Location                                           |
| -----: | ------: | ------------------------------------------- | -------------------------------------------------- |
| 100.0% |       1 | `joinFlow(Collection, Collection, boolean)` | `org.jetbrains.kotlin.fir.resolve.dfa.LogicSystem` |

##### `getPrivateApi()` (`org.jetbrains.kotlin.descriptors.EffectiveVisibility`)

|      % | Samples | Caller                                                           | Location                                                            |
| -----: | ------: | ---------------------------------------------------------------- | ------------------------------------------------------------------- |
| 100.0% |       1 | `privateKtSuperClass_delegate$lambda$0(FirSignatureEnhancement)` | `org.jetbrains.kotlin.fir.java.enhancement.FirSignatureEnhancement` |

##### `hasNext()` (`org.jetbrains.kotlin.utils.SmartList$SingletonIteratorBase`)

|      % | Samples | Caller                                                                                                                      | Location                                                                     |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 100.0% |       1 | `processGivenConstraints(ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector, Collection)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector` |

##### `equals(Object)` (`org.jetbrains.kotlin.name.FqNameUnsafe`)

|      % | Samples | Caller                     | Location                         |
| -----: | ------: | -------------------------- | -------------------------------- |
| 100.0% |       1 | `areEqual(Object, Object)` | `kotlin.jvm.internal.Intrinsics` |

##### `nameIdentifier(FlyweightCapableTreeStructure, LighterASTNode)` (`org.jetbrains.kotlin.diagnostics.LightTreePositioningStrategiesKt`)

|      % | Samples | Caller                       | Location                                                              |
| -----: | ------: | ---------------------------- | --------------------------------------------------------------------- |
| 100.0% |       1 | `getRawName(FirDeclaration)` | `org.jetbrains.kotlin.fir.analysis.checkers.LightTreeSourceNavigator` |

##### `<init>()` (`org.jetbrains.kotlin.fir.analysis.collectors.components.ControlFlowAnalysisDiagnosticComponent$LocalPropertyCollector`)

|      % | Samples | Caller                                              | Location                                                                                         |
| -----: | ------: | --------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% |       1 | `analyze(FirControlFlowGraphOwner, CheckerContext)` | `org.jetbrains.kotlin.fir.analysis.collectors.components.ControlFlowAnalysisDiagnosticComponent` |

##### `acceptChildren(FirVisitor, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl`)

|      % | Samples | Caller                            | Location                                                                          |
| -----: | ------: | --------------------------------- | --------------------------------------------------------------------------------- |
| 100.0% |       1 | `visitNestedElements(FirElement)` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |

##### `size()` (`java.util.ArrayList`)

|      % | Samples | Caller                                                    | Location                                         |
| -----: | ------: | --------------------------------------------------------- | ------------------------------------------------ |
| 100.0% |       1 | `selectOnlyPureKotlinSupertypes(TypeSystemContext, List)` | `org.jetbrains.kotlin.types.AbstractTypeChecker` |

##### `min(int, int)` (`java.lang.Math`)

|      % | Samples | Caller                                                                                                                                             | Location                                                        |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| 100.0% |       1 | `configureAnnotationsAndSignature(FirVariableBuilder, FirVariable, ConeKotlinType, List, ConeKotlinType, DeferredCallableCopyReturnType, boolean)` | `org.jetbrains.kotlin.fir.scopes.impl.FirFakeOverrideGenerator` |

##### `iterator()` (`java.util.LinkedHashMap$LinkedEntrySet`)

|      % | Samples | Caller                                                                    | Location                                                                                 |
| -----: | ------: | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% |       1 | `check(CheckerContext, DiagnosticReporter, FirQualifiedAccessExpression)` | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirMissingDependencyClassChecker` |

##### `zero_blocks` (`<unknown>`)

|      % | Samples | Caller        | Location                        |
| -----: | ------: | ------------- | ------------------------------- |
| 100.0% |       1 | `<init>(int)` | `java.io.ByteArrayOutputStream` |

##### `I2C/C2I adapters(0xbbb)` (`<unknown>`)

|      % | Samples | Caller                          | Location                                                                                           |
| -----: | ------: | ------------------------------- | -------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                                                                                                      | Location                                                |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 12.1% |     327 | `CompileBroker::compiler_thread_loop`                                                                                                         | `libjvm.dylib`                                          |
|  6.8% |     182 | `CompileQueue::get`                                                                                                                           | `libjvm.dylib`                                          |
|  5.4% |     145 | `CompileBroker::invoke_compiler_on_method`                                                                                                    | `libjvm.dylib`                                          |
|  3.6% |      98 | `Compile::Compile`                                                                                                                            | `libjvm.dylib`                                          |
|  3.6% |      98 | `C2Compiler::compile_method`                                                                                                                  | `libjvm.dylib`                                          |
|  3.3% |      89 | `run(String[])`                                                                                                                               | `org.jetbrains.kotlin.preloading.Preloader`             |
|  3.3% |      89 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`             |
|  2.7% |      74 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  2.7% |      74 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  2.7% |      74 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
|  2.7% |      74 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
|  2.7% |      74 | `invoke(Object, Object[])`                                                                                                                    | `java.lang.reflect.Method`                              |
|  2.7% |      73 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
|  2.7% |      73 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
|  2.7% |      73 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  2.7% |      72 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
|  2.6% |      70 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|  2.6% |      70 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|  2.6% |      70 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|  2.6% |      70 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

#### Categories

##### Compiler

|     % | Samples | Function                                    | Location       |
| ----: | ------: | ------------------------------------------- | -------------- |
| 12.1% |     327 | `CompileBroker::compiler_thread_loop`       | `libjvm.dylib` |
|  6.8% |     182 | `CompileQueue::get`                         | `libjvm.dylib` |
|  5.4% |     145 | `CompileBroker::invoke_compiler_on_method`  | `libjvm.dylib` |
|  3.6% |      98 | `Compile::Compile`                          | `libjvm.dylib` |
|  3.6% |      98 | `C2Compiler::compile_method`                | `libjvm.dylib` |
|  1.9% |      50 | `Compile::Code_Gen`                         | `libjvm.dylib` |
|  1.7% |      46 | `Compilation::compile_method`               | `libjvm.dylib` |
|  1.7% |      46 | `Compilation::Compilation`                  | `libjvm.dylib` |
|  1.7% |      45 | `Compilation::compile_java_method`          | `libjvm.dylib` |
|  1.2% |      33 | `Compile::Optimize`                         | `libjvm.dylib` |
|  1.1% |      29 | `PhaseChaitin::Register_Allocate`           | `libjvm.dylib` |
|  0.9% |      24 | `Compilation::emit_lir`                     | `libjvm.dylib` |
|  0.7% |      19 | `LinearScan::do_linear_scan`                | `libjvm.dylib` |
|  0.6% |      16 | `PhaseIdealLoop::optimize`                  | `libjvm.dylib` |
|  0.5% |      14 | `Compilation::build_hir`                    | `libjvm.dylib` |
|  0.5% |      13 | `PhaseIdealLoop::build_and_optimize`        | `libjvm.dylib` |
|  0.5% |      13 | `PhaseIdealLoop::PhaseIdealLoop`            | `libjvm.dylib` |
|  0.4% |      11 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |
|  0.4% |      11 | `GraphBuilder::iterate_all_blocks`          | `libjvm.dylib` |
|  0.4% |      11 | `GraphBuilder::GraphBuilder`                | `libjvm.dylib` |

##### Ours

|    % | Samples | Function                                                                                                                                      | Location                                                |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 3.3% |      89 | `run(String[])`                                                                                                                               | `org.jetbrains.kotlin.preloading.Preloader`             |
| 3.3% |      89 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`             |
| 2.7% |      74 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 2.7% |      74 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 2.7% |      74 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 2.7% |      74 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 2.7% |      73 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 2.7% |      73 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 2.7% |      73 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 2.7% |      72 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 2.6% |      70 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 2.6% |      70 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 2.6% |      70 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 2.6% |      70 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 2.6% |      70 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 2.6% |      70 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 2.6% |      70 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 2.6% |      69 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
| 2.6% |      69 | `phaseBody(LoggingContext, Object)`                                                                                                           | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
| 2.6% |      69 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### Standard library

|     % | Samples | Function                                                         | Location                                              |
| ----: | ------: | ---------------------------------------------------------------- | ----------------------------------------------------- |
|  2.7% |      74 | `invoke(Object, Object[])`                                       | `java.lang.reflect.Method`                            |
|  0.5% |      13 | `read(byte[])`                                                   | `java.io.FilterInputStream`                           |
|  0.5% |      13 | `loadClass(String, boolean)`                                     | `java.lang.ClassLoader`                               |
|  0.5% |      13 | `resumeWith(Object)`                                             | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |
|  0.4% |      12 | `defineClass(String, byte[], int, int)`                          | `java.lang.ClassLoader`                               |
|  0.2% |       5 | `getValue()`                                                     | `kotlin.SynchronizedLazyImpl`                         |
|  0.1% |       3 | `getValue()`                                                     | `kotlin.SafePublicationLazyImpl`                      |
|  0.1% |       3 | `checkNotNullParameter(Object, String)`                          | `kotlin.jvm.internal.Intrinsics`                      |
|  0.1% |       3 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives`                |
|  0.1% |       2 | `getJavaField(KProperty)`                                        | `kotlin.reflect.jvm.ReflectJvmMapping`                |
|  0.1% |       2 | `getValue()`                                                     | `kotlin.UnsafeLazyImpl`                               |
| <0.1% |       1 | `<init>(int)`                                                    | `java.io.ByteArrayOutputStream`                       |
| <0.1% |       1 | `write(byte[], int, int)`                                        | `java.io.ByteArrayOutputStream`                       |
| <0.1% |       1 | `load(String)`                                                   | `java.lang.System`                                    |
| <0.1% |       1 | `getAnnotation(Class)`                                           | `java.lang.reflect.Field`                             |
| <0.1% |       1 | `concat(String)`                                                 | `java.lang.String`                                    |
| <0.1% |       1 | `inflate(byte[])`                                                | `java.util.zip.Inflater`                              |
| <0.1% |       1 | `getCurrentThreadUserTime()`                                     | `sun.management.ThreadImpl`                           |
| <0.1% |       1 | `size()`                                                         | `java.util.ArrayList`                                 |
| <0.1% |       1 | `min(int, int)`                                                  | `java.lang.Math`                                      |

##### JIT

|     % | Samples | Function                      | Location    |
| ----: | ------: | ----------------------------- | ----------- |
| <0.1% |       1 | `zero_blocks`                 | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbba)`     | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbbbbbbb)` | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbbb)`     | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 55.7% |     182 | `CompileQueue::get`                        | `libjvm.dylib` |
| 44.3% |     145 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 67.6% |      98 | `C2Compiler::compile_method`    | `libjvm.dylib` |
|  0.7% |       1 | `ciEnv::get_method_from_handle` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 51.0% |      50 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 33.7% |      33 | `Compile::Optimize`                      | `libjvm.dylib` |
|  1.0% |       1 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      98 | `Compile::Compile` | `libjvm.dylib` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|     % | Samples | Callee                                                                       | Location                                               |
| ----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 83.1% |      74 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                             |
| 16.9% |      15 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % | Samples | Callee          | Location                                    |
| -----: | ------: | --------------- | ------------------------------------------- |
| 100.0% |      89 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|     % | Samples | Callee                                                 | Location                                                |
| ----: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 98.6% |      73 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  1.4% |       1 | `defaultMessageRenderer()`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                                                                                             | Location                                                |
| -----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |      74 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|      % | Samples | Callee                          | Location                                                |
| -----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 100.0% |      74 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee           | Location                                               |
| -----: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% |      74 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

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

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                          | Location                                      |
| ----: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| 97.2% |      70 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |
|  2.8% |       2 | `<clinit>()`                                                    | `org.jetbrains.kotlin.cli.common.ArgumentsKt` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                                                                          | Location                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| 98.6% |      69 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`            | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                        |
|  1.4% |       1 | `reportToMessageCollector(BaseDiagnosticsCollector, MessageCollector, boolean)` | `org.jetbrains.kotlin.cli.common.fir.FirDiagnosticsCompilerResultsReporter` |

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

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee                                                                | Location                                     |
| -----: | ------: | --------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |      70 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                                                                 | Location                                     |
| -----: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |      70 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|     % | Samples | Callee                           | Location                                                              |
| ----: | ------: | -------------------------------- | --------------------------------------------------------------------- |
| 66.7% |      46 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`      |
| 23.2% |      16 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`       |
|  8.7% |       6 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`        |
|  1.4% |       1 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmConfigurationPipelinePhase` |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Callee                                         | Location                                          |
| -----: | ------: | ---------------------------------------------- | ------------------------------------------------- |
| 100.0% |      69 | `phaseBody(PipelineContext, PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % | Samples | Callee                              | Location                                                         |
| -----: | ------: | ----------------------------------- | ---------------------------------------------------------------- |
| 100.0% |      69 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
|   5.8% |       4 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase`   |
|   1.4% |       1 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.ModuleLoweringPhase` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 58.0% |      29 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 16.0% |       8 | `Matcher::match`                  | `libjvm.dylib` |
| 12.0% |       6 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  6.0% |       3 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  2.0% |       1 | `PhaseOutput::install_code`       | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 97.8% |      45 | `Compilation::compile_java_method` | `libjvm.dylib` |
|  2.2% |       1 | `ciEnv::register_method`           | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |      46 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 53.3% |      24 | `Compilation::emit_lir`        | `libjvm.dylib` |
| 31.1% |      14 | `Compilation::build_hir`       | `libjvm.dylib` |
| 13.3% |       6 | `Compilation::emit_code_body`  | `libjvm.dylib` |
|  2.2% |       1 | `ciMethod::ensure_method_data` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 27.3% |       9 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
| 21.2% |       7 | `Compile::optimize_loops`              | `libjvm.dylib` |
| 15.2% |       5 | `PhaseMacroExpand::expand_macro_nodes` | `libjvm.dylib` |
|  9.1% |       3 | `PhaseCCP::do_transform`               | `libjvm.dylib` |
|  9.1% |       3 | `PhaseIterGVN::optimize`               | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 27.6% |       8 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| 17.2% |       5 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
| 10.3% |       3 | `PhaseChaitin::Select`                     | `libjvm.dylib` |
|  6.9% |       2 | `PhaseChaitin::build_ifg_virtual`          | `libjvm.dylib` |
|  6.9% |       2 | `PhaseChaitin::Simplify`                   | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 79.2% |      19 | `LinearScan::do_linear_scan` | `libjvm.dylib` |
| 20.8% |       5 | `BlockList::iterate_forward` | `libjvm.dylib` |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

|     % | Samples | Callee                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 36.8% |       7 | `LinearScan::allocate_registers`      | `libjvm.dylib` |
| 21.1% |       4 | `LinearScan::assign_reg_num`          | `libjvm.dylib` |
| 15.8% |       3 | `LinearScan::build_intervals`         | `libjvm.dylib` |
|  5.3% |       1 | `LinearScan::compute_local_live_sets` | `libjvm.dylib` |
|  5.3% |       1 | `LinearScan::init_compute_oop_maps`   | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 81.3% |      13 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| 12.5% |       2 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 38.5% |       5 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| 30.8% |       4 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |
|  7.7% |       1 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
|  7.7% |       1 | `PhaseIdealLoop::build_loop_tree`      | `libjvm.dylib` |
|  7.7% |       1 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Callee                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      13 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|      % | Samples | Callee              | Location                                                 |
| -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% |      13 | `findClass(String)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|     % | Samples | Callee                  | Location                                                                                                      |
| ----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------------- |
| 84.6% |      11 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`                         |
| 38.5% |       5 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`                      |
|  7.7% |       1 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirInvokeResolveTowerExtension$enqueueResolverTasksForInvoke$3` |
|  7.7% |       1 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$2`                      |

##### `GraphBuilder::iterate_bytecodes_for_block` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 72.7% |       8 | `GraphBuilder::invoke`          | `libjvm.dylib` |
|  9.1% |       1 | `BlockBegin::try_merge`         | `libjvm.dylib` |
|  9.1% |       1 | `GraphBuilder::access_field`    | `libjvm.dylib` |
|  9.1% |       1 | `GraphBuilder::append_with_bci` | `libjvm.dylib` |
|  9.1% |       1 | `GraphBuilder::check_cast`      | `libjvm.dylib` |

##### `GraphBuilder::iterate_all_blocks` (`libjvm.dylib`)

|      % | Samples | Callee                                      | Location       |
| -----: | ------: | ------------------------------------------- | -------------- |
| 100.0% |      11 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

|      % | Samples | Callee                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      11 | `GraphBuilder::iterate_all_blocks` | `libjvm.dylib` |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

|     % | Samples | Callee     | Location                                                                                         |
| ----: | ------: | ---------- | ------------------------------------------------------------------------------------------------ |
| 40.0% |       2 | `invoke()` | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass$$Lambda.0x000000f80160cdb0`             |
| 20.0% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.java.enhancement.FirSignatureEnhancement$$Lambda.0x000000f80160f638`   |
| 20.0% |       1 | `invoke()` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000f801819420`                |
| 20.0% |       1 | `invoke()` | `org.jetbrains.kotlin.diagnostics.KtDiagnosticFactoryToRendererMapKt$$Lambda.0x000000f801141e48` |

##### `getValue()` (`kotlin.SafePublicationLazyImpl`)

|     % | Samples | Callee     | Location                                                                                                   |
| ----: | ------: | ---------- | ---------------------------------------------------------------------------------------------------------- |
| 33.3% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer$$Lambda.0x000000f8015d49b0` |

##### `getValue()` (`kotlin.UnsafeLazyImpl`)

|     % | Samples | Callee     | Location                                                                                       |
| ----: | ------: | ---------- | ---------------------------------------------------------------------------------------------- |
| 50.0% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver$$Lambda.0x000000f801685450`            |
| 50.0% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.java.enhancement.FirSignatureEnhancement$$Lambda.0x000000f80160f400` |

##### `<init>(int)` (`java.io.ByteArrayOutputStream`)

|      % | Samples | Callee        | Location    |
| -----: | ------: | ------------- | ----------- |
| 100.0% |       1 | `zero_blocks` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame. `…` stands for frames the entry filter hides.

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  6.8% |     182 | `CompileQueue::get` (`libjvm.dylib`) ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.4% |      11 | `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                             |
|  0.3% |       7 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                     |
|  0.1% |       3 | `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                |
|  0.1% |       2 | `PhaseIFG::re_insert` (`libjvm.dylib`) ← `PhaseChaitin::Select` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                            |
|  0.1% |       2 | `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                         |
|  0.1% |       2 | `Matcher::xform` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                           |
|  0.1% |       2 | `LinearScan::build_intervals` (`libjvm.dylib`) ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← … ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                            |
|  0.1% |       2 | `DebugInformationRecorder::describe_scope` (`libjvm.dylib`) ← … ← `LIR_Assembler::add_call_info` ← … ← `LIR_Assembler::emit_slow_case_stubs` ← `Compilation::emit_code_epilog` ← `Compilation::emit_code_body` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← … ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                     |
|  0.1% |       2 | `Compilation::build_hir` (`libjvm.dylib`) ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← … ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                          |
|  0.1% |       2 | `LinearScanWalker::free_collect_inactive_any` (`libjvm.dylib`) ← `LinearScanWalker::alloc_free_reg` ← `LinearScanWalker::activate_current` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← … ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` |
|  0.1% |       2 | `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                              |
|  0.1% |       2 | `PhaseChaitin::elide_copy` (`libjvm.dylib`) ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                   |
| <0.1% |       1 | `PhaseChaitin::build_ifg_virtual` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                         |
| <0.1% |       1 | `IndexSetIterator::advance_and_next` (`libjvm.dylib`) ← `PhaseIFG::effective_degree` ← `PhaseIFG::Compute_Effective_Degree` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                |
| <0.1% |       1 | `Node::clone` (`libjvm.dylib`) ← `GraphKit::clone_map` ← … ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                           |
| <0.1% |       1 | `Node::jvms` (`libjvm.dylib`) ← `PhaseChaitin::build_ifg_physical` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                         |
| <0.1% |       1 | `TypeTuple::hash` (`libjvm.dylib`) ← … ← `Type::hashcons` ← `TypeAry::xdual` ← `Type::hashcons` ← `TypeAryPtr::cast_to_size` ← `GraphKit::new_array` ← … ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                             |
| <0.1% |       1 | `IndexSetIterator::advance_and_next` (`libjvm.dylib`) ← `PhaseChaitin::build_ifg_virtual` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                  |
| <0.1% |       1 | `PhaseIdealLoop::optimize` (`libjvm.dylib`) ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                    |

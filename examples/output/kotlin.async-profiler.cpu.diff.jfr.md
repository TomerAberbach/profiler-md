# Profile diff

1,307 samples → 1,331 samples (+24 samples, +1.8%).

| Category          |  Change | Delta |             % |   Samples |
| ----------------- | ------: | ----: | ------------: | --------: |
| Compiler          |   +1.5% |    +9 | 46.1% → 45.9% | 602 → 611 |
| Native            |   -0.4% |    -2 | 38.7% → 37.9% | 506 → 504 |
| Ours              |   +0.7% |    +1 | 10.4% → 10.3% | 136 → 137 |
| Standard library  |  +25.5% |   +13 |   3.9% → 4.8% |   51 → 64 |
| JIT               |  +36.4% |    +4 |   0.8% → 1.1% |   11 → 15 |
| Garbage collector | removed |    -1 |   0.1% → 0.0% |     1 → 0 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                        | Location       |
| ------: | ----: | ----------: | ------: | ----------------------------------------------- | -------------- |
| +116.7% |    +7 | 0.5% → 1.0% |  6 → 13 | `LinearScanWalker::free_collect_inactive_fixed` | `libjvm.dylib` |
|  +58.3% |    +7 | 0.9% → 1.4% | 12 → 19 | `PhaseChaitin::build_ifg_physical`              | `libjvm.dylib` |
| +200.0% |    +6 | 0.2% → 0.7% |   3 → 9 | `PhaseIdealLoop::Dominators`                    | `libjvm.dylib` |
|  +83.3% |    +5 | 0.5% → 0.8% |  6 → 11 | `PhaseChaitin::elide_copy`                      | `libjvm.dylib` |
| +500.0% |    +5 | 0.1% → 0.5% |   1 → 6 | `I2C/C2I adapters(0xb)`                         | `<unknown>`    |
| +133.3% |    +4 | 0.2% → 0.5% |   3 → 7 | `Matcher::xform`                                | `libjvm.dylib` |
|  +25.0% |    +4 | 1.2% → 1.5% | 16 → 20 | `PhaseChaitin::Split`                           | `libjvm.dylib` |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `MachSpillCopyNode::ideal_reg`                  | `libjvm.dylib` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `GraphBuilder::invoke`                          | `libjvm.dylib` |
|  +37.5% |    +3 | 0.6% → 0.8% |  8 → 11 | `PhaseLive::add_liveout`                        | `libjvm.dylib` |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `Type::cmp`                                     | `libjvm.dylib` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `PhaseIdealLoop::compute_lca_of_uses`           | `libjvm.dylib` |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `Node::disconnect_inputs`                       | `libjvm.dylib` |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `PhaseChaitin::build_ifg_virtual`               | `libjvm.dylib` |
| +150.0% |    +3 | 0.2% → 0.4% |   2 → 5 | `IndexSet::initialize`                          | `libjvm.dylib` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `LinearScan::init_compute_oop_maps`             | `libjvm.dylib` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `PhaseCFG::insert_anti_dependences`             | `libjvm.dylib` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `TypeOopPtr::eq`                                | `libjvm.dylib` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `PhiNode::pinned`                               | `libjvm.dylib` |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `Scheduling::AddNodeToBundle`                   | `libjvm.dylib` |

##### Compiler

|  Change | Delta |           % | Samples | Function                                        | Location       |
| ------: | ----: | ----------: | ------: | ----------------------------------------------- | -------------- |
| +116.7% |    +7 | 0.5% → 1.0% |  6 → 13 | `LinearScanWalker::free_collect_inactive_fixed` | `libjvm.dylib` |
|  +58.3% |    +7 | 0.9% → 1.4% | 12 → 19 | `PhaseChaitin::build_ifg_physical`              | `libjvm.dylib` |
| +200.0% |    +6 | 0.2% → 0.7% |   3 → 9 | `PhaseIdealLoop::Dominators`                    | `libjvm.dylib` |
|  +83.3% |    +5 | 0.5% → 0.8% |  6 → 11 | `PhaseChaitin::elide_copy`                      | `libjvm.dylib` |
| +133.3% |    +4 | 0.2% → 0.5% |   3 → 7 | `Matcher::xform`                                | `libjvm.dylib` |
|  +25.0% |    +4 | 1.2% → 1.5% | 16 → 20 | `PhaseChaitin::Split`                           | `libjvm.dylib` |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `MachSpillCopyNode::ideal_reg`                  | `libjvm.dylib` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `GraphBuilder::invoke`                          | `libjvm.dylib` |
|  +37.5% |    +3 | 0.6% → 0.8% |  8 → 11 | `PhaseLive::add_liveout`                        | `libjvm.dylib` |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `Type::cmp`                                     | `libjvm.dylib` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `PhaseIdealLoop::compute_lca_of_uses`           | `libjvm.dylib` |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `Node::disconnect_inputs`                       | `libjvm.dylib` |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `PhaseChaitin::build_ifg_virtual`               | `libjvm.dylib` |
| +150.0% |    +3 | 0.2% → 0.4% |   2 → 5 | `IndexSet::initialize`                          | `libjvm.dylib` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `LinearScan::init_compute_oop_maps`             | `libjvm.dylib` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `PhaseCFG::insert_anti_dependences`             | `libjvm.dylib` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `TypeOopPtr::eq`                                | `libjvm.dylib` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `PhiNode::pinned`                               | `libjvm.dylib` |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `Scheduling::AddNodeToBundle`                   | `libjvm.dylib` |
|  +66.7% |    +2 | 0.2% → 0.4% |   3 → 5 | `NodeHash::hash_find_insert`                    | `libjvm.dylib` |

##### Ours

| Change | Delta |           % | Samples | Function                                                                                                                                                                     | Location                                                                                                        |
| -----: | ----: | ----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 0.2% |   0 → 2 | `prepareLightTree()`                                                                                                                                                         | `com.intellij.lang.impl.PsiBuilderImpl`                                                                         |
|    new |    +2 | 0.0% → 0.2% |   0 → 2 | `performLexing()`                                                                                                                                                            | `com.intellij.lang.impl.TokenSequence$Builder`                                                                  |
|    new |    +2 | 0.0% → 0.2% |   0 → 2 | `visitProperty(FirProperty, Void)`                                                                                                                                           | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`                               |
|    new |    +2 | 0.0% → 0.2% |   0 → 2 | `execute(AbstractInsnNode, Interpreter)`                                                                                                                                     | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame`                                                           |
|    new |    +2 | 0.0% → 0.2% |   0 → 2 | `parametersCount(TypeConstructorMarker)`                                                                                                                                     | `org.jetbrains.kotlin.fir.types.ConeTypeContext`                                                                |
|    new |    +2 | 0.0% → 0.2% |   0 → 2 | `check(CheckerContext, DiagnosticReporter, FirDeclaration)`                                                                                                                  | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirExpectConsistencyChecker`                            |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `convertLoopOrIfBody(LighterASTNode)`                                                                                                                                        | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`                                 |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `hasPackage(FqName)`                                                                                                                                                         | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`                             |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `measureSideTime$org_jetbrains_kotlin_compiler_common(PhaseSideType, Function0)`                                                                                             | `org.jetbrains.kotlin.util.PerformanceManager`                                                                  |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `getTopLevelCallableNamesInPackage(FqName)`                                                                                                                                  | `org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`                                       |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode)`                                                                                           | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`                   |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `invoke(Object, Object)`                                                                                                                                                     | `org.jetbrains.kotlin.fir.resolve.calls.tower.DispatchReceiverMemberScopeTowerLevel$$Lambda.0x000000a80166bec0` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `findPostponedArgumentWithFixedInputTypes(List)`                                                                                                                             | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintSystemCompletionContext`                     |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `runCompletion(ConstraintSystemCompletionContext, ConstraintSystemCompletionMode, List, ConeKotlinType, ResolutionContext, ConstraintSystemCompleter$PostponedAtomAnalyzer)` | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`                                          |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `transformFunctionContent(FirFunction, ResolutionMode, boolean)`                                                                                                             | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`                  |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `completeIsSubTypeOf(TypeCheckerState, TypeSystemContext, KotlinTypeMarker, KotlinTypeMarker, boolean)`                                                                      | `org.jetbrains.kotlin.types.AbstractTypeChecker`                                                                |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `transformResult(FirTransformer, Object)`                                                                                                                                    | `org.jetbrains.kotlin.fir.expressions.impl.FirReturnExpressionImpl`                                             |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `processFunctionsByName(Name, Function1)`                                                                                                                                    | `org.jetbrains.kotlin.fir.scopes.impl.FirPackageMemberScope`                                                    |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `findClass(JavaClassFinder$Request, GlobalSearchScope)`                                                                                                                      | `org.jetbrains.kotlin.resolve.jvm.KotlinJavaPsiFacade$CliFinder`                                                |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `transformTypeRef(FirTypeRef, ResolutionMode)`                                                                                                                               | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`        |

##### Standard library

| Change | Delta |           % | Samples | Function                                  | Location                                           |
| -----: | ----: | ----------: | ------: | ----------------------------------------- | -------------------------------------------------- |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `linkToTargetMethod(Object, Object)`      | `java.lang.invoke.Invokers$Holder`                 |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `getValue()`                              | `kotlin.UnsafeLazyImpl`                            |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `areEqual(Object, Object)`                | `kotlin.jvm.internal.Intrinsics`                   |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `toMap(Iterable)`                         | `kotlin.collections.MapsKt__MapsKt`                |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `getNextEntry()`                          | `java.util.zip.ZipInputStream`                     |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `addAll(Collection)`                      | `java.util.AbstractCollection`                     |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `to(Object, Object)`                      | `kotlin.TuplesKt`                                  |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `iterator()`                              | `kotlin.collections.builders.ListBuilder`          |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `linkToTargetMethod(int, Object, Object)` | `java.lang.invoke.Invokers$Holder`                 |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `firstOrNull(Iterable)`                   | `kotlin.collections.CollectionsKt___CollectionsKt` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>()`                                | `java.util.ArrayList`                              |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `getName()`                               | `java.io.File`                                     |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `isEmpty()`                               | `kotlin.collections.EmptyList`                     |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `isDirectory()`                           | `java.io.File`                                     |

##### JIT

|  Change | Delta |           % | Samples | Function                | Location    |
| ------: | ----: | ----------: | ------: | ----------------------- | ----------- |
| +500.0% |    +5 | 0.1% → 0.5% |   1 → 6 | `I2C/C2I adapters(0xb)` | `<unknown>` |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `itable stub`           | `<unknown>` |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `vtable stub`           | `<unknown>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `zero_blocks`           | `<unknown>` |

##### Native

| Change | Delta |           % | Samples | Function                                 | Location       |
| -----: | ----: | ----------: | ------: | ---------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `InterpreterRuntime::resolve_from_cache` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `InterpreterRuntime::resolve_ldc`        | `libjvm.dylib` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `slow_subtype_check Runtime1 stub`       | `<unknown>`    |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                           | Location       |
| ------: | ----: | ----------: | ------: | -------------------------------------------------- | -------------- |
|  -66.7% |    -6 | 0.7% → 0.2% |   9 → 3 | `MultiNode::is_CFG`                                | `libjvm.dylib` |
|  -27.3% |    -6 | 1.7% → 1.2% | 22 → 16 | `IndexSetIterator::advance_and_next`               | `libjvm.dylib` |
| removed |    -5 | 0.4% → 0.0% |   5 → 0 | `GraphBuilder::iterate_bytecodes_for_block`        | `libjvm.dylib` |
|  -66.7% |    -4 | 0.5% → 0.2% |   6 → 2 | `LinearScan::build_intervals`                      | `libjvm.dylib` |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `Node_Array::insert`                               | `libjvm.dylib` |
|  -66.7% |    -4 | 0.5% → 0.2% |   6 → 2 | `Unique_Node_List::remove`                         | `libjvm.dylib` |
|  -60.0% |    -3 | 0.4% → 0.2% |   5 → 2 | `PhaseIterGVN::transform_old`                      | `libjvm.dylib` |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `PhaseCFG::partial_latency_of_defs`                | `libjvm.dylib` |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `RegMask::is_aligned_pairs`                        | `libjvm.dylib` |
|  -60.0% |    -3 | 0.4% → 0.2% |   5 → 2 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `OopMapSort::sort`                                 | `libjvm.dylib` |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `Node_Backward_Iterator::next`                     | `libjvm.dylib` |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `IndexSet::IndexSet`                               | `libjvm.dylib` |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `I2C/C2I adapters(0xbba)`                          | `<unknown>`    |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |
|  -40.0% |    -2 | 0.4% → 0.2% |   5 → 3 | `LIR_OpVisitState::visit`                          | `libjvm.dylib` |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `PhaseCCP::push_child_nodes_to_worklist`           | `libjvm.dylib` |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep`      | `libjvm.dylib` |
|  -20.0% |    -2 | 0.8% → 0.6% |  10 → 8 | `PhaseAggressiveCoalesce::insert_copies`           | `libjvm.dylib` |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `BlockBegin::iterate_preorder`                     | `libjvm.dylib` |

##### Compiler

|  Change | Delta |           % | Samples | Function                                           | Location       |
| ------: | ----: | ----------: | ------: | -------------------------------------------------- | -------------- |
|  -66.7% |    -6 | 0.7% → 0.2% |   9 → 3 | `MultiNode::is_CFG`                                | `libjvm.dylib` |
|  -27.3% |    -6 | 1.7% → 1.2% | 22 → 16 | `IndexSetIterator::advance_and_next`               | `libjvm.dylib` |
| removed |    -5 | 0.4% → 0.0% |   5 → 0 | `GraphBuilder::iterate_bytecodes_for_block`        | `libjvm.dylib` |
|  -66.7% |    -4 | 0.5% → 0.2% |   6 → 2 | `LinearScan::build_intervals`                      | `libjvm.dylib` |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `Node_Array::insert`                               | `libjvm.dylib` |
|  -66.7% |    -4 | 0.5% → 0.2% |   6 → 2 | `Unique_Node_List::remove`                         | `libjvm.dylib` |
|  -60.0% |    -3 | 0.4% → 0.2% |   5 → 2 | `PhaseIterGVN::transform_old`                      | `libjvm.dylib` |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `PhaseCFG::partial_latency_of_defs`                | `libjvm.dylib` |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `RegMask::is_aligned_pairs`                        | `libjvm.dylib` |
|  -60.0% |    -3 | 0.4% → 0.2% |   5 → 2 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `OopMapSort::sort`                                 | `libjvm.dylib` |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `Node_Backward_Iterator::next`                     | `libjvm.dylib` |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `IndexSet::IndexSet`                               | `libjvm.dylib` |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |
|  -40.0% |    -2 | 0.4% → 0.2% |   5 → 3 | `LIR_OpVisitState::visit`                          | `libjvm.dylib` |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `PhaseCCP::push_child_nodes_to_worklist`           | `libjvm.dylib` |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep`      | `libjvm.dylib` |
|  -20.0% |    -2 | 0.8% → 0.6% |  10 → 8 | `PhaseAggressiveCoalesce::insert_copies`           | `libjvm.dylib` |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `BlockBegin::iterate_preorder`                     | `libjvm.dylib` |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `Assembler::ld_st2`                                | `libjvm.dylib` |

##### Ours

|  Change | Delta |           % | Samples | Function                                                                                                                                                                                                                                                                                                                                                     | Location                                                                           |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `toArgumentToParameterMapping()`                                                                                                                                                                                                                                                                                                                             | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentMapping`                    |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `prepareType(KotlinTypeMarker)`                                                                                                                                                                                                                                                                                                                              | `org.jetbrains.kotlin.fir.types.ConeTypePreparator`                                |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `isDataClassCopy(FirCallableSymbol, FirClassSymbol, FirSession)`                                                                                                                                                                                                                                                                                             | `org.jetbrains.kotlin.fir.PrivateToThisUtilsKt`                                    |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                                                                                                                                                                                                                                                                                  | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`                                    |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `balanceWhiteSpaces()`                                                                                                                                                                                                                                                                                                                                       | `com.intellij.lang.impl.PsiBuilderImpl`                                            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `mark()`                                                                                                                                                                                                                                                                                                                                                     | `com.intellij.lang.impl.PsiBuilderAdapter`                                         |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>(Project, PsiFile, ParserDefinition, Lexer, CharTable, CharSequence, ASTNode, CharSequence, PsiBuilderImpl$MyTreeStructure, Object)`                                                                                                                                                                                                                  | `com.intellij.lang.impl.PsiBuilderImpl`                                            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `collectSegments(List, LighterASTNode)`                                                                                                                                                                                                                                                                                                                      | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder`   |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `convertCallExpression(LighterASTNode)`                                                                                                                                                                                                                                                                                                                      | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`    |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `convertPropertyDeclaration$lambda$1(LightTreeRawFirDeclarationBuilder, LighterASTNode)`                                                                                                                                                                                                                                                                     | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder`   |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `get(int)`                                                                                                                                                                                                                                                                                                                                                   | `com.intellij.util.containers.IntArrayList`                                        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `transformTypeRef(FirTypeRef, TypeResolutionConfiguration)`                                                                                                                                                                                                                                                                                                  | `org.jetbrains.kotlin.fir.resolve.transformers.FirSpecificTypeResolverTransformer` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `toByteString()`                                                                                                                                                                                                                                                                                                                                             | `org.jetbrains.kotlin.protobuf.ByteString$Output`                                  |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>(CodedInputStream, ExtensionRegistryLite)`                                                                                                                                                                                                                                                                                                            | `org.jetbrains.kotlin.metadata.ProtoBuf$TypeAlias`                                 |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `readMethod(ClassVisitor, Context, int)`                                                                                                                                                                                                                                                                                                                     | `org.jetbrains.org.objectweb.asm.ClassReader`                                      |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `deserializeClassToSymbol(ClassId, ProtoBuf$Class, FirRegularClassSymbol, NameResolver, FirSession, FirModuleData, AnnotationDeserializer, FirKDocDeserializer, FirTypeDeserializer$FlexibleTypeFactory, FirScopeProvider, SerializerExtensionProtocol, FirDeserializationContext, DeserializedContainerSource, FirDeclarationOrigin, Function2, Function2)` | `org.jetbrains.kotlin.fir.deserialization.ClassDeserializationKt`                  |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `findAndDeserializeClass(ClassId, FirDeserializationContext)`                                                                                                                                                                                                                                                                                                | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`   |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getValue(Object, Object)`                                                                                                                                                                                                                                                                                                                                   | `org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCacheWithPostCompute`              |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getOrigin()`                                                                                                                                                                                                                                                                                                                                                | `org.jetbrains.kotlin.fir.declarations.impl.FirDefaultSetterValueParameter`        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `initFields()`                                                                                                                                                                                                                                                                                                                                               | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument$Value`                 |

##### Standard library

|  Change | Delta |           % | Samples | Function                                      | Location                                                                              |
| ------: | ----: | ----------: | ------: | --------------------------------------------- | ------------------------------------------------------------------------------------- |
|  -33.3% |    -2 | 0.5% → 0.3% |   6 → 4 | `checkNotNullParameter(Object, String)`       | `kotlin.jvm.internal.Intrinsics`                                                      |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `toSet(Iterable)`                             | `kotlin.collections.CollectionsKt___CollectionsKt`                                    |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `isEmpty()`                                   | `java.util.AbstractCollection`                                                        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `linkToTargetMethod(Object, Object, Object)`  | `java.lang.invoke.Invokers$Holder`                                                    |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `get(Object)`                                 | `java.util.HashMap`                                                                   |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `build()`                                     | `kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBuilder` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>()`                                    | `java.lang.Object`                                                                    |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `checkNotNullExpressionValue(Object, String)` | `kotlin.jvm.internal.Intrinsics`                                                      |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `reverse(Object[])`                           | `kotlin.collections.ArraysKt___ArraysKt`                                              |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `checkNotNull(Object)`                        | `kotlin.jvm.internal.Intrinsics`                                                      |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `hasNext()`                                   | `kotlin.jvm.internal.ArrayIterator`                                                   |

##### JIT

|  Change | Delta |           % | Samples | Function                   | Location    |
| ------: | ----: | ----------: | ------: | -------------------------- | ----------- |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `I2C/C2I adapters(0xbba)`  | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xbbbb)` | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0x)`     | `<unknown>` |

##### Native

|  Change | Delta |           % | Samples | Function                         | Location                  |
| ------: | ----: | ----------: | ------: | -------------------------------- | ------------------------- |
|  -22.2% |    -2 | 0.7% → 0.5% |   9 → 7 | `pthread_jit_write_protect_np`   | `libsystem_pthread.dylib` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `arrayof_oop_disjoint_arraycopy` | `<unknown>`               |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|   Change | Delta |             % |   Samples | Function                                                                                                                                      | Location                                                                                                                  |
| -------: | ----: | ------------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| +3300.0% |   +66 |   0.2% → 5.1% |    2 → 68 | `invoke()`                                                                                                                                    | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000a8016b3090` |
|    +9.1% |   +25 | 21.0% → 22.5% | 275 → 300 | `Compile::Code_Gen`                                                                                                                           | `libjvm.dylib`                                                                                                            |
|    +2.7% |   +21 | 60.6% → 61.1% | 792 → 813 | `CompileBroker::invoke_compiler_on_method`                                                                                                    | `libjvm.dylib`                                                                                                            |
|    +5.9% |   +20 | 25.9% → 27.0% | 339 → 359 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                                                                   |
|    +5.9% |   +20 | 25.9% → 27.0% | 339 → 359 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                                                                   |
|    +5.6% |   +19 | 26.1% → 27.0% | 341 → 360 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`                                                                    |
|    +5.6% |   +19 | 26.1% → 27.0% | 341 → 360 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                                                                              |
|    +5.6% |   +19 | 26.1% → 27.0% | 341 → 360 | `invoke(Object, Object[])`                                                                                                                    | `java.lang.reflect.Method`                                                                                                |
|    +5.7% |   +19 | 25.5% → 26.4% | 333 → 352 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`                                                                             |
|    +5.3% |   +18 | 25.9% → 26.8% | 339 → 357 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`                                                                             |
|    +5.3% |   +18 | 25.9% → 26.8% | 339 → 357 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`                                                                             |
|    +5.3% |   +18 | 25.9% → 26.8% | 339 → 357 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                                                                   |
|    +5.6% |   +18 | 24.8% → 25.7% | 324 → 342 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                                                                              |
|    +5.6% |   +18 | 24.8% → 25.7% | 324 → 342 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                                                                              |
|    +5.6% |   +18 | 24.8% → 25.7% | 324 → 342 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler`                                                                             |
|   +10.2% |   +17 | 12.7% → 13.7% | 166 → 183 | `PhaseChaitin::Register_Allocate`                                                                                                             | `libjvm.dylib`                                                                                                            |
|    +3.1% |   +17 | 42.0% → 42.5% | 549 → 566 | `Compile::Compile`                                                                                                                            | `libjvm.dylib`                                                                                                            |
|    +5.2% |   +17 | 24.8% → 25.6% | 324 → 341 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`                                                                   |
|    +5.2% |   +17 | 24.8% → 25.6% | 324 → 341 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`                                                                   |
|    +5.2% |   +17 | 24.8% → 25.6% | 324 → 341 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`                                                                   |

##### Compiler

|  Change | Delta |             % |   Samples | Function                                        | Location       |
| ------: | ----: | ------------: | --------: | ----------------------------------------------- | -------------- |
|   +9.1% |   +25 | 21.0% → 22.5% | 275 → 300 | `Compile::Code_Gen`                             | `libjvm.dylib` |
|   +2.7% |   +21 | 60.6% → 61.1% | 792 → 813 | `CompileBroker::invoke_compiler_on_method`      | `libjvm.dylib` |
|  +10.2% |   +17 | 12.7% → 13.7% | 166 → 183 | `PhaseChaitin::Register_Allocate`               | `libjvm.dylib` |
|   +3.1% |   +17 | 42.0% → 42.5% | 549 → 566 | `Compile::Compile`                              | `libjvm.dylib` |
|   +2.0% |   +16 | 62.0% → 62.1% | 810 → 826 | `CompileBroker::compiler_thread_loop`           | `libjvm.dylib` |
|   +2.5% |   +14 | 42.2% → 42.5% | 552 → 566 | `C2Compiler::compile_method`                    | `libjvm.dylib` |
|  +66.7% |   +10 |   1.1% → 1.9% |   15 → 25 | `LIR_Assembler::add_call_info`                  | `libjvm.dylib` |
|  +56.3% |    +9 |   1.2% → 1.9% |   16 → 25 | `LinearScanWalker::alloc_free_reg`              | `libjvm.dylib` |
|  +18.6% |    +8 |   3.3% → 3.8% |   43 → 51 | `Compilation::emit_code_body`                   | `libjvm.dylib` |
|  +41.2% |    +7 |   1.3% → 1.8% |   17 → 24 | `PhaseLive::compute`                            | `libjvm.dylib` |
| +116.7% |    +7 |   0.5% → 1.0% |    6 → 13 | `LinearScanWalker::free_collect_inactive_fixed` | `libjvm.dylib` |
|  +29.2% |    +7 |   1.8% → 2.3% |   24 → 31 | `LinearScanWalker::activate_current`            | `libjvm.dylib` |
|  +29.2% |    +7 |   1.8% → 2.3% |   24 → 31 | `PhaseOutput::Output`                           | `libjvm.dylib` |
| +233.3% |    +7 |   0.2% → 0.8% |    3 → 10 | `Type::cmp`                                     | `libjvm.dylib` |
|   +2.9% |    +6 | 16.0% → 16.2% | 209 → 215 | `Compilation::compile_java_method`              | `libjvm.dylib` |
|   +9.1% |    +6 |   5.0% → 5.4% |   66 → 72 | `LinearScan::do_linear_scan`                    | `libjvm.dylib` |
|  +19.4% |    +6 |   2.4% → 2.8% |   31 → 37 | `IntervalWalker::walk_to`                       | `libjvm.dylib` |
|   +9.4% |    +6 |   4.9% → 5.3% |   64 → 70 | `PhaseIterGVN::optimize`                        | `libjvm.dylib` |
|  +10.3% |    +6 |   4.4% → 4.8% |   58 → 64 | `PhaseIterGVN::transform_old`                   | `libjvm.dylib` |
|  +50.0% |    +6 |   0.9% → 1.4% |   12 → 18 | `DebugInformationRecorder::describe_scope`      | `libjvm.dylib` |

##### Ours

|   Change | Delta |             % |   Samples | Function                                                                                                                                      | Location                                                                                                                  |
| -------: | ----: | ------------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| +3300.0% |   +66 |   0.2% → 5.1% |    2 → 68 | `invoke()`                                                                                                                                    | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000a8016b3090` |
|    +5.9% |   +20 | 25.9% → 27.0% | 339 → 359 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                                                                   |
|    +5.9% |   +20 | 25.9% → 27.0% | 339 → 359 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                                                                   |
|    +5.6% |   +19 | 26.1% → 27.0% | 341 → 360 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`                                                                    |
|    +5.6% |   +19 | 26.1% → 27.0% | 341 → 360 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                                                                              |
|    +5.7% |   +19 | 25.5% → 26.4% | 333 → 352 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`                                                                             |
|    +5.3% |   +18 | 25.9% → 26.8% | 339 → 357 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`                                                                             |
|    +5.3% |   +18 | 25.9% → 26.8% | 339 → 357 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`                                                                             |
|    +5.3% |   +18 | 25.9% → 26.8% | 339 → 357 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                                                                   |
|    +5.6% |   +18 | 24.8% → 25.7% | 324 → 342 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                                                                              |
|    +5.6% |   +18 | 24.8% → 25.7% | 324 → 342 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                                                                              |
|    +5.6% |   +18 | 24.8% → 25.7% | 324 → 342 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler`                                                                             |
|    +5.2% |   +17 | 24.8% → 25.6% | 324 → 341 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`                                                                   |
|    +5.2% |   +17 | 24.8% → 25.6% | 324 → 341 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`                                                                   |
|    +5.2% |   +17 | 24.8% → 25.6% | 324 → 341 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`                                                                   |
|    +5.3% |   +17 | 24.6% → 25.4% | 321 → 338 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                                                                         |
|    +5.3% |   +17 | 24.6% → 25.4% | 321 → 338 | `phaseBody(LoggingContext, Object)`                                                                                                           | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                                                                         |
|    +5.3% |   +17 | 24.6% → 25.4% | 321 → 338 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`                                                                   |
|    +5.3% |   +17 | 24.6% → 25.4% | 321 → 338 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase`                                                               |
|    +5.3% |   +17 | 24.6% → 25.4% | 321 → 338 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`                                                                          | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                                                                      |

##### Standard library

|  Change | Delta |             % |   Samples | Function                                                         | Location                                              |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------- | ----------------------------------------------------- |
|   +5.6% |   +19 | 26.1% → 27.0% | 341 → 360 | `invoke(Object, Object[])`                                       | `java.lang.reflect.Method`                            |
|  +18.6% |    +8 |   3.3% → 3.8% |   43 → 51 | `resumeWith(Object)`                                             | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |
|  +36.4% |    +4 |   0.8% → 1.1% |   11 → 15 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives`                |
|     new |    +3 |   0.0% → 0.2% |     0 → 3 | `toList(Iterable)`                                               | `kotlin.collections.CollectionsKt___CollectionsKt`    |
|   +3.0% |    +2 |   5.0% → 5.1% |   66 → 68 | `loadClass(String, boolean)`                                     | `java.lang.ClassLoader`                               |
|  +13.3% |    +2 |   1.1% → 1.3% |   15 → 17 | `getValue()`                                                     | `kotlin.SafePublicationLazyImpl`                      |
| +100.0% |    +2 |   0.2% → 0.3% |     2 → 4 | `hasNext()`                                                      | `kotlin.sequences.FilteringSequence$iterator$1`       |
|  +33.3% |    +2 |   0.5% → 0.6% |     6 → 8 | `checkNotNullParameter(Object, String)`                          | `kotlin.jvm.internal.Intrinsics`                      |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `addAll(Collection)`                                             | `java.util.AbstractCollection`                        |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `to(Object, Object)`                                             | `kotlin.TuplesKt`                                     |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `next()`                                                         | `java.util.AbstractList$Itr`                          |
| +100.0% |    +1 |   0.1% → 0.2% |     1 → 2 | `toByteArray()`                                                  | `java.io.ByteArrayOutputStream`                       |
|  +11.1% |    +1 |   0.7% → 0.8% |    9 → 10 | `getJavaField(KProperty)`                                        | `kotlin.reflect.jvm.ReflectJvmMapping`                |
| +100.0% |    +1 |   0.1% → 0.2% |     1 → 2 | `charAt(int)`                                                    | `java.lang.String`                                    |
|  +50.0% |    +1 |          0.2% |     2 → 3 | `linkToTargetMethod(Object, Object)`                             | `java.lang.invoke.Invokers$Holder`                    |
|  +33.3% |    +1 |   0.2% → 0.3% |     3 → 4 | `areEqual(Object, Object)`                                       | `kotlin.jvm.internal.Intrinsics`                      |
| +100.0% |    +1 |   0.1% → 0.2% |     1 → 2 | `toList(Sequence)`                                               | `kotlin.sequences.SequencesKt___SequencesKt`          |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `write(byte[], int, int)`                                        | `java.io.ByteArrayOutputStream`                       |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `getNextEntry()`                                                 | `java.util.zip.ZipInputStream`                        |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `<init>(File)`                                                   | `java.io.FileOutputStream`                            |

##### JIT

|  Change | Delta |           % | Samples | Function                | Location    |
| ------: | ----: | ----------: | ------: | ----------------------- | ----------- |
| +500.0% |    +5 | 0.1% → 0.5% |   1 → 6 | `I2C/C2I adapters(0xb)` | `<unknown>` |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `itable stub`           | `<unknown>` |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `vtable stub`           | `<unknown>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `zero_blocks`           | `<unknown>` |

##### Native

|  Change | Delta |           % | Samples | Function                            | Location       |
| ------: | ----: | ----------: | ------: | ----------------------------------- | -------------- |
|  +23.5% |    +4 | 1.3% → 1.6% | 17 → 21 | `InterpreterRuntime::_new`          | `libjvm.dylib` |
| +100.0% |    +3 | 0.2% → 0.5% |   3 → 6 | `resolve_virtual_call`              | `<unknown>`    |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `UncommonTrapBlob`                  | `<unknown>`    |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `resolve_static_call`               | `<unknown>`    |
|  +20.0% |    +1 | 0.4% → 0.5% |   5 → 6 | `resolve_opt_virtual_call`          | `<unknown>`    |
|  +50.0% |    +1 |        0.2% |   2 → 3 | `InterpreterRuntime::resolve_ldc`   | `libjvm.dylib` |
|  +50.0% |    +1 |        0.2% |   2 → 3 | `counter_overflow Runtime1 stub`    | `<unknown>`    |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `wrong_method_stub`                 | `<unknown>`    |
|  +50.0% |    +1 |        0.2% |   2 → 3 | `ic_miss_stub`                      | `<unknown>`    |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `InterpreterRuntime::quicken_io_cc` | `libjvm.dylib` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `slow_subtype_check Runtime1 stub`  | `<unknown>`    |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |           % | Samples | Function                                                                                                                    | Location                                                                                                                  |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
|  -95.2% |   -59 | 4.7% → 0.2% |  62 → 3 | `invoke()`                                                                                                                  | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000a8016ab9b8` |
|  -47.6% |   -10 | 1.6% → 0.8% | 21 → 11 | `ciBytecodeStream::get_method`                                                                                              | `libjvm.dylib`                                                                                                            |
|  -58.8% |   -10 | 1.3% → 0.5% |  17 → 7 | `PhaseGVN::transform_no_reclaim`                                                                                            | `libjvm.dylib`                                                                                                            |
|  -40.9% |    -9 | 1.7% → 1.0% | 22 → 13 | `ciObjectFactory::get_metadata`                                                                                             | `libjvm.dylib`                                                                                                            |
|  -50.0% |    -8 | 1.2% → 0.6% |  16 → 8 | `ciObjectFactory::create_new_metadata`                                                                                      | `libjvm.dylib`                                                                                                            |
|  -72.7% |    -8 | 0.8% → 0.2% |  11 → 3 | `accept(ClassVisitor, Attribute[], int)`                                                                                    | `org.jetbrains.org.objectweb.asm.ClassReader`                                                                             |
|  -72.7% |    -8 | 0.8% → 0.2% |  11 → 3 | `accept(ClassVisitor, int)`                                                                                                 | `org.jetbrains.org.objectweb.asm.ClassReader`                                                                             |
|  -88.9% |    -8 | 0.7% → 0.1% |   9 → 1 | `processConstraintsIgnoringForksData(ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`                                              |
|  -88.9% |    -8 | 0.7% → 0.1% |   9 → 1 | `processConstraints(ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector)`                  | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`                                              |
|  -87.5% |    -7 | 0.6% → 0.1% |   8 → 1 | `LIRGenerator::state_for`                                                                                                   | `libjvm.dylib`                                                                                                            |
|  -53.8% |    -7 | 1.0% → 0.5% |  13 → 6 | `ciMethod::ciMethod`                                                                                                        | `libjvm.dylib`                                                                                                            |
|  -77.8% |    -7 | 0.7% → 0.2% |   9 → 2 | `readMethod(ClassVisitor, Context, int)`                                                                                    | `org.jetbrains.org.objectweb.asm.ClassReader`                                                                             |
| removed |    -7 | 0.5% → 0.0% |   7 → 0 | `findClass(JavaClassFinder$Request, GlobalSearchScope)`                                                                     | `org.jetbrains.kotlin.cli.jvm.compiler.KotlinCliJavaFileManagerImpl`                                                      |
|  -87.5% |    -7 | 0.6% → 0.1% |   8 → 1 | `incorporate(ConstraintIncorporator$Context, TypeVariableMarker, Constraint)`                                               | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintIncorporator`                                          |
|  -87.5% |    -7 | 0.6% → 0.1% |   8 → 1 | `processGivenConstraints(ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector, Collection)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`                                              |
|  -66.7% |    -6 | 0.7% → 0.2% |   9 → 3 | `MultiNode::is_CFG`                                                                                                         | `libjvm.dylib`                                                                                                            |
|  -35.3% |    -6 | 1.3% → 0.8% | 17 → 11 | `PhaseCCP::analyze`                                                                                                         | `libjvm.dylib`                                                                                                            |
|  -27.3% |    -6 | 1.7% → 1.2% | 22 → 16 | `IndexSetIterator::advance_and_next`                                                                                        | `libjvm.dylib`                                                                                                            |
|  -33.3% |    -6 | 1.4% → 0.9% | 18 → 12 | `PhaseChaitin::Select`                                                                                                      | `libjvm.dylib`                                                                                                            |
| removed |    -6 | 0.5% → 0.0% |   6 → 0 | `<init>(VirtualFile, FqName, ClassifierResolutionContext, BinaryClassSignatureParser, int, JavaClass, byte[])`              | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaClass`                                                |

##### Compiler

| Change | Delta |           % | Samples | Function                                   | Location       |
| -----: | ----: | ----------: | ------: | ------------------------------------------ | -------------- |
| -47.6% |   -10 | 1.6% → 0.8% | 21 → 11 | `ciBytecodeStream::get_method`             | `libjvm.dylib` |
| -58.8% |   -10 | 1.3% → 0.5% |  17 → 7 | `PhaseGVN::transform_no_reclaim`           | `libjvm.dylib` |
| -40.9% |    -9 | 1.7% → 1.0% | 22 → 13 | `ciObjectFactory::get_metadata`            | `libjvm.dylib` |
| -50.0% |    -8 | 1.2% → 0.6% |  16 → 8 | `ciObjectFactory::create_new_metadata`     | `libjvm.dylib` |
| -87.5% |    -7 | 0.6% → 0.1% |   8 → 1 | `LIRGenerator::state_for`                  | `libjvm.dylib` |
| -53.8% |    -7 | 1.0% → 0.5% |  13 → 6 | `ciMethod::ciMethod`                       | `libjvm.dylib` |
| -66.7% |    -6 | 0.7% → 0.2% |   9 → 3 | `MultiNode::is_CFG`                        | `libjvm.dylib` |
| -35.3% |    -6 | 1.3% → 0.8% | 17 → 11 | `PhaseCCP::analyze`                        | `libjvm.dylib` |
| -27.3% |    -6 | 1.7% → 1.2% | 22 → 16 | `IndexSetIterator::advance_and_next`       | `libjvm.dylib` |
| -33.3% |    -6 | 1.4% → 0.9% | 18 → 12 | `PhaseChaitin::Select`                     | `libjvm.dylib` |
| -26.3% |    -5 | 1.5% → 1.1% | 19 → 14 | `LIRGenerator::block_do`                   | `libjvm.dylib` |
| -26.3% |    -5 | 1.5% → 1.1% | 19 → 14 | `BlockList::iterate_forward`               | `libjvm.dylib` |
| -29.4% |    -5 | 1.3% → 0.9% | 17 → 12 | `CompileQueue::get`                        | `libjvm.dylib` |
| -83.3% |    -5 | 0.5% → 0.1% |   6 → 1 | `MethodLiveness::get_liveness_at`          | `libjvm.dylib` |
| -71.4% |    -5 | 0.5% → 0.2% |   7 → 2 | `LinearScan::compute_debug_info_for_scope` | `libjvm.dylib` |
| -45.5% |    -5 | 0.8% → 0.5% |  11 → 6 | `Compile::call_generator`                  | `libjvm.dylib` |
| -16.1% |    -5 | 2.4% → 2.0% | 31 → 26 | `PhaseIdealLoop::build_loop_late`          | `libjvm.dylib` |
| -62.5% |    -5 | 0.6% → 0.2% |   8 → 3 | `LoadNode::Ideal`                          | `libjvm.dylib` |
| -36.4% |    -4 | 0.8% → 0.5% |  11 → 7 | `PhaseCCP::push_child_nodes_to_worklist`   | `libjvm.dylib` |
| -23.5% |    -4 | 1.3% → 1.0% | 17 → 13 | `PhaseCCP::PhaseCCP`                       | `libjvm.dylib` |

##### Ours

|  Change | Delta |           % | Samples | Function                                                                                                                                                                                     | Location                                                                                                                  |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
|  -95.2% |   -59 | 4.7% → 0.2% |  62 → 3 | `invoke()`                                                                                                                                                                                   | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000a8016ab9b8` |
|  -72.7% |    -8 | 0.8% → 0.2% |  11 → 3 | `accept(ClassVisitor, Attribute[], int)`                                                                                                                                                     | `org.jetbrains.org.objectweb.asm.ClassReader`                                                                             |
|  -72.7% |    -8 | 0.8% → 0.2% |  11 → 3 | `accept(ClassVisitor, int)`                                                                                                                                                                  | `org.jetbrains.org.objectweb.asm.ClassReader`                                                                             |
|  -88.9% |    -8 | 0.7% → 0.1% |   9 → 1 | `processConstraintsIgnoringForksData(ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector)`                                                                  | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`                                              |
|  -88.9% |    -8 | 0.7% → 0.1% |   9 → 1 | `processConstraints(ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector)`                                                                                   | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`                                              |
|  -77.8% |    -7 | 0.7% → 0.2% |   9 → 2 | `readMethod(ClassVisitor, Context, int)`                                                                                                                                                     | `org.jetbrains.org.objectweb.asm.ClassReader`                                                                             |
| removed |    -7 | 0.5% → 0.0% |   7 → 0 | `findClass(JavaClassFinder$Request, GlobalSearchScope)`                                                                                                                                      | `org.jetbrains.kotlin.cli.jvm.compiler.KotlinCliJavaFileManagerImpl`                                                      |
|  -87.5% |    -7 | 0.6% → 0.1% |   8 → 1 | `incorporate(ConstraintIncorporator$Context, TypeVariableMarker, Constraint)`                                                                                                                | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintIncorporator`                                          |
|  -87.5% |    -7 | 0.6% → 0.1% |   8 → 1 | `processGivenConstraints(ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector, Collection)`                                                                  | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`                                              |
| removed |    -6 | 0.5% → 0.0% |   6 → 0 | `<init>(VirtualFile, FqName, ClassifierResolutionContext, BinaryClassSignatureParser, int, JavaClass, byte[])`                                                                               | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaClass`                                                |
| removed |    -6 | 0.5% → 0.0% |   6 → 0 | `<init>(VirtualFile, FqName, ClassifierResolutionContext, BinaryClassSignatureParser, int, JavaClass, byte[], int, DefaultConstructorMarker)`                                                | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaClass`                                                |
|  -28.6% |    -6 | 1.6% → 1.1% | 21 → 15 | `accept(FirVisitor, Object)`                                                                                                                                                                 | `org.jetbrains.kotlin.fir.expressions.FirFunctionCall`                                                                    |
|  -71.4% |    -5 | 0.5% → 0.2% |   7 → 2 | `transform(FirTransformer, Object)`                                                                                                                                                          | `org.jetbrains.kotlin.fir.declarations.FirValueParameter`                                                                 |
|  -62.5% |    -5 | 0.6% → 0.2% |   8 → 3 | `resolveArgumentExpression(ArgumentCheckingProcessor$ArgumentContext, ConeResolutionAtom)`                                                                                                   | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor`                                                 |
|  -62.5% |    -5 | 0.6% → 0.2% |   8 → 3 | `resolveArgumentExpression(Candidate, ConeResolutionAtom, ConeKotlinType, CheckerSink, ResolutionContext, boolean, boolean, FirAnonymousFunction)`                                           | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor`                                                 |
|  -27.8% |    -5 | 1.4% → 1.0% | 18 → 13 | `processFunctionsByName$lambda$0(FirLookupTrackerComponent, CallInfo, Ref$BooleanRef, ScopeBasedTowerLevel, TowerLevelProcessor, FirCallableSymbol)`                                         | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`                                                       |
|  -27.8% |    -5 | 1.4% → 1.0% | 18 → 13 | `invoke(Object)`                                                                                                                                                                             | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x000000a80166fc20`                            |
| removed |    -5 | 0.4% → 0.0% |   5 → 0 | `addEqualityConstraintAndIncorporateIt(ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector, KotlinTypeMarker, KotlinTypeMarker)`                            | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`                                              |
| removed |    -5 | 0.4% → 0.0% |   5 → 0 | `access$addEqualityConstraintAndIncorporateIt(ConstraintInjector, ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector, KotlinTypeMarker, KotlinTypeMarker)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`                                              |
| removed |    -5 | 0.4% → 0.0% |   5 → 0 | `addInitialEqualityConstraint(ConstraintInjector$Context, KotlinTypeMarker, KotlinTypeMarker, ConstraintPosition)`                                                                           | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`                                              |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                      | Location                                                         |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------- | ---------------------------------------------------------------- |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `newProxyInstance(ClassLoader, Class[], InvocationHandler)`   | `java.lang.reflect.Proxy`                                        |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `linkToTargetMethod(Object, Object, Object)`                  | `java.lang.invoke.Invokers$Holder`                               |
|   -4.3% |    -3 | 5.4% → 5.0% | 70 → 67 | `read(byte[])`                                                | `java.io.FilterInputStream`                                      |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `put(Object, Object)`                                         | `java.util.HashMap`                                              |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `getMethod(String, Class[])`                                  | `java.lang.Class`                                                |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `isEmpty()`                                                   | `java.util.AbstractCollection`                                   |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `<init>(boolean)`                                             | `java.util.zip.Inflater`                                         |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `get(Object)`                                                 | `java.util.HashMap`                                              |
|  -25.0% |    -1 | 0.3% → 0.2% |   4 → 3 | `loadClass(String)`                                           | `java.lang.ClassLoader`                                          |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `next()`                                                      | `java.util.HashMap$ValueIterator`                                |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `getResource(String)`                                         | `java.lang.ClassLoader`                                          |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `getAnnotationsByType(Class)`                                 | `java.lang.reflect.Field`                                        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `putAll(Map)`                                                 | `kotlin.collections.builders.MapBuilder`                         |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `toSet(Iterable)`                                             | `kotlin.collections.CollectionsKt___CollectionsKt`               |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `remove(Object)`                                              | `java.util.HashMap`                                              |
|  -33.3% |    -1 |        0.2% |   3 → 2 | `linkMethodHandleConstant(Class, int, Class, String, Object)` | `java.lang.invoke.MethodHandleNatives`                           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `computeIfAbsent(Object, Function)`                           | `java.util.concurrent.ConcurrentHashMap`                         |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getDefaultJvmScriptingHostConfiguration()`                   | `kotlin.script.experimental.jvm.JvmScriptingHostConfigurationKt` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `get(byte[], int, int)`                                       | `java.nio.ByteBuffer`                                            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `of(Enum, Enum[])`                                            | `java.util.EnumSet`                                              |

##### JIT

|  Change | Delta |           % | Samples | Function                   | Location    |
| ------: | ----: | ----------: | ------: | -------------------------- | ----------- |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `I2C/C2I adapters(0xbba)`  | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xbbbb)` | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0x)`     | `<unknown>` |

##### Native

|  Change | Delta |           % | Samples | Function                                         | Location                  |
| ------: | ----: | ----------: | ------: | ------------------------------------------------ | ------------------------- |
|  -16.7% |    -4 | 1.8% → 1.5% | 24 → 20 | `InterpreterRuntime::resolve_from_cache`         | `libjvm.dylib`            |
|  -37.5% |    -3 | 0.6% → 0.4% |   8 → 5 | `InterpreterRuntime::frequency_counter_overflow` | `libjvm.dylib`            |
|  -22.2% |    -2 | 0.7% → 0.5% |   9 → 7 | `pthread_jit_write_protect_np`                   | `libsystem_pthread.dylib` |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `InterpreterRuntime::build_method_counters`      | `libjvm.dylib`            |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `InterpreterRuntime::anewarray`                  | `libjvm.dylib`            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `DeoptimizationBlob`                             | `<unknown>`               |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `BarrierSetNMethod::nmethod_stub_entry_barrier`  | `libjvm.dylib`            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `InterpreterRuntime::ldc`                        | `libjvm.dylib`            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `arrayof_oop_disjoint_arraycopy`                 | `<unknown>`               |

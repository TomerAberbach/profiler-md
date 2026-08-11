# Sampling profile

Collected 2,710 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Native            | 94.5% |   2,560 |
| Compiler          |  4.1% |     111 |
| Ours              |  0.9% |      24 |
| Standard library  |  0.3% |       9 |
| JIT               |  0.2% |       5 |
| Garbage collector | <0.1% |       1 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                                                           | Location                                                             |
| ----: | ------: | ------------------------------------------------------------------ | -------------------------------------------------------------------- |
|  0.2% |       5 | `PhaseChaitin::Split`                                              | `libjvm.dylib`                                                       |
|  0.1% |       4 | `I2C/C2I adapters(0xbb)`                                           | `<unknown>`                                                          |
|  0.1% |       4 | `LinearScanWalker::free_collect_inactive_fixed`                    | `libjvm.dylib`                                                       |
|  0.1% |       3 | `PhaseChaitin::gather_lrg_masks`                                   | `libjvm.dylib`                                                       |
|  0.1% |       2 | `checkNotNullParameter(Object, String)`                            | `kotlin.jvm.internal.Intrinsics`                                     |
|  0.1% |       2 | `checkAssertions()`                                                | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`      |
|  0.1% |       2 | `IndexSetIterator::advance_and_next`                               | `libjvm.dylib`                                                       |
|  0.1% |       2 | `PhaseChaitin::build_ifg_physical`                                 | `libjvm.dylib`                                                       |
|  0.1% |       2 | `RegionNode::is_unreachable_from_root`                             | `libjvm.dylib`                                                       |
|  0.1% |       2 | `Matcher::Label_Root`                                              | `libjvm.dylib`                                                       |
|  0.1% |       2 | `PhaseIdealLoop::build_loop_late_post_work`                        | `libjvm.dylib`                                                       |
|  0.1% |       2 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal`               | `libjvm.dylib`                                                       |
|  0.1% |       2 | `PhaseIdealLoop::compute_lca_of_uses`                              | `libjvm.dylib`                                                       |
|  0.1% |       2 | `Node::remove_dead_region`                                         | `libjvm.dylib`                                                       |
|  0.1% |       2 | `Node::dominates`                                                  | `libjvm.dylib`                                                       |
|  0.1% |       2 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` | `libjvm.dylib`                                                       |
| <0.1% |       1 | `get(Object)`                                                      | `com.intellij.util.containers.ConcurrentFactoryMap`                  |
| <0.1% |       1 | `BarrierSetNMethod::nmethod_stub_entry_barrier`                    | `libjvm.dylib`                                                       |
| <0.1% |       1 | `newlineBeforeCurrentToken()`                                      | `org.jetbrains.kotlin.parsing.SemanticWhitespaceAwarePsiBuilderImpl` |
| <0.1% |       1 | `CodeSection::relocate`                                            | `libjvm.dylib`                                                       |

#### Categories

##### Compiler

|     % | Samples | Function                                                           | Location       |
| ----: | ------: | ------------------------------------------------------------------ | -------------- |
|  0.2% |       5 | `PhaseChaitin::Split`                                              | `libjvm.dylib` |
|  0.1% |       4 | `LinearScanWalker::free_collect_inactive_fixed`                    | `libjvm.dylib` |
|  0.1% |       3 | `PhaseChaitin::gather_lrg_masks`                                   | `libjvm.dylib` |
|  0.1% |       2 | `IndexSetIterator::advance_and_next`                               | `libjvm.dylib` |
|  0.1% |       2 | `PhaseChaitin::build_ifg_physical`                                 | `libjvm.dylib` |
|  0.1% |       2 | `RegionNode::is_unreachable_from_root`                             | `libjvm.dylib` |
|  0.1% |       2 | `Matcher::Label_Root`                                              | `libjvm.dylib` |
|  0.1% |       2 | `PhaseIdealLoop::build_loop_late_post_work`                        | `libjvm.dylib` |
|  0.1% |       2 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal`               | `libjvm.dylib` |
|  0.1% |       2 | `PhaseIdealLoop::compute_lca_of_uses`                              | `libjvm.dylib` |
|  0.1% |       2 | `Node::remove_dead_region`                                         | `libjvm.dylib` |
|  0.1% |       2 | `Node::dominates`                                                  | `libjvm.dylib` |
|  0.1% |       2 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` | `libjvm.dylib` |
| <0.1% |       1 | `CodeSection::relocate`                                            | `libjvm.dylib` |
| <0.1% |       1 | `Matcher::find_shared`                                             | `libjvm.dylib` |
| <0.1% |       1 | `ciConstantPoolCache::get`                                         | `libjvm.dylib` |
| <0.1% |       1 | `MethodLiveness::get_liveness_at`                                  | `libjvm.dylib` |
| <0.1% |       1 | `ConnectionGraph::compute_escape`                                  | `libjvm.dylib` |
| <0.1% |       1 | `MultiNode::is_CFG`                                                | `libjvm.dylib` |
| <0.1% |       1 | `ciField::will_link`                                               | `libjvm.dylib` |

##### Ours

|     % | Samples | Function                                                                                                                                                     | Location                                                                                                |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
|  0.1% |       2 | `checkAssertions()`                                                                                                                                          | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`                                         |
| <0.1% |       1 | `get(Object)`                                                                                                                                                | `com.intellij.util.containers.ConcurrentFactoryMap`                                                     |
| <0.1% |       1 | `newlineBeforeCurrentToken()`                                                                                                                                | `org.jetbrains.kotlin.parsing.SemanticWhitespaceAwarePsiBuilderImpl`                                    |
| <0.1% |       1 | `extractClassMetadata(ClassId, FirDeserializationContext)`                                                                                                   | `org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`                         |
| <0.1% |       1 | `getAnnotations()`                                                                                                                                           | `org.jetbrains.kotlin.fir.types.builder.FirResolvedTypeRefBuilder`                                      |
| <0.1% |       1 | `withParameters(FirCallableDeclaration, SessionAndScopeSessionHolder, Function0)`                                                                            | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveContext`                         |
| <0.1% |       1 | `<init>(FirScope, ImplicitReceiverValue, List, boolean, FirRegularClassSymbol, int, DefaultConstructorMarker)`                                               | `org.jetbrains.kotlin.fir.declarations.FirTowerDataElement`                                             |
| <0.1% |       1 | `transformChildren(FirTransformer, Object)`                                                                                                                  | `org.jetbrains.kotlin.fir.declarations.impl.FirResolvedImportImpl`                                      |
| <0.1% |       1 | `transformWhenBranch(FirWhenBranch, ResolutionMode)`                                                                                                         | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer` |
| <0.1% |       1 | `getCalleeReference()`                                                                                                                                       | `org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl`                                         |
| <0.1% |       1 | `loadFunctionAnnotations(DeserializedContainerSource, ProtoBuf$Function, NameResolver, TypeTable)`                                                           | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer`                         |
| <0.1% |       1 | `transformRegularClass(FirRegularClass, ResolutionMode)`                                                                                                     | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`          |
| <0.1% |       1 | `enqueueResolveTasksForExpressionReceiver(CallInfo, FirExpression)`                                                                                          | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirInvokeResolveTowerExtension`                           |
| <0.1% |       1 | `<init>(FirModuleData, NameResolver, TypeTable, AnnotationDeserializer, FirTypeDeserializer$FlexibleTypeFactory, List, FirTypeDeserializer, FirBasedSymbol)` | `org.jetbrains.kotlin.fir.deserialization.FirTypeDeserializer`                                          |
| <0.1% |       1 | `check(CheckerContext, DiagnosticReporter, FirDeclaration)`                                                                                                  | `org.jetbrains.kotlin.fir.analysis.jvm.checkers.declaration.FirJvmRedundantRepeatableChecker`           |
| <0.1% |       1 | `check(CheckerContext, DiagnosticReporter, FirDeclaration)`                                                                                                  | `org.jetbrains.kotlin.fir.analysis.jvm.checkers.declaration.FirJvmNameChecker`                          |
| <0.1% |       1 | `check(CheckerContext, DiagnosticReporter, FirDeclaration)`                                                                                                  | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirDataObjectContentChecker`                    |
| <0.1% |       1 | `registerComponent(String, Object)`                                                                                                                          | `org.jetbrains.kotlin.util.AttributeArrayOwner`                                                         |
| <0.1% |       1 | `<init>()`                                                                                                                                                   | `org.jetbrains.kotlin.types.AbstractTypeApproximator$Cache`                                             |
| <0.1% |       1 | `visitVararg(IrVararg)`                                                                                                                                      | `org.jetbrains.kotlin.ir.visitors.IrVisitorVoid`                                                        |

##### JIT

|     % | Samples | Function                 | Location    |
| ----: | ------: | ------------------------ | ----------- |
|  0.1% |       4 | `I2C/C2I adapters(0xbb)` | `<unknown>` |
| <0.1% |       1 | `itable stub`            | `<unknown>` |

##### Standard library

|     % | Samples | Function                                                    | Location                              |
| ----: | ------: | ----------------------------------------------------------- | ------------------------------------- |
|  0.1% |       2 | `checkNotNullParameter(Object, String)`                     | `kotlin.jvm.internal.Intrinsics`      |
| <0.1% |       1 | `replace$default(String, char, char, boolean, int, Object)` | `kotlin.text.StringsKt__StringsJVMKt` |
| <0.1% |       1 | `get(Object)`                                               | `java.util.IdentityHashMap`           |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       2 | `kotlin.jvm.internal.Intrinsics:130` |

##### `checkAssertions()` (`org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`)

|      % | Samples | Location                                                            |
| -----: | ------: | ------------------------------------------------------------------- |
| 100.0% |       2 | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer:140` |

##### `get(Object)` (`com.intellij.util.containers.ConcurrentFactoryMap`)

|      % | Samples | Location                                               |
| -----: | ------: | ------------------------------------------------------ |
| 100.0% |       1 | `com.intellij.util.containers.ConcurrentFactoryMap:41` |

##### `newlineBeforeCurrentToken()` (`org.jetbrains.kotlin.parsing.SemanticWhitespaceAwarePsiBuilderImpl`)

|      % | Samples | Location                                                                |
| -----: | ------: | ----------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.parsing.SemanticWhitespaceAwarePsiBuilderImpl:93` |

##### `extractClassMetadata(ClassId, FirDeserializationContext)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`)

|      % | Samples | Location                                                                            |
| -----: | ------: | ----------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider:199` |

##### `getAnnotations()` (`org.jetbrains.kotlin.fir.types.builder.FirResolvedTypeRefBuilder`)

|      % | Samples | Location                                                              |
| -----: | ------: | --------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.types.builder.FirResolvedTypeRefBuilder:29` |

##### `withParameters(FirCallableDeclaration, SessionAndScopeSessionHolder, Function0)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveContext`)

|      % | Samples | Location                                                                            |
| -----: | ------: | ----------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveContext:859` |

##### `<init>(FirScope, ImplicitReceiverValue, List, boolean, FirRegularClassSymbol, int, DefaultConstructorMarker)` (`org.jetbrains.kotlin.fir.declarations.FirTowerDataElement`)

|      % | Samples | Location                                                        |
| -----: | ------: | --------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.declarations.FirTowerDataElement:274` |

##### `transformChildren(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirResolvedImportImpl`)

|      % | Samples | Location                                                              |
| -----: | ------: | --------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.declarations.impl.FirResolvedImportImpl:45` |

##### `transformWhenBranch(FirWhenBranch, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer`)

|      % | Samples | Location                                                                                                    |
| -----: | ------: | ----------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer:125` |

##### `getCalleeReference()` (`org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl`)

|      % | Samples | Location                                                           |
| -----: | ------: | ------------------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl:27` |

##### `loadFunctionAnnotations(DeserializedContainerSource, ProtoBuf$Function, NameResolver, TypeTable)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer`)

|      % | Samples | Location                                                                            |
| -----: | ------: | ----------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer:135` |

##### `transformRegularClass(FirRegularClass, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`)

|      % | Samples | Location                                                                                            |
| -----: | ------: | --------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer:1998` |

##### `enqueueResolveTasksForExpressionReceiver(CallInfo, FirExpression)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirInvokeResolveTowerExtension`)

|      % | Samples | Location                                                                          |
| -----: | ------: | --------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirInvokeResolveTowerExtension:661` |

##### `<init>(FirModuleData, NameResolver, TypeTable, AnnotationDeserializer, FirTypeDeserializer$FlexibleTypeFactory, List, FirTypeDeserializer, FirBasedSymbol)` (`org.jetbrains.kotlin.fir.deserialization.FirTypeDeserializer`)

|      % | Samples | Location                                                          |
| -----: | ------: | ----------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.deserialization.FirTypeDeserializer:64` |

##### `check(CheckerContext, DiagnosticReporter, FirDeclaration)` (`org.jetbrains.kotlin.fir.analysis.jvm.checkers.declaration.FirJvmRedundantRepeatableChecker`)

|      % | Samples | Location                                                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.analysis.jvm.checkers.declaration.FirJvmRedundantRepeatableChecker:25` |

##### `check(CheckerContext, DiagnosticReporter, FirDeclaration)` (`org.jetbrains.kotlin.fir.analysis.jvm.checkers.declaration.FirJvmNameChecker`)

|      % | Samples | Location                                                                          |
| -----: | ------: | --------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.analysis.jvm.checkers.declaration.FirJvmNameChecker:35` |

##### `check(CheckerContext, DiagnosticReporter, FirDeclaration)` (`org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirDataObjectContentChecker`)

|      % | Samples | Location                                                                                |
| -----: | ------: | --------------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirDataObjectContentChecker:22` |

##### `registerComponent(String, Object)` (`org.jetbrains.kotlin.util.AttributeArrayOwner`)

|      % | Samples | Location                                           |
| -----: | ------: | -------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.util.AttributeArrayOwner:39` |

##### `<init>()` (`org.jetbrains.kotlin.types.AbstractTypeApproximator$Cache`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.types.AbstractTypeApproximator$Cache:55` |

##### `visitVararg(IrVararg)` (`org.jetbrains.kotlin.ir.visitors.IrVisitorVoid`)

|      % | Samples | Location                                             |
| -----: | ------: | ---------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.ir.visitors.IrVisitorVoid:696` |

##### `replace$default(String, char, char, boolean, int, Object)` (`kotlin.text.StringsKt__StringsJVMKt`)

|      % | Samples | Location                                 |
| -----: | ------: | ---------------------------------------- |
| 100.0% |       1 | `kotlin.text.StringsKt__StringsJVMKt:68` |

##### `get(Object)` (`java.util.IdentityHashMap`)

|      % | Samples | Location                        |
| -----: | ------: | ------------------------------- |
| 100.0% |       1 | `java.util.IdentityHashMap:339` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       5 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|     % | Samples | Caller                                                          | Location                                                                           |
| ----: | ------: | --------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| 25.0% |       1 | `addTypeStatement(MutableFlow, TypeStatement)`                  | `org.jetbrains.kotlin.fir.resolve.dfa.LogicSystem`                                 |
| 25.0% |       1 | `accept(FirVisitor, Object)`                                    | `org.jetbrains.kotlin.fir.expressions.FirResolvedQualifier`                        |
| 25.0% |       1 | `check(CheckerContext, DiagnosticReporter, FirResolvedTypeRef)` | `org.jetbrains.kotlin.fir.analysis.checkers.type.FirUpperBoundViolatedTypeChecker` |
| 25.0% |       1 | `markPlacesForInlineAndRemoveInlinable(MethodNode, Map, int)`   | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                                |

##### `LinearScanWalker::free_collect_inactive_fixed` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |       4 | `LinearScanWalker::alloc_free_reg` | `libjvm.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       3 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|     % | Samples | Caller                                                                    | Location                                                                    |
| ----: | ------: | ------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| 50.0% |       1 | `convertAnnotationsToFir(Iterable, FirSession, KtSourceElement, boolean)` | `org.jetbrains.kotlin.fir.java.JavaAnnotationsMappingKt`                    |
| 50.0% |       1 | `check(CheckerContext, DiagnosticReporter, FirTypeRef)`                   | `org.jetbrains.kotlin.fir.analysis.checkers.type.FirSuspendModifierChecker` |

##### `checkAssertions()` (`org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`)

|      % | Samples | Caller      | Location                                                        |
| -----: | ------: | ----------- | --------------------------------------------------------------- |
| 100.0% |       2 | `analyze()` | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|     % | Samples | Caller                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 50.0% |       1 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |
| 50.0% |       1 | `PhaseChaitin::Simplify`           | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `RegionNode::is_unreachable_from_root` (`libjvm.dylib`)

|      % | Samples | Caller                              | Location       |
| -----: | ------: | ----------------------------------- | -------------- |
| 100.0% |       2 | `RegionNode::is_unreachable_region` | `libjvm.dylib` |

##### `Matcher::Label_Root` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |       2 | `Matcher::Label_Root` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       2 | `PhaseIdealLoop::build_loop_late` | `libjvm.dylib` |

##### `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |       2 | `PhaseIdealLoop::compute_lca_of_uses` | `libjvm.dylib` |

##### `PhaseIdealLoop::compute_lca_of_uses` (`libjvm.dylib`)

|      % | Samples | Caller                                      | Location       |
| -----: | ------: | ------------------------------------------- | -------------- |
| 100.0% |       2 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |

##### `Node::remove_dead_region` (`libjvm.dylib`)

|     % | Samples | Caller                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 50.0% |       1 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |
| 50.0% |       1 | `CallStaticJavaNode::Ideal`   | `libjvm.dylib` |

##### `Node::dominates` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |       2 | `MemNode::all_controls_dominate` | `libjvm.dylib` |

##### `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |       2 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |

##### `get(Object)` (`com.intellij.util.containers.ConcurrentFactoryMap`)

|      % | Samples | Caller                   | Location                                                        |
| -----: | ------: | ------------------------ | --------------------------------------------------------------- |
| 100.0% |       1 | `findFileByPath(String)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarFileSystem` |

##### `BarrierSetNMethod::nmethod_stub_entry_barrier` (`libjvm.dylib`)

|      % | Samples | Caller          | Location                                        |
| -----: | ------: | --------------- | ----------------------------------------------- |
| 100.0% |       1 | `getArrayMap()` | `org.jetbrains.kotlin.util.ComponentArrayOwner` |

##### `newlineBeforeCurrentToken()` (`org.jetbrains.kotlin.parsing.SemanticWhitespaceAwarePsiBuilderImpl`)

|      % | Samples | Caller                                     | Location                                             |
| -----: | ------: | ------------------------------------------ | ---------------------------------------------------- |
| 100.0% |       1 | `tokenMatches(IElementType, IElementType)` | `org.jetbrains.kotlin.parsing.AbstractKotlinParsing` |

##### `CodeSection::relocate` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |       1 | `MacroAssembler::far_jump` | `libjvm.dylib` |

##### `Matcher::find_shared` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       1 | `Matcher::match` | `libjvm.dylib` |

##### `ciConstantPoolCache::get` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |       1 | `ciEnv::get_field_by_index_impl` | `libjvm.dylib` |

##### `MethodLiveness::get_liveness_at` (`libjvm.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |       1 | `LIRGenerator::state_for` | `libjvm.dylib` |

##### `ConnectionGraph::compute_escape` (`libjvm.dylib`)

|      % | Samples | Caller                         | Location       |
| -----: | ------: | ------------------------------ | -------------- |
| 100.0% |       1 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |

##### `MultiNode::is_CFG` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |       1 | `PhaseIdealLoop::Dominators` | `libjvm.dylib` |

##### `ciField::will_link` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |       1 | `ciBytecodeStream::get_field` | `libjvm.dylib` |

##### `extractClassMetadata(ClassId, FirDeserializationContext)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`)

|      % | Samples | Caller                                                        | Location                                                                         |
| -----: | ------: | ------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| 100.0% |       1 | `findAndDeserializeClass(ClassId, FirDeserializationContext)` | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider` |

##### `getAnnotations()` (`org.jetbrains.kotlin.fir.types.builder.FirResolvedTypeRefBuilder`)

|      % | Samples | Caller                                                                                                            | Location                                                                           |
| -----: | ------: | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| 100.0% |       1 | `transformType(FirTypeRef, ConeKotlinType, ConeDiagnostic, TypeResolutionConfiguration, FirResolvedSymbolOrigin)` | `org.jetbrains.kotlin.fir.resolve.transformers.FirSpecificTypeResolverTransformer` |

##### `withParameters(FirCallableDeclaration, SessionAndScopeSessionHolder, Function0)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveContext`)

|      % | Samples | Caller                                                                  | Location                                                                        |
| -----: | ------: | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| 100.0% |       1 | `forFunctionBody(FirFunction, SessionAndScopeSessionHolder, Function0)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveContext` |

##### `<init>(FirScope, ImplicitReceiverValue, List, boolean, FirRegularClassSymbol, int, DefaultConstructorMarker)` (`org.jetbrains.kotlin.fir.declarations.FirTowerDataElement`)

|      % | Samples | Caller                                  | Location                                                        |
| -----: | ------: | --------------------------------------- | --------------------------------------------------------------- |
| 100.0% |       1 | `asTowerDataElement(FirScope, boolean)` | `org.jetbrains.kotlin.fir.declarations.ImplicitReceiverUtilsKt` |

##### `transformChildren(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirResolvedImportImpl`)

|      % | Samples | Caller                                      | Location                                                           |
| -----: | ------: | ------------------------------------------- | ------------------------------------------------------------------ |
| 100.0% |       1 | `transformChildren(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.declarations.impl.FirResolvedImportImpl` |

##### `transformWhenBranch(FirWhenBranch, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer`)

|      % | Samples | Caller                                               | Location                                                                                                 |
| -----: | ------: | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `transformWhenBranch(FirWhenBranch, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### `getCalleeReference()` (`org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl`)

|      % | Samples | Caller                                                 | Location                                          |
| -----: | ------: | ------------------------------------------------------ | ------------------------------------------------- |
| 100.0% |       1 | `typeFromCallee(BodyResolveComponents, FirResolvable)` | `org.jetbrains.kotlin.fir.resolve.ResolveUtilsKt` |

##### `loadFunctionAnnotations(DeserializedContainerSource, ProtoBuf$Function, NameResolver, TypeTable)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer`)

|      % | Samples | Caller                                                                                  | Location                                                         |
| -----: | ------: | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 100.0% |       1 | `loadFunction(ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin)` | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer` |

##### `transformRegularClass(FirRegularClass, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`)

|      % | Samples | Caller                                                   | Location                                                                                                 |
| -----: | ------: | -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `transformRegularClass(FirRegularClass, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### `enqueueResolveTasksForExpressionReceiver(CallInfo, FirExpression)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirInvokeResolveTowerExtension`)

|      % | Samples | Caller                                                                                                      | Location                                                        |
| -----: | ------: | ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| 100.0% |       1 | `enqueueResolutionTasks(ResolutionContext, TowerResolveManager, CandidateFactoriesAndCollectors, CallInfo)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver` |

##### `<init>(FirModuleData, NameResolver, TypeTable, AnnotationDeserializer, FirTypeDeserializer$FlexibleTypeFactory, List, FirTypeDeserializer, FirBasedSymbol)` (`org.jetbrains.kotlin.fir.deserialization.FirTypeDeserializer`)

|      % | Samples | Caller                                                                                   | Location                                                       |
| -----: | ------: | ---------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| 100.0% |       1 | `forChildContext(List, FirBasedSymbol, NameResolver, TypeTable, AnnotationDeserializer)` | `org.jetbrains.kotlin.fir.deserialization.FirTypeDeserializer` |

##### `check(CheckerContext, DiagnosticReporter, FirDeclaration)` (`org.jetbrains.kotlin.fir.analysis.jvm.checkers.declaration.FirJvmRedundantRepeatableChecker`)

|      % | Samples | Caller                                                 | Location                                                                                        |
| -----: | ------: | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `visitNamedFunction(FirNamedFunction, CheckerContext)` | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.DeclarationCheckersDiagnosticComponent` |

##### `check(CheckerContext, DiagnosticReporter, FirDeclaration)` (`org.jetbrains.kotlin.fir.analysis.jvm.checkers.declaration.FirJvmNameChecker`)

|      % | Samples | Caller                                                 | Location                                                                                        |
| -----: | ------: | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `visitNamedFunction(FirNamedFunction, CheckerContext)` | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.DeclarationCheckersDiagnosticComponent` |

##### `check(CheckerContext, DiagnosticReporter, FirDeclaration)` (`org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirDataObjectContentChecker`)

|      % | Samples | Caller                                                 | Location                                                                                        |
| -----: | ------: | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `visitNamedFunction(FirNamedFunction, CheckerContext)` | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.DeclarationCheckersDiagnosticComponent` |

##### `registerComponent(String, Object)` (`org.jetbrains.kotlin.util.AttributeArrayOwner`)

|      % | Samples | Caller                              | Location                                          |
| -----: | ------: | ----------------------------------- | ------------------------------------------------- |
| 100.0% |       1 | `registerComponent(KClass, Object)` | `org.jetbrains.kotlin.util.AbstractArrayMapOwner` |

##### `<init>()` (`org.jetbrains.kotlin.types.AbstractTypeApproximator$Cache`)

|      % | Samples | Caller                                                                         | Location                                              |
| -----: | ------: | ------------------------------------------------------------------------------ | ----------------------------------------------------- |
| 100.0% |       1 | `approximateToSuperType(KotlinTypeMarker, TypeApproximatorConfiguration, Map)` | `org.jetbrains.kotlin.types.AbstractTypeApproximator` |

##### `visitVararg(IrVararg)` (`org.jetbrains.kotlin.ir.visitors.IrVisitorVoid`)

|      % | Samples | Caller                        | Location                                         |
| -----: | ------: | ----------------------------- | ------------------------------------------------ |
| 100.0% |       1 | `visitVararg(IrVararg, Void)` | `org.jetbrains.kotlin.ir.visitors.IrVisitorVoid` |

##### `itable stub` (`<unknown>`)

|      % | Samples | Caller                                                        | Location                                                         |
| -----: | ------: | ------------------------------------------------------------- | ---------------------------------------------------------------- |
| 100.0% |       1 | `getParameter(TypeSystemContext, TypeConstructorMarker, int)` | `org.jetbrains.kotlin.types.model.TypeSystemContextContextualKt` |

##### `replace$default(String, char, char, boolean, int, Object)` (`kotlin.text.StringsKt__StringsJVMKt`)

|      % | Samples | Caller                          | Location                                                     |
| -----: | ------: | ------------------------------- | ------------------------------------------------------------ |
| 100.0% |       1 | `findBinaryOrSigClass(ClassId)` | `org.jetbrains.kotlin.cli.jvm.compiler.CliVirtualFileFinder` |

##### `get(Object)` (`java.util.IdentityHashMap`)

|      % | Samples | Caller        | Location                                        |
| -----: | ------: | ------------- | ----------------------------------------------- |
| 100.0% |       1 | `get(Object)` | `org.jetbrains.kotlin.utils.SmartIdentityTable` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                                                                                                      | Location                                                |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 12.1% |     327 | `CompileBroker::compiler_thread_loop`                                                                                                         | `libjvm.dylib`                                          |
|  6.6% |     180 | `CompileQueue::get`                                                                                                                           | `libjvm.dylib`                                          |
|  5.4% |     147 | `CompileBroker::invoke_compiler_on_method`                                                                                                    | `libjvm.dylib`                                          |
|  3.8% |     103 | `Compile::Compile`                                                                                                                            | `libjvm.dylib`                                          |
|  3.8% |     103 | `C2Compiler::compile_method`                                                                                                                  | `libjvm.dylib`                                          |
|  3.3% |      89 | `run(String[])`                                                                                                                               | `org.jetbrains.kotlin.preloading.Preloader`             |
|  3.3% |      89 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`             |
|  2.7% |      74 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  2.7% |      74 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
|  2.7% |      74 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
|  2.7% |      74 | `invoke(Object, Object[])`                                                                                                                    | `java.lang.reflect.Method`                              |
|  2.7% |      73 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  2.7% |      72 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
|  2.7% |      72 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
|  2.7% |      72 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  2.6% |      71 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
|  2.5% |      69 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|  2.5% |      69 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|  2.5% |      69 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|  2.5% |      69 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

#### Categories

##### Compiler

|     % | Samples | Function                                   | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 12.1% |     327 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
|  6.6% |     180 | `CompileQueue::get`                        | `libjvm.dylib` |
|  5.4% |     147 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  3.8% |     103 | `Compile::Compile`                         | `libjvm.dylib` |
|  3.8% |     103 | `C2Compiler::compile_method`               | `libjvm.dylib` |
|  1.8% |      49 | `Compile::Code_Gen`                        | `libjvm.dylib` |
|  1.6% |      43 | `Compilation::compile_method`              | `libjvm.dylib` |
|  1.6% |      43 | `Compilation::Compilation`                 | `libjvm.dylib` |
|  1.5% |      41 | `Compile::Optimize`                        | `libjvm.dylib` |
|  1.3% |      35 | `Compilation::compile_java_method`         | `libjvm.dylib` |
|  0.9% |      24 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
|  0.8% |      23 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
|  0.7% |      18 | `PhaseIterGVN::transform_old`              | `libjvm.dylib` |
|  0.7% |      18 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |
|  0.6% |      17 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
|  0.6% |      17 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
|  0.6% |      17 | `Compilation::emit_lir`                    | `libjvm.dylib` |
|  0.5% |      13 | `LinearScan::do_linear_scan`               | `libjvm.dylib` |
|  0.4% |      11 | `Compilation::build_hir`                   | `libjvm.dylib` |
|  0.4% |      10 | `Matcher::match`                           | `libjvm.dylib` |

##### Ours

|    % | Samples | Function                                                                                                                                      | Location                                                |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 3.3% |      89 | `run(String[])`                                                                                                                               | `org.jetbrains.kotlin.preloading.Preloader`             |
| 3.3% |      89 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`             |
| 2.7% |      74 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 2.7% |      74 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 2.7% |      74 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 2.7% |      73 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 2.7% |      72 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 2.7% |      72 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 2.7% |      72 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
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

##### JIT

|     % | Samples | Function                 | Location    |
| ----: | ------: | ------------------------ | ----------- |
|  0.1% |       4 | `I2C/C2I adapters(0xbb)` | `<unknown>` |
| <0.1% |       1 | `itable stub`            | `<unknown>` |

##### Standard library

|     % | Samples | Function                                                         | Location                                              |
| ----: | ------: | ---------------------------------------------------------------- | ----------------------------------------------------- |
|  2.7% |      74 | `invoke(Object, Object[])`                                       | `java.lang.reflect.Method`                            |
|  0.5% |      14 | `read(byte[])`                                                   | `java.io.FilterInputStream`                           |
|  0.5% |      14 | `loadClass(String, boolean)`                                     | `java.lang.ClassLoader`                               |
|  0.4% |      12 | `defineClass(String, byte[], int, int)`                          | `java.lang.ClassLoader`                               |
|  0.3% |       9 | `resumeWith(Object)`                                             | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |
|  0.1% |       3 | `getValue()`                                                     | `kotlin.SafePublicationLazyImpl`                      |
|  0.1% |       3 | `checkNotNullParameter(Object, String)`                          | `kotlin.jvm.internal.Intrinsics`                      |
|  0.1% |       2 | `getJavaField(KProperty)`                                        | `kotlin.reflect.jvm.ReflectJvmMapping`                |
|  0.1% |       2 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives`                |
| <0.1% |       1 | `get(Object)`                                                    | `java.util.HashMap`                                   |
| <0.1% |       1 | `load(String)`                                                   | `java.lang.System`                                    |
| <0.1% |       1 | `runBlocking$default(CoroutineContext, Function2, int, Object)`  | `kotlinx.coroutines.BuildersKt`                       |
| <0.1% |       1 | `loadClass(String)`                                              | `java.lang.ClassLoader`                               |
| <0.1% |       1 | `replace$default(String, char, char, boolean, int, Object)`      | `kotlin.text.StringsKt__StringsJVMKt`                 |
| <0.1% |       1 | `linkToTargetMethod(Object, Object, Object, Object)`             | `java.lang.invoke.Invokers$Holder`                    |
| <0.1% |       1 | `getValue()`                                                     | `kotlin.UnsafeLazyImpl`                               |
| <0.1% |       1 | `replaceAll(UnaryOperator)`                                      | `java.util.ArrayList`                                 |
| <0.1% |       1 | `iterator()`                                                     | `java.util.ArrayList`                                 |
| <0.1% |       1 | `linkToTargetMethod(Object, Object)`                             | `java.lang.invoke.Invokers$Holder`                    |
| <0.1% |       1 | `subList(int, int)`                                              | `java.util.AbstractList`                              |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 55.0% |     180 | `CompileQueue::get`                        | `libjvm.dylib` |
| 45.0% |     147 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 70.1% |     103 | `C2Compiler::compile_method`    | `libjvm.dylib` |
|  0.7% |       1 | `ciEnv::get_method_from_handle` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 47.6% |      49 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 39.8% |      41 | `Compile::Optimize`                      | `libjvm.dylib` |
|  1.0% |       1 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     103 | `Compile::Compile` | `libjvm.dylib` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|     % | Samples | Callee                                                                       | Location                                               |
| ----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 83.1% |      74 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                             |
| 16.9% |      15 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % | Samples | Callee          | Location                                    |
| -----: | ------: | --------------- | ------------------------------------------- |
| 100.0% |      89 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|     % | Samples | Callee                                                                                             | Location                                                |
| ----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 98.6% |      73 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  1.4% |       1 | `setupIdeaStandaloneExecution()`                                                                   | `org.jetbrains.kotlin.cli.jvm.compiler.CompatKt`        |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|      % | Samples | Callee                          | Location                                                |
| -----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 100.0% |      74 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee           | Location                                               |
| -----: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% |      74 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|     % | Samples | Callee                                                 | Location                                                |
| ----: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 98.6% |      72 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  1.4% |       1 | `defaultMessageRenderer()`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

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

|      % | Samples | Callee                              | Location                                                         |
| -----: | ------: | ----------------------------------- | ---------------------------------------------------------------- |
| 100.0% |      68 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
|   5.9% |       4 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase`   |
|   1.5% |       1 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.ModuleLoweringPhase` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 49.0% |      24 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 20.4% |      10 | `Matcher::match`                  | `libjvm.dylib` |
| 14.3% |       7 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
| 10.2% |       5 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  2.0% |       1 | `branchNode::is_block_proj`       | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 81.4% |      35 | `Compilation::compile_java_method` | `libjvm.dylib` |
| 18.6% |       8 | `ciEnv::register_method`           | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |      43 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 34.1% |      14 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
| 24.4% |      10 | `PhaseIterGVN::optimize`               | `libjvm.dylib` |
| 22.0% |       9 | `Compile::optimize_loops`              | `libjvm.dylib` |
|  4.9% |       2 | `ConnectionGraph::do_analysis`         | `libjvm.dylib` |
|  4.9% |       2 | `PhaseMacroExpand::expand_macro_nodes` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 48.6% |      17 | `Compilation::emit_lir`       | `libjvm.dylib` |
| 31.4% |      11 | `Compilation::build_hir`      | `libjvm.dylib` |
| 20.0% |       7 | `Compilation::emit_code_body` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 29.2% |       7 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| 20.8% |       5 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
| 12.5% |       3 | `PhaseChaitin::gather_lrg_masks`           | `libjvm.dylib` |
|  8.3% |       2 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
|  4.2% |       1 | `branchConNode::ideal_Opcode`              | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 73.9% |      17 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| 26.1% |       6 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|     % | Samples | Callee                 | Location       |
| ----: | ------: | ---------------------- | -------------- |
| 16.7% |       3 | `LoadNode::Ideal`      | `libjvm.dylib` |
| 11.1% |       2 | `RegionNode::Ideal`    | `libjvm.dylib` |
|  5.6% |       1 | `MergeMemNode::Ideal`  | `libjvm.dylib` |
|  5.6% |       1 | `CastIINode::Identity` | `libjvm.dylib` |
|  5.6% |       1 | `PhiNode::Ideal`       | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |      18 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 47.1% |       8 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| 17.6% |       3 | `PhaseIdealLoop::build_loop_tree`      | `libjvm.dylib` |
| 11.8% |       2 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| 11.8% |       2 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |
|  5.9% |       1 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Callee                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      17 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 76.5% |      13 | `LinearScan::do_linear_scan` | `libjvm.dylib` |
| 23.5% |       4 | `BlockList::iterate_forward` | `libjvm.dylib` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|     % | Samples | Callee              | Location                                                 |
| ----: | ------: | ------------------- | -------------------------------------------------------- |
| 85.7% |      12 | `findClass(String)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 61.5% |       8 | `LinearScan::allocate_registers`              | `libjvm.dylib` |
|  7.7% |       1 | `LinearScan::resolve_data_flow`               | `libjvm.dylib` |
|  7.7% |       1 | `LinearScan::build_intervals`                 | `libjvm.dylib` |
|  7.7% |       1 | `LinearScan::compute_local_live_sets`         | `libjvm.dylib` |
|  7.7% |       1 | `LinearScan::sort_intervals_after_allocation` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|     % | Samples | Callee                 | Location       |
| ----: | ------: | ---------------------- | -------------- |
| 80.0% |       8 | `Matcher::xform`       | `libjvm.dylib` |
| 20.0% |       2 | `Matcher::find_shared` | `libjvm.dylib` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|     % | Samples | Callee                  | Location                                                                                                      |
| ----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------------- |
| 77.8% |       7 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`                         |
| 44.4% |       4 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`                      |
| 11.1% |       1 | `invokeSuspend(Object)` | `com.intellij.ide.plugins.PluginDescriptorLoader$loadForCoreEnv$1`                                            |
| 11.1% |       1 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirInvokeResolveTowerExtension$enqueueResolverTasksForInvoke$3` |

##### `getValue()` (`kotlin.SafePublicationLazyImpl`)

|     % | Samples | Callee     | Location                                                                             |
| ----: | ------: | ---------- | ------------------------------------------------------------------------------------ |
| 33.3% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass$$Lambda.0x000000050160d220` |

##### `loadClass(String)` (`java.lang.ClassLoader`)

|      % | Samples | Callee                       | Location                |
| -----: | ------: | ---------------------------- | ----------------------- |
| 100.0% |       1 | `loadClass(String, boolean)` | `java.lang.ClassLoader` |

##### `getValue()` (`kotlin.UnsafeLazyImpl`)

|      % | Samples | Callee     | Location                                                                                       |
| -----: | ------: | ---------- | ---------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.java.enhancement.FirSignatureEnhancement$$Lambda.0x000000050160f400` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame. `…` stands for frames the entry filter hides.

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  6.6% |     180 | `CompileQueue::get` (`libjvm.dylib`) ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.4% |      12 | `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.2% |       6 | `ciEnv::register_method` (`libjvm.dylib`) ← `Compilation::compile_method` ← `Compilation::Compilation` ← … ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.2% |       5 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.1% |       4 | `LinearScanWalker::free_collect_inactive_fixed` (`libjvm.dylib`) ← `LinearScanWalker::alloc_free_reg` ← `LinearScanWalker::activate_current` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← … ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.1% |       4 | `Compilation::build_hir` (`libjvm.dylib`) ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← … ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.1% |       3 | `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.1% |       2 | `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.1% |       2 | `Matcher::xform` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.1% |       2 | `Matcher::Label_Root` (`libjvm.dylib`) ← `Matcher::Label_Root` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.1% |       2 | `PhaseIdealLoop::compute_lca_of_uses` (`libjvm.dylib`) ← `PhaseIdealLoop::build_loop_late_post_work` ← `PhaseIdealLoop::build_loop_late` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.1% |       2 | `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.1% |       2 | `DebugInformationRecorder::describe_scope` (`libjvm.dylib`) ← … ← `LIR_Assembler::add_call_info` ← … ← `LIR_Assembler::emit_slow_case_stubs` ← `Compilation::emit_code_epilog` ← `Compilation::emit_code_body` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← … ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.1% |       2 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` (`libjvm.dylib`) ← `PhaseChaitin::build_ifg_physical` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.1% |       2 | `Matcher::match_tree` (`libjvm.dylib`) ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| <0.1% |       1 | `get(Object)` (`java.util.HashMap`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| <0.1% |       1 | `InterpreterRuntime::_new` (`libjvm.dylib`) ← `createLockFreeCopyOnWriteList()` (`com.intellij.util.containers.ContainerUtil`) ← `<clinit>()` (`com.intellij.openapi.application.ApplicationManager`) ← `checkInHeadlessMode()` (`org.jetbrains.kotlin.cli.jvm.compiler.IdeaStandaloneExecutionSetup`) ← `doSetup()` ← `setupIdeaStandaloneExecution()` (`org.jetbrains.kotlin.cli.jvm.compiler.CompatKt`) ← `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← … ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| <0.1% |       1 | `load(String)` (`java.lang.System`) ← `loadNativeLibrary(File)` (`org.fusesource.jansi.internal.JansiLoader`) ← `extractAndLoadLibraryFile(String, String, String)` ← `loadJansiNativeLibrary()` ← `initialize()` ← `<clinit>()` (`org.fusesource.jansi.internal.CLibrary`) ← `<clinit>()` (`org.jetbrains.kotlin.cli.common.messages.PlainTextMessageRenderer`) ← `<clinit>()` (`org.jetbrains.kotlin.cli.common.messages.MessageRenderer`) ← `defaultMessageRenderer()` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← … ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| <0.1% |       1 | `InterpreterRuntime::resolve_from_cache` (`libjvm.dylib`) ← `getArgumentsInfo(Class)` (`org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt`) ← `getArgumentsInfo(Class)` ← `getArgumentsInfo(Class)` ← `parsePreprocessedCommandLineArguments(List, CommonToolArguments, Lazy, boolean)` ← `parseCommandLineArguments(List, CommonToolArguments, boolean)` ← `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` ← `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← … ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                       |
| <0.1% |       1 | `defineClass(String, byte[], int, int)` (`java.lang.ClassLoader`) ← `findClass(String)` (`org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String, boolean)` (`org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`) ← `loadClass(String)` ← … ← `getValue()` (`kotlin.SafePublicationLazyImpl`) ← … ← `getJavaField(KProperty)` (`kotlin.reflect.jvm.ReflectJvmMapping`) ← `getArgumentAnnotation(KProperty1)` (`org.jetbrains.kotlin.cli.common.arguments.ArgumentUtilsKt`) ← `getCliArgument(KProperty1)` ← `<clinit>()` (`org.jetbrains.kotlin.cli.common.ArgumentsKt`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← … ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |

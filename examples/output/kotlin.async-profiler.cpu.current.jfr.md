# Sampling profile

Collected 1,331 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Compiler         | 45.9% |     611 |
| Native           | 37.9% |     504 |
| Ours             | 10.3% |     137 |
| Standard library |  4.8% |      64 |
| JIT              |  1.1% |      15 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                                        | Location                  |
| ---: | ------: | ----------------------------------------------- | ------------------------- |
| 1.5% |      20 | `PhaseChaitin::Split`                           | `libjvm.dylib`            |
| 1.4% |      19 | `PhaseChaitin::build_ifg_physical`              | `libjvm.dylib`            |
| 1.2% |      16 | `IndexSetIterator::advance_and_next`            | `libjvm.dylib`            |
| 1.0% |      13 | `LinearScanWalker::free_collect_inactive_fixed` | `libjvm.dylib`            |
| 0.8% |      11 | `PhaseChaitin::gather_lrg_masks`                | `libjvm.dylib`            |
| 0.8% |      11 | `PhaseLive::add_liveout`                        | `libjvm.dylib`            |
| 0.8% |      11 | `PhaseChaitin::elide_copy`                      | `libjvm.dylib`            |
| 0.7% |       9 | `PhaseIdealLoop::Dominators`                    | `libjvm.dylib`            |
| 0.6% |       8 | `LinearScanWalker::alloc_free_reg`              | `libjvm.dylib`            |
| 0.6% |       8 | `PhaseIdealLoop::build_loop_early`              | `libjvm.dylib`            |
| 0.6% |       8 | `PhaseLive::compute`                            | `libjvm.dylib`            |
| 0.6% |       8 | `Node::dominates`                               | `libjvm.dylib`            |
| 0.6% |       8 | `PhaseAggressiveCoalesce::insert_copies`        | `libjvm.dylib`            |
| 0.5% |       7 | `pthread_jit_write_protect_np`                  | `libsystem_pthread.dylib` |
| 0.5% |       7 | `Matcher::xform`                                | `libjvm.dylib`            |
| 0.5% |       7 | `PhaseIdealLoop::build_loop_late_post_work`     | `libjvm.dylib`            |
| 0.5% |       7 | `PhaseIdealLoop::build_loop_late`               | `libjvm.dylib`            |
| 0.5% |       6 | `I2C/C2I adapters(0xb)`                         | `<unknown>`               |
| 0.5% |       6 | `IntervalWalker::walk_to`                       | `libjvm.dylib`            |
| 0.5% |       6 | `ciObjectFactory::get_metadata`                 | `libjvm.dylib`            |

#### Categories

##### Compiler

|    % | Samples | Function                                        | Location       |
| ---: | ------: | ----------------------------------------------- | -------------- |
| 1.5% |      20 | `PhaseChaitin::Split`                           | `libjvm.dylib` |
| 1.4% |      19 | `PhaseChaitin::build_ifg_physical`              | `libjvm.dylib` |
| 1.2% |      16 | `IndexSetIterator::advance_and_next`            | `libjvm.dylib` |
| 1.0% |      13 | `LinearScanWalker::free_collect_inactive_fixed` | `libjvm.dylib` |
| 0.8% |      11 | `PhaseChaitin::gather_lrg_masks`                | `libjvm.dylib` |
| 0.8% |      11 | `PhaseLive::add_liveout`                        | `libjvm.dylib` |
| 0.8% |      11 | `PhaseChaitin::elide_copy`                      | `libjvm.dylib` |
| 0.7% |       9 | `PhaseIdealLoop::Dominators`                    | `libjvm.dylib` |
| 0.6% |       8 | `LinearScanWalker::alloc_free_reg`              | `libjvm.dylib` |
| 0.6% |       8 | `PhaseIdealLoop::build_loop_early`              | `libjvm.dylib` |
| 0.6% |       8 | `PhaseLive::compute`                            | `libjvm.dylib` |
| 0.6% |       8 | `Node::dominates`                               | `libjvm.dylib` |
| 0.6% |       8 | `PhaseAggressiveCoalesce::insert_copies`        | `libjvm.dylib` |
| 0.5% |       7 | `Matcher::xform`                                | `libjvm.dylib` |
| 0.5% |       7 | `PhaseIdealLoop::build_loop_late_post_work`     | `libjvm.dylib` |
| 0.5% |       7 | `PhaseIdealLoop::build_loop_late`               | `libjvm.dylib` |
| 0.5% |       6 | `IntervalWalker::walk_to`                       | `libjvm.dylib` |
| 0.5% |       6 | `ciObjectFactory::get_metadata`                 | `libjvm.dylib` |
| 0.5% |       6 | `PhaseOutput::BuildOopMaps`                     | `libjvm.dylib` |
| 0.5% |       6 | `Compile::identify_useful_nodes`                | `libjvm.dylib` |

##### Ours

|    % | Samples | Function                                                                           | Location                                                                                                 |
| ---: | ------: | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 0.2% |       2 | `performLexing()`                                                                  | `com.intellij.lang.impl.TokenSequence$Builder`                                                           |
| 0.2% |       2 | `prepareLightTree()`                                                               | `com.intellij.lang.impl.PsiBuilderImpl`                                                                  |
| 0.2% |       2 | `parametersCount(TypeConstructorMarker)`                                           | `org.jetbrains.kotlin.fir.types.ConeTypeContext`                                                         |
| 0.2% |       2 | `check(CheckerContext, DiagnosticReporter, FirDeclaration)`                        | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirExpectConsistencyChecker`                     |
| 0.2% |       2 | `visitProperty(FirProperty, Void)`                                                 | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`                        |
| 0.2% |       2 | `execute(AbstractInsnNode, Interpreter)`                                           | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame`                                                    |
| 0.1% |       1 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                            | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                   |
| 0.1% |       1 | `setResolveState(FirResolveState)`                                                 | `org.jetbrains.kotlin.fir.FirElementWithResolveState`                                                    |
| 0.1% |       1 | `binarySearch(int, int, IntUnaryOperator)`                                         | `com.intellij.util.ObjectUtils`                                                                          |
| 0.1% |       1 | `convertLoopOrIfBody(LighterASTNode)`                                              | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`                          |
| 0.1% |       1 | `advance()`                                                                        | `org.jetbrains.kotlin.lexer._JetLexer`                                                                   |
| 0.1% |       1 | `parsePrefixExpression()`                                                          | `org.jetbrains.kotlin.parsing.KotlinExpressionParsing`                                                   |
| 0.1% |       1 | `hasPackage(FqName)`                                                               | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`                      |
| 0.1% |       1 | `getModuleData(Path)`                                                              | `org.jetbrains.kotlin.fir.deserialization.MultipleModuleDataProvider`                                    |
| 0.1% |       1 | `transformTypeRef(FirTypeRef, ResolutionMode)`                                     | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
| 0.1% |       1 | `extractDeprecationAnnotationInfoPerUseSite(List, boolean, FirSession, List)`      | `org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt`                                               |
| 0.1% |       1 | `measureSideTime$org_jetbrains_kotlin_compiler_common(PhaseSideType, Function0)`   | `org.jetbrains.kotlin.util.PerformanceManager`                                                           |
| 0.1% |       1 | `getTopLevelCallableNamesInPackage(FqName)`                                        | `org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`                                |
| 0.1% |       1 | `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`            |
| 0.1% |       1 | `<init>(CodedInputStream, ExtensionRegistryLite)`                                  | `org.jetbrains.kotlin.metadata.ProtoBuf$Type`                                                            |

##### Standard library

|    % | Samples | Function                                  | Location                                           |
| ---: | ------: | ----------------------------------------- | -------------------------------------------------- |
| 0.3% |       4 | `checkNotNullParameter(Object, String)`   | `kotlin.jvm.internal.Intrinsics`                   |
| 0.1% |       1 | `getNextEntry()`                          | `java.util.zip.ZipInputStream`                     |
| 0.1% |       1 | `addAll(Collection)`                      | `java.util.AbstractCollection`                     |
| 0.1% |       1 | `getValue()`                              | `kotlin.UnsafeLazyImpl`                            |
| 0.1% |       1 | `equals(Object)`                          | `java.lang.String`                                 |
| 0.1% |       1 | `linkToTargetMethod(Object, Object)`      | `java.lang.invoke.Invokers$Holder`                 |
| 0.1% |       1 | `to(Object, Object)`                      | `kotlin.TuplesKt`                                  |
| 0.1% |       1 | `iterator()`                              | `kotlin.collections.builders.ListBuilder`          |
| 0.1% |       1 | `toMap(Iterable)`                         | `kotlin.collections.MapsKt__MapsKt`                |
| 0.1% |       1 | `linkToTargetMethod(int, Object, Object)` | `java.lang.invoke.Invokers$Holder`                 |
| 0.1% |       1 | `firstOrNull(Iterable)`                   | `kotlin.collections.CollectionsKt___CollectionsKt` |
| 0.1% |       1 | `areEqual(Object, Object)`                | `kotlin.jvm.internal.Intrinsics`                   |
| 0.1% |       1 | `<init>()`                                | `java.util.ArrayList`                              |
| 0.1% |       1 | `getName()`                               | `java.io.File`                                     |
| 0.1% |       1 | `isEmpty()`                               | `kotlin.collections.EmptyList`                     |
| 0.1% |       1 | `substring(int, int)`                     | `java.lang.String`                                 |
| 0.1% |       1 | `isDirectory()`                           | `java.io.File`                                     |

##### JIT

|    % | Samples | Function                  | Location    |
| ---: | ------: | ------------------------- | ----------- |
| 0.5% |       6 | `I2C/C2I adapters(0xb)`   | `<unknown>` |
| 0.2% |       3 | `itable stub`             | `<unknown>` |
| 0.2% |       2 | `vtable stub`             | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbba)` | `<unknown>` |
| 0.1% |       1 | `zero_blocks`             | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbb)`  | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbb)` | `<unknown>` |

##### Native

|    % | Samples | Function                                 | Location                  |
| ---: | ------: | ---------------------------------------- | ------------------------- |
| 0.5% |       7 | `pthread_jit_write_protect_np`           | `libsystem_pthread.dylib` |
| 0.1% |       1 | `InterpreterRuntime::resolve_from_cache` | `libjvm.dylib`            |
| 0.1% |       1 | `InterpreterRuntime::resolve_ldc`        | `libjvm.dylib`            |
| 0.1% |       1 | `slow_subtype_check Runtime1 stub`       | `<unknown>`               |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       4 | `kotlin.jvm.internal.Intrinsics:130` |

##### `performLexing()` (`com.intellij.lang.impl.TokenSequence$Builder`)

|     % | Samples | Location                                           |
| ----: | ------: | -------------------------------------------------- |
| 50.0% |       1 | `com.intellij.lang.impl.TokenSequence$Builder:116` |
| 50.0% |       1 | `com.intellij.lang.impl.TokenSequence$Builder:108` |

##### `prepareLightTree()` (`com.intellij.lang.impl.PsiBuilderImpl`)

|     % | Samples | Location                                     |
| ----: | ------: | -------------------------------------------- |
| 50.0% |       1 | `com.intellij.lang.impl.PsiBuilderImpl:1128` |
| 50.0% |       1 | `com.intellij.lang.impl.PsiBuilderImpl:1108` |

##### `parametersCount(TypeConstructorMarker)` (`org.jetbrains.kotlin.fir.types.ConeTypeContext`)

|     % | Samples | Location                                             |
| ----: | ------: | ---------------------------------------------------- |
| 50.0% |       1 | `org.jetbrains.kotlin.fir.types.ConeTypeContext:229` |
| 50.0% |       1 | `org.jetbrains.kotlin.fir.types.ConeTypeContext:220` |

##### `check(CheckerContext, DiagnosticReporter, FirDeclaration)` (`org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirExpectConsistencyChecker`)

|     % | Samples | Location                                                                                |
| ----: | ------: | --------------------------------------------------------------------------------------- |
| 50.0% |       1 | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirExpectConsistencyChecker:32` |
| 50.0% |       1 | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirExpectConsistencyChecker:30` |

##### `visitProperty(FirProperty, Void)` (`org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`)

|     % | Samples | Location                                                                               |
| ----: | ------: | -------------------------------------------------------------------------------------- |
| 50.0% |       1 | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor:1001` |
| 50.0% |       1 | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor:965`  |

##### `execute(AbstractInsnNode, Interpreter)` (`org.jetbrains.org.objectweb.asm.tree.analysis.Frame`)

|      % | Samples | Location                                                  |
| -----: | ------: | --------------------------------------------------------- |
| 100.0% |       2 | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame:298` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|      % | Samples | Location                                                   |
| -----: | ------: | ---------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils:155` |

##### `setResolveState(FirResolveState)` (`org.jetbrains.kotlin.fir.FirElementWithResolveState`)

|      % | Samples | Location                                                 |
| -----: | ------: | -------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.FirElementWithResolveState:24` |

##### `binarySearch(int, int, IntUnaryOperator)` (`com.intellij.util.ObjectUtils`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       1 | `com.intellij.util.ObjectUtils:191` |

##### `convertLoopOrIfBody(LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`)

|      % | Samples | Location                                                                             |
| -----: | ------: | ------------------------------------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder:1401` |

##### `advance()` (`org.jetbrains.kotlin.lexer._JetLexer`)

|      % | Samples | Location                                    |
| -----: | ------: | ------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.lexer._JetLexer:1009` |

##### `parsePrefixExpression()` (`org.jetbrains.kotlin.parsing.KotlinExpressionParsing`)

|      % | Samples | Location                                                   |
| -----: | ------: | ---------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.parsing.KotlinExpressionParsing:266` |

##### `hasPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`)

|      % | Samples | Location                                                                                |
| -----: | ------: | --------------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider:120` |

##### `getModuleData(Path)` (`org.jetbrains.kotlin.fir.deserialization.MultipleModuleDataProvider`)

|      % | Samples | Location                                                                 |
| -----: | ------: | ------------------------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.deserialization.MultipleModuleDataProvider:45` |

##### `transformTypeRef(FirTypeRef, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

|      % | Samples | Location                                                                                                     |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher:834` |

##### `extractDeprecationAnnotationInfoPerUseSite(List, boolean, FirSession, List)` (`org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt:539` |

##### `measureSideTime$org_jetbrains_kotlin_compiler_common(PhaseSideType, Function0)` (`org.jetbrains.kotlin.util.PerformanceManager`)

|      % | Samples | Location                                           |
| -----: | ------: | -------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.util.PerformanceManager:341` |

##### `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`)

|      % | Samples | Location                                                                      |
| -----: | ------: | ----------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider:107` |

##### `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`)

|      % | Samples | Location                                                                                          |
| -----: | ------: | ------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer:104` |

##### `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type`)

|      % | Samples | Location                                           |
| -----: | ------: | -------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.metadata.ProtoBuf$Type:4988` |

##### `getNextEntry()` (`java.util.zip.ZipInputStream`)

|      % | Samples | Location                           |
| -----: | ------: | ---------------------------------- |
| 100.0% |       1 | `java.util.zip.ZipInputStream:147` |

##### `addAll(Collection)` (`java.util.AbstractCollection`)

|      % | Samples | Location                           |
| -----: | ------: | ---------------------------------- |
| 100.0% |       1 | `java.util.AbstractCollection:336` |

##### `getValue()` (`kotlin.UnsafeLazyImpl`)

|      % | Samples | Location                   |
| -----: | ------: | -------------------------- |
| 100.0% |       1 | `kotlin.UnsafeLazyImpl:99` |

##### `equals(Object)` (`java.lang.String`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.lang.String:1847` |

##### `to(Object, Object)` (`kotlin.TuplesKt`)

|      % | Samples | Location             |
| -----: | ------: | -------------------- |
| 100.0% |       1 | `kotlin.TuplesKt:44` |

##### `iterator()` (`kotlin.collections.builders.ListBuilder`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `kotlin.collections.builders.ListBuilder:71` |

##### `toMap(Iterable)` (`kotlin.collections.MapsKt__MapsKt`)

|      % | Samples | Location                                |
| -----: | ------: | --------------------------------------- |
| 100.0% |       1 | `kotlin.collections.MapsKt__MapsKt:724` |

##### `firstOrNull(Iterable)` (`kotlin.collections.CollectionsKt___CollectionsKt`)

|      % | Samples | Location                                               |
| -----: | ------: | ------------------------------------------------------ |
| 100.0% |       1 | `kotlin.collections.CollectionsKt___CollectionsKt:269` |

##### `areEqual(Object, Object)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       1 | `kotlin.jvm.internal.Intrinsics:169` |

##### `<init>()` (`java.util.ArrayList`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |       1 | `java.util.ArrayList:168` |

##### `getName()` (`java.io.File`)

|      % | Samples | Location           |
| -----: | ------: | ------------------ |
| 100.0% |       1 | `java.io.File:456` |

##### `isEmpty()` (`kotlin.collections.EmptyList`)

|      % | Samples | Location                          |
| -----: | ------: | --------------------------------- |
| 100.0% |       1 | `kotlin.collections.EmptyList:33` |

##### `substring(int, int)` (`java.lang.String`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.lang.String:2822` |

##### `isDirectory()` (`java.io.File`)

|      % | Samples | Location           |
| -----: | ------: | ------------------ |
| 100.0% |       1 | `java.io.File:864` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      20 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      19 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|     % | Samples | Caller                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 18.8% |       3 | `PhaseIFG::effective_degree`       | `libjvm.dylib` |
| 18.8% |       3 | `PhaseChaitin::Select`             | `libjvm.dylib` |
| 12.5% |       2 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |
| 12.5% |       2 | `PhaseIFG::re_insert`              | `libjvm.dylib` |
| 12.5% |       2 | `PhaseLive::add_liveout`           | `libjvm.dylib` |

##### `LinearScanWalker::free_collect_inactive_fixed` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      13 | `LinearScanWalker::alloc_free_reg` | `libjvm.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      11 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseLive::add_liveout` (`libjvm.dylib`)

|     % | Samples | Caller                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 90.9% |      10 | `PhaseLive::compute`              | `libjvm.dylib` |
|  9.1% |       1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |      11 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       9 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `LinearScanWalker::alloc_free_reg` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       8 | `LinearScanWalker::activate_current` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       8 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       8 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Node::dominates` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |       8 | `MemNode::all_controls_dominate` | `libjvm.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       8 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                                           | Location                                                                                           |
| ----: | ------: | ------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| 14.3% |       1 | `InterpreterRuntime::resolve_from_cache`         | `libjvm.dylib`                                                                                     |
| 14.3% |       1 | `findPName(int, int[], int, int)`                | `com.fasterxml.aalto.in.StreamScanner`                                                             |
| 14.3% |       1 | `InterpreterRuntime::frequency_counter_overflow` | `libjvm.dylib`                                                                                     |
| 14.3% |       1 | `InterpreterRuntime::resolve_ldc`                | `libjvm.dylib`                                                                                     |
| 14.3% |       1 | `simplifyTrivialInstructions(MethodNode)`        | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |

##### `Matcher::xform` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       7 | `Matcher::match` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       7 | `PhaseIdealLoop::build_loop_late` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       7 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|     % | Samples | Caller                                                           | Location                                                                                        |
| ----: | ------: | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 16.7% |       1 | `reduceCandidates$chooseMostSpecific(FirCallResolver, List)`     | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                                        |
| 16.7% |       1 | `checkFunction(DiagnosticReporter, CheckerContext, FirFunction)` | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirExposedVisibilityDeclarationChecker` |
| 16.7% |       1 | `specialCaseVisibility(IrDeclarationWithVisibility)`             | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`                                     |

##### `IntervalWalker::walk_to` (`libjvm.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |       6 | `IntervalWalker::walk_to` | `libjvm.dylib` |

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 33.3% |       2 | `ciEnv::get_klass_by_name_impl`  | `libjvm.dylib` |
| 16.7% |       1 | `ciMethod::ensure_method_data`   | `libjvm.dylib` |
| 16.7% |       1 | `ciEnv::get_klass_by_index_impl` | `libjvm.dylib` |
| 16.7% |       1 | `ciMethod::method_data`          | `libjvm.dylib` |
| 16.7% |       1 | `ciMethod::get_method_at_bci`    | `libjvm.dylib` |

##### `PhaseOutput::BuildOopMaps` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |       6 | `PhaseOutput::Output` | `libjvm.dylib` |

##### `Compile::identify_useful_nodes` (`libjvm.dylib`)

|     % | Samples | Caller                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 50.0% |       3 | `PhaseRemoveUseless::PhaseRemoveUseless`      | `libjvm.dylib` |
| 50.0% |       3 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|     % | Samples | Caller                                                    | Location                                                                           |
| ----: | ------: | --------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| 25.0% |       1 | `single(Iterable)`                                        | `kotlin.collections.CollectionsKt___CollectionsKt`                                 |
| 25.0% |       1 | `get(FirDeclarationStatusImpl$Modifier)`                  | `org.jetbrains.kotlin.fir.declarations.impl.FirDeclarationStatusImpl`              |
| 25.0% |       1 | `<init>(Map, FirSession)`                                 | `org.jetbrains.kotlin.fir.analysis.checkers.FE10LikeConeSubstitutor`               |
| 25.0% |       1 | `check(CheckerContext, DiagnosticReporter, FirStatement)` | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirOptInUsageAccessChecker` |

##### `itable stub` (`<unknown>`)

|     % | Samples | Caller                                               | Location                                                     |
| ----: | ------: | ---------------------------------------------------- | ------------------------------------------------------------ |
| 33.3% |       1 | `getAnnotationsByClassId(List, ClassId, FirSession)` | `org.jetbrains.kotlin.fir.declarations.FirAnnotationUtilsKt` |
| 33.3% |       1 | `getTypeParameterSymbols()`                          | `org.jetbrains.kotlin.fir.symbols.impl.FirCallableSymbol`    |
| 33.3% |       1 | `hasAnnotation(List, FqName)`                        | `org.jetbrains.kotlin.ir.util.AdditionalIrUtilsKt`           |

##### `performLexing()` (`com.intellij.lang.impl.TokenSequence$Builder`)

|      % | Samples | Caller                               | Location                               |
| -----: | ------: | ------------------------------------ | -------------------------------------- |
| 100.0% |       2 | `performLexing(CharSequence, Lexer)` | `com.intellij.lang.impl.TokenSequence` |

##### `prepareLightTree()` (`com.intellij.lang.impl.PsiBuilderImpl`)

|      % | Samples | Caller           | Location                                |
| -----: | ------: | ---------------- | --------------------------------------- |
| 100.0% |       2 | `getLightTree()` | `com.intellij.lang.impl.PsiBuilderImpl` |

##### `parametersCount(TypeConstructorMarker)` (`org.jetbrains.kotlin.fir.types.ConeTypeContext`)

|     % | Samples | Caller                                                             | Location                                              |
| ----: | ------: | ------------------------------------------------------------------ | ----------------------------------------------------- |
| 50.0% |       1 | `captureArguments(ConeTypeContext, ConeKotlinType, CaptureStatus)` | `org.jetbrains.kotlin.fir.types.TypeUtilsKt`          |
| 50.0% |       1 | `parametersCount(TypeConstructorMarker)`                           | `org.jetbrains.kotlin.types.AbstractTypeApproximator` |

##### `check(CheckerContext, DiagnosticReporter, FirDeclaration)` (`org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirExpectConsistencyChecker`)

|      % | Samples | Caller                                                   | Location                                                                                        |
| -----: | ------: | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 100.0% |       2 | `visitValueParameter(FirValueParameter, CheckerContext)` | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.DeclarationCheckersDiagnosticComponent` |

##### `visitProperty(FirProperty, Void)` (`org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`)

|      % | Samples | Caller                               | Location                                                                          |
| -----: | ------: | ------------------------------------ | --------------------------------------------------------------------------------- |
| 100.0% |       2 | `visitProperty(FirProperty, Object)` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |

##### `execute(AbstractInsnNode, Interpreter)` (`org.jetbrains.org.objectweb.asm.tree.analysis.Frame`)

|     % | Samples | Caller                                                           | Location                                                                            |
| ----: | ------: | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| 50.0% |       1 | `analyzeInstruction(AbstractInsnNode, int, Frame, Frame, Frame)` | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`                     |
| 50.0% |       1 | `execute(AbstractInsnNode, Interpreter)`                         | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackAnalyzer$FixStackFrame` |

##### `vtable stub` (`<unknown>`)

|     % | Samples | Caller                                          | Location                                   |
| ----: | ------: | ----------------------------------------------- | ------------------------------------------ |
| 50.0% |       1 | `next()`                                        | `java.util.AbstractList$Itr`               |
| 50.0% |       1 | `transformInPlace(List, IrTransformer, Object)` | `org.jetbrains.kotlin.ir.util.TransformKt` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|      % | Samples | Caller                                                                       | Location                                               |
| -----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |       1 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `setResolveState(FirResolveState)` (`org.jetbrains.kotlin.fir.FirElementWithResolveState`)

|      % | Samples | Caller                                                                                                                                                                                 | Location                                                          |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 100.0% |       1 | `<init>(KtSourceElement, FirResolvePhase, FirModuleData, FirDeclarationOrigin, FirDeclarationAttributes, Name, FirTypeParameterSymbol, FirBasedSymbol, Variance, boolean, List, List)` | `org.jetbrains.kotlin.fir.declarations.impl.FirTypeParameterImpl` |

##### `binarySearch(int, int, IntUnaryOperator)` (`com.intellij.util.ObjectUtils`)

|      % | Samples | Caller                    | Location                                  |
| -----: | ------: | ------------------------- | ----------------------------------------- |
| 100.0% |       1 | `findMarkerAtLexeme(int)` | `com.intellij.lang.impl.MarkerProduction` |

##### `convertLoopOrIfBody(LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`)

|      % | Samples | Caller                            | Location                                                                        |
| -----: | ------: | --------------------------------- | ------------------------------------------------------------------------------- |
| 100.0% |       1 | `convertLoopBody(LighterASTNode)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder` |

##### `advance()` (`org.jetbrains.kotlin.lexer._JetLexer`)

|      % | Samples | Caller          | Location                         |
| -----: | ------: | --------------- | -------------------------------- |
| 100.0% |       1 | `locateToken()` | `com.intellij.lexer.FlexAdapter` |

##### `parsePrefixExpression()` (`org.jetbrains.kotlin.parsing.KotlinExpressionParsing`)

|      % | Samples | Caller                                             | Location                                               |
| -----: | ------: | -------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |       1 | `parseBinaryExpression(BinaryOperationPrecedence)` | `org.jetbrains.kotlin.parsing.KotlinExpressionParsing` |

##### `hasPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`)

|      % | Samples | Caller                                                  | Location                                                      |
| -----: | ------: | ------------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% |       1 | `findLongestExistingPackage(FirSymbolProvider, FqName)` | `org.jetbrains.kotlin.fir.resolve.transformers.ImportUtilsKt` |

##### `getModuleData(Path)` (`org.jetbrains.kotlin.fir.deserialization.MultipleModuleDataProvider`)

|      % | Samples | Caller                                                     | Location                                                                        |
| -----: | ------: | ---------------------------------------------------------- | ------------------------------------------------------------------------------- |
| 100.0% |       1 | `extractClassMetadata(ClassId, FirDeserializationContext)` | `org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider` |

##### `transformTypeRef(FirTypeRef, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

|      % | Samples | Caller                                 | Location                                                                                                 |
| -----: | ------: | -------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `transformTypeRef(FirTypeRef, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### `extractDeprecationAnnotationInfoPerUseSite(List, boolean, FirSession, List)` (`org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt`)

|      % | Samples | Caller                                                                                | Location                                                   |
| -----: | ------: | ------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `extractDeprecationInfoPerUseSite(FirAnnotationContainer, FirSession, List, boolean)` | `org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt` |

##### `measureSideTime$org_jetbrains_kotlin_compiler_common(PhaseSideType, Function0)` (`org.jetbrains.kotlin.util.PerformanceManager`)

|      % | Samples | Caller                                                             | Location                                         |
| -----: | ------: | ------------------------------------------------------------------ | ------------------------------------------------ |
| 100.0% |       1 | `tryMeasureSideTime(PerformanceManager, PhaseSideType, Function0)` | `org.jetbrains.kotlin.util.PerformanceManagerKt` |

##### `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`)

|      % | Samples | Caller                                  | Location                                                            |
| -----: | ------: | --------------------------------------- | ------------------------------------------------------------------- |
| 100.0% |       1 | `mayHaveTopLevelCallable(FqName, Name)` | `org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider` |

##### `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`)

|      % | Samples | Caller                                                                           | Location                                                                                                 |
| -----: | ------: | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type`)

|      % | Samples | Caller                                                        | Location                                      |
| -----: | ------: | ------------------------------------------------------------- | --------------------------------------------- |
| 100.0% |       1 | `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type` |

##### `getNextEntry()` (`java.util.zip.ZipInputStream`)

|      % | Samples | Caller                                                  | Location                                               |
| -----: | ------: | ------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |       1 | `loadAllClassesFromJars(Collection, int, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `addAll(Collection)` (`java.util.AbstractCollection`)

|      % | Samples | Caller                                         | Location                                              |
| -----: | ------: | ---------------------------------------------- | ----------------------------------------------------- |
| 100.0% |       1 | `IrVarargImpl(int, int, IrType, IrType, List)` | `org.jetbrains.kotlin.ir.expressions.impl.BuildersKt` |

##### `getValue()` (`kotlin.UnsafeLazyImpl`)

|      % | Samples | Caller                  | Location                                                                                                                        |
| -----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `getDataFlowAnalyzer()` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformer$BodyResolveTransformerComponents` |

##### `equals(Object)` (`java.lang.String`)

|      % | Samples | Caller                                   | Location                                      |
| -----: | ------: | ---------------------------------------- | --------------------------------------------- |
| 100.0% |       1 | `readMethod(ClassVisitor, Context, int)` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `linkToTargetMethod(Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                                                                                             | Location                                                              |
| -----: | ------: | -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| 100.0% |       1 | `resolveUserTypeToSymbol(FirUserTypeRef, TypeResolutionConfiguration, SupertypeSupplier, boolean)` | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl` |

##### `to(Object, Object)` (`kotlin.TuplesKt`)

|      % | Samples | Caller                                                                       | Location                                                 |
| -----: | ------: | ---------------------------------------------------------------------------- | -------------------------------------------------------- |
| 100.0% |       1 | `getUseSiteMemberScope(FirClass, FirSession, ScopeSession, FirResolvePhase)` | `org.jetbrains.kotlin.fir.scopes.FirKotlinScopeProvider` |

##### `iterator()` (`kotlin.collections.builders.ListBuilder`)

|      % | Samples | Caller                                                                                                                                 | Location                                                           |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| 100.0% |       1 | `processCandidatesWithGivenImplicitReceiverAsValue(ImplicitReceiverValue, CallInfo, TowerGroup, Set, Set, Set, boolean, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask` |

##### `toMap(Iterable)` (`kotlin.collections.MapsKt__MapsKt`)

|      % | Samples | Caller                                                            | Location                                            |
| -----: | ------: | ----------------------------------------------------------------- | --------------------------------------------------- |
| 100.0% |       1 | `createSubstitutionForScope(List, ConeClassLikeType, FirSession)` | `org.jetbrains.kotlin.fir.resolve.SupertypeUtilsKt` |

##### `linkToTargetMethod(int, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                                                                                | Location                                                                                      |
| -----: | ------: | ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `transformBlockInCurrentScope$org_jetbrains_kotlin_resolve(FirBlock, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |

##### `firstOrNull(Iterable)` (`kotlin.collections.CollectionsKt___CollectionsKt`)

|      % | Samples | Caller                                                                  | Location                                                                 |
| -----: | ------: | ----------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 100.0% |       1 | `findClasses$lambda$0$0(ClassId, Set, Function2, JvmDependenciesIndex)` | `org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesDynamicCompoundIndex` |

##### `areEqual(Object, Object)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Caller           | Location                                 |
| -----: | ------: | ---------------- | ---------------------------------------- |
| 100.0% |       1 | `equals(Object)` | `org.jetbrains.kotlin.name.FqNameUnsafe` |

##### `<init>()` (`java.util.ArrayList`)

|      % | Samples | Caller                                     | Location                                                   |
| -----: | ------: | ------------------------------------------ | ---------------------------------------------------------- |
| 100.0% |       1 | `constructors(FirClassSymbol, FirSession)` | `org.jetbrains.kotlin.fir.declarations.DeclarationUtilsKt` |

##### `getName()` (`java.io.File`)

|      % | Samples | Caller            | Location                                                |
| -----: | ------: | ----------------- | ------------------------------------------------------- |
| 100.0% |       1 | `getName(IrFile)` | `org.jetbrains.kotlin.ir.declarations.IrDeclarationsKt` |

##### `isEmpty()` (`kotlin.collections.EmptyList`)

|      % | Samples | Caller                                                                                | Location                                                |
| -----: | ------: | ------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |       1 | `IrSimpleTypeImpl(IrClassifierSymbol, SimpleTypeNullability, List, List, KotlinType)` | `org.jetbrains.kotlin.ir.types.impl.IrSimpleTypeImplKt` |

##### `substring(int, int)` (`java.lang.String`)

|      % | Samples | Caller             | Location                                                 |
| -----: | ------: | ------------------ | -------------------------------------------------------- |
| 100.0% |       1 | `getClassId(Type)` | `org.jetbrains.kotlin.codegen.JvmBackendClassResolverKt` |

##### `isDirectory()` (`java.io.File`)

|      % | Samples | Caller                  | Location                                  |
| -----: | ------: | ----------------------- | ----------------------------------------- |
| 100.0% |       1 | `createDirectory(File)` | `com.intellij.openapi.util.io.FileUtilRt` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|      % | Samples | Caller           | Location                                                                                                                 |
| -----: | ------: | ---------------- | ------------------------------------------------------------------------------------------------------------------------ |
| 100.0% |       1 | `invoke(Object)` | `org.jetbrains.kotlin.resolve.calls.inference.components.AbstractVariableReadinessCalculator$$Lambda.0x000000a801691468` |

##### `I2C/C2I adapters(0xbbb)` (`<unknown>`)

|      % | Samples | Caller                                     | Location                                                  |
| -----: | ------: | ------------------------------------------ | --------------------------------------------------------- |
| 100.0% |       1 | `getExtensionFunctionType(ConeAttributes)` | `org.jetbrains.kotlin.fir.types.CompilerConeAttributesKt` |

##### `InterpreterRuntime::resolve_ldc` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location                                                                               |
| -----: | ------: | ---------------------------------- | -------------------------------------------------------------------------------------- |
| 100.0% |       1 | `isUnitInstance(AbstractInsnNode)` | `org.jetbrains.kotlin.codegen.optimization.boxing.PopBackwardPropagationTransformerKt` |

##### `slow_subtype_check Runtime1 stub` (`<unknown>`)

|      % | Samples | Caller                                                                               | Location                                                                                      |
| -----: | ------: | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `internalAddSubtypeConstraint(KotlinTypeMarker, KotlinTypeMarker, boolean, boolean)` | `org.jetbrains.kotlin.resolve.calls.inference.components.TypeCheckerStateForConstraintSystem` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                                                                                                      | Location                                                |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 62.1% |     826 | `CompileBroker::compiler_thread_loop`                                                                                                         | `libjvm.dylib`                                          |
| 61.1% |     813 | `CompileBroker::invoke_compiler_on_method`                                                                                                    | `libjvm.dylib`                                          |
| 42.5% |     566 | `Compile::Compile`                                                                                                                            | `libjvm.dylib`                                          |
| 42.5% |     566 | `C2Compiler::compile_method`                                                                                                                  | `libjvm.dylib`                                          |
| 32.5% |     433 | `run(String[])`                                                                                                                               | `org.jetbrains.kotlin.preloading.Preloader`             |
| 32.5% |     433 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`             |
| 27.0% |     360 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 27.0% |     360 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 27.0% |     360 | `invoke(Object, Object[])`                                                                                                                    | `java.lang.reflect.Method`                              |
| 27.0% |     359 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 27.0% |     359 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 26.8% |     357 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 26.8% |     357 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 26.8% |     357 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 26.4% |     352 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 25.7% |     342 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 25.7% |     342 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 25.7% |     342 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 25.6% |     341 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 25.6% |     341 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

#### Categories

##### Compiler

|     % | Samples | Function                                   | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 62.1% |     826 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
| 61.1% |     813 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
| 42.5% |     566 | `Compile::Compile`                         | `libjvm.dylib` |
| 42.5% |     566 | `C2Compiler::compile_method`               | `libjvm.dylib` |
| 22.5% |     300 | `Compile::Code_Gen`                        | `libjvm.dylib` |
| 17.7% |     235 | `Compilation::compile_method`              | `libjvm.dylib` |
| 17.7% |     235 | `Compilation::Compilation`                 | `libjvm.dylib` |
| 16.2% |     215 | `Compilation::compile_java_method`         | `libjvm.dylib` |
| 15.5% |     206 | `Compile::Optimize`                        | `libjvm.dylib` |
| 13.7% |     183 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
|  8.1% |     108 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
|  6.9% |      92 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
|  6.9% |      92 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
|  6.5% |      86 | `Compilation::emit_lir`                    | `libjvm.dylib` |
|  5.8% |      77 | `Compilation::build_hir`                   | `libjvm.dylib` |
|  5.4% |      72 | `LinearScan::do_linear_scan`               | `libjvm.dylib` |
|  5.3% |      70 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |
|  4.8% |      64 | `PhaseIterGVN::transform_old`              | `libjvm.dylib` |
|  4.4% |      58 | `GraphBuilder::GraphBuilder`               | `libjvm.dylib` |
|  3.8% |      51 | `Compilation::emit_code_body`              | `libjvm.dylib` |

##### Ours

|     % | Samples | Function                                                                                                                                      | Location                                                |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 32.5% |     433 | `run(String[])`                                                                                                                               | `org.jetbrains.kotlin.preloading.Preloader`             |
| 32.5% |     433 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`             |
| 27.0% |     360 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 27.0% |     360 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 27.0% |     359 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 27.0% |     359 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 26.8% |     357 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 26.8% |     357 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 26.8% |     357 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 26.4% |     352 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 25.7% |     342 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 25.7% |     342 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 25.7% |     342 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 25.6% |     341 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 25.6% |     341 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 25.6% |     341 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 25.5% |     339 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 25.4% |     338 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
| 25.4% |     338 | `phaseBody(LoggingContext, Object)`                                                                                                           | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
| 25.4% |     338 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### Standard library

|     % | Samples | Function                                                         | Location                                              |
| ----: | ------: | ---------------------------------------------------------------- | ----------------------------------------------------- |
| 27.0% |     360 | `invoke(Object, Object[])`                                       | `java.lang.reflect.Method`                            |
|  5.1% |      68 | `loadClass(String, boolean)`                                     | `java.lang.ClassLoader`                               |
|  5.0% |      67 | `read(byte[])`                                                   | `java.io.FilterInputStream`                           |
|  4.7% |      62 | `defineClass(String, byte[], int, int)`                          | `java.lang.ClassLoader`                               |
|  3.8% |      51 | `resumeWith(Object)`                                             | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |
|  1.3% |      17 | `getValue()`                                                     | `kotlin.SafePublicationLazyImpl`                      |
|  1.2% |      16 | `getValue()`                                                     | `kotlin.SynchronizedLazyImpl`                         |
|  1.1% |      15 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives`                |
|  0.9% |      12 | `getValue()`                                                     | `kotlin.UnsafeLazyImpl`                               |
|  0.8% |      10 | `getJavaField(KProperty)`                                        | `kotlin.reflect.jvm.ReflectJvmMapping`                |
|  0.6% |       8 | `checkNotNullParameter(Object, String)`                          | `kotlin.jvm.internal.Intrinsics`                      |
|  0.3% |       4 | `hasNext()`                                                      | `kotlin.sequences.FilteringSequence$iterator$1`       |
|  0.3% |       4 | `areEqual(Object, Object)`                                       | `kotlin.jvm.internal.Intrinsics`                      |
|  0.2% |       3 | `loadClass(String)`                                              | `java.lang.ClassLoader`                               |
|  0.2% |       3 | `toList(Iterable)`                                               | `kotlin.collections.CollectionsKt___CollectionsKt`    |
|  0.2% |       3 | `linkToTargetMethod(Object, Object)`                             | `java.lang.invoke.Invokers$Holder`                    |
|  0.2% |       2 | `toByteArray()`                                                  | `java.io.ByteArrayOutputStream`                       |
|  0.2% |       2 | `linkMethodHandleConstant(Class, int, Class, String, Object)`    | `java.lang.invoke.MethodHandleNatives`                |
|  0.2% |       2 | `addAll(Collection)`                                             | `java.util.AbstractCollection`                        |
|  0.2% |       2 | `charAt(int)`                                                    | `java.lang.String`                                    |

##### JIT

|    % | Samples | Function                  | Location    |
| ---: | ------: | ------------------------- | ----------- |
| 0.5% |       6 | `I2C/C2I adapters(0xb)`   | `<unknown>` |
| 0.2% |       3 | `itable stub`             | `<unknown>` |
| 0.2% |       2 | `vtable stub`             | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbba)` | `<unknown>` |
| 0.1% |       1 | `zero_blocks`             | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbb)`  | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbb)` | `<unknown>` |

##### Native

|    % | Samples | Function                                         | Location                  |
| ---: | ------: | ------------------------------------------------ | ------------------------- |
| 1.6% |      21 | `InterpreterRuntime::_new`                       | `libjvm.dylib`            |
| 1.5% |      20 | `InterpreterRuntime::resolve_from_cache`         | `libjvm.dylib`            |
| 0.5% |       7 | `pthread_jit_write_protect_np`                   | `libsystem_pthread.dylib` |
| 0.5% |       6 | `resolve_opt_virtual_call`                       | `<unknown>`               |
| 0.5% |       6 | `resolve_virtual_call`                           | `<unknown>`               |
| 0.4% |       5 | `InterpreterRuntime::frequency_counter_overflow` | `libjvm.dylib`            |
| 0.2% |       3 | `counter_overflow Runtime1 stub`                 | `<unknown>`               |
| 0.2% |       3 | `ic_miss_stub`                                   | `<unknown>`               |
| 0.2% |       3 | `InterpreterRuntime::resolve_ldc`                | `libjvm.dylib`            |
| 0.2% |       2 | `UncommonTrapBlob`                               | `<unknown>`               |
| 0.2% |       2 | `InterpreterRuntime::quicken_io_cc`              | `libjvm.dylib`            |
| 0.2% |       2 | `resolve_static_call`                            | `<unknown>`               |
| 0.2% |       2 | `wrong_method_stub`                              | `<unknown>`               |
| 0.1% |       1 | `slow_subtype_check Runtime1 stub`               | `<unknown>`               |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 98.4% |     813 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  1.5% |      12 | `CompileQueue::get`                        | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 69.6% |     566 | `C2Compiler::compile_method`    | `libjvm.dylib` |
|  0.7% |       6 | `ciEnv::get_method_from_handle` | `libjvm.dylib` |
|  0.2% |       2 | `ciEnv::~ciEnv`                 | `libjvm.dylib` |
|  0.1% |       1 | `CompilationLog::log_compile`   | `libjvm.dylib` |
|  0.1% |       1 | `ciEnv::ciEnv`                  | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 53.0% |     300 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 36.4% |     206 | `Compile::Optimize`                      | `libjvm.dylib` |
|  1.1% |       6 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.4% |       2 | `TypeFunc::make`                         | `libjvm.dylib` |
|  0.2% |       1 | `Compile::remove_root_to_sfpts_edges`    | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     566 | `Compile::Compile` | `libjvm.dylib` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|     % | Samples | Callee                                                                       | Location                                               |
| ----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 83.1% |     360 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                             |
| 16.9% |      73 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % | Samples | Callee          | Location                                    |
| -----: | ------: | --------------- | ------------------------------------------- |
| 100.0% |     433 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|     % | Samples | Callee                          | Location                                                |
| ----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 99.7% |     359 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.3% |       1 | `<init>()`                      | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee           | Location                                               |
| -----: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% |     360 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|     % | Samples | Callee                                                 | Location                                                |
| ----: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 99.4% |     357 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.6% |       2 | `defaultMessageRenderer()`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                                                                                             | Location                                                |
| -----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     359 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                                               | Location                                                                |
| ----: | ------: | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| 98.6% |     352 | `exec(MessageCollector, Services, CommonCompilerArguments)`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|  1.4% |       5 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                                                   | Location                                      |
| -----: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 100.0% |     357 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                                         | Location                                      |
| -----: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% |     357 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                          | Location                                      |
| ----: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| 97.2% |     342 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |
|  2.8% |      10 | `<clinit>()`                                                    | `org.jetbrains.kotlin.cli.common.ArgumentsKt` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|     % | Samples | Callee                                                         | Location                                                |
| ----: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 99.7% |     341 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|  0.3% |       1 | `getDefaultPerformanceManager()`                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee                                                                | Location                                     |
| -----: | ------: | --------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     342 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                                                                 | Location                                     |
| -----: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     342 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                                                                                                | Location                                                      |
| ----: | ------: | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 99.4% |     339 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                        | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`       |
|  0.3% |       1 | `<init>(CommonCompilerArguments, Services, Disposable, GroupingMessageCollector, PerformanceManager)` | `org.jetbrains.kotlin.cli.pipeline.ArgumentsPipelineArtifact` |
|  0.3% |       1 | `disposeRootInWriteAction(Disposable)`                                                                | `org.jetbrains.kotlin.cli.common.UtilsKt`                     |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                                                                              | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     341 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                                                                                                                        | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     341 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                                                                          | Location                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| 99.7% |     338 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`            | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                        |
|  0.3% |       1 | `reportToMessageCollector(BaseDiagnosticsCollector, MessageCollector, boolean)` | `org.jetbrains.kotlin.cli.common.fir.FirDiagnosticsCompilerResultsReporter` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|     % | Samples | Callee                           | Location                                                              |
| ----: | ------: | -------------------------------- | --------------------------------------------------------------------- |
| 67.8% |     229 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`      |
| 22.5% |      76 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`       |
|  8.3% |      28 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`        |
|  1.2% |       4 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmConfigurationPipelinePhase` |
|  0.3% |       1 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmWriteOutputsPhase`          |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Callee                                         | Location                                          |
| -----: | ------: | ---------------------------------------------- | ------------------------------------------------- |
| 100.0% |     338 | `phaseBody(PipelineContext, PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % | Samples | Callee                                                        | Location                                                         |
| -----: | ------: | ------------------------------------------------------------- | ---------------------------------------------------------------- |
| 100.0% |     338 | `phaseBody(LoggingContext, Object)`                           | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
|   4.7% |      16 | `phaseBody(LoggingContext, Object)`                           | `org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase`   |
|   1.2% |       4 | `phaseBody(LoggingContext, Object)`                           | `org.jetbrains.kotlin.backend.common.phaser.ModuleLoweringPhase` |
|   0.3% |       1 | `isEnabled(NamedCompilerPhase)`                               | `org.jetbrains.kotlin.config.phaser.PhaseConfig`                 |
|   0.3% |       1 | `runBefore(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`          |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 61.0% |     183 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 15.7% |      47 | `Matcher::match`                  | `libjvm.dylib` |
| 10.3% |      31 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  9.3% |      28 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  1.7% |       5 | `PhaseOutput::install_code`       | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                                               | Location       |
| ----: | ------: | ---------------------------------------------------- | -------------- |
| 91.5% |     215 | `Compilation::compile_java_method`                   | `libjvm.dylib` |
|  8.1% |      19 | `ciEnv::register_method`                             | `libjvm.dylib` |
|  0.4% |       1 | `DebugInformationRecorder::DebugInformationRecorder` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |     235 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 40.0% |      86 | `Compilation::emit_lir`       | `libjvm.dylib` |
| 35.8% |      77 | `Compilation::build_hir`      | `libjvm.dylib` |
| 23.7% |      51 | `Compilation::emit_code_body` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 32.5% |      67 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
| 21.4% |      44 | `PhaseIterGVN::optimize`               | `libjvm.dylib` |
| 19.9% |      41 | `Compile::optimize_loops`              | `libjvm.dylib` |
|  6.3% |      13 | `PhaseCCP::PhaseCCP`                   | `libjvm.dylib` |
|  5.3% |      11 | `PhaseMacroExpand::expand_macro_nodes` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 16.4% |      30 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
| 13.1% |      24 | `PhaseLive::compute`                       | `libjvm.dylib` |
| 13.1% |      24 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| 10.9% |      20 | `PhaseChaitin::gather_lrg_masks`           | `libjvm.dylib` |
|  8.2% |      15 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 85.2% |      92 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| 13.0% |      14 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 28.3% |      26 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| 19.6% |      18 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| 13.0% |      12 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
| 12.0% |      11 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |
|  6.5% |       6 | `PhaseIdealLoop::build_loop_tree`      | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Callee                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      92 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 83.7% |      72 | `LinearScan::do_linear_scan` | `libjvm.dylib` |
| 16.3% |      14 | `BlockList::iterate_forward` | `libjvm.dylib` |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 47.2% |      34 | `LinearScan::allocate_registers`              | `libjvm.dylib` |
| 19.4% |      14 | `LinearScan::assign_reg_num`                  | `libjvm.dylib` |
|  6.9% |       5 | `LinearScan::build_intervals`                 | `libjvm.dylib` |
|  4.2% |       3 | `LinearScan::sort_intervals_after_allocation` | `libjvm.dylib` |
|  4.2% |       3 | `LinearScan::init_compute_oop_maps`           | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 90.0% |      63 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |
|  1.4% |       1 | `BoolNode::hash`              | `libjvm.dylib` |
|  1.4% |       1 | `RegionNode::hash`            | `libjvm.dylib` |
|  1.4% |       1 | `TypePtr::singleton`          | `libjvm.dylib` |
|  1.4% |       1 | `PhiNode::Ideal`              | `libjvm.dylib` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|     % | Samples | Callee              | Location                                                 |
| ----: | ------: | ------------------- | -------------------------------------------------------- |
| 91.2% |      62 | `findClass(String)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 14.1% |       9 | `RegionNode::Ideal`          | `libjvm.dylib` |
| 10.9% |       7 | `StoreNode::Ideal`           | `libjvm.dylib` |
| 10.9% |       7 | `NodeHash::hash_find_insert` | `libjvm.dylib` |
|  9.4% |       6 | `PhiNode::Ideal`             | `libjvm.dylib` |
|  6.3% |       4 | `PhaseIterGVN::subsume_node` | `libjvm.dylib` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

|     % | Samples | Callee                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 86.2% |      50 | `GraphBuilder::iterate_all_blocks`   | `libjvm.dylib` |
|  6.9% |       4 | `BlockBegin::iterate_preorder`       | `libjvm.dylib` |
|  5.2% |       3 | `BlockListBuilder::BlockListBuilder` | `libjvm.dylib` |

##### `Compilation::emit_code_body` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 66.7% |      34 | `LIR_Assembler::emit_code`      | `libjvm.dylib` |
| 33.3% |      17 | `Compilation::emit_code_epilog` | `libjvm.dylib` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|     % | Samples | Callee                  | Location                                                                                                      |
| ----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------------- |
| 64.7% |      33 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`                         |
| 39.2% |      20 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`                      |
|  7.8% |       4 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$2`                      |
|  7.8% |       4 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirInvokeResolveTowerExtension$enqueueResolverTasksForInvoke$3` |
|  3.9% |       2 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$4`                      |

##### `InterpreterRuntime::resolve_from_cache` (`libjvm.dylib`)

|    % | Samples | Callee                         | Location                  |
| ---: | ------: | ------------------------------ | ------------------------- |
| 5.0% |       1 | `pthread_jit_write_protect_np` | `libsystem_pthread.dylib` |

##### `getValue()` (`kotlin.SafePublicationLazyImpl`)

|     % | Samples | Callee     | Location                                                                                                   |
| ----: | ------: | ---------- | ---------------------------------------------------------------------------------------------------------- |
| 17.6% |       3 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.impl.FirClassDeclaredMemberScopeImpl$$Lambda.0x000000a801629a10`          |
| 11.8% |       2 | `invoke()` | `org.jetbrains.kotlin.fir.java.FirLazyJavaDeclarationList$$Lambda.0x000000a80160ccf0`                      |
| 11.8% |       2 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.ImplicitReceiverValue$$Lambda.0x000000a8016583e8`                  |
|  5.9% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.impl.AbstractFirUseSiteMemberScope$$Lambda.0x000000a801631990`            |
|  5.9% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer$$Lambda.0x000000a8015d53b8` |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

|     % | Samples | Callee     | Location                                                                                |
| ----: | ------: | ---------- | --------------------------------------------------------------------------------------- |
| 12.5% |       2 | `invoke()` | `org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile$$Lambda.0x000000a80138c000`    |
| 12.5% |       2 | `invoke()` | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass$$Lambda.0x000000a80160d598`    |
| 12.5% |       2 | `invoke()` | `org.jetbrains.kotlin.builtins.DefaultBuiltIns$$Lambda.0x000000a801754c00`              |
| 12.5% |       2 | `invoke()` | `org.jetbrains.kotlin.ir.descriptors.IrBasedClassDescriptor$$Lambda.0x000000a8018169c8` |
|  6.3% |       1 | `invoke()` | `org.jetbrains.kotlin.cli.common.CLICompiler$$Lambda.0x000000a80100a000`                |

##### `getValue()` (`kotlin.UnsafeLazyImpl`)

|     % | Samples | Callee     | Location                                                                                                                                                   |
| ----: | ------: | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 58.3% |       7 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver$$Lambda.0x000000a801684c00`                                                                        |
|  8.3% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformer$BodyResolveTransformerComponents$$Lambda.0x000000a801593238` |
|  8.3% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformer$BodyResolveTransformerComponents$$Lambda.0x000000a801594cb8` |
|  8.3% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.transformers.FirWhenExhaustivenessComputer$$Lambda.0x000000a8016d0af8`                                                   |
|  8.3% |       1 | `invoke()` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser$$Lambda.0x000000a801638000`                                           |

##### `InterpreterRuntime::frequency_counter_overflow` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location                  |
| ----: | ------: | ------------------------------ | ------------------------- |
| 20.0% |       1 | `pthread_jit_write_protect_np` | `libsystem_pthread.dylib` |

##### `areEqual(Object, Object)` (`kotlin.jvm.internal.Intrinsics`)

|     % | Samples | Callee                 | Location                                                    |
| ----: | ------: | ---------------------- | ----------------------------------------------------------- |
| 25.0% |       1 | `equals(Object)`       | `org.jetbrains.kotlin.name.FqNameUnsafe`                    |
| 25.0% |       1 | `equals(Object)`       | `org.jetbrains.kotlin.name.FqName`                          |
| 25.0% |       1 | `equals(Object)`       | `org.jetbrains.kotlin.name.CallableId`                      |
| 25.0% |       1 | `resolve_virtual_call` | `<unknown>`                                                 |
| 25.0% |       1 | `equals(Object)`       | `org.jetbrains.kotlin.ir.expressions.IrStatementOriginImpl` |

##### `loadClass(String)` (`java.lang.ClassLoader`)

|      % | Samples | Callee                       | Location                |
| -----: | ------: | ---------------------------- | ----------------------- |
| 100.0% |       3 | `loadClass(String, boolean)` | `java.lang.ClassLoader` |

##### `InterpreterRuntime::resolve_ldc` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location                  |
| ----: | ------: | ------------------------------ | ------------------------- |
| 33.3% |       1 | `pthread_jit_write_protect_np` | `libsystem_pthread.dylib` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame. `…` stands for frames the entry filter hides.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4.4% |      59 | `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                   |
| 1.5% |      20 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                           |
| 1.4% |      19 | `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                              |
| 1.0% |      13 | `ciEnv::register_method` (`libjvm.dylib`) ← `Compilation::compile_method` ← `Compilation::Compilation` ← … ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                     |
| 1.0% |      13 | `LinearScanWalker::free_collect_inactive_fixed` (`libjvm.dylib`) ← `LinearScanWalker::alloc_free_reg` ← `LinearScanWalker::activate_current` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← … ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`     |
| 1.0% |      13 | `Matcher::xform` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                 |
| 0.9% |      12 | `CompileQueue::get` (`libjvm.dylib`) ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.8% |      11 | `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                |
| 0.8% |      11 | `PhaseChaitin::elide_copy` (`libjvm.dylib`) ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                         |
| 0.8% |      10 | `PhaseLive::add_liveout` (`libjvm.dylib`) ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                 |
| 0.7% |       9 | `PhaseLive::compute` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                            |
| 0.6% |       8 | `LinearScanWalker::alloc_free_reg` (`libjvm.dylib`) ← `LinearScanWalker::activate_current` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← … ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                       |
| 0.6% |       8 | `Compilation::build_hir` (`libjvm.dylib`) ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← … ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                |
| 0.6% |       8 | `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                        |
| 0.5% |       7 | `DebugInformationRecorder::describe_scope` (`libjvm.dylib`) ← … ← `LIR_Assembler::add_call_info` ← … ← `LIR_Assembler::emit_slow_case_stubs` ← `Compilation::emit_code_epilog` ← `Compilation::emit_code_body` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← … ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                           |
| 0.5% |       7 | `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`) ← `PhaseIdealLoop::build_loop_late` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                              |
| 0.5% |       7 | `PhaseIdealLoop::Dominators` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                 |
| 0.5% |       6 | `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                    |
| 0.5% |       6 | `DebugInformationRecorder::serialize_scope_values` (`libjvm.dylib`) ← `DebugInformationRecorder::create_scope_values` ← … ← `LIR_Assembler::add_call_info` ← … ← `LIR_Assembler::emit_slow_case_stubs` ← `Compilation::emit_code_epilog` ← `Compilation::emit_code_body` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← … ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` |
| 0.5% |       6 | `PhaseOutput::BuildOopMaps` (`libjvm.dylib`) ← `PhaseOutput::Output` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                 |

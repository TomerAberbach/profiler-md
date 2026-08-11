# Sampling profile

Collected 1,307 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Compiler          | 46.1% |     602 |
| Native            | 38.7% |     506 |
| Ours              | 10.4% |     136 |
| Standard library  |  3.9% |      51 |
| JIT               |  0.8% |      11 |
| Garbage collector |  0.1% |       1 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

#### Categories

##### Compiler

|    % | Samples | Function                                        | Location       |
| ---: | ------: | ----------------------------------------------- | -------------- |
| 1.7% |      22 | `IndexSetIterator::advance_and_next`            | `libjvm.dylib` |
| 1.2% |      16 | `PhaseChaitin::Split`                           | `libjvm.dylib` |
| 0.9% |      12 | `PhaseChaitin::build_ifg_physical`              | `libjvm.dylib` |
| 0.8% |      11 | `PhaseChaitin::gather_lrg_masks`                | `libjvm.dylib` |
| 0.8% |      10 | `PhaseAggressiveCoalesce::insert_copies`        | `libjvm.dylib` |
| 0.7% |       9 | `PhaseLive::compute`                            | `libjvm.dylib` |
| 0.7% |       9 | `MultiNode::is_CFG`                             | `libjvm.dylib` |
| 0.7% |       9 | `PhaseIdealLoop::build_loop_early`              | `libjvm.dylib` |
| 0.7% |       9 | `PhaseIdealLoop::build_loop_late`               | `libjvm.dylib` |
| 0.7% |       9 | `PhaseIdealLoop::build_loop_late_post_work`     | `libjvm.dylib` |
| 0.7% |       9 | `Node::dominates`                               | `libjvm.dylib` |
| 0.6% |       8 | `LinearScanWalker::alloc_free_reg`              | `libjvm.dylib` |
| 0.6% |       8 | `PhaseLive::add_liveout`                        | `libjvm.dylib` |
| 0.5% |       7 | `IntervalWalker::walk_to`                       | `libjvm.dylib` |
| 0.5% |       6 | `LinearScanWalker::free_collect_inactive_fixed` | `libjvm.dylib` |
| 0.5% |       6 | `Compile::identify_useful_nodes`                | `libjvm.dylib` |
| 0.5% |       6 | `PhaseChaitin::elide_copy`                      | `libjvm.dylib` |
| 0.5% |       6 | `ciObjectFactory::get_metadata`                 | `libjvm.dylib` |
| 0.5% |       6 | `LinearScan::build_intervals`                   | `libjvm.dylib` |
| 0.5% |       6 | `Unique_Node_List::remove`                      | `libjvm.dylib` |

##### Ours

|    % | Samples | Function                                                                                                                                                                                                                                                                                                                                                     | Location                                                                           |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| 0.2% |       2 | `toArgumentToParameterMapping()`                                                                                                                                                                                                                                                                                                                             | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentMapping`                    |
| 0.2% |       2 | `prepareType(KotlinTypeMarker)`                                                                                                                                                                                                                                                                                                                              | `org.jetbrains.kotlin.fir.types.ConeTypePreparator`                                |
| 0.2% |       2 | `isDataClassCopy(FirCallableSymbol, FirClassSymbol, FirSession)`                                                                                                                                                                                                                                                                                             | `org.jetbrains.kotlin.fir.PrivateToThisUtilsKt`                                    |
| 0.1% |       1 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                                                                                                                                                                                                                                                                      | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                             |
| 0.1% |       1 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                                                                                                                                                                                                                                                                                  | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`                                    |
| 0.1% |       1 | `balanceWhiteSpaces()`                                                                                                                                                                                                                                                                                                                                       | `com.intellij.lang.impl.PsiBuilderImpl`                                            |
| 0.1% |       1 | `mark()`                                                                                                                                                                                                                                                                                                                                                     | `com.intellij.lang.impl.PsiBuilderAdapter`                                         |
| 0.1% |       1 | `advance()`                                                                                                                                                                                                                                                                                                                                                  | `org.jetbrains.kotlin.lexer._JetLexer`                                             |
| 0.1% |       1 | `<init>(Project, PsiFile, ParserDefinition, Lexer, CharTable, CharSequence, ASTNode, CharSequence, PsiBuilderImpl$MyTreeStructure, Object)`                                                                                                                                                                                                                  | `com.intellij.lang.impl.PsiBuilderImpl`                                            |
| 0.1% |       1 | `collectSegments(List, LighterASTNode)`                                                                                                                                                                                                                                                                                                                      | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder`   |
| 0.1% |       1 | `convertCallExpression(LighterASTNode)`                                                                                                                                                                                                                                                                                                                      | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`    |
| 0.1% |       1 | `convertPropertyDeclaration$lambda$1(LightTreeRawFirDeclarationBuilder, LighterASTNode)`                                                                                                                                                                                                                                                                     | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder`   |
| 0.1% |       1 | `get(int)`                                                                                                                                                                                                                                                                                                                                                   | `com.intellij.util.containers.IntArrayList`                                        |
| 0.1% |       1 | `transformTypeRef(FirTypeRef, TypeResolutionConfiguration)`                                                                                                                                                                                                                                                                                                  | `org.jetbrains.kotlin.fir.resolve.transformers.FirSpecificTypeResolverTransformer` |
| 0.1% |       1 | `toByteString()`                                                                                                                                                                                                                                                                                                                                             | `org.jetbrains.kotlin.protobuf.ByteString$Output`                                  |
| 0.1% |       1 | `<init>(CodedInputStream, ExtensionRegistryLite)`                                                                                                                                                                                                                                                                                                            | `org.jetbrains.kotlin.metadata.ProtoBuf$TypeAlias`                                 |
| 0.1% |       1 | `readMethod(ClassVisitor, Context, int)`                                                                                                                                                                                                                                                                                                                     | `org.jetbrains.org.objectweb.asm.ClassReader`                                      |
| 0.1% |       1 | `deserializeClassToSymbol(ClassId, ProtoBuf$Class, FirRegularClassSymbol, NameResolver, FirSession, FirModuleData, AnnotationDeserializer, FirKDocDeserializer, FirTypeDeserializer$FlexibleTypeFactory, FirScopeProvider, SerializerExtensionProtocol, FirDeserializationContext, DeserializedContainerSource, FirDeclarationOrigin, Function2, Function2)` | `org.jetbrains.kotlin.fir.deserialization.ClassDeserializationKt`                  |
| 0.1% |       1 | `findAndDeserializeClass(ClassId, FirDeserializationContext)`                                                                                                                                                                                                                                                                                                | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`   |
| 0.1% |       1 | `getValue(Object, Object)`                                                                                                                                                                                                                                                                                                                                   | `org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCacheWithPostCompute`              |

##### Standard library

|    % | Samples | Function                                      | Location                                                                              |
| ---: | ------: | --------------------------------------------- | ------------------------------------------------------------------------------------- |
| 0.5% |       6 | `checkNotNullParameter(Object, String)`       | `kotlin.jvm.internal.Intrinsics`                                                      |
| 0.1% |       1 | `toSet(Iterable)`                             | `kotlin.collections.CollectionsKt___CollectionsKt`                                    |
| 0.1% |       1 | `max(int, int)`                               | `java.lang.Math`                                                                      |
| 0.1% |       1 | `isEmpty()`                                   | `java.util.AbstractCollection`                                                        |
| 0.1% |       1 | `linkToTargetMethod(Object, Object, Object)`  | `java.lang.invoke.Invokers$Holder`                                                    |
| 0.1% |       1 | `get(Object)`                                 | `java.util.HashMap`                                                                   |
| 0.1% |       1 | `build()`                                     | `kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBuilder` |
| 0.1% |       1 | `<init>()`                                    | `java.lang.Object`                                                                    |
| 0.1% |       1 | `checkNotNullExpressionValue(Object, String)` | `kotlin.jvm.internal.Intrinsics`                                                      |
| 0.1% |       1 | `reverse(Object[])`                           | `kotlin.collections.ArraysKt___ArraysKt`                                              |
| 0.1% |       1 | `checkNotNull(Object)`                        | `kotlin.jvm.internal.Intrinsics`                                                      |
| 0.1% |       1 | `hasNext()`                                   | `kotlin.jvm.internal.ArrayIterator`                                                   |

##### JIT

|    % | Samples | Function                   | Location    |
| ---: | ------: | -------------------------- | ----------- |
| 0.3% |       4 | `I2C/C2I adapters(0xbb)`   | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xb)`    | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0x)`     | `<unknown>` |
| 0.1% |       1 | `itable stub`              | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbb)`  | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xa)`    | `<unknown>` |
| 0.1% |       1 | `vtable stub`              | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbbb)` | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       6 | `kotlin.jvm.internal.Intrinsics:130` |

##### `toArgumentToParameterMapping()` (`org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentMapping`)

|     % | Samples | Location                                                            |
| ----: | ------: | ------------------------------------------------------------------- |
| 50.0% |       1 | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentMapping:51`  |
| 50.0% |       1 | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentMapping:473` |

##### `prepareType(KotlinTypeMarker)` (`org.jetbrains.kotlin.fir.types.ConeTypePreparator`)

|     % | Samples | Location                                               |
| ----: | ------: | ------------------------------------------------------ |
| 50.0% |       1 | `org.jetbrains.kotlin.fir.types.ConeTypePreparator:28` |
| 50.0% |       1 | `org.jetbrains.kotlin.fir.types.ConeTypePreparator:14` |

##### `isDataClassCopy(FirCallableSymbol, FirClassSymbol, FirSession)` (`org.jetbrains.kotlin.fir.PrivateToThisUtilsKt`)

|      % | Samples | Location                                            |
| -----: | ------: | --------------------------------------------------- |
| 100.0% |       2 | `org.jetbrains.kotlin.fir.PrivateToThisUtilsKt:202` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|      % | Samples | Location                                                   |
| -----: | ------: | ---------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils:143` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`)

|      % | Samples | Location                                             |
| -----: | ------: | ---------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1:5074` |

##### `balanceWhiteSpaces()` (`com.intellij.lang.impl.PsiBuilderImpl`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `com.intellij.lang.impl.PsiBuilderImpl:1219` |

##### `mark()` (`com.intellij.lang.impl.PsiBuilderAdapter`)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       1 | `com.intellij.lang.impl.PsiBuilderAdapter:94` |

##### `advance()` (`org.jetbrains.kotlin.lexer._JetLexer`)

|      % | Samples | Location                                    |
| -----: | ------: | ------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.lexer._JetLexer:1001` |

##### `<init>(Project, PsiFile, ParserDefinition, Lexer, CharTable, CharSequence, ASTNode, CharSequence, PsiBuilderImpl$MyTreeStructure, Object)` (`com.intellij.lang.impl.PsiBuilderImpl`)

|      % | Samples | Location                                   |
| -----: | ------: | ------------------------------------------ |
| 100.0% |       1 | `com.intellij.lang.impl.PsiBuilderImpl:93` |

##### `collectSegments(List, LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder`)

|      % | Samples | Location                                                                             |
| -----: | ------: | ------------------------------------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder:277` |

##### `convertCallExpression(LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`)

|      % | Samples | Location                                                                            |
| -----: | ------: | ----------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder:852` |

##### `convertPropertyDeclaration$lambda$1(LightTreeRawFirDeclarationBuilder, LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder`)

|      % | Samples | Location                                                                              |
| -----: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder:1435` |

##### `get(int)` (`com.intellij.util.containers.IntArrayList`)

|      % | Samples | Location                                        |
| -----: | ------: | ----------------------------------------------- |
| 100.0% |       1 | `com.intellij.util.containers.IntArrayList:121` |

##### `transformTypeRef(FirTypeRef, TypeResolutionConfiguration)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirSpecificTypeResolverTransformer`)

|      % | Samples | Location                                                                              |
| -----: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.resolve.transformers.FirSpecificTypeResolverTransformer:77` |

##### `toByteString()` (`org.jetbrains.kotlin.protobuf.ByteString$Output`)

|      % | Samples | Location                                              |
| -----: | ------: | ----------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.protobuf.ByteString$Output:827` |

##### `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$TypeAlias`)

|      % | Samples | Location                                                 |
| -----: | ------: | -------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.metadata.ProtoBuf$TypeAlias:25252` |

##### `readMethod(ClassVisitor, Context, int)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % | Samples | Location                                           |
| -----: | ------: | -------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.org.objectweb.asm.ClassReader:1364` |

##### `deserializeClassToSymbol(ClassId, ProtoBuf$Class, FirRegularClassSymbol, NameResolver, FirSession, FirModuleData, AnnotationDeserializer, FirKDocDeserializer, FirTypeDeserializer$FlexibleTypeFactory, FirScopeProvider, SerializerExtensionProtocol, FirDeserializationContext, DeserializedContainerSource, FirDeclarationOrigin, Function2, Function2)` (`org.jetbrains.kotlin.fir.deserialization.ClassDeserializationKt`)

|      % | Samples | Location                                                             |
| -----: | ------: | -------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.deserialization.ClassDeserializationKt:75` |

##### `findAndDeserializeClass(ClassId, FirDeserializationContext)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`)

|      % | Samples | Location                                                                             |
| -----: | ------: | ------------------------------------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider:263` |

##### `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCacheWithPostCompute`)

|      % | Samples | Location                                                                 |
| -----: | ------: | ------------------------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCacheWithPostCompute:74` |

##### `toSet(Iterable)` (`kotlin.collections.CollectionsKt___CollectionsKt`)

|      % | Samples | Location                                                |
| -----: | ------: | ------------------------------------------------------- |
| 100.0% |       1 | `kotlin.collections.CollectionsKt___CollectionsKt:1532` |

##### `max(int, int)` (`java.lang.Math`)

|      % | Samples | Location              |
| -----: | ------: | --------------------- |
| 100.0% |       1 | `java.lang.Math:2020` |

##### `isEmpty()` (`java.util.AbstractCollection`)

|      % | Samples | Location                          |
| -----: | ------: | --------------------------------- |
| 100.0% |       1 | `java.util.AbstractCollection:91` |

##### `get(Object)` (`java.util.HashMap`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.util.HashMap:564` |

##### `build()` (`kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBuilder`)

|      % | Samples | Location                                                                                 |
| -----: | ------: | ---------------------------------------------------------------------------------------- |
| 100.0% |       1 | `kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBuilder:33` |

##### `<init>()` (`java.lang.Object`)

|      % | Samples | Location              |
| -----: | ------: | --------------------- |
| 100.0% |       1 | `java.lang.Object:45` |

##### `checkNotNullExpressionValue(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       1 | `kotlin.jvm.internal.Intrinsics:92` |

##### `reverse(Object[])` (`kotlin.collections.ArraysKt___ArraysKt`)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       1 | `kotlin.collections.ArraysKt___ArraysKt:6612` |

##### `checkNotNull(Object)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       1 | `kotlin.jvm.internal.Intrinsics:24` |

##### `hasNext()` (`kotlin.jvm.internal.ArrayIterator`)

|      % | Samples | Location                               |
| -----: | ------: | -------------------------------------- |
| 100.0% |       1 | `kotlin.jvm.internal.ArrayIterator:10` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|     % | Samples | Caller                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 27.3% |       6 | `PhaseChaitin::Select`             | `libjvm.dylib` |
| 18.2% |       4 | `PhaseIFG::re_insert`              | `libjvm.dylib` |
| 13.6% |       3 | `PhaseIFG::remove_node`            | `libjvm.dylib` |
|  9.1% |       2 | `PhaseIFG::SquareUp`               | `libjvm.dylib` |
|  9.1% |       2 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      16 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      12 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      11 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      10 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       9 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `MultiNode::is_CFG` (`libjvm.dylib`)

|     % | Samples | Caller                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 33.3% |       3 | `PhaseIdealLoop::build_and_optimize`   | `libjvm.dylib` |
| 22.2% |       2 | `RegionNode::is_unreachable_region`    | `libjvm.dylib` |
| 11.1% |       1 | `PhaseIdealLoop::build_loop_tree`      | `libjvm.dylib` |
| 11.1% |       1 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
| 11.1% |       1 | `RegionNode::is_unreachable_from_root` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       9 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       9 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       9 | `PhaseIdealLoop::build_loop_late` | `libjvm.dylib` |

##### `Node::dominates` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |       9 | `MemNode::all_controls_dominate` | `libjvm.dylib` |

##### `LinearScanWalker::alloc_free_reg` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       8 | `LinearScanWalker::activate_current` | `libjvm.dylib` |

##### `PhaseLive::add_liveout` (`libjvm.dylib`)

|     % | Samples | Caller                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 87.5% |       7 | `PhaseLive::compute`              | `libjvm.dylib` |
| 12.5% |       1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `IntervalWalker::walk_to` (`libjvm.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 71.4% |       5 | `IntervalWalker::walk_to`        | `libjvm.dylib` |
| 28.6% |       2 | `LinearScan::allocate_registers` | `libjvm.dylib` |

##### `LinearScanWalker::free_collect_inactive_fixed` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |       6 | `LinearScanWalker::alloc_free_reg` | `libjvm.dylib` |

##### `Compile::identify_useful_nodes` (`libjvm.dylib`)

|     % | Samples | Caller                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 66.7% |       4 | `PhaseRemoveUseless::PhaseRemoveUseless`      | `libjvm.dylib` |
| 33.3% |       2 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       6 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

|     % | Samples | Caller                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 50.0% |       3 | `ciBytecodeStream::get_method`         | `libjvm.dylib` |
| 16.7% |       1 | `ciObjectFactory::create_new_metadata` | `libjvm.dylib` |
| 16.7% |       1 | `ciMethod::method_data`                | `libjvm.dylib` |
| 16.7% |       1 | `ciEnv::get_klass_by_name_impl`        | `libjvm.dylib` |

##### `LinearScan::build_intervals` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |       6 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `Unique_Node_List::remove` (`libjvm.dylib`)

|      % | Samples | Caller                                    | Location       |
| -----: | ------: | ----------------------------------------- | -------------- |
| 100.0% |       6 | `PhaseIterGVN::remove_globally_dead_node` | `libjvm.dylib` |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|     % | Samples | Caller                                                           | Location                                                     |
| ----: | ------: | ---------------------------------------------------------------- | ------------------------------------------------------------ |
| 16.7% |       1 | `contains(ConeAttribute)`                                        | `org.jetbrains.kotlin.fir.types.ConeAttributes`              |
| 16.7% |       1 | `unwrapSmartcastExpression(FirExpression)`                       | `org.jetbrains.kotlin.fir.expressions.FirExpressionUtilKt`   |
| 16.7% |       1 | `delegatedPropertySourceOrThis(CheckerContext, KtSourceElement)` | `org.jetbrains.kotlin.fir.analysis.checkers.SourceHelpersKt` |
| 16.7% |       1 | `fullyExpandedType(SessionHolder, ConeKotlinType)`               | `org.jetbrains.kotlin.fir.resolve.TypeExpansionUtilsKt`      |
| 16.7% |       1 | `isCapturedTypeConstructor(TypeConstructorMarker)`               | `org.jetbrains.kotlin.types.AbstractTypeApproximator`        |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|     % | Samples | Caller                                                           | Location                                                      |
| ----: | ------: | ---------------------------------------------------------------- | ------------------------------------------------------------- |
| 25.0% |       1 | `buildSmartCastStatement(Flow, DataFlowVariable, TypeStatement)` | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer`    |
| 25.0% |       1 | `findArgumentByName(FirAnnotation, Name, boolean)`               | `org.jetbrains.kotlin.fir.declarations.FirAnnotationUtilsKt`  |
| 25.0% |       1 | `toDeprecationWarningMessage(String, LanguageFeature)`           | `org.jetbrains.kotlin.diagnostics.rendering.RenderingUtilsKt` |

##### `toArgumentToParameterMapping()` (`org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentMapping`)

|      % | Samples | Caller                                                           | Location                                                     |
| -----: | ------: | ---------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% |       2 | `check(CheckerSink, ResolutionContext, Candidate, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.MapArguments` |

##### `prepareType(KotlinTypeMarker)` (`org.jetbrains.kotlin.fir.types.ConeTypePreparator`)

|     % | Samples | Caller                          | Location                                            |
| ----: | ------: | ------------------------------- | --------------------------------------------------- |
| 50.0% |       1 | `prepareType(KotlinTypeMarker)` | `org.jetbrains.kotlin.fir.types.ConeTypePreparator` |
| 50.0% |       1 | `prepareType(KotlinTypeMarker)` | `org.jetbrains.kotlin.types.TypeCheckerState`       |

##### `isDataClassCopy(FirCallableSymbol, FirClassSymbol, FirSession)` (`org.jetbrains.kotlin.fir.PrivateToThisUtilsKt`)

|     % | Samples | Caller                                                                        | Location                                                                                                   |
| ----: | ------: | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 50.0% |       1 | `unwrapDataClassCopyWithPrimaryConstructorOrNull(FirBasedSymbol, FirSession)` | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirInlineDeclarationCheckerKt`                     |
| 50.0% |       1 | `check(CheckerContext, DiagnosticReporter, FirQualifiedAccessExpression)`     | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirDataClassCopyUsageWillBecomeInaccessibleChecker` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|      % | Samples | Caller                                                                       | Location                                               |
| -----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |       1 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`)

|      % | Samples | Caller                                       | Location                                         |
| -----: | ------: | -------------------------------------------- | ------------------------------------------------ |
| 100.0% |       1 | `readMessage(Parser, ExtensionRegistryLite)` | `org.jetbrains.kotlin.protobuf.CodedInputStream` |

##### `balanceWhiteSpaces()` (`com.intellij.lang.impl.PsiBuilderImpl`)

|      % | Samples | Caller               | Location                                |
| -----: | ------: | -------------------- | --------------------------------------- |
| 100.0% |       1 | `prepareLightTree()` | `com.intellij.lang.impl.PsiBuilderImpl` |

##### `mark()` (`com.intellij.lang.impl.PsiBuilderAdapter`)

|      % | Samples | Caller   | Location                                             |
| -----: | ------: | -------- | ---------------------------------------------------- |
| 100.0% |       1 | `mark()` | `org.jetbrains.kotlin.parsing.AbstractKotlinParsing` |

##### `advance()` (`org.jetbrains.kotlin.lexer._JetLexer`)

|      % | Samples | Caller          | Location                         |
| -----: | ------: | --------------- | -------------------------------- |
| 100.0% |       1 | `locateToken()` | `com.intellij.lexer.FlexAdapter` |

##### `<init>(Project, PsiFile, ParserDefinition, Lexer, CharTable, CharSequence, ASTNode, CharSequence, PsiBuilderImpl$MyTreeStructure, Object)` (`com.intellij.lang.impl.PsiBuilderImpl`)

|      % | Samples | Caller                                                                                                                | Location                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| 100.0% |       1 | `<init>(Project, PsiFile, ParserDefinition, Lexer, CharTable, CharSequence, ASTNode, PsiBuilderImpl$MyTreeStructure)` | `com.intellij.lang.impl.PsiBuilderImpl` |

##### `collectSegments(List, LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder`)

|      % | Samples | Caller                                  | Location                                                                         |
| -----: | ------: | --------------------------------------- | -------------------------------------------------------------------------------- |
| 100.0% |       1 | `collectSegments(List, LighterASTNode)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder` |

##### `convertCallExpression(LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`)

|      % | Samples | Caller                                      | Location                                                                        |
| -----: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------- |
| 100.0% |       1 | `getAsFirStatement(LighterASTNode, String)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder` |

##### `convertPropertyDeclaration$lambda$1(LightTreeRawFirDeclarationBuilder, LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder`)

|      % | Samples | Caller           | Location                                                                                                    |
| -----: | ------: | ---------------- | ----------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `invoke(Object)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder$$Lambda.0x000000e801553d20` |

##### `get(int)` (`com.intellij.util.containers.IntArrayList`)

|      % | Samples | Caller                                                 | Location                                                      |
| -----: | ------: | ------------------------------------------------------ | ------------------------------------------------------------- |
| 100.0% |       1 | `traverseDirectoriesInPackage(FqName, Set, Function2)` | `org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesIndexImpl` |

##### `transformTypeRef(FirTypeRef, TypeResolutionConfiguration)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirSpecificTypeResolverTransformer`)

|      % | Samples | Caller                                 | Location                                                                           |
| -----: | ------: | -------------------------------------- | ---------------------------------------------------------------------------------- |
| 100.0% |       1 | `transformTypeRef(FirTypeRef, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.FirSpecificTypeResolverTransformer` |

##### `toByteString()` (`org.jetbrains.kotlin.protobuf.ByteString$Output`)

|      % | Samples | Caller                                            | Location                                                           |
| -----: | ------: | ------------------------------------------------- | ------------------------------------------------------------------ |
| 100.0% |       1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument$Value` |

##### `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$TypeAlias`)

|      % | Samples | Caller                                                        | Location                                           |
| -----: | ------: | ------------------------------------------------------------- | -------------------------------------------------- |
| 100.0% |       1 | `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` | `org.jetbrains.kotlin.metadata.ProtoBuf$TypeAlias` |

##### `readMethod(ClassVisitor, Context, int)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % | Samples | Caller                                   | Location                                      |
| -----: | ------: | ---------------------------------------- | --------------------------------------------- |
| 100.0% |       1 | `accept(ClassVisitor, Attribute[], int)` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `deserializeClassToSymbol(ClassId, ProtoBuf$Class, FirRegularClassSymbol, NameResolver, FirSession, FirModuleData, AnnotationDeserializer, FirKDocDeserializer, FirTypeDeserializer$FlexibleTypeFactory, FirScopeProvider, SerializerExtensionProtocol, FirDeserializationContext, DeserializedContainerSource, FirDeclarationOrigin, Function2, Function2)` (`org.jetbrains.kotlin.fir.deserialization.ClassDeserializationKt`)

|      % | Samples | Caller                                                        | Location                                                                         |
| -----: | ------: | ------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| 100.0% |       1 | `findAndDeserializeClass(ClassId, FirDeserializationContext)` | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider` |

##### `findAndDeserializeClass(ClassId, FirDeserializationContext)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`)

|      % | Samples | Caller                                                                                           | Location                                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| 100.0% |       1 | `classCache$lambda$0(AbstractFirDeserializedSymbolProvider, ClassId, FirDeserializationContext)` | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider` |

##### `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCacheWithPostCompute`)

|      % | Samples | Caller                                                        | Location                                                                                                          |
| -----: | ------: | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `findAndDeserializeClass(ClassId, FirDeserializationContext)` | `org.jetbrains.kotlin.fir.resolve.providers.impl.AbstractFirBuiltinSymbolProvider$BuiltInsPackageFragmentWrapper` |

##### `toSet(Iterable)` (`kotlin.collections.CollectionsKt___CollectionsKt`)

|      % | Samples | Caller                     | Location                                                   |
| -----: | ------: | -------------------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `<init>(Class, Function1)` | `org.jetbrains.kotlin.backend.common.phaser.LoweringPhase` |

##### `max(int, int)` (`java.lang.Math`)

|      % | Samples | Caller                 | Location                                |
| -----: | ------: | ---------------------- | --------------------------------------- |
| 100.0% |       1 | `balanceWhiteSpaces()` | `com.intellij.lang.impl.PsiBuilderImpl` |

##### `isEmpty()` (`java.util.AbstractCollection`)

|      % | Samples | Caller       | Location                                                           |
| -----: | ------: | ------------ | ------------------------------------------------------------------ |
| 100.0% |       1 | `runTasks()` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager` |

##### `linkToTargetMethod(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                                                                                         | Location                                                                         |
| -----: | ------: | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| 100.0% |       1 | `areThereRecursiveConstraints(ConstraintIncorporator$Context, Constraint, TypeVariableMarker)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintIncorporator` |

##### `get(Object)` (`java.util.HashMap`)

|      % | Samples | Caller                    | Location                                                 |
| -----: | ------: | ------------------------- | -------------------------------------------------------- |
| 100.0% |       1 | `mapJavaToKotlin(FqName)` | `org.jetbrains.kotlin.builtins.jvm.JavaToKotlinClassMap` |

##### `build()` (`kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBuilder`)

|      % | Samples | Caller    | Location                                                                              |
| -----: | ------: | --------- | ------------------------------------------------------------------------------------- |
| 100.0% |       1 | `build()` | `kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBuilder` |

##### `<init>()` (`java.lang.Object`)

|      % | Samples | Caller     | Location                                            |
| -----: | ------: | ---------- | --------------------------------------------------- |
| 100.0% |       1 | `<init>()` | `org.jetbrains.kotlin.ir.util.SymbolRemapper$Empty` |

##### `checkNotNullExpressionValue(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Caller                      | Location                                                             |
| -----: | ------: | --------------------------- | -------------------------------------------------------------------- |
| 100.0% |       1 | `updateFrom(IrDeclaration)` | `org.jetbrains.kotlin.ir.builders.declarations.IrDeclarationBuilder` |

##### `reverse(Object[])` (`kotlin.collections.ArraysKt___ArraysKt`)

|      % | Samples | Caller                          | Location                                                                   |
| -----: | ------: | ------------------------------- | -------------------------------------------------------------------------- |
| 100.0% |       1 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.RedundantGotoMethodTransformer` |

##### `checkNotNull(Object)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Caller              | Location                                                        |
| -----: | ------: | ------------------- | --------------------------------------------------------------- |
| 100.0% |       1 | `analyzeMainLoop()` | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer` |

##### `hasNext()` (`kotlin.jvm.internal.ArrayIterator`)

|      % | Samples | Caller      | Location                                            |
| -----: | ------: | ----------- | --------------------------------------------------- |
| 100.0% |       1 | `hasNext()` | `org.jetbrains.kotlin.utils.SmartSet$ArrayIterator` |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|      % | Samples | Caller            | Location                                       |
| -----: | ------: | ----------------- | ---------------------------------------------- |
| 100.0% |       1 | `isInitialized()` | `org.jetbrains.kotlin.metadata.ProtoBuf$Class` |

##### `I2C/C2I adapters(0x)` (`<unknown>`)

|      % | Samples | Caller                                                           | Location                                     |
| -----: | ------: | ---------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |       1 | `captureFromExpressionInternal(ConeTypeContext, ConeKotlinType)` | `org.jetbrains.kotlin.fir.types.TypeUtilsKt` |

##### `itable stub` (`<unknown>`)

|      % | Samples | Caller                                              | Location                                                                       |
| -----: | ------: | --------------------------------------------------- | ------------------------------------------------------------------------------ |
| 100.0% |       1 | `transformType(TypeCheckerState, KotlinTypeMarker)` | `org.jetbrains.kotlin.types.TypeCheckerState$SupertypesPolicy$LowerIfFlexible` |

##### `I2C/C2I adapters(0xbbb)` (`<unknown>`)

|      % | Samples | Caller                                               | Location                                                                                       |
| -----: | ------: | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `transformValueParameter(FirValueParameter, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |

##### `I2C/C2I adapters(0xa)` (`<unknown>`)

|      % | Samples | Caller                                                                                | Location                                                     |
| -----: | ------: | ------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% |       1 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `vtable stub` (`<unknown>`)

|      % | Samples | Caller                                       | Location                                                   |
| -----: | ------: | -------------------------------------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `materializeAt(PromisedValue, Type, IrType)` | `org.jetbrains.kotlin.backend.jvm.codegen.PromisedValueKt` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                                                                                                      | Location                                                |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 62.0% |     810 | `CompileBroker::compiler_thread_loop`                                                                                                         | `libjvm.dylib`                                          |
| 60.6% |     792 | `CompileBroker::invoke_compiler_on_method`                                                                                                    | `libjvm.dylib`                                          |
| 42.2% |     552 | `C2Compiler::compile_method`                                                                                                                  | `libjvm.dylib`                                          |
| 42.0% |     549 | `Compile::Compile`                                                                                                                            | `libjvm.dylib`                                          |
| 31.9% |     417 | `run(String[])`                                                                                                                               | `org.jetbrains.kotlin.preloading.Preloader`             |
| 31.9% |     417 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`             |
| 26.1% |     341 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 26.1% |     341 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 26.1% |     341 | `invoke(Object, Object[])`                                                                                                                    | `java.lang.reflect.Method`                              |
| 25.9% |     339 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 25.9% |     339 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 25.9% |     339 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 25.9% |     339 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 25.9% |     339 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 25.5% |     333 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 24.8% |     324 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 24.8% |     324 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 24.8% |     324 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 24.8% |     324 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 24.8% |     324 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |

#### Categories

##### Compiler

|     % | Samples | Function                                    | Location       |
| ----: | ------: | ------------------------------------------- | -------------- |
| 62.0% |     810 | `CompileBroker::compiler_thread_loop`       | `libjvm.dylib` |
| 60.6% |     792 | `CompileBroker::invoke_compiler_on_method`  | `libjvm.dylib` |
| 42.2% |     552 | `C2Compiler::compile_method`                | `libjvm.dylib` |
| 42.0% |     549 | `Compile::Compile`                          | `libjvm.dylib` |
| 21.0% |     275 | `Compile::Code_Gen`                         | `libjvm.dylib` |
| 17.8% |     233 | `Compilation::compile_method`               | `libjvm.dylib` |
| 17.8% |     233 | `Compilation::Compilation`                  | `libjvm.dylib` |
| 16.0% |     209 | `Compilation::compile_java_method`          | `libjvm.dylib` |
| 15.4% |     201 | `Compile::Optimize`                         | `libjvm.dylib` |
| 12.7% |     166 | `PhaseChaitin::Register_Allocate`           | `libjvm.dylib` |
|  8.1% |     106 | `PhaseIdealLoop::optimize`                  | `libjvm.dylib` |
|  6.9% |      90 | `PhaseIdealLoop::build_and_optimize`        | `libjvm.dylib` |
|  6.9% |      90 | `PhaseIdealLoop::PhaseIdealLoop`            | `libjvm.dylib` |
|  6.6% |      86 | `Compilation::emit_lir`                     | `libjvm.dylib` |
|  6.0% |      78 | `Compilation::build_hir`                    | `libjvm.dylib` |
|  5.0% |      66 | `LinearScan::do_linear_scan`                | `libjvm.dylib` |
|  4.9% |      64 | `PhaseIterGVN::optimize`                    | `libjvm.dylib` |
|  4.4% |      58 | `GraphBuilder::GraphBuilder`                | `libjvm.dylib` |
|  4.4% |      58 | `PhaseIterGVN::transform_old`               | `libjvm.dylib` |
|  3.8% |      50 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |

##### Ours

|     % | Samples | Function                                                                                                                                      | Location                                                |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 31.9% |     417 | `run(String[])`                                                                                                                               | `org.jetbrains.kotlin.preloading.Preloader`             |
| 31.9% |     417 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`             |
| 26.1% |     341 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 26.1% |     341 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 25.9% |     339 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 25.9% |     339 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 25.9% |     339 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 25.9% |     339 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 25.9% |     339 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 25.5% |     333 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 24.8% |     324 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 24.8% |     324 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 24.8% |     324 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 24.8% |     324 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 24.8% |     324 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 24.8% |     324 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 24.7% |     323 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 24.6% |     321 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
| 24.6% |     321 | `phaseBody(LoggingContext, Object)`                                                                                                           | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
| 24.6% |     321 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### Standard library

|     % | Samples | Function                                                         | Location                                              |
| ----: | ------: | ---------------------------------------------------------------- | ----------------------------------------------------- |
| 26.1% |     341 | `invoke(Object, Object[])`                                       | `java.lang.reflect.Method`                            |
|  5.4% |      70 | `read(byte[])`                                                   | `java.io.FilterInputStream`                           |
|  5.0% |      66 | `loadClass(String, boolean)`                                     | `java.lang.ClassLoader`                               |
|  4.7% |      62 | `defineClass(String, byte[], int, int)`                          | `java.lang.ClassLoader`                               |
|  3.3% |      43 | `resumeWith(Object)`                                             | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |
|  1.2% |      16 | `getValue()`                                                     | `kotlin.SynchronizedLazyImpl`                         |
|  1.1% |      15 | `getValue()`                                                     | `kotlin.SafePublicationLazyImpl`                      |
|  1.0% |      13 | `getValue()`                                                     | `kotlin.UnsafeLazyImpl`                               |
|  0.8% |      11 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives`                |
|  0.7% |       9 | `getJavaField(KProperty)`                                        | `kotlin.reflect.jvm.ReflectJvmMapping`                |
|  0.5% |       6 | `checkNotNullParameter(Object, String)`                          | `kotlin.jvm.internal.Intrinsics`                      |
|  0.4% |       5 | `linkToTargetMethod(Object, Object, Object)`                     | `java.lang.invoke.Invokers$Holder`                    |
|  0.3% |       4 | `loadClass(String)`                                              | `java.lang.ClassLoader`                               |
|  0.3% |       4 | `put(Object, Object)`                                            | `java.util.HashMap`                                   |
|  0.3% |       4 | `newProxyInstance(ClassLoader, Class[], InvocationHandler)`      | `java.lang.reflect.Proxy`                             |
|  0.2% |       3 | `linkMethodHandleConstant(Class, int, Class, String, Object)`    | `java.lang.invoke.MethodHandleNatives`                |
|  0.2% |       3 | `areEqual(Object, Object)`                                       | `kotlin.jvm.internal.Intrinsics`                      |
|  0.2% |       2 | `getMethod(String, Class[])`                                     | `java.lang.Class`                                     |
|  0.2% |       2 | `getResource(String)`                                            | `java.lang.ClassLoader`                               |
|  0.2% |       2 | `getAnnotationsByType(Class)`                                    | `java.lang.reflect.Field`                             |

##### JIT

|    % | Samples | Function                   | Location    |
| ---: | ------: | -------------------------- | ----------- |
| 0.3% |       4 | `I2C/C2I adapters(0xbb)`   | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xb)`    | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0x)`     | `<unknown>` |
| 0.1% |       1 | `itable stub`              | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbb)`  | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xa)`    | `<unknown>` |
| 0.1% |       1 | `vtable stub`              | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbbb)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 97.8% |     792 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
|  2.1% |      17 | `CompileQueue::get`                            | `libjvm.dylib` |
|  0.1% |       1 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                              | Location       |
| ----: | ------: | ----------------------------------- | -------------- |
| 69.7% |     552 | `C2Compiler::compile_method`        | `libjvm.dylib` |
|  0.5% |       4 | `ciEnv::get_method_from_handle`     | `libjvm.dylib` |
|  0.1% |       1 | `CompileBroker::collect_statistics` | `libjvm.dylib` |
|  0.1% |       1 | `ciEnv::ciEnv`                      | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee              | Location       |
| ----: | ------: | ------------------- | -------------- |
| 99.5% |     549 | `Compile::Compile`  | `libjvm.dylib` |
|  0.2% |       1 | `Compile::~Compile` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 50.1% |     275 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 36.6% |     201 | `Compile::Optimize`                      | `libjvm.dylib` |
|  0.9% |       5 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.2% |       1 | `PhaseIterGVN::optimize`                 | `libjvm.dylib` |
|  0.2% |       1 | `Type::Initialize`                       | `libjvm.dylib` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|     % | Samples | Callee                                                                       | Location                                               |
| ----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 81.8% |     341 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                             |
| 17.7% |      74 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
|  0.2% |       1 | `loadClass(String)`                                                          | `java.lang.ClassLoader`                                |
|  0.2% |       1 | `getMethod(String, Class[])`                                                 | `java.lang.Class`                                      |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % | Samples | Callee          | Location                                    |
| -----: | ------: | --------------- | ------------------------------------------- |
| 100.0% |     417 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|     % | Samples | Callee                          | Location                                                |
| ----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 99.4% |     339 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.6% |       2 | `<init>()`                      | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee           | Location                                               |
| -----: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% |     341 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                                               | Location                                                                |
| ----: | ------: | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| 98.2% |     333 | `exec(MessageCollector, Services, CommonCompilerArguments)`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|  1.5% |       5 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |
|  0.3% |       1 | `InterpreterRuntime::resolve_from_cache`                                             | `libjvm.dylib`                                                          |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                                                   | Location                                      |
| -----: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 100.0% |     339 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                                         | Location                                      |
| -----: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% |     339 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                                                 | Location                                                |
| -----: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 100.0% |     339 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                                                                                             | Location                                                |
| -----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     339 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                          | Location                                      |
| ----: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| 97.3% |     324 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |
|  2.7% |       9 | `<clinit>()`                                                    | `org.jetbrains.kotlin.cli.common.ArgumentsKt` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                                         | Location                                                |
| ----: | ------: | ---------------------------------------------- | ------------------------------------------------------- |
| 99.7% |     323 | `runPhasedPipeline(ArgumentsPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|  0.3% |       1 | `<clinit>()`                                   | `com.intellij.openapi.util.Disposer`                    |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                                                                              | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     324 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                                                                                                                        | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     324 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee                                                         | Location                                                |
| -----: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     324 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee                                                                | Location                                     |
| -----: | ------: | --------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     324 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                                                                 | Location                                     |
| -----: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     324 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                                                                          | Location                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| 99.4% |     321 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`            | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                        |
|  0.6% |       2 | `reportToMessageCollector(BaseDiagnosticsCollector, MessageCollector, boolean)` | `org.jetbrains.kotlin.cli.common.fir.FirDiagnosticsCompilerResultsReporter` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|     % | Samples | Callee                           | Location                                                              |
| ----: | ------: | -------------------------------- | --------------------------------------------------------------------- |
| 66.4% |     213 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`      |
| 23.7% |      76 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`       |
|  8.4% |      27 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`        |
|  1.6% |       5 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmConfigurationPipelinePhase` |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Callee                                         | Location                                          |
| -----: | ------: | ---------------------------------------------- | ------------------------------------------------- |
| 100.0% |     321 | `phaseBody(PipelineContext, PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % | Samples | Callee                              | Location                                                         |
| -----: | ------: | ----------------------------------- | ---------------------------------------------------------------- |
| 100.0% |     321 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
|   5.0% |      16 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase`   |
|   1.9% |       6 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.ModuleLoweringPhase` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 60.4% |     166 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 17.8% |      49 | `Matcher::match`                  | `libjvm.dylib` |
| 10.5% |      29 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  8.7% |      24 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  0.7% |       2 | `PhaseOutput::install_code`       | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                                               | Location       |
| ----: | ------: | ---------------------------------------------------- | -------------- |
| 89.7% |     209 | `Compilation::compile_java_method`                   | `libjvm.dylib` |
|  8.6% |      20 | `ciEnv::register_method`                             | `libjvm.dylib` |
|  0.4% |       1 | `DebugInformationRecorder::DebugInformationRecorder` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |     233 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 41.1% |      86 | `Compilation::emit_lir`        | `libjvm.dylib` |
| 37.3% |      78 | `Compilation::build_hir`       | `libjvm.dylib` |
| 20.6% |      43 | `Compilation::emit_code_body`  | `libjvm.dylib` |
|  0.5% |       1 | `ciMethod::ensure_method_data` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 32.8% |      66 | `PhaseIdealLoop::optimize`     | `libjvm.dylib` |
| 19.9% |      40 | `Compile::optimize_loops`      | `libjvm.dylib` |
| 17.9% |      36 | `PhaseIterGVN::optimize`       | `libjvm.dylib` |
|  8.5% |      17 | `PhaseCCP::PhaseCCP`           | `libjvm.dylib` |
|  5.0% |      10 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 15.7% |      26 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |
| 15.7% |      26 | `PhaseChaitin::Split`              | `libjvm.dylib` |
| 10.8% |      18 | `PhaseChaitin::Select`             | `libjvm.dylib` |
| 10.2% |      17 | `PhaseLive::compute`               | `libjvm.dylib` |
|  9.6% |      16 | `PhaseChaitin::gather_lrg_masks`   | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 84.9% |      90 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| 14.2% |      15 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 34.4% |      31 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| 16.7% |      15 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| 12.2% |      11 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |
|  7.8% |       7 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
|  7.8% |       7 | `PhaseIdealLoop::build_loop_tree`      | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Callee                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      90 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 76.7% |      66 | `LinearScan::do_linear_scan` | `libjvm.dylib` |
| 22.1% |      19 | `BlockList::iterate_forward` | `libjvm.dylib` |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 50.0% |      33 | `LinearScan::allocate_registers`       | `libjvm.dylib` |
| 22.7% |      15 | `LinearScan::assign_reg_num`           | `libjvm.dylib` |
| 12.1% |       8 | `LinearScan::build_intervals`          | `libjvm.dylib` |
|  4.5% |       3 | `LinearScan::compute_global_live_sets` | `libjvm.dylib` |
|  3.0% |       2 | `LinearScan::resolve_data_flow`        | `libjvm.dylib` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|     % | Samples | Callee              | Location                                                 |
| ----: | ------: | ------------------- | -------------------------------------------------------- |
| 95.5% |      63 | `findClass(String)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                    | Location       |
| ----: | ------: | ----------------------------------------- | -------------- |
| 90.6% |      58 | `PhaseIterGVN::transform_old`             | `libjvm.dylib` |
|  1.6% |       1 | `AddLNode::Identity`                      | `libjvm.dylib` |
|  1.6% |       1 | `ConvI2LNode::Ideal`                      | `libjvm.dylib` |
|  1.6% |       1 | `BoolNode::hash`                          | `libjvm.dylib` |
|  1.6% |       1 | `PhaseIterGVN::remove_globally_dead_node` | `libjvm.dylib` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

|     % | Samples | Callee                                      | Location       |
| ----: | ------: | ------------------------------------------- | -------------- |
| 84.5% |      49 | `GraphBuilder::iterate_all_blocks`          | `libjvm.dylib` |
|  8.6% |       5 | `BlockListBuilder::BlockListBuilder`        | `libjvm.dylib` |
|  3.4% |       2 | `BlockBegin::iterate_preorder`              | `libjvm.dylib` |
|  1.7% |       1 | `ValueMap::kill_all`                        | `libjvm.dylib` |
|  1.7% |       1 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 10.3% |       6 | `PhiNode::Ideal`             | `libjvm.dylib` |
| 10.3% |       6 | `LoadNode::Ideal`            | `libjvm.dylib` |
| 10.3% |       6 | `IfNode::Ideal`              | `libjvm.dylib` |
|  8.6% |       5 | `NodeHash::hash_find_insert` | `libjvm.dylib` |
|  8.6% |       5 | `RegionNode::Ideal`          | `libjvm.dylib` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 86.0% |      43 | `GraphBuilder::invoke`        | `libjvm.dylib` |
| 20.0% |      10 | `GraphBuilder::access_field`  | `libjvm.dylib` |
|  2.0% |       1 | `GraphBuilder::if_node`       | `libjvm.dylib` |
|  2.0% |       1 | `BlockBegin::try_merge`       | `libjvm.dylib` |
|  2.0% |       1 | `GraphBuilder::load_constant` | `libjvm.dylib` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|     % | Samples | Callee                  | Location                                                                                                      |
| ----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------------- |
| 74.4% |      32 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`                         |
| 39.5% |      17 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`                      |
| 11.6% |       5 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$2`                      |
|  7.0% |       3 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirInvokeResolveTowerExtension$enqueueResolverTasksForInvoke$3` |
|  2.3% |       1 | `invokeSuspend(Object)` | `com.intellij.ide.plugins.PluginDescriptorLoader$loadForCoreEnv$1`                                            |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

|     % | Samples | Callee     | Location                                                                                         |
| ----: | ------: | ---------- | ------------------------------------------------------------------------------------------------ |
| 25.0% |       4 | `invoke()` | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass$$Lambda.0x000000e80160d598`             |
| 18.8% |       3 | `invoke()` | `org.jetbrains.kotlin.builtins.DefaultBuiltIns$$Lambda.0x000000e801754c00`                       |
| 12.5% |       2 | `invoke()` | `org.jetbrains.kotlin.diagnostics.KtDiagnosticFactoryToRendererMapKt$$Lambda.0x000000e801141e48` |
|  6.3% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.extensions.FirExtensionRegistrar$$Lambda.0x000000e8013704a0`           |
|  6.3% |       1 | `invoke()` | `org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile$$Lambda.0x000000e80138c000`             |

##### `getValue()` (`kotlin.SafePublicationLazyImpl`)

|     % | Samples | Callee     | Location                                                                                                   |
| ----: | ------: | ---------- | ---------------------------------------------------------------------------------------------------------- |
| 13.3% |       2 | `invoke()` | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer$$Lambda.0x000000e8015d53b8` |
| 13.3% |       2 | `invoke()` | `org.jetbrains.kotlin.fir.java.FirLazyJavaDeclarationList$$Lambda.0x000000e80160ccf0`                      |
| 13.3% |       2 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.impl.FirClassDeclaredMemberScopeImpl$$Lambda.0x000000e801629a10`          |
| 13.3% |       2 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.ImplicitReceiverValue$$Lambda.0x000000e8016583e8`                  |
|  6.7% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.impl.AbstractFirUseSiteMemberScope$$Lambda.0x000000e801631990`            |

##### `getValue()` (`kotlin.UnsafeLazyImpl`)

|     % | Samples | Callee     | Location                                                                                                         |
| ----: | ------: | ---------- | ---------------------------------------------------------------------------------------------------------------- |
| 53.8% |       7 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver$$Lambda.0x000000e801684c00`                              |
| 23.1% |       3 | `invoke()` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser$$Lambda.0x000000e801609110` |
|  7.7% |       1 | `invoke()` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaClass$$Lambda.0x000000e801607a50`            |
|  7.7% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.transformers.FirWhenExhaustivenessComputer$$Lambda.0x000000e8016d0af8`         |
|  7.7% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.analysis.cfa.util.PropertyInitializationInfoData$$Lambda.0x000000e80171b5d8`           |

##### `loadClass(String)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                       | Location                |
| ----: | ------: | ---------------------------- | ----------------------- |
| 50.0% |       2 | `loadClass(String, boolean)` | `java.lang.ClassLoader` |

##### `areEqual(Object, Object)` (`kotlin.jvm.internal.Intrinsics`)

|     % | Samples | Callee           | Location                                                  |
| ----: | ------: | ---------------- | --------------------------------------------------------- |
| 33.3% |       1 | `equals(Object)` | `org.jetbrains.kotlin.ir.types.impl.IrAbstractSimpleType` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame. `…` stands for frames the entry filter hides.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4.7% |      62 | `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                               |
| 1.3% |      17 | `CompileQueue::get` (`libjvm.dylib`) ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.2% |      16 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                       |
| 1.0% |      13 | `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                          |
| 0.9% |      12 | `ciEnv::register_method` (`libjvm.dylib`) ← `Compilation::compile_method` ← `Compilation::Compilation` ← … ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                 |
| 0.9% |      12 | `Compilation::build_hir` (`libjvm.dylib`) ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← … ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                            |
| 0.8% |      11 | `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                            |
| 0.8% |      10 | `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                    |
| 0.7% |       9 | `PhaseLive::compute` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                        |
| 0.6% |       8 | `LinearScanWalker::alloc_free_reg` (`libjvm.dylib`) ← `LinearScanWalker::activate_current` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← … ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                   |
| 0.6% |       8 | `PhaseLive::add_liveout` (`libjvm.dylib`) ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                             |
| 0.6% |       8 | `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                |
| 0.5% |       7 | `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                       |
| 0.5% |       7 | `LinearScan::build_intervals` (`libjvm.dylib`) ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← … ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                              |
| 0.5% |       7 | `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`) ← `PhaseIdealLoop::build_loop_late` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                          |
| 0.5% |       6 | `LinearScanWalker::free_collect_inactive_fixed` (`libjvm.dylib`) ← `LinearScanWalker::alloc_free_reg` ← `LinearScanWalker::activate_current` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← … ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` |
| 0.5% |       6 | `Matcher::xform` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                             |
| 0.5% |       6 | `PhaseChaitin::elide_copy` (`libjvm.dylib`) ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                     |
| 0.5% |       6 | `IndexSetIterator::advance_and_next` (`libjvm.dylib`) ← `PhaseChaitin::Select` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                               |
| 0.5% |       6 | `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                        |

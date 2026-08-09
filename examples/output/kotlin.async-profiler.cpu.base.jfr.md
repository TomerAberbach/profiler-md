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

|    % | Samples | Function                                    | Location                   |
| ---: | ------: | ------------------------------------------- | -------------------------- |
| 4.1% |      54 | `inflate_fast`                              | `libzip.dylib`             |
| 1.7% |      22 | `IndexSetIterator::advance_and_next`        | `libjvm.dylib`             |
| 1.6% |      21 | `__psynch_cvwait`                           | `libsystem_kernel.dylib`   |
| 1.6% |      21 | `tlv_get_addr`                              | `libdyld.dylib`            |
| 1.6% |      21 | `SymbolTable::do_lookup`                    | `libjvm.dylib`             |
| 1.2% |      16 | `PhaseChaitin::Split`                       | `libjvm.dylib`             |
| 1.0% |      13 | `__psynch_mutexwait`                        | `libsystem_kernel.dylib`   |
| 0.9% |      12 | `_platform_memset`                          | `libsystem_platform.dylib` |
| 0.9% |      12 | `PhaseChaitin::build_ifg_physical`          | `libjvm.dylib`             |
| 0.8% |      11 | `PhaseChaitin::gather_lrg_masks`            | `libjvm.dylib`             |
| 0.8% |      10 | `PhaseAggressiveCoalesce::insert_copies`    | `libjvm.dylib`             |
| 0.7% |       9 | `PhaseLive::compute`                        | `libjvm.dylib`             |
| 0.7% |       9 | `MultiNode::is_CFG`                         | `libjvm.dylib`             |
| 0.7% |       9 | `PhaseIdealLoop::build_loop_early`          | `libjvm.dylib`             |
| 0.7% |       9 | `PhaseIdealLoop::build_loop_late`           | `libjvm.dylib`             |
| 0.7% |       9 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib`             |
| 0.7% |       9 | `Node::dominates`                           | `libjvm.dylib`             |
| 0.7% |       9 | `pthread_jit_write_protect_np`              | `libsystem_pthread.dylib`  |
| 0.6% |       8 | `LinearScanWalker::alloc_free_reg`          | `libjvm.dylib`             |
| 0.6% |       8 | `PhaseLive::add_liveout`                    | `libjvm.dylib`             |

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

##### Native

|    % | Samples | Function                                                                                                                                                 | Location                   |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 4.1% |      54 | `inflate_fast`                                                                                                                                           | `libzip.dylib`             |
| 1.6% |      21 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 1.6% |      21 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
| 1.6% |      21 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`             |
| 1.0% |      13 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
| 0.9% |      12 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
| 0.7% |       9 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |
| 0.5% |       7 | `bsearch`                                                                                                                                                | `libsystem_c.dylib`        |
| 0.5% |       7 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
| 0.5% |       7 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| 0.5% |       7 | `semaphore_wait_trap`                                                                                                                                    | `libsystem_kernel.dylib`   |
| 0.5% |       7 | `inflate`                                                                                                                                                | `libzip.dylib`             |
| 0.4% |       5 | `SymbolTable::new_symbol`                                                                                                                                | `libjvm.dylib`             |
| 0.4% |       5 | `_platform_memmove`                                                                                                                                      | `libsystem_platform.dylib` |
| 0.3% |       4 | `_platform_memcmp`                                                                                                                                       | `libsystem_platform.dylib` |
| 0.3% |       4 | `ValueRecorder<Metadata*>::maybe_find_index`                                                                                                             | `libjvm.dylib`             |
| 0.3% |       4 | `SymbolTable::lookup_shared`                                                                                                                             | `libjvm.dylib`             |
| 0.3% |       4 | `Dictionary::find`                                                                                                                                       | `libjvm.dylib`             |
| 0.3% |       4 | `LinkResolver::check_method_loader_constraints`                                                                                                          | `libjvm.dylib`             |
| 0.3% |       4 | `posix_madvise`                                                                                                                                          | `libsystem_kernel.dylib`   |

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

|    % | Samples | Function                                                                                                                 | Location                                               |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| 0.5% |       6 | `checkNotNullParameter(Object, String)`                                                                                  | `kotlin.jvm.internal.Intrinsics`                       |
| 0.1% |       1 | `inflate(byte[], int, int)`                                                                                              | `java.util.zip.Inflater`                               |
| 0.1% |       1 | `resize()`                                                                                                               | `java.util.HashMap`                                    |
| 0.1% |       1 | `putVal(int, Object, Object, boolean, boolean)`                                                                          | `java.util.HashMap`                                    |
| 0.1% |       1 | `nextNode()`                                                                                                             | `java.util.HashMap$HashIterator`                       |
| 0.1% |       1 | `fill(int[], int)`                                                                                                       | `java.util.Arrays`                                     |
| 0.1% |       1 | `initCEN(int, ZipCoder)`                                                                                                 | `java.util.zip.ZipFile$Source`                         |
| 0.1% |       1 | `preparedLambdaForm(MemberName, boolean)`                                                                                | `java.lang.invoke.DirectMethodHandle`                  |
| 0.1% |       1 | `hasNext()`                                                                                                              | `java.util.Collections$1`                              |
| 0.1% |       1 | `get(int)`                                                                                                               | `java.util.ImmutableCollections$List12`                |
| 0.1% |       1 | `putExceptionTable(Handler, ByteVector)`                                                                                 | `jdk.internal.org.objectweb.asm.Handler`               |
| 0.1% |       1 | `getProtectionDomain(CodeSource)`                                                                                        | `java.security.SecureClassLoader`                      |
| 0.1% |       1 | `toSet(Iterable)`                                                                                                        | `kotlin.collections.CollectionsKt___CollectionsKt`     |
| 0.1% |       1 | `removeNode(int, Object, Object, boolean, boolean)`                                                                      | `java.util.HashMap`                                    |
| 0.1% |       1 | `addProxyMethod(Method, Class)`                                                                                          | `java.lang.reflect.ProxyGenerator`                     |
| 0.1% |       1 | `isNullConversion(Class, Class, boolean)`                                                                                | `sun.invoke.util.VerifyType`                           |
| 0.1% |       1 | `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` | `java.lang.invoke.AbstractValidatingLambdaMetafactory` |
| 0.1% |       1 | `isSafeToCache(MethodType)`                                                                                              | `java.lang.invoke.MethodHandle`                        |
| 0.1% |       1 | `copy()`                                                                                                                 | `java.lang.reflect.Method`                             |
| 0.1% |       1 | `max(int, int)`                                                                                                          | `java.lang.Math`                                       |

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

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Location                     |
| -----: | ------: | ---------------------------- |
| 100.0% |       1 | `java.util.zip.Inflater:366` |

##### `resize()` (`java.util.HashMap`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.util.HashMap:726` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.util.HashMap:635` |

##### `nextNode()` (`java.util.HashMap$HashIterator`)

|      % | Samples | Location                              |
| -----: | ------: | ------------------------------------- |
| 100.0% |       1 | `java.util.HashMap$HashIterator:1609` |

##### `fill(int[], int)` (`java.util.Arrays`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.util.Arrays:3182` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       1 | `java.util.zip.ZipFile$Source:1783` |

##### `preparedLambdaForm(MemberName, boolean)` (`java.lang.invoke.DirectMethodHandle`)

|      % | Samples | Location                                  |
| -----: | ------: | ----------------------------------------- |
| 100.0% |       1 | `java.lang.invoke.DirectMethodHandle:216` |

##### `hasNext()` (`java.util.Collections$1`)

|      % | Samples | Location                       |
| -----: | ------: | ------------------------------ |
| 100.0% |       1 | `java.util.Collections$1:5031` |

##### `get(int)` (`java.util.ImmutableCollections$List12`)

|      % | Samples | Location                                    |
| -----: | ------: | ------------------------------------------- |
| 100.0% |       1 | `java.util.ImmutableCollections$List12:587` |

##### `putExceptionTable(Handler, ByteVector)` (`jdk.internal.org.objectweb.asm.Handler`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `jdk.internal.org.objectweb.asm.Handler:219` |

##### `getProtectionDomain(CodeSource)` (`java.security.SecureClassLoader`)

|      % | Samples | Location                              |
| -----: | ------: | ------------------------------------- |
| 100.0% |       1 | `java.security.SecureClassLoader:222` |

##### `toSet(Iterable)` (`kotlin.collections.CollectionsKt___CollectionsKt`)

|      % | Samples | Location                                                |
| -----: | ------: | ------------------------------------------------------- |
| 100.0% |       1 | `kotlin.collections.CollectionsKt___CollectionsKt:1532` |

##### `removeNode(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.util.HashMap:845` |

##### `addProxyMethod(Method, Class)` (`java.lang.reflect.ProxyGenerator`)

|      % | Samples | Location                               |
| -----: | ------: | -------------------------------------- |
| 100.0% |       1 | `java.lang.reflect.ProxyGenerator:527` |

##### `isNullConversion(Class, Class, boolean)` (`sun.invoke.util.VerifyType`)

|      % | Samples | Location                        |
| -----: | ------: | ------------------------------- |
| 100.0% |       1 | `sun.invoke.util.VerifyType:73` |

##### `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` (`java.lang.invoke.AbstractValidatingLambdaMetafactory`)

|      % | Samples | Location                                                   |
| -----: | ------: | ---------------------------------------------------------- |
| 100.0% |       1 | `java.lang.invoke.AbstractValidatingLambdaMetafactory:130` |

##### `isSafeToCache(MethodType)` (`java.lang.invoke.MethodHandle`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       1 | `java.lang.invoke.MethodHandle:914` |

##### `copy()` (`java.lang.reflect.Method`)

|      % | Samples | Location                       |
| -----: | ------: | ------------------------------ |
| 100.0% |       1 | `java.lang.reflect.Method:162` |

##### `max(int, int)` (`java.lang.Math`)

|      % | Samples | Location              |
| -----: | ------: | --------------------- |
| 100.0% |       1 | `java.lang.Math:2020` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `inflate_fast` (`libzip.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |      54 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|     % | Samples | Caller                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 27.3% |       6 | `PhaseChaitin::Select`             | `libjvm.dylib` |
| 18.2% |       4 | `PhaseIFG::re_insert`              | `libjvm.dylib` |
| 13.6% |       3 | `PhaseIFG::remove_node`            | `libjvm.dylib` |
|  9.1% |       2 | `PhaseIFG::SquareUp`               | `libjvm.dylib` |
|  9.1% |       2 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location                 |
| ----: | ------: | ----------------------- | ------------------------ |
| 95.2% |      20 | `PlatformMonitor::wait` | `libjvm.dylib`           |
|  4.8% |       1 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|    % | Samples | Caller                            | Location       |
| ---: | ------: | --------------------------------- | -------------- |
| 4.8% |       1 | `CmpINode::Ideal`                 | `libjvm.dylib` |
| 4.8% |       1 | `BlockListBuilder::make_block_at` | `libjvm.dylib` |
| 4.8% |       1 | `ResourceBitMap::ResourceBitMap`  | `libjvm.dylib` |
| 4.8% |       1 | `LIRGenerator::block_do`          | `libjvm.dylib` |
| 4.8% |       1 | `OopMap::deep_copy`               | `libjvm.dylib` |

##### `SymbolTable::do_lookup` (`libjvm.dylib`)

|     % | Samples | Caller                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 71.4% |      15 | `SymbolTable::lookup_only`                     | `libjvm.dylib` |
| 14.3% |       3 | `SymbolTable::new_symbol`                      | `libjvm.dylib` |
|  9.5% |       2 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |
|  4.8% |       1 | `SignatureStream::find_symbol`                 | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      16 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |      13 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 16.7% |       2 | `MemAllocator::allocate`                      | `libjvm.dylib` |
|  8.3% |       1 | `ThreadsSMRSupport::add_thread`               | `libjvm.dylib` |
|  8.3% |       1 | `MethodLiveness::BasicBlock::get_liveness_at` | `libjvm.dylib` |
|  8.3% |       1 | `Compilation::build_hir`                      | `libjvm.dylib` |
|  8.3% |       1 | `Invariance::clone_nodes`                     | `libjvm.dylib` |

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

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                                      | Location       |
| ----: | ------: | ------------------------------------------- | -------------- |
| 22.2% |       2 | `jni_GetPrimitiveArrayCritical`             | `libjvm.dylib` |
| 11.1% |       1 | `JVM_IsArrayClass`                          | `libjvm.dylib` |
| 11.1% |       1 | `break_stack_range`                         | `<unknown>`    |
| 11.1% |       1 | `Unsafe_AllocateInstance`                   | `libjvm.dylib` |
| 11.1% |       1 | `InterpreterRuntime::build_method_counters` | `libjvm.dylib` |

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

##### `bsearch` (`libsystem_c.dylib`)

|     % | Samples | Caller                                           | Location       |
| ----: | ------: | ------------------------------------------------ | -------------- |
| 85.7% |       6 | `encoding_for_logical_immediate`                 | `libjvm.dylib` |
| 14.3% |       1 | `Assembler::operand_valid_for_logical_immediate` | `libjvm.dylib` |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 71.4% |       5 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |
| 28.6% |       2 | `InstanceKlass::initialize_impl`        | `libjvm.dylib` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

|     % | Samples | Caller                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 71.4% |       5 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
| 28.6% |       2 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 85.7% |       6 | `WorkerThread::run`              | `libjvm.dylib` |
| 14.3% |       1 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |

##### `inflate` (`libzip.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |       7 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

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

##### `SymbolTable::new_symbol` (`libjvm.dylib`)

|      % | Samples | Caller                         | Location       |
| -----: | ------: | ------------------------------ | -------------- |
| 100.0% |       5 | `SignatureStream::find_symbol` | `libjvm.dylib` |

##### `_platform_memmove` (`libsystem_platform.dylib`)

|     % | Samples | Caller                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 40.0% |       2 | `nmethod::nmethod`    | `libjvm.dylib` |
| 20.0% |       1 | `Node::dominates`     | `libjvm.dylib` |
| 20.0% |       1 | `PhaseOutput::Output` | `libjvm.dylib` |
| 20.0% |       1 | `inflate`             | `libzip.dylib` |

##### `_platform_memcmp` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 50.0% |       2 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |
| 25.0% |       1 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
| 25.0% |       1 | `SymbolTable::lookup_only`                         | `libjvm.dylib` |

##### `ValueRecorder<Metadata*>::maybe_find_index` (`libjvm.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |       4 | `OopRecorder::find_index` | `libjvm.dylib` |

##### `SymbolTable::lookup_shared` (`libjvm.dylib`)

|     % | Samples | Caller                     | Location       |
| ----: | ------: | -------------------------- | -------------- |
| 75.0% |       3 | `SymbolTable::lookup_only` | `libjvm.dylib` |
| 25.0% |       1 | `SymbolTable::new_symbol`  | `libjvm.dylib` |

##### `Dictionary::find` (`libjvm.dylib`)

|     % | Samples | Caller                                                       | Location       |
| ----: | ------: | ------------------------------------------------------------ | -------------- |
| 50.0% |       2 | `SystemDictionary::find_constrained_instance_or_array_klass` | `libjvm.dylib` |
| 50.0% |       2 | `SystemDictionary::resolve_instance_class_or_null`           | `libjvm.dylib` |

##### `LinkResolver::check_method_loader_constraints` (`libjvm.dylib`)

|      % | Samples | Caller                         | Location       |
| -----: | ------: | ------------------------------ | -------------- |
| 100.0% |       4 | `LinkResolver::resolve_method` | `libjvm.dylib` |

##### `posix_madvise` (`libsystem_kernel.dylib`)

|      % | Samples | Caller        | Location                 |
| -----: | ------: | ------------- | ------------------------ |
| 100.0% |       4 | `free_medium` | `libsystem_malloc.dylib` |

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

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Caller                   | Location                            |
| -----: | ------: | ------------------------ | ----------------------------------- |
| 100.0% |       1 | `read(byte[], int, int)` | `java.util.zip.InflaterInputStream` |

##### `resize()` (`java.util.HashMap`)

|      % | Samples | Caller                                          | Location            |
| -----: | ------: | ----------------------------------------------- | ------------------- |
| 100.0% |       1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|      % | Samples | Caller                | Location            |
| -----: | ------: | --------------------- | ------------------- |
| 100.0% |       1 | `put(Object, Object)` | `java.util.HashMap` |

##### `nextNode()` (`java.util.HashMap$HashIterator`)

|      % | Samples | Caller   | Location                          |
| -----: | ------: | -------- | --------------------------------- |
| 100.0% |       1 | `next()` | `java.util.HashMap$ValueIterator` |

##### `fill(int[], int)` (`java.util.Arrays`)

|      % | Samples | Caller                   | Location                       |
| -----: | ------: | ------------------------ | ------------------------------ |
| 100.0% |       1 | `initCEN(int, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|      % | Samples | Caller                                          | Location                       |
| -----: | ------: | ----------------------------------------------- | ------------------------------ |
| 100.0% |       1 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `preparedLambdaForm(MemberName, boolean)` (`java.lang.invoke.DirectMethodHandle`)

|      % | Samples | Caller                           | Location                              |
| -----: | ------: | -------------------------------- | ------------------------------------- |
| 100.0% |       1 | `preparedLambdaForm(MemberName)` | `java.lang.invoke.DirectMethodHandle` |

##### `hasNext()` (`java.util.Collections$1`)

|      % | Samples | Caller                                      | Location                               |
| -----: | ------: | ------------------------------------------- | -------------------------------------- |
| 100.0% |       1 | `proxyClassContext(ClassLoader, List, Set)` | `java.lang.reflect.Proxy$ProxyBuilder` |

##### `get(int)` (`java.util.ImmutableCollections$List12`)

|      % | Samples | Caller                | Location                                        |
| -----: | ------: | --------------------- | ----------------------------------------------- |
| 100.0% |       1 | `getterFunction(int)` | `java.lang.invoke.ClassSpecializer$SpeciesData` |

##### `putExceptionTable(Handler, ByteVector)` (`jdk.internal.org.objectweb.asm.Handler`)

|      % | Samples | Caller                      | Location                                      |
| -----: | ------: | --------------------------- | --------------------------------------------- |
| 100.0% |       1 | `putMethodInfo(ByteVector)` | `jdk.internal.org.objectweb.asm.MethodWriter` |

##### `getProtectionDomain(CodeSource)` (`java.security.SecureClassLoader`)

|      % | Samples | Caller                                              | Location                          |
| -----: | ------: | --------------------------------------------------- | --------------------------------- |
| 100.0% |       1 | `defineClass(String, byte[], int, int, CodeSource)` | `java.security.SecureClassLoader` |

##### `toSet(Iterable)` (`kotlin.collections.CollectionsKt___CollectionsKt`)

|      % | Samples | Caller                     | Location                                                   |
| -----: | ------: | -------------------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `<init>(Class, Function1)` | `org.jetbrains.kotlin.backend.common.phaser.LoweringPhase` |

##### `removeNode(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|      % | Samples | Caller           | Location            |
| -----: | ------: | ---------------- | ------------------- |
| 100.0% |       1 | `remove(Object)` | `java.util.HashMap` |

##### `addProxyMethod(Method, Class)` (`java.lang.reflect.ProxyGenerator`)

|      % | Samples | Caller                | Location                           |
| -----: | ------: | --------------------- | ---------------------------------- |
| 100.0% |       1 | `generateClassFile()` | `java.lang.reflect.ProxyGenerator` |

##### `isNullConversion(Class, Class, boolean)` (`sun.invoke.util.VerifyType`)

|      % | Samples | Caller                                                              | Location                            |
| -----: | ------: | ------------------------------------------------------------------- | ----------------------------------- |
| 100.0% |       1 | `computeValueConversions(MethodType, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |

##### `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` (`java.lang.invoke.AbstractValidatingLambdaMetafactory`)

|      % | Samples | Caller                                                                                                                   | Location                                       |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| 100.0% |       1 | `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `isSafeToCache(MethodType)` (`java.lang.invoke.MethodHandle`)

|      % | Samples | Caller                         | Location                        |
| -----: | ------: | ------------------------------ | ------------------------------- |
| 100.0% |       1 | `setAsTypeCache(MethodHandle)` | `java.lang.invoke.MethodHandle` |

##### `copy()` (`java.lang.reflect.Method`)

|      % | Samples | Caller               | Location                          |
| -----: | ------: | -------------------- | --------------------------------- |
| 100.0% |       1 | `copyMethod(Method)` | `java.lang.reflect.ReflectAccess` |

##### `max(int, int)` (`java.lang.Math`)

|      % | Samples | Caller                 | Location                                |
| -----: | ------: | ---------------------- | --------------------------------------- |
| 100.0% |       1 | `balanceWhiteSpaces()` | `com.intellij.lang.impl.PsiBuilderImpl` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                 | Location                                               |
| ----: | ------: | -------------------------------------------------------- | ------------------------------------------------------ |
| 67.3% |     879 | `_pthread_start`                                         | `libsystem_pthread.dylib`                              |
| 67.3% |     879 | `thread_start`                                           | `libsystem_pthread.dylib`                              |
| 67.2% |     878 | `Thread::call_run`                                       | `libjvm.dylib`                                         |
| 67.2% |     878 | `thread_native_entry`                                    | `libjvm.dylib`                                         |
| 62.1% |     812 | `JavaThread::thread_main_inner`                          | `libjvm.dylib`                                         |
| 62.0% |     810 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib`                                         |
| 60.6% |     792 | `CompileBroker::invoke_compiler_on_method`               | `libjvm.dylib`                                         |
| 42.2% |     552 | `C2Compiler::compile_method`                             | `libjvm.dylib`                                         |
| 42.0% |     549 | `Compile::Compile`                                       | `libjvm.dylib`                                         |
| 31.9% |     417 | `run(String[])`                                          | `org.jetbrains.kotlin.preloading.Preloader`            |
| 31.9% |     417 | `main(String[])`                                         | `org.jetbrains.kotlin.preloading.Preloader`            |
| 26.1% |     341 | `main(String[])`                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |
| 26.1% |     341 | `main(String[])`                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`           |
| 26.1% |     341 | `invokeStatic(Object, Object)`                           | `java.lang.invoke.LambdaForm$DMH.0x000000e801008000`   |
| 26.1% |     341 | `invoke(Object, Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000e801009400`    |
| 26.1% |     341 | `invokeExact_MT(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                     |
| 26.1% |     341 | `invokeImpl(Object, Object[])`                           | `jdk.internal.reflect.DirectMethodHandleAccessor`      |
| 26.1% |     341 | `invoke(Object, Object[])`                               | `jdk.internal.reflect.DirectMethodHandleAccessor`      |
| 26.1% |     341 | `invoke(Object, Object[])`                               | `java.lang.reflect.Method`                             |
| 25.9% |     339 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler`          |

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

##### Native

|     % | Samples | Function                                        | Location                  |
| ----: | ------: | ----------------------------------------------- | ------------------------- |
| 67.3% |     879 | `_pthread_start`                                | `libsystem_pthread.dylib` |
| 67.3% |     879 | `thread_start`                                  | `libsystem_pthread.dylib` |
| 67.2% |     878 | `Thread::call_run`                              | `libjvm.dylib`            |
| 67.2% |     878 | `thread_native_entry`                           | `libjvm.dylib`            |
| 62.1% |     812 | `JavaThread::thread_main_inner`                 | `libjvm.dylib`            |
| 17.8% |     233 | `Compiler::compile_method`                      | `libjvm.dylib`            |
|  5.2% |      68 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib`            |
|  4.9% |      64 | `Parse::Parse`                                  | `libjvm.dylib`            |
|  4.9% |      64 | `ParseGenerator::generate`                      | `libjvm.dylib`            |
|  4.7% |      62 | `SystemDictionary::resolve_class_from_stream`   | `libjvm.dylib`            |
|  4.7% |      62 | `jvm_define_class_common`                       | `libjvm.dylib`            |
|  4.7% |      62 | `JVM_DefineClassWithSource`                     | `libjvm.dylib`            |
|  4.7% |      62 | `Java_java_lang_ClassLoader_defineClass1`       | `libjava.dylib`           |
|  4.7% |      61 | `Parse::do_one_block`                           | `libjvm.dylib`            |
|  4.7% |      61 | `Parse::do_all_blocks`                          | `libjvm.dylib`            |
|  4.7% |      61 | `KlassFactory::create_from_stream`              | `libjvm.dylib`            |
|  4.4% |      58 | `IRScope::IRScope`                              | `libjvm.dylib`            |
|  4.4% |      58 | `IR::IR`                                        | `libjvm.dylib`            |
|  4.2% |      55 | `Parse::do_call`                                | `libjvm.dylib`            |
|  4.2% |      55 | `WorkerThread::run`                             | `libjvm.dylib`            |

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

|     % | Samples | Function                                                                                      | Location                                              |
| ----: | ------: | --------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| 26.1% |     341 | `invokeStatic(Object, Object)`                                                                | `java.lang.invoke.LambdaForm$DMH.0x000000e801008000`  |
| 26.1% |     341 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000e801009400`   |
| 26.1% |     341 | `invokeExact_MT(Object, Object, Object, Object)`                                              | `java.lang.invoke.Invokers$Holder`                    |
| 26.1% |     341 | `invokeImpl(Object, Object[])`                                                                | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 26.1% |     341 | `invoke(Object, Object[])`                                                                    | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 26.1% |     341 | `invoke(Object, Object[])`                                                                    | `java.lang.reflect.Method`                            |
|  5.5% |      72 | `read(byte[], int, int)`                                                                      | `java.util.zip.InflaterInputStream`                   |
|  5.4% |      70 | `read(byte[], int, int)`                                                                      | `java.util.zip.ZipInputStream`                        |
|  5.4% |      70 | `read(byte[])`                                                                                | `java.io.FilterInputStream`                           |
|  5.3% |      69 | `inflate(byte[], int, int)`                                                                   | `java.util.zip.Inflater`                              |
|  5.2% |      68 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                                 | `java.util.zip.Inflater`                              |
|  5.0% |      66 | `loadClass(String, boolean)`                                                                  | `java.lang.ClassLoader`                               |
|  4.8% |      63 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)`               | `java.lang.ClassLoader`                               |
|  4.8% |      63 | `defineClass(String, byte[], int, int, ProtectionDomain)`                                     | `java.lang.ClassLoader`                               |
|  4.7% |      62 | `defineClass(String, byte[], int, int)`                                                       | `java.lang.ClassLoader`                               |
|  3.3% |      43 | `resumeWith(Object)`                                                                          | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |
|  1.2% |      16 | `getValue()`                                                                                  | `kotlin.SynchronizedLazyImpl`                         |
|  1.1% |      15 | `getValue()`                                                                                  | `kotlin.SafePublicationLazyImpl`                      |
|  1.0% |      13 | `getValue()`                                                                                  | `kotlin.UnsafeLazyImpl`                               |
|  0.8% |      11 | `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` | `java.lang.invoke.LambdaMetafactory`                  |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 99.9% |     878 | `thread_native_entry` | `libjvm.dylib` |
|  0.1% |       1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |     879 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 92.5% |     812 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  6.3% |      55 | `WorkerThread::run`             | `libjvm.dylib` |
|  0.9% |       8 | `VMThread::run`                 | `libjvm.dylib` |
|  0.2% |       2 | `WatcherThread::run`            | `libjvm.dylib` |
|  0.1% |       1 | `ConcurrentGCThread::run`       | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     878 | `Thread::call_run` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 99.8% |     810 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
|  0.1% |       1 | `JvmtiAgentThread::start_function_wrapper` | `libjvm.dylib` |
|  0.1% |       1 | `ServiceThread::service_thread_entry`      | `libjvm.dylib` |

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
| 29.4% |     233 | `Compiler::compile_method`          | `libjvm.dylib` |
|  0.5% |       4 | `ciEnv::get_method_from_handle`     | `libjvm.dylib` |
|  0.1% |       1 | `CompileBroker::collect_statistics` | `libjvm.dylib` |
|  0.1% |       1 | `TraceTime::~TraceTime`             | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee              | Location       |
| ----: | ------: | ------------------- | -------------- |
| 99.5% |     549 | `Compile::Compile`  | `libjvm.dylib` |
|  0.2% |       1 | `Chunk::next_chop`  | `libjvm.dylib` |
|  0.2% |       1 | `Compile::~Compile` | `libjvm.dylib` |
|  0.2% |       1 | `Arena::Arena`      | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 50.1% |     275 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 36.6% |     201 | `Compile::Optimize`                      | `libjvm.dylib` |
| 11.7% |      64 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  0.9% |       5 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.4% |       2 | `CallGenerator::for_inline`              | `libjvm.dylib` |

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

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e801008000`)

|      % | Samples | Callee           | Location                                     |
| -----: | ------: | ---------------- | -------------------------------------------- |
| 100.0% |     341 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000e801009400`)

|      % | Samples | Callee                         | Location                                             |
| -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% |     341 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000e801008000` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     341 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000e801009400` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee                                           | Location                           |
| -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% |     341 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee                         | Location                                          |
| -----: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% |     341 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % | Samples | Callee                     | Location                                          |
| -----: | ------: | -------------------------- | ------------------------------------------------- |
| 100.0% |     341 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |
|   0.9% |       3 | `acquireMethodAccessor()`  | `java.lang.reflect.Method`                        |

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
|  1.3% |       3 | `Dependencies::assert_common_1`                      | `libjvm.dylib` |
|  0.4% |       1 | `DebugInformationRecorder::DebugInformationRecorder` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |     233 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Callee                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     233 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 41.1% |      86 | `Compilation::emit_lir`        | `libjvm.dylib` |
| 37.3% |      78 | `Compilation::build_hir`       | `libjvm.dylib` |
| 20.6% |      43 | `Compilation::emit_code_body`  | `libjvm.dylib` |
|  0.5% |       1 | `IRScope::max_stack`           | `libjvm.dylib` |
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
|  0.9% |       1 | `Chunk::next_chop`               | `libjvm.dylib` |

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

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 76.7% |      66 | `LinearScan::do_linear_scan`     | `libjvm.dylib` |
| 22.1% |      19 | `BlockList::iterate_forward`     | `libjvm.dylib` |
|  1.2% |       1 | `ControlFlowOptimizer::optimize` | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|     % | Samples | Callee                                       | Location       |
| ----: | ------: | -------------------------------------------- | -------------- |
| 74.4% |      58 | `IR::IR`                                     | `libjvm.dylib` |
|  7.7% |       6 | `GlobalValueNumbering::GlobalValueNumbering` | `libjvm.dylib` |
|  6.4% |       5 | `IR::eliminate_null_checks`                  | `libjvm.dylib` |
|  2.6% |       2 | `IR::compute_use_counts`                     | `libjvm.dylib` |
|  2.6% |       2 | `RangeCheckElimination::eliminate`           | `libjvm.dylib` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

|     % | Samples | Callee                      | Location                                           |
| ----: | ------: | --------------------------- | -------------------------------------------------- |
| 94.4% |      68 | `inflate(byte[], int, int)` | `java.util.zip.Inflater`                           |
|  2.8% |       2 | `fill()`                    | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |
|  1.4% |       1 | `finished()`                | `java.util.zip.Inflater`                           |
|  1.4% |       1 | `fill()`                    | `java.util.zip.InflaterInputStream`                |

##### `read(byte[], int, int)` (`java.util.zip.ZipInputStream`)

|      % | Samples | Callee                   | Location                            |
| -----: | ------: | ------------------------ | ----------------------------------- |
| 100.0% |      70 | `read(byte[], int, int)` | `java.util.zip.InflaterInputStream` |

##### `read(byte[])` (`java.io.FilterInputStream`)

|      % | Samples | Callee                   | Location                       |
| -----: | ------: | ------------------------ | ------------------------------ |
| 100.0% |      70 | `read(byte[], int, int)` | `java.util.zip.ZipInputStream` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

|     % | Samples | Callee                                                        | Location                 |
| ----: | ------: | ------------------------------------------------------------- | ------------------------ |
| 98.6% |      68 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater` |

##### `Java_java_util_zip_Inflater_inflateBytesBytes` (`libzip.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 79.4% |      54 | `inflate_fast`                  | `libzip.dylib` |
| 17.6% |      12 | `inflate`                       | `libzip.dylib` |
|  2.9% |       2 | `jni_GetPrimitiveArrayCritical` | `libjvm.dylib` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Callee                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |      68 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 50.0% |      33 | `LinearScan::allocate_registers`       | `libjvm.dylib` |
| 22.7% |      15 | `LinearScan::assign_reg_num`           | `libjvm.dylib` |
| 12.1% |       8 | `LinearScan::build_intervals`          | `libjvm.dylib` |
|  4.5% |       3 | `LinearScan::compute_global_live_sets` | `libjvm.dylib` |
|  3.0% |       2 | `LinearScan::resolve_data_flow`        | `libjvm.dylib` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                             | Location                                                 |
| ----: | ------: | ---------------------------------- | -------------------------------------------------------- |
| 95.5% |      63 | `findClass(String)`                | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  3.0% |       2 | `findClass(String)`                | `java.net.URLClassLoader`                                |
|  1.5% |       1 | `findBootstrapClassOrNull(String)` | `java.lang.ClassLoader`                                  |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                    | Location       |
| ----: | ------: | ----------------------------------------- | -------------- |
| 90.6% |      58 | `PhaseIterGVN::transform_old`             | `libjvm.dylib` |
|  1.6% |       1 | `AddLNode::Identity`                      | `libjvm.dylib` |
|  1.6% |       1 | `ConvI2LNode::Ideal`                      | `libjvm.dylib` |
|  1.6% |       1 | `BoolNode::hash`                          | `libjvm.dylib` |
|  1.6% |       1 | `PhaseIterGVN::remove_globally_dead_node` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|     % | Samples | Callee                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 95.3% |      61 | `Parse::do_all_blocks`    | `libjvm.dylib` |
|  3.1% |       2 | `Parse::do_exits`         | `libjvm.dylib` |
|  3.1% |       2 | `ciMethod::method_data`   | `libjvm.dylib` |
|  1.6% |       1 | `Parse::create_entry_map` | `libjvm.dylib` |
|  1.6% |       1 | `Parse::do_method_entry`  | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % | Samples | Callee         | Location       |
| -----: | ------: | -------------- | -------------- |
| 100.0% |      64 | `Parse::Parse` | `libjvm.dylib` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                                    | Location                                                 |
| ----: | ------: | ----------------------------------------- | -------------------------------------------------------- |
| 98.4% |      62 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`                                          |
| 20.6% |      13 | `loadClass(String)`                       | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  1.6% |       1 | `loadClass(String)`                       | `java.lang.ClassLoader`                                  |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                                                                          | Location                |
| ----: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| 96.8% |      61 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |
|  3.2% |       2 | `postDefineClass(Class, ProtectionDomain)`                                      | `java.lang.ClassLoader` |

##### `SystemDictionary::resolve_class_from_stream` (`libjvm.dylib`)

|     % | Samples | Callee                                    | Location       |
| ----: | ------: | ----------------------------------------- | -------------- |
| 93.5% |      58 | `KlassFactory::create_from_stream`        | `libjvm.dylib` |
|  6.5% |       4 | `SystemDictionary::define_instance_class` | `libjvm.dylib` |

##### `jvm_define_class_common` (`libjvm.dylib`)

|      % | Samples | Callee                                        | Location       |
| -----: | ------: | --------------------------------------------- | -------------- |
| 100.0% |      62 | `SystemDictionary::resolve_class_from_stream` | `libjvm.dylib` |

##### `JVM_DefineClassWithSource` (`libjvm.dylib`)

|      % | Samples | Callee                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |      62 | `jvm_define_class_common` | `libjvm.dylib` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|      % | Samples | Callee                      | Location       |
| -----: | ------: | --------------------------- | -------------- |
| 100.0% |      62 | `JVM_DefineClassWithSource` | `libjvm.dylib` |

##### `defineClass(String, byte[], int, int)` (`java.lang.ClassLoader`)

|      % | Samples | Callee                                                    | Location                |
| -----: | ------: | --------------------------------------------------------- | ----------------------- |
| 100.0% |      62 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|     % | Samples | Callee                   | Location       |
| ----: | ------: | ------------------------ | -------------- |
| 90.2% |      55 | `Parse::do_call`         | `libjvm.dylib` |
| 18.0% |      11 | `Parse::do_field_access` | `libjvm.dylib` |
|  8.2% |       5 | `Parse::do_if`           | `libjvm.dylib` |
|  6.6% |       4 | `Parse::do_one_bytecode` | `libjvm.dylib` |
|  3.3% |       2 | `Parse::do_anewarray`    | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % | Samples | Callee                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |      61 | `Parse::do_one_block` | `libjvm.dylib` |
|   1.6% |       1 | `RegionNode::Ideal`   | `libjvm.dylib` |

##### `KlassFactory::create_from_stream` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 90.2% |      55 | `ClassFileParser::ClassFileParser`       | `libjvm.dylib` |
|  8.2% |       5 | `ClassFileParser::create_instance_klass` | `libjvm.dylib` |
|  1.6% |       1 | `ClassFileParser::~ClassFileParser`      | `libjvm.dylib` |

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

##### `IRScope::IRScope` (`libjvm.dylib`)

|      % | Samples | Callee                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |      58 | `GraphBuilder::GraphBuilder`               | `libjvm.dylib` |
|   1.7% |       1 | `GrowableArrayResourceAllocator::allocate` | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      58 | `IRScope::IRScope` | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|     % | Samples | Callee                                                | Location       |
| ----: | ------: | ----------------------------------------------------- | -------------- |
| 74.5% |      41 | `PredictedCallGenerator::generate`                    | `libjvm.dylib` |
| 61.8% |      34 | `ParseGenerator::generate`                            | `libjvm.dylib` |
| 20.0% |      11 | `Compile::call_generator`                             | `libjvm.dylib` |
|  3.6% |       2 | `GraphKit::record_profiled_arguments_for_speculation` | `libjvm.dylib` |
|  3.6% |       2 | `LibraryIntrinsic::generate`                          | `libjvm.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location                 |
| ----: | ------: | --------------------------------- | ------------------------ |
| 38.2% |      21 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
| 18.2% |      10 | `G1RebuildRSAndScrubTask::work`   | `libjvm.dylib`           |
| 18.2% |      10 | `G1CMConcurrentMarkingTask::work` | `libjvm.dylib`           |
| 12.7% |       7 | `G1ParallelCleaningTask::work`    | `libjvm.dylib`           |
| 10.9% |       6 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |

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
| 60.0% |       9 | `invoke()` | `kotlin.reflect.jvm.internal.DescriptorKProperty$$Lambda$0`                                                |
| 13.3% |       2 | `invoke()` | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer$$Lambda.0x000000e8015d53b8` |
| 13.3% |       2 | `invoke()` | `org.jetbrains.kotlin.fir.java.FirLazyJavaDeclarationList$$Lambda.0x000000e80160ccf0`                      |
| 13.3% |       2 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.impl.FirClassDeclaredMemberScopeImpl$$Lambda.0x000000e801629a10`          |
| 13.3% |       2 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.ImplicitReceiverValue$$Lambda.0x000000e8016583e8`                  |

##### `getValue()` (`kotlin.UnsafeLazyImpl`)

|     % | Samples | Callee     | Location                                                                                                         |
| ----: | ------: | ---------- | ---------------------------------------------------------------------------------------------------------------- |
| 53.8% |       7 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver$$Lambda.0x000000e801684c00`                              |
| 23.1% |       3 | `invoke()` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser$$Lambda.0x000000e801609110` |
|  7.7% |       1 | `invoke()` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaClass$$Lambda.0x000000e801607a50`            |
|  7.7% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.transformers.FirWhenExhaustivenessComputer$$Lambda.0x000000e8016d0af8`         |
|  7.7% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.analysis.cfa.util.PropertyInitializationInfoData$$Lambda.0x000000e80171b5d8`           |

##### `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` (`java.lang.invoke.LambdaMetafactory`)

|     % | Samples | Callee                                                                                                                   | Location                                       |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| 90.9% |      10 | `buildCallSite()`                                                                                                        | `java.lang.invoke.InnerClassLambdaMetafactory` |
|  9.1% |       1 | `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` | `java.lang.invoke.InnerClassLambdaMetafactory` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.9% |      51 | `inflate_fast` (`libzip.dylib`) ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |
| 1.2% |      16 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                      |
| 1.2% |      16 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                    |
| 0.9% |      12 | `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                       |
| 0.8% |      11 | `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                         |
| 0.8% |      10 | `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                 |
| 0.7% |       9 | `PhaseLive::compute` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                     |
| 0.6% |       8 | `LinearScanWalker::alloc_free_reg` (`libjvm.dylib`) ← `LinearScanWalker::activate_current` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                       |
| 0.5% |       7 | `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                    |
| 0.5% |       7 | `PhaseLive::add_liveout` (`libjvm.dylib`) ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                          |
| 0.5% |       7 | `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`) ← `PhaseIdealLoop::build_loop_late` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                       |
| 0.5% |       6 | `LinearScanWalker::free_collect_inactive_fixed` (`libjvm.dylib`) ← `LinearScanWalker::alloc_free_reg` ← `LinearScanWalker::activate_current` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                     |
| 0.5% |       6 | `PhaseChaitin::elide_copy` (`libjvm.dylib`) ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                  |
| 0.5% |       6 | `LinearScan::build_intervals` (`libjvm.dylib`) ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                  |
| 0.5% |       6 | `IndexSetIterator::advance_and_next` (`libjvm.dylib`) ← `PhaseChaitin::Select` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                            |
| 0.5% |       6 | `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                     |
| 0.5% |       6 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThread::run` (`libjvm.dylib`) ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.4% |       5 | `IntervalWalker::walk_to` (`libjvm.dylib`) ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                       |
| 0.4% |       5 | `PhaseOutput::BuildOopMaps` (`libjvm.dylib`) ← `PhaseOutput::Output` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                          |
| 0.4% |       5 | `Compile::final_graph_reshaping_walk` (`libjvm.dylib`) ← `Compile::final_graph_reshaping` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                     |

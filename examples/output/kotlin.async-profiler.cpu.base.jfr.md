# Sampling profile

Collected 1,303 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Compiler         | 47.0% |     612 |
| Native           | 37.3% |     486 |
| Ours             |  9.6% |     125 |
| Standard library |  4.6% |      60 |
| JIT              |  1.5% |      20 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                                                                                                                                                 | Location                   |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 4.3% |      56 | `inflate_fast`                                                                                                                                           | `libzip.dylib`             |
| 1.7% |      22 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`             |
| 1.6% |      21 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
| 1.4% |      18 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
| 1.2% |      16 | `IndexSetIterator::advance_and_next`                                                                                                                     | `libjvm.dylib`             |
| 1.2% |      15 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 1.1% |      14 | `LIR_OpVisitState::visit`                                                                                                                                | `libjvm.dylib`             |
| 1.1% |      14 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| 1.1% |      14 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |
| 1.0% |      13 | `PhaseChaitin::build_ifg_physical`                                                                                                                       | `libjvm.dylib`             |
| 1.0% |      13 | `PhaseChaitin::Split`                                                                                                                                    | `libjvm.dylib`             |
| 0.9% |      12 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                           | `libjvm.dylib`             |
| 0.9% |      12 | `LinearScanWalker::alloc_free_reg`                                                                                                                       | `libjvm.dylib`             |
| 0.9% |      12 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
| 0.8% |      11 | `PhaseLive::compute`                                                                                                                                     | `libjvm.dylib`             |
| 0.8% |      11 | `PhaseIdealLoop::build_loop_late`                                                                                                                        | `libjvm.dylib`             |
| 0.7% |       9 | `IntervalWalker::walk_to`                                                                                                                                | `libjvm.dylib`             |
| 0.7% |       9 | `_platform_memmove`                                                                                                                                      | `libsystem_platform.dylib` |
| 0.7% |       9 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
| 0.7% |       9 | `Node_Backward_Iterator::next`                                                                                                                           | `libjvm.dylib`             |

#### Categories

##### Compiler

|    % | Samples | Function                                    | Location       |
| ---: | ------: | ------------------------------------------- | -------------- |
| 1.2% |      16 | `IndexSetIterator::advance_and_next`        | `libjvm.dylib` |
| 1.1% |      14 | `LIR_OpVisitState::visit`                   | `libjvm.dylib` |
| 1.0% |      13 | `PhaseChaitin::build_ifg_physical`          | `libjvm.dylib` |
| 1.0% |      13 | `PhaseChaitin::Split`                       | `libjvm.dylib` |
| 0.9% |      12 | `LinearScanWalker::alloc_free_reg`          | `libjvm.dylib` |
| 0.8% |      11 | `PhaseLive::compute`                        | `libjvm.dylib` |
| 0.8% |      11 | `PhaseIdealLoop::build_loop_late`           | `libjvm.dylib` |
| 0.7% |       9 | `IntervalWalker::walk_to`                   | `libjvm.dylib` |
| 0.7% |       9 | `Node_Backward_Iterator::next`              | `libjvm.dylib` |
| 0.6% |       8 | `ciObjectFactory::get_metadata`             | `libjvm.dylib` |
| 0.6% |       8 | `PhaseLive::add_liveout`                    | `libjvm.dylib` |
| 0.6% |       8 | `PhaseChaitin::elide_copy`                  | `libjvm.dylib` |
| 0.6% |       8 | `Compile::identify_useful_nodes`            | `libjvm.dylib` |
| 0.5% |       7 | `PhaseChaitin::gather_lrg_masks`            | `libjvm.dylib` |
| 0.5% |       7 | `PhaseIdealLoop::Dominators`                | `libjvm.dylib` |
| 0.5% |       6 | `LinearScan::assign_reg_num`                | `libjvm.dylib` |
| 0.5% |       6 | `PhaseIdealLoop::build_loop_early`          | `libjvm.dylib` |
| 0.5% |       6 | `Node::dominates`                           | `libjvm.dylib` |
| 0.5% |       6 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |
| 0.4% |       5 | `LinearScan::build_intervals`               | `libjvm.dylib` |

##### Native

|    % | Samples | Function                                                                                                                                                 | Location                   |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 4.3% |      56 | `inflate_fast`                                                                                                                                           | `libzip.dylib`             |
| 1.7% |      22 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`             |
| 1.6% |      21 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
| 1.4% |      18 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
| 1.2% |      15 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 1.1% |      14 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| 1.1% |      14 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |
| 0.9% |      12 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                           | `libjvm.dylib`             |
| 0.9% |      12 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
| 0.7% |       9 | `_platform_memmove`                                                                                                                                      | `libsystem_platform.dylib` |
| 0.7% |       9 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
| 0.6% |       8 | `sys_icache_invalidate`                                                                                                                                  | `libsystem_platform.dylib` |
| 0.5% |       7 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>`                             | `libjvm.dylib`             |
| 0.4% |       5 | `fwd_copy_again`                                                                                                                                         | `libjvm.dylib`             |
| 0.4% |       5 | `G1CardSet::add_card`                                                                                                                                    | `libjvm.dylib`             |
| 0.4% |       5 | `SymbolTable::new_symbol`                                                                                                                                | `libjvm.dylib`             |
| 0.4% |       5 | `bsearch`                                                                                                                                                | `libsystem_c.dylib`        |
| 0.4% |       5 | `ClassFileParser::skip_over_field_signature`                                                                                                             | `libjvm.dylib`             |
| 0.3% |       4 | `mach_absolute_time`                                                                                                                                     | `libsystem_kernel.dylib`   |
| 0.3% |       4 | `resource_allocate_bytes`                                                                                                                                | `libjvm.dylib`             |

##### Ours

|    % | Samples | Function                                                                                                                                                                                                           | Location                                                                                                                                            |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.2% |       3 | `getConeType()`                                                                                                                                                                                                    | `org.jetbrains.kotlin.fir.types.impl.FirResolvedTypeRefImpl`                                                                                        |
| 0.2% |       2 | `resolveUserType(FirUserTypeRef, FirTypeCandidateCollector$TypeResolutionResult, boolean, FirDeclaration, boolean)`                                                                                                | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl`                                                                               |
| 0.1% |       1 | `mergeFrom(ProtoBuf$Annotation)`                                                                                                                                                                                   | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Builder`                                                                                         |
| 0.1% |       1 | `convertFunctionDeclaration(LighterASTNode)`                                                                                                                                                                       | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder`                                                                    |
| 0.1% |       1 | `doValidityChecks(PsiBuilderImpl$StartMarker, PsiBuilderImpl$StartMarker)`                                                                                                                                         | `com.intellij.lang.impl.PsiBuilderImpl`                                                                                                             |
| 0.1% |       1 | `parseFile()`                                                                                                                                                                                                      | `org.jetbrains.kotlin.parsing.KotlinParsing`                                                                                                        |
| 0.1% |       1 | `readSourceFileWithMapping(InputStreamReader)`                                                                                                                                                                     | `org.jetbrains.kotlin.KtSourceFileLinesMappingKt`                                                                                                   |
| 0.1% |       1 | `getChildren(LighterASTNode, Ref)`                                                                                                                                                                                 | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure`                                                                                             |
| 0.1% |       1 | `advance()`                                                                                                                                                                                                        | `org.jetbrains.kotlin.lexer._JetLexer`                                                                                                              |
| 0.1% |       1 | `removeLast(List)`                                                                                                                                                                                                 | `org.jetbrains.kotlin.fir.builder.AbstractRawFirBuilder`                                                                                            |
| 0.1% |       1 | `makeErrorListener(KtSourceFile)`                                                                                                                                                                                  | `org.jetbrains.kotlin.fir.lightTree.LightTree2Fir`                                                                                                  |
| 0.1% |       1 | `doTravelPath(int, List, int, List)`                                                                                                                                                                               | `org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesIndexImpl`                                                                                       |
| 0.1% |       1 | `processClassifiersByNameWithSubstitution(Name, Function2)`                                                                                                                                                        | `org.jetbrains.kotlin.fir.scopes.impl.FirPackageMemberScope`                                                                                        |
| 0.1% |       1 | `<init>(FirModuleData, NameResolver, TypeTable, AnnotationDeserializer, FirTypeDeserializer$FlexibleTypeFactory, List, FirTypeDeserializer, FirBasedSymbol)`                                                       | `org.jetbrains.kotlin.fir.deserialization.FirTypeDeserializer`                                                                                      |
| 0.1% |       1 | `createDeepCopy(FirQualifierPart)`                                                                                                                                                                                 | `org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`                                              |
| 0.1% |       1 | `readUtfNonAscii(int, int, int, char[])`                                                                                                                                                                           | `org.jetbrains.org.objectweb.asm.ClassReader`                                                                                                       |
| 0.1% |       1 | `visitArray(Name)`                                                                                                                                                                                                 | `org.jetbrains.kotlin.load.kotlin.header.ReadKotlinClassHeaderAnnotationVisitor$KotlinMetadataArgumentVisitor`                                      |
| 0.1% |       1 | `getOwnDeprecation(LanguageVersionSettings)`                                                                                                                                                                       | `org.jetbrains.kotlin.fir.symbols.impl.FirClassLikeSymbol`                                                                                          |
| 0.1% |       1 | `collectCandidates(FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                                                                                            |
| 0.1% |       1 | `transformLegacyRawContractDescriptionOwner(FirContractDescriptionOwner, FirLegacyRawContractDescription, boolean)`                                                                                                | `org.jetbrains.kotlin.fir.resolve.transformers.contracts.FirAbstractContractResolveTransformerDispatcher$FirDeclarationsContractResolveTransformer` |

##### Standard library

|    % | Samples | Function                                                                                     | Location                                                                 |
| ---: | ------: | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 0.3% |       4 | `checkNotNullParameter(Object, String)`                                                      | `kotlin.jvm.internal.Intrinsics`                                         |
| 0.2% |       3 | `allowSecurityManager()`                                                                     | `java.lang.System`                                                       |
| 0.2% |       2 | `sanitizeStackTrace(Throwable)`                                                              | `kotlin.jvm.internal.Intrinsics`                                         |
| 0.1% |       1 | `get(int)`                                                                                   | `java.util.ArrayList`                                                    |
| 0.1% |       1 | `resize()`                                                                                   | `java.util.HashMap`                                                      |
| 0.1% |       1 | `hashCode()`                                                                                 | `jdk.internal.module.ModuleReferenceImpl`                                |
| 0.1% |       1 | `exists()`                                                                                   | `java.io.File`                                                           |
| 0.1% |       1 | `reset()`                                                                                    | `java.util.regex.Matcher`                                                |
| 0.1% |       1 | `<init>(Map)`                                                                                | `java.util.LinkedHashMap`                                                |
| 0.1% |       1 | `next()`                                                                                     | `kotlin.reflect.jvm.internal.impl.protobuf.SmallSortedMap$EntryIterator` |
| 0.1% |       1 | `<init>(TypeConstructor, List, TypeAttributes, boolean)`                                     | `kotlin.reflect.jvm.internal.impl.types.KotlinTypeFactory$$Lambda$0`     |
| 0.1% |       1 | `checkForTypeAlias(Class)`                                                                   | `java.lang.invoke.MemberName`                                            |
| 0.1% |       1 | `<init>(MethodType, LambdaForm, MemberName, boolean)`                                        | `java.lang.invoke.DirectMethodHandle`                                    |
| 0.1% |       1 | `hash(int, String, String)`                                                                  | `jdk.internal.org.objectweb.asm.SymbolTable`                             |
| 0.1% |       1 | `changeReferenceKind(byte, byte)`                                                            | `java.lang.invoke.MemberName`                                            |
| 0.1% |       1 | `<init>(String, String, LambdaForm, MethodType)`                                             | `java.lang.invoke.InvokerBytecodeGenerator`                              |
| 0.1% |       1 | `copyMemoryInternal(MemorySessionImpl, MemorySessionImpl, Object, long, Object, long, long)` | `jdk.internal.misc.ScopedMemoryAccess`                                   |
| 0.1% |       1 | `compress(char[], int, byte[], int, int)`                                                    | `java.lang.StringUTF16`                                                  |
| 0.1% |       1 | `calcNext()`                                                                                 | `kotlin.sequences.FilteringSequence$iterator$1`                          |
| 0.1% |       1 | `iterator()`                                                                                 | `java.util.AbstractList`                                                 |

##### JIT

|    % | Samples | Function                     | Location    |
| ---: | ------: | ---------------------------- | ----------- |
| 0.5% |       6 | `I2C/C2I adapters(0xbb)`     | `<unknown>` |
| 0.4% |       5 | `I2C/C2I adapters(0xb)`      | `<unknown>` |
| 0.3% |       4 | `zero_blocks`                | `<unknown>` |
| 0.2% |       2 | `I2C/C2I adapters(0xbbb)`    | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbabbbb)` | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbab)`   | `<unknown>` |
| 0.1% |       1 | `vtable stub`                | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       4 | `kotlin.jvm.internal.Intrinsics:130` |

##### `getConeType()` (`org.jetbrains.kotlin.fir.types.impl.FirResolvedTypeRefImpl`)

|      % | Samples | Location                                                        |
| -----: | ------: | --------------------------------------------------------------- |
| 100.0% |       3 | `org.jetbrains.kotlin.fir.types.impl.FirResolvedTypeRefImpl:29` |

##### `allowSecurityManager()` (`java.lang.System`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       3 | `java.lang.System:212` |

##### `resolveUserType(FirUserTypeRef, FirTypeCandidateCollector$TypeResolutionResult, boolean, FirDeclaration, boolean)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl`)

|     % | Samples | Location                                                                  |
| ----: | ------: | ------------------------------------------------------------------------- |
| 50.0% |       1 | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl:267` |
| 50.0% |       1 | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl:248` |

##### `sanitizeStackTrace(Throwable)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       2 | `kotlin.jvm.internal.Intrinsics:253` |

##### `mergeFrom(ProtoBuf$Annotation)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Builder`)

|      % | Samples | Location                                                         |
| -----: | ------: | ---------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Builder:4483` |

##### `convertFunctionDeclaration(LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder`)

|      % | Samples | Location                                                                              |
| -----: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder:2020` |

##### `doValidityChecks(PsiBuilderImpl$StartMarker, PsiBuilderImpl$StartMarker)` (`com.intellij.lang.impl.PsiBuilderImpl`)

|      % | Samples | Location                                    |
| -----: | ------: | ------------------------------------------- |
| 100.0% |       1 | `com.intellij.lang.impl.PsiBuilderImpl:955` |

##### `parseFile()` (`org.jetbrains.kotlin.parsing.KotlinParsing`)

|      % | Samples | Location                                         |
| -----: | ------: | ------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.parsing.KotlinParsing:173` |

##### `readSourceFileWithMapping(InputStreamReader)` (`org.jetbrains.kotlin.KtSourceFileLinesMappingKt`)

|      % | Samples | Location                                              |
| -----: | ------: | ----------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.KtSourceFileLinesMappingKt:103` |

##### `getChildren(LighterASTNode, Ref)` (`com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure`)

|      % | Samples | Location                                                     |
| -----: | ------: | ------------------------------------------------------------ |
| 100.0% |       1 | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure:1632` |

##### `advance()` (`org.jetbrains.kotlin.lexer._JetLexer`)

|      % | Samples | Location                                    |
| -----: | ------: | ------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.lexer._JetLexer:1001` |

##### `removeLast(List)` (`org.jetbrains.kotlin.fir.builder.AbstractRawFirBuilder`)

|      % | Samples | Location                                                     |
| -----: | ------: | ------------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.builder.AbstractRawFirBuilder:303` |

##### `makeErrorListener(KtSourceFile)` (`org.jetbrains.kotlin.fir.lightTree.LightTree2Fir`)

|      % | Samples | Location                                              |
| -----: | ------: | ----------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.lightTree.LightTree2Fir:57` |

##### `doTravelPath(int, List, int, List)` (`org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesIndexImpl`)

|      % | Samples | Location                                                          |
| -----: | ------: | ----------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesIndexImpl:211` |

##### `processClassifiersByNameWithSubstitution(Name, Function2)` (`org.jetbrains.kotlin.fir.scopes.impl.FirPackageMemberScope`)

|      % | Samples | Location                                                        |
| -----: | ------: | --------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.scopes.impl.FirPackageMemberScope:85` |

##### `<init>(FirModuleData, NameResolver, TypeTable, AnnotationDeserializer, FirTypeDeserializer$FlexibleTypeFactory, List, FirTypeDeserializer, FirBasedSymbol)` (`org.jetbrains.kotlin.fir.deserialization.FirTypeDeserializer`)

|      % | Samples | Location                                                          |
| -----: | ------: | ----------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.deserialization.FirTypeDeserializer:52` |

##### `createDeepCopy(FirQualifierPart)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`)

|      % | Samples | Location                                                                                                   |
| -----: | ------: | ---------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer:726` |

##### `readUtfNonAscii(int, int, int, char[])` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % | Samples | Location                                           |
| -----: | ------: | -------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.org.objectweb.asm.ClassReader:3851` |

##### `visitArray(Name)` (`org.jetbrains.kotlin.load.kotlin.header.ReadKotlinClassHeaderAnnotationVisitor$KotlinMetadataArgumentVisitor`)

|      % | Samples | Location                                                                                                           |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.load.kotlin.header.ReadKotlinClassHeaderAnnotationVisitor$KotlinMetadataArgumentVisitor:191` |

##### `getOwnDeprecation(LanguageVersionSettings)` (`org.jetbrains.kotlin.fir.symbols.impl.FirClassLikeSymbol`)

|      % | Samples | Location                                                      |
| -----: | ------: | ------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.symbols.impl.FirClassLikeSymbol:40` |

##### `collectCandidates(FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext)` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

|      % | Samples | Location                                                     |
| -----: | ------: | ------------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver:321` |

##### `transformLegacyRawContractDescriptionOwner(FirContractDescriptionOwner, FirLegacyRawContractDescription, boolean)` (`org.jetbrains.kotlin.fir.resolve.transformers.contracts.FirAbstractContractResolveTransformerDispatcher$FirDeclarationsContractResolveTransformer`)

|      % | Samples | Location                                                                                                                                                |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.resolve.transformers.contracts.FirAbstractContractResolveTransformerDispatcher$FirDeclarationsContractResolveTransformer:532` |

##### `get(int)` (`java.util.ArrayList`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |       1 | `java.util.ArrayList:427` |

##### `resize()` (`java.util.HashMap`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.util.HashMap:726` |

##### `hashCode()` (`jdk.internal.module.ModuleReferenceImpl`)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       1 | `jdk.internal.module.ModuleReferenceImpl:160` |

##### `exists()` (`java.io.File`)

|      % | Samples | Location           |
| -----: | ------: | ------------------ |
| 100.0% |       1 | `java.io.File:833` |

##### `reset()` (`java.util.regex.Matcher`)

|      % | Samples | Location                      |
| -----: | ------: | ----------------------------- |
| 100.0% |       1 | `java.util.regex.Matcher:461` |

##### `<init>(Map)` (`java.util.LinkedHashMap`)

|      % | Samples | Location                      |
| -----: | ------: | ----------------------------- |
| 100.0% |       1 | `java.util.LinkedHashMap:478` |

##### `next()` (`kotlin.reflect.jvm.internal.impl.protobuf.SmallSortedMap$EntryIterator`)

|      % | Samples | Location                                                                     |
| -----: | ------: | ---------------------------------------------------------------------------- |
| 100.0% |       1 | `kotlin.reflect.jvm.internal.impl.protobuf.SmallSortedMap$EntryIterator:549` |

##### `checkForTypeAlias(Class)` (`java.lang.invoke.MemberName`)

|      % | Samples | Location                          |
| -----: | ------: | --------------------------------- |
| 100.0% |       1 | `java.lang.invoke.MemberName:809` |

##### `<init>(MethodType, LambdaForm, MemberName, boolean)` (`java.lang.invoke.DirectMethodHandle`)

|      % | Samples | Location                                 |
| -----: | ------: | ---------------------------------------- |
| 100.0% |       1 | `java.lang.invoke.DirectMethodHandle:57` |

##### `hash(int, String, String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|      % | Samples | Location                                          |
| -----: | ------: | ------------------------------------------------- |
| 100.0% |       1 | `jdk.internal.org.objectweb.asm.SymbolTable:1281` |

##### `changeReferenceKind(byte, byte)` (`java.lang.invoke.MemberName`)

|      % | Samples | Location                          |
| -----: | ------: | --------------------------------- |
| 100.0% |       1 | `java.lang.invoke.MemberName:328` |

##### `<init>(String, String, LambdaForm, MethodType)` (`java.lang.invoke.InvokerBytecodeGenerator`)

|      % | Samples | Location                                        |
| -----: | ------: | ----------------------------------------------- |
| 100.0% |       1 | `java.lang.invoke.InvokerBytecodeGenerator:165` |

##### `copyMemoryInternal(MemorySessionImpl, MemorySessionImpl, Object, long, Object, long, long)` (`jdk.internal.misc.ScopedMemoryAccess`)

|      % | Samples | Location                                   |
| -----: | ------: | ------------------------------------------ |
| 100.0% |       1 | `jdk.internal.misc.ScopedMemoryAccess:149` |

##### `compress(char[], int, byte[], int, int)` (`java.lang.StringUTF16`)

|      % | Samples | Location                    |
| -----: | ------: | --------------------------- |
| 100.0% |       1 | `java.lang.StringUTF16:383` |

##### `calcNext()` (`kotlin.sequences.FilteringSequence$iterator$1`)

|      % | Samples | Location                                            |
| -----: | ------: | --------------------------------------------------- |
| 100.0% |       1 | `kotlin.sequences.FilteringSequence$iterator$1:204` |

##### `iterator()` (`java.util.AbstractList`)

|      % | Samples | Location                     |
| -----: | ------: | ---------------------------- |
| 100.0% |       1 | `java.util.AbstractList:301` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `inflate_fast` (`libzip.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |      56 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `SymbolTable::do_lookup` (`libjvm.dylib`)

|     % | Samples | Caller                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 77.3% |      17 | `SymbolTable::lookup_only`                     | `libjvm.dylib` |
| 18.2% |       4 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |
|  4.5% |       1 | `SymbolTable::new_symbol`                      | `libjvm.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |      21 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|     % | Samples | Caller                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 11.1% |       2 | `LinearScan::build_intervals`                 | `libjvm.dylib` |
|  5.6% |       1 | `LinearScan::compute_debug_info_for_scope`    | `libjvm.dylib` |
|  5.6% |       1 | `LinearScan::append_scope_value_for_constant` | `libjvm.dylib` |
|  5.6% |       1 | `DataLayout::data_in`                         | `libjvm.dylib` |
|  5.6% |       1 | `Invoke::Invoke`                              | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|     % | Samples | Caller                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 56.3% |       9 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |
| 12.5% |       2 | `PhaseIFG::SquareUp`               | `libjvm.dylib` |
|  6.3% |       1 | `PhaseLive::add_liveout`           | `libjvm.dylib` |
|  6.3% |       1 | `PhaseIFG::effective_degree`       | `libjvm.dylib` |
|  6.3% |       1 | `PhaseIFG::re_insert`              | `libjvm.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |      15 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `LIR_OpVisitState::visit` (`libjvm.dylib`)

|     % | Samples | Caller                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 35.7% |       5 | `LinearScan::build_intervals`         | `libjvm.dylib` |
| 35.7% |       5 | `LinearScan::assign_reg_num`          | `libjvm.dylib` |
| 28.6% |       4 | `LinearScan::compute_local_live_sets` | `libjvm.dylib` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

|     % | Samples | Caller                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 85.7% |      12 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
| 14.3% |       2 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                              | Location       |
| ----: | ------: | ----------------------------------- | -------------- |
| 21.4% |       3 | `jni_GetPrimitiveArrayCritical`     | `libjvm.dylib` |
| 21.4% |       3 | `Unsafe_AllocateInstance`           | `libjvm.dylib` |
| 14.3% |       2 | `jni_ReleasePrimitiveArrayCritical` | `libjvm.dylib` |
| 14.3% |       2 | `InterpreterRuntime::anewarray`     | `libjvm.dylib` |
|  7.1% |       1 | `Unsafe_PutReferenceVolatile`       | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      13 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      13 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|     % | Samples | Caller                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 91.7% |      11 | `void G1CMTask::process_grey_task_entry<true>` | `libjvm.dylib` |
|  8.3% |       1 | `G1CMTask::drain_local_queue`                  | `libjvm.dylib` |

##### `LinearScanWalker::alloc_free_reg` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      12 | `LinearScanWalker::activate_current` | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|    % | Samples | Caller                              | Location       |
| ---: | ------: | ----------------------------------- | -------------- |
| 8.3% |       1 | `GraphBuilder::push_scope`          | `libjvm.dylib` |
| 8.3% |       1 | `Matcher::ReduceInst`               | `libjvm.dylib` |
| 8.3% |       1 | `Compile::remove_speculative_types` | `libjvm.dylib` |
| 8.3% |       1 | `GraphKit::create_and_map_if`       | `libjvm.dylib` |
| 8.3% |       1 | `ClassFileParser::parse_stream`     | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      11 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      11 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `IntervalWalker::walk_to` (`libjvm.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 88.9% |       8 | `IntervalWalker::walk_to`        | `libjvm.dylib` |
| 11.1% |       1 | `LinearScan::allocate_registers` | `libjvm.dylib` |

##### `_platform_memmove` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                    | Location        |
| ----: | ------: | ----------------------------------------- | --------------- |
| 22.2% |       2 | `PhaseOutput::Output`                     | `libjvm.dylib`  |
| 22.2% |       2 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib` |
| 11.1% |       1 | `nmethod::nmethod`                        | `libjvm.dylib`  |
| 11.1% |       1 | `Node_Array::grow`                        | `libjvm.dylib`  |
| 11.1% |       1 | `ClassFileParser::parse_methods`          | `libjvm.dylib`  |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 88.9% |       8 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |
| 11.1% |       1 | `InstanceKlass::find_method`            | `libjvm.dylib` |

##### `Node_Backward_Iterator::next` (`libjvm.dylib`)

|     % | Samples | Caller                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 55.6% |       5 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |
| 44.4% |       4 | `PhaseCFG::schedule_late`      | `libjvm.dylib` |

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

|     % | Samples | Caller                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 25.0% |       2 | `ciReceiverTypeData::translate_receiver_data_from` | `libjvm.dylib` |
| 25.0% |       2 | `ciEnv::get_klass_by_index_impl`                   | `libjvm.dylib` |
| 12.5% |       1 | `ciBytecodeStream::get_method`                     | `libjvm.dylib` |
| 12.5% |       1 | `ciObjectFactory::get`                             | `libjvm.dylib` |
| 12.5% |       1 | `ciObject::klass`                                  | `libjvm.dylib` |

##### `PhaseLive::add_liveout` (`libjvm.dylib`)

|     % | Samples | Caller                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 87.5% |       7 | `PhaseLive::compute`              | `libjvm.dylib` |
| 12.5% |       1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       8 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `Compile::identify_useful_nodes` (`libjvm.dylib`)

|     % | Samples | Caller                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 62.5% |       5 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |
| 37.5% |       3 | `PhaseRemoveUseless::PhaseRemoveUseless`      | `libjvm.dylib` |

##### `sys_icache_invalidate` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                       | Location       |
| ----: | ------: | -------------------------------------------- | -------------- |
| 25.0% |       2 | `CompiledIC::set_to_monomorphic`             | `libjvm.dylib` |
| 12.5% |       1 | `CodeBuffer::copy_code_to`                   | `libjvm.dylib` |
| 12.5% |       1 | `nmethod::nmethod`                           | `libjvm.dylib` |
| 12.5% |       1 | `SharedRuntime::resolve_sub_helper`          | `libjvm.dylib` |
| 12.5% |       1 | `SharedRuntime::resolve_sub_helper_internal` | `libjvm.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       7 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       7 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|      % | Samples | Caller                                            | Location       |
| -----: | ------: | ------------------------------------------------- | -------------- |
| 100.0% |       7 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib` |

##### `LinearScan::assign_reg_num` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |       6 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       6 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Node::dominates` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |       6 | `MemNode::all_controls_dominate` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       6 | `PhaseIdealLoop::build_loop_late` | `libjvm.dylib` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|     % | Samples | Caller                                                                                       | Location                                                                                  |
| ----: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 16.7% |       1 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                 | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                    |
| 16.7% |       1 | `<init>(FirClassSymbol, ConeKotlinType, InaccessibleReceiverKind, FirSession, ScopeSession)` | `org.jetbrains.kotlin.fir.resolve.calls.InaccessibleImplicitReceiverValue`                |
| 16.7% |       1 | `hasNothingSupertype(TypeCheckerState, TypeSystemContext, RigidTypeMarker)`                  | `org.jetbrains.kotlin.types.AbstractTypeChecker`                                          |
| 16.7% |       1 | `processPropertiesByName(Name, Function1)`                                                   | `org.jetbrains.kotlin.fir.scopes.impl.FirLocalScope`                                      |
| 16.7% |       1 | `removeExactAttribute(ConeKotlinType)`                                                       | `org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer` |

##### `LinearScan::build_intervals` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |       5 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `fwd_copy_again` (`libjvm.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |       5 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |

##### `G1CardSet::add_card` (`libjvm.dylib`)

|      % | Samples | Caller                                                                                                 | Location       |
| -----: | ------: | ------------------------------------------------------------------------------------------------------ | -------------- |
| 100.0% |       5 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib` |

##### `SymbolTable::new_symbol` (`libjvm.dylib`)

|     % | Samples | Caller                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 40.0% |       2 | `ciEnv::get_klass_by_name_impl` | `libjvm.dylib` |
| 40.0% |       2 | `SignatureStream::find_symbol`  | `libjvm.dylib` |
| 20.0% |       1 | `InstanceKlass::set_package`    | `libjvm.dylib` |

##### `bsearch` (`libsystem_c.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |       5 | `encoding_for_logical_immediate` | `libjvm.dylib` |

##### `ClassFileParser::skip_over_field_signature` (`libjvm.dylib`)

|     % | Samples | Caller                                           | Location       |
| ----: | ------: | ------------------------------------------------ | -------------- |
| 60.0% |       3 | `ClassFileParser::verify_legal_method_signature` | `libjvm.dylib` |
| 40.0% |       2 | `ClassFileParser::parse_localvariable_table`     | `libjvm.dylib` |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|     % | Samples | Caller                                                              | Location                                                                                     |
| ----: | ------: | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 20.0% |       1 | `parseTypeConstraintsGuarded(boolean)`                              | `org.jetbrains.kotlin.parsing.KotlinParsing`                                                 |
| 20.0% |       1 | `hasExtensionKinds()`                                               | `org.jetbrains.kotlin.builtins.functions.FunctionTypeKindExtractor`                          |
| 20.0% |       1 | `toResolvedReference(FirNamedReferenceWithCandidate)`               | `org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer`    |
| 20.0% |       1 | `check(CheckerContext, DiagnosticReporter, FirTypeParameter)`       | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirTypeParameterVarianceChecker`     |
| 20.0% |       1 | `check(CheckerContext, DiagnosticReporter, FirCallableDeclaration)` | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirExtensionShadowedByMemberChecker` |

##### `mach_absolute_time` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                     | Location                        |
| ----: | ------: | -------------------------- | ------------------------------- |
| 75.0% |       3 | `os::elapsed_counter`      | `libjvm.dylib`                  |
| 25.0% |       1 | `addElapsedTimeFrom(long)` | `jdk.internal.perf.PerfCounter` |

##### `resource_allocate_bytes` (`libjvm.dylib`)

|     % | Samples | Caller                                      | Location       |
| ----: | ------: | ------------------------------------------- | -------------- |
| 25.0% |       1 | `BlockListBuilder::make_block_at`           | `libjvm.dylib` |
| 25.0% |       1 | `FrameMap::java_calling_convention`         | `libjvm.dylib` |
| 25.0% |       1 | `GraphBuilder::ScopeData::add_to_work_list` | `libjvm.dylib` |
| 25.0% |       1 | `ConnectionGraph::split_memory_phi`         | `libjvm.dylib` |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|     % | Samples | Caller                                                                           | Location                                                                               |
| ----: | ------: | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| 25.0% |       1 | `<init>(ConstraintKind, Set, OnlyInputTypeConstraintPosition, boolean, boolean)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintContext`            |
| 25.0% |       1 | `extractValue(AbstractArrayMapOwner)`                                            | `org.jetbrains.kotlin.util.AbstractArrayMapOwner$AbstractArrayMapAccessor`             |
| 25.0% |       1 | `checkSyntax(CheckerContext, DiagnosticReporter, FirElement)`                    | `org.jetbrains.kotlin.fir.analysis.checkers.syntax.FirSyntaxChecker`                   |
| 25.0% |       1 | `addTypeParameters$org_jetbrains_kotlin_frontend_common_jvm(Collection)`         | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.ClassifierResolutionContext` |

##### `zero_blocks` (`<unknown>`)

|      % | Samples | Caller        | Location                        |
| -----: | ------: | ------------- | ------------------------------- |
| 100.0% |       4 | `<init>(int)` | `java.io.ByteArrayOutputStream` |

##### `getConeType()` (`org.jetbrains.kotlin.fir.types.impl.FirResolvedTypeRefImpl`)

|     % | Samples | Caller                                                          | Location                                                                                                 |
| ----: | ------: | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 66.7% |       2 | `transformTypeRef(FirTypeRef, ResolutionMode)`                  | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
| 33.3% |       1 | `check(CheckerContext, DiagnosticReporter, FirResolvedTypeRef)` | `org.jetbrains.kotlin.fir.analysis.checkers.type.FirProjectionRelationChecker`                           |

##### `allowSecurityManager()` (`java.lang.System`)

|      % | Samples | Caller                 | Location           |
| -----: | ------: | ---------------------- | ------------------ |
| 100.0% |       3 | `getSecurityManager()` | `java.lang.System` |

##### `resolveUserType(FirUserTypeRef, FirTypeCandidateCollector$TypeResolutionResult, boolean, FirDeclaration, boolean)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl`)

|      % | Samples | Caller                                                                                                        | Location                                                              |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| 100.0% |       2 | `resolveType(FirTypeRef, TypeResolutionConfiguration, boolean, boolean, boolean, SupertypeSupplier, boolean)` | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl` |

##### `sanitizeStackTrace(Throwable)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Caller                            | Location                         |
| -----: | ------: | --------------------------------- | -------------------------------- |
| 100.0% |       2 | `throwParameterIsNullNPE(String)` | `kotlin.jvm.internal.Intrinsics` |

##### `I2C/C2I adapters(0xbbb)` (`<unknown>`)

|     % | Samples | Caller                       | Location                                               |
| ----: | ------: | ---------------------------- | ------------------------------------------------------ |
| 50.0% |       1 | `accept(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.expressions.FirFunctionCall` |
| 50.0% |       1 | `visitBranch(IrBranch)`      | `org.jetbrains.kotlin.ir.visitors.IrVisitorVoid`       |

##### `mergeFrom(ProtoBuf$Annotation)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Builder`)

|      % | Samples | Caller                                               | Location                                                    |
| -----: | ------: | ---------------------------------------------------- | ----------------------------------------------------------- |
| 100.0% |       1 | `mergeFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Builder` |

##### `convertFunctionDeclaration(LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder`)

|      % | Samples | Caller                                                                | Location                                                                         |
| -----: | ------: | --------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| 100.0% |       1 | `convertFile(LighterASTNode, KtSourceFile, KtSourceFileLinesMapping)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder` |

##### `doValidityChecks(PsiBuilderImpl$StartMarker, PsiBuilderImpl$StartMarker)` (`com.intellij.lang.impl.PsiBuilderImpl`)

|      % | Samples | Caller                                                                        | Location                                |
| -----: | ------: | ----------------------------------------------------------------------------- | --------------------------------------- |
| 100.0% |       1 | `processDone(PsiBuilderImpl$StartMarker, String, PsiBuilderImpl$StartMarker)` | `com.intellij.lang.impl.PsiBuilderImpl` |

##### `parseFile()` (`org.jetbrains.kotlin.parsing.KotlinParsing`)

|      % | Samples | Caller                       | Location                                         |
| -----: | ------: | ---------------------------- | ------------------------------------------------ |
| 100.0% |       1 | `parse(PsiBuilder, boolean)` | `org.jetbrains.kotlin.parsing.KotlinLightParser` |

##### `readSourceFileWithMapping(InputStreamReader)` (`org.jetbrains.kotlin.KtSourceFileLinesMappingKt`)

|      % | Samples | Caller                                                                        | Location                                       |
| -----: | ------: | ----------------------------------------------------------------------------- | ---------------------------------------------- |
| 100.0% |       1 | `buildFirViaLightTree(FirSession, Collection, DiagnosticReporter, Function2)` | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt` |

##### `getChildren(LighterASTNode, Ref)` (`com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure`)

|      % | Samples | Caller                     | Location                                                |
| -----: | ------: | -------------------------- | ------------------------------------------------------- |
| 100.0% |       1 | `getChildren(Object, Ref)` | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure` |

##### `advance()` (`org.jetbrains.kotlin.lexer._JetLexer`)

|      % | Samples | Caller          | Location                         |
| -----: | ------: | --------------- | -------------------------------- |
| 100.0% |       1 | `locateToken()` | `com.intellij.lexer.FlexAdapter` |

##### `removeLast(List)` (`org.jetbrains.kotlin.fir.builder.AbstractRawFirBuilder`)

|      % | Samples | Caller              | Location    |
| -----: | ------: | ------------------- | ----------- |
| 100.0% |       1 | `break_stack_range` | `<unknown>` |

##### `makeErrorListener(KtSourceFile)` (`org.jetbrains.kotlin.fir.lightTree.LightTree2Fir`)

|      % | Samples | Caller                                                               | Location                                           |
| -----: | ------: | -------------------------------------------------------------------- | -------------------------------------------------- |
| 100.0% |       1 | `buildFirFile(CharSequence, KtSourceFile, KtSourceFileLinesMapping)` | `org.jetbrains.kotlin.fir.lightTree.LightTree2Fir` |

##### `doTravelPath(int, List, int, List)` (`org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesIndexImpl`)

|      % | Samples | Caller                                     | Location                                                      |
| -----: | ------: | ------------------------------------------ | ------------------------------------------------------------- |
| 100.0% |       1 | `travelPath(int, FqName, List, int, List)` | `org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesIndexImpl` |

##### `processClassifiersByNameWithSubstitution(Name, Function2)` (`org.jetbrains.kotlin.fir.scopes.impl.FirPackageMemberScope`)

|      % | Samples | Caller                                                                                   | Location                                                              |
| -----: | ------: | ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| 100.0% |       1 | `iterateScopesWithSubstitution(TypeResolutionConfiguration, Name, Function3, Function0)` | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl` |

##### `<init>(FirModuleData, NameResolver, TypeTable, AnnotationDeserializer, FirTypeDeserializer$FlexibleTypeFactory, List, FirTypeDeserializer, FirBasedSymbol)` (`org.jetbrains.kotlin.fir.deserialization.FirTypeDeserializer`)

|      % | Samples | Caller                                                                                                                                                                                                                                                                                                          | Location                                                                       |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 100.0% |       1 | `createRootContext(NameResolver, TypeTable, FirModuleData, VersionRequirementTable, AnnotationDeserializer, FirTypeDeserializer$FlexibleTypeFactory, FirConstDeserializer, FirKDocDeserializer, FqName, FqName, List, DeserializedContainerSource, FirRegularClassSymbol, EffectiveVisibility, FirBasedSymbol)` | `org.jetbrains.kotlin.fir.deserialization.FirDeserializationContext$Companion` |

##### `createDeepCopy(FirQualifierPart)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`)

|      % | Samples | Caller                                    | Location                                                                                               |
| -----: | ------: | ----------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| 100.0% |       1 | `createDeepCopyOfTypeRef(FirUserTypeRef)` | `org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer` |

##### `readUtfNonAscii(int, int, int, char[])` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % | Samples | Caller                      | Location                                      |
| -----: | ------: | --------------------------- | --------------------------------------------- |
| 100.0% |       1 | `readUtf(int, int, char[])` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `visitArray(Name)` (`org.jetbrains.kotlin.load.kotlin.header.ReadKotlinClassHeaderAnnotationVisitor$KotlinMetadataArgumentVisitor`)

|      % | Samples | Caller               | Location                                                  |
| -----: | ------: | -------------------- | --------------------------------------------------------- |
| 100.0% |       1 | `visitArray(String)` | `org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass$3` |

##### `getOwnDeprecation(LanguageVersionSettings)` (`org.jetbrains.kotlin.fir.symbols.impl.FirClassLikeSymbol`)

|      % | Samples | Caller                                     | Location                                                             |
| -----: | ------: | ------------------------------------------ | -------------------------------------------------------------------- |
| 100.0% |       1 | `isDeprecationLevelHidden(FirBasedSymbol)` | `org.jetbrains.kotlin.fir.declarations.FirHiddenDeprecationProvider` |

##### `collectCandidates(FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext)` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

|      % | Samples | Caller                                                                                                                                                                                                                                                   | Location                                                 |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| 100.0% |       1 | `collectCandidates$default(FirCallResolver, FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver` |

##### `transformLegacyRawContractDescriptionOwner(FirContractDescriptionOwner, FirLegacyRawContractDescription, boolean)` (`org.jetbrains.kotlin.fir.resolve.transformers.contracts.FirAbstractContractResolveTransformerDispatcher$FirDeclarationsContractResolveTransformer`)

|      % | Samples | Caller                                                           | Location                                                                                                                                            |
| -----: | ------: | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `transformContractDescriptionOwner(FirContractDescriptionOwner)` | `org.jetbrains.kotlin.fir.resolve.transformers.contracts.FirAbstractContractResolveTransformerDispatcher$FirDeclarationsContractResolveTransformer` |

##### `get(int)` (`java.util.ArrayList`)

|      % | Samples | Caller           | Location                           |
| -----: | ------: | ---------------- | ---------------------------------- |
| 100.0% |       1 | `getLoader(int)` | `jdk.internal.loader.URLClassPath` |

##### `resize()` (`java.util.HashMap`)

|      % | Samples | Caller                                          | Location            |
| -----: | ------: | ----------------------------------------------- | ------------------- |
| 100.0% |       1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `hashCode()` (`jdk.internal.module.ModuleReferenceImpl`)

|      % | Samples | Caller        | Location                                 |
| -----: | ------: | ------------- | ---------------------------------------- |
| 100.0% |       1 | `get(Object)` | `java.util.concurrent.ConcurrentHashMap` |

##### `exists()` (`java.io.File`)

|      % | Samples | Caller     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |       1 | `exists()` | `jdk.internal.loader.FileURLMapper` |

##### `reset()` (`java.util.regex.Matcher`)

|      % | Samples | Caller                          | Location                  |
| -----: | ------: | ------------------------------- | ------------------------- |
| 100.0% |       1 | `<init>(Pattern, CharSequence)` | `java.util.regex.Matcher` |

##### `<init>(Map)` (`java.util.LinkedHashMap`)

|      % | Samples | Caller                                                                | Location                                  |
| -----: | ------: | --------------------------------------------------------------------- | ----------------------------------------- |
| 100.0% |       1 | `parseAnnotation2(ByteBuffer, ConstantPool, Class, boolean, Class[])` | `sun.reflect.annotation.AnnotationParser` |

##### `next()` (`kotlin.reflect.jvm.internal.impl.protobuf.SmallSortedMap$EntryIterator`)

|      % | Samples | Caller   | Location                                                                 |
| -----: | ------: | -------- | ------------------------------------------------------------------------ |
| 100.0% |       1 | `next()` | `kotlin.reflect.jvm.internal.impl.protobuf.SmallSortedMap$EntryIterator` |

##### `<init>(TypeConstructor, List, TypeAttributes, boolean)` (`kotlin.reflect.jvm.internal.impl.types.KotlinTypeFactory$$Lambda$0`)

|      % | Samples | Caller                                                                          | Location                                                   |
| -----: | ------: | ------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `simpleType(TypeAttributes, TypeConstructor, List, boolean, KotlinTypeRefiner)` | `kotlin.reflect.jvm.internal.impl.types.KotlinTypeFactory` |

##### `checkForTypeAlias(Class)` (`java.lang.invoke.MemberName`)

|      % | Samples | Caller                                           | Location                              |
| -----: | ------: | ------------------------------------------------ | ------------------------------------- |
| 100.0% |       1 | `resolve(byte, MemberName, Class, int, boolean)` | `java.lang.invoke.MemberName$Factory` |

##### `<init>(MethodType, LambdaForm, MemberName, boolean)` (`java.lang.invoke.DirectMethodHandle`)

|      % | Samples | Caller                                                                   | Location                                          |
| -----: | ------: | ------------------------------------------------------------------------ | ------------------------------------------------- |
| 100.0% |       1 | `<init>(MethodType, LambdaForm, MemberName, boolean, MemberName, Class)` | `java.lang.invoke.DirectMethodHandle$Constructor` |

##### `hash(int, String, String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|      % | Samples | Caller                                   | Location                                     |
| -----: | ------: | ---------------------------------------- | -------------------------------------------- |
| 100.0% |       1 | `addConstantNameAndType(String, String)` | `jdk.internal.org.objectweb.asm.SymbolTable` |

##### `changeReferenceKind(byte, byte)` (`java.lang.invoke.MemberName`)

|      % | Samples | Caller            | Location                      |
| -----: | ------: | ----------------- | ----------------------------- |
| 100.0% |       1 | `asConstructor()` | `java.lang.invoke.MemberName` |

##### `<init>(String, String, LambdaForm, MethodType)` (`java.lang.invoke.InvokerBytecodeGenerator`)

|      % | Samples | Caller                                   | Location                                    |
| -----: | ------: | ---------------------------------------- | ------------------------------------------- |
| 100.0% |       1 | `<init>(String, LambdaForm, MethodType)` | `java.lang.invoke.InvokerBytecodeGenerator` |

##### `copyMemoryInternal(MemorySessionImpl, MemorySessionImpl, Object, long, Object, long, long)` (`jdk.internal.misc.ScopedMemoryAccess`)

|      % | Samples | Caller                                                                               | Location                               |
| -----: | ------: | ------------------------------------------------------------------------------------ | -------------------------------------- |
| 100.0% |       1 | `copyMemory(MemorySessionImpl, MemorySessionImpl, Object, long, Object, long, long)` | `jdk.internal.misc.ScopedMemoryAccess` |

##### `compress(char[], int, byte[], int, int)` (`java.lang.StringUTF16`)

|      % | Samples | Caller                       | Location                |
| -----: | ------: | ---------------------------- | ----------------------- |
| 100.0% |       1 | `compress(char[], int, int)` | `java.lang.StringUTF16` |

##### `calcNext()` (`kotlin.sequences.FilteringSequence$iterator$1`)

|      % | Samples | Caller      | Location                                        |
| -----: | ------: | ----------- | ----------------------------------------------- |
| 100.0% |       1 | `hasNext()` | `kotlin.sequences.FilteringSequence$iterator$1` |

##### `iterator()` (`java.util.AbstractList`)

|      % | Samples | Caller                               | Location                                                     |
| -----: | ------: | ------------------------------------ | ------------------------------------------------------------ |
| 100.0% |       1 | `<init>(UnmodifiableLazyStringList)` | `org.jetbrains.kotlin.protobuf.UnmodifiableLazyStringList$2` |

##### `I2C/C2I adapters(0xbabbbb)` (`<unknown>`)

|      % | Samples | Caller                                                                               | Location                                                                          |
| -----: | ------: | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| 100.0% |       1 | `loadMemberAnnotations(FirSession, KotlinJvmBinaryClass, byte[], KotlinClassFinder)` | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializerKt` |

##### `I2C/C2I adapters(0xbbab)` (`<unknown>`)

|      % | Samples | Caller                                                                                         | Location                                                   |
| -----: | ------: | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `getDeprecationsProviderFromAnnotations$default(List, FirSession, boolean, List, int, Object)` | `org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt` |

##### `vtable stub` (`<unknown>`)

|      % | Samples | Caller                       | Location                                               |
| -----: | ------: | ---------------------------- | ------------------------------------------------------ |
| 100.0% |       1 | `accept(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.references.FirThisReference` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                                                           | Location                                                |
| ----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 66.9% |     872 | `_pthread_start`                                                                                   | `libsystem_pthread.dylib`                               |
| 66.9% |     872 | `thread_start`                                                                                     | `libsystem_pthread.dylib`                               |
| 66.8% |     871 | `Thread::call_run`                                                                                 | `libjvm.dylib`                                          |
| 66.8% |     871 | `thread_native_entry`                                                                              | `libjvm.dylib`                                          |
| 61.9% |     806 | `CompileBroker::compiler_thread_loop`                                                              | `libjvm.dylib`                                          |
| 61.9% |     806 | `JavaThread::thread_main_inner`                                                                    | `libjvm.dylib`                                          |
| 60.8% |     792 | `CompileBroker::invoke_compiler_on_method`                                                         | `libjvm.dylib`                                          |
| 41.9% |     546 | `C2Compiler::compile_method`                                                                       | `libjvm.dylib`                                          |
| 41.8% |     545 | `Compile::Compile`                                                                                 | `libjvm.dylib`                                          |
| 32.4% |     422 | `run(String[])`                                                                                    | `org.jetbrains.kotlin.preloading.Preloader`             |
| 32.4% |     422 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.preloading.Preloader`             |
| 26.6% |     346 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 26.6% |     346 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 26.6% |     346 | `invokeStatic(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$DMH.0x0000008801008000`    |
| 26.6% |     346 | `invoke(Object, Object, Object)`                                                                   | `java.lang.invoke.LambdaForm$MH.0x0000008801009400`     |
| 26.6% |     346 | `invokeExact_MT(Object, Object, Object, Object)`                                                   | `java.lang.invoke.Invokers$Holder`                      |
| 26.6% |     346 | `invokeImpl(Object, Object[])`                                                                     | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 26.6% |     346 | `invoke(Object, Object[])`                                                                         | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 26.6% |     346 | `invoke(Object, Object[])`                                                                         | `java.lang.reflect.Method`                              |
| 26.4% |     344 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

#### Categories

##### Compiler

|     % | Samples | Function                                   | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 61.9% |     806 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
| 60.8% |     792 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
| 41.9% |     546 | `C2Compiler::compile_method`               | `libjvm.dylib` |
| 41.8% |     545 | `Compile::Compile`                         | `libjvm.dylib` |
| 21.9% |     285 | `Compile::Code_Gen`                        | `libjvm.dylib` |
| 18.1% |     236 | `Compilation::compile_method`              | `libjvm.dylib` |
| 18.1% |     236 | `Compilation::Compilation`                 | `libjvm.dylib` |
| 16.7% |     218 | `Compilation::compile_java_method`         | `libjvm.dylib` |
| 14.8% |     193 | `Compile::Optimize`                        | `libjvm.dylib` |
| 11.2% |     146 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
|  8.1% |     106 | `Compilation::emit_lir`                    | `libjvm.dylib` |
|  7.5% |      98 | `LinearScan::do_linear_scan`               | `libjvm.dylib` |
|  7.3% |      95 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
|  6.4% |      84 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
|  6.4% |      84 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
|  5.7% |      74 | `Compilation::build_hir`                   | `libjvm.dylib` |
|  4.5% |      58 | `GraphBuilder::GraphBuilder`               | `libjvm.dylib` |
|  4.4% |      57 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |
|  4.1% |      54 | `GraphBuilder::iterate_all_blocks`         | `libjvm.dylib` |
|  4.1% |      54 | `PhaseIterGVN::transform_old`              | `libjvm.dylib` |

##### Native

|     % | Samples | Function                                        | Location                  |
| ----: | ------: | ----------------------------------------------- | ------------------------- |
| 66.9% |     872 | `_pthread_start`                                | `libsystem_pthread.dylib` |
| 66.9% |     872 | `thread_start`                                  | `libsystem_pthread.dylib` |
| 66.8% |     871 | `Thread::call_run`                              | `libjvm.dylib`            |
| 66.8% |     871 | `thread_native_entry`                           | `libjvm.dylib`            |
| 61.9% |     806 | `JavaThread::thread_main_inner`                 | `libjvm.dylib`            |
| 18.3% |     238 | `Compiler::compile_method`                      | `libjvm.dylib`            |
|  5.5% |      72 | `Java_java_lang_ClassLoader_defineClass1`       | `libjava.dylib`           |
|  5.3% |      69 | `jvm_define_class_common`                       | `libjvm.dylib`            |
|  5.3% |      69 | `JVM_DefineClassWithSource`                     | `libjvm.dylib`            |
|  5.2% |      68 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib`            |
|  5.2% |      68 | `SystemDictionary::resolve_class_from_stream`   | `libjvm.dylib`            |
|  4.9% |      64 | `KlassFactory::create_from_stream`              | `libjvm.dylib`            |
|  4.6% |      60 | `WorkerThread::run`                             | `libjvm.dylib`            |
|  4.5% |      58 | `IRScope::IRScope`                              | `libjvm.dylib`            |
|  4.5% |      58 | `IR::IR`                                        | `libjvm.dylib`            |
|  4.5% |      58 | `Parse::Parse`                                  | `libjvm.dylib`            |
|  4.5% |      58 | `ParseGenerator::generate`                      | `libjvm.dylib`            |
|  4.5% |      58 | `Parse::do_one_block`                           | `libjvm.dylib`            |
|  4.5% |      58 | `Parse::do_all_blocks`                          | `libjvm.dylib`            |
|  4.4% |      57 | `ClassFileParser::ClassFileParser`              | `libjvm.dylib`            |

##### Ours

|     % | Samples | Function                                                                                                                                      | Location                                                |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 32.4% |     422 | `run(String[])`                                                                                                                               | `org.jetbrains.kotlin.preloading.Preloader`             |
| 32.4% |     422 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`             |
| 26.6% |     346 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 26.6% |     346 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 26.4% |     344 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 26.4% |     344 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 26.2% |     342 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 26.2% |     342 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 26.2% |     342 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 26.0% |     339 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 25.4% |     331 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 25.4% |     331 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 25.4% |     331 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 25.3% |     330 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 25.3% |     330 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 25.3% |     330 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 25.2% |     329 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 25.2% |     328 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
| 25.2% |     328 | `phaseBody(LoggingContext, Object)`                                                                                                           | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
| 25.2% |     328 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### Standard library

|     % | Samples | Function                                                                        | Location                                              |
| ----: | ------: | ------------------------------------------------------------------------------- | ----------------------------------------------------- |
| 26.6% |     346 | `invokeStatic(Object, Object)`                                                  | `java.lang.invoke.LambdaForm$DMH.0x0000008801008000`  |
| 26.6% |     346 | `invoke(Object, Object, Object)`                                                | `java.lang.invoke.LambdaForm$MH.0x0000008801009400`   |
| 26.6% |     346 | `invokeExact_MT(Object, Object, Object, Object)`                                | `java.lang.invoke.Invokers$Holder`                    |
| 26.6% |     346 | `invokeImpl(Object, Object[])`                                                  | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 26.6% |     346 | `invoke(Object, Object[])`                                                      | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 26.6% |     346 | `invoke(Object, Object[])`                                                      | `java.lang.reflect.Method`                            |
|  5.9% |      77 | `loadClass(String, boolean)`                                                    | `java.lang.ClassLoader`                               |
|  5.7% |      74 | `defineClass(String, byte[], int, int, ProtectionDomain)`                       | `java.lang.ClassLoader`                               |
|  5.6% |      73 | `defineClass(String, byte[], int, int)`                                         | `java.lang.ClassLoader`                               |
|  5.5% |      72 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                               |
|  5.3% |      69 | `read(byte[], int, int)`                                                        | `java.util.zip.InflaterInputStream`                   |
|  5.2% |      68 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                   | `java.util.zip.Inflater`                              |
|  5.2% |      68 | `inflate(byte[], int, int)`                                                     | `java.util.zip.Inflater`                              |
|  5.2% |      68 | `read(byte[], int, int)`                                                        | `java.util.zip.ZipInputStream`                        |
|  5.2% |      68 | `read(byte[])`                                                                  | `java.io.FilterInputStream`                           |
|  3.4% |      44 | `resumeWith(Object)`                                                            | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |
|  1.3% |      17 | `getValue()`                                                                    | `kotlin.SafePublicationLazyImpl`                      |
|  1.0% |      13 | `getValue()`                                                                    | `kotlin.SynchronizedLazyImpl`                         |
|  1.0% |      13 | `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])`   | `java.lang.invoke.MethodHandleNatives`                |
|  1.0% |      13 | `linkCallSite(Object, Object, Object, Object, Object, Object[])`                | `java.lang.invoke.MethodHandleNatives`                |

##### JIT

|    % | Samples | Function                     | Location    |
| ---: | ------: | ---------------------------- | ----------- |
| 0.5% |       6 | `I2C/C2I adapters(0xbb)`     | `<unknown>` |
| 0.4% |       5 | `I2C/C2I adapters(0xb)`      | `<unknown>` |
| 0.3% |       4 | `zero_blocks`                | `<unknown>` |
| 0.2% |       2 | `I2C/C2I adapters(0xbbb)`    | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbabbbb)` | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbab)`   | `<unknown>` |
| 0.1% |       1 | `vtable stub`                | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 99.9% |     871 | `thread_native_entry` | `libjvm.dylib` |
|  0.1% |       1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |     872 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 92.5% |     806 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  6.9% |      60 | `WorkerThread::run`             | `libjvm.dylib` |
|  0.3% |       3 | `WatcherThread::run`            | `libjvm.dylib` |
|  0.2% |       2 | `VMThread::run`                 | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     871 | `Thread::call_run` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 98.3% |     792 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  1.7% |      14 | `CompileQueue::get`                        | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % | Samples | Callee                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |     806 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 68.9% |     546 | `C2Compiler::compile_method`  | `libjvm.dylib` |
| 30.1% |     238 | `Compiler::compile_method`    | `libjvm.dylib` |
|  0.3% |       2 | `TraceTime::~TraceTime`       | `libjvm.dylib` |
|  0.3% |       2 | `CompilationLog::log_compile` | `libjvm.dylib` |
|  0.3% |       2 | `ciEnv::ciEnv`                | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee              | Location       |
| ----: | ------: | ------------------- | -------------- |
| 99.8% |     545 | `Compile::Compile`  | `libjvm.dylib` |
|  0.2% |       1 | `Compile::~Compile` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 52.3% |     285 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 35.4% |     193 | `Compile::Optimize`                      | `libjvm.dylib` |
| 10.6% |      58 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  1.3% |       7 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.2% |       1 | `TypeFunc::make`                         | `libjvm.dylib` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|     % | Samples | Callee                                                                       | Location                                               |
| ----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 82.0% |     346 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                             |
| 17.8% |      75 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
|  0.2% |       1 | `getMethod(String, Class[])`                                                 | `java.lang.Class`                                      |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % | Samples | Callee          | Location                                    |
| -----: | ------: | --------------- | ------------------------------------------- |
| 100.0% |     422 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|     % | Samples | Callee                          | Location                                                |
| ----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 99.4% |     344 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.6% |       2 | `<init>()`                      | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee           | Location                                               |
| -----: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% |     346 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008801008000`)

|      % | Samples | Callee           | Location                                     |
| -----: | ------: | ---------------- | -------------------------------------------- |
| 100.0% |     346 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000008801009400`)

|      % | Samples | Callee                         | Location                                             |
| -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% |     346 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000008801008000` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     346 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000008801009400` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee                                           | Location                           |
| -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% |     346 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee                         | Location                                          |
| -----: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% |     346 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % | Samples | Callee                     | Location                                          |
| -----: | ------: | -------------------------- | ------------------------------------------------- |
| 100.0% |     346 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|     % | Samples | Callee                                                 | Location                                                |
| ----: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 99.4% |     342 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.6% |       2 | `defaultMessageRenderer()`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                                                                                             | Location                                                |
| -----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     344 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                                               | Location                                                                |
| ----: | ------: | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| 99.1% |     339 | `exec(MessageCollector, Services, CommonCompilerArguments)`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|  0.9% |       3 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                                                   | Location                                      |
| -----: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 100.0% |     342 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                                         | Location                                      |
| -----: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% |     342 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                          | Location                                      |
| ----: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| 97.6% |     331 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |
|  2.4% |       8 | `<clinit>()`                                                    | `org.jetbrains.kotlin.cli.common.ArgumentsKt` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|     % | Samples | Callee                                                         | Location                                                |
| ----: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 99.7% |     330 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|  0.3% |       1 | `getDefaultPerformanceManager()`                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee                                                                | Location                                     |
| -----: | ------: | --------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     331 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                                                                 | Location                                     |
| -----: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     331 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                                                                                                | Location                                                      |
| ----: | ------: | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 99.7% |     329 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                        | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`       |
|  0.3% |       1 | `<init>(CommonCompilerArguments, Services, Disposable, GroupingMessageCollector, PerformanceManager)` | `org.jetbrains.kotlin.cli.pipeline.ArgumentsPipelineArtifact` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                                                                              | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     330 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                                                                                                                        | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     330 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                                                                          | Location                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| 99.7% |     328 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`            | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                        |
|  0.3% |       1 | `reportToMessageCollector(BaseDiagnosticsCollector, MessageCollector, boolean)` | `org.jetbrains.kotlin.cli.common.fir.FirDiagnosticsCompilerResultsReporter` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|     % | Samples | Callee                           | Location                                                              |
| ----: | ------: | -------------------------------- | --------------------------------------------------------------------- |
| 66.5% |     218 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`      |
| 23.5% |      77 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`       |
|  8.5% |      28 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`        |
|  1.2% |       4 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmConfigurationPipelinePhase` |
|  0.3% |       1 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmWriteOutputsPhase`          |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Callee                                         | Location                                          |
| -----: | ------: | ---------------------------------------------- | ------------------------------------------------- |
| 100.0% |     328 | `phaseBody(PipelineContext, PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % | Samples | Callee                              | Location                                                         |
| -----: | ------: | ----------------------------------- | ---------------------------------------------------------------- |
| 100.0% |     328 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
|   5.5% |      18 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase`   |
|   1.2% |       4 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.ModuleLoweringPhase` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 51.2% |     146 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 16.8% |      48 | `Matcher::match`                  | `libjvm.dylib` |
| 16.5% |      47 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
| 11.6% |      33 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  2.5% |       7 | `PhaseOutput::install_code`       | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                     | Location       |
| ----: | ------: | -------------------------- | -------------- |
| 99.2% |     236 | `Compilation::Compilation` | `libjvm.dylib` |
|  0.8% |       2 | `Chunk::next_chop`         | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 92.4% |     218 | `Compilation::compile_java_method` | `libjvm.dylib` |
|  6.8% |      16 | `ciEnv::register_method`           | `libjvm.dylib` |
|  0.8% |       2 | `Dependencies::assert_common_1`    | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |     236 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 48.6% |     106 | `Compilation::emit_lir`        | `libjvm.dylib` |
| 33.9% |      74 | `Compilation::build_hir`       | `libjvm.dylib` |
| 16.1% |      35 | `Compilation::emit_code_body`  | `libjvm.dylib` |
|  0.9% |       2 | `ciMethod::ensure_method_data` | `libjvm.dylib` |
|  0.5% |       1 | `FrameMap::FrameMap`           | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 26.4% |      51 | `PhaseIdealLoop::optimize`     | `libjvm.dylib` |
| 22.8% |      44 | `PhaseIterGVN::optimize`       | `libjvm.dylib` |
| 22.8% |      44 | `Compile::optimize_loops`      | `libjvm.dylib` |
|  8.3% |      16 | `PhaseCCP::PhaseCCP`           | `libjvm.dylib` |
|  5.7% |      11 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 19.9% |      29 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
| 15.8% |      23 | `PhaseLive::compute`                       | `libjvm.dylib` |
| 14.4% |      21 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| 10.3% |      15 | `PhaseChaitin::gather_lrg_masks`           | `libjvm.dylib` |
| 10.3% |      15 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 92.5% |      98 | `LinearScan::do_linear_scan` | `libjvm.dylib` |
|  7.5% |       8 | `BlockList::iterate_forward` | `libjvm.dylib` |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

|     % | Samples | Callee                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 34.7% |      34 | `LinearScan::allocate_registers`      | `libjvm.dylib` |
| 24.5% |      24 | `LinearScan::assign_reg_num`          | `libjvm.dylib` |
| 18.4% |      18 | `LinearScan::build_intervals`         | `libjvm.dylib` |
|  7.1% |       7 | `LinearScan::compute_local_live_sets` | `libjvm.dylib` |
|  3.1% |       3 | `LinearScan::eliminate_spill_moves`   | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 88.4% |      84 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|  8.4% |       8 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |
|  3.2% |       3 | `Chunk::next_chop`               | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 35.7% |      30 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| 17.9% |      15 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| 17.9% |      15 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
| 11.9% |      10 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |
|  7.1% |       6 | `PhaseIdealLoop::build_loop_tree`      | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Callee                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      84 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                             | Location                                                 |
| ----: | ------: | ---------------------------------- | -------------------------------------------------------- |
| 94.8% |      73 | `findClass(String)`                | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  2.6% |       2 | `findBootstrapClassOrNull(String)` | `java.lang.ClassLoader`                                  |
|  1.3% |       1 | `findClass(String)`                | `java.net.URLClassLoader`                                |
|  1.3% |       1 | `addElapsedTimeFrom(long)`         | `jdk.internal.perf.PerfCounter`                          |

##### `Compilation::build_hir` (`libjvm.dylib`)

|     % | Samples | Callee                                       | Location       |
| ----: | ------: | -------------------------------------------- | -------------- |
| 78.4% |      58 | `IR::IR`                                     | `libjvm.dylib` |
|  9.5% |       7 | `GlobalValueNumbering::GlobalValueNumbering` | `libjvm.dylib` |
|  6.8% |       5 | `IR::compute_use_counts`                     | `libjvm.dylib` |
|  1.4% |       1 | `RangeCheckElimination::eliminate`           | `libjvm.dylib` |
|  1.4% |       1 | `IR::optimize_blocks`                        | `libjvm.dylib` |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                                                                          | Location                |
| ----: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| 97.3% |      72 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |
|  1.4% |       1 | `postDefineClass(Class, ProtectionDomain)`                                      | `java.lang.ClassLoader` |
|  1.4% |       1 | `preDefineClass(String, ProtectionDomain)`                                      | `java.lang.ClassLoader` |

##### `defineClass(String, byte[], int, int)` (`java.lang.ClassLoader`)

|      % | Samples | Callee                                                    | Location                |
| -----: | ------: | --------------------------------------------------------- | ----------------------- |
| 100.0% |      73 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|     % | Samples | Callee                      | Location                   |
| ----: | ------: | --------------------------- | -------------------------- |
| 95.8% |      69 | `JVM_DefineClassWithSource` | `libjvm.dylib`             |
|  2.8% |       2 | `_platform_memmove`         | `libsystem_platform.dylib` |
|  1.4% |       1 | `jni_GetStringLength`       | `libjvm.dylib`             |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|      % | Samples | Callee                                    | Location                                                 |
| -----: | ------: | ----------------------------------------- | -------------------------------------------------------- |
| 100.0% |      72 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`                                          |
|  16.7% |      12 | `loadClass(String)`                       | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `jvm_define_class_common` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 98.6% |      68 | `SystemDictionary::resolve_class_from_stream` | `libjvm.dylib` |
|  1.4% |       1 | `SystemDictionary::class_name_symbol`         | `libjvm.dylib` |

##### `JVM_DefineClassWithSource` (`libjvm.dylib`)

|      % | Samples | Callee                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |      69 | `jvm_define_class_common` | `libjvm.dylib` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

|     % | Samples | Callee                      | Location                            |
| ----: | ------: | --------------------------- | ----------------------------------- |
| 97.1% |      67 | `inflate(byte[], int, int)` | `java.util.zip.Inflater`            |
|  2.9% |       2 | `fill()`                    | `java.util.zip.InflaterInputStream` |

##### `Java_java_util_zip_Inflater_inflateBytesBytes` (`libzip.dylib`)

|     % | Samples | Callee                              | Location       |
| ----: | ------: | ----------------------------------- | -------------- |
| 82.4% |      56 | `inflate_fast`                      | `libzip.dylib` |
| 10.3% |       7 | `inflate`                           | `libzip.dylib` |
|  4.4% |       3 | `jni_GetPrimitiveArrayCritical`     | `libjvm.dylib` |
|  2.9% |       2 | `jni_ReleasePrimitiveArrayCritical` | `libjvm.dylib` |

##### `SystemDictionary::resolve_class_from_stream` (`libjvm.dylib`)

|     % | Samples | Callee                                    | Location       |
| ----: | ------: | ----------------------------------------- | -------------- |
| 88.2% |      60 | `KlassFactory::create_from_stream`        | `libjvm.dylib` |
| 11.8% |       8 | `SystemDictionary::define_instance_class` | `libjvm.dylib` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Callee                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |      68 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Callee                                                        | Location                 |
| -----: | ------: | ------------------------------------------------------------- | ------------------------ |
| 100.0% |      68 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater` |

##### `read(byte[], int, int)` (`java.util.zip.ZipInputStream`)

|      % | Samples | Callee                   | Location                            |
| -----: | ------: | ------------------------ | ----------------------------------- |
| 100.0% |      68 | `read(byte[], int, int)` | `java.util.zip.InflaterInputStream` |

##### `read(byte[])` (`java.io.FilterInputStream`)

|      % | Samples | Callee                   | Location                       |
| -----: | ------: | ------------------------ | ------------------------------ |
| 100.0% |      68 | `read(byte[], int, int)` | `java.util.zip.ZipInputStream` |

##### `KlassFactory::create_from_stream` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 89.1% |      57 | `ClassFileParser::ClassFileParser`       | `libjvm.dylib` |
| 10.9% |       7 | `ClassFileParser::create_instance_klass` | `libjvm.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 36.7% |      22 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib` |
| 33.3% |      20 | `G1CMConcurrentMarkingTask::work` | `libjvm.dylib` |
| 26.7% |      16 | `G1RebuildRSAndScrubTask::work`   | `libjvm.dylib` |
|  3.3% |       2 | `G1CMRootRegionScanTask::work`    | `libjvm.dylib` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

|     % | Samples | Callee                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 93.1% |      54 | `GraphBuilder::iterate_all_blocks`   | `libjvm.dylib` |
|  3.4% |       2 | `BlockListBuilder::BlockListBuilder` | `libjvm.dylib` |
|  3.4% |       2 | `BlockBegin::iterate_preorder`       | `libjvm.dylib` |

##### `IRScope::IRScope` (`libjvm.dylib`)

|      % | Samples | Callee                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |      58 | `GraphBuilder::GraphBuilder` | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      58 | `IRScope::IRScope` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % | Samples | Callee                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |      58 | `Parse::do_all_blocks`    | `libjvm.dylib` |
|   3.4% |       2 | `Parse::do_exits`         | `libjvm.dylib` |
|   1.7% |       1 | `Parse::create_entry_map` | `libjvm.dylib` |
|   1.7% |       1 | `TypeFunc::make`          | `libjvm.dylib` |
|   1.7% |       1 | `GraphKit::set_map_clone` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % | Samples | Callee         | Location       |
| -----: | ------: | -------------- | -------------- |
| 100.0% |      58 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|     % | Samples | Callee                   | Location       |
| ----: | ------: | ------------------------ | -------------- |
| 94.8% |      55 | `Parse::do_call`         | `libjvm.dylib` |
| 24.1% |      14 | `Parse::do_field_access` | `libjvm.dylib` |
|  6.9% |       4 | `Parse::do_one_bytecode` | `libjvm.dylib` |
|  5.2% |       3 | `Parse::return_current`  | `libjvm.dylib` |
|  3.4% |       2 | `Parse::do_if`           | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % | Samples | Callee                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |      58 | `Parse::do_one_block` | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 94.7% |      54 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |
|  1.8% |       1 | `PhiNode::hash`               | `libjvm.dylib` |
|  1.8% |       1 | `LoadUBNode::Value`           | `libjvm.dylib` |

##### `ClassFileParser::ClassFileParser` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 93.0% |      53 | `ClassFileParser::parse_stream`               | `libjvm.dylib` |
|  5.3% |       3 | `ClassFileParser::post_process_parsed_stream` | `libjvm.dylib` |
|  1.8% |       1 | `FieldLayoutBuilder::FieldLayoutBuilder`      | `libjvm.dylib` |

##### `GraphBuilder::iterate_all_blocks` (`libjvm.dylib`)

|     % | Samples | Callee                                      | Location       |
| ----: | ------: | ------------------------------------------- | -------------- |
| 98.1% |      53 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |
|  1.9% |       1 | `GraphBuilder::ScopeData::block_at`         | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 14.8% |       8 | `RegionNode::Ideal`          | `libjvm.dylib` |
| 14.8% |       8 | `IfNode::Ideal`              | `libjvm.dylib` |
|  9.3% |       5 | `StoreNode::Ideal`           | `libjvm.dylib` |
|  9.3% |       5 | `PhaseIterGVN::subsume_node` | `libjvm.dylib` |
|  7.4% |       4 | `PhiNode::Ideal`             | `libjvm.dylib` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|     % | Samples | Callee                  | Location                                                                                                      |
| ----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------------- |
| 77.3% |      34 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`                         |
| 40.9% |      18 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`                      |
|  9.1% |       4 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$2`                      |
|  4.5% |       2 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirInvokeResolveTowerExtension$enqueueResolverTasksForInvoke$3` |
|  2.3% |       1 | `invokeSuspend(Object)` | `com.intellij.ide.plugins.PluginDescriptorLoader$loadForCoreEnv$1`                                            |

##### `getValue()` (`kotlin.SafePublicationLazyImpl`)

|     % | Samples | Callee     | Location                                                                                                   |
| ----: | ------: | ---------- | ---------------------------------------------------------------------------------------------------------- |
| 47.1% |       8 | `invoke()` | `kotlin.reflect.jvm.internal.DescriptorKProperty$$Lambda$0`                                                |
| 17.6% |       3 | `invoke()` | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer$$Lambda.0x00000088015d7920` |
| 17.6% |       3 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.impl.FirClassDeclaredMemberScopeImpl$$Lambda.0x000000880161dc00`          |
| 11.8% |       2 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.ImplicitReceiverValue$$Lambda.0x00000088016563f0`                  |
| 11.8% |       2 | `invoke()` | `org.jetbrains.kotlin.fir.java.FirLazyJavaDeclarationList$$Lambda.0x000000880160f2a8`                      |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

|     % | Samples | Callee     | Location                                                                                |
| ----: | ------: | ---------- | --------------------------------------------------------------------------------------- |
| 23.1% |       3 | `invoke()` | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass$$Lambda.0x000000880160fb50`    |
| 15.4% |       2 | `invoke()` | `org.jetbrains.kotlin.builtins.DefaultBuiltIns$$Lambda.0x0000008801752950`              |
|  7.7% |       1 | `invoke()` | `org.jetbrains.kotlin.cli.common.CLICompiler$$Lambda.0x000000880100a000`                |
|  7.7% |       1 | `invoke()` | `org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile$$Lambda.0x000000880137ba80`    |
|  7.7% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.impl.FirEnumEntriesSupport$$Lambda.0x0000008801453498` |

##### `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

|     % | Samples | Callee                                                      | Location                    |
| ----: | ------: | ----------------------------------------------------------- | --------------------------- |
| 92.3% |      12 | `makeSite(MethodHandle, String, MethodType, Object, Class)` | `java.lang.invoke.CallSite` |
|  7.7% |       1 | `linkToTargetMethod(MethodType)`                            | `java.lang.invoke.Invokers` |

##### `linkCallSite(Object, Object, Object, Object, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

|      % | Samples | Callee                                                                        | Location                               |
| -----: | ------: | ----------------------------------------------------------------------------- | -------------------------------------- |
| 100.0% |      13 | `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.8% |      50 | `inflate_fast` (`libzip.dylib`) ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |
| 1.0% |      13 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                    |
| 1.0% |      13 | `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                       |
| 0.9% |      12 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                      |
| 0.9% |      12 | `LinearScanWalker::alloc_free_reg` (`libjvm.dylib`) ← `LinearScanWalker::activate_current` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                       |
| 0.8% |      11 | `PhaseLive::compute` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                     |
| 0.7% |       9 | `IndexSetIterator::advance_and_next` (`libjvm.dylib`) ← `PhaseChaitin::build_ifg_physical` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                |
| 0.6% |       8 | `PhaseChaitin::elide_copy` (`libjvm.dylib`) ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                  |
| 0.5% |       7 | `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                         |
| 0.5% |       7 | `PhaseLive::add_liveout` (`libjvm.dylib`) ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                          |
| 0.5% |       7 | `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                         |
| 0.5% |       6 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`) ← `void G1CMTask::process_grey_task_entry<true>` ← `G1CMTask::drain_local_queue` ← `G1CMTask::do_marking_step` ← `G1CMConcurrentMarkingTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                       |
| 0.5% |       6 | `LinearScan::assign_reg_num` (`libjvm.dylib`) ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                   |
| 0.4% |       5 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`) ← `void G1CMTask::process_grey_task_entry<true>` ← `G1CMBitMap::iterate` ← `G1CMTask::do_marking_step` ← `G1CMConcurrentMarkingTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                               |
| 0.4% |       5 | `LIR_OpVisitState::visit` (`libjvm.dylib`) ← `LinearScan::build_intervals` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                      |
| 0.4% |       5 | `LinearScan::build_intervals` (`libjvm.dylib`) ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                  |
| 0.4% |       5 | `LinearScanWalker::free_collect_inactive_fixed` (`libjvm.dylib`) ← `LinearScanWalker::alloc_free_reg` ← `LinearScanWalker::activate_current` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                     |
| 0.4% |       5 | `IntervalWalker::walk_to` (`libjvm.dylib`) ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                       |
| 0.4% |       5 | `LIR_OpVisitState::visit` (`libjvm.dylib`) ← `LinearScan::assign_reg_num` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                       |
| 0.4% |       5 | `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                               |

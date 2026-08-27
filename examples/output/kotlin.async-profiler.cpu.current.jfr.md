# Sampling profile

Collected 1,315 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Compiler         | 42.9% |     564 |
| Native           | 40.4% |     531 |
| Ours             | 10.4% |     137 |
| Standard library |  5.2% |      69 |
| JIT              |  1.1% |      14 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                                                                                                                                                 | Location                   |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 3.3% |      44 | `inflate_fast`                                                                                                                                           | `libzip.dylib`             |
| 1.9% |      25 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
| 1.7% |      23 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`             |
| 1.7% |      22 | `PhaseChaitin::build_ifg_physical`                                                                                                                       | `libjvm.dylib`             |
| 1.1% |      14 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
| 1.1% |      14 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |
| 0.9% |      12 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| 0.8% |      11 | `PhaseChaitin::gather_lrg_masks`                                                                                                                         | `libjvm.dylib`             |
| 0.8% |      11 | `PhaseChaitin::Split`                                                                                                                                    | `libjvm.dylib`             |
| 0.8% |      11 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
| 0.8% |      10 | `PhaseChaitin::elide_copy`                                                                                                                               | `libjvm.dylib`             |
| 0.8% |      10 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
| 0.8% |      10 | `_platform_memmove`                                                                                                                                      | `libsystem_platform.dylib` |
| 0.7% |       9 | `PhaseLive::compute`                                                                                                                                     | `libjvm.dylib`             |
| 0.7% |       9 | `__psynch_mutexdrop`                                                                                                                                     | `libsystem_kernel.dylib`   |
| 0.7% |       9 | `PhaseAggressiveCoalesce::insert_copies`                                                                                                                 | `libjvm.dylib`             |
| 0.6% |       8 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>`                             | `libjvm.dylib`             |
| 0.6% |       8 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                        | `libjvm.dylib`             |
| 0.6% |       8 | `IntervalWalker::walk_to`                                                                                                                                | `libjvm.dylib`             |
| 0.6% |       8 | `UTF8::is_legal_utf8`                                                                                                                                    | `libjvm.dylib`             |

#### Categories

##### Compiler

|    % | Samples | Function                                        | Location       |
| ---: | ------: | ----------------------------------------------- | -------------- |
| 1.7% |      22 | `PhaseChaitin::build_ifg_physical`              | `libjvm.dylib` |
| 0.8% |      11 | `PhaseChaitin::gather_lrg_masks`                | `libjvm.dylib` |
| 0.8% |      11 | `PhaseChaitin::Split`                           | `libjvm.dylib` |
| 0.8% |      10 | `PhaseChaitin::elide_copy`                      | `libjvm.dylib` |
| 0.7% |       9 | `PhaseLive::compute`                            | `libjvm.dylib` |
| 0.7% |       9 | `PhaseAggressiveCoalesce::insert_copies`        | `libjvm.dylib` |
| 0.6% |       8 | `IntervalWalker::walk_to`                       | `libjvm.dylib` |
| 0.5% |       7 | `Matcher::xform`                                | `libjvm.dylib` |
| 0.5% |       7 | `Node_Backward_Iterator::next`                  | `libjvm.dylib` |
| 0.5% |       7 | `IndexSetIterator::advance_and_next`            | `libjvm.dylib` |
| 0.5% |       7 | `LinearScanWalker::free_collect_inactive_fixed` | `libjvm.dylib` |
| 0.5% |       7 | `LinearScan::assign_reg_num`                    | `libjvm.dylib` |
| 0.5% |       7 | `LinearScan::build_intervals`                   | `libjvm.dylib` |
| 0.5% |       6 | `PhaseIdealLoop::build_loop_late_post_work`     | `libjvm.dylib` |
| 0.5% |       6 | `PhaseChaitin::post_allocate_copy_removal`      | `libjvm.dylib` |
| 0.5% |       6 | `ciObjectFactory::get_metadata`                 | `libjvm.dylib` |
| 0.5% |       6 | `Node::dominates`                               | `libjvm.dylib` |
| 0.5% |       6 | `Compile::identify_useful_nodes`                | `libjvm.dylib` |
| 0.5% |       6 | `PhaseIdealLoop::build_loop_early`              | `libjvm.dylib` |
| 0.5% |       6 | `LIR_OpVisitState::visit`                       | `libjvm.dylib` |

##### Native

|    % | Samples | Function                                                                                                                                                 | Location                   |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 3.3% |      44 | `inflate_fast`                                                                                                                                           | `libzip.dylib`             |
| 1.9% |      25 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
| 1.7% |      23 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`             |
| 1.1% |      14 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
| 1.1% |      14 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |
| 0.9% |      12 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| 0.8% |      11 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
| 0.8% |      10 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
| 0.8% |      10 | `_platform_memmove`                                                                                                                                      | `libsystem_platform.dylib` |
| 0.7% |       9 | `__psynch_mutexdrop`                                                                                                                                     | `libsystem_kernel.dylib`   |
| 0.6% |       8 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>`                             | `libjvm.dylib`             |
| 0.6% |       8 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                        | `libjvm.dylib`             |
| 0.6% |       8 | `UTF8::is_legal_utf8`                                                                                                                                    | `libjvm.dylib`             |
| 0.5% |       7 | `sys_icache_invalidate`                                                                                                                                  | `libsystem_platform.dylib` |
| 0.5% |       7 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                                                          | `libjvm.dylib`             |
| 0.5% |       7 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 0.5% |       7 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                           | `libjvm.dylib`             |
| 0.5% |       7 | `inflate_table`                                                                                                                                          | `libzip.dylib`             |
| 0.5% |       6 | `SymbolTable::lookup_shared`                                                                                                                             | `libjvm.dylib`             |
| 0.4% |       5 | `fwd_copy_again`                                                                                                                                         | `libjvm.dylib`             |

##### Ours

|    % | Samples | Function                                                                                                                                                                                            | Location                                                                                                 |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 0.2% |       2 | `buildDefaultFlow(CFGNode, Function2)`                                                                                                                                                              | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer`                                               |
| 0.2% |       2 | `loadFunction(ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin)`                                                                                                             | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`                                         |
| 0.2% |       2 | `processGivenConstraints(ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector, Collection)`                                                                         | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`                             |
| 0.2% |       2 | `getNodeType(AbstractInsnNode)`                                                                                                                                                                     | `org.jetbrains.kotlin.codegen.optimization.common.UtilKt`                                                |
| 0.1% |       1 | `splitPath(CharSequence)`                                                                                                                                                                           | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler`                                             |
| 0.1% |       1 | `isInitialized()`                                                                                                                                                                                   | `org.jetbrains.kotlin.metadata.ProtoBuf$Type`                                                            |
| 0.1% |       1 | `getFunction(int)`                                                                                                                                                                                  | `org.jetbrains.kotlin.metadata.ProtoBuf$Class`                                                           |
| 0.1% |       1 | `getChildren(LighterASTNode, FlyweightCapableTreeStructure)`                                                                                                                                        | `org.jetbrains.kotlin.util.LightTreeUtilsKt`                                                             |
| 0.1% |       1 | `performLexing()`                                                                                                                                                                                   | `com.intellij.lang.impl.TokenSequence$Builder`                                                           |
| 0.1% |       1 | `advance()`                                                                                                                                                                                         | `org.jetbrains.kotlin.lexer._JetLexer`                                                                   |
| 0.1% |       1 | `readSourceFileWithMapping(InputStreamReader)`                                                                                                                                                      | `org.jetbrains.kotlin.KtSourceFileLinesMappingKt`                                                        |
| 0.1% |       1 | `isExpression(LighterASTNode)`                                                                                                                                                                      | `org.jetbrains.kotlin.ElementTypeUtils`                                                                  |
| 0.1% |       1 | `advanceLexer()`                                                                                                                                                                                    | `com.intellij.lang.impl.PsiBuilderAdapter`                                                               |
| 0.1% |       1 | `convertBackingField(LighterASTNode, FirPropertySymbol, ModifierList, FirTypeRef, boolean, List, LighterASTNode)`                                                                                   | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder`                         |
| 0.1% |       1 | `<init>(ConeKotlinType, List, List, List, FirExpression, FirExpression, FirExpression, KtSourceElement, List, FirArgumentList, FirNamedReference, FirFunctionCallOrigin, DefaultConstructorMarker)` | `org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl`                                          |
| 0.1% |       1 | `getTopLevelClassifierNamesInPackage(Map, FqName)`                                                                                                                                                  | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirBuiltinSymbolProvidersKt`                            |
| 0.1% |       1 | `getKotlinBinaryClassOrClassFileContent(VirtualFile, MetadataVersion, byte[], PerformanceManager)`                                                                                                  | `org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion`                                      |
| 0.1% |       1 | `mayHaveTopLevelClassifier(ClassId)`                                                                                                                                                                | `org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`                                      |
| 0.1% |       1 | `readUtfNonAscii(int, int, int, char[])`                                                                                                                                                            | `org.jetbrains.org.objectweb.asm.ClassReader`                                                            |
| 0.1% |       1 | `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)`                                                                                                                    | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### Standard library

|    % | Samples | Function                                              | Location                                      |
| ---: | ------: | ----------------------------------------------------- | --------------------------------------------- |
| 0.2% |       3 | `resize()`                                            | `java.util.HashMap`                           |
| 0.2% |       2 | `ensureCapacityInternal(int)`                         | `java.lang.AbstractStringBuilder`             |
| 0.2% |       2 | `isLatin1()`                                          | `java.lang.String`                            |
| 0.2% |       2 | `checkNotNullParameter(Object, String)`               | `kotlin.jvm.internal.Intrinsics`              |
| 0.2% |       2 | `sanitizeStackTrace(Throwable)`                       | `kotlin.jvm.internal.Intrinsics`              |
| 0.1% |       1 | `closeEntry()`                                        | `java.util.zip.ZipInputStream`                |
| 0.1% |       1 | `nextNode()`                                          | `java.util.HashMap$HashIterator`              |
| 0.1% |       1 | `initCEN(int, ZipCoder)`                              | `java.util.zip.ZipFile$Source`                |
| 0.1% |       1 | `getLongUnaligned(Object, long)`                      | `jdk.internal.misc.Unsafe`                    |
| 0.1% |       1 | `methodType(Class, Class[], boolean)`                 | `java.lang.invoke.MethodType`                 |
| 0.1% |       1 | `<init>(int, float, int)`                             | `java.util.concurrent.ConcurrentHashMap`      |
| 0.1% |       1 | `lastIndexOf(byte[], int, int)`                       | `java.lang.StringLatin1`                      |
| 0.1% |       1 | `size()`                                              | `java.util.Collections$EmptyList`             |
| 0.1% |       1 | `flip()`                                              | `java.nio.Buffer`                             |
| 0.1% |       1 | `startsWith(String)`                                  | `java.lang.String`                            |
| 0.1% |       1 | `offer(Object)`                                       | `java.util.concurrent.ConcurrentLinkedQueue`  |
| 0.1% |       1 | `constructor-impl(Object)`                            | `kotlin.Result`                               |
| 0.1% |       1 | `getDirectMethodForConstant(byte, Class, MemberName)` | `java.lang.invoke.MethodHandles$Lookup`       |
| 0.1% |       1 | `putMethodInfo(ByteVector)`                           | `jdk.internal.org.objectweb.asm.MethodWriter` |
| 0.1% |       1 | `stringFromByteBuffer(ByteBuffer, int)`               | `jdk.internal.jimage.ImageStringsReader`      |

##### JIT

|    % | Samples | Function                      | Location    |
| ---: | ------: | ----------------------------- | ----------- |
| 0.2% |       3 | `itable stub`                 | `<unknown>` |
| 0.2% |       2 | `zero_blocks`                 | `<unknown>` |
| 0.2% |       2 | `I2C/C2I adapters(0xbbb)`     | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbbbb)`   | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbbaa)`   | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xb)`       | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xaaa)`     | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbabbab)`  | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbbbbba)` | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbb)`      | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `resize()` (`java.util.HashMap`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 66.7% |       2 | `java.util.HashMap:713` |
| 33.3% |       1 | `java.util.HashMap:684` |

##### `buildDefaultFlow(CFGNode, Function2)` (`org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer`)

|     % | Samples | Location                                                        |
| ----: | ------: | --------------------------------------------------------------- |
| 50.0% |       1 | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer:1670` |
| 50.0% |       1 | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer:1643` |

##### `loadFunction(ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin)` (`org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`)

|     % | Samples | Location                                                             |
| ----: | ------: | -------------------------------------------------------------------- |
| 50.0% |       1 | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer:723` |
| 50.0% |       1 | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer:715` |

##### `processGivenConstraints(ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector, Collection)` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`)

|     % | Samples | Location                                                                         |
| ----: | ------: | -------------------------------------------------------------------------------- |
| 50.0% |       1 | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector:189` |
| 50.0% |       1 | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector:181` |

##### `getNodeType(AbstractInsnNode)` (`org.jetbrains.kotlin.codegen.optimization.common.UtilKt`)

|     % | Samples | Location                                                     |
| ----: | ------: | ------------------------------------------------------------ |
| 50.0% |       1 | `org.jetbrains.kotlin.codegen.optimization.common.UtilKt:76` |
| 50.0% |       1 | `org.jetbrains.kotlin.codegen.optimization.common.UtilKt:70` |

##### `ensureCapacityInternal(int)` (`java.lang.AbstractStringBuilder`)

|      % | Samples | Location                              |
| -----: | ------: | ------------------------------------- |
| 100.0% |       2 | `java.lang.AbstractStringBuilder:243` |

##### `isLatin1()` (`java.lang.String`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       2 | `java.lang.String:4811` |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       2 | `kotlin.jvm.internal.Intrinsics:130` |

##### `sanitizeStackTrace(Throwable)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       2 | `kotlin.jvm.internal.Intrinsics:253` |

##### `splitPath(CharSequence)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler`)

|      % | Samples | Location                                                        |
| -----: | ------: | --------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler:97` |

##### `isInitialized()` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type`)

|      % | Samples | Location                                           |
| -----: | ------: | -------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.metadata.ProtoBuf$Type:6117` |

##### `getFunction(int)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Class`)

|      % | Samples | Location                                            |
| -----: | ------: | --------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.metadata.ProtoBuf$Class:9902` |

##### `getChildren(LighterASTNode, FlyweightCapableTreeStructure)` (`org.jetbrains.kotlin.util.LightTreeUtilsKt`)

|      % | Samples | Location                                        |
| -----: | ------: | ----------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.util.LightTreeUtilsKt:16` |

##### `performLexing()` (`com.intellij.lang.impl.TokenSequence$Builder`)

|      % | Samples | Location                                           |
| -----: | ------: | -------------------------------------------------- |
| 100.0% |       1 | `com.intellij.lang.impl.TokenSequence$Builder:116` |

##### `advance()` (`org.jetbrains.kotlin.lexer._JetLexer`)

|      % | Samples | Location                                   |
| -----: | ------: | ------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.lexer._JetLexer:948` |

##### `readSourceFileWithMapping(InputStreamReader)` (`org.jetbrains.kotlin.KtSourceFileLinesMappingKt`)

|      % | Samples | Location                                              |
| -----: | ------: | ----------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.KtSourceFileLinesMappingKt:103` |

##### `isExpression(LighterASTNode)` (`org.jetbrains.kotlin.ElementTypeUtils`)

|      % | Samples | Location                                   |
| -----: | ------: | ------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.ElementTypeUtils:57` |

##### `advanceLexer()` (`com.intellij.lang.impl.PsiBuilderAdapter`)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       1 | `com.intellij.lang.impl.PsiBuilderAdapter:39` |

##### `convertBackingField(LighterASTNode, FirPropertySymbol, ModifierList, FirTypeRef, boolean, List, LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder`)

|      % | Samples | Location                                                                              |
| -----: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder:1880` |

##### `getTopLevelClassifierNamesInPackage(Map, FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirBuiltinSymbolProvidersKt`)

|      % | Samples | Location                                                                          |
| -----: | ------: | --------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirBuiltinSymbolProvidersKt:260` |

##### `getKotlinBinaryClassOrClassFileContent(VirtualFile, MetadataVersion, byte[], PerformanceManager)` (`org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion`)

|      % | Samples | Location                                                               |
| -----: | ------: | ---------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion:85` |

##### `mayHaveTopLevelClassifier(ClassId)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`)

|      % | Samples | Location                                                                |
| -----: | ------: | ----------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider:104` |

##### `readUtfNonAscii(int, int, int, char[])` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % | Samples | Location                                           |
| -----: | ------: | -------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.org.objectweb.asm.ClassReader:3851` |

##### `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

|      % | Samples | Location                                                                                                     |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher:841` |

##### `closeEntry()` (`java.util.zip.ZipInputStream`)

|      % | Samples | Location                           |
| -----: | ------: | ---------------------------------- |
| 100.0% |       1 | `java.util.zip.ZipInputStream:171` |

##### `nextNode()` (`java.util.HashMap$HashIterator`)

|      % | Samples | Location                              |
| -----: | ------: | ------------------------------------- |
| 100.0% |       1 | `java.util.HashMap$HashIterator:1608` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       1 | `java.util.zip.ZipFile$Source:1777` |

##### `getLongUnaligned(Object, long)` (`jdk.internal.misc.Unsafe`)

|      % | Samples | Location                        |
| -----: | ------: | ------------------------------- |
| 100.0% |       1 | `jdk.internal.misc.Unsafe:3522` |

##### `methodType(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

|      % | Samples | Location                          |
| -----: | ------: | --------------------------------- |
| 100.0% |       1 | `java.lang.invoke.MethodType:371` |

##### `<init>(int, float, int)` (`java.util.concurrent.ConcurrentHashMap`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `java.util.concurrent.ConcurrentHashMap:893` |

##### `lastIndexOf(byte[], int, int)` (`java.lang.StringLatin1`)

|      % | Samples | Location                     |
| -----: | ------: | ---------------------------- |
| 100.0% |       1 | `java.lang.StringLatin1:285` |

##### `size()` (`java.util.Collections$EmptyList`)

|      % | Samples | Location                               |
| -----: | ------: | -------------------------------------- |
| 100.0% |       1 | `java.util.Collections$EmptyList:4792` |

##### `flip()` (`java.nio.Buffer`)

|      % | Samples | Location              |
| -----: | ------: | --------------------- |
| 100.0% |       1 | `java.nio.Buffer:486` |

##### `startsWith(String)` (`java.lang.String`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.lang.String:2316` |

##### `offer(Object)` (`java.util.concurrent.ConcurrentLinkedQueue`)

|      % | Samples | Location                                         |
| -----: | ------: | ------------------------------------------------ |
| 100.0% |       1 | `java.util.concurrent.ConcurrentLinkedQueue:355` |

##### `getDirectMethodForConstant(byte, Class, MemberName)` (`java.lang.invoke.MethodHandles$Lookup`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `java.lang.invoke.MethodHandles$Lookup:4314` |

##### `putMethodInfo(ByteVector)` (`jdk.internal.org.objectweb.asm.MethodWriter`)

|      % | Samples | Location                                           |
| -----: | ------: | -------------------------------------------------- |
| 100.0% |       1 | `jdk.internal.org.objectweb.asm.MethodWriter:2257` |

##### `stringFromByteBuffer(ByteBuffer, int)` (`jdk.internal.jimage.ImageStringsReader`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `jdk.internal.jimage.ImageStringsReader:270` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `inflate_fast` (`libzip.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |      44 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|    % | Samples | Caller                                      | Location       |
| ---: | ------: | ------------------------------------------- | -------------- |
| 8.0% |       2 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |
| 8.0% |       2 | `ciMethod::ensure_method_data`              | `libjvm.dylib` |
| 4.0% |       1 | `TypeAryPtr::add_offset`                    | `libjvm.dylib` |
| 4.0% |       1 | `TypeInterfaces::intersection_with`         | `libjvm.dylib` |
| 4.0% |       1 | `PhaseChaitin::build_ifg_physical`          | `libjvm.dylib` |

##### `SymbolTable::do_lookup` (`libjvm.dylib`)

|     % | Samples | Caller                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 78.3% |      18 | `SymbolTable::lookup_only`                     | `libjvm.dylib` |
| 13.0% |       3 | `SymbolTable::new_symbol`                      | `libjvm.dylib` |
|  8.7% |       2 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      22 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |      14 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                                      | Location       |
| ----: | ------: | ------------------------------------------- | -------------- |
| 14.3% |       2 | `jni_GetPrimitiveArrayCritical`             | `libjvm.dylib` |
| 14.3% |       2 | `InterpreterRuntime::resolve_from_cache`    | `libjvm.dylib` |
| 14.3% |       2 | `Unsafe_AllocateInstance`                   | `libjvm.dylib` |
|  7.1% |       1 | `JVM_Clone`                                 | `libjvm.dylib` |
|  7.1% |       1 | `InterpreterRuntime::build_method_counters` | `libjvm.dylib` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

|     % | Samples | Caller                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 75.0% |       9 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
| 25.0% |       3 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      11 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      11 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 90.9% |      10 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |
|  9.1% |       1 | `InstanceKlass::find_local_method`      | `libjvm.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |      10 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|     % | Samples | Caller                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 20.0% |       2 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
| 20.0% |       2 | `MarkBitMap::do_clear`               | `libjvm.dylib` |
| 10.0% |       1 | `Dict::Insert`                       | `libjvm.dylib` |
| 10.0% |       1 | `LinearScan::do_linear_scan`         | `libjvm.dylib` |
| 10.0% |       1 | `NullCheckEliminator::iterate_one`   | `libjvm.dylib` |

##### `_platform_memmove` (`libsystem_platform.dylib`)

|     % | Samples | Caller                           | Location            |
| ----: | ------: | -------------------------------- | ------------------- |
| 20.0% |       2 | `ImmutableOopMapBuilder::build`  | `libjvm.dylib`      |
| 10.0% |       1 | `PhaseOutput::Output`            | `libjvm.dylib`      |
| 10.0% |       1 | `__vfprintf`                     | `libsystem_c.dylib` |
| 10.0% |       1 | `Node::out_grow`                 | `libjvm.dylib`      |
| 10.0% |       1 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib`      |

##### `PhaseLive::compute` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       9 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `__psynch_mutexdrop` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                                | Location                  |
| -----: | ------: | ------------------------------------- | ------------------------- |
| 100.0% |       9 | `_pthread_mutex_firstfit_unlock_slow` | `libsystem_pthread.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       9 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|      % | Samples | Caller                                            | Location       |
| -----: | ------: | ------------------------------------------------- | -------------- |
| 100.0% |       8 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |       8 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |

##### `IntervalWalker::walk_to` (`libjvm.dylib`)

|     % | Samples | Caller                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 87.5% |       7 | `IntervalWalker::walk_to`     | `libjvm.dylib` |
| 12.5% |       1 | `LinearScan::compute_oop_map` | `libjvm.dylib` |

##### `UTF8::is_legal_utf8` (`libjvm.dylib`)

|      % | Samples | Caller                                         | Location       |
| -----: | ------: | ---------------------------------------------- | -------------- |
| 100.0% |       8 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       7 | `Matcher::match` | `libjvm.dylib` |

##### `Node_Backward_Iterator::next` (`libjvm.dylib`)

|     % | Samples | Caller                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 57.1% |       4 | `PhaseCFG::schedule_late`      | `libjvm.dylib` |
| 42.9% |       3 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|     % | Samples | Caller                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 57.1% |       4 | `PhaseIFG::effective_degree`       | `libjvm.dylib` |
| 28.6% |       2 | `PhaseChaitin::Simplify`           | `libjvm.dylib` |
| 14.3% |       1 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |

##### `LinearScanWalker::free_collect_inactive_fixed` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |       7 | `LinearScanWalker::alloc_free_reg` | `libjvm.dylib` |

##### `LinearScan::assign_reg_num` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |       7 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `LinearScan::build_intervals` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |       7 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `sys_icache_invalidate` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                       | Location       |
| ----: | ------: | -------------------------------------------- | -------------- |
| 42.9% |       3 | `nmethod::nmethod`                           | `libjvm.dylib` |
| 28.6% |       2 | `nmethod::oops_do_process_weak`              | `libjvm.dylib` |
| 14.3% |       1 | `ICStub::finalize`                           | `libjvm.dylib` |
| 14.3% |       1 | `CompiledMethod::cleanup_inline_caches_impl` | `libjvm.dylib` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`)

|     % | Samples | Caller                                                              | Location       |
| ----: | ------: | ------------------------------------------------------------------- | -------------- |
| 71.4% |       5 | `G1ParScanThreadState::steal_and_trim_queue`                        | `libjvm.dylib` |
| 14.3% |       1 | `G1ScanHRForRegionClosure::scan_memregion`                          | `libjvm.dylib` |
| 14.3% |       1 | `void G1ParCopyClosure<(G1Barrier)0, false>::do_oop_work<oopDesc*>` | `libjvm.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |       7 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|      % | Samples | Caller                                         | Location       |
| -----: | ------: | ---------------------------------------------- | -------------- |
| 100.0% |       7 | `void G1CMTask::process_grey_task_entry<true>` | `libjvm.dylib` |

##### `inflate_table` (`libzip.dylib`)

|      % | Samples | Caller    | Location       |
| -----: | ------: | --------- | -------------- |
| 100.0% |       7 | `inflate` | `libzip.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       6 | `PhaseIdealLoop::build_loop_late` | `libjvm.dylib` |

##### `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       6 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 50.0% |       3 | `ciEnv::get_klass_by_name_impl`  | `libjvm.dylib` |
| 16.7% |       1 | `ciBytecodeStream::get_method`   | `libjvm.dylib` |
| 16.7% |       1 | `ciEnv::get_method_from_handle`  | `libjvm.dylib` |
| 16.7% |       1 | `ciEnv::get_klass_by_index_impl` | `libjvm.dylib` |

##### `Node::dominates` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |       6 | `MemNode::all_controls_dominate` | `libjvm.dylib` |

##### `Compile::identify_useful_nodes` (`libjvm.dylib`)

|     % | Samples | Caller                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 50.0% |       3 | `PhaseRemoveUseless::PhaseRemoveUseless`      | `libjvm.dylib` |
| 50.0% |       3 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       6 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `LIR_OpVisitState::visit` (`libjvm.dylib`)

|     % | Samples | Caller                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 50.0% |       3 | `LinearScan::assign_reg_num`          | `libjvm.dylib` |
| 33.3% |       2 | `LinearScan::compute_local_live_sets` | `libjvm.dylib` |
| 16.7% |       1 | `LinearScan::do_linear_scan`          | `libjvm.dylib` |

##### `SymbolTable::lookup_shared` (`libjvm.dylib`)

|     % | Samples | Caller                     | Location       |
| ----: | ------: | -------------------------- | -------------- |
| 83.3% |       5 | `SymbolTable::lookup_only` | `libjvm.dylib` |
| 16.7% |       1 | `SymbolTable::new_symbol`  | `libjvm.dylib` |

##### `fwd_copy_again` (`libjvm.dylib`)

|     % | Samples | Caller                                          | Location       |
| ----: | ------: | ----------------------------------------------- | -------------- |
| 80.0% |       4 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |
| 20.0% |       1 | `CodeBuffer::copy_code_to`                      | `libjvm.dylib` |

##### `resize()` (`java.util.HashMap`)

|      % | Samples | Caller                                          | Location            |
| -----: | ------: | ----------------------------------------------- | ------------------- |
| 100.0% |       3 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `itable stub` (`<unknown>`)

|     % | Samples | Caller                                   | Location                                           |
| ----: | ------: | ---------------------------------------- | -------------------------------------------------- |
| 33.3% |       1 | `collectionSizeOrDefault(Iterable, int)` | `kotlin.collections.CollectionsKt__IterablesKt`    |
| 33.3% |       1 | `zip(Iterable, Iterable)`                | `kotlin.collections.CollectionsKt___CollectionsKt` |
| 33.3% |       1 | `hasNext()`                              | `kotlin.sequences.TransformingSequence$iterator$1` |

##### `buildDefaultFlow(CFGNode, Function2)` (`org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer`)

|      % | Samples | Caller                                  | Location                                                   |
| -----: | ------: | --------------------------------------- | ---------------------------------------------------------- |
| 100.0% |       2 | `mergeIncomingFlow(CFGNode, Function2)` | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer` |

##### `loadFunction(ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin)` (`org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`)

|      % | Samples | Caller                                                                                                                              | Location                                                         |
| -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 100.0% |       2 | `loadFunction$default(FirMemberDeserializer, ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin, int, Object)` | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer` |

##### `processGivenConstraints(ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector, Collection)` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`)

|      % | Samples | Caller                                                                                                                      | Location                                                                     |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 100.0% |       2 | `processConstraintsIgnoringForksData(ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector` |

##### `getNodeType(AbstractInsnNode)` (`org.jetbrains.kotlin.codegen.optimization.common.UtilKt`)

|     % | Samples | Caller                                                           | Location                                                                  |
| ----: | ------: | ---------------------------------------------------------------- | ------------------------------------------------------------------------- |
| 50.0% |       1 | `analyzeInstruction(AbstractInsnNode, int, Frame, Frame, Frame)` | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`           |
| 50.0% |       1 | `transform(String, MethodNode)`                                  | `org.jetbrains.kotlin.codegen.optimization.NegatedJumpsMethodTransformer` |

##### `ensureCapacityInternal(int)` (`java.lang.AbstractStringBuilder`)

|     % | Samples | Caller           | Location                          |
| ----: | ------: | ---------------- | --------------------------------- |
| 50.0% |       1 | `append(String)` | `java.lang.AbstractStringBuilder` |
| 50.0% |       1 | `append(char)`   | `java.lang.AbstractStringBuilder` |

##### `isLatin1()` (`java.lang.String`)

|      % | Samples | Caller        | Location           |
| -----: | ------: | ------------- | ------------------ |
| 100.0% |       2 | `charAt(int)` | `java.lang.String` |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|     % | Samples | Caller                                                  | Location                                                          |
| ----: | ------: | ------------------------------------------------------- | ----------------------------------------------------------------- |
| 50.0% |       1 | `<init>(ControlFlowGraph, FirExpression, FirLoop, int)` | `org.jetbrains.kotlin.fir.resolve.dfa.cfg.LoopConditionEnterNode` |
| 50.0% |       1 | `getValue(AbstractArrayMapOwner, KProperty)`            | `org.jetbrains.kotlin.util.NullableArrayMapAccessor`              |

##### `sanitizeStackTrace(Throwable)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Caller                            | Location                         |
| -----: | ------: | --------------------------------- | -------------------------------- |
| 100.0% |       2 | `throwParameterIsNullNPE(String)` | `kotlin.jvm.internal.Intrinsics` |

##### `zero_blocks` (`<unknown>`)

|      % | Samples | Caller        | Location                        |
| -----: | ------: | ------------- | ------------------------------- |
| 100.0% |       2 | `<init>(int)` | `java.io.ByteArrayOutputStream` |

##### `I2C/C2I adapters(0xbbb)` (`<unknown>`)

|     % | Samples | Caller                                            | Location                                                             |
| ----: | ------: | ------------------------------------------------- | -------------------------------------------------------------------- |
| 50.0% |       1 | `<init>(Object)`                                  | `java.lang.ref.Reference`                                            |
| 50.0% |       1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.jvm.JvmProtoBuf$JvmPropertySignature` |

##### `splitPath(CharSequence)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler`)

|      % | Samples | Caller                                 | Location                                                     |
| -----: | ------: | -------------------------------------- | ------------------------------------------------------------ |
| 100.0% |       1 | `createFile(ZipEntryDescription, Map)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler` |

##### `isInitialized()` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type`)

|      % | Samples | Caller            | Location                                           |
| -----: | ------: | ----------------- | -------------------------------------------------- |
| 100.0% |       1 | `isInitialized()` | `org.jetbrains.kotlin.metadata.ProtoBuf$TypeTable` |

##### `getFunction(int)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Class`)

|      % | Samples | Caller            | Location                                       |
| -----: | ------: | ----------------- | ---------------------------------------------- |
| 100.0% |       1 | `isInitialized()` | `org.jetbrains.kotlin.metadata.ProtoBuf$Class` |

##### `getChildren(LighterASTNode, FlyweightCapableTreeStructure)` (`org.jetbrains.kotlin.util.LightTreeUtilsKt`)

|      % | Samples | Caller                                                                       | Location                                                                         |
| -----: | ------: | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| 100.0% |       1 | `parsePackageParts$parse(LightTreeRawFirDeclarationBuilder, LighterASTNode)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder` |

##### `performLexing()` (`com.intellij.lang.impl.TokenSequence$Builder`)

|      % | Samples | Caller                               | Location                               |
| -----: | ------: | ------------------------------------ | -------------------------------------- |
| 100.0% |       1 | `performLexing(CharSequence, Lexer)` | `com.intellij.lang.impl.TokenSequence` |

##### `advance()` (`org.jetbrains.kotlin.lexer._JetLexer`)

|      % | Samples | Caller          | Location                         |
| -----: | ------: | --------------- | -------------------------------- |
| 100.0% |       1 | `locateToken()` | `com.intellij.lexer.FlexAdapter` |

##### `readSourceFileWithMapping(InputStreamReader)` (`org.jetbrains.kotlin.KtSourceFileLinesMappingKt`)

|      % | Samples | Caller                                                                        | Location                                       |
| -----: | ------: | ----------------------------------------------------------------------------- | ---------------------------------------------- |
| 100.0% |       1 | `buildFirViaLightTree(FirSession, Collection, DiagnosticReporter, Function2)` | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt` |

##### `isExpression(LighterASTNode)` (`org.jetbrains.kotlin.ElementTypeUtils`)

|      % | Samples | Caller                                       | Location                                                                         |
| -----: | ------: | -------------------------------------------- | -------------------------------------------------------------------------------- |
| 100.0% |       1 | `convertFunctionDeclaration(LighterASTNode)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder` |

##### `advanceLexer()` (`com.intellij.lang.impl.PsiBuilderAdapter`)

|      % | Samples | Caller           | Location                                                             |
| -----: | ------: | ---------------- | -------------------------------------------------------------------- |
| 100.0% |       1 | `advanceLexer()` | `org.jetbrains.kotlin.parsing.SemanticWhitespaceAwarePsiBuilderImpl` |

##### `convertBackingField(LighterASTNode, FirPropertySymbol, ModifierList, FirTypeRef, boolean, List, LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder`)

|      % | Samples | Caller                                                     | Location                                                                         |
| -----: | ------: | ---------------------------------------------------------- | -------------------------------------------------------------------------------- |
| 100.0% |       1 | `convertPropertyDeclaration(LighterASTNode, ClassWrapper)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder` |

##### `<init>(ConeKotlinType, List, List, List, FirExpression, FirExpression, FirExpression, KtSourceElement, List, FirArgumentList, FirNamedReference, FirFunctionCallOrigin, DefaultConstructorMarker)` (`org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl`)

|      % | Samples | Caller    | Location                                                              |
| -----: | ------: | --------- | --------------------------------------------------------------------- |
| 100.0% |       1 | `build()` | `org.jetbrains.kotlin.fir.expressions.builder.FirFunctionCallBuilder` |

##### `getTopLevelClassifierNamesInPackage(Map, FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirBuiltinSymbolProvidersKt`)

|      % | Samples | Caller                                               | Location                                                        |
| -----: | ------: | ---------------------------------------------------- | --------------------------------------------------------------- |
| 100.0% |       1 | `platformSpecificDefaultImports_delegate$lambda$0()` | `org.jetbrains.kotlin.fir.resolve.FirJvmDefaultImportsProvider` |

##### `getKotlinBinaryClassOrClassFileContent(VirtualFile, MetadataVersion, byte[], PerformanceManager)` (`org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion`)

|      % | Samples | Caller                                                                                                                                                    | Location                                                            |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| 100.0% |       1 | `getKotlinBinaryClassOrClassFileContent$default(KotlinBinaryClassCache$Companion, VirtualFile, MetadataVersion, byte[], PerformanceManager, int, Object)` | `org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion` |

##### `mayHaveTopLevelClassifier(ClassId)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`)

|      % | Samples | Caller                                 | Location                                                                            |
| -----: | ------: | -------------------------------------- | ----------------------------------------------------------------------------------- |
| 100.0% |       1 | `getClassLikeSymbolByClassId(ClassId)` | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider` |

##### `readUtfNonAscii(int, int, int, char[])` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % | Samples | Caller                      | Location                                      |
| -----: | ------: | --------------------------- | --------------------------------------------- |
| 100.0% |       1 | `readUtf(int, int, char[])` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

|      % | Samples | Caller                                                                   | Location                                                                                                 |
| -----: | ------: | ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `transformPropertyAccessExpression(FirPropertyAccessExpression, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### `closeEntry()` (`java.util.zip.ZipInputStream`)

|      % | Samples | Caller           | Location                       |
| -----: | ------: | ---------------- | ------------------------------ |
| 100.0% |       1 | `getNextEntry()` | `java.util.zip.ZipInputStream` |

##### `nextNode()` (`java.util.HashMap$HashIterator`)

|      % | Samples | Caller   | Location                          |
| -----: | ------: | -------- | --------------------------------- |
| 100.0% |       1 | `next()` | `java.util.HashMap$ValueIterator` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|      % | Samples | Caller                                          | Location                       |
| -----: | ------: | ----------------------------------------------- | ------------------------------ |
| 100.0% |       1 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `getLongUnaligned(Object, long)` (`jdk.internal.misc.Unsafe`)

|      % | Samples | Caller                                                     | Location                          |
| -----: | ------: | ---------------------------------------------------------- | --------------------------------- |
| 100.0% |       1 | `vectorizedMismatch(Object, long, Object, long, int, int)` | `jdk.internal.util.ArraysSupport` |

##### `methodType(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

|      % | Samples | Caller                          | Location                          |
| -----: | ------: | ------------------------------- | --------------------------------- |
| 100.0% |       1 | `canonicalize(MethodType, int)` | `java.lang.invoke.MethodTypeForm` |

##### `<init>(int, float, int)` (`java.util.concurrent.ConcurrentHashMap`)

|      % | Samples | Caller                      | Location                                                           |
| -----: | ------: | --------------------------- | ------------------------------------------------------------------ |
| 100.0% |       1 | `createConcurrentHashMap()` | `kotlin.reflect.jvm.internal.impl.storage.LockBasedStorageManager` |

##### `lastIndexOf(byte[], int, int)` (`java.lang.StringLatin1`)

|      % | Samples | Caller                  | Location           |
| -----: | ------: | ----------------------- | ------------------ |
| 100.0% |       1 | `lastIndexOf(int, int)` | `java.lang.String` |

##### `size()` (`java.util.Collections$EmptyList`)

|      % | Samples | Caller               | Location                                                  |
| -----: | ------: | -------------------- | --------------------------------------------------------- |
| 100.0% |       1 | `getArgumentCount()` | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type` |

##### `flip()` (`java.nio.Buffer`)

|      % | Samples | Caller   | Location              |
| -----: | ------: | -------- | --------------------- |
| 100.0% |       1 | `flip()` | `java.nio.ByteBuffer` |

##### `startsWith(String)` (`java.lang.String`)

|      % | Samples | Caller                                | Location                              |
| -----: | ------: | ------------------------------------- | ------------------------------------- |
| 100.0% |       1 | `startsWith(String, String, boolean)` | `kotlin.text.StringsKt__StringsJVMKt` |

##### `offer(Object)` (`java.util.concurrent.ConcurrentLinkedQueue`)

|      % | Samples | Caller        | Location                                     |
| -----: | ------: | ------------- | -------------------------------------------- |
| 100.0% |       1 | `add(Object)` | `java.util.concurrent.ConcurrentLinkedQueue` |

##### `constructor-impl(Object)` (`kotlin.Result`)

|      % | Samples | Caller  | Location                            |
| -----: | ------: | ------- | ----------------------------------- |
| 100.0% |       1 | `run()` | `kotlinx.coroutines.DispatchedTask` |

##### `getDirectMethodForConstant(byte, Class, MemberName)` (`java.lang.invoke.MethodHandles$Lookup`)

|      % | Samples | Caller                                                  | Location                                |
| -----: | ------: | ------------------------------------------------------- | --------------------------------------- |
| 100.0% |       1 | `linkMethodHandleConstant(byte, Class, String, Object)` | `java.lang.invoke.MethodHandles$Lookup` |

##### `putMethodInfo(ByteVector)` (`jdk.internal.org.objectweb.asm.MethodWriter`)

|      % | Samples | Caller          | Location                                     |
| -----: | ------: | --------------- | -------------------------------------------- |
| 100.0% |       1 | `toByteArray()` | `jdk.internal.org.objectweb.asm.ClassWriter` |

##### `stringFromByteBuffer(ByteBuffer, int)` (`jdk.internal.jimage.ImageStringsReader`)

|      % | Samples | Caller           | Location                               |
| -----: | ------: | ---------------- | -------------------------------------- |
| 100.0% |       1 | `getString(int)` | `jdk.internal.jimage.BasicImageReader` |

##### `I2C/C2I adapters(0xbbbbb)` (`<unknown>`)

|      % | Samples | Caller                                                                                                         | Location                                                              |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| 100.0% |       1 | `processCandidate$default(ResolutionStageRunner, Candidate, ResolutionContext, boolean, boolean, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner` |

##### `I2C/C2I adapters(0xbbbaa)` (`<unknown>`)

|      % | Samples | Caller                                                                                                      | Location                                         |
| -----: | ------: | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| 100.0% |       1 | `isSubtypeOfForSingleClassifierType(TypeCheckerState, TypeSystemContext, RigidTypeMarker, RigidTypeMarker)` | `org.jetbrains.kotlin.types.AbstractTypeChecker` |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|      % | Samples | Caller                                                         | Location                                  |
| -----: | ------: | -------------------------------------------------------------- | ----------------------------------------- |
| 100.0% |       1 | `dispatchReceiverClassLookupTagOrNull(FirCallableDeclaration)` | `org.jetbrains.kotlin.fir.ClassMembersKt` |

##### `I2C/C2I adapters(0xaaa)` (`<unknown>`)

|      % | Samples | Caller                  | Location                  |
| -----: | ------: | ----------------------- | ------------------------- |
| 100.0% |       1 | `put(byte[], int, int)` | `java.nio.HeapByteBuffer` |

##### `I2C/C2I adapters(0xbabbab)` (`<unknown>`)

|      % | Samples | Caller                       | Location                                               |
| -----: | ------: | ---------------------------- | ------------------------------------------------------ |
| 100.0% |       1 | `accept(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.expressions.FirFunctionCall` |

##### `I2C/C2I adapters(0xbbbbbba)` (`<unknown>`)

|      % | Samples | Caller       | Location                                        |
| -----: | ------: | ------------ | ----------------------------------------------- |
| 100.0% |       1 | `visitEnd()` | `org.jetbrains.org.objectweb.asm.MethodVisitor` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|      % | Samples | Caller                                    | Location                                                   |
| -----: | ------: | ----------------------------------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                         | Location                                                |
| ----: | ------: | ------------------------------------------------ | ------------------------------------------------------- |
| 66.4% |     873 | `_pthread_start`                                 | `libsystem_pthread.dylib`                               |
| 66.4% |     873 | `thread_start`                                   | `libsystem_pthread.dylib`                               |
| 66.3% |     872 | `Thread::call_run`                               | `libjvm.dylib`                                          |
| 66.3% |     872 | `thread_native_entry`                            | `libjvm.dylib`                                          |
| 59.5% |     783 | `JavaThread::thread_main_inner`                  | `libjvm.dylib`                                          |
| 59.4% |     781 | `CompileBroker::compiler_thread_loop`            | `libjvm.dylib`                                          |
| 58.4% |     768 | `CompileBroker::invoke_compiler_on_method`       | `libjvm.dylib`                                          |
| 39.8% |     523 | `C2Compiler::compile_method`                     | `libjvm.dylib`                                          |
| 39.7% |     522 | `Compile::Compile`                               | `libjvm.dylib`                                          |
| 33.1% |     435 | `run(String[])`                                  | `org.jetbrains.kotlin.preloading.Preloader`             |
| 33.1% |     435 | `main(String[])`                                 | `org.jetbrains.kotlin.preloading.Preloader`             |
| 27.5% |     362 | `invoke(Object, Object[])`                       | `java.lang.reflect.Method`                              |
| 27.5% |     361 | `main(String[])`                                 | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 27.5% |     361 | `main(String[])`                                 | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 27.5% |     361 | `invokeStatic(Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x0000007001008000`    |
| 27.5% |     361 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001009400`     |
| 27.5% |     361 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                      |
| 27.5% |     361 | `invokeImpl(Object, Object[])`                   | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 27.5% |     361 | `invoke(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 27.4% |     360 | `doMain(CLICompiler, String[])`                  | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

#### Categories

##### Compiler

|     % | Samples | Function                                    | Location       |
| ----: | ------: | ------------------------------------------- | -------------- |
| 59.4% |     781 | `CompileBroker::compiler_thread_loop`       | `libjvm.dylib` |
| 58.4% |     768 | `CompileBroker::invoke_compiler_on_method`  | `libjvm.dylib` |
| 39.8% |     523 | `C2Compiler::compile_method`                | `libjvm.dylib` |
| 39.7% |     522 | `Compile::Compile`                          | `libjvm.dylib` |
| 20.3% |     267 | `Compile::Code_Gen`                         | `libjvm.dylib` |
| 18.1% |     238 | `Compilation::compile_method`               | `libjvm.dylib` |
| 18.1% |     238 | `Compilation::Compilation`                  | `libjvm.dylib` |
| 16.6% |     218 | `Compilation::compile_java_method`          | `libjvm.dylib` |
| 13.6% |     179 | `Compile::Optimize`                         | `libjvm.dylib` |
| 10.9% |     143 | `PhaseChaitin::Register_Allocate`           | `libjvm.dylib` |
|  7.5% |      99 | `PhaseIdealLoop::optimize`                  | `libjvm.dylib` |
|  7.2% |      95 | `Compilation::emit_lir`                     | `libjvm.dylib` |
|  6.8% |      90 | `PhaseIdealLoop::build_and_optimize`        | `libjvm.dylib` |
|  6.8% |      90 | `PhaseIdealLoop::PhaseIdealLoop`            | `libjvm.dylib` |
|  6.4% |      84 | `Compilation::build_hir`                    | `libjvm.dylib` |
|  5.6% |      74 | `LinearScan::do_linear_scan`                | `libjvm.dylib` |
|  4.6% |      61 | `GraphBuilder::GraphBuilder`                | `libjvm.dylib` |
|  4.1% |      54 | `GraphBuilder::iterate_all_blocks`          | `libjvm.dylib` |
|  4.0% |      53 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |
|  3.8% |      50 | `Matcher::match`                            | `libjvm.dylib` |

##### Native

|     % | Samples | Function                                        | Location                  |
| ----: | ------: | ----------------------------------------------- | ------------------------- |
| 66.4% |     873 | `_pthread_start`                                | `libsystem_pthread.dylib` |
| 66.4% |     873 | `thread_start`                                  | `libsystem_pthread.dylib` |
| 66.3% |     872 | `Thread::call_run`                              | `libjvm.dylib`            |
| 66.3% |     872 | `thread_native_entry`                           | `libjvm.dylib`            |
| 59.5% |     783 | `JavaThread::thread_main_inner`                 | `libjvm.dylib`            |
| 18.1% |     238 | `Compiler::compile_method`                      | `libjvm.dylib`            |
|  6.4% |      84 | `WorkerThread::run`                             | `libjvm.dylib`            |
|  4.9% |      65 | `Parse::Parse`                                  | `libjvm.dylib`            |
|  4.9% |      65 | `ParseGenerator::generate`                      | `libjvm.dylib`            |
|  4.8% |      63 | `Parse::do_one_block`                           | `libjvm.dylib`            |
|  4.8% |      63 | `Parse::do_all_blocks`                          | `libjvm.dylib`            |
|  4.7% |      62 | `Java_java_lang_ClassLoader_defineClass1`       | `libjava.dylib`           |
|  4.6% |      61 | `IRScope::IRScope`                              | `libjvm.dylib`            |
|  4.6% |      61 | `IR::IR`                                        | `libjvm.dylib`            |
|  4.6% |      61 | `SystemDictionary::resolve_class_from_stream`   | `libjvm.dylib`            |
|  4.6% |      61 | `jvm_define_class_common`                       | `libjvm.dylib`            |
|  4.6% |      61 | `JVM_DefineClassWithSource`                     | `libjvm.dylib`            |
|  4.5% |      59 | `KlassFactory::create_from_stream`              | `libjvm.dylib`            |
|  4.4% |      58 | `Parse::do_call`                                | `libjvm.dylib`            |
|  4.4% |      58 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib`            |

##### Ours

|     % | Samples | Function                                                                                                                                      | Location                                                |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 33.1% |     435 | `run(String[])`                                                                                                                               | `org.jetbrains.kotlin.preloading.Preloader`             |
| 33.1% |     435 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`             |
| 27.5% |     361 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 27.5% |     361 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 27.4% |     360 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 27.3% |     359 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 27.2% |     358 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 27.2% |     358 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 27.2% |     358 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 26.8% |     353 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 26.2% |     344 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 26.2% |     344 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 26.2% |     344 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 26.1% |     343 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 26.1% |     343 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 26.1% |     343 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 26.0% |     342 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 25.9% |     340 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
| 25.9% |     340 | `phaseBody(LoggingContext, Object)`                                                                                                           | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
| 25.9% |     340 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### Standard library

|     % | Samples | Function                                                                        | Location                                              |
| ----: | ------: | ------------------------------------------------------------------------------- | ----------------------------------------------------- |
| 27.5% |     362 | `invoke(Object, Object[])`                                                      | `java.lang.reflect.Method`                            |
| 27.5% |     361 | `invokeStatic(Object, Object)`                                                  | `java.lang.invoke.LambdaForm$DMH.0x0000007001008000`  |
| 27.5% |     361 | `invoke(Object, Object, Object)`                                                | `java.lang.invoke.LambdaForm$MH.0x0000007001009400`   |
| 27.5% |     361 | `invokeExact_MT(Object, Object, Object, Object)`                                | `java.lang.invoke.Invokers$Holder`                    |
| 27.5% |     361 | `invokeImpl(Object, Object[])`                                                  | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 27.5% |     361 | `invoke(Object, Object[])`                                                      | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
|  4.9% |      64 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                               |
|  4.9% |      64 | `defineClass(String, byte[], int, int, ProtectionDomain)`                       | `java.lang.ClassLoader`                               |
|  4.9% |      64 | `defineClass(String, byte[], int, int)`                                         | `java.lang.ClassLoader`                               |
|  4.9% |      64 | `loadClass(String, boolean)`                                                    | `java.lang.ClassLoader`                               |
|  4.8% |      63 | `read(byte[], int, int)`                                                        | `java.util.zip.ZipInputStream`                        |
|  4.8% |      63 | `read(byte[])`                                                                  | `java.io.FilterInputStream`                           |
|  4.6% |      60 | `read(byte[], int, int)`                                                        | `java.util.zip.InflaterInputStream`                   |
|  4.5% |      59 | `inflate(byte[], int, int)`                                                     | `java.util.zip.Inflater`                              |
|  4.4% |      58 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                   | `java.util.zip.Inflater`                              |
|  4.0% |      53 | `resumeWith(Object)`                                                            | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |
|  1.2% |      16 | `getValue()`                                                                    | `kotlin.SynchronizedLazyImpl`                         |
|  1.1% |      14 | `getValue()`                                                                    | `kotlin.SafePublicationLazyImpl`                      |
|  0.8% |      11 | `linkCallSite(Object, Object, Object, Object, Object, Object[])`                | `java.lang.invoke.MethodHandleNatives`                |
|  0.8% |      11 | `getValue()`                                                                    | `kotlin.UnsafeLazyImpl`                               |

##### JIT

|    % | Samples | Function                      | Location    |
| ---: | ------: | ----------------------------- | ----------- |
| 0.2% |       3 | `itable stub`                 | `<unknown>` |
| 0.2% |       2 | `zero_blocks`                 | `<unknown>` |
| 0.2% |       2 | `I2C/C2I adapters(0xbbb)`     | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbbbb)`   | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbbaa)`   | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xb)`       | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xaaa)`     | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbabbab)`  | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbbbbba)` | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbb)`      | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 99.9% |     872 | `thread_native_entry` | `libjvm.dylib` |
|  0.1% |       1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |     873 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 89.8% |     783 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  9.6% |      84 | `WorkerThread::run`             | `libjvm.dylib` |
|  0.3% |       3 | `VMThread::run`                 | `libjvm.dylib` |
|  0.2% |       2 | `WatcherThread::run`            | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     872 | `Thread::call_run` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|     % | Samples | Callee                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 99.7% |     781 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |
|  0.3% |       2 | `ServiceThread::service_thread_entry` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 98.3% |     768 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  1.7% |      13 | `CompileQueue::get`                        | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 68.1% |     523 | `C2Compiler::compile_method`    | `libjvm.dylib` |
| 31.0% |     238 | `Compiler::compile_method`      | `libjvm.dylib` |
|  0.4% |       3 | `ciEnv::get_method_from_handle` | `libjvm.dylib` |
|  0.3% |       2 | `ciEnv::~ciEnv`                 | `libjvm.dylib` |
|  0.1% |       1 | `ciEnv::ciEnv`                  | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee              | Location       |
| ----: | ------: | ------------------- | -------------- |
| 99.8% |     522 | `Compile::Compile`  | `libjvm.dylib` |
|  0.2% |       1 | `Compile::~Compile` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 51.1% |     267 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 34.3% |     179 | `Compile::Optimize`                      | `libjvm.dylib` |
| 12.3% |      64 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  1.3% |       7 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.8% |       4 | `CallGenerator::for_inline`              | `libjvm.dylib` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|     % | Samples | Callee                                                                       | Location                                               |
| ----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 83.0% |     361 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                             |
| 16.8% |      73 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
|  0.2% |       1 | `stream()`                                                                   | `java.util.Collection`                                 |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % | Samples | Callee          | Location                                    |
| -----: | ------: | --------------- | ------------------------------------------- |
| 100.0% |     435 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|     % | Samples | Callee                     | Location                                          |
| ----: | ------: | -------------------------- | ------------------------------------------------- |
| 99.7% |     361 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |
|  0.3% |       1 | `acquireMethodAccessor()`  | `java.lang.reflect.Method`                        |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|     % | Samples | Callee                          | Location                                                |
| ----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 99.7% |     360 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.3% |       1 | `<init>()`                      | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee           | Location                                               |
| -----: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% |     361 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001008000`)

|      % | Samples | Callee           | Location                                     |
| -----: | ------: | ---------------- | -------------------------------------------- |
| 100.0% |     361 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001009400`)

|      % | Samples | Callee                         | Location                                             |
| -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% |     361 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001008000` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     361 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001009400` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee                                           | Location                           |
| -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% |     361 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee                         | Location                                          |
| -----: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% |     361 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|     % | Samples | Callee                                                                                             | Location                                                |
| ----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 99.7% |     359 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.3% |       1 | `setupIdeaStandaloneExecution()`                                                                   | `org.jetbrains.kotlin.cli.jvm.compiler.CompatKt`        |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|     % | Samples | Callee                                                 | Location                                                |
| ----: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 99.7% |     358 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.3% |       1 | `defaultMessageRenderer()`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                                               | Location                                                                |
| ----: | ------: | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| 98.6% |     353 | `exec(MessageCollector, Services, CommonCompilerArguments)`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|  1.1% |       4 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |
|  0.3% |       1 | `createArguments()`                                                                  | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                            |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                                                   | Location                                      |
| -----: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 100.0% |     358 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                                         | Location                                      |
| -----: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% |     358 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                          | Location                                      |
| ----: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| 97.5% |     344 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |
|  2.5% |       9 | `<clinit>()`                                                    | `org.jetbrains.kotlin.cli.common.ArgumentsKt` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|     % | Samples | Callee                                                         | Location                                                |
| ----: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 99.7% |     343 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|  0.3% |       1 | `getDefaultPerformanceManager()`                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee                                                                | Location                                     |
| -----: | ------: | --------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     344 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                                                                 | Location                                     |
| -----: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     344 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                                         | Location                                                            |
| ----: | ------: | ---------------------------------------------- | ------------------------------------------------------------------- |
| 99.7% |     342 | `runPhasedPipeline(ArgumentsPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`             |
|  0.3% |       1 | `<init>(MessageCollector, boolean, boolean)`   | `org.jetbrains.kotlin.cli.common.messages.GroupingMessageCollector` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                                                                              | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     343 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                                                                                                                        | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     343 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                                                                          | Location                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| 99.4% |     340 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`            | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                        |
|  0.6% |       2 | `reportToMessageCollector(BaseDiagnosticsCollector, MessageCollector, boolean)` | `org.jetbrains.kotlin.cli.common.fir.FirDiagnosticsCompilerResultsReporter` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|     % | Samples | Callee                           | Location                                                              |
| ----: | ------: | -------------------------------- | --------------------------------------------------------------------- |
| 67.1% |     228 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`      |
| 23.2% |      79 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`       |
|  8.5% |      29 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`        |
|  1.2% |       4 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmConfigurationPipelinePhase` |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Callee                                         | Location                                          |
| -----: | ------: | ---------------------------------------------- | ------------------------------------------------- |
| 100.0% |     340 | `phaseBody(PipelineContext, PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % | Samples | Callee                              | Location                                                         |
| -----: | ------: | ----------------------------------- | ---------------------------------------------------------------- |
| 100.0% |     340 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
|   5.3% |      18 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase`   |
|   1.8% |       6 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.ModuleLoweringPhase` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 53.6% |     143 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 18.7% |      50 | `Matcher::match`                  | `libjvm.dylib` |
| 16.1% |      43 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  8.6% |      23 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  1.1% |       3 | `PhaseOutput::install_code`       | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 91.6% |     218 | `Compilation::compile_java_method` | `libjvm.dylib` |
|  8.4% |      20 | `ciEnv::register_method`           | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |     238 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Callee                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     238 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 43.6% |      95 | `Compilation::emit_lir`        | `libjvm.dylib` |
| 38.5% |      84 | `Compilation::build_hir`       | `libjvm.dylib` |
| 17.0% |      37 | `Compilation::emit_code_body`  | `libjvm.dylib` |
|  0.5% |       1 | `IRScope::max_stack`           | `libjvm.dylib` |
|  0.5% |       1 | `ciMethod::ensure_method_data` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 27.9% |      50 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
| 27.4% |      49 | `Compile::optimize_loops`              | `libjvm.dylib` |
| 19.0% |      34 | `PhaseIterGVN::optimize`               | `libjvm.dylib` |
|  6.1% |      11 | `PhaseCCP::PhaseCCP`                   | `libjvm.dylib` |
|  4.5% |       8 | `PhaseMacroExpand::expand_macro_nodes` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 22.4% |      32 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
| 12.6% |      18 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
| 11.9% |      17 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| 10.5% |      15 | `PhaseLive::compute`                       | `libjvm.dylib` |
|  9.8% |      14 | `PhaseChaitin::gather_lrg_masks`           | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 90.9% |      90 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|  8.1% |       8 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |
|  1.0% |       1 | `Chunk::next_chop`               | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 77.9% |      74 | `LinearScan::do_linear_scan`     | `libjvm.dylib` |
| 21.1% |      20 | `BlockList::iterate_forward`     | `libjvm.dylib` |
|  1.1% |       1 | `ControlFlowOptimizer::optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 25.6% |      23 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| 24.4% |      22 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| 10.0% |       9 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
|  8.9% |       8 | `PhaseIdealLoop::build_loop_tree`      | `libjvm.dylib` |
|  8.9% |       8 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Callee                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      90 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|     % | Samples | Callee                                       | Location       |
| ----: | ------: | -------------------------------------------- | -------------- |
| 72.6% |      61 | `IR::IR`                                     | `libjvm.dylib` |
| 13.1% |      11 | `GlobalValueNumbering::GlobalValueNumbering` | `libjvm.dylib` |
|  6.0% |       5 | `IR::compute_use_counts`                     | `libjvm.dylib` |
|  2.4% |       2 | `IR::split_critical_edges`                   | `libjvm.dylib` |
|  2.4% |       2 | `IR::eliminate_null_checks`                  | `libjvm.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location                 |
| ----: | ------: | --------------------------------- | ------------------------ |
| 41.7% |      35 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
| 16.7% |      14 | `G1CMConcurrentMarkingTask::work` | `libjvm.dylib`           |
| 15.5% |      13 | `G1ParallelCleaningTask::work`    | `libjvm.dylib`           |
| 14.3% |      12 | `G1RebuildRSAndScrubTask::work`   | `libjvm.dylib`           |
|  3.6% |       3 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

|     % | Samples | Callee                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 33.8% |      25 | `LinearScan::allocate_registers`      | `libjvm.dylib` |
| 29.7% |      22 | `LinearScan::assign_reg_num`          | `libjvm.dylib` |
| 13.5% |      10 | `LinearScan::build_intervals`         | `libjvm.dylib` |
|  6.8% |       5 | `LinearScan::compute_local_live_sets` | `libjvm.dylib` |
|  4.1% |       3 | `LinearScan::resolve_data_flow`       | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 96.9% |      63 | `Parse::do_all_blocks`           | `libjvm.dylib` |
|  3.1% |       2 | `Parse::do_exits`                | `libjvm.dylib` |
|  3.1% |       2 | `Parse::create_entry_map`        | `libjvm.dylib` |
|  1.5% |       1 | `Parse::merge_common`            | `libjvm.dylib` |
|  1.5% |       1 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % | Samples | Callee                                    | Location       |
| -----: | ------: | ----------------------------------------- | -------------- |
| 100.0% |      65 | `Parse::Parse`                            | `libjvm.dylib` |
|   1.5% |       1 | `GraphKit::transfer_exceptions_into_jvms` | `libjvm.dylib` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                                    | Location                                                 |
| ----: | ------: | ----------------------------------------- | -------------------------------------------------------- |
| 96.9% |      62 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`                                          |
| 18.8% |      12 | `loadClass(String)`                       | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

|      % | Samples | Callee                                                                          | Location                |
| -----: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| 100.0% |      64 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |
|   1.6% |       1 | `postDefineClass(Class, ProtectionDomain)`                                      | `java.lang.ClassLoader` |

##### `defineClass(String, byte[], int, int)` (`java.lang.ClassLoader`)

|      % | Samples | Callee                                                    | Location                |
| -----: | ------: | --------------------------------------------------------- | ----------------------- |
| 100.0% |      64 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|      % | Samples | Callee                             | Location                                                 |
| -----: | ------: | ---------------------------------- | -------------------------------------------------------- |
| 100.0% |      64 | `findClass(String)`                | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|   1.6% |       1 | `findBootstrapClassOrNull(String)` | `java.lang.ClassLoader`                                  |

##### `Parse::do_one_block` (`libjvm.dylib`)

|     % | Samples | Callee                   | Location       |
| ----: | ------: | ------------------------ | -------------- |
| 92.1% |      58 | `Parse::do_call`         | `libjvm.dylib` |
| 14.3% |       9 | `Parse::do_field_access` | `libjvm.dylib` |
|  6.3% |       4 | `Parse::do_one_bytecode` | `libjvm.dylib` |
|  4.8% |       3 | `Parse::array_load`      | `libjvm.dylib` |
|  4.8% |       3 | `Parse::do_new`          | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % | Samples | Callee                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      63 | `Parse::do_one_block`      | `libjvm.dylib` |
|   1.6% |       1 | `BarrierSetC2::ideal_node` | `libjvm.dylib` |

##### `read(byte[], int, int)` (`java.util.zip.ZipInputStream`)

|     % | Samples | Callee                     | Location                            |
| ----: | ------: | -------------------------- | ----------------------------------- |
| 95.2% |      60 | `read(byte[], int, int)`   | `java.util.zip.InflaterInputStream` |
|  3.2% |       2 | `update(byte[], int, int)` | `java.util.zip.CRC32`               |
|  1.6% |       1 | `readEnd(ZipEntry)`        | `java.util.zip.ZipInputStream`      |

##### `read(byte[])` (`java.io.FilterInputStream`)

|      % | Samples | Callee                   | Location                       |
| -----: | ------: | ------------------------ | ------------------------------ |
| 100.0% |      63 | `read(byte[], int, int)` | `java.util.zip.ZipInputStream` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|     % | Samples | Callee                      | Location       |
| ----: | ------: | --------------------------- | -------------- |
| 98.4% |      61 | `JVM_DefineClassWithSource` | `libjvm.dylib` |
|  1.6% |       1 | `jni_GetByteArrayRegion`    | `libjvm.dylib` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

|     % | Samples | Callee                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 88.5% |      54 | `GraphBuilder::iterate_all_blocks`   | `libjvm.dylib` |
|  6.6% |       4 | `BlockListBuilder::BlockListBuilder` | `libjvm.dylib` |
|  3.3% |       2 | `GraphBuilder::setup_start_block`    | `libjvm.dylib` |
|  1.6% |       1 | `BlockBegin::iterate_preorder`       | `libjvm.dylib` |

##### `IRScope::IRScope` (`libjvm.dylib`)

|      % | Samples | Callee                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |      61 | `GraphBuilder::GraphBuilder` | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      61 | `IRScope::IRScope` | `libjvm.dylib` |

##### `SystemDictionary::resolve_class_from_stream` (`libjvm.dylib`)

|     % | Samples | Callee                                    | Location       |
| ----: | ------: | ----------------------------------------- | -------------- |
| 93.4% |      57 | `KlassFactory::create_from_stream`        | `libjvm.dylib` |
|  6.6% |       4 | `SystemDictionary::define_instance_class` | `libjvm.dylib` |

##### `jvm_define_class_common` (`libjvm.dylib`)

|      % | Samples | Callee                                        | Location       |
| -----: | ------: | --------------------------------------------- | -------------- |
| 100.0% |      61 | `SystemDictionary::resolve_class_from_stream` | `libjvm.dylib` |

##### `JVM_DefineClassWithSource` (`libjvm.dylib`)

|      % | Samples | Callee                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |      61 | `jvm_define_class_common` | `libjvm.dylib` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

|     % | Samples | Callee                      | Location                            |
| ----: | ------: | --------------------------- | ----------------------------------- |
| 98.3% |      59 | `inflate(byte[], int, int)` | `java.util.zip.Inflater`            |
|  1.7% |       1 | `fill()`                    | `java.util.zip.InflaterInputStream` |

##### `KlassFactory::create_from_stream` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 88.1% |      52 | `ClassFileParser::ClassFileParser`       | `libjvm.dylib` |
| 11.9% |       7 | `ClassFileParser::create_instance_klass` | `libjvm.dylib` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

|     % | Samples | Callee                                                        | Location                 |
| ----: | ------: | ------------------------------------------------------------- | ------------------------ |
| 98.3% |      58 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater` |
|  1.7% |       1 | `monitorexit_nofpu Runtime1 stub`                             | `<unknown>`              |

##### `Parse::do_call` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 69.0% |      40 | `PredictedCallGenerator::generate`         | `libjvm.dylib` |
| 55.2% |      32 | `ParseGenerator::generate`                 | `libjvm.dylib` |
| 25.9% |      15 | `Compile::call_generator`                  | `libjvm.dylib` |
| 10.3% |       6 | `LibraryIntrinsic::generate`               | `libjvm.dylib` |
|  3.4% |       2 | `LateInlineVirtualCallGenerator::generate` | `libjvm.dylib` |

##### `Java_java_util_zip_Inflater_inflateBytesBytes` (`libzip.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 75.9% |      44 | `inflate_fast`                  | `libzip.dylib` |
| 20.7% |      12 | `inflate`                       | `libzip.dylib` |
|  3.4% |       2 | `jni_GetPrimitiveArrayCritical` | `libjvm.dylib` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Callee                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |      58 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `GraphBuilder::iterate_all_blocks` (`libjvm.dylib`)

|     % | Samples | Callee                                      | Location       |
| ----: | ------: | ------------------------------------------- | -------------- |
| 98.1% |      53 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |
|  1.9% |       1 | `BlockBegin::set_end`                       | `libjvm.dylib` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 81.1% |      43 | `GraphBuilder::invoke`          | `libjvm.dylib` |
|  5.7% |       3 | `GraphBuilder::access_field`    | `libjvm.dylib` |
|  5.7% |       3 | `GraphBuilder::append_with_bci` | `libjvm.dylib` |
|  3.8% |       2 | `GraphBuilder::method_return`   | `libjvm.dylib` |
|  3.8% |       2 | `GraphBuilder::load_constant`   | `libjvm.dylib` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|     % | Samples | Callee                  | Location                                                                                                               |
| ----: | ------: | ----------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| 67.9% |      36 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`                                  |
| 43.4% |      23 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`                               |
| 11.3% |       6 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$2`                               |
|  9.4% |       5 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirInvokeResolveTowerExtension$enqueueResolverTasksForInvoke$3`          |
|  3.8% |       2 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask$processCandidatesWithGivenImplicitReceiverAsValue$1` |

##### `Matcher::match` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 76.0% |      38 | `Matcher::xform`                              | `libjvm.dylib` |
| 16.0% |       8 | `Matcher::find_shared`                        | `libjvm.dylib` |
|  8.0% |       4 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

|     % | Samples | Callee     | Location                                                                             |
| ----: | ------: | ---------- | ------------------------------------------------------------------------------------ |
| 18.8% |       3 | `invoke()` | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass$$Lambda.0x000000700160fd40` |
| 12.5% |       2 | `invoke()` | `org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile$$Lambda.0x000000700137ba80` |
| 12.5% |       2 | `invoke()` | `org.jetbrains.kotlin.builtins.DefaultBuiltIns$$Lambda.0x0000007001752950`           |
| 12.5% |       2 | `invoke()` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x00000070018913f0`   |
|  6.3% |       1 | `invoke()` | `org.jetbrains.kotlin.cli.common.CLICompiler$$Lambda.0x000000700100a000`             |

##### `getValue()` (`kotlin.SafePublicationLazyImpl`)

|     % | Samples | Callee     | Location                                                                                                   |
| ----: | ------: | ---------- | ---------------------------------------------------------------------------------------------------------- |
| 64.3% |       9 | `invoke()` | `kotlin.reflect.jvm.internal.DescriptorKProperty$$Lambda$0`                                                |
| 14.3% |       2 | `invoke()` | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer$$Lambda.0x00000070015d7710` |
|  7.1% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.ImplicitReceiverValue$$Lambda.0x00000070016563f0`                  |
|  7.1% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass$$Lambda.0x0000007001610238`                       |
|  7.1% |       1 | `invoke()` | `org.jetbrains.kotlin.ir.util.SymbolTableExtension$$Lambda.0x00000070017d1bb8`                             |

##### `linkCallSite(Object, Object, Object, Object, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

|     % | Samples | Callee                                                                        | Location                               |
| ----: | ------: | ----------------------------------------------------------------------------- | -------------------------------------- |
| 90.9% |      10 | `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |
|  9.1% |       1 | `intern()`                                                                    | `java.lang.String`                     |

##### `getValue()` (`kotlin.UnsafeLazyImpl`)

|     % | Samples | Callee     | Location                                                                                                 |
| ----: | ------: | ---------- | -------------------------------------------------------------------------------------------------------- |
| 63.6% |       7 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver$$Lambda.0x0000007001686d48`                      |
|  9.1% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate$$Lambda.0x0000007001670720`                  |
|  9.1% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.transformers.FirWhenExhaustivenessComputer$$Lambda.0x00000070016d25a0` |
|  9.1% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.java.enhancement.FirSignatureEnhancement$$Lambda.0x0000007001612418`           |
|  9.1% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerDataElementsForName$$Lambda.0x0000007001665e90`       |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.0% |      39 | `inflate_fast` (`libzip.dylib`) ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                |
| 1.7% |      22 | `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                      |
| 0.8% |      11 | `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                        |
| 0.8% |      11 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                   |
| 0.8% |      10 | `PhaseChaitin::elide_copy` (`libjvm.dylib`) ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                 |
| 0.7% |       9 | `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                |
| 0.7% |       9 | `PhaseLive::compute` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                    |
| 0.5% |       7 | `Matcher::xform` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.5% |       7 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.5% |       7 | `LinearScanWalker::free_collect_inactive_fixed` (`libjvm.dylib`) ← `LinearScanWalker::alloc_free_reg` ← `LinearScanWalker::activate_current` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                    |
| 0.5% |       7 | `LinearScan::build_intervals` (`libjvm.dylib`) ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                 |
| 0.5% |       7 | `LinearScan::assign_reg_num` (`libjvm.dylib`) ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                  |
| 0.5% |       6 | `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                              |
| 0.5% |       6 | `inflate_table` (`libzip.dylib`) ← `inflate` ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                   |
| 0.4% |       5 | `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`) ← `G1ParScanThreadState::steal_and_trim_queue` ← `G1ParEvacuateFollowersClosure::do_void` ← `G1EvacuateRegionsTask::evacuate_live_objects` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                         |
| 0.4% |       5 | `PhaseChaitin::build_ifg_virtual` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                       |
| 0.4% |       5 | `inflate_fast` (`libzip.dylib`) ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |
| 0.3% |       4 | `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`) ← `PhaseIdealLoop::build_loop_late` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                      |
| 0.3% |       4 | `PhaseIdealLoop::build_loop_tree` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                    |
| 0.3% |       4 | `Arena::contains` (`libjvm.dylib`) ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                     |

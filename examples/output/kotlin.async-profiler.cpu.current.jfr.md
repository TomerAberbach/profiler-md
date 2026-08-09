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

|    % | Samples | Function                                                                                                                                                 | Location                   |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 3.8% |      50 | `inflate_fast`                                                                                                                                           | `libzip.dylib`             |
| 2.2% |      29 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`             |
| 2.0% |      26 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
| 1.5% |      20 | `PhaseChaitin::Split`                                                                                                                                    | `libjvm.dylib`             |
| 1.4% |      19 | `PhaseChaitin::build_ifg_physical`                                                                                                                       | `libjvm.dylib`             |
| 1.4% |      18 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| 1.2% |      16 | `IndexSetIterator::advance_and_next`                                                                                                                     | `libjvm.dylib`             |
| 1.0% |      13 | `LinearScanWalker::free_collect_inactive_fixed`                                                                                                          | `libjvm.dylib`             |
| 0.9% |      12 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 0.9% |      12 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
| 0.8% |      11 | `PhaseChaitin::gather_lrg_masks`                                                                                                                         | `libjvm.dylib`             |
| 0.8% |      11 | `PhaseLive::add_liveout`                                                                                                                                 | `libjvm.dylib`             |
| 0.8% |      11 | `PhaseChaitin::elide_copy`                                                                                                                               | `libjvm.dylib`             |
| 0.8% |      10 | `trampoline_stub_Relocation::get_trampoline_for`                                                                                                         | `libjvm.dylib`             |
| 0.7% |       9 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
| 0.7% |       9 | `PhaseIdealLoop::Dominators`                                                                                                                             | `libjvm.dylib`             |
| 0.6% |       8 | `_platform_memmove`                                                                                                                                      | `libsystem_platform.dylib` |
| 0.6% |       8 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
| 0.6% |       8 | `LinearScanWalker::alloc_free_reg`                                                                                                                       | `libjvm.dylib`             |
| 0.6% |       8 | `PhaseIdealLoop::build_loop_early`                                                                                                                       | `libjvm.dylib`             |

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

##### Native

|    % | Samples | Function                                                                                                                                                 | Location                   |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 3.8% |      50 | `inflate_fast`                                                                                                                                           | `libzip.dylib`             |
| 2.2% |      29 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`             |
| 2.0% |      26 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
| 1.4% |      18 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| 0.9% |      12 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 0.9% |      12 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
| 0.8% |      10 | `trampoline_stub_Relocation::get_trampoline_for`                                                                                                         | `libjvm.dylib`             |
| 0.7% |       9 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
| 0.6% |       8 | `_platform_memmove`                                                                                                                                      | `libsystem_platform.dylib` |
| 0.6% |       8 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
| 0.5% |       7 | `sys_icache_invalidate`                                                                                                                                  | `libsystem_platform.dylib` |
| 0.5% |       7 | `inflate`                                                                                                                                                | `libzip.dylib`             |
| 0.5% |       7 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |
| 0.5% |       7 | `bsearch`                                                                                                                                                | `libsystem_c.dylib`        |
| 0.5% |       6 | `fwd_copy_again`                                                                                                                                         | `libjvm.dylib`             |
| 0.5% |       6 | `ClassFileParser::skip_over_field_signature`                                                                                                             | `libjvm.dylib`             |
| 0.4% |       5 | `inflate_table`                                                                                                                                          | `libzip.dylib`             |
| 0.4% |       5 | `Arena::contains`                                                                                                                                        | `libjvm.dylib`             |
| 0.3% |       4 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object`                                                                                 | `libjvm.dylib`             |
| 0.3% |       4 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                        | `libjvm.dylib`             |

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

|    % | Samples | Function                                                                                                    | Location                                                          |
| ---: | ------: | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 0.3% |       4 | `sanitizeStackTrace(Throwable)`                                                                             | `kotlin.jvm.internal.Intrinsics`                                  |
| 0.3% |       4 | `checkNotNullParameter(Object, String)`                                                                     | `kotlin.jvm.internal.Intrinsics`                                  |
| 0.2% |       2 | `checkIndex(int, int)`                                                                                      | `java.lang.String`                                                |
| 0.1% |       1 | `checkFromIndexSize(int, int, int, BiFunction)`                                                             | `jdk.internal.util.Preconditions`                                 |
| 0.1% |       1 | `resize()`                                                                                                  | `java.util.HashMap`                                               |
| 0.1% |       1 | `getNextEntry()`                                                                                            | `java.util.zip.ZipInputStream`                                    |
| 0.1% |       1 | `copyOf(byte[], int)`                                                                                       | `java.util.Arrays`                                                |
| 0.1% |       1 | `checkAndAddEntry(int, int, ZipCoder)`                                                                      | `java.util.zip.ZipFile$Source`                                    |
| 0.1% |       1 | `<init>(int, int, String, String, int)`                                                                     | `jdk.internal.org.objectweb.asm.SymbolTable$Entry`                |
| 0.1% |       1 | `equals(MethodType)`                                                                                        | `java.lang.invoke.MethodType`                                     |
| 0.1% |       1 | `parseUnknownField(FieldSet, MessageLite, CodedInputStream, CodedOutputStream, ExtensionRegistryLite, int)` | `kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite`  |
| 0.1% |       1 | `hashCode()`                                                                                                | `java.lang.String`                                                |
| 0.1% |       1 | `getInputStream(ZipEntry)`                                                                                  | `java.util.jar.JarFile`                                           |
| 0.1% |       1 | `findBoundCallerLookup(MemberName)`                                                                         | `java.lang.invoke.MethodHandles$Lookup`                           |
| 0.1% |       1 | `session()`                                                                                                 | `java.nio.Buffer`                                                 |
| 0.1% |       1 | `fillBuffer()`                                                                                              | `java.util.stream.StreamSpliterators$AbstractWrappingSpliterator` |
| 0.1% |       1 | `toComponents(File)`                                                                                        | `kotlin.io.FilesKt__FilePathComponentsKt`                         |
| 0.1% |       1 | `iterator()`                                                                                                | `java.util.HashSet`                                               |
| 0.1% |       1 | `addAll(Collection)`                                                                                        | `java.util.AbstractCollection`                                    |
| 0.1% |       1 | `replace(byte[], char, char)`                                                                               | `java.lang.StringLatin1`                                          |

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

#### Lines

Lines ranked by contribution to each function's self samples.

##### `sanitizeStackTrace(Throwable)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       4 | `kotlin.jvm.internal.Intrinsics:253` |

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

##### `checkIndex(int, int)` (`java.lang.String`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       2 | `java.lang.String:4822` |

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

##### `checkFromIndexSize(int, int, int, BiFunction)` (`jdk.internal.util.Preconditions`)

|      % | Samples | Location                              |
| -----: | ------: | ------------------------------------- |
| 100.0% |       1 | `jdk.internal.util.Preconditions:396` |

##### `resize()` (`java.util.HashMap`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.util.HashMap:726` |

##### `getNextEntry()` (`java.util.zip.ZipInputStream`)

|      % | Samples | Location                           |
| -----: | ------: | ---------------------------------- |
| 100.0% |       1 | `java.util.zip.ZipInputStream:147` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.util.Arrays:3542` |

##### `checkAndAddEntry(int, int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       1 | `java.util.zip.ZipFile$Source:1246` |

##### `<init>(int, int, String, String, int)` (`jdk.internal.org.objectweb.asm.SymbolTable$Entry`)

|      % | Samples | Location                                                |
| -----: | ------: | ------------------------------------------------------- |
| 100.0% |       1 | `jdk.internal.org.objectweb.asm.SymbolTable$Entry:1345` |

##### `equals(MethodType)` (`java.lang.invoke.MethodType`)

|      % | Samples | Location                          |
| -----: | ------: | --------------------------------- |
| 100.0% |       1 | `java.lang.invoke.MethodType:907` |

##### `parseUnknownField(FieldSet, MessageLite, CodedInputStream, CodedOutputStream, ExtensionRegistryLite, int)` (`kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite`)

|      % | Samples | Location                                                             |
| -----: | ------: | -------------------------------------------------------------------- |
| 100.0% |       1 | `kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite:574` |

##### `hashCode()` (`java.lang.String`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.lang.String:2356` |

##### `getInputStream(ZipEntry)` (`java.util.jar.JarFile`)

|      % | Samples | Location                    |
| -----: | ------: | --------------------------- |
| 100.0% |       1 | `java.util.jar.JarFile:856` |

##### `findBoundCallerLookup(MemberName)` (`java.lang.invoke.MethodHandles$Lookup`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `java.lang.invoke.MethodHandles$Lookup:3813` |

##### `session()` (`java.nio.Buffer`)

|      % | Samples | Location              |
| -----: | ------: | --------------------- |
| 100.0% |       1 | `java.nio.Buffer:792` |

##### `fillBuffer()` (`java.util.stream.StreamSpliterators$AbstractWrappingSpliterator`)

|      % | Samples | Location                                                              |
| -----: | ------: | --------------------------------------------------------------------- |
| 100.0% |       1 | `java.util.stream.StreamSpliterators$AbstractWrappingSpliterator:205` |

##### `toComponents(File)` (`kotlin.io.FilesKt__FilePathComponentsKt`)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       1 | `kotlin.io.FilesKt__FilePathComponentsKt:151` |

##### `iterator()` (`java.util.HashSet`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.util.HashSet:182` |

##### `addAll(Collection)` (`java.util.AbstractCollection`)

|      % | Samples | Location                           |
| -----: | ------: | ---------------------------------- |
| 100.0% |       1 | `java.util.AbstractCollection:336` |

##### `replace(byte[], char, char)` (`java.lang.StringLatin1`)

|      % | Samples | Location                     |
| -----: | ------: | ---------------------------- |
| 100.0% |       1 | `java.lang.StringLatin1:310` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `inflate_fast` (`libzip.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |      50 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `SymbolTable::do_lookup` (`libjvm.dylib`)

|     % | Samples | Caller                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 65.5% |      19 | `SymbolTable::lookup_only`                     | `libjvm.dylib` |
| 17.2% |       5 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |
| 17.2% |       5 | `SymbolTable::new_symbol`                      | `libjvm.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|    % | Samples | Caller                                        | Location       |
| ---: | ------: | --------------------------------------------- | -------------- |
| 3.8% |       1 | `G1CardSet::add_card`                         | `libjvm.dylib` |
| 3.8% |       1 | `G1CardSet::transfer_cards_in_howl`           | `libjvm.dylib` |
| 3.8% |       1 | `DefaultICProtectionBehaviour::lock`          | `libjvm.dylib` |
| 3.8% |       1 | `Rewriter::Rewriter`                          | `libjvm.dylib` |
| 3.8% |       1 | `CodeCache::make_marked_nmethods_deoptimized` | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      20 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      19 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

|     % | Samples | Caller                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 61.1% |      11 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
| 33.3% |       6 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |
|  5.6% |       1 | `IRScopeDebugInfo::record_debug_info`              | `libjvm.dylib` |

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

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |      12 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |      12 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

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

##### `trampoline_stub_Relocation::get_trampoline_for` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |      10 | `NativeCall::set_destination_mt_safe` | `libjvm.dylib` |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 77.8% |       7 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |
| 22.2% |       2 | `InstanceKlass::find_method`            | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       9 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `_platform_memmove` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                    | Location        |
| ----: | ------: | ----------------------------------------- | --------------- |
| 25.0% |       2 | `Node::out_grow`                          | `libjvm.dylib`  |
| 12.5% |       1 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib` |
| 12.5% |       1 | `SymbolTable::do_add_if_needed`           | `libjvm.dylib`  |
| 12.5% |       1 | `ClassFileParser::parse_methods`          | `libjvm.dylib`  |
| 12.5% |       1 | `CodeSection::expand_locs`                | `libjvm.dylib`  |

##### `_platform_memset` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 12.5% |       1 | `InstanceKlass::allocate_instance_klass` | `libjvm.dylib` |
| 12.5% |       1 | `BlockBegin::try_merge`                  | `libjvm.dylib` |
| 12.5% |       1 | `LinearScan::compute_local_live_sets`    | `libjvm.dylib` |
| 12.5% |       1 | `GraphBuilder::throw_op`                 | `libjvm.dylib` |
| 12.5% |       1 | `Parse::build_exits`                     | `libjvm.dylib` |

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

##### `sys_icache_invalidate` (`libsystem_platform.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 42.9% |       3 | `nmethod::oops_do_process_weak`  | `libjvm.dylib` |
| 28.6% |       2 | `nmethod::nmethod`               | `libjvm.dylib` |
| 14.3% |       1 | `CompiledIC::set_to_clean`       | `libjvm.dylib` |
| 14.3% |       1 | `CompiledIC::set_to_monomorphic` | `libjvm.dylib` |

##### `inflate` (`libzip.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |       7 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                                           | Location                               |
| ----: | ------: | ------------------------------------------------ | -------------------------------------- |
| 14.3% |       1 | `jni_ReleasePrimitiveArrayCritical`              | `libjvm.dylib`                         |
| 14.3% |       1 | `InterpreterRuntime::resolve_from_cache`         | `libjvm.dylib`                         |
| 14.3% |       1 | `findPName(int, int[], int, int)`                | `com.fasterxml.aalto.in.StreamScanner` |
| 14.3% |       1 | `jni_GetStringUTFLength`                         | `libjvm.dylib`                         |
| 14.3% |       1 | `InterpreterRuntime::frequency_counter_overflow` | `libjvm.dylib`                         |

##### `bsearch` (`libsystem_c.dylib`)

|     % | Samples | Caller                                           | Location       |
| ----: | ------: | ------------------------------------------------ | -------------- |
| 71.4% |       5 | `encoding_for_logical_immediate`                 | `libjvm.dylib` |
| 28.6% |       2 | `Assembler::operand_valid_for_logical_immediate` | `libjvm.dylib` |

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

##### `fwd_copy_again` (`libjvm.dylib`)

|     % | Samples | Caller                                          | Location       |
| ----: | ------: | ----------------------------------------------- | -------------- |
| 83.3% |       5 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |
| 16.7% |       1 | `CodeBuffer::copy_code_to`                      | `libjvm.dylib` |

##### `ClassFileParser::skip_over_field_signature` (`libjvm.dylib`)

|     % | Samples | Caller                                           | Location       |
| ----: | ------: | ------------------------------------------------ | -------------- |
| 50.0% |       3 | `ClassFileParser::verify_legal_method_signature` | `libjvm.dylib` |
| 33.3% |       2 | `ClassFileParser::parse_localvariable_table`     | `libjvm.dylib` |
| 16.7% |       1 | `ClassFileParser::verify_legal_field_signature`  | `libjvm.dylib` |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|     % | Samples | Caller                                                           | Location                                                                                        |
| ----: | ------: | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 16.7% |       1 | `canonicalize(MethodType, int)`                                  | `java.lang.invoke.MethodTypeForm`                                                               |
| 16.7% |       1 | `<init>(ReadableByteChannel)`                                    | `sun.nio.ch.ChannelInputStream`                                                                 |
| 16.7% |       1 | `<init>(ArrayList, int)`                                         | `java.util.ArrayList$ListItr`                                                                   |
| 16.7% |       1 | `reduceCandidates$chooseMostSpecific(FirCallResolver, List)`     | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                                        |
| 16.7% |       1 | `checkFunction(DiagnosticReporter, CheckerContext, FirFunction)` | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirExposedVisibilityDeclarationChecker` |

##### `inflate_table` (`libzip.dylib`)

|      % | Samples | Caller    | Location       |
| -----: | ------: | --------- | -------------- |
| 100.0% |       5 | `inflate` | `libzip.dylib` |

##### `Arena::contains` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       5 | `Matcher::xform` | `libjvm.dylib` |

##### `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` (`libjvm.dylib`)

|     % | Samples | Caller                                                                             | Location       |
| ----: | ------: | ---------------------------------------------------------------------------------- | -------------- |
| 50.0% |       2 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb`  | `libjvm.dylib` |
| 25.0% |       1 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region` | `libjvm.dylib` |
| 25.0% |       1 | `HeapRegionManager::par_iterate`                                                   | `libjvm.dylib` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |       4 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |

##### `sanitizeStackTrace(Throwable)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Caller                            | Location                         |
| -----: | ------: | --------------------------------- | -------------------------------- |
| 100.0% |       4 | `throwParameterIsNullNPE(String)` | `kotlin.jvm.internal.Intrinsics` |

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

##### `checkIndex(int, int)` (`java.lang.String`)

|      % | Samples | Caller                | Location                 |
| -----: | ------: | --------------------- | ------------------------ |
| 100.0% |       2 | `charAt(byte[], int)` | `java.lang.StringLatin1` |

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

##### `checkFromIndexSize(int, int, int, BiFunction)` (`jdk.internal.util.Preconditions`)

|      % | Samples | Caller                     | Location              |
| -----: | ------: | -------------------------- | --------------------- |
| 100.0% |       1 | `update(byte[], int, int)` | `java.util.zip.CRC32` |

##### `resize()` (`java.util.HashMap`)

|      % | Samples | Caller                                          | Location            |
| -----: | ------: | ----------------------------------------------- | ------------------- |
| 100.0% |       1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `getNextEntry()` (`java.util.zip.ZipInputStream`)

|      % | Samples | Caller                                                  | Location                                               |
| -----: | ------: | ------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |       1 | `loadAllClassesFromJars(Collection, int, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|      % | Samples | Caller                        | Location                          |
| -----: | ------: | ----------------------------- | --------------------------------- |
| 100.0% |       1 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |

##### `checkAndAddEntry(int, int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|      % | Samples | Caller                   | Location                       |
| -----: | ------: | ------------------------ | ------------------------------ |
| 100.0% |       1 | `initCEN(int, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `<init>(int, int, String, String, int)` (`jdk.internal.org.objectweb.asm.SymbolTable$Entry`)

|      % | Samples | Caller                                   | Location                                     |
| -----: | ------: | ---------------------------------------- | -------------------------------------------- |
| 100.0% |       1 | `addConstantNameAndType(String, String)` | `jdk.internal.org.objectweb.asm.SymbolTable` |

##### `equals(MethodType)` (`java.lang.invoke.MethodType`)

|      % | Samples | Caller           | Location                      |
| -----: | ------: | ---------------- | ----------------------------- |
| 100.0% |       1 | `equals(Object)` | `java.lang.invoke.MethodType` |

##### `parseUnknownField(FieldSet, MessageLite, CodedInputStream, CodedOutputStream, ExtensionRegistryLite, int)` (`kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite`)

|      % | Samples | Caller                                                                                               | Location                                                         |
| -----: | ------: | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 100.0% |       1 | `access$100(FieldSet, MessageLite, CodedInputStream, CodedOutputStream, ExtensionRegistryLite, int)` | `kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite` |

##### `hashCode()` (`java.lang.String`)

|      % | Samples | Caller                              | Location                                     |
| -----: | ------: | ----------------------------------- | -------------------------------------------- |
| 100.0% |       1 | `hash(int, String, String, String)` | `jdk.internal.org.objectweb.asm.SymbolTable` |

##### `getInputStream(ZipEntry)` (`java.util.jar.JarFile`)

|      % | Samples | Caller             | Location                                       |
| -----: | ------: | ------------------ | ---------------------------------------------- |
| 100.0% |       1 | `getInputStream()` | `jdk.internal.loader.URLClassPath$JarLoader$2` |

##### `findBoundCallerLookup(MemberName)` (`java.lang.invoke.MethodHandles$Lookup`)

|      % | Samples | Caller                                  | Location                                |
| -----: | ------: | --------------------------------------- | --------------------------------------- |
| 100.0% |       1 | `findStatic(Class, String, MethodType)` | `java.lang.invoke.MethodHandles$Lookup` |

##### `session()` (`java.nio.Buffer`)

|      % | Samples | Caller           | Location                    |
| -----: | ------: | ---------------- | --------------------------- |
| 100.0% |       1 | `getShort(long)` | `java.nio.DirectByteBuffer` |

##### `fillBuffer()` (`java.util.stream.StreamSpliterators$AbstractWrappingSpliterator`)

|      % | Samples | Caller        | Location                                                          |
| -----: | ------: | ------------- | ----------------------------------------------------------------- |
| 100.0% |       1 | `doAdvance()` | `java.util.stream.StreamSpliterators$AbstractWrappingSpliterator` |

##### `toComponents(File)` (`kotlin.io.FilesKt__FilePathComponentsKt`)

|      % | Samples | Caller            | Location                     |
| -----: | ------: | ----------------- | ---------------------------- |
| 100.0% |       1 | `normalize(File)` | `kotlin.io.FilesKt__UtilsKt` |

##### `iterator()` (`java.util.HashSet`)

|      % | Samples | Caller               | Location                       |
| -----: | ------: | -------------------- | ------------------------------ |
| 100.0% |       1 | `addAll(Collection)` | `java.util.AbstractCollection` |

##### `addAll(Collection)` (`java.util.AbstractCollection`)

|      % | Samples | Caller                                         | Location                                              |
| -----: | ------: | ---------------------------------------------- | ----------------------------------------------------- |
| 100.0% |       1 | `IrVarargImpl(int, int, IrType, IrType, List)` | `org.jetbrains.kotlin.ir.expressions.impl.BuildersKt` |

##### `replace(byte[], char, char)` (`java.lang.StringLatin1`)

|      % | Samples | Caller                | Location           |
| -----: | ------: | --------------------- | ------------------ |
| 100.0% |       1 | `replace(char, char)` | `java.lang.String` |

##### `I2C/C2I adapters(0xbba)` (`<unknown>`)

|      % | Samples | Caller               | Location                                     |
| -----: | ------: | -------------------- | -------------------------------------------- |
| 100.0% |       1 | `identifier(String)` | `kotlin.reflect.jvm.internal.impl.name.Name` |

##### `zero_blocks` (`<unknown>`)

|      % | Samples | Caller         | Location                                    |
| -----: | ------: | -------------- | ------------------------------------------- |
| 100.0% |       1 | `enlarge(int)` | `jdk.internal.org.objectweb.asm.ByteVector` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|      % | Samples | Caller           | Location                                                                                                                 |
| -----: | ------: | ---------------- | ------------------------------------------------------------------------------------------------------------------------ |
| 100.0% |       1 | `invoke(Object)` | `org.jetbrains.kotlin.resolve.calls.inference.components.AbstractVariableReadinessCalculator$$Lambda.0x000000a801691468` |

##### `I2C/C2I adapters(0xbbb)` (`<unknown>`)

|      % | Samples | Caller                                     | Location                                                  |
| -----: | ------: | ------------------------------------------ | --------------------------------------------------------- |
| 100.0% |       1 | `getExtensionFunctionType(ConeAttributes)` | `org.jetbrains.kotlin.fir.types.CompilerConeAttributesKt` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                                                           | Location                                                |
| ----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 66.8% |     889 | `_pthread_start`                                                                                   | `libsystem_pthread.dylib`                               |
| 66.8% |     889 | `thread_start`                                                                                     | `libsystem_pthread.dylib`                               |
| 66.7% |     888 | `Thread::call_run`                                                                                 | `libjvm.dylib`                                          |
| 66.7% |     888 | `thread_native_entry`                                                                              | `libjvm.dylib`                                          |
| 62.1% |     826 | `CompileBroker::compiler_thread_loop`                                                              | `libjvm.dylib`                                          |
| 62.1% |     826 | `JavaThread::thread_main_inner`                                                                    | `libjvm.dylib`                                          |
| 61.1% |     813 | `CompileBroker::invoke_compiler_on_method`                                                         | `libjvm.dylib`                                          |
| 42.5% |     566 | `Compile::Compile`                                                                                 | `libjvm.dylib`                                          |
| 42.5% |     566 | `C2Compiler::compile_method`                                                                       | `libjvm.dylib`                                          |
| 32.5% |     433 | `run(String[])`                                                                                    | `org.jetbrains.kotlin.preloading.Preloader`             |
| 32.5% |     433 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.preloading.Preloader`             |
| 27.0% |     360 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 27.0% |     360 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 27.0% |     360 | `invokeStatic(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$DMH.0x000000a801008000`    |
| 27.0% |     360 | `invoke(Object, Object, Object)`                                                                   | `java.lang.invoke.LambdaForm$MH.0x000000a801009400`     |
| 27.0% |     360 | `invokeExact_MT(Object, Object, Object, Object)`                                                   | `java.lang.invoke.Invokers$Holder`                      |
| 27.0% |     360 | `invokeImpl(Object, Object[])`                                                                     | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 27.0% |     360 | `invoke(Object, Object[])`                                                                         | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 27.0% |     360 | `invoke(Object, Object[])`                                                                         | `java.lang.reflect.Method`                              |
| 27.0% |     359 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

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

##### Native

|     % | Samples | Function                                        | Location                  |
| ----: | ------: | ----------------------------------------------- | ------------------------- |
| 66.8% |     889 | `_pthread_start`                                | `libsystem_pthread.dylib` |
| 66.8% |     889 | `thread_start`                                  | `libsystem_pthread.dylib` |
| 66.7% |     888 | `Thread::call_run`                              | `libjvm.dylib`            |
| 66.7% |     888 | `thread_native_entry`                           | `libjvm.dylib`            |
| 62.1% |     826 | `JavaThread::thread_main_inner`                 | `libjvm.dylib`            |
| 17.8% |     237 | `Compiler::compile_method`                      | `libjvm.dylib`            |
|  4.8% |      64 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib`            |
|  4.5% |      60 | `Java_java_lang_ClassLoader_defineClass1`       | `libjava.dylib`           |
|  4.4% |      59 | `WorkerThread::run`                             | `libjvm.dylib`            |
|  4.4% |      59 | `IRScope::IRScope`                              | `libjvm.dylib`            |
|  4.4% |      59 | `IR::IR`                                        | `libjvm.dylib`            |
|  4.4% |      58 | `KlassFactory::create_from_stream`              | `libjvm.dylib`            |
|  4.4% |      58 | `SystemDictionary::resolve_class_from_stream`   | `libjvm.dylib`            |
|  4.4% |      58 | `jvm_define_class_common`                       | `libjvm.dylib`            |
|  4.4% |      58 | `JVM_DefineClassWithSource`                     | `libjvm.dylib`            |
|  3.8% |      51 | `ClassFileParser::ClassFileParser`              | `libjvm.dylib`            |
|  3.8% |      50 | `inflate_fast`                                  | `libzip.dylib`            |
|  3.8% |      50 | `Parse::do_all_blocks`                          | `libjvm.dylib`            |
|  3.8% |      50 | `Parse::Parse`                                  | `libjvm.dylib`            |
|  3.8% |      50 | `ParseGenerator::generate`                      | `libjvm.dylib`            |

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

|     % | Samples | Function                                                                        | Location                                              |
| ----: | ------: | ------------------------------------------------------------------------------- | ----------------------------------------------------- |
| 27.0% |     360 | `invokeStatic(Object, Object)`                                                  | `java.lang.invoke.LambdaForm$DMH.0x000000a801008000`  |
| 27.0% |     360 | `invoke(Object, Object, Object)`                                                | `java.lang.invoke.LambdaForm$MH.0x000000a801009400`   |
| 27.0% |     360 | `invokeExact_MT(Object, Object, Object, Object)`                                | `java.lang.invoke.Invokers$Holder`                    |
| 27.0% |     360 | `invokeImpl(Object, Object[])`                                                  | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 27.0% |     360 | `invoke(Object, Object[])`                                                      | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 27.0% |     360 | `invoke(Object, Object[])`                                                      | `java.lang.reflect.Method`                            |
|  5.1% |      68 | `loadClass(String, boolean)`                                                    | `java.lang.ClassLoader`                               |
|  5.0% |      67 | `read(byte[], int, int)`                                                        | `java.util.zip.ZipInputStream`                        |
|  5.0% |      67 | `read(byte[])`                                                                  | `java.io.FilterInputStream`                           |
|  4.9% |      65 | `read(byte[], int, int)`                                                        | `java.util.zip.InflaterInputStream`                   |
|  4.8% |      64 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                   | `java.util.zip.Inflater`                              |
|  4.8% |      64 | `inflate(byte[], int, int)`                                                     | `java.util.zip.Inflater`                              |
|  4.7% |      63 | `defineClass(String, byte[], int, int, ProtectionDomain)`                       | `java.lang.ClassLoader`                               |
|  4.7% |      62 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                               |
|  4.7% |      62 | `defineClass(String, byte[], int, int)`                                         | `java.lang.ClassLoader`                               |
|  3.8% |      51 | `resumeWith(Object)`                                                            | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |
|  1.3% |      17 | `getValue()`                                                                    | `kotlin.SafePublicationLazyImpl`                      |
|  1.2% |      16 | `getValue()`                                                                    | `kotlin.SynchronizedLazyImpl`                         |
|  1.1% |      15 | `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])`   | `java.lang.invoke.MethodHandleNatives`                |
|  1.1% |      15 | `linkCallSite(Object, Object, Object, Object, Object, Object[])`                | `java.lang.invoke.MethodHandleNatives`                |

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

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 99.9% |     888 | `thread_native_entry` | `libjvm.dylib` |
|  0.1% |       1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |     889 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 93.0% |     826 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  6.6% |      59 | `WorkerThread::run`             | `libjvm.dylib` |
|  0.3% |       3 | `VMThread::run`                 | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     888 | `Thread::call_run` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 98.4% |     813 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  1.5% |      12 | `CompileQueue::get`                        | `libjvm.dylib` |
|  0.1% |       1 | `CompileTaskWrapper::~CompileTaskWrapper`  | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % | Samples | Callee                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |     826 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 69.6% |     566 | `C2Compiler::compile_method`    | `libjvm.dylib` |
| 29.2% |     237 | `Compiler::compile_method`      | `libjvm.dylib` |
|  0.7% |       6 | `ciEnv::get_method_from_handle` | `libjvm.dylib` |
|  0.2% |       2 | `ciEnv::~ciEnv`                 | `libjvm.dylib` |
|  0.1% |       1 | `CompilationLog::log_compile`   | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 53.0% |     300 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 36.4% |     206 | `Compile::Optimize`                      | `libjvm.dylib` |
|  8.8% |      50 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  1.1% |       6 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.4% |       2 | `TypeFunc::make`                         | `libjvm.dylib` |

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

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000a801008000`)

|      % | Samples | Callee           | Location                                     |
| -----: | ------: | ---------------- | -------------------------------------------- |
| 100.0% |     360 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801009400`)

|      % | Samples | Callee                         | Location                                             |
| -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% |     360 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a801008000` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     360 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a801009400` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee                                           | Location                           |
| -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% |     360 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee                         | Location                                          |
| -----: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% |     360 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % | Samples | Callee                            | Location                                          |
| -----: | ------: | --------------------------------- | ------------------------------------------------- |
| 100.0% |     360 | `invoke(Object, Object[])`        | `jdk.internal.reflect.DirectMethodHandleAccessor` |
|   0.6% |       2 | `acquireMethodAccessor()`         | `java.lang.reflect.Method`                        |
|   0.3% |       1 | `invoke(Object, Object[], Class)` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

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

##### `Compiler::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                      | Location       |
| ----: | ------: | --------------------------- | -------------- |
| 99.2% |     235 | `Compilation::Compilation`  | `libjvm.dylib` |
|  0.4% |       1 | `Chunk::next_chop`          | `libjvm.dylib` |
|  0.4% |       1 | `Compilation::~Compilation` | `libjvm.dylib` |

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
|  0.5% |       1 | `FrameMap::FrameMap`          | `libjvm.dylib` |

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
|  1.9% |       2 | `Chunk::next_chop`               | `libjvm.dylib` |

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

##### `Compilation::build_hir` (`libjvm.dylib`)

|     % | Samples | Callee                                       | Location       |
| ----: | ------: | -------------------------------------------- | -------------- |
| 76.6% |      59 | `IR::IR`                                     | `libjvm.dylib` |
| 10.4% |       8 | `GlobalValueNumbering::GlobalValueNumbering` | `libjvm.dylib` |
|  6.5% |       5 | `IR::eliminate_null_checks`                  | `libjvm.dylib` |
|  5.2% |       4 | `IR::compute_use_counts`                     | `libjvm.dylib` |
|  1.3% |       1 | `Phi::as_Phi`                                | `libjvm.dylib` |

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

|     % | Samples | Callee                             | Location                                                 |
| ----: | ------: | ---------------------------------- | -------------------------------------------------------- |
| 91.2% |      62 | `findClass(String)`                | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  4.4% |       3 | `findBootstrapClassOrNull(String)` | `java.lang.ClassLoader`                                  |
|  4.4% |       3 | `findClass(String)`                | `java.net.URLClassLoader`                                |

##### `read(byte[], int, int)` (`java.util.zip.ZipInputStream`)

|     % | Samples | Callee                     | Location                            |
| ----: | ------: | -------------------------- | ----------------------------------- |
| 95.5% |      64 | `read(byte[], int, int)`   | `java.util.zip.InflaterInputStream` |
|  4.5% |       3 | `update(byte[], int, int)` | `java.util.zip.CRC32`               |

##### `read(byte[])` (`java.io.FilterInputStream`)

|      % | Samples | Callee                   | Location                       |
| -----: | ------: | ------------------------ | ------------------------------ |
| 100.0% |      67 | `read(byte[], int, int)` | `java.util.zip.ZipInputStream` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

|     % | Samples | Callee                      | Location                            |
| ----: | ------: | --------------------------- | ----------------------------------- |
| 96.9% |      63 | `inflate(byte[], int, int)` | `java.util.zip.Inflater`            |
|  1.5% |       1 | `ensureOpen()`              | `java.util.zip.InflaterInputStream` |
|  1.5% |       1 | `fill()`                    | `java.util.zip.InflaterInputStream` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 14.1% |       9 | `RegionNode::Ideal`          | `libjvm.dylib` |
| 10.9% |       7 | `StoreNode::Ideal`           | `libjvm.dylib` |
| 10.9% |       7 | `NodeHash::hash_find_insert` | `libjvm.dylib` |
|  9.4% |       6 | `PhiNode::Ideal`             | `libjvm.dylib` |
|  6.3% |       4 | `PhaseIterGVN::subsume_node` | `libjvm.dylib` |

##### `Java_java_util_zip_Inflater_inflateBytesBytes` (`libzip.dylib`)

|     % | Samples | Callee                              | Location       |
| ----: | ------: | ----------------------------------- | -------------- |
| 78.1% |      50 | `inflate_fast`                      | `libzip.dylib` |
| 18.8% |      12 | `inflate`                           | `libzip.dylib` |
|  1.6% |       1 | `jni_ReleasePrimitiveArrayCritical` | `libjvm.dylib` |
|  1.6% |       1 | `jni_GetPrimitiveArrayCritical`     | `libjvm.dylib` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Callee                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |      64 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Callee                                                        | Location                 |
| -----: | ------: | ------------------------------------------------------------- | ------------------------ |
| 100.0% |      64 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater` |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                                                                          | Location                |
| ----: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| 98.4% |      62 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |
|  1.6% |       1 | `postDefineClass(Class, ProtectionDomain)`                                      | `java.lang.ClassLoader` |
|  1.6% |       1 | `preDefineClass(String, ProtectionDomain)`                                      | `java.lang.ClassLoader` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                                    | Location                                                 |
| ----: | ------: | ----------------------------------------- | -------------------------------------------------------- |
| 96.8% |      60 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`                                          |
| 25.8% |      16 | `loadClass(String)`                       | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `defineClass(String, byte[], int, int)` (`java.lang.ClassLoader`)

|      % | Samples | Callee                                                    | Location                |
| -----: | ------: | --------------------------------------------------------- | ----------------------- |
| 100.0% |      62 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|     % | Samples | Callee                      | Location                   |
| ----: | ------: | --------------------------- | -------------------------- |
| 96.7% |      58 | `JVM_DefineClassWithSource` | `libjvm.dylib`             |
|  1.7% |       1 | `_platform_memmove`         | `libsystem_platform.dylib` |
|  1.7% |       1 | `jni_GetStringUTFLength`    | `libjvm.dylib`             |

##### `WorkerThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location                 |
| ----: | ------: | --------------------------------- | ------------------------ |
| 47.5% |      28 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
| 27.1% |      16 | `G1RebuildRSAndScrubTask::work`   | `libjvm.dylib`           |
| 16.9% |      10 | `G1CMConcurrentMarkingTask::work` | `libjvm.dylib`           |
|  5.1% |       3 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
|  3.4% |       2 | `G1ParallelCleaningTask::work`    | `libjvm.dylib`           |

##### `IRScope::IRScope` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 98.3% |      58 | `GraphBuilder::GraphBuilder`      | `libjvm.dylib` |
|  1.7% |       1 | `ciMethod::has_balanced_monitors` | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      59 | `IRScope::IRScope` | `libjvm.dylib` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

|     % | Samples | Callee                               | Location        |
| ----: | ------: | ------------------------------------ | --------------- |
| 86.2% |      50 | `GraphBuilder::iterate_all_blocks`   | `libjvm.dylib`  |
|  6.9% |       4 | `BlockBegin::iterate_preorder`       | `libjvm.dylib`  |
|  5.2% |       3 | `BlockListBuilder::BlockListBuilder` | `libjvm.dylib`  |
|  1.7% |       1 | `tlv_get_addr`                       | `libdyld.dylib` |

##### `KlassFactory::create_from_stream` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 87.9% |      51 | `ClassFileParser::ClassFileParser`       | `libjvm.dylib` |
| 12.1% |       7 | `ClassFileParser::create_instance_klass` | `libjvm.dylib` |

##### `SystemDictionary::resolve_class_from_stream` (`libjvm.dylib`)

|     % | Samples | Callee                                    | Location       |
| ----: | ------: | ----------------------------------------- | -------------- |
| 96.6% |      56 | `KlassFactory::create_from_stream`        | `libjvm.dylib` |
|  3.4% |       2 | `SystemDictionary::define_instance_class` | `libjvm.dylib` |

##### `jvm_define_class_common` (`libjvm.dylib`)

|      % | Samples | Callee                                        | Location       |
| -----: | ------: | --------------------------------------------- | -------------- |
| 100.0% |      58 | `SystemDictionary::resolve_class_from_stream` | `libjvm.dylib` |

##### `JVM_DefineClassWithSource` (`libjvm.dylib`)

|      % | Samples | Callee                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |      58 | `jvm_define_class_common` | `libjvm.dylib` |

##### `Compilation::emit_code_body` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 66.7% |      34 | `LIR_Assembler::emit_code`      | `libjvm.dylib` |
| 33.3% |      17 | `Compilation::emit_code_epilog` | `libjvm.dylib` |

##### `ClassFileParser::ClassFileParser` (`libjvm.dylib`)

|     % | Samples | Callee                                          | Location       |
| ----: | ------: | ----------------------------------------------- | -------------- |
| 94.1% |      48 | `ClassFileParser::parse_stream`                 | `libjvm.dylib` |
|  3.9% |       2 | `ClassFileParser::post_process_parsed_stream`   | `libjvm.dylib` |
|  2.0% |       1 | `ClassFileParser::verify_legal_class_modifiers` | `libjvm.dylib` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|     % | Samples | Callee                  | Location                                                                                                      |
| ----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------------- |
| 64.7% |      33 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`                         |
| 39.2% |      20 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`                      |
|  7.8% |       4 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$2`                      |
|  7.8% |       4 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirInvokeResolveTowerExtension$enqueueResolverTasksForInvoke$3` |
|  3.9% |       2 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$4`                      |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 98.0% |      49 | `Parse::do_one_block`            | `libjvm.dylib` |
|  2.0% |       1 | `Parse::merge_common`            | `libjvm.dylib` |
|  2.0% |       1 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % | Samples | Callee                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |      50 | `Parse::do_all_blocks`    | `libjvm.dylib` |
|   4.0% |       2 | `Parse::build_exits`      | `libjvm.dylib` |
|   4.0% |       2 | `GraphKit::set_map_clone` | `libjvm.dylib` |
|   2.0% |       1 | `ciMethod::method_data`   | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % | Samples | Callee         | Location       |
| -----: | ------: | -------------- | -------------- |
| 100.0% |      50 | `Parse::Parse` | `libjvm.dylib` |

##### `getValue()` (`kotlin.SafePublicationLazyImpl`)

|     % | Samples | Callee     | Location                                                                                          |
| ----: | ------: | ---------- | ------------------------------------------------------------------------------------------------- |
| 58.8% |      10 | `invoke()` | `kotlin.reflect.jvm.internal.DescriptorKProperty$$Lambda$0`                                       |
| 17.6% |       3 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.impl.FirClassDeclaredMemberScopeImpl$$Lambda.0x000000a801629a10` |
| 11.8% |       2 | `invoke()` | `org.jetbrains.kotlin.fir.java.FirLazyJavaDeclarationList$$Lambda.0x000000a80160ccf0`             |
| 11.8% |       2 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.ImplicitReceiverValue$$Lambda.0x000000a8016583e8`         |
|  5.9% |       1 | `invoke()` | `kotlin.reflect.jvm.internal.KClassImpl$$Lambda$0`                                                |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

|     % | Samples | Callee     | Location                                                                                |
| ----: | ------: | ---------- | --------------------------------------------------------------------------------------- |
| 12.5% |       2 | `invoke()` | `org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile$$Lambda.0x000000a80138c000`    |
| 12.5% |       2 | `invoke()` | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass$$Lambda.0x000000a80160d598`    |
| 12.5% |       2 | `invoke()` | `org.jetbrains.kotlin.builtins.DefaultBuiltIns$$Lambda.0x000000a801754c00`              |
| 12.5% |       2 | `invoke()` | `org.jetbrains.kotlin.ir.descriptors.IrBasedClassDescriptor$$Lambda.0x000000a8018169c8` |
|  6.3% |       1 | `invoke()` | `org.jetbrains.kotlin.cli.common.CLICompiler$$Lambda.0x000000a80100a000`                |

##### `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

|     % | Samples | Callee                                                      | Location                    |
| ----: | ------: | ----------------------------------------------------------- | --------------------------- |
| 73.3% |      11 | `makeSite(MethodHandle, String, MethodType, Object, Class)` | `java.lang.invoke.CallSite` |
| 26.7% |       4 | `linkToTargetMethod(MethodType)`                            | `java.lang.invoke.Invokers` |

##### `linkCallSite(Object, Object, Object, Object, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

|      % | Samples | Callee                                                                        | Location                               |
| -----: | ------: | ----------------------------------------------------------------------------- | -------------------------------------- |
| 100.0% |      15 | `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.3% |      44 | `inflate_fast` (`libzip.dylib`) ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                |
| 1.5% |      20 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                   |
| 1.4% |      19 | `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                      |
| 1.0% |      13 | `LinearScanWalker::free_collect_inactive_fixed` (`libjvm.dylib`) ← `LinearScanWalker::alloc_free_reg` ← `LinearScanWalker::activate_current` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                    |
| 0.8% |      11 | `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                        |
| 0.8% |      11 | `PhaseChaitin::elide_copy` (`libjvm.dylib`) ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                 |
| 0.8% |      10 | `PhaseLive::add_liveout` (`libjvm.dylib`) ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                         |
| 0.7% |       9 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.6% |       8 | `LinearScanWalker::alloc_free_reg` (`libjvm.dylib`) ← `LinearScanWalker::activate_current` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                      |
| 0.6% |       8 | `PhaseLive::compute` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                    |
| 0.6% |       8 | `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                |
| 0.5% |       7 | `Matcher::xform` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.5% |       6 | `inflate` (`libzip.dylib`) ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                     |
| 0.5% |       6 | `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`) ← `PhaseIdealLoop::build_loop_late` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                      |
| 0.5% |       6 | `PhaseIdealLoop::Dominators` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                         |
| 0.5% |       6 | `PhaseOutput::BuildOopMaps` (`libjvm.dylib`) ← `PhaseOutput::Output` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                         |
| 0.4% |       5 | `inflate_table` (`libzip.dylib`) ← `inflate` ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                   |
| 0.4% |       5 | `Arena::contains` (`libjvm.dylib`) ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                     |
| 0.3% |       4 | `inflate_fast` (`libzip.dylib`) ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |
| 0.3% |       4 | `LinearScan::assign_reg_num` (`libjvm.dylib`) ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                  |

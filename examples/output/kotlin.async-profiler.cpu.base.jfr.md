# Sampling profile

Collected 1,308 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Compiler         | 45.3% |     592 |
| Native           | 38.6% |     505 |
| Ours             | 10.9% |     143 |
| Standard library |  4.7% |      61 |
| JIT              |  0.5% |       7 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── … 868 samples (66.4%) Thread::call_run at libjvm.dylib
│   ├── 795 samples (60.8%) JavaThread::thread_main_inner
│   │   └── 795 samples (60.8%) CompileBroker::compiler_thread_loop
│   │       ├── 784 samples (59.9%) CompileBroker::invoke_compiler_on_method
│   │       │   ├── 538 samples (41.1%) C2Compiler::compile_method
│   │       │   │   └── 538 samples (41.1%) Compile::Compile
│   │       │   │       └── 538 samples (41.1%) 9 more callees, led by (21.5%) Compile::Code_Gen
│   │       │   ├── … 237 samples (18.1%) Compilation::compile_method at libjvm.dylib
│   │       │   │   ├── 212 samples (16.2%) Compilation::compile_java_method
│   │       │   │   │   ├── 72 samples (5.5%) Compilation::build_hir
│   │       │   │   │   │   ├── … 56 samples (4.3%) GraphBuilder::iterate_bytecodes_for_block at libjvm.dylib
│   │       │   │   │   │   │   ├── 41 samples (3.1%) GraphBuilder::invoke
│   │       │   │   │   │   │   │   ├── 14 samples (1.1%) ciBytecodeStream::get_method
│   │       │   │   │   │   │   │   │   └── 7 samples (0.5%, self 0.9% globally) ciObjectFactory::get_metadata
│   │       │   │   │   │   │   │   │       └── … 3 samples (0.2%, self 2.1% globally) SymbolTable::do_lookup at libjvm.dylib
│   │       │   │   │   │   │   │   └── 26 samples (2.0%) 6 more callees, led by (1.5%) GraphBuilder::try_inline
│   │       │   │   │   │   │   └── 15 samples (1.1%) 8 more callees, led by (0.5%) GraphBuilder::access_field
│   │       │   │   │   │   └── 6 samples (0.5%) GlobalValueNumbering::GlobalValueNumbering
│   │       │   │   │   └── 140 samples (10.7%) 4 more callees, led by (5.7%) Compilation::emit_lir
│   │       │   │   └── 25 samples (1.9%) 2 more callees, led by (1.8%) ciEnv::register_method
│   │       │   └── 3 samples (0.2%) ciEnv::get_method_from_handle
│   │       └── … 7 samples (0.5%) PlatformMonitor::wait at libjvm.dylib
│   │           └── … 2 samples (0.2%, self 1.2% globally) __psynch_mutexwait at libsystem_kernel.dylib
│   └── 73 samples (5.6%) 3 more callees, led by (5.4%) WorkerThread::run
└── 433 samples (33.1%) main(String[]) at org.jetbrains.kotlin.preloading.Preloader
    └── 433 samples (33.1%) run(String[])
        ├── … 353 samples (27.0%) exec(PrintStream, Services, MessageRenderer, String[]) at org.jetbrains.kotlin.cli.common.CLICompiler
        │   └── 347 samples (26.5%) exec(MessageCollector, Services, CommonCompilerArguments)
        │       ├── … 333 samples (25.5%) invoke(PhaseConfig, PhaserState, LoggingContext, Object) at org.jetbrains.kotlin.config.phaser.NamedCompilerPhase
        │       │   ├── 309 samples (23.6%) phaseBody(LoggingContext, Object) at org.jetbrains.kotlin.cli.pipeline.PipelinePhase
        │       │   │   └── 309 samples (23.6%) phaseBody(PipelineContext, PipelineArtifact) …
        │       │   └── 24 samples (1.8%) 3 more callees, led by (1.4%) phaseBody(LoggingContext, Object) at org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase
        │       └── 9 samples (0.7%) <clinit>() at org.jetbrains.kotlin.cli.common.ArgumentsKt …
        └── 76 samples (5.8%) preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler) at org.jetbrains.kotlin.preloading.ClassPreloadingUtils
            └── … 76 samples (5.8%) loadAllClassesFromJars(Collection, int, ClassHandler) at org.jetbrains.kotlin.preloading.ClassPreloadingUtils
                └── … 67 samples (5.1%) read(byte[], int, int) at java.util.zip.InflaterInputStream
                    ├── … 62 samples (4.7%) Java_java_util_zip_Inflater_inflateBytesBytes at libzip.dylib
                    │   ├── 49 samples (3.7%) inflate_fast
                    │   └── 12 samples (0.9%, self 0.5%) inflate
                    └── … 2 samples (0.2%) _platform_memmove at libsystem_platform.dylib
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|    % | Samples | Function                                                                                                                                                 | Location                         |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| 3.7% |      49 | `inflate_fast`                                                                                                                                           | `libzip.dylib`                   |
| 2.1% |      28 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`                   |
| 1.9% |      25 | `IndexSetIterator::advance_and_next`                                                                                                                     | `libjvm.dylib`                   |
| 1.8% |      24 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`                   |
| 1.8% |      23 | `PhaseChaitin::Split`                                                                                                                                    | `libjvm.dylib`                   |
| 1.5% |      20 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`                  |
| 1.3% |      17 | `PhaseChaitin::build_ifg_physical`                                                                                                                       | `libjvm.dylib`                   |
| 1.2% |      16 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`         |
| 1.2% |      16 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`                   |
| 0.9% |      12 | `ciObjectFactory::get_metadata`                                                                                                                          | `libjvm.dylib`                   |
| 0.9% |      12 | `sys_icache_invalidate`                                                                                                                                  | `libsystem_platform.dylib`       |
| 0.8% |      11 | `Unique_Node_List::remove`                                                                                                                               | `libjvm.dylib`                   |
| 0.8% |      11 | `PhaseChaitin::elide_copy`                                                                                                                               | `libjvm.dylib`                   |
| 0.8% |      10 | `fwd_copy_again`                                                                                                                                         | `libjvm.dylib`                   |
| 0.8% |      10 | `PhaseLive::compute`                                                                                                                                     | `libjvm.dylib`                   |
| 0.8% |      10 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`        |
| 0.7% |       9 | `PhaseIdealLoop::build_loop_early`                                                                                                                       | `libjvm.dylib`                   |
| 0.7% |       9 | `checkNotNullParameter(Object, String)`                                                                                                                  | `kotlin.jvm.internal.Intrinsics` |
| 0.6% |       8 | `PhaseIdealLoop::split_if_with_blocks`                                                                                                                   | `libjvm.dylib`                   |
| 0.5% |       7 | `PhaseIdealLoop::Dominators`                                                                                                                             | `libjvm.dylib`                   |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Compiler

|    % | Samples | Function                                   | Location       |
| ---: | ------: | ------------------------------------------ | -------------- |
| 1.9% |      25 | `IndexSetIterator::advance_and_next`       | `libjvm.dylib` |
| 1.8% |      23 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| 1.3% |      17 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
| 0.9% |      12 | `ciObjectFactory::get_metadata`            | `libjvm.dylib` |
| 0.8% |      11 | `Unique_Node_List::remove`                 | `libjvm.dylib` |
| 0.8% |      11 | `PhaseChaitin::elide_copy`                 | `libjvm.dylib` |
| 0.8% |      10 | `PhaseLive::compute`                       | `libjvm.dylib` |
| 0.7% |       9 | `PhaseIdealLoop::build_loop_early`         | `libjvm.dylib` |
| 0.6% |       8 | `PhaseIdealLoop::split_if_with_blocks`     | `libjvm.dylib` |
| 0.5% |       7 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib` |
| 0.5% |       7 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
| 0.5% |       7 | `Matcher::xform`                           | `libjvm.dylib` |
| 0.5% |       6 | `Node::dominates`                          | `libjvm.dylib` |
| 0.5% |       6 | `LinearScan::assign_reg_num`               | `libjvm.dylib` |
| 0.4% |       5 | `Compile::disconnect_useless_nodes`        | `libjvm.dylib` |
| 0.4% |       5 | `PhaseIFG::re_insert`                      | `libjvm.dylib` |
| 0.4% |       5 | `Type::cmp`                                | `libjvm.dylib` |
| 0.4% |       5 | `RegionNode::is_CFG`                       | `libjvm.dylib` |
| 0.4% |       5 | `PhaseIdealLoop::build_loop_late`          | `libjvm.dylib` |
| 0.4% |       5 | `Matcher::match_tree`                      | `libjvm.dylib` |

##### Native

|    % | Samples | Function                                                                                                                                                 | Location                   |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 3.7% |      49 | `inflate_fast`                                                                                                                                           | `libzip.dylib`             |
| 2.1% |      28 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`             |
| 1.8% |      24 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| 1.5% |      20 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
| 1.2% |      16 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
| 1.2% |      16 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
| 0.9% |      12 | `sys_icache_invalidate`                                                                                                                                  | `libsystem_platform.dylib` |
| 0.8% |      10 | `fwd_copy_again`                                                                                                                                         | `libjvm.dylib`             |
| 0.8% |      10 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |
| 0.5% |       7 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
| 0.5% |       7 | `inflate`                                                                                                                                                | `libzip.dylib`             |
| 0.5% |       7 | `_platform_memmove`                                                                                                                                      | `libsystem_platform.dylib` |
| 0.5% |       6 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>`                             | `libjvm.dylib`             |
| 0.5% |       6 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 0.5% |       6 | `Arena::contains`                                                                                                                                        | `libjvm.dylib`             |
| 0.5% |       6 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                           | `libjvm.dylib`             |
| 0.5% |       6 | `UTF8::is_legal_utf8`                                                                                                                                    | `libjvm.dylib`             |
| 0.4% |       5 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                                                          | `libjvm.dylib`             |
| 0.4% |       5 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                        | `libjvm.dylib`             |
| 0.4% |       5 | `G1CardSet::add_to_howl`                                                                                                                                 | `libjvm.dylib`             |

##### Ours

|    % | Samples | Function                                                                                                                                                                                                                                    | Location                                                                         |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| 0.2% |       2 | `createSubstitutionForScope(List, ConeClassLikeType, FirSession)`                                                                                                                                                                           | `org.jetbrains.kotlin.fir.resolve.SupertypeUtilsKt`                              |
| 0.1% |       1 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                                                                                                                                                     | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                           |
| 0.1% |       1 | `initChildrenArrayFromList()`                                                                                                                                                                                                               | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarVirtualFile`                 |
| 0.1% |       1 | `accept(ClassVisitor, int)`                                                                                                                                                                                                                 | `org.jetbrains.org.objectweb.asm.ClassReader`                                    |
| 0.1% |       1 | `newOutput()`                                                                                                                                                                                                                               | `org.jetbrains.kotlin.protobuf.ByteString`                                       |
| 0.1% |       1 | `convertFunctionDeclaration(LighterASTNode)`                                                                                                                                                                                                | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder` |
| 0.1% |       1 | `getTokenType()`                                                                                                                                                                                                                            | `com.intellij.lang.impl.PsiBuilderImpl`                                          |
| 0.1% |       1 | `setResolveState(FirResolveState)`                                                                                                                                                                                                          | `org.jetbrains.kotlin.fir.FirElementWithResolveState`                            |
| 0.1% |       1 | `readSourceFileWithMapping(InputStreamReader)`                                                                                                                                                                                              | `org.jetbrains.kotlin.KtSourceFileLinesMappingKt`                                |
| 0.1% |       1 | `getModuleData()`                                                                                                                                                                                                                           | `org.jetbrains.kotlin.fir.declarations.builder.FirValueParameterBuilder`         |
| 0.1% |       1 | `getTokenType()`                                                                                                                                                                                                                            | `com.intellij.lang.impl.PsiBuilderImpl$StartMarker`                              |
| 0.1% |       1 | `getExtension(CharSequence, String)`                                                                                                                                                                                                        | `com.intellij.openapi.util.io.FileUtilRt`                                        |
| 0.1% |       1 | `traverseDirectoriesInPackage(FqName, Set, Function2)`                                                                                                                                                                                      | `org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesIndexImpl`                    |
| 0.1% |       1 | `makeImmutable()`                                                                                                                                                                                                                           | `org.jetbrains.kotlin.protobuf.FieldSet`                                         |
| 0.1% |       1 | `readMethod(ClassVisitor, Context, int)`                                                                                                                                                                                                    | `org.jetbrains.org.objectweb.asm.ClassReader`                                    |
| 0.1% |       1 | `readUtfNonAscii(int, int, int, char[])`                                                                                                                                                                                                    | `org.jetbrains.org.objectweb.asm.ClassReader`                                    |
| 0.1% |       1 | `readUtf(int, char[])`                                                                                                                                                                                                                      | `org.jetbrains.org.objectweb.asm.ClassReader`                                    |
| 0.1% |       1 | `<init>(KtSourceElement, FirResolvePhase, FirModuleData, FirDeclarationOrigin, FirDeclarationAttributes, FirTypeRef, Name, List, FirValueParameterSymbol, FirExpression, FirBasedSymbol, boolean, boolean, boolean, FirValueParameterKind)` | `org.jetbrains.kotlin.fir.declarations.impl.FirValueParameterImpl`               |
| 0.1% |       1 | `addValueParametersTo$default(FirMemberDeserializer, List, FirBasedSymbol, FirRegularClassBuilder, MessageLite, AnnotationDeserializer$CallableKind, ProtoBuf$Class, FirValueParameterKind, boolean, List, int, Object)`                    | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`                 |
| 0.1% |       1 | `hashCode()`                                                                                                                                                                                                                                | `org.jetbrains.kotlin.name.Name`                                                 |

##### Standard library

|    % | Samples | Function                                           | Location                                                  |
| ---: | ------: | -------------------------------------------------- | --------------------------------------------------------- |
| 0.7% |       9 | `checkNotNullParameter(Object, String)`            | `kotlin.jvm.internal.Intrinsics`                          |
| 0.4% |       5 | `sanitizeStackTrace(Throwable)`                    | `kotlin.jvm.internal.Intrinsics`                          |
| 0.2% |       3 | `areEqual(Object, Object)`                         | `kotlin.jvm.internal.Intrinsics`                          |
| 0.2% |       2 | `<init>(int)`                                      | `java.lang.AbstractStringBuilder`                         |
| 0.2% |       2 | `getApproximateCommonClassLoader(MethodType)`      | `java.lang.invoke.MethodHandle`                           |
| 0.2% |       2 | `allocateInstance(Object)`                         | `java.lang.invoke.DirectMethodHandle`                     |
| 0.2% |       2 | `putVal(int, Object, Object, boolean, boolean)`    | `java.util.HashMap`                                       |
| 0.1% |       1 | `hash(Object)`                                     | `java.util.HashMap`                                       |
| 0.1% |       1 | `getNode(Object)`                                  | `java.util.HashMap`                                       |
| 0.1% |       1 | `lock()`                                           | `java.util.concurrent.locks.ReentrantLock`                |
| 0.1% |       1 | `indexOf(byte[], int, int, int)`                   | `java.lang.StringLatin1`                                  |
| 0.1% |       1 | `checkAndAddEntry(int, int, ZipCoder)`             | `java.util.zip.ZipFile$Source`                            |
| 0.1% |       1 | `checkForComodification()`                         | `java.util.ArrayList$Itr`                                 |
| 0.1% |       1 | `getProxyConstructor(Class, ClassLoader, Class[])` | `java.lang.reflect.Proxy`                                 |
| 0.1% |       1 | `returnType()`                                     | `java.lang.invoke.MethodType`                             |
| 0.1% |       1 | `getSerializedSize()`                              | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type` |
| 0.1% |       1 | `newString(byte[], int, int)`                      | `java.lang.StringLatin1`                                  |
| 0.1% |       1 | `substring(int, int)`                              | `java.lang.String`                                        |
| 0.1% |       1 | `parseTypeArguments()`                             | `sun.reflect.generics.parser.SignatureParser`             |
| 0.1% |       1 | `generateConstructor()`                            | `java.lang.invoke.InnerClassLambdaMetafactory`            |

#### Lines

Lines with the largest contribution to each function's self samples.

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       9 | `kotlin.jvm.internal.Intrinsics:130` |

##### `sanitizeStackTrace(Throwable)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       5 | `kotlin.jvm.internal.Intrinsics:253` |

##### `areEqual(Object, Object)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       3 | `kotlin.jvm.internal.Intrinsics:169` |

##### `createSubstitutionForScope(List, ConeClassLikeType, FirSession)` (`org.jetbrains.kotlin.fir.resolve.SupertypeUtilsKt`)

|     % | Samples | Location                                                |
| ----: | ------: | ------------------------------------------------------- |
| 50.0% |       1 | `org.jetbrains.kotlin.fir.resolve.SupertypeUtilsKt:191` |
| 50.0% |       1 | `org.jetbrains.kotlin.fir.resolve.SupertypeUtilsKt:203` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

|     % | Samples | Location                              |
| ----: | ------: | ------------------------------------- |
| 50.0% |       1 | `java.lang.AbstractStringBuilder:99`  |
| 50.0% |       1 | `java.lang.AbstractStringBuilder:101` |

##### `getApproximateCommonClassLoader(MethodType)` (`java.lang.invoke.MethodHandle`)

|     % | Samples | Location                            |
| ----: | ------: | ----------------------------------- |
| 50.0% |       1 | `java.lang.invoke.MethodHandle:923` |
| 50.0% |       1 | `java.lang.invoke.MethodHandle:924` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

|      % | Samples | Location                                  |
| -----: | ------: | ----------------------------------------- |
| 100.0% |       2 | `java.lang.invoke.DirectMethodHandle:501` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 50.0% |       1 | `java.util.HashMap:637` |
| 50.0% |       1 | `java.util.HashMap:648` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|      % | Samples | Location                                                   |
| -----: | ------: | ---------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils:143` |

##### `initChildrenArrayFromList()` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarVirtualFile`)

|      % | Samples | Location                                                             |
| -----: | ------: | -------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarVirtualFile:117` |

##### `accept(ClassVisitor, int)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % | Samples | Location                                          |
| -----: | ------: | ------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.org.objectweb.asm.ClassReader:434` |

##### `newOutput()` (`org.jetbrains.kotlin.protobuf.ByteString`)

|      % | Samples | Location                                       |
| -----: | ------: | ---------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.protobuf.ByteString:751` |

##### `convertFunctionDeclaration(LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder`)

|      % | Samples | Location                                                                              |
| -----: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder:4494` |

##### `getTokenType()` (`com.intellij.lang.impl.PsiBuilderImpl`)

|      % | Samples | Location                                    |
| -----: | ------: | ------------------------------------------- |
| 100.0% |       1 | `com.intellij.lang.impl.PsiBuilderImpl:720` |

##### `setResolveState(FirResolveState)` (`org.jetbrains.kotlin.fir.FirElementWithResolveState`)

|      % | Samples | Location                                                 |
| -----: | ------: | -------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.FirElementWithResolveState:24` |

##### `readSourceFileWithMapping(InputStreamReader)` (`org.jetbrains.kotlin.KtSourceFileLinesMappingKt`)

|      % | Samples | Location                                              |
| -----: | ------: | ----------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.KtSourceFileLinesMappingKt:103` |

##### `getModuleData()` (`org.jetbrains.kotlin.fir.declarations.builder.FirValueParameterBuilder`)

|      % | Samples | Location                                                                    |
| -----: | ------: | --------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.declarations.builder.FirValueParameterBuilder:32` |

##### `getTokenType()` (`com.intellij.lang.impl.PsiBuilderImpl$StartMarker`)

|      % | Samples | Location                                                |
| -----: | ------: | ------------------------------------------------------- |
| 100.0% |       1 | `com.intellij.lang.impl.PsiBuilderImpl$StartMarker:425` |

##### `getExtension(CharSequence, String)` (`com.intellij.openapi.util.io.FileUtilRt`)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       1 | `com.intellij.openapi.util.io.FileUtilRt:297` |

##### `traverseDirectoriesInPackage(FqName, Set, Function2)` (`org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesIndexImpl`)

|      % | Samples | Location                                                          |
| -----: | ------: | ----------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesIndexImpl:292` |

##### `makeImmutable()` (`org.jetbrains.kotlin.protobuf.FieldSet`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.protobuf.FieldSet:107` |

##### `readMethod(ClassVisitor, Context, int)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % | Samples | Location                                           |
| -----: | ------: | -------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.org.objectweb.asm.ClassReader:1307` |

##### `readUtfNonAscii(int, int, int, char[])` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % | Samples | Location                                           |
| -----: | ------: | -------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.org.objectweb.asm.ClassReader:3844` |

##### `readUtf(int, char[])` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % | Samples | Location                                           |
| -----: | ------: | -------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.org.objectweb.asm.ClassReader:3818` |

##### `<init>(KtSourceElement, FirResolvePhase, FirModuleData, FirDeclarationOrigin, FirDeclarationAttributes, FirTypeRef, Name, List, FirValueParameterSymbol, FirExpression, FirBasedSymbol, boolean, boolean, boolean, FirValueParameterKind)` (`org.jetbrains.kotlin.fir.declarations.impl.FirValueParameterImpl`)

|      % | Samples | Location                                                              |
| -----: | ------: | --------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.declarations.impl.FirValueParameterImpl:32` |

##### `addValueParametersTo$default(FirMemberDeserializer, List, FirBasedSymbol, FirRegularClassBuilder, MessageLite, AnnotationDeserializer$CallableKind, ProtoBuf$Class, FirValueParameterKind, boolean, List, int, Object)` (`org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`)

|      % | Samples | Location                                                             |
| -----: | ------: | -------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer:861` |

##### `hashCode()` (`org.jetbrains.kotlin.name.Name`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.name.Name:126` |

##### `hash(Object)` (`java.util.HashMap`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.util.HashMap:338` |

##### `getNode(Object)` (`java.util.HashMap`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.util.HashMap:578` |

##### `lock()` (`java.util.concurrent.locks.ReentrantLock`)

|      % | Samples | Location                                       |
| -----: | ------: | ---------------------------------------------- |
| 100.0% |       1 | `java.util.concurrent.locks.ReentrantLock:322` |

##### `indexOf(byte[], int, int, int)` (`java.lang.StringLatin1`)

|      % | Samples | Location                     |
| -----: | ------: | ---------------------------- |
| 100.0% |       1 | `java.lang.StringLatin1:200` |

##### `checkAndAddEntry(int, int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       1 | `java.util.zip.ZipFile$Source:1251` |

##### `checkForComodification()` (`java.util.ArrayList$Itr`)

|      % | Samples | Location                       |
| -----: | ------: | ------------------------------ |
| 100.0% |       1 | `java.util.ArrayList$Itr:1094` |

##### `getProxyConstructor(Class, ClassLoader, Class[])` (`java.lang.reflect.Proxy`)

|      % | Samples | Location                      |
| -----: | ------: | ----------------------------- |
| 100.0% |       1 | `java.lang.reflect.Proxy:427` |

##### `returnType()` (`java.lang.invoke.MethodType`)

|      % | Samples | Location                          |
| -----: | ------: | --------------------------------- |
| 100.0% |       1 | `java.lang.invoke.MethodType:846` |

##### `getSerializedSize()` (`kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       1 | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type:6271` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

|      % | Samples | Location                     |
| -----: | ------: | ---------------------------- |
| 100.0% |       1 | `java.lang.StringLatin1:750` |

##### `substring(int, int)` (`java.lang.String`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.lang.String:2822` |

##### `parseTypeArguments()` (`sun.reflect.generics.parser.SignatureParser`)

|      % | Samples | Location                                          |
| -----: | ------: | ------------------------------------------------- |
| 100.0% |       1 | `sun.reflect.generics.parser.SignatureParser:379` |

##### `generateConstructor()` (`java.lang.invoke.InnerClassLambdaMetafactory`)

|      % | Samples | Location                                           |
| -----: | ------: | -------------------------------------------------- |
| 100.0% |       1 | `java.lang.invoke.InnerClassLambdaMetafactory:413` |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `inflate_fast` (`libzip.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |      49 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `SymbolTable::do_lookup` (`libjvm.dylib`)

|     % | Samples | Caller                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 71.4% |      20 | `SymbolTable::lookup_only`                     | `libjvm.dylib` |
| 14.3% |       4 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |
| 14.3% |       4 | `SymbolTable::new_symbol`                      | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|     % | Samples | Caller                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 20.0% |       5 | `PhaseLive::add_liveout`           | `libjvm.dylib` |
| 16.0% |       4 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |
| 12.0% |       3 | `PhaseIFG::re_insert`              | `libjvm.dylib` |
| 12.0% |       3 | `PhaseIFG::remove_node`            | `libjvm.dylib` |
| 12.0% |       3 | `PhaseChaitin::build_ifg_virtual`  | `libjvm.dylib` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

|     % | Samples | Caller                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 70.8% |      17 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
| 25.0% |       6 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |
|  4.2% |       1 | `LIR_Assembler::record_non_safepoint_debug_info`   | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      23 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|    % | Samples | Caller                              | Location       |
| ---: | ------: | ----------------------------------- | -------------- |
| 5.0% |       1 | `TypeInterfaces::intersection_with` | `libjvm.dylib` |
| 5.0% |       1 | `PhaseLive::add_liveout`            | `libjvm.dylib` |
| 5.0% |       1 | `AddPNode::Identity`                | `libjvm.dylib` |
| 5.0% |       1 | `PhaseChaitin::build_ifg_virtual`   | `libjvm.dylib` |
| 5.0% |       1 | `PhaseIterGVN::subsume_node`        | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      17 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |      16 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 81.3% |      13 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |
| 12.5% |       2 | `InstanceKlass::find_method`            | `libjvm.dylib` |
|  6.3% |       1 | `InstanceKlass::find_local_method`      | `libjvm.dylib` |

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

|     % | Samples | Caller                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 50.0% |       6 | `ciBytecodeStream::get_method`                     | `libjvm.dylib` |
| 25.0% |       3 | `ciEnv::get_klass_by_index_impl`                   | `libjvm.dylib` |
| 16.7% |       2 | `ciMethod::ensure_method_data`                     | `libjvm.dylib` |
|  8.3% |       1 | `ciReceiverTypeData::translate_receiver_data_from` | `libjvm.dylib` |

##### `sys_icache_invalidate` (`libsystem_platform.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 41.7% |       5 | `nmethod::nmethod`               | `libjvm.dylib` |
| 33.3% |       4 | `CompiledIC::set_to_monomorphic` | `libjvm.dylib` |
| 16.7% |       2 | `CodeBuffer::copy_code_to`       | `libjvm.dylib` |
|  8.3% |       1 | `CompiledIC::set_to_clean`       | `libjvm.dylib` |

##### `Unique_Node_List::remove` (`libjvm.dylib`)

|      % | Samples | Caller                                    | Location       |
| -----: | ------: | ----------------------------------------- | -------------- |
| 100.0% |      11 | `PhaseIterGVN::remove_globally_dead_node` | `libjvm.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |      11 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `fwd_copy_again` (`libjvm.dylib`)

|     % | Samples | Caller                                          | Location       |
| ----: | ------: | ----------------------------------------------- | -------------- |
| 50.0% |       5 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |
| 20.0% |       2 | `CodeBuffer::copy_code_to`                      | `libjvm.dylib` |
| 10.0% |       1 | `LinearScan::compute_global_live_sets`          | `libjvm.dylib` |
| 10.0% |       1 | `NullCheckEliminator::iterate_one`              | `libjvm.dylib` |
| 10.0% |       1 | `ciMethod::ensure_method_data`                  | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      10 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                                     | Location           |
| ----: | ------: | ------------------------------------------ | ------------------ |
| 20.0% |       2 | `JVM_IHashCode`                            | `libjvm.dylib`     |
| 10.0% |       1 | `jni_ReleasePrimitiveArrayCritical`        | `libjvm.dylib`     |
| 10.0% |       1 | `arraycopy(Object, int, Object, int, int)` | `java.lang.System` |
| 10.0% |       1 | `jni_GetStringLength`                      | `libjvm.dylib`     |
| 10.0% |       1 | `JVM_LookupDefineClass`                    | `libjvm.dylib`     |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       9 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|     % | Samples | Caller                                                         | Location                                                                                                  |
| ----: | ------: | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 11.1% |       1 | `isFlexible(KotlinTypeMarker)`                                 | `org.jetbrains.kotlin.types.model.TypeSystemContext`                                                      |
| 11.1% |       1 | `constructor-impl(Map)`                                        | `org.jetbrains.kotlin.fir.caches.NullableMap`                                                             |
| 11.1% |       1 | `isSubstitutionOverride(FirCallableDeclaration)`               | `org.jetbrains.kotlin.fir.ClassMembersKt`                                                                 |
| 11.1% |       1 | `isLhsOfAssignment(CheckerContext, FirElement)`                | `org.jetbrains.kotlin.fir.analysis.checkers.FirHelpersKt`                                                 |
| 11.1% |       1 | `check(CheckerContext, DiagnosticReporter, FirValueParameter)` | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirValueParameterDefaultValueTypeMismatchChecker` |

##### `PhaseIdealLoop::split_if_with_blocks` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       8 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       7 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       7 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       7 | `Matcher::match` | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|     % | Samples | Caller                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 14.3% |       1 | `Scheduling::anti_do_def`     | `libjvm.dylib` |
| 14.3% |       1 | `MemAllocator::allocate`      | `libjvm.dylib` |
| 14.3% |       1 | `Method::allocate`            | `libjvm.dylib` |
| 14.3% |       1 | `ConstantPool::allocate`      | `libjvm.dylib` |
| 14.3% |       1 | `ConstantPoolCache::allocate` | `libjvm.dylib` |

##### `inflate` (`libzip.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |       7 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `_platform_memmove` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                                                                                                                                                                                                                                   | Location        |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| 28.6% |       2 | `readBytes`                                                                                                                                                                                                                                              | `libjava.dylib` |
| 28.6% |       2 | `bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::internal_insert_get<SymbolTableLookup, bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::insert<SymbolTableLookup>(Thread*, SymbolTableLookup&, Symbol const&, bool*, bool*)::NOP>` | `libjvm.dylib`  |
| 14.3% |       1 | `ClassFileParser::parse_methods`                                                                                                                                                                                                                         | `libjvm.dylib`  |
| 14.3% |       1 | `Type::Initialize`                                                                                                                                                                                                                                       | `libjvm.dylib`  |
| 14.3% |       1 | `Node::add_req`                                                                                                                                                                                                                                          | `libjvm.dylib`  |

##### `Node::dominates` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |       6 | `MemNode::all_controls_dominate` | `libjvm.dylib` |

##### `LinearScan::assign_reg_num` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |       6 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|      % | Samples | Caller                                            | Location       |
| -----: | ------: | ------------------------------------------------- | -------------- |
| 100.0% |       6 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |       6 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `Arena::contains` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       6 | `Matcher::xform` | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|      % | Samples | Caller                                         | Location       |
| -----: | ------: | ---------------------------------------------- | -------------- |
| 100.0% |       6 | `void G1CMTask::process_grey_task_entry<true>` | `libjvm.dylib` |

##### `UTF8::is_legal_utf8` (`libjvm.dylib`)

|      % | Samples | Caller                                         | Location       |
| -----: | ------: | ---------------------------------------------- | -------------- |
| 100.0% |       6 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |

##### `Compile::disconnect_useless_nodes` (`libjvm.dylib`)

|     % | Samples | Caller                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 60.0% |       3 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
| 40.0% |       2 | `PhaseCCP::transform`                    | `libjvm.dylib` |

##### `PhaseIFG::re_insert` (`libjvm.dylib`)

|      % | Samples | Caller                 | Location       |
| -----: | ------: | ---------------------- | -------------- |
| 100.0% |       5 | `PhaseChaitin::Select` | `libjvm.dylib` |

##### `Type::cmp` (`libjvm.dylib`)

|      % | Samples | Caller         | Location       |
| -----: | ------: | -------------- | -------------- |
| 100.0% |       5 | `Dict::Insert` | `libjvm.dylib` |

##### `RegionNode::is_CFG` (`libjvm.dylib`)

|     % | Samples | Caller                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 80.0% |       4 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
| 20.0% |       1 | `ProjNode::is_uncommon_trap_proj`    | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       5 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Matcher::match_tree` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       5 | `Matcher::xform` | `libjvm.dylib` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       5 | `G1ScanHRForRegionClosure::scan_memregion` | `libjvm.dylib` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |       5 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |

##### `G1CardSet::add_to_howl` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |       5 | `G1CardSet::add_card` | `libjvm.dylib` |

##### `sanitizeStackTrace(Throwable)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Caller                            | Location                         |
| -----: | ------: | --------------------------------- | -------------------------------- |
| 100.0% |       5 | `throwParameterIsNullNPE(String)` | `kotlin.jvm.internal.Intrinsics` |

##### `areEqual(Object, Object)` (`kotlin.jvm.internal.Intrinsics`)

|     % | Samples | Caller           | Location                                 |
| ----: | ------: | ---------------- | ---------------------------------------- |
| 33.3% |       1 | `add(Object)`    | `org.jetbrains.kotlin.utils.SmartSet`    |
| 33.3% |       1 | `equals(Object)` | `org.jetbrains.kotlin.name.FqName`       |
| 33.3% |       1 | `equals(Object)` | `org.jetbrains.kotlin.name.FqNameUnsafe` |

##### `createSubstitutionForScope(List, ConeClassLikeType, FirSession)` (`org.jetbrains.kotlin.fir.resolve.SupertypeUtilsKt`)

|      % | Samples | Caller                                                                                                             | Location                                        |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| 100.0% |       2 | `classScope(ConeClassLikeType, FirSession, ScopeSession, FirResolvePhase, ConeClassLikeLookupTag, FirClassSymbol)` | `org.jetbrains.kotlin.fir.resolve.ScopeUtilsKt` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

|      % | Samples | Caller     | Location                  |
| -----: | ------: | ---------- | ------------------------- |
| 100.0% |       2 | `<init>()` | `java.lang.StringBuilder` |

##### `getApproximateCommonClassLoader(MethodType)` (`java.lang.invoke.MethodHandle`)

|      % | Samples | Caller                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       2 | `isSafeToCache(MethodType)` | `java.lang.invoke.MethodHandle` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

|      % | Samples | Caller                             | Location                                     |
| -----: | ------: | ---------------------------------- | -------------------------------------------- |
| 100.0% |       2 | `newInvokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|      % | Samples | Caller                | Location            |
| -----: | ------: | --------------------- | ------------------- |
| 100.0% |       2 | `put(Object, Object)` | `java.util.HashMap` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|      % | Samples | Caller                                                                       | Location                                               |
| -----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |       1 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `initChildrenArrayFromList()` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarVirtualFile`)

|      % | Samples | Caller                              | Location                                                     |
| -----: | ------: | ----------------------------------- | ------------------------------------------------------------ |
| 100.0% |       1 | `<init>(FastJarFileSystem, String)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler` |

##### `accept(ClassVisitor, int)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % | Samples | Caller                                                     | Location                                                |
| -----: | ------: | ---------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |       1 | `visitMembers(KotlinJvmBinaryClass$MemberVisitor, byte[])` | `org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass` |

##### `newOutput()` (`org.jetbrains.kotlin.protobuf.ByteString`)

|      % | Samples | Caller                                            | Location                                          |
| -----: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 100.0% |       1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Function` |

##### `convertFunctionDeclaration(LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder`)

|      % | Samples | Caller                                                                | Location                                                                         |
| -----: | ------: | --------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| 100.0% |       1 | `convertFile(LighterASTNode, KtSourceFile, KtSourceFileLinesMapping)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder` |

##### `getTokenType()` (`com.intellij.lang.impl.PsiBuilderImpl`)

|      % | Samples | Caller           | Location                                   |
| -----: | ------: | ---------------- | ------------------------------------------ |
| 100.0% |       1 | `getTokenType()` | `com.intellij.lang.impl.PsiBuilderAdapter` |

##### `setResolveState(FirResolveState)` (`org.jetbrains.kotlin.fir.FirElementWithResolveState`)

|      % | Samples | Caller                                                                                                                                                                                                                                                                                                                                      | Location                                                          |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 100.0% |       1 | `<init>(KtSourceElement, FirResolvePhase, FirModuleData, FirDeclarationOrigin, FirDeclarationAttributes, FirDeclarationStatus, boolean, FirTypeRef, FirReceiverParameter, DeprecationsProvider, DeserializedContainerSource, ConeSimpleKotlinType, List, List, FirBlock, FirContractDescription, Name, FirNamedFunctionSymbol, List, List)` | `org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl` |

##### `readSourceFileWithMapping(InputStreamReader)` (`org.jetbrains.kotlin.KtSourceFileLinesMappingKt`)

|      % | Samples | Caller                                                                        | Location                                       |
| -----: | ------: | ----------------------------------------------------------------------------- | ---------------------------------------------- |
| 100.0% |       1 | `buildFirViaLightTree(FirSession, Collection, DiagnosticReporter, Function2)` | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt` |

##### `getModuleData()` (`org.jetbrains.kotlin.fir.declarations.builder.FirValueParameterBuilder`)

|      % | Samples | Caller    | Location                                                                 |
| -----: | ------: | --------- | ------------------------------------------------------------------------ |
| 100.0% |       1 | `build()` | `org.jetbrains.kotlin.fir.declarations.builder.FirValueParameterBuilder` |

##### `getTokenType()` (`com.intellij.lang.impl.PsiBuilderImpl$StartMarker`)

|      % | Samples | Caller                                             | Location                                                                      |
| -----: | ------: | -------------------------------------------------- | ----------------------------------------------------------------------------- |
| 100.0% |       1 | `getChildNodeByType(LighterASTNode, IElementType)` | `org.jetbrains.kotlin.fir.lightTree.converter.AbstractLightTreeRawFirBuilder` |

##### `getExtension(CharSequence, String)` (`com.intellij.openapi.util.io.FileUtilRt`)

|      % | Samples | Caller           | Location                               |
| -----: | ------: | ---------------- | -------------------------------------- |
| 100.0% |       1 | `getExtension()` | `com.intellij.openapi.vfs.VirtualFile` |

##### `traverseDirectoriesInPackage(FqName, Set, Function2)` (`org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesIndexImpl`)

|      % | Samples | Caller                                                 | Location                                                                 |
| -----: | ------: | ------------------------------------------------------ | ------------------------------------------------------------------------ |
| 100.0% |       1 | `traverseDirectoriesInPackage(FqName, Set, Function2)` | `org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesDynamicCompoundIndex` |

##### `makeImmutable()` (`org.jetbrains.kotlin.protobuf.FieldSet`)

|      % | Samples | Caller                      | Location                                                               |
| -----: | ------: | --------------------------- | ---------------------------------------------------------------------- |
| 100.0% |       1 | `makeExtensionsImmutable()` | `org.jetbrains.kotlin.protobuf.GeneratedMessageLite$ExtendableMessage` |

##### `readMethod(ClassVisitor, Context, int)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % | Samples | Caller                                   | Location                                      |
| -----: | ------: | ---------------------------------------- | --------------------------------------------- |
| 100.0% |       1 | `accept(ClassVisitor, Attribute[], int)` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `readUtfNonAscii(int, int, int, char[])` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % | Samples | Caller                      | Location                                      |
| -----: | ------: | --------------------------- | --------------------------------------------- |
| 100.0% |       1 | `readUtf(int, int, char[])` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `readUtf(int, char[])` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % | Samples | Caller                  | Location                                      |
| -----: | ------: | ----------------------- | --------------------------------------------- |
| 100.0% |       1 | `readUTF8(int, char[])` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `<init>(KtSourceElement, FirResolvePhase, FirModuleData, FirDeclarationOrigin, FirDeclarationAttributes, FirTypeRef, Name, List, FirValueParameterSymbol, FirExpression, FirBasedSymbol, boolean, boolean, boolean, FirValueParameterKind)` (`org.jetbrains.kotlin.fir.declarations.impl.FirValueParameterImpl`)

|      % | Samples | Caller                                                                                                                                                                                                                                                                | Location                                                           |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| 100.0% |       1 | `<init>(KtSourceElement, FirResolvePhase, FirModuleData, FirDeclarationOrigin, FirDeclarationAttributes, FirTypeRef, Name, List, FirValueParameterSymbol, FirExpression, FirBasedSymbol, boolean, boolean, boolean, FirValueParameterKind, DefaultConstructorMarker)` | `org.jetbrains.kotlin.fir.declarations.impl.FirValueParameterImpl` |

##### `addValueParametersTo$default(FirMemberDeserializer, List, FirBasedSymbol, FirRegularClassBuilder, MessageLite, AnnotationDeserializer$CallableKind, ProtoBuf$Class, FirValueParameterKind, boolean, List, int, Object)` (`org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`)

|      % | Samples | Caller                                                                                  | Location                                                         |
| -----: | ------: | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 100.0% |       1 | `loadFunction(ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin)` | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer` |

##### `hashCode()` (`org.jetbrains.kotlin.name.Name`)

|      % | Samples | Caller         | Location            |
| -----: | ------: | -------------- | ------------------- |
| 100.0% |       1 | `hash(Object)` | `java.util.HashMap` |

##### `hash(Object)` (`java.util.HashMap`)

|      % | Samples | Caller                | Location            |
| -----: | ------: | --------------------- | ------------------- |
| 100.0% |       1 | `put(Object, Object)` | `java.util.HashMap` |

##### `getNode(Object)` (`java.util.HashMap`)

|      % | Samples | Caller        | Location                  |
| -----: | ------: | ------------- | ------------------------- |
| 100.0% |       1 | `get(Object)` | `java.util.LinkedHashMap` |

##### `lock()` (`java.util.concurrent.locks.ReentrantLock`)

|      % | Samples | Caller   | Location                         |
| -----: | ------: | -------- | -------------------------------- |
| 100.0% |       1 | `lock()` | `jdk.internal.misc.InternalLock` |

##### `indexOf(byte[], int, int, int)` (`java.lang.StringLatin1`)

|      % | Samples | Caller              | Location           |
| -----: | ------: | ------------------- | ------------------ |
| 100.0% |       1 | `indexOf(int, int)` | `java.lang.String` |

##### `checkAndAddEntry(int, int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|      % | Samples | Caller                   | Location                       |
| -----: | ------: | ------------------------ | ------------------------------ |
| 100.0% |       1 | `initCEN(int, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `checkForComodification()` (`java.util.ArrayList$Itr`)

|      % | Samples | Caller   | Location                  |
| -----: | ------: | -------- | ------------------------- |
| 100.0% |       1 | `next()` | `java.util.ArrayList$Itr` |

##### `getProxyConstructor(Class, ClassLoader, Class[])` (`java.lang.reflect.Proxy`)

|      % | Samples | Caller                                                      | Location                  |
| -----: | ------: | ----------------------------------------------------------- | ------------------------- |
| 100.0% |       1 | `newProxyInstance(ClassLoader, Class[], InvocationHandler)` | `java.lang.reflect.Proxy` |

##### `returnType()` (`java.lang.invoke.MethodType`)

|      % | Samples | Caller                    | Location                      |
| -----: | ------: | ------------------------- | ----------------------------- |
| 100.0% |       1 | `changeReturnType(Class)` | `java.lang.invoke.MethodType` |

##### `getSerializedSize()` (`kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type`)

|      % | Samples | Caller                                 | Location                                                      |
| -----: | ------: | -------------------------------------- | ------------------------------------------------------------- |
| 100.0% |       1 | `computeMessageSizeNoTag(MessageLite)` | `kotlin.reflect.jvm.internal.impl.protobuf.CodedOutputStream` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

|      % | Samples | Caller                | Location           |
| -----: | ------: | --------------------- | ------------------ |
| 100.0% |       1 | `substring(int, int)` | `java.lang.String` |

##### `substring(int, int)` (`java.lang.String`)

|      % | Samples | Caller           | Location           |
| -----: | ------: | ---------------- | ------------------ |
| 100.0% |       1 | `substring(int)` | `java.lang.String` |

##### `parseTypeArguments()` (`sun.reflect.generics.parser.SignatureParser`)

|      % | Samples | Caller                                          | Location                                      |
| -----: | ------: | ----------------------------------------------- | --------------------------------------------- |
| 100.0% |       1 | `parsePackageNameAndSimpleClassTypeSignature()` | `sun.reflect.generics.parser.SignatureParser` |

##### `generateConstructor()` (`java.lang.invoke.InnerClassLambdaMetafactory`)

|      % | Samples | Caller                 | Location                                       |
| -----: | ------: | ---------------------- | ---------------------------------------------- |
| 100.0% |       1 | `generateInnerClass()` | `java.lang.invoke.InnerClassLambdaMetafactory` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                                                                                           | Location                                                |
| ----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 66.4% |     869 | `_pthread_start`                                                                                   | `libsystem_pthread.dylib`                               |
| 66.4% |     869 | `thread_start`                                                                                     | `libsystem_pthread.dylib`                               |
| 66.4% |     868 | `Thread::call_run`                                                                                 | `libjvm.dylib`                                          |
| 66.4% |     868 | `thread_native_entry`                                                                              | `libjvm.dylib`                                          |
| 60.8% |     795 | `CompileBroker::compiler_thread_loop`                                                              | `libjvm.dylib`                                          |
| 60.8% |     795 | `JavaThread::thread_main_inner`                                                                    | `libjvm.dylib`                                          |
| 59.9% |     784 | `CompileBroker::invoke_compiler_on_method`                                                         | `libjvm.dylib`                                          |
| 41.1% |     538 | `Compile::Compile`                                                                                 | `libjvm.dylib`                                          |
| 41.1% |     538 | `C2Compiler::compile_method`                                                                       | `libjvm.dylib`                                          |
| 33.1% |     433 | `run(String[])`                                                                                    | `org.jetbrains.kotlin.preloading.Preloader`             |
| 33.1% |     433 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.preloading.Preloader`             |
| 27.1% |     355 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 27.1% |     355 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 27.1% |     355 | `invokeStatic(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$DMH.0x0000000401008000`    |
| 27.1% |     355 | `invoke(Object, Object, Object)`                                                                   | `java.lang.invoke.LambdaForm$MH.0x0000000401009400`     |
| 27.1% |     355 | `invokeExact_MT(Object, Object, Object, Object)`                                                   | `java.lang.invoke.Invokers$Holder`                      |
| 27.1% |     355 | `invokeImpl(Object, Object[])`                                                                     | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 27.1% |     355 | `invoke(Object, Object[])`                                                                         | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 27.1% |     355 | `invoke(Object, Object[])`                                                                         | `java.lang.reflect.Method`                              |
| 27.1% |     354 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Compiler

|     % | Samples | Function                                   | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 60.8% |     795 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
| 59.9% |     784 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
| 41.1% |     538 | `Compile::Compile`                         | `libjvm.dylib` |
| 41.1% |     538 | `C2Compiler::compile_method`               | `libjvm.dylib` |
| 21.5% |     281 | `Compile::Code_Gen`                        | `libjvm.dylib` |
| 18.2% |     238 | `Compilation::Compilation`                 | `libjvm.dylib` |
| 18.1% |     237 | `Compilation::compile_method`              | `libjvm.dylib` |
| 16.2% |     212 | `Compilation::compile_java_method`         | `libjvm.dylib` |
| 14.8% |     194 | `Compile::Optimize`                        | `libjvm.dylib` |
| 12.9% |     169 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
|  8.8% |     115 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
|  7.7% |     101 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
|  7.6% |     100 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
|  5.7% |      74 | `Compilation::emit_lir`                    | `libjvm.dylib` |
|  5.5% |      72 | `Compilation::build_hir`                   | `libjvm.dylib` |
|  4.8% |      63 | `Compilation::emit_code_body`              | `libjvm.dylib` |
|  4.7% |      62 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |
|  4.7% |      61 | `GraphBuilder::GraphBuilder`               | `libjvm.dylib` |
|  4.5% |      59 | `PhaseIterGVN::transform_old`              | `libjvm.dylib` |
|  4.5% |      59 | `GraphBuilder::iterate_all_blocks`         | `libjvm.dylib` |

##### Native

|     % | Samples | Function                                        | Location                  |
| ----: | ------: | ----------------------------------------------- | ------------------------- |
| 66.4% |     869 | `_pthread_start`                                | `libsystem_pthread.dylib` |
| 66.4% |     869 | `thread_start`                                  | `libsystem_pthread.dylib` |
| 66.4% |     868 | `Thread::call_run`                              | `libjvm.dylib`            |
| 66.4% |     868 | `thread_native_entry`                           | `libjvm.dylib`            |
| 60.8% |     795 | `JavaThread::thread_main_inner`                 | `libjvm.dylib`            |
| 18.3% |     239 | `Compiler::compile_method`                      | `libjvm.dylib`            |
|  5.4% |      71 | `WorkerThread::run`                             | `libjvm.dylib`            |
|  5.1% |      67 | `SystemDictionary::resolve_class_from_stream`   | `libjvm.dylib`            |
|  5.1% |      67 | `jvm_define_class_common`                       | `libjvm.dylib`            |
|  5.1% |      67 | `JVM_DefineClassWithSource`                     | `libjvm.dylib`            |
|  5.0% |      66 | `Java_java_lang_ClassLoader_defineClass1`       | `libjava.dylib`           |
|  5.0% |      65 | `KlassFactory::create_from_stream`              | `libjvm.dylib`            |
|  4.7% |      62 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib`            |
|  4.7% |      62 | `ClassFileParser::ClassFileParser`              | `libjvm.dylib`            |
|  4.7% |      61 | `IRScope::IRScope`                              | `libjvm.dylib`            |
|  4.7% |      61 | `IR::IR`                                        | `libjvm.dylib`            |
|  4.5% |      59 | `ClassFileParser::parse_stream`                 | `libjvm.dylib`            |
|  3.7% |      49 | `inflate_fast`                                  | `libzip.dylib`            |
|  3.7% |      48 | `Parse::Parse`                                  | `libjvm.dylib`            |
|  3.7% |      48 | `ParseGenerator::generate`                      | `libjvm.dylib`            |

##### Ours

|     % | Samples | Function                                                                                                                                      | Location                                                |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 33.1% |     433 | `run(String[])`                                                                                                                               | `org.jetbrains.kotlin.preloading.Preloader`             |
| 33.1% |     433 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`             |
| 27.1% |     355 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 27.1% |     355 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 27.1% |     354 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 27.1% |     354 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 27.0% |     353 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 27.0% |     353 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 27.0% |     353 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 26.5% |     347 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 25.8% |     338 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 25.8% |     338 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 25.8% |     338 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 25.7% |     336 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 25.7% |     336 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 25.7% |     336 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 25.6% |     335 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 25.5% |     333 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
| 25.5% |     333 | `phaseBody(LoggingContext, Object)`                                                                                                           | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
| 25.5% |     333 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### Standard library

|     % | Samples | Function                                                                        | Location                                              |
| ----: | ------: | ------------------------------------------------------------------------------- | ----------------------------------------------------- |
| 27.1% |     355 | `invokeStatic(Object, Object)`                                                  | `java.lang.invoke.LambdaForm$DMH.0x0000000401008000`  |
| 27.1% |     355 | `invoke(Object, Object, Object)`                                                | `java.lang.invoke.LambdaForm$MH.0x0000000401009400`   |
| 27.1% |     355 | `invokeExact_MT(Object, Object, Object, Object)`                                | `java.lang.invoke.Invokers$Holder`                    |
| 27.1% |     355 | `invokeImpl(Object, Object[])`                                                  | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 27.1% |     355 | `invoke(Object, Object[])`                                                      | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 27.1% |     355 | `invoke(Object, Object[])`                                                      | `java.lang.reflect.Method`                            |
|  5.5% |      72 | `loadClass(String, boolean)`                                                    | `java.lang.ClassLoader`                               |
|  5.3% |      69 | `read(byte[], int, int)`                                                        | `java.util.zip.ZipInputStream`                        |
|  5.3% |      69 | `read(byte[])`                                                                  | `java.io.FilterInputStream`                           |
|  5.1% |      67 | `read(byte[], int, int)`                                                        | `java.util.zip.InflaterInputStream`                   |
|  5.1% |      67 | `defineClass(String, byte[], int, int, ProtectionDomain)`                       | `java.lang.ClassLoader`                               |
|  5.0% |      66 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                               |
|  5.0% |      66 | `defineClass(String, byte[], int, int)`                                         | `java.lang.ClassLoader`                               |
|  4.7% |      62 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                   | `java.util.zip.Inflater`                              |
|  4.7% |      62 | `inflate(byte[], int, int)`                                                     | `java.util.zip.Inflater`                              |
|  4.1% |      54 | `resumeWith(Object)`                                                            | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |
|  1.1% |      15 | `getValue()`                                                                    | `kotlin.SafePublicationLazyImpl`                      |
|  1.1% |      15 | `getValue()`                                                                    | `kotlin.UnsafeLazyImpl`                               |
|  1.1% |      14 | `checkNotNullParameter(Object, String)`                                         | `kotlin.jvm.internal.Intrinsics`                      |
|  1.0% |      13 | `invoke(Class, MethodHandle, String, Object, Object, Class)`                    | `java.lang.invoke.BootstrapMethodInvoker`             |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Caller         | Location                  |
| -----: | ------: | -------------- | ------------------------- |
| 100.0% |     869 | `thread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |     868 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Caller           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |     868 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |     795 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     795 | `Thread::call_run` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |     784 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |     538 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |     538 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % | Samples | Caller           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |     433 | `main(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|      % | Samples | Caller           | Location                                     |
| -----: | ------: | ---------------- | -------------------------------------------- |
| 100.0% |     355 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Caller                         | Location                                             |
| -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% |     355 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000401008000` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000401008000`)

|      % | Samples | Caller                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     355 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000401009400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000401009400`)

|      % | Samples | Caller                                           | Location                           |
| -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% |     355 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                         | Location                                          |
| -----: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% |     355 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Caller                     | Location                                          |
| -----: | ------: | -------------------------- | ------------------------------------------------- |
| 100.0% |     355 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Caller                     | Location                   |
| -----: | ------: | -------------------------- | -------------------------- |
| 100.0% |     355 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % | Samples | Caller          | Location                                    |
| -----: | ------: | --------------- | ------------------------------------------- |
| 100.0% |     355 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Caller                          | Location                                                |
| -----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 100.0% |     354 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Caller           | Location                                               |
| -----: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% |     354 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                         | Location                                      |
| -----: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% |     353 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                                 | Location                                                |
| -----: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 100.0% |     353 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Caller                                                                                             | Location                                                |
| -----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     353 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                                   | Location                                      |
| -----: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 100.0% |     347 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Caller                                                                 | Location                                     |
| -----: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     338 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Caller                                                          | Location                                      |
| -----: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| 100.0% |     338 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                                      | Location                                      |
| -----: | ------: | ----------------------------------------------------------- | --------------------------------------------- |
| 100.0% |     338 | `exec(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                                                                                                        | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     336 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                         | Location                                                |
| -----: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     336 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                                | Location                                     |
| -----: | ------: | --------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     336 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                                                              | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     335 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Caller                              | Location                                          |
| -----: | ------: | ----------------------------------- | ------------------------------------------------- |
| 100.0% |     333 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Caller                                                     | Location                                                |
| -----: | ------: | ---------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     333 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % | Samples | Caller                                                                | Location                                                          |
| -----: | ------: | --------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 100.0% |     333 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`            | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase`       |
|   5.7% |      19 | `invoke(PhaseConfig, PhaserState, LoweringContext, IrModuleFragment)` | `org.jetbrains.kotlin.backend.common.phaser.PerformByIrFilePhase` |
|   1.5% |       5 | `runPhase(NamedCompilerPhase, Object, boolean)`                       | `org.jetbrains.kotlin.backend.common.phaser.PhaseEngine`          |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     281 | `Compile::Compile` | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |     239 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     238 | `Compiler::compile_method` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     237 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |     212 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     194 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |     169 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 57.4% |      66 | `Compile::Optimize`       | `libjvm.dylib` |
| 42.6% |      49 | `Compile::optimize_loops` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     101 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |     100 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      74 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      72 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|     % | Samples | Caller                       | Location                                                 |
| ----: | ------: | ---------------------------- | -------------------------------------------------------- |
| 97.2% |      70 | `loadClass(String, boolean)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  2.8% |       2 | `loadClass(String)`          | `java.lang.ClassLoader`                                  |

##### `WorkerThread::run` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      71 | `Thread::call_run` | `libjvm.dylib` |

##### `read(byte[], int, int)` (`java.util.zip.ZipInputStream`)

|      % | Samples | Caller         | Location                    |
| -----: | ------: | -------------- | --------------------------- |
| 100.0% |      69 | `read(byte[])` | `java.io.FilterInputStream` |

##### `read(byte[])` (`java.io.FilterInputStream`)

|      % | Samples | Caller                                                  | Location                                               |
| -----: | ------: | ------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |      69 | `loadAllClassesFromJars(Collection, int, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `SystemDictionary::resolve_class_from_stream` (`libjvm.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |      67 | `jvm_define_class_common` | `libjvm.dylib` |

##### `jvm_define_class_common` (`libjvm.dylib`)

|      % | Samples | Caller                      | Location       |
| -----: | ------: | --------------------------- | -------------- |
| 100.0% |      67 | `JVM_DefineClassWithSource` | `libjvm.dylib` |

##### `JVM_DefineClassWithSource` (`libjvm.dylib`)

|     % | Samples | Caller                                    | Location        |
| ----: | ------: | ----------------------------------------- | --------------- |
| 98.5% |      66 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib` |
|  1.5% |       1 | `Java_java_lang_ClassLoader_defineClass2` | `libjava.dylib` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

|      % | Samples | Caller                   | Location                       |
| -----: | ------: | ------------------------ | ------------------------------ |
| 100.0% |      67 | `read(byte[], int, int)` | `java.util.zip.ZipInputStream` |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

|     % | Samples | Caller                                              | Location                          |
| ----: | ------: | --------------------------------------------------- | --------------------------------- |
| 98.5% |      66 | `defineClass(String, byte[], int, int)`             | `java.lang.ClassLoader`           |
|  1.5% |       1 | `defineClass(String, byte[], int, int, CodeSource)` | `java.security.SecureClassLoader` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|      % | Samples | Caller                                                                          | Location                |
| -----: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| 100.0% |      66 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|      % | Samples | Caller                                                    | Location                |
| -----: | ------: | --------------------------------------------------------- | ----------------------- |
| 100.0% |      66 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `defineClass(String, byte[], int, int)` (`java.lang.ClassLoader`)

|      % | Samples | Caller              | Location                                                 |
| -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% |      66 | `findClass(String)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `KlassFactory::create_from_stream` (`libjvm.dylib`)

|     % | Samples | Caller                                               | Location       |
| ----: | ------: | ---------------------------------------------------- | -------------- |
| 98.5% |      64 | `SystemDictionary::resolve_class_from_stream`        | `libjvm.dylib` |
|  1.5% |       1 | `SystemDictionary::resolve_hidden_class_from_stream` | `libjvm.dylib` |

##### `Compilation::emit_code_body` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      63 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 59.7% |      37 | `Compile::Optimize`                        | `libjvm.dylib` |
| 22.6% |      14 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
| 11.3% |       7 | `PhaseMacroExpand::expand_macro_nodes`     | `libjvm.dylib` |
|  3.2% |       2 | `Compile::process_for_post_loop_opts_igvn` | `libjvm.dylib` |
|  3.2% |       2 | `Compile::remove_speculative_types`        | `libjvm.dylib` |

##### `Java_java_util_zip_Inflater_inflateBytesBytes` (`libzip.dylib`)

|      % | Samples | Caller                                                        | Location                 |
| -----: | ------: | ------------------------------------------------------------- | ------------------------ |
| 100.0% |      62 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater` |

##### `ClassFileParser::ClassFileParser` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      62 | `KlassFactory::create_from_stream` | `libjvm.dylib` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Caller                      | Location                 |
| -----: | ------: | --------------------------- | ------------------------ |
| 100.0% |      62 | `inflate(byte[], int, int)` | `java.util.zip.Inflater` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Caller                   | Location                            |
| -----: | ------: | ------------------------ | ----------------------------------- |
| 100.0% |      62 | `read(byte[], int, int)` | `java.util.zip.InflaterInputStream` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      61 | `IRScope::IRScope` | `libjvm.dylib` |

##### `IRScope::IRScope` (`libjvm.dylib`)

|      % | Samples | Caller   | Location       |
| -----: | ------: | -------- | -------------- |
| 100.0% |      61 | `IR::IR` | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |      61 | `Compilation::build_hir` | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |      59 | `PhaseIterGVN::optimize` | `libjvm.dylib` |

##### `GraphBuilder::iterate_all_blocks` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |      59 | `GraphBuilder::GraphBuilder`    | `libjvm.dylib` |
|  55.9% |      33 | `GraphBuilder::try_inline_full` | `libjvm.dylib` |

##### `ClassFileParser::parse_stream` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      59 | `ClassFileParser::ClassFileParser` | `libjvm.dylib` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|     % | Samples | Caller                                                             | Location                                                              |
| ----: | ------: | ------------------------------------------------------------------ | --------------------------------------------------------------------- |
| 94.4% |      51 | `resumeTask(TowerResolveManager$SuspendedResolverTask)`            | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`    |
| 51.9% |      28 | `processCandidate(Candidate, ResolutionContext, boolean, boolean)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner` |
|  1.9% |       1 | `run()`                                                            | `kotlinx.coroutines.DispatchedTask`                                   |
|  1.9% |       1 | `resumeCancellableWith(Continuation, Object, Function1)`           | `kotlinx.coroutines.internal.DispatchedContinuationKt`                |

##### `inflate_fast` (`libzip.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |      49 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      48 | `ParseGenerator::generate` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|     % | Samples | Caller                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 95.8% |      46 | `Compile::Compile`                     | `libjvm.dylib` |
| 54.2% |      26 | `Parse::do_call`                       | `libjvm.dylib` |
| 54.2% |      26 | `PredictedCallGenerator::generate`     | `libjvm.dylib` |
|  4.2% |       2 | `CallGenerator::do_late_inline_helper` | `libjvm.dylib` |

##### `getValue()` (`kotlin.SafePublicationLazyImpl`)

|     % | Samples | Caller                | Location                                                                        |
| ----: | ------: | --------------------- | ------------------------------------------------------------------------------- |
| 60.0% |       9 | `getJavaField()`      | `kotlin.reflect.jvm.internal.DescriptorKProperty`                               |
| 13.3% |       2 | `getImplicitScope()`  | `org.jetbrains.kotlin.fir.resolve.calls.ImplicitReceiverValue`                  |
| 13.3% |       2 | `getAnnotationInfo()` | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer` |
| 13.3% |       2 | `getDeclarations()`   | `org.jetbrains.kotlin.fir.java.FirLazyJavaDeclarationList`                      |
| 13.3% |       2 | `getCallablesIndex()` | `org.jetbrains.kotlin.fir.scopes.impl.FirClassDeclaredMemberScopeImpl`          |

##### `getValue()` (`kotlin.UnsafeLazyImpl`)

|     % | Samples | Caller                                                       | Location                                                                      |
| ----: | ------: | ------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| 73.3% |      11 | `resolveVariableAccessAndSelectCandidateImpl$lambda$1(Lazy)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                      |
|  6.7% |       1 | `getFirValueParameter()`                                     | `org.jetbrains.kotlin.fir.lightTree.fir.ValueParameter`                       |
|  6.7% |       1 | `getReversedFilteredLocalScopes()`                           | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerDataElementsForName`       |
|  6.7% |       1 | `getContextQualifiers()`                                     | `org.jetbrains.kotlin.fir.java.enhancement.FirSignatureEnhancement`           |
|  6.7% |       1 | `processExhaustivenessCheck$lambda$1(Lazy)`                  | `org.jetbrains.kotlin.fir.resolve.transformers.FirWhenExhaustivenessComputer` |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|    % | Samples | Caller                                                                           | Location                                                           |
| ---: | ------: | -------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| 7.1% |       1 | `isFlexible(KotlinTypeMarker)`                                                   | `org.jetbrains.kotlin.types.model.TypeSystemContext`               |
| 7.1% |       1 | `toLazyEffectiveVisibility(Visibility, FirClassLikeSymbol, FirSession, boolean)` | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializerKt` |
| 7.1% |       1 | `constructor-impl(Map)`                                                          | `org.jetbrains.kotlin.fir.caches.NullableMap`                      |
| 7.1% |       1 | `isIntersection(TypeSystemContext, TypeConstructorMarker)`                       | `org.jetbrains.kotlin.types.model.TypeSystemContextContextualKt`   |
| 7.1% |       1 | `isSubstitutionOverride(FirCallableDeclaration)`                                 | `org.jetbrains.kotlin.fir.ClassMembersKt`                          |

##### `invoke(Class, MethodHandle, String, Object, Object, Class)` (`java.lang.invoke.BootstrapMethodInvoker`)

|      % | Samples | Caller                                                      | Location                    |
| -----: | ------: | ----------------------------------------------------------- | --------------------------- |
| 100.0% |      13 | `makeSite(MethodHandle, String, MethodType, Object, Class)` | `java.lang.invoke.CallSite` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 99.9% |     868 | `thread_native_entry` | `libjvm.dylib` |
|  0.1% |       1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |     869 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 91.6% |     795 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  8.2% |      71 | `WorkerThread::run`             | `libjvm.dylib` |
|  0.1% |       1 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
|  0.1% |       1 | `VMThread::run`                 | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     868 | `Thread::call_run` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 98.6% |     784 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  1.4% |      11 | `CompileQueue::get`                        | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % | Samples | Callee                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |     795 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 68.6% |     538 | `C2Compiler::compile_method`    | `libjvm.dylib` |
| 30.5% |     239 | `Compiler::compile_method`      | `libjvm.dylib` |
|  0.4% |       3 | `ciEnv::get_method_from_handle` | `libjvm.dylib` |
|  0.3% |       2 | `ciEnv::~ciEnv`                 | `libjvm.dylib` |
|  0.1% |       1 | `CompilationLog::log_compile`   | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 52.2% |     281 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 36.1% |     194 | `Compile::Optimize`                      | `libjvm.dylib` |
|  8.6% |      46 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  1.5% |       8 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.6% |       3 | `CallGenerator::for_inline`              | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     538 | `Compile::Compile` | `libjvm.dylib` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|     % | Samples | Callee                                                                       | Location                                               |
| ----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 82.0% |     355 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                             |
| 17.6% |      76 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
|  0.2% |       1 | `loadClass(String)`                                                          | `java.lang.ClassLoader`                                |
|  0.2% |       1 | `joining(CharSequence)`                                                      | `java.util.stream.Collectors`                          |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % | Samples | Callee          | Location                                    |
| -----: | ------: | --------------- | ------------------------------------------- |
| 100.0% |     433 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|     % | Samples | Callee                          | Location                                                |
| ----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 99.7% |     354 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.3% |       1 | `<init>()`                      | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee           | Location                                               |
| -----: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% |     355 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000401008000`)

|      % | Samples | Callee           | Location                                     |
| -----: | ------: | ---------------- | -------------------------------------------- |
| 100.0% |     355 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000401009400`)

|      % | Samples | Callee                         | Location                                             |
| -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% |     355 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000401008000` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     355 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000401009400` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee                                           | Location                           |
| -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% |     355 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee                         | Location                                          |
| -----: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% |     355 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % | Samples | Callee                     | Location                                          |
| -----: | ------: | -------------------------- | ------------------------------------------------- |
| 100.0% |     355 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|     % | Samples | Callee                                                 | Location                                                |
| ----: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 99.7% |     353 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.3% |       1 | `defaultMessageRenderer()`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                                                                                             | Location                                                |
| -----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     354 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                                               | Location                                                                |
| ----: | ------: | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| 98.3% |     347 | `exec(MessageCollector, Services, CommonCompilerArguments)`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|  1.4% |       5 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |
|  0.3% |       1 | `createArguments()`                                                                  | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                            |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                                                   | Location                                      |
| -----: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 100.0% |     353 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                                         | Location                                      |
| -----: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% |     353 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                          | Location                                      |
| ----: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| 97.4% |     338 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |
|  2.6% |       9 | `<clinit>()`                                                    | `org.jetbrains.kotlin.cli.common.ArgumentsKt` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|     % | Samples | Callee                                                         | Location                                                |
| ----: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 99.4% |     336 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|  0.6% |       2 | `getDefaultPerformanceManager()`                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee                                                                | Location                                     |
| -----: | ------: | --------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     338 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                                                                 | Location                                     |
| -----: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     338 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                                         | Location                                                |
| ----: | ------: | ---------------------------------------------- | ------------------------------------------------------- |
| 99.7% |     335 | `runPhasedPipeline(ArgumentsPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|  0.3% |       1 | `disposeRootInWriteAction(Disposable)`         | `org.jetbrains.kotlin.cli.common.UtilsKt`               |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                                                                              | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     336 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                                                                                                                        | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     336 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                                                                          | Location                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| 99.4% |     333 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`            | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                        |
|  0.3% |       1 | `createCompoundPhase(CommonCompilerArguments)`                                  | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmCliPipeline`                      |
|  0.3% |       1 | `reportToMessageCollector(BaseDiagnosticsCollector, MessageCollector, boolean)` | `org.jetbrains.kotlin.cli.common.fir.FirDiagnosticsCompilerResultsReporter` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|     % | Samples | Callee                           | Location                                                              |
| ----: | ------: | -------------------------------- | --------------------------------------------------------------------- |
| 67.3% |     224 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`      |
| 22.8% |      76 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`       |
|  8.4% |      28 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`        |
|  1.2% |       4 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmConfigurationPipelinePhase` |
|  0.3% |       1 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmWriteOutputsPhase`          |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Callee                                         | Location                                          |
| -----: | ------: | ---------------------------------------------- | ------------------------------------------------- |
| 100.0% |     333 | `phaseBody(PipelineContext, PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % | Samples | Callee                              | Location                                                         |
| -----: | ------: | ----------------------------------- | ---------------------------------------------------------------- |
| 100.0% |     333 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
|   5.4% |      18 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase`   |
|   1.5% |       5 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.ModuleLoweringPhase` |
|   0.3% |       1 | `isVerbose(NamedCompilerPhase)`     | `org.jetbrains.kotlin.config.phaser.PhaseConfig`                 |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 60.1% |     169 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 17.8% |      50 | `Matcher::match`                  | `libjvm.dylib` |
| 12.1% |      34 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  7.5% |      21 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  1.8% |       5 | `PhaseOutput::install_code`       | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                     | Location       |
| ----: | ------: | -------------------------- | -------------- |
| 99.6% |     238 | `Compilation::Compilation` | `libjvm.dylib` |
|  0.4% |       1 | `Chunk::next_chop`         | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|     % | Samples | Callee                                               | Location       |
| ----: | ------: | ---------------------------------------------------- | -------------- |
| 99.6% |     237 | `Compilation::compile_method`                        | `libjvm.dylib` |
|  0.4% |       1 | `DebugInformationRecorder::DebugInformationRecorder` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 89.5% |     212 | `Compilation::compile_java_method` | `libjvm.dylib` |
| 10.1% |      24 | `ciEnv::register_method`           | `libjvm.dylib` |
|  0.4% |       1 | `Dependencies::assert_common_1`    | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 34.9% |      74 | `Compilation::emit_lir`        | `libjvm.dylib` |
| 34.0% |      72 | `Compilation::build_hir`       | `libjvm.dylib` |
| 29.7% |      63 | `Compilation::emit_code_body`  | `libjvm.dylib` |
|  0.9% |       2 | `ciMethod::ensure_method_data` | `libjvm.dylib` |
|  0.5% |       1 | `LIR_Assembler::emit_code`     | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 34.0% |      66 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
| 25.3% |      49 | `Compile::optimize_loops`              | `libjvm.dylib` |
| 19.1% |      37 | `PhaseIterGVN::optimize`               | `libjvm.dylib` |
|  7.2% |      14 | `PhaseCCP::PhaseCCP`                   | `libjvm.dylib` |
|  4.1% |       8 | `PhaseMacroExpand::expand_macro_nodes` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 18.9% |      32 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| 17.8% |      30 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
| 12.4% |      21 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
| 11.8% |      20 | `PhaseLive::compute`                       | `libjvm.dylib` |
|  6.5% |      11 | `PhaseChaitin::Select`                     | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 87.8% |     101 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| 12.2% |      14 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|     % | Samples | Callee                               | Location                   |
| ----: | ------: | ------------------------------------ | -------------------------- |
| 99.0% |     100 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib`             |
|  1.0% |       1 | `_platform_bzero`                    | `libsystem_platform.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 26.0% |      26 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| 26.0% |      26 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| 12.0% |      12 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |
| 11.0% |      11 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
|  5.0% |       5 | `PhaseIdealLoop::build_loop_tree`      | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 75.7% |      56 | `LinearScan::do_linear_scan`     | `libjvm.dylib` |
| 23.0% |      17 | `BlockList::iterate_forward`     | `libjvm.dylib` |
|  1.4% |       1 | `ControlFlowOptimizer::optimize` | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|     % | Samples | Callee                                       | Location       |
| ----: | ------: | -------------------------------------------- | -------------- |
| 84.7% |      61 | `IR::IR`                                     | `libjvm.dylib` |
|  8.3% |       6 | `GlobalValueNumbering::GlobalValueNumbering` | `libjvm.dylib` |
|  4.2% |       3 | `IR::eliminate_null_checks`                  | `libjvm.dylib` |
|  2.8% |       2 | `IR::compute_use_counts`                     | `libjvm.dylib` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                             | Location                                                 |
| ----: | ------: | ---------------------------------- | -------------------------------------------------------- |
| 91.7% |      66 | `findClass(String)`                | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  5.6% |       4 | `findBootstrapClassOrNull(String)` | `java.lang.ClassLoader`                                  |
|  1.4% |       1 | `findClass(String)`                | `java.net.URLClassLoader`                                |
|  1.4% |       1 | `loadClass(String, boolean)`       | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `WorkerThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location                 |
| ----: | ------: | --------------------------------- | ------------------------ |
| 38.0% |      27 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
| 31.0% |      22 | `G1RebuildRSAndScrubTask::work`   | `libjvm.dylib`           |
| 19.7% |      14 | `G1CMConcurrentMarkingTask::work` | `libjvm.dylib`           |
|  9.9% |       7 | `G1ParallelCleaningTask::work`    | `libjvm.dylib`           |
|  1.4% |       1 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |

##### `read(byte[], int, int)` (`java.util.zip.ZipInputStream`)

|     % | Samples | Callee                     | Location                            |
| ----: | ------: | -------------------------- | ----------------------------------- |
| 97.1% |      67 | `read(byte[], int, int)`   | `java.util.zip.InflaterInputStream` |
|  2.9% |       2 | `update(byte[], int, int)` | `java.util.zip.CRC32`               |

##### `read(byte[])` (`java.io.FilterInputStream`)

|      % | Samples | Callee                   | Location                       |
| -----: | ------: | ------------------------ | ------------------------------ |
| 100.0% |      69 | `read(byte[], int, int)` | `java.util.zip.ZipInputStream` |

##### `SystemDictionary::resolve_class_from_stream` (`libjvm.dylib`)

|     % | Samples | Callee                                    | Location       |
| ----: | ------: | ----------------------------------------- | -------------- |
| 95.5% |      64 | `KlassFactory::create_from_stream`        | `libjvm.dylib` |
|  4.5% |       3 | `SystemDictionary::define_instance_class` | `libjvm.dylib` |

##### `jvm_define_class_common` (`libjvm.dylib`)

|      % | Samples | Callee                                        | Location       |
| -----: | ------: | --------------------------------------------- | -------------- |
| 100.0% |      67 | `SystemDictionary::resolve_class_from_stream` | `libjvm.dylib` |

##### `JVM_DefineClassWithSource` (`libjvm.dylib`)

|      % | Samples | Callee                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |      67 | `jvm_define_class_common` | `libjvm.dylib` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

|     % | Samples | Callee                      | Location                            |
| ----: | ------: | --------------------------- | ----------------------------------- |
| 92.5% |      62 | `inflate(byte[], int, int)` | `java.util.zip.Inflater`            |
|  7.5% |       5 | `fill()`                    | `java.util.zip.InflaterInputStream` |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                                                                          | Location                |
| ----: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| 98.5% |      66 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |
|  1.5% |       1 | `preDefineClass(String, ProtectionDomain)`                                      | `java.lang.ClassLoader` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|      % | Samples | Callee                      | Location       |
| -----: | ------: | --------------------------- | -------------- |
| 100.0% |      66 | `JVM_DefineClassWithSource` | `libjvm.dylib` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|      % | Samples | Callee                                    | Location                                                 |
| -----: | ------: | ----------------------------------------- | -------------------------------------------------------- |
| 100.0% |      66 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`                                          |
|  15.2% |      10 | `loadClass(String)`                       | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `defineClass(String, byte[], int, int)` (`java.lang.ClassLoader`)

|      % | Samples | Callee                                                    | Location                |
| -----: | ------: | --------------------------------------------------------- | ----------------------- |
| 100.0% |      66 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `KlassFactory::create_from_stream` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 95.4% |      62 | `ClassFileParser::ClassFileParser`       | `libjvm.dylib` |
|  4.6% |       3 | `ClassFileParser::create_instance_klass` | `libjvm.dylib` |

##### `Compilation::emit_code_body` (`libjvm.dylib`)

|     % | Samples | Callee                                          | Location       |
| ----: | ------: | ----------------------------------------------- | -------------- |
| 63.5% |      40 | `LIR_Assembler::emit_code`                      | `libjvm.dylib` |
| 34.9% |      22 | `Compilation::emit_code_epilog`                 | `libjvm.dylib` |
|  1.6% |       1 | `Compilation::generate_exception_handler_table` | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 95.2% |      59 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |
|  1.6% |       1 | `CProjNode::hash`             | `libjvm.dylib` |
|  1.6% |       1 | `AddNode::hash`               | `libjvm.dylib` |

##### `Java_java_util_zip_Inflater_inflateBytesBytes` (`libzip.dylib`)

|     % | Samples | Callee                              | Location       |
| ----: | ------: | ----------------------------------- | -------------- |
| 79.0% |      49 | `inflate_fast`                      | `libzip.dylib` |
| 19.4% |      12 | `inflate`                           | `libzip.dylib` |
|  1.6% |       1 | `jni_ReleasePrimitiveArrayCritical` | `libjvm.dylib` |

##### `ClassFileParser::ClassFileParser` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 95.2% |      59 | `ClassFileParser::parse_stream`               | `libjvm.dylib` |
|  4.8% |       3 | `ClassFileParser::post_process_parsed_stream` | `libjvm.dylib` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Callee                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |      62 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Callee                                                        | Location                 |
| -----: | ------: | ------------------------------------------------------------- | ------------------------ |
| 100.0% |      62 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

|     % | Samples | Callee                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 96.7% |      59 | `GraphBuilder::iterate_all_blocks`   | `libjvm.dylib` |
|  3.3% |       2 | `BlockListBuilder::BlockListBuilder` | `libjvm.dylib` |

##### `IRScope::IRScope` (`libjvm.dylib`)

|      % | Samples | Callee                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |      61 | `GraphBuilder::GraphBuilder` | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      61 | `IRScope::IRScope` | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 23.7% |      14 | `IfNode::Ideal`              | `libjvm.dylib` |
| 10.2% |       6 | `PhaseIterGVN::subsume_node` | `libjvm.dylib` |
|  8.5% |       5 | `StoreNode::Ideal`           | `libjvm.dylib` |
|  6.8% |       4 | `RegionNode::Ideal`          | `libjvm.dylib` |
|  3.4% |       2 | `PhiNode::Value`             | `libjvm.dylib` |

##### `GraphBuilder::iterate_all_blocks` (`libjvm.dylib`)

|     % | Samples | Callee                                      | Location       |
| ----: | ------: | ------------------------------------------- | -------------- |
| 98.3% |      58 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |
|  3.4% |       2 | `BlockEnd::as_BlockEnd`                     | `libjvm.dylib` |
|  1.7% |       1 | `ValueStack::push`                          | `libjvm.dylib` |

##### `ClassFileParser::parse_stream` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 79.7% |      47 | `ClassFileParser::parse_constant_pool` | `libjvm.dylib` |
| 15.3% |       9 | `ClassFileParser::parse_methods`       | `libjvm.dylib` |
|  3.4% |       2 | `ClassFileParser::parse_fields`        | `libjvm.dylib` |
|  1.7% |       1 | `ConstantPool::allocate`               | `libjvm.dylib` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|     % | Samples | Callee                  | Location                                                                                                      |
| ----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------------- |
| 64.8% |      35 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`                         |
| 51.9% |      28 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`                      |
| 16.7% |       9 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$2`                      |
|  7.4% |       4 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirInvokeResolveTowerExtension$enqueueResolverTasksForInvoke$3` |
|  3.7% |       2 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$1`                      |

##### `Parse::Parse` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 97.9% |      47 | `Parse::do_all_blocks`          | `libjvm.dylib` |
|  2.1% |       1 | `Dependencies::assert_common_1` | `libjvm.dylib` |
|  2.1% |       1 | `ciMethod::method_data`         | `libjvm.dylib` |
|  2.1% |       1 | `Parse::create_entry_map`       | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % | Samples | Callee         | Location       |
| -----: | ------: | -------------- | -------------- |
| 100.0% |      48 | `Parse::Parse` | `libjvm.dylib` |

##### `getValue()` (`kotlin.SafePublicationLazyImpl`)

|     % | Samples | Callee     | Location                                                                                                   |
| ----: | ------: | ---------- | ---------------------------------------------------------------------------------------------------------- |
| 60.0% |       9 | `invoke()` | `kotlin.reflect.jvm.internal.DescriptorKProperty$$Lambda$0`                                                |
| 13.3% |       2 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.ImplicitReceiverValue$$Lambda.0x00000004016563f0`                  |
| 13.3% |       2 | `invoke()` | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer$$Lambda.0x00000004015d7920` |
| 13.3% |       2 | `invoke()` | `org.jetbrains.kotlin.fir.java.FirLazyJavaDeclarationList$$Lambda.0x000000040160f2a8`                      |
| 13.3% |       2 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.impl.FirClassDeclaredMemberScopeImpl$$Lambda.0x000000040161dc00`          |

##### `getValue()` (`kotlin.UnsafeLazyImpl`)

|     % | Samples | Callee     | Location                                                                                                 |
| ----: | ------: | ---------- | -------------------------------------------------------------------------------------------------------- |
| 73.3% |      11 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver$$Lambda.0x0000000401686d48`                      |
|  6.7% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.lightTree.fir.ValueParameter$$Lambda.0x000000040152bdf8`                       |
|  6.7% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerDataElementsForName$$Lambda.0x0000000401665e90`       |
|  6.7% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.java.enhancement.FirSignatureEnhancement$$Lambda.0x00000004016121e0`           |
|  6.7% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.transformers.FirWhenExhaustivenessComputer$$Lambda.0x00000004016d25a0` |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|     % | Samples | Callee                            | Location                         |
| ----: | ------: | --------------------------------- | -------------------------------- |
| 35.7% |       5 | `throwParameterIsNullNPE(String)` | `kotlin.jvm.internal.Intrinsics` |

##### `invoke(Class, MethodHandle, String, Object, Object, Class)` (`java.lang.invoke.BootstrapMethodInvoker`)

|     % | Samples | Callee                                                                           | Location                           |
| ----: | ------: | -------------------------------------------------------------------------------- | ---------------------------------- |
| 92.3% |      12 | `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  7.7% |       1 | `getClass()`                                                                     | `java.lang.Object`                 |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.2% |      42 | `inflate_fast` (`libzip.dylib`) ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                |
| 1.8% |      23 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                   |
| 1.3% |      17 | `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                      |
| 0.8% |      11 | `PhaseChaitin::elide_copy` (`libjvm.dylib`) ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                 |
| 0.8% |      10 | `PhaseLive::compute` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                    |
| 0.7% |       9 | `Unique_Node_List::remove` (`libjvm.dylib`) ← `PhaseIterGVN::remove_globally_dead_node` ← `PhaseIterGVN::subsume_node` ← `IfNode::Ideal_common` ← `IfNode::Ideal` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                 |
| 0.5% |       7 | `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                              |
| 0.5% |       7 | `Matcher::xform` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.5% |       7 | `PhaseIdealLoop::split_if_with_blocks` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                   |
| 0.5% |       7 | `inflate_fast` (`libzip.dylib`) ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |
| 0.5% |       6 | `Arena::contains` (`libjvm.dylib`) ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                     |
| 0.5% |       6 | `inflate` (`libzip.dylib`) ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                     |
| 0.5% |       6 | `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                   |
| 0.5% |       6 | `LinearScan::assign_reg_num` (`libjvm.dylib`) ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                  |
| 0.4% |       5 | `fwd_copy_again` (`libjvm.dylib`) ← `G1ParScanThreadState::trim_queue_to_threshold` ← `G1ParScanThreadState::steal_and_trim_queue` ← `G1ParEvacuateFollowersClosure::do_void` ← `G1EvacuateRegionsTask::evacuate_live_objects` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                      |
| 0.4% |       5 | `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`) ← `G1ScanHRForRegionClosure::scan_memregion` ← `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` ← `G1ScanHRForRegionClosure::scan_heap_roots` ← `G1ScanHRForRegionClosure::do_heap_region` ← `G1RemSet::scan_heap_roots` ← `G1EvacuateRegionsTask::scan_roots` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                      |
| 0.4% |       5 | `PhaseIFG::re_insert` (`libjvm.dylib`) ← `PhaseChaitin::Select` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                          |
| 0.4% |       5 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.4% |       5 | `Node::dominates` (`libjvm.dylib`) ← `MemNode::all_controls_dominate` ← `InitializeNode::detect_init_independence` ← `InitializeNode::can_capture_store` ← `StoreNode::Ideal` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                     |
| 0.4% |       5 | `IndexSetIterator::advance_and_next` (`libjvm.dylib`) ← `PhaseLive::add_liveout` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                  |

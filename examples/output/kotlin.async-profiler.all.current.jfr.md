# Sampling profile

Collected 1,413 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Compiler          | 44.2% |     624 |
| Native            | 40.5% |     572 |
| Ours              | 10.0% |     141 |
| Standard library  |  4.5% |      63 |
| JIT               |  0.8% |      12 |
| Garbage collector |  0.1% |       1 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── … 953 samples (67.4%) Thread::call_run at libjvm.dylib
│   ├── 858 samples (60.7%) JavaThread::thread_main_inner
│   │   └── 856 samples (60.6%) CompileBroker::compiler_thread_loop
│   │       ├── 842 samples (59.6%) CompileBroker::invoke_compiler_on_method
│   │       │   ├── 586 samples (41.5%) C2Compiler::compile_method
│   │       │   │   └── 586 samples (41.5%) Compile::Compile
│   │       │   │       ├── 303 samples (21.4%) Compile::Code_Gen
│   │       │   │       │   ├── 153 samples (10.8%) PhaseChaitin::Register_Allocate
│   │       │   │       │   │   ├── 29 samples (2.1%, self 0.9%) PhaseChaitin::build_ifg_physical
│   │       │   │       │   │   │   └── 16 samples (1.1%) 8 more callees, led by (0.3%) PhaseChaitin::compute_initial_block_pressure
│   │       │   │       │   │   ├── 24 samples (1.7%, self 1.2%) PhaseChaitin::Split
│   │       │   │       │   │   └── 100 samples (7.1%) 26 more callees, led by (1.3%) PhaseLive::compute
│   │       │   │       │   ├── 60 samples (4.2%) Matcher::match
│   │       │   │       │   │   ├── 51 samples (3.6%) Matcher::xform
│   │       │   │       │   │   │   ├── 26 samples (1.8%) Matcher::match_tree
│   │       │   │       │   │   │   │   ├── 14 samples (1.0%) Matcher::Label_Root
│   │       │   │       │   │   │   │   │   └── … 3 samples (0.2%, self 2.8% globally) __psynch_mutexwait at libsystem_kernel.dylib
│   │       │   │       │   │   │   │   └── 4 samples (0.3%) Chunk::next_chop
│   │       │   │       │   │   │   └── 20 samples (1.4%) 5 more callees, led by (0.8%) Arena::contains
│   │       │   │       │   │   └── 4 samples (0.3%) Matcher::find_shared
│   │       │   │       │   └── 89 samples (6.3%) 7 more callees, led by (3.1%) PhaseOutput::Output
│   │       │   │       └── 283 samples (20.0%) 6 more callees, led by (14.0%) Compile::Optimize
│   │       │   └── 256 samples (18.1%) 4 more callees, led by (17.7%) Compiler::compile_method
│   │       └── … 10 samples (0.7%) __psynch_cvwait at libsystem_kernel.dylib
│   └── 95 samples (6.7%) 5 more callees, led by (6.0%) WorkerThread::run
└── 456 samples (32.3%) main(String[]) at org.jetbrains.kotlin.preloading.Preloader
    └── 456 samples (32.3%) run(String[])
        ├── … 376 samples (26.6%) exec(PrintStream, Services, MessageRenderer, String[]) at org.jetbrains.kotlin.cli.common.CLICompiler
        │   └── 371 samples (26.3%) exec(MessageCollector, Services, CommonCompilerArguments)
        │       ├── … 357 samples (25.3%) invoke(PhaseConfig, PhaserState, LoggingContext, Object) at org.jetbrains.kotlin.config.phaser.NamedCompilerPhase
        │       │   ├── 330 samples (23.4%) phaseBody(LoggingContext, Object) at org.jetbrains.kotlin.cli.pipeline.PipelinePhase
        │       │   │   └── 330 samples (23.4%) phaseBody(PipelineContext, PipelineArtifact) …
        │       │   └── 27 samples (1.9%) 2 more callees, led by (1.5%) phaseBody(LoggingContext, Object) at org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase
        │       └── 9 samples (0.6%) <clinit>() at org.jetbrains.kotlin.cli.common.ArgumentsKt …
        └── 76 samples (5.4%) preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler) at org.jetbrains.kotlin.preloading.ClassPreloadingUtils
            └── … 76 samples (5.4%) loadAllClassesFromJars(Collection, int, ClassHandler) at org.jetbrains.kotlin.preloading.ClassPreloadingUtils
                ├── … 61 samples (4.3%) Java_java_util_zip_Inflater_inflateBytesBytes at libzip.dylib
                │   ├── 43 samples (3.0%) inflate_fast
                │   └── 18 samples (1.3%) 3 more callees, led by (1.1%) inflate
                └── 3 samples (0.2%) toByteArray() at java.io.ByteArrayOutputStream
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|    % | Samples | Function                                                                                                                                                 | Location                   |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 3.1% |      44 | `inflate_fast`                                                                                                                                           | `libzip.dylib`             |
| 2.8% |      39 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
| 1.8% |      26 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
| 1.5% |      21 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`             |
| 1.3% |      19 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| 1.2% |      17 | `PhaseChaitin::Split`                                                                                                                                    | `libjvm.dylib`             |
| 1.1% |      16 | `IntervalWalker::walk_to`                                                                                                                                | `libjvm.dylib`             |
| 1.1% |      15 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 0.9% |      13 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                        | `libjvm.dylib`             |
| 0.9% |      13 | `PhaseChaitin::build_ifg_physical`                                                                                                                       | `libjvm.dylib`             |
| 0.8% |      12 | `Arena::contains`                                                                                                                                        | `libjvm.dylib`             |
| 0.8% |      12 | `ciObjectFactory::get_metadata`                                                                                                                          | `libjvm.dylib`             |
| 0.8% |      12 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |
| 0.8% |      11 | `IndexSetIterator::advance_and_next`                                                                                                                     | `libjvm.dylib`             |
| 0.8% |      11 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
| 0.8% |      11 | `PhaseAggressiveCoalesce::insert_copies`                                                                                                                 | `libjvm.dylib`             |
| 0.8% |      11 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
| 0.7% |      10 | `PhaseIdealLoop::build_loop_late_post_work`                                                                                                              | `libjvm.dylib`             |
| 0.7% |      10 | `inflate_table`                                                                                                                                          | `libzip.dylib`             |
| 0.6% |       9 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                                                          | `libjvm.dylib`             |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Compiler

|    % | Samples | Function                                             | Location       |
| ---: | ------: | ---------------------------------------------------- | -------------- |
| 1.2% |      17 | `PhaseChaitin::Split`                                | `libjvm.dylib` |
| 1.1% |      16 | `IntervalWalker::walk_to`                            | `libjvm.dylib` |
| 0.9% |      13 | `PhaseChaitin::build_ifg_physical`                   | `libjvm.dylib` |
| 0.8% |      12 | `ciObjectFactory::get_metadata`                      | `libjvm.dylib` |
| 0.8% |      11 | `IndexSetIterator::advance_and_next`                 | `libjvm.dylib` |
| 0.8% |      11 | `PhaseAggressiveCoalesce::insert_copies`             | `libjvm.dylib` |
| 0.7% |      10 | `PhaseIdealLoop::build_loop_late_post_work`          | `libjvm.dylib` |
| 0.6% |       9 | `PhaseLive::compute`                                 | `libjvm.dylib` |
| 0.6% |       8 | `Compile::disconnect_useless_nodes`                  | `libjvm.dylib` |
| 0.6% |       8 | `PhaseIdealLoop::build_loop_early`                   | `libjvm.dylib` |
| 0.5% |       7 | `Node_Backward_Iterator::next`                       | `libjvm.dylib` |
| 0.5% |       7 | `PhaseChaitin::elide_copy`                           | `libjvm.dylib` |
| 0.4% |       6 | `PhaseIdealLoop::build_loop_late`                    | `libjvm.dylib` |
| 0.4% |       6 | `Matcher::Label_Root`                                | `libjvm.dylib` |
| 0.4% |       6 | `RelocIterator::set_limits`                          | `libjvm.dylib` |
| 0.4% |       6 | `PhaseIdealLoop::build_loop_tree`                    | `libjvm.dylib` |
| 0.4% |       6 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` | `libjvm.dylib` |
| 0.4% |       6 | `LinearScanWalker::alloc_free_reg`                   | `libjvm.dylib` |
| 0.4% |       5 | `Matcher::xform`                                     | `libjvm.dylib` |
| 0.4% |       5 | `PhaseChaitin::gather_lrg_masks`                     | `libjvm.dylib` |

##### Native

|    % | Samples | Function                                                                                                                                                 | Location                   |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 3.1% |      44 | `inflate_fast`                                                                                                                                           | `libzip.dylib`             |
| 2.8% |      39 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
| 1.8% |      26 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
| 1.5% |      21 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`             |
| 1.3% |      19 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| 1.1% |      15 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 0.9% |      13 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                        | `libjvm.dylib`             |
| 0.8% |      12 | `Arena::contains`                                                                                                                                        | `libjvm.dylib`             |
| 0.8% |      12 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |
| 0.8% |      11 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
| 0.8% |      11 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
| 0.7% |      10 | `inflate_table`                                                                                                                                          | `libzip.dylib`             |
| 0.6% |       9 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                                                          | `libjvm.dylib`             |
| 0.6% |       9 | `_platform_memmove`                                                                                                                                      | `libsystem_platform.dylib` |
| 0.6% |       8 | `fwd_copy_again`                                                                                                                                         | `libjvm.dylib`             |
| 0.6% |       8 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>`                             | `libjvm.dylib`             |
| 0.6% |       8 | `sys_icache_invalidate`                                                                                                                                  | `libsystem_platform.dylib` |
| 0.6% |       8 | `Dictionary::find`                                                                                                                                       | `libjvm.dylib`             |
| 0.6% |       8 | `SymbolTable::lookup_only`                                                                                                                               | `libjvm.dylib`             |
| 0.5% |       7 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                           | `libjvm.dylib`             |

##### Ours

|    % | Samples | Function                                                                                                                                                                                                                                                    | Location                                                                                        |
| ---: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 0.1% |       2 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                                                                                                                                                                     | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                          |
| 0.1% |       2 | `runIsPossibleSubtype(TypeCheckerState, RigidTypeMarker, RigidTypeMarker)`                                                                                                                                                                                  | `org.jetbrains.kotlin.types.AbstractNullabilityChecker`                                         |
| 0.1% |       2 | `visitThisReference(FirThisReference, Object)`                                                                                                                                                                                                              | `org.jetbrains.kotlin.fir.analysis.collectors.components.ErrorNodeDiagnosticCollectorComponent` |
| 0.1% |       1 | `get(int)`                                                                                                                                                                                                                                                  | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ByteArrayCharSequence`                             |
| 0.1% |       1 | `readModuleAttributes(ClassVisitor, Context, int, int, String)`                                                                                                                                                                                             | `org.jetbrains.org.objectweb.asm.ClassReader`                                                   |
| 0.1% |       1 | `<init>(int)`                                                                                                                                                                                                                                               | `org.jetbrains.kotlin.protobuf.ByteString$Output`                                               |
| 0.1% |       1 | `convertReturn(LighterASTNode)`                                                                                                                                                                                                                             | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`                 |
| 0.1% |       1 | `advance()`                                                                                                                                                                                                                                                 | `org.jetbrains.kotlin.lexer._JetLexer`                                                          |
| 0.1% |       1 | `clean()`                                                                                                                                                                                                                                                   | `com.intellij.lang.impl.PsiBuilderImpl$StartMarker`                                             |
| 0.1% |       1 | `<init>(DefaultConstructorMarker)`                                                                                                                                                                                                                          | `org.jetbrains.kotlin.fir.types.FirTypeProjection`                                              |
| 0.1% |       1 | `get(int)`                                                                                                                                                                                                                                                  | `it.unimi.dsi.fastutil.ints.Int2ObjectOpenHashMap`                                              |
| 0.1% |       1 | `contains(IElementType)`                                                                                                                                                                                                                                    | `com.intellij.psi.tree.TokenSet`                                                                |
| 0.1% |       1 | `getIncompatibility(KotlinJvmBinaryClass)`                                                                                                                                                                                                                  | `org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`                 |
| 0.1% |       1 | `readMethod(ClassVisitor, Context, int)`                                                                                                                                                                                                                    | `org.jetbrains.org.objectweb.asm.ClassReader`                                                   |
| 0.1% |       1 | `transform(FirTransformer, Object)`                                                                                                                                                                                                                         | `org.jetbrains.kotlin.fir.expressions.FirArgumentList`                                          |
| 0.1% |       1 | `<init>(CodedInputStream, ExtensionRegistryLite)`                                                                                                                                                                                                           | `org.jetbrains.kotlin.metadata.jvm.JvmProtoBuf$StringTableTypes`                                |
| 0.1% |       1 | `contentsToByteArray(boolean)`                                                                                                                                                                                                                              | `com.intellij.openapi.vfs.VirtualFile`                                                          |
| 0.1% |       1 | `<init>(KotlinClassHeader$Kind, MetadataVersion, String[], String[], String[], String, int, String)`                                                                                                                                                        | `org.jetbrains.kotlin.load.kotlin.header.KotlinClassHeader`                                     |
| 0.1% |       1 | `createForClass(ClassId, ProtoBuf$Class, NameResolver, FirModuleData, AnnotationDeserializer, FirTypeDeserializer$FlexibleTypeFactory, FirConstDeserializer, FirKDocDeserializer, DeserializedContainerSource, FirRegularClassSymbol, EffectiveVisibility)` | `org.jetbrains.kotlin.fir.deserialization.FirDeserializationContext$Companion`                  |
| 0.1% |       1 | `getType(ConeTypeProjection)`                                                                                                                                                                                                                               | `org.jetbrains.kotlin.fir.types.ConeTypeProjectionKt`                                           |

##### Standard library

|    % | Samples | Function                                                       | Location                                                      |
| ---: | ------: | -------------------------------------------------------------- | ------------------------------------------------------------- |
| 0.3% |       4 | `sanitizeStackTrace(Throwable)`                                | `kotlin.jvm.internal.Intrinsics`                              |
| 0.3% |       4 | `checkNotNullParameter(Object, String)`                        | `kotlin.jvm.internal.Intrinsics`                              |
| 0.1% |       2 | `areEqual(Object, Object)`                                     | `kotlin.jvm.internal.Intrinsics`                              |
| 0.1% |       1 | `readLOC()`                                                    | `java.util.zip.ZipInputStream`                                |
| 0.1% |       1 | `read(byte[])`                                                 | `java.io.FilterInputStream`                                   |
| 0.1% |       1 | `getNode(Object)`                                              | `java.util.HashMap`                                           |
| 0.1% |       1 | `putVal(int, Object, Object, boolean, boolean)`                | `java.util.HashMap`                                           |
| 0.1% |       1 | `resize()`                                                     | `java.util.HashMap`                                           |
| 0.1% |       1 | `nextNode()`                                                   | `java.util.HashMap$HashIterator`                              |
| 0.1% |       1 | `<init>(MethodType, LambdaForm, MemberName, boolean)`          | `java.lang.invoke.DirectMethodHandle`                         |
| 0.1% |       1 | `checkAndAddEntry(int, int, ZipCoder)`                         | `java.util.zip.ZipFile$Source`                                |
| 0.1% |       1 | `position(int)`                                                | `java.nio.ByteBuffer`                                         |
| 0.1% |       1 | `toList(Iterable)`                                             | `kotlin.collections.CollectionsKt___CollectionsKt`            |
| 0.1% |       1 | `<init>(int)`                                                  | `kotlin.reflect.jvm.internal.impl.protobuf.ByteString$Output` |
| 0.1% |       1 | `iterator()`                                                   | `kotlin.reflect.jvm.internal.impl.protobuf.FieldSet`          |
| 0.1% |       1 | `get(int)`                                                     | `java.util.Collections$UnmodifiableList`                      |
| 0.1% |       1 | `getValue()`                                                   | `kotlin.UnsafeLazyImpl`                                       |
| 0.1% |       1 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` | `java.util.concurrent.ConcurrentHashMap`                      |
| 0.1% |       1 | `removeNode(int, Object, Object, boolean, boolean)`            | `java.util.HashMap`                                           |
| 0.1% |       1 | `revealDirect(MethodHandle)`                                   | `java.lang.invoke.MethodHandles$Lookup`                       |

#### Lines

Lines with the largest contribution to each function's self samples.

##### `sanitizeStackTrace(Throwable)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       4 | `kotlin.jvm.internal.Intrinsics:253` |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       4 | `kotlin.jvm.internal.Intrinsics:130` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|     % | Samples | Location                                                   |
| ----: | ------: | ---------------------------------------------------------- |
| 50.0% |       1 | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils:143` |
| 50.0% |       1 | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils:135` |

##### `runIsPossibleSubtype(TypeCheckerState, RigidTypeMarker, RigidTypeMarker)` (`org.jetbrains.kotlin.types.AbstractNullabilityChecker`)

|      % | Samples | Location                                                    |
| -----: | ------: | ----------------------------------------------------------- |
| 100.0% |       2 | `org.jetbrains.kotlin.types.AbstractNullabilityChecker:856` |

##### `visitThisReference(FirThisReference, Object)` (`org.jetbrains.kotlin.fir.analysis.collectors.components.ErrorNodeDiagnosticCollectorComponent`)

|      % | Samples | Location                                                                                           |
| -----: | ------: | -------------------------------------------------------------------------------------------------- |
| 100.0% |       2 | `org.jetbrains.kotlin.fir.analysis.collectors.components.ErrorNodeDiagnosticCollectorComponent:30` |

##### `areEqual(Object, Object)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       2 | `kotlin.jvm.internal.Intrinsics:169` |

##### `get(int)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ByteArrayCharSequence`)

|      % | Samples | Location                                                               |
| -----: | ------: | ---------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ByteArrayCharSequence:23` |

##### `readModuleAttributes(ClassVisitor, Context, int, int, String)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % | Samples | Location                                          |
| -----: | ------: | ------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.org.objectweb.asm.ClassReader:841` |

##### `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`)

|      % | Samples | Location                                              |
| -----: | ------: | ----------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.protobuf.ByteString$Output:788` |

##### `convertReturn(LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`)

|      % | Samples | Location                                                                             |
| -----: | ------: | ------------------------------------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder:1594` |

##### `advance()` (`org.jetbrains.kotlin.lexer._JetLexer`)

|      % | Samples | Location                                    |
| -----: | ------: | ------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.lexer._JetLexer:1041` |

##### `clean()` (`com.intellij.lang.impl.PsiBuilderImpl$StartMarker`)

|      % | Samples | Location                                                |
| -----: | ------: | ------------------------------------------------------- |
| 100.0% |       1 | `com.intellij.lang.impl.PsiBuilderImpl$StartMarker:311` |

##### `get(int)` (`it.unimi.dsi.fastutil.ints.Int2ObjectOpenHashMap`)

|      % | Samples | Location                                               |
| -----: | ------: | ------------------------------------------------------ |
| 100.0% |       1 | `it.unimi.dsi.fastutil.ints.Int2ObjectOpenHashMap:328` |

##### `contains(IElementType)` (`com.intellij.psi.tree.TokenSet`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       1 | `com.intellij.psi.tree.TokenSet:56` |

##### `getIncompatibility(KotlinJvmBinaryClass)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`)

|      % | Samples | Location                                                                            |
| -----: | ------: | ----------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider:143` |

##### `readMethod(ClassVisitor, Context, int)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % | Samples | Location                                           |
| -----: | ------: | -------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.org.objectweb.asm.ClassReader:1315` |

##### `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirArgumentList`)

|      % | Samples | Location                                                  |
| -----: | ------: | --------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.expressions.FirArgumentList:29` |

##### `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.jvm.JvmProtoBuf$StringTableTypes`)

|      % | Samples | Location                                                             |
| -----: | ------: | -------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.metadata.jvm.JvmProtoBuf$StringTableTypes:104` |

##### `contentsToByteArray(boolean)` (`com.intellij.openapi.vfs.VirtualFile`)

|      % | Samples | Location                                   |
| -----: | ------: | ------------------------------------------ |
| 100.0% |       1 | `com.intellij.openapi.vfs.VirtualFile:631` |

##### `<init>(KotlinClassHeader$Kind, MetadataVersion, String[], String[], String[], String, int, String)` (`org.jetbrains.kotlin.load.kotlin.header.KotlinClassHeader`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.load.kotlin.header.KotlinClassHeader:13` |

##### `createForClass(ClassId, ProtoBuf$Class, NameResolver, FirModuleData, AnnotationDeserializer, FirTypeDeserializer$FlexibleTypeFactory, FirConstDeserializer, FirKDocDeserializer, DeserializedContainerSource, FirRegularClassSymbol, EffectiveVisibility)` (`org.jetbrains.kotlin.fir.deserialization.FirDeserializationContext$Companion`)

|      % | Samples | Location                                                                           |
| -----: | ------: | ---------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.deserialization.FirDeserializationContext$Companion:148` |

##### `getType(ConeTypeProjection)` (`org.jetbrains.kotlin.fir.types.ConeTypeProjectionKt`)

|      % | Samples | Location                                                 |
| -----: | ------: | -------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.types.ConeTypeProjectionKt:75` |

##### `readLOC()` (`java.util.zip.ZipInputStream`)

|      % | Samples | Location                           |
| -----: | ------: | ---------------------------------- |
| 100.0% |       1 | `java.util.zip.ZipInputStream:534` |

##### `read(byte[])` (`java.io.FilterInputStream`)

|      % | Samples | Location                       |
| -----: | ------: | ------------------------------ |
| 100.0% |       1 | `java.io.FilterInputStream:95` |

##### `getNode(Object)` (`java.util.HashMap`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.util.HashMap:576` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.util.HashMap:667` |

##### `resize()` (`java.util.HashMap`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.util.HashMap:713` |

##### `nextNode()` (`java.util.HashMap$HashIterator`)

|      % | Samples | Location                              |
| -----: | ------: | ------------------------------------- |
| 100.0% |       1 | `java.util.HashMap$HashIterator:1603` |

##### `<init>(MethodType, LambdaForm, MemberName, boolean)` (`java.lang.invoke.DirectMethodHandle`)

|      % | Samples | Location                                 |
| -----: | ------: | ---------------------------------------- |
| 100.0% |       1 | `java.lang.invoke.DirectMethodHandle:58` |

##### `checkAndAddEntry(int, int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       1 | `java.util.zip.ZipFile$Source:1274` |

##### `position(int)` (`java.nio.ByteBuffer`)

|      % | Samples | Location                   |
| -----: | ------: | -------------------------- |
| 100.0% |       1 | `java.nio.ByteBuffer:1551` |

##### `toList(Iterable)` (`kotlin.collections.CollectionsKt___CollectionsKt`)

|      % | Samples | Location                                                |
| -----: | ------: | ------------------------------------------------------- |
| 100.0% |       1 | `kotlin.collections.CollectionsKt___CollectionsKt:1499` |

##### `<init>(int)` (`kotlin.reflect.jvm.internal.impl.protobuf.ByteString$Output`)

|      % | Samples | Location                                                          |
| -----: | ------: | ----------------------------------------------------------------- |
| 100.0% |       1 | `kotlin.reflect.jvm.internal.impl.protobuf.ByteString$Output:788` |

##### `iterator()` (`kotlin.reflect.jvm.internal.impl.protobuf.FieldSet`)

|      % | Samples | Location                                                 |
| -----: | ------: | -------------------------------------------------------- |
| 100.0% |       1 | `kotlin.reflect.jvm.internal.impl.protobuf.FieldSet:201` |

##### `get(int)` (`java.util.Collections$UnmodifiableList`)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       1 | `java.util.Collections$UnmodifiableList:1502` |

##### `getValue()` (`kotlin.UnsafeLazyImpl`)

|      % | Samples | Location                   |
| -----: | ------: | -------------------------- |
| 100.0% |       1 | `kotlin.UnsafeLazyImpl:99` |

##### `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` (`java.util.concurrent.ConcurrentHashMap`)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       1 | `java.util.concurrent.ConcurrentHashMap:2484` |

##### `removeNode(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.util.HashMap:822` |

##### `revealDirect(MethodHandle)` (`java.lang.invoke.MethodHandles$Lookup`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `java.lang.invoke.MethodHandles$Lookup:3710` |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `inflate_fast` (`libzip.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |      44 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |      39 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|    % | Samples | Caller                                     | Location       |
| ---: | ------: | ------------------------------------------ | -------------- |
| 7.7% |       2 | `LinearScan::compute_debug_info_for_scope` | `libjvm.dylib` |
| 7.7% |       2 | `ValueStack::ValueStack`                   | `libjvm.dylib` |
| 3.8% |       1 | `Parse::do_field_access`                   | `libjvm.dylib` |
| 3.8% |       1 | `TypeInstPtr::add_offset`                  | `libjvm.dylib` |
| 3.8% |       1 | `TypeInstPtr::make`                        | `libjvm.dylib` |

##### `SymbolTable::do_lookup` (`libjvm.dylib`)

|     % | Samples | Caller                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 47.6% |      10 | `SymbolTable::lookup_only`                     | `libjvm.dylib` |
| 28.6% |       6 | `SymbolTable::new_symbol`                      | `libjvm.dylib` |
| 23.8% |       5 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

|     % | Samples | Caller                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 78.9% |      15 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
| 21.1% |       4 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      17 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `IntervalWalker::walk_to` (`libjvm.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 50.0% |       8 | `IntervalWalker::walk_to`        | `libjvm.dylib` |
| 25.0% |       4 | `LinearScan::allocate_registers` | `libjvm.dylib` |
| 25.0% |       4 | `LinearScan::compute_oop_map`    | `libjvm.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |      15 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |      13 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      13 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Arena::contains` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |      12 | `Matcher::xform` | `libjvm.dylib` |

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 50.0% |       6 | `ciEnv::get_klass_by_index_impl` | `libjvm.dylib` |
|  8.3% |       1 | `ciMethod::method_data`          | `libjvm.dylib` |
|  8.3% |       1 | `ciBytecodeStream::get_method`   | `libjvm.dylib` |
|  8.3% |       1 | `ciObjectFactory::get`           | `libjvm.dylib` |
|  8.3% |       1 | `ciMethod::ensure_method_data`   | `libjvm.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                                           | Location                                              |
| ----: | ------: | ------------------------------------------------ | ----------------------------------------------------- |
| 16.7% |       2 | `jni_GetPrimitiveArrayCritical`                  | `libjvm.dylib`                                        |
| 16.7% |       2 | `InterpreterRuntime::frequency_counter_overflow` | `libjvm.dylib`                                        |
|  8.3% |       1 | `jni_ReleasePrimitiveArrayCritical`              | `libjvm.dylib`                                        |
|  8.3% |       1 | `Unsafe_GetByte`                                 | `libjvm.dylib`                                        |
|  8.3% |       1 | `parseLine(URL, BufferedReader, int, Set)`       | `java.util.ServiceLoader$LazyClassPathLookupIterator` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|     % | Samples | Caller                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 18.2% |       2 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |
| 18.2% |       2 | `PhaseChaitin::Simplify`           | `libjvm.dylib` |
| 18.2% |       2 | `PhaseIFG::SquareUp`               | `libjvm.dylib` |
|  9.1% |       1 | `PhaseIFG::re_insert`              | `libjvm.dylib` |
|  9.1% |       1 | `PhaseChaitin::Select`             | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|    % | Samples | Caller                                     | Location       |
| ---: | ------: | ------------------------------------------ | -------------- |
| 9.1% |       1 | `PhaseCFG::insert_anti_dependences`        | `libjvm.dylib` |
| 9.1% |       1 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
| 9.1% |       1 | `Optimizer::eliminate_null_checks`         | `libjvm.dylib` |
| 9.1% |       1 | `LinearScan::number_instructions`          | `libjvm.dylib` |
| 9.1% |       1 | `LinearScan::compute_debug_info_for_scope` | `libjvm.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      11 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 81.8% |       9 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |
| 18.2% |       2 | `InstanceKlass::find_method`            | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      10 | `PhaseIdealLoop::build_loop_late` | `libjvm.dylib` |

##### `inflate_table` (`libzip.dylib`)

|      % | Samples | Caller    | Location       |
| -----: | ------: | --------- | -------------- |
| 100.0% |      10 | `inflate` | `libzip.dylib` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`)

|     % | Samples | Caller                                                              | Location       |
| ----: | ------: | ------------------------------------------------------------------- | -------------- |
| 66.7% |       6 | `G1ScanHRForRegionClosure::scan_memregion`                          | `libjvm.dylib` |
| 11.1% |       1 | `G1ParScanThreadState::steal_and_trim_queue`                        | `libjvm.dylib` |
| 11.1% |       1 | `void G1ParCopyClosure<(G1Barrier)1, false>::do_oop_work<oopDesc*>` | `libjvm.dylib` |
| 11.1% |       1 | `void G1ParCopyClosure<(G1Barrier)0, false>::do_oop_work<oopDesc*>` | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       9 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `_platform_memmove` (`libsystem_platform.dylib`)

|     % | Samples | Caller                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 22.2% |       2 | `Node_Array::grow`              | `libjvm.dylib` |
| 11.1% |       1 | `Type::Initialize`              | `libjvm.dylib` |
| 11.1% |       1 | `nmethod::nmethod`              | `libjvm.dylib` |
| 11.1% |       1 | `inflate`                       | `libzip.dylib` |
| 11.1% |       1 | `SymbolTable::do_add_if_needed` | `libjvm.dylib` |

##### `Compile::disconnect_useless_nodes` (`libjvm.dylib`)

|      % | Samples | Caller                                   | Location       |
| -----: | ------: | ---------------------------------------- | -------------- |
| 100.0% |       8 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       8 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `fwd_copy_again` (`libjvm.dylib`)

|     % | Samples | Caller                                          | Location       |
| ----: | ------: | ----------------------------------------------- | -------------- |
| 87.5% |       7 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |
| 12.5% |       1 | `CodeBuffer::copy_code_to`                      | `libjvm.dylib` |

##### `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|     % | Samples | Caller                                            | Location       |
| ----: | ------: | ------------------------------------------------- | -------------- |
| 75.0% |       6 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib` |
| 25.0% |       2 | `G1ParScanThreadState::trim_queue_to_threshold`   | `libjvm.dylib` |

##### `sys_icache_invalidate` (`libsystem_platform.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 37.5% |       3 | `nmethod::nmethod`               | `libjvm.dylib` |
| 12.5% |       1 | `ICStub::finalize`               | `libjvm.dylib` |
| 12.5% |       1 | `CodeBuffer::copy_code_to`       | `libjvm.dylib` |
| 12.5% |       1 | `CompiledIC::set_to_clean`       | `libjvm.dylib` |
| 12.5% |       1 | `CompiledIC::set_to_monomorphic` | `libjvm.dylib` |

##### `Dictionary::find` (`libjvm.dylib`)

|     % | Samples | Caller                                                       | Location       |
| ----: | ------: | ------------------------------------------------------------ | -------------- |
| 75.0% |       6 | `SystemDictionary::resolve_instance_class_or_null`           | `libjvm.dylib` |
| 12.5% |       1 | `ConstantPool::klass_at_if_loaded`                           | `libjvm.dylib` |
| 12.5% |       1 | `SystemDictionary::find_constrained_instance_or_array_klass` | `libjvm.dylib` |

##### `SymbolTable::lookup_only` (`libjvm.dylib`)

|      % | Samples | Caller                                         | Location       |
| -----: | ------: | ---------------------------------------------- | -------------- |
| 100.0% |       8 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |

##### `Node_Backward_Iterator::next` (`libjvm.dylib`)

|     % | Samples | Caller                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 71.4% |       5 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |
| 28.6% |       2 | `PhaseCFG::schedule_late`      | `libjvm.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

|     % | Samples | Caller                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 85.7% |       6 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
| 14.3% |       1 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|      % | Samples | Caller                                         | Location       |
| -----: | ------: | ---------------------------------------------- | -------------- |
| 100.0% |       7 | `void G1CMTask::process_grey_task_entry<true>` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       6 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Matcher::Label_Root` (`libjvm.dylib`)

|     % | Samples | Caller                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 66.7% |       4 | `Matcher::match_tree` | `libjvm.dylib` |
| 33.3% |       2 | `Matcher::Label_Root` | `libjvm.dylib` |

##### `RelocIterator::set_limits` (`libjvm.dylib`)

|     % | Samples | Caller                                           | Location       |
| ----: | ------: | ------------------------------------------------ | -------------- |
| 50.0% |       3 | `CompiledIC::CompiledIC`                         | `libjvm.dylib` |
| 16.7% |       1 | `trampoline_stub_Relocation::get_trampoline_for` | `libjvm.dylib` |
| 16.7% |       1 | `SharedRuntime::reresolve_call_site`             | `libjvm.dylib` |
| 16.7% |       1 | `NativeMovConstReg::set_data`                    | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_tree` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       6 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` (`libjvm.dylib`)

|     % | Samples | Caller                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 83.3% |       5 | `PhaseIdealLoop::compute_lca_of_uses`         | `libjvm.dylib` |
| 16.7% |       1 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `libjvm.dylib` |

##### `LinearScanWalker::alloc_free_reg` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       6 | `LinearScanWalker::activate_current` | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       5 | `Matcher::match` | `libjvm.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       5 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `sanitizeStackTrace(Throwable)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Caller                            | Location                         |
| -----: | ------: | --------------------------------- | -------------------------------- |
| 100.0% |       4 | `throwParameterIsNullNPE(String)` | `kotlin.jvm.internal.Intrinsics` |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|     % | Samples | Caller                                                                             | Location                                                                                              |
| ----: | ------: | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 25.0% |       1 | `<init>(ConeClassLikeLookupTag, boolean, ConeSubstitutor, ConeClassLikeLookupTag)` | `org.jetbrains.kotlin.fir.scopes.SubstitutionScopeKeyFactory$Default$DefaultConeSubstitutionScopeKey` |
| 25.0% |       1 | `getClassId(ConeKotlinType)`                                                       | `org.jetbrains.kotlin.fir.types.ConeTypeUtilsKt`                                                      |
| 25.0% |       1 | `visitDeclarationReference(IrDeclarationReference, Object)`                        | `org.jetbrains.kotlin.ir.visitors.IrVisitor`                                                          |
| 25.0% |       1 | `isStoreOperation(AbstractInsnNode)`                                               | `org.jetbrains.kotlin.codegen.optimization.common.UtilKt`                                             |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|      % | Samples | Caller                                                                       | Location                                               |
| -----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |       2 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `runIsPossibleSubtype(TypeCheckerState, RigidTypeMarker, RigidTypeMarker)` (`org.jetbrains.kotlin.types.AbstractNullabilityChecker`)

|      % | Samples | Caller                                                                  | Location                                                |
| -----: | ------: | ----------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |       2 | `isPossibleSubtype(TypeCheckerState, RigidTypeMarker, RigidTypeMarker)` | `org.jetbrains.kotlin.types.AbstractNullabilityChecker` |

##### `visitThisReference(FirThisReference, Object)` (`org.jetbrains.kotlin.fir.analysis.collectors.components.ErrorNodeDiagnosticCollectorComponent`)

|      % | Samples | Caller                       | Location                                               |
| -----: | ------: | ---------------------------- | ------------------------------------------------------ |
| 100.0% |       2 | `accept(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.references.FirThisReference` |

##### `areEqual(Object, Object)` (`kotlin.jvm.internal.Intrinsics`)

|     % | Samples | Caller                                                                                                                     | Location                                                                                    |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 50.0% |       1 | `isSpecificDeclarationVisible(FirMemberDeclaration, FirSession, FirFile, List, FirExpression, boolean, SupertypeSupplier)` | `org.jetbrains.kotlin.fir.FirVisibilityChecker`                                             |
| 50.0% |       1 | `isCheckNotNullWithMessage(AbstractInsnNode)`                                                                              | `org.jetbrains.kotlin.codegen.optimization.nullCheck.RedundantNullCheckMethodTransformerKt` |

##### `get(int)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ByteArrayCharSequence`)

|      % | Samples | Caller        | Location                                                            |
| -----: | ------: | ------------- | ------------------------------------------------------------------- |
| 100.0% |       1 | `charAt(int)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ByteArrayCharSequence` |

##### `readModuleAttributes(ClassVisitor, Context, int, int, String)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % | Samples | Caller                                   | Location                                      |
| -----: | ------: | ---------------------------------------- | --------------------------------------------- |
| 100.0% |       1 | `accept(ClassVisitor, Attribute[], int)` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`)

|      % | Samples | Caller        | Location                                   |
| -----: | ------: | ------------- | ------------------------------------------ |
| 100.0% |       1 | `newOutput()` | `org.jetbrains.kotlin.protobuf.ByteString` |

##### `convertReturn(LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`)

|      % | Samples | Caller                                      | Location                                                                        |
| -----: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------- |
| 100.0% |       1 | `getAsFirStatement(LighterASTNode, String)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder` |

##### `advance()` (`org.jetbrains.kotlin.lexer._JetLexer`)

|      % | Samples | Caller          | Location                         |
| -----: | ------: | --------------- | -------------------------------- |
| 100.0% |       1 | `locateToken()` | `com.intellij.lexer.FlexAdapter` |

##### `clean()` (`com.intellij.lang.impl.PsiBuilderImpl$StartMarker`)

|      % | Samples | Caller                                        | Location                            |
| -----: | ------: | --------------------------------------------- | ----------------------------------- |
| 100.0% |       1 | `freeMarker(PsiBuilderImpl$ProductionMarker)` | `com.intellij.lang.impl.MarkerPool` |

##### `<init>(DefaultConstructorMarker)` (`org.jetbrains.kotlin.fir.types.FirTypeProjection`)

|      % | Samples | Caller     | Location                                                       |
| -----: | ------: | ---------- | -------------------------------------------------------------- |
| 100.0% |       1 | `<init>()` | `org.jetbrains.kotlin.fir.types.FirTypeProjectionWithVariance` |

##### `get(int)` (`it.unimi.dsi.fastutil.ints.Int2ObjectOpenHashMap`)

|      % | Samples | Caller                    | Location                                    |
| -----: | ------: | ------------------------- | ------------------------------------------- |
| 100.0% |       1 | `getBinder(int, boolean)` | `com.intellij.lang.impl.MarkerOptionalData` |

##### `contains(IElementType)` (`com.intellij.psi.tree.TokenSet`)

|      % | Samples | Caller                                | Location                                |
| -----: | ------: | ------------------------------------- | --------------------------------------- |
| 100.0% |       1 | `isWhitespaceOrComment(IElementType)` | `com.intellij.lang.impl.PsiBuilderImpl` |

##### `getIncompatibility(KotlinJvmBinaryClass)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`)

|      % | Samples | Caller                                   | Location                                                                        |
| -----: | ------: | ---------------------------------------- | ------------------------------------------------------------------------------- |
| 100.0% |       1 | `computePackagePartInfo(FqName, String)` | `org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider` |

##### `readMethod(ClassVisitor, Context, int)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % | Samples | Caller                                   | Location                                      |
| -----: | ------: | ---------------------------------------- | --------------------------------------------- |
| 100.0% |       1 | `accept(ClassVisitor, Attribute[], int)` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirArgumentList`)

|      % | Samples | Caller                                                                                                                                             | Location                                                                                      |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `transformFunctionCallInternal$org_jetbrains_kotlin_resolve(FirFunctionCall, ResolutionMode, FirExpressionsResolveTransformer$CallResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |

##### `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.jvm.JvmProtoBuf$StringTableTypes`)

|      % | Samples | Caller                                                           | Location                                                         |
| -----: | ------: | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| 100.0% |       1 | `<init>(CodedInputStream, ExtensionRegistryLite, JvmProtoBuf$1)` | `org.jetbrains.kotlin.metadata.jvm.JvmProtoBuf$StringTableTypes` |

##### `contentsToByteArray(boolean)` (`com.intellij.openapi.vfs.VirtualFile`)

|      % | Samples | Caller                                                  | Location                                                          |
| -----: | ------: | ------------------------------------------------------- | ----------------------------------------------------------------- |
| 100.0% |       1 | `create$lambda$0(VirtualFile, byte[], MetadataVersion)` | `org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory` |

##### `<init>(KotlinClassHeader$Kind, MetadataVersion, String[], String[], String[], String, int, String)` (`org.jetbrains.kotlin.load.kotlin.header.KotlinClassHeader`)

|      % | Samples | Caller                          | Location                                                                         |
| -----: | ------: | ------------------------------- | -------------------------------------------------------------------------------- |
| 100.0% |       1 | `createHeader(MetadataVersion)` | `org.jetbrains.kotlin.load.kotlin.header.ReadKotlinClassHeaderAnnotationVisitor` |

##### `createForClass(ClassId, ProtoBuf$Class, NameResolver, FirModuleData, AnnotationDeserializer, FirTypeDeserializer$FlexibleTypeFactory, FirConstDeserializer, FirKDocDeserializer, DeserializedContainerSource, FirRegularClassSymbol, EffectiveVisibility)` (`org.jetbrains.kotlin.fir.deserialization.FirDeserializationContext$Companion`)

|      % | Samples | Caller                                                                                                                                                                                                                                                                                                                                                       | Location                                                          |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| 100.0% |       1 | `deserializeClassToSymbol(ClassId, ProtoBuf$Class, FirRegularClassSymbol, NameResolver, FirSession, FirModuleData, AnnotationDeserializer, FirKDocDeserializer, FirTypeDeserializer$FlexibleTypeFactory, FirScopeProvider, SerializerExtensionProtocol, FirDeserializationContext, DeserializedContainerSource, FirDeclarationOrigin, Function2, Function2)` | `org.jetbrains.kotlin.fir.deserialization.ClassDeserializationKt` |

##### `getType(ConeTypeProjection)` (`org.jetbrains.kotlin.fir.types.ConeTypeProjectionKt`)

|      % | Samples | Caller                                                                                                       | Location                                                                    |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| 100.0% |       1 | `resolveTypeAliasSupertype$lambda$0$visitNestedTypeAliases(FirSupertypeResolverVisitor, ConeTypeProjection)` | `org.jetbrains.kotlin.fir.resolve.transformers.FirSupertypeResolverVisitor` |

##### `readLOC()` (`java.util.zip.ZipInputStream`)

|      % | Samples | Caller           | Location                       |
| -----: | ------: | ---------------- | ------------------------------ |
| 100.0% |       1 | `getNextEntry()` | `java.util.zip.ZipInputStream` |

##### `read(byte[])` (`java.io.FilterInputStream`)

|      % | Samples | Caller                                                  | Location                                               |
| -----: | ------: | ------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |       1 | `loadAllClassesFromJars(Collection, int, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `getNode(Object)` (`java.util.HashMap`)

|      % | Samples | Caller        | Location            |
| -----: | ------: | ------------- | ------------------- |
| 100.0% |       1 | `get(Object)` | `java.util.HashMap` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|      % | Samples | Caller                | Location            |
| -----: | ------: | --------------------- | ------------------- |
| 100.0% |       1 | `put(Object, Object)` | `java.util.HashMap` |

##### `resize()` (`java.util.HashMap`)

|      % | Samples | Caller                                          | Location            |
| -----: | ------: | ----------------------------------------------- | ------------------- |
| 100.0% |       1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `nextNode()` (`java.util.HashMap$HashIterator`)

|      % | Samples | Caller   | Location                          |
| -----: | ------: | -------- | --------------------------------- |
| 100.0% |       1 | `next()` | `java.util.HashMap$ValueIterator` |

##### `<init>(MethodType, LambdaForm, MemberName, boolean)` (`java.lang.invoke.DirectMethodHandle`)

|      % | Samples | Caller                                 | Location                              |
| -----: | ------: | -------------------------------------- | ------------------------------------- |
| 100.0% |       1 | `make(byte, Class, MemberName, Class)` | `java.lang.invoke.DirectMethodHandle` |

##### `checkAndAddEntry(int, int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|      % | Samples | Caller                   | Location                       |
| -----: | ------: | ------------------------ | ------------------------------ |
| 100.0% |       1 | `initCEN(int, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `position(int)` (`java.nio.ByteBuffer`)

|      % | Samples | Caller          | Location              |
| -----: | ------: | --------------- | --------------------- |
| 100.0% |       1 | `position(int)` | `java.nio.ByteBuffer` |

##### `toList(Iterable)` (`kotlin.collections.CollectionsKt___CollectionsKt`)

|      % | Samples | Caller                                                                | Location                                                               |
| -----: | ------: | --------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 100.0% |       1 | `getOrderedAllTypeVariables(ConstraintSystemCompletionContext, List)` | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter` |

##### `<init>(int)` (`kotlin.reflect.jvm.internal.impl.protobuf.ByteString$Output`)

|      % | Samples | Caller        | Location                                               |
| -----: | ------: | ------------- | ------------------------------------------------------ |
| 100.0% |       1 | `newOutput()` | `kotlin.reflect.jvm.internal.impl.protobuf.ByteString` |

##### `iterator()` (`kotlin.reflect.jvm.internal.impl.protobuf.FieldSet`)

|      % | Samples | Caller                                                    | Location                                                                                           |
| -----: | ------: | --------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `<init>(GeneratedMessageLite$ExtendableMessage, boolean)` | `kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite$ExtendableMessage$ExtensionWriter` |

##### `get(int)` (`java.util.Collections$UnmodifiableList`)

|      % | Samples | Caller                  | Location                                                                |
| -----: | ------: | ----------------------- | ----------------------------------------------------------------------- |
| 100.0% |       1 | `getQualifiedName(int)` | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$QualifiedNameTable` |

##### `getValue()` (`kotlin.UnsafeLazyImpl`)

|      % | Samples | Caller             | Location                                                                                                                        |
| -----: | ------: | ------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `getSamResolver()` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformer$BodyResolveTransformerComponents` |

##### `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` (`java.util.concurrent.ConcurrentHashMap`)

|      % | Samples | Caller                | Location                                 |
| -----: | ------: | --------------------- | ---------------------------------------- |
| 100.0% |       1 | `addCount(long, int)` | `java.util.concurrent.ConcurrentHashMap` |

##### `removeNode(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|      % | Samples | Caller           | Location            |
| -----: | ------: | ---------------- | ------------------- |
| 100.0% |       1 | `remove(Object)` | `java.util.HashMap` |

##### `revealDirect(MethodHandle)` (`java.lang.invoke.MethodHandles$Lookup`)

|      % | Samples | Caller                                                                                                                   | Location                                               |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| 100.0% |       1 | `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` | `java.lang.invoke.AbstractValidatingLambdaMetafactory` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                                         | Location                                                |
| ----: | ------: | ------------------------------------------------ | ------------------------------------------------------- |
| 67.4% |     953 | `Thread::call_run`                               | `libjvm.dylib`                                          |
| 67.4% |     953 | `thread_native_entry`                            | `libjvm.dylib`                                          |
| 67.4% |     953 | `_pthread_start`                                 | `libsystem_pthread.dylib`                               |
| 67.4% |     953 | `thread_start`                                   | `libsystem_pthread.dylib`                               |
| 60.7% |     858 | `JavaThread::thread_main_inner`                  | `libjvm.dylib`                                          |
| 60.6% |     856 | `CompileBroker::compiler_thread_loop`            | `libjvm.dylib`                                          |
| 59.6% |     842 | `CompileBroker::invoke_compiler_on_method`       | `libjvm.dylib`                                          |
| 41.5% |     586 | `Compile::Compile`                               | `libjvm.dylib`                                          |
| 41.5% |     586 | `C2Compiler::compile_method`                     | `libjvm.dylib`                                          |
| 32.3% |     456 | `run(String[])`                                  | `org.jetbrains.kotlin.preloading.Preloader`             |
| 32.3% |     456 | `main(String[])`                                 | `org.jetbrains.kotlin.preloading.Preloader`             |
| 26.9% |     380 | `invoke(Object, Object[])`                       | `java.lang.reflect.Method`                              |
| 26.8% |     379 | `main(String[])`                                 | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 26.8% |     379 | `main(String[])`                                 | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 26.8% |     379 | `invokeStatic(Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x0000000801008400`    |
| 26.8% |     379 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000801009800`     |
| 26.8% |     379 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                      |
| 26.8% |     379 | `invokeImpl(Object, Object[])`                   | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 26.8% |     379 | `invoke(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 26.8% |     378 | `doMain(CLICompiler, String[])`                  | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Compiler

|     % | Samples | Function                                   | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 60.6% |     856 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
| 59.6% |     842 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
| 41.5% |     586 | `Compile::Compile`                         | `libjvm.dylib` |
| 41.5% |     586 | `C2Compiler::compile_method`               | `libjvm.dylib` |
| 21.4% |     303 | `Compile::Code_Gen`                        | `libjvm.dylib` |
| 17.7% |     250 | `Compilation::compile_method`              | `libjvm.dylib` |
| 17.7% |     250 | `Compilation::Compilation`                 | `libjvm.dylib` |
| 16.3% |     231 | `Compilation::compile_java_method`         | `libjvm.dylib` |
| 14.0% |     198 | `Compile::Optimize`                        | `libjvm.dylib` |
| 10.8% |     153 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
|  8.3% |     117 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
|  7.3% |     103 | `Compilation::emit_lir`                    | `libjvm.dylib` |
|  6.7% |      95 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
|  6.7% |      95 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
|  6.7% |      94 | `Compilation::build_hir`                   | `libjvm.dylib` |
|  6.3% |      89 | `LinearScan::do_linear_scan`               | `libjvm.dylib` |
|  5.0% |      70 | `GraphBuilder::GraphBuilder`               | `libjvm.dylib` |
|  4.5% |      64 | `GraphBuilder::iterate_all_blocks`         | `libjvm.dylib` |
|  4.3% |      61 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |
|  4.2% |      60 | `Matcher::match`                           | `libjvm.dylib` |

##### Native

|     % | Samples | Function                                        | Location                  |
| ----: | ------: | ----------------------------------------------- | ------------------------- |
| 67.4% |     953 | `Thread::call_run`                              | `libjvm.dylib`            |
| 67.4% |     953 | `thread_native_entry`                           | `libjvm.dylib`            |
| 67.4% |     953 | `_pthread_start`                                | `libsystem_pthread.dylib` |
| 67.4% |     953 | `thread_start`                                  | `libsystem_pthread.dylib` |
| 60.7% |     858 | `JavaThread::thread_main_inner`                 | `libjvm.dylib`            |
| 17.7% |     250 | `Compiler::compile_method`                      | `libjvm.dylib`            |
|  6.0% |      85 | `WorkerThread::run`                             | `libjvm.dylib`            |
|  5.0% |      70 | `Parse::Parse`                                  | `libjvm.dylib`            |
|  5.0% |      70 | `ParseGenerator::generate`                      | `libjvm.dylib`            |
|  5.0% |      70 | `IRScope::IRScope`                              | `libjvm.dylib`            |
|  5.0% |      70 | `IR::IR`                                        | `libjvm.dylib`            |
|  4.8% |      68 | `Parse::do_one_block`                           | `libjvm.dylib`            |
|  4.8% |      68 | `Parse::do_all_blocks`                          | `libjvm.dylib`            |
|  4.4% |      62 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib`            |
|  4.4% |      62 | `Java_java_lang_ClassLoader_defineClass1`       | `libjava.dylib`           |
|  4.3% |      61 | `KlassFactory::create_from_stream`              | `libjvm.dylib`            |
|  4.2% |      60 | `jvm_define_class_common`                       | `libjvm.dylib`            |
|  4.2% |      60 | `JVM_DefineClassWithSource`                     | `libjvm.dylib`            |
|  4.2% |      59 | `Parse::do_call`                                | `libjvm.dylib`            |
|  4.2% |      59 | `SystemDictionary::resolve_class_from_stream`   | `libjvm.dylib`            |

##### Ours

|     % | Samples | Function                                                                                                                                      | Location                                                |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 32.3% |     456 | `run(String[])`                                                                                                                               | `org.jetbrains.kotlin.preloading.Preloader`             |
| 32.3% |     456 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`             |
| 26.8% |     379 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 26.8% |     379 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 26.8% |     378 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 26.7% |     377 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 26.7% |     377 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 26.7% |     377 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 26.7% |     377 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 26.3% |     372 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 25.7% |     363 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 25.7% |     363 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 25.7% |     363 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 25.6% |     362 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 25.6% |     362 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 25.6% |     362 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 25.5% |     360 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 25.3% |     358 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
| 25.3% |     358 | `phaseBody(LoggingContext, Object)`                                                                                                           | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
| 25.3% |     358 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### Standard library

|     % | Samples | Function                                                                        | Location                                              |
| ----: | ------: | ------------------------------------------------------------------------------- | ----------------------------------------------------- |
| 26.9% |     380 | `invoke(Object, Object[])`                                                      | `java.lang.reflect.Method`                            |
| 26.8% |     379 | `invokeStatic(Object, Object)`                                                  | `java.lang.invoke.LambdaForm$DMH.0x0000000801008400`  |
| 26.8% |     379 | `invoke(Object, Object, Object)`                                                | `java.lang.invoke.LambdaForm$MH.0x0000000801009800`   |
| 26.8% |     379 | `invokeExact_MT(Object, Object, Object, Object)`                                | `java.lang.invoke.Invokers$Holder`                    |
| 26.8% |     379 | `invokeImpl(Object, Object[])`                                                  | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 26.8% |     379 | `invoke(Object, Object[])`                                                      | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
|  5.3% |      75 | `loadClass(String, boolean)`                                                    | `java.lang.ClassLoader`                               |
|  4.9% |      69 | `defineClass(String, byte[], int, int, ProtectionDomain)`                       | `java.lang.ClassLoader`                               |
|  4.7% |      67 | `defineClass(String, byte[], int, int)`                                         | `java.lang.ClassLoader`                               |
|  4.5% |      64 | `read(byte[])`                                                                  | `java.io.FilterInputStream`                           |
|  4.5% |      64 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                               |
|  4.5% |      63 | `read(byte[], int, int)`                                                        | `java.util.zip.InflaterInputStream`                   |
|  4.5% |      63 | `read(byte[], int, int)`                                                        | `java.util.zip.ZipInputStream`                        |
|  4.4% |      62 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                   | `java.util.zip.Inflater`                              |
|  4.4% |      62 | `inflate(byte[], int, int)`                                                     | `java.util.zip.Inflater`                              |
|  3.7% |      52 | `resumeWith(Object)`                                                            | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |
|  1.3% |      19 | `getValue()`                                                                    | `kotlin.SafePublicationLazyImpl`                      |
|  1.0% |      14 | `getValue()`                                                                    | `kotlin.SynchronizedLazyImpl`                         |
|  0.9% |      13 | `getValue()`                                                                    | `kotlin.UnsafeLazyImpl`                               |
|  0.9% |      13 | `invoke(Class, MethodHandle, String, Object, Object, Class)`                    | `java.lang.invoke.BootstrapMethodInvoker`             |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Thread::call_run` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |     953 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Caller           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |     953 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Caller         | Location                  |
| -----: | ------: | -------------- | ------------------------- |
| 100.0% |     953 | `thread_start` | `libsystem_pthread.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     858 | `Thread::call_run` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |     856 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |     842 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |     586 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |     586 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % | Samples | Caller           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |     456 | `main(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|     % | Samples | Caller                     | Location                                    |
| ----: | ------: | -------------------------- | ------------------------------------------- |
| 99.7% |     379 | `run(String[])`            | `org.jetbrains.kotlin.preloading.Preloader` |
|  0.3% |       1 | `getEnumConstantsShared()` | `java.lang.Class`                           |
|  0.3% |       1 | `rtVersion()`              | `com.intellij.util.lang.JavaVersion`        |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|      % | Samples | Caller           | Location                                     |
| -----: | ------: | ---------------- | -------------------------------------------- |
| 100.0% |     379 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Caller                         | Location                                             |
| -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% |     379 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801008400` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000801008400`)

|      % | Samples | Caller                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     379 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801009800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801009800`)

|      % | Samples | Caller                                           | Location                           |
| -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% |     379 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                         | Location                                          |
| -----: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% |     379 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Caller                     | Location                                          |
| -----: | ------: | -------------------------- | ------------------------------------------------- |
| 100.0% |     379 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Caller                     | Location                   |
| -----: | ------: | -------------------------- | -------------------------- |
| 100.0% |     379 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Caller           | Location                                               |
| -----: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% |     378 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                         | Location                                      |
| -----: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% |     377 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                                 | Location                                                |
| -----: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 100.0% |     377 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Caller                                                                                             | Location                                                |
| -----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     377 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Caller                          | Location                                                |
| -----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 100.0% |     377 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                                   | Location                                      |
| -----: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 100.0% |     372 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Caller                                                                 | Location                                     |
| -----: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     363 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Caller                                                          | Location                                      |
| -----: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| 100.0% |     363 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                                      | Location                                      |
| -----: | ------: | ----------------------------------------------------------- | --------------------------------------------- |
| 100.0% |     363 | `exec(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                                                                                                        | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     362 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                         | Location                                                |
| -----: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     362 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                                | Location                                     |
| -----: | ------: | --------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     362 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                                                              | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     360 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Caller                              | Location                                          |
| -----: | ------: | ----------------------------------- | ------------------------------------------------- |
| 100.0% |     358 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Caller                                                     | Location                                                |
| -----: | ------: | ---------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     358 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % | Samples | Caller                                                                | Location                                                          |
| -----: | ------: | --------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 100.0% |     358 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`            | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase`       |
|   5.9% |      21 | `invoke(PhaseConfig, PhaserState, LoweringContext, IrModuleFragment)` | `org.jetbrains.kotlin.backend.common.phaser.PerformByIrFilePhase` |
|   1.7% |       6 | `runPhase(NamedCompilerPhase, Object, boolean)`                       | `org.jetbrains.kotlin.backend.common.phaser.PhaseEngine`          |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     303 | `Compile::Compile` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     250 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     250 | `Compiler::compile_method` | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |     250 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |     231 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     198 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |     153 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 55.6% |      65 | `Compile::Optimize`       | `libjvm.dylib` |
| 44.4% |      52 | `Compile::optimize_loops` | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |     103 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |      95 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      95 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      94 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

|      % | Samples | Caller                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |      89 | `Compilation::emit_lir` | `libjvm.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      85 | `Thread::call_run` | `libjvm.dylib` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|     % | Samples | Caller                       | Location                                                 |
| ----: | ------: | ---------------------------- | -------------------------------------------------------- |
| 97.3% |      73 | `loadClass(String, boolean)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  2.7% |       2 | `loadClass(String)`          | `java.lang.ClassLoader`                                  |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      70 | `IRScope::IRScope` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      70 | `ParseGenerator::generate` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|     % | Samples | Caller                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 98.6% |      69 | `Compile::Compile`                     | `libjvm.dylib` |
| 55.7% |      39 | `Parse::do_call`                       | `libjvm.dylib` |
| 50.0% |      35 | `PredictedCallGenerator::generate`     | `libjvm.dylib` |
|  1.4% |       1 | `CallGenerator::do_late_inline_helper` | `libjvm.dylib` |

##### `IRScope::IRScope` (`libjvm.dylib`)

|      % | Samples | Caller   | Location       |
| -----: | ------: | -------- | -------------- |
| 100.0% |      70 | `IR::IR` | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |      70 | `Compilation::build_hir` | `libjvm.dylib` |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

|     % | Samples | Caller                                              | Location                          |
| ----: | ------: | --------------------------------------------------- | --------------------------------- |
| 97.1% |      67 | `defineClass(String, byte[], int, int)`             | `java.lang.ClassLoader`           |
|  2.9% |       2 | `defineClass(String, byte[], int, int, CodeSource)` | `java.security.SecureClassLoader` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|      % | Samples | Caller                 | Location       |
| -----: | ------: | ---------------------- | -------------- |
| 100.0% |      68 | `Parse::do_all_blocks` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % | Samples | Caller         | Location       |
| -----: | ------: | -------------- | -------------- |
| 100.0% |      68 | `Parse::Parse` | `libjvm.dylib` |

##### `defineClass(String, byte[], int, int)` (`java.lang.ClassLoader`)

|      % | Samples | Caller              | Location                                                 |
| -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% |      67 | `findClass(String)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `GraphBuilder::iterate_all_blocks` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |      64 | `GraphBuilder::GraphBuilder`    | `libjvm.dylib` |
|  56.3% |      36 | `GraphBuilder::try_inline_full` | `libjvm.dylib` |

##### `read(byte[])` (`java.io.FilterInputStream`)

|      % | Samples | Caller                                                  | Location                                               |
| -----: | ------: | ------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |      64 | `loadAllClassesFromJars(Collection, int, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|      % | Samples | Caller                                                    | Location                |
| -----: | ------: | --------------------------------------------------------- | ----------------------- |
| 100.0% |      64 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

|     % | Samples | Caller                   | Location                       |
| ----: | ------: | ------------------------ | ------------------------------ |
| 98.4% |      62 | `read(byte[], int, int)` | `java.util.zip.ZipInputStream` |
|  1.6% |       1 | `getBytes()`             | `jdk.internal.loader.Resource` |

##### `read(byte[], int, int)` (`java.util.zip.ZipInputStream`)

|      % | Samples | Caller         | Location                    |
| -----: | ------: | -------------- | --------------------------- |
| 100.0% |      63 | `read(byte[])` | `java.io.FilterInputStream` |

##### `Java_java_util_zip_Inflater_inflateBytesBytes` (`libzip.dylib`)

|      % | Samples | Caller                                                        | Location                 |
| -----: | ------: | ------------------------------------------------------------- | ------------------------ |
| 100.0% |      62 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|      % | Samples | Caller                                                                          | Location                |
| -----: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| 100.0% |      62 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Caller                      | Location                 |
| -----: | ------: | --------------------------- | ------------------------ |
| 100.0% |      62 | `inflate(byte[], int, int)` | `java.util.zip.Inflater` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

|     % | Samples | Caller                   | Location                            |
| ----: | ------: | ------------------------ | ----------------------------------- |
| 98.4% |      61 | `read(byte[], int, int)` | `java.util.zip.InflaterInputStream` |
|  1.6% |       1 | `inflate(byte[])`        | `java.util.zip.Inflater`            |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 44.3% |      27 | `Compile::Optimize`                        | `libjvm.dylib` |
| 36.1% |      22 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
| 16.4% |      10 | `PhaseMacroExpand::expand_macro_nodes`     | `libjvm.dylib` |
|  1.6% |       1 | `Compile::process_for_post_loop_opts_igvn` | `libjvm.dylib` |
|  1.6% |       1 | `Compile::remove_speculative_types`        | `libjvm.dylib` |

##### `KlassFactory::create_from_stream` (`libjvm.dylib`)

|     % | Samples | Caller                                               | Location       |
| ----: | ------: | ---------------------------------------------------- | -------------- |
| 86.9% |      53 | `SystemDictionary::resolve_class_from_stream`        | `libjvm.dylib` |
|  6.6% |       4 | `ClassLoader::load_class`                            | `libjvm.dylib` |
|  6.6% |       4 | `SystemDictionary::resolve_hidden_class_from_stream` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      60 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `jvm_define_class_common` (`libjvm.dylib`)

|      % | Samples | Caller                      | Location       |
| -----: | ------: | --------------------------- | -------------- |
| 100.0% |      60 | `JVM_DefineClassWithSource` | `libjvm.dylib` |

##### `JVM_DefineClassWithSource` (`libjvm.dylib`)

|      % | Samples | Caller                                    | Location        |
| -----: | ------: | ----------------------------------------- | --------------- |
| 100.0% |      60 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |      59 | `Parse::do_one_block` | `libjvm.dylib` |

##### `SystemDictionary::resolve_class_from_stream` (`libjvm.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |      59 | `jvm_define_class_common` | `libjvm.dylib` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|     % | Samples | Caller                                                             | Location                                                              |
| ----: | ------: | ------------------------------------------------------------------ | --------------------------------------------------------------------- |
| 94.2% |      49 | `resumeTask(TowerResolveManager$SuspendedResolverTask)`            | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`    |
| 46.2% |      24 | `processCandidate(Candidate, ResolutionContext, boolean, boolean)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner` |
|  1.9% |       1 | `run()`                                                            | `kotlinx.coroutines.DispatchedTask`                                   |
|  1.9% |       1 | `resumeCancellableWith(Continuation, Object, Function1)`           | `kotlinx.coroutines.internal.DispatchedContinuationKt`                |

##### `getValue()` (`kotlin.SafePublicationLazyImpl`)

|     % | Samples | Caller                | Location                                                                        |
| ----: | ------: | --------------------- | ------------------------------------------------------------------------------- |
| 47.4% |       9 | `getJavaField()`      | `kotlin.reflect.jvm.internal.DescriptorKProperty`                               |
| 21.1% |       4 | `getAnnotationInfo()` | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer` |
| 15.8% |       3 | `getImplicitScope()`  | `org.jetbrains.kotlin.fir.resolve.calls.ImplicitReceiverValue`                  |
| 15.8% |       3 | `getCallablesIndex()` | `org.jetbrains.kotlin.fir.scopes.impl.FirClassDeclaredMemberScopeImpl`          |
| 10.5% |       2 | `getDeclarations()`   | `org.jetbrains.kotlin.fir.java.FirLazyJavaDeclarationList`                      |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

|     % | Samples | Caller                                | Location                                                        |
| ----: | ------: | ------------------------------------- | --------------------------------------------------------------- |
| 21.4% |       3 | `getInstance()`                       | `org.jetbrains.kotlin.builtins.DefaultBuiltIns$Companion`       |
| 14.3% |       2 | `getSuperTypeRefs()`                  | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass`       |
| 14.3% |       2 | `get_defaultType()`                   | `org.jetbrains.kotlin.ir.descriptors.IrBasedClassDescriptor`    |
|  7.1% |       1 | `getDefaultPerformanceManager()`      | `org.jetbrains.kotlin.cli.common.CLICompiler`                   |
|  7.1% |       1 | `getPlatformSpecificDefaultImports()` | `org.jetbrains.kotlin.fir.resolve.FirJvmDefaultImportsProvider` |

##### `getValue()` (`kotlin.UnsafeLazyImpl`)

|     % | Samples | Caller                                                       | Location                                                                                                                        |
| ----: | ------: | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| 61.5% |       8 | `resolveVariableAccessAndSelectCandidateImpl$lambda$1(Lazy)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                                                                        |
|  7.7% |       1 | `getDefaultTypeQualifiers()`                                 | `kotlin.reflect.jvm.internal.impl.load.java.lazy.LazyJavaResolverContext`                                                       |
|  7.7% |       1 | `getCallResolver()`                                          | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformer$BodyResolveTransformerComponents` |
|  7.7% |       1 | `getClassifierResolverResult()`                              | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.PlainJavaClassifierType`                                              |
|  7.7% |       1 | `_get_boundsNullability_$lambda$0$3(Lazy)`                   | `org.jetbrains.kotlin.load.java.typeEnhancement.AbstractSignatureParts`                                                         |

##### `invoke(Class, MethodHandle, String, Object, Object, Class)` (`java.lang.invoke.BootstrapMethodInvoker`)

|      % | Samples | Caller                                                      | Location                    |
| -----: | ------: | ----------------------------------------------------------- | --------------------------- |
| 100.0% |      13 | `makeSite(MethodHandle, String, MethodType, Object, Class)` | `java.lang.invoke.CallSite` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 90.0% |     858 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  8.9% |      85 | `WorkerThread::run`             | `libjvm.dylib` |
|  0.6% |       6 | `VMThread::run`                 | `libjvm.dylib` |
|  0.2% |       2 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
|  0.1% |       1 | `VMThread::inner_execute`       | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     953 | `Thread::call_run` | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |     953 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |     953 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|     % | Samples | Callee                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 99.8% |     856 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |
|  0.2% |       2 | `ServiceThread::service_thread_entry` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 98.4% |     842 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  1.6% |      14 | `CompileQueue::get`                        | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 69.6% |     586 | `C2Compiler::compile_method`    | `libjvm.dylib` |
| 29.7% |     250 | `Compiler::compile_method`      | `libjvm.dylib` |
|  0.4% |       3 | `ciEnv::~ciEnv`                 | `libjvm.dylib` |
|  0.2% |       2 | `CompilationLog::log_compile`   | `libjvm.dylib` |
|  0.1% |       1 | `ciEnv::get_method_from_handle` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 51.7% |     303 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 33.8% |     198 | `Compile::Optimize`                      | `libjvm.dylib` |
| 11.8% |      69 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  2.2% |      13 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.2% |       1 | `CallGenerator::for_inline`              | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     586 | `Compile::Compile` | `libjvm.dylib` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|     % | Samples | Callee                                                                       | Location                                               |
| ----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 83.1% |     379 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                             |
| 16.7% |      76 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
|  0.2% |       1 | `stream()`                                                                   | `java.util.Collection`                                 |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % | Samples | Callee          | Location                                    |
| -----: | ------: | --------------- | ------------------------------------------- |
| 100.0% |     456 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|     % | Samples | Callee                     | Location                                          |
| ----: | ------: | -------------------------- | ------------------------------------------------- |
| 99.7% |     379 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |
|  0.3% |       1 | `acquireMethodAccessor()`  | `java.lang.reflect.Method`                        |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|     % | Samples | Callee                          | Location                                                |
| ----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 99.7% |     378 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.3% |       1 | `<init>()`                      | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee           | Location                                               |
| -----: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% |     379 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000801008400`)

|      % | Samples | Callee           | Location                                     |
| -----: | ------: | ---------------- | -------------------------------------------- |
| 100.0% |     379 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801009800`)

|      % | Samples | Callee                         | Location                                             |
| -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% |     379 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801008400` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     379 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801009800` |
|   0.3% |       1 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000080138c000` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee                                           | Location                           |
| -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% |     379 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee                         | Location                                          |
| -----: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% |     379 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|     % | Samples | Callee                                                                                             | Location                                                |
| ----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 99.7% |     377 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.3% |       1 | `setupIdeaStandaloneExecution()`                                                                   | `org.jetbrains.kotlin.cli.jvm.compiler.CompatKt`        |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                                               | Location                                                                |
| ----: | ------: | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| 98.7% |     372 | `exec(MessageCollector, Services, CommonCompilerArguments)`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|  1.1% |       4 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |
|  0.3% |       1 | `loadClass(String)`                                                                  | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`                |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                                                   | Location                                      |
| -----: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 100.0% |     377 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                                         | Location                                      |
| -----: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% |     377 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                                                 | Location                                                |
| -----: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 100.0% |     377 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                          | Location                                      |
| ----: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| 97.6% |     363 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |
|  2.4% |       9 | `<clinit>()`                                                    | `org.jetbrains.kotlin.cli.common.ArgumentsKt` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|     % | Samples | Callee                                                         | Location                                                |
| ----: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 99.7% |     362 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|  0.3% |       1 | `getDefaultPerformanceManager()`                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee                                                                | Location                                     |
| -----: | ------: | --------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     363 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                                                                 | Location                                     |
| -----: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     363 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                                         | Location                                                |
| ----: | ------: | ---------------------------------------------- | ------------------------------------------------------- |
| 99.4% |     360 | `runPhasedPipeline(ArgumentsPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|  0.3% |       1 | `<clinit>()`                                   | `com.intellij.openapi.util.Disposer`                    |
|  0.3% |       1 | `disposeRootInWriteAction(Disposable)`         | `org.jetbrains.kotlin.cli.common.UtilsKt`               |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                                                                              | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     362 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                                                                                                                        | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     362 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                                                                          | Location                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| 99.4% |     358 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`            | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                        |
|  0.6% |       2 | `reportToMessageCollector(BaseDiagnosticsCollector, MessageCollector, boolean)` | `org.jetbrains.kotlin.cli.common.fir.FirDiagnosticsCompilerResultsReporter` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|     % | Samples | Callee                           | Location                                                              |
| ----: | ------: | -------------------------------- | --------------------------------------------------------------------- |
| 67.9% |     243 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`      |
| 22.6% |      81 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`       |
|  8.4% |      30 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`        |
|  1.1% |       4 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmConfigurationPipelinePhase` |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Callee                                         | Location                                          |
| -----: | ------: | ---------------------------------------------- | ------------------------------------------------- |
| 100.0% |     358 | `phaseBody(PipelineContext, PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % | Samples | Callee                              | Location                                                         |
| -----: | ------: | ----------------------------------- | ---------------------------------------------------------------- |
| 100.0% |     358 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
|   5.9% |      21 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase`   |
|   1.7% |       6 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.ModuleLoweringPhase` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 50.5% |     153 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 19.8% |      60 | `Matcher::match`                  | `libjvm.dylib` |
| 14.5% |      44 | `PhaseOutput::Output`             | `libjvm.dylib` |
| 11.6% |      35 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  1.7% |       5 | `PhaseOutput::install_code`       | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 92.4% |     231 | `Compilation::compile_java_method` | `libjvm.dylib` |
|  6.8% |      17 | `ciEnv::register_method`           | `libjvm.dylib` |
|  0.8% |       2 | `Dependencies::assert_common_1`    | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |     250 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Callee                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     250 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 44.6% |     103 | `Compilation::emit_lir`       | `libjvm.dylib` |
| 40.7% |      94 | `Compilation::build_hir`      | `libjvm.dylib` |
| 14.7% |      34 | `Compilation::emit_code_body` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 32.8% |      65 | `PhaseIdealLoop::optimize`     | `libjvm.dylib` |
| 26.3% |      52 | `Compile::optimize_loops`      | `libjvm.dylib` |
| 13.6% |      27 | `PhaseIterGVN::optimize`       | `libjvm.dylib` |
|  7.6% |      15 | `PhaseCCP::PhaseCCP`           | `libjvm.dylib` |
|  6.6% |      13 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 19.0% |      29 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
| 15.7% |      24 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| 11.8% |      18 | `PhaseLive::compute`                       | `libjvm.dylib` |
|  8.5% |      13 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
|  7.8% |      12 | `PhaseAggressiveCoalesce::insert_copies`   | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 81.2% |      95 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| 18.8% |      22 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 86.4% |      89 | `LinearScan::do_linear_scan`     | `libjvm.dylib` |
| 12.6% |      13 | `BlockList::iterate_forward`     | `libjvm.dylib` |
|  1.0% |       1 | `ControlFlowOptimizer::optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 29.5% |      28 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| 18.9% |      18 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| 14.7% |      14 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |
| 10.5% |      10 | `PhaseIdealLoop::build_loop_tree`      | `libjvm.dylib` |
|  6.3% |       6 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Callee                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      95 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|     % | Samples | Callee                                       | Location       |
| ----: | ------: | -------------------------------------------- | -------------- |
| 74.5% |      70 | `IR::IR`                                     | `libjvm.dylib` |
|  7.4% |       7 | `GlobalValueNumbering::GlobalValueNumbering` | `libjvm.dylib` |
|  6.4% |       6 | `IR::eliminate_null_checks`                  | `libjvm.dylib` |
|  6.4% |       6 | `IR::compute_use_counts`                     | `libjvm.dylib` |
|  2.1% |       2 | `IR::compute_code`                           | `libjvm.dylib` |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

|     % | Samples | Callee                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 40.4% |      36 | `LinearScan::allocate_registers`      | `libjvm.dylib` |
| 22.5% |      20 | `LinearScan::assign_reg_num`          | `libjvm.dylib` |
|  9.0% |       8 | `LinearScan::build_intervals`         | `libjvm.dylib` |
|  6.7% |       6 | `LinearScan::resolve_data_flow`       | `libjvm.dylib` |
|  6.7% |       6 | `LinearScan::compute_local_live_sets` | `libjvm.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location                 |
| ----: | ------: | --------------------------------- | ------------------------ |
| 67.1% |      57 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
| 14.1% |      12 | `G1RebuildRSAndScrubTask::work`   | `libjvm.dylib`           |
| 11.8% |      10 | `G1CMConcurrentMarkingTask::work` | `libjvm.dylib`           |
|  4.7% |       4 | `G1ParallelCleaningTask::work`    | `libjvm.dylib`           |
|  2.4% |       2 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                             | Location                                                 |
| ----: | ------: | ---------------------------------- | -------------------------------------------------------- |
| 90.7% |      68 | `findClass(String)`                | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  8.0% |       6 | `findBootstrapClassOrNull(String)` | `java.lang.ClassLoader`                                  |
|  2.7% |       2 | `findClass(String)`                | `java.net.URLClassLoader`                                |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

|     % | Samples | Callee                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 91.4% |      64 | `GraphBuilder::iterate_all_blocks`   | `libjvm.dylib` |
|  8.6% |       6 | `BlockListBuilder::BlockListBuilder` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|     % | Samples | Callee                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 97.1% |      68 | `Parse::do_all_blocks`    | `libjvm.dylib` |
|  4.3% |       3 | `GraphKit::set_map_clone` | `libjvm.dylib` |
|  4.3% |       3 | `Parse::do_exits`         | `libjvm.dylib` |
|  2.9% |       2 | `Parse::do_method_entry`  | `libjvm.dylib` |
|  1.4% |       1 | `ciMethod::method_data`   | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % | Samples | Callee         | Location       |
| -----: | ------: | -------------- | -------------- |
| 100.0% |      70 | `Parse::Parse` | `libjvm.dylib` |

##### `IRScope::IRScope` (`libjvm.dylib`)

|      % | Samples | Callee                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |      70 | `GraphBuilder::GraphBuilder` | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      70 | `IRScope::IRScope` | `libjvm.dylib` |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                                                                          | Location                |
| ----: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| 92.8% |      64 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |
|  5.8% |       4 | `postDefineClass(Class, ProtectionDomain)`                                      | `java.lang.ClassLoader` |
|  1.4% |       1 | `preDefineClass(String, ProtectionDomain)`                                      | `java.lang.ClassLoader` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|     % | Samples | Callee                   | Location       |
| ----: | ------: | ------------------------ | -------------- |
| 86.8% |      59 | `Parse::do_call`         | `libjvm.dylib` |
| 13.2% |       9 | `Parse::do_field_access` | `libjvm.dylib` |
|  8.8% |       6 | `Parse::do_one_bytecode` | `libjvm.dylib` |
|  5.9% |       4 | `Parse::do_if`           | `libjvm.dylib` |
|  4.4% |       3 | `Parse::do_instanceof`   | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % | Samples | Callee                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |      68 | `Parse::do_one_block`            | `libjvm.dylib` |
|   1.5% |       1 | `GraphKit::add_parse_predicates` | `libjvm.dylib` |
|   1.5% |       1 | `Parse::ensure_phis_everywhere`  | `libjvm.dylib` |

##### `defineClass(String, byte[], int, int)` (`java.lang.ClassLoader`)

|      % | Samples | Callee                                                    | Location                |
| -----: | ------: | --------------------------------------------------------- | ----------------------- |
| 100.0% |      67 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `GraphBuilder::iterate_all_blocks` (`libjvm.dylib`)

|     % | Samples | Callee                                      | Location       |
| ----: | ------: | ------------------------------------------- | -------------- |
| 93.8% |      60 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |
|  1.6% |       1 | `GraphBuilder::setup_osr_entry_block`       | `libjvm.dylib` |
|  1.6% |       1 | `GraphBuilder::access_field`                | `libjvm.dylib` |
|  1.6% |       1 | `GraphBuilder::if_node`                     | `libjvm.dylib` |

##### `read(byte[])` (`java.io.FilterInputStream`)

|     % | Samples | Callee                   | Location                       |
| ----: | ------: | ------------------------ | ------------------------------ |
| 98.4% |      63 | `read(byte[], int, int)` | `java.util.zip.ZipInputStream` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                                    | Location                                                 |
| ----: | ------: | ----------------------------------------- | -------------------------------------------------------- |
| 96.9% |      62 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`                                          |
| 17.2% |      11 | `loadClass(String)`                       | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  1.6% |       1 | `loadClass(String)`                       | `java.lang.ClassLoader`                                  |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

|     % | Samples | Callee                      | Location                                           |
| ----: | ------: | --------------------------- | -------------------------------------------------- |
| 96.8% |      61 | `inflate(byte[], int, int)` | `java.util.zip.Inflater`                           |
|  1.6% |       1 | `fill()`                    | `java.util.zip.InflaterInputStream`                |
|  1.6% |       1 | `fill()`                    | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `read(byte[], int, int)` (`java.util.zip.ZipInputStream`)

|     % | Samples | Callee                     | Location                            |
| ----: | ------: | -------------------------- | ----------------------------------- |
| 98.4% |      62 | `read(byte[], int, int)`   | `java.util.zip.InflaterInputStream` |
|  1.6% |       1 | `update(byte[], int, int)` | `java.util.zip.CRC32`               |

##### `Java_java_util_zip_Inflater_inflateBytesBytes` (`libzip.dylib`)

|     % | Samples | Callee                              | Location       |
| ----: | ------: | ----------------------------------- | -------------- |
| 71.0% |      44 | `inflate_fast`                      | `libzip.dylib` |
| 24.2% |      15 | `inflate`                           | `libzip.dylib` |
|  3.2% |       2 | `jni_GetPrimitiveArrayCritical`     | `libjvm.dylib` |
|  1.6% |       1 | `jni_ReleasePrimitiveArrayCritical` | `libjvm.dylib` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|     % | Samples | Callee                      | Location                 |
| ----: | ------: | --------------------------- | ------------------------ |
| 96.8% |      60 | `JVM_DefineClassWithSource` | `libjvm.dylib`           |
|  1.6% |       1 | `jni_GetByteArrayRegion`    | `libjvm.dylib`           |
|  1.6% |       1 | `szone_malloc_should_clear` | `libsystem_malloc.dylib` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Callee                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |      62 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Callee                                                        | Location                 |
| -----: | ------: | ------------------------------------------------------------- | ------------------------ |
| 100.0% |      62 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                    | Location       |
| ----: | ------: | ----------------------------------------- | -------------- |
| 91.8% |      56 | `PhaseIterGVN::transform_old`             | `libjvm.dylib` |
|  1.6% |       1 | `LoadNode::hash`                          | `libjvm.dylib` |
|  1.6% |       1 | `PhiNode::hash`                           | `libjvm.dylib` |
|  1.6% |       1 | `PhaseIterGVN::remove_globally_dead_node` | `libjvm.dylib` |
|  1.6% |       1 | `PhaseIterGVN::add_users_to_worklist`     | `libjvm.dylib` |

##### `KlassFactory::create_from_stream` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 91.8% |      56 | `ClassFileParser::ClassFileParser`       | `libjvm.dylib` |
|  8.2% |       5 | `ClassFileParser::create_instance_klass` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 85.0% |      51 | `Matcher::xform`                              | `libjvm.dylib` |
|  6.7% |       4 | `Matcher::find_shared`                        | `libjvm.dylib` |
|  1.7% |       1 | `BoolNode::Opcode`                            | `libjvm.dylib` |
|  1.7% |       1 | `AddPNode::Opcode`                            | `libjvm.dylib` |
|  1.7% |       1 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |

##### `jvm_define_class_common` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 98.3% |      59 | `SystemDictionary::resolve_class_from_stream` | `libjvm.dylib` |
|  1.7% |       1 | `SymbolTable::new_symbol`                     | `libjvm.dylib` |

##### `JVM_DefineClassWithSource` (`libjvm.dylib`)

|      % | Samples | Callee                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |      60 | `jvm_define_class_common` | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|     % | Samples | Callee                                                | Location       |
| ----: | ------: | ----------------------------------------------------- | -------------- |
| 66.1% |      39 | `PredictedCallGenerator::generate`                    | `libjvm.dylib` |
| 66.1% |      39 | `ParseGenerator::generate`                            | `libjvm.dylib` |
| 18.6% |      11 | `Compile::call_generator`                             | `libjvm.dylib` |
|  5.1% |       3 | `GraphKit::record_profiled_arguments_for_speculation` | `libjvm.dylib` |
|  3.4% |       2 | `ciBytecodeStream::get_declared_method_holder`        | `libjvm.dylib` |

##### `SystemDictionary::resolve_class_from_stream` (`libjvm.dylib`)

|     % | Samples | Callee                                    | Location       |
| ----: | ------: | ----------------------------------------- | -------------- |
| 89.8% |      53 | `KlassFactory::create_from_stream`        | `libjvm.dylib` |
|  8.5% |       5 | `SystemDictionary::define_instance_class` | `libjvm.dylib` |
|  1.7% |       1 | `ObjectLocker::ObjectLocker`              | `libjvm.dylib` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|     % | Samples | Callee                  | Location                                                                                                      |
| ----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------------- |
| 71.2% |      37 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`                         |
| 46.2% |      24 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`                      |
| 11.5% |       6 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$2`                      |
|  7.7% |       4 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirInvokeResolveTowerExtension$enqueueResolverTasksForInvoke$3` |
|  3.8% |       2 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$4`                      |

##### `getValue()` (`kotlin.SafePublicationLazyImpl`)

|     % | Samples | Callee     | Location                                                                                                   |
| ----: | ------: | ---------- | ---------------------------------------------------------------------------------------------------------- |
| 47.4% |       9 | `invoke()` | `kotlin.reflect.jvm.internal.DescriptorKProperty$$Lambda$0`                                                |
| 21.1% |       4 | `invoke()` | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer$$Lambda.0x00000008015dcda8` |
| 15.8% |       3 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.impl.FirClassDeclaredMemberScopeImpl$$Lambda.0x000000080162d058`          |
| 10.5% |       2 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.ImplicitReceiverValue$$Lambda.0x000000080165b878`                  |
| 10.5% |       2 | `invoke()` | `org.jetbrains.kotlin.fir.java.FirLazyJavaDeclarationList$$Lambda.0x0000000801614718`                      |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

|     % | Samples | Callee     | Location                                                                                   |
| ----: | ------: | ---------- | ------------------------------------------------------------------------------------------ |
| 21.4% |       3 | `invoke()` | `org.jetbrains.kotlin.builtins.DefaultBuiltIns$$Lambda.0x0000000801758218`                 |
| 14.3% |       2 | `invoke()` | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass$$Lambda.0x0000000801614fc0`       |
| 14.3% |       2 | `invoke()` | `org.jetbrains.kotlin.ir.descriptors.IrBasedClassDescriptor$$Lambda.0x0000000801817c88`    |
|  7.1% |       1 | `invoke()` | `org.jetbrains.kotlin.cli.common.CLICompiler$$Lambda.0x0000000801006f30`                   |
|  7.1% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.FirJvmDefaultImportsProvider$$Lambda.0x000000080145ab40` |

##### `getValue()` (`kotlin.UnsafeLazyImpl`)

|     % | Samples | Callee     | Location                                                                                                                                                   |
| ----: | ------: | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 61.5% |       8 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver$$Lambda.0x000000080168e168`                                                                        |
|  7.7% |       1 | `invoke()` | `kotlin.reflect.jvm.internal.impl.load.java.lazy.ContextKt$$Lambda$0`                                                                                      |
|  7.7% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformer$BodyResolveTransformerComponents$$Lambda.0x000000080159ac00` |
|  7.7% |       1 | `invoke()` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaClass$$Lambda.0x000000080160b608`                                                      |
|  7.7% |       1 | `invoke()` | `org.jetbrains.kotlin.load.java.typeEnhancement.AbstractSignatureParts$$Lambda.0x0000000801658000`                                                         |

##### `invoke(Class, MethodHandle, String, Object, Object, Class)` (`java.lang.invoke.BootstrapMethodInvoker`)

|     % | Samples | Callee                                                                           | Location                                |
| ----: | ------: | -------------------------------------------------------------------------------- | --------------------------------------- |
| 92.3% |      12 | `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`      |
|  7.7% |       1 | `in(Class)`                                                                      | `java.lang.invoke.MethodHandles$Lookup` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.6% |      37 | `inflate_fast` (`libzip.dylib`) ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                |
| 1.2% |      17 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                   |
| 0.9% |      13 | `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                      |
| 0.8% |      12 | `Arena::contains` (`libjvm.dylib`) ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                     |
| 0.8% |      11 | `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                |
| 0.7% |      10 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.6% |       9 | `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`) ← `G1ParScanThreadState::trim_queue_to_threshold` ← `G1ScanHRForRegionClosure::scan_memregion` ← `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` ← `G1ScanHRForRegionClosure::scan_heap_roots` ← `G1ScanHRForRegionClosure::do_heap_region` ← `G1RemSet::scan_heap_roots` ← `G1EvacuateRegionsTask::scan_roots` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                  |
| 0.6% |       9 | `PhaseLive::compute` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                    |
| 0.6% |       8 | `inflate_table` (`libzip.dylib`) ← `inflate` ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                   |
| 0.5% |       7 | `Compile::disconnect_useless_nodes` (`libjvm.dylib`) ← `PhaseRemoveUseless::PhaseRemoveUseless` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                    |
| 0.5% |       7 | `IntervalWalker::walk_to` (`libjvm.dylib`) ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                      |
| 0.4% |       6 | `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`) ← `G1ScanHRForRegionClosure::scan_memregion` ← `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` ← `G1ScanHRForRegionClosure::scan_heap_roots` ← `G1ScanHRForRegionClosure::do_heap_region` ← `G1RemSet::scan_heap_roots` ← `G1EvacuateRegionsTask::scan_roots` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                      |
| 0.4% |       6 | `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                       |
| 0.4% |       6 | `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`) ← `PhaseIdealLoop::build_loop_late` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                          |
| 0.4% |       6 | `PhaseChaitin::elide_copy` (`libjvm.dylib`) ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                 |
| 0.4% |       6 | `LinearScanWalker::alloc_free_reg` (`libjvm.dylib`) ← `LinearScanWalker::activate_current` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                      |
| 0.4% |       6 | `inflate_fast` (`libzip.dylib`) ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |
| 0.4% |       5 | `Matcher::xform` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.4% |       5 | `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                    |
| 0.4% |       5 | `Node_Backward_Iterator::next` (`libjvm.dylib`) ← `PhaseCFG::global_code_motion` ← `PhaseCFG::do_global_code_motion` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                         |

# Allocated heap profile

Allocated 681 MiB over 1,355 samples (514 KiB per sample).

| Category         |     % |    Size | Samples |
| ---------------- | ----: | ------: | ------: |
| Standard library | 76.0% | 517 MiB |   1,028 |
| Ours             | 24.0% | 163 MiB |     327 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
└── 680 MiB (99.9%) main(String[]) at org.jetbrains.kotlin.preloading.Preloader
    └── 680 MiB (99.9%) run(String[])
        ├── 346 MiB (50.9%) preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler) at org.jetbrains.kotlin.preloading.ClassPreloadingUtils
        │   └── … 346 MiB (50.9%) loadAllClassesFromJars(Collection, int, ClassHandler) at org.jetbrains.kotlin.preloading.ClassPreloadingUtils
        │       ├── 174 MiB (25.6%) <init>(int) at java.io.ByteArrayOutputStream
        │       ├── 160 MiB (23.5%) toByteArray() at java.io.ByteArrayOutputStream
        │       │   └── 160 MiB (23.5%, self 17.1%, self 18.2% globally) copyOf(byte[], int) at java.util.Arrays
        │       │       └── 44 MiB (6.5%) clone() at java.lang.Object
        │       ├── 8.5 MiB (1.2%) getNextEntry() at java.util.zip.ZipInputStream
        │       │   └── 8.5 MiB (1.2%) readLOC()
        │       │       ├── … 4 MiB (0.6%, self 2.8% globally) copyOfRangeByte(byte[], int, int) at java.util.Arrays
        │       │       └── 2 MiB (0.3%) readFully(byte[], int, int)
        │       └── … 512 KiB (0.1%, self 0.8% globally) newNode(int, Object, Object, HashMap$Node) at java.util.HashMap
        └── … 333 MiB (49.0%) main(String[]) at org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion
            ├── … 327 MiB (48.1%) exec(MessageCollector, Services, CommonCompilerArguments) at org.jetbrains.kotlin.cli.common.CLICompiler
            │   ├── … 320 MiB (47.1%) invoke(PhaseConfig, PhaserState, LoggingContext, Object) at org.jetbrains.kotlin.config.phaser.NamedCompilerPhase
            │   │   ├── 307 MiB (45.2%) phaseBody(LoggingContext, Object) at org.jetbrains.kotlin.cli.pipeline.PipelinePhase
            │   │   │   └── 307 MiB (45.2%) phaseBody(PipelineContext, PipelineArtifact)
            │   │   │       ├── 214 MiB (31.4%) executePhase(PipelineArtifact) at org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase
            │   │   │       │   └── 214 MiB (31.4%) executePhase(ConfigurationPipelineArtifact)
            │   │   │       │       ├── 164 MiB (24.2%) resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector) at org.jetbrains.kotlin.fir.pipeline.FirUtilsKt
            │   │   │       │       │   ├── 140 MiB (20.6%) runResolution(FirSession, List) at org.jetbrains.kotlin.fir.pipeline.AnalyseKt
            │   │   │       │       │   │   └── 140 MiB (20.6%) process(List) at org.jetbrains.kotlin.fir.resolve.transformers.FirTotalResolveProcessor
            │   │   │       │       │   │       ├── 100 MiB (14.7%) processFile(FirFile) at org.jetbrains.kotlin.fir.resolve.transformers.FirTransformerBasedResolveProcessor …
            │   │   │       │       │   │       └── … 39 MiB (5.7%) transformInplace(List, FirTransformer, Object) at org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt
            │   │   │       │       │   │           ├── … 32.5 MiB (4.8%) computePackagePartInfo(FqName, String) at org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider
            │   │   │       │       │   │           │   ├── … 28 MiB (4.1%) readMessage(Parser, ExtensionRegistryLite) at org.jetbrains.kotlin.protobuf.CodedInputStream
            │   │   │       │       │   │           │   │   ├── … 12.5 MiB (1.8%, self 0.6%) parsePartialFrom(CodedInputStream, ExtensionRegistryLite) at org.jetbrains.kotlin.metadata.ProtoBuf$Type$1
            │   │   │       │       │   │           │   │   │   └── … 5.5 MiB (0.8%) newOutput() at org.jetbrains.kotlin.protobuf.ByteString
            │   │   │       │       │   │           │   │   │       └── 4.5 MiB (0.7%, self 2.5% globally) <init>(int) at org.jetbrains.kotlin.protobuf.ByteString$Output
            │   │   │       │       │   │           │   │   ├── … 1 MiB (0.1%, self 1.0% globally) newInstance(OutputStream, int) at org.jetbrains.kotlin.protobuf.CodedOutputStream
            │   │   │       │       │   │           │   │   └── 13 MiB (1.9%) 6 more callees, led by (0.5%) parsePartialFrom(CodedInputStream, ExtensionRegistryLite) at org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument$1
            │   │   │       │       │   │           │   └── 3.5 MiB (0.5%) findKotlinClassOrContent(ClassId, MetadataVersion) at org.jetbrains.kotlin.load.kotlin.VirtualFileFinder …
            │   │   │       │       │   │           └── 4.5 MiB (0.7%) 2 more callees, led by (0.6%) transform(FirTransformer, Object) at org.jetbrains.kotlin.fir.expressions.FirAnnotationCall
            │   │   │       │       │   └── 24 MiB (3.5%) runCheckers(FirSession, ScopeSession, Collection, BaseDiagnosticsCollector, MppCheckerKind) at org.jetbrains.kotlin.fir.pipeline.AnalyseKt …
            │   │   │       │       └── 49.5 MiB (7.3%) 4 more callees, led by (2.3%) createEnvironmentAndSources(CompilerConfiguration, Disposable, String)
            │   │   │       └── 93.5 MiB (13.7%) 4 more callees, led by (9.8%) executePhase(PipelineArtifact) at org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase
            │   │   └── 13 MiB (1.9%) 3 more callees, led by (1.7%) phaseBody(LoggingContext, Object) at org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase
            │   └── 5 MiB (0.7%) <clinit>() at org.jetbrains.kotlin.cli.common.ArgumentsKt …
            └── … 3.21 MiB (0.5%) initCEN(int, ZipCoder) at java.util.zip.ZipFile$Source
```

## Hottest functions

### Self size

Functions with the most bytes allocated within the function body, excluding callees.

|     % |    Size | Samples | Function                                                                        | Location                                              |
| ----: | ------: | ------: | ------------------------------------------------------------------------------- | ----------------------------------------------------- |
| 25.6% | 174 MiB |     348 | `<init>(int)`                                                                   | `java.io.ByteArrayOutputStream`                       |
| 18.2% | 124 MiB |     247 | `copyOf(byte[], int)`                                                           | `java.util.Arrays`                                    |
|  6.5% |  44 MiB |      88 | `clone()`                                                                       | `java.lang.Object`                                    |
|  2.8% |  19 MiB |      38 | `copyOfRangeByte(byte[], int, int)`                                             | `java.util.Arrays`                                    |
|  2.5% |  17 MiB |      34 | `<init>(int)`                                                                   | `org.jetbrains.kotlin.protobuf.ByteString$Output`     |
|  1.5% |  10 MiB |      20 | `iterator()`                                                                    | `java.util.ArrayList`                                 |
|  1.2% | 8.5 MiB |      17 | `resize()`                                                                      | `java.util.HashMap`                                   |
|  1.1% | 7.5 MiB |      15 | `grow(int)`                                                                     | `java.util.ArrayList`                                 |
|  1.0% |   7 MiB |      14 | `newInstance(OutputStream, int)`                                                | `org.jetbrains.kotlin.protobuf.CodedOutputStream`     |
|  1.0% | 6.5 MiB |      13 | `newNode(int, Object, Object, HashMap$Node)`                                    | `java.util.LinkedHashMap`                             |
|  0.9% |   6 MiB |      12 | `box-impl(List)`                                                                | `org.jetbrains.kotlin.fir.MutableOrEmptyList`         |
|  0.8% | 5.5 MiB |      11 | `newNode(int, Object, Object, HashMap$Node)`                                    | `java.util.HashMap`                                   |
|  0.8% | 5.5 MiB |      11 | `toString()`                                                                    | `java.lang.StringBuilder`                             |
|  0.8% | 5.5 MiB |      11 | `<init>(int, int)`                                                              | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame` |
|  0.7% |   5 MiB |      10 | `copyOf(Object[], int)`                                                         | `java.util.Arrays`                                    |
|  0.7% |   5 MiB |      10 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                     | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`       |
|  0.7% | 4.5 MiB |       9 | `newString(byte[], int, int)`                                                   | `java.lang.StringLatin1`                              |
|  0.6% |   4 MiB |       8 | `copyOfRange(byte[], int, int)`                                                 | `java.util.Arrays`                                    |
|  0.6% |   4 MiB |       8 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                               |
|  0.6% |   4 MiB |       8 | `<init>(int)`                                                                   | `jdk.internal.org.objectweb.asm.ByteVector`           |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Standard library

|     % |     Size | Samples | Function                                                                        | Location                                    |
| ----: | -------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------- |
| 25.6% |  174 MiB |     348 | `<init>(int)`                                                                   | `java.io.ByteArrayOutputStream`             |
| 18.2% |  124 MiB |     247 | `copyOf(byte[], int)`                                                           | `java.util.Arrays`                          |
|  6.5% |   44 MiB |      88 | `clone()`                                                                       | `java.lang.Object`                          |
|  2.8% |   19 MiB |      38 | `copyOfRangeByte(byte[], int, int)`                                             | `java.util.Arrays`                          |
|  1.5% |   10 MiB |      20 | `iterator()`                                                                    | `java.util.ArrayList`                       |
|  1.2% |  8.5 MiB |      17 | `resize()`                                                                      | `java.util.HashMap`                         |
|  1.1% |  7.5 MiB |      15 | `grow(int)`                                                                     | `java.util.ArrayList`                       |
|  1.0% |  6.5 MiB |      13 | `newNode(int, Object, Object, HashMap$Node)`                                    | `java.util.LinkedHashMap`                   |
|  0.8% |  5.5 MiB |      11 | `newNode(int, Object, Object, HashMap$Node)`                                    | `java.util.HashMap`                         |
|  0.8% |  5.5 MiB |      11 | `toString()`                                                                    | `java.lang.StringBuilder`                   |
|  0.7% |    5 MiB |      10 | `copyOf(Object[], int)`                                                         | `java.util.Arrays`                          |
|  0.7% |  4.5 MiB |       9 | `newString(byte[], int, int)`                                                   | `java.lang.StringLatin1`                    |
|  0.6% |    4 MiB |       8 | `copyOfRange(byte[], int, int)`                                                 | `java.util.Arrays`                          |
|  0.6% |    4 MiB |       8 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                     |
|  0.6% |    4 MiB |       8 | `<init>(int)`                                                                   | `jdk.internal.org.objectweb.asm.ByteVector` |
|  0.6% |    4 MiB |       8 | `<init>(int)`                                                                   | `java.lang.AbstractStringBuilder`           |
|  0.5% |  3.5 MiB |       7 | `allocateUninitializedArray(Class, int)`                                        | `jdk.internal.misc.Unsafe`                  |
|  0.5% |  3.5 MiB |       7 | `to(Object, Object)`                                                            | `kotlin.TuplesKt`                           |
|  0.5% |  3.5 MiB |       7 | `<init>(int, float, boolean)`                                                   | `java.util.HashSet`                         |
|  0.5% | 3.21 MiB |       1 | `initCEN(int, ZipCoder)`                                                        | `java.util.zip.ZipFile$Source`              |

##### Ours

|    % |    Size | Samples | Function                                                                        | Location                                                                                           |
| ---: | ------: | ------: | ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 2.5% |  17 MiB |      34 | `<init>(int)`                                                                   | `org.jetbrains.kotlin.protobuf.ByteString$Output`                                                  |
| 1.0% |   7 MiB |      14 | `newInstance(OutputStream, int)`                                                | `org.jetbrains.kotlin.protobuf.CodedOutputStream`                                                  |
| 0.9% |   6 MiB |      12 | `box-impl(List)`                                                                | `org.jetbrains.kotlin.fir.MutableOrEmptyList`                                                      |
| 0.8% | 5.5 MiB |      11 | `<init>(int, int)`                                                              | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame`                                              |
| 0.7% |   5 MiB |      10 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                     | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`                                                    |
| 0.5% | 3.5 MiB |       7 | `toString()`                                                                    | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ByteArrayCharSequence`                                |
| 0.5% | 3.5 MiB |       7 | `newOutput()`                                                                   | `org.jetbrains.kotlin.protobuf.ByteString`                                                         |
| 0.4% |   3 MiB |       6 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                         | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                             |
| 0.4% |   3 MiB |       6 | `<init>(String)`                                                                | `org.jetbrains.kotlin.name.FqName`                                                                 |
| 0.4% |   3 MiB |       6 | `ensureCapacity()`                                                              | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure`                                            |
| 0.4% |   3 MiB |       6 | `simplifyTrivialInstructions(MethodNode)`                                       | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |
| 0.4% |   3 MiB |       6 | `<init>(String, MethodNode, Interpreter, boolean, boolean, boolean, Function2)` | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`                                    |
| 0.4% | 2.5 MiB |       5 | `identifier(String)`                                                            | `org.jetbrains.kotlin.name.Name`                                                                   |
| 0.4% | 2.5 MiB |       5 | `analyzer$lambda$0(FixStackAnalyzer, int, int)`                                 | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackAnalyzer`                              |
| 0.3% |   2 MiB |       4 | `accept(ClassVisitor, Attribute[], int)`                                        | `org.jetbrains.org.objectweb.asm.ClassReader`                                                      |
| 0.3% |   2 MiB |       4 | `<init>(InputStream)`                                                           | `org.jetbrains.kotlin.protobuf.CodedInputStream`                                                   |
| 0.3% |   2 MiB |       4 | `newFieldMap(int)`                                                              | `org.jetbrains.kotlin.protobuf.SmallSortedMap`                                                     |
| 0.3% |   2 MiB |       4 | `compute()`                                                                     | `org.jetbrains.kotlin.name.FqNameUnsafe`                                                           |
| 0.3% |   2 MiB |       4 | `<init>()`                                                                      | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage`                      |
| 0.3% |   2 MiB |       4 | `getLabel()`                                                                    | `org.jetbrains.org.objectweb.asm.tree.LabelNode`                                                   |

#### Lines

Lines with the largest contribution to each function's self size.

##### `<init>(int)` (`java.io.ByteArrayOutputStream`)

|      % |    Size | Samples | Location                           |
| -----: | ------: | ------: | ---------------------------------- |
| 100.0% | 174 MiB |     348 | `java.io.ByteArrayOutputStream:81` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|     % |    Size | Samples | Location                |
| ----: | ------: | ------: | ----------------------- |
| 93.9% | 116 MiB |     232 | `java.util.Arrays:3539` |
|  6.1% | 7.5 MiB |      15 | `java.util.Arrays:3541` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

|      % |   Size | Samples | Location                |
| -----: | -----: | ------: | ----------------------- |
| 100.0% | 19 MiB |      38 | `java.util.Arrays:3863` |

##### `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`)

|     % |   Size | Samples | Location                                              |
| ----: | -----: | ------: | ----------------------------------------------------- |
| 88.2% | 15 MiB |      30 | `org.jetbrains.kotlin.protobuf.ByteString$Output:789` |
| 11.8% |  2 MiB |       4 | `org.jetbrains.kotlin.protobuf.ByteString$Output:788` |

##### `iterator()` (`java.util.ArrayList`)

|      % |   Size | Samples | Location                   |
| -----: | -----: | ------: | -------------------------- |
| 100.0% | 10 MiB |      20 | `java.util.ArrayList:1029` |

##### `resize()` (`java.util.HashMap`)

|      % |    Size | Samples | Location                |
| -----: | ------: | ------: | ----------------------- |
| 100.0% | 8.5 MiB |      17 | `java.util.HashMap:710` |

##### `grow(int)` (`java.util.ArrayList`)

|      % |    Size | Samples | Location                  |
| -----: | ------: | ------: | ------------------------- |
| 100.0% | 7.5 MiB |      15 | `java.util.ArrayList:239` |

##### `newInstance(OutputStream, int)` (`org.jetbrains.kotlin.protobuf.CodedOutputStream`)

|      % |  Size | Samples | Location                                              |
| -----: | ----: | ------: | ----------------------------------------------------- |
| 100.0% | 7 MiB |      14 | `org.jetbrains.kotlin.protobuf.CodedOutputStream:106` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.LinkedHashMap`)

|      % |    Size | Samples | Location                      |
| -----: | ------: | ------: | ----------------------------- |
| 100.0% | 6.5 MiB |      13 | `java.util.LinkedHashMap:281` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|      % |    Size | Samples | Location                 |
| -----: | ------: | ------: | ------------------------ |
| 100.0% | 5.5 MiB |      11 | `java.util.HashMap:1909` |

##### `toString()` (`java.lang.StringBuilder`)

|      % |    Size | Samples | Location                      |
| -----: | ------: | ------: | ----------------------------- |
| 100.0% | 5.5 MiB |      11 | `java.lang.StringBuilder:475` |

##### `<init>(int, int)` (`org.jetbrains.org.objectweb.asm.tree.analysis.Frame`)

|      % |    Size | Samples | Location                                                 |
| -----: | ------: | ------: | -------------------------------------------------------- |
| 100.0% | 5.5 MiB |      11 | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame:96` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|      % |  Size | Samples | Location                |
| -----: | ----: | ------: | ----------------------- |
| 100.0% | 5 MiB |      10 | `java.util.Arrays:3482` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`)

|      % |  Size | Samples | Location                                             |
| -----: | ----: | ------: | ---------------------------------------------------- |
| 100.0% | 5 MiB |      10 | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1:5079` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

|      % |    Size | Samples | Location                     |
| -----: | ------: | ------: | ---------------------------- |
| 100.0% | 4.5 MiB |       9 | `java.lang.StringLatin1:750` |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

|      % |  Size | Samples | Location                |
| -----: | ----: | ------: | ----------------------- |
| 100.0% | 4 MiB |       8 | `java.util.Arrays:3856` |

##### `<init>(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

|      % |  Size | Samples | Location                                       |
| -----: | ----: | ------: | ---------------------------------------------- |
| 100.0% | 4 MiB |       8 | `jdk.internal.org.objectweb.asm.ByteVector:87` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

|      % |  Size | Samples | Location                              |
| -----: | ----: | ------: | ------------------------------------- |
| 100.0% | 4 MiB |       8 | `java.lang.AbstractStringBuilder:101` |

##### `allocateUninitializedArray(Class, int)` (`jdk.internal.misc.Unsafe`)

|      % |    Size | Samples | Location                        |
| -----: | ------: | ------: | ------------------------------- |
| 100.0% | 3.5 MiB |       7 | `jdk.internal.misc.Unsafe:1380` |

##### `to(Object, Object)` (`kotlin.TuplesKt`)

|      % |    Size | Samples | Location             |
| -----: | ------: | ------: | -------------------- |
| 100.0% | 3.5 MiB |       7 | `kotlin.TuplesKt:44` |

##### `<init>(int, float, boolean)` (`java.util.HashSet`)

|      % |    Size | Samples | Location                |
| -----: | ------: | ------: | ----------------------- |
| 100.0% | 3.5 MiB |       7 | `java.util.HashSet:171` |

##### `toString()` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ByteArrayCharSequence`)

|      % |    Size | Samples | Location                                                               |
| -----: | ------: | ------: | ---------------------------------------------------------------------- |
| 100.0% | 3.5 MiB |       7 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ByteArrayCharSequence:31` |

##### `newOutput()` (`org.jetbrains.kotlin.protobuf.ByteString`)

|      % |    Size | Samples | Location                                       |
| -----: | ------: | ------: | ---------------------------------------------- |
| 100.0% | 3.5 MiB |       7 | `org.jetbrains.kotlin.protobuf.ByteString:751` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|      % |     Size | Samples | Location                            |
| -----: | -------: | ------: | ----------------------------------- |
| 100.0% | 3.21 MiB |       1 | `java.util.zip.ZipFile$Source:1733` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|     % |    Size | Samples | Location                                                   |
| ----: | ------: | ------: | ---------------------------------------------------------- |
| 83.3% | 2.5 MiB |       5 | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils:151` |
| 16.7% | 512 KiB |       1 | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils:139` |

##### `<init>(String)` (`org.jetbrains.kotlin.name.FqName`)

|      % |  Size | Samples | Location                              |
| -----: | ----: | ------: | ------------------------------------- |
| 100.0% | 3 MiB |       6 | `org.jetbrains.kotlin.name.FqName:37` |

##### `ensureCapacity()` (`com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure`)

|      % |  Size | Samples | Location                                                     |
| -----: | ----: | ------: | ------------------------------------------------------------ |
| 100.0% | 3 MiB |       6 | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure:1662` |

##### `simplifyTrivialInstructions(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`)

|     % |    Size | Samples | Location                                                                                              |
| ----: | ------: | ------: | ----------------------------------------------------------------------------------------------------- |
| 33.3% |   1 MiB |       2 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:48` |
| 33.3% |   1 MiB |       2 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:50` |
| 16.7% | 512 KiB |       1 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:57` |
| 16.7% | 512 KiB |       1 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:49` |

##### `<init>(String, MethodNode, Interpreter, boolean, boolean, boolean, Function2)` (`org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`)

|     % |    Size | Samples | Location                                                           |
| ----: | ------: | ------: | ------------------------------------------------------------------ |
| 50.0% | 1.5 MiB |       3 | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer:30` |
| 33.3% |   1 MiB |       2 | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer:28` |
| 16.7% | 512 KiB |       1 | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer:31` |

##### `identifier(String)` (`org.jetbrains.kotlin.name.Name`)

|      % |    Size | Samples | Location                            |
| -----: | ------: | ------: | ----------------------------------- |
| 100.0% | 2.5 MiB |       5 | `org.jetbrains.kotlin.name.Name:62` |

##### `analyzer$lambda$0(FixStackAnalyzer, int, int)` (`org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackAnalyzer`)

|      % |    Size | Samples | Location                                                                 |
| -----: | ------: | ------: | ------------------------------------------------------------------------ |
| 100.0% | 2.5 MiB |       5 | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackAnalyzer:46` |

##### `accept(ClassVisitor, Attribute[], int)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|     % |    Size | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 75.0% | 1.5 MiB |       3 | `org.jetbrains.org.objectweb.asm.ClassReader:458` |
| 25.0% | 512 KiB |       1 | `org.jetbrains.org.objectweb.asm.ClassReader:545` |

##### `<init>(InputStream)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`)

|      % |  Size | Samples | Location                                             |
| -----: | ----: | ------: | ---------------------------------------------------- |
| 100.0% | 2 MiB |       4 | `org.jetbrains.kotlin.protobuf.CodedInputStream:911` |

##### `newFieldMap(int)` (`org.jetbrains.kotlin.protobuf.SmallSortedMap`)

|      % |  Size | Samples | Location                                           |
| -----: | ----: | ------: | -------------------------------------------------- |
| 100.0% | 2 MiB |       4 | `org.jetbrains.kotlin.protobuf.SmallSortedMap:100` |

##### `compute()` (`org.jetbrains.kotlin.name.FqNameUnsafe`)

|      % |  Size | Samples | Location                                    |
| -----: | ----: | ------: | ------------------------------------------- |
| 100.0% | 2 MiB |       4 | `org.jetbrains.kotlin.name.FqNameUnsafe:44` |

##### `<init>()` (`org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage`)

|     % |    Size | Samples | Location                                                                          |
| ----: | ------: | ------: | --------------------------------------------------------------------------------- |
| 25.0% | 512 KiB |       1 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:316` |
| 25.0% | 512 KiB |       1 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:319` |
| 25.0% | 512 KiB |       1 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:317` |
| 25.0% | 512 KiB |       1 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:328` |

##### `getLabel()` (`org.jetbrains.org.objectweb.asm.tree.LabelNode`)

|      % |  Size | Samples | Location                                            |
| -----: | ----: | ------: | --------------------------------------------------- |
| 100.0% | 2 MiB |       4 | `org.jetbrains.org.objectweb.asm.tree.LabelNode:61` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `<init>(int)` (`java.io.ByteArrayOutputStream`)

|      % |    Size | Samples | Caller                                                  | Location                                               |
| -----: | ------: | ------: | ------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 174 MiB |     348 | `loadAllClassesFromJars(Collection, int, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|     % |    Size | Samples | Caller                        | Location                          |
| ----: | ------: | ------: | ----------------------------- | --------------------------------- |
| 93.9% | 116 MiB |     232 | `toByteArray()`               | `java.io.ByteArrayOutputStream`   |
|  4.4% | 5.5 MiB |      11 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |
|  1.6% |   2 MiB |       4 | `getBytes()`                  | `jdk.internal.loader.Resource`    |

##### `clone()` (`java.lang.Object`)

|      % |   Size | Samples | Caller                | Location           |
| -----: | -----: | ------: | --------------------- | ------------------ |
| 100.0% | 44 MiB |      88 | `copyOf(byte[], int)` | `java.util.Arrays` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

|      % |   Size | Samples | Caller                          | Location           |
| -----: | -----: | ------: | ------------------------------- | ------------------ |
| 100.0% | 19 MiB |      38 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`)

|      % |   Size | Samples | Caller        | Location                                   |
| -----: | -----: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 17 MiB |      34 | `newOutput()` | `org.jetbrains.kotlin.protobuf.ByteString` |

##### `iterator()` (`java.util.ArrayList`)

|     % |    Size | Samples | Caller                                                       | Location                                                                                       |
| ----: | ------: | ------: | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| 10.0% |   1 MiB |       2 | `compareTo(MavenComparableVersion$Item)`                     | `org.jetbrains.kotlin.config.MavenComparableVersion$ListItem`                                  |
| 10.0% |   1 MiB |       2 | `zip(Iterable, Iterable)`                                    | `kotlin.collections.CollectionsKt___CollectionsKt`                                             |
|  5.0% | 512 KiB |       1 | `withIndex$lambda$0$CollectionsKt___CollectionsKt(Iterable)` | `kotlin.collections.CollectionsKt___CollectionsKt`                                             |
|  5.0% | 512 KiB |       1 | `doTransformTypeParameters(FirMemberDeclaration)`            | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |
|  5.0% | 512 KiB |       1 | `iterator-impl(List)`                                        | `org.jetbrains.kotlin.fir.MutableOrEmptyList`                                                  |

##### `resize()` (`java.util.HashMap`)

|     % |    Size | Samples | Caller                                          | Location            |
| ----: | ------: | ------: | ----------------------------------------------- | ------------------- |
| 94.1% |   8 MiB |      16 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
|  5.9% | 512 KiB |       1 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |

##### `grow(int)` (`java.util.ArrayList`)

|     % |    Size | Samples | Caller               | Location              |
| ----: | ------: | ------: | -------------------- | --------------------- |
| 93.3% |   7 MiB |      14 | `grow()`             | `java.util.ArrayList` |
|  6.7% | 512 KiB |       1 | `addAll(Collection)` | `java.util.ArrayList` |

##### `newInstance(OutputStream, int)` (`org.jetbrains.kotlin.protobuf.CodedOutputStream`)

|     % |    Size | Samples | Caller                                            | Location                                                |
| ----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------------- |
| 28.6% |   2 MiB |       4 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument`  |
| 14.3% |   1 MiB |       2 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type`           |
| 14.3% |   1 MiB |       2 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter` |
| 14.3% |   1 MiB |       2 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$TypeParameter`  |
|  7.1% | 512 KiB |       1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation`     |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.LinkedHashMap`)

|      % |    Size | Samples | Caller                                          | Location            |
| -----: | ------: | ------: | ----------------------------------------------- | ------------------- |
| 100.0% | 6.5 MiB |      13 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `box-impl(List)` (`org.jetbrains.kotlin.fir.MutableOrEmptyList`)

|     % |    Size | Samples | Caller                               | Location                                                                    |
| ----: | ------: | ------: | ------------------------------------ | --------------------------------------------------------------------------- |
| 16.7% |   1 MiB |       2 | `getAnnotations()`                   | `org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl`           |
| 16.7% |   1 MiB |       2 | `getAnnotations()`                   | `org.jetbrains.kotlin.fir.types.impl.FirResolvedTypeRefImpl`                |
|  8.3% | 512 KiB |       1 | `getAnnotations()`                   | `org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`            |
|  8.3% | 512 KiB |       1 | `getContextArguments()`              | `org.jetbrains.kotlin.fir.expressions.impl.FirPropertyAccessExpressionImpl` |
|  8.3% | 512 KiB |       1 | `acceptChildren(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl`             |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|     % |    Size | Samples | Caller                                          | Location            |
| ----: | ------: | ------: | ----------------------------------------------- | ------------------- |
| 90.9% |   5 MiB |      10 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
|  9.1% | 512 KiB |       1 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |

##### `toString()` (`java.lang.StringBuilder`)

|     % |    Size | Samples | Caller                                          | Location                                                                    |
| ----: | ------: | ------: | ----------------------------------------------- | --------------------------------------------------------------------------- |
| 27.3% | 1.5 MiB |       3 | `toLowerCaseAsciiOnly(String)`                  | `org.jetbrains.kotlin.util.capitalizeDecapitalize.CapitalizeDecapitalizeKt` |
| 18.2% |   1 MiB |       2 | `getFqNameWhenAvailable(IrDeclarationWithName)` | `org.jetbrains.kotlin.ir.util.IrUtilsKt`                                    |
|  9.1% | 512 KiB |       1 | `descriptorString()`                            | `java.lang.Class`                                                           |
|  9.1% | 512 KiB |       1 | `getQualifiedClassName(int)`                    | `org.jetbrains.kotlin.metadata.deserialization.NameResolverImpl`            |
|  9.1% | 512 KiB |       1 | `store(String, KnownOIDs, String[])`            | `sun.security.util.SecurityProviderConstants`                               |

##### `<init>(int, int)` (`org.jetbrains.org.objectweb.asm.tree.analysis.Frame`)

|     % |    Size | Samples | Caller                                          | Location                                                                            |
| ----: | ------: | ------: | ----------------------------------------------- | ----------------------------------------------------------------------------------- |
| 45.5% | 2.5 MiB |       5 | `_init_$lambda$0(int, int)`                     | `org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`               |
| 36.4% |   2 MiB |       4 | `<init>(FixStackAnalyzer, int, int)`            | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackAnalyzer$FixStackFrame` |
|  9.1% | 512 KiB |       1 | `<init>(int)`                                   | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.StoreLoadFrame`            |
|  9.1% | 512 KiB |       1 | `preprocessNodeBeforeInline$lambda$0(int, int)` | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                                 |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|     % |    Size | Samples | Caller             | Location                                                |
| ----: | ------: | ------: | ------------------ | ------------------------------------------------------- |
| 60.0% |   3 MiB |       6 | `grow(int)`        | `java.util.ArrayList`                                   |
| 20.0% |   1 MiB |       2 | `ensureCapacity()` | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure` |
| 10.0% | 512 KiB |       1 | `toArray()`        | `java.util.ArrayList`                                   |
| 10.0% | 512 KiB |       1 | `add(Object)`      | `org.jetbrains.kotlin.utils.SmartSet`                   |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`)

|      % |  Size | Samples | Caller                                                      | Location                                        |
| -----: | ----: | ------: | ----------------------------------------------------------- | ----------------------------------------------- |
| 100.0% | 5 MiB |      10 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

|     % |    Size | Samples | Caller                | Location                          |
| ----: | ------: | ------: | --------------------- | --------------------------------- |
| 66.7% |   3 MiB |       6 | `substring(int, int)` | `java.lang.String`                |
| 33.3% | 1.5 MiB |       3 | `substring(int, int)` | `java.lang.AbstractStringBuilder` |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

|     % |  Size | Samples | Caller                                | Location           |
| ----: | ----: | ------: | ------------------------------------- | ------------------ |
| 75.0% | 3 MiB |       6 | `<init>(AbstractStringBuilder, Void)` | `java.lang.String` |
| 25.0% | 1 MiB |       2 | `<init>(Charset, byte[], int, int)`   | `java.lang.String` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|      % |  Size | Samples | Caller                                                    | Location                |
| -----: | ----: | ------: | --------------------------------------------------------- | ----------------------- |
| 100.0% | 4 MiB |       8 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `<init>(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

|      % |  Size | Samples | Caller          | Location                                     |
| -----: | ----: | ------: | --------------- | -------------------------------------------- |
| 100.0% | 4 MiB |       8 | `toByteArray()` | `jdk.internal.org.objectweb.asm.ClassWriter` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

|     % |  Size | Samples | Caller        | Location                  |
| ----: | ----: | ------: | ------------- | ------------------------- |
| 75.0% | 3 MiB |       6 | `<init>()`    | `java.lang.StringBuilder` |
| 25.0% | 1 MiB |       2 | `<init>(int)` | `java.lang.StringBuilder` |

##### `allocateUninitializedArray(Class, int)` (`jdk.internal.misc.Unsafe`)

|      % |    Size | Samples | Caller           | Location                       |
| -----: | ------: | ------: | ---------------- | ------------------------------ |
| 100.0% | 3.5 MiB |       7 | `newArray(long)` | `java.lang.StringConcatHelper` |

##### `to(Object, Object)` (`kotlin.TuplesKt`)

|     % |    Size | Samples | Caller                                                | Location                                                                                      |
| ----: | ------: | ------: | ----------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 28.6% |   1 MiB |       2 | `getOrRegisterNewSource(String, String)`              | `org.jetbrains.kotlin.codegen.inline.SourceMapper`                                            |
| 14.3% | 512 KiB |       1 | `insertIncomingEdge(CFGNode, Edge)`                   | `org.jetbrains.kotlin.fir.resolve.dfa.cfg.CFGNode`                                            |
| 14.3% | 512 KiB |       1 | `getChild(KtSourceElement, Set, int, int, boolean)`   | `org.jetbrains.kotlin.fir.analysis.FirSourceUtilsKt`                                          |
| 14.3% | 512 KiB |       1 | `check(CheckerContext, DiagnosticReporter, FirClass)` | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirAnnotationClassInheritanceChecker` |
| 14.3% | 512 KiB |       1 | `zip(Iterable, Iterable)`                             | `kotlin.collections.CollectionsKt___CollectionsKt`                                            |

##### `<init>(int, float, boolean)` (`java.util.HashSet`)

|     % |    Size | Samples | Caller        | Location                  |
| ----: | ------: | ------: | ------------- | ------------------------- |
| 85.7% |   3 MiB |       6 | `<init>()`    | `java.util.LinkedHashSet` |
| 14.3% | 512 KiB |       1 | `<init>(int)` | `java.util.LinkedHashSet` |

##### `toString()` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ByteArrayCharSequence`)

|     % |    Size | Samples | Caller                                    | Location                                                     |
| ----: | ------: | ------: | ----------------------------------------- | ------------------------------------------------------------ |
| 85.7% |   3 MiB |       6 | `getOrCreateDirectory(CharSequence, Map)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler` |
| 14.3% | 512 KiB |       1 | `getNameWithoutExtension()`               | `com.intellij.openapi.vfs.VirtualFile`                       |

##### `newOutput()` (`org.jetbrains.kotlin.protobuf.ByteString`)

|     % |    Size | Samples | Caller                                            | Location                                                           |
| ----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------------------------ |
| 42.9% | 1.5 MiB |       3 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type`                      |
| 28.6% |   1 MiB |       2 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument$Value` |
| 14.3% | 512 KiB |       1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument`             |
| 14.3% | 512 KiB |       1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter`            |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|      % |     Size | Samples | Caller                                          | Location                       |
| -----: | -------: | ------: | ----------------------------------------------- | ------------------------------ |
| 100.0% | 3.21 MiB |       1 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|      % |  Size | Samples | Caller                                                                       | Location                                               |
| -----: | ----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 3 MiB |       6 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `<init>(String)` (`org.jetbrains.kotlin.name.FqName`)

|     % |  Size | Samples | Caller                                          | Location                                      |
| ----: | ----: | ------: | ----------------------------------------------- | --------------------------------------------- |
| 66.7% | 2 MiB |       4 | `fromString(String, boolean)`                   | `org.jetbrains.kotlin.name.ClassId$Companion` |
| 33.3% | 1 MiB |       2 | `getFqNameWhenAvailable(IrDeclarationWithName)` | `org.jetbrains.kotlin.ir.util.IrUtilsKt`      |

##### `ensureCapacity()` (`com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure`)

|     % |  Size | Samples | Caller                                                                                    | Location                                                |
| ----: | ----: | ------: | ----------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 66.7% | 2 MiB |       4 | `insertLeaf(IElementType, PsiBuilderImpl, int, int, boolean, PsiBuilderImpl$StartMarker)` | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure` |
| 33.3% | 1 MiB |       2 | `getChildren(LighterASTNode, Ref)`                                                        | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure` |

##### `simplifyTrivialInstructions(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`)

|      % |  Size | Samples | Caller                          | Location                                                                                           |
| -----: | ----: | ------: | ------------------------------- | -------------------------------------------------------------------------------------------------- |
| 100.0% | 3 MiB |       6 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |

##### `<init>(String, MethodNode, Interpreter, boolean, boolean, boolean, Function2)` (`org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`)

|     % |  Size | Samples | Caller                                                        | Location                                                               |
| ----: | ----: | ------: | ------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 66.7% | 2 MiB |       4 | `<init>(String, MethodNode, Interpreter, boolean, Function2)` | `org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`  |
| 33.3% | 1 MiB |       2 | `<init>(String, MethodNode, Interpreter, Function2)`          | `org.jetbrains.kotlin.codegen.optimization.fixStack.FastStackAnalyzer` |

##### `identifier(String)` (`org.jetbrains.kotlin.name.Name`)

|     % |    Size | Samples | Caller                                                                              | Location                                                          |
| ----: | ------: | ------: | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 60.0% | 1.5 MiB |       3 | `guessByFirstCharacter(String)`                                                     | `org.jetbrains.kotlin.name.Name`                                  |
| 20.0% | 512 KiB |       1 | `deserializeClassToSymbol$lambda$2$createNestedClassId(ClassId, NameResolver, int)` | `org.jetbrains.kotlin.fir.deserialization.ClassDeserializationKt` |
| 20.0% | 512 KiB |       1 | `visitAnnotation(String, String)`                                                   | `org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass$3`         |

##### `analyzer$lambda$0(FixStackAnalyzer, int, int)` (`org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackAnalyzer`)

|      % |    Size | Samples | Caller                   | Location                                                                                         |
| -----: | ------: | ------: | ------------------------ | ------------------------------------------------------------------------------------------------ |
| 100.0% | 2.5 MiB |       5 | `invoke(Object, Object)` | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackAnalyzer$$Lambda.0x00000008018ed6f0` |

##### `accept(ClassVisitor, Attribute[], int)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % |  Size | Samples | Caller                      | Location                                      |
| -----: | ----: | ------: | --------------------------- | --------------------------------------------- |
| 100.0% | 2 MiB |       4 | `accept(ClassVisitor, int)` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `<init>(InputStream)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`)

|      % |  Size | Samples | Caller                     | Location                                         |
| -----: | ----: | ------: | -------------------------- | ------------------------------------------------ |
| 100.0% | 2 MiB |       4 | `newInstance(InputStream)` | `org.jetbrains.kotlin.protobuf.CodedInputStream` |

##### `newFieldMap(int)` (`org.jetbrains.kotlin.protobuf.SmallSortedMap`)

|      % |  Size | Samples | Caller     | Location                                 |
| -----: | ----: | ------: | ---------- | ---------------------------------------- |
| 100.0% | 2 MiB |       4 | `<init>()` | `org.jetbrains.kotlin.protobuf.FieldSet` |

##### `compute()` (`org.jetbrains.kotlin.name.FqNameUnsafe`)

|      % |  Size | Samples | Caller     | Location                                 |
| -----: | ----: | ------: | ---------- | ---------------------------------------- |
| 100.0% | 2 MiB |       4 | `parent()` | `org.jetbrains.kotlin.name.FqNameUnsafe` |

##### `<init>()` (`org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage`)

|      % |  Size | Samples | Caller                                                                                                | Location                                                                     |
| -----: | ----: | ------: | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 100.0% | 2 MiB |       4 | `<init>(ConstraintInjector, TypeSystemInferenceExtensionContext, LanguageVersionSettings, Function2)` | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl` |

##### `getLabel()` (`org.jetbrains.org.objectweb.asm.tree.LabelNode`)

|      % |  Size | Samples | Caller                  | Location                                         |
| -----: | ----: | ------: | ----------------------- | ------------------------------------------------ |
| 100.0% | 2 MiB |       4 | `accept(MethodVisitor)` | `org.jetbrains.org.objectweb.asm.tree.LabelNode` |

### Total size

Functions with the most bytes allocated within the function and its callees.

|     % |    Size | Samples | Function                                                                                            | Location                                                |
| ----: | ------: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 99.9% | 680 MiB |   1,353 | `run(String[])`                                                                                     | `org.jetbrains.kotlin.preloading.Preloader`             |
| 99.9% | 680 MiB |   1,353 | `main(String[])`                                                                                    | `org.jetbrains.kotlin.preloading.Preloader`             |
| 50.9% | 346 MiB |     692 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                             | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`  |
| 50.9% | 346 MiB |     692 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                        | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`  |
| 49.0% | 333 MiB |     661 | `main(String[])`                                                                                    | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 49.0% | 333 MiB |     661 | `main(String[])`                                                                                    | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 49.0% | 333 MiB |     661 | `invokeStatic(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$DMH.0x0000000801008400`    |
| 49.0% | 333 MiB |     661 | `invoke(Object, Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000801009800`     |
| 49.0% | 333 MiB |     661 | `invokeExact_MT(Object, Object, Object, Object)`                                                    | `java.lang.invoke.Invokers$Holder`                      |
| 49.0% | 333 MiB |     661 | `invokeImpl(Object, Object[])`                                                                      | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 49.0% | 333 MiB |     661 | `invoke(Object, Object[])`                                                                          | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 49.0% | 333 MiB |     661 | `invoke(Object, Object[])`                                                                          | `java.lang.reflect.Method`                              |
| 48.4% | 329 MiB |     659 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`  | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 48.4% | 329 MiB |     659 | `doMain(CLICompiler, String[])`                                                                     | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 48.3% | 328 MiB |     657 | `exec(PrintStream, Services, MessageRenderer, String[])`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 48.3% | 328 MiB |     657 | `exec(PrintStream, MessageRenderer, String[])`                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 48.3% | 328 MiB |     657 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                              | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 48.1% | 327 MiB |     655 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                         | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 47.4% | 322 MiB |     645 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                      | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 47.4% | 322 MiB |     645 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Standard library

|     % |     Size | Samples | Function                                                                                      | Location                                              |
| ----: | -------: | ------: | --------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| 49.0% |  333 MiB |     661 | `invokeStatic(Object, Object)`                                                                | `java.lang.invoke.LambdaForm$DMH.0x0000000801008400`  |
| 49.0% |  333 MiB |     661 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x0000000801009800`   |
| 49.0% |  333 MiB |     661 | `invokeExact_MT(Object, Object, Object, Object)`                                              | `java.lang.invoke.Invokers$Holder`                    |
| 49.0% |  333 MiB |     661 | `invokeImpl(Object, Object[])`                                                                | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 49.0% |  333 MiB |     661 | `invoke(Object, Object[])`                                                                    | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 49.0% |  333 MiB |     661 | `invoke(Object, Object[])`                                                                    | `java.lang.reflect.Method`                            |
| 25.6% |  174 MiB |     348 | `<init>(int)`                                                                                 | `java.io.ByteArrayOutputStream`                       |
| 24.6% |  168 MiB |     335 | `copyOf(byte[], int)`                                                                         | `java.util.Arrays`                                    |
| 23.5% |  160 MiB |     320 | `toByteArray()`                                                                               | `java.io.ByteArrayOutputStream`                       |
|  7.9% | 53.5 MiB |     107 | `resumeWith(Object)`                                                                          | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |
|  6.5% |   44 MiB |      88 | `clone()`                                                                                     | `java.lang.Object`                                    |
|  3.9% | 26.5 MiB |      53 | `getValue()`                                                                                  | `kotlin.SafePublicationLazyImpl`                      |
|  3.4% |   23 MiB |      46 | `copyOfRange(byte[], int, int)`                                                               | `java.util.Arrays`                                    |
|  2.9% | 19.5 MiB |      39 | `putVal(int, Object, Object, boolean, boolean)`                                               | `java.util.HashMap`                                   |
|  2.9% | 19.5 MiB |      39 | `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])`                 | `java.lang.invoke.MethodHandleNatives`                |
|  2.9% | 19.5 MiB |      39 | `linkCallSite(Object, Object, Object, Object, Object, Object[])`                              | `java.lang.invoke.MethodHandleNatives`                |
|  2.8% |   19 MiB |      38 | `copyOfRangeByte(byte[], int, int)`                                                           | `java.util.Arrays`                                    |
|  2.8% |   19 MiB |      38 | `put(Object, Object)`                                                                         | `java.util.HashMap`                                   |
|  2.7% | 18.5 MiB |      37 | `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` | `java.lang.invoke.LambdaMetafactory`                  |
|  2.7% | 18.5 MiB |      37 | `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                    |

##### Ours

|     % |    Size | Samples | Function                                                                                                                                      | Location                                                |
| ----: | ------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 99.9% | 680 MiB |   1,353 | `run(String[])`                                                                                                                               | `org.jetbrains.kotlin.preloading.Preloader`             |
| 99.9% | 680 MiB |   1,353 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`             |
| 50.9% | 346 MiB |     692 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                                                       | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`  |
| 50.9% | 346 MiB |     692 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                  | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`  |
| 49.0% | 333 MiB |     661 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 49.0% | 333 MiB |     661 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 48.4% | 329 MiB |     659 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 48.4% | 329 MiB |     659 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 48.3% | 328 MiB |     657 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 48.3% | 328 MiB |     657 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 48.3% | 328 MiB |     657 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 48.1% | 327 MiB |     655 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 47.4% | 322 MiB |     645 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 47.4% | 322 MiB |     645 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 47.4% | 322 MiB |     645 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 47.4% | 322 MiB |     645 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 47.4% | 322 MiB |     645 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 47.4% | 322 MiB |     645 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 47.4% | 322 MiB |     645 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 47.1% | 320 MiB |     641 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % |    Size | Samples | Caller           | Location                                    |
| -----: | ------: | ------: | ---------------- | ------------------------------------------- |
| 100.0% | 680 MiB |   1,353 | `main(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|      % |    Size | Samples | Caller                                                                       | Location                                               |
| -----: | ------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 346 MiB |     692 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|      % |     Size | Samples | Caller                                                                       | Location                                               |
| -----: | -------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |  346 MiB |     692 | `run(String[])`                                                              | `org.jetbrains.kotlin.preloading.Preloader`            |
|  10.5% | 36.4 MiB |      72 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|      % |    Size | Samples | Caller           | Location                                     |
| -----: | ------: | ------: | ---------------- | -------------------------------------------- |
| 100.0% | 333 MiB |     661 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % |    Size | Samples | Caller                         | Location                                             |
| -----: | ------: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% | 333 MiB |     661 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801008400` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000801008400`)

|      % |    Size | Samples | Caller                           | Location                                            |
| -----: | ------: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 333 MiB |     661 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801009800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801009800`)

|      % |    Size | Samples | Caller                                           | Location                           |
| -----: | ------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% | 333 MiB |     661 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % |    Size | Samples | Caller                         | Location                                          |
| -----: | ------: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% | 333 MiB |     661 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |    Size | Samples | Caller                     | Location                                          |
| -----: | ------: | ------: | -------------------------- | ------------------------------------------------- |
| 100.0% | 333 MiB |     661 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |    Size | Samples | Caller                     | Location                   |
| -----: | ------: | ------: | -------------------------- | -------------------------- |
| 100.0% | 333 MiB |     661 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % |    Size | Samples | Caller          | Location                                    |
| -----: | ------: | ------: | --------------- | ------------------------------------------- |
| 100.0% | 333 MiB |     661 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % |    Size | Samples | Caller                          | Location                                                |
| -----: | ------: | ------: | ------------------------------- | ------------------------------------------------------- |
| 100.0% | 329 MiB |     659 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % |    Size | Samples | Caller           | Location                                               |
| -----: | ------: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% | 329 MiB |     659 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % |    Size | Samples | Caller                                         | Location                                      |
| -----: | ------: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% | 328 MiB |     657 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % |    Size | Samples | Caller                                                 | Location                                                |
| -----: | ------: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 328 MiB |     657 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % |    Size | Samples | Caller                                                                                             | Location                                                |
| -----: | ------: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 328 MiB |     657 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % |    Size | Samples | Caller                                                   | Location                                      |
| -----: | ------: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 100.0% | 327 MiB |     655 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Size | Samples | Caller                                                                                              | Location                                                |
| -----: | ------: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 322 MiB |     645 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Size | Samples | Caller                                                                                                                                        | Location                                                |
| -----: | ------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 322 MiB |     645 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Size | Samples | Caller                                                         | Location                                                |
| -----: | ------: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 322 MiB |     645 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Size | Samples | Caller                                                                | Location                                     |
| -----: | ------: | ------: | --------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% | 322 MiB |     645 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % |    Size | Samples | Caller                                                                 | Location                                     |
| -----: | ------: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% | 322 MiB |     645 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % |    Size | Samples | Caller                                                          | Location                                      |
| -----: | ------: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| 100.0% | 322 MiB |     645 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % |    Size | Samples | Caller                                                      | Location                                      |
| -----: | ------: | ------: | ----------------------------------------------------------- | --------------------------------------------- |
| 100.0% | 322 MiB |     645 | `exec(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % |    Size | Samples | Caller                              | Location                                          |
| -----: | ------: | ------: | ----------------------------------- | ------------------------------------------------- |
| 100.0% | 320 MiB |     641 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `<init>(int)` (`java.io.ByteArrayOutputStream`)

|      % |    Size | Samples | Caller                                                  | Location                                               |
| -----: | ------: | ------: | ------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 174 MiB |     348 | `loadAllClassesFromJars(Collection, int, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|     % |    Size | Samples | Caller                        | Location                          |
| ----: | ------: | ------: | ----------------------------- | --------------------------------- |
| 95.5% | 160 MiB |     320 | `toByteArray()`               | `java.io.ByteArrayOutputStream`   |
|  3.3% | 5.5 MiB |      11 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |
|  1.2% |   2 MiB |       4 | `getBytes()`                  | `jdk.internal.loader.Resource`    |

##### `toByteArray()` (`java.io.ByteArrayOutputStream`)

|      % |    Size | Samples | Caller                                                  | Location                                               |
| -----: | ------: | ------: | ------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 160 MiB |     320 | `loadAllClassesFromJars(Collection, int, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|     % |     Size | Samples | Caller                                                             | Location                                                              |
| ----: | -------: | ------: | ------------------------------------------------------------------ | --------------------------------------------------------------------- |
| 91.6% |   49 MiB |      98 | `resumeTask(TowerResolveManager$SuspendedResolverTask)`            | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`    |
| 30.8% | 16.5 MiB |      33 | `processCandidate(Candidate, ResolutionContext, boolean, boolean)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner` |

##### `clone()` (`java.lang.Object`)

|      % |   Size | Samples | Caller                | Location           |
| -----: | -----: | ------: | --------------------- | ------------------ |
| 100.0% | 44 MiB |      88 | `copyOf(byte[], int)` | `java.util.Arrays` |

##### `getValue()` (`kotlin.SafePublicationLazyImpl`)

|     % |     Size | Samples | Caller                     | Location                                                                        |
| ----: | -------: | ------: | -------------------------- | ------------------------------------------------------------------------------- |
| 66.0% | 17.5 MiB |      35 | `getAnnotationInfo()`      | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer` |
| 18.9% |    5 MiB |      10 | `getJavaField()`           | `kotlin.reflect.jvm.internal.DescriptorKProperty`                               |
|  5.7% |  1.5 MiB |       3 | `getDeclarations()`        | `org.jetbrains.kotlin.fir.java.FirLazyJavaDeclarationList`                      |
|  5.7% |  1.5 MiB |       3 | `getCallablesIndex()`      | `org.jetbrains.kotlin.fir.scopes.impl.FirClassDeclaredMemberScopeImpl`          |
|  5.7% |  1.5 MiB |       3 | `getCallableNamesCached()` | `org.jetbrains.kotlin.fir.scopes.impl.AbstractFirUseSiteMemberScope`            |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

|     % |     Size | Samples | Caller                                           | Location                 |
| ----: | -------: | ------: | ------------------------------------------------ | ------------------------ |
| 45.7% | 10.5 MiB |      21 | `newString(byte[], int, int)`                    | `java.lang.StringLatin1` |
| 19.6% |  4.5 MiB |       9 | `<init>(AbstractStringBuilder, Void)`            | `java.lang.String`       |
| 17.4% |    4 MiB |       8 | `newStringUTF8NoRepl(byte[], int, int, boolean)` | `java.lang.String`       |
| 17.4% |    4 MiB |       8 | `<init>(Charset, byte[], int, int)`              | `java.lang.String`       |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|     % |    Size | Samples | Caller                        | Location            |
| ----: | ------: | ------: | ----------------------------- | ------------------- |
| 97.4% |  19 MiB |      38 | `put(Object, Object)`         | `java.util.HashMap` |
|  2.6% | 512 KiB |       1 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

|      % |     Size | Samples | Caller                                                           | Location                               |
| -----: | -------: | ------: | ---------------------------------------------------------------- | -------------------------------------- |
| 100.0% | 19.5 MiB |      39 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `linkCallSite(Object, Object, Object, Object, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

|    % |    Size | Samples | Caller                                                                             | Location                                                                |
| ---: | ------: | ------: | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| 7.7% | 1.5 MiB |       3 | `<init>(Fir2IrComponents, Fir2IrSyntheticIrBuiltinsSymbolsContainer)`              | `org.jetbrains.kotlin.fir.backend.Fir2IrBuiltinSymbolsContainer`        |
| 5.1% |   1 MiB |       2 | `lazyMappedPropertyListVar(Fir2IrSymbolsMappingForLazyClasses, IrLock, Function0)` | `org.jetbrains.kotlin.fir.backend.Fir2IrSymbolsMappingForLazyClassesKt` |
| 5.1% |   1 MiB |       2 | `<clinit>()`                                                                       | `org.jetbrains.kotlin.fir.analysis.diagnostics.FirDiagnosticRenderers`  |
| 2.6% | 512 KiB |       1 | `init()`                                                                           | `com.intellij.psi.stubs.StubElementRegistryServiceImpl`                 |
| 2.6% | 512 KiB |       1 | `<init>()`                                                                         | `org.jetbrains.kotlin.idea.KotlinFileType`                              |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

|      % |   Size | Samples | Caller                          | Location           |
| -----: | -----: | ------: | ------------------------------- | ------------------ |
| 100.0% | 19 MiB |      38 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `put(Object, Object)` (`java.util.HashMap`)

|     % |     Size | Samples | Caller                                                  | Location                                                                                                                             |
| ----: | -------: | ------: | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| 55.3% | 10.5 MiB |      21 | `add(Object)`                                           | `java.util.HashSet`                                                                                                                  |
|  7.9% |  1.5 MiB |       3 | `visitExpression(Name, FirExpression)`                  | `org.jetbrains.kotlin.fir.java.deserialization.AnnotationsLoader$loadAnnotation$1`                                                   |
|  5.3% |    1 MiB |       2 | `visitParameterAnnotation(int, ClassId, SourceElement)` | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializerKt$loadMemberAnnotations$1$AnnotationVisitorForMethod` |
|  2.6% |  512 KiB |       1 | `loadAllClassesFromJars(Collection, int, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                                               |
|  2.6% |  512 KiB |       1 | `createArgumentsMapping(Candidate, boolean)`            | `org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer`                                            |

##### `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` (`java.lang.invoke.LambdaMetafactory`)

|     % |    Size | Samples | Caller                                                                 | Location                                             |
| ----: | ------: | ------: | ---------------------------------------------------------------------- | ---------------------------------------------------- |
| 97.3% |  18 MiB |      36 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801234000` |
|  2.7% | 512 KiB |       1 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % |     Size | Samples | Caller                                                       | Location                                  |
| -----: | -------: | ------: | ------------------------------------------------------------ | ----------------------------------------- |
| 100.0% | 18.5 MiB |      37 | `invoke(Class, MethodHandle, String, Object, Object, Class)` | `java.lang.invoke.BootstrapMethodInvoker` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|     % |    Size | Samples | Callee                                                                       | Location                                               |
| ----: | ------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 51.0% | 346 MiB |     692 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
| 49.0% | 333 MiB |     661 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                             |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % |    Size | Samples | Callee          | Location                                    |
| -----: | ------: | ------: | --------------- | ------------------------------------------- |
| 100.0% | 680 MiB |   1,353 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|     % |    Size | Samples | Callee                | Location                        |
| ----: | ------: | ------: | --------------------- | ------------------------------- |
| 50.3% | 174 MiB |     348 | `<init>(int)`         | `java.io.ByteArrayOutputStream` |
| 46.2% | 160 MiB |     320 | `toByteArray()`       | `java.io.ByteArrayOutputStream` |
|  2.5% | 8.5 MiB |      17 | `getNextEntry()`      | `java.util.zip.ZipInputStream`  |
|  0.1% | 512 KiB |       1 | `put(Object, Object)` | `java.util.HashMap`             |

##### `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|      % |     Size | Samples | Callee                                                                       | Location                                               |
| -----: | -------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |  346 MiB |     692 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                      | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
|  10.5% | 36.4 MiB |      72 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|     % |     Size | Samples | Callee                          | Location                                                |
| ----: | -------: | ------: | ------------------------------- | ------------------------------------------------------- |
| 98.9% |  329 MiB |     659 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  1.1% | 3.71 MiB |       2 | `<init>()`                      | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % |    Size | Samples | Callee           | Location                                               |
| -----: | ------: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% | 333 MiB |     661 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000801008400`)

|      % |    Size | Samples | Callee           | Location                                     |
| -----: | ------: | ------: | ---------------- | -------------------------------------------- |
| 100.0% | 333 MiB |     661 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801009800`)

|      % |    Size | Samples | Callee                         | Location                                             |
| -----: | ------: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% | 333 MiB |     661 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801008400` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % |    Size | Samples | Callee                           | Location                                            |
| -----: | ------: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 333 MiB |     661 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801009800` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |    Size | Samples | Callee                                           | Location                           |
| -----: | ------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% | 333 MiB |     661 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |    Size | Samples | Callee                         | Location                                          |
| -----: | ------: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% | 333 MiB |     661 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % |    Size | Samples | Callee                     | Location                                          |
| -----: | ------: | ------: | -------------------------- | ------------------------------------------------- |
| 100.0% | 333 MiB |     661 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|     % |    Size | Samples | Callee                                                 | Location                                                |
| ----: | ------: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 99.7% | 328 MiB |     657 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.3% |   1 MiB |       2 | `defaultMessageRenderer()`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % |    Size | Samples | Callee                                                                                             | Location                                                |
| -----: | ------: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 329 MiB |     659 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % |    Size | Samples | Callee                                                                               | Location                                                                |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| 99.7% | 327 MiB |     655 | `exec(MessageCollector, Services, CommonCompilerArguments)`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|  0.3% |   1 MiB |       2 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % |    Size | Samples | Callee                                                   | Location                                      |
| -----: | ------: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 100.0% | 328 MiB |     657 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % |    Size | Samples | Callee                                         | Location                                      |
| -----: | ------: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% | 328 MiB |     657 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % |    Size | Samples | Callee                                                          | Location                                      |
| ----: | ------: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| 98.5% | 322 MiB |     645 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |
|  1.5% |   5 MiB |      10 | `<clinit>()`                                                    | `org.jetbrains.kotlin.cli.common.ArgumentsKt` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % |    Size | Samples | Callee                                                                          | Location                                                                    |
| ----: | ------: | ------: | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| 99.4% | 320 MiB |     641 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`            | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                        |
|  0.6% |   2 MiB |       4 | `reportToMessageCollector(BaseDiagnosticsCollector, MessageCollector, boolean)` | `org.jetbrains.kotlin.cli.common.fir.FirDiagnosticsCompilerResultsReporter` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Size | Samples | Callee                                         | Location                                                |
| -----: | ------: | ------: | ---------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 322 MiB |     645 | `runPhasedPipeline(ArgumentsPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Size | Samples | Callee                                                                                              | Location                                                |
| -----: | ------: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 322 MiB |     645 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Size | Samples | Callee                                                                                                                                        | Location                                                |
| -----: | ------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 322 MiB |     645 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % |    Size | Samples | Callee                                                         | Location                                                |
| -----: | ------: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 322 MiB |     645 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % |    Size | Samples | Callee                                                                | Location                                     |
| -----: | ------: | ------: | --------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% | 322 MiB |     645 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % |    Size | Samples | Callee                                                                 | Location                                     |
| -----: | ------: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% | 322 MiB |     645 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|     % |     Size | Samples | Callee                           | Location                                                              |
| ----: | -------: | ------: | -------------------------------- | --------------------------------------------------------------------- |
| 66.8% |  214 MiB |     428 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`      |
| 24.8% | 79.5 MiB |     159 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`       |
|  8.0% | 25.5 MiB |      51 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`        |
|  0.3% |    1 MiB |       2 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmConfigurationPipelinePhase` |
|  0.2% |  512 KiB |       1 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmWriteOutputsPhase`          |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|     % |   Size | Samples | Callee    | Location           |
| ----: | -----: | ------: | --------- | ------------------ |
| 26.2% | 44 MiB |      88 | `clone()` | `java.lang.Object` |

##### `toByteArray()` (`java.io.ByteArrayOutputStream`)

|      % |    Size | Samples | Callee                | Location           |
| -----: | ------: | ------: | --------------------- | ------------------ |
| 100.0% | 160 MiB |     320 | `copyOf(byte[], int)` | `java.util.Arrays` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|     % |     Size | Samples | Callee                  | Location                                                                                      |
| ----: | -------: | ------: | ----------------------- | --------------------------------------------------------------------------------------------- |
| 72.9% |   39 MiB |      78 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`         |
| 30.8% | 16.5 MiB |      33 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`      |
|  8.4% |  4.5 MiB |       9 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$2`      |
|  4.7% |  2.5 MiB |       5 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$1`      |
|  3.7% |    2 MiB |       4 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask$runResolverForNoReceiver$1` |

##### `getValue()` (`kotlin.SafePublicationLazyImpl`)

|     % |     Size | Samples | Callee     | Location                                                                                                   |
| ----: | -------: | ------: | ---------- | ---------------------------------------------------------------------------------------------------------- |
| 66.0% | 17.5 MiB |      35 | `invoke()` | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer$$Lambda.0x00000008015dcda8` |
| 18.9% |    5 MiB |      10 | `invoke()` | `kotlin.reflect.jvm.internal.DescriptorKProperty$$Lambda$0`                                                |
|  5.7% |  1.5 MiB |       3 | `invoke()` | `org.jetbrains.kotlin.fir.java.FirLazyJavaDeclarationList$$Lambda.0x0000000801614718`                      |
|  5.7% |  1.5 MiB |       3 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.impl.FirClassDeclaredMemberScopeImpl$$Lambda.0x000000080162d058`          |
|  5.7% |  1.5 MiB |       3 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.impl.AbstractFirUseSiteMemberScope$$Lambda.0x0000000801634e40`            |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

|     % |   Size | Samples | Callee                              | Location           |
| ----: | -----: | ------: | ----------------------------------- | ------------------ |
| 82.6% | 19 MiB |      38 | `copyOfRangeByte(byte[], int, int)` | `java.util.Arrays` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|     % |    Size | Samples | Callee                                       | Location                  |
| ----: | ------: | ------: | -------------------------------------------- | ------------------------- |
| 41.0% |   8 MiB |      16 | `resize()`                                   | `java.util.HashMap`       |
| 33.3% | 6.5 MiB |      13 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.LinkedHashMap` |
| 25.6% |   5 MiB |      10 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`       |

##### `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

|     % |     Size | Samples | Callee                                                      | Location                    |
| ----: | -------: | ------: | ----------------------------------------------------------- | --------------------------- |
| 94.9% | 18.5 MiB |      37 | `makeSite(MethodHandle, String, MethodType, Object, Class)` | `java.lang.invoke.CallSite` |
|  5.1% |    1 MiB |       2 | `linkToTargetMethod(MethodType)`                            | `java.lang.invoke.Invokers` |

##### `linkCallSite(Object, Object, Object, Object, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

|      % |     Size | Samples | Callee                                                                        | Location                               |
| -----: | -------: | ------: | ----------------------------------------------------------------------------- | -------------------------------------- |
| 100.0% | 19.5 MiB |      39 | `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `put(Object, Object)` (`java.util.HashMap`)

|      % |   Size | Samples | Callee                                          | Location            |
| -----: | -----: | ------: | ----------------------------------------------- | ------------------- |
| 100.0% | 19 MiB |      38 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` (`java.lang.invoke.LambdaMetafactory`)

|     % |     Size | Samples | Callee                                                                                                                   | Location                                       |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| 67.6% | 12.5 MiB |      25 | `buildCallSite()`                                                                                                        | `java.lang.invoke.InnerClassLambdaMetafactory` |
| 29.7% |  5.5 MiB |      11 | `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % |    Size | Samples | Callee                                                                 | Location                                             |
| ----: | ------: | ------: | ---------------------------------------------------------------------- | ---------------------------------------------------- |
| 97.3% |  18 MiB |      36 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801234000` |
|  2.7% | 512 KiB |       1 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |

## Hottest call stacks

Call stacks with the most bytes allocated in their leaf frame.

Common call stack: `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----: | -------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 23.4% |  159 MiB |     319 | `<init>(int)` (`java.io.ByteArrayOutputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 16.8% |  114 MiB |     228 | `copyOf(byte[], int)` (`java.util.Arrays`) ← `toByteArray()` (`java.io.ByteArrayOutputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  4.0% |   27 MiB |      54 | `clone()` (`java.lang.Object`) ← `copyOf(byte[], int)` (`java.util.Arrays`) ← `toByteArray()` (`java.io.ByteArrayOutputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  2.5% |   17 MiB |      34 | `clone()` (`java.lang.Object`) ← `copyOf(byte[], int)` (`java.util.Arrays`) ← `toByteArray()` (`java.io.ByteArrayOutputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  2.2% | 14.7 MiB |      29 | `<init>(int)` (`java.io.ByteArrayOutputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.5% |  3.5 MiB |       7 | `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`) ← `copyOfRange(byte[], int, int)` ← `newStringUTF8NoRepl(byte[], int, int, boolean)` (`java.lang.String`) ← `newStringUTF8NoRepl(byte[], int, int)` (`java.lang.System$2`) ← `toString(byte[], int, int)` (`java.util.zip.ZipCoder$UTF8ZipCoder`) ← `toStringUTF8(byte[], int)` (`java.util.zip.ZipCoder`) ← `readLOC()` (`java.util.zip.ZipInputStream`) ← `getNextEntry()` ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.5% | 3.21 MiB |       1 | `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`) ← `<init>(ZipFile$Source$Key, boolean, ZipCoder)` ← `get(File, boolean, ZipCoder)` ← `<init>(ZipFile, ZipCoder, File, int)` (`java.util.zip.ZipFile$CleanableResource`) ← `<init>(File, int, Charset)` (`java.util.zip.ZipFile`) ← `<init>(File, int)` ← `<init>(File, boolean, int, Runtime$Version)` (`java.util.jar.JarFile`) ← `getJarFile(URL)` (`jdk.internal.loader.URLClassPath$JarLoader`) ← `run()` (`jdk.internal.loader.URLClassPath$JarLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `ensureOpen()` (`jdk.internal.loader.URLClassPath$JarLoader`) ← `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` ← `run()` (`jdk.internal.loader.URLClassPath$3`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `getLoader(URL)` (`jdk.internal.loader.URLClassPath`) ← `getLoader(int)` ← `findResource(String, boolean)` ← `run()` (`java.net.URLClassLoader$2`) ← `run()` ← `executePrivileged(PrivilegedAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedAction, AccessControlContext)` ← `findResource(String)` (`java.net.URLClassLoader`) ← `getResource(String)` (`java.lang.ClassLoader`) ← `getResource(String)` (`org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`) ← `<init>()` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `<init>()` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000801008400`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.4% |    3 MiB |       6 | `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.4% |    3 MiB |       6 | `toString()` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ByteArrayCharSequence`) ← `getOrCreateDirectory(CharSequence, Map)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler`) ← `createFile(ZipEntryDescription, Map)` ← `<init>(FastJarFileSystem, String)` ← `myHandlers$lambda$0(FastJarFileSystem, String)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarFileSystem`) ← `invoke(Object)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarFileSystem$$Lambda.0x000000080135f108`) ← `myHandlers$lambda$1(Function1, Object)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarFileSystem`) ← `fun(Object)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarFileSystem$$Lambda.0x000000080135f340`) ← `create(Object)` (`com.intellij.util.containers.ConcurrentFactoryMap$2`) ← `get(Object)` (`com.intellij.util.containers.ConcurrentFactoryMap`) ← `findFileByPath(String)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarFileSystem`) ← `findJarRoot(VirtualFileSystem, File)` (`org.jetbrains.kotlin.cli.jvm.compiler.legacy.pipeline.JvmCompilerPipelineKt`) ← `contentRootToVirtualFile(JvmContentRootBase, VirtualFileSystem, VirtualFileSystem, CompilerConfiguration)` ← `createProjectEnvironment$lambda$0(CoreLocalFileSystem, KotlinCoreEnvironment$ProjectEnvironment, CompilerConfiguration, JvmContentRootBase)` ← `invoke(Object)` (`org.jetbrains.kotlin.cli.jvm.compiler.legacy.pipeline.JvmCompilerPipelineKt$$Lambda.0x000000080138a098`) ← `convertClasspathRoots(List)` (`org.jetbrains.kotlin.cli.jvm.compiler.ClasspathRootsResolver`) ← `createProjectEnvironment(CompilerConfiguration, Disposable, EnvironmentConfigFiles)` (`org.jetbrains.kotlin.cli.jvm.compiler.legacy.pipeline.JvmCompilerPipelineKt`) ← `createEnvironmentAndSources(CompilerConfiguration, Disposable, String)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`) ← `executePhase(ConfigurationPipelineArtifact)` ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000801008400`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.4% |  2.5 MiB |       5 | `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`) ← `newOutput()` (`org.jetbrains.kotlin.protobuf.ByteString`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `parsePartialFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.AbstractParser`) ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `readPackageDataFrom(byte[], String[])` (`org.jetbrains.kotlin.metadata.jvm.deserialization.JvmProtoBufUtil`) ← `readPackageDataFrom(String[], String[])` ← `computePackagePartInfo(FqName, String)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`) ← `computePackagePartsInfos(FqName)` ← `tryComputePackagePartInfos(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$tryComputePackagePartInfos(AbstractFirDeserializedSymbolProvider, FqName)` ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$2`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getPackageParts(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$getPackageParts(AbstractFirDeserializedSymbolProvider, FqName)` ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCompositeCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `mayHaveTopLevelCallable(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`) ← `getTopLevelPropertySymbolsTo(List, FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`) ← `getTopLevelPropertySymbols(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolProvider`) ← `processPropertiesByName(Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`) ← `invoke(FirScope, Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1`) ← `invoke(Object, Object, Object)` ← `processSymbolsByName(Name, Function3, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`) ← `processPropertiesByName(Name, Function1)` ← `getProperties(FirScope, Name)` (`org.jetbrains.kotlin.fir.scopes.FirScopeKt`) ← `resolveFromImportScope(FirQualifiedAccessExpression)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`) ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode)` ← `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformPropertyAccessExpression(FirPropertyAccessExpression, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirPropertyAccessExpression`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformArguments(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformChildren(FirTransformer, Object)` ← `transformElement(FirElement, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformElement(FirElement, Object)` ← `transformArgumentList(FirArgumentList, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformer`) ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirArgumentList`) ← `transformChildren(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirAnnotationCallImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformAnnotationCall(FirAnnotationCall, FirUserTypeRef)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformAnnotationCall(FirAnnotationCall, Void)` ← `transformAnnotationCall(FirAnnotationCall, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirAnnotationCall`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformInplace-aLnlfrU(List, FirTransformer, Object)` ← `transformAnnotations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`) ← `transformAnnotations(FirTransformer, Object)` ← `transformAnnotationContainer(FirAnnotationContainer, Void)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformDeclaration(FirDeclaration, Void)` ← `transformRegularClass(FirRegularClass, Void)` ← `transformRegularClass(FirRegularClass, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirRegularClass`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformDeclarations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`) ← `transformDeclarations(FirTransformer, Object)` ← `invoke()` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$transformFile$$inlined$resolveFile$1`) ← `invoke()` ← `withFileAndFileScopes(FirFile, Function0)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `resolveAnnotations(FirFile)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirCompilerRequiredAnnotationsResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `transformSingle(FirElement, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `process(Collection)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.FirCompilerRequiredAnnotationsResolveProcessor`) ← `process(List)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirTotalResolveProcessor`) ← `runResolution(FirSession, List)` (`org.jetbrains.kotlin.fir.pipeline.AnalyseKt`) ← `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`) ← `executePhase(ConfigurationPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000801008400`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.3% | 2.19 MiB |       4 | `copyOf(byte[], int)` (`java.util.Arrays`) ← `toByteArray()` (`java.io.ByteArrayOutputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.3% |    2 MiB |       4 | `getBufIfOpen(boolean)` (`java.io.BufferedInputStream`) ← `getBufIfOpen()` ← `fill()` ← `read1(byte[], int, int)` ← `implRead(byte[], int, int)` ← `read(byte[], int, int)` ← `read(byte[], int, int)` (`java.io.FilterInputStream`) ← `read(byte[], int, int)` (`java.io.PushbackInputStream`) ← `readFully(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `readLOC()` ← `getNextEntry()` ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.3% |    2 MiB |       4 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `parsePartialFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.AbstractParser`) ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `readPackageDataFrom(byte[], String[])` (`org.jetbrains.kotlin.metadata.jvm.deserialization.JvmProtoBufUtil`) ← `readPackageDataFrom(String[], String[])` ← `computePackagePartInfo(FqName, String)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`) ← `computePackagePartsInfos(FqName)` ← `tryComputePackagePartInfos(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$tryComputePackagePartInfos(AbstractFirDeserializedSymbolProvider, FqName)` ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$2`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getPackageParts(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$getPackageParts(AbstractFirDeserializedSymbolProvider, FqName)` ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCompositeCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `mayHaveTopLevelCallable(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`) ← `getTopLevelPropertySymbolsTo(List, FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`) ← `getTopLevelPropertySymbols(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolProvider`) ← `processPropertiesByName(Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`) ← `invoke(FirScope, Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1`) ← `invoke(Object, Object, Object)` ← `processSymbolsByName(Name, Function3, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`) ← `processPropertiesByName(Name, Function1)` ← `getProperties(FirScope, Name)` (`org.jetbrains.kotlin.fir.scopes.FirScopeKt`) ← `resolveFromImportScope(FirQualifiedAccessExpression)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`) ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode)` ← `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformPropertyAccessExpression(FirPropertyAccessExpression, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirPropertyAccessExpression`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformArguments(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformChildren(FirTransformer, Object)` ← `transformElement(FirElement, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformElement(FirElement, Object)` ← `transformArgumentList(FirArgumentList, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformer`) ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirArgumentList`) ← `transformChildren(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirAnnotationCallImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformAnnotationCall(FirAnnotationCall, FirUserTypeRef)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformAnnotationCall(FirAnnotationCall, Void)` ← `transformAnnotationCall(FirAnnotationCall, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirAnnotationCall`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformInplace-aLnlfrU(List, FirTransformer, Object)` ← `transformAnnotations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`) ← `transformAnnotations(FirTransformer, Object)` ← `transformAnnotationContainer(FirAnnotationContainer, Void)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformDeclaration(FirDeclaration, Void)` ← `transformRegularClass(FirRegularClass, Void)` ← `transformRegularClass(FirRegularClass, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirRegularClass`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformDeclarations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`) ← `transformDeclarations(FirTransformer, Object)` ← `invoke()` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$transformFile$$inlined$resolveFile$1`) ← `invoke()` ← `withFileAndFileScopes(FirFile, Function0)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `resolveAnnotations(FirFile)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirCompilerRequiredAnnotationsResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `transformSingle(FirElement, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `process(Collection)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.FirCompilerRequiredAnnotationsResolveProcessor`) ← `process(List)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirTotalResolveProcessor`) ← `runResolution(FirSession, List)` (`org.jetbrains.kotlin.fir.pipeline.AnalyseKt`) ← `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`) ← `executePhase(ConfigurationPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000801008400`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.3% |    2 MiB |       4 | `simplifyKnownSafeCallPatterns(TemporaryVariablesEliminationTransformer$ControlFlowGraph)` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`) ← `transform(String, MethodNode)` ← `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer`) ← `performTransformations(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.kotlin.codegen.TransformationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.org.objectweb.asm.MethodVisitor`) ← `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen(JvmIrCodegenFactory$CodegenInput)` ← `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` (`org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler`) ← `executePhase(JvmFir2IrPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000801008400`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.2% |  1.5 MiB |       3 | `createZipEntry(String)` (`java.util.zip.ZipInputStream`) ← `readLOC()` ← `getNextEntry()` ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.2% |  1.5 MiB |       3 | `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`) ← `newOutput()` (`org.jetbrains.kotlin.protobuf.ByteString`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Annotation`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `parsePartialFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.AbstractParser`) ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `readPackageDataFrom(byte[], String[])` (`org.jetbrains.kotlin.metadata.jvm.deserialization.JvmProtoBufUtil`) ← `readPackageDataFrom(String[], String[])` ← `computePackagePartInfo(FqName, String)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`) ← `computePackagePartsInfos(FqName)` ← `tryComputePackagePartInfos(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$tryComputePackagePartInfos(AbstractFirDeserializedSymbolProvider, FqName)` ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$2`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getPackageParts(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$getPackageParts(AbstractFirDeserializedSymbolProvider, FqName)` ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCompositeCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `mayHaveTopLevelCallable(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`) ← `getTopLevelPropertySymbolsTo(List, FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`) ← `getTopLevelPropertySymbols(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolProvider`) ← `processPropertiesByName(Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`) ← `invoke(FirScope, Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1`) ← `invoke(Object, Object, Object)` ← `processSymbolsByName(Name, Function3, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`) ← `processPropertiesByName(Name, Function1)` ← `getProperties(FirScope, Name)` (`org.jetbrains.kotlin.fir.scopes.FirScopeKt`) ← `resolveFromImportScope(FirQualifiedAccessExpression)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`) ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode)` ← `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformPropertyAccessExpression(FirPropertyAccessExpression, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirPropertyAccessExpression`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformArguments(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformChildren(FirTransformer, Object)` ← `transformElement(FirElement, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformElement(FirElement, Object)` ← `transformArgumentList(FirArgumentList, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformer`) ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirArgumentList`) ← `transformChildren(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirAnnotationCallImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformAnnotationCall(FirAnnotationCall, FirUserTypeRef)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformAnnotationCall(FirAnnotationCall, Void)` ← `transformAnnotationCall(FirAnnotationCall, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirAnnotationCall`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformInplace-aLnlfrU(List, FirTransformer, Object)` ← `transformAnnotations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`) ← `transformAnnotations(FirTransformer, Object)` ← `transformAnnotationContainer(FirAnnotationContainer, Void)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformDeclaration(FirDeclaration, Void)` ← `transformRegularClass(FirRegularClass, Void)` ← `transformRegularClass(FirRegularClass, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirRegularClass`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformDeclarations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`) ← `transformDeclarations(FirTransformer, Object)` ← `invoke()` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$transformFile$$inlined$resolveFile$1`) ← `invoke()` ← `withFileAndFileScopes(FirFile, Function0)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `resolveAnnotations(FirFile)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirCompilerRequiredAnnotationsResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `transformSingle(FirElement, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `process(Collection)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.FirCompilerRequiredAnnotationsResolveProcessor`) ← `process(List)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirTotalResolveProcessor`) ← `runResolution(FirSession, List)` (`org.jetbrains.kotlin.fir.pipeline.AnalyseKt`) ← `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`) ← `executePhase(ConfigurationPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000801008400`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) |
|  0.2% |  1.5 MiB |       3 | `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`) ← `newOutput()` (`org.jetbrains.kotlin.protobuf.ByteString`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Annotation`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `parsePartialFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.AbstractParser`) ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `readPackageDataFrom(byte[], String[])` (`org.jetbrains.kotlin.metadata.jvm.deserialization.JvmProtoBufUtil`) ← `readPackageDataFrom(String[], String[])` ← `computePackagePartInfo(FqName, String)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`) ← `computePackagePartsInfos(FqName)` ← `tryComputePackagePartInfos(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$tryComputePackagePartInfos(AbstractFirDeserializedSymbolProvider, FqName)` ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$2`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getPackageParts(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$getPackageParts(AbstractFirDeserializedSymbolProvider, FqName)` ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCompositeCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `mayHaveTopLevelCallable(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`) ← `getTopLevelPropertySymbolsTo(List, FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`) ← `getTopLevelPropertySymbols(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolProvider`) ← `processPropertiesByName(Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`) ← `invoke(FirScope, Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1`) ← `invoke(Object, Object, Object)` ← `processSymbolsByName(Name, Function3, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`) ← `processPropertiesByName(Name, Function1)` ← `getProperties(FirScope, Name)` (`org.jetbrains.kotlin.fir.scopes.FirScopeKt`) ← `resolveFromImportScope(FirQualifiedAccessExpression)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`) ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode)` ← `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformPropertyAccessExpression(FirPropertyAccessExpression, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirPropertyAccessExpression`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformArguments(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformChildren(FirTransformer, Object)` ← `transformElement(FirElement, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformElement(FirElement, Object)` ← `transformArgumentList(FirArgumentList, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformer`) ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirArgumentList`) ← `transformChildren(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirAnnotationCallImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformAnnotationCall(FirAnnotationCall, FirUserTypeRef)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformAnnotationCall(FirAnnotationCall, Void)` ← `transformAnnotationCall(FirAnnotationCall, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirAnnotationCall`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformInplace-aLnlfrU(List, FirTransformer, Object)` ← `transformAnnotations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`) ← `transformAnnotations(FirTransformer, Object)` ← `transformAnnotationContainer(FirAnnotationContainer, Void)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformDeclaration(FirDeclaration, Void)` ← `transformRegularClass(FirRegularClass, Void)` ← `transformRegularClass(FirRegularClass, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirRegularClass`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformDeclarations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`) ← `transformDeclarations(FirTransformer, Object)` ← `invoke()` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$transformFile$$inlined$resolveFile$1`) ← `invoke()` ← `withFileAndFileScopes(FirFile, Function0)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `resolveAnnotations(FirFile)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirCompilerRequiredAnnotationsResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `transformSingle(FirElement, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `process(Collection)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.FirCompilerRequiredAnnotationsResolveProcessor`) ← `process(List)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirTotalResolveProcessor`) ← `runResolution(FirSession, List)` (`org.jetbrains.kotlin.fir.pipeline.AnalyseKt`) ← `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`) ← `executePhase(ConfigurationPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000801008400`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.2% |  1.5 MiB |       3 | `simplifyTrivialInstructions(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`) ← `transform(String, MethodNode)` ← `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer`) ← `performTransformations(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.kotlin.codegen.TransformationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.org.objectweb.asm.MethodVisitor`) ← `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen(JvmIrCodegenFactory$CodegenInput)` ← `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` (`org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler`) ← `executePhase(JvmFir2IrPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000801008400`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.2% |  1.5 MiB |       3 | `accept(ClassVisitor, Attribute[], int)` (`org.jetbrains.org.objectweb.asm.ClassReader`) ← `accept(ClassVisitor, int)` ← `getMethodNode(byte[], Type, Method)` (`org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`) ← `getMethodNode(Type, byte[], Method, boolean)` (`org.jetbrains.kotlin.codegen.inline.SourceCompilerForInlineKt`) ← `getMethodNode(Type, byte[], Method, boolean, boolean, boolean)` ← `loadCompiledInlineFunction$lambda$0(GenerationState, Type, Method, boolean, boolean, boolean, ClassId)` ← `invoke()` (`org.jetbrains.kotlin.codegen.inline.SourceCompilerForInlineKt$$Lambda.0x00000008018e5728`) ← `computeMethodBytes(MethodId, Function0)` (`org.jetbrains.kotlin.codegen.inline.InlineCache`) ← `loadCompiledInlineFunction(ClassId, Method, boolean, boolean, boolean, GenerationState)` (`org.jetbrains.kotlin.codegen.inline.SourceCompilerForInlineKt`) ← `compileInlineFunction(JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitVariable(IrVariable, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitVariable(IrVariable, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.declarations.IrVariable`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `compileInlineFunction(JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen(JvmIrCodegenFactory$CodegenInput)` ← `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` (`org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler`) ← `executePhase(JvmFir2IrPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000801008400`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.2% |  1.5 MiB |       3 | `simplifyTrivialInstructions(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`) ← `transform(String, MethodNode)` ← `preprocessNodeBeforeInline(MethodNode, Map)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`) ← `markPlacesForInlineAndRemoveInlinable(MethodNode, Map, int)` ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)` ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map)` ← `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen(JvmIrCodegenFactory$CodegenInput)` ← `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` (`org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler`) ← `executePhase(JvmFir2IrPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000801008400`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

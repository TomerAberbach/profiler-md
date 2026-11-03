# Sampling profile

Collected 1,366 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Compiler          | 43.1% |     589 |
| Native            | 41.5% |     567 |
| Ours              |  9.3% |     127 |
| Standard library  |  4.9% |      67 |
| JIT               |  1.1% |      15 |
| Garbage collector |  0.1% |       1 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── … 911 samples (66.7%) Thread::call_run at libjvm.dylib
│   ├── 838 samples (61.3%) JavaThread::thread_main_inner
│   │   └── 835 samples (61.1%) CompileBroker::compiler_thread_loop
│   │       ├── 812 samples (59.4%) CompileBroker::invoke_compiler_on_method
│   │       │   ├── 546 samples (40.0%) C2Compiler::compile_method
│   │       │   │   └── 546 samples (40.0%) Compile::Compile
│   │       │   │       └── 546 samples (40.0%) 7 more callees, led by (19.8%) Compile::Code_Gen
│   │       │   ├── … 256 samples (18.7%) Compilation::compile_method at libjvm.dylib
│   │       │   │   ├── 230 samples (16.8%) Compilation::compile_java_method
│   │       │   │   │   ├── 88 samples (6.4%) Compilation::emit_lir
│   │       │   │   │   │   ├── 70 samples (5.1%) LinearScan::do_linear_scan
│   │       │   │   │   │   │   ├── 13 samples (1.0%) LinearScan::build_intervals
│   │       │   │   │   │   │   │   └── 3 samples (0.2%, self 2.9% globally) tlv_get_addr at libdyld.dylib
│   │       │   │   │   │   │   └── 57 samples (4.2%) 11 more callees, led by (2.0%) LinearScan::allocate_registers
│   │       │   │   │   │   └── 18 samples (1.3%) BlockList::iterate_forward …
│   │       │   │   │   └── 142 samples (10.4%) 4 more callees, led by (6.5%) Compilation::build_hir
│   │       │   │   └── 26 samples (1.9%) ciEnv::register_method …
│   │       │   └── 3 samples (0.2%) ciEnv::get_method_from_handle
│   │       └── … 19 samples (1.4%) __psynch_cvwait at libsystem_kernel.dylib
│   └── 68 samples (5.0%) WorkerThread::run
│       ├── 26 samples (1.9%) G1EvacuateRegionsBaseTask::work
│       │   ├── … 5 samples (0.4%) fwd_copy_again at libjvm.dylib
│       │   └── 17 samples (1.2%) 2 more callees, led by (0.9%) G1EvacuateRegionsTask::evacuate_live_objects
│       └── 42 samples (3.1%) 6 more callees, led by (1.5%) G1RebuildRSAndScrubTask::work
├── 445 samples (32.6%) main(String[]) at org.jetbrains.kotlin.preloading.Preloader
│   └── 445 samples (32.6%) run(String[])
│       ├── … 364 samples (26.6%) exec(PrintStream, Services, MessageRenderer, String[]) at org.jetbrains.kotlin.cli.common.CLICompiler
│       │   └── 360 samples (26.4%) exec(MessageCollector, Services, CommonCompilerArguments)
│       │       ├── … 350 samples (25.6%) invoke(PhaseConfig, PhaserState, LoggingContext, Object) at org.jetbrains.kotlin.config.phaser.NamedCompilerPhase
│       │       │   ├── 323 samples (23.6%) phaseBody(LoggingContext, Object) at org.jetbrains.kotlin.cli.pipeline.PipelinePhase
│       │       │   │   └── 323 samples (23.6%) phaseBody(PipelineContext, PipelineArtifact) …
│       │       │   └── 27 samples (2.0%) 2 more callees, led by (1.5%) phaseBody(LoggingContext, Object) at org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase
│       │       └── … 1 sample (0.1%, self 1.8% globally) SymbolTable::do_lookup at libjvm.dylib
│       └── … 69 samples (5.1%) read(byte[], int, int) at java.util.zip.ZipInputStream
│           └── … 63 samples (4.6%) Java_java_util_zip_Inflater_inflateBytesBytes at libzip.dylib
│               ├── 44 samples (3.2%) inflate_fast
│               ├── 5 samples (0.4%) jni_GetPrimitiveArrayCritical at libjvm.dylib
│               │   └── 5 samples (0.4%, self 1.4% globally) pthread_jit_write_protect_np at libsystem_pthread.dylib
│               └── 14 samples (1.0%) 2 more callees, led by (1.0%) inflate
└── 9 samples (0.7%) 2 more root frames, led by (0.6%) break_stack_range
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|    % | Samples | Function                                                                                                                                                 | Location                         |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| 3.2% |      44 | `inflate_fast`                                                                                                                                           | `libzip.dylib`                   |
| 2.9% |      40 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`                  |
| 1.8% |      25 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`         |
| 1.8% |      24 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`                   |
| 1.7% |      23 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`         |
| 1.5% |      21 | `IndexSetIterator::advance_and_next`                                                                                                                     | `libjvm.dylib`                   |
| 1.4% |      19 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`        |
| 1.2% |      17 | `PhaseChaitin::build_ifg_physical`                                                                                                                       | `libjvm.dylib`                   |
| 1.0% |      14 | `PhaseChaitin::Split`                                                                                                                                    | `libjvm.dylib`                   |
| 1.0% |      14 | `PhaseIdealLoop::build_loop_late_post_work`                                                                                                              | `libjvm.dylib`                   |
| 1.0% |      13 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`                   |
| 0.9% |      12 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`                   |
| 0.8% |      11 | `PhaseChaitin::elide_copy`                                                                                                                               | `libjvm.dylib`                   |
| 0.8% |      11 | `PhaseChaitin::gather_lrg_masks`                                                                                                                         | `libjvm.dylib`                   |
| 0.7% |       9 | `fwd_copy_again`                                                                                                                                         | `libjvm.dylib`                   |
| 0.7% |       9 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                   | `libjvm.dylib`                   |
| 0.7% |       9 | `checkNotNullParameter(Object, String)`                                                                                                                  | `kotlin.jvm.internal.Intrinsics` |
| 0.7% |       9 | `IntervalWalker::walk_to`                                                                                                                                | `libjvm.dylib`                   |
| 0.6% |       8 | `resource_allocate_bytes`                                                                                                                                | `libjvm.dylib`                   |
| 0.6% |       8 | `PhaseIterGVN::add_users_to_worklist`                                                                                                                    | `libjvm.dylib`                   |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Compiler

|    % | Samples | Function                                             | Location       |
| ---: | ------: | ---------------------------------------------------- | -------------- |
| 1.5% |      21 | `IndexSetIterator::advance_and_next`                 | `libjvm.dylib` |
| 1.2% |      17 | `PhaseChaitin::build_ifg_physical`                   | `libjvm.dylib` |
| 1.0% |      14 | `PhaseChaitin::Split`                                | `libjvm.dylib` |
| 1.0% |      14 | `PhaseIdealLoop::build_loop_late_post_work`          | `libjvm.dylib` |
| 0.8% |      11 | `PhaseChaitin::elide_copy`                           | `libjvm.dylib` |
| 0.8% |      11 | `PhaseChaitin::gather_lrg_masks`                     | `libjvm.dylib` |
| 0.7% |       9 | `IntervalWalker::walk_to`                            | `libjvm.dylib` |
| 0.6% |       8 | `PhaseIterGVN::add_users_to_worklist`                | `libjvm.dylib` |
| 0.6% |       8 | `Unique_Node_List::remove`                           | `libjvm.dylib` |
| 0.5% |       7 | `ciObjectFactory::get_metadata`                      | `libjvm.dylib` |
| 0.5% |       7 | `PhaseIdealLoop::build_loop_late`                    | `libjvm.dylib` |
| 0.5% |       7 | `Compile::identify_useful_nodes`                     | `libjvm.dylib` |
| 0.4% |       6 | `PhaseIdealLoop::build_loop_early`                   | `libjvm.dylib` |
| 0.4% |       6 | `PhaseLive::add_liveout`                             | `libjvm.dylib` |
| 0.4% |       6 | `LIR_OpVisitState::visit`                            | `libjvm.dylib` |
| 0.4% |       5 | `Matcher::xform`                                     | `libjvm.dylib` |
| 0.4% |       5 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` | `libjvm.dylib` |
| 0.4% |       5 | `IndexSet::initialize`                               | `libjvm.dylib` |
| 0.4% |       5 | `PhaseChaitin::build_ifg_virtual`                    | `libjvm.dylib` |
| 0.4% |       5 | `Node::dominates`                                    | `libjvm.dylib` |

##### Native

|    % | Samples | Function                                                                                                                                                 | Location                   |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 3.2% |      44 | `inflate_fast`                                                                                                                                           | `libzip.dylib`             |
| 2.9% |      40 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
| 1.8% |      25 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
| 1.8% |      24 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`             |
| 1.7% |      23 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 1.4% |      19 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |
| 1.0% |      13 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| 0.9% |      12 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
| 0.7% |       9 | `fwd_copy_again`                                                                                                                                         | `libjvm.dylib`             |
| 0.7% |       9 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                   | `libjvm.dylib`             |
| 0.6% |       8 | `resource_allocate_bytes`                                                                                                                                | `libjvm.dylib`             |
| 0.6% |       8 | `sys_icache_invalidate`                                                                                                                                  | `libsystem_platform.dylib` |
| 0.4% |       6 | `Arena::contains`                                                                                                                                        | `libjvm.dylib`             |
| 0.4% |       6 | `_platform_memmove`                                                                                                                                      | `libsystem_platform.dylib` |
| 0.4% |       6 | `inflate`                                                                                                                                                | `libzip.dylib`             |
| 0.4% |       5 | `bsearch`                                                                                                                                                | `libsystem_c.dylib`        |
| 0.4% |       5 | `vmSymbols::find_sid`                                                                                                                                    | `libjvm.dylib`             |
| 0.4% |       5 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
| 0.4% |       5 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>`                             | `libjvm.dylib`             |
| 0.4% |       5 | `inflate_table`                                                                                                                                          | `libzip.dylib`             |

##### Ours

|    % | Samples | Function                                                                                                                                                                                                                                    | Location                                                                        |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| 0.1% |       2 | `getNonDispatchParameters(IrFunction)`                                                                                                                                                                                                      | `org.jetbrains.kotlin.ir.util.IrUtilsKt`                                        |
| 0.1% |       1 | `find(int)`                                                                                                                                                                                                                                 | `it.unimi.dsi.fastutil.ints.Int2ObjectOpenHashMap`                              |
| 0.1% |       1 | `rehash(int)`                                                                                                                                                                                                                               | `it.unimi.dsi.fastutil.objects.Reference2ObjectOpenHashMap`                     |
| 0.1% |       1 | `parseCentralDirectory$lambda$0(Ref$LongRef, List, long, LargeDynamicMappedBuffer$Mapping)`                                                                                                                                                 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`               |
| 0.1% |       1 | `<init>(CodedInputStream, ExtensionRegistryLite)`                                                                                                                                                                                           | `org.jetbrains.kotlin.metadata.ProtoBuf$Function`                               |
| 0.1% |       1 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                                                                                                                                                                 | `org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`                             |
| 0.1% |       1 | `convertCallExpression(LighterASTNode)`                                                                                                                                                                                                     | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder` |
| 0.1% |       1 | `getLineBreakCount(CharSequence)`                                                                                                                                                                                                           | `com.intellij.openapi.util.text.StringUtil`                                     |
| 0.1% |       1 | `getLexemeIndexAt(int)`                                                                                                                                                                                                                     | `com.intellij.lang.impl.MarkerProduction`                                       |
| 0.1% |       1 | `getShouldBindSubject()`                                                                                                                                                                                                                    | `org.jetbrains.kotlin.fir.lightTree.fir.WhenEntry`                              |
| 0.1% |       1 | `shiftOverWhitespaceForward(int)`                                                                                                                                                                                                           | `com.intellij.lang.impl.PsiBuilderImpl`                                         |
| 0.1% |       1 | `removeLast(List)`                                                                                                                                                                                                                          | `org.jetbrains.kotlin.fir.builder.AbstractRawFirBuilder`                        |
| 0.1% |       1 | `<init>()`                                                                                                                                                                                                                                  | `org.jetbrains.kotlin.fir.symbols.impl.FirVariableSymbol`                       |
| 0.1% |       1 | `tokenMatches(IElementType, IElementType)`                                                                                                                                                                                                  | `org.jetbrains.kotlin.parsing.AbstractKotlinParsing`                            |
| 0.1% |       1 | `traverseDirectoriesInPackage(FqName, Set, Function2)`                                                                                                                                                                                      | `org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesIndexImpl`                   |
| 0.1% |       1 | `registerAllExtensions(ExtensionRegistryLite)`                                                                                                                                                                                              | `org.jetbrains.kotlin.metadata.jvm.JvmProtoBuf`                                 |
| 0.1% |       1 | `<init>(NameResolver, TypeTable, VersionRequirementTable, FirModuleData, FqName, FqName, FirTypeDeserializer, AnnotationDeserializer, FirConstDeserializer, FirKDocDeserializer, DeserializedContainerSource, FirRegularClassSymbol, List)` | `org.jetbrains.kotlin.fir.deserialization.FirDeserializationContext`            |
| 0.1% |       1 | `stringsToBytes(String[])`                                                                                                                                                                                                                  | `org.jetbrains.kotlin.metadata.jvm.deserialization.UtfEncodingKt`               |
| 0.1% |       1 | `getTopLevelCallableNamesInPackage(FqName)`                                                                                                                                                                                                 | `org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`       |
| 0.1% |       1 | `toExpandedRecordsList(List)`                                                                                                                                                                                                               | `org.jetbrains.kotlin.metadata.jvm.deserialization.JvmNameResolverKt`           |

##### Standard library

|    % | Samples | Function                                            | Location                                             |
| ---: | ------: | --------------------------------------------------- | ---------------------------------------------------- |
| 0.7% |       9 | `checkNotNullParameter(Object, String)`             | `kotlin.jvm.internal.Intrinsics`                     |
| 0.3% |       4 | `sanitizeStackTrace(Throwable)`                     | `kotlin.jvm.internal.Intrinsics`                     |
| 0.1% |       2 | `newNode(int, Object, Object, HashMap$Node)`        | `java.util.LinkedHashMap`                            |
| 0.1% |       2 | `equals(Object)`                                    | `java.lang.Object`                                   |
| 0.1% |       2 | `next()`                                            | `java.util.ArrayList$Itr`                            |
| 0.1% |       1 | `inflate(byte[], int, int)`                         | `java.util.zip.Inflater`                             |
| 0.1% |       1 | `resize()`                                          | `java.util.HashMap`                                  |
| 0.1% |       1 | `nextNode()`                                        | `java.util.HashMap$HashIterator`                     |
| 0.1% |       1 | `checkAndAddEntry(int, int, ZipCoder)`              | `java.util.zip.ZipFile$Source`                       |
| 0.1% |       1 | `invoke(Object, Method, Object[])`                  | `sun.reflect.annotation.AnnotationInvocationHandler` |
| 0.1% |       1 | `<init>(Label)`                                     | `jdk.internal.org.objectweb.asm.Frame`               |
| 0.1% |       1 | `getAnnotation(Class)`                              | `java.lang.reflect.Executable`                       |
| 0.1% |       1 | `copyOfRangeByte(byte[], int, int)`                 | `java.util.Arrays`                                   |
| 0.1% |       1 | `addType(String)`                                   | `jdk.internal.org.objectweb.asm.SymbolTable`         |
| 0.1% |       1 | `visit(int, int, String, String, String, String[])` | `jdk.internal.org.objectweb.asm.ClassWriter`         |
| 0.1% |       1 | `<init>()`                                          | `java.util.HashMap`                                  |
| 0.1% |       1 | `linkToTargetMethod(Object, Object)`                | `java.lang.invoke.Invokers$Holder`                   |
| 0.1% |       1 | `getResourceBuffer(ImageLocation)`                  | `jdk.internal.jimage.BasicImageReader`               |
| 0.1% |       1 | `newByteChannel(Path, Set, FileAttribute[])`        | `java.nio.file.Files`                                |
| 0.1% |       1 | `get(Object)`                                       | `java.util.concurrent.ConcurrentHashMap`             |

##### JIT

|    % | Samples | Function                     | Location    |
| ---: | ------: | ---------------------------- | ----------- |
| 0.4% |       6 | `I2C/C2I adapters(0xb)`      | `<unknown>` |
| 0.1% |       2 | `I2C/C2I adapters(0xba)`     | `<unknown>` |
| 0.1% |       2 | `I2C/C2I adapters(0xbb)`     | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbba)`    | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbbb)`   | `<unknown>` |
| 0.1% |       1 | `vtable stub`                | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbb)`    | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbaaaab)` | `<unknown>` |

#### Lines

Lines with the largest contribution to each function's self samples.

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       9 | `kotlin.jvm.internal.Intrinsics:130` |

##### `sanitizeStackTrace(Throwable)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       4 | `kotlin.jvm.internal.Intrinsics:253` |

##### `getNonDispatchParameters(IrFunction)` (`org.jetbrains.kotlin.ir.util.IrUtilsKt`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       2 | `org.jetbrains.kotlin.ir.util.IrUtilsKt:219` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.LinkedHashMap`)

|      % | Samples | Location                      |
| -----: | ------: | ----------------------------- |
| 100.0% |       2 | `java.util.LinkedHashMap:281` |

##### `equals(Object)` (`java.lang.Object`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       2 | `java.lang.Object:164` |

##### `next()` (`java.util.ArrayList$Itr`)

|      % | Samples | Location                       |
| -----: | ------: | ------------------------------ |
| 100.0% |       2 | `java.util.ArrayList$Itr:1049` |

##### `find(int)` (`it.unimi.dsi.fastutil.ints.Int2ObjectOpenHashMap`)

|      % | Samples | Location                                               |
| -----: | ------: | ------------------------------------------------------ |
| 100.0% |       1 | `it.unimi.dsi.fastutil.ints.Int2ObjectOpenHashMap:242` |

##### `rehash(int)` (`it.unimi.dsi.fastutil.objects.Reference2ObjectOpenHashMap`)

|      % | Samples | Location                                                         |
| -----: | ------: | ---------------------------------------------------------------- |
| 100.0% |       1 | `it.unimi.dsi.fastutil.objects.Reference2ObjectOpenHashMap:1282` |

##### `parseCentralDirectory$lambda$0(Ref$LongRef, List, long, LargeDynamicMappedBuffer$Mapping)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`)

|      % | Samples | Location                                                              |
| -----: | ------: | --------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt:176` |

##### `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function`)

|      % | Samples | Location                                                |
| -----: | ------: | ------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.metadata.ProtoBuf$Function:16542` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`)

|      % | Samples | Location                                                  |
| -----: | ------: | --------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.metadata.ProtoBuf$Function$1:16780` |

##### `convertCallExpression(LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`)

|      % | Samples | Location                                                                            |
| -----: | ------: | ----------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder:840` |

##### `getLineBreakCount(CharSequence)` (`com.intellij.openapi.util.text.StringUtil`)

|      % | Samples | Location                                        |
| -----: | ------: | ----------------------------------------------- |
| 100.0% |       1 | `com.intellij.openapi.util.text.StringUtil:297` |

##### `getLexemeIndexAt(int)` (`com.intellij.lang.impl.MarkerProduction`)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       1 | `com.intellij.lang.impl.MarkerProduction:136` |

##### `getShouldBindSubject()` (`org.jetbrains.kotlin.fir.lightTree.fir.WhenEntry`)

|      % | Samples | Location                                              |
| -----: | ------: | ----------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.lightTree.fir.WhenEntry:23` |

##### `shiftOverWhitespaceForward(int)` (`com.intellij.lang.impl.PsiBuilderImpl`)

|      % | Samples | Location                                    |
| -----: | ------: | ------------------------------------------- |
| 100.0% |       1 | `com.intellij.lang.impl.PsiBuilderImpl:781` |

##### `removeLast(List)` (`org.jetbrains.kotlin.fir.builder.AbstractRawFirBuilder`)

|      % | Samples | Location                                                     |
| -----: | ------: | ------------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.builder.AbstractRawFirBuilder:303` |

##### `<init>()` (`org.jetbrains.kotlin.fir.symbols.impl.FirVariableSymbol`)

|      % | Samples | Location                                                     |
| -----: | ------: | ------------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.symbols.impl.FirVariableSymbol:27` |

##### `tokenMatches(IElementType, IElementType)` (`org.jetbrains.kotlin.parsing.AbstractKotlinParsing`)

|      % | Samples | Location                                                 |
| -----: | ------: | -------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.parsing.AbstractKotlinParsing:179` |

##### `traverseDirectoriesInPackage(FqName, Set, Function2)` (`org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesIndexImpl`)

|      % | Samples | Location                                                          |
| -----: | ------: | ----------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesIndexImpl:292` |

##### `registerAllExtensions(ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.jvm.JvmProtoBuf`)

|      % | Samples | Location                                           |
| -----: | ------: | -------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.metadata.jvm.JvmProtoBuf:15` |

##### `<init>(NameResolver, TypeTable, VersionRequirementTable, FirModuleData, FqName, FqName, FirTypeDeserializer, AnnotationDeserializer, FirConstDeserializer, FirKDocDeserializer, DeserializedContainerSource, FirRegularClassSymbol, List)` (`org.jetbrains.kotlin.fir.deserialization.FirDeserializationContext`)

|      % | Samples | Location                                                                |
| -----: | ------: | ----------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.deserialization.FirDeserializationContext:43` |

##### `stringsToBytes(String[])` (`org.jetbrains.kotlin.metadata.jvm.deserialization.UtfEncodingKt`)

|      % | Samples | Location                                                             |
| -----: | ------: | -------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.metadata.jvm.deserialization.UtfEncodingKt:65` |

##### `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`)

|      % | Samples | Location                                                                      |
| -----: | ------: | ----------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider:106` |

##### `toExpandedRecordsList(List)` (`org.jetbrains.kotlin.metadata.jvm.deserialization.JvmNameResolverKt`)

|      % | Samples | Location                                                                 |
| -----: | ------: | ------------------------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.metadata.jvm.deserialization.JvmNameResolverKt:28` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Location                     |
| -----: | ------: | ---------------------------- |
| 100.0% |       1 | `java.util.zip.Inflater:366` |

##### `resize()` (`java.util.HashMap`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.util.HashMap:713` |

##### `nextNode()` (`java.util.HashMap$HashIterator`)

|      % | Samples | Location                              |
| -----: | ------: | ------------------------------------- |
| 100.0% |       1 | `java.util.HashMap$HashIterator:1609` |

##### `checkAndAddEntry(int, int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       1 | `java.util.zip.ZipFile$Source:1274` |

##### `invoke(Object, Method, Object[])` (`sun.reflect.annotation.AnnotationInvocationHandler`)

|      % | Samples | Location                                                |
| -----: | ------: | ------------------------------------------------------- |
| 100.0% |       1 | `sun.reflect.annotation.AnnotationInvocationHandler:91` |

##### `<init>(Label)` (`jdk.internal.org.objectweb.asm.Frame`)

|      % | Samples | Location                                   |
| -----: | ------: | ------------------------------------------ |
| 100.0% |       1 | `jdk.internal.org.objectweb.asm.Frame:275` |

##### `getAnnotation(Class)` (`java.lang.reflect.Executable`)

|      % | Samples | Location                           |
| -----: | ------: | ---------------------------------- |
| 100.0% |       1 | `java.lang.reflect.Executable:612` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.util.Arrays:3863` |

##### `addType(String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|      % | Samples | Location                                          |
| -----: | ------: | ------------------------------------------------- |
| 100.0% |       1 | `jdk.internal.org.objectweb.asm.SymbolTable:1180` |

##### `visit(int, int, String, String, String, String[])` (`jdk.internal.org.objectweb.asm.ClassWriter`)

|      % | Samples | Location                                         |
| -----: | ------: | ------------------------------------------------ |
| 100.0% |       1 | `jdk.internal.org.objectweb.asm.ClassWriter:334` |

##### `<init>()` (`java.util.HashMap`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.util.HashMap:478` |

##### `getResourceBuffer(ImageLocation)` (`jdk.internal.jimage.BasicImageReader`)

|      % | Samples | Location                                   |
| -----: | ------: | ------------------------------------------ |
| 100.0% |       1 | `jdk.internal.jimage.BasicImageReader:422` |

##### `newByteChannel(Path, Set, FileAttribute[])` (`java.nio.file.Files`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |       1 | `java.nio.file.Files:380` |

##### `get(Object)` (`java.util.concurrent.ConcurrentHashMap`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `java.util.concurrent.ConcurrentHashMap:938` |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `inflate_fast` (`libzip.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |      44 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|    % | Samples | Caller                                         | Location       |
| ---: | ------: | ---------------------------------------------- | -------------- |
| 7.5% |       3 | `LinearScan::build_intervals`                  | `libjvm.dylib` |
| 5.0% |       2 | `TypeInterfaces::intersection_with`            | `libjvm.dylib` |
| 5.0% |       2 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |
| 5.0% |       2 | `GraphBuilder::invoke`                         | `libjvm.dylib` |
| 2.5% |       1 | `Matcher::xform`                               | `libjvm.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |      25 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `SymbolTable::do_lookup` (`libjvm.dylib`)

|     % | Samples | Caller                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 75.0% |      18 | `SymbolTable::lookup_only`                     | `libjvm.dylib` |
| 16.7% |       4 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |
|  8.3% |       2 | `SymbolTable::new_symbol`                      | `libjvm.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |      23 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|     % | Samples | Caller                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 19.0% |       4 | `PhaseChaitin::Select`             | `libjvm.dylib` |
| 19.0% |       4 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |
| 19.0% |       4 | `PhaseIFG::SquareUp`               | `libjvm.dylib` |
| 14.3% |       3 | `PhaseIFG::re_insert`              | `libjvm.dylib` |
|  9.5% |       2 | `PhaseIFG::remove_node`            | `libjvm.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                              | Location       |
| ----: | ------: | ----------------------------------- | -------------- |
| 26.3% |       5 | `jni_GetPrimitiveArrayCritical`     | `libjvm.dylib` |
| 10.5% |       2 | `InterpreterRuntime::anewarray`     | `libjvm.dylib` |
| 10.5% |       2 | `Unsafe_AllocateInstance`           | `libjvm.dylib` |
|  5.3% |       1 | `monitorenter_nofpu Runtime1 stub`  | `<unknown>`    |
|  5.3% |       1 | `jni_ReleasePrimitiveArrayCritical` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      17 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      14 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      14 | `PhaseIdealLoop::build_loop_late` | `libjvm.dylib` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

|     % | Samples | Caller                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 92.3% |      12 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
|  7.7% |       1 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 75.0% |       9 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |
| 25.0% |       3 | `InstanceKlass::find_method`            | `libjvm.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |      11 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      11 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `fwd_copy_again` (`libjvm.dylib`)

|     % | Samples | Caller                                          | Location       |
| ----: | ------: | ----------------------------------------------- | -------------- |
| 88.9% |       8 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |
| 11.1% |       1 | `CodeBuffer::copy_code_to`                      | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|     % | Samples | Caller                                                                            | Location       |
| ----: | ------: | --------------------------------------------------------------------------------- | -------------- |
| 88.9% |       8 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object`          | `libjvm.dylib` |
| 11.1% |       1 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb` | `libjvm.dylib` |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|     % | Samples | Caller                                                                                                                           | Location                                                               |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 11.1% |       1 | `getOrCreateKotlinClass(Class)`                                                                                                  | `kotlin.reflect.jvm.internal.CachesKt`                                 |
| 11.1% |       1 | `toScopeBasedTowerLevel(FirScope, ReceiverValue, boolean, ConstructorFilter, CompanionExtensionPolicy, ExpressionReceiverValue)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask` |
| 11.1% |       1 | `<init>(FqName, FqName, Name)`                                                                                                   | `org.jetbrains.kotlin.name.CallableId`                                 |
| 11.1% |       1 | `<init>(FqName, Name)`                                                                                                           | `org.jetbrains.kotlin.name.CallableId`                                 |
| 11.1% |       1 | `buildLazyValueForMap(JavaAnnotationOwner)`                                                                                      | `org.jetbrains.kotlin.load.java.structure.JavaElementsKt`              |

##### `IntervalWalker::walk_to` (`libjvm.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 66.7% |       6 | `IntervalWalker::walk_to`        | `libjvm.dylib` |
| 22.2% |       2 | `LinearScan::allocate_registers` | `libjvm.dylib` |
| 11.1% |       1 | `LinearScan::compute_oop_map`    | `libjvm.dylib` |

##### `resource_allocate_bytes` (`libjvm.dylib`)

|     % | Samples | Caller                                       | Location       |
| ----: | ------: | -------------------------------------------- | -------------- |
| 12.5% |       1 | `CompiledMethod::cleanup_inline_caches_impl` | `libjvm.dylib` |
| 12.5% |       1 | `PhaseOutput::FillLocArray`                  | `libjvm.dylib` |
| 12.5% |       1 | `PhaseIdealLoop::Dominators`                 | `libjvm.dylib` |
| 12.5% |       1 | `LinearScanWalker::split_before_usage`       | `libjvm.dylib` |
| 12.5% |       1 | `Interval::new_split_child`                  | `libjvm.dylib` |

##### `PhaseIterGVN::add_users_to_worklist` (`libjvm.dylib`)

|     % | Samples | Caller                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 37.5% |       3 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |
| 25.0% |       2 | `PhaseIterGVN::PhaseIterGVN`  | `libjvm.dylib` |
| 12.5% |       1 | `IfNode::dominated_by`        | `libjvm.dylib` |
| 12.5% |       1 | `Node::remove_dead_region`    | `libjvm.dylib` |
| 12.5% |       1 | `Compile::Optimize`           | `libjvm.dylib` |

##### `Unique_Node_List::remove` (`libjvm.dylib`)

|      % | Samples | Caller                                    | Location       |
| -----: | ------: | ----------------------------------------- | -------------- |
| 100.0% |       8 | `PhaseIterGVN::remove_globally_dead_node` | `libjvm.dylib` |

##### `sys_icache_invalidate` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 37.5% |       3 | `CompiledIC::set_to_monomorphic`              | `libjvm.dylib` |
| 25.0% |       2 | `nmethod::oops_do_process_weak`               | `libjvm.dylib` |
| 12.5% |       1 | `CodeCache::make_marked_nmethods_deoptimized` | `libjvm.dylib` |
| 12.5% |       1 | `nmethod::nmethod`                            | `libjvm.dylib` |
| 12.5% |       1 | `CodeBuffer::copy_code_to`                    | `libjvm.dylib` |

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 28.6% |       2 | `ciBytecodeStream::get_method`   | `libjvm.dylib` |
| 28.6% |       2 | `ciEnv::get_klass_by_name_impl`  | `libjvm.dylib` |
| 28.6% |       2 | `ciEnv::get_klass_by_index_impl` | `libjvm.dylib` |
| 14.3% |       1 | `ciMethod::ensure_method_data`   | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       7 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compile::identify_useful_nodes` (`libjvm.dylib`)

|     % | Samples | Caller                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 71.4% |       5 | `PhaseRemoveUseless::PhaseRemoveUseless`      | `libjvm.dylib` |
| 28.6% |       2 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       6 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseLive::add_liveout` (`libjvm.dylib`)

|      % | Samples | Caller               | Location       |
| -----: | ------: | -------------------- | -------------- |
| 100.0% |       6 | `PhaseLive::compute` | `libjvm.dylib` |

##### `LIR_OpVisitState::visit` (`libjvm.dylib`)

|     % | Samples | Caller                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 50.0% |       3 | `LinearScan::assign_reg_num`  | `libjvm.dylib` |
| 33.3% |       2 | `LinearScan::do_linear_scan`  | `libjvm.dylib` |
| 16.7% |       1 | `LinearScan::build_intervals` | `libjvm.dylib` |

##### `Arena::contains` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       6 | `Matcher::xform` | `libjvm.dylib` |

##### `_platform_memmove` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                    | Location        |
| ----: | ------: | ----------------------------------------- | --------------- |
| 33.3% |       2 | `inflate`                                 | `libzip.dylib`  |
| 16.7% |       1 | `PhaseIdealLoop::set_idom`                | `libjvm.dylib`  |
| 16.7% |       1 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib` |
| 16.7% |       1 | `PhaseOutput::Output`                     | `libjvm.dylib`  |
| 16.7% |       1 | `CompileBroker::update_compile_perf_data` | `libjvm.dylib`  |

##### `inflate` (`libzip.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |       6 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|     % | Samples | Caller                                                                                                                              | Location                                                           |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| 16.7% |       1 | `stringHashCode(CharSequence)`                                                                                                      | `com.intellij.openapi.util.text.StringUtil`                        |
| 16.7% |       1 | `equals(Object)`                                                                                                                    | `org.jetbrains.kotlin.load.java.structure.impl.JavaElementImpl`    |
| 16.7% |       1 | `loadFunction$default(FirMemberDeserializer, ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin, int, Object)` | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`   |
| 16.7% |       1 | `prepareImplicitArgument(ConeResolutionAtom, ConeKotlinType, FirSession)`                                                           | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStagesKt` |
| 16.7% |       1 | `getChild(KtSourceElement, Set, int, int, boolean)`                                                                                 | `org.jetbrains.kotlin.fir.analysis.FirSourceUtilsKt`               |

##### `Matcher::xform` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       5 | `Matcher::match` | `libjvm.dylib` |

##### `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |       5 | `PhaseIdealLoop::compute_lca_of_uses` | `libjvm.dylib` |

##### `IndexSet::initialize` (`libjvm.dylib`)

|     % | Samples | Caller               | Location       |
| ----: | ------: | -------------------- | -------------- |
| 60.0% |       3 | `PhaseIFG::init`     | `libjvm.dylib` |
| 40.0% |       2 | `PhaseLive::compute` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_virtual` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       5 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Node::dominates` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |       5 | `MemNode::all_controls_dominate` | `libjvm.dylib` |

##### `bsearch` (`libsystem_c.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |       5 | `encoding_for_logical_immediate` | `libjvm.dylib` |

##### `vmSymbols::find_sid` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |       5 | `ciObjectFactory::get_symbol` | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 20.0% |       1 | `Compile::Code_Gen`                   | `libjvm.dylib` |
| 20.0% |       1 | `MemAllocator::allocate`              | `libjvm.dylib` |
| 20.0% |       1 | `LinearScan::compute_local_live_sets` | `libjvm.dylib` |
| 20.0% |       1 | `Compilation::build_hir`              | `libjvm.dylib` |
| 20.0% |       1 | `GraphBuilder::iterate_all_blocks`    | `libjvm.dylib` |

##### `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|      % | Samples | Caller                                            | Location       |
| -----: | ------: | ------------------------------------------------- | -------------- |
| 100.0% |       5 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib` |

##### `inflate_table` (`libzip.dylib`)

|      % | Samples | Caller    | Location       |
| -----: | ------: | --------- | -------------- |
| 100.0% |       5 | `inflate` | `libzip.dylib` |

##### `sanitizeStackTrace(Throwable)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Caller                            | Location                         |
| -----: | ------: | --------------------------------- | -------------------------------- |
| 100.0% |       4 | `throwParameterIsNullNPE(String)` | `kotlin.jvm.internal.Intrinsics` |

##### `getNonDispatchParameters(IrFunction)` (`org.jetbrains.kotlin.ir.util.IrUtilsKt`)

|      % | Samples | Caller                                                | Location                                                         |
| -----: | ------: | ----------------------------------------------------- | ---------------------------------------------------------------- |
| 100.0% |       2 | `mapSignature(IrFunction, boolean, boolean, boolean)` | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.LinkedHashMap`)

|      % | Samples | Caller                                          | Location            |
| -----: | ------: | ----------------------------------------------- | ------------------- |
| 100.0% |       2 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `equals(Object)` (`java.lang.Object`)

|      % | Samples | Caller                     | Location                         |
| -----: | ------: | -------------------------- | -------------------------------- |
| 100.0% |       2 | `areEqual(Object, Object)` | `kotlin.jvm.internal.Intrinsics` |

##### `next()` (`java.util.ArrayList$Itr`)

|     % | Samples | Caller                                                      | Location                                                           |
| ----: | ------: | ----------------------------------------------------------- | ------------------------------------------------------------------ |
| 50.0% |       1 | `zip(Iterable, Object[])`                                   | `kotlin.collections.CollectionsKt___CollectionsKt`                 |
| 50.0% |       1 | `convertFunctionContent(IrFunction, FirFunction, FirClass)` | `org.jetbrains.kotlin.fir.backend.generators.ClassMemberGenerator` |

##### `I2C/C2I adapters(0xba)` (`<unknown>`)

|     % | Samples | Caller                              | Location                                                  |
| ----: | ------: | ----------------------------------- | --------------------------------------------------------- |
| 50.0% |       1 | `computeIfAbsent(Object, Function)` | `java.util.concurrent.ConcurrentHashMap`                  |
| 50.0% |       1 | `get(int)`                          | `org.jetbrains.kotlin.metadata.deserialization.TypeTable` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|     % | Samples | Caller                                                     | Location                                                          |
| ----: | ------: | ---------------------------------------------------------- | ----------------------------------------------------------------- |
| 50.0% |       1 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.PerformByIrFilePhase` |
| 50.0% |       1 | `serializeAnnotation(ClassId, Map)`                        | `org.jetbrains.kotlin.fir.serialization.FirAnnotationSerializer`  |

##### `find(int)` (`it.unimi.dsi.fastutil.ints.Int2ObjectOpenHashMap`)

|      % | Samples | Caller             | Location                                           |
| -----: | ------: | ------------------ | -------------------------------------------------- |
| 100.0% |       1 | `put(int, Object)` | `it.unimi.dsi.fastutil.ints.Int2ObjectOpenHashMap` |

##### `rehash(int)` (`it.unimi.dsi.fastutil.objects.Reference2ObjectOpenHashMap`)

|      % | Samples | Caller                        | Location                                                    |
| -----: | ------: | ----------------------------- | ----------------------------------------------------------- |
| 100.0% |       1 | `insert(int, Object, Object)` | `it.unimi.dsi.fastutil.objects.Reference2ObjectOpenHashMap` |

##### `parseCentralDirectory$lambda$0(Ref$LongRef, List, long, LargeDynamicMappedBuffer$Mapping)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`)

|      % | Samples | Caller           | Location                                                                                     |
| -----: | ------: | ---------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `invoke(Object)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x0000008001393810` |

##### `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function`)

|      % | Samples | Caller                                                        | Location                                          |
| -----: | ------: | ------------------------------------------------------------- | ------------------------------------------------- |
| 100.0% |       1 | `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Function` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`)

|      % | Samples | Caller                                                      | Location                                            |
| -----: | ------: | ----------------------------------------------------------- | --------------------------------------------------- |
| 100.0% |       1 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Function$1` |

##### `convertCallExpression(LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`)

|      % | Samples | Caller                                      | Location                                                                        |
| -----: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------- |
| 100.0% |       1 | `getAsFirStatement(LighterASTNode, String)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder` |

##### `getLineBreakCount(CharSequence)` (`com.intellij.openapi.util.text.StringUtil`)

|      % | Samples | Caller                                                                         | Location                                               |
| -----: | ------: | ------------------------------------------------------------------------------ | ------------------------------------------------------ |
| 100.0% |       1 | `getEdgePosition(List, boolean, WhitespacesAndCommentsBinder$TokenTextGetter)` | `org.jetbrains.kotlin.parsing.PrecedingCommentsBinder` |

##### `getLexemeIndexAt(int)` (`com.intellij.lang.impl.MarkerProduction`)

|      % | Samples | Caller                               | Location                                  |
| -----: | ------: | ------------------------------------ | ----------------------------------------- |
| 100.0% |       1 | `findSameLexemeGroupStart(int, int)` | `com.intellij.lang.impl.MarkerProduction` |

##### `getShouldBindSubject()` (`org.jetbrains.kotlin.fir.lightTree.fir.WhenEntry`)

|      % | Samples | Caller                                  | Location                                                                        |
| -----: | ------: | --------------------------------------- | ------------------------------------------------------------------------------- |
| 100.0% |       1 | `convertWhenExpression(LighterASTNode)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder` |

##### `shiftOverWhitespaceForward(int)` (`com.intellij.lang.impl.PsiBuilderImpl`)

|      % | Samples | Caller           | Location                                |
| -----: | ------: | ---------------- | --------------------------------------- |
| 100.0% |       1 | `lookAhead(int)` | `com.intellij.lang.impl.PsiBuilderImpl` |

##### `removeLast(List)` (`org.jetbrains.kotlin.fir.builder.AbstractRawFirBuilder`)

|      % | Samples | Caller              | Location    |
| -----: | ------: | ------------------- | ----------- |
| 100.0% |       1 | `break_stack_range` | `<unknown>` |

##### `<init>()` (`org.jetbrains.kotlin.fir.symbols.impl.FirVariableSymbol`)

|      % | Samples | Caller                             | Location                                                  |
| -----: | ------: | ---------------------------------- | --------------------------------------------------------- |
| 100.0% |       1 | `<init>(DefaultConstructorMarker)` | `org.jetbrains.kotlin.fir.symbols.impl.FirVariableSymbol` |

##### `tokenMatches(IElementType, IElementType)` (`org.jetbrains.kotlin.parsing.AbstractKotlinParsing`)

|      % | Samples | Caller              | Location                                             |
| -----: | ------: | ------------------- | ---------------------------------------------------- |
| 100.0% |       1 | `_at(IElementType)` | `org.jetbrains.kotlin.parsing.AbstractKotlinParsing` |

##### `traverseDirectoriesInPackage(FqName, Set, Function2)` (`org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesIndexImpl`)

|      % | Samples | Caller                                                 | Location                                                                 |
| -----: | ------: | ------------------------------------------------------ | ------------------------------------------------------------------------ |
| 100.0% |       1 | `traverseDirectoriesInPackage(FqName, Set, Function2)` | `org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesDynamicCompoundIndex` |

##### `registerAllExtensions(ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.jvm.JvmProtoBuf`)

|      % | Samples | Caller                                               | Location                                                            |
| -----: | ------: | ---------------------------------------------------- | ------------------------------------------------------------------- |
| 100.0% |       1 | `EXTENSION_REGISTRY$lambda$0(ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.jvm.deserialization.JvmProtoBufUtil` |

##### `<init>(NameResolver, TypeTable, VersionRequirementTable, FirModuleData, FqName, FqName, FirTypeDeserializer, AnnotationDeserializer, FirConstDeserializer, FirKDocDeserializer, DeserializedContainerSource, FirRegularClassSymbol, List)` (`org.jetbrains.kotlin.fir.deserialization.FirDeserializationContext`)

|      % | Samples | Caller                                                                                                                                                                                                                                                                                                          | Location                                                                       |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 100.0% |       1 | `createRootContext(NameResolver, TypeTable, FirModuleData, VersionRequirementTable, AnnotationDeserializer, FirTypeDeserializer$FlexibleTypeFactory, FirConstDeserializer, FirKDocDeserializer, FqName, FqName, List, DeserializedContainerSource, FirRegularClassSymbol, EffectiveVisibility, FirBasedSymbol)` | `org.jetbrains.kotlin.fir.deserialization.FirDeserializationContext$Companion` |

##### `stringsToBytes(String[])` (`org.jetbrains.kotlin.metadata.jvm.deserialization.UtfEncodingKt`)

|      % | Samples | Caller                  | Location                                                        |
| -----: | ------: | ----------------------- | --------------------------------------------------------------- |
| 100.0% |       1 | `decodeBytes(String[])` | `org.jetbrains.kotlin.metadata.jvm.deserialization.BitEncoding` |

##### `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`)

|      % | Samples | Caller                                  | Location                                                            |
| -----: | ------: | --------------------------------------- | ------------------------------------------------------------------- |
| 100.0% |       1 | `mayHaveTopLevelCallable(FqName, Name)` | `org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider` |

##### `toExpandedRecordsList(List)` (`org.jetbrains.kotlin.metadata.jvm.deserialization.JvmNameResolverKt`)

|      % | Samples | Caller                                           | Location                                                            |
| -----: | ------: | ------------------------------------------------ | ------------------------------------------------------------------- |
| 100.0% |       1 | `<init>(JvmProtoBuf$StringTableTypes, String[])` | `org.jetbrains.kotlin.metadata.jvm.deserialization.JvmNameResolver` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Caller                   | Location                            |
| -----: | ------: | ------------------------ | ----------------------------------- |
| 100.0% |       1 | `read(byte[], int, int)` | `java.util.zip.InflaterInputStream` |

##### `resize()` (`java.util.HashMap`)

|      % | Samples | Caller                                          | Location            |
| -----: | ------: | ----------------------------------------------- | ------------------- |
| 100.0% |       1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `nextNode()` (`java.util.HashMap$HashIterator`)

|      % | Samples | Caller   | Location                          |
| -----: | ------: | -------- | --------------------------------- |
| 100.0% |       1 | `next()` | `java.util.HashMap$ValueIterator` |

##### `checkAndAddEntry(int, int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|      % | Samples | Caller                   | Location                       |
| -----: | ------: | ------------------------ | ------------------------------ |
| 100.0% |       1 | `initCEN(int, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `invoke(Object, Method, Object[])` (`sun.reflect.annotation.AnnotationInvocationHandler`)

|      % | Samples | Caller             | Location             |
| -----: | ------: | ------------------ | -------------------- |
| 100.0% |       1 | `deprecatedName()` | `jdk.proxy2.$Proxy1` |

##### `<init>(Label)` (`jdk.internal.org.objectweb.asm.Frame`)

|      % | Samples | Caller              | Location                                      |
| -----: | ------: | ------------------- | --------------------------------------------- |
| 100.0% |       1 | `visitLabel(Label)` | `jdk.internal.org.objectweb.asm.MethodWriter` |

##### `getAnnotation(Class)` (`java.lang.reflect.Executable`)

|      % | Samples | Caller                 | Location                   |
| -----: | ------: | ---------------------- | -------------------------- |
| 100.0% |       1 | `getAnnotation(Class)` | `java.lang.reflect.Method` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

|      % | Samples | Caller                          | Location           |
| -----: | ------: | ------------------------------- | ------------------ |
| 100.0% |       1 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `addType(String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|      % | Samples | Caller                                   | Location                               |
| -----: | ------: | ---------------------------------------- | -------------------------------------- |
| 100.0% |       1 | `execute(int, int, Symbol, SymbolTable)` | `jdk.internal.org.objectweb.asm.Frame` |

##### `visit(int, int, String, String, String, String[])` (`jdk.internal.org.objectweb.asm.ClassWriter`)

|      % | Samples | Caller                | Location                                    |
| -----: | ------: | --------------------- | ------------------------------------------- |
| 100.0% |       1 | `classFilePrologue()` | `java.lang.invoke.InvokerBytecodeGenerator` |

##### `<init>()` (`java.util.HashMap`)

|      % | Samples | Caller          | Location                             |
| -----: | ------: | --------------- | ------------------------------------ |
| 100.0% |       1 | `parse(String)` | `com.intellij.util.lang.JavaVersion` |

##### `linkToTargetMethod(Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                                        | Location                           |
| -----: | ------: | --------------------------------------------- | ---------------------------------- |
| 100.0% |       1 | `iteratorOf(JrtPath, DirectoryStream$Filter)` | `jdk.internal.jrtfs.JrtFileSystem` |

##### `getResourceBuffer(ImageLocation)` (`jdk.internal.jimage.BasicImageReader`)

|      % | Samples | Caller                       | Location                               |
| -----: | ------: | ---------------------------- | -------------------------------------- |
| 100.0% |       1 | `getResource(ImageLocation)` | `jdk.internal.jimage.BasicImageReader` |

##### `newByteChannel(Path, Set, FileAttribute[])` (`java.nio.file.Files`)

|      % | Samples | Caller                               | Location              |
| -----: | ------: | ------------------------------------ | --------------------- |
| 100.0% |       1 | `newByteChannel(Path, OpenOption[])` | `java.nio.file.Files` |

##### `get(Object)` (`java.util.concurrent.ConcurrentHashMap`)

|      % | Samples | Caller                    | Location                             |
| -----: | ------: | ------------------------- | ------------------------------------ |
| 100.0% |       1 | `getNoCheckStale(Object)` | `jdk.internal.util.ReferencedKeyMap` |

##### `I2C/C2I adapters(0xbba)` (`<unknown>`)

|      % | Samples | Caller      | Location            |
| -----: | ------: | ----------- | ------------------- |
| 100.0% |       1 | `toArray()` | `java.util.HashSet` |

##### `I2C/C2I adapters(0xbbbb)` (`<unknown>`)

|      % | Samples | Caller                                       | Location                                                                                   |
| -----: | ------: | -------------------------------------------- | ------------------------------------------------------------------------------------------ |
| 100.0% |       1 | `<init>(CheckerContext, DiagnosticReporter)` | `org.jetbrains.kotlin.fir.analysis.checkers.extra.FirUnusedExpressionChecker$UsageVisitor` |

##### `vtable stub` (`<unknown>`)

|      % | Samples | Caller                          | Location                                                  |
| -----: | ------: | ------------------------------- | --------------------------------------------------------- |
| 100.0% |       1 | `getHasNoInfer(ConeKotlinType)` | `org.jetbrains.kotlin.fir.types.CompilerConeAttributesKt` |

##### `I2C/C2I adapters(0xbbb)` (`<unknown>`)

|      % | Samples | Caller                        | Location                                         |
| -----: | ------: | ----------------------------- | ------------------------------------------------ |
| 100.0% |       1 | `visitThrow(IrThrow, Object)` | `org.jetbrains.kotlin.ir.visitors.IrTransformer` |

##### `I2C/C2I adapters(0xbaaaab)` (`<unknown>`)

|      % | Samples | Caller       | Location                            |
| -----: | ------: | ------------ | ----------------------------------- |
| 100.0% |       1 | `asString()` | `org.jetbrains.kotlin.name.ClassId` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                                                                                           | Location                                                |
| ----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 66.8% |     912 | `_pthread_start`                                                                                   | `libsystem_pthread.dylib`                               |
| 66.8% |     912 | `thread_start`                                                                                     | `libsystem_pthread.dylib`                               |
| 66.7% |     911 | `Thread::call_run`                                                                                 | `libjvm.dylib`                                          |
| 66.7% |     911 | `thread_native_entry`                                                                              | `libjvm.dylib`                                          |
| 61.3% |     838 | `JavaThread::thread_main_inner`                                                                    | `libjvm.dylib`                                          |
| 61.1% |     835 | `CompileBroker::compiler_thread_loop`                                                              | `libjvm.dylib`                                          |
| 59.4% |     812 | `CompileBroker::invoke_compiler_on_method`                                                         | `libjvm.dylib`                                          |
| 40.0% |     546 | `Compile::Compile`                                                                                 | `libjvm.dylib`                                          |
| 40.0% |     546 | `C2Compiler::compile_method`                                                                       | `libjvm.dylib`                                          |
| 32.6% |     445 | `run(String[])`                                                                                    | `org.jetbrains.kotlin.preloading.Preloader`             |
| 32.6% |     445 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.preloading.Preloader`             |
| 27.0% |     369 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 27.0% |     369 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 27.0% |     369 | `invokeStatic(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$DMH.0x0000008001008400`    |
| 27.0% |     369 | `invoke(Object, Object, Object)`                                                                   | `java.lang.invoke.LambdaForm$MH.0x0000008001009800`     |
| 27.0% |     369 | `invokeExact_MT(Object, Object, Object, Object)`                                                   | `java.lang.invoke.Invokers$Holder`                      |
| 27.0% |     369 | `invokeImpl(Object, Object[])`                                                                     | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 27.0% |     369 | `invoke(Object, Object[])`                                                                         | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 27.0% |     369 | `invoke(Object, Object[])`                                                                         | `java.lang.reflect.Method`                              |
| 26.9% |     367 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Compiler

|     % | Samples | Function                                    | Location       |
| ----: | ------: | ------------------------------------------- | -------------- |
| 61.1% |     835 | `CompileBroker::compiler_thread_loop`       | `libjvm.dylib` |
| 59.4% |     812 | `CompileBroker::invoke_compiler_on_method`  | `libjvm.dylib` |
| 40.0% |     546 | `Compile::Compile`                          | `libjvm.dylib` |
| 40.0% |     546 | `C2Compiler::compile_method`                | `libjvm.dylib` |
| 19.8% |     270 | `Compile::Code_Gen`                         | `libjvm.dylib` |
| 18.7% |     256 | `Compilation::compile_method`               | `libjvm.dylib` |
| 18.7% |     256 | `Compilation::Compilation`                  | `libjvm.dylib` |
| 16.8% |     230 | `Compilation::compile_java_method`          | `libjvm.dylib` |
| 14.6% |     200 | `Compile::Optimize`                         | `libjvm.dylib` |
| 10.4% |     142 | `PhaseChaitin::Register_Allocate`           | `libjvm.dylib` |
|  8.3% |     114 | `PhaseIdealLoop::optimize`                  | `libjvm.dylib` |
|  7.4% |     101 | `PhaseIdealLoop::PhaseIdealLoop`            | `libjvm.dylib` |
|  7.3% |     100 | `PhaseIdealLoop::build_and_optimize`        | `libjvm.dylib` |
|  6.5% |      89 | `Compilation::build_hir`                    | `libjvm.dylib` |
|  6.4% |      88 | `Compilation::emit_lir`                     | `libjvm.dylib` |
|  5.2% |      71 | `GraphBuilder::GraphBuilder`                | `libjvm.dylib` |
|  5.1% |      70 | `LinearScan::do_linear_scan`                | `libjvm.dylib` |
|  4.6% |      63 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |
|  4.6% |      63 | `GraphBuilder::iterate_all_blocks`          | `libjvm.dylib` |
|  4.0% |      54 | `GraphBuilder::invoke`                      | `libjvm.dylib` |

##### Native

|     % | Samples | Function                                        | Location                  |
| ----: | ------: | ----------------------------------------------- | ------------------------- |
| 66.8% |     912 | `_pthread_start`                                | `libsystem_pthread.dylib` |
| 66.8% |     912 | `thread_start`                                  | `libsystem_pthread.dylib` |
| 66.7% |     911 | `Thread::call_run`                              | `libjvm.dylib`            |
| 66.7% |     911 | `thread_native_entry`                           | `libjvm.dylib`            |
| 61.3% |     838 | `JavaThread::thread_main_inner`                 | `libjvm.dylib`            |
| 18.8% |     257 | `Compiler::compile_method`                      | `libjvm.dylib`            |
|  5.2% |      71 | `IRScope::IRScope`                              | `libjvm.dylib`            |
|  5.2% |      71 | `IR::IR`                                        | `libjvm.dylib`            |
|  5.0% |      68 | `WorkerThread::run`                             | `libjvm.dylib`            |
|  4.8% |      65 | `Parse::Parse`                                  | `libjvm.dylib`            |
|  4.8% |      65 | `ParseGenerator::generate`                      | `libjvm.dylib`            |
|  4.6% |      63 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib`            |
|  4.5% |      62 | `Java_java_lang_ClassLoader_defineClass1`       | `libjava.dylib`           |
|  4.5% |      61 | `Parse::do_one_block`                           | `libjvm.dylib`            |
|  4.5% |      61 | `Parse::do_all_blocks`                          | `libjvm.dylib`            |
|  4.4% |      60 | `KlassFactory::create_from_stream`              | `libjvm.dylib`            |
|  4.4% |      60 | `SystemDictionary::resolve_class_from_stream`   | `libjvm.dylib`            |
|  4.4% |      60 | `jvm_define_class_common`                       | `libjvm.dylib`            |
|  4.4% |      60 | `JVM_DefineClassWithSource`                     | `libjvm.dylib`            |
|  4.2% |      57 | `ClassFileParser::ClassFileParser`              | `libjvm.dylib`            |

##### Ours

|     % | Samples | Function                                                                                                                                      | Location                                                |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 32.6% |     445 | `run(String[])`                                                                                                                               | `org.jetbrains.kotlin.preloading.Preloader`             |
| 32.6% |     445 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`             |
| 27.0% |     369 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 27.0% |     369 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 26.9% |     367 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 26.9% |     367 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 26.8% |     366 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 26.8% |     366 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 26.8% |     366 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 26.4% |     361 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 25.9% |     354 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 25.9% |     354 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 25.9% |     354 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 25.8% |     353 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 25.8% |     353 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 25.8% |     353 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 25.7% |     351 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 25.6% |     350 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
| 25.6% |     350 | `phaseBody(LoggingContext, Object)`                                                                                                           | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
| 25.6% |     350 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### Standard library

|     % | Samples | Function                                                                        | Location                                              |
| ----: | ------: | ------------------------------------------------------------------------------- | ----------------------------------------------------- |
| 27.0% |     369 | `invokeStatic(Object, Object)`                                                  | `java.lang.invoke.LambdaForm$DMH.0x0000008001008400`  |
| 27.0% |     369 | `invoke(Object, Object, Object)`                                                | `java.lang.invoke.LambdaForm$MH.0x0000008001009800`   |
| 27.0% |     369 | `invokeExact_MT(Object, Object, Object, Object)`                                | `java.lang.invoke.Invokers$Holder`                    |
| 27.0% |     369 | `invokeImpl(Object, Object[])`                                                  | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 27.0% |     369 | `invoke(Object, Object[])`                                                      | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 27.0% |     369 | `invoke(Object, Object[])`                                                      | `java.lang.reflect.Method`                            |
|  5.3% |      72 | `loadClass(String, boolean)`                                                    | `java.lang.ClassLoader`                               |
|  5.1% |      69 | `read(byte[], int, int)`                                                        | `java.util.zip.ZipInputStream`                        |
|  5.1% |      69 | `read(byte[])`                                                                  | `java.io.FilterInputStream`                           |
|  4.8% |      65 | `read(byte[], int, int)`                                                        | `java.util.zip.InflaterInputStream`                   |
|  4.8% |      65 | `defineClass(String, byte[], int, int, ProtectionDomain)`                       | `java.lang.ClassLoader`                               |
|  4.8% |      65 | `defineClass(String, byte[], int, int)`                                         | `java.lang.ClassLoader`                               |
|  4.7% |      64 | `inflate(byte[], int, int)`                                                     | `java.util.zip.Inflater`                              |
|  4.6% |      63 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                   | `java.util.zip.Inflater`                              |
|  4.5% |      62 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                               |
|  3.5% |      48 | `resumeWith(Object)`                                                            | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |
|  1.3% |      18 | `getValue()`                                                                    | `kotlin.SynchronizedLazyImpl`                         |
|  1.0% |      13 | `checkNotNullParameter(Object, String)`                                         | `kotlin.jvm.internal.Intrinsics`                      |
|  0.9% |      12 | `getValue()`                                                                    | `kotlin.SafePublicationLazyImpl`                      |
|  0.7% |       9 | `buildCallSite()`                                                               | `java.lang.invoke.InnerClassLambdaMetafactory`        |

##### JIT

|    % | Samples | Function                     | Location    |
| ---: | ------: | ---------------------------- | ----------- |
| 0.4% |       6 | `I2C/C2I adapters(0xb)`      | `<unknown>` |
| 0.1% |       2 | `I2C/C2I adapters(0xba)`     | `<unknown>` |
| 0.1% |       2 | `I2C/C2I adapters(0xbb)`     | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbba)`    | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbbb)`   | `<unknown>` |
| 0.1% |       1 | `vtable stub`                | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbb)`    | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbaaaab)` | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Caller         | Location                  |
| -----: | ------: | -------------- | ------------------------- |
| 100.0% |     912 | `thread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |     911 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Caller           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |     911 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     838 | `Thread::call_run` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |     835 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |     812 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |     546 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |     546 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % | Samples | Caller           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |     445 | `main(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|      % | Samples | Caller           | Location                                     |
| -----: | ------: | ---------------- | -------------------------------------------- |
| 100.0% |     369 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Caller                         | Location                                             |
| -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% |     369 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000008001008400` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008001008400`)

|      % | Samples | Caller                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     369 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000008001009800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000008001009800`)

|      % | Samples | Caller                                           | Location                           |
| -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% |     369 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                         | Location                                          |
| -----: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% |     369 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Caller                     | Location                                          |
| -----: | ------: | -------------------------- | ------------------------------------------------- |
| 100.0% |     369 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Caller                     | Location                   |
| -----: | ------: | -------------------------- | -------------------------- |
| 100.0% |     369 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % | Samples | Caller                                                                            | Location                                                                                  |
| -----: | ------: | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% |     369 | `run(String[])`                                                                   | `org.jetbrains.kotlin.preloading.Preloader`                                               |
|   0.3% |       1 | `parsePreprocessedCommandLineArguments(List, CommonToolArguments, Lazy, boolean)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt`                   |
|   0.3% |       1 | `loadGetRecordComponents(Class)`                                                  | `kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure.Java16SealedRecordLoader` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Caller                          | Location                                                |
| -----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 100.0% |     367 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Caller           | Location                                               |
| -----: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% |     367 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                         | Location                                      |
| -----: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% |     366 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                                 | Location                                                |
| -----: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 100.0% |     366 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Caller                                                                                             | Location                                                |
| -----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     366 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                                   | Location                                      |
| -----: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 100.0% |     361 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Caller                                                                 | Location                                     |
| -----: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     354 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Caller                                                          | Location                                      |
| -----: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| 100.0% |     354 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                                      | Location                                      |
| -----: | ------: | ----------------------------------------------------------- | --------------------------------------------- |
| 100.0% |     354 | `exec(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                                                                                                        | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     353 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                         | Location                                                |
| -----: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     353 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                                | Location                                     |
| -----: | ------: | --------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     353 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                                                              | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     351 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Caller                              | Location                                          |
| -----: | ------: | ----------------------------------- | ------------------------------------------------- |
| 100.0% |     350 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Caller                                                     | Location                                                |
| -----: | ------: | ---------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     350 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % | Samples | Caller                                                                | Location                                                          |
| -----: | ------: | --------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 100.0% |     350 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`            | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase`       |
|   5.7% |      20 | `invoke(PhaseConfig, PhaserState, LoweringContext, IrModuleFragment)` | `org.jetbrains.kotlin.backend.common.phaser.PerformByIrFilePhase` |
|   2.0% |       7 | `runPhase(NamedCompilerPhase, Object, boolean)`                       | `org.jetbrains.kotlin.backend.common.phaser.PhaseEngine`          |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     270 | `Compile::Compile` | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |     257 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     256 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     256 | `Compiler::compile_method` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |     230 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     200 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |     142 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 60.5% |      69 | `Compile::Optimize`       | `libjvm.dylib` |
| 39.5% |      45 | `Compile::optimize_loops` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     101 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |     100 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      89 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      88 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|     % | Samples | Caller                       | Location                                                 |
| ----: | ------: | ---------------------------- | -------------------------------------------------------- |
| 98.6% |      71 | `loadClass(String, boolean)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  1.4% |       1 | `loadClass(String)`          | `java.lang.ClassLoader`                                  |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      71 | `IRScope::IRScope` | `libjvm.dylib` |

##### `IRScope::IRScope` (`libjvm.dylib`)

|      % | Samples | Caller   | Location       |
| -----: | ------: | -------- | -------------- |
| 100.0% |      71 | `IR::IR` | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |      71 | `Compilation::build_hir` | `libjvm.dylib` |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

|      % | Samples | Caller                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |      70 | `Compilation::emit_lir` | `libjvm.dylib` |

##### `read(byte[], int, int)` (`java.util.zip.ZipInputStream`)

|      % | Samples | Caller         | Location                    |
| -----: | ------: | -------------- | --------------------------- |
| 100.0% |      69 | `read(byte[])` | `java.io.FilterInputStream` |

##### `read(byte[])` (`java.io.FilterInputStream`)

|      % | Samples | Caller                                                  | Location                                               |
| -----: | ------: | ------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |      69 | `loadAllClassesFromJars(Collection, int, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `WorkerThread::run` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      68 | `Thread::call_run` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      65 | `ParseGenerator::generate` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      65 | `Compile::Compile`                 | `libjvm.dylib` |
|  53.8% |      35 | `PredictedCallGenerator::generate` | `libjvm.dylib` |
|  52.3% |      34 | `Parse::do_call`                   | `libjvm.dylib` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

|      % | Samples | Caller                   | Location                       |
| -----: | ------: | ------------------------ | ------------------------------ |
| 100.0% |      65 | `read(byte[], int, int)` | `java.util.zip.ZipInputStream` |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

|      % | Samples | Caller                                  | Location                |
| -----: | ------: | --------------------------------------- | ----------------------- |
| 100.0% |      65 | `defineClass(String, byte[], int, int)` | `java.lang.ClassLoader` |

##### `defineClass(String, byte[], int, int)` (`java.lang.ClassLoader`)

|      % | Samples | Caller              | Location                                                 |
| -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% |      65 | `findClass(String)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Caller                   | Location                            |
| -----: | ------: | ------------------------ | ----------------------------------- |
| 100.0% |      64 | `read(byte[], int, int)` | `java.util.zip.InflaterInputStream` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      63 | `GraphBuilder::iterate_all_blocks` | `libjvm.dylib` |

##### `GraphBuilder::iterate_all_blocks` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |      63 | `GraphBuilder::GraphBuilder`    | `libjvm.dylib` |
|  55.6% |      35 | `GraphBuilder::try_inline_full` | `libjvm.dylib` |

##### `Java_java_util_zip_Inflater_inflateBytesBytes` (`libzip.dylib`)

|      % | Samples | Caller                                                        | Location                 |
| -----: | ------: | ------------------------------------------------------------- | ------------------------ |
| 100.0% |      63 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Caller                      | Location                 |
| -----: | ------: | --------------------------- | ------------------------ |
| 100.0% |      63 | `inflate(byte[], int, int)` | `java.util.zip.Inflater` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|      % | Samples | Caller                                                                          | Location                |
| -----: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| 100.0% |      62 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|      % | Samples | Caller                                                    | Location                |
| -----: | ------: | --------------------------------------------------------- | ----------------------- |
| 100.0% |      62 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|      % | Samples | Caller                 | Location       |
| -----: | ------: | ---------------------- | -------------- |
| 100.0% |      61 | `Parse::do_all_blocks` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % | Samples | Caller         | Location       |
| -----: | ------: | -------------- | -------------- |
| 100.0% |      61 | `Parse::Parse` | `libjvm.dylib` |

##### `KlassFactory::create_from_stream` (`libjvm.dylib`)

|     % | Samples | Caller                                               | Location       |
| ----: | ------: | ---------------------------------------------------- | -------------- |
| 93.3% |      56 | `SystemDictionary::resolve_class_from_stream`        | `libjvm.dylib` |
|  3.3% |       2 | `ClassLoader::load_class`                            | `libjvm.dylib` |
|  3.3% |       2 | `SystemDictionary::resolve_hidden_class_from_stream` | `libjvm.dylib` |

##### `SystemDictionary::resolve_class_from_stream` (`libjvm.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |      60 | `jvm_define_class_common` | `libjvm.dylib` |

##### `jvm_define_class_common` (`libjvm.dylib`)

|      % | Samples | Caller                      | Location       |
| -----: | ------: | --------------------------- | -------------- |
| 100.0% |      60 | `JVM_DefineClassWithSource` | `libjvm.dylib` |

##### `JVM_DefineClassWithSource` (`libjvm.dylib`)

|      % | Samples | Caller                                    | Location        |
| -----: | ------: | ----------------------------------------- | --------------- |
| 100.0% |      60 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib` |

##### `ClassFileParser::ClassFileParser` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      57 | `KlassFactory::create_from_stream` | `libjvm.dylib` |

##### `GraphBuilder::invoke` (`libjvm.dylib`)

|      % | Samples | Caller                                      | Location       |
| -----: | ------: | ------------------------------------------- | -------------- |
| 100.0% |      54 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|     % | Samples | Caller                                                             | Location                                                              |
| ----: | ------: | ------------------------------------------------------------------ | --------------------------------------------------------------------- |
| 95.8% |      46 | `resumeTask(TowerResolveManager$SuspendedResolverTask)`            | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`    |
| 39.6% |      19 | `processCandidate(Candidate, ResolutionContext, boolean, boolean)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner` |
|  2.1% |       1 | `resumeCancellableWith(Continuation, Object, Function1)`           | `kotlinx.coroutines.internal.DispatchedContinuationKt`                |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

|     % | Samples | Caller                           | Location                                                           |
| ----: | ------: | -------------------------------- | ------------------------------------------------------------------ |
| 33.3% |       6 | `getSuperTypeRefs()`             | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass`          |
| 11.1% |       2 | `getAnnotations()`               | `org.jetbrains.kotlin.ir.descriptors.IrBasedDeclarationDescriptor` |
|  5.6% |       1 | `getDefaultPerformanceManager()` | `org.jetbrains.kotlin.cli.common.CLICompiler`                      |
|  5.6% |       1 | `getPathUtilJar()`               | `org.jetbrains.kotlin.utils.PathUtil`                              |
|  5.6% |       1 | `getMyChildren()`                | `org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile`          |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|    % | Samples | Caller                                                                                                                           | Location                                                                 |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 7.7% |       1 | `getOrCreateKotlinClass(Class)`                                                                                                  | `kotlin.reflect.jvm.internal.CachesKt`                                   |
| 7.7% |       1 | `toScopeBasedTowerLevel(FirScope, ReceiverValue, boolean, ConstructorFilter, CompanionExtensionPolicy, ExpressionReceiverValue)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`   |
| 7.7% |       1 | `<init>(FqName, FqName, Name)`                                                                                                   | `org.jetbrains.kotlin.name.CallableId`                                   |
| 7.7% |       1 | `addSubtypeConstraintIfCompatible(ConstraintSystemBuilder, KotlinTypeMarker, KotlinTypeMarker, ConstraintPosition)`              | `org.jetbrains.kotlin.resolve.calls.inference.ConstraintSystemBuilderKt` |
| 7.7% |       1 | `<init>(FqName, Name)`                                                                                                           | `org.jetbrains.kotlin.name.CallableId`                                   |

##### `getValue()` (`kotlin.SafePublicationLazyImpl`)

|     % | Samples | Caller                | Location                                                               |
| ----: | ------: | --------------------- | ---------------------------------------------------------------------- |
| 58.3% |       7 | `getJavaField()`      | `kotlin.reflect.jvm.internal.DescriptorKProperty`                      |
| 16.7% |       2 | `getCallablesIndex()` | `org.jetbrains.kotlin.fir.scopes.impl.FirClassDeclaredMemberScopeImpl` |
| 16.7% |       2 | `getImplicitScope()`  | `org.jetbrains.kotlin.fir.resolve.calls.ImplicitReceiverValue`         |
|  8.3% |       1 | `getQualifiedName()`  | `kotlin.reflect.jvm.internal.KClassImpl`                               |
|  8.3% |       1 | `getFirAnnotations()` | `org.jetbrains.kotlin.fir.java.enhancement.FirLazyJavaAnnotationList`  |

##### `buildCallSite()` (`java.lang.invoke.InnerClassLambdaMetafactory`)

|      % | Samples | Caller                                                                                        | Location                             |
| -----: | ------: | --------------------------------------------------------------------------------------------- | ------------------------------------ |
| 100.0% |       9 | `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` | `java.lang.invoke.LambdaMetafactory` |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|     % | Samples | Caller                                                                                                                              | Location                                                           |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| 16.7% |       1 | `stringHashCode(CharSequence)`                                                                                                      | `com.intellij.openapi.util.text.StringUtil`                        |
| 16.7% |       1 | `equals(Object)`                                                                                                                    | `org.jetbrains.kotlin.load.java.structure.impl.JavaElementImpl`    |
| 16.7% |       1 | `loadFunction$default(FirMemberDeserializer, ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin, int, Object)` | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`   |
| 16.7% |       1 | `prepareImplicitArgument(ConeResolutionAtom, ConeKotlinType, FirSession)`                                                           | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStagesKt` |
| 16.7% |       1 | `getChild(KtSourceElement, Set, int, int, boolean)`                                                                                 | `org.jetbrains.kotlin.fir.analysis.FirSourceUtilsKt`               |

##### `I2C/C2I adapters(0xba)` (`<unknown>`)

|     % | Samples | Caller                              | Location                                                  |
| ----: | ------: | ----------------------------------- | --------------------------------------------------------- |
| 50.0% |       1 | `computeIfAbsent(Object, Function)` | `java.util.concurrent.ConcurrentHashMap`                  |
| 50.0% |       1 | `get(int)`                          | `org.jetbrains.kotlin.metadata.deserialization.TypeTable` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|     % | Samples | Caller                                                     | Location                                                          |
| ----: | ------: | ---------------------------------------------------------- | ----------------------------------------------------------------- |
| 50.0% |       1 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.PerformByIrFilePhase` |
| 50.0% |       1 | `serializeAnnotation(ClassId, Map)`                        | `org.jetbrains.kotlin.fir.serialization.FirAnnotationSerializer`  |

##### `I2C/C2I adapters(0xbba)` (`<unknown>`)

|      % | Samples | Caller      | Location            |
| -----: | ------: | ----------- | ------------------- |
| 100.0% |       1 | `toArray()` | `java.util.HashSet` |

##### `I2C/C2I adapters(0xbbbb)` (`<unknown>`)

|      % | Samples | Caller                                       | Location                                                                                   |
| -----: | ------: | -------------------------------------------- | ------------------------------------------------------------------------------------------ |
| 100.0% |       1 | `<init>(CheckerContext, DiagnosticReporter)` | `org.jetbrains.kotlin.fir.analysis.checkers.extra.FirUnusedExpressionChecker$UsageVisitor` |

##### `vtable stub` (`<unknown>`)

|      % | Samples | Caller                          | Location                                                  |
| -----: | ------: | ------------------------------- | --------------------------------------------------------- |
| 100.0% |       1 | `getHasNoInfer(ConeKotlinType)` | `org.jetbrains.kotlin.fir.types.CompilerConeAttributesKt` |

##### `I2C/C2I adapters(0xbbb)` (`<unknown>`)

|      % | Samples | Caller                        | Location                                         |
| -----: | ------: | ----------------------------- | ------------------------------------------------ |
| 100.0% |       1 | `visitThrow(IrThrow, Object)` | `org.jetbrains.kotlin.ir.visitors.IrTransformer` |

##### `I2C/C2I adapters(0xbaaaab)` (`<unknown>`)

|      % | Samples | Caller       | Location                            |
| -----: | ------: | ------------ | ----------------------------------- |
| 100.0% |       1 | `asString()` | `org.jetbrains.kotlin.name.ClassId` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 99.9% |     911 | `thread_native_entry` | `libjvm.dylib` |
|  0.1% |       1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |     912 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 92.0% |     838 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  7.5% |      68 | `WorkerThread::run`             | `libjvm.dylib` |
|  0.5% |       5 | `VMThread::run`                 | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     911 | `Thread::call_run` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|     % | Samples | Callee                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 99.6% |     835 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |
|  0.4% |       3 | `ServiceThread::service_thread_entry` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location                   |
| ----: | ------: | ------------------------------------------ | -------------------------- |
| 97.2% |     812 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`             |
|  2.5% |      21 | `CompileQueue::get`                        | `libjvm.dylib`             |
|  0.1% |       1 | `CompileTaskWrapper::~CompileTaskWrapper`  | `libjvm.dylib`             |
|  0.1% |       1 | `_platform_strlen`                         | `libsystem_platform.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                                    | Location       |
| ----: | ------: | ----------------------------------------- | -------------- |
| 67.2% |     546 | `C2Compiler::compile_method`              | `libjvm.dylib` |
| 31.7% |     257 | `Compiler::compile_method`                | `libjvm.dylib` |
|  0.4% |       3 | `ciEnv::get_method_from_handle`           | `libjvm.dylib` |
|  0.4% |       3 | `ciEnv::ciEnv`                            | `libjvm.dylib` |
|  0.2% |       2 | `CompileBroker::update_compile_perf_data` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 49.5% |     270 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 36.6% |     200 | `Compile::Optimize`                      | `libjvm.dylib` |
| 11.9% |      65 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  1.1% |       6 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.5% |       3 | `CallGenerator::for_inline`              | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     546 | `Compile::Compile` | `libjvm.dylib` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|     % | Samples | Callee                                                                       | Location                                                 |
| ----: | ------: | ---------------------------------------------------------------------------- | -------------------------------------------------------- |
| 82.9% |     369 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                               |
| 16.9% |      75 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`   |
|  0.2% |       1 | `loadClass(String)`                                                          | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % | Samples | Callee          | Location                                    |
| -----: | ------: | --------------- | ------------------------------------------- |
| 100.0% |     445 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|     % | Samples | Callee                          | Location                                                |
| ----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 99.5% |     367 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.5% |       2 | `<init>()`                      | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee           | Location                                               |
| -----: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% |     369 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008001008400`)

|      % | Samples | Callee           | Location                                     |
| -----: | ------: | ---------------- | -------------------------------------------- |
| 100.0% |     369 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000008001009800`)

|      % | Samples | Callee                         | Location                                             |
| -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% |     369 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000008001008400` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     369 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000008001009800` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee                                           | Location                           |
| -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% |     369 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee                         | Location                                          |
| -----: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% |     369 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % | Samples | Callee                     | Location                                          |
| -----: | ------: | -------------------------- | ------------------------------------------------- |
| 100.0% |     369 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |
|   0.3% |       1 | `acquireMethodAccessor()`  | `java.lang.reflect.Method`                        |
|   0.3% |       1 | `isCallerSensitive()`      | `java.lang.reflect.Method`                        |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|     % | Samples | Callee                                                 | Location                                                |
| ----: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 99.7% |     366 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.3% |       1 | `defaultMessageRenderer()`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                                                                                             | Location                                                |
| -----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     367 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                                               | Location                                                                |
| ----: | ------: | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| 98.6% |     361 | `exec(MessageCollector, Services, CommonCompilerArguments)`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|  1.1% |       4 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |
|  0.3% |       1 | `loadClass(String)`                                                                  | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`                |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                                                   | Location                                      |
| -----: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 100.0% |     366 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                                         | Location                                      |
| -----: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% |     366 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                          | Location                                      |
| ----: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| 98.1% |     354 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |
|  1.9% |       7 | `<clinit>()`                                                    | `org.jetbrains.kotlin.cli.common.ArgumentsKt` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|     % | Samples | Callee                                                         | Location                                                |
| ----: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 99.7% |     353 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|  0.3% |       1 | `getDefaultPerformanceManager()`                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee                                                                | Location                                     |
| -----: | ------: | --------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     354 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                                                                 | Location                                     |
| -----: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     354 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                                                                                                | Location                                                      |
| ----: | ------: | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 99.4% |     351 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                        | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`       |
|  0.3% |       1 | `<init>(CommonCompilerArguments, Services, Disposable, GroupingMessageCollector, PerformanceManager)` | `org.jetbrains.kotlin.cli.pipeline.ArgumentsPipelineArtifact` |
|  0.3% |       1 | `disposeRootInWriteAction(Disposable)`                                                                | `org.jetbrains.kotlin.cli.common.UtilsKt`                     |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                                                                              | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     353 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                                                                                                                        | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     353 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                                                               | Location                                                 |
| ----: | ------: | -------------------------------------------------------------------- | -------------------------------------------------------- |
| 99.7% |     350 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`     |
|  0.3% |       1 | `loadClass(String)`                                                  | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|     % | Samples | Callee                           | Location                                                              |
| ----: | ------: | -------------------------------- | --------------------------------------------------------------------- |
| 66.9% |     234 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`      |
| 24.9% |      87 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`       |
|  7.1% |      25 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`        |
|  1.1% |       4 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmConfigurationPipelinePhase` |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Callee                                         | Location                                          |
| -----: | ------: | ---------------------------------------------- | ------------------------------------------------- |
| 100.0% |     350 | `phaseBody(PipelineContext, PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % | Samples | Callee                              | Location                                                         |
| -----: | ------: | ----------------------------------- | ---------------------------------------------------------------- |
| 100.0% |     350 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
|   5.7% |      20 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase`   |
|   2.0% |       7 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.ModuleLoweringPhase` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 52.6% |     142 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 19.6% |      53 | `Matcher::match`                  | `libjvm.dylib` |
| 12.2% |      33 | `PhaseOutput::Output`             | `libjvm.dylib` |
| 10.0% |      27 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  2.2% |       6 | `PhaseOutput::install_code`       | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 99.6% |     256 | `Compilation::Compilation`                     | `libjvm.dylib` |
|  0.4% |       1 | `ExceptionHandlerTable::ExceptionHandlerTable` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 89.8% |     230 | `Compilation::compile_java_method` | `libjvm.dylib` |
| 10.2% |      26 | `ciEnv::register_method`           | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |     256 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 38.7% |      89 | `Compilation::build_hir`       | `libjvm.dylib` |
| 38.3% |      88 | `Compilation::emit_lir`        | `libjvm.dylib` |
| 21.7% |      50 | `Compilation::emit_code_body`  | `libjvm.dylib` |
|  0.9% |       2 | `ciMethod::ensure_method_data` | `libjvm.dylib` |
|  0.4% |       1 | `FrameMap::FrameMap`           | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 34.5% |      69 | `PhaseIdealLoop::optimize`     | `libjvm.dylib` |
| 22.5% |      45 | `Compile::optimize_loops`      | `libjvm.dylib` |
| 13.0% |      26 | `PhaseIterGVN::optimize`       | `libjvm.dylib` |
|  9.5% |      19 | `PhaseCCP::PhaseCCP`           | `libjvm.dylib` |
|  4.0% |       8 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 17.6% |      25 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
| 14.8% |      21 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| 10.6% |      15 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
|  9.9% |      14 | `PhaseLive::compute`                       | `libjvm.dylib` |
|  8.5% |      12 | `PhaseChaitin::gather_lrg_masks`           | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 88.6% |     101 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| 11.4% |      13 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|     % | Samples | Callee                               | Location                   |
| ----: | ------: | ------------------------------------ | -------------------------- |
| 99.0% |     100 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib`             |
|  1.0% |       1 | `_platform_bzero`                    | `libsystem_platform.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 36.0% |      36 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| 26.0% |      26 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
|  9.0% |       9 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |
|  7.0% |       7 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
|  5.0% |       5 | `PhaseIdealLoop::build_loop_tree`      | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|     % | Samples | Callee                                       | Location                   |
| ----: | ------: | -------------------------------------------- | -------------------------- |
| 79.8% |      71 | `IR::IR`                                     | `libjvm.dylib`             |
|  7.9% |       7 | `IR::compute_use_counts`                     | `libjvm.dylib`             |
|  6.7% |       6 | `GlobalValueNumbering::GlobalValueNumbering` | `libjvm.dylib`             |
|  4.5% |       4 | `IR::eliminate_null_checks`                  | `libjvm.dylib`             |
|  1.1% |       1 | `_platform_memset`                           | `libsystem_platform.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 79.5% |      70 | `LinearScan::do_linear_scan` | `libjvm.dylib` |
| 20.5% |      18 | `BlockList::iterate_forward` | `libjvm.dylib` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                             | Location                                                 |
| ----: | ------: | ---------------------------------- | -------------------------------------------------------- |
| 90.3% |      65 | `findClass(String)`                | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  6.9% |       5 | `findBootstrapClassOrNull(String)` | `java.lang.ClassLoader`                                  |
|  1.4% |       1 | `findClass(String)`                | `java.net.URLClassLoader`                                |
|  1.4% |       1 | `findLoadedClass(String)`          | `java.lang.ClassLoader`                                  |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

|     % | Samples | Callee                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 88.7% |      63 | `GraphBuilder::iterate_all_blocks`   | `libjvm.dylib` |
|  7.0% |       5 | `BlockListBuilder::BlockListBuilder` | `libjvm.dylib` |
|  4.2% |       3 | `BlockBegin::iterate_preorder`       | `libjvm.dylib` |

##### `IRScope::IRScope` (`libjvm.dylib`)

|      % | Samples | Callee                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |      71 | `GraphBuilder::GraphBuilder` | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      71 | `IRScope::IRScope` | `libjvm.dylib` |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

|     % | Samples | Callee                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 40.0% |      28 | `LinearScan::allocate_registers`      | `libjvm.dylib` |
| 21.4% |      15 | `LinearScan::assign_reg_num`          | `libjvm.dylib` |
| 18.6% |      13 | `LinearScan::build_intervals`         | `libjvm.dylib` |
|  4.3% |       3 | `LinearScan::resolve_data_flow`       | `libjvm.dylib` |
|  2.9% |       2 | `LinearScan::compute_local_live_sets` | `libjvm.dylib` |

##### `read(byte[], int, int)` (`java.util.zip.ZipInputStream`)

|     % | Samples | Callee                     | Location                            |
| ----: | ------: | -------------------------- | ----------------------------------- |
| 94.2% |      65 | `read(byte[], int, int)`   | `java.util.zip.InflaterInputStream` |
|  5.8% |       4 | `update(byte[], int, int)` | `java.util.zip.CRC32`               |

##### `read(byte[])` (`java.io.FilterInputStream`)

|      % | Samples | Callee                   | Location                       |
| -----: | ------: | ------------------------ | ------------------------------ |
| 100.0% |      69 | `read(byte[], int, int)` | `java.util.zip.ZipInputStream` |

##### `WorkerThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location                 |
| ----: | ------: | --------------------------------- | ------------------------ |
| 38.2% |      26 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
| 29.4% |      20 | `G1RebuildRSAndScrubTask::work`   | `libjvm.dylib`           |
| 11.8% |       8 | `G1ParallelCleaningTask::work`    | `libjvm.dylib`           |
| 11.8% |       8 | `G1CMConcurrentMarkingTask::work` | `libjvm.dylib`           |
|  2.9% |       2 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 93.8% |      61 | `Parse::do_all_blocks`          | `libjvm.dylib` |
|  3.1% |       2 | `Parse::do_exits`               | `libjvm.dylib` |
|  1.5% |       1 | `Parse::load_interpreter_state` | `libjvm.dylib` |
|  1.5% |       1 | `Dependencies::assert_common_1` | `libjvm.dylib` |
|  1.5% |       1 | `ciMethod::has_loops`           | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % | Samples | Callee         | Location       |
| -----: | ------: | -------------- | -------------- |
| 100.0% |      65 | `Parse::Parse` | `libjvm.dylib` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

|     % | Samples | Callee                      | Location                 |
| ----: | ------: | --------------------------- | ------------------------ |
| 98.5% |      64 | `inflate(byte[], int, int)` | `java.util.zip.Inflater` |
|  1.5% |       1 | `finished()`                | `java.util.zip.Inflater` |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                                                                          | Location                |
| ----: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| 95.4% |      62 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |
|  4.6% |       3 | `postDefineClass(Class, ProtectionDomain)`                                      | `java.lang.ClassLoader` |

##### `defineClass(String, byte[], int, int)` (`java.lang.ClassLoader`)

|      % | Samples | Callee                                                    | Location                |
| -----: | ------: | --------------------------------------------------------- | ----------------------- |
| 100.0% |      65 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

|     % | Samples | Callee                                                        | Location                 |
| ----: | ------: | ------------------------------------------------------------- | ------------------------ |
| 98.4% |      63 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 85.7% |      54 | `GraphBuilder::invoke`        | `libjvm.dylib` |
| 17.5% |      11 | `GraphBuilder::access_field`  | `libjvm.dylib` |
|  4.8% |       3 | `GraphBuilder::method_return` | `libjvm.dylib` |
|  3.2% |       2 | `GraphBuilder::check_cast`    | `libjvm.dylib` |
|  1.6% |       1 | `ciEnv::comp_level`           | `libjvm.dylib` |

##### `GraphBuilder::iterate_all_blocks` (`libjvm.dylib`)

|      % | Samples | Callee                                      | Location                   |
| -----: | ------: | ------------------------------------------- | -------------------------- |
| 100.0% |      63 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib`             |
|   1.6% |       1 | `_platform_memset`                          | `libsystem_platform.dylib` |

##### `Java_java_util_zip_Inflater_inflateBytesBytes` (`libzip.dylib`)

|     % | Samples | Callee                              | Location       |
| ----: | ------: | ----------------------------------- | -------------- |
| 69.8% |      44 | `inflate_fast`                      | `libzip.dylib` |
| 20.6% |      13 | `inflate`                           | `libzip.dylib` |
|  7.9% |       5 | `jni_GetPrimitiveArrayCritical`     | `libjvm.dylib` |
|  1.6% |       1 | `jni_ReleasePrimitiveArrayCritical` | `libjvm.dylib` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Callee                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |      63 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|     % | Samples | Callee                      | Location                   |
| ----: | ------: | --------------------------- | -------------------------- |
| 96.8% |      60 | `JVM_DefineClassWithSource` | `libjvm.dylib`             |
|  1.6% |       1 | `jni_GetByteArrayRegion`    | `libjvm.dylib`             |
|  1.6% |       1 | `_platform_memmove`         | `libsystem_platform.dylib` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|      % | Samples | Callee                                    | Location                                                 |
| -----: | ------: | ----------------------------------------- | -------------------------------------------------------- |
| 100.0% |      62 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`                                          |
|  21.0% |      13 | `loadClass(String)`                       | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|     % | Samples | Callee                   | Location       |
| ----: | ------: | ------------------------ | -------------- |
| 91.8% |      56 | `Parse::do_call`         | `libjvm.dylib` |
| 26.2% |      16 | `Parse::do_field_access` | `libjvm.dylib` |
|  4.9% |       3 | `Parse::do_checkcast`    | `libjvm.dylib` |
|  3.3% |       2 | `Parse::do_if`           | `libjvm.dylib` |
|  3.3% |       2 | `Parse::return_current`  | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % | Samples | Callee                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |      61 | `Parse::do_one_block` | `libjvm.dylib` |

##### `KlassFactory::create_from_stream` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 95.0% |      57 | `ClassFileParser::ClassFileParser`       | `libjvm.dylib` |
|  5.0% |       3 | `ClassFileParser::create_instance_klass` | `libjvm.dylib` |

##### `SystemDictionary::resolve_class_from_stream` (`libjvm.dylib`)

|     % | Samples | Callee                                    | Location       |
| ----: | ------: | ----------------------------------------- | -------------- |
| 93.3% |      56 | `KlassFactory::create_from_stream`        | `libjvm.dylib` |
|  6.7% |       4 | `SystemDictionary::define_instance_class` | `libjvm.dylib` |

##### `jvm_define_class_common` (`libjvm.dylib`)

|      % | Samples | Callee                                        | Location       |
| -----: | ------: | --------------------------------------------- | -------------- |
| 100.0% |      60 | `SystemDictionary::resolve_class_from_stream` | `libjvm.dylib` |

##### `JVM_DefineClassWithSource` (`libjvm.dylib`)

|      % | Samples | Callee                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |      60 | `jvm_define_class_common` | `libjvm.dylib` |

##### `ClassFileParser::ClassFileParser` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 94.7% |      54 | `ClassFileParser::parse_stream`               | `libjvm.dylib` |
|  5.3% |       3 | `ClassFileParser::post_process_parsed_stream` | `libjvm.dylib` |

##### `GraphBuilder::invoke` (`libjvm.dylib`)

|     % | Samples | Callee                              | Location        |
| ----: | ------: | ----------------------------------- | --------------- |
| 74.1% |      40 | `GraphBuilder::try_inline`          | `libjvm.dylib`  |
| 27.8% |      15 | `ciBytecodeStream::get_method`      | `libjvm.dylib`  |
|  3.7% |       2 | `tlv_get_addr`                      | `libdyld.dylib` |
|  1.9% |       1 | `Dependencies::assert_common_1`     | `libjvm.dylib`  |
|  1.9% |       1 | `ciMethod::find_monomorphic_target` | `libjvm.dylib`  |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|     % | Samples | Callee                  | Location                                                                                                      |
| ----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------------- |
| 72.9% |      35 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`                         |
| 39.6% |      19 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`                      |
|  8.3% |       4 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$2`                      |
|  6.3% |       3 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask$runResolverForNoReceiver$1`                 |
|  6.3% |       3 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirInvokeResolveTowerExtension$enqueueResolverTasksForInvoke$3` |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

|     % | Samples | Callee     | Location                                                                             |
| ----: | ------: | ---------- | ------------------------------------------------------------------------------------ |
| 33.3% |       6 | `invoke()` | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass$$Lambda.0x0000008001611b48` |
| 11.1% |       2 | `invoke()` | `org.jetbrains.kotlin.ir.descriptors.IrBasedDeclarationDescriptor$annotations$2`     |
|  5.6% |       1 | `invoke()` | `org.jetbrains.kotlin.cli.common.CLICompiler$$Lambda.0x0000008001006f50`             |
|  5.6% |       1 | `invoke()` | `org.jetbrains.kotlin.utils.PathUtil$$Lambda.0x00000080011560b8`                     |
|  5.6% |       1 | `invoke()` | `org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile$$Lambda.0x0000008001390000` |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|     % | Samples | Callee                            | Location                         |
| ----: | ------: | --------------------------------- | -------------------------------- |
| 30.8% |       4 | `throwParameterIsNullNPE(String)` | `kotlin.jvm.internal.Intrinsics` |

##### `getValue()` (`kotlin.SafePublicationLazyImpl`)

|     % | Samples | Callee     | Location                                                                                          |
| ----: | ------: | ---------- | ------------------------------------------------------------------------------------------------- |
| 58.3% |       7 | `invoke()` | `kotlin.reflect.jvm.internal.DescriptorKProperty$$Lambda$0`                                       |
| 16.7% |       2 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.impl.FirClassDeclaredMemberScopeImpl$$Lambda.0x0000008001629ed8` |
|  8.3% |       1 | `invoke()` | `kotlin.reflect.jvm.internal.KClassImpl$$Lambda$0`                                                |
|  8.3% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.java.enhancement.FirLazyJavaAnnotationList$$Lambda.0x0000008001608a30`  |
|  8.3% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.java.FirLazyJavaDeclarationList$$Lambda.0x00000080016112a0`             |

##### `buildCallSite()` (`java.lang.invoke.InnerClassLambdaMetafactory`)

|     % | Samples | Callee                               | Location                                       |
| ----: | ------: | ------------------------------------ | ---------------------------------------------- |
| 33.3% |       3 | `findConstructor(Class, MethodType)` | `java.lang.invoke.MethodHandles$Lookup`        |
| 33.3% |       3 | `spinInnerClass()`                   | `java.lang.invoke.InnerClassLambdaMetafactory` |
| 22.2% |       2 | `asType(MethodType)`                 | `java.lang.invoke.MethodHandle`                |
| 11.1% |       1 | `invokeExact_MT(Object, Object)`     | `java.lang.invoke.Invokers$Holder`             |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.9% |      39 | `inflate_fast` (`libzip.dylib`) ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                |
| 1.4% |      19 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.2% |      17 | `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                      |
| 1.0% |      14 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.8% |      11 | `PhaseChaitin::elide_copy` (`libjvm.dylib`) ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                 |
| 0.8% |      11 | `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                        |
| 0.8% |      11 | `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`) ← `PhaseIdealLoop::build_loop_late` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                      |
| 0.6% |       8 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`) ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb` ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region` ← `HeapRegionManager::par_iterate` ← `G1RebuildRSAndScrubTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                        |
| 0.4% |       6 | `PhaseLive::add_liveout` (`libjvm.dylib`) ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                         |
| 0.4% |       6 | `Arena::contains` (`libjvm.dylib`) ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.4% |       6 | `inflate` (`libzip.dylib`) ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                     |
| 0.4% |       5 | `fwd_copy_again` (`libjvm.dylib`) ← `G1ParScanThreadState::trim_queue_to_threshold` ← `G1ScanHRForRegionClosure::scan_memregion` ← `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` ← `G1ScanHRForRegionClosure::scan_heap_roots` ← `G1ScanHRForRegionClosure::do_heap_region` ← `G1RemSet::scan_heap_roots` ← `G1EvacuateRegionsTask::scan_roots` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                   |
| 0.4% |       5 | `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                   |
| 0.4% |       5 | `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                        |
| 0.4% |       5 | `PhaseChaitin::build_ifg_virtual` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                       |
| 0.4% |       5 | `Matcher::xform` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.4% |       5 | `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`) ← `jni_GetPrimitiveArrayCritical` (`libjvm.dylib`) ← `Java_java_util_zip_Inflater_inflateBytesBytes` (`libzip.dylib`) ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |
| 0.4% |       5 | `inflate_fast` (`libzip.dylib`) ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                 |
| 0.4% |       5 | `LinearScanWalker::alloc_free_reg` (`libjvm.dylib`) ← `LinearScanWalker::activate_current` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                      |
| 0.4% |       5 | `LinearScan::build_intervals` (`libjvm.dylib`) ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                 |

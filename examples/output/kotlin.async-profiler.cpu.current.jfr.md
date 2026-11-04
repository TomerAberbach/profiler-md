# Sampling profile

Collected 1,419 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Compiler         | 44.2% |     627 |
| Native           | 39.7% |     563 |
| Ours             | 10.7% |     152 |
| Standard library |  4.4% |      63 |
| JIT              |  1.0% |      14 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── … 950 samples (66.9%) Thread::call_run at libjvm.dylib
│   ├── 860 samples (60.6%) JavaThread::thread_main_inner
│   │   └── 856 samples (60.3%) CompileBroker::compiler_thread_loop
│   │       ├── 832 samples (58.6%) CompileBroker::invoke_compiler_on_method
│   │       │   ├── 579 samples (40.8%) C2Compiler::compile_method
│   │       │   │   └── 577 samples (40.7%) Compile::Compile
│   │       │   │       ├── 289 samples (20.4%) Compile::Code_Gen
│   │       │   │       │   ├── 148 samples (10.4%) PhaseChaitin::Register_Allocate
│   │       │   │       │   │   ├── 23 samples (1.6%, self 1.1%) PhaseChaitin::Split
│   │       │   │       │   │   ├── … 4 samples (0.3%, self 1.3% globally) IndexSetIterator::advance_and_next at libjvm.dylib
│   │       │   │       │   │   └── 117 samples (8.2%) 22 more callees, led by (1.8%) PhaseChaitin::build_ifg_physical
│   │       │   │       │   └── 141 samples (9.9%) 8 more callees, led by (4.0%) Matcher::match
│   │       │   │       └── 288 samples (20.3%) 8 more callees, led by (14.6%) Compile::Optimize
│   │       │   └── 253 samples (17.8%) 5 more callees, led by (17.3%) Compiler::compile_method
│   │       └── … 18 samples (1.3%) PlatformMonitor::wait at libjvm.dylib
│   │           └── 15 samples (1.1%, self 1.8% globally) __psynch_cvwait at libsystem_kernel.dylib
│   └── 90 samples (6.3%) 4 more callees, led by (5.4%) WorkerThread::run
├── 456 samples (32.1%) main(String[]) at org.jetbrains.kotlin.preloading.Preloader
│   └── 456 samples (32.1%) run(String[])
│       ├── … 370 samples (26.1%) exec(PrintStream, Services, MessageRenderer, String[]) at org.jetbrains.kotlin.cli.common.CLICompiler
│       │   └── … 361 samples (25.4%) doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector) at org.jetbrains.kotlin.cli.jvm.K2JVMCompiler
│       │       └── … 356 samples (25.1%) invoke(PhaseConfig, PhaserState, LoggingContext, Object) at org.jetbrains.kotlin.config.phaser.NamedCompilerPhase
│       │           ├── 333 samples (23.5%) phaseBody(LoggingContext, Object) at org.jetbrains.kotlin.cli.pipeline.PipelinePhase
│       │           │   └── 333 samples (23.5%) phaseBody(PipelineContext, PipelineArtifact)
│       │           │       ├── 250 samples (17.6%) executePhase(PipelineArtifact) at org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase
│       │           │       │   └── 250 samples (17.6%) executePhase(ConfigurationPipelineArtifact)
│       │           │       │       ├── 27 samples (1.9%) createEnvironmentAndSources(CompilerConfiguration, Disposable, String)
│       │           │       │       │   └── 27 samples (1.9%) createProjectEnvironment(CompilerConfiguration, Disposable, EnvironmentConfigFiles) at org.jetbrains.kotlin.cli.jvm.compiler.legacy.pipeline.JvmCompilerPipelineKt
│       │           │       │       │       ├── … 5 samples (0.4%) <init>(Disposable, boolean) at com.intellij.core.JavaCoreApplicationEnvironment
│       │           │       │       │       │   └── … 2 samples (0.1%, self 2.0% globally) SymbolTable::do_lookup at libjvm.dylib
│       │           │       │       │       └── 15 samples (1.1%) 6 more callees, led by (0.3%) <init>(Disposable, KotlinCoreApplicationEnvironment, CompilerConfiguration) at org.jetbrains.kotlin.cli.jvm.compiler.KotlinCoreEnvironment$ProjectEnvironment
│       │           │       │       └── 223 samples (15.7%) 5 more callees, led by (12.8%) resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector) at org.jetbrains.kotlin.fir.pipeline.FirUtilsKt
│       │           │       └── 83 samples (5.8%) 4 more callees, led by (3.5%) executePhase(PipelineArtifact) at org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase
│       │           └── 23 samples (1.6%) 2 more callees, led by (1.2%) phaseBody(LoggingContext, Object) at org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase
│       └── … 71 samples (5.0%) read(byte[], int, int) at java.util.zip.ZipInputStream
│           └── … 66 samples (4.7%) Java_java_util_zip_Inflater_inflateBytesBytes at libzip.dylib
│               ├── 46 samples (3.2%) inflate_fast
│               └── 15 samples (1.1%) inflate
│                   └── 12 samples (0.8%) inflate_table
└── 7 samples (0.5%) break_stack_range
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|    % | Samples | Function                                                                                                                                                 | Location                   |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 3.4% |      48 | `inflate_fast`                                                                                                                                           | `libzip.dylib`             |
| 2.0% |      28 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`             |
| 1.8% |      25 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 1.3% |      18 | `IndexSetIterator::advance_and_next`                                                                                                                     | `libjvm.dylib`             |
| 1.3% |      18 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
| 1.2% |      17 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
| 1.1% |      16 | `PhaseChaitin::Split`                                                                                                                                    | `libjvm.dylib`             |
| 0.9% |      13 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| 0.8% |      12 | `PhaseIdealLoop::build_loop_late`                                                                                                                        | `libjvm.dylib`             |
| 0.8% |      12 | `_platform_memmove`                                                                                                                                      | `libsystem_platform.dylib` |
| 0.8% |      12 | `inflate_table`                                                                                                                                          | `libzip.dylib`             |
| 0.8% |      11 | `PhaseLive::compute`                                                                                                                                     | `libjvm.dylib`             |
| 0.8% |      11 | `PhaseChaitin::build_ifg_physical`                                                                                                                       | `libjvm.dylib`             |
| 0.8% |      11 | `ciObjectFactory::get_metadata`                                                                                                                          | `libjvm.dylib`             |
| 0.8% |      11 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                           | `libjvm.dylib`             |
| 0.7% |      10 | `semaphore_wait_trap`                                                                                                                                    | `libsystem_kernel.dylib`   |
| 0.7% |      10 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
| 0.7% |      10 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |
| 0.6% |       9 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
| 0.6% |       9 | `Node::dominates`                                                                                                                                        | `libjvm.dylib`             |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Compiler

|    % | Samples | Function                                    | Location       |
| ---: | ------: | ------------------------------------------- | -------------- |
| 1.3% |      18 | `IndexSetIterator::advance_and_next`        | `libjvm.dylib` |
| 1.1% |      16 | `PhaseChaitin::Split`                       | `libjvm.dylib` |
| 0.8% |      12 | `PhaseIdealLoop::build_loop_late`           | `libjvm.dylib` |
| 0.8% |      11 | `PhaseLive::compute`                        | `libjvm.dylib` |
| 0.8% |      11 | `PhaseChaitin::build_ifg_physical`          | `libjvm.dylib` |
| 0.8% |      11 | `ciObjectFactory::get_metadata`             | `libjvm.dylib` |
| 0.6% |       9 | `Node::dominates`                           | `libjvm.dylib` |
| 0.6% |       9 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |
| 0.6% |       9 | `LinearScan::build_intervals`               | `libjvm.dylib` |
| 0.6% |       8 | `PhaseIdealLoop::Dominators`                | `libjvm.dylib` |
| 0.6% |       8 | `PhiNode::Ideal`                            | `libjvm.dylib` |
| 0.6% |       8 | `Node_Backward_Iterator::next`              | `libjvm.dylib` |
| 0.6% |       8 | `IntervalWalker::walk_to`                   | `libjvm.dylib` |
| 0.5% |       7 | `PhaseChaitin::gather_lrg_masks`            | `libjvm.dylib` |
| 0.5% |       7 | `PhaseIdealLoop::build_loop_early`          | `libjvm.dylib` |
| 0.5% |       7 | `Matcher::xform`                            | `libjvm.dylib` |
| 0.5% |       7 | `Node::Node`                                | `libjvm.dylib` |
| 0.4% |       6 | `PhaseAggressiveCoalesce::insert_copies`    | `libjvm.dylib` |
| 0.4% |       6 | `Compile::identify_useful_nodes`            | `libjvm.dylib` |
| 0.4% |       6 | `LinearScanWalker::alloc_free_reg`          | `libjvm.dylib` |

##### Native

|    % | Samples | Function                                                                                                                                                 | Location                   |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 3.4% |      48 | `inflate_fast`                                                                                                                                           | `libzip.dylib`             |
| 2.0% |      28 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`             |
| 1.8% |      25 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 1.3% |      18 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
| 1.2% |      17 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
| 0.9% |      13 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| 0.8% |      12 | `_platform_memmove`                                                                                                                                      | `libsystem_platform.dylib` |
| 0.8% |      12 | `inflate_table`                                                                                                                                          | `libzip.dylib`             |
| 0.8% |      11 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                           | `libjvm.dylib`             |
| 0.7% |      10 | `semaphore_wait_trap`                                                                                                                                    | `libsystem_kernel.dylib`   |
| 0.7% |      10 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
| 0.7% |      10 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |
| 0.6% |       9 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
| 0.6% |       9 | `SymbolTable::lookup_only`                                                                                                                               | `libjvm.dylib`             |
| 0.6% |       8 | `bsearch`                                                                                                                                                | `libsystem_c.dylib`        |
| 0.4% |       5 | `fwd_copy_again`                                                                                                                                         | `libjvm.dylib`             |
| 0.4% |       5 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                                                          | `libjvm.dylib`             |
| 0.4% |       5 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>`                             | `libjvm.dylib`             |
| 0.4% |       5 | `Arena::contains`                                                                                                                                        | `libjvm.dylib`             |
| 0.4% |       5 | `vmSymbols::find_sid`                                                                                                                                    | `libjvm.dylib`             |

##### Ours

|    % | Samples | Function                                                 | Location                                                                                      |
| ---: | ------: | -------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 0.1% |       2 | `extractValue(AbstractArrayMapOwner)`                    | `org.jetbrains.kotlin.util.AbstractArrayMapOwner$AbstractArrayMapAccessor`                    |
| 0.1% |       2 | `extractUpperTypesToCheckIntersectionEmptiness(List)`    | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintSystemCompletionContext`   |
| 0.1% |       2 | `transformInPlace(List, IrTransformer, Object)`          | `org.jetbrains.kotlin.ir.util.TransformKt`                                                    |
| 0.1% |       1 | `getOrCreateDirectory(CharSequence, Map)`                | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler`                                  |
| 0.1% |       1 | `<init>(CodedInputStream, ExtensionRegistryLite)`        | `org.jetbrains.kotlin.metadata.ProtoBuf$Class`                                                |
| 0.1% |       1 | `isInitialized()`                                        | `org.jetbrains.kotlin.metadata.ProtoBuf$TypeTable`                                            |
| 0.1% |       1 | `balanceWhiteSpaces()`                                   | `com.intellij.lang.impl.PsiBuilderImpl`                                                       |
| 0.1% |       1 | `convertWhenExpression(LighterASTNode)`                  | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`               |
| 0.1% |       1 | `rawTokenTypeStart(int)`                                 | `com.intellij.lang.impl.PsiBuilderAdapter`                                                    |
| 0.1% |       1 | `advance()`                                              | `org.jetbrains.kotlin.lexer._JetLexer`                                                        |
| 0.1% |       1 | `setReceiverParameter(FirReceiverParameter)`             | `org.jetbrains.kotlin.fir.declarations.builder.FirNamedFunctionBuilder`                       |
| 0.1% |       1 | `newlineBeforeCurrentToken()`                            | `org.jetbrains.kotlin.parsing.SemanticWhitespaceAwarePsiBuilderImpl`                          |
| 0.1% |       1 | `access$700(PsiBuilderImpl, PsiBuilderImpl$StartMarker)` | `com.intellij.lang.impl.PsiBuilderImpl`                                                       |
| 0.1% |       1 | `transformChildren(FirTransformer, Object)`              | `org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`                                      |
| 0.1% |       1 | `get(int)`                                               | `org.jetbrains.kotlin.util.EmptyArrayMap`                                                     |
| 0.1% |       1 | `readUtfNonAscii(int, int, int, char[])`                 | `org.jetbrains.org.objectweb.asm.ClassReader`                                                 |
| 0.1% |       1 | `invoke(Object, Object, Object)`                         | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1` |
| 0.1% |       1 | `isInitialized()`                                        | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument`                                        |
| 0.1% |       1 | `<init>(byte[], int, boolean)`                           | `org.jetbrains.org.objectweb.asm.ClassReader`                                                 |
| 0.1% |       1 | `build()`                                                | `org.jetbrains.kotlin.fir.expressions.builder.FirAnnotationBuilder`                           |

##### Standard library

|    % | Samples | Function                                                                                             | Location                                                            |
| ---: | ------: | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| 0.4% |       5 | `checkNotNullParameter(Object, String)`                                                              | `kotlin.jvm.internal.Intrinsics`                                    |
| 0.3% |       4 | `sanitizeStackTrace(Throwable)`                                                                      | `kotlin.jvm.internal.Intrinsics`                                    |
| 0.1% |       1 | `countPositives(byte[], int, int)`                                                                   | `java.lang.StringCoding`                                            |
| 0.1% |       1 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                                        | `java.util.zip.Inflater`                                            |
| 0.1% |       1 | `copyOf(byte[], int)`                                                                                | `java.util.Arrays`                                                  |
| 0.1% |       1 | `resize()`                                                                                           | `java.util.HashMap`                                                 |
| 0.1% |       1 | `checkFromIndexSize(int, int, int, BiFunction)`                                                      | `jdk.internal.util.Preconditions`                                   |
| 0.1% |       1 | `getNode(Object)`                                                                                    | `java.util.HashMap`                                                 |
| 0.1% |       1 | `nextEntryPos(int, int, int)`                                                                        | `java.util.zip.ZipFile$Source`                                      |
| 0.1% |       1 | `defineClass(String, byte[], int, int, ProtectionDomain)`                                            | `java.lang.ClassLoader`                                             |
| 0.1% |       1 | `push(SymbolTable, String)`                                                                          | `jdk.internal.org.objectweb.asm.Frame`                              |
| 0.1% |       1 | `config()`                                                                                           | `jdk.internal.reflect.ReflectionFactory`                            |
| 0.1% |       1 | `<init>(Name)`                                                                                       | `kotlin.reflect.jvm.internal.impl.types.error.ErrorClassDescriptor` |
| 0.1% |       1 | `access$100(FieldSet, MessageLite, CodedInputStream, CodedOutputStream, ExtensionRegistryLite, int)` | `kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite`    |
| 0.1% |       1 | `allFlagsSet(int)`                                                                                   | `java.lang.invoke.MemberName`                                       |
| 0.1% |       1 | `classFilePrologue()`                                                                                | `java.lang.invoke.InvokerBytecodeGenerator`                         |
| 0.1% |       1 | `isNamed()`                                                                                          | `java.lang.Module`                                                  |
| 0.1% |       1 | `doAdvance()`                                                                                        | `java.util.stream.StreamSpliterators$AbstractWrappingSpliterator`   |
| 0.1% |       1 | `build(List)`                                                                                        | `kotlin.collections.CollectionsKt__CollectionsJVMKt`                |
| 0.1% |       1 | `indexOfLastDotWithBackticksSupport(String)`                                                         | `kotlin.reflect.jvm.internal.impl.name.FqNameUnsafe`                |

#### Lines

Lines with the largest contribution to each function's self samples.

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       5 | `kotlin.jvm.internal.Intrinsics:130` |

##### `sanitizeStackTrace(Throwable)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       4 | `kotlin.jvm.internal.Intrinsics:253` |

##### `extractValue(AbstractArrayMapOwner)` (`org.jetbrains.kotlin.util.AbstractArrayMapOwner$AbstractArrayMapAccessor`)

|      % | Samples | Location                                                                      |
| -----: | ------: | ----------------------------------------------------------------------------- |
| 100.0% |       2 | `org.jetbrains.kotlin.util.AbstractArrayMapOwner$AbstractArrayMapAccessor:26` |

##### `extractUpperTypesToCheckIntersectionEmptiness(List)` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintSystemCompletionContext`)

|     % | Samples | Location                                                                                        |
| ----: | ------: | ----------------------------------------------------------------------------------------------- |
| 50.0% |       1 | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintSystemCompletionContext:130` |
| 50.0% |       1 | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintSystemCompletionContext:127` |

##### `transformInPlace(List, IrTransformer, Object)` (`org.jetbrains.kotlin.ir.util.TransformKt`)

|     % | Samples | Location                                      |
| ----: | ------: | --------------------------------------------- |
| 50.0% |       1 | `org.jetbrains.kotlin.ir.util.TransformKt:32` |
| 50.0% |       1 | `org.jetbrains.kotlin.ir.util.TransformKt:35` |

##### `getOrCreateDirectory(CharSequence, Map)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler`)

|      % | Samples | Location                                                        |
| -----: | ------: | --------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler:87` |

##### `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Class`)

|      % | Samples | Location                                            |
| -----: | ------: | --------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.metadata.ProtoBuf$Class:9461` |

##### `isInitialized()` (`org.jetbrains.kotlin.metadata.ProtoBuf$TypeTable`)

|      % | Samples | Location                                                 |
| -----: | ------: | -------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.metadata.ProtoBuf$TypeTable:14549` |

##### `balanceWhiteSpaces()` (`com.intellij.lang.impl.PsiBuilderImpl`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `com.intellij.lang.impl.PsiBuilderImpl:1212` |

##### `convertWhenExpression(LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`)

|      % | Samples | Location                                                                            |
| -----: | ------: | ----------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder:976` |

##### `rawTokenTypeStart(int)` (`com.intellij.lang.impl.PsiBuilderAdapter`)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       1 | `com.intellij.lang.impl.PsiBuilderAdapter:74` |

##### `advance()` (`org.jetbrains.kotlin.lexer._JetLexer`)

|      % | Samples | Location                                    |
| -----: | ------: | ------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.lexer._JetLexer:1041` |

##### `setReceiverParameter(FirReceiverParameter)` (`org.jetbrains.kotlin.fir.declarations.builder.FirNamedFunctionBuilder`)

|      % | Samples | Location                                                                   |
| -----: | ------: | -------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.declarations.builder.FirNamedFunctionBuilder:40` |

##### `newlineBeforeCurrentToken()` (`org.jetbrains.kotlin.parsing.SemanticWhitespaceAwarePsiBuilderImpl`)

|      % | Samples | Location                                                                |
| -----: | ------: | ----------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.parsing.SemanticWhitespaceAwarePsiBuilderImpl:73` |

##### `access$700(PsiBuilderImpl, PsiBuilderImpl$StartMarker)` (`com.intellij.lang.impl.PsiBuilderImpl`)

|      % | Samples | Location                                   |
| -----: | ------: | ------------------------------------------ |
| 100.0% |       1 | `com.intellij.lang.impl.PsiBuilderImpl:45` |

##### `transformChildren(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`)

|      % | Samples | Location                                                    |
| -----: | ------: | ----------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl:64` |

##### `get(int)` (`org.jetbrains.kotlin.util.EmptyArrayMap`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.util.EmptyArrayMap:17` |

##### `readUtfNonAscii(int, int, int, char[])` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % | Samples | Location                                           |
| -----: | ------: | -------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.org.objectweb.asm.ClassReader:3851` |

##### `invoke(Object, Object, Object)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1`)

|      % | Samples | Location                                                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1:71` |

##### `isInitialized()` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument`)

|      % | Samples | Location                                                    |
| -----: | ------: | ----------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument:5380` |

##### `<init>(byte[], int, boolean)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % | Samples | Location                                          |
| -----: | ------: | ------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.org.objectweb.asm.ClassReader:227` |

##### `build()` (`org.jetbrains.kotlin.fir.expressions.builder.FirAnnotationBuilder`)

|      % | Samples | Location                                                               |
| -----: | ------: | ---------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.expressions.builder.FirAnnotationBuilder:36` |

##### `countPositives(byte[], int, int)` (`java.lang.StringCoding`)

|      % | Samples | Location                    |
| -----: | ------: | --------------------------- |
| 100.0% |       1 | `java.lang.StringCoding:52` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.util.Arrays:3539` |

##### `resize()` (`java.util.HashMap`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.util.HashMap:713` |

##### `checkFromIndexSize(int, int, int, BiFunction)` (`jdk.internal.util.Preconditions`)

|      % | Samples | Location                              |
| -----: | ------: | ------------------------------------- |
| 100.0% |       1 | `jdk.internal.util.Preconditions:396` |

##### `getNode(Object)` (`java.util.HashMap`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.util.HashMap:576` |

##### `nextEntryPos(int, int, int)` (`java.util.zip.ZipFile$Source`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       1 | `java.util.zip.ZipFile$Source:1834` |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

|      % | Samples | Location                     |
| -----: | ------: | ---------------------------- |
| 100.0% |       1 | `java.lang.ClassLoader:1025` |

##### `push(SymbolTable, String)` (`jdk.internal.org.objectweb.asm.Frame`)

|      % | Samples | Location                                   |
| -----: | ------: | ------------------------------------------ |
| 100.0% |       1 | `jdk.internal.org.objectweb.asm.Frame:583` |

##### `config()` (`jdk.internal.reflect.ReflectionFactory`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `jdk.internal.reflect.ReflectionFactory:666` |

##### `<init>(Name)` (`kotlin.reflect.jvm.internal.impl.types.error.ErrorClassDescriptor`)

|      % | Samples | Location                                                               |
| -----: | ------: | ---------------------------------------------------------------------- |
| 100.0% |       1 | `kotlin.reflect.jvm.internal.impl.types.error.ErrorClassDescriptor:27` |

##### `access$100(FieldSet, MessageLite, CodedInputStream, CodedOutputStream, ExtensionRegistryLite, int)` (`kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite`)

|      % | Samples | Location                                                            |
| -----: | ------: | ------------------------------------------------------------------- |
| 100.0% |       1 | `kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite:49` |

##### `allFlagsSet(int)` (`java.lang.invoke.MemberName`)

|      % | Samples | Location                          |
| -----: | ------: | --------------------------------- |
| 100.0% |       1 | `java.lang.invoke.MemberName:337` |

##### `classFilePrologue()` (`java.lang.invoke.InvokerBytecodeGenerator`)

|      % | Samples | Location                                        |
| -----: | ------: | ----------------------------------------------- |
| 100.0% |       1 | `java.lang.invoke.InvokerBytecodeGenerator:271` |

##### `isNamed()` (`java.lang.Module`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       1 | `java.lang.Module:188` |

##### `doAdvance()` (`java.util.stream.StreamSpliterators$AbstractWrappingSpliterator`)

|      % | Samples | Location                                                              |
| -----: | ------: | --------------------------------------------------------------------- |
| 100.0% |       1 | `java.util.stream.StreamSpliterators$AbstractWrappingSpliterator:153` |

##### `build(List)` (`kotlin.collections.CollectionsKt__CollectionsJVMKt`)

|      % | Samples | Location                                                |
| -----: | ------: | ------------------------------------------------------- |
| 100.0% |       1 | `kotlin.collections.CollectionsKt__CollectionsJVMKt:59` |

##### `indexOfLastDotWithBackticksSupport(String)` (`kotlin.reflect.jvm.internal.impl.name.FqNameUnsafe`)

|      % | Samples | Location                                                |
| -----: | ------: | ------------------------------------------------------- |
| 100.0% |       1 | `kotlin.reflect.jvm.internal.impl.name.FqNameUnsafe:58` |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `inflate_fast` (`libzip.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |      48 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `SymbolTable::do_lookup` (`libjvm.dylib`)

|     % | Samples | Caller                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 53.6% |      15 | `SymbolTable::lookup_only`                     | `libjvm.dylib` |
| 25.0% |       7 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |
| 21.4% |       6 | `SymbolTable::new_symbol`                      | `libjvm.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |      25 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|     % | Samples | Caller                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 22.2% |       4 | `PhaseIFG::effective_degree`       | `libjvm.dylib` |
| 11.1% |       2 | `PhaseChaitin::Select`             | `libjvm.dylib` |
| 11.1% |       2 | `PhaseIFG::SquareUp`               | `libjvm.dylib` |
| 11.1% |       2 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |
| 11.1% |       2 | `PhaseLive::add_liveout`           | `libjvm.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |      18 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|     % | Samples | Caller                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 11.8% |       2 | `ciMethodData::data_from`       | `libjvm.dylib` |
|  5.9% |       1 | `Type::hashcons`                | `libjvm.dylib` |
|  5.9% |       1 | `Compilation::compile_method`   | `libjvm.dylib` |
|  5.9% |       1 | `Goto::Goto`                    | `libjvm.dylib` |
|  5.9% |       1 | `OopStorage::allocation_status` | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      16 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

|     % | Samples | Caller                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 76.9% |      10 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
| 15.4% |       2 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |
|  7.7% |       1 | `LIR_Assembler::record_non_safepoint_debug_info`   | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      12 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `_platform_memmove` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                    | Location        |
| ----: | ------: | ----------------------------------------- | --------------- |
| 25.0% |       3 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib` |
| 16.7% |       2 | `Node_Array::grow`                        | `libjvm.dylib`  |
|  8.3% |       1 | `nmethod::new_nmethod`                    | `libjvm.dylib`  |
|  8.3% |       1 | `Node::out_grow`                          | `libjvm.dylib`  |
|  8.3% |       1 | `nmethod::nmethod`                        | `libjvm.dylib`  |

##### `inflate_table` (`libzip.dylib`)

|      % | Samples | Caller    | Location       |
| -----: | ------: | --------- | -------------- |
| 100.0% |      12 | `inflate` | `libzip.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      11 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      11 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

|     % | Samples | Caller                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 27.3% |       3 | `ciObjectFactory::get`                             | `libjvm.dylib` |
| 18.2% |       2 | `ciBytecodeStream::get_method`                     | `libjvm.dylib` |
|  9.1% |       1 | `ciInstanceKlass::compute_transitive_interfaces`   | `libjvm.dylib` |
|  9.1% |       1 | `ciField::initialize_from`                         | `libjvm.dylib` |
|  9.1% |       1 | `ciReceiverTypeData::translate_receiver_data_from` | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|      % | Samples | Caller                                         | Location       |
| -----: | ------: | ---------------------------------------------- | -------------- |
| 100.0% |      11 | `void G1CMTask::process_grey_task_entry<true>` | `libjvm.dylib` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 90.0% |       9 | `WorkerThread::run`       | `libjvm.dylib` |
| 10.0% |       1 | `WorkerThreads::run_task` | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 20.0% |       2 | `Method::allocate`                     | `libjvm.dylib` |
| 10.0% |       1 | `RegionNode::is_unreachable_from_root` | `libjvm.dylib` |
| 10.0% |       1 | `G1CMConcurrentMarkingTask::work`      | `libjvm.dylib` |
| 10.0% |       1 | `GraphBuilder::push_scope`             | `libjvm.dylib` |
| 10.0% |       1 | `InstanceKlass::link_class_impl`       | `libjvm.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                                      | Location           |
| ----: | ------: | ------------------------------------------- | ------------------ |
| 20.0% |       2 | `jni_GetPrimitiveArrayCritical`             | `libjvm.dylib`     |
| 10.0% |       1 | `jni_ReleasePrimitiveArrayCritical`         | `libjvm.dylib`     |
| 10.0% |       1 | `JVM_Clone`                                 | `libjvm.dylib`     |
| 10.0% |       1 | `arraycopy(Object, int, Object, int, int)`  | `java.lang.System` |
| 10.0% |       1 | `InterpreterRuntime::build_method_counters` | `libjvm.dylib`     |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 77.8% |       7 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |
| 22.2% |       2 | `InstanceKlass::find_method`            | `libjvm.dylib` |

##### `Node::dominates` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |       9 | `MemNode::all_controls_dominate` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       9 | `PhaseIdealLoop::build_loop_late` | `libjvm.dylib` |

##### `LinearScan::build_intervals` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |       9 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `SymbolTable::lookup_only` (`libjvm.dylib`)

|      % | Samples | Caller                                         | Location       |
| -----: | ------: | ---------------------------------------------- | -------------- |
| 100.0% |       9 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       8 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhiNode::Ideal` (`libjvm.dylib`)

|     % | Samples | Caller                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 75.0% |       6 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |
| 12.5% |       1 | `Parse::do_exits`             | `libjvm.dylib` |
| 12.5% |       1 | `GraphKit::gen_checkcast`     | `libjvm.dylib` |

##### `Node_Backward_Iterator::next` (`libjvm.dylib`)

|     % | Samples | Caller                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 50.0% |       4 | `PhaseCFG::global_code_motion`    | `libjvm.dylib` |
| 37.5% |       3 | `PhaseCFG::schedule_late`         | `libjvm.dylib` |
| 12.5% |       1 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |

##### `IntervalWalker::walk_to` (`libjvm.dylib`)

|     % | Samples | Caller                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 75.0% |       6 | `IntervalWalker::walk_to`     | `libjvm.dylib` |
| 25.0% |       2 | `LinearScan::compute_oop_map` | `libjvm.dylib` |

##### `bsearch` (`libsystem_c.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |       8 | `encoding_for_logical_immediate` | `libjvm.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       7 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       7 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       7 | `Matcher::match` | `libjvm.dylib` |

##### `Node::Node` (`libjvm.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 14.3% |       1 | `Parse::array_addressing`        | `libjvm.dylib` |
| 14.3% |       1 | `PhaseIterGVN::transform_old`    | `libjvm.dylib` |
| 14.3% |       1 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |
| 14.3% |       1 | `GraphKit::gen_subtype_check`    | `libjvm.dylib` |
| 14.3% |       1 | `Parse::merge_common`            | `libjvm.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       6 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Compile::identify_useful_nodes` (`libjvm.dylib`)

|     % | Samples | Caller                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 66.7% |       4 | `PhaseRemoveUseless::PhaseRemoveUseless`      | `libjvm.dylib` |
| 33.3% |       2 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |

##### `LinearScanWalker::alloc_free_reg` (`libjvm.dylib`)

|     % | Samples | Caller                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 83.3% |       5 | `LinearScanWalker::activate_current` | `libjvm.dylib` |
| 16.7% |       1 | `IntervalWalker::walk_to`            | `libjvm.dylib` |

##### `fwd_copy_again` (`libjvm.dylib`)

|     % | Samples | Caller                                          | Location       |
| ----: | ------: | ----------------------------------------------- | -------------- |
| 80.0% |       4 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |
| 20.0% |       1 | `CodeBuffer::copy_code_to`                      | `libjvm.dylib` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`)

|     % | Samples | Caller                                       | Location       |
| ----: | ------: | -------------------------------------------- | -------------- |
| 80.0% |       4 | `G1ParScanThreadState::steal_and_trim_queue` | `libjvm.dylib` |
| 20.0% |       1 | `G1ParEvacuateFollowersClosure::do_void`     | `libjvm.dylib` |

##### `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|      % | Samples | Caller                                            | Location       |
| -----: | ------: | ------------------------------------------------- | -------------- |
| 100.0% |       5 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib` |

##### `Arena::contains` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       5 | `Matcher::xform` | `libjvm.dylib` |

##### `vmSymbols::find_sid` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |       5 | `ciObjectFactory::get_symbol` | `libjvm.dylib` |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|     % | Samples | Caller                                                                          | Location                                                                            |
| ----: | ------: | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| 20.0% |       1 | `topLevel(Name)`                                                                | `org.jetbrains.kotlin.name.FqName$Companion`                                        |
| 20.0% |       1 | `resolvedTypeFromPrototype(FirTypeRef, ConeKotlinType, KtSourceElement)`        | `org.jetbrains.kotlin.fir.CopyUtilsKt`                                              |
| 20.0% |       1 | `getLanguageVersionSettings(FirSession)`                                        | `org.jetbrains.kotlin.fir.FirLanguageSettingsComponentKt`                           |
| 20.0% |       1 | `visitBlockBody(IrBlockBody, Void)`                                             | `org.jetbrains.kotlin.ir.visitors.IrVisitorVoid`                                    |
| 20.0% |       1 | `visitSimpleFunction(IrSimpleFunction, InventNamesForLocalClasses$NameBuilder)` | `org.jetbrains.kotlin.backend.common.lower.InventNamesForLocalClasses$NameInventor` |

##### `sanitizeStackTrace(Throwable)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Caller                            | Location                         |
| -----: | ------: | --------------------------------- | -------------------------------- |
| 100.0% |       4 | `throwParameterIsNullNPE(String)` | `kotlin.jvm.internal.Intrinsics` |

##### `extractValue(AbstractArrayMapOwner)` (`org.jetbrains.kotlin.util.AbstractArrayMapOwner$AbstractArrayMapAccessor`)

|      % | Samples | Caller                                       | Location                                             |
| -----: | ------: | -------------------------------------------- | ---------------------------------------------------- |
| 100.0% |       2 | `getValue(AbstractArrayMapOwner, KProperty)` | `org.jetbrains.kotlin.util.NullableArrayMapAccessor` |

##### `extractUpperTypesToCheckIntersectionEmptiness(List)` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintSystemCompletionContext`)

|      % | Samples | Caller                                                           | Location                                                                                 |
| -----: | ------: | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% |       2 | `check(CheckerSink, ResolutionContext, Candidate, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckIncompatibleTypeVariableUpperBounds` |

##### `transformInPlace(List, IrTransformer, Object)` (`org.jetbrains.kotlin.ir.util.TransformKt`)

|     % | Samples | Caller                                     | Location                                          |
| ----: | ------: | ------------------------------------------ | ------------------------------------------------- |
| 50.0% |       1 | `transformChildren(IrTransformer, Object)` | `org.jetbrains.kotlin.ir.expressions.IrBlockBody` |
| 50.0% |       1 | `transformChildren(IrTransformer, Object)` | `org.jetbrains.kotlin.ir.declarations.IrClass`    |

##### `getOrCreateDirectory(CharSequence, Map)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler`)

|      % | Samples | Caller                              | Location                                                     |
| -----: | ------: | ----------------------------------- | ------------------------------------------------------------ |
| 100.0% |       1 | `<init>(FastJarFileSystem, String)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler` |

##### `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Class`)

|      % | Samples | Caller                                                        | Location                                       |
| -----: | ------: | ------------------------------------------------------------- | ---------------------------------------------- |
| 100.0% |       1 | `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Class` |

##### `isInitialized()` (`org.jetbrains.kotlin.metadata.ProtoBuf$TypeTable`)

|      % | Samples | Caller            | Location                                       |
| -----: | ------: | ----------------- | ---------------------------------------------- |
| 100.0% |       1 | `isInitialized()` | `org.jetbrains.kotlin.metadata.ProtoBuf$Class` |

##### `balanceWhiteSpaces()` (`com.intellij.lang.impl.PsiBuilderImpl`)

|      % | Samples | Caller               | Location                                |
| -----: | ------: | -------------------- | --------------------------------------- |
| 100.0% |       1 | `prepareLightTree()` | `com.intellij.lang.impl.PsiBuilderImpl` |

##### `convertWhenExpression(LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`)

|      % | Samples | Caller                                      | Location                                                                        |
| -----: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------- |
| 100.0% |       1 | `getAsFirStatement(LighterASTNode, String)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder` |

##### `rawTokenTypeStart(int)` (`com.intellij.lang.impl.PsiBuilderAdapter`)

|      % | Samples | Caller           | Location                                                                  |
| -----: | ------: | ---------------- | ------------------------------------------------------------------------- |
| 100.0% |       1 | `lookAhead(int)` | `org.jetbrains.kotlin.parsing.TruncatedSemanticWhitespaceAwarePsiBuilder` |

##### `advance()` (`org.jetbrains.kotlin.lexer._JetLexer`)

|      % | Samples | Caller          | Location                         |
| -----: | ------: | --------------- | -------------------------------- |
| 100.0% |       1 | `locateToken()` | `com.intellij.lexer.FlexAdapter` |

##### `setReceiverParameter(FirReceiverParameter)` (`org.jetbrains.kotlin.fir.declarations.builder.FirNamedFunctionBuilder`)

|      % | Samples | Caller              | Location    |
| -----: | ------: | ------------------- | ----------- |
| 100.0% |       1 | `break_stack_range` | `<unknown>` |

##### `newlineBeforeCurrentToken()` (`org.jetbrains.kotlin.parsing.SemanticWhitespaceAwarePsiBuilderImpl`)

|      % | Samples | Caller                     | Location                                               |
| -----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% |       1 | `interruptedWithNewLine()` | `org.jetbrains.kotlin.parsing.KotlinExpressionParsing` |

##### `access$700(PsiBuilderImpl, PsiBuilderImpl$StartMarker)` (`com.intellij.lang.impl.PsiBuilderImpl`)

|      % | Samples | Caller         | Location                                            |
| -----: | ------: | -------------- | --------------------------------------------------- |
| 100.0% |       1 | `rollbackTo()` | `com.intellij.lang.impl.PsiBuilderImpl$StartMarker` |

##### `transformChildren(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`)

|      % | Samples | Caller                                      | Location                                                 |
| -----: | ------: | ------------------------------------------- | -------------------------------------------------------- |
| 100.0% |       1 | `transformChildren(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl` |

##### `get(int)` (`org.jetbrains.kotlin.util.EmptyArrayMap`)

|      % | Samples | Caller                                | Location                                                                   |
| -----: | ------: | ------------------------------------- | -------------------------------------------------------------------------- |
| 100.0% |       1 | `extractValue(AbstractArrayMapOwner)` | `org.jetbrains.kotlin.util.AbstractArrayMapOwner$AbstractArrayMapAccessor` |

##### `readUtfNonAscii(int, int, int, char[])` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % | Samples | Caller                      | Location                                      |
| -----: | ------: | --------------------------- | --------------------------------------------- |
| 100.0% |       1 | `readUtf(int, int, char[])` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `invoke(Object, Object, Object)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1`)

|      % | Samples | Caller                                             | Location                                                            |
| -----: | ------: | -------------------------------------------------- | ------------------------------------------------------------------- |
| 100.0% |       1 | `processSymbolsByName(Name, Function3, Function1)` | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope` |

##### `isInitialized()` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument`)

|      % | Samples | Caller            | Location                                      |
| -----: | ------: | ----------------- | --------------------------------------------- |
| 100.0% |       1 | `isInitialized()` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type` |

##### `<init>(byte[], int, boolean)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % | Samples | Caller                     | Location                                      |
| -----: | ------: | -------------------------- | --------------------------------------------- |
| 100.0% |       1 | `<init>(byte[], int, int)` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `build()` (`org.jetbrains.kotlin.fir.expressions.builder.FirAnnotationBuilder`)

|      % | Samples | Caller                                                                                          | Location                                                                   |
| -----: | ------: | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 100.0% |       1 | `deserializeAnnotation(FirSession, ProtoBuf$Annotation, NameResolver, AnnotationUseSiteTarget)` | `org.jetbrains.kotlin.fir.deserialization.AnnotationDeserializationUtilKt` |

##### `countPositives(byte[], int, int)` (`java.lang.StringCoding`)

|      % | Samples | Caller                                           | Location           |
| -----: | ------: | ------------------------------------------------ | ------------------ |
| 100.0% |       1 | `newStringUTF8NoRepl(byte[], int, int, boolean)` | `java.lang.String` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Caller    | Location    |
| -----: | ------: | --------- | ----------- |
| 100.0% |       1 | `unknown` | `<unknown>` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|      % | Samples | Caller                        | Location                          |
| -----: | ------: | ----------------------------- | --------------------------------- |
| 100.0% |       1 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |

##### `resize()` (`java.util.HashMap`)

|      % | Samples | Caller                                          | Location            |
| -----: | ------: | ----------------------------------------------- | ------------------- |
| 100.0% |       1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `checkFromIndexSize(int, int, int, BiFunction)` (`jdk.internal.util.Preconditions`)

|      % | Samples | Caller                       | Location                 |
| -----: | ------: | ---------------------------- | ------------------------ |
| 100.0% |       1 | `setInput(byte[], int, int)` | `java.util.zip.Inflater` |

##### `getNode(Object)` (`java.util.HashMap`)

|      % | Samples | Caller        | Location            |
| -----: | ------: | ------------- | ------------------- |
| 100.0% |       1 | `get(Object)` | `java.util.HashMap` |

##### `nextEntryPos(int, int, int)` (`java.util.zip.ZipFile$Source`)

|      % | Samples | Caller                   | Location                       |
| -----: | ------: | ------------------------ | ------------------------------ |
| 100.0% |       1 | `initCEN(int, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

|      % | Samples | Caller                                  | Location                |
| -----: | ------: | --------------------------------------- | ----------------------- |
| 100.0% |       1 | `defineClass(String, byte[], int, int)` | `java.lang.ClassLoader` |

##### `push(SymbolTable, String)` (`jdk.internal.org.objectweb.asm.Frame`)

|      % | Samples | Caller                                   | Location                               |
| -----: | ------: | ---------------------------------------- | -------------------------------------- |
| 100.0% |       1 | `execute(int, int, Symbol, SymbolTable)` | `jdk.internal.org.objectweb.asm.Frame` |

##### `config()` (`jdk.internal.reflect.ReflectionFactory`)

|      % | Samples | Caller                      | Location                                 |
| -----: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% |       1 | `useMethodHandleAccessor()` | `jdk.internal.reflect.ReflectionFactory` |

##### `<init>(Name)` (`kotlin.reflect.jvm.internal.impl.types.error.ErrorClassDescriptor`)

|      % | Samples | Caller       | Location                                                  |
| -----: | ------: | ------------ | --------------------------------------------------------- |
| 100.0% |       1 | `<clinit>()` | `kotlin.reflect.jvm.internal.impl.types.error.ErrorUtils` |

##### `access$100(FieldSet, MessageLite, CodedInputStream, CodedOutputStream, ExtensionRegistryLite, int)` (`kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite`)

|      % | Samples | Caller                                                                               | Location                                                                           |
| -----: | ------: | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| 100.0% |       1 | `parseUnknownField(CodedInputStream, CodedOutputStream, ExtensionRegistryLite, int)` | `kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite$ExtendableMessage` |

##### `allFlagsSet(int)` (`java.lang.invoke.MemberName`)

|      % | Samples | Caller        | Location                      |
| -----: | ------: | ------------- | ----------------------------- |
| 100.0% |       1 | `isVarargs()` | `java.lang.invoke.MemberName` |

##### `classFilePrologue()` (`java.lang.invoke.InvokerBytecodeGenerator`)

|      % | Samples | Caller                          | Location                                    |
| -----: | ------: | ------------------------------- | ------------------------------------------- |
| 100.0% |       1 | `generateCustomizedCodeBytes()` | `java.lang.invoke.InvokerBytecodeGenerator` |

##### `isNamed()` (`java.lang.Module`)

|      % | Samples | Caller            | Location           |
| -----: | ------: | ----------------- | ------------------ |
| 100.0% |       1 | `canRead(Module)` | `java.lang.Module` |

##### `doAdvance()` (`java.util.stream.StreamSpliterators$AbstractWrappingSpliterator`)

|      % | Samples | Caller                 | Location                                                  |
| -----: | ------: | ---------------------- | --------------------------------------------------------- |
| 100.0% |       1 | `tryAdvance(Consumer)` | `java.util.stream.StreamSpliterators$WrappingSpliterator` |

##### `build(List)` (`kotlin.collections.CollectionsKt__CollectionsJVMKt`)

|      % | Samples | Caller                                                                                                            | Location                                                     |
| -----: | ------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% |       1 | `createLibrarySession(Object, FirSession, ModuleDataProvider, LanguageVersionSettings, List, boolean, Function2)` | `org.jetbrains.kotlin.fir.session.FirAbstractSessionFactory` |

##### `indexOfLastDotWithBackticksSupport(String)` (`kotlin.reflect.jvm.internal.impl.name.FqNameUnsafe`)

|      % | Samples | Caller      | Location                                             |
| -----: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% |       1 | `compute()` | `kotlin.reflect.jvm.internal.impl.name.FqNameUnsafe` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                                         | Location                                                |
| ----: | ------: | ------------------------------------------------ | ------------------------------------------------------- |
| 67.1% |     952 | `_pthread_start`                                 | `libsystem_pthread.dylib`                               |
| 67.1% |     952 | `thread_start`                                   | `libsystem_pthread.dylib`                               |
| 66.9% |     950 | `Thread::call_run`                               | `libjvm.dylib`                                          |
| 66.9% |     950 | `thread_native_entry`                            | `libjvm.dylib`                                          |
| 60.6% |     860 | `JavaThread::thread_main_inner`                  | `libjvm.dylib`                                          |
| 60.3% |     856 | `CompileBroker::compiler_thread_loop`            | `libjvm.dylib`                                          |
| 58.6% |     832 | `CompileBroker::invoke_compiler_on_method`       | `libjvm.dylib`                                          |
| 40.8% |     579 | `C2Compiler::compile_method`                     | `libjvm.dylib`                                          |
| 40.7% |     577 | `Compile::Compile`                               | `libjvm.dylib`                                          |
| 32.1% |     456 | `run(String[])`                                  | `org.jetbrains.kotlin.preloading.Preloader`             |
| 32.1% |     456 | `main(String[])`                                 | `org.jetbrains.kotlin.preloading.Preloader`             |
| 26.6% |     377 | `main(String[])`                                 | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 26.6% |     377 | `main(String[])`                                 | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 26.6% |     377 | `invokeStatic(Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x0000008001008000`    |
| 26.6% |     377 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000008001009400`     |
| 26.6% |     377 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                      |
| 26.6% |     377 | `invokeImpl(Object, Object[])`                   | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 26.6% |     377 | `invoke(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 26.6% |     377 | `invoke(Object, Object[])`                       | `java.lang.reflect.Method`                              |
| 26.5% |     376 | `doMain(CLICompiler, String[])`                  | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Compiler

|     % | Samples | Function                                   | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 60.3% |     856 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
| 58.6% |     832 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
| 40.8% |     579 | `C2Compiler::compile_method`               | `libjvm.dylib` |
| 40.7% |     577 | `Compile::Compile`                         | `libjvm.dylib` |
| 20.4% |     289 | `Compile::Code_Gen`                        | `libjvm.dylib` |
| 17.3% |     245 | `Compilation::Compilation`                 | `libjvm.dylib` |
| 17.2% |     244 | `Compilation::compile_method`              | `libjvm.dylib` |
| 15.5% |     220 | `Compilation::compile_java_method`         | `libjvm.dylib` |
| 14.6% |     207 | `Compile::Optimize`                        | `libjvm.dylib` |
| 10.4% |     148 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
|  8.5% |     120 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
|  7.0% |     100 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
|  7.0% |     100 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
|  6.0% |      85 | `Compilation::emit_lir`                    | `libjvm.dylib` |
|  5.7% |      81 | `Compilation::build_hir`                   | `libjvm.dylib` |
|  5.1% |      73 | `LinearScan::do_linear_scan`               | `libjvm.dylib` |
|  4.4% |      63 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |
|  4.2% |      60 | `GraphBuilder::GraphBuilder`               | `libjvm.dylib` |
|  4.2% |      59 | `PhaseIterGVN::transform_old`              | `libjvm.dylib` |
|  4.0% |      57 | `Matcher::match`                           | `libjvm.dylib` |

##### Native

|     % | Samples | Function                                        | Location                  |
| ----: | ------: | ----------------------------------------------- | ------------------------- |
| 67.1% |     952 | `_pthread_start`                                | `libsystem_pthread.dylib` |
| 67.1% |     952 | `thread_start`                                  | `libsystem_pthread.dylib` |
| 66.9% |     950 | `Thread::call_run`                              | `libjvm.dylib`            |
| 66.9% |     950 | `thread_native_entry`                           | `libjvm.dylib`            |
| 60.6% |     860 | `JavaThread::thread_main_inner`                 | `libjvm.dylib`            |
| 17.3% |     245 | `Compiler::compile_method`                      | `libjvm.dylib`            |
|  5.4% |      76 | `WorkerThread::run`                             | `libjvm.dylib`            |
|  5.3% |      75 | `Java_java_lang_ClassLoader_defineClass1`       | `libjava.dylib`           |
|  4.9% |      70 | `KlassFactory::create_from_stream`              | `libjvm.dylib`            |
|  4.9% |      70 | `jvm_define_class_common`                       | `libjvm.dylib`            |
|  4.9% |      70 | `JVM_DefineClassWithSource`                     | `libjvm.dylib`            |
|  4.9% |      69 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib`            |
|  4.9% |      69 | `SystemDictionary::resolve_class_from_stream`   | `libjvm.dylib`            |
|  4.7% |      67 | `Parse::Parse`                                  | `libjvm.dylib`            |
|  4.7% |      67 | `ParseGenerator::generate`                      | `libjvm.dylib`            |
|  4.7% |      66 | `Parse::do_one_block`                           | `libjvm.dylib`            |
|  4.7% |      66 | `Parse::do_all_blocks`                          | `libjvm.dylib`            |
|  4.4% |      62 | `IR::IR`                                        | `libjvm.dylib`            |
|  4.4% |      62 | `ClassFileParser::ClassFileParser`              | `libjvm.dylib`            |
|  4.3% |      61 | `IRScope::IRScope`                              | `libjvm.dylib`            |

##### Ours

|     % | Samples | Function                                                                                                                                      | Location                                                |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 32.1% |     456 | `run(String[])`                                                                                                                               | `org.jetbrains.kotlin.preloading.Preloader`             |
| 32.1% |     456 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`             |
| 26.6% |     377 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 26.6% |     377 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 26.5% |     376 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 26.4% |     375 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 26.4% |     374 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 26.4% |     374 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 26.3% |     373 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 25.9% |     368 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 25.4% |     361 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 25.4% |     361 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 25.4% |     361 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 25.3% |     359 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 25.3% |     359 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 25.3% |     359 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 25.3% |     359 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 25.1% |     356 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
| 25.1% |     356 | `phaseBody(LoggingContext, Object)`                                                                                                           | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
| 25.1% |     356 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### Standard library

|     % | Samples | Function                                                                                      | Location                                              |
| ----: | ------: | --------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| 26.6% |     377 | `invokeStatic(Object, Object)`                                                                | `java.lang.invoke.LambdaForm$DMH.0x0000008001008000`  |
| 26.6% |     377 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x0000008001009400`   |
| 26.6% |     377 | `invokeExact_MT(Object, Object, Object, Object)`                                              | `java.lang.invoke.Invokers$Holder`                    |
| 26.6% |     377 | `invokeImpl(Object, Object[])`                                                                | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 26.6% |     377 | `invoke(Object, Object[])`                                                                    | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 26.6% |     377 | `invoke(Object, Object[])`                                                                    | `java.lang.reflect.Method`                            |
|  5.8% |      83 | `loadClass(String, boolean)`                                                                  | `java.lang.ClassLoader`                               |
|  5.5% |      78 | `defineClass(String, byte[], int, int, ProtectionDomain)`                                     | `java.lang.ClassLoader`                               |
|  5.4% |      77 | `defineClass(String, byte[], int, int)`                                                       | `java.lang.ClassLoader`                               |
|  5.4% |      76 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)`               | `java.lang.ClassLoader`                               |
|  5.1% |      72 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                                 | `java.util.zip.Inflater`                              |
|  5.1% |      72 | `read(byte[], int, int)`                                                                      | `java.util.zip.InflaterInputStream`                   |
|  5.0% |      71 | `inflate(byte[], int, int)`                                                                   | `java.util.zip.Inflater`                              |
|  5.0% |      71 | `read(byte[], int, int)`                                                                      | `java.util.zip.ZipInputStream`                        |
|  5.0% |      71 | `read(byte[])`                                                                                | `java.io.FilterInputStream`                           |
|  3.6% |      51 | `resumeWith(Object)`                                                                          | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |
|  1.2% |      17 | `getValue()`                                                                                  | `kotlin.SynchronizedLazyImpl`                         |
|  1.0% |      14 | `getValue()`                                                                                  | `kotlin.SafePublicationLazyImpl`                      |
|  0.9% |      13 | `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` | `java.lang.invoke.LambdaMetafactory`                  |
|  0.9% |      13 | `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                    |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Caller         | Location                  |
| -----: | ------: | -------------- | ------------------------- |
| 100.0% |     952 | `thread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |     950 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Caller           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |     950 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     860 | `Thread::call_run` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |     856 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |     832 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |     579 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |     577 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % | Samples | Caller           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |     456 | `main(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|      % | Samples | Caller           | Location                                     |
| -----: | ------: | ---------------- | -------------------------------------------- |
| 100.0% |     377 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Caller                         | Location                                             |
| -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% |     377 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000008001008000` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008001008000`)

|      % | Samples | Caller                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     377 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000008001009400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000008001009400`)

|      % | Samples | Caller                                           | Location                           |
| -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% |     377 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                         | Location                                          |
| -----: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% |     377 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Caller                     | Location                                          |
| -----: | ------: | -------------------------- | ------------------------------------------------- |
| 100.0% |     377 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Caller                     | Location                   |
| -----: | ------: | -------------------------- | -------------------------- |
| 100.0% |     377 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % | Samples | Caller                                                                            | Location                                                                                  |
| -----: | ------: | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% |     377 | `run(String[])`                                                                   | `org.jetbrains.kotlin.preloading.Preloader`                                               |
|   0.3% |       1 | `getEnumConstantsShared()`                                                        | `java.lang.Class`                                                                         |
|   0.3% |       1 | `parsePreprocessedCommandLineArguments(List, CommonToolArguments, Lazy, boolean)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt`                   |
|   0.3% |       1 | `loadGetRecordComponents(Class)`                                                  | `kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure.Java16SealedRecordLoader` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Caller           | Location                                               |
| -----: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% |     376 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Caller                          | Location                                                |
| -----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 100.0% |     375 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                                 | Location                                                |
| -----: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 100.0% |     374 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Caller                                                                                             | Location                                                |
| -----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     374 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                         | Location                                      |
| -----: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% |     373 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                                   | Location                                      |
| -----: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 100.0% |     368 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Caller                                                                 | Location                                     |
| -----: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     361 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Caller                                                          | Location                                      |
| -----: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| 100.0% |     361 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                                      | Location                                      |
| -----: | ------: | ----------------------------------------------------------- | --------------------------------------------- |
| 100.0% |     361 | `exec(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                                                              | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     359 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                                                                                                        | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     359 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                         | Location                                                |
| -----: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     359 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                                | Location                                     |
| -----: | ------: | --------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     359 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Caller                              | Location                                          |
| -----: | ------: | ----------------------------------- | ------------------------------------------------- |
| 100.0% |     356 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Caller                                                     | Location                                                |
| -----: | ------: | ---------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     356 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % | Samples | Caller                                                                | Location                                                          |
| -----: | ------: | --------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 100.0% |     356 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`            | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase`       |
|   4.8% |      17 | `invoke(PhaseConfig, PhaserState, LoweringContext, IrModuleFragment)` | `org.jetbrains.kotlin.backend.common.phaser.PerformByIrFilePhase` |
|   1.7% |       6 | `runPhase(NamedCompilerPhase, Object, boolean)`                       | `org.jetbrains.kotlin.backend.common.phaser.PhaseEngine`          |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     289 | `Compile::Compile` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     245 | `Compiler::compile_method` | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |     245 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     244 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |     220 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     207 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |     148 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 60.8% |      73 | `Compile::Optimize`       | `libjvm.dylib` |
| 39.2% |      47 | `Compile::optimize_loops` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |     100 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     100 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      85 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|     % | Samples | Caller                       | Location                                                 |
| ----: | ------: | ---------------------------- | -------------------------------------------------------- |
| 96.4% |      80 | `loadClass(String, boolean)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  3.6% |       3 | `loadClass(String)`          | `java.lang.ClassLoader`                                  |

##### `Compilation::build_hir` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      81 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

|     % | Samples | Caller                                              | Location                          |
| ----: | ------: | --------------------------------------------------- | --------------------------------- |
| 98.7% |      77 | `defineClass(String, byte[], int, int)`             | `java.lang.ClassLoader`           |
|  1.3% |       1 | `defineClass(String, byte[], int, int, CodeSource)` | `java.security.SecureClassLoader` |

##### `defineClass(String, byte[], int, int)` (`java.lang.ClassLoader`)

|      % | Samples | Caller              | Location                                                 |
| -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% |      77 | `findClass(String)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `WorkerThread::run` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      76 | `Thread::call_run` | `libjvm.dylib` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|      % | Samples | Caller                                                    | Location                |
| -----: | ------: | --------------------------------------------------------- | ----------------------- |
| 100.0% |      76 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|      % | Samples | Caller                                                                          | Location                |
| -----: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| 100.0% |      75 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

|      % | Samples | Caller                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |      73 | `Compilation::emit_lir` | `libjvm.dylib` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|     % | Samples | Caller                      | Location                 |
| ----: | ------: | --------------------------- | ------------------------ |
| 98.6% |      71 | `inflate(byte[], int, int)` | `java.util.zip.Inflater` |
|  1.4% |       1 | `unknown`                   | `<unknown>`              |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

|     % | Samples | Caller                   | Location                       |
| ----: | ------: | ------------------------ | ------------------------------ |
| 95.8% |      69 | `read(byte[], int, int)` | `java.util.zip.ZipInputStream` |
|  4.2% |       3 | `getBytes()`             | `jdk.internal.loader.Resource` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

|     % | Samples | Caller                   | Location                            |
| ----: | ------: | ------------------------ | ----------------------------------- |
| 98.6% |      70 | `read(byte[], int, int)` | `java.util.zip.InflaterInputStream` |
|  1.4% |       1 | `inflate(byte[])`        | `java.util.zip.Inflater`            |

##### `read(byte[], int, int)` (`java.util.zip.ZipInputStream`)

|      % | Samples | Caller         | Location                    |
| -----: | ------: | -------------- | --------------------------- |
| 100.0% |      71 | `read(byte[])` | `java.io.FilterInputStream` |

##### `read(byte[])` (`java.io.FilterInputStream`)

|      % | Samples | Caller                                                  | Location                                               |
| -----: | ------: | ------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |      71 | `loadAllClassesFromJars(Collection, int, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `KlassFactory::create_from_stream` (`libjvm.dylib`)

|     % | Samples | Caller                                               | Location       |
| ----: | ------: | ---------------------------------------------------- | -------------- |
| 92.9% |      65 | `SystemDictionary::resolve_class_from_stream`        | `libjvm.dylib` |
|  5.7% |       4 | `SystemDictionary::resolve_hidden_class_from_stream` | `libjvm.dylib` |
|  1.4% |       1 | `ClassLoader::load_class`                            | `libjvm.dylib` |

##### `jvm_define_class_common` (`libjvm.dylib`)

|      % | Samples | Caller                      | Location       |
| -----: | ------: | --------------------------- | -------------- |
| 100.0% |      70 | `JVM_DefineClassWithSource` | `libjvm.dylib` |

##### `JVM_DefineClassWithSource` (`libjvm.dylib`)

|      % | Samples | Caller                                    | Location        |
| -----: | ------: | ----------------------------------------- | --------------- |
| 100.0% |      70 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib` |

##### `Java_java_util_zip_Inflater_inflateBytesBytes` (`libzip.dylib`)

|      % | Samples | Caller                                                        | Location                 |
| -----: | ------: | ------------------------------------------------------------- | ------------------------ |
| 100.0% |      69 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater` |

##### `SystemDictionary::resolve_class_from_stream` (`libjvm.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |      69 | `jvm_define_class_common` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      67 | `ParseGenerator::generate` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|     % | Samples | Caller                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 98.5% |      66 | `Compile::Compile`                 | `libjvm.dylib` |
| 56.7% |      38 | `PredictedCallGenerator::generate` | `libjvm.dylib` |
| 46.3% |      31 | `Parse::do_call`                   | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|      % | Samples | Caller                 | Location       |
| -----: | ------: | ---------------------- | -------------- |
| 100.0% |      66 | `Parse::do_all_blocks` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % | Samples | Caller         | Location       |
| -----: | ------: | -------------- | -------------- |
| 100.0% |      66 | `Parse::Parse` | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 54.0% |      34 | `Compile::Optimize`                        | `libjvm.dylib` |
| 30.2% |      19 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
| 11.1% |       7 | `PhaseMacroExpand::expand_macro_nodes`     | `libjvm.dylib` |
|  4.8% |       3 | `Compile::process_for_post_loop_opts_igvn` | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |      62 | `Compilation::build_hir` | `libjvm.dylib` |

##### `ClassFileParser::ClassFileParser` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      62 | `KlassFactory::create_from_stream` | `libjvm.dylib` |

##### `IRScope::IRScope` (`libjvm.dylib`)

|      % | Samples | Caller   | Location       |
| -----: | ------: | -------- | -------------- |
| 100.0% |      61 | `IR::IR` | `libjvm.dylib` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      60 | `IRScope::IRScope` | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |      59 | `PhaseIterGVN::optimize` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      57 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|     % | Samples | Caller                                                             | Location                                                              |
| ----: | ------: | ------------------------------------------------------------------ | --------------------------------------------------------------------- |
| 86.3% |      44 | `resumeTask(TowerResolveManager$SuspendedResolverTask)`            | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`    |
| 49.0% |      25 | `processCandidate(Candidate, ResolutionContext, boolean, boolean)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner` |
|  2.0% |       1 | `run()`                                                            | `kotlinx.coroutines.DispatchedTask`                                   |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

|     % | Samples | Caller                              | Location                                                    |
| ----: | ------: | ----------------------------------- | ----------------------------------------------------------- |
| 11.8% |       2 | `getDefaultPerformanceManager()`    | `org.jetbrains.kotlin.cli.common.CLICompiler`               |
| 11.8% |       2 | `getMyChildren()`                   | `org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile`   |
| 11.8% |       2 | `getSuperTypeRefs()`                | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass`   |
| 11.8% |       2 | `getInstance()`                     | `org.jetbrains.kotlin.builtins.DefaultBuiltIns$Companion`   |
|  5.9% |       1 | `getConfiguredExtensionFactories()` | `org.jetbrains.kotlin.fir.extensions.FirExtensionRegistrar` |

##### `getValue()` (`kotlin.SafePublicationLazyImpl`)

|     % | Samples | Caller                | Location                                                               |
| ----: | ------: | --------------------- | ---------------------------------------------------------------------- |
| 50.0% |       7 | `getJavaField()`      | `kotlin.reflect.jvm.internal.DescriptorKProperty`                      |
| 21.4% |       3 | `getCallablesIndex()` | `org.jetbrains.kotlin.fir.scopes.impl.FirClassDeclaredMemberScopeImpl` |
| 14.3% |       2 | `getImplicitScope()`  | `org.jetbrains.kotlin.fir.resolve.calls.ImplicitReceiverValue`         |
| 14.3% |       2 | `getFirAnnotations()` | `org.jetbrains.kotlin.fir.java.enhancement.FirLazyJavaAnnotationList`  |
| 14.3% |       2 | `getDeclarations()`   | `org.jetbrains.kotlin.fir.java.FirLazyJavaDeclarationList`             |

##### `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` (`java.lang.invoke.LambdaMetafactory`)

|     % | Samples | Caller                                                                 | Location                                             |
| ----: | ------: | ---------------------------------------------------------------------- | ---------------------------------------------------- |
| 84.6% |      11 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000008001230000` |
| 15.4% |       2 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                                                       | Location                                  |
| -----: | ------: | ------------------------------------------------------------ | ----------------------------------------- |
| 100.0% |      13 | `invoke(Class, MethodHandle, String, Object, Object, Class)` | `java.lang.invoke.BootstrapMethodInvoker` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 99.8% |     950 | `thread_native_entry` | `libjvm.dylib` |
|  0.2% |       2 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |     952 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 90.5% |     860 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  8.0% |      76 | `WorkerThread::run`             | `libjvm.dylib` |
|  0.7% |       7 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
|  0.6% |       6 | `VMThread::run`                 | `libjvm.dylib` |
|  0.1% |       1 | `WatcherThread::run`            | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     950 | `Thread::call_run` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|     % | Samples | Callee                                                   | Location       |
| ----: | ------: | -------------------------------------------------------- | -------------- |
| 99.5% |     856 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib` |
|  0.2% |       2 | `ServiceThread::service_thread_entry`                    | `libjvm.dylib` |
|  0.1% |       1 | `ResolvedMethodTable::has_work`                          | `libjvm.dylib` |
|  0.1% |       1 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 97.2% |     832 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  2.7% |      23 | `CompileQueue::get`                        | `libjvm.dylib` |
|  0.1% |       1 | `CompileTaskWrapper::~CompileTaskWrapper`  | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 69.6% |     579 | `C2Compiler::compile_method`    | `libjvm.dylib` |
| 29.4% |     245 | `Compiler::compile_method`      | `libjvm.dylib` |
|  0.4% |       3 | `ciEnv::get_method_from_handle` | `libjvm.dylib` |
|  0.4% |       3 | `ciEnv::ciEnv`                  | `libjvm.dylib` |
|  0.1% |       1 | `Arena::Arena`                  | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee             | Location       |
| ----: | ------: | ------------------ | -------------- |
| 99.7% |     577 | `Compile::Compile` | `libjvm.dylib` |
|  0.3% |       2 | `Chunk::next_chop` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 50.1% |     289 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 35.9% |     207 | `Compile::Optimize`                      | `libjvm.dylib` |
| 11.4% |      66 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  1.0% |       6 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.5% |       3 | `CallGenerator::for_inline`              | `libjvm.dylib` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|     % | Samples | Callee                                                                       | Location                                               |
| ----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 82.7% |     377 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                             |
| 17.1% |      78 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
|  0.2% |       1 | `loadClass(String)`                                                          | `java.lang.ClassLoader`                                |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % | Samples | Callee          | Location                                    |
| -----: | ------: | --------------- | ------------------------------------------- |
| 100.0% |     456 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|     % | Samples | Callee                          | Location                                                |
| ----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 99.7% |     376 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.3% |       1 | `<init>()`                      | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee           | Location                                               |
| -----: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% |     377 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008001008000`)

|      % | Samples | Callee           | Location                                     |
| -----: | ------: | ---------------- | -------------------------------------------- |
| 100.0% |     377 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000008001009400`)

|      % | Samples | Callee                         | Location                                             |
| -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% |     377 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000008001008000` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     377 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000008001009400` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee                                           | Location                           |
| -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% |     377 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee                         | Location                                          |
| -----: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% |     377 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % | Samples | Callee                     | Location                                          |
| -----: | ------: | -------------------------- | ------------------------------------------------- |
| 100.0% |     377 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |
|   0.8% |       3 | `acquireMethodAccessor()`  | `java.lang.reflect.Method`                        |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|     % | Samples | Callee                                                                                             | Location                                                |
| ----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 99.7% |     375 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.3% |       1 | `setupIdeaStandaloneExecution()`                                                                   | `org.jetbrains.kotlin.cli.jvm.compiler.CompatKt`        |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|     % | Samples | Callee                                                 | Location                                                |
| ----: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 99.7% |     374 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.3% |       1 | `defaultMessageRenderer()`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                   | Location                                      |
| ----: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 99.7% |     373 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |
|  0.3% |       1 | `<clinit>()`                                             | `org.jetbrains.kotlin.config.Services`        |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                                         | Location                                      |
| -----: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% |     374 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                                               | Location                                                                |
| ----: | ------: | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| 98.7% |     368 | `exec(MessageCollector, Services, CommonCompilerArguments)`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|  1.3% |       5 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                          | Location                                      |
| ----: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| 98.1% |     361 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |
|  1.9% |       7 | `<clinit>()`                                                    | `org.jetbrains.kotlin.cli.common.ArgumentsKt` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|     % | Samples | Callee                                                         | Location                                                |
| ----: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 99.4% |     359 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|  0.6% |       2 | `getDefaultPerformanceManager()`                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee                                                                | Location                                     |
| -----: | ------: | --------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     361 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                                                                 | Location                                     |
| -----: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     361 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                                                                          | Location                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| 99.2% |     356 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`            | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                        |
|  0.6% |       2 | `reportToMessageCollector(BaseDiagnosticsCollector, MessageCollector, boolean)` | `org.jetbrains.kotlin.cli.common.fir.FirDiagnosticsCompilerResultsReporter` |
|  0.3% |       1 | `createCompoundPhase(CommonCompilerArguments)`                                  | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmCliPipeline`                      |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                         | Location                                                |
| -----: | ------: | ---------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     359 | `runPhasedPipeline(ArgumentsPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                                                                              | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     359 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                                                                                                                        | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     359 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|     % | Samples | Callee                           | Location                                                              |
| ----: | ------: | -------------------------------- | --------------------------------------------------------------------- |
| 70.2% |     250 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`      |
| 20.5% |      73 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`       |
|  7.9% |      28 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`        |
|  1.1% |       4 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmConfigurationPipelinePhase` |
|  0.3% |       1 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmWriteOutputsPhase`          |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Callee                                         | Location                                          |
| -----: | ------: | ---------------------------------------------- | ------------------------------------------------- |
| 100.0% |     356 | `phaseBody(PipelineContext, PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % | Samples | Callee                              | Location                                                         |
| -----: | ------: | ----------------------------------- | ---------------------------------------------------------------- |
| 100.0% |     356 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
|   4.8% |      17 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase`   |
|   1.7% |       6 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.ModuleLoweringPhase` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 51.2% |     148 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 19.7% |      57 | `Matcher::match`                  | `libjvm.dylib` |
| 11.4% |      33 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
| 10.7% |      31 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  3.5% |      10 | `PhaseOutput::install_code`       | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 99.6% |     244 | `Compilation::compile_method` | `libjvm.dylib` |
|  0.4% |       1 | `TraceTime::~TraceTime`       | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Callee                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     245 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location        |
| ----: | ------: | ---------------------------------- | --------------- |
| 90.2% |     220 | `Compilation::compile_java_method` | `libjvm.dylib`  |
|  8.6% |      21 | `ciEnv::register_method`           | `libjvm.dylib`  |
|  0.8% |       2 | `Dependencies::assert_common_1`    | `libjvm.dylib`  |
|  0.4% |       1 | `tlv_get_addr`                     | `libdyld.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 38.6% |      85 | `Compilation::emit_lir`        | `libjvm.dylib` |
| 36.8% |      81 | `Compilation::build_hir`       | `libjvm.dylib` |
| 22.7% |      50 | `Compilation::emit_code_body`  | `libjvm.dylib` |
|  1.8% |       4 | `ciMethod::ensure_method_data` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 35.3% |      73 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
| 22.7% |      47 | `Compile::optimize_loops`              | `libjvm.dylib` |
| 16.4% |      34 | `PhaseIterGVN::optimize`               | `libjvm.dylib` |
|  6.8% |      14 | `PhaseCCP::PhaseCCP`                   | `libjvm.dylib` |
|  4.8% |      10 | `PhaseMacroExpand::expand_macro_nodes` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 16.9% |      25 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
| 15.5% |      23 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| 14.2% |      21 | `PhaseLive::compute`                       | `libjvm.dylib` |
|  7.4% |      11 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
|  6.8% |      10 | `PhaseChaitin::gather_lrg_masks`           | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 83.3% |     100 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| 15.8% |      19 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |
|  0.8% |       1 | `Chunk::next_chop`               | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 34.0% |      34 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| 21.0% |      21 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| 12.0% |      12 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |
| 10.0% |      10 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
|  7.0% |       7 | `PhaseIdealLoop::build_loop_tree`      | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Callee                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |     100 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 85.9% |      73 | `LinearScan::do_linear_scan`     | `libjvm.dylib` |
| 12.9% |      11 | `BlockList::iterate_forward`     | `libjvm.dylib` |
|  1.2% |       1 | `ControlFlowOptimizer::optimize` | `libjvm.dylib` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                             | Location                                                 |
| ----: | ------: | ---------------------------------- | -------------------------------------------------------- |
| 92.8% |      77 | `findClass(String)`                | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  4.8% |       4 | `findBootstrapClassOrNull(String)` | `java.lang.ClassLoader`                                  |
|  3.6% |       3 | `findClass(String)`                | `java.net.URLClassLoader`                                |

##### `Compilation::build_hir` (`libjvm.dylib`)

|     % | Samples | Callee                                       | Location       |
| ----: | ------: | -------------------------------------------- | -------------- |
| 76.5% |      62 | `IR::IR`                                     | `libjvm.dylib` |
|  8.6% |       7 | `GlobalValueNumbering::GlobalValueNumbering` | `libjvm.dylib` |
|  3.7% |       3 | `IR::compute_code`                           | `libjvm.dylib` |
|  3.7% |       3 | `IR::compute_use_counts`                     | `libjvm.dylib` |
|  2.5% |       2 | `RangeCheckElimination::eliminate`           | `libjvm.dylib` |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                                                                          | Location                |
| ----: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| 97.4% |      76 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |
|  1.3% |       1 | `postDefineClass(Class, ProtectionDomain)`                                      | `java.lang.ClassLoader` |

##### `defineClass(String, byte[], int, int)` (`java.lang.ClassLoader`)

|      % | Samples | Callee                                                    | Location                |
| -----: | ------: | --------------------------------------------------------- | ----------------------- |
| 100.0% |      77 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `WorkerThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location                 |
| ----: | ------: | --------------------------------- | ------------------------ |
| 31.6% |      24 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
| 23.7% |      18 | `G1RebuildRSAndScrubTask::work`   | `libjvm.dylib`           |
| 21.1% |      16 | `G1CMConcurrentMarkingTask::work` | `libjvm.dylib`           |
| 11.8% |       9 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
|  9.2% |       7 | `G1ParallelCleaningTask::work`    | `libjvm.dylib`           |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                                    | Location                                                 |
| ----: | ------: | ----------------------------------------- | -------------------------------------------------------- |
| 98.7% |      75 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`                                          |
| 14.5% |      11 | `loadClass(String)`                       | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|     % | Samples | Callee                      | Location                   |
| ----: | ------: | --------------------------- | -------------------------- |
| 93.3% |      70 | `JVM_DefineClassWithSource` | `libjvm.dylib`             |
|  4.0% |       3 | `_platform_memmove`         | `libsystem_platform.dylib` |
|  1.3% |       1 | `jni_GetStringUTFRegion`    | `libjvm.dylib`             |
|  1.3% |       1 | `free_small`                | `libsystem_malloc.dylib`   |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

|     % | Samples | Callee                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 31.5% |      23 | `LinearScan::allocate_registers`      | `libjvm.dylib` |
| 26.0% |      19 | `LinearScan::assign_reg_num`          | `libjvm.dylib` |
| 24.7% |      18 | `LinearScan::build_intervals`         | `libjvm.dylib` |
|  5.5% |       4 | `LinearScan::compute_local_live_sets` | `libjvm.dylib` |
|  4.1% |       3 | `LinearScan::resolve_data_flow`       | `libjvm.dylib` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|     % | Samples | Callee                                           | Location       |
| ----: | ------: | ------------------------------------------------ | -------------- |
| 95.8% |      69 | `Java_java_util_zip_Inflater_inflateBytesBytes`  | `libzip.dylib` |
|  1.4% |       1 | `InterpreterRuntime::frequency_counter_overflow` | `libjvm.dylib` |
|  1.4% |       1 | `inflate`                                        | `libzip.dylib` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

|     % | Samples | Callee                      | Location                            |
| ----: | ------: | --------------------------- | ----------------------------------- |
| 97.2% |      70 | `inflate(byte[], int, int)` | `java.util.zip.Inflater`            |
|  1.4% |       1 | `fill()`                    | `java.util.zip.InflaterInputStream` |
|  1.4% |       1 | `UncommonTrapBlob`          | `<unknown>`                         |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Callee                                                        | Location                 |
| -----: | ------: | ------------------------------------------------------------- | ------------------------ |
| 100.0% |      71 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater` |

##### `read(byte[], int, int)` (`java.util.zip.ZipInputStream`)

|     % | Samples | Callee                     | Location                            |
| ----: | ------: | -------------------------- | ----------------------------------- |
| 97.2% |      69 | `read(byte[], int, int)`   | `java.util.zip.InflaterInputStream` |
|  2.8% |       2 | `update(byte[], int, int)` | `java.util.zip.CRC32`               |

##### `read(byte[])` (`java.io.FilterInputStream`)

|      % | Samples | Callee                   | Location                       |
| -----: | ------: | ------------------------ | ------------------------------ |
| 100.0% |      71 | `read(byte[], int, int)` | `java.util.zip.ZipInputStream` |

##### `KlassFactory::create_from_stream` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 88.6% |      62 | `ClassFileParser::ClassFileParser`       | `libjvm.dylib` |
| 11.4% |       8 | `ClassFileParser::create_instance_klass` | `libjvm.dylib` |

##### `jvm_define_class_common` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 98.6% |      69 | `SystemDictionary::resolve_class_from_stream` | `libjvm.dylib` |
|  1.4% |       1 | `SymbolTable::new_symbol`                     | `libjvm.dylib` |

##### `JVM_DefineClassWithSource` (`libjvm.dylib`)

|      % | Samples | Callee                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |      70 | `jvm_define_class_common` | `libjvm.dylib` |

##### `Java_java_util_zip_Inflater_inflateBytesBytes` (`libzip.dylib`)

|     % | Samples | Callee                              | Location       |
| ----: | ------: | ----------------------------------- | -------------- |
| 69.6% |      48 | `inflate_fast`                      | `libzip.dylib` |
| 23.2% |      16 | `inflate`                           | `libzip.dylib` |
|  4.3% |       3 | `jni_ReleasePrimitiveArrayCritical` | `libjvm.dylib` |
|  2.9% |       2 | `jni_GetPrimitiveArrayCritical`     | `libjvm.dylib` |

##### `SystemDictionary::resolve_class_from_stream` (`libjvm.dylib`)

|     % | Samples | Callee                                    | Location       |
| ----: | ------: | ----------------------------------------- | -------------- |
| 94.2% |      65 | `KlassFactory::create_from_stream`        | `libjvm.dylib` |
|  5.8% |       4 | `SystemDictionary::define_instance_class` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|     % | Samples | Callee                  | Location       |
| ----: | ------: | ----------------------- | -------------- |
| 98.5% |      66 | `Parse::do_all_blocks`  | `libjvm.dylib` |
|  6.0% |       4 | `Parse::do_exits`       | `libjvm.dylib` |
|  1.5% |       1 | `Parse::merge_common`   | `libjvm.dylib` |
|  1.5% |       1 | `Parse::init_blocks`    | `libjvm.dylib` |
|  1.5% |       1 | `ciMethod::method_data` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % | Samples | Callee         | Location       |
| -----: | ------: | -------------- | -------------- |
| 100.0% |      67 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|     % | Samples | Callee                   | Location       |
| ----: | ------: | ------------------------ | -------------- |
| 84.8% |      56 | `Parse::do_call`         | `libjvm.dylib` |
| 19.7% |      13 | `Parse::do_field_access` | `libjvm.dylib` |
|  4.5% |       3 | `Parse::array_load`      | `libjvm.dylib` |
|  3.0% |       2 | `Parse::do_exceptions`   | `libjvm.dylib` |
|  3.0% |       2 | `Parse::array_store`     | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % | Samples | Callee                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |      66 | `Parse::do_one_block`            | `libjvm.dylib` |
|   1.5% |       1 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |
|   1.5% |       1 | `Parse::merge_common`            | `libjvm.dylib` |
|   1.5% |       1 | `SafePointNode::jvms`            | `libjvm.dylib` |
|   1.5% |       1 | `RegionNode::Ideal`              | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                    | Location       |
| ----: | ------: | ----------------------------------------- | -------------- |
| 93.7% |      59 | `PhaseIterGVN::transform_old`             | `libjvm.dylib` |
|  1.6% |       1 | `PhaseIterGVN::remove_globally_dead_node` | `libjvm.dylib` |
|  1.6% |       1 | `Node::hash`                              | `libjvm.dylib` |
|  1.6% |       1 | `CallStaticJavaNode::Ideal`               | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 98.4% |      61 | `IRScope::IRScope`                | `libjvm.dylib` |
|  1.6% |       1 | `ciMethod::has_balanced_monitors` | `libjvm.dylib` |

##### `ClassFileParser::ClassFileParser` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 90.3% |      56 | `ClassFileParser::parse_stream`               | `libjvm.dylib` |
|  9.7% |       6 | `ClassFileParser::post_process_parsed_stream` | `libjvm.dylib` |

##### `IRScope::IRScope` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 98.4% |      60 | `GraphBuilder::GraphBuilder` | `libjvm.dylib` |
|  1.6% |       1 | `XHandlers::XHandlers`       | `libjvm.dylib` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 93.3% |      56 | `GraphBuilder::iterate_all_blocks` | `libjvm.dylib` |
|  3.3% |       2 | `BlockBegin::iterate_preorder`     | `libjvm.dylib` |
|  1.7% |       1 | `GraphBuilder::setup_start_block`  | `libjvm.dylib` |
|  1.7% |       1 | `BlockBegin::try_merge`            | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|     % | Samples | Callee                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 16.9% |      10 | `PhiNode::Ideal`                      | `libjvm.dylib` |
| 11.9% |       7 | `PhaseIterGVN::subsume_node`          | `libjvm.dylib` |
|  6.8% |       4 | `NodeHash::hash_find_insert`          | `libjvm.dylib` |
|  6.8% |       4 | `PhaseIterGVN::add_users_to_worklist` | `libjvm.dylib` |
|  6.8% |       4 | `StoreNode::Ideal`                    | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 68.4% |      39 | `Matcher::xform`                              | `libjvm.dylib` |
| 12.3% |       7 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |
| 12.3% |       7 | `Matcher::find_shared`                        | `libjvm.dylib` |
|  1.8% |       1 | `ConvI2LNode::Opcode`                         | `libjvm.dylib` |
|  1.8% |       1 | `Matcher::find_shared_post_visit`             | `libjvm.dylib` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|     % | Samples | Callee                  | Location                                                                                                      |
| ----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------------- |
| 66.7% |      34 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`                         |
| 49.0% |      25 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`                      |
|  7.8% |       4 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$2`                      |
|  5.9% |       3 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirInvokeResolveTowerExtension$enqueueResolverTasksForInvoke$3` |
|  3.9% |       2 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$4`                      |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

|     % | Samples | Callee     | Location                                                                               |
| ----: | ------: | ---------- | -------------------------------------------------------------------------------------- |
| 11.8% |       2 | `invoke()` | `org.jetbrains.kotlin.cli.common.CLICompiler$$Lambda.0x000000800100a000`               |
| 11.8% |       2 | `invoke()` | `org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile$$Lambda.0x000000800137ba80`   |
| 11.8% |       2 | `invoke()` | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass$$Lambda.0x000000800160fb50`   |
| 11.8% |       2 | `invoke()` | `org.jetbrains.kotlin.builtins.DefaultBuiltIns$$Lambda.0x0000008001752950`             |
|  5.9% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.extensions.FirExtensionRegistrar$$Lambda.0x0000008001370000` |

##### `getValue()` (`kotlin.SafePublicationLazyImpl`)

|     % | Samples | Callee     | Location                                                                                          |
| ----: | ------: | ---------- | ------------------------------------------------------------------------------------------------- |
| 50.0% |       7 | `invoke()` | `kotlin.reflect.jvm.internal.DescriptorKProperty$$Lambda$0`                                       |
| 21.4% |       3 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.impl.FirClassDeclaredMemberScopeImpl$$Lambda.0x000000800161dc00` |
| 14.3% |       2 | `invoke()` | `org.jetbrains.kotlin.fir.java.enhancement.FirLazyJavaAnnotationList$$Lambda.0x000000800160e198`  |
| 14.3% |       2 | `invoke()` | `org.jetbrains.kotlin.fir.java.FirLazyJavaDeclarationList$$Lambda.0x000000800160f2a8`             |
| 14.3% |       2 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.impl.AbstractFirUseSiteMemberScope$$Lambda.0x000000800162fb50`   |

##### `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` (`java.lang.invoke.LambdaMetafactory`)

|     % | Samples | Callee                                                                                                                   | Location                                       |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| 92.3% |      12 | `buildCallSite()`                                                                                                        | `java.lang.invoke.InnerClassLambdaMetafactory` |
|  7.7% |       1 | `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % | Samples | Callee                                                                 | Location                                             |
| ----: | ------: | ---------------------------------------------------------------------- | ---------------------------------------------------- |
| 84.6% |      11 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000008001230000` |
| 15.4% |       2 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.0% |      42 | `inflate_fast` (`libzip.dylib`) ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`              |
| 1.1% |      16 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                 |
| 1.1% |      15 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                   |
| 0.8% |      11 | `PhaseLive::compute` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                  |
| 0.8% |      11 | `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                    |
| 0.8% |      11 | `inflate_table` (`libzip.dylib`) ← `inflate` ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |
| 0.6% |       9 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThread::run` (`libjvm.dylib`) ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.6% |       9 | `LinearScan::build_intervals` (`libjvm.dylib`) ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                               |
| 0.5% |       7 | `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                      |
| 0.5% |       7 | `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                  |
| 0.5% |       7 | `Matcher::xform` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                       |
| 0.4% |       6 | `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                              |
| 0.4% |       6 | `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                 |
| 0.4% |       6 | `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`) ← `PhaseIdealLoop::build_loop_late` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                    |
| 0.4% |       6 | `PhaseIdealLoop::Dominators` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                       |
| 0.4% |       6 | `LinearScan::assign_reg_num` (`libjvm.dylib`) ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                |
| 0.4% |       5 | `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                      |
| 0.4% |       5 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` (`libjvm.dylib`) ← `PhaseChaitin::build_ifg_physical` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                               |
| 0.4% |       5 | `Arena::contains` (`libjvm.dylib`) ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                   |
| 0.4% |       5 | `PhiNode::Ideal` (`libjvm.dylib`) ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                               |

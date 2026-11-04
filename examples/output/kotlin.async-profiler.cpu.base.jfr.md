# Sampling profile

Collected 1,772 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Native           | 43.6% |     772 |
| Compiler         | 40.1% |     710 |
| Ours             | 10.9% |     193 |
| Standard library |  4.4% |      78 |
| JIT              |  1.1% |      19 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── … 1,243 samples (70.1%) Thread::call_run at libjvm.dylib
│   ├── 1,174 samples (66.3%) JavaThread::thread_main_inner
│   │   └── 1,171 samples (66.1%) CompileBroker::compiler_thread_loop
│   │       ├── 1,068 samples (60.3%) CompileBroker::invoke_compiler_on_method
│   │       │   ├── 746 samples (42.1%) C2Compiler::compile_method
│   │       │   │   └── 745 samples (42.0%) Compile::Compile
│   │       │   │       ├── … 98 samples (5.5%) Parse::do_one_block at libjvm.dylib
│   │       │   │       │   ├── 59 samples (3.3%) Parse::do_call
│   │       │   │       │   │   ├── … 26 samples (1.5%) ciTypeFlow::flow_block at libjvm.dylib
│   │       │   │       │   │   │   └── … 16 samples (0.9%) ciBytecodeStream::get_method at libjvm.dylib
│   │       │   │       │   │   │       └── … 8 samples (0.5%, self 7.0% globally) __psynch_mutexwait at libsystem_kernel.dylib
│   │       │   │       │   │   └── 24 samples (1.4%) 6 more callees, led by (0.5%) PredictedCallGenerator::generate
│   │       │   │       │   └── 39 samples (2.2%) 9 more callees, led by (0.8%) Parse::do_field_access
│   │       │   │       └── 639 samples (36.1%) 9 more callees, led by (20.3%) Compile::Code_Gen
│   │       │   ├── … 296 samples (16.7%) Compilation::compile_method at libjvm.dylib
│   │       │   │   ├── 261 samples (14.7%) Compilation::compile_java_method
│   │       │   │   │   ├── 112 samples (6.3%) Compilation::build_hir
│   │       │   │   │   │   ├── … 78 samples (4.4%) GraphBuilder::iterate_bytecodes_for_block at libjvm.dylib
│   │       │   │   │   │   │   ├── … 1 sample (0.1%, self 1.4% globally) SymbolTable::do_lookup at libjvm.dylib
│   │       │   │   │   │   │   └── 70 samples (4.0%) 5 more callees, led by (3.3%) GraphBuilder::invoke
│   │       │   │   │   │   └── 27 samples (1.5%) 6 more callees, led by (0.5%) GlobalValueNumbering::GlobalValueNumbering
│   │       │   │   │   └── 149 samples (8.4%) 5 more callees, led by (5.6%) Compilation::emit_lir
│   │       │   │   └── 35 samples (2.0%) 2 more callees, led by (1.9%) ciEnv::register_method
│   │       │   └── 21 samples (1.2%) 4 more callees, led by (0.5%) ciEnv::ciEnv
│   │       └── … 92 samples (5.2%) PlatformMonitor::wait at libjvm.dylib
│   │           └── 88 samples (5.0%, self 5.8% globally) __psynch_cvwait at libsystem_kernel.dylib
│   └── 69 samples (3.9%) 4 more callees, led by (2.9%) WorkerThread::run
└── 521 samples (29.4%) main(String[]) at org.jetbrains.kotlin.preloading.Preloader
    └── 521 samples (29.4%) run(String[])
        ├── … 434 samples (24.5%) exec(MessageCollector, Services, CommonCompilerArguments) at org.jetbrains.kotlin.cli.common.CLICompiler
        │   ├── … 419 samples (23.6%) invoke(PhaseConfig, PhaserState, LoggingContext, Object) at org.jetbrains.kotlin.config.phaser.NamedCompilerPhase
        │   │   ├── 387 samples (21.8%) phaseBody(LoggingContext, Object) at org.jetbrains.kotlin.cli.pipeline.PipelinePhase
        │   │   │   └── 387 samples (21.8%) phaseBody(PipelineContext, PipelineArtifact)
        │   │   │       └── 387 samples (21.8%) 5 more callees, led by (13.5%) executePhase(PipelineArtifact) at org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase
        │   │   └── 32 samples (1.8%) 3 more callees, led by (1.2%) phaseBody(LoggingContext, Object) at org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase
        │   └── 9 samples (0.5%) <clinit>() at org.jetbrains.kotlin.cli.common.ArgumentsKt …
        └── … 72 samples (4.1%) read(byte[], int, int) at java.util.zip.ZipInputStream
            └── … 67 samples (3.8%) Java_java_util_zip_Inflater_inflateBytesBytes at libzip.dylib
                ├── 50 samples (2.8%) inflate_fast
                └── 17 samples (1.0%) 3 more callees, led by (0.8%) inflate
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|    % | Samples | Function                                                                                                                                                 | Location                         |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| 7.0% |     124 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`         |
| 5.8% |     102 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`         |
| 2.8% |      50 | `inflate_fast`                                                                                                                                           | `libzip.dylib`                   |
| 1.4% |      24 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`                   |
| 1.2% |      22 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`                  |
| 1.0% |      17 | `PhaseChaitin::build_ifg_physical`                                                                                                                       | `libjvm.dylib`                   |
| 0.9% |      16 | `PhaseLive::compute`                                                                                                                                     | `libjvm.dylib`                   |
| 0.9% |      16 | `PhaseIdealLoop::build_loop_early`                                                                                                                       | `libjvm.dylib`                   |
| 0.8% |      15 | `PhaseChaitin::Split`                                                                                                                                    | `libjvm.dylib`                   |
| 0.8% |      14 | `ciObjectFactory::get_metadata`                                                                                                                          | `libjvm.dylib`                   |
| 0.8% |      14 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`                   |
| 0.7% |      12 | `PhaseChaitin::gather_lrg_masks`                                                                                                                         | `libjvm.dylib`                   |
| 0.7% |      12 | `semaphore_wait_trap`                                                                                                                                    | `libsystem_kernel.dylib`         |
| 0.6% |      11 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib`       |
| 0.6% |      11 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`                   |
| 0.6% |      11 | `PhaseIdealLoop::build_loop_late_post_work`                                                                                                              | `libjvm.dylib`                   |
| 0.6% |      11 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`        |
| 0.6% |      11 | `checkNotNullParameter(Object, String)`                                                                                                                  | `kotlin.jvm.internal.Intrinsics` |
| 0.6% |      10 | `bsearch`                                                                                                                                                | `libsystem_c.dylib`              |
| 0.6% |      10 | `PhaseChaitin::elide_copy`                                                                                                                               | `libjvm.dylib`                   |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Native

|    % | Samples | Function                                                                                                                                                 | Location                   |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 7.0% |     124 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
| 5.8% |     102 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 2.8% |      50 | `inflate_fast`                                                                                                                                           | `libzip.dylib`             |
| 1.4% |      24 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`             |
| 1.2% |      22 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
| 0.8% |      14 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
| 0.7% |      12 | `semaphore_wait_trap`                                                                                                                                    | `libsystem_kernel.dylib`   |
| 0.6% |      11 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
| 0.6% |      11 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| 0.6% |      11 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |
| 0.6% |      10 | `bsearch`                                                                                                                                                | `libsystem_c.dylib`        |
| 0.5% |       9 | `inflate_table`                                                                                                                                          | `libzip.dylib`             |
| 0.3% |       6 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                        | `libjvm.dylib`             |
| 0.3% |       6 | `resource_allocate_bytes`                                                                                                                                | `libjvm.dylib`             |
| 0.3% |       6 | `Dictionary::find`                                                                                                                                       | `libjvm.dylib`             |
| 0.3% |       6 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                           | `libjvm.dylib`             |
| 0.3% |       5 | `mach_absolute_time`                                                                                                                                     | `libsystem_kernel.dylib`   |
| 0.3% |       5 | `sys_icache_invalidate`                                                                                                                                  | `libsystem_platform.dylib` |
| 0.3% |       5 | `Arena::contains`                                                                                                                                        | `libjvm.dylib`             |
| 0.3% |       5 | `inflate`                                                                                                                                                | `libzip.dylib`             |

##### Compiler

|    % | Samples | Function                                        | Location       |
| ---: | ------: | ----------------------------------------------- | -------------- |
| 1.0% |      17 | `PhaseChaitin::build_ifg_physical`              | `libjvm.dylib` |
| 0.9% |      16 | `PhaseLive::compute`                            | `libjvm.dylib` |
| 0.9% |      16 | `PhaseIdealLoop::build_loop_early`              | `libjvm.dylib` |
| 0.8% |      15 | `PhaseChaitin::Split`                           | `libjvm.dylib` |
| 0.8% |      14 | `ciObjectFactory::get_metadata`                 | `libjvm.dylib` |
| 0.7% |      12 | `PhaseChaitin::gather_lrg_masks`                | `libjvm.dylib` |
| 0.6% |      11 | `PhaseIdealLoop::build_loop_late_post_work`     | `libjvm.dylib` |
| 0.6% |      10 | `PhaseChaitin::elide_copy`                      | `libjvm.dylib` |
| 0.5% |       9 | `PhaseAggressiveCoalesce::insert_copies`        | `libjvm.dylib` |
| 0.5% |       9 | `IndexSetIterator::advance_and_next`            | `libjvm.dylib` |
| 0.5% |       8 | `LinearScanWalker::alloc_free_reg`              | `libjvm.dylib` |
| 0.5% |       8 | `IntervalWalker::walk_to`                       | `libjvm.dylib` |
| 0.4% |       7 | `Node::is_CFG`                                  | `libjvm.dylib` |
| 0.4% |       7 | `ValueStack::values_do`                         | `libjvm.dylib` |
| 0.3% |       6 | `PhaseIdealLoop::Dominators`                    | `libjvm.dylib` |
| 0.3% |       6 | `PhaseIterGVN::transform_old`                   | `libjvm.dylib` |
| 0.3% |       6 | `LinearScanWalker::free_collect_inactive_fixed` | `libjvm.dylib` |
| 0.3% |       6 | `LinearScan::resolve_data_flow`                 | `libjvm.dylib` |
| 0.3% |       6 | `PhaseIFG::remove_node`                         | `libjvm.dylib` |
| 0.3% |       5 | `PhaseCFG::schedule_pinned_nodes`               | `libjvm.dylib` |

##### Ours

|    % | Samples | Function                                                                                   | Location                                                                                             |
| ---: | ------: | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| 0.1% |       2 | `readMethod(ClassVisitor, Context, int)`                                                   | `org.jetbrains.org.objectweb.asm.ClassReader`                                                        |
| 0.1% |       2 | `constructFunctionType(FirFunction, FunctionTypeKind)`                                     | `org.jetbrains.kotlin.fir.resolve.ResolveUtilsKt`                                                    |
| 0.1% |       2 | `isAnyOfDelegateOperators(FirElement)`                                                     | `org.jetbrains.kotlin.fir.resolve.inference.FirDelegatedPropertyInferenceSessionKt`                  |
| 0.1% |       2 | `toIrType(ConeKotlinType, ConversionTypeOrigin, List, boolean, boolean, boolean, boolean)` | `org.jetbrains.kotlin.fir.backend.Fir2IrTypeConverter`                                               |
| 0.1% |       2 | `runAfter(PhaseConfig, PhaserState, LoggingContext, Object, Object)`                       | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`                                              |
| 0.1% |       2 | `execute(AbstractInsnNode, Interpreter)`                                                   | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame`                                                |
| 0.1% |       2 | `rewriteLabels(LineNumberNode)`                                                            | `org.jetbrains.kotlin.codegen.optimization.LabelNormalizationMethodTransformer$TransformerForMethod` |
| 0.1% |       2 | `traverseCfg()`                                                                            | `org.jetbrains.kotlin.codegen.optimization.common.InstructionLivenessAnalyzer`                       |
| 0.1% |       2 | `getOwner()`                                                                               | `org.jetbrains.kotlin.ir.symbols.impl.IrSymbolBase`                                                  |
| 0.1% |       2 | `getStatements()`                                                                          | `org.jetbrains.kotlin.ir.expressions.impl.IrBlockImpl`                                               |
| 0.1% |       1 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                    | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                               |
| 0.1% |       1 | `read(VirtualFile, KotlinCliJavaFileManager, GlobalSearchScope)`                           | `org.jetbrains.kotlin.resolve.jvm.modules.JavaModuleInfo$Companion`                                  |
| 0.1% |       1 | `<init>()`                                                                                 | `org.jetbrains.kotlin.protobuf.AbstractMessageLite`                                                  |
| 0.1% |       1 | `<init>(int)`                                                                              | `org.jetbrains.kotlin.protobuf.ByteString$Output`                                                    |
| 0.1% |       1 | `concat(ByteString)`                                                                       | `org.jetbrains.kotlin.protobuf.ByteString`                                                           |
| 0.1% |       1 | `advance()`                                                                                | `org.jetbrains.kotlin.parsing.AbstractKotlinParsing`                                                 |
| 0.1% |       1 | `createTruncatedBuilder(int)`                                                              | `org.jetbrains.kotlin.parsing.AbstractKotlinParsing`                                                 |
| 0.1% |       1 | `isInline()`                                                                               | `org.jetbrains.kotlin.fir.declarations.impl.FirDeclarationStatusImpl`                                |
| 0.1% |       1 | `getLexemeIndex(boolean)`                                                                  | `com.intellij.lang.impl.PsiBuilderImpl$StartMarker`                                                  |
| 0.1% |       1 | `addModifier(LighterASTNode, boolean)`                                                     | `org.jetbrains.kotlin.fir.lightTree.fir.modifier.ModifierList`                                       |

##### Standard library

|    % | Samples | Function                                                                             | Location                                                                                    |
| ---: | ------: | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| 0.6% |      11 | `checkNotNullParameter(Object, String)`                                              | `kotlin.jvm.internal.Intrinsics`                                                            |
| 0.2% |       3 | `equals(Object)`                                                                     | `java.lang.String`                                                                          |
| 0.1% |       2 | `resize()`                                                                           | `java.util.HashMap`                                                                         |
| 0.1% |       2 | `removeNode(int, Object, Object, boolean, boolean)`                                  | `java.util.HashMap`                                                                         |
| 0.1% |       2 | `putAll(Map, Pair[])`                                                                | `kotlin.collections.MapsKt__MapsKt`                                                         |
| 0.1% |       1 | `getNode(Object)`                                                                    | `java.util.HashMap`                                                                         |
| 0.1% |       1 | `<init>(AbstractStringBuilder, Void)`                                                | `java.lang.String`                                                                          |
| 0.1% |       1 | `append(String)`                                                                     | `java.lang.AbstractStringBuilder`                                                           |
| 0.1% |       1 | `next()`                                                                             | `kotlin.collections.builders.MapBuilder$EntriesItr`                                         |
| 0.1% |       1 | `<init>()`                                                                           | `java.util.AbstractMap`                                                                     |
| 0.1% |       1 | `hasNext()`                                                                          | `java.util.ArrayList$Itr`                                                                   |
| 0.1% |       1 | `<init>(AtomicReferenceFieldUpdater$AtomicReferenceFieldUpdaterImpl, Class, String)` | `java.util.concurrent.atomic.AtomicReferenceFieldUpdater$AtomicReferenceFieldUpdaterImpl$1` |
| 0.1% |       1 | `invokeOnCompletion$default(Job, boolean, boolean, Function1, int, Object)`          | `kotlinx.coroutines.Job$DefaultImpls`                                                       |
| 0.1% |       1 | `generate(MethodType)`                                                               | `java.lang.invoke.InnerClassLambdaMetafactory$ForwardingMethodGenerator`                    |
| 0.1% |       1 | `toList(Iterable)`                                                                   | `kotlin.collections.CollectionsKt___CollectionsKt`                                          |
| 0.1% |       1 | `newNode(int, Object, Object, HashMap$Node)`                                         | `java.util.HashMap`                                                                         |
| 0.1% |       1 | `calcNext()`                                                                         | `kotlin.sequences.FilteringSequence$iterator$1`                                             |
| 0.1% |       1 | `register(Object, Runnable)`                                                         | `java.lang.ref.Cleaner`                                                                     |
| 0.1% |       1 | `getOrImplicitDefaultNullable(Map, Object)`                                          | `kotlin.collections.MapsKt__MapWithDefaultKt`                                               |
| 0.1% |       1 | `<init>()`                                                                           | `java.util.ArrayList`                                                                       |

##### JIT

|    % | Samples | Function                   | Location    |
| ---: | ------: | -------------------------- | ----------- |
| 0.3% |       5 | `I2C/C2I adapters(0xbb)`   | `<unknown>` |
| 0.3% |       5 | `I2C/C2I adapters(0xb)`    | `<unknown>` |
| 0.2% |       4 | `I2C/C2I adapters(0xbbb)`  | `<unknown>` |
| 0.1% |       2 | `itable stub`              | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbab)`  | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xa)`    | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbbb)` | `<unknown>` |

#### Lines

Lines with the largest contribution to each function's self samples.

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |      11 | `kotlin.jvm.internal.Intrinsics:130` |

##### `equals(Object)` (`java.lang.String`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 33.3% |       1 | `java.lang.String:1847` |
| 33.3% |       1 | `java.lang.String:1852` |
| 33.3% |       1 | `java.lang.String:1850` |

##### `readMethod(ClassVisitor, Context, int)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|     % | Samples | Location                                           |
| ----: | ------: | -------------------------------------------------- |
| 50.0% |       1 | `org.jetbrains.org.objectweb.asm.ClassReader:1324` |
| 50.0% |       1 | `org.jetbrains.org.objectweb.asm.ClassReader:1315` |

##### `constructFunctionType(FirFunction, FunctionTypeKind)` (`org.jetbrains.kotlin.fir.resolve.ResolveUtilsKt`)

|     % | Samples | Location                                              |
| ----: | ------: | ----------------------------------------------------- |
| 50.0% |       1 | `org.jetbrains.kotlin.fir.resolve.ResolveUtilsKt:924` |
| 50.0% |       1 | `org.jetbrains.kotlin.fir.resolve.ResolveUtilsKt:235` |

##### `isAnyOfDelegateOperators(FirElement)` (`org.jetbrains.kotlin.fir.resolve.inference.FirDelegatedPropertyInferenceSessionKt`)

|      % | Samples | Location                                                                                |
| -----: | ------: | --------------------------------------------------------------------------------------- |
| 100.0% |       2 | `org.jetbrains.kotlin.fir.resolve.inference.FirDelegatedPropertyInferenceSessionKt:208` |

##### `toIrType(ConeKotlinType, ConversionTypeOrigin, List, boolean, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.backend.Fir2IrTypeConverter`)

|     % | Samples | Location                                                   |
| ----: | ------: | ---------------------------------------------------------- |
| 50.0% |       1 | `org.jetbrains.kotlin.fir.backend.Fir2IrTypeConverter:177` |
| 50.0% |       1 | `org.jetbrains.kotlin.fir.backend.Fir2IrTypeConverter:171` |

##### `runAfter(PhaseConfig, PhaserState, LoggingContext, Object, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % | Samples | Location                                                    |
| -----: | ------: | ----------------------------------------------------------- |
| 100.0% |       2 | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase:129` |

##### `execute(AbstractInsnNode, Interpreter)` (`org.jetbrains.org.objectweb.asm.tree.analysis.Frame`)

|      % | Samples | Location                                                  |
| -----: | ------: | --------------------------------------------------------- |
| 100.0% |       2 | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame:298` |

##### `rewriteLabels(LineNumberNode)` (`org.jetbrains.kotlin.codegen.optimization.LabelNormalizationMethodTransformer$TransformerForMethod`)

|      % | Samples | Location                                                                                                 |
| -----: | ------: | -------------------------------------------------------------------------------------------------------- |
| 100.0% |       2 | `org.jetbrains.kotlin.codegen.optimization.LabelNormalizationMethodTransformer$TransformerForMethod:123` |

##### `traverseCfg()` (`org.jetbrains.kotlin.codegen.optimization.common.InstructionLivenessAnalyzer`)

|      % | Samples | Location                                                                          |
| -----: | ------: | --------------------------------------------------------------------------------- |
| 100.0% |       2 | `org.jetbrains.kotlin.codegen.optimization.common.InstructionLivenessAnalyzer:82` |

##### `getOwner()` (`org.jetbrains.kotlin.ir.symbols.impl.IrSymbolBase`)

|      % | Samples | Location                                               |
| -----: | ------: | ------------------------------------------------------ |
| 100.0% |       2 | `org.jetbrains.kotlin.ir.symbols.impl.IrSymbolBase:37` |

##### `getStatements()` (`org.jetbrains.kotlin.ir.expressions.impl.IrBlockImpl`)

|      % | Samples | Location                                                  |
| -----: | ------: | --------------------------------------------------------- |
| 100.0% |       2 | `org.jetbrains.kotlin.ir.expressions.impl.IrBlockImpl:29` |

##### `resize()` (`java.util.HashMap`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 50.0% |       1 | `java.util.HashMap:710` |
| 50.0% |       1 | `java.util.HashMap:713` |

##### `removeNode(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 50.0% |       1 | `java.util.HashMap:843` |
| 50.0% |       1 | `java.util.HashMap:851` |

##### `putAll(Map, Pair[])` (`kotlin.collections.MapsKt__MapsKt`)

|     % | Samples | Location                                |
| ----: | ------: | --------------------------------------- |
| 50.0% |       1 | `kotlin.collections.MapsKt__MapsKt:579` |
| 50.0% |       1 | `kotlin.collections.MapsKt__MapsKt:578` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|      % | Samples | Location                                                   |
| -----: | ------: | ---------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils:143` |

##### `read(VirtualFile, KotlinCliJavaFileManager, GlobalSearchScope)` (`org.jetbrains.kotlin.resolve.jvm.modules.JavaModuleInfo$Companion`)

|      % | Samples | Location                                                               |
| -----: | ------: | ---------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.resolve.jvm.modules.JavaModuleInfo$Companion:79` |

##### `<init>()` (`org.jetbrains.kotlin.protobuf.AbstractMessageLite`)

|      % | Samples | Location                                               |
| -----: | ------: | ------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.protobuf.AbstractMessageLite:46` |

##### `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`)

|      % | Samples | Location                                              |
| -----: | ------: | ----------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.protobuf.ByteString$Output:788` |

##### `concat(ByteString)` (`org.jetbrains.kotlin.protobuf.ByteString`)

|      % | Samples | Location                                       |
| -----: | ------: | ---------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.protobuf.ByteString:397` |

##### `advance()` (`org.jetbrains.kotlin.parsing.AbstractKotlinParsing`)

|      % | Samples | Location                                                 |
| -----: | ------: | -------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.parsing.AbstractKotlinParsing:147` |

##### `createTruncatedBuilder(int)` (`org.jetbrains.kotlin.parsing.AbstractKotlinParsing`)

|      % | Samples | Location                                                 |
| -----: | ------: | -------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.parsing.AbstractKotlinParsing:381` |

##### `isInline()` (`org.jetbrains.kotlin.fir.declarations.impl.FirDeclarationStatusImpl`)

|      % | Samples | Location                                                                 |
| -----: | ------: | ------------------------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.declarations.impl.FirDeclarationStatusImpl:72` |

##### `getLexemeIndex(boolean)` (`com.intellij.lang.impl.PsiBuilderImpl$StartMarker`)

|      % | Samples | Location                                                |
| -----: | ------: | ------------------------------------------------------- |
| 100.0% |       1 | `com.intellij.lang.impl.PsiBuilderImpl$StartMarker:349` |

##### `addModifier(LighterASTNode, boolean)` (`org.jetbrains.kotlin.fir.lightTree.fir.modifier.ModifierList`)

|      % | Samples | Location                                                          |
| -----: | ------: | ----------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.lightTree.fir.modifier.ModifierList:33` |

##### `getNode(Object)` (`java.util.HashMap`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.util.HashMap:580` |

##### `<init>(AbstractStringBuilder, Void)` (`java.lang.String`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.lang.String:4781` |

##### `append(String)` (`java.lang.AbstractStringBuilder`)

|      % | Samples | Location                              |
| -----: | ------: | ------------------------------------- |
| 100.0% |       1 | `java.lang.AbstractStringBuilder:588` |

##### `next()` (`kotlin.collections.builders.MapBuilder$EntriesItr`)

|      % | Samples | Location                                                |
| -----: | ------: | ------------------------------------------------------- |
| 100.0% |       1 | `kotlin.collections.builders.MapBuilder$EntriesItr:548` |

##### `<init>()` (`java.util.AbstractMap`)

|      % | Samples | Location                   |
| -----: | ------: | -------------------------- |
| 100.0% |       1 | `java.util.AbstractMap:77` |

##### `hasNext()` (`java.util.ArrayList$Itr`)

|      % | Samples | Location                       |
| -----: | ------: | ------------------------------ |
| 100.0% |       1 | `java.util.ArrayList$Itr:1044` |

##### `<init>(AtomicReferenceFieldUpdater$AtomicReferenceFieldUpdaterImpl, Class, String)` (`java.util.concurrent.atomic.AtomicReferenceFieldUpdater$AtomicReferenceFieldUpdaterImpl$1`)

|      % | Samples | Location                                                                                        |
| -----: | ------: | ----------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `java.util.concurrent.atomic.AtomicReferenceFieldUpdater$AtomicReferenceFieldUpdaterImpl$1:333` |

##### `invokeOnCompletion$default(Job, boolean, boolean, Function1, int, Object)` (`kotlinx.coroutines.Job$DefaultImpls`)

|      % | Samples | Location                                  |
| -----: | ------: | ----------------------------------------- |
| 100.0% |       1 | `kotlinx.coroutines.Job$DefaultImpls:353` |

##### `generate(MethodType)` (`java.lang.invoke.InnerClassLambdaMetafactory$ForwardingMethodGenerator`)

|      % | Samples | Location                                                                     |
| -----: | ------: | ---------------------------------------------------------------------------- |
| 100.0% |       1 | `java.lang.invoke.InnerClassLambdaMetafactory$ForwardingMethodGenerator:526` |

##### `toList(Iterable)` (`kotlin.collections.CollectionsKt___CollectionsKt`)

|      % | Samples | Location                                                |
| -----: | ------: | ------------------------------------------------------- |
| 100.0% |       1 | `kotlin.collections.CollectionsKt___CollectionsKt:1503` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|      % | Samples | Location                 |
| -----: | ------: | ------------------------ |
| 100.0% |       1 | `java.util.HashMap:1909` |

##### `calcNext()` (`kotlin.sequences.FilteringSequence$iterator$1`)

|      % | Samples | Location                                            |
| -----: | ------: | --------------------------------------------------- |
| 100.0% |       1 | `kotlin.sequences.FilteringSequence$iterator$1:202` |

##### `register(Object, Runnable)` (`java.lang.ref.Cleaner`)

|      % | Samples | Location                    |
| -----: | ------: | --------------------------- |
| 100.0% |       1 | `java.lang.ref.Cleaner:224` |

##### `getOrImplicitDefaultNullable(Map, Object)` (`kotlin.collections.MapsKt__MapWithDefaultKt`)

|      % | Samples | Location                                         |
| -----: | ------: | ------------------------------------------------ |
| 100.0% |       1 | `kotlin.collections.MapsKt__MapWithDefaultKt:21` |

##### `<init>()` (`java.util.ArrayList`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |       1 | `java.util.ArrayList:169` |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |     124 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |     102 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `inflate_fast` (`libzip.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |      50 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `SymbolTable::do_lookup` (`libjvm.dylib`)

|     % | Samples | Caller                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 70.8% |      17 | `SymbolTable::lookup_only`                     | `libjvm.dylib` |
| 12.5% |       3 | `SymbolTable::new_symbol`                      | `libjvm.dylib` |
| 12.5% |       3 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |
|  4.2% |       1 | `SignatureStream::find_symbol`                 | `libjvm.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|    % | Samples | Caller                              | Location       |
| ---: | ------: | ----------------------------------- | -------------- |
| 4.5% |       1 | `Parse::return_current`             | `libjvm.dylib` |
| 4.5% |       1 | `LinearScan::create_interval`       | `libjvm.dylib` |
| 4.5% |       1 | `BlockListBuilder::make_block_at`   | `libjvm.dylib` |
| 4.5% |       1 | `DataLayout::data_in`               | `libjvm.dylib` |
| 4.5% |       1 | `LinkResolver::resolve_static_call` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      17 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|     % | Samples | Caller                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 93.8% |      15 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
|  6.3% |       1 | `Compile::Code_Gen`               | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      16 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      15 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

|     % | Samples | Caller                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 28.6% |       4 | `ciBytecodeStream::get_method`         | `libjvm.dylib` |
| 21.4% |       3 | `ciEnv::get_klass_by_index_impl`       | `libjvm.dylib` |
| 14.3% |       2 | `ciEnv::get_klass_by_name_impl`        | `libjvm.dylib` |
| 14.3% |       2 | `ciMethod::ensure_method_data`         | `libjvm.dylib` |
|  7.1% |       1 | `ciObjectFactory::create_new_metadata` | `libjvm.dylib` |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 85.7% |      12 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |
|  7.1% |       1 | `InstanceKlass::find_local_method`      | `libjvm.dylib` |
|  7.1% |       1 | `InstanceKlass::find_method`            | `libjvm.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      12 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 91.7% |      11 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |
|  8.3% |       1 | `WorkerThread::run`              | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|    % | Samples | Caller                               | Location       |
| ---: | ------: | ------------------------------------ | -------------- |
| 9.1% |       1 | `ciInstanceKlass::field_cache`       | `libjvm.dylib` |
| 9.1% |       1 | `GraphBuilder::push_scope`           | `libjvm.dylib` |
| 9.1% |       1 | `Compile::Compile`                   | `libjvm.dylib` |
| 9.1% |       1 | `PhaseCCP::transform`                | `libjvm.dylib` |
| 9.1% |       1 | `PhaseIdealLoop::compute_early_ctrl` | `libjvm.dylib` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

|     % | Samples | Caller                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 81.8% |       9 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
|  9.1% |       1 | `IRScopeDebugInfo::record_debug_info`              | `libjvm.dylib` |
|  9.1% |       1 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      11 | `PhaseIdealLoop::build_loop_late` | `libjvm.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 18.2% |       2 | `JVM_Clone`                              | `libjvm.dylib` |
|  9.1% |       1 | `jni_ReleasePrimitiveArrayCritical`      | `libjvm.dylib` |
|  9.1% |       1 | `jni_GetPrimitiveArrayCritical`          | `libjvm.dylib` |
|  9.1% |       1 | `InterpreterRuntime::resolve_from_cache` | `libjvm.dylib` |
|  9.1% |       1 | `InterpreterRuntime::anewarray`          | `libjvm.dylib` |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|    % | Samples | Caller                                                                                 | Location                                                             |
| ---: | ------: | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 9.1% |       1 | `returnType(ProtoBuf$Property, TypeTable)`                                             | `org.jetbrains.kotlin.metadata.deserialization.ProtoTypeTableUtilKt` |
| 9.1% |       1 | `fakeElement(KtSourceElement, KtFakeSourceElementKind, KtSourceElementOffsetStrategy)` | `org.jetbrains.kotlin.KtSourceElementKt`                             |
| 9.1% |       1 | `transform(FirTransformer, Object)`                                                    | `org.jetbrains.kotlin.fir.types.FirImplicitTypeRef`                  |
| 9.1% |       1 | `getDeprecationForCallSite(FirBasedSymbol, FirSession, AnnotationUseSiteTarget[])`     | `org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt`           |
| 9.1% |       1 | `containingClassLookupTag(FirCallableDeclaration)`                                     | `org.jetbrains.kotlin.fir.ClassMembersKt`                            |

##### `bsearch` (`libsystem_c.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |      10 | `encoding_for_logical_immediate` | `libjvm.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |      10 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `inflate_table` (`libzip.dylib`)

|      % | Samples | Caller    | Location       |
| -----: | ------: | --------- | -------------- |
| 100.0% |       9 | `inflate` | `libzip.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       9 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|     % | Samples | Caller                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 33.3% |       3 | `PhaseIFG::re_insert`             | `libjvm.dylib` |
| 11.1% |       1 | `PhaseChaitin::Simplify`          | `libjvm.dylib` |
| 11.1% |       1 | `PhaseIFG::SquareUp`              | `libjvm.dylib` |
| 11.1% |       1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 11.1% |       1 | `PhaseIFG::effective_degree`      | `libjvm.dylib` |

##### `LinearScanWalker::alloc_free_reg` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       8 | `LinearScanWalker::activate_current` | `libjvm.dylib` |

##### `IntervalWalker::walk_to` (`libjvm.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 50.0% |       4 | `IntervalWalker::walk_to`        | `libjvm.dylib` |
| 37.5% |       3 | `LinearScan::compute_oop_map`    | `libjvm.dylib` |
| 12.5% |       1 | `LinearScan::allocate_registers` | `libjvm.dylib` |

##### `Node::is_CFG` (`libjvm.dylib`)

|     % | Samples | Caller                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 42.9% |       3 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
| 42.9% |       3 | `PhaseIdealLoop::Dominators`         | `libjvm.dylib` |
| 14.3% |       1 | `PhaseIdealLoop::build_loop_late`    | `libjvm.dylib` |

##### `ValueStack::values_do` (`libjvm.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 57.1% |       4 | `SubstitutionResolver::block_do` | `libjvm.dylib` |
| 28.6% |       2 | `UseCountComputer::block_do`     | `libjvm.dylib` |
| 14.3% |       1 | `Instruction::state_values_do`   | `libjvm.dylib` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |       6 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |

##### `resource_allocate_bytes` (`libjvm.dylib`)

|     % | Samples | Caller                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 16.7% |       1 | `ResourceBitMap::ResourceBitMap`           | `libjvm.dylib` |
| 16.7% |       1 | `BlockListBuilder::BlockListBuilder`       | `libjvm.dylib` |
| 16.7% |       1 | `MethodLiveness::init_basic_blocks`        | `libjvm.dylib` |
| 16.7% |       1 | `LinearScan::compute_debug_info_for_scope` | `libjvm.dylib` |
| 16.7% |       1 | `LinearScanWalker::LinearScanWalker`       | `libjvm.dylib` |

##### `Dictionary::find` (`libjvm.dylib`)

|     % | Samples | Caller                                                       | Location       |
| ----: | ------: | ------------------------------------------------------------ | -------------- |
| 50.0% |       3 | `SystemDictionary::find_constrained_instance_or_array_klass` | `libjvm.dylib` |
| 50.0% |       3 | `SystemDictionary::resolve_instance_class_or_null`           | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|      % | Samples | Caller                                         | Location       |
| -----: | ------: | ---------------------------------------------- | -------------- |
| 100.0% |       6 | `void G1CMTask::process_grey_task_entry<true>` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       6 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |       6 | `PhaseIterGVN::optimize` | `libjvm.dylib` |

##### `LinearScanWalker::free_collect_inactive_fixed` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |       6 | `LinearScanWalker::alloc_free_reg` | `libjvm.dylib` |

##### `LinearScan::resolve_data_flow` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |       6 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `PhaseIFG::remove_node` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |       6 | `PhaseChaitin::Simplify` | `libjvm.dylib` |

##### `mach_absolute_time` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |       5 | `os::elapsed_counter` | `libjvm.dylib` |

##### `sys_icache_invalidate` (`libsystem_platform.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 20.0% |       1 | `CodeBuffer::copy_code_to`       | `libjvm.dylib` |
| 20.0% |       1 | `nmethod::nmethod`               | `libjvm.dylib` |
| 20.0% |       1 | `CompiledIC::set_to_monomorphic` | `libjvm.dylib` |
| 20.0% |       1 | `CompiledIC::set_to_megamorphic` | `libjvm.dylib` |
| 20.0% |       1 | `ciEnv::register_method`         | `libjvm.dylib` |

##### `Arena::contains` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       5 | `Matcher::xform` | `libjvm.dylib` |

##### `inflate` (`libzip.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |       5 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `PhaseCFG::schedule_pinned_nodes` (`libjvm.dylib`)

|      % | Samples | Caller                         | Location       |
| -----: | ------: | ------------------------------ | -------------- |
| 100.0% |       5 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|     % | Samples | Caller                                                                                                          | Location                                                                                  |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 20.0% |       1 | `invoke(File)`                                                                                                  | `org.jetbrains.kotlin.cli.common.GroupedKtSourcesKt$collectSources$1`                     |
| 20.0% |       1 | `calculateClassId(FqName, FqName)`                                                                              | `org.jetbrains.kotlin.name.CallableId$Companion`                                          |
| 20.0% |       1 | `expectedConeType$constructLiteralType(FirSession, ClassId, boolean)`                                           | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveUtilsKt`           |
| 20.0% |       1 | `computeTypeArguments(FirQualifiedAccessExpression, Candidate)`                                                 | `org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer` |
| 20.0% |       1 | `coerceInlineClasses(Type, KotlinTypeMarker, Type, KotlinTypeMarker, InstructionAdapter, KotlinTypeMapperBase)` | `org.jetbrains.kotlin.codegen.StackValue`                                                 |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|     % | Samples | Caller                                                                     | Location                                                                                  |
| ----: | ------: | -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 20.0% |       1 | `transform(FirTransformer, Object)`                                        | `org.jetbrains.kotlin.fir.expressions.FirAnnotationCall`                                  |
| 20.0% |       1 | `createSubstitutionForScope(List, ConeClassLikeType, FirSession)`          | `org.jetbrains.kotlin.fir.resolve.SupertypeUtilsKt`                                       |
| 20.0% |       1 | `check(CheckerContext, DiagnosticReporter, FirStatement)`                  | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirArrayOfNothingQualifierChecker` |
| 20.0% |       1 | `traverseToFixedPoint(ControlFlowGraph, PathAwareControlFlowGraphVisitor)` | `org.jetbrains.kotlin.fir.analysis.cfa.util.CfgTraverserKt`                               |
| 20.0% |       1 | `<init>(boolean, boolean)`                                                 | `org.jetbrains.kotlin.fir.backend.generators.CallAndReferenceGenerator$ReceiverInfo`      |

##### `I2C/C2I adapters(0xbbb)` (`<unknown>`)

|     % | Samples | Caller                           | Location                                                       |
| ----: | ------: | -------------------------------- | -------------------------------------------------------------- |
| 25.0% |       1 | `<init>(Object, ReferenceQueue)` | `jdk.internal.util.WeakReferenceKey`                           |
| 25.0% |       1 | `get(Object)`                    | `it.unimi.dsi.fastutil.objects.Object2ObjectOpenCustomHashMap` |

##### `equals(Object)` (`java.lang.String`)

|     % | Samples | Caller                     | Location                         |
| ----: | ------: | -------------------------- | -------------------------------- |
| 66.7% |       2 | `areEqual(Object, Object)` | `kotlin.jvm.internal.Intrinsics` |
| 33.3% |       1 | `equals(Object)`           | `org.jetbrains.kotlin.name.Name` |

##### `readMethod(ClassVisitor, Context, int)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % | Samples | Caller                                   | Location                                      |
| -----: | ------: | ---------------------------------------- | --------------------------------------------- |
| 100.0% |       2 | `accept(ClassVisitor, Attribute[], int)` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `constructFunctionType(FirFunction, FunctionTypeKind)` (`org.jetbrains.kotlin.fir.resolve.ResolveUtilsKt`)

|      % | Samples | Caller                                                                         | Location                                          |
| -----: | ------: | ------------------------------------------------------------------------------ | ------------------------------------------------- |
| 100.0% |       2 | `constructFunctionTypeRef(FirAnonymousFunction, FirSession, FunctionTypeKind)` | `org.jetbrains.kotlin.fir.resolve.ResolveUtilsKt` |

##### `isAnyOfDelegateOperators(FirElement)` (`org.jetbrains.kotlin.fir.resolve.inference.FirDelegatedPropertyInferenceSessionKt`)

|      % | Samples | Caller                                                           | Location                                                                         |
| -----: | ------: | ---------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| 100.0% |       2 | `check(CheckerSink, ResolutionContext, Candidate, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.TypeVariablesInExplicitReceivers` |

##### `toIrType(ConeKotlinType, ConversionTypeOrigin, List, boolean, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.backend.Fir2IrTypeConverter`)

|      % | Samples | Caller                                                                                                                               | Location                                               |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| 100.0% |       2 | `toIrType$default(Fir2IrTypeConverter, ConeKotlinType, ConversionTypeOrigin, List, boolean, boolean, boolean, boolean, int, Object)` | `org.jetbrains.kotlin.fir.backend.Fir2IrTypeConverter` |

##### `runAfter(PhaseConfig, PhaserState, LoggingContext, Object, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % | Samples | Caller                                                     | Location                                                |
| -----: | ------: | ---------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |       2 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `execute(AbstractInsnNode, Interpreter)` (`org.jetbrains.org.objectweb.asm.tree.analysis.Frame`)

|     % | Samples | Caller                                                           | Location                                                                                          |
| ----: | ------: | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 50.0% |       1 | `analyzeInstruction(AbstractInsnNode, int, Frame, Frame, Frame)` | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`                                   |
| 50.0% |       1 | `execute(AbstractInsnNode, Interpreter)`                         | `org.jetbrains.kotlin.codegen.coroutines.UninitializedStoresProcessor$UninitializedNewValueFrame` |

##### `rewriteLabels(LineNumberNode)` (`org.jetbrains.kotlin.codegen.optimization.LabelNormalizationMethodTransformer$TransformerForMethod`)

|      % | Samples | Caller                                  | Location                                                                                             |
| -----: | ------: | --------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| 100.0% |       2 | `rewriteLineNumberNode(LineNumberNode)` | `org.jetbrains.kotlin.codegen.optimization.LabelNormalizationMethodTransformer$TransformerForMethod` |

##### `traverseCfg()` (`org.jetbrains.kotlin.codegen.optimization.common.InstructionLivenessAnalyzer`)

|      % | Samples | Caller      | Location                                                                       |
| -----: | ------: | ----------- | ------------------------------------------------------------------------------ |
| 100.0% |       2 | `analyze()` | `org.jetbrains.kotlin.codegen.optimization.common.InstructionLivenessAnalyzer` |

##### `getOwner()` (`org.jetbrains.kotlin.ir.symbols.impl.IrSymbolBase`)

|     % | Samples | Caller                                                      | Location                                           |
| ----: | ------: | ----------------------------------------------------------- | -------------------------------------------------- |
| 50.0% |       1 | `isClassType(IrType, IdSignature$CommonSignature, Boolean)` | `org.jetbrains.kotlin.ir.types.IrTypePredicatesKt` |
| 50.0% |       1 | `getPrimitiveOrUnsignedType(IrType, Map, Map)`              | `org.jetbrains.kotlin.ir.types.IrTypePredicatesKt` |

##### `getStatements()` (`org.jetbrains.kotlin.ir.expressions.impl.IrBlockImpl`)

|      % | Samples | Caller                                                     | Location                                                     |
| -----: | ------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% |       2 | `visitStatementContainer(IrStatementContainer, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `resize()` (`java.util.HashMap`)

|      % | Samples | Caller                                          | Location            |
| -----: | ------: | ----------------------------------------------- | ------------------- |
| 100.0% |       2 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `removeNode(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|      % | Samples | Caller           | Location            |
| -----: | ------: | ---------------- | ------------------- |
| 100.0% |       2 | `remove(Object)` | `java.util.HashMap` |

##### `putAll(Map, Pair[])` (`kotlin.collections.MapsKt__MapsKt`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |       2 | `mutableMapOf(Pair[])` | `kotlin.collections.MapsKt__MapsKt` |

##### `itable stub` (`<unknown>`)

|     % | Samples | Caller                                                           | Location                                                                                |
| ----: | ------: | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 50.0% |       1 | `check(CheckerSink, ResolutionContext, Candidate, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CreateFreshTypeVariableSubstitutorStage` |
| 50.0% |       1 | `forElement(FirElement)`                                         | `org.jetbrains.kotlin.fir.analysis.checkers.SourceNavigator$Companion`                  |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|      % | Samples | Caller                                                                       | Location                                               |
| -----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |       1 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `read(VirtualFile, KotlinCliJavaFileManager, GlobalSearchScope)` (`org.jetbrains.kotlin.resolve.jvm.modules.JavaModuleInfo$Companion`)

|      % | Samples | Caller                                   | Location                                                   |
| -----: | ------: | ---------------------------------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `findSystemModule(VirtualFile, boolean)` | `org.jetbrains.kotlin.cli.jvm.modules.CliJavaModuleFinder` |

##### `<init>()` (`org.jetbrains.kotlin.protobuf.AbstractMessageLite`)

|      % | Samples | Caller     | Location                                             |
| -----: | ------: | ---------- | ---------------------------------------------------- |
| 100.0% |       1 | `<init>()` | `org.jetbrains.kotlin.protobuf.GeneratedMessageLite` |

##### `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`)

|      % | Samples | Caller        | Location                                   |
| -----: | ------: | ------------- | ------------------------------------------ |
| 100.0% |       1 | `newOutput()` | `org.jetbrains.kotlin.protobuf.ByteString` |

##### `concat(ByteString)` (`org.jetbrains.kotlin.protobuf.ByteString`)

|      % | Samples | Caller                           | Location                                                    |
| -----: | ------: | -------------------------------- | ----------------------------------------------------------- |
| 100.0% |       1 | `mergeFrom(ProtoBuf$Annotation)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Builder` |

##### `advance()` (`org.jetbrains.kotlin.parsing.AbstractKotlinParsing`)

|      % | Samples | Caller                                           | Location                                     |
| -----: | ------: | ------------------------------------------------ | -------------------------------------------- |
| 100.0% |       1 | `tryParseModifier(Consumer, TokenSet, TokenSet)` | `org.jetbrains.kotlin.parsing.KotlinParsing` |

##### `createTruncatedBuilder(int)` (`org.jetbrains.kotlin.parsing.AbstractKotlinParsing`)

|      % | Samples | Caller                                | Location                                     |
| -----: | ------: | ------------------------------------- | -------------------------------------------- |
| 100.0% |       1 | `parseReceiverType(String, TokenSet)` | `org.jetbrains.kotlin.parsing.KotlinParsing` |

##### `isInline()` (`org.jetbrains.kotlin.fir.declarations.impl.FirDeclarationStatusImpl`)

|      % | Samples | Caller              | Location    |
| -----: | ------: | ------------------- | ----------- |
| 100.0% |       1 | `break_stack_range` | `<unknown>` |

##### `getLexemeIndex(boolean)` (`com.intellij.lang.impl.PsiBuilderImpl$StartMarker`)

|      % | Samples | Caller                  | Location                                  |
| -----: | ------: | ----------------------- | ----------------------------------------- |
| 100.0% |       1 | `getLexemeIndexAt(int)` | `com.intellij.lang.impl.MarkerProduction` |

##### `addModifier(LighterASTNode, boolean)` (`org.jetbrains.kotlin.fir.lightTree.fir.modifier.ModifierList`)

|      % | Samples | Caller                                           | Location                                                                         |
| -----: | ------: | ------------------------------------------------ | -------------------------------------------------------------------------------- |
| 100.0% |       1 | `consume(ModifierList, LighterASTNode, boolean)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder` |

##### `getNode(Object)` (`java.util.HashMap`)

|      % | Samples | Caller        | Location            |
| -----: | ------: | ------------- | ------------------- |
| 100.0% |       1 | `get(Object)` | `java.util.HashMap` |

##### `<init>(AbstractStringBuilder, Void)` (`java.lang.String`)

|      % | Samples | Caller                  | Location           |
| -----: | ------: | ----------------------- | ------------------ |
| 100.0% |       1 | `<init>(StringBuilder)` | `java.lang.String` |

##### `append(String)` (`java.lang.AbstractStringBuilder`)

|      % | Samples | Caller           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |       1 | `append(String)` | `java.lang.StringBuilder` |

##### `next()` (`kotlin.collections.builders.MapBuilder$EntriesItr`)

|      % | Samples | Caller   | Location                                            |
| -----: | ------: | -------- | --------------------------------------------------- |
| 100.0% |       1 | `next()` | `kotlin.collections.builders.MapBuilder$EntriesItr` |

##### `<init>()` (`java.util.AbstractMap`)

|      % | Samples | Caller               | Location                |
| -----: | ------: | -------------------- | ----------------------- |
| 100.0% |       1 | `<init>(int, float)` | `java.util.WeakHashMap` |

##### `hasNext()` (`java.util.ArrayList$Itr`)

|      % | Samples | Caller                         | Location                                                     |
| -----: | ------: | ------------------------------ | ------------------------------------------------------------ |
| 100.0% |       1 | `visitCall(IrCall, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `<init>(AtomicReferenceFieldUpdater$AtomicReferenceFieldUpdaterImpl, Class, String)` (`java.util.concurrent.atomic.AtomicReferenceFieldUpdater$AtomicReferenceFieldUpdaterImpl$1`)

|      % | Samples | Caller                                | Location                                                                                  |
| -----: | ------: | ------------------------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% |       1 | `<init>(Class, Class, String, Class)` | `java.util.concurrent.atomic.AtomicReferenceFieldUpdater$AtomicReferenceFieldUpdaterImpl` |

##### `invokeOnCompletion$default(Job, boolean, boolean, Function1, int, Object)` (`kotlinx.coroutines.Job$DefaultImpls`)

|      % | Samples | Caller                  | Location                        |
| -----: | ------: | ----------------------- | ------------------------------- |
| 100.0% |       1 | `attachChild(ChildJob)` | `kotlinx.coroutines.JobSupport` |

##### `generate(MethodType)` (`java.lang.invoke.InnerClassLambdaMetafactory$ForwardingMethodGenerator`)

|      % | Samples | Caller                 | Location                                       |
| -----: | ------: | ---------------------- | ---------------------------------------------- |
| 100.0% |       1 | `generateInnerClass()` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `toList(Iterable)` (`kotlin.collections.CollectionsKt___CollectionsKt`)

|      % | Samples | Caller                | Location                                           |
| -----: | ------: | --------------------- | -------------------------------------------------- |
| 100.0% |       1 | `getResultMappings()` | `org.jetbrains.kotlin.codegen.inline.SourceMapper` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|      % | Samples | Caller                                          | Location            |
| -----: | ------: | ----------------------------------------------- | ------------------- |
| 100.0% |       1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `calcNext()` (`kotlin.sequences.FilteringSequence$iterator$1`)

|      % | Samples | Caller      | Location                                        |
| -----: | ------: | ----------- | ----------------------------------------------- |
| 100.0% |       1 | `hasNext()` | `kotlin.sequences.FilteringSequence$iterator$1` |

##### `register(Object, Runnable)` (`java.lang.ref.Cleaner`)

|      % | Samples | Caller                                                                                  | Location                                           |
| -----: | ------: | --------------------------------------------------------------------------------------- | -------------------------------------------------- |
| 100.0% |       1 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, Inflater, int)` | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `getOrImplicitDefaultNullable(Map, Object)` (`kotlin.collections.MapsKt__MapWithDefaultKt`)

|      % | Samples | Caller                  | Location                            |
| -----: | ------: | ----------------------- | ----------------------------------- |
| 100.0% |       1 | `getValue(Map, Object)` | `kotlin.collections.MapsKt__MapsKt` |

##### `<init>()` (`java.util.ArrayList`)

|      % | Samples | Caller        | Location                                          |
| -----: | ------: | ------------- | ------------------------------------------------- |
| 100.0% |       1 | `<init>(int)` | `org.jetbrains.kotlin.protobuf.ByteString$Output` |

##### `I2C/C2I adapters(0xbab)` (`<unknown>`)

|      % | Samples | Caller                                   | Location                                      |
| -----: | ------: | ---------------------------------------- | --------------------------------------------- |
| 100.0% |       1 | `readMethod(ClassVisitor, Context, int)` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `I2C/C2I adapters(0xa)` (`<unknown>`)

|      % | Samples | Caller                                                                                  | Location                                                                  |
| -----: | ------: | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| 100.0% |       1 | `multiplexWithoutUseSiteTarget(FirAnnotation, FirDeclaration, LanguageVersionSettings)` | `org.jetbrains.kotlin.fir.resolve.transformers.FirTypeResolveTransformer` |

##### `I2C/C2I adapters(0xbbbb)` (`<unknown>`)

|      % | Samples | Caller                                                                                                  | Location                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| 100.0% |       1 | `completeIsSubTypeOf(TypeCheckerState, TypeSystemContext, KotlinTypeMarker, KotlinTypeMarker, boolean)` | `org.jetbrains.kotlin.types.AbstractTypeChecker` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                                                 | Location                                               |
| ----: | ------: | -------------------------------------------------------- | ------------------------------------------------------ |
| 70.2% |   1,244 | `_pthread_start`                                         | `libsystem_pthread.dylib`                              |
| 70.2% |   1,244 | `thread_start`                                           | `libsystem_pthread.dylib`                              |
| 70.1% |   1,243 | `Thread::call_run`                                       | `libjvm.dylib`                                         |
| 70.1% |   1,243 | `thread_native_entry`                                    | `libjvm.dylib`                                         |
| 66.3% |   1,174 | `JavaThread::thread_main_inner`                          | `libjvm.dylib`                                         |
| 66.1% |   1,171 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib`                                         |
| 60.3% |   1,068 | `CompileBroker::invoke_compiler_on_method`               | `libjvm.dylib`                                         |
| 42.1% |     746 | `C2Compiler::compile_method`                             | `libjvm.dylib`                                         |
| 42.0% |     745 | `Compile::Compile`                                       | `libjvm.dylib`                                         |
| 29.4% |     521 | `run(String[])`                                          | `org.jetbrains.kotlin.preloading.Preloader`            |
| 29.4% |     521 | `main(String[])`                                         | `org.jetbrains.kotlin.preloading.Preloader`            |
| 24.9% |     442 | `invoke(Object, Object[])`                               | `java.lang.reflect.Method`                             |
| 24.9% |     441 | `main(String[])`                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |
| 24.9% |     441 | `main(String[])`                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`           |
| 24.9% |     441 | `invokeStatic(Object, Object)`                           | `java.lang.invoke.LambdaForm$DMH.0x0000000601008000`   |
| 24.9% |     441 | `invoke(Object, Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000601009400`    |
| 24.9% |     441 | `invokeExact_MT(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                     |
| 24.9% |     441 | `invokeImpl(Object, Object[])`                           | `jdk.internal.reflect.DirectMethodHandleAccessor`      |
| 24.9% |     441 | `invoke(Object, Object[])`                               | `jdk.internal.reflect.DirectMethodHandleAccessor`      |
| 24.8% |     440 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler`          |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Native

|     % | Samples | Function                                        | Location                  |
| ----: | ------: | ----------------------------------------------- | ------------------------- |
| 70.2% |   1,244 | `_pthread_start`                                | `libsystem_pthread.dylib` |
| 70.2% |   1,244 | `thread_start`                                  | `libsystem_pthread.dylib` |
| 70.1% |   1,243 | `Thread::call_run`                              | `libjvm.dylib`            |
| 70.1% |   1,243 | `thread_native_entry`                           | `libjvm.dylib`            |
| 66.3% |   1,174 | `JavaThread::thread_main_inner`                 | `libjvm.dylib`            |
| 17.0% |     301 | `Compiler::compile_method`                      | `libjvm.dylib`            |
|  7.0% |     124 | `__psynch_mutexwait`                            | `libsystem_kernel.dylib`  |
|  7.0% |     124 | `_pthread_mutex_firstfit_lock_slow`             | `libsystem_pthread.dylib` |
|  6.0% |     106 | `Parse::do_one_block`                           | `libjvm.dylib`            |
|  6.0% |     106 | `Parse::do_all_blocks`                          | `libjvm.dylib`            |
|  6.0% |     106 | `Parse::Parse`                                  | `libjvm.dylib`            |
|  6.0% |     106 | `ParseGenerator::generate`                      | `libjvm.dylib`            |
|  6.0% |     106 | `PlatformMonitor::wait`                         | `libjvm.dylib`            |
|  5.8% |     102 | `__psynch_cvwait`                               | `libsystem_kernel.dylib`  |
|  5.4% |      96 | `Parse::do_call`                                | `libjvm.dylib`            |
|  5.3% |      94 | `Monitor::wait`                                 | `libjvm.dylib`            |
|  4.8% |      85 | `IRScope::IRScope`                              | `libjvm.dylib`            |
|  4.8% |      85 | `IR::IR`                                        | `libjvm.dylib`            |
|  4.3% |      76 | `ThreadCritical::ThreadCritical`                | `libjvm.dylib`            |
|  3.8% |      67 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib`            |

##### Compiler

|     % | Samples | Function                                    | Location       |
| ----: | ------: | ------------------------------------------- | -------------- |
| 66.1% |   1,171 | `CompileBroker::compiler_thread_loop`       | `libjvm.dylib` |
| 60.3% |   1,068 | `CompileBroker::invoke_compiler_on_method`  | `libjvm.dylib` |
| 42.1% |     746 | `C2Compiler::compile_method`                | `libjvm.dylib` |
| 42.0% |     745 | `Compile::Compile`                          | `libjvm.dylib` |
| 20.3% |     360 | `Compile::Code_Gen`                         | `libjvm.dylib` |
| 16.7% |     296 | `Compilation::compile_method`               | `libjvm.dylib` |
| 16.7% |     296 | `Compilation::Compilation`                  | `libjvm.dylib` |
| 14.7% |     261 | `Compilation::compile_java_method`          | `libjvm.dylib` |
| 14.5% |     257 | `Compile::Optimize`                         | `libjvm.dylib` |
|  9.9% |     176 | `PhaseChaitin::Register_Allocate`           | `libjvm.dylib` |
|  7.2% |     127 | `PhaseIdealLoop::optimize`                  | `libjvm.dylib` |
|  6.3% |     112 | `Compilation::build_hir`                    | `libjvm.dylib` |
|  6.2% |     110 | `PhaseIdealLoop::PhaseIdealLoop`            | `libjvm.dylib` |
|  6.2% |     109 | `PhaseIdealLoop::build_and_optimize`        | `libjvm.dylib` |
|  5.6% |     100 | `Compilation::emit_lir`                     | `libjvm.dylib` |
|  5.5% |      98 | `CompileQueue::get`                         | `libjvm.dylib` |
|  4.7% |      84 | `GraphBuilder::GraphBuilder`                | `libjvm.dylib` |
|  4.6% |      81 | `LinearScan::do_linear_scan`                | `libjvm.dylib` |
|  4.5% |      79 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |
|  4.5% |      79 | `GraphBuilder::iterate_all_blocks`          | `libjvm.dylib` |

##### Ours

|     % | Samples | Function                                                                                                                                      | Location                                                |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 29.4% |     521 | `run(String[])`                                                                                                                               | `org.jetbrains.kotlin.preloading.Preloader`             |
| 29.4% |     521 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`             |
| 24.9% |     441 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 24.9% |     441 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 24.8% |     440 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 24.8% |     440 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 24.8% |     440 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 24.8% |     440 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 24.8% |     440 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 24.5% |     435 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 24.0% |     426 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 24.0% |     426 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 24.0% |     426 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 23.9% |     424 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 23.9% |     424 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 23.9% |     424 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 23.8% |     422 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 23.7% |     420 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
| 23.7% |     420 | `phaseBody(LoggingContext, Object)`                                                                                                           | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
| 23.7% |     420 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### Standard library

|     % | Samples | Function                                                                        | Location                                              |
| ----: | ------: | ------------------------------------------------------------------------------- | ----------------------------------------------------- |
| 24.9% |     442 | `invoke(Object, Object[])`                                                      | `java.lang.reflect.Method`                            |
| 24.9% |     441 | `invokeStatic(Object, Object)`                                                  | `java.lang.invoke.LambdaForm$DMH.0x0000000601008000`  |
| 24.9% |     441 | `invoke(Object, Object, Object)`                                                | `java.lang.invoke.LambdaForm$MH.0x0000000601009400`   |
| 24.9% |     441 | `invokeExact_MT(Object, Object, Object, Object)`                                | `java.lang.invoke.Invokers$Holder`                    |
| 24.9% |     441 | `invokeImpl(Object, Object[])`                                                  | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 24.9% |     441 | `invoke(Object, Object[])`                                                      | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
|  4.1% |      72 | `read(byte[], int, int)`                                                        | `java.util.zip.ZipInputStream`                        |
|  4.1% |      72 | `read(byte[])`                                                                  | `java.io.FilterInputStream`                           |
|  3.8% |      68 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                   | `java.util.zip.Inflater`                              |
|  3.8% |      68 | `inflate(byte[], int, int)`                                                     | `java.util.zip.Inflater`                              |
|  3.8% |      68 | `read(byte[], int, int)`                                                        | `java.util.zip.InflaterInputStream`                   |
|  3.6% |      63 | `loadClass(String, boolean)`                                                    | `java.lang.ClassLoader`                               |
|  3.3% |      59 | `defineClass(String, byte[], int, int, ProtectionDomain)`                       | `java.lang.ClassLoader`                               |
|  3.3% |      58 | `defineClass(String, byte[], int, int)`                                         | `java.lang.ClassLoader`                               |
|  3.2% |      57 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                               |
|  3.2% |      56 | `resumeWith(Object)`                                                            | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |
|  1.0% |      18 | `getValue()`                                                                    | `kotlin.SynchronizedLazyImpl`                         |
|  1.0% |      17 | `getValue()`                                                                    | `kotlin.SafePublicationLazyImpl`                      |
|  0.7% |      13 | `getValue()`                                                                    | `kotlin.UnsafeLazyImpl`                               |
|  0.7% |      12 | `checkNotNullParameter(Object, String)`                                         | `kotlin.jvm.internal.Intrinsics`                      |

##### JIT

|    % | Samples | Function                   | Location    |
| ---: | ------: | -------------------------- | ----------- |
| 0.3% |       5 | `I2C/C2I adapters(0xbb)`   | `<unknown>` |
| 0.3% |       5 | `I2C/C2I adapters(0xb)`    | `<unknown>` |
| 0.2% |       4 | `I2C/C2I adapters(0xbbb)`  | `<unknown>` |
| 0.1% |       2 | `itable stub`              | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbab)`  | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xa)`    | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbbb)` | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Caller         | Location                  |
| -----: | ------: | -------------- | ------------------------- |
| 100.0% |   1,244 | `thread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |   1,243 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Caller           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   1,243 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   1,174 | `Thread::call_run` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |   1,171 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |   1,068 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |     746 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |     745 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % | Samples | Caller           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |     521 | `main(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % | Samples | Caller                     | Location                                    |
| -----: | ------: | -------------------------- | ------------------------------------------- |
| 100.0% |     442 | `run(String[])`            | `org.jetbrains.kotlin.preloading.Preloader` |
|   0.2% |       1 | `getEnumConstantsShared()` | `java.lang.Class`                           |
|   0.2% |       1 | `rtVersion()`              | `com.intellij.util.lang.JavaVersion`        |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|      % | Samples | Caller           | Location                                     |
| -----: | ------: | ---------------- | -------------------------------------------- |
| 100.0% |     441 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Caller                         | Location                                             |
| -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% |     441 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000601008000` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000601008000`)

|      % | Samples | Caller                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     441 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000601009400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000601009400`)

|      % | Samples | Caller                                           | Location                           |
| -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% |     441 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                         | Location                                          |
| -----: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% |     441 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Caller                     | Location                                          |
| -----: | ------: | -------------------------- | ------------------------------------------------- |
| 100.0% |     441 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Caller                     | Location                   |
| -----: | ------: | -------------------------- | -------------------------- |
| 100.0% |     441 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                         | Location                                      |
| -----: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% |     440 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                                 | Location                                                |
| -----: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 100.0% |     440 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Caller                                                                                             | Location                                                |
| -----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     440 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Caller                          | Location                                                |
| -----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 100.0% |     440 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Caller           | Location                                               |
| -----: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% |     440 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                                   | Location                                      |
| -----: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 100.0% |     435 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Caller                                                                 | Location                                     |
| -----: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     426 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Caller                                                          | Location                                      |
| -----: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| 100.0% |     426 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                                      | Location                                      |
| -----: | ------: | ----------------------------------------------------------- | --------------------------------------------- |
| 100.0% |     426 | `exec(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                                                                                                        | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     424 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                         | Location                                                |
| -----: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     424 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                                | Location                                     |
| -----: | ------: | --------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     424 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                                                              | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     422 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Caller                              | Location                                          |
| -----: | ------: | ----------------------------------- | ------------------------------------------------- |
| 100.0% |     420 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Caller                                                     | Location                                                |
| -----: | ------: | ---------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     420 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % | Samples | Caller                                                                | Location                                                          |
| -----: | ------: | --------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 100.0% |     420 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`            | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase`       |
|   5.7% |      24 | `invoke(PhaseConfig, PhaserState, LoweringContext, IrModuleFragment)` | `org.jetbrains.kotlin.backend.common.phaser.PerformByIrFilePhase` |
|   1.9% |       8 | `runPhase(NamedCompilerPhase, Object, boolean)`                       | `org.jetbrains.kotlin.backend.common.phaser.PhaseEngine`          |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     360 | `Compile::Compile` | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |     301 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     296 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     296 | `Compiler::compile_method` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |     261 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     257 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |     176 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 53.5% |      68 | `Compile::Optimize`       | `libjvm.dylib` |
| 46.5% |      59 | `Compile::optimize_loops` | `libjvm.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |     124 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `_pthread_mutex_firstfit_lock_slow` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                                | Location                  |
| ----: | ------: | ------------------------------------- | ------------------------- |
| 60.5% |      75 | `ThreadCritical::ThreadCritical`      | `libjvm.dylib`            |
| 31.5% |      39 | `Mutex::lock`                         | `libjvm.dylib`            |
|  6.5% |       8 | `Mutex::lock_without_safepoint_check` | `libjvm.dylib`            |
|  1.6% |       2 | `_pthread_cond_wait`                  | `libsystem_pthread.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |     112 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     110 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |     109 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|      % | Samples | Caller                 | Location       |
| -----: | ------: | ---------------------- | -------------- |
| 100.0% |     106 | `Parse::do_all_blocks` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % | Samples | Caller         | Location       |
| -----: | ------: | -------------- | -------------- |
| 100.0% |     106 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     106 | `ParseGenerator::generate` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |     106 | `Compile::Compile`                 | `libjvm.dylib` |
|  52.8% |      56 | `Parse::do_call`                   | `libjvm.dylib` |
|  51.9% |      55 | `PredictedCallGenerator::generate` | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 87.7% |      93 | `Monitor::wait`                         | `libjvm.dylib` |
| 12.3% |      13 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |     102 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |     100 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |      98 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |      96 | `Parse::do_one_block` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|     % | Samples | Caller                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 98.9% |      93 | `CompileQueue::get`             | `libjvm.dylib` |
|  1.1% |       1 | `VMThread::wait_until_executed` | `libjvm.dylib` |

##### `IRScope::IRScope` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      85 | `IR::IR`                   | `libjvm.dylib` |
|   1.2% |       1 | `GraphBuilder::push_scope` | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |      85 | `Compilation::build_hir` | `libjvm.dylib` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      84 | `IRScope::IRScope` | `libjvm.dylib` |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

|      % | Samples | Caller                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |      81 | `Compilation::emit_lir` | `libjvm.dylib` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      79 | `GraphBuilder::iterate_all_blocks` | `libjvm.dylib` |
|   1.3% |       1 | `GraphBuilder::try_inline_full`    | `libjvm.dylib` |

##### `GraphBuilder::iterate_all_blocks` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |      79 | `GraphBuilder::GraphBuilder`    | `libjvm.dylib` |
|  54.4% |      43 | `GraphBuilder::try_inline_full` | `libjvm.dylib` |

##### `ThreadCritical::ThreadCritical` (`libjvm.dylib`)

|     % | Samples | Caller                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 75.0% |      57 | `Chunk::operator new` | `libjvm.dylib` |
| 25.0% |      19 | `Chunk::chop`         | `libjvm.dylib` |

##### `read(byte[], int, int)` (`java.util.zip.ZipInputStream`)

|      % | Samples | Caller         | Location                    |
| -----: | ------: | -------------- | --------------------------- |
| 100.0% |      72 | `read(byte[])` | `java.io.FilterInputStream` |

##### `read(byte[])` (`java.io.FilterInputStream`)

|      % | Samples | Caller                                                  | Location                                               |
| -----: | ------: | ------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |      72 | `loadAllClassesFromJars(Collection, int, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Caller                      | Location                 |
| -----: | ------: | --------------------------- | ------------------------ |
| 100.0% |      68 | `inflate(byte[], int, int)` | `java.util.zip.Inflater` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Caller                   | Location                            |
| -----: | ------: | ------------------------ | ----------------------------------- |
| 100.0% |      68 | `read(byte[], int, int)` | `java.util.zip.InflaterInputStream` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

|      % | Samples | Caller                   | Location                       |
| -----: | ------: | ------------------------ | ------------------------------ |
| 100.0% |      68 | `read(byte[], int, int)` | `java.util.zip.ZipInputStream` |

##### `Java_java_util_zip_Inflater_inflateBytesBytes` (`libzip.dylib`)

|      % | Samples | Caller                                                        | Location                 |
| -----: | ------: | ------------------------------------------------------------- | ------------------------ |
| 100.0% |      67 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|     % | Samples | Caller                       | Location                                                 |
| ----: | ------: | ---------------------------- | -------------------------------------------------------- |
| 98.4% |      62 | `loadClass(String, boolean)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  1.6% |       1 | `loadClass(String)`          | `java.lang.ClassLoader`                                  |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

|     % | Samples | Caller                                              | Location                          |
| ----: | ------: | --------------------------------------------------- | --------------------------------- |
| 98.3% |      58 | `defineClass(String, byte[], int, int)`             | `java.lang.ClassLoader`           |
|  1.7% |       1 | `defineClass(String, byte[], int, int, CodeSource)` | `java.security.SecureClassLoader` |

##### `defineClass(String, byte[], int, int)` (`java.lang.ClassLoader`)

|      % | Samples | Caller              | Location                                                 |
| -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% |      58 | `findClass(String)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|      % | Samples | Caller                                                    | Location                |
| -----: | ------: | --------------------------------------------------------- | ----------------------- |
| 100.0% |      57 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|     % | Samples | Caller                                                             | Location                                                              |
| ----: | ------: | ------------------------------------------------------------------ | --------------------------------------------------------------------- |
| 91.1% |      51 | `resumeTask(TowerResolveManager$SuspendedResolverTask)`            | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`    |
| 53.6% |      30 | `processCandidate(Candidate, ResolutionContext, boolean, boolean)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner` |
|  1.8% |       1 | `run()`                                                            | `kotlinx.coroutines.DispatchedTask`                                   |
|  1.8% |       1 | `resumeCancellableWith(Continuation, Object, Function1)`           | `kotlinx.coroutines.internal.DispatchedContinuationKt`                |
|  1.8% |       1 | `hasNext()`                                                        | `kotlin.sequences.SequenceBuilderIterator`                            |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

|     % | Samples | Caller                           | Location                                                  |
| ----: | ------: | -------------------------------- | --------------------------------------------------------- |
| 22.2% |       4 | `getInstance()`                  | `org.jetbrains.kotlin.builtins.DefaultBuiltIns$Companion` |
| 11.1% |       2 | `getDefaultPerformanceManager()` | `org.jetbrains.kotlin.cli.common.CLICompiler`             |
| 11.1% |       2 | `getMyChildren()`                | `org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile` |
| 11.1% |       2 | `getSuperTypeRefs()`             | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass` |
| 11.1% |       2 | `invokeLowerings$lambda$2(Lazy)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`    |

##### `getValue()` (`kotlin.SafePublicationLazyImpl`)

|     % | Samples | Caller                     | Location                                                                        |
| ----: | ------: | -------------------------- | ------------------------------------------------------------------------------- |
| 52.9% |       9 | `getJavaField()`           | `kotlin.reflect.jvm.internal.DescriptorKProperty`                               |
| 23.5% |       4 | `getAnnotationInfo()`      | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer` |
| 11.8% |       2 | `getCallablesIndex()`      | `org.jetbrains.kotlin.fir.scopes.impl.FirClassDeclaredMemberScopeImpl`          |
| 11.8% |       2 | `getCallableNamesCached()` | `org.jetbrains.kotlin.fir.scopes.impl.AbstractFirUseSiteMemberScope`            |
|  5.9% |       1 | `getDeclarations()`        | `org.jetbrains.kotlin.fir.java.FirLazyJavaDeclarationList`                      |

##### `getValue()` (`kotlin.UnsafeLazyImpl`)

|     % | Samples | Caller                                                       | Location                                                                           |
| ----: | ------: | ------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| 84.6% |      11 | `resolveVariableAccessAndSelectCandidateImpl$lambda$1(Lazy)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                           |
|  7.7% |       1 | `getClassifierResolverResult()`                              | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.PlainJavaClassifierType` |
|  7.7% |       1 | `approximateParametrizedType$lambda$1(Lazy)`                 | `org.jetbrains.kotlin.types.AbstractTypeApproximator`                              |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|    % | Samples | Caller                                                                                 | Location                                                             |
| ---: | ------: | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 8.3% |       1 | `returnType(ProtoBuf$Property, TypeTable)`                                             | `org.jetbrains.kotlin.metadata.deserialization.ProtoTypeTableUtilKt` |
| 8.3% |       1 | `fakeElement(KtSourceElement, KtFakeSourceElementKind, KtSourceElementOffsetStrategy)` | `org.jetbrains.kotlin.KtSourceElementKt`                             |
| 8.3% |       1 | `isTypeVariable(TypeConstructorMarker)`                                                | `org.jetbrains.kotlin.fir.types.ConeInferenceContext`                |
| 8.3% |       1 | `transform(FirTransformer, Object)`                                                    | `org.jetbrains.kotlin.fir.types.FirImplicitTypeRef`                  |
| 8.3% |       1 | `getDeprecationForCallSite(FirBasedSymbol, FirSession, AnnotationUseSiteTarget[])`     | `org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt`           |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|     % | Samples | Caller                                                                                                          | Location                                                                                  |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 20.0% |       1 | `invoke(File)`                                                                                                  | `org.jetbrains.kotlin.cli.common.GroupedKtSourcesKt$collectSources$1`                     |
| 20.0% |       1 | `calculateClassId(FqName, FqName)`                                                                              | `org.jetbrains.kotlin.name.CallableId$Companion`                                          |
| 20.0% |       1 | `expectedConeType$constructLiteralType(FirSession, ClassId, boolean)`                                           | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveUtilsKt`           |
| 20.0% |       1 | `computeTypeArguments(FirQualifiedAccessExpression, Candidate)`                                                 | `org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer` |
| 20.0% |       1 | `coerceInlineClasses(Type, KotlinTypeMarker, Type, KotlinTypeMarker, InstructionAdapter, KotlinTypeMapperBase)` | `org.jetbrains.kotlin.codegen.StackValue`                                                 |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|     % | Samples | Caller                                                                     | Location                                                                                  |
| ----: | ------: | -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 20.0% |       1 | `transform(FirTransformer, Object)`                                        | `org.jetbrains.kotlin.fir.expressions.FirAnnotationCall`                                  |
| 20.0% |       1 | `createSubstitutionForScope(List, ConeClassLikeType, FirSession)`          | `org.jetbrains.kotlin.fir.resolve.SupertypeUtilsKt`                                       |
| 20.0% |       1 | `check(CheckerContext, DiagnosticReporter, FirStatement)`                  | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirArrayOfNothingQualifierChecker` |
| 20.0% |       1 | `traverseToFixedPoint(ControlFlowGraph, PathAwareControlFlowGraphVisitor)` | `org.jetbrains.kotlin.fir.analysis.cfa.util.CfgTraverserKt`                               |
| 20.0% |       1 | `<init>(boolean, boolean)`                                                 | `org.jetbrains.kotlin.fir.backend.generators.CallAndReferenceGenerator$ReceiverInfo`      |

##### `I2C/C2I adapters(0xbbb)` (`<unknown>`)

|     % | Samples | Caller                           | Location                                                       |
| ----: | ------: | -------------------------------- | -------------------------------------------------------------- |
| 25.0% |       1 | `<init>(Object, ReferenceQueue)` | `jdk.internal.util.WeakReferenceKey`                           |
| 25.0% |       1 | `get(Object)`                    | `it.unimi.dsi.fastutil.objects.Object2ObjectOpenCustomHashMap` |

##### `itable stub` (`<unknown>`)

|     % | Samples | Caller                                                           | Location                                                                                |
| ----: | ------: | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 50.0% |       1 | `check(CheckerSink, ResolutionContext, Candidate, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CreateFreshTypeVariableSubstitutorStage` |
| 50.0% |       1 | `forElement(FirElement)`                                         | `org.jetbrains.kotlin.fir.analysis.checkers.SourceNavigator$Companion`                  |

##### `I2C/C2I adapters(0xbab)` (`<unknown>`)

|      % | Samples | Caller                                   | Location                                      |
| -----: | ------: | ---------------------------------------- | --------------------------------------------- |
| 100.0% |       1 | `readMethod(ClassVisitor, Context, int)` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `I2C/C2I adapters(0xa)` (`<unknown>`)

|      % | Samples | Caller                                                                                  | Location                                                                  |
| -----: | ------: | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| 100.0% |       1 | `multiplexWithoutUseSiteTarget(FirAnnotation, FirDeclaration, LanguageVersionSettings)` | `org.jetbrains.kotlin.fir.resolve.transformers.FirTypeResolveTransformer` |

##### `I2C/C2I adapters(0xbbbb)` (`<unknown>`)

|      % | Samples | Caller                                                                                                  | Location                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| 100.0% |       1 | `completeIsSubTypeOf(TypeCheckerState, TypeSystemContext, KotlinTypeMarker, KotlinTypeMarker, boolean)` | `org.jetbrains.kotlin.types.AbstractTypeChecker` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 99.9% |   1,243 | `thread_native_entry` | `libjvm.dylib` |
|  0.1% |       1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   1,244 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 94.4% |   1,174 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  4.2% |      52 | `WorkerThread::run`             | `libjvm.dylib` |
|  0.6% |       8 | `VMThread::run`                 | `libjvm.dylib` |
|  0.4% |       5 | `WatcherThread::run`            | `libjvm.dylib` |
|  0.3% |       4 | `ConcurrentGCThread::run`       | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   1,243 | `Thread::call_run` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|     % | Samples | Callee                                                   | Location       |
| ----: | ------: | -------------------------------------------------------- | -------------- |
| 99.7% |   1,171 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib` |
|  0.2% |       2 | `ServiceThread::service_thread_entry`                    | `libjvm.dylib` |
|  0.1% |       1 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 91.2% |   1,068 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
|  8.4% |      98 | `CompileQueue::get`                            | `libjvm.dylib` |
|  0.1% |       1 | `CompileTaskWrapper::~CompileTaskWrapper`      | `libjvm.dylib` |
|  0.1% |       1 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |
|  0.1% |       1 | `CompilationLog::log_compile`                  | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 69.9% |     746 | `C2Compiler::compile_method`    | `libjvm.dylib` |
| 28.2% |     301 | `Compiler::compile_method`      | `libjvm.dylib` |
|  0.8% |       9 | `ciEnv::ciEnv`                  | `libjvm.dylib` |
|  0.7% |       8 | `ciEnv::get_method_from_handle` | `libjvm.dylib` |
|  0.2% |       2 | `CompilationLog::log_compile`   | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee             | Location       |
| ----: | ------: | ------------------ | -------------- |
| 99.9% |     745 | `Compile::Compile` | `libjvm.dylib` |
|  0.1% |       1 | `Chunk::next_chop` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 48.3% |     360 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 34.5% |     257 | `Compile::Optimize`                      | `libjvm.dylib` |
| 14.2% |     106 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  1.5% |      11 | `CallGenerator::for_inline`              | `libjvm.dylib` |
|  0.7% |       5 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|     % | Samples | Callee                                                                       | Location                                               |
| ----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 84.8% |     442 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                             |
| 15.0% |      78 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
|  0.2% |       1 | `parseOptions(String[])`                                                     | `org.jetbrains.kotlin.preloading.Preloader`            |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % | Samples | Callee          | Location                                    |
| -----: | ------: | --------------- | ------------------------------------------- |
| 100.0% |     521 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|     % | Samples | Callee                     | Location                                          |
| ----: | ------: | -------------------------- | ------------------------------------------------- |
| 99.8% |     441 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |
|  0.5% |       2 | `acquireMethodAccessor()`  | `java.lang.reflect.Method`                        |
|  0.2% |       1 | `isCallerSensitive()`      | `java.lang.reflect.Method`                        |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|     % | Samples | Callee                          | Location                                                |
| ----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 99.8% |     440 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.2% |       1 | `<init>()`                      | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee           | Location                                               |
| -----: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% |     441 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000601008000`)

|      % | Samples | Callee           | Location                                     |
| -----: | ------: | ---------------- | -------------------------------------------- |
| 100.0% |     441 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000601009400`)

|      % | Samples | Callee                         | Location                                             |
| -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% |     441 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000601008000` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     441 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000601009400` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee                                           | Location                           |
| -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% |     441 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee                         | Location                                          |
| -----: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% |     441 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                                               | Location                                                                |
| ----: | ------: | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| 98.9% |     435 | `exec(MessageCollector, Services, CommonCompilerArguments)`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|  0.9% |       4 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |
|  0.2% |       1 | `loadClass(String)`                                                                  | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`                |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                                                   | Location                                      |
| -----: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 100.0% |     440 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                                         | Location                                      |
| -----: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% |     440 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                                                 | Location                                                |
| -----: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 100.0% |     440 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                                                                                             | Location                                                |
| -----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     440 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                          | Location                                      |
| ----: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| 97.9% |     426 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |
|  2.1% |       9 | `<clinit>()`                                                    | `org.jetbrains.kotlin.cli.common.ArgumentsKt` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|     % | Samples | Callee                                                         | Location                                                |
| ----: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 99.5% |     424 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|  0.5% |       2 | `getDefaultPerformanceManager()`                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee                                                                | Location                                     |
| -----: | ------: | --------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     426 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                                                                 | Location                                     |
| -----: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     426 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                                                                                                | Location                                                      |
| ----: | ------: | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 99.5% |     422 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                        | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`       |
|  0.2% |       1 | `<init>(CommonCompilerArguments, Services, Disposable, GroupingMessageCollector, PerformanceManager)` | `org.jetbrains.kotlin.cli.pipeline.ArgumentsPipelineArtifact` |
|  0.2% |       1 | `disposeRootInWriteAction(Disposable)`                                                                | `org.jetbrains.kotlin.cli.common.UtilsKt`                     |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                                                                              | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     424 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                                                                                                                        | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     424 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                                                                          | Location                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| 99.5% |     420 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`            | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                        |
|  0.5% |       2 | `reportToMessageCollector(BaseDiagnosticsCollector, MessageCollector, boolean)` | `org.jetbrains.kotlin.cli.common.fir.FirDiagnosticsCompilerResultsReporter` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|     % | Samples | Callee                           | Location                                                              |
| ----: | ------: | -------------------------------- | --------------------------------------------------------------------- |
| 57.4% |     241 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`      |
| 32.9% |     138 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`       |
|  8.3% |      35 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`        |
|  1.0% |       4 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmConfigurationPipelinePhase` |
|  0.5% |       2 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmWriteOutputsPhase`          |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Callee                                         | Location                                          |
| -----: | ------: | ---------------------------------------------- | ------------------------------------------------- |
| 100.0% |     420 | `phaseBody(PipelineContext, PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % | Samples | Callee                                                               | Location                                                         |
| -----: | ------: | -------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 100.0% |     420 | `phaseBody(LoggingContext, Object)`                                  | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
|   5.2% |      22 | `phaseBody(LoggingContext, Object)`                                  | `org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase`   |
|   1.9% |       8 | `phaseBody(LoggingContext, Object)`                                  | `org.jetbrains.kotlin.backend.common.phaser.ModuleLoweringPhase` |
|   0.5% |       2 | `runAfter(PhaseConfig, PhaserState, LoggingContext, Object, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`          |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 48.9% |     176 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 19.2% |      69 | `Matcher::match`                  | `libjvm.dylib` |
| 15.3% |      55 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  9.7% |      35 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  3.1% |      11 | `PhaseOutput::install_code`       | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 98.3% |     296 | `Compilation::Compilation`                     | `libjvm.dylib` |
|  1.0% |       3 | `Chunk::next_chop`                             | `libjvm.dylib` |
|  0.3% |       1 | `ExceptionHandlerTable::ExceptionHandlerTable` | `libjvm.dylib` |
|  0.3% |       1 | `Compilation::~Compilation`                    | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                                               | Location       |
| ----: | ------: | ---------------------------------------------------- | -------------- |
| 88.2% |     261 | `Compilation::compile_java_method`                   | `libjvm.dylib` |
| 11.1% |      33 | `ciEnv::register_method`                             | `libjvm.dylib` |
|  0.7% |       2 | `DebugInformationRecorder::DebugInformationRecorder` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |     296 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 42.9% |     112 | `Compilation::build_hir`              | `libjvm.dylib` |
| 38.3% |     100 | `Compilation::emit_lir`               | `libjvm.dylib` |
| 17.6% |      46 | `Compilation::emit_code_body`         | `libjvm.dylib` |
|  0.4% |       1 | `ciMethod::ensure_method_data`        | `libjvm.dylib` |
|  0.4% |       1 | `CodeBuffer::initialize_section_size` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 26.5% |      68 | `PhaseIdealLoop::optimize`     | `libjvm.dylib` |
| 23.0% |      59 | `Compile::optimize_loops`      | `libjvm.dylib` |
| 16.3% |      42 | `PhaseIterGVN::optimize`       | `libjvm.dylib` |
|  7.8% |      20 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |
|  6.2% |      16 | `PhaseCCP::PhaseCCP`           | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 15.9% |      28 | `PhaseLive::compute`                       | `libjvm.dylib` |
| 15.3% |      27 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| 13.6% |      24 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
| 10.8% |      19 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
| 10.2% |      18 | `PhaseChaitin::gather_lrg_masks`           | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 86.6% |     110 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| 11.0% |      14 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |
|  2.4% |       3 | `Chunk::next_chop`               | `libjvm.dylib` |

##### `_pthread_mutex_firstfit_lock_slow` (`libsystem_pthread.dylib`)

|      % | Samples | Callee               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% |     124 | `__psynch_mutexwait` | `libsystem_kernel.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|     % | Samples | Callee                                       | Location       |
| ----: | ------: | -------------------------------------------- | -------------- |
| 75.9% |      85 | `IR::IR`                                     | `libjvm.dylib` |
|  8.0% |       9 | `GlobalValueNumbering::GlobalValueNumbering` | `libjvm.dylib` |
|  7.1% |       8 | `IR::eliminate_null_checks`                  | `libjvm.dylib` |
|  6.3% |       7 | `IR::compute_use_counts`                     | `libjvm.dylib` |
|  0.9% |       1 | `IR::optimize_blocks`                        | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|     % | Samples | Callee                               | Location                   |
| ----: | ------: | ------------------------------------ | -------------------------- |
| 99.1% |     109 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib`             |
|  0.9% |       1 | `_platform_memset`                   | `libsystem_platform.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 29.4% |      32 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| 15.6% |      17 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |
| 15.6% |      17 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| 12.8% |      14 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
|  5.5% |       6 | `PhaseIdealLoop::build_loop_tree`      | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|     % | Samples | Callee                   | Location       |
| ----: | ------: | ------------------------ | -------------- |
| 90.6% |      96 | `Parse::do_call`         | `libjvm.dylib` |
| 13.2% |      14 | `Parse::do_field_access` | `libjvm.dylib` |
|  5.7% |       6 | `Parse::do_one_bytecode` | `libjvm.dylib` |
|  4.7% |       5 | `Parse::do_checkcast`    | `libjvm.dylib` |
|  2.8% |       3 | `Parse::array_load`      | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % | Samples | Callee                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |     106 | `Parse::do_one_block` | `libjvm.dylib` |
|   0.9% |       1 | `Parse::merge_common` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |     106 | `Parse::do_all_blocks`  | `libjvm.dylib` |
|   1.9% |       2 | `Parse::do_exits`       | `libjvm.dylib` |
|   0.9% |       1 | `ciMethod::method_data` | `libjvm.dylib` |
|   0.9% |       1 | `Parse::build_exits`    | `libjvm.dylib` |
|   0.9% |       1 | `PhaseGVN::transform`   | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % | Samples | Callee         | Location       |
| -----: | ------: | -------------- | -------------- |
| 100.0% |     106 | `Parse::Parse` | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|     % | Samples | Callee               | Location                  |
| ----: | ------: | -------------------- | ------------------------- |
| 96.2% |     102 | `__psynch_cvwait`    | `libsystem_kernel.dylib`  |
|  1.9% |       2 | `_pthread_cond_wait` | `libsystem_pthread.dylib` |
|  1.9% |       2 | `__gettimeofday`     | `libsystem_kernel.dylib`  |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 81.0% |      81 | `LinearScan::do_linear_scan`     | `libjvm.dylib` |
| 17.0% |      17 | `BlockList::iterate_forward`     | `libjvm.dylib` |
|  1.0% |       1 | `ControlFlowOptimizer::optimize` | `libjvm.dylib` |
|  1.0% |       1 | `LinearScan::assign_reg_num`     | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|     % | Samples | Callee                                | Location                  |
| ----: | ------: | ------------------------------------- | ------------------------- |
| 94.9% |      93 | `Monitor::wait`                       | `libjvm.dylib`            |
|  2.0% |       2 | `Mutex::lock`                         | `libjvm.dylib`            |
|  2.0% |       2 | `CompileTask::select_for_compilation` | `libjvm.dylib`            |
|  1.0% |       1 | `_pthread_mutex_firstfit_unlock_slow` | `libsystem_pthread.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 63.5% |      61 | `PredictedCallGenerator::generate` | `libjvm.dylib` |
| 58.3% |      56 | `ParseGenerator::generate`         | `libjvm.dylib` |
| 35.4% |      34 | `Compile::call_generator`          | `libjvm.dylib` |
|  4.2% |       4 | `Compile::optimize_inlining`       | `libjvm.dylib` |
|  4.2% |       4 | `LibraryIntrinsic::generate`       | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|     % | Samples | Callee                                                                        | Location       |
| ----: | ------: | ----------------------------------------------------------------------------- | -------------- |
| 98.9% |      93 | `PlatformMonitor::wait`                                                       | `libjvm.dylib` |
|  1.1% |       1 | `ThreadBlockInVMPreprocess<InFlightMutexRelease>::~ThreadBlockInVMPreprocess` | `libjvm.dylib` |

##### `IRScope::IRScope` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 98.8% |      84 | `GraphBuilder::GraphBuilder` | `libjvm.dylib` |
|  1.2% |       1 | `ciMethod::load_code`        | `libjvm.dylib` |
|  1.2% |       1 | `XHandlers::XHandlers`       | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      85 | `IRScope::IRScope` | `libjvm.dylib` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

|     % | Samples | Callee                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 94.0% |      79 | `GraphBuilder::iterate_all_blocks`   | `libjvm.dylib` |
|  3.6% |       3 | `BlockListBuilder::BlockListBuilder` | `libjvm.dylib` |
|  1.2% |       1 | `BlockBegin::try_merge`              | `libjvm.dylib` |
|  1.2% |       1 | `BlockBegin::iterate_preorder`       | `libjvm.dylib` |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

|     % | Samples | Callee                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 43.2% |      35 | `LinearScan::allocate_registers`      | `libjvm.dylib` |
| 23.5% |      19 | `LinearScan::assign_reg_num`          | `libjvm.dylib` |
| 12.3% |      10 | `LinearScan::build_intervals`         | `libjvm.dylib` |
|  7.4% |       6 | `LinearScan::compute_local_live_sets` | `libjvm.dylib` |
|  7.4% |       6 | `LinearScan::resolve_data_flow`       | `libjvm.dylib` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 91.1% |      72 | `GraphBuilder::invoke`       | `libjvm.dylib` |
|  7.6% |       6 | `GraphBuilder::access_field` | `libjvm.dylib` |
|  6.3% |       5 | `GraphBuilder::check_cast`   | `libjvm.dylib` |
|  3.8% |       3 | `GraphBuilder::new_instance` | `libjvm.dylib` |
|  3.8% |       3 | `BlockBegin::try_merge`      | `libjvm.dylib` |

##### `GraphBuilder::iterate_all_blocks` (`libjvm.dylib`)

|      % | Samples | Callee                                      | Location       |
| -----: | ------: | ------------------------------------------- | -------------- |
| 100.0% |      79 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |

##### `ThreadCritical::ThreadCritical` (`libjvm.dylib`)

|     % | Samples | Callee                              | Location                  |
| ----: | ------: | ----------------------------------- | ------------------------- |
| 98.7% |      75 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |
|  1.3% |       1 | `pthread_self`                      | `libsystem_pthread.dylib` |

##### `read(byte[], int, int)` (`java.util.zip.ZipInputStream`)

|     % | Samples | Callee                     | Location                            |
| ----: | ------: | -------------------------- | ----------------------------------- |
| 94.4% |      68 | `read(byte[], int, int)`   | `java.util.zip.InflaterInputStream` |
|  5.6% |       4 | `update(byte[], int, int)` | `java.util.zip.CRC32`               |

##### `read(byte[])` (`java.io.FilterInputStream`)

|      % | Samples | Callee                   | Location                       |
| -----: | ------: | ------------------------ | ------------------------------ |
| 100.0% |      72 | `read(byte[], int, int)` | `java.util.zip.ZipInputStream` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|     % | Samples | Callee                                           | Location       |
| ----: | ------: | ------------------------------------------------ | -------------- |
| 98.5% |      67 | `Java_java_util_zip_Inflater_inflateBytesBytes`  | `libzip.dylib` |
|  1.5% |       1 | `InterpreterRuntime::frequency_counter_overflow` | `libjvm.dylib` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Callee                                                        | Location                 |
| -----: | ------: | ------------------------------------------------------------- | ------------------------ |
| 100.0% |      68 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

|      % | Samples | Callee                      | Location                 |
| -----: | ------: | --------------------------- | ------------------------ |
| 100.0% |      68 | `inflate(byte[], int, int)` | `java.util.zip.Inflater` |

##### `Java_java_util_zip_Inflater_inflateBytesBytes` (`libzip.dylib`)

|     % | Samples | Callee                              | Location       |
| ----: | ------: | ----------------------------------- | -------------- |
| 74.6% |      50 | `inflate_fast`                      | `libzip.dylib` |
| 22.4% |      15 | `inflate`                           | `libzip.dylib` |
|  1.5% |       1 | `jni_ReleasePrimitiveArrayCritical` | `libjvm.dylib` |
|  1.5% |       1 | `jni_GetPrimitiveArrayCritical`     | `libjvm.dylib` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                             | Location                                                 |
| ----: | ------: | ---------------------------------- | -------------------------------------------------------- |
| 95.2% |      60 | `findClass(String)`                | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  3.2% |       2 | `findBootstrapClassOrNull(String)` | `java.lang.ClassLoader`                                  |
|  1.6% |       1 | `findClass(String)`                | `java.net.URLClassLoader`                                |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                                                                          | Location                |
| ----: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| 96.6% |      57 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |
|  3.4% |       2 | `postDefineClass(Class, ProtectionDomain)`                                      | `java.lang.ClassLoader` |
|  1.7% |       1 | `preDefineClass(String, ProtectionDomain)`                                      | `java.lang.ClassLoader` |

##### `defineClass(String, byte[], int, int)` (`java.lang.ClassLoader`)

|      % | Samples | Callee                                                    | Location                |
| -----: | ------: | --------------------------------------------------------- | ----------------------- |
| 100.0% |      58 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                                    | Location                                                 |
| ----: | ------: | ----------------------------------------- | -------------------------------------------------------- |
| 98.2% |      56 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`                                          |
| 17.5% |      10 | `loadClass(String)`                       | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  1.8% |       1 | `loadClass(String)`                       | `java.lang.ClassLoader`                                  |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|     % | Samples | Callee                  | Location                                                                                                      |
| ----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------------- |
| 58.9% |      33 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`                         |
| 53.6% |      30 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`                      |
| 10.7% |       6 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$2`                      |
|  8.9% |       5 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirInvokeResolveTowerExtension$enqueueResolverTasksForInvoke$3` |
|  5.4% |       3 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$4`                      |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

|     % | Samples | Callee     | Location                                                                             |
| ----: | ------: | ---------- | ------------------------------------------------------------------------------------ |
| 22.2% |       4 | `invoke()` | `org.jetbrains.kotlin.builtins.DefaultBuiltIns$$Lambda.0x0000000601752950`           |
| 11.1% |       2 | `invoke()` | `org.jetbrains.kotlin.cli.common.CLICompiler$$Lambda.0x000000060100a000`             |
| 11.1% |       2 | `invoke()` | `org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile$$Lambda.0x000000060137ba80` |
| 11.1% |       2 | `invoke()` | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass$$Lambda.0x000000060160fb50` |
| 11.1% |       2 | `invoke()` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000060181c200`    |

##### `getValue()` (`kotlin.SafePublicationLazyImpl`)

|     % | Samples | Callee     | Location                                                                                                   |
| ----: | ------: | ---------- | ---------------------------------------------------------------------------------------------------------- |
| 52.9% |       9 | `invoke()` | `kotlin.reflect.jvm.internal.DescriptorKProperty$$Lambda$0`                                                |
| 23.5% |       4 | `invoke()` | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer$$Lambda.0x00000006015d7920` |
| 11.8% |       2 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.impl.FirClassDeclaredMemberScopeImpl$$Lambda.0x000000060161dc00`          |
| 11.8% |       2 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.impl.AbstractFirUseSiteMemberScope$$Lambda.0x000000060162fb50`            |
|  5.9% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.java.FirLazyJavaDeclarationList$$Lambda.0x000000060160f2a8`                      |

##### `getValue()` (`kotlin.UnsafeLazyImpl`)

|     % | Samples | Callee     | Location                                                                                              |
| ----: | ------: | ---------- | ----------------------------------------------------------------------------------------------------- |
| 84.6% |      11 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver$$Lambda.0x0000000601686d48`                   |
|  7.7% |       1 | `invoke()` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaClass$$Lambda.0x0000000601608bd8` |
|  7.7% |       1 | `invoke()` | `org.jetbrains.kotlin.types.AbstractTypeApproximator$$Lambda.0x0000000601691dc8`                      |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|    % | Samples | Callee                            | Location                         |
| ---: | ------: | --------------------------------- | -------------------------------- |
| 8.3% |       1 | `throwParameterIsNullNPE(String)` | `kotlin.jvm.internal.Intrinsics` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5.0% |      88 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                   |
| 2.7% |      48 | `inflate_fast` (`libzip.dylib`) ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`              |
| 1.0% |      17 | `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                    |
| 0.8% |      15 | `PhaseLive::compute` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                  |
| 0.8% |      15 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                 |
| 0.7% |      12 | `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                      |
| 0.6% |      11 | `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                 |
| 0.6% |      10 | `PhaseChaitin::elide_copy` (`libjvm.dylib`) ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                               |
| 0.5% |       9 | `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                              |
| 0.5% |       8 | `LinearScanWalker::alloc_free_reg` (`libjvm.dylib`) ← `LinearScanWalker::activate_current` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                    |
| 0.5% |       8 | `__psynch_mutexwait` (`libsystem_kernel.dylib`) ← `_pthread_mutex_firstfit_lock_slow` (`libsystem_pthread.dylib`) ← `ThreadCritical::ThreadCritical` (`libjvm.dylib`) ← `Chunk::chop` ← `Chunk::next_chop` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                   |
| 0.4% |       7 | `inflate_table` (`libzip.dylib`) ← `inflate` ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |
| 0.3% |       6 | `LinearScanWalker::free_collect_inactive_fixed` (`libjvm.dylib`) ← `LinearScanWalker::alloc_free_reg` ← `LinearScanWalker::activate_current` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                  |
| 0.3% |       6 | `LinearScan::resolve_data_flow` (`libjvm.dylib`) ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                             |
| 0.3% |       6 | `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`) ← `PhaseIdealLoop::build_loop_late` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                    |
| 0.3% |       6 | `PhaseIFG::remove_node` (`libjvm.dylib`) ← `PhaseChaitin::Simplify` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                    |
| 0.3% |       5 | `PhaseCFG::schedule_pinned_nodes` (`libjvm.dylib`) ← `PhaseCFG::global_code_motion` ← `PhaseCFG::do_global_code_motion` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                    |
| 0.3% |       5 | `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                            |
| 0.3% |       5 | `__psynch_mutexwait` (`libsystem_kernel.dylib`) ← `_pthread_mutex_firstfit_lock_slow` (`libsystem_pthread.dylib`) ← `ThreadCritical::ThreadCritical` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::Label_Root` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                        |
| 0.3% |       5 | `PhaseLive::add_liveout` (`libjvm.dylib`) ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                       |
